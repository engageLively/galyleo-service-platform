import fnmatch
import os
from json import load, loads, dump, dumps, JSONDecodeError
from google.cloud import storage
from google.cloud.exceptions import NotFound

def _trim_prefix(list_of_strings, prefix):
  return [string[len(prefix):] for string in list_of_strings]

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

  def get_dashboard(self, user, dashboard_name):
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
    return self._read_blob(f'dashboards/{user}/{dashboard_name}')


  def get_table(self, user, table_name):
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
    return self._read_blob(f'tables/{user}/{table_name}')

  

  def put_dashboard(self, user, dashboard_name, dashboard_object):
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
    self._write_blob(f'dashboards/{user}/{dashboard_name}', dashboard_object)

  def put_table(self, user, table_name, sdml_table):
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
    self._write_blob(f'tables/{user}/{table_name}', sdml_table)

  def delete_dashboard(self, user, dashboard_name):
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
    self._delete_blob(f'dashboards/{user}/{dashboard_name}')

  def delete_table(self, user, table_name):
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
    self._delete_blob(f'tables/{user}/{table_name}')

  def _all_blobs_matching_pattern(self, pattern):
    # utility which finds all blobs matching pattern, where 
    # pattern is a standard glob-style pattern.  Used by 
    # list_tables and list_dashboards
    client = storage.Client()
    blobs = self.client.list_blobs(self.bucket_name)
    return  [blob.name for blob in blobs if fnmatch.fnmatch(blob.name, pattern)]



  def list_tables(self, user = '*'):
    '''
    Return the list of tables stored in the repo.  
    '''
    table_paths = self._all_blobs_matching_pattern(f'tables/{user}/*.sdml')
    return _trim_prefix(table_paths, 'tables/')


  def list_dashboards(self, user = '*'):
    '''
    Return the list of dashboards stored in the repo.  
    '''
    dashboard_paths =  self._all_blobs_matching_pattern(f'dashboards/{user}/*.gd.json')
    return _trim_prefix(dashboard_paths, 'dashboards/')

  def _clean_blobs(self, pattern):
    # utility used by clean_dashboards and clean_tables
    names = self._all_blobs_matching_pattern(pattern)
    for name in names: self._delete_blob(name)

  def clean_tables(self, user_pattern):
    '''
    Remove all the tables for all users matching user_pattern.
    Parameters:
      user: name of the user whose tables to remove
    '''
    if user_pattern is not None:
      self._clean_blobs(f'tables/{user_pattern}/*.sdml')

  def clean_dashboards(self, user_pattern):
    '''
    Remove all the dashboards for all users matching user_pattern.
    Parameters:
      user: name of the user whose dashboards to remove
    '''
    if user_pattern is not None:
      self._clean_blobs(f'dashboards/{user_pattern}/*.gd.json')
    
  def clean_tables_and_dashboards(self, user_pattern):
    '''
    Clean the table and dashboards for all users matching user_pattern
    Parameters:

    '''
    self.clean_dashboards(user_pattern)
    self.clean_tables(user_pattern)

  def clean_all(self):
    blobs = self.client.list_blobs(self.bucket_name)
    for blob in blobs:
      blob.delete()


#--------------------------------------------------------------------------
# tests
#---------------------------------------------------------------------------
from pathlib import Path
import  sys
import requests

def setup_tests():
  global storage_manager
  parent = str(Path(__file__).parent.parent)
  key_path = os.path.join(parent, '.keys', 'galyleo-server-1105bf54b967.json')
  os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = key_path
  storage_manager = GalyleoStorageManager('galyleo-server-test-bucket')


TEST_USER = 'test'

def _test_clean():
  # clean out all the blobs from previous tests
  storage_manager.clean_all()

def test_read_null():
  null = storage_manager._read_blob(None)
  assert(null is None)

# should do a read_bad_json test

def test_write_null():
  failure_caught = False
  try:
    null = storage_manager._write_blob(None, None)
  except NotFound:
    failure_caught = True
  assert failure_caught, "Writing to None didn't cause an error"

import datetime # to get bad json

def test_write_bad_json():
  failure_caught = False
  bad_json = datetime.datetime.now()
  try:
    null = storage_manager._write_blob('junk/junk.json', bad_json)
  except (TypeError, JSONDecodeError):
    failure_caught = True
  assert failure_caught, "Writing bad JSON didn't cause an  error"

TABLE_URL = 'https://raw.githubusercontent.com/Global-Data-Plane/sdtp-examples/refs/heads/main/simple-table-example/tables/electoral_college.sdml'

