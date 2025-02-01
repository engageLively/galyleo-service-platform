import os
from google.cloud import storage
from google.cloud.exceptions import NotFound
import sys
from pathlib import Path
from json import dumps

# parent = os.path.join(os.path.dirname(__file__), '..')
root = str(Path(__file__).parent.parent)
key_path = os.path.join(root, '.keys', 'galyleo-server-1105bf54b967.json')

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = key_path

os.environ['GOOGLE_PROJECT'] = 'galyleo-server'
TEST_USER = 'test'
sys.path.append(f'{root}/src')

from permissions import DatastoreManager
from galyleo_object import GalyleoObject

#--------------------------------------------------------------------------
# tests
#---------------------------------------------------------------------------

def test_create_object():
  manager = DatastoreManager('galyleo-server', 'galyleo-server', 'test')
  manager.clear()
  test_object = GalyleoObject('table', 'test', 't1.table' )
  manager.create_or_update_object(test_object)
  key = manager.client.key("key", test_object.object_key)
  object = manager.client.get(key)
  assert(object is not None)
  assert(object["users"] == [test_object.owner] )
  manager.client.close()
  del manager
 
  
# test_create_object()

def test_delete_object():
  manager = DatastoreManager('galyleo-server', 'galyleo-server', 'test')
  manager.clear()
  test_object = GalyleoObject('table', 'test', 't1.table' )
  manager.create_or_update_object(test_object)
  key = manager.client.key("key", test_object.object_key)
  object = manager.client.get(key)
  assert(object is not None)
  manager.delete_object(test_object)
  object = manager.client.get(key)
  assert object is None

# test_delete_object()
def test_add_user():
  manager = DatastoreManager('galyleo-server', 'galyleo-server', 'test')
  manager.clear()
  test_object = GalyleoObject('table', 'test', 't1.table' )
  manager.create_or_update_object(test_object)
  key = manager.client.key("key", test_object.object_key)
  object = manager.client.get(key)
  assert object["users"] == ['test']
  manager.add_user_access(test_object, 'user2')
  object = manager.client.get(key)
  assert set(object["users"]) == {'test', 'user2'}
  test_object_2 = GalyleoObject('table', 'test', 't2.table' )
  manager.add_user_access(test_object_2, "user2")
  key2 = manager.client.key("key", test_object_2.object_key)
  object = manager.client.get(key2)
  assert object is not None
  assert set(object["users"]) == {"test", "user2"}
# test_add_user()

def test_delete_user():
  manager = DatastoreManager('galyleo-server', 'galyleo-server', 'test')
  manager.clear()
  test_object = GalyleoObject('table', 'test', 't1.table' )
  manager.create_or_update_object(test_object)
  key = manager.client.key("key", test_object.object_key)
  object = manager.client.get(key)
  assert object["users"] == ['test']
  manager.add_user_access(test_object, 'user2')
  manager.delete_user_access(test_object, 'user2')
  assert object["users"] == ['test']
  manager.delete_user_access(test_object, 'user3')
  object = manager.client.get(key)
  assert object["users"] == ['test']


# test_delete_user()

def test_get_users():
  manager = DatastoreManager('galyleo-server', 'galyleo-server', 'test')
  manager.clear()
  test_object = GalyleoObject('table', 'test', 't1.table' )
  manager.create_or_update_object(test_object)
  assert manager.get_users(test_object) == {"test"}
  manager.add_user_access(test_object, 'user2')
  assert manager.get_users(test_object) == {"test", "user2"}

# test_get_users()

def test_set_users():
  manager = DatastoreManager('galyleo-server', 'galyleo-server', 'test')
  manager.clear()
  test_object = GalyleoObject('table', 'test', 't1.table' )
  manager.create_or_update_object(test_object)
  key = manager.client.key("key", test_object.object_key)
  user_set = {"test", "user2", "user3"}
  manager.set_users(test_object, user_set)
  object = manager.client.get(key)
  assert set(object["users"]) == user_set
  test_object_2 = GalyleoObject('table', 'test', 't2.table' )
  manager.set_users(test_object_2, user_set)
  key2 = manager.client.key("key", test_object_2.object_key)
  object = manager.client.get(key2)
  assert object is not None
  assert set(object["users"]) == user_set