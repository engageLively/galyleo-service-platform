from flask import Flask, Response, send_from_directory, make_response, redirect, request, session, abort,  jsonify, render_template, flash
import requests
from sdtp import InvalidDataException
from sdtp  import SDML_BOOLEAN, SDML_DATE, SDML_DATETIME, SDML_NUMBER, SDML_PYTHON_TYPES, SDML_SCHEMA_TYPES, SDML_STRING, SDML_TIME_OF_DAY
from sdtp.sdtp_table import SDMLTable, SDMLFixedTable, SDMLDataFrameTable, RowTable, RemoteSDMLTable, SDMLTableFactory, RowTableFactory, RemoteSDMLTableFactory, FileTable, FileTableFactory, GCSTable, GCSTableFactory, HTTPTable, HTTPTableFactory
from sdtp.table_server import  TableServer, TableNotFoundException, ColumnNotFoundException
import os
from jupyterhub.services.auth import HubOAuth, HubAuth
from functools import wraps
from json import loads, dumps, JSONDecodeError
from galyleo_object import GalyleoObject, make_object_from_url, make_object_from_key, check_or_raise_exception, make_object_from_url, GalyleoBadObjectException
import permissions

from galyleo_object_manager import GalyleoObjectManager, GalyleoNotFoundException, GalyleoNotPermittedException



  # must agree with the secret key  for Galyleo in the hub's config.yaml

HUB_API_URL = os.environ['JUPYTERHUB_API_URL']
SERVICE_API_TOKEN =  os.environ['GALYLEO_SERVICE_API_TOKEN'] # must agree with the service API token for Galyleo in the hub's config.yaml
HUB_URL  = os.environ['JUPYTERHUB_URL'] 
GALYLEO_CLIENT_ID = os.environ['GALYLEO_CLIENT_ID'] 
OAUTH_CALLBACK_URL = '/services/galyleo/callback'
GALYLEO_ROOT_URL = os.environ['GALYLEO_ROOT_URL']
GALYLEO_PERMISSIONS_DATABASE = os.environ['GALYLEO_PERMISSIONS_DATABASE']
GALYLEO_PERMISSIONS_NAMESPACE = os.environ['GALYLEO_PERMISSIONS_NAMESPACE']
GOOGLE_PROJECT = os.environ['GOOGLE_PROJECT']
BUCKET_NAME = os.environ['BUCKET_NAME']
JUPYTER_HUB_API_TOKEN = os.environ['JUPYTER_HUB_API_TOKEN']

app = Flask(__name__, static_url_path = '/services/galyleo/static')
app.url_map.strict_slashes = False
app.secret_key = os.environ['GALYLEO_SECRET_KEY']

galyleo_object_manager = GalyleoObjectManager(GOOGLE_PROJECT,GALYLEO_PERMISSIONS_DATABASE, GALYLEO_PERMISSIONS_NAMESPACE, BUCKET_NAME)

auth = HubOAuth(
    api_url = HUB_API_URL,
    api_token=SERVICE_API_TOKEN,
    oauth_client_id = GALYLEO_CLIENT_ID,
    # client_secret = '12345678',
    oauth_redirect_uri = f'{HUB_URL}{OAUTH_CALLBACK_URL}',
    cache_max_age=60)

token_auth = HubAuth(
    api_url = HUB_API_URL,
    api_token=SERVICE_API_TOKEN
  )

def oauth_ok():
    '''
    Return True iff this user agent permits OAuth authentication (is a browser)
    '''
    if request.headers.get('Referer') or request.headers.get('Origin'):
        return True
    accept_header = request.headers.get('Accept', '')
    if "text/html" in accept_header:
        return True
    return False

@app.route('/services/galyleo/foo')
def foo():
   return 'Foo!'
    
@app.route(OAUTH_CALLBACK_URL)
def oauth_callback():
    code = request.args.get('code', None)
    if code is None:
        return "Forbidden", 403

    # validate state field
    arg_state = request.args.get('state', None)
    cookie_state = request.cookies.get(auth.state_cookie_name)
    if arg_state is None or arg_state != cookie_state:
        # state doesn't match
        return "Forbidden", 403

    token = auth.token_for_code(code)
    # store token in session cookie
    session["token"] = token
    next_url = auth.get_next_url(cookie_state) or GALYLEO_ROOT_URL
    # next_url = "/services/hello/hi"
    response = make_response(redirect(next_url))
    return response

