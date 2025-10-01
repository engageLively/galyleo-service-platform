@echo off
rem -- pull an ISO‑ish UTC timestamp via PowerShell
for /f %%t in (
  'powershell -NoProfile -Command "(Get-Date -AsUTC).ToString(\"yyyyMMddHHmmss\")"'
) do set TS=%%t

docker build --build-arg CACHE_BUST=%TS%  -t rickmcgeer/galyleo_service_platform:2025.10.1 .