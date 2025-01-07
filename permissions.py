from google.cloud import datastore
import os


# make sure the Google Cloud credentials are appropriately stored and accessed

PUBLIC = 'PUBLIC'  # Access is open to everyone if this permission is set
HUB = 'HUB'  # Access is open to all hub users if this permission is set

class DatastoreManager:
  '''
  Manages the interface between the service and the permissions datastore.
  The schema is simple: a pair (URL, list of users).  The list of users
  is just simple userid's, or the special id's PUBLIC and HUB, which indicate 
  broad permissions.
  Note that the only permissions managed  here are read permissions.
  The users are stored as a list, but read as sets.
  This is designed to be used only from the top level of the service, 
  which should check for all errors -- this does no error-checking

  '''
  def __init__(self, namespace):
    '''
    Parameters:
      namespace -- the namespace for objects
    '''
    self.namespace = namespace
    database = os.environ['DATASTORE_DATABASE']
    self.client = datastore.Client(database = database, namespace=namespace)

  def _get_object(self, url):
    # utility to pull the object at URL url
    key = self.client.key("URL", url)
    object = self.client.get(key)
    return object


  def _add_user(self, url, user):
    # utility to add user user to the permission list of URL.
    with self.client.transaction(): # lock the datastore
      object = self._get_object(url)
      if object is None:
        return # should this throw an error?
      if user in set(object["users"]):
        # nothing to do
        return
      object["users"].append(user)
      self.client.put(object)

  def _delete_user(self, url, user):
    # utility to delete user user from the permission list of URL
    with self.client.transaction(): # lock the datastore
      object = self._get_object(url)
      if object is None:
        return # should this throw an error
      current_users = set(object["users"])
      if user in current_users:
        current_users.remove(user)
        object["users"] = list(current_users)
        self.client.put(object)
      

  def create_object(self, url, owner, add_to_existing = False):
    '''
    Create an object indexed by url url, owned by user owner.  This will register  
    the object in the database with a single permission, owner.
    There should be no entry in the DB for url.  However, if there is:
    1. If the owner already has read permission, nothing is changed
    2. If the owner doesn't have read permission and add_to_existing = False,
       a ValueError is raised.
    3. If the owner doesn't have read permission and add_to_existing = True, the
       owner is added to the permissions of this url
    Parameters:
      url: URL for the created object
      owner: user who owns the current  object
      add_to_existing: if True, add the owner to the object even if it already existed
    Returns:
      None
    Raises:
      ValueError if an object with this URL exists, the owner isn't in the user list, and add_to_existing = False
    '''
    object = self._get_object(url)
    if object is None:
      with self.client.transaction():
        # create the object and store it
        key = self.client.key("URL", url)
        object = datastore.Entity(key)
        object.update(
          {
            "users": [owner]
          }
        )
        self.client.put(object)
    else:
      # Existing object!  This shoudln't happen, but to avoid throwing
      # an error without need, let's walk through the cases.  If the
      # owner already has read on the object, non-pathological, just return.
      # If the caller told us to ignore this error, just add the user
      # otherwise throw an error
      users = set(object["users"])
      if owner in users:
        return
      if  add_to_existing:
        self._add_user(url, owner)
        return
      else:
        raise ValueError(f'Conflicting entity at {url} already in database')
      
  def delete_object(self, url):
    '''
    Delete the object with URL url.
    Parameters:
      url: URL for the created object
    '''
    key = self.client.key("URL", url)
    if key is not None:
      self.client.delete(key)
    # Throw an error if the key is None?

   

  

  def add_user_access(self, url, user_name): 
    '''
    Add user_name as an accessor of this object.  Note that if user_name is HUB or PUBLIC it won't delete 
    previous access, just in case HUB or PUBLIC is later deleted.
    Does nothing if there is no stored object with this URL
    Parameters:
      url: URL for the object to add the user to
      user_name: user to add
    Returns:
      Nothing

    '''
    object = self._get_object(url)
    if object is None:
      # shouldn't happen....
      return # should an error be thrown?  Should the entity be created?
    else:
      self._add_user(url, user_name)



  def delete_user_access(self, url, user_name):
    '''
    Delete user_name as an accessor of this object.  Note that if user_name is the object owner, the item won't be deleted
    Does nothing if there is no stored object with this URL.
    Parameters:
      url: URL for the object to remove  the user from
      user_name: user to remove
    Returns:
      Nothing
    '''
    # Note that we shouldn't be able to delete the access of the owner.
    # This requires keeping a separate field, owner, which we'll set in create
    # and this will check and do nothing on an attempt to delete owner.
    object = self._get_object(url)
    if object is None:
      # shouldn't happen....
      return # should an error be thrown?  Should the entity be created?
    else:
      self._delete_user(url, user_name)

  def get_users(self, url):
    '''
    Return the set of users with access to this object.  Note that if HUB or PUBLIC has access to
    this object, then that is the only item returned, even if others are stored
    Parameters:
      url: URL for the object to get the user list for
    Returns:
      The set of users which have access to the object, {PUBLIC} if the object
      is readable by everyone, {HUB} if it's accessible by everyone, the empty
      set if the object doesn't exist
    '''
    object = self._get_object(url)
    if object is not None:
      users = set(object['users'])
      if PUBLIC in users:
        return set([PUBLIC])
      elif HUB in users:
        return set([HUB])
      else: return users
    else: return set()

  def clear(self):
    '''
    Delete ALL the objects in this namespace.  Primarily designed for test use

    '''
    query = self.client.query(kind = "URL")
    query.keys_only()
    keys = query.fetch()
    self.client.delete_multi(keys)