def authenticated(f):
    """Decorator for authenticating with the Hub via OAuth"""

    @wraps(f)
    def decorated(*args, **kwargs):
        token = session.get("token")

        if token:
            user = auth.user_for_token(token)
        else:
            user = None

        if user:
            return f(user, *args, **kwargs)
        elif oauth_ok():
            # redirect to login url on failed auth
            state = auth.generate_state(next_url=request.path)
            response = make_response(redirect(auth.login_url + f'&state={state}'))
            response.set_cookie(auth.state_cookie_name, state)
            return response
        else:
            return f({}, *args, **kwargs) # Call f with an empty user

    return decorated

# app = Flask(
#   __name__,
#   static_url_path="/services/galyleo/static",
#   static_folder="static"
# )

def _get_email(user):
  try:
    return user['name']
  except Exception:
    return None

@app.route("/services/galyleo/static/<path:filename>")
def serve_static_page(filename):
  return send_from_directory("static", filename)

def _get_object_or_abort(kind, owner, name, user, user_is_hub_user):
  try:
    check_or_raise_exception(request.base_url, kind, name)
    object = GalyleoObject(kind, owner, name)
    return galyleo_object_manager.get_object_if_permitted(object, user , user_is_hub_user)
  except (GalyleoNotFoundException, GalyleoNotPermittedException, GalyleoBadObjectException) as err:
      abort(404, err.message)
    
@app.route('/services/galyleo')
def respond_to_ping():
  '''
  The hub pings persistently, so answer...
  '''
  return 'OK'

@app.route('/services/galyleo/data')
@authenticated
def render_greeting(user):
  email = user['name'] if user is not None and 'name' in user else None
  routes = ['foo', 'bar', 'baz']
  additional_routes = ['foo1', 'bar1', 'baz1']
  return render_template('greeting.html', email = email, routes = routes, additional_routes = additional_routes)

@app.route("/services/galyleo/hello")
@authenticated
def hello(user):
   if user is not None:
      return f'Hello, {user['name']}'
   else:
      return 'User is None'

@app.route("/services/<kind>/<owner>/<name>")
@authenticated
def get_object(user, kind, owner, name):
  return jsonify(_get_object_or_abort(kind, owner, name, user, user != None))



def _get_parameters_json(required, optional = []):
  '''
  Get the parameters from the JSON post body and return them as a dictionary
  Aborts with a 400 if any of the required parameters are missing
  Parameters:
    required: list of names of the required parameters
    optional: list of names of the optional parameters (if empty, there are none)
  Returns:
    dictionary of the parameters
  Side Effects: 
    Aborts with a 400 if there are missing required parameters
  '''
  result = {}
  missing = []
  if optional is None:
     optional = []
  if request.json is None or type(request.json) != dict:
      missing = required
  else:
    for parameter_name in required:
      if parameter_name in request.json:
        result[parameter_name] = request.json[parameter_name]
      else: missing.append(parameter_name)
    for parameter_name in optional:
      if parameter_name in request.json:
        result[parameter_name] = request.json[parameter_name]
  if missing != []:
    missing_string = ',' .join(missing)
    abort(400, f'Required parameters {missing_string} missing from {request.base_url}')
  return result
  

@app.route("/services/galyleo/publish",  methods=['POST'])
@authenticated
def publish_dashboard(user):
  """
  takes three arguments:
  1. dashboard: JSON form of a Galyleo Dashboard
  2. name: name of the dashboard
  3. share_list: a list of users that this dashboard is shared with.  Optional.  There are two distinguished users: PUBLIC (share with everyone) and HUB (share with all HUB users).
  Returns an URL to the published dashboard
  """
  if user is None:
    abort(403, "Only registered hub users can publish dashboards")
  parms = _get_parameters_json( ["name", "dashboard"], ["share_list"])
  try:
    return galyleo_object_manager.publish_dashboard(user, parms["name"], parms["dashboard"], set(parms["share_list"]) if parms["share_list"] else set())
  except (ValueError, JSONDecodeError):
      abort(400, f"The dashboard parameter to {request.url} was not a valid dashboard")

  
