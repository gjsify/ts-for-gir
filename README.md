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

**GNOME Applications** — [Audio Player](https://flathub.org/apps/org.gnome.Decibels), [Counters](https://flathub.org/apps/io.gitlab.guillermop.Counters), [Ignition](https://flathub.org/apps/io.github.flattool.Ignition), [Learn 6502](https://flathub.org/apps/eu.jumplink.Learn6502), [Sound Recorder](https://flathub.org/apps/org.gnome.SoundRecorder), [Sticky Notes](https://flathub.org/apps/com.vixalien.sticky), [Weather](https://flathub.org/apps/org.gnome.Weather), [K'uychi](https://flathub.org/en/apps/one.naiara.Kuychi).

**GNOME Shell Extensions** — [gTile](https://github.com/gTile/gTile), [Copyous](https://github.com/boerdereinar/copyous), [Rounded Window Corners](https://github.com/flexagoon/rounded-window-corners).

More starting points in the [examples directory](/examples/README.md) and the community [GNOME TypeScript Template](https://codeberg.org/nyx_lyb3ra/gnome-ts-template) (GTK + libadwaita + Flatpak + Meson).

## Project Structure

ts-for-gir is a monorepo of focused packages:

- [`@ts-for-gir/cli`](/packages/cli) — CLI for generating types, docs, and analyzing reports
- [`@ts-for-gir/lib`](/packages/lib), [`@gi.ts/parser`](/packages/parser), [`@ts-for-gir/reporter`](/packages/reporter) — core processing
- [`@ts-for-gir/generator-typescript`](/packages/generator-typescript), [`@ts-for-gir/generator-json`](/packages/generator-json), [`@ts-for-gir/generator-html-doc`](/packages/generator-html-doc) — output backends
- [`@ts-for-gir/templates`](/packages/templates), [`@ts-for-gir/tsconfig`](/packages/tsconfig), [`@ts-for-gir/typedoc-theme`](/packages/typedoc-theme) — shared scaffolding
- [`@ts-for-gir/language-server`](/packages/language-server) — LSP for GIR files (experimental)

Git submodules: `types-dev` (development scratch), `types-release` (published `@girs/*`), `docs` (deployed to [gjsify.github.io/docs](https://gjsify.github.io/docs)).

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
