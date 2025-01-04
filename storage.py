import fnmatch
import os
from json import load, loads, dump, dumps, JSONDecodeError
from google.cloud import storage
from google.cloud.exceptions import NotFound

BUCKET_NAME = os.environ['GALYLEO_STORAGE_BUCKET']
PROJECT_NAME = os.environ['GOOGLE_PROJECT']


def _get_blob(path):
  # Utility used by _read_blob and _write_json_to_blob to get the blob corresponding to path
  client = storage.Client()

  # Get the bucket and blob
  bucket = client.bucket(BUCKET_NAME)
  return  bucket.blob(path)
  

def _read_blob(path):
  # Utility for get_dashboard and get_table.  Open the path as a JSON file, read it, 
  # and return the resulting data structure.  Returns None for a FileNotFoundError
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
    JSONDecodeError if the dashboard_object can't be JSONified and FileNotFoundError if dashboards/user/dashboard_name can't be written
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
    JSONDecodeError if the sdml_table can't be JSONified and FileNotFoundError if tables/user/table_name can't be written
  '''
  _write_blob(f'{BUCKET_NAME}/tables/{user}/{table_name}', sdml_table)

def _all_blobs_matching_pattern(pattern):
  client = storage.client()
  blobs = client.list_blobs(BUCKET_NAME)
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
   
