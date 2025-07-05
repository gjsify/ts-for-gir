# @ts-for-gir/language-server

A minimal TypeScript validation utility for testing generated GIR type definitions.

## Features

- TypeScript code validation optimized for GJS/GIR types
- Essential compiler error detection
- Support for GIR type definitions and module resolution
- Clean API for validation testing

## Installation

```bash
yarn add @ts-for-gir/language-server
```

## Usage

### Basic TypeScript Validation

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

### GIR Type Validation

```typescript
import { validateGIRTypeScript } from '@ts-for-gir/language-server';
import path from 'path';

const typesPath = path.resolve('./types/@types');
const result = validateGIRTypeScript(`
  import Gtk from 'gi://Gtk?version=4.0';
  
  const button = new Gtk.Button();
  button.set_label("Hello World");
`, typesPath);

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
- `typesPath?: string` - Path to directory containing GIR type definitions

### `validateGIRTypeScript(code: string, typesPath: string, options?: ValidationOptions)`

Validates GIR TypeScript code with type definitions. This is a convenience wrapper around `validateTypeScript` optimized for GIR types.

**Parameters:**
- `code: string` - TypeScript code to validate
- `typesPath: string` - Path to directory containing GIR type definitions (@types folder)
- `options?: ValidationOptions` - Additional validation options (excluding typesPath)

**Returns:** `ValidationResult`
- `success: boolean` - Whether validation passed
- `errors: string[]` - Array of error messages
- `warnings: string[]` - Array of warning messages

## Development

This is a minimal foundation package for building GIR type validation tools. 