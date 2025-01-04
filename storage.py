import gcsfs
import os
from json import load, loads, dump, dumps

BUCKET_NAME = os.environ['GALYLEO_STORAGE_BUCKET']
PROJECT_NAME = os.environ['GOOGLE_PROJECT']

GALYLEO_FILE_SYSTEM = gcsfs.GCSFileSystem(project=PROJECT_NAME)

def get_object(object_name):
  '''
  Pull object_name from the repo.  Returns None if the object is not found.
  Object must be in the form dashboards/<user-name>/<dashboard-name>.gd.json for a dashboard
  or tables/<user-name>/<table-name>.sdml for an SDML table
  Parameters:
    object_name: the name of the object (see above for format)
  Returns:
    an SDML Table or dashboard file (depending on what's required).  Note that the disk form (JSON) is converted to a data structure before 
    return
  '''

def put_dashboard(dashboard_name, dashboard_object):
  '''
  Put  dashboard_object as dashboard_name in the repo.  Throws an error if dashboard_name 
  is not in the right form (dashboards/<user-name>/<dashboard-name>.gd.json) or
  dashboard_object is not a dashboard data structure.  Note that conversion to JSON form is done here.
  '''

def put_table(table_name, sdml_table):
  '''
  Put  sdml_table as table_name in the repo.  Throws an error if table_name 
  is not in the right form (tables/<user-name>/<table-name>.sdml) or
  sdml_table is not an SDML Table.  Note that conversion to JSON form is done here.
  '''

 def list_tables():
   '''
   Return the list of tables stored in the repo.  
   '''

  def list_dashboards():
   '''
   Return the list of dashboards stored in the repo.  
   '''
   