def test_add_and_read_table():
  table = requests.get(TABLE_URL).json()
  storage_manager.put_table(TEST_USER, 'electoral_college.sdml', table)
  table1 = storage_manager.get_table(TEST_USER, 'electoral_college.sdml')
  assert(table1 is not None)
  assert(table1 == table)
  table_as_json = dumps(table)
  storage_manager.put_table(TEST_USER, 'electoral_college_json.sdml', table_as_json)
  table2 = storage_manager.get_table(TEST_USER, 'electoral_college_json.sdml')
  assert(table2 is not None)
  assert(table2 == table)

DASHBOARD_URL = 'https://raw.githubusercontent.com/engageLively/galyleo-examples/refs/heads/main/demos/presidential-elections/elections-formatted.gd.json'

def test_add_and_read_dashboard():
  dashboard = requests.get(DASHBOARD_URL).json()
  storage_manager.put_dashboard(TEST_USER, 'elections.gd.json', dashboard)
  dashboard1 = storage_manager.get_dashboard(TEST_USER, 'elections.gd.json')
  assert(dashboard1 is not None)
  assert(dashboard1 == dashboard)
  dashboard_as_json = dumps(dashboard1)
  storage_manager.put_dashboard(TEST_USER, 'elections_json.gd.json', dashboard_as_json)
  dashboard2 = storage_manager.get_dashboard(TEST_USER, 'elections_json.gd.json')
  assert(dashboard2 is not None)
  assert(dashboard2 == dashboard1)

def test_delete_table():
  table = requests.get(TABLE_URL).json()
  storage_manager.put_table(TEST_USER, 'electoral_college.sdml', table)
  storage_manager.delete_table(TEST_USER, 'electoral_college.sdml')
  table1 = storage_manager.get_table(TEST_USER, 'electoral_college.sdml')
  assert(table1 is None)
  failure_caught = False
  try:
    storage_manager.delete_table(TEST_USER, 'electoral_college.sdml')
  except NotFound:
    failure_caught = True
  assert failure_caught, "Did not throw error on attempt to delete a null"

def test_delete_dashboard():
  dashboard = requests.get(DASHBOARD_URL).json()
  storage_manager.put_dashboard(TEST_USER, 'elections.gd.json', dashboard)
  storage_manager.delete_dashboard(TEST_USER, 'elections.gd.json')
  dasboard1 = storage_manager.get_dashboard(TEST_USER, 'elections.gd.json')
  assert(dasboard1 is None)
  failure_caught = False
  try:
    storage_manager.delete_dashboard(TEST_USER, 'elections.gd.json')
  except NotFound:
    failure_caught = True
  assert failure_caught, "Did not throw error on attempt to delete a null"


def test_list_tables():
  storage_manager.clean_tables(TEST_USER) # get rid of any junk
  test_add_and_read_table() # to get the tables in the bucket
  tables = set(storage_manager.list_tables())
  expected = {f'{TEST_USER}/electoral_college.sdml', f'{TEST_USER}/electoral_college_json.sdml'}
  assert(tables == expected)
  storage_manager._write_blob(f'tables/{TEST_USER}/foo.txt', 'foo')
  tables = set(storage_manager.list_tables())
  assert(tables == expected)


def test_list_dashboards():
  storage_manager.clean_dashboards(TEST_USER)# get rid of any junk
  storage_manager.clean_dashboards(TEST_USER)# get rid of any junk
  test_add_and_read_dashboard() # to get the dashboards in the bucket
  dashboards = set(storage_manager.list_dashboards())
  expected = {f'{TEST_USER}/elections.gd.json', f'{TEST_USER}/elections_json.gd.json'}
  assert(dashboards == expected)
  storage_manager._write_blob(f'dashboards/{TEST_USER}/foo.txt', 'foo')
  dashboards = set(storage_manager.list_dashboards())
  assert(dashboards == expected)

def run_tests():
  setup_tests()
  #print( os.environ['GOOGLE_APPLICATION_CREDENTIALS'])
  storage_manager.clean_all()
  test_add_and_read_table()
  test_add_and_read_dashboard()
  test_read_null()
  test_write_bad_json()
  test_delete_table()
  test_delete_dashboard()
  storage_manager.clean_tables_and_dashboards(TEST_USER)
  test_list_tables()
  test_list_dashboards()
  storage_manager.clean_tables_and_dashboards(TEST_USER)

run_tests()