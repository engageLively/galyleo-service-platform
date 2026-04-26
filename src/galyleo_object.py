from urllib.parse import urlparse

DISPLAY_DELIM = "\u00B7"  # ·

class GalyleoObject:
  '''
  A Galyleo Object is a three-tuple: kind, owner, name.  Its URL is derived from this:
  the URL is ROOT_URL/kind/owner/name.   URL is its external name and
  is used to manage permissions; owner is the owner of the object, and the name is the 
  object name.  The first thing the server should do is create a Galyleo object for each 
  incoming request, and that is what is manipulated by all of the object managers
  Properties:
    object_key: The key that is used to store this object in the table server and on disk, and acts as a key for permissions.  Currently kind/owner/name
    kind: the kind of the object -- ATM, either dashboards or tables
    owner: the user who owns the object
    name: the name of the object
  '''
  def __init__(self,  kind, owner, name):
    '''
    Parameters:
      kind: the kind of the object -- ATM, either dashboards or tables
      owner: the user who owns the object
      name: the name of the object
    '''
    self.kind = kind
    self.owner = owner
    self.name = name
    self.object_key = f'{kind}/{owner}/{name}'

  def display_name(self):
    '''
    Return the name of the object for the UI in the form owner/name or
    name·owner for a table (UI prefers name·owner so the name appears
    first in the pulldown)
    '''
    return f'{self.name}{DISPLAY_DELIM}{self.owner}' if self.kind == 'tables' else f'{self.owner}/{self.name}'
   
  def __eq__(self, other):
    if not isinstance(other, GalyleoObject):
        return NotImplemented
    return self.kind == other.kind and self.owner == other.owner and self.name == other.name
  

class GalyleoBadObjectException(Exception):
  '''
  An attempt to create a bad object (bad URL, bad kind...)
  '''
  def __init__(self, url, reason):
    self.url = url
    self.reason = reason
    self.message = f'Bad object {url}: {reason}'
    super().__init__(self.message)

import re


def is_valid_kind_and_name(kind, name):
  '''
  Return (True, None) if kind is a valid kind and name ends with
  the appropriate suffix, (False, msg) otherwise
  Parameters:
    kind: the kind of the object
    name: the name of the object
  Returns
    (True, None) if kind is a valid kind and name ends with
    the appropriate suffix, (False, msg) otherwise
  '''
  suffix = {'dashboards': '.gd.json', 'tables': '.sdml'}
  if not kind in suffix.keys():
    return (False, f'kind must be one of {suffix.keys()}, not {kind}')
  if not name.endswith(suffix[kind]):
    return (False, f'{name} does now end with {suffix[kind]}')
  return (True, None)


def get_kind_owner_name(parts, input):
  '''
  Get the parts of a GalyleoObject from the input, which must be an iterable
  with three items  Returns a record
  {"kind": "name": "owner": } or throws an exception if it can't be parsed
  Accepts:
      <kind>/<owner>/<name>
      <kind>/<name>·<owner>   (DISPLAY_DELIM = "·")
  Parameters:
    parts: a triple (list, tuple) with the input parts
    input: the original input string
  Returns:
    An object of the form {kind, owner, name}
  Raises:
    GalyleoBadObjectException if there is a malformed input string
  '''
  msg = f'''
    Input must be in the form <kind>/<owner>/<name> OR <kind>/<name>{DISPLAY_DELIM}<owner>,
    where kind is one of 'tables', 'dashboards', and name ends with .gd.json 
    if kind == 'dashboards' and '.sdml' if kind == 'tables'. The input was {input}.
  '''
  suffix = {'dashboards': '.gd.json', 'tables': '.sdml'}

  if len(parts) not in (2, 3):
    raise GalyleoBadObjectException(input, msg)

  kind = parts[0]
  if kind not in suffix:
    raise GalyleoBadObjectException(input, msg)

  if len(parts) == 2:
    if kind != "tables":
      raise GalyleoBadObjectException(input, msg)
    subparts = parts[1].split(DISPLAY_DELIM, 1)
    if len(subparts) != 2:
      raise GalyleoBadObjectException(input, msg)
    name = subparts[0].strip()
    owner = subparts[1].strip()
  else:
    owner = parts[1]
    name = parts[2]

  if not name.endswith(suffix[kind]):
    raise GalyleoBadObjectException(input, msg)

  return {"kind": kind, "owner": owner, "name": name}
  
  
def make_object_from_key(object_key):
  '''
  Given an object key, make a GalyleoObject from it.  The key must be of the form
  <kind>/<owner>/<name> or <kind>/<name>/<owner> and the name must have the appropriate suffix (.sdml
  for a table, .gd.json for a dashboard)
  Parameters:
    object_key: a string of the form  <kind>/<owner>/<name> or <kind>/<name>/<owner> 
  Returns: 
    the GalyleoObject whose key matches object_key
  Raises:
    GalyleoBadObjectException if the key is in the wrong form
  '''
  
  parts = object_key.split('/')
  record = get_kind_owner_name(parts, object_key)
  return GalyleoObject(record["kind"], record["owner"], record["name"])
  
def make_object_from_url(url, galyleo_root_url):
  '''
  Given an url, make a GalyleoObject from it.  The url must be of the form
  <root-url>/<kind>/<owner>/<name> and the name must have the appropriate suffix (.sdml
  for a table, .gd.json for a dashboard
  Parameters:
    url: an URL of the form  <root-url>/<kind>/<owner>/<name> 
  Raises:
    GalyleoBadObjectException if the url is in the wrong form
  '''
  components = urlparse(url)
  if f'{components.scheme}://{components.netloc}' != galyleo_root_url:
    raise GalyleoBadObjectException(url, f'Object urls must start with {galyleo_root_url}, not {components.scheme}/{components.netloc}')
  parts = components.path.split('/')
  record = get_kind_owner_name(parts[1:], url)
  return GalyleoObject(record["kind"], record["owner"], record["name"])
  


