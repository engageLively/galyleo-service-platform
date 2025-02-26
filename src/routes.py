API_ROUTES = [
  {
    "route": "/services/galyleo/dashboards/<owner>/<dashboard>",
    "method": "GET",
    "description": "Return the dashboard owned by <owner> named <dashboard>"
  },
  {
    "route": "/services/galyleo/table/<owner>/<table>",
    "method": "GET",
    "description": "Return the table owned by <owner> named <table>"
  },
  {
    "route": "/services/galyleo/publish_data",
    "method": "POST",
    "parameters": "table, a table in SDML format, name, which must end in .sdml.  Optionally, share_list, the list of users with access to the table",
    "description": "Publish the table"
  },
  {
    "route": "/services/galyleo/publish",
    "method": "POST",
    "parameters": "dashboard, a dashboard in Galyleo format, aname, which must end in .gd.json.  Optionally, share_list, the list of users with access to the dashboard",
    "description": "Publish the dashboard"
  },
  {
    "route": "/services/galyleo/get_table_names",
    "method": "GET",
    "description": "Get the tables (as a list of URLs) accessible by this user"
  },
  {
    "route": "/services/galyleo/get_table_schemas",
    "method": "GET",
    "description": "Get the schemas of tables  accessible by this user"
  },
  {
    "route": "/services/galyleo/get_table_schema",
    "method": "GET",
    "parameters": "table, the name of the table to get the schema for.",
    "description": "Get the schema of the table"
  },
  {
    "route": "/services/galyleo/get_range_spec",
    "method": "GET",
    "parameters": "table, the name of the table, column, the name of the column",
    "description": "Get the max and min of the column, as a JSON structure"
  },
  {
    "route": "/services/galyleo/get_all_values",
    "method": "GET",
    "parameters": "table, the name of the table, column, the name of the column",
    "description": "Get the distinct values  of the column, as a JSON list"
  },
  {
    "route": "/services/galyleo/get_column",
    "method": "GET",
    "parameters": "table, the name of the table, column, the name of the column",
    "description": "Get  the column, as a JSON list"
  },
   {
    "route": "/services/galyleo/get_filtered_rows",
    "method": "POST",
    "parameters": "table, the name of the table.  Optional: columns, a list of columns to get, and filter_spec, a filter in SDQL format",
    "description": "A list of rows which match the filter"
  },
]