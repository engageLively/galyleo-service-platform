from sdtp import TableServer, InvalidDataException
from json import loads, dumps, JSONDecodeError
from  galyleo_storage import GalyleoStorageManager
from google.cloud.exceptions import NotFound
import permissions 
from galyleo_object import GalyleoObject, GalyleoBadObjectException, make_object_from_key

'''
A middleware layer between the Web/REST API and the storage manager.  The objects here
manage the storagem, retrieval, and interface to persistent objects managed
by the storage manager.  Specifically, this module handles the publication, retrieval,
and storage of Galyleo Visualization Platform Dashboards and Global Data Plane
datasets
'''

def _get_table_(path, storage_manager):
  # A utility used to get the user name and table dictionary out of a path.
  # This is only called on a path returned from the storage manager's 
  # list_tables, which returns a list of the form "<user>/<table>.sdml"
  # Given "user/table.sdml", returns an object with "table_name": user/table
  # and table_dictionary: the table stored at user/table.sdml

  parts = path.split('/')
  # len(parts) == 2 by the definition 
  user = parts[-2]
  raw_table = parts[-1]
  table_dictionary = storage_manager.get_table(user, raw_table)
  return {
    "table_name": path,
    "table_dictionary": table_dictionary
  }



  
class GalyleoNotFoundException(Exception):
  '''
  A Galyleo Object has not been found
  '''
  def __init__(self, url):
    self.message = f'Could not find object at URL {url}'
    self.url = url
    super().__init__(self.message)

class GalyleoNotPermittedException(Exception):
  '''
  The user doesn't have access to the requested object
  '''
  def __init__(self, url, user):
    self.message = f'User {user} is not permitted to access object at {url}'
    self.url = url
    self.user = user
    super().__init__(self.message)

def _trim_prefix(list_of_strings, prefix):
  return [string[len(prefix):] for string in list_of_strings]

