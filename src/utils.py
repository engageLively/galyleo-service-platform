from google.cloud import datastore
'''
Utilities for various services for the Hub
'''
def backup_users(project, database, namespace, hub_url, user_list):
  client = datastore.Client(project=project, database=database, namespace=namespace)
  with client.transaction():
    key = client.key("hub", hub_url)
    hub_user_entity = client.get(key)
    if hub_user_entity is None:
      hub_user_entity = datastore.Entity(key=key)
      hub_user_entity.update({'users': user_list})
    else:
      hub_user_entity["users"] = user_list
    client.put(hub_user_entity)