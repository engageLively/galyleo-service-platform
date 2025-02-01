from src.galyleo_object import GalyleoObject, make_object_from_key, make_object_from_url

test_tables =[
  'electoral_college.sdml',
  'nationwide_vote.sdml',
  'nightingale.sdml',
  'presidential_margins.sdml',
  'presidential_vote.sdml',
  'presidential_vote_history.sdml'
]

def test_make_object_from_url():
  for name in test_tables:
    url = 'http://test.galyleo.com'
    galyleo_object = GalyleoObject('tables', 'test', name)
    assert galyleo_object.object_key == f'tables/test/{name}'
    galyleo_object_1 = make_object_from_url(f'{url}/tables/test/{name}', url)
    assert galyleo_object.eq(galyleo_object_1)

def test_make_object_from_key():
  for name in test_tables:
    galyleo_object = GalyleoObject('tables', 'test', name)
    key = f'tables/test/{name}'
    assert galyleo_object.object_key == key
    galyleo_object_1 = make_object_from_key(key)
    assert galyleo_object.eq(galyleo_object_1)

