from flask import Flask, send_from_directory, make_response, redirect, request, session, abort, jsonify, render_template, flash # type: ignore
import requests # type: ignore
from sdtp import InvalidDataException # type: ignore
import os
from jupyterhub.services.auth import HubOAuth # type: ignore
from functools import wraps
from json import loads, dumps, JSONDecodeError
from galyleo_object import GalyleoObject, make_object_from_url, make_object_from_key, is_valid_kind_and_name, GalyleoBadObjectException
import permissions
import user_agents # type: ignore
import uuid
import io
import csv
from flask_cors import CORS # type: ignore
import datetime
import logging
import sys

logging.basicConfig(
    level=logging.DEBUG,
    handlers=[logging.StreamHandler(sys.stdout)]
)

from galyleo_object_manager import GalyleoObjectManager, GalyleoNotFoundException, GalyleoNotPermittedException


  # must agree with the secret key  for Galyleo in the hub's config.yaml

HUB_API_URL = os.environ['JUPYTERHUB_API_URL']
SERVICE_API_TOKEN = os.environ['GALYLEO_SERVICE_API_TOKEN']
HUB_URL = os.environ['JUPYTERHUB_URL']
GALYLEO_CLIENT_ID = os.environ['GALYLEO_CLIENT_ID']
OAUTH_CALLBACK_URL = '/services/galyleo/callback'
GALYLEO_ROOT_URL = os.environ['GALYLEO_ROOT_URL']
GALYLEO_PERMISSIONS_DATABASE = os.environ['GALYLEO_PERMISSIONS_DATABASE']
GALYLEO_PERMISSIONS_NAMESPACE = os.environ['GALYLEO_PERMISSIONS_NAMESPACE']
GOOGLE_PROJECT = os.environ['GOOGLE_PROJECT']
BUCKET_NAME = os.environ['BUCKET_NAME']
GALYLEO_EDITOR_URL = os.environ.get('GALYLEO_EDITOR_URL', 'https://engagelively.github.io/galyleo-dashboard/')

def _default_public_url():
  # add -public to the first part of the domain
  parts = HUB_URL.split('.')
  parts[0] = parts[0] + "-public"
  return ".".join(parts)

PUBLIC_URL = os.environ.get('PUBLIC_URL', _default_public_url())

app = Flask(__name__, static_url_path = '/services/galyleo/static')
app.url_map.strict_slashes = False
app.secret_key = uuid.uuid4().hex
CORS(app, supports_credentials=True)  # 🔓 Enable full CORS
LAST_USER_BACKUP = None # A datetime -- the last time the user list was backed up
BACKUP_INTERVAL = 24*3600 # A day in seconds -- could pass this in as an env variable

# Fail gracefully if GOOGLE_APPLICATION_CREDENTIALS is not set or if the file can't be
# opened

def _exit_with_error(msg):
  print(msg)
  exit(1)


GOOGLE_APPLICATION_CREDENTIALS = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')
if GOOGLE_APPLICATION_CREDENTIALS is None:
  _exit_with_error('Error!  GOOGLE_APPLICATION_CREDENTIALS is not set')

if not os.path.exists(GOOGLE_APPLICATION_CREDENTIALS): # type: ignore
  _exit_with_error(f'Credentials file {GOOGLE_APPLICATION_CREDENTIALS} does not exist')
  
galyleo_object_manager = GalyleoObjectManager(GOOGLE_PROJECT,GALYLEO_PERMISSIONS_DATABASE, GALYLEO_PERMISSIONS_NAMESPACE, BUCKET_NAME)


print(f'Raw callback URL: {HUB_URL}{OAUTH_CALLBACK_URL}')

def _sanitize_callback():
  if HUB_URL.endswith('/'):
    if OAUTH_CALLBACK_URL.startswith('/'):
      return HUB_URL[:-1] + OAUTH_CALLBACK_URL
    return HUB_URL + OAUTH_CALLBACK_URL
  if OAUTH_CALLBACK_URL.startswith('/'):
    return HUB_URL + OAUTH_CALLBACK_URL
  return f'{HUB_URL}/{OAUTH_CALLBACK_URL}'

CALLBACK_URI = _sanitize_callback()

print(f'Callback URL: {CALLBACK_URI}')
auth = HubOAuth(
    api_url=HUB_API_URL,
    api_token=SERVICE_API_TOKEN,
    oauth_client_id=GALYLEO_CLIENT_ID,
    oauth_redirect_uri=CALLBACK_URI,
    cache_max_age=60)

