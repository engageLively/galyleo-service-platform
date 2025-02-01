from urllib.parse import urlparse

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
   

  
  def eq(self, galyleo_object):
    return self.kind == galyleo_object.kind and self.owner == galyleo_object.owner and self.name == galyleo_object.name
  
  
  
class GalyleoBadObjectException(Exception):
  '''
  An attempt to create a bad object (bad URL, bad kind...)
  '''
  def __init__(self, url, reason):
    self.url = url
    self.reason = reason
    self.message = f'Bad object {url}: {reason}'
    super().__init__(self.message)

def check_or_raise_exception(input, kind, name):
  '''
  kind must be dasboards or tables
  name must end with .gd.json if kind is dashboards, .sdml if kind is tables
  Parameters:
    input: original string
    kind: kind of the object
    name: name of the object
  Returns:
    No return
  Raises:
    GalyleoBadObjectException
  '''
  suffixes = {'dashboards': '.gd.json', 'tables': '.sdml'}
  if kind in suffixes.keys():
    if name.endswith(suffixes[kind]): return
    raise GalyleoBadObjectException(input, f'Objects of type {kind} must end with {suffixes[kind]} and {name} does not')
  raise GalyleoBadObjectException(input, f'Objects must be of type dashboards or tables, not {kind}')

def make_object_from_key(object_key):
  '''
  Given an object key, make a GalyleoObject from it.  The key must be of the form
  <kind>/<owner>/<name> and the name must have the appropriate suffix (.sdml
  for a table, .gd.json for a dashboard)
  Parameters:
    object_key: a string of the form  <kind>/<owner>/<name> 
  Returns: 
    the GalyleoObject whose key matches object_key
  Raises:
    GalyleoBadObjectException if the key is in the wrong form
  '''
  
  parts = object_key.split('/')
  if len(parts) != 3:
    # 4, not three, because component.path always starts with a /
    raise GalyleoBadObjectException(object_key, f'Object keys must be of the form <tables or dashboards>/<owner>/<name>')
  kind = parts[0]
  owner = parts[1]
  name = parts[2]
  check_or_raise_exception(object_key, kind, name)
  return GalyleoObject(kind, owner, name)
  
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
  if len(parts) != 4:
    # 4, not three, because component.path always starts with a /
    raise GalyleoBadObjectException(url, f'Object urls must be of the form {galyleo_root_url}/<tables or dashboards>/<owner>/<name>')
  kind = parts[1]
  owner = parts[2]
  name = parts[3]
  check_or_raise_exception(url, kind, name)
  return GalyleoObject(kind, owner, name)