#--------------------------------------------------------------------------
# tests
#---------------------------------------------------------------------------
from pathlib import Path

def setup_tests():
  parent = str(Path(__file__).parent)
  key_path = os.path.join(parent, '.keys', 'galyleo-server-1105bf54b967.json')
  os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = key_path
  os.environ['GALYLEO_STORAGE_BUCKET'] = 'galyleo-server-test-bucket'
  os.environ['GOOGLE_PROJECT'] = 'galyleo-server'
  os.environ['DATASTORE_DATABASE'] = 'galyleo-server'




def test_create_object():
  manager.create_object('t1', 'user1')
  key = manager.client.key("URL", "t1")
  object = manager.client.get(key)
  assert(object is not None)
  assert(object["users"] == ["user1"] )
  manager.create_object('t1', 'user1')
  object = manager.client.get(key)
  assert(object is not None)
  assert(object["users"] == ["user1"] )
  manager.create_object('t1', 'user2', True)
  object = manager.client.get(key)
  assert(object is not None)
  assert(set(object["users"]) == set(["user1", "user2"]))
  failure_caught = False
  try:
    manager.create_object('t1', 'user3')
  except ValueError:
    failure_caught = True
  assert failure_caught, "Error when attempt to add existing url to database not caught"

def test_delete_object():
  manager.create_object('t1', 'user1')
  key = manager.client.key("URL", "t1")
  manager.delete_object('t1')
  object = manager.client.get(key)
  assert object is None

def test_add_user():
  manager.create_object('t1', 'user1')
  manager.add_user_access('t1', 'user1')
  key = manager.client.key("URL", "t1")
  object = manager.client.get(key)
  assert object["users"] == ['user1']
  manager.add_user_access('t1', 'user2')
  object = manager.client.get(key)
  assert set(object["users"]) == {'user1', 'user2'}

def test_delete_user():
  manager.create_object('t1', 'user1')
  manager.add_user_access('t1', 'user2')
  key = manager.client.key("URL", "t1")
  manager.delete_user_access('t1', 'user2')
  object = manager.client.get(key)
  assert object["users"] == ['user1']
  manager.delete_user_access('t1', 'user3')
  object = manager.client.get(key)
  assert object["users"] == ['user1']

def test_get_users():
  manager.create_object('t1', 'user1')
  assert manager.get_users("t1") == {"user1"}
  manager.add_user_access('t1', 'user2')
  assert manager.get_users("t1") == {"user1", "user2"}
  manager.add_user_access('t1', 'HUB')
  assert manager.get_users("t1") == {"HUB"}
  manager.add_user_access('t1', 'PUBLIC')
  assert manager.get_users("t1") == {"PUBLIC"}
  manager.delete_user_access('t1', 'PUBLIC')
  assert manager.get_users("t1") == {"HUB"}
  manager.delete_user_access('t1', 'HUB')
  assert manager.get_users("t1") == {"user1", "user2"}
  manager.delete_user_access('t1', 'user2')
  assert manager.get_users("t1") == {"user1"}
 

  
  
setup_tests()
manager = DatastoreManager('test')
manager.clear()
test_create_object()
manager.clear()
test_delete_object()
manager.clear()
test_add_user()
manager.clear()
test_delete_user()
manager.clear()
test_get_users()
manager.clear()