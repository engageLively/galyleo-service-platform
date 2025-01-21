from sdtp import TableServer, InvalidDataException
from json import loads, dumps, JSONDecodeError
import galyleo_storage
from google.cloud.exceptions import NotFound
import permissions 
from urllib.parse import urlparse



'''
A middleware layer between the Web/REST API and the storage manager.  The objects here
manage the storagem, retrieval, and interface to persistent objects managed
by the storage manager.  Specifically, this module handles the publication, retrieval,
and storage of Galyleo Visualization Platform Dashboards and Global Data Plane
datasets
'''

class GalyleoObject:
  '''
  A Galyleo Object is a four-tuple: kind, owner, url, name.  URL is its external name and
  is used to manage permissions; owner is the owner of the object, and the name is the 
  object name.  The first thing the server should do is create a Galyleo object for each 
  incoming request, and that is what is manipulated by all of the object managers
  Properties:
    url: the url of the object -- its external name
    kind: the kind of the object -- ATM, either dashboards or tables
    owner: the user who owns the object
    name: the name of the object
  '''
  def __init__(self, url, kind, owner, name):
    
    self.url = url
    self.kind = kind
    self.owner = owner
    self.name = name

  def table_name(self):
    '''
    Only valid for objects of type 'tables': the name of the table which the table server
    uses to store the table
    '''
    return f'{self.owner}/{self.name}'
  
class GalyleoBadObjectException(Exception):
  '''
  An attempt to create a bad object (bad URL, bad kind...)
  '''
  def __init__(self, url, reason):
    self.url = url
    self.reason = reason
    self.message = f'Bad object {url}: {reason}'
    super.__init___(self.message)

def check_or_raise_exception(url, kind, name):
  '''
  kind must be dasboards or tables
  name must end with .gd.json if kind is dashboards, .sdml if kind is tables
  Parameters:
    url: url of the object
    kind: kind of the object
    name: name of the object
  Returns:
    No return
  Raises:
    GalyleoBadObjectException
  '''
  suffixes = {'dashboards': '.gd.json', 'tables': '.sdml'}
  if kind in suffixes.keys():
    if name.endswith(suffixes[kind]): return
    raise GalyleoBadObjectException(url, f'Objects of type {kind} must end with {suffixes[kind]} and {name} does not')
  raise GalyleoBadObjectException(url, f'Objects must be of type dashboards or tables, not {kind}')

  
def make_object_from_url(url, galyleo_root_url):
  '''
  Given an url, make a GalyleoObject from it.  The url must be of the form
  <root-url>/<kind>/<owner>/<name> and the name must have the appropriate suffix (.sdml
  for a table, .gd.json for a dashboard
  Parameters:
    url: an URL of the form  <root-url>/<kind>/<owner>/<name> 
  Raises:
    GalyleoBadObjectException if the url is in the wrong form
  '''
  components = urlparse(url)
  if f'{components.scheme}/{components.netloc}' != galyleo_root_url:
    raise GalyleoBadObjectException(url, f'Object urls must start with {galyleo_root_url}, not {components.scheme}/{components.netloc}')
  parts = components.path.split('/')
  if len(parts) != 4:
    # 4, not three, because component.path always starts with a /
    raise GalyleoBadObjectException(url, f'Object urls must be of the form {galyleo_root_url}/<tables or dashboards>/<owner>/<name>')
  kind = parts[1]
  owner = parts[2]
  name = parts[3]
  check_or_raise_exception(url, kind, name)
  return GalyleoObject(url, kind, owner, name)



def _get_table_(path):
  # A utility used to get the user name and table dictionary out of a path.
  # This is only called on a path returned from the storage manager's 
  # list_tables, which returns a list of the form "<user>/<table>.sdml"
  # Given "user/table.sdml", returns an object with "table_name": user/table
  # and table_dictionary: the table stored at user/table.sdml

  parts = path.split('/')
  # len(parts) == 2 by the definition 
  user = parts[-2]
  raw_table = parts[-1]
  table_dictionary = galyleo_storage.get_table(user, raw_table)
  return {
    "table_name": path,
    "table_dictionary": table_dictionary
  }

