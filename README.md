<p align="center">
  <img src=".github/ts-for-gir_x4.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/gjsify/ts-for-gir/ci.yml" />
  <img src="https://img.shields.io/github/license/gjsify/ts-for-gir" />
  <img src="https://img.shields.io/npm/v/@ts-for-gir/cli" />
  <img src="https://img.shields.io/npm/dw/@ts-for-gir/cli" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection GIR files</p>

<p align="center">
  <img src=".github/feeling.gif" />
</p>

`ts-for-gir` generates accurate TypeScript definitions from [GObject Introspection](https://gi.readthedocs.io/en/latest/) for [GJS](https://gitlab.gnome.org/GNOME/gjs/) projects — strong typing, IDE jump-to-definition, autocompletion across the whole GNOME stack.

Browse the full **[TypeScript API Documentation](https://gjsify.github.io/docs)** for GLib, GTK, GStreamer, and more.

## Quick Start

```bash
gjsify dlx @ts-for-gir/cli create my-app   # no install, no Node.js
# or
npx @ts-for-gir/cli create my-app          # via npm
```

Pick a template interactively, or pass `--template <id>`:

| Template | Best for |
|---|---|
| **`types-gjsify`** | Node-free GJS app — all dev scripts (install, build, run, format) routed through [gjsify](https://gjsify.github.io/gjsify/) |
| **`types-npm`** | Single-package, types from [`@girs/*`](https://github.com/gjsify/types) NPM, esbuild + node |
| **`types-locally`** | Generate types into `./@types/` (no `@girs/*` dep) |
| **`types-workspace`** | npm workspace with `@girs/*` as locally-generated workspace packages |

```bash
cd my-app && npm start    # or `gjsify run start` for types-gjsify
```

## Installation

### GJS — no Node.js required <sub>experimental</sub>

```bash
curl -fsSL https://raw.githubusercontent.com/gjsify/ts-for-gir/main/install.js -o /tmp/install.js
gjs -m /tmp/install.js && rm /tmp/install.js
```

Installs to `~/.local/bin/`. Update later with `ts-for-gir self-update`. Powered by [GJSify](https://gjsify.github.io/gjsify/).

### Node.js

```bash
npx @ts-for-gir/cli --help
# or globally:
npm install -g @ts-for-gir/cli
```

## CLI Usage

```bash
ts-for-gir generate Gtk-4.0                          # generate types for a single module
ts-for-gir generate Gtk-4.0 --reporter               # with diagnostics
ts-for-gir analyze -f ./ts-for-gir-report.json       # inspect the report
ts-for-gir --help                                    # all commands
```

See the [CLI documentation](/packages/cli/README.md) for advanced options.

## Pre-generated NPM Packages

If you just want the types without generating them yourself:

```bash
npm install @girs/gjs @girs/gtk-4.0
```

```ts
import "@girs/gjs";
import "@girs/gjs/dom";
import "@girs/gtk-4.0";

import Gtk from "gi://Gtk?version=4.0";

const button = new Gtk.Button();
```

All packages are listed at [gjsify/types](https://github.com/gjsify/types). Missing a module? [Open an issue](https://github.com/gjsify/ts-for-gir/issues).

## Showcase

**GNOME Applications**

- [Audio Player](https://flathub.org/apps/org.gnome.Decibels) — Play audio files
- [Counters](https://flathub.org/apps/io.gitlab.guillermop.Counters) — Keep track of anything
- [Ignition](https://flathub.org/apps/io.github.flattool.Ignition) — Manage startup apps and scripts
- [Learn 6502](https://flathub.org/apps/eu.jumplink.Learn6502) — Learn programming on vintage game consoles
- [Sound Recorder](https://flathub.org/apps/org.gnome.SoundRecorder) — A simple, modern sound recorder
- [Sticky Notes](https://flathub.org/apps/com.vixalien.sticky) — Pin notes to your desktop
- [Weather](https://flathub.org/apps/org.gnome.Weather) — Show weather conditions and forecast
- [K'uychi](https://flathub.org/en/apps/one.naiara.Kuychi) — Generate color palettes

**GNOME Shell Extensions**

- [gTile](https://github.com/gTile/gTile) — Tiling window management for GNOME Shell
- [Copyous](https://github.com/boerdereinar/copyous) — Clipboard manager for GNOME Shell
- [Rounded Window Corners](https://github.com/flexagoon/rounded-window-corners) — Add rounded corners to windows

## Example Projects

Looking for a starting point? These example projects demonstrate how to use the TypeScript definitions with various bundlers:

- [GTK 4 Template with Vite](/examples/gtk-4-template-vite) — Modern UI with Vite bundling
- [GNOME TypeScript Template](https://codeberg.org/nyx_lyb3ra/gnome-ts-template) — A template using GTK, libadwaita, TypeScript, Flatpak, and Meson

More examples with screenshots and descriptions can be found in the [Examples directory](/examples/README.md). For information on using the examples with different CLI options, refer to the [CLI documentation](/packages/cli/README.md#using-the-generated-types).

## Project Structure

ts-for-gir consists of several packages:

- [`@ts-for-gir/cli`](/packages/cli) — Command-line interface for generating TypeScript definitions, documentation, and analyzing reports
- [`@gi.ts/parser`](/packages/parser) — Parser for GObject Introspection XML files
- [`@ts-for-gir/lib`](/packages/lib) — Core library for processing GIR data
- [`@ts-for-gir/reporter`](/packages/reporter) — Reporting system for problems and statistics with dependency injection
- [`@ts-for-gir/generator-typescript`](/packages/generator-typescript) — TypeScript definition generator
- [`@ts-for-gir/generator-json`](/packages/generator-json) — TypeDoc JSON generator with GIR metadata enrichment
- [`@ts-for-gir/generator-html-doc`](/packages/generator-html-doc) — HTML documentation generator using TypeDoc
- [`@ts-for-gir/generator-base`](/packages/generator-base) — Shared base class for generators
- [`@ts-for-gir/typedoc-theme`](/packages/typedoc-theme) — Custom TypeDoc theme inspired by gi-docgen
- [`@ts-for-gir/gir-module-metadata`](/packages/gir-module-metadata) — Curated metadata (descriptions, logos, licenses) for GIR namespaces
- [`@ts-for-gir/templates`](/packages/templates) — Template files for generated packages (tsconfig, typedoc config, ambient declarations)
- [`@ts-for-gir/tsconfig`](/packages/tsconfig) — Shared TypeScript configuration
- [`@ts-for-gir/language-server`](/packages/language-server) — Language server for GIR files (experimental)

### Submodules

This repo contains Git submodules for pre-generated types and documentation:

- `types-dev` (branch `dev`) — used during local development. Scripts write generated packages here.
- `types-release` (branch `main`) — updated by the release workflow on tags.
- `docs` (branch `main`) — generated HTML documentation, deployed to [gjsify.github.io/docs](https://gjsify.github.io/docs).

Useful scripts:

```bash
gjsify run build:types          # regenerate into ./types-dev
gjsify run build:types:release  # regenerate into ./types-release
gjsify run build:doc            # build HTML docs into ./docs
```

## Further Reading

- [TypeScript API Documentation](https://gjsify.github.io/docs)
- [Examples](/examples/README.md)
- [CLI Documentation](/packages/cli/README.md)
- [gjsify/types](https://github.com/gjsify/types) — pre-generated NPM packages
- [gjsify/gnome-shell](https://github.com/gjsify/gnome-shell) — hand-written Shell Extension types
