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
  
  def publish_object(self, galyleo_object,  object_data, share_set = set()):
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
      JSONDecodeError if the object can't be turned into JSON
    '''
    object_to_write = object_data if type(object_data) == str else dumps(object_data, indent=2)
    # object_to_load = loads(object_data) if type(object_data) == str else object_data
    object_to_load = loads(object_to_write)
    if galyleo_object.kind == 'dashboards':
      self._validate_dashboard(object_to_load)
    if galyleo_object.kind == 'tables':
      self._validate_table(object_to_load)
      self.galyleo_table_server.add_sdtp_table_from_dictionary(galyleo_object.object_key, object_to_load)
    share_set.add(galyleo_object.owner)
    self.storage_manager.put_object(galyleo_object, object_to_write)
    self.permissions_manager.create_or_update_object(galyleo_object, share_set)
    
  def delete_object(self, galyleo_object):
    '''
    Delete the dashboard user/dashboard_name from the repository.
    Parameters:
      galyleo_object: the object to remove
    Returns: 
      No return 
    Raises:
      GalyleoNotFoundException if it can't find the object
    '''
    try:
      self.storage_manager.delete_object(galyleo_object)
      self.permissions_manager.delete_object(galyleo_object)
      if galyleo_object.object_key in self.galyleo_table_server.servers:
        del self.galyleo_table_server.servers[galyleo_object.object_key]
    except NotFound:
      raise GalyleoNotFoundException(f'{galyleo_object.object_key} does not exist')

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
  