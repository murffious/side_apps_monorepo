# Contributing to Side Apps Monorepo

Thank you for your interest in contributing! This guide will help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/side_apps_monorepo.git`
3. Install dependencies: `pnpm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Project Structure

- `apps/` - Full applications
- `packages/` - Shared libraries
- `agents/` - Python agents
- `docker/` - Docker configurations

## Development Workflow

### Adding a New App

1. Create a new directory in `apps/`
2. Add a `package.json` with appropriate scripts
3. Include a README with setup instructions
4. Test locally before committing

### Adding a New Package

1. Create a new directory in `packages/`
2. Use scoped naming: `@side-apps/package-name`
3. Export clear API interfaces
4. Document all public functions

### Adding a New Python Agent

1. Create a new directory in `agents/`
2. Include `requirements.txt`
3. Add a virtual environment setup guide
4. Document configuration variables

## Code Standards

### JavaScript/TypeScript

- Use Prettier for formatting: `pnpm format`
- Follow existing code patterns
- Add JSDoc comments for functions
- Use meaningful variable names

### Python

- Follow PEP 8 style guide
- Use type hints where appropriate
- Include docstrings for classes and functions
- Keep functions focused and small

### Git Commits

- Use clear, descriptive commit messages
- Start with a verb: "Add", "Fix", "Update", etc.
- Reference issues when applicable: "Fix #123"
- Keep commits focused on single changes

## Testing

- Add tests for new features
- Ensure existing tests pass: `pnpm test`
- Test your changes locally before pushing

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Update the README if you've changed APIs
4. Request review from maintainers
5. Address feedback promptly

## Questions?

Feel free to open an issue for any questions or concerns!
