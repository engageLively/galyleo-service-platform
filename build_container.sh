#!/bin/bash
docker build --build-arg CACHE_BUST=$(date +%s) -t rickmcgeer/galyleo_service_platform:latest .