@app.route("/services/galyleo/publish_data",  methods=['POST'])
@authenticated
def publish_dataset(user):
  """
  takes three arguments:
  1. .sdml file to publish (a JSON string)
  2. name of the dataset
  3. public -- a boolean which says this is hub users only/public
  Uses OAuth authentication from the Hub or a bearer token
  """
  if user is None:
    abort(403, "Only registered hub users can publish data")
  parms = _get_parameters_json(["name", "table"], ["share_list"])
  try:
    return galyleo_object_manager.publish_table(user, parms["name"], parms["table"], parms["share_list"] if parms["share_list"] else ["user"])
  except (ValueError, JSONDecodeError):
      abort(400, f"The dashboard parameter to {request.url} was not a valid table")

@app.route('/services/galyleo/get_table_names')
@authenticated
def get_table_names(user):
  '''
  Target for the /get_table_names route.  Returns the list of urls of tables hosted by this server, as a simple list of strings.
  Shows only the tables accessible to this user.
  Parameters:
      user: the user requesting the table names
  Errors: none
  '''
  info = galyleo_object_manager.get_table_info(user, user != None)
  return jsonify(info.keys())

@app.route('/services/galyleo/get_table_schemas')
@authenticated
def get_table_schemas(user):
  '''
  Target for the /get_table_names route.  Returns the list of urls of tables hosted by this server, as a simple list of strings.
  Shows only the tables accessible to this user.
  Parameters:
      user: the user requesting the table names
  Errors: none
  '''
  info = galyleo_object_manager.get_table_info(user, user != None)
  return jsonify(info)

def _get_parameters_get(required, optional = []):
  '''
  Get the parameters from the URL (URL parameters) and return them as a dictionary
  Aborts with a 400 if any of the required parameters are missing
  Parameters:
    required: list of names of the required parameters
    optional: list of names of the optional parameters (if empty, there are none)
  Returns:
    dictionary of the parameters
  Side Effects: 
    Aborts with a 400 if there are missing required parameters
  '''
  result = {}
  missing = set(required) - set(request.args.keys())
  if len(missing) > 0:
    abort(400, f'{request.base_url} is missing required parameters {missing}') 
  for parm in required:
    result[parm] = request.args.get(parm)
  for parm in optional:
     value = request.args.get(parm)
     if value != None:
        result[parm] = value
  return result

def _object_from_name(table_name):
  '''
  The table name can be passed as either a full URL, OR tables/owner/name OR
  owner/name.  For each of these, make the GalyleoObject and return it
  Parameters:
    table_name: the name of the table as sent
  Returns:
    The table name in the form GALYLEO_ROOT_URL/tables/owner/name
  '''
  if table_name.startswith('http'):
     return make_object_from_url(table_name)
  elif table_name.startswith('tables'):
    return make_object_from_key(table_name)
  else:
    return make_object_from_key(f'tables/{table_name}')
  
def _get_table_if_permitted(table_name, user):
  '''
  Get a table for the user if permitted, aborting with an error if the
  table can't be found or if the user isn't able to access the table
  Parameters:
    table_name: the name of the table
    user: the id of the user
  Returns:
    The table
  Side Effects: 
    Aborts with the appropriate code in the event that the table name is bad,
    the table can't be found or the table can't be accessed
  '''
  try:
    object =  _object_from_name(table_name)
    return galyleo_object_manager.object_if_permiited(object, user, user != None)
  except GalyleoBadObjectException as err:
    abort(400, err.message)
  except GalyleoNotPermittedException as err:
    abort(403, err.message)
  except GalyleoNotFoundException as err:
    abort(404, err.message)
   

@app.route('/services/galyleo/get_table_schema', methods=['GET'])
@authenticated
def get_table_schema(user):
  '''
  Target for the /get_table_schema route.  Returns the schema of the table as a list
  of objects.  Each object will contain the fields "name" and "type", where "type"
  is an SDML type.
  Returns 400 if the table is not found, 403 if the user is not authorized to view this table.
  Arguments:
          table_url: the url of the table
  '''
  parms = _get_parameters_get(['table'])
  table = _get_table_if_permitted(table, user)
  return jsonify(table.schema)
  
    
