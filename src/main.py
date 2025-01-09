from flask import Flask, jsonify
from sdtp import InvalidDataException
from sdtp  import SDML_BOOLEAN, SDML_DATE, SDML_DATETIME, SDML_NUMBER, SDML_PYTHON_TYPES, SDML_SCHEMA_TYPES, SDML_STRING, SDML_TIME_OF_DAY
from sdtp.sdtp_table import SDMLTable, SDMLFixedTable, SDMLDataFrameTable, RowTable, RemoteSDMLTable, SDMLTableFactory, RowTableFactory, RemoteSDMLTableFactory, FileTable, FileTableFactory, GCSTable, GCSTableFactory, HTTPTable, HTTPTableFactory
from sdtp.table_server import  TableServer, TableNotFoundException, ColumnNotFoundException
import os

app.url_map.strict_slashes = False

app.secret_key = os.environ['GALYLEO_SECRET_KEY']  # must agree with the secret key  for Galyleo in the hub's config.yaml

HUB_API_URL = os.environ['JUPYTERHUB_API_URL']
SERVICE_API_TOKEN =  os.environ['GALYLEO_SERVICE_API_TOKEN'] # must agree with the service API token for Galyleo in the hub's config.yaml
HUB_URL  = os.environ['JUPYTERHUB_URL'] 
GALYLEO_CLIENT_ID = os.environ['GALYLEO_CLIENT_ID'] 
OAUTH_CALLBACK_URL = '/services/galyleo/callback'

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
    # next_url = auth.get_next_url(cookie_state) or prefix
    next_url = "/services/hello/hi"
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

app = Flask(__name__)

@app.route("/services/galyleo/editor", methods=['GET', 'POST'])
def show_editor():
  """
  Return the Galyleo editor page (probably done through JLab)
  """

@app.route("/services/galyleo/publish",  methods=['POST'])
@authenticated
def publish_dashboard(user):
  """
  takes three arguments:
  1. .gd.json file to publish (a JSON string)
  2. name of the dashboard
  3. public -- a boolean which says this is hub users only/public
  Uses OAuth authentication from the Hub/Bearer token
  """


@app.route("/services/galyleo/view_dashboard",  methods=['GET', 'POST'])
@authenticated
def view_dashboard(user):
  """
  takes the name of the dashboard to view.  The name of the dashboard is user/dashboard-name
  Uses OAuth authentication from the Hub or a bearer token
  returns 403 if the user can't view the dashboard
  """
  

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
  
@app.route('/services/galyleo/get_table_names')
@authenticated
def get_table_names(user):
    '''
    Target for the /get_table_names route.  Returns the list of names of tables hosted by this server, as a simple list of strings.
    Shows only the tables accessible to this user.
    Parameters: none
    Errors: none
    '''
   
@app.route('/services/galyleo/get_tables')
@authenticated
def get_tables(user):
    '''
    Target for the /get_tables route.  Dumps a JSONIfied dictionary of the form:
    {table_name: <table_schema>}, where <table_schema> is a dictionary
    {"name": name, "type": type}
    Shows only the tables accessible to this user.

    Arguments:
            None
    '''
   

@app.route('/services/galyleo/get_table_schema')
@authenticated
def get_table_schema(user):
    '''
    Target for the /get_table_schema.  Returns the schema of the table as a list
    of objects.  Each object will contain the fields "name" and "type", where "type"
    is an SDML type.
    Returns 400 if the table is not found, 403 if the user is not authorized to view this table.
    Arguments:
            table_name: the name of the table
    '''

@app.route('/get_range_spec')
@authenticated
def get_range_spec(user):
    '''
    Target for the /get_range_spec route.  Makes sure that column_name and table_name are  specified in the call, then returns the
    range  spec [min_val, max_val] as a list. Aborts with a 400
    for missing arguments, missing table, bad column name or if there is no column_name in the arguments, and a 403 if the table is not authorized.

    Arrguments:
            None
    '''

@app.route('/get_all_values')
def get_all_values(user):
    '''
    Target for the /get_all_values route.  Makes sure that column_name and table_name are  specified in the call, then returns the
    sorted list of all distinct values in the column.    Aborts with a 400
    for missing arguments, missing table, bad column name or if there is no column_name in the arguments, and a 403 if the table is not authorized.

    Arguments:
            None
    '''
   
    

@app.route('/get_column')
@authenticated
def get_column(user):
    '''
    Target for the /get_column route.  Makes sure that column_name and table_name are  specified in the call, then returns the
    sorted list of all distinct values in the column.    Aborts with a 400
    for missing arguments, missing table, bad column name or if there is no column_name in the arguments, and a 403 if the table is not authorized.

    Arguments:
            None
    '''
    
@app.route('/get_filtered_rows', methods=['POST'])
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

# Initialization: Create a Table Server which has RemoteSDML Tables for all stored tables
# Also add routes to just get a dashboard using only the user/dashboard.gd.json name, not the full URL.  Or fix view to do this.
