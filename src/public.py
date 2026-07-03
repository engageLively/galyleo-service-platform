# public.py

from fastapi import FastAPI, Request, Query, HTTPException # type: ignore
from uvicorn.middleware.proxy_headers import ProxyHeadersMiddleware
from pydantic import BaseModel # type: ignore
from starlette.responses import Response, PlainTextResponse
from typing import Optional, List, Dict, Any
from fastapi.responses import JSONResponse, RedirectResponse, HTMLResponse # type: ignore
from fastapi.templating import Jinja2Templates # type: ignore
from fastapi.staticfiles import StaticFiles # type: ignore
from fastapi.middleware.cors import CORSMiddleware
from galyleo_object_manager import GalyleoObjectManager
import os
from json import JSONDecodeError, loads, dumps
from galyleo_object import GalyleoObject,  make_object_from_key, make_object_from_url, GalyleoBadObjectException


GALYLEO_PERMISSIONS_DATABASE = os.environ['GALYLEO_PERMISSIONS_DATABASE']
GALYLEO_PERMISSIONS_NAMESPACE = os.environ['GALYLEO_PERMISSIONS_NAMESPACE']
GOOGLE_PROJECT = os.environ['GOOGLE_PROJECT']
BUCKET_NAME = os.environ['BUCKET_NAME']
HUB_URL = os.environ['HUB_URL']
PUBLIC_URL = os.environ['PUBLIC_URL']
GALYLEO_EDITOR_URL = os.environ.get('GALYLEO_EDITOR_URL', 'https://engagelively.github.io/galyleo-dashboard/')



# The 'world's vote'—pull the public IP or local dev address from the environment
allowed_origins = [
    "http://localhost:5000",
    "http://127.0.0.1:5000",
    os.getenv("PUBLIC_IP_ADDRESS", ""), # Dynamic placeholder for deployment
]




def _get_accessible_objects(kind, galyleo_object_manager):
  paths = galyleo_object_manager.list_objects(kind)
  result = []
  for path in paths:
    galyleo_object = make_object_from_key(path)
    if galyleo_object_manager.object_access_permitted(galyleo_object, None, False):
      result.append(path)
  return result

def _gen_navbar(active):
  def gen_link(link, active):
    class_val = 'active' if link[1] == active else 'inactive'
    return {"link": link[1], "text": link[0], "class": class_val}
  
  links = [
    ('Home', 'index'),
    ('View Tables', 'tables'),
    ('View Dashboards', 'dashboards')
  ]

  result  = [gen_link(link, active) for link in links]
  return result

def render_template(template, request, navbar_link, value_dict):
  template_dict = value_dict.copy()
  template_dict["navbar_contents"] = _gen_navbar(navbar_link)
  template_dict["request"] = request
  # Use keyword arguments to ensure they hit the right slots
  return templates.TemplateResponse(request=request, name=template, context=template_dict)


# Point Flask to your templates directory
app = FastAPI()
templates = Jinja2Templates(directory="public_templates")
app.mount("/static", StaticFiles(directory="static"), name="static")
app.add_middleware(ProxyHeadersMiddleware, trusted_hosts=["*"])
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin for origin in allowed_origins if origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def block_socketio_http(request, call_next):
  # block any engine.io handshake path before socketio/engineio gets it
  # return 204 (No Content) so Engine.IO won't log a 403
  if "lively-socket.io" in (request.url.path or ""):
    return PlainTextResponse("socket disabled", status_code=204)
  return await call_next(request)


def _object_from_name(name: str):
  # Accept either:
  #   tables/<owner>/<name>.sdml
  #   <owner>/<name>.sdml
  #   <name>.sdml/<owner>      (display form)
  # and rely on make_object_from_key / galyleo_object parsing to disambiguate.
  if name.startswith("http"):
    # If you don’t need URL form in public service, you can drop this branch.
    return make_object_from_url(name, PUBLIC_URL)
  if name.startswith("tables/") or name.startswith("dashboards/"):
    return make_object_from_key(name)
  return make_object_from_key(f"tables/{name}")

def _get_object_if_permitted(name):
  galyleo_object = _object_from_name(name)
  return galyleo_object_manager.get_object_if_permitted(galyleo_object, None, False)


galyleo_object_manager = GalyleoObjectManager(GOOGLE_PROJECT,GALYLEO_PERMISSIONS_DATABASE, GALYLEO_PERMISSIONS_NAMESPACE, BUCKET_NAME)

# Instantiate your object manager (adjust as needed)

# --- UI ROUTES ---

@app.get("/", response_class=HTMLResponse)
def index(request: Request):
  """Landing page."""
  return render_template("index.html", request, "Home", {})

@app.get("/healthz", include_in_schema=False)
async def healthz():
    """Simple health check used by Kubernetes liveness/readiness probes."""
    return PlainTextResponse("ok", status_code=200)

@app.get("/dashboards", response_class=HTMLResponse)
def dashboards(request: Request):
  """List all public dashboards."""
  dashboards = _get_accessible_objects('dashboards', galyleo_object_manager)
  return render_template("view_dashboards.html", request, "View Dashboards", {"dashboards": dashboards})

@app.get("/tables", response_class=HTMLResponse)
def tables(request: Request):
    """List all public tables."""
    tables = _get_accessible_objects('tables', galyleo_object_manager)
    return render_template("view_tables.html", request, "View Tables", {"tables": tables})

# --- View Routes

@app.get("/view_table", response_class=HTMLResponse)
async def view_table(request: Request, table_id: str = Query(...)):
  # table_id will contain slashes, e.g. "folder/subfolder/my-table"

  table = _get_object_if_permitted(table_id)
  if table is None:
    return HTMLResponse(content="Table not found", status_code=404)
  return render_template(
    "view_table.html",
    request,
    "View Tables",
    {"table_name": table_id, "schema": table.schema}
  )