def _get_table_and_column(user):
  '''
  Get the table and column name from the parameter list, and validate that the 
  user can access the table, that the table exists, and that the table has the 
  referenced column.  Aborts with an error if any validation fails; otherwise,
  returns the table and column name in a dictionary
  Parameters:
    user: the user requesting the table
  Returns:
    a dictionary with two entries, table, the requested table, and the name of the requested column
  Side Effects:
    aborts with an error code if any validation fails
  '''
  parms = _get_parameters_get(['table', 'column'])
  table = _get_table_if_permitted(parms['table'], user)
  if table.column_names().index(parms['column']) < 0:
     abort(400, f'table {parms["table"]} does not have column {parms["column"]}')
  return {
     "table": table, "column": parms['column']
  }

   

@app.route('/services/galyleo/get_range_spec', methods=['GET'])
@authenticated
def get_range_spec(user):
  '''
  Target for the /get_range_spec route.  Makes sure that column_name and table_name are  specified in the call, then returns the
  range  spec [min_val, max_val] as a list. Aborts with a 400
  for missing arguments, missing table, bad column name or if there is no column_name in the arguments, and a 403 if the table is not authorized.

  Parameters:
          None
  '''
  table_and_column = _get_table_and_column(user)
  return jsonify(table_and_column["table"].range_spec(table_and_column['column']))
  
    

@app.route('/services/galyleo/get_all_values')
def get_all_values(user):
  '''
  Target for the /get_all_values route.  Makes sure that column_name and table_name are  specified in the call, then returns the
  sorted list of all distinct values in the column.    Aborts with a 400
  for missing arguments, missing table, bad column name or if there is no column_name in the arguments, and a 403 if the table is not authorized.

  Arguments:
          None
  '''
  table_and_column = _get_table_and_column(user)
  return jsonify(table_and_column["table"].all_values(table_and_column['column']))
   
    

@app.route('/services/galyleo/get_column')
@authenticated
def get_column(user):
  '''
  Target for the /get_column route.  Makes sure that column_name and table_name are  specified in the call, then returns the
  sorted list of all distinct values in the column.    Aborts with a 400
  for missing arguments, missing table, bad column name or if there is no column_name in the arguments, and a 403 if the table is not authorized.

  Arguments:
          None
  '''
  table_and_column = _get_table_and_column(user)
  return jsonify(table_and_column["table"].get_column(table_and_column['column']))

  
    
@app.route('/services/galyleo/get_filtered_rows', methods=['POST'])
@authenticated
def get_filtered_rows(user):
  '''
  Get the filtered rows from a request.   Gets the filter_spec from the filter  field in the body, the table name from the table field
  in the body.  If there is a columns field in the body, returns
  onlyt the named columns.  If there is no filter_spec, returns all rows using server.get_rows().
  Aborts with a 400 if there is no table, or if check_valid_spec or get_filtered_rows throws an InvalidDataException, or if the filter_spec is not valid JSON.

  Arguments:
      None
  Returns:
      The filtered rows as a JSONified list of lists
  '''
  parms = _get_parameters_json(['table'], ['columns', 'filter'])
  
  table = _get_table_if_permitted(parms['table'], user)
  columns = parms['columns'] if 'columns' in parms.keys() else []
  filter = parms['filter'] if 'filter' in parms.keys() else None
  missing = set(columns) - set(table.column_names())
  if len(missing) > 0:
    abort(400, f'Table {parms["table"]} does not have columns {missing}')
  try:
    return jsonify(table.get_filtered_rows(filter, columns))
  except InvalidDataException as err:
    abort(400, f'Error {err} in get_filtered_rows')

@app.route("/services/galyleo/dashboards/<owner>/<dashboard>")
@authenticated
def get_dashboard(user, owner, dashboard):
  email = user['name'] if user and type(user) == dict else None
  galyleo_object = GalyleoObject('dashboards', owner, dashboard)
  try:
    dashboard_object = galyleo_object_manager.get_object_if_permitted(galyleo_object, email, email is not None)
    return jsonify(dashboard_object)
  except GalyleoNotPermittedException as err:
    abort(403, err.message)
  except GalyleoNotFoundException as err:
    abort(404, err.message)