PATTERN = {
  'dashboards' : '*.gd.json',
  'tables': '*.sdml'
}


  
class GalyleoObjectManager:
  '''
  The overarching manager for all tables and dashboards.  Manages the storage
  of dashboards and tables on disk and in memory, and manages permissions.  
  This is actually a very simple class, a thin overlay on the GalyleoTableServer,
  DashboardManager, and DatastoreManager.  Centralized in a single class to ensure
  that the various managers are consistent (specifically, that there's a 1:1 correspondence between Datastore entries, where permissions are kept, and
  the on-disk and in memory storage of dashboards and tables)
  '''
  def __init__(self, project, database, namespace, bucket_name):
    '''
    Create the permissions manager, galyleo_table_server and dashboard_manager.
    Of the three, the galyleo_table_server is exposed so that the Global Data
    Plae API is directly accessible
    Parameters:
  
      project: the Google project
      database: the database used to store objects
      namespace: the namespace for objects
      bucket_name: the name of the bucket for Galyleo storage
      
    '''
    self.storage_manager = GalyleoStorageManager(bucket_name)
    self.permissions_manager = permissions.DatastoreManager(project, database, namespace)
    self.galyleo_table_server = TableServer()
    table_paths = self.list_objects('tables')
    for path in table_paths:
      table_data = self.storage_manager.get_object(make_object_from_key(path))
      self.galyleo_table_server.add_sdtp_table_from_dictionary(path, table_data)

  def list_objects(self, kind, user='*'):
    '''
    Return the list of objects of kind  kind stored in the repo under user user.
    Parameters:
      kind: the kind of objects to list
      user: the user pattern for users to get.  This is a string, in regex form, which 
            defaults to * (all users)
    Returns:
      a list of strings to the object paths
    '''
    object_paths = self.storage_manager.all_blobs_matching_pattern(f'{kind}/{user}/{PATTERN[kind]}')
    return object_paths

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
    users_permitted = self.permissions_manager.get_users(galyleo_object)
    permitted = (permissions.PUBLIC in users_permitted) or ((permissions.HUB in users_permitted) and user_is_hub_user) or (user in users_permitted)
    return permitted
  
  def _get_object(self, galyleo_object):
    try:
      if galyleo_object.kind == 'dashboards':
        return self.storage_manager.get_object(galyleo_object)
      else:  # galyleo_object.kind == 'tables'
        return self.galyleo_table_server.get_table(galyleo_object.object_key)
    except (NotFound, InvalidDataException):
      raise GalyleoNotFoundException(galyleo_object.object_key)

  
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
      raise GalyleoNotPermittedException(galyleo_object.object_key, user)
    
    return self._get_object(galyleo_object)
  
  def update_user_access(self, galyleo_object, user_set={}):
    '''
    Set the users for galyleo_object to user set.  Work through this method rather than
    the corresponding permissions_manager method, because this method ensures that owner 
    is always in the user list
    Parameters:
      galyleo_object: the GalyleoObject to udpate the user set for
      user_set: the set of updated_users
    Returns:
      none
    '''
    # check to make sure the object exists
    current_users = self.permissions_manager.get_users(galyleo_object)
    if current_users is not None:
      user_set.add(galyleo_object.owner)
      self.permissions_manager.set_users(galyleo_object, user_set)

  def _validate_table(self, sdml_table):
    '''
    Validate the sdml table
    '''
    pass
  
  def _validate_dashboard(self, dashboard_object):
    '''
    Validate dashboard.  When implemented, make sure we can create a dashboard
    from the data.  For now, everytbing is valid
    '''
    pass
  
  def publish_object(self, galyleo_object,  object_data, share_set = {}):
    '''
    Put an object in the repository galyleo.object_key
    Checks that it's a dictionary that matches galyleo_object.kind or a JSON string
    Parameters:
      galyleo_object: the GalyleoObject to store
      object_data: the object  file (a JSON string or a dictonary of the appropriate type)
      share_set: set  of users to share the object with.  HUB and PUBLIC are special users that denote classes of users
    Returns: 
      No return
    Raises:
      ValueError if the object isn't in the right format
      JSONDecodeError if the dashboard can't be turned into JSON
    '''
    object_to_write = object_data if type(object_data) == str else dumps(object_data)
    object_to_load = loads(object_data) if type(object_data) == str else object_data
    if galyleo_object.kind == 'dashboards':
      self._validate_dashboard(object_to_load)
    if galyleo_object.kind == 'tables':
      object_to_load = self._validate_table(object_to_load)
      self.galyleo_table_server.add_sdtp_table_from_dictionary(galyleo_object.object_key, object_to_load)
    share_set.add(galyleo_object.owner)
    self.storage_manager.put_object(galyleo_object, object_to_write)
    self.permissions_manager.create_or_update_object(galyleo_object, share_set)
    
  def delete_object(self, galyleo_object):
    '''
    Delete the dashboard user/dashboard_name from the repository.
    Parameters:
      galyleo_obejct: the object to remove
    Returns: 
      No return 
    Raises:
      GalyleoNotFoundException if it can't find the object
    '''
    self.storage_manager.delete_object(galyleo_object)
    self.permissions_manager.delete_object(galyleo_object)
    if galyleo_object.object_key in self.galyleo_table_server.servers:
      del self.galyleo_table_server.servers[galyleo_object.object_key]

  def clean_objects(self, kind, user_pattern = '*'):
    '''
    Delete all the objects of kind kind for all the users matching  user_pattern
    Parameters:
      kind: the kind of object to delete (must be 'dashboards' or 'tables')
      user_pattern: a glob/regex pattern for the objects of users to delete
    '''
    object_keys = self.list_objects(kind, user_pattern)
    galyleo_objects = [make_object_from_key(key) for key in object_keys]
    for object in galyleo_objects:
      self.delete_object(object)


  def get_table_info(self, user, user_is_hub_user):
    '''
    Get the URLs/schemas of the tables that this user can access.  
    Parameters:
      user: user asking for table info
      user_is_hub_user: True iff the user is a registered user of the hub
    '''
    table_names = self.galyleo_table_server.servers.keys()
    table_names = [name for name in table_names if self.object_access_permitted(make_object_from_key(name), user, user_is_hub_user)]
    result = {}
    for name in table_names:
      result[name] = self.galyleo_table_server.servers[name].schema
    return result
  


#---------------------------------------------------------------------------------
# tests
#---------------------------------------------------------------------------------
import os
os.environ['GALYLEO_ROOT_URL'] = 'http://test.galyleo.com'
import requests

test_tables =[
  {"name": 'electoral_college.sdml', "owner":  "test"},
  {"name": 'nationwide_vote.sdml', "owner":  "test"},
  {"name": 'nightingale.sdml', "owner": "test"},
  {"name": 'presidential_margins.sdml', "owner":  "test2"},
  {"name": 'presidential_vote.sdml', "owner":  "test2"},
  {"name": 'presidential_vote_history.sdml', "owner":  "test2"},
]


