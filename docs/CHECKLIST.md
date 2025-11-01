# Quick Start Checklist

Use this checklist when starting work on the monorepo.

## Initial Setup

- [ ] Clone the repository
- [ ] Run `./scripts/setup.sh` (or follow manual setup below)
- [ ] Read the main [README.md](../README.md)

## Manual Setup Steps

### Node.js Projects

- [ ] Install Node.js >= 18.0.0
- [ ] Install pnpm: `npm install -g pnpm`
- [ ] Install dependencies: `pnpm install`
- [ ] Verify installation: `pnpm --version`

### Python Agents

- [ ] Install Python >= 3.9
- [ ] Navigate to agent directory: `cd agents/example-agent`
- [ ] Create virtual environment: `python -m venv venv`
- [ ] Activate virtual environment:
  - Linux/Mac: `source venv/bin/activate`
  - Windows: `venv\Scripts\activate`
- [ ] Install dependencies: `pip install -r requirements.txt`
- [ ] Test the agent: `python main.py`

### Docker (Optional)

- [ ] Install Docker
- [ ] Test Docker: `docker --version`
- [ ] Build test image: `docker build -f docker/node/Dockerfile -t test .`

## Daily Development

- [ ] Pull latest changes: `git pull`
- [ ] Update dependencies: `pnpm install`
- [ ] Start development: `pnpm dev`

## Before Committing

- [ ] Format code: `pnpm format`
- [ ] Run linters: `pnpm lint`
- [ ] Run tests: `pnpm test`
- [ ] Check git status: `git status`

## Adding New Projects

### New JavaScript/TypeScript App

- [ ] Create directory: `mkdir apps/my-app`
- [ ] Initialize package: `cd apps/my-app && pnpm init`
- [ ] Add scripts to package.json
- [ ] Add README.md
- [ ] Install dependencies: `pnpm install`

### New Python Agent

- [ ] Create directory: `mkdir agents/my-agent`
- [ ] Create requirements.txt
- [ ] Create main.py
- [ ] Create README.md
- [ ] Setup virtual environment
- [ ] Add .env.example

### New Shared Package

- [ ] Create directory: `mkdir packages/my-package`
- [ ] Use scoped name: `@side-apps/my-package`
- [ ] Initialize package: `pnpm init`
- [ ] Add exports in src/index.js
- [ ] Document API in README.md

## Troubleshooting

- [ ] Check Node version: `node --version`
- [ ] Check pnpm version: `pnpm --version`
- [ ] Check Python version: `python --version`
- [ ] Clear node_modules: `rm -rf node_modules && pnpm install`
- [ ] Check workspace config: `cat pnpm-workspace.yaml`

## Resources

- [Main README](../README.md)
- [Contributing Guide](../CONTRIBUTING.md)
- [Docker README](../docker/README.md)
