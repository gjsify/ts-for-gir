# Language Server Validation Tests

Tests for TypeScript Language Server validation of generated GIR types using **Vitest**.

## Overview

This package validates that the TypeScript language server can properly handle:
- Generated GIR TypeScript bindings
- Type inference and validation
- Hover information for GIR objects
- Error detection and reporting

## Installation

Install dependencies:
```bash
yarn install
```

## Running Tests

### Run all tests once
```bash
yarn test
```

### Run tests in watch mode
```bash
yarn test:watch
```

### Run tests without generating types (for development)
```bash
yarn test:dev
```

### Generate types only
```bash
yarn generate
```

## Test Structure

The tests are organized into **thematic test files**, each focusing on a specific aspect of language server functionality:

### 📝 `typescript-validation.test.ts` - TypeScript Validation
Tests basic TypeScript validation capabilities:
- **Basic TypeScript Code**: Valid TypeScript with interfaces, classes, and functions
- **Error Detection**: Type mismatches, undefined variables, missing properties
- **GIR Type Validation**: GTK/Adwaita imports and widget creation

### 🎯 `hover-functionality.test.ts` - Hover Information
Tests type information retrieval through hover:
- **Basic TypeScript Hover**: Interface types, function signatures, generic types
- **GIR Type Hover**: Widget types, application types, container types, callback types
- **Complex Type Hover**: Union types, intersection types, mapped types

### ✅ `type-expectation.test.ts` - Type Expectations
Tests precise type matching and validation:
- **Basic Type Expectations**: Primitives, arrays, functions, generics
- **GIR Type Expectations**: Widget types, application types, container types, model types
- **Type Expectation Failures**: Wrong type expectations, non-existent identifiers
- **Union and Intersection Types**: Complex type combinations

### 🔄 `integration.test.ts` - Integration Tests
Tests complex scenarios combining multiple features:
- **Complex GIR Type Scenarios**: Full application setups with validation, hover, and expectations
- **Mixed TypeScript and GIR**: TypeScript classes managing GIR objects
- **Error Handling and Edge Cases**: Graceful error handling, missing imports
- **Performance and Scalability**: Large codebases with many imports

## Key Features

### 🔍 **Inline Test Code**
All TypeScript test code is **directly visible** in the tests - no external imports or hidden test cases. Each test clearly shows:
- The TypeScript code being tested
- The expected behavior
- The actual language server interaction

### 📊 **Comprehensive Coverage**
- **39 individual test cases** covering all aspects of language server functionality
- **Real-world GIR scenarios** with GTK4 and Libadwaita
- **Performance testing** for large codebases
- **Error handling** and edge cases

### 🚀 **Modern Test Experience**
- **Vitest** for fast test execution and great developer experience
- **Watch mode** for continuous testing during development
- **Detailed output** with hover information and type details
- **Retry logic** for flaky tests due to timing

## Development

### Running Specific Test Files
```bash
# Run only TypeScript validation tests
yarn test:dev src/typescript-validation.test.ts

# Run only hover functionality tests
yarn test:dev src/hover-functionality.test.ts

# Run only type expectation tests
yarn test:dev src/type-expectation.test.ts

# Run only integration tests
yarn test:dev src/integration.test.ts
```

### Test Philosophy
- **Realistic Examples**: All test code represents real-world usage patterns
- **Self-Documenting**: Test code is the documentation - no hidden abstractions
- **Comprehensive**: Tests cover basic functionality, edge cases, and performance
- **Maintainable**: Each test file focuses on a single concern

## Configuration

- `vitest.config.ts` - Vitest configuration optimized for language server tests
- `tsconfig.json` - TypeScript configuration with Vitest support
- `package.json` - Dependencies and test scripts

## Architecture

The test package is **completely independent** of test frameworks in the core `@ts-for-gir/language-server` package:

- `@ts-for-gir/language-server` - **Test-framework agnostic** language server utilities
- `@ts-for-gir-test/language-server-validation` - **Vitest-based** validation tests

This separation allows the language server package to be used in other contexts (CLI tools, different test frameworks) while providing comprehensive test coverage through dedicated test packages. 