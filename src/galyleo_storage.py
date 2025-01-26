import fnmatch
import os
from json import load, loads, dump, dumps, JSONDecodeError
from google.cloud import storage
from google.cloud.exceptions import NotFound
from galyleo_object import GalyleoObject

class GalyleoStorageManager:
  '''
  A manager for Galyleo Storage -- tables and dashboards, on disk
  All read/write of dashnoards and tables should go through this class
  Properties:
    bucket_name: the name of the bucket on Google Cloud Storage
  '''
  def __init__(self, bucket_name):
    '''
    Initialize with the bucket name.
    Parameters
      bucket_name: name of the bucket in Google Cloud Storage
    '''
    self.client = storage.Client()
    self.bucket = storage.Bucket(self.client, bucket_name)
    self.bucket_name = bucket_name

  def _read_blob(self, path):
    # Utility for get_dashboard and get_table.  Open the path as a JSON file, read it, 
    # and return the resulting data structure.  Returns None for a NotFound
    """Reads a blob from a GCS bucket."""
    if path is None: return None
    blob = self.bucket.blob(path)
    if blob is None: return None
    # Download the blob's content as a string
    try:
      content = blob.download_as_text()
      return loads(content)
    except JSONDecodeError:
      return None
    except NotFound:
      return None

  def _write_blob(self, path, object):
      """Writes a JSON string to a blob in a GCS bucket."""
      # Get the bucket and blob
      blob = self.bucket.blob(path)
      if blob is None:
        raise NotFound(path)
      # Upload the JSON string to the blob
      json_string = object if type(object) == str else dumps(object)
      blob.upload_from_string(json_string, content_type="application/json")

  def _delete_blob(self, path):
      """Deletes a blob from a GCS bucket."""
      # Initialize the client
      blob = self.bucket.blob(path)
      if blob is None:
        raise(NotFound(path))
      blob.delete()
   

  # think about getting from an URL, not user/dashboard name

  def get_object(self, galyleo_object):
    '''
    Pull the   GalyleoObject from the object storage.  
    Parameters:
      galyleo_object: the object as either an SDTP Table (dictionary form), for a table
    Returns:
      the dashboard file as a Galyleo dashboard structure.  Note that the disk form (JSON) is converted to a data structure before return
    '''
    return self._read_blob(galyleo_object.object_key)

  def put_object(self, galyleo_object, object_data):
    '''
    Put  object_data in storage at galyleo_object.object_key.
    Parameters:
      galyleo_object: the GalyleoObject to store
      object_data: the data to be written (either a JSON string or a JSONifiable object)
    Returns:
      None
    Raises:
      TypeError if the object_data can't be JSONified and NotFound if galyleo_object.object_key can't be written
    '''
    self._write_blob(galyleo_object.object_key, object_data)


  def delete_object(self, galyleo_object):
    '''
    Delete the galyleo_object from storage
    Parameters:
      galyleo_object: the GalyleoObject to delete
    Returns:
      None
    Raises:
      NotFound if galyleo_object.object_key can't be found
    '''
    self._delete_blob(galyleo_object.object_key)


  def all_blobs_matching_pattern(self, pattern = None):
    '''
    Return the list of all blob names matching the input pattern, which is a
    standard regex/glob pattern
    Parameters:
      pattern: a regex/glob string of the file patterns to match
    Returns:
      a list of the blob names matching pattern
    '''
    blobs = self.client.list_blobs(self.bucket_name)
    names = [blob.name for blob in blobs]
    if pattern is None: return names
    return  [name for name in names if fnmatch.fnmatch(name, pattern)]
  

  def clean_blobs(self, pattern):
    '''
    Delete  all the  blobs whose  name matches the input pattern, which is a
    standard regex/glob pattern
    Parameters:
      pattern: a regex/glob string of the file patterns to match
    Returns:
      None
    '''
    names = self._all_blobs_matching_pattern(pattern)
    for name in names: self._delete_blob(name)


  def clean_all(self):
    '''
    Delete al the blobs in the bucket.  No return value
    '''
    blobs = self.client.list_blobs(self.bucket_name)
    for blob in blobs:
      blob.delete()


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

def run_tests():
  test_put_object()
  test_get_object()
  test_delete_object()
  test_all_blobs_matching_pattern()

run_tests()

# from pathlib import Path
# import  sys
# import requests

# def setup_tests():
#   global storage_manager
#   parent = str(Path(__file__).parent.parent)
#   key_path = os.path.join(parent, '.keys', 'galyleo-server-1105bf54b967.json')
#   os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = key_path
#   storage_manager = GalyleoStorageManager('galyleo-server-test-bucket')


# TEST_USER = 'test'

# def _test_clean():
#   # clean out all the blobs from previous tests
#   storage_manager.clean_all()

# def test_read_null():
#   null = storage_manager._read_blob(None)
#   assert(null is None)

# # should do a read_bad_json test

# def test_write_null():
#   failure_caught = False
#   try:
#     null = storage_manager._write_blob(None, None)
#   except NotFound:
#     failure_caught = True
#   assert failure_caught, "Writing to None didn't cause an error"

