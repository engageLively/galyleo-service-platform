import os
import pytest
from google.cloud import storage
from google.cloud.exceptions import NotFound
import sys
from pathlib import Path

# parent = os.path.join(os.path.dirname(__file__), '..')
parent = str(Path(__file__).parent.parent)
key_path = os.path.join(parent, '.keys', 'galyleo-server-1105bf54b967.json')
os.environ['GOOGLE_APPLICATION_CREDENTTIALS'] = key_path
os.environ['GALYLEO_STORAGE_BUCKET'] = 'galyleo-server-test-bucket'
os.environ['GOOGLE_PROJECT'] = 'galyleo-server'
TEST_USER = 'test'
sys.path.append(parent)
print(sys.path)
from galyleo_storage import *


def test_clean():
  # clean out all the blobs from previous tests
  pattern = f'*/{TEST_USER}/*'
  print(sys.path)
  print(sys.modules.keys())
  old_blob_names = _all_blobs_matching_pattern(pattern)
  for blob_name in old_blob_names:
    _delete_blob(old_blob_name)
  blob_names = _all_blobs_matching_pattern(pattern)
  assert(blob_names == [])

# def test_t1():
#   print(parent)
#   print(sys.path)
#   print(os.environ)