samples_root_url = 'https://raw.githubusercontent.com/Global-Data-Plane/sdtp-examples/refs/heads/main/simple-table-example/tables/'

table_objects = [
  {
    "galyleo_object": GalyleoObject('tables', object['owner'], object['name']),
    "object_data": requests.get(f'{samples_root_url}/{object["name"]}').json()
  } for object in test_tables
]

def store_tables(bucket_name, project, database, namespace):
    storage_manager = GalyleoStorageManager(bucket_name)
    permissions_manager = permissions.DatastoreManager(project, database, namespace)
    for object in table_objects:
      storage_manager.put_object(object["galyleo_object"], object["object_data"])
      permissions_manager.create_or_update_object(object["galyleo_object"])

BUCKET_NAME='galyleo-server-test-bucket'
PROJECT = 'galyleo-server'
DATABASE = 'galyleo-server'
NAMESPACE = 'test'

def clear_all():
  storage_manager = GalyleoStorageManager(BUCKET_NAME)
  permissions_manager = permissions.DatastoreManager(PROJECT, DATABASE, NAMESPACE)
  storage_manager.clean_all()
  permissions_manager.clear()


def test_init():
  clear_all()
  store_tables(BUCKET_NAME, PROJECT, DATABASE, NAMESPACE)
  object_manager = GalyleoObjectManager(PROJECT, DATABASE, NAMESPACE, BUCKET_NAME)
  table_server = object_manager.galyleo_table_server
  assert set(table_server.servers.keys()) == set([object["galyleo_object"].object_key for object in table_objects])
  for object in table_objects:
    galyleo_object = object['galyleo_object']
    # check the data in the table matches the stored file
    assert table_server.get_table(galyleo_object.object_key).to_dictionary() == object['object_data']
    # check the permissions are all [owner]
    assert object_manager.permissions_manager.get_users(galyleo_object) == {galyleo_object.owner}
  

def test_list_objects():
  clear_all()
  store_tables(BUCKET_NAME, PROJECT, DATABASE, NAMESPACE)
  object_manager = GalyleoObjectManager(PROJECT, DATABASE, NAMESPACE, BUCKET_NAME)
  test_sets = {}
  galyleo_objects = [table_object["galyleo_object"] for table_object in table_objects]
  for owner in ['test', 'test2']:
    test_sets[owner] = set([object.object_key for object in galyleo_objects if object.owner == owner])
  all_tables = set([object.object_key for object in galyleo_objects])
  assert set(object_manager.list_objects('tables')) == all_tables
  assert set(object_manager.list_objects('dashboards')) == set()
  for owner in ['test', 'test2']:
    assert set(object_manager.list_objects('tables', owner)) == test_sets[owner]
    assert set(object_manager.list_objects('dashboards', owner)) == set()
  assert set(object_manager.list_objects('tables', 'test3')) == set()

  





def test_object_access_permitted():
  clear_all()
  store_tables(BUCKET_NAME, PROJECT, DATABASE, NAMESPACE)
  object_manager = GalyleoObjectManager(PROJECT, DATABASE, NAMESPACE, BUCKET_NAME)
  galyleo_object = table_objects[0]["galyleo_object"]
  # make sure the owner can access
  assert object_manager.object_access_permitted(galyleo_object, 'test', True)
  # make sure a second user can access only if added
  assert not object_manager.object_access_permitted(galyleo_object, 'test2', True)
  object_manager.permissions_manager.add_user_access(galyleo_object, 'test2')
  assert  object_manager.object_access_permitted(galyleo_object, 'test2', True)
  assert not object_manager.object_access_permitted(galyleo_object, 'test3', True)
  object_manager.permissions_manager.add_user_access(galyleo_object, permissions.HUB)
  assert not object_manager.object_access_permitted(galyleo_object, 'test3', False)
  assert object_manager.object_access_permitted(galyleo_object, 'test3', True)
  object_manager.permissions_manager.add_user_access(galyleo_object, permissions.PUBLIC)
  assert  object_manager.object_access_permitted(galyleo_object, 'test3', False)

def successful_retrieval(galyleo_object_manager, galyleo_object, user, is_hub_user, reference_data):
  retrieved_table = galyleo_object_manager.get_object_if_permitted(galyleo_object, user, is_hub_user)
  assert retrieved_table.to_dictionary() == reference_data

