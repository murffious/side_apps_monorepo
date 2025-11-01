# Example Agent

A Python-based agent demonstrating the monorepo structure.

## Setup

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

## Usage

```bash
# Run the agent
python main.py
```

## Environment Variables

Create a `.env` file in this directory for configuration:

```env
# Example variables
API_KEY=your_api_key_here
DEBUG=true
```

## Adding Dependencies

```bash
# Activate virtual environment first
source venv/bin/activate

# Install new package
pip install <package-name>

# Update requirements.txt
pip freeze > requirements.txt
```

## Development

This agent can be extended for various tasks:
- Data processing
- API integrations
- Automation scripts
- ML/AI workflows
