import os
from google.cloud import storage
from google.cloud.exceptions import NotFound
import sys
from pathlib import Path
from json import dumps

# parent = os.path.join(os.path.dirname(__file__), '..')
root = str(Path(__file__).parent.parent)
key_path = os.path.join(root, '.keys', 'galyleo-server-1105bf54b967.json')

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = key_path


os.environ['GALYLEO_STORAGE_BUCKET'] = 'galyleo-server-test-bucket'
os.environ['GOOGLE_PROJECT'] = 'galyleo-server'
TEST_USER = 'test'
sys.path.append(f'{root}/src')

from galyleo_storage import GalyleoStorageManager
from galyleo_object import GalyleoObject


def test_key():
  assert key_path == '/workspaces/jh2/galyleo-service-platform/.keys/galyleo-server-1105bf54b967.json'
#--------------------------------------------------------------------------
# tests
#---------------------------------------------------------------------------

import datetime

DASHBOARD_OBJECTS = [{
  'galyleo_object': GalyleoObject('dashboards', 'test', 'dashboard_1.gd.json'),
  'object_data': {'foo': [1, 2, 3]},
  'path': 'dashboards/test/dashboard_1.gd.json'
},
{
  'galyleo_object': GalyleoObject('dashboards', 'test_1', 'dashboard_2.gd.json'),
  'object_data': dumps({'foo': [1, 2, 3]}),
  'path': 'dashboards/test_1/dashboard_2.gd.json'
}]

BUCKET_NAME = 'galyleo-server-test-bucket'
def init_test():
  storage_manager = GalyleoStorageManager(BUCKET_NAME)
  storage_manager.clean_all()
  for dashboard_object in DASHBOARD_OBJECTS:
    storage_manager.put_object(dashboard_object['galyleo_object'], dashboard_object['object_data'])
  return storage_manager


def test_put_object():
  storage_manager = init_test() 
  client = storage.Client()
  listed_blobs = [blob for blob in client.list_blobs(BUCKET_NAME)]
  assert set([blob.name for blob in listed_blobs]) == set([obj['path'] for obj in DASHBOARD_OBJECTS])
  # make sure it wrote the json form for both
  for blob in listed_blobs:
    stored = blob.download_as_text()
    # should be in JSON form
    assert stored == DASHBOARD_OBJECTS[1]["object_data"]
  bad_object_data = {"now": datetime.datetime.now()}
  error = False
  try:
    storage_manager.put_object(GalyleoObject('tables', 'test', 'bad_table.sdml'), bad_object_data)
  except TypeError:
    error = True
  assert error, "Attempt to write non-JSONifiable object succeeded"
  listed_blobs_new = [blob for blob in client.list_blobs(BUCKET_NAME)]
  assert set([blob.name for blob in listed_blobs]) == set([blob.name for blob in listed_blobs_new])

def test_get_object():
  storage_manager = init_test()
  stored_objects = [storage_manager.get_object(dashboard_object['galyleo_object']) for dashboard_object in DASHBOARD_OBJECTS]
  for test_object in stored_objects:
    assert test_object == DASHBOARD_OBJECTS[0]["object_data"]
  # trying to read a garbage object should lead to a NotFound error
  garbage_object = GalyleoObject('dashboards', 'test1', 'foo.gd.json')
  null = storage_manager.get_object(garbage_object)
  assert null is None

def test_delete_object():
  storage_manager = init_test()
  storage_manager.delete_object(DASHBOARD_OBJECTS[0]["galyleo_object"])
  client = storage.Client()
  listed_blobs = [blob for blob in client.list_blobs(BUCKET_NAME)]
  assert len(listed_blobs) == 1
  assert listed_blobs[0].name == DASHBOARD_OBJECTS[1]["path"]
  storage_manager.delete_object(DASHBOARD_OBJECTS[1]["galyleo_object"])
  listed_blobs = [blob for blob in client.list_blobs(BUCKET_NAME)]
  assert len(listed_blobs) == 0
  garbage_object = GalyleoObject('dashboards', 'test1', 'foo.gd.json')
  error = False
  try:
    storage_manager.delete_object(garbage_object)
  except NotFound:
    error = True
  assert error, f'NotFound not raised when attempting to delete nonexistent {garbage_object.object_key}'

TABLE_OBJECTS = [{
  'galyleo_object': GalyleoObject('tables', 'test', 'table.sdml'),
  'object_data': {'schema': [{'name': 'name', 'type': 'string'}, {'name': 'age', 'type': 'number'}], 'data': [['bill', 23], ['alice', 25]]},
  'path': 'tables/test/table.sdml'
},
{
  'galyleo_object': GalyleoObject('tables', 'test_1', 'table_2.sdml'),
  'object_data': dumps({'schema': [{'name': 'name', 'type': 'string'}, {'name': 'age', 'type': 'number'}], 'data': [['bill', 23], ['alice', 25]]}),
  'path': 'tables/test_1/table_2.sdml'
}]

def test_all_blobs_matching_pattern():
  storage_manager = init_test()
  for object in TABLE_OBJECTS:
    storage_manager.put_object(object['galyleo_object'], object['object_data'])
  dashboard_all = set([object["path"] for object in DASHBOARD_OBJECTS])
  tables_all = set([object["path"] for object in TABLE_OBJECTS])
  all = dashboard_all.union(tables_all)
  test_1_all = {DASHBOARD_OBJECTS[1]["path"], TABLE_OBJECTS[1]["path"]}
  test_all = {DASHBOARD_OBJECTS[0]["path"], TABLE_OBJECTS[0]["path"]}
  patterns_and_expected = [
    (None, all), ('*', all), ('*.gd.json', dashboard_all), ('dashboards/*', dashboard_all),  ('*.sdml', tables_all), ('tables/*',tables_all), ('*/test/*', test_all), ('*/test_1/*', test_1_all)
  ]
  for (pattern, expected) in patterns_and_expected:
    assert expected == set(storage_manager.all_blobs_matching_pattern(pattern))

# def run_tests():
#   test_put_object()
#   test_get_object()
#   test_delete_object()
#   test_all_blobs_matching_pattern()
#   manager = GalyleoStorageManager(BUCKET_NAME)
#   manager.clean_blobs('*/test*/*')

# run_tests()