def error_not_permitted_retrieval(galyleo_object_manager, galyleo_object, user, is_hub_user):
  error = False
  try:
    retrieved_table = galyleo_object_manager.get_object_if_permitted(galyleo_object, user, is_hub_user)
  except GalyleoNotPermittedException:
    error = True
  assert error, f'Not Permitted Exception expected for {galyleo_object.object_key}'


def test_get_object_if_permitted():
  clear_all()
  store_tables(BUCKET_NAME, PROJECT, DATABASE, NAMESPACE)
  object_manager = GalyleoObjectManager(PROJECT, DATABASE, NAMESPACE, BUCKET_NAME)
  galyleo_object = table_objects[0]["galyleo_object"]
  object_data = table_objects[0]["object_data"]
  # make sure the owner can access
  successful_retrieval(object_manager, galyleo_object, galyleo_object.owner, True, object_data)
  # make sure a second user can access only if added
  error_not_permitted_retrieval(object_manager, galyleo_object, 'test2', True)
  object_manager.permissions_manager.add_user_access(galyleo_object, 'test2')
  successful_retrieval(object_manager, galyleo_object, 'test2', True, object_data)
  error_not_permitted_retrieval(object_manager, galyleo_object, 'test3', True)
  object_manager.permissions_manager.add_user_access(galyleo_object, permissions.HUB)
  error_not_permitted_retrieval(object_manager, galyleo_object, 'test3', False)
  successful_retrieval(object_manager, galyleo_object, 'test3', True, object_data)
  object_manager.permissions_manager.add_user_access(galyleo_object, permissions.PUBLIC)
  successful_retrieval(object_manager, galyleo_object, 'test3', False, object_data)

def test_clean_objects():
  pass

def test_update_user_access():
  pass
def test_publish_table_and_dashboard():
  pass
def test_delete_table_and_dashboard():
  pass
def test_get_table_info():
  pass

def run_tests():
  test_init()
  test_get_object_if_permitted()
  test_object_access_permitted()
  test_clean_objects()
  test_list_objects()
  test_update_user_access()
  test_publish_table_and_dashboard()
  test_delete_table_and_dashboard()
  test_get_table_info()

run_tests()
# write a cleaner!



# def test_table_server_init():
#   storage_manager = GalyleoStorageManager(BUCKET_NAME)
#   store_tables(BUCKET_NAME)
#   server = GalyleoTableServer(ROOT_URL, storage_manager)
#   tables = set(storage_manager.list_tables())
#   server_tables = set(server.servers.keys())
#   assert(tables == server_tables)

# # test_table_server_init()

# def _get_user_and_table(path):
#   parts = path.split('/')
#   return (parts[0], parts[1])

# def test_delete_table():
#   storage_manager = GalyleoStorageManager(BUCKET_NAME)
#   store_tables(BUCKET_NAME)
#   server = GalyleoTableServer(ROOT_URL, storage_manager)
#   tables = storage_manager.list_tables()
#   (user, table_name) = _get_user_and_table(tables[0])
#   server.delete_table(user, table_name)
#   tables_1 = storage_manager.list_tables()
#   assert(tables_1 == tables[1:])
#   assert(set(tables_1) == set(server.servers.keys()))
#   (user, table_name) = _get_user_and_table(tables[1])
#   table_name_trim = table_name[:-len('.sdml')]
#   server.delete_table(user, table_name_trim)
#   tables_2 = storage_manager.list_tables()
#   assert(tables_2 == tables[2:])
#   assert(set(tables_2) == set(server.servers.keys()))

# # test_delete_table()

# def test_publish_table():
#   storage_manager = GalyleoStorageManager(BUCKET_NAME)
  
#   storage_manager.clean_tables(TEST_USER)
#   storage_manager.clean_tables(TEST_USER_1)
#   tables_clean = storage_manager.list_tables()
#   assert(len(tables_clean) == 0)
#   server = GalyleoTableServer(ROOT_URL, storage_manager)

#   for (table_name, table_object) in table_values.items():
#     server.publish_table('test', table_name, table_object["table_dictionary"])
#   tables_1 = storage_manager.list_tables()
#   stored_tables = set([object["key"] for object in table_values.values()])
#   assert(set(tables_1) == stored_tables)
#   storage_manager.clean_tables(TEST_USER)
#   storage_manager.clean_tables(TEST_USER_1)
#   server = GalyleoTableServer(ROOT_URL, storage_manager)
#   for (table_name, table_object) in table_values.items():
#     table_name_1 = table_name[:-len('.sdml')]
#     server.publish_table(TEST_USER, table_name, table_object["table_dictionary"])
#   tables_1 = storage_manager.list_tables()
#   stored_tables = set([object["key"] for object in table_values.values()])
#   assert(set(tables_1) == stored_tables)

