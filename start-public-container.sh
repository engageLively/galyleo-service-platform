#!/bin/bash
docker run --rm \
  --env-file .env \
  -v /mnt/c/Users/rick/OneDrive/Projects/engageLively/jh2/galyleo-service-platform/.keys/galyleo-server-881282809b38.json:/secrets/galyleo-server.json:ro \
  -e GOOGLE_APPLICATION_CREDENTIALS=/secrets/galyleo-server.json \
  -p 5000:5000 \
  rickmcgeer/galyleo_public_platform:2025.11.24