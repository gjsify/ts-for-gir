<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/ts-for-gir.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/gjsify/ts-for-gir/ci.yml" />
  <img src="https://img.shields.io/github/license/gjsify/ts-for-gir" />
  <img src="https://img.shields.io/npm/v/@ts-for-gir/generator-html-doc" />
  <img src="https://img.shields.io/npm/dw/@ts-for-gir/generator-html-doc" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection GIR files</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/feeling.gif" />
</p>

# HTML Documentation Generator

## Status: Not Yet Implemented

This package is a placeholder. It has the shape an HTML documentation generator for GIR types would take, and none of the behaviour.

## Purpose

The plan is to generate HTML documentation from GObject introspection data, the way `generator-typescript` generates TypeScript definitions.

## Implementation

This package implements the `Generator` interface from `@ts-for-gir/generator-base` but its methods currently throw "Not implemented" errors. It provides the basic structure needed for anyone who wants to implement a full HTML documentation generator for GObject introspection types.

If you're interested in implementing this feature, contributions are welcome! Feel free to use this package as a starting point for building a complete HTML documentation generator.
