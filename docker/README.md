# Docker Configurations

This directory contains Docker configurations for different types of projects in the monorepo.

## Structure

- `node/` - Dockerfiles for Node.js applications
- `python/` - Dockerfiles for Python agents

## Building Images

### Node.js Application

```bash
# From the repository root
docker build -f docker/node/Dockerfile -t example-app:latest .

# Run the container
docker run -p 3000:3000 example-app:latest
```

### Python Agent

```bash
# From the repository root
docker build -f docker/python/Dockerfile -t example-agent:latest .

# Run the container
docker run example-agent:latest
```

## Docker Compose

For running multiple services together, you can create a `docker-compose.yml` in the root:

```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: docker/node/Dockerfile
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production

  agent:
    build:
      context: .
      dockerfile: docker/python/Dockerfile
    environment:
      - PYTHONUNBUFFERED=1
```

## Best Practices

- Use multi-stage builds to reduce image size
- Leverage layer caching by copying package files first
- Use `.dockerignore` to exclude unnecessary files
- Set appropriate environment variables
- Use specific version tags for base images
