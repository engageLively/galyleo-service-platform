import os
import sys
from pathlib import Path
os.environ['GALYLEO_ROOT_URL'] = 'http://test.galyleo.com'
import requests


root = str(Path(__file__).parent.parent)
key_path = os.path.join(root, '.keys', 'galyleo-server-1105bf54b967.json')

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = key_path


os.environ['GALYLEO_STORAGE_BUCKET'] = 'galyleo-server-test-bucket'
os.environ['GOOGLE_PROJECT'] = 'galyleo-server'
TEST_USER = 'test'
sys.path.append(f'{root}/src')

from galyleo_object import GalyleoObject
import permissions
from galyleo_object_manager import GalyleoObjectManager, GalyleoNotPermittedException, GalyleoNotFoundException
from galyleo_storage import GalyleoStorageManager

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

# successful retrieval of an object
def successful_retrieval(galyleo_object_manager, galyleo_object, user, is_hub_user, reference_data):
  retrieved_table = galyleo_object_manager.get_object_if_permitted(galyleo_object, user, is_hub_user)
  assert retrieved_table.to_dictionary() == reference_data

# an object can't be retrieved because it isn't permitted
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

def test_update_user_access():
  clear_all()
  store_tables(BUCKET_NAME, PROJECT, DATABASE, NAMESPACE)
  object_manager = GalyleoObjectManager(PROJECT, DATABASE, NAMESPACE, BUCKET_NAME)
  galyleo_object = table_objects[0]["galyleo_object"]
  assert not object_manager.object_access_permitted(galyleo_object, 'test2', True)
  object_manager.update_user_access(galyleo_object, {'test2'})
  assert  object_manager.object_access_permitted(galyleo_object, 'test2', True)
  assert  object_manager.object_access_permitted(galyleo_object, 'test', True)
  object_manager.update_user_access(galyleo_object, {'HUB'})
  assert not object_manager.object_access_permitted(galyleo_object, 'test2', False)
  assert  object_manager.object_access_permitted(galyleo_object, 'test2', True)
  assert  object_manager.object_access_permitted(galyleo_object, 'test', False)
  object_manager.update_user_access(galyleo_object, set())
  assert  object_manager.object_access_permitted(galyleo_object, 'test', False)


def test_get_table_info():
  clear_all()
  store_tables(BUCKET_NAME, PROJECT, DATABASE, NAMESPACE)
  object_manager = GalyleoObjectManager(PROJECT, DATABASE, NAMESPACE, BUCKET_NAME)
  schemas = {}
  user_objects = {}
  user_keys = {}
  for table_object in table_objects:
    galyleo_object = table_object["galyleo_object"]
    schemas[galyleo_object.object_key] = table_object["object_data"]["schema"]
    if  galyleo_object.owner in user_keys:
      user_keys[galyleo_object.owner].append(galyleo_object.object_key)
    else:
      user_keys[galyleo_object.owner] = [galyleo_object.object_key]
    if  galyleo_object.owner in user_objects:
      user_objects[galyleo_object.owner].append(galyleo_object)
    else:
      user_objects[galyleo_object.owner] = [galyleo_object]
  for owner in ['test', 'test2']:
    retrieved_schemas = object_manager.get_table_info(owner, True)
    assert set(retrieved_schemas.keys()) == set(user_keys[owner])
    for table_name in user_keys[owner]:
      assert retrieved_schemas[table_name] == schemas[table_name]

  galyleo_object = user_objects['test'][0]
  
  object_manager.permissions_manager.add_user_access(galyleo_object, 'test2')
  user_keys['test2'].append(galyleo_object.object_key)
  retrieved_schemas = object_manager.get_table_info('test2', True)
  assert set(retrieved_schemas.keys()) == set(user_keys['test2'])

dashboard_object = {
  'galyleo_object': GalyleoObject('dashboards', 't1_user', 'elections-formatted.gd.json'),
  'object_data': requests.get('https://raw.githubusercontent.com/engageLively/galyleo-examples/refs/heads/main/demos/presidential-elections/elections-formatted.gd.json').json()
}

new_table_object = {
  'galyleo_object': GalyleoObject('tables', 't1_user', table_objects[0]["galyleo_object"].name),
  'object_data': table_objects[0]["object_data"]
}

def test_publish_table_and_dashboard():
  clear_all()
  object_manager = GalyleoObjectManager(PROJECT, DATABASE, NAMESPACE, BUCKET_NAME)
  # should be nothing in the repo or table server
  assert len(object_manager.galyleo_table_server.servers.keys()) == 0
  for kind in ['tables', 'dashboards']:
    assert len(object_manager.list_objects(kind, '*')) == 0
  object_manager.publish_object(dashboard_object["galyleo_object"], dashboard_object['object_data'])
  assert object_manager.list_objects('dashboards', '*') == [dashboard_object['galyleo_object'].object_key]
  assert object_manager.permissions_manager.get_users(dashboard_object['galyleo_object']) == {dashboard_object['galyleo_object'].owner}
  user_set = {'test', 'HUB'}
  object_manager.publish_object(new_table_object["galyleo_object"], new_table_object['object_data'], user_set)
  assert object_manager.list_objects('tables', '*') == [new_table_object['galyleo_object'].object_key]
  assert list(object_manager.galyleo_table_server.servers.keys()) == [new_table_object['galyleo_object'].object_key]
  user_set_1 = user_set.union({new_table_object['galyleo_object'].owner})
  assert object_manager.permissions_manager.get_users(new_table_object['galyleo_object']) == user_set_1

def _check_consistency(object_manager, object_list):
  keys = set([galyleo_object.object_key for galyleo_object in object_list])
  assert set(object_manager.list_objects('tables', '*')) == keys
  assert set(object_manager.galyleo_table_server.servers.keys()) == keys
  
def test_delete_table_and_dashboard():
  clear_all()
  store_tables(BUCKET_NAME, PROJECT, DATABASE, NAMESPACE)
  object_manager = GalyleoObjectManager(PROJECT, DATABASE, NAMESPACE, BUCKET_NAME)
  galyleo_objects = [table_object['galyleo_object'] for table_object in table_objects]
  _check_consistency(object_manager, galyleo_objects)
  for i in range(len(galyleo_objects)):
    object_manager.delete_object(galyleo_objects[i])
    _check_consistency(object_manager, galyleo_objects[i+1:])
  object_manager.publish_object(dashboard_object["galyleo_object"], dashboard_object['object_data'])
  assert object_manager.list_objects('dashboards', '*') == [dashboard_object['galyleo_object'].object_key]
  object_manager.delete_object(dashboard_object["galyleo_object"])
  assert len(object_manager.list_objects('dashboards', '*')) == 0
  error = False
  try:
    object_manager.delete_object(dashboard_object["galyleo_object"])
  except GalyleoNotFoundException:
    error = True
  assert error, f"GalyleoNotFoundException not raised in attempt to delete non-existent object {dashboard_object["galyleo_object"].object_key}"


  

def test_clean_objects():
  pass




