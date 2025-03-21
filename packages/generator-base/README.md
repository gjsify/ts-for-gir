<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/ts-for-gir.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/gjsify/ts-for-gir/ci.yml" />
  <img src="https://img.shields.io/github/license/gjsify/ts-for-gir" />
  <img src="https://img.shields.io/npm/v/@ts-for-gir/generator-base" />
  <img src="https://img.shields.io/npm/dw/@ts-for-gir/generator-base" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection GIR files</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/feeling.gif" />
</p>

# Generator Base

This package defines the base interface that all generators in the ts-for-gir ecosystem must implement. It provides a common contract for various types of generators, ensuring they have a consistent API.

## Purpose

The generator-base package serves as the foundation for creating specific generators like:
- TypeScript definition generators (implemented in `@ts-for-gir/generator-typescript`)
- HTML documentation generators (placeholder in `@ts-for-gir/generator-html-doc`)
- Potentially other output formats in the future

## Interface

The package defines a simple but powerful `Generator` interface with three lifecycle methods:

```typescript
interface Generator {
    start(registry: NSRegistry): Promise<void>;
    generate(registry: NSRegistry, module: GirModule): Promise<void>;
    finish(registry: NSRegistry, girModules: GirModule[]): Promise<void>;
}
```

This interface allows for:
1. Initial setup (`start`)
2. Per-module generation (`generate`)
3. Final cleanup and post-processing (`finish`)

## Generator Types

The package also includes a `GeneratorType` enum that defines the available generator types:
- `TYPES` - For generating TypeScript type definitions
- `HTML_DOC` - For generating HTML documentation

## Usage

This package is not used directly by end users but serves as a dependency for concrete generator implementations and the main CLI tool.

