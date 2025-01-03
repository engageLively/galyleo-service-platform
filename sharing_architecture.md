# Galyleo Sharing Architecture
Dashboards and data sets are shared using an identical architecture:
1. Private (use of the publisher only)
2. Access List (read by designated users)
3. Hub-wide (all users of the hub)
4. Public (anyone can read)
Note that all data sets and dashboards can only be written by the owner.

#  Implementation
At the moment, we'll use Google Datastore to hold the table.  The table will be of the form:
```
[{"name": "string"}, {"user": "string"}]
```
`user` can take values:
* `PUBLIC`: viewable by all members of the public
* `HUB`: viewable by all hub users
* `<email address>`: viewable by hub user with email `<email address>`.  Note that, since we use JupyterHub as the Oauth provider (we may broaden this in future) the email address must be for a hub user.
