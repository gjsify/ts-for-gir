# Language Server Validation Tests

This package provides validation tests for TypeScript type generation in ts-for-gir, ensuring the generated type definitions work correctly with the TypeScript language server.

## Purpose

Tests the correct TypeScript type generation for GIR (GObject Introspection) bindings, with current focus on:

- **GLib.Variant Types**: Testing variant unpacking methods and type inference
- **Type Generation Issues**: Validating fixes for known problems from PRs
- **Advanced Type Features**: Testing with different configuration options
- **Real-world Usage Patterns**: Ensuring common patterns work as expected

## Running Tests

```bash
# Generate types and run tests
gjsify run test

# Watch mode for development
gjsify run test:watch

# Quick test run without regenerating types
gjsify run test:dev
```

## Test Structure

Current test files:
- `src/gvariant-validation.test.ts` - GLib.Variant type validation

### GVariant Validation Tests

Addresses specific issues from [PR #279](https://github.com/gjsify/ts-for-gir/pull/279):

```typescript
type Infer<T extends string> = ReturnType<GLib.Variant<T>["unpack"]>
type IntTuple = Infer<"(ii)">; // Should be [Variant<"i">, Variant<"i">]
```

Tests different unpacking methods according to GJS documentation:
- `unpack()`: Returns shallow unpacked values
- `deepUnpack()`: Returns one level deep unpacked values  
- `recursiveUnpack()`: Returns fully unpacked native JS types

## Development

When adding new tests:
1. Focus on actual type generation issues
2. Use realistic GJS/GTK code examples
3. Document expected vs actual behavior
4. Include debugging output for type inference issues

## Future Test Areas

This test suite can be extended to cover:
- GTK widget type generation
- Signal and callback type inference
- GObject class registration patterns
- Interface implementation validation
- Cross-module type dependencies

## Related

- [PR #279](https://github.com/gjsify/ts-for-gir/pull/279) - Advanced Variant Types implementation
- `tests/types-no-advanced-variants/` - Example showing legacy behavior
- `@ts-for-gir/language-server` - Core validation utilities
- `examples/` - Real-world usage examples