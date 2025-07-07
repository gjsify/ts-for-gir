# @ts-for-gir/language-server

A TypeScript validation and hover utility for testing generated GIR type definitions.

## Features

- TypeScript code validation optimized for GJS/GIR types
- Essential compiler error detection
- Support for GIR type definitions and module resolution
- **Hover functionality** for type inspection at specific positions
- Automatic type discovery for GIR definitions
- Clean API for validation and type checking

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

### Automatic GIR Type Discovery

```typescript
import { validateGIRTypeScriptAuto } from '@ts-for-gir/language-server';

const result = validateGIRTypeScriptAuto(`
  import Gtk from 'gi://Gtk?version=4.0';
  
  const button = new Gtk.Button();
  button.set_label("Hello World");
`);

console.log(result.success); // true or false
```

### Hover Functionality - Type Inspection

```typescript
import { getIdentifierTypeAuto } from '@ts-for-gir/language-server';

const code = `
  import Gtk from 'gi://Gtk?version=4.0';
  
  const button = new Gtk.Button();
  const window = new Gtk.Window();
`;

// Get type information for the 'button' variable
const result = getIdentifierTypeAuto(code, 'button');

console.log(result.success); // true or false
console.log(result.type);    // e.g., "Gtk.Button"
console.log(result.documentation); // JSDoc documentation if available
```

### Type Expectation - Validate Expected Types

```typescript
import { expectIdentifierTypeAuto } from '@ts-for-gir/language-server';

const code = `
  import Gtk from 'gi://Gtk?version=4.0';
  
  const button = new Gtk.Button();
  const window = new Gtk.Window();
`;

// Validate that 'button' is of type 'Gtk.Button' (exact match)
const result = expectIdentifierTypeAuto(code, 'button', 'Gtk.Button');

console.log(result.success);      // true or false
console.log(result.matches);      // true if types match
console.log(result.actualType);   // e.g., "Gtk.Button"
console.log(result.expectedType); // "Gtk.Button"
console.log(result.error);        // Error message if types don't match

// Validate using RegExp pattern (flexible matching)
const patternResult = expectIdentifierTypeAuto(code, 'button', /Button|Gtk\.Button/);
console.log(patternResult.matches); // true if type matches pattern
```

## API

### Validation Functions

#### `validateTypeScript(code: string, options?: ValidationOptions)`

Validates TypeScript code and returns validation results.

**Returns:** `ValidationResult`
- `success: boolean` - Whether validation passed
- `errors: string[]` - Array of error messages
- `warnings: string[]` - Array of warning messages

**Options:**
- `strict?: boolean` - Enable strict mode (default: true)
- `typesPath?: string` - Path to directory containing GIR type definitions

#### `validateGIRTypeScript(code: string, typesPath: string, options?: ValidationOptions)`

Validates GIR TypeScript code with type definitions.

#### `validateGIRTypeScriptAuto(code: string, options?: ValidationOptions)`

Validates GIR TypeScript code with automatic type discovery.

### Hover Functions

#### `getIdentifierType(code: string, identifier: string, options?: HoverOptions)`

Gets type information for a specific identifier in TypeScript code.

**Returns:** `HoverResult`
- `success: boolean` - Whether type checking succeeded
- `type?: string` - The inferred type (e.g., "Gtk.Button", "string", "number")
- `documentation?: string` - JSDoc documentation if available
- `error?: string` - Error message if failed

#### `getIdentifierTypeAuto(code: string, identifier: string, options?: HoverOptions)`

Gets type information with automatic GIR type discovery.

### Type Expectation Functions

#### `expectIdentifierType(code: string, identifier: string, expectedType: string | RegExp, options?: HoverOptions)`

Validates that a specific identifier has the expected type.

**Returns:** `TypeExpectationResult`
- `success: boolean` - Whether type checking succeeded
- `matches: boolean` - Whether the actual type matches the expected type
- `actualType?: string` - The actual inferred type
- `expectedType: string | RegExp` - The expected type or pattern that was tested for
- `documentation?: string` - JSDoc documentation if available
- `error?: string` - Error message if validation failed

**Expected Type Patterns:**
- `string` - Exact type name match (e.g., "Gtk.Button")
- `RegExp` - Pattern matching (e.g., `/Variant.*\[\]|Array.*Variant/`)

#### `expectIdentifierTypeAuto(code: string, identifier: string, expectedType: string | RegExp, options?: HoverOptions)`

Validates that a specific identifier has the expected type with automatic GIR type discovery.

## Use Cases

### Testing GIR Type Definitions

```typescript
import { expectIdentifierTypeAuto } from '@ts-for-gir/language-server';

// Test if Gtk.Button type is correctly inferred
const result = expectIdentifierTypeAuto(`
  import Gtk from 'gi://Gtk?version=4.0';
  const button = new Gtk.Button();
`, 'button', 'Gtk.Button');

// Should return: { success: true, matches: true, actualType: "Gtk.Button" }
console.log(result.matches); // true if correctly typed
```

### Verifying Complex Type Inference

```typescript
// Test complex type inference
const result = expectIdentifierTypeAuto(`
  import Gtk from 'gi://Gtk?version=4.0';
  
  const box = new Gtk.Box(Gtk.Orientation.VERTICAL, 10);
  const label = new Gtk.Label("Hello");
  
  box.append(label);
`, 'box', 'Gtk.Box');

// Verify the type is correctly inferred
console.log(result.matches); // Should be true
console.log(result.actualType); // Should be "Gtk.Box"
```

### Unit Testing Type Definitions

```typescript
import { expectIdentifierTypeAuto } from '@ts-for-gir/language-server';

describe('GIR Type Tests', () => {
  test('Gtk.Button should be correctly typed', () => {
    const result = expectIdentifierTypeAuto(`
      import Gtk from 'gi://Gtk?version=4.0';
      const button = new Gtk.Button();
    `, 'button', 'Gtk.Button');
    
    expect(result.success).toBe(true);
    expect(result.matches).toBe(true);
  });

  test('GVariant unpack methods should return correct types', () => {
    const result = expectIdentifierTypeAuto(`
      import GLib from 'gi://GLib?version=2.0';
      const variant = new GLib.Variant("as", ["one", "two"]);
      const unpacked = variant.unpack();
    `, 'unpacked', /Variant.*\[\]|Array.*Variant/);
    
    expect(result.success).toBe(true);
    expect(result.matches).toBe(true);
  });

  test('Complex type patterns should work', () => {
    const result = expectIdentifierTypeAuto(`
      import GLib from 'gi://GLib?version=2.0';
      const variant = new GLib.Variant("(si)", ["hello", 42]);
      const deepUnpack = variant.deepUnpack();
    `, 'deepUnpack', /\[string,\s*number\]/);
    
    expect(result.success).toBe(true);
    expect(result.matches).toBe(true);
  });
});
```

## Development

This package provides the foundation for building GIR type validation and inspection tools. The type expectation functionality enables precise testing of whether generated TypeScript definitions match the expected types, making it ideal for automated testing and validation of GIR type generation.