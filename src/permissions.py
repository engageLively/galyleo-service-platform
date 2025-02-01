from google.cloud import datastore
import os
from galyleo_object import GalyleoObject

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
  def __init__(self, project, database, namespace):
    '''
    Parameters:
      project: the google project
      database: the database used to store objects
      namespace: the namespace for objects
    '''
    self.namespace = namespace
    self.client = datastore.Client(project=project, database=database, namespace=namespace)

  def _get_object(self, key):
    # utility to pull the object at URL url
    key = self.client.key("key", key)
    object = self.client.get(key)
    return object


  def _add_user(self, key, user):
    # utility to add user user to the permission list of URL.
    with self.client.transaction(): # lock the datastore
      object = self._get_object(key)
      if object is None:
        return # should this throw an error?
      if user in set(object["users"]):
        # nothing to do
        return
      object["users"].append(user)
      self.client.put(object)

  def _delete_user(self, key, user):
    # utility to delete user user from the permission list of URL
    with self.client.transaction(): # lock the datastore
      object = self._get_object(key)
      if object is None:
        return # should this throw an error
      current_users = set(object["users"])
      if user in current_users:
        current_users.remove(user)
        object["users"] = list(current_users)
        self.client.put(object)

      
  def create_or_update_object(self, galyleo_object, share_list = None):
    '''
    Create an object indexed by url url, owned by user owner, or, if there's an existing object,
    update its share list to share_list/
    Parameters:
      galyleo_object: the object to create
      share_list: list of users permittied to access the object
    Returns:
      None
    '''
    if share_list is None: share_list = []
    share_set = set(share_list)
    owner = galyleo_object.owner
    key = galyleo_object.object_key
    share_set.add(owner)

    with self.client.transaction():
      object = self._get_object(key)
      if object is None:
        key = self.client.key("key", key)
        object = datastore.Entity(key)
      else:
        share_set = share_set.union(set(object["users"]))
    
      # create the object and store it
      
      record = {
        "users": list(share_set),
        "owner": owner
      }
      object.update(record)
      self.client.put(object)

      
  def delete_object(self, galyleo_object):
    '''
    Delete the galyleo obejct
    Parameters:
     galyleo_object: object to be deleted 
    '''
    if galyleo_object is None: return
    key = self.client.key("key", galyleo_object.object_key)
    if key is not None:
      self.client.delete(key)
    # Throw an error if the key is None?


  def add_user_access(self, galyleo_object, user_name): 
    '''
    Add user_name as an accessor of this object.  Note that if user_name is HUB or PUBLIC it won't delete 
    previous access, just in case HUB or PUBLIC is later deleted.
    If there is no stored object with this object's key, add the owner and user to the list
    Parameters:
      galyleo_object: the object to add the user to
      user_name: user to add
    Returns:
      Nothing

    '''
    key = galyleo_object.object_key
    object = self._get_object(key)
    if object is None:
      # shouldn't happen....
      self.create_or_update_object(galyleo_object, [user_name])
      
    else:
      self._add_user(key, user_name)


  def delete_user_access(self, galyleo_object, user_name):
    '''
    Delete user_name as an accessor of this object.  Note that if user_name is the object owner, the item won't be deleted
    Does nothing if there is no stored object with this URL.
    Parameters:
      galyleo_object: the object to remove the user from
      user_name: user to remove
    Returns:
      Nothing
    '''
    # Note that we shouldn't be able to delete the access of the owner.
    # This requires keeping a separate field, owner, which we'll set in create
    # and this will check and do nothing on an attempt to delete owner.
    key = galyleo_object.object_key
    object = self._get_object(key)
    if object is None:
      # shouldn't happen....
      return # should an error be thrown?  Should the entity be created?
    else:
      self._delete_user(key, user_name)

  def get_users(self, galyleo_object):
    '''
    Return the set of users with access to this object.  
    Parameters:
      galyleo_object: the GalyleoObject to get the user list for
    Returns:
      The set of users which have access to the object
    '''
    key = galyleo_object.object_key
    object = self._get_object(key)
    if object is not None:
      return set(object['users'])
    else: return set()
  
  def set_users(self, galyleo_object, user_set):
    '''
    Sets the set of users with access to this object. 
    Parameters:
      galyleo_object: the GalyleoObject to get the user list for
      user_set: the updated set of users
    Returns:
      Nothing
    Side Effects:
      Updates the user set.  If there is no object, creates it
    '''
    with self.client.transaction():
        key = galyleo_object.object_key
        object = self._get_object(key)
    if object is None:
      self.create_or_update_object(galyleo_object, list(user_set))
    else:
      object["users"] = list(user_set)
      self.client.put(object)


  def clear(self):
    '''
    Delete ALL the objects in this namespace.  Primarily designed for test use

    '''
    query = self.client.query(kind = "key")
    query.keys_only()
    keys = query.fetch()
    self.client.delete_multi(keys)
