<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/ts-for-gir.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/gjsify/ts-for-gir/ci.yml" />
  <img src="https://img.shields.io/github/license/gjsify/ts-for-gir" />
  <img src="https://img.shields.io/npm/v/@gi.ts/parser" />
  <img src="https://img.shields.io/npm/dw/@gi.ts/parser" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection GIR files</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/feeling.gif" />
</p>

# Parser

Core parser for GObject Introspection Repository (GIR) XML files. This package converts GIR XML files into structured TypeScript interfaces that can be used by the rest of the ts-for-gir toolchain.

The parser provides:
- Complete type definitions for the GIR XML format
- XML parsing capabilities using fast-xml-parser
- TypeScript interfaces representing the GIR structure 