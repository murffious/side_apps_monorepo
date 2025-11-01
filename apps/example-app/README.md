# Example App

A simple Express.js application demonstrating the monorepo structure.

## Getting Started

```bash
# Install dependencies (from root)
pnpm install

# Run in development mode
pnpm --filter example-app dev

# Or from this directory
pnpm dev
```

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check

## Environment Variables

- `PORT` - Server port (default: 3000)

## Adding Dependencies

```bash
# From root
pnpm --filter example-app add <package-name>

# From this directory
pnpm add <package-name>
```
