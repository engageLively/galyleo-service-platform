# Galyleo Object Storage Architecture
All objects (dashboards and tables) are stored in Google Cloud Storage in a bucket specfic to this deployment.
The URL for a dashboard is https://<jupyterhub-url>/services/galyleo/dashboards/<user>/<dashboard-name>.
The URL for a table is  https://<jupyterhub-url>/services/galyleo/tables/<user>/<table-name>.
Tables are stored in <bucket>/tables/<user>, and dashboards are stored in <bucket>/dashboards/<user>