def is_browser(user_agent):
    ua = user_agents.parse(user_agent)
    return ua.is_pc or ua.is_mobile or ua.is_tablet

def oauth_ok():
    '''
    Return True iff this user agent permits OAuth authentication (is a browser)
    '''
    requestor = request.headers.get('User-Agent')
    if requestor and is_browser(requestor):
      return True
    if request.headers.get('Referer') or request.headers.get('Origin'):
        return True
    accept_header = request.headers.get('Accept', '')
    if "text/html" in accept_header:
        return True
    return False

@app.route('/services/galyleo/debug-headers')
def debug_headers():
    headers = {k: v for k, v in request.headers.items()}
    return headers  # Flask auto converts dict to JSON response

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

def get_user_from_token(user_token):
    print('Getting user from API token')
    headers = {"Authorization": f"token {user_token}"}
    response = requests.get(f"{HUB_API_URL}/user", headers=headers)
    if response.status_code == 200:
        result = response.json()
        print(f'Hub returns {repr(result)} as user')
        return result  
    return None

DEBUG = os.getenv('DEBUG_GALYLEO', 'false') == 'true'
DEBUG_USER = {'name': os.getenv("DEBUG_GALYLEO_USER", "debug_user")}

def _get_bearer_token(auth_header):
  parts = auth_header.split(" ")
  parts =[part for part in parts if len(part) > 0 and part != "token"]
  return parts[0]

def authenticated(f):
  """Decorator for authenticating with the Hub via OAuth or bearer token."""

  @wraps(f)
  def decorated(*args, **kwargs):
    # JupyterHub internal proxy sets this header — fastest path
    if "JupyterHub-User" in request.headers:
      username = request.headers["JupyterHub-User"]
      return f({"name": username}, *args, **kwargs)

    if DEBUG:
      return f(DEBUG_USER, *args, **kwargs)

    # Programmatic API access with a user bearer token
    if "Authorization" in request.headers:
      auth_header = (request.headers.get("Authorization") or "").strip()
      if auth_header.startswith("token "):
        user = get_user_from_token(_get_bearer_token(auth_header))
        if user:
          return f(user, *args, **kwargs)

    # Browser OAuth session
    token = session.get("token")
    user = auth.user_for_token(token) if token else None

    if user:
      return f(user, *args, **kwargs)
    elif oauth_ok():
      state = auth.generate_state(next_url=request.path)
      response = make_response(redirect(auth.login_url + f'&state={state}'))
      response.set_cookie(auth.state_cookie_name, state)
      return response
    else:
      return f({}, *args, **kwargs)

  return decorated

def _get_email(user):
  try:
    return user['name'] if type(user) == dict else user if type(user) == str else None
  except Exception:
    return None

@app.route("/services/galyleo/static/studio")
@app.route("/services/galyleo/static/studio/")
def serve_studio():
  return send_from_directory(os.path.join(app.root_path, "static", "studio"), "index.html")

@app.route("/services/galyleo/static/<path:filename>")
def serve_static_page(filename):
  static_dir = os.path.join(app.root_path, "static")
  full_path = os.path.join(static_dir, filename.rstrip('/'))
  if os.path.isdir(full_path):
    return send_from_directory(static_dir, os.path.join(filename.rstrip('/'), 'index.html'))
  return send_from_directory(static_dir, filename)

@app.route("/services/galyleo/config")
@authenticated
def get_config(user):
  '''
  Returns hub-level editor configuration consumed by the React app.
  PUBLISH_SERVER_URL: where dashboards are published (defaults to this service).
  TABLE_SERVER_URLS:  comma-separated list of SDTP server base URLs available
                      as table sources in the editor.
  '''
  publish_server = os.getenv('PUBLISH_SERVER_URL', GALYLEO_ROOT_URL)
  raw_table_servers = os.getenv('TABLE_SERVER_URLS', GALYLEO_ROOT_URL)
  table_servers = [u.strip() for u in raw_table_servers.split(',') if u.strip()]
  return jsonify({
    'publishServer': publish_server,
    'tableServers': table_servers,
  })

def _get_object_or_abort(kind, owner, name, user, user_is_hub_user):
  try:
    (valid, msg) = is_valid_kind_and_name(kind, name)
    if not valid:
      abort(404, f'{msg}: {request.base_url}')
    object = GalyleoObject(kind, owner, name)
    return galyleo_object_manager.get_object_if_permitted(object, user , user_is_hub_user)
  except (GalyleoNotFoundException, GalyleoNotPermittedException, GalyleoBadObjectException) as err:
      abort(404, err.message)
    
