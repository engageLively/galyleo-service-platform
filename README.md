# galyleo-service-platform

The Galyleo platform Flask service, deployed as a JupyterHub managed service.

## What it does

- Serves the React dashboard editor at `/services/galyleo/static/studio/`
- Serves published dashboards at `/services/galyleo/static/<name>/`
- Exposes the SDTP data API (table publishing, querying, access control)
- Authenticates via JupyterHub API tokens
- One-click dashboard publication

## Structure

```
src/
  main.py             Flask application entry point
  static/
    studio/           React editor build (copied from galyleo-dashboard/app/dist)
Dockerfile            Production image (pushed to GAR)
Dockerfile-public     Public/demo variant
requirements.txt      Python dependencies
```

## Building

The service image is built and pushed by `galyleo-deployment/scripts/build-service.sh`.

Each image embeds a build timestamp for version verification:
```bash
kubectl -n jh2-test exec deployment/galyleo-service -- cat /etc/galyleo-service-build-timestamp
```

The React editor must be built and copied into `src/static/studio/` **before** building the
service image. See [galyleo-dashboard](../../galyleo-dashboard/README.md) for build instructions.

## Static file serving

Flask serves the React app via explicit routes in `main.py`:

- `GET /services/galyleo/static/studio` → `static/studio/index.html`
- `GET /services/galyleo/static/studio/` → `static/studio/index.html`
- `GET /services/galyleo/static/<path>` → file or directory index

The explicit studio routes are registered before Flask's built-in static handler to avoid
directory 404s (Flask's built-in handler does not auto-serve `index.html` for directories).

## Environment variables

| Variable | Description |
|----------|-------------|
| `JUPYTERHUB_API_URL` | Hub internal API endpoint |
| `JUPYTERHUB_URL` | Public Hub URL |
| `GALYLEO_ROOT_URL` | `{HUB_URL}/services/galyleo` |
| `GALYLEO_SECRET_KEY` | Flask session signing key |
| `GALYLEO_SERVICE_API_TOKEN` | API authentication token |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to GCS service account JSON |
| `BUCKET_NAME` | GCS bucket for dashboard persistence |