#------------------------------------UI Methods--------------------#

  
def _gen_navbar(active, email = None):
  def gen_link(link, active):
    class_val = 'active' if link[1] == active else 'inactive'
    return {"link": f"/services/galyleo/{link[1]}", "text": link[0], "class": class_val}
  
  base_links = [
    ('Home', 'greeting'),
    ('View Tables', 'view_tables'),
    ('View Dashboards', 'view_dashboards')
  ]
  unloggedin_links = [
    ('Login', 'login')
  ]
  loggedin_links = [
    ('Upload Table', 'show_upload_data_form'),
    ('Upload Dashboard', 'show_upload_dashboard_form')
  ]

  links = base_links + (unloggedin_links if email is None else loggedin_links)
  result  = [gen_link(link, active) for link in links]
  return result

@app.route('/services/galyleo/greeting')
@authenticated
def show_home(user):
  email = user['name']
  return render_template('greeting.html', navbar_contents = _gen_navbar('greeting', email), email=email)
   

@app.route("/services/galyleo/show_upload_data_form")
@authenticated
def show_upload_data_form(user):
  if user is None:
     flash("Must be logged in to upload tables")
     return redirect('/services/galyleo/greeting')
  tables = galyleo_object_manager.list_objects('tables', user)
  email = user['name']
  return  render_template('upload_data_form.html',  navbar_contents = _gen_navbar('show_upload_data_form', email), email=email, user_tables=tables)

@app.route("/services/galyleo/show_upload_dashboard_form")
@authenticated
def show_upload_dashboard_form(user):
  if user is None:
     flash("Must be logged in to upload dashboards")
     return redirect('/services/galyleo/greeting')
  email = user['name']
  dashboards = galyleo_object_manager.list_objects('dashboards', email)
  return  render_template('upload_dashboard_form.html',  navbar_contents = _gen_navbar('show_upload_data_form', email), email=email, user_dashboard= dashboards)
  

def _get_accessible_objects(kind, email):
  paths = galyleo_object_manager.list_objects(kind)
  result = {
    "user": [],
    "other": []
  }
  for path in paths:
    galyleo_object = make_object_from_key(path)
    if email and galyleo_object.owner == email:
      result["user"].append(path)
    elif galyleo_object_manager.object_access_permitted(galyleo_object, email):
      result["other"].append(path)
  return result


@app.route('/services/galyleo/view_tables')
@authenticated
def view_tables(user):
   email = user['name'] if user else None
   tables = _get_accessible_objects('tables', email)
   return render_template('view_tables.html', navbar_contents = _gen_navbar('view_tables', email), email=email, tables=tables)

@app.route('/services/galyleo/view_dashboards')
@authenticated
def view_dashboards(user):
  email = user['name'] if user else None
  dashboards = _get_accessible_objects('dashboards', email)
  return render_template('view_dashboards.html', navbar_contents = _gen_navbar('view_dashboards', email), email=email, dashboards=dashboards)

@app.route('/services/galyleo/login')
@authenticated
def login(user):
  pass

def _upload_object(kind, user, next_page):
  owner = _get_email(user)
  file_object = request.files['file']
  data = file_object.read().decode('utf-8')
  galyleo_object = GalyleoObject(kind, owner, file_object.filename)
  galyleo_object_manager.publish_object(galyleo_object, data)
  return redirect(next_page)

@app.route('/services/galyleo/upload_table', methods=['POST'])
@authenticated
def upload_table(user):
  return _upload_object('tables', user, '/services/galyleo/view_tables')


@app.route('/services/galyleo/upload_dashboard', methods=['POST'])
@authenticated
def upload_dashboard(user):
  return _upload_object('dashboards', user, '/services/galyleo/view_dashboards')

def _delete_object(email, next_page):
  object_name = request.args.get('name')
  galyleo_object = make_object_from_key(object_name)
  if galyleo_object.owner == email:
    try:
      galyleo_object_manager.delete_object(galyleo_object)
    except Exception as error:
      flash(error.message)
  else:
     flash(f'Only {galyleo_object.owner}')
  return redirect(next_page)
    