@app.route('/services/galyleo')
def respond_to_ping():
  '''
  The hub pings persistently, so answer...
  '''
  # Since this is called regularly, it's the perfect spot to do a user backup,
  # so we check to see if a user backup is required and, if so, do it
  if DEBUG:
    return 'OK'
  now = datetime.datetime.now()
  # try:
  #   update = LAST_USER_BACKUP is None or (now - LAST_USER_BACKUP).total_seconds() > BACKUP_INTERVAL
  # except NameError:
  #   update = True
  # if update:
  #   user_list = _list_users()
  #   backup_users(GOOGLE_PROJECT, GALYLEO_PERMISSIONS_DATABASE, GALYLEO_PERMISSIONS_NAMESPACE, HUB_URL, user_list)
  #   LAST_USER_BACKUP = now
  if is_browser( request.headers.get('User-Agent')):
    return redirect('/services/galyleo/greeting')
  else:
    return 'OK'



@app.route('/services/galyleo/data')
@authenticated
def render_greeting(user):
  email = user['name'] if user is not None and 'name' in user else None
  return render_template('greeting.html', email = email, routes = API_ROUTES, uuid=str(uuid.uuid4()))

@app.route("/services/galyleo/hello")
@authenticated
def hello(user):
   return repr(user)

def _get_required_tables(dashboard):
  # Get all the keys to the tables dictionary
  # for each filter, view, extract the table name
  # return the table dictionary with only the used keys
  pass

def _cleanse_dashboard(dashboard):
  # get the required tables for the dashboard
  # substitute the required tables for the tables in the dashoard
  pass

@app.route("/services/galyleo/<kind>/<owner>/<name>")
@authenticated
def get_object(user, kind, owner, name):
  email = _get_email(user)
  result = _get_object_or_abort(kind, owner, name, email, user != None)
  # if result is a dashboard, _cleanse it
  if type(result) == dict:
    return jsonify(result)
  else:
    return jsonify(result.to_dictionary()) # type: ignore



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

def _publish_object(email, kind, name, object, share_set, error_message):
  try:
    galyleo_object = GalyleoObject(kind,  email, name)
    galyleo_object_manager.publish_object(galyleo_object, object, share_set)
    return galyleo_object.object_key
  except (ValueError, JSONDecodeError):
      abort(400, error_message)

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
  email = _get_email(user)
  parms = _get_parameters_json( ["name", "dashboard"], ["share_list"])
  share_set =  set(parms["share_list"]) if "share_list" in parms else set()
  message = f"The dashboard parameter to {request.url} was not a valid dashboard"
  return _publish_object(email, 'dashboards', parms['name'], parms['dashboard'], share_set, message)

  
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
  email = _get_email(user)
  parms = _get_parameters_json(["name", "table"], ["share_list"])
  share_set =  set(parms["share_list"]) if "share_list" in parms else set()
  message = f"The table parameter to {request.url} was not a valid table"
  return _publish_object(email, 'tables', parms['name'], parms['table'], share_set, message)



@app.route('/services/galyleo/make_table_public')
@authenticated
def make_table_public(user):
  email = _get_email(user)
  name = request.args.get('name')
  galyleo_object = _object_from_name(name)  # returns a GalyleoObject
  # confirm it exists and user can access it (will abort with 400/403/404)
  _ = galyleo_object_manager.get_object_if_permitted(galyleo_object, email, email is not None)

  if galyleo_object.owner == email:
     galyleo_object_manager.update_user_access(galyleo_object, set({'{PUBLIC}'}))
     return _show_tables(email)
  else:
    abort(403, f"Only {galyleo_object.owner} can change the permissions of table {name}")

