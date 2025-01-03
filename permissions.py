from google.cloud import datastore

# make sure the Google Cloud credentials are appropriately stored and accessed

PUBLIC = 'PUBLIC'
HUB = 'HUB'

class GalyleoObject:
  '''
  An SDTP Table or Galyleo Dashboard.  This just keeps 
  track of the viewer permissions for the object
  '''
  def __init__(self, name):
    self.name  = name

  def get_users(self):
    '''
    Return the list of users with access to this object.  Note that if HUB or PUBLIC has access to
    this object, then that is the only item returned, even if others are stored
    '''

  def add_user_access(self, user_name): 
    '''
    Add user_name as an accessor of this object.  Note that if user_name is HUB or PUBLIC it won't delete 
    previous access, just in case HUB or PUBLIC is later deleted
    '''
  def delete_user_access(self, user_name):
    '''
    Delete user_name as an accessor of this object.  Note that if user_name is the object owner, the item won't be deleted
    '''
    
