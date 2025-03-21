<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/ts-for-gir.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/gjsify/ts-for-gir/ci.yml" />
  <img src="https://img.shields.io/github/license/gjsify/ts-for-gir" />
  <img src="https://img.shields.io/npm/v/@ts-for-gir/generator-typescript" />
  <img src="https://img.shields.io/npm/dw/@ts-for-gir/generator-typescript" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection GIR files</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/feeling.gif" />
</p>

# TypeScript Generator

TypeScript-specific generator for `ts-for-gir`. This package implements the actual generation of TypeScript declaration files (.d.ts) from the processed GIR data. It transforms the intermediate representation of GObject types into TypeScript type definitions.

## Features

- Generation of TypeScript declaration files (.d.ts) from GIR data
- Support for generating NPM packages with proper package.json configuration
- Template-based code generation using EJS templates
- Complete handling of complex type transformations:
  - Classes, interfaces, and records
  - Functions, methods, and constructors 
  - Properties, fields, and constants
  - Enums and callbacks
  - Signals and their event handlers
- Generation of proper JSDoc comments from GIR documentation
- Support for GJS-specific module formats and ambient type declarations

This package is responsible for the final output of the `ts-for-gir` toolchain, producing TypeScript definition files that can be used in GJS projects.
