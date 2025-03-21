<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/ts-for-gir.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/gjsify/ts-for-gir/ci.yml" />
  <img src="https://img.shields.io/github/license/gjsify/ts-for-gir" />
  <img src="https://img.shields.io/npm/v/@ts-for-gir/lib" />
  <img src="https://img.shields.io/npm/dw/@ts-for-gir/lib" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection GIR files</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/feeling.gif" />
</p>

# Library

Core library to generate TypeScript type definitions from GObject Introspection Repository (GIR) data. This package provides the foundation for processing, transforming, and generating TypeScript interfaces based on GIR definitions.

## Features

- Complete type system for representing GObject types in TypeScript
- Dependency management for GIR modules and their relationships
- Transformation engine to convert GIR introspection data to TypeScript types
- Support for type generics, promises, and complex type expressions
- Type conflict resolution and validation
- Extensible architecture with visitor pattern support
- Customizable code generation through formatters and generators

This library serves as the core engine for the `ts-for-gir` toolchain, handling the translation of GObject types to their TypeScript equivalents.
