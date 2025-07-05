# Language Server Validation Tests

Minimal tests for the TypeScript validation foundation.

## Purpose

Tests the basic functionality of `@ts-for-gir/language-server` package:
- Basic TypeScript validation
- Error detection
- Framework for future GIR type testing

## Running Tests

```bash
yarn test
```

## Test Categories

1. **Basic TypeScript Validation** - Tests that valid TypeScript code passes validation
2. **Error Detection** - Tests that invalid TypeScript code is properly detected
3. **GTK Import** - Foundation test for future GIR type resolution (expects errors for now)

## Expected Results

The tests should pass with 100% success rate. The GTK import test will show errors (expected until GIR type resolution is implemented).

## Development

This is a minimal foundation. Future enhancements will add:
- GIR type resolution
- More comprehensive test cases
- Better error reporting 