@app.route('/services/galyleo/make_dashboard_public')
@authenticated
def make_dashboard_public(user):
  email = _get_email(user)
  name = request.args.get('name')
  if not name:
    abort(400, "Missing required query parameter 'name'")

  galyleo_object = make_object_from_key(name)  # this is the GalyleoObject
  if galyleo_object.owner != email:
    abort(403, f"Only {galyleo_object.owner} can change the permissions of dashboard {name}")

  # ensure it exists and is accessible before changing perms / rewriting URLs
  dashboard_object = galyleo_object_manager.get_object_if_permitted(galyleo_object, email, email is not None)


  galyleo_object_manager.update_user_access(galyleo_object, set({'{PUBLIC}'}))

  # rewrite connector URLs from HUB -> PUBLIC, then republish if changed
  changed = False
  tables = dashboard_object.get('tables', {}) # type: ignore (dashboard_object is not None)
  for _, table in (tables.items() if isinstance(tables, dict) else []):
    try:
      current_url = table['connector']['url']
      if current_url == HUB_URL:
        table['connector']['url'] = PUBLIC_URL
        changed = True
    except Exception:
      pass

  if changed:
    _publish_object(email, 'dashboards', galyleo_object.name, dashboard_object, set({'PUBLIC'}), "")

  return view_dashboards(user)

    

@app.route('/services/galyleo/get_table_names')
@authenticated
def get_table_names(user):
  '''
  Target for the /get_table_names route.  Returns the list of names of tables hosted by this server, as a simple list of strings.
  Shows only the tables accessible to this user.
  Parameters:
      user: the user requesting the table names
  Errors: none
  '''
  email = _get_email(user)
  info = galyleo_object_manager.get_table_info(email, email != None)
  return jsonify([make_object_from_key(key).display_name() for key in info.keys()])

@app.route('/services/galyleo/get_table_schemas')
@authenticated
def get_table_schemas(user):
  '''
  Target for the /get_table_schemas route.  Returns the list of schemas of tables hosted by this server, as a simple list of strings.
  Shows only the tables accessible to this user.
  Parameters:
      user: the user requesting the table names
  Errors: none
  
  '''
  email = _get_email(user)
  raw_info = galyleo_object_manager.get_table_info(email, email != None)
  info = {}
  for (key, table) in raw_info.items():
    name = make_object_from_key(key).display_name()
    info[name] = table

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
     return make_object_from_url(table_name, GALYLEO_ROOT_URL)
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
    return galyleo_object_manager.get_object_if_permitted(object, user, user != None)
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
  email = _get_email(user)
  table = _get_table_if_permitted(parms['table'], email)
  return jsonify(table.schema) # type: ignore
  
    
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
  email = _get_email(user)
  table = _get_table_if_permitted(parms['table'], email)
  if table.column_names().index(parms['column']) < 0: # type: ignore
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
  email = _get_email(user)
  table_and_column = _get_table_and_column(email)
  return jsonify(table_and_column["table"].range_spec(table_and_column['column']))
  
    

@app.route('/services/galyleo/get_all_values')
@authenticated
def get_all_values(user):
  '''
  Target for the /get_all_values route.  Makes sure that column_name and table_name are  specified in the call, then returns the
  sorted list of all distinct values in the column.    Aborts with a 400
  for missing arguments, missing table, bad column name or if there is no column_name in the arguments, and a 403 if the table is not authorized.

  Arguments:
          None
  '''
  email = _get_email(user)
  table_and_column = _get_table_and_column(email)
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
  email = _get_email(user)
  table_and_column = _get_table_and_column(email)
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
  email = _get_email(user)
  table = _get_table_if_permitted(parms['table'], email)
  columns = parms['columns'] if 'columns' in parms.keys() else []
  filter = parms['filter'] if 'filter' in parms.keys() else None
  missing = set(columns) - set(table.column_names()) # type: ignore
  if len(missing) > 0:
    abort(400, f'Table {parms["table"]} does not have columns {missing}')
  try:
    result = jsonify(table.get_filtered_rows(filter, columns)) # type:ignore
    return result
  except InvalidDataException as err:
    abort(400, f'Error {err} in get_filtered_rows')

@app.route("/services/galyleo/dashboards/<owner>/<dashboard>")
@authenticated
def get_dashboard(user, owner, dashboard):
  email = _get_email(user)
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

# Turn off caching
@app.after_request
def add_no_cache_headers(response):
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

from routes import API_ROUTES
@app.route('/services/galyleo/greeting')
@authenticated
def show_home(user):
  email = _get_email(user)
  return render_template('greeting.html', navbar_contents = _gen_navbar('greeting', email), routes=API_ROUTES, email=email, uuid=str(uuid.uuid4()))
   

@app.route("/services/galyleo/show_upload_data_form")
@authenticated
def show_upload_data_form(user):
  email =_get_email(user)
  if email is None:
     flash("Must be logged in to upload tables")
     return redirect('/services/galyleo/greeting')
  tables = galyleo_object_manager.list_objects('tables', user)
  return  render_template('upload_data_form.html',  navbar_contents = _gen_navbar('show_upload_data_form', email), email=email, user_tables=tables, uuid=str(uuid.uuid4()))