@app.route('/services/galyleo/delete_table')
@authenticated
def delete_table(user):
  _delete_object(_get_email(user), '/services/galyleo/view_tables')



def _get_object_if_permitted(name, email):
  galyleo_object = make_object_from_key(name)
  return galyleo_object_manager.get_object_if_permitted(galyleo_object, email, email is not None)


@app.route('/services/galyleo/view_table')
@authenticated
def view_table(user):
  email = user['name'] if user and type(user) == dict else None
  table_name = request.args.get('table')
  table = _get_object_if_permitted(table_name, email)
  return render_template('view_table.html', navbar_contents = _gen_navbar('view_tables', email), email=email, table_name=table_name,  schema = table.schema)

@app.route("/services/galyleo/view_dashboard_as_json")
@authenticated
def view_dashboard_as_json(user):
  email = user['name'] if user and type(user) == dict else None
  dashboard = request.args.get('dashboard')
  galyleo_object = make_object_from_key(dashboard)
  try:
    dashboard_object = galyleo_object_manager.get_object_if_permitted(galyleo_object, email, email is not None)
    return render_template('view_dashboard.html', navbar_contents = _gen_navbar('view_dashboard', email), email=email, dashboard_name=dashboard,  dashboard = dashboard_object)
  except(GalyleoNotPermittedException, GalyleoNotFoundException) as err:
    flash(err.message)
    return redirect('/services/galyleo/view_dashboards')

@app.route('/services/galyleo/view_dashboard')
@authenticated
def view_dashboard(user):
  email = user['name'] if user and type(user) == dict else None
  dashboard_name = request.args.get('dashboard')
  galyleo_object = make_object_from_key(dashboard_name)
  if galyleo_object_manager.object_access_permitted(galyleo_object, email, email is not None):
    return redirect(f'/services/galyleo/static/published/index.html?dashboard={HUB_URL}/services/galyleo/{dashboard_name}') 
  else:
    flash(f'User {email} does not have permission to access {dashboard_name}')
    return redirect('/services/galyleo/view_dashboards')

@app.route('/services/galyleo/share_object', methods=['POST'])
@authenticated
def share_object(user):
  email = _get_email(user)
  object_name = request.form.get('object_name')
  selected_users = loads(request.form.get('user_list'))
  galyleo_object = make_object_from_key(object_name)
  galyleo_object_manager.update_user_access(galyleo_object, set(selected_users))
  prev_page = request.form.get('prev_page')
  # return jsonify({'email': email, 'object_name': object_name, 'selected_users': selected_users})
  return redirect(prev_page)



def _hub_users():
  response = requests.get(f'{HUB_API_URL}/users', headers={"Authorization": f"token {JUPYTER_HUB_API_TOKEN}"})
  user_list = response.json()
  return [user["name"] for user in user_list] + [permissions.HUB, permissions.PUBLIC]

def _show_share_form(user, next_url):
  name = request.args['name']
  email = _get_email(user)
  galyleo_object = make_object_from_key(name)
  if email != galyleo_object.owner:
    flash(f'Only {galyleo_object.owner} can change the sharing of {name}, not {email}')
    return redirect('/services/galyleo/greeting')
  users = set(_hub_users()) - {email} # sharing permissions on the owner can't be changed
  allowed_users = galyleo_object_manager.permissions_manager.get_users(galyleo_object)
  user_struct_list = [{"name": user, "permitted": user in allowed_users} for user in users]
  return render_template("share_form.html", navbar_contents = _gen_navbar('', email), email=email, object_name=name,  users = user_struct_list, prev_page = f'{HUB_URL}/services/galyleo/{next_url}')
   
  

@app.route('/services/galyleo/share_table')
@authenticated
def show_share_table_form(user):
  _show_share_form(user, 'view_tables')

@app.route('/services/galyleo/share_dashboard')
@authenticated
def show_share_dashboard_form(user):
  _show_share_form(user, 'view_dashboards')


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=os.getenv('GALYLEO_PORT', 80))