def _get_table(table_id):
  table = _get_object_if_permitted(table_id)
  if table is None:
    return None
  return table

@app.get('/tables/{owner}/{table_id}')
async def get_table(owner, table_id):
  table = _get_table(f'tables/{owner}/{table_id}')
  if table is None:
    return HTMLResponse(content="Table not found", status_code=404)
  return table
  


def _get_dashboard(dashboard_id):
  dashboard = _get_object_if_permitted(dashboard_id)
  if dashboard is None:
    return HTMLResponse(content="Dashboard not found", status_code=404)
  
  # Handle both dict and JSON string cases
  if isinstance(dashboard, str):
    try:
      dashboard_dict = loads(dashboard)
    except JSONDecodeError:
      return HTMLResponse(content="Invalid dashboard JSON", status_code=400)
  else:
    dashboard_dict = dashboard  # already dict
    
    # Rewrite table URLs if they point to Hub
    # Inside _get_dashboard, after normalizing to dashboard_dict

  changed = False

  tables = dashboard_dict.get('tables', {}) # type: ignore
  if isinstance(tables, dict):
    # tables is {table_id: table_dict}
    for table_id, table in tables.items():
      connector = table.get('connector') or table.get('connection') or {}
      url = connector.get('url')
      if url and HUB_URL in url:
        connector['url'] = url.replace(HUB_URL, PUBLIC_URL)
        changed = True
  elif isinstance(tables, list):
    # fallback for list case
    for table in tables:
      connector = table.get('connector') or table.get('connection') or {}
      url = connector.get('url')
      if url and HUB_URL in url:
        connector['url'] = url.replace(HUB_URL, PUBLIC_URL)
        changed = True
  else:
    # unexpected type, skip or log
    pass

# If changed and original was str, re-serialize
  if changed and isinstance(dashboard, str):
    return dumps(dashboard_dict)

  return dashboard

@app.get('/dashboards/{owner}/{dashboard}')
async def get_dashboard(owner, dashboard):
  return _get_dashboard(f'dashboards/{owner}/{dashboard}') 

@app.get("/view_dashboard_as_json")
async def view_dashboard_as_json(request: Request, dashboard_id: str = Query(...)):
  return _get_dashboard(dashboard_id) 
  

@app.get("/view_dashboard")
async def view_dashboard(request: Request, dashboard_id: str = Query(...)):
  base_url = str(request.base_url).rstrip('/')
  dashboard_url = f'{base_url}/{dashboard_id}'
  return RedirectResponse(f'{GALYLEO_EDITOR_URL}?dashboard={dashboard_url}')

@app.get("/download_table")
async def download_table(table: str = Query(...)):
  import io, csv
  from fastapi.responses import StreamingResponse
  table_object = _get_table_or_abort(table)
  schema = table_object.schema
  rows = table_object.get_filtered_rows(None, [])
  output = io.StringIO()
  writer = csv.writer(output)
  writer.writerow([col['name'] for col in schema])
  writer.writerows(rows)
  table_name = table.split('/')[-1].replace('.sdml', '')
  return StreamingResponse(
    iter([output.getvalue()]),
    media_type='text/csv',
    headers={'Content-Disposition': f'attachment; filename="{table_name}.csv"'}
  )

@app.get("/get_table_names")
async def get_table_names():
  table_paths = _get_accessible_objects('tables', galyleo_object_manager)
  return [make_object_from_key(path).display_name() for path in table_paths]

@app.get("/get_tables")
async def get_tables():
  raw_info = galyleo_object_manager.get_table_info(None, False)
  info = {}
  for key, table in raw_info.items():
    info[make_object_from_key(key).display_name()] = table
  return info
  
def _get_table_or_abort(table):
  table_object = _get_object_if_permitted(table)
  if table_object is None:
    raise HTTPException(status_code = 404, detail = f'table {table} not found')
  return table_object

@app.get("/get_table_schema")
async def get_table_schema(request: Request, table = Query(...)):
  table_object = _get_table_or_abort(table)
  return {
    "columns": table_object.schema
  }

def get_table_and_column(table, column):
  table_object = _get_table_or_abort(table)
  if table_object.column_names().index(column) < 0: # type: ignore
      raise HTTPException(status_code = 404, detail = f'table {table} does not have column {column}')
  return {
     "table": table_object, "column": column
  }


@app.get('/get_range_spec')
async def get_range_spec(request: Request, table= Query(...), column = Query(...)):
  table_and_column = get_table_and_column(table, column)
  return table_and_column["table"].range_spec(table_and_column["column"])

@app.get('/get_all_values')
async def get_all_values(request: Request, table= Query(...), column = Query(...)):
  table_and_column = get_table_and_column(table, column)
  return table_and_column["table"].all_values(table_and_column["column"])

@app.get('/get_column')
async def get_column(request: Request, table= Query(...), column = Query(...)):
  table_and_column = get_table_and_column(table, column)
  return table_and_column["table"].get_column(table_and_column["column"])


class FilterRequest(BaseModel):
  table: str
  filter_spec: Optional[Dict[str, Any]] = None  # Accepts any JSON object
  columns: Optional[List[str]] = []
  result_format: Optional[str] = 'list'

@app.post('/get_filtered_rows')
async def get_filtered_rows(req: FilterRequest):
  table = _get_table_or_abort(req.table)
  return table.get_filtered_rows(filter_spec = req.filter_spec, columns = req.columns,  format = req.result_format) # type: ignore