@app.route("/services/galyleo/show_upload_dashboard_form")
@authenticated
def show_upload_dashboard_form(user):
  email =_get_email(user)
  if email is None:
     flash("Must be logged in to upload dashboards")
     return redirect('/services/galyleo/greeting')
  
  dashboards = galyleo_object_manager.list_objects('dashboards', email)
  return  render_template('upload_dashboard_form.html',  navbar_contents = _gen_navbar('show_upload_data_form', email), email=email, user_dashboard= dashboards, uuid=str(uuid.uuid4()))
  

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
    elif galyleo_object_manager.object_access_permitted(galyleo_object, email, email is not None):
      result["other"].append(path)
  return result

def _return_jsonified_objects(user, kind):
  email =_get_email(user) if user else None
  if email:
     dashboards = galyleo_object_manager.list_objects(kind, email)
     return jsonify(dashboards)
  else:
    return jsonify([])
  
@app.route('/services/galyleo/list_tables')
@authenticated
def list_tables(user):
   return _return_jsonified_objects(user, 'tables')

def _show_tables(email):
  tables = _get_accessible_objects('tables', email)
  return render_template('view_tables.html', navbar_contents = _gen_navbar('view_tables', email), email=email, tables=tables, uuid=str(uuid.uuid4()))

@app.route('/services/galyleo/view_tables')
@authenticated
def view_tables(user):
   email = _get_email(user) if user else None
   return _show_tables(email)
   


@app.route('/services/galyleo/list_dashboards')
@authenticated
def list_dashboards(user):
  '''
  API access to list the dashboards OWNED by this user
  '''
  return _return_jsonified_objects(user, 'dashboards')



@app.route('/services/galyleo/view_dashboards')
@authenticated
def view_dashboards(user):
  email =_get_email(user) if user else None
  dashboards = _get_accessible_objects('dashboards', email)
  return render_template('view_dashboards.html', navbar_contents = _gen_navbar('view_dashboards', email), email=email, dashboards=dashboards, uuid=str(uuid.uuid4()))

@app.route('/services/galyleo/login')
@authenticated
def login(user):
  return redirect('/services/galyleo/greeting')

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
      flash(str(error) if str(error) else f"Error in deleting {galyleo_object.display_name()}")
  else:
     flash(f'Only {galyleo_object.owner} can delete an object')
  return redirect(next_page)

@app.route('/services/galyleo/delete_table_confirm')
@authenticated
def confirm_delete_table(user):
  email = _get_email(user)
  table = request.args.get('name')
  return render_template('delete_table.html',navbar_contents = _gen_navbar('view_tables', email), email=email, table=table, uuid=str(uuid.uuid4()))

    
@app.route('/services/galyleo/delete_table')
@authenticated
def delete_table(user):
  # return _delete_object(_get_email(user), '/services/galyleo/view_tables')
  return _delete_object(_get_email(user), '/services/galyleo/view_tables')

@app.route('/services/galyleo/delete_dashboard_confirm')
@authenticated
def confirm_delete_dashboard(user):
  email = _get_email(user)
  dashboard = request.args.get('name')
  return render_template('delete_dashboard.html', navbar_contents = _gen_navbar('view_tables', email), email=email, dashboard=dashboard, uuid=str(uuid.uuid4()))

@app.route('/services/galyleo/delete_dashboard')
@authenticated
def delete_dashboard(user):
  # return _delete_object(_get_email(user), '/services/galyleo/view_dashboards')
  return _delete_object(_get_email(user), '/services/galyleo/view_dashboards')


def _get_object_if_permitted(name, email):
  galyleo_object = make_object_from_key(name)
  return galyleo_object_manager.get_object_if_permitted(galyleo_object, email, email is not None)


@app.route('/services/galyleo/view_table')
@authenticated
def view_table(user):
  email = _get_email(user) if user and type(user) == dict else None
  table_name = request.args.get('table')
  table = _get_object_if_permitted(table_name, email)
  return render_template(
    'view_table.html',
    navbar_contents = _gen_navbar('view_tables', email),
    email=email,
    table_name=table_name,
    schema = table.schema, #type: ignore
    uuid=str(uuid.uuid4()))