class GalyleoTableServer(TableServer):
  '''
  An extension of the SDTP TableServer for local caching.
  Since this must decode incoming URLs, it needs the root url 
  of the server.  Tables are of the form <root_url>/tables/<user>/<table>.sdml.
  '''
  def __init__(self, root_url):
    '''
    Initialize the table server
    Parameters:
      root_url: the URL of the Galyleo Server
      
    '''
    TableServer.__init__(self)
    self.root_url = f'{root_url}/tables'
    table_paths = galyleo_storage.list_tables()
    for path in table_paths:
      table_data = _get_table_(path)
      self.add_sdtp_table_from_dictionary(table_data["table_name"], table_data["table_dictionary"])
  
  def make_url(self, owner, table_name):
    '''
    Return the URL of the table table_name under user owner
    Parameters:
      owner: the owner of the table
      table_name: name of the table
    Returns:
      URL to the table
    '''
    return f'{self.root_url}/{owner}/{table_name}'
  
  def make_url_from_full_table_name(self, full_table_name):
    '''
    Return the URL of the table named full_table_name (owner/table_name)
    Parameters:
      full_table_name: the full table name (owner/table_name)
    Returns:
      URL to the table
    '''
    return f'{self.root_url}/{full_table_name}'
  
  def publish_table(self, user, table_name, table_object):
    '''
    Publish a table to the repository.  This just adds the table to the TableServer
    and stores the dictionary in the repo
    Parameters:
      user: the user publishing the table
      table_name: name of the table
      table_object: the table as a dictionary
    Returns
      the URL to access the table
    Raises
      An InvalidDataException if the table_object is not a table dictionary
    '''
    if not table_name.endswith('.sdml'):
      table_name  = table_name + '.sdml'
    self.add_sdtp_table_from_dictionary(f'{user}/{table_name}', table_object)
    galyleo_storage.put_table(user, table_name, table_object)
    return self.make_url(user, table_name)

  def delete_table(self, user, table_name):
    '''
    Delete a table from the server and the repository.  This just removes the table
    from the TableServer (self)
    and deletestores the dictionary in the repo
    Parameters:
      user: the user deleting  the table
      table_name: name of the table
      
    Returns
      URL to the table
    Raises
      Nothing
    '''
    if not table_name.endswith('.sdml'):
      table_name  = table_name + '.sdml'
    full_table_name = f'{user}/{table_name}'
    if full_table_name in self.servers:
      del self.servers[full_table_name]
    try:
      galyleo_storage.delete_table(user, table_name)
    except NotFound:
      pass
    return self.make_url(user, table_name)

