#!/bin/bash

# Setup script for the monorepo
# This script sets up the development environment

set -e

echo "🚀 Setting up Side Apps Monorepo..."
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js >= 18.0.0"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check pnpm
if ! command -v pnpm &> /dev/null; then
    echo "📦 pnpm not found. Installing pnpm..."
    npm install -g pnpm
fi

echo "✅ pnpm version: $(pnpm --version)"

# Install dependencies
echo ""
echo "📥 Installing dependencies..."
pnpm install

# Check Python
if command -v python3 &> /dev/null; then
    echo "✅ Python version: $(python3 --version)"
    
    echo ""
    echo "🐍 Setting up Python agents..."
    
    # Setup example agent
    if [ -d "agents/example-agent" ]; then
        echo "  Setting up example-agent..."
        cd agents/example-agent
        
        if [ ! -d "venv" ]; then
            python3 -m venv venv
            echo "  Created virtual environment"
        fi
        
        source venv/bin/activate
        pip install -q -r requirements.txt
        deactivate
        echo "  ✅ example-agent ready"
        
        cd ../..
    fi
else
    echo "⚠️  Python3 not found. Skipping Python agent setup."
fi

# Check Docker
if command -v docker &> /dev/null; then
    echo "✅ Docker version: $(docker --version)"
else
    echo "⚠️  Docker not found. Docker features will be unavailable."
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "📚 Next steps:"
echo "  - Run 'pnpm dev' to start all apps in development mode"
echo "  - Run 'pnpm --filter example-app dev' to start a specific app"
echo "  - Check the README.md for more information"
echo ""
