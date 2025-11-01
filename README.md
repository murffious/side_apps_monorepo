# Side Apps Monorepo

A monorepo optimized for AI copilot development, supporting multiple JavaScript/TypeScript projects, Python agents, and Docker containerization.

## 🏗️ Structure

```
side_apps_monorepo/
├── apps/              # Full-stack applications
│   └── example-app/   # Example Next.js/Express app
├── packages/          # Shared libraries and utilities
│   └── shared-utils/  # Common utilities
├── agents/            # Python AI agents and scripts
│   └── example-agent/ # Example Python agent
├── docker/            # Docker configurations
│   ├── node/          # Node.js Dockerfiles
│   └── python/        # Python Dockerfiles
└── package.json       # Root workspace configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Python >= 3.9 (for agents)
- Docker (optional, for containerization)

### Installation

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install dependencies
pnpm install
```

## 📦 Workspaces

This monorepo uses pnpm workspaces to manage multiple packages:

- **apps/**: Independent applications (web apps, APIs, CLIs)
- **packages/**: Shared libraries used across apps
- **agents/**: Python-based AI agents and automation scripts

## 🛠️ Common Commands

```bash
# Run all apps in development mode
pnpm dev

# Build all packages and apps
pnpm build

# Run tests across all workspaces
pnpm test

# Lint all code
pnpm lint

# Format code with Prettier
pnpm format

# Clean all build artifacts and node_modules
pnpm clean
```

## 📝 Working with Individual Workspaces

```bash
# Run commands in a specific workspace
pnpm --filter example-app dev
pnpm --filter shared-utils test

# Add a dependency to a specific workspace
pnpm --filter example-app add express

# Add a dev dependency to a specific workspace
pnpm --filter shared-utils add -D jest
```

## 🐍 Python Agents

Python agents are located in the `agents/` directory. Each agent has its own virtual environment:

```bash
# Navigate to an agent
cd agents/example-agent

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the agent
python main.py
```

## 🐳 Docker

Docker configurations are organized in the `docker/` directory:

```bash
# Build and run a Node.js app
docker build -f docker/node/Dockerfile -t my-node-app .
docker run -p 3000:3000 my-node-app

# Build and run a Python agent
docker build -f docker/python/Dockerfile -t my-python-agent .
docker run my-python-agent
```

## 🤖 AI Copilot Optimization

This monorepo is structured to work seamlessly with AI coding assistants:

- **Clear structure**: Organized directories make it easy for AI to navigate
- **Consistent patterns**: Standardized configurations across projects
- **Comprehensive docs**: Each package includes its own README
- **Type safety**: TypeScript support for better AI code suggestions
- **Modular design**: Isolated workspaces prevent cross-contamination

## 📚 Adding New Projects

### Adding a New JavaScript/TypeScript App

```bash
mkdir apps/my-new-app
cd apps/my-new-app
pnpm init
```

Then update the `package.json` with appropriate scripts and dependencies.

### Adding a New Shared Package

```bash
mkdir packages/my-package
cd packages/my-package
pnpm init
```

### Adding a New Python Agent

```bash
mkdir agents/my-agent
cd agents/my-agent
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## 🔧 Configuration Files

- `package.json`: Root package configuration
- `pnpm-workspace.yaml`: Workspace definitions
- `.prettierrc`: Code formatting rules
- `.gitignore`: Files to ignore in git
- `tsconfig.json`: TypeScript configuration (per-project)

## 📄 License

MIT