class DashboardManager:
  '''
  A Manager that handles the publication and deletion of dashboards.  
  Like the GalyleoTableServer, it needs the root_url for returns
  '''
  def __init__(self, root_url):
    '''
    Initialize the manager with the root_url of the server
    Parameters:
      root_url: the root URL of the Galyleo server
    '''
    self.root_url = f'{root_url}/dashboards'

  def make_url(self, owner, dashboard_name):
    '''
    return the URL for the dashboard with name dashboard_name and owner owner
    Parameters
      owner: owner of the dashboard
      dashboard_name: name of the dashboard
    Returns:
      the URL of the dashboard
    '''
    return f'{self.root_url}/{owner}/{dashboard_name}'

  def add_dashboard(self, user, dashboard_name, dashboard_object):
    '''
    Put a dashboard in the repository under user/dashboard_name.gd.json.
    Checks that it's a dictionary or a JSON string that becomes a dictionary
    Parameters:
      user: the name of the user publishing the dashboard
      dashboard_name name of the dashboard
      dashboard: the dashboard file (a JSON string or a dictonary in the Galyleo intermediate form)
    Returns: 
      The URL of the dashboard
    Raises:
      ValueError if the dashboard_object isn't in the right format
      JSONDecodeError if the 
    '''
    # normalize the name
    if not dashboard_name.endswith('.gd.json'):
      dashboard_name = dashboard_name + '.gd.json'
    if type(dashboard_object) == str:
      # then it must be a JSON form of the file
      dashboard_object = loads(dashboard_object) # will throw a JSONDecodeError if it can't decode
    if type(dashboard_object) == dict: # Should do more rigorous checking; for now we assume it's right
      galyleo_storage.put_dashboard(user, dashboard_name, dashboard_object)
      return f'{self.root_url}/{user}/{dashboard_name}'
    else:
      raise ValueError(f'{repr(dashboard_object)} is not a valid dashboard')


  def delete_dashboard(self, user, dashboard_name):
    '''
    Delete the dashboard user/dashboard_name from the repository.
    Parameters:
      user: the name of the user deleting the dashboard
      dashboard_name name of the dashboard
    Returns: 
      the URL of the deleted dashboard 
    Raises:
      NotFound if it can't find the dashboard
    '''
    if not dashboard_name.endswith('.gd.json'):
      dashboard_name = dashboard_name + '.gd.json'
    url = f'{self.root_url}/{user}/{dashboard_name}'
    try:
      galyleo_storage.delete_dashboard(user, dashboard_name)
      return url
    except NotFound:
      raise GalyleoNotFoundException(url)

  def get_dashboard(self, user, dashboard_name):
    '''
    Return  the dashboard user/dashboard_name from the repository.
    Parameters:
      user: the name of the user deleting the dashboard
      dashboard_name name of the dashboard
    Returns: 
      The dashboard object.  None if the dashboard can't be found
    '''
    return galyleo_storage.get_dashboard(user, dashboard_name)

  def list_dashboards(self, user = "*"):
    '''
    List all the dashboards under user in the repository, or, if user
    is None, all the dashboards
    Parameters:
      user: the name of the user
    Returns: 
      list of URLs of the dashboards
    '''
    
    list_from_storage = galyleo_storage.list_dashboards(user)
    return [f'{self.root_url}/{dashboard}' for dashboard in list_from_storage]
  
class GalyleoNotFoundException(Exception):
  '''
  A Galyleo Object has not been found
  '''
  def __init__(self, url):
    self.message = f'Could not find object at URL {url}'
    self.url = url
    super.__init__(self.message)

class GalyleoNotPermittedException(Exception):
  '''
  The user doesn't have access to the requested object
  '''
  def __init__(self, url, user):
    self.message = f'User {user} is not permitted to access object at {url}'
    self.url = url
    self.user = user
    super.__init__(self.message)
  