# import datetime # to get bad json

# def test_write_bad_json():
#   failure_caught = False
#   bad_json = datetime.datetime.now()
#   try:
#     null = storage_manager._write_blob('junk/junk.json', bad_json)
#   except (TypeError, JSONDecodeError):
#     failure_caught = True
#   assert failure_caught, "Writing bad JSON didn't cause an  error"

# TABLE_URL = 'https://raw.githubusercontent.com/Global-Data-Plane/sdtp-examples/refs/heads/main/simple-table-example/tables/electoral_college.sdml'

# def test_add_and_read_table():
#   table = requests.get(TABLE_URL).json()
#   storage_manager.put_table(TEST_USER, 'electoral_college.sdml', table)
#   table1 = storage_manager.get_table(TEST_USER, 'electoral_college.sdml')
#   assert(table1 is not None)
#   assert(table1 == table)
#   table_as_json = dumps(table)
#   storage_manager.put_table(TEST_USER, 'electoral_college_json.sdml', table_as_json)
#   table2 = storage_manager.get_table(TEST_USER, 'electoral_college_json.sdml')
#   assert(table2 is not None)
#   assert(table2 == table)

# DASHBOARD_URL = 'https://raw.githubusercontent.com/engageLively/galyleo-examples/refs/heads/main/demos/presidential-elections/elections-formatted.gd.json'

# def test_add_and_read_dashboard():
#   dashboard = requests.get(DASHBOARD_URL).json()
#   storage_manager.put_dashboard(TEST_USER, 'elections.gd.json', dashboard)
#   dashboard1 = storage_manager.get_dashboard(TEST_USER, 'elections.gd.json')
#   assert(dashboard1 is not None)
#   assert(dashboard1 == dashboard)
#   dashboard_as_json = dumps(dashboard1)
#   storage_manager.put_dashboard(TEST_USER, 'elections_json.gd.json', dashboard_as_json)
#   dashboard2 = storage_manager.get_dashboard(TEST_USER, 'elections_json.gd.json')
#   assert(dashboard2 is not None)
#   assert(dashboard2 == dashboard1)

# def test_delete_table():
#   table = requests.get(TABLE_URL).json()
#   storage_manager.put_table(TEST_USER, 'electoral_college.sdml', table)
#   storage_manager.delete_table(TEST_USER, 'electoral_college.sdml')
#   table1 = storage_manager.get_table(TEST_USER, 'electoral_college.sdml')
#   assert(table1 is None)
#   failure_caught = False
#   try:
#     storage_manager.delete_table(TEST_USER, 'electoral_college.sdml')
#   except NotFound:
#     failure_caught = True
#   assert failure_caught, "Did not throw error on attempt to delete a null"

# def test_delete_dashboard():
#   dashboard = requests.get(DASHBOARD_URL).json()
#   storage_manager.put_dashboard(TEST_USER, 'elections.gd.json', dashboard)
#   storage_manager.delete_dashboard(TEST_USER, 'elections.gd.json')
#   dasboard1 = storage_manager.get_dashboard(TEST_USER, 'elections.gd.json')
#   assert(dasboard1 is None)
#   failure_caught = False
#   try:
#     storage_manager.delete_dashboard(TEST_USER, 'elections.gd.json')
#   except NotFound:
#     failure_caught = True
#   assert failure_caught, "Did not throw error on attempt to delete a null"


# def test_list_tables():
#   storage_manager.clean_tables(TEST_USER) # get rid of any junk
#   test_add_and_read_table() # to get the tables in the bucket
#   tables = set(storage_manager.list_tables())
#   expected = {f'{TEST_USER}/electoral_college.sdml', f'{TEST_USER}/electoral_college_json.sdml'}
#   assert(tables == expected)
#   storage_manager._write_blob(f'tables/{TEST_USER}/foo.txt', 'foo')
#   tables = set(storage_manager.list_tables())
#   assert(tables == expected)


# def test_list_dashboards():
#   storage_manager.clean_dashboards(TEST_USER)# get rid of any junk
#   storage_manager.clean_dashboards(TEST_USER)# get rid of any junk
#   test_add_and_read_dashboard() # to get the dashboards in the bucket
#   dashboards = set(storage_manager.list_dashboards())
#   expected = {f'{TEST_USER}/elections.gd.json', f'{TEST_USER}/elections_json.gd.json'}
#   assert(dashboards == expected)
#   storage_manager._write_blob(f'dashboards/{TEST_USER}/foo.txt', 'foo')
#   dashboards = set(storage_manager.list_dashboards())
#   assert(dashboards == expected)

# def run_tests():
#   setup_tests()
#   #print( os.environ['GOOGLE_APPLICATION_CREDENTIALS'])
#   storage_manager.clean_all()
#   test_add_and_read_table()
#   test_add_and_read_dashboard()
#   test_read_null()
#   test_write_bad_json()
#   test_delete_table()
#   test_delete_dashboard()
#   storage_manager.clean_tables_and_dashboards(TEST_USER)
#   test_list_tables()
#   test_list_dashboards()
#   storage_manager.clean_tables_and_dashboards(TEST_USER)

# run_tests()