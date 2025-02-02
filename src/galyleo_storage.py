import fnmatch
import os
from json import load, loads, dump, dumps, JSONDecodeError
from google.cloud import storage
from google.cloud.exceptions import NotFound
from galyleo_object import GalyleoObject

class GalyleoStorageManager:
  '''
  A manager for Galyleo Storage -- tables and dashboards, on disk
  All read/write of dashnoards and tables should go through this class
  Properties:
    bucket_name: the name of the bucket on Google Cloud Storage
  '''
  def __init__(self, bucket_name):
    '''
    Initialize with the bucket name.
    Parameters
      bucket_name: name of the bucket in Google Cloud Storage
    '''
    self.client = storage.Client()
    self.bucket = storage.Bucket(self.client, bucket_name)
    self.bucket_name = bucket_name

  def _read_blob(self, path):
    # Utility for get_dashboard and get_table.  Open the path as a JSON file, read it, 
    # and return the resulting data structure.  Returns None for a NotFound
    """Reads a blob from a GCS bucket."""
    if path is None: return None
    blob = self.bucket.blob(path)
    if blob is None: return None
    # Download the blob's content as a string
    try:
      content = blob.download_as_text()
      return loads(content)
    except JSONDecodeError:
      return None
    except NotFound:
      return None

  def _write_blob(self, path, object):
      """Writes a JSON string to a blob in a GCS bucket."""
      # Get the bucket and blob
      blob = self.bucket.blob(path)
      if blob is None:
        raise NotFound(path)
      # Upload the JSON string to the blob
      json_string = object if type(object) == str else dumps(object)
      blob.upload_from_string(json_string, content_type="application/json")

  def _delete_blob(self, path):
      """Deletes a blob from a GCS bucket."""
      # Initialize the client
      blob = self.bucket.blob(path)
      if blob is None or not blob.exists():
        raise(NotFound(path))
      blob.delete()
   

  # think about getting from an URL, not user/dashboard name

  def get_object(self, galyleo_object):
    '''
    Pull the   GalyleoObject from the object storage.  
    Parameters:
      galyleo_object: the object as either an SDTP Table (dictionary form), for a table
    Returns:
      the dashboard file as a Galyleo dashboard structure.  Note that the disk form (JSON) is converted to a data structure before return
    '''
    return self._read_blob(galyleo_object.object_key)

  def put_object(self, galyleo_object, object_data):
    '''
    Put  object_data in storage at galyleo_object.object_key.
    Parameters:
      galyleo_object: the GalyleoObject to store
      object_data: the data to be written (either a JSON string or a JSONifiable object)
    Returns:
      None
    Raises:
      TypeError if the object_data can't be JSONified and NotFound if galyleo_object.object_key can't be written
    '''
    self._write_blob(galyleo_object.object_key, object_data)


  def delete_object(self, galyleo_object):
    '''
    Delete the galyleo_object from storage
    Parameters:
      galyleo_object: the GalyleoObject to delete
    Returns:
      None
    Raises:
      NotFound if galyleo_object.object_key can't be found
    '''
    self._delete_blob(galyleo_object.object_key)


  def all_blobs_matching_pattern(self, pattern = None):
    '''
    Return the list of all blob names matching the input pattern, which is a
    standard regex/glob pattern
    Parameters:
      pattern: a regex/glob string of the file patterns to match
    Returns:
      a list of the blob names matching pattern
    '''
    blobs = self.client.list_blobs(self.bucket_name)
    names = [blob.name for blob in blobs]
    if pattern is None: return names
    return  [name for name in names if fnmatch.fnmatch(name, pattern)]
  

  def clean_blobs(self, pattern):
    '''
    Delete  all the  blobs whose  name matches the input pattern, which is a
    standard regex/glob pattern
    Parameters:
      pattern: a regex/glob string of the file patterns to match
    Returns:
      None
    '''
    names = self.all_blobs_matching_pattern(pattern)
    for name in names: self._delete_blob(name)


  def clean_all(self):
    '''
    Delete al the blobs in the bucket.  No return value
    '''
    blobs = self.client.list_blobs(self.bucket_name)
    for blob in blobs:
      blob.delete()