class GalyleoObjectManager:
  '''
  The overarching manager for all tables and dashboards.  Manages the storage
  of dashboards and tables on disk and in memory, and manages permissions.  
  This is actually a very simple class, a thin overlay on the GalyleoTableServer,
  DashboardManager, and DatastoreManager.  Centralized in a single class to ensure
  that the various managers are consistent (specifically, that there's a 1:1 correspondence between Datastore entries, where permissions are kept, and
  the on-disk and in memory storage of dashboards and tables)
  '''
  def __init__(self, root_url, project, database, namespace):
    '''
    Create the permissions manager, galyleo_table_server and dashboard_manager.
    Of the three, the galyleo_table_server is exposed so that the Global Data
    Plae API is directly accessible
    Parameters:
      root_url: the root URL of the Galyleo server
      project: the Google project
      database: the database used to store objects
      namespace: the namespace for objects
      
    '''
    self.permissions_manager = permissions.DatastoreManager(project, database, namespace)
    self.galyleo_table_server = GalyleoTableServer(root_url)
    self.dashboard_manager = DashboardManager(root_url)

  def object_access_permitted(self, galyleo_object, user, user_is_hub_user):
    '''
    Check that the galyleo_objectcan be accessed by the user
    Parameters:
      galyleo_object: the GalyleoObject requested
      
      user: the name of the user requesting the object referenced by url
      user_is_hub_user: True iff the user is an accredited user of the hub
    Returns: 
      True if the object exists and can be accessed by the user, False otherwise
    

    '''
    url = galyleo_object.url
    users_permitted = self.permissions_manager.get_users(url)
    permitted = (permissions.PUBLIC in users_permitted) or ((permissions.HUB in users_permitted) and user_is_hub_user) or (user in users_permitted)
    return permitted
  
  def _get_object(self, galyleo_object):
    try:
      if galyleo_object.kind == 'dashboards':
        return self.dashboard_manager.get_dashboard(galyleo_object.owner, galyleo_object.name)
      else:  # galyleo_object.kind == 'tables'
        return self.galyleo_table_server.get_table(galyleo_object.table_name())
    except (NotFound, InvalidDataException):
      raise GalyleoNotFoundException(galyleo_object.url)

  
  def get_object_if_permitted(self, galyleo_object, user, user_is_hub_user):
    '''
    Check that the GalyleoObject  exists and can be accessed by the user
    Parameters:
      galyleo_object: the GalyleoObject requested
      user: the name of the user requesting the object referenced by url
      user_is_hub_user: True iff the user is an accredited user of the hub
    Returns: 
      The object
    Raises:
      GalyleoNotPermittedException if the user can't access this object
      GalyleoNotFoundException if the object can't be found

    '''

    permitted = self.object_access_permitted(galyleo_object, user, user_is_hub_user)
    
    if not permitted:
      raise GalyleoNotPermittedException(galyleo_object.url, user)
    
    return self._get_object(galyleo_object)
  
  def publish_dashboard(self, owner, dashboard_name, dashboard, share_list = None):
    '''
    Put a dashboard in the repository under owner/dashboard_name, ensuring that
    dashboard name ends with .gd.json
    Checks that it's a dictionary or a JSON string that becomes a dictionary
    Parameters:
      owner: the name of the owner publishing the dashboard
      dashboard_name name of the dashboard
      dashboard: the dashboard file (a JSON string or a dictonary in the Galyleo intermediate form)
      share_list: list of users to share the dashboard with.  HUB and PUBLIC are special users that denote classes of users
    Returns: 
      The URL of the dashboard
    Raises:
      ValueError if the dashboard_object isn't in the right format
      JSONDecodeError if the dashboard can't be turned into JSON
    '''
    url = self.dashboard_manager.add_dashboard(owner, dashboard_name, dashboard)
    self.permissions_manager.create_or_update_object(url, owner, share_list)

    
  def delete_dashboard(self, owner, dashboard_name):
    '''
    Delete the dashboard user/dashboard_name from the repository.
    Parameters:
      owner: the owner of the dashboard
      dashboard_name name of the dashboard
    Returns: 
      No return 
    Raises:
      GalyleoNotFoundException if it can't find the dashboard
    '''
    url  = dashboard_manager.delete_dashboard(owner, dashboard_name)
    self.permissions_manager.delete_object(url)


  def get_dashboard(self, galyleo_object,  user, user_is_hub_user):
    '''
    Return the dashboard in the GalyleoObject, requested by user
    Parameters:
      object: the GalyleoObject to get
      user: the name of the user requesting the dashboard
      user_is_hub_user: True iff the user is an accredited user of the hub
    Returns: 
      The dashboard object
    Raises:
      GalyleoNotPermittedError if the user can't access this dashboard
      GalyleoNotFoundError if the dashboard can't be found

    '''
    return self.get_object_if_permitted( galyleo_object, user, user_is_hub_user)
    
    
  def publish_table(self, owner, table_name, table, share_list = None):
      '''
      Put a table in the repository under owner/table_name.
      Checks that it's a valid SDML table
      Parameters:
        owner: the name of the owner publishing the table
        table_name name of the table
        table: the table file (a JSON string or an SDML Table)
        share_list: list of users to share the table with.  HUB and PUBLIC are special users that denote classes of users
      Returns: 
        The URL of the table
      Raises:
        ValueError if the table isn't in the right format
        JSONDecodeError if the table can't be decoded
      '''
      url = self.galyleo_table_server.publish_table(owner, table_name, table)
      self.permissions_manager.create_or_update_object(url, owner, share_list)

  def delete_table(self, owner, table_name):
    '''
    Delete the table user/table_name from the repository.
    Parameters:
      owner: the owner of the table
      table_name name of the table
    Returns: 
      No return 
    
    '''

    url = self.galyleo_table_server.delete_table(owner, table_name)
    self.permissions_manager.delete_object(url)
  
  def get_table(self, galyleo_object,  user, user_is_hub_user):
    '''
    Return the table in the GalyleoObject, requested by user
    Parameters:
      object: the GalyleoObject to get
      user: the name of the user requesting the table
      user_is_hub_user: True iff the user is an accredited user of the hub
    Returns: 
      The SDML table
    Raises:
      GalyleoNotPermittedError if the user can't access this table
      GalyleoNotFoundError if the table can't be found

    '''
    return self.get_object_if_permitted( galyleo_object, user, user_is_hub_user)

  def get_table_info(self, user, user_is_hub_user):
    '''
    Get the URLs/schemas of the tables that this user can access.  
    Parameters:
      user: user asking for table info
      user_is_hub_user: True iff the user is a registered user of the hub
    '''
    table_names = self.galyleo_table_server.servers.keys()
    table_specs = [{'url': self.galyleo_table_server.make_url_from_full_table_name(name), 'name': name} for name in table_names]
    user_specs = [spec for spec in table_specs if  self.object_access_permitted(spec['url'], user, user_is_hub_user)]
    result = {}
    for spec in user_specs:
      result[spec['url']] = self.galyleo_table_server.servers[spec['table_name']].schema # check this
    return result
  


