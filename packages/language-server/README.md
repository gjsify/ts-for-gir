# @ts-for-gir/language-server

A minimal TypeScript validation utility for testing generated GIR type definitions.

## Features

- Simple TypeScript code validation
- Essential compiler error detection
- Clean API for validation testing

## Installation

```bash
yarn add @ts-for-gir/language-server
```

## Usage

```typescript
import { validateTypeScript } from '@ts-for-gir/language-server';

const result = validateTypeScript(`
  interface Test {
    name: string;
  }
  const obj: Test = { name: "test" };
`);

console.log(result.success); // true or false
console.log(result.errors);  // Array of error messages
```

## API

### `validateTypeScript(code: string, options?: ValidationOptions)`

Validates TypeScript code and returns validation results.

**Returns:** `ValidationResult`
- `success: boolean` - Whether validation passed
- `errors: string[]` - Array of error messages
- `warnings: string[]` - Array of warning messages

**Options:**
- `strict?: boolean` - Enable strict mode (default: true)

## Development

This is a minimal foundation package for building GIR type validation tools. 