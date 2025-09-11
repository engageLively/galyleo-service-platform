$ts = [int64]([DateTimeOffset]::UtcNow.ToUnixTimeSeconds())
docker build --build-arg CACHE_BUST=$ts -t rickmcgeer/galyleo_service_platform:latest .