#---------------------------------------------------------------------------------
# tests
#---------------------------------------------------------------------------------
import os
os.environ['GALYLEO_ROOT_URL'] = 'http://test.galyleo.com'
import requests

test_tables =[
  'electoral_college.sdml',
  'nationwide_vote.sdml',
  'nightingale.sdml',
  'presidential_margins.sdml',
  'presidential_vote.sdml',
  'presidential_vote_history.sdml'
]

samples_root_url = 'https://raw.githubusercontent.com/Global-Data-Plane/sdtp-examples/refs/heads/main/simple-table-example/tables/'

galyleo_storage.setup_tests()

table_values = {}

for table in test_tables:
  table_key = 'test/' + table # stored 
  table_values[table] = {
    "key": table_key,
    "table_dictionary": requests.get(f'{samples_root_url}/{table}').json()
  }

def _init_table_storage():
  for (name, object) in table_values.items():
    galyleo_storage.put_table("test", name, object["table_dictionary"]) 

def test_get_table():
  paths = galyleo_storage.list_tables()
  for path in paths:
    name = path[len("test/"):]
    value = _get_table_(path)
    object = table_values[name]
    assert(value["table_name"] == object["key"])
    assert(value["table_dictionary"] == object["table_dictionary"])

def test_table_server():
  _init_table_storage()
  server = GalyleoTableServer(os.environ['GALYLEO_ROOT_URL'])
  tables = set(galyleo_storage.list_tables())
  server_tables = set(server.servers.keys())
  assert(tables == server_tables)


def _get_user_and_table(path):
  parts = path.split("/")
  return (parts[0], parts[1])



