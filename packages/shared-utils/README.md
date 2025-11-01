# Shared Utils

Common utilities used across the monorepo projects.

## Installation

This package is internal to the monorepo. To use it in another workspace:

```bash
pnpm --filter <your-app> add @side-apps/shared-utils@workspace:*
```

## Usage

```javascript
const { formatDate, generateId, sleep, deepClone } = require('@side-apps/shared-utils');

// Format current date
const now = formatDate();

// Generate unique ID
const id = generateId();

// Async sleep
await sleep(1000);

// Deep clone object
const clone = deepClone({ a: 1, b: { c: 2 } });
```

## Available Functions

- `formatDate(date)` - Format a date to ISO string
- `generateId()` - Generate a unique identifier
- `sleep(ms)` - Async sleep function
- `deepClone(obj)` - Deep clone an object
