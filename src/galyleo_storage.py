import fnmatch
import os
from json import load, loads, dump, dumps, JSONDecodeError
from google.cloud import storage
from google.cloud.exceptions import NotFound


def _get_blob(path = None):
  if path is None: return None
  # Utility used by _read_blob and _write_json_to_blob to get the blob corresponding to path
  client = storage.Client()

  # Get the bucket and blob
  bucket = client.bucket(os.environ['GALYLEO_STORAGE_BUCKET'])
  return  bucket.blob(path)
  

def _read_blob(path):
  # Utility for get_dashboard and get_table.  Open the path as a JSON file, read it, 
  # and return the resulting data structure.  Returns None for a NotFound
  """Reads a blob from a GCS bucket."""

  blob = _get_blob(path)
  if blob is None: return None
  # Download the blob's content as a string
  try:
    content = blob.download_as_text()
    return loads(content)
  except JSONDecodeError:
    return None
  except NotFound:
    return None

def _write_blob(path, object):
    """Writes a JSON string to a blob in a GCS bucket."""
    # Get the bucket and blob
    blob = _get_blob(path)
    if blob is None:
      raise NotFound(path)
    # Upload the JSON string to the blob
    json_string = object if type(object) == str else dumps(object)
  
    blob.upload_from_string(json_string, content_type="application/json")

def _delete_blob(path):
    """Deletes a blob from a GCS bucket."""
    # Initialize the client
    
    blob = _get_blob(path)
    blob.delete()
   

# think about getting from an URL, not user/dashboard name

def get_dashboard(user, dashboard_name):
  '''
  Pull dashboard from the repo.  Returns None if the dashboard is not found.
  The dashboard will be found in  dashboards/<user>/<dashboard_name>, where dashboard_name by convention ends
  in .gd.json
  or tables/<user-name>/<table-name>.sdml for an SDML table
  Parameters:
    user: the name of the user who owns the dashboard
    dashboard_name: the name of the dashboard to return
  Returns:
    the dashboard file as a Galyleo dashboard structure.  Note that the disk form (JSON) is converted to a data structure before 
    return
  '''
  return _read_blob(f'dashboards/{user}/{dashboard_name}')


def get_table(user, table_name):
  '''
  Pull table from the repo.  Returns None if the table is not found.
  The dashtableboard will be found in  tables/<user>/<table_name>, where table_name by convention ends
  in .sdml
  Parameters:
    user: the name of the user who owns the table
    table_name: the name of the table to return
  Returns:
    the table file as an SDTP table.  Note that the disk form (JSON) is converted to a data structure before 
    return
  '''
  return _read_blob(f'tables/{user}/{table_name}')

  

def put_dashboard(user, dashboard_name, dashboard_object):
  '''
  Put  dashboard_object as dashboard_name in the repo in the path dashboards/user/dashboard_name.  By convention,
  dashboard_name is <name>.gd.json  Note that conversion to JSON form is done here if necessary.
  Parameters:
    user: the name of the user who owns the dashboard
    dashboard_name: the name of the dashboard to store
    dashboard_object the dashboard object or JSON form to store
  Returns:
    None
  Raises:
    JSONDecodeError if the dashboard_object can't be JSONified and NotFound if dashboards/user/dashboard_name can't be written
  '''
  _write_blob(f'dashboards/{user}/{dashboard_name}', dashboard_object)

def put_table(user, table_name, sdml_table):
  '''
  Put  sdml_table as table_name in the repo in the path tables/user/table_name. By convention,
  table_name is <name>.sdml  Note that conversion to JSON form is done here if necessary.
  Parameters:
    user: the name of the user who owns the table
    table_name: the name of the table to store
    sdml_table: the table object or JSON form to store
  Returns:
    None
  Raises:
    JSONDecodeError if the sdml_table can't be JSONified and NotFound if tables/user/table_name can't be written
  '''
  _write_blob(f'tables/{user}/{table_name}', sdml_table)

def delete_dashboard(user, dashboard_name):
  '''
  Delete the user's dashboard dashboard_name
  Parameters:
    user: the name of the user who owns the dashboard
    dashboard_name: the name of the dashboard to delete
  Returns:
    None
  Raises:
    NotFound if dashboards/user/dashboard_name can't be found
  '''
  _delete_blob(f'dashboards/{user}/{dashboard_name}')

def delete_table(user, table_name):
  '''
  Delete the user's   sdml_table table_name 
  Parameters:
    user: the name of the user who owns the table
    table_name: the name of the table to delete
    
  Returns:
    None
  Raises:
    NotFound if tables/user/table_name can't be found
  '''
  _delete_blob(f'tables/{user}/{table_name}')

def _all_blobs_matching_pattern(pattern):
  # utility which finds all blobs matching pattern, where 
  # pattern is a standard glob-style pattern.  Used by 
  # list_tables and list_dashboards
  client = storage.Client()
  blobs = client.list_blobs(os.environ['GALYLEO_STORAGE_BUCKET'])
  return  [blob.name for blob in blobs if fnmatch.fnmatch(blob.name, pattern)]

def _trim_prefix(list_of_strings, prefix):
  return [string[len(prefix):] for string in list_of_strings]

def list_tables(user = '*'):
   '''
   Return the list of tables stored in the repo.  
   '''
   table_paths = _all_blobs_matching_pattern(f'tables/{user}/*.sdml')
   return _trim_prefix(table_paths, 'tables/')