def test_delete_table():
  _init_table_storage()
  server = GalyleoTableServer(os.environ['GALYLEO_ROOT_URL'])
  tables = galyleo_storage.list_tables()
  (user, table_name) = _get_user_and_table(tables[0])
  server.delete_table(user, table_name)
  tables_1 = galyleo_storage.list_tables()
  assert(tables_1 == tables[1:])
  assert(set(tables_1) == set(server.servers.keys()))
  (user, table_name) = _get_user_and_table(tables[1])
  table_name_trim = table_name[:-len('.sdml')]
  server.delete_table(user, table_name_trim)
  tables_2 = galyleo_storage.list_tables()
  assert(tables_2 == tables[2:])
  assert(set(tables_2) == set(server.servers.keys()))

def test_publish_table():
  _init_table_storage()
  tables = galyleo_storage.list_tables()
  galyleo_storage.clean_tables(TEST_USER)
  galyleo_storage.clean_tables(TEST_USER_1)
  tables_clean = galyleo_storage.list_tables()
  assert(len(tables_clean) == 0)
  server = GalyleoTableServer(os.environ['GALYLEO_ROOT_URL'])
  for (table_name, table_object) in table_values.items():
    server.publish_table('test', table_name, table_object["table_dictionary"])
  tables_1 = galyleo_storage.list_tables()
  stored_tables = set([object["key"] for object in table_values.values()])
  assert(set(tables_1) == stored_tables)
  galyleo_storage.clean_tables(TEST_USER)
  galyleo_storage.clean_tables(TEST_USER_1)
  server = GalyleoTableServer(os.environ['GALYLEO_ROOT_URL'])
  for (table_name, table_object) in table_values.items():
    table_name_1 = table_name[:-len('.sdml')]
    server.publish_table('test', table_name, table_object["table_dictionary"])
  tables_1 = galyleo_storage.list_tables()
  stored_tables = set([object["key"] for object in table_values.values()])
  assert(set(tables_1) == stored_tables)

sample_dashboard_root_url =  'https://raw.githubusercontent.com/engageLively/galyleo-examples/refs/heads/main/demos/'

dashboards = [
  'nightingale/nightingale.gd.json',
  'presidential-elections/elections-new.gd.json',
  'seaice/seaice.gd.json',
  'senate-elections/senate-elections.gd.json',
  'ufos/ufos.gd.json'
]

dashboard_manager = DashboardManager(os.environ['GALYLEO_ROOT_URL'])

TEST_USER = 'test'
TEST_USER_1 = 'test1'

def _make_dashboard_object(dashboard_path):
  parts = dashboard_path.split('/')
  return {
    "name": parts[1],
    "object": requests.get(f'{sample_dashboard_root_url}{dashboard_path}').json(),
    "url": f"{os.environ['GALYLEO_ROOT_URL']}/dashboards/{TEST_USER}/{parts[1]}",
    "url2": f"{os.environ['GALYLEO_ROOT_URL']}/dashboards/{TEST_USER_1}/{parts[1]}"
  }

dashboard_objects = [_make_dashboard_object(dashboard) for dashboard in dashboards]