# # test_publish_table()
# sample_dashboard_root_url =  'https://raw.githubusercontent.com/engageLively/galyleo-examples/refs/heads/main/demos/'

# dashboards = [
#   'nightingale/nightingale.gd.json',
#   'presidential-elections/elections-new.gd.json',
#   'seaice/seaice.gd.json',
#   'senate-elections/senate-elections.gd.json',
#   'ufos/ufos.gd.json'
# ]



# TEST_USER = 'test'
# TEST_USER_1 = 'test1'

# def _make_dashboard_object(dashboard_path):
#   parts = dashboard_path.split('/')
#   return {
#     "name": parts[1],
#     "object": requests.get(f'{sample_dashboard_root_url}{dashboard_path}').json(),
#     "url": f"{os.environ['GALYLEO_ROOT_URL']}/dashboards/{TEST_USER}/{parts[1]}",
#     "url2": f"{os.environ['GALYLEO_ROOT_URL']}/dashboards/{TEST_USER_1}/{parts[1]}"
#   }

# dashboard_objects = [_make_dashboard_object(dashboard) for dashboard in dashboards]

# def test_add_dashboard():
#   storage_manager = GalyleoStorageManager(BUCKET_NAME)
#   dashboard_manager = DashboardManager(ROOT_URL, storage_manager)

#   storage_manager.clean_dashboards(TEST_USER)
#   storage_manager.clean_dashboards(TEST_USER_1)
#   for dashboard in dashboard_objects:
#     result = dashboard_manager.add_dashboard(TEST_USER, dashboard["name"], dashboard["object"])
#     assert(result == dashboard["url"])
#     stored  = storage_manager.get_dashboard(TEST_USER, dashboard["name"])
#     assert(stored == dashboard["object"])
#   names = [f"{TEST_USER}/{dashboard['name']}" for dashboard in dashboard_objects]
#   assert(set(names) == set(storage_manager.list_dashboards()))
#   storage_manager.clean_dashboards(TEST_USER)
#   storage_manager.clean_dashboards(TEST_USER_1)
#   for dashboard in dashboard_objects:
#     name = dashboard["name"][:-len('.gd.json')]
#     result = dashboard_manager.add_dashboard(TEST_USER, name, dashboard["object"])
#     assert(result == dashboard["url"])
#     stored  = storage_manager.get_dashboard(TEST_USER, dashboard["name"])
#     assert(stored == dashboard["object"])
#   names = [f"{TEST_USER}/{dashboard['name']}" for dashboard in dashboard_objects]
#   assert(set(names) == set(storage_manager.list_dashboards()))
#   storage_manager.clean_dashboards(TEST_USER)
#   storage_manager.clean_dashboards(TEST_USER_1)
#   for dashboard in dashboard_objects:
#     result = dashboard_manager.add_dashboard(TEST_USER, dashboard["name"], dumps(dashboard["object"]))
#     assert(result == dashboard["url"])
#     stored  = storage_manager.get_dashboard(TEST_USER, dashboard["name"])
#     assert(stored == dashboard["object"])
#   names = [f"{TEST_USER}/{dashboard['name']}" for dashboard in dashboard_objects]
#   assert(set(names) == set(storage_manager.list_dashboards()))
#   error_caught = False
#   try:
#     dashboard_manager.add_dashboard(TEST_USER, 'foo.gd.json', 'foo')
#   except ValueError:
#     error_caught = True
#   assert error_caught, "Bad dashboard error not caught"

# # test_add_dashboard()
# def test_delete_dashboard():
#   storage_manager = GalyleoStorageManager(BUCKET_NAME)
#   dashboard_manager = DashboardManager(ROOT_URL, storage_manager)
#   storage_manager.clean_dashboards(TEST_USER)
#   storage_manager.clean_dashboards(TEST_USER_1)
#   for dashboard in dashboard_objects:
#     dashboard_manager.add_dashboard(TEST_USER, dashboard["name"], dashboard["object"])
#   names = set([f"{TEST_USER}/{dashboard['name']}" for dashboard in dashboard_objects])
#   assert(set(names) == set(storage_manager.list_dashboards()))
#   for dashboard in dashboard_objects:
#     dashboard_manager.delete_dashboard(TEST_USER, dashboard["name"])
#     names.remove(f'{TEST_USER}/{dashboard["name"]}')
#     assert(set(names) == set(storage_manager.list_dashboards()))
#   error_caught = False
#   try:
#     dashboard_manager.delete_dashboard(TEST_USER, dashboard_objects[0]["name"])
#   except GalyleoNotFoundException:
#     error_caught = True
#   assert error_caught, "Delete non-existing dashboard error not caught"