def list_dashboards(user = '*'):
   '''
   Return the list of dashboards stored in the repo.  
   '''
   dashboard_paths =  _all_blobs_matching_pattern(f'dashboards/{user}/*.gd.json')
   return _trim_prefix(dashboard_paths, 'dashboards/')
   

#--------------------------------------------------------------------------
# tests
#---------------------------------------------------------------------------
from pathlib import Path
import  sys
import requests

def setup_tests():
  parent = str(Path(__file__).parent.parent)
  key_path = os.path.join(parent, '.keys', 'galyleo-server-1105bf54b967.json')
  os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = key_path
  os.environ['GALYLEO_STORAGE_BUCKET'] = 'galyleo-server-test-bucket'
  os.environ['GOOGLE_PROJECT'] = 'galyleo-server'

TEST_USER = 'test'

def test_clean():
  # clean out all the blobs from previous tests
  pattern = f'*/{TEST_USER}/*'
  old_blob_names = _all_blobs_matching_pattern(pattern)
  for blob_name in old_blob_names:
    _delete_blob(blob_name)
  blob_names = _all_blobs_matching_pattern(pattern)
  assert(blob_names == [])

def test_read_null():
  null = _read_blob(None)
  assert(null is None)

# should do a read_bad_json test

def test_write_null():
  failure_caught = False
  try:
    null = _write_blob(None, None)
  except NotFound:
    failure_caught = True
  assert failure_caught, "Writing to None didn't cause an error"

import datetime # to get bad json

def test_write_bad_json():
  failure_caught = False
  bad_json = datetime.datetime.now()
  try:
    null = _write_blob('junk/junk.json', bad_json)
  except (TypeError, JSONDecodeError):
    failure_caught = True
  assert failure_caught, "Writing bad JSON didn't cause an  error"

TABLE_URL = 'https://raw.githubusercontent.com/Global-Data-Plane/sdtp-examples/refs/heads/main/simple-table-example/tables/electoral_college.sdml'

def test_add_and_read_table():
  table = requests.get(TABLE_URL).json()
  put_table(TEST_USER, 'electoral_college.sdml', table)
  table1 = get_table(TEST_USER, 'electoral_college.sdml')
  assert(table1 is not None)
  assert(table1 == table)
  table_as_json = dumps(table)
  put_table(TEST_USER, 'electoral_college_json.sdml', table_as_json)
  table2 = get_table(TEST_USER, 'electoral_college_json.sdml')
  assert(table2 is not None)
  assert(table2 == table)

DASHBOARD_URL = 'https://raw.githubusercontent.com/engageLively/galyleo-examples/refs/heads/main/demos/presidential-elections/elections-formatted.gd.json'

def test_add_and_read_dashboard():
  dashboard = requests.get(DASHBOARD_URL).json()
  put_dashboard(TEST_USER, 'elections.gd.json', dashboard)
  dashboard1 = get_dashboard(TEST_USER, 'elections.gd.json')
  assert(dashboard1 is not None)
  assert(dashboard1 == dashboard)
  dashboard_as_json = dumps(dashboard1)
  put_dashboard(TEST_USER, 'elections_json.gd.json', dashboard_as_json)
  dashboard2 = get_dashboard(TEST_USER, 'elections_json.gd.json')
  assert(dashboard2 is not None)
  assert(dashboard2 == dashboard1)

def test_delete_table():
  table = requests.get(TABLE_URL).json()
  put_table(TEST_USER, 'electoral_college.sdml', table)
  delete_table(TEST_USER, 'electoral_college.sdml')
  table1 = get_table(TEST_USER, 'electoral_college.sdml')
  assert(table1 is None)
  failure_caught = False
  try:
    delete_table(TEST_USER, 'electoral_college.sdml')
  except NotFound:
    failure_caught = True
  assert failure_caught, "Did not throw error on attempt to delete a null"

def test_delete_dashboard():
  dashboard = requests.get(DASHBOARD_URL).json()
  put_dashboard(TEST_USER, 'elections.gd.json', dashboard)
  delete_dashboard(TEST_USER, 'elections.gd.json')
  dasboard1 = get_dashboard(TEST_USER, 'elections.gd.json')
  assert(dasboard1 is None)
  failure_caught = False
  try:
    delete_dashboard(TEST_USER, 'elections.gd.json')
  except NotFound:
    failure_caught = True
  assert failure_caught, "Did not throw error on attempt to delete a null"


def test_list_tables():
  test_clean() # get rid of any junk
  test_add_and_read_table() # to get the tables in the bucket
  tables = set(list_tables())
  expected = {f'{TEST_USER}/electoral_college.sdml', f'{TEST_USER}/electoral_college_json.sdml'}
  assert(tables == expected)
  _write_blob(f'tables/{TEST_USER}/foo.txt', 'foo')
  tables = set(list_tables())
  assert(tables == expected)


def test_list_dashboards():
  test_clean() # get rid of any junk
  test_add_and_read_dashboard() # to get the dashboards in the bucket
  dashboards = set(list_dashboards())
  expected = {f'{TEST_USER}/elections.gd.json', f'{TEST_USER}/elections_json.gd.json'}
  assert(dashboards == expected)
  _write_blob(f'dashboards/{TEST_USER}/foo.txt', 'foo')
  dashboards = set(list_dashboards())
  assert(dashboards == expected)

setup_tests()
# print( os.environ['GOOGLE_APPLICATION_CREDENTIALS'])
# test_clean()
# test_add_table()
# test_add_dashboard()
# test_read_null()
# test_write_bad_json()
test_delete_table()
test_delete_dashboard()
test_clean()
test_list_tables()
test_list_dashboards()
test_clean()