def test_add_dashboard():
  galyleo_storage.clean_dashboards(TEST_USER)
  galyleo_storage.clean_dashboards(TEST_USER_1)
  for dashboard in dashboard_objects:
    result = dashboard_manager.add_dashboard(TEST_USER, dashboard["name"], dashboard["object"])
    assert(result == dashboard["url"])
    stored  = galyleo_storage.get_dashboard(TEST_USER, dashboard["name"])
    assert(stored == dashboard["object"])
  names = [f"{TEST_USER}/{dashboard['name']}" for dashboard in dashboard_objects]
  assert(set(names) == set(galyleo_storage.list_dashboards()))
  galyleo_storage.clean_dashboards(TEST_USER)
  galyleo_storage.clean_dashboards(TEST_USER_1)
  for dashboard in dashboard_objects:
    name = dashboard["name"][:-len('.gd.json')]
    result = dashboard_manager.add_dashboard(TEST_USER, name, dashboard["object"])
    assert(result == dashboard["url"])
    stored  = galyleo_storage.get_dashboard(TEST_USER, dashboard["name"])
    assert(stored == dashboard["object"])
  names = [f"{TEST_USER}/{dashboard['name']}" for dashboard in dashboard_objects]
  assert(set(names) == set(galyleo_storage.list_dashboards()))
  galyleo_storage.clean_dashboards(TEST_USER)
  galyleo_storage.clean_dashboards(TEST_USER_1)
  for dashboard in dashboard_objects:
    result = dashboard_manager.add_dashboard(TEST_USER, dashboard["name"], dumps(dashboard["object"]))
    assert(result == dashboard["url"])
    stored  = galyleo_storage.get_dashboard(TEST_USER, dashboard["name"])
    assert(stored == dashboard["object"])
  names = [f"{TEST_USER}/{dashboard['name']}" for dashboard in dashboard_objects]
  assert(set(names) == set(galyleo_storage.list_dashboards()))
  error_caught = False
  try:
    dashboard_manager.add_dashboard(TEST_USER, 'foo.gd.json', 'foo')
  except ValueError:
    error_caught = True
  assert error_caught, "Bad dashboard error not caught"

def test_delete_dashboard():
  galyleo_storage.clean_dashboards(TEST_USER)
  galyleo_storage.clean_dashboards(TEST_USER_1)
  for dashboard in dashboard_objects:
    dashboard_manager.add_dashboard(TEST_USER, dashboard["name"], dashboard["object"])
  names = set([f"{TEST_USER}/{dashboard['name']}" for dashboard in dashboard_objects])
  assert(set(names) == set(galyleo_storage.list_dashboards()))
  for dashboard in dashboard_objects:
    dashboard_manager.delete_dashboard(TEST_USER, dashboard["name"])
    names.remove(f'{TEST_USER}/{dashboard["name"]}')
    assert(set(names) == set(galyleo_storage.list_dashboards()))
  error_caught = False
  try:
    dashboard_manager.delete_dashboard(TEST_USER, dashboard_objects[0]["name"])
  except NotFound:
    error_caught = True
  assert error_caught, "Delete non-existing dashboard error not caught"

def test_list_dashboards():
  galyleo_storage.clean_dashboards(TEST_USER)
  galyleo_storage.clean_dashboards(TEST_USER_1)
  assert(dashboard_manager.list_dashboards() == [])
  assert(dashboard_manager.list_dashboards(TEST_USER) == [])
  assert(dashboard_manager.list_dashboards(TEST_USER_1) == [])
  for dashboard in dashboard_objects:
    dashboard_manager.add_dashboard(TEST_USER, dashboard["name"], dashboard["object"])
    dashboard_manager.add_dashboard(TEST_USER_1, dashboard["name"], dashboard["object"])
  urls_1 = set([dashboard["url"] for dashboard in dashboard_objects])
  urls_2 = set([dashboard["url2"] for dashboard in dashboard_objects])
  assert(set(dashboard_manager.list_dashboards(TEST_USER)) == urls_1)
  assert(set(dashboard_manager.list_dashboards(TEST_USER_1)) == urls_2)
  assert(set(dashboard_manager.list_dashboards()) == urls_2.union(urls_1))
  galyleo_storage.clean_dashboards(TEST_USER)
  galyleo_storage.clean_dashboards(TEST_USER_1)



def run_tests():
  galyleo_storage.clean_tables(TEST_USER)
  galyleo_storage.clean_tables(TEST_USER_1)
  _init_table_storage()
  test_get_table()
  test_table_server()
  test_delete_table()
  test_publish_table()
  test_add_dashboard()
  test_delete_dashboard()
  test_list_dashboards()

run_tests()