# # test_delete_dashboard()

# def test_list_dashboards():
#   storage_manager = GalyleoStorageManager(BUCKET_NAME)
#   dashboard_manager = DashboardManager(ROOT_URL, storage_manager)
#   storage_manager.clean_dashboards(TEST_USER)
#   storage_manager.clean_dashboards(TEST_USER_1)
#   assert(dashboard_manager.list_dashboards() == [])
#   assert(dashboard_manager.list_dashboards(TEST_USER) == [])
#   assert(dashboard_manager.list_dashboards(TEST_USER_1) == [])
#   for dashboard in dashboard_objects:
#     dashboard_manager.add_dashboard(TEST_USER, dashboard["name"], dashboard["object"])
#     dashboard_manager.add_dashboard(TEST_USER_1, dashboard["name"], dashboard["object"])
#   urls_1 = set([dashboard["url"] for dashboard in dashboard_objects])
#   urls_2 = set([dashboard["url2"] for dashboard in dashboard_objects])
#   assert(set(dashboard_manager.list_dashboards(TEST_USER)) == urls_1)
#   assert(set(dashboard_manager.list_dashboards(TEST_USER_1)) == urls_2)
#   assert(set(dashboard_manager.list_dashboards()) == urls_2.union(urls_1))
#   storage_manager.clean_dashboards(TEST_USER)
#   storage_manager.clean_dashboards(TEST_USER_1)

# # test_list_dashboards()
# PROJECT = 'galyleo-server'
# DATABASE = 'galyleo-server'
# NAMESPACE = 'test'

# # create objects for each test table and dashboard

# def _make_table_object(name, table_value):
#   return GalyleoObject(ROOT_URL, table_value["owner"], name)

# table_objects = [{"object": _make_table_object(name, value), "data": value["table_dictionary"]} for (name, value) in table_values.items()]


# # Test object manager
# # Create a table on initialization, make sure the owner can access it and the 
# # other user can't
# def test_object_manager():
#   storage_manager = GalyleoStorageManager(BUCKET_NAME)
#   storage_manager.clean_all()
#   permissions_manager = permissions.DatastoreManager(PROJECT, DATABASE, NAMESPACE)
#   permissions_manager.clear()
#   object_manager = GalyleoObjectManager(ROOT_URL, PROJECT, DATABASE, NAMESPACE, BUCKET_NAME)
#   # check for access to nonexistent object
#   galyleo_object = GalyleoObject(ROOT_URL, 'dashboards', 'foo', 'd1.gd.json')
#   assert not object_manager.object_access_permitted(galyleo_object, 'foo', True)
#   # Create a table on initialization, make sure the owner can access it and the 
#   # other user can't
#   test_dashboard = dashboard_objects[0]
#   object_manager.publish_dashboard(TEST_USER, test_dashboard["name"])
#   galyleo_object = GalyleoObject(ROOT_URL, 'dashboards', TEST_USER, test_dashboard["name"])
#   assert object_manager.object_access_permitted(galyleo_object, TEST_USER, True)
#   assert not object_manager.object_access_permitted(galyleo_object, TEST_USER_1, True)
#   object_manager.permissions_manager.add_user_access(galyleo_object.url, TEST_USER_1)
#   assert object_manager.object_access_permitted(galyleo_object, TEST_USER_1, True)



# # fail to get a non-existent table or dashboard
# # publish a dashboard.  Check the permissions and the fact that it's stored
# # publish a table.  Check the permissions and the fact that it's stored and in the server
# # delete a dashboard.  Check to make sure it's not there and not in the permissions
# # delete a table. Check to make sure that it's not on disk, in the table server, or permissions

# def run_tests():
#   test_make_object()
#   test_get_table()
#   test_table_server_init()
#   test_delete_table()
#   test_publish_table()
#   test_add_dashboard()
#   test_delete_dashboard()
#   test_list_dashboards()

# run_tests()