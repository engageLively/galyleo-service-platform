from sdtp import TableServer
from galyleo_storage import *
from google.cloud.exceptions import NotFound

'''
A middleware layer between the Web/REST API and the storage manager.  The objects here
manage the storagem, retrieval, and interface to persistent objects managed
by the storage manager.  Specifically, this module handles the publication, retrieval,
and storage of Galyleo Visualization Platform Dashboards and Global Data Plane
datasets
'''

def _get_table_(path):
  parts = path.split('/')
  table_dictionary = get_table(parts[0], parts[1])
  table_name = f'{parts[0]}/{parts[1][:len(".sdml")]}'
  return {
    "name": table_name,
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
    table_paths = list_tables()
    for path in table_paths:
      table_data = _get_table_(path)
      self.add_sdtp_table_from_dictionary(table_data["table_name"], table_data["table_dictionary"])


  def publish_table(self, user, table_name, table_object):
    '''
    Publish a table to the repository.  This just adds the table to the TableServer
    and stores the dictionary in the repo
    Parameters:
      user: the user publishing the table
      table_name: name of the table (without the sdml suffix)
      table_object: the table as a dictionary
    Returns
      the URL to access the table
    Raises
      An InvalidDataException if the table_object is not a table dictionary
    '''
    self.add_sdtp_table_from_dictionary(f'{user}/{table_name}', table_object)
    put_table(user, f'{table_name}.sdml', table_object)

  def delete_table(self, user, table_name):
    '''
    Delete a table from the server and the repositorr.  This just removes the table
    from the TableServer (self)
    and deletestores the dictionary in the repo
    Parameters:
      user: the user deleting  the table
      table_name: name of the table (without the sdml suffix)
      
    Returns
      Nothing
    Raises
      Nothing
    '''
    full_table_name = f'{user}/{table_name}'
    if full_table_name in self.servers:
      del self.servers[full_table_name]
    try:
      delete_table(user, f'{table_name}.sdml')
    except NotFound:
      pass

  def add_dashboard(user, dashboard_name, dashboard_object):
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
      ValueError if the dashboard isn't in the right format
    '''

  def delete_dashboard(user, dashboard_name):
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

  def list_dashboards(user = None):
    '''
    List all the dashboards under user in the repository, or, if user
    is None, all the dashboards
    Parameters:
      user: the name of the user
    Returns: 
      list of URLs of the dashboards
    '''