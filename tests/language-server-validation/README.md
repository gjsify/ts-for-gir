# Language Server Validation Tests

This package provides comprehensive validation tests for the TypeScript language server functionality with GIR types, organized in a modern, maintainable structure using Vitest.

## Overview

The test suite validates that TypeScript language server features work correctly with generated GIR type definitions. Tests are organized thematically to cover different aspects of language server functionality.

## Test Structure

### 🧪 **Test Files (5 thematic suites)**

1. **`typescript-validation.test.ts`** (9 tests)
   - Basic TypeScript Code validation (interfaces, classes, functions)
   - Error Detection (type mismatches, undefined variables, missing properties)
   - GIR Type Validation (GTK/Adwaita imports and widgets)

2. **`hover-functionality.test.ts`** (10 tests)
   - Basic TypeScript Hover (interface types, function signatures, generics, classes)
   - GIR Type Hover (widget types, application types, containers, callbacks)
   - Complex Type Hover (union types, intersection types, mapped types)

3. **`type-expectation.test.ts`** (14 tests)
   - Basic Type Expectations (primitives, arrays, functions, generics)
   - GIR Type Expectations (widgets, applications, containers, models)
   - Type Expectation Failures (wrong expectations, non-existent identifiers)
   - Union and Intersection Types

4. **`integration.test.ts`** (6 tests)
   - Complex GIR Type Scenarios (full application setups)
   - Mixed TypeScript and GIR Integration (TypeScript classes managing GIR objects)
   - Error Handling and Edge Cases
   - Performance and Scalability (large codebases)

5. **`gvariant-types.test.ts`** (12 tests) ✨ **NEW**
   - Basic GVariant Creation and Type Validation
   - GVariant Unpacking Method Hover (unpack, deepUnpack, recursiveUnpack)
   - Type Inference Issues (tuple parsing, instanceof checks)
   - Type Expectations for GVariant Methods
   - Method Signature Validation

**Total: 51 test cases** covering comprehensive language server functionality.

## GVariant Type Testing 🔬

The new `gvariant-types.test.ts` file specifically targets TypeScript type generation issues for `GLib.Variant` methods, based on real-world usage patterns from the GJS ecosystem:

### Test Coverage
- **Basic Variant Types**: String, number, boolean, arrays, tuples, dictionaries
- **Unpacking Methods**: Different behavior of `unpack()`, `deepUnpack()`, `recursiveUnpack()`
- **Type Inference**: Validation of TypeScript type inference for variant operations
- **Known Issues**: Test-driven development approach for fixing type generation problems

### Expected Behavior (from GJS Guide)
- `unpack()`: Returns `GVariant[]` (shallow unpacking)
- `deepUnpack()`: Returns native JS types (one level deep)
- `recursiveUnpack()`: Returns fully unpacked native JS types

### Test-Driven Development
Some tests are **expected to fail** initially, serving as regression tests for:
- Tuple parsing errors (`VariantTypeError` for complex tuples)
- `instanceof` checks failing on unpacked variants
- Missing array methods on unpacked results

## Usage

### Running Tests

```bash
# Run all tests
yarn test

# Run specific test file
yarn test gvariant-types

# Watch mode for development
yarn test:watch

# Development mode with detailed output
yarn test:dev
```

### Test Categories

```bash
# Run only GVariant tests
yarn test --grep "GVariant"

# Run hover functionality tests
yarn test --grep "Hover"

# Run validation tests
yarn test --grep "Validation"
```

## Development Workflow

### Adding New Tests

1. **Choose the appropriate test file** based on functionality
2. **Follow the inline TypeScript code approach** - all test code should be visible directly in the test
3. **Use realistic GJS/GTK examples** that developers would actually write
4. **Include both positive and negative test cases**

### Test Structure Template

```typescript
it('should test specific functionality', async () => {
  const testCode = `
    import Gtk from 'gi://Gtk?version=4.0';
    import GLib from 'gi://GLib?version=2.0';
    
    // Your test TypeScript code here
    const example = new Gtk.Button();
    example.set_label("Test");
  `;

  const result = validateGIRTypeScriptAuto(testCode);
  expect(result.success).toBe(true);
  
  // Test hover information
  const hoverResult = getIdentifierTypeAuto(testCode, 'example');
  expect(hoverResult.type).toMatch(/Button/);
});
```

## Configuration

- **Framework**: Vitest with Node.js environment
- **Timeout**: 30 seconds per test (language server operations can be slow)
- **Reporters**: Basic + verbose for detailed output
- **TypeScript**: Strict mode with modern ES2022 target

## Dependencies

- `@ts-for-gir/language-server`: Core language server utilities
- `vitest`: Modern test framework with TypeScript support
- Generated GIR types (`@girs/*`) for runtime validation

## Real-World Integration

Tests use actual GTK4, Libadwaita, and GLib examples that mirror real GJS applications:
- Application lifecycle management
- Widget hierarchies and styling
- Event handling and signals
- Resource management
- GVariant usage patterns from DBus and settings

This ensures the generated TypeScript types work correctly in practical development scenarios. 