@app.route("/services/galyleo/view_dashboard_as_json")
@authenticated
def view_dashboard_as_json(user):
  email =_get_email(user) if user and type(user) == dict else None
  dashboard = request.args.get('dashboard')
  galyleo_object = make_object_from_key(dashboard)
  try:
    dashboard_object = galyleo_object_manager.get_object_if_permitted(galyleo_object, email, email is not None)
    # this is really stupid; on disk it's a JSON file, we read it
    # into  an object, then jsonify it again -- we need to pass
    # a raw argument into get_object_if_permitted, returning json 
    # if raw = True.  But for now...
    dashboard_json_object = dumps(dashboard_object, indent=2)
    return render_template('view_dashboard.html', navbar_contents = _gen_navbar('view_dashboard', email), email=email, dashboard_name=dashboard,  dashboard = dashboard_json_object, uuid=str(uuid.uuid4()))
  except(GalyleoNotPermittedException, GalyleoNotFoundException) as err:
    flash(err.message)
    return redirect('/services/galyleo/view_dashboards')

@app.route('/services/galyleo/view_dashboard')
@authenticated
def view_dashboard(user):
  email = _get_email(user) if user and type(user) == dict else None
  dashboard_name = request.args.get('dashboard')
  galyleo_object = make_object_from_key(dashboard_name)
  if galyleo_object_manager.object_access_permitted(galyleo_object, email, email is not None):
    dashboard_url = f'{GALYLEO_ROOT_URL}/services/galyleo/{dashboard_name}'
    return redirect(f'{GALYLEO_EDITOR_URL}?dashboard={dashboard_url}')
  else:
    flash(f'User {email} does not have permission to access {dashboard_name}')
    return redirect('/services/galyleo/view_dashboards')

@app.route('/services/galyleo/download_table')
@authenticated
def download_table(user):
  parms = _get_parameters_get(['table'])
  email = _get_email(user)
  table = _get_table_if_permitted(parms['table'], email)
  schema = table.schema
  rows = table.get_filtered_rows(None, [])
  output = io.StringIO()
  writer = csv.writer(output)
  writer.writerow([col['name'] for col in schema])
  writer.writerows(rows)
  table_name = parms['table'].split('/')[-1].replace('.sdml', '')
  response = make_response(output.getvalue())
  response.headers['Content-Type'] = 'text/csv; charset=utf-8'
  response.headers['Content-Disposition'] = f'attachment; filename="{table_name}.csv"'
  return response

@app.route('/services/galyleo/share_object', methods=['POST'])
@authenticated
def share_object(user):
  email = _get_email(user)
  object_name = request.form.get('object_name')
  user_list = request.form.get('share_list')
  selected_users = loads(user_list) if user_list is not None else []
  if bool(request.form.get('hub_shared')):
        selected_users.append(permissions.HUB)
  if bool(request.form.get('public_shared')):
      selected_users.append(permissions.PUBLIC)
  galyleo_object = make_object_from_key(object_name)
  galyleo_object_manager.update_user_access(galyleo_object, set(selected_users))
  prev_page = request.form.get('prev_page')
  # return jsonify({'email': email, 'object_name': object_name, 'selected_users': selected_users})
  return redirect(prev_page if prev_page is not None else '/services/galyleo/greeting')

def _show_share_form(user, next_url):
  name = request.args['name']
  email = _get_email(user)
  galyleo_object = make_object_from_key(name)
  if email != galyleo_object.owner:
    flash(f'Only {galyleo_object.owner} can change the sharing of {name}, not {email}')
    return redirect('/services/galyleo/greeting')
  allowed_users = galyleo_object_manager.permissions_manager.get_users(galyleo_object)
  share_list = list(set(allowed_users) - {permissions.HUB, permissions.PUBLIC, email})
  template = render_template(
    "share_form_new.html",
    navbar_contents = _gen_navbar('', email),
    email=email,
    object_name=name,
    share_list = share_list,
    prev_page = f'{HUB_URL}/services/galyleo/{next_url}',
    post_page = f'{HUB_URL}/services/galyleo/share_object',
    hub_shared = permissions.HUB in allowed_users,
    public_shared = permissions.PUBLIC in allowed_users,
    uuid=str(uuid.uuid4()))
  return template
   
  

@app.route('/services/galyleo/share_table')
@authenticated
def show_share_table_form(user):
  return _show_share_form(user, 'view_tables')

@app.route('/services/galyleo/share_dashboard')
@authenticated
def show_share_dashboard_form(user):
  return _show_share_form(user, 'view_dashboards')


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=int(os.getenv('GALYLEO_PORT', 80)))