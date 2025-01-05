import fnmatch
import os
from json import load, loads, dump, dumps, JSONDecodeError
from google.cloud import storage
from google.cloud.exceptions import NotFound


def _get_blob(path):
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
    # Upload the JSON string to the blob
    json_string = object if type(object) == str else dumps(object)
  
    blob.upload_from_string(json_string, content_type="application/json")

def _delete_blob(path):
    """Deletes a blob from a GCS bucket."""
    # Initialize the client
    
    blob = _get_blob(path)
    blob.delete()
    


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
  Delete the user's daashboard dashboard_name
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
  _delete_blob(f'{os.environ['GALYLEO_STORAGE_BUCKET']}/tables/{user}/{table_name}')

def _all_blobs_matching_pattern(pattern):
  # utility which finds all blobs matching pattern, where 
  # pattern is a standard glob-style pattern.  Used by 
  # list_tables and list_dashboards
  client = storage.Client()
  blobs = client.list_blobs(os.environ['GALYLEO_STORAGE_BUCKET'])
  return  [blob.name for blob in blobs if fnmatch.fnmatch(blob.name, pattern)]

def list_tables(user = '*'):
   '''
   Return the list of tables stored in the repo.  
   '''
   return _all_blobs_matching_pattern(f'tables/{user}/*.sdml')


def list_dashboards(user = '*'):
   '''
   Return the list of dashboards stored in the repo.  
   '''
   return _all_blobs_matching_pattern(f'tables/{user}/*.gd.json')
   

#--------------------------------------------------------------------------
# tests
#---------------------------------------------------------------------------
from pathlib import Path
import  sys
import requests

def setup_tests():
  parent = str(Path(__file__).parent)
  key_path = os.path.join(parent, '.keys', 'galyleo-server-1105bf54b967.json')
  os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = key_path
  os.environ['GALYLEO_STORAGE_BUCKET'] = 'galyleo-server-test-bucket'
  os.environ['GOOGLE_PROJECT'] = 'galyleo-server'

TEST_USER = 'test'

def test_clean():
  # clean out all the blobs from previous tests
  pattern = f'*/{TEST_USER}/*'
  print( os.environ['GOOGLE_APPLICATION_CREDENTIALS'])
  old_blob_names = _all_blobs_matching_pattern(pattern)
  for blob_name in old_blob_names:
    _delete_blob(blob_name)
  blob_names = _all_blobs_matching_pattern(pattern)
  assert(blob_names == [])

def test_add_table():
  url = 'https://raw.githubusercontent.com/Global-Data-Plane/sdtp-examples/refs/heads/main/simple-table-example/tables/electoral_college.sdml'
  table = requests.get(url).json()
  put_table(TEST_USER, 'electoral_college.sdml', table)
  table1 = get_table(TEST_USER, 'electoral_college.sdml')
  assert(table1 is not None)
  assert(table1 == table)
  table_as_json = dumps(table)
  put_table(TEST_USER, 'electoral_college_json.sdml', table_as_json)
  table2 = get_table(TEST_USER, 'electoral_college_json.sdml')
  assert(table2 is not None)
  assert(table2 == table)



setup_tests()
print( os.environ['GOOGLE_APPLICATION_CREDENTIALS'])
test_clean()
test_add_table()
