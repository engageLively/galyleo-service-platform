from sdtp import TableServer
from json import loads, dumps
import galyleo_storage
from google.cloud.exceptions import NotFound


'''
A middleware layer between the Web/REST API and the storage manager.  The objects here
manage the storagem, retrieval, and interface to persistent objects managed
by the storage manager.  Specifically, this module handles the publication, retrieval,
and storage of Galyleo Visualization Platform Dashboards and Global Data Plane
datasets
'''

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
    Initializae the table server
    Parameters:
      root_url: the URL of the Galyleo Server
    '''
    TableServer.__init__(self)
    self.root_url = root_url
    table_paths = galyleo_storage.list_tables()
    for path in table_paths:
      table_data = _get_table_(path)
      self.add_sdtp_table_from_dictionary(table_data["table_name"], table_data["table_dictionary"])


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

  def delete_table(self, user, table_name):
    '''
    Delete a table from the server and the repository.  This just removes the table
    from the TableServer (self)
    and deletestores the dictionary in the repo
    Parameters:
      user: the user deleting  the table
      table_name: name of the table
      
    Returns
      Nothing
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

class DashboardManager:
  '''
  A Manager that handles the publication and deletion of dashboards.  
  Like the GalyleoTableServer, it needs the root_url for returns
  '''
  def __init__(self, root_url):
    '''
    Initialize the manager with the root_url of the server
    Parameters:
      root_url: the root URL of the sahboard server
    '''
    self.root_url = f'{root_url}/dashboards'

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
    Delete the dashboard user/dashboard_name.gd.json from the repository.
    Parameters:
      user: the name of the user deleting the dashboard
      dashboard_name name of the dashboard
    Returns: 
      No return 
    Raises:
      NotFound if it can't find the dashboard
    '''
    if not dashboard_name.endswith('.gd.json'):
      dashboard_name = dashboard_name + '.gd.json'
    galyleo_storage.delete_dashboard(user, dashboard_name)

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