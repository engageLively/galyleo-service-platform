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
# auth = HubOAuth(api_token=os.environ['JUPYTERHUB_API_TOKEN'], cache_max_age=60)
auth = HubOAuth(
    api_url = HUB_API_URL,
    api_token=SERVICE_API_TOKEN,
    oauth_client_id = GALYLEO_CLIENT_ID,
    # client_secret = '12345678',
    oauth_redirect_uri = f'{HUB_URL}'/services/galyleo/callback',
    cache_max_age=60)

token_auth = HubAuth(
    api_url = HUB_API_URL,
    api_token=SERVICE_API_TOKEN
  )

@app.route('/services/hello/callback')
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

print(auth._login_url())
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
        else:
            # redirect to login url on failed auth
            state = auth.generate_state(next_url=request.path)
            response = make_response(redirect(auth.login_url + f'&state={state}'))
            response.set_cookie(auth.state_cookie_name, state)
            return response

    return decorated

app = Flask(__name__)

@app.route("/services/galyleo/editor", methods=['GET', 'POST'])
def show_editor():
  """
  Return the Galyleo editor page (probably done through JLab)
  """

@app.route("/services/galyleo/publish", , methods=['POST'])
@authenticated
def publish_dashboard():
  """
  takes three arguments:
  1. .gd.json file to publish (a JSON string)
  2. name of the dashboard
  3. public -- a boolean which says this is hub users only/public
  Uses OAuth authentication from the Hub
  """
  
@app.route("/services/galyleo/publish_token", , methods=['POST'])
def publish_dashboard_token():
  """
  API version of publish.  
  takes three arguments:
  1. .gd.json file to publish (a JSON string)
  2. name of the dashboard
  3. public -- a boolean which says this is hub users only/public.
  Uses token  authentication
  """

@app.route("/services/galyleo/view", , methods=['GET', 'POST'])
def view_public_dashboard():
  """
  takes the name of the dashboard to view.  The name of the dashboard is user/dashboard-name
  """
  
@app.route("/services/galyleo/view_private", , methods=['GET', 'POST'])
def view_public_dashboard():
  """
  takes the name of the dashboard to view.  The name of the dashboard is user/dashboard-name
  """

@app.route("/services/galyleo/publish_data", , methods=['POST'])
@authenticated
def publish_dataset():
  """
  takes three arguments:
  1. .sdml file to publish (a JSON string)
  2. name of the dataset
  3. public -- a boolean which says this is hub users only/public
  Uses OAuth authentication from the Hub
  """
  
@app.route("/services/galyleo/publish_data_token", , methods=['POST'])
def publish_dataset_token():
  """
  API version of publish_dataset.  
  """
  takes three arguments:
  1. .sdml file to publish (a JSON string)
  2. name of the dataset
  3. public -- a boolean which says this is hub users only/public
  Uses OAuth authentication from the Hub
  """

# Remaining routes are from SDTP....pull them tomorrow
