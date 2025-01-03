# Environment Variables of the Galyleo Service Platform

For reference, the configuration for the service in the JupyterHub's config.yaml file will have this structure:
```
{
  'name': 'galyleo',
  'url': <raw url for the galyleo service,
  'api_token': <secret_string>,
  'oauth_redirect_uri': '<JUPYTER_HUB_URL>/services/galyleo/<oauth_callback>',
  'oauth_no_confirm': True,
  'oauth_client_id': 'service-galyleo'
}
```
| Variable | Definition |
| JUPYTERHUB_API_URL | API URL for the parent Jupyter Hub |
|  GALYLEO_SERVICE_API_TOKEN' | Token used to validate the Galyleo service.  This ust agree with the service API token for Galyleo in the hub's config.yaml (api_token in the service definition) |
| JUPYTERHUB_URL |  URL for the parent Jupyter Hub |
| GALYLEO_CLIENT_ID | 'oauth_client_id' from the config.yaml file |
| BUCKET_NAME | name of the bucket where dashboards and tables are stored |
| PROJECT_NAME | name of the google cloud bucket |
| GOOGLE_APPLICATION_CREDENTIALS | path (in the container) to the Google service account key |

# Required Google Permissions
The service account must have:
1. Permission to read and write objects, delete and create objects, and list objects in the appropriate bucket.  See [https://cloud.google.com/storage/docs/access-control/using-iam-permissions](https://cloud.google.com/storage/docs/access-control/iam-permissions)
2. Read/write access to datastore objects (`roles/datastore.user` seems adequate.  See [https://cloud.google.com/datastore/docs/access/iam](https://cloud.google.com/datastore/docs/access/iam))
