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

## Using ts-for-gir as a library

The intended way to build your own framework types — TSX intrinsics, a Vue
`GlobalComponents` map, a signal-prop convention — out of GObject Introspection data.
Three routes; take the cheapest one that answers your question, because two of them do
not need this package at all.

### 1. Widget types for a published namespace — generate nothing

If the namespace already has a `@girs/*` package, the GIR-derived widget vocabulary is
published beside it on an opt-in subpath, and that is the whole input a framework
binding needs:

```ts
import type { Widgets, WidgetGType, PropsOf, SignalsOf } from '@girs/gtk-4.0/surface'
```

What the subpath exports, per namespace:

| export | shape |
|---|---|
| `<GType>Props` | writable-only, optional, keyed by the DASHED name GObject registered |
| `<GType>ConstructOnly` | the name union a renderer must rebuild rather than patch |
| `<GType>Nick` | the enum nick strings, from GIR's `glib:nick` |
| `Widgets` | GType-keyed map: `class`, `props`, `signals`, `constructOnly`, `slotCandidates` |
| `WidgetGType`, `PropsOf<G>`, `SignalsOf<G>`, `InstanceOf<G>`, `ConstructOnlyOf<G>`, `SlotCandidatesOf<G>` | helpers over that map |
| `OWN_PROPS`, `OWN_SIGNALS`, `DECLS`, `ENUM_NICKS`, `SLOT_CANDIDATES`, `SINCE`, `SURFACE_PROVENANCE` | the same facts as RUNTIME data in the sibling `.js` |

Signal handler types are not re-derived here: `Widgets[G]['signals']` points at the
`X.SignalSignatures` the main `@girs` package already emits, with the parent chain,
every implemented interface and the `notify::<prop>` keys folded in.

**What you must contribute, because it is not in the GIR.** Four decisions, and every
framework answers them differently — which is exactly why the subpath refuses to:

- **Tag spelling.** GIR knows `AdwToolbarView`. `adw-toolbar-view` is your choice.
- **Signal prop names.** GObject says `clicked`; Solid and React want `onClicked`, a
  Vue template wants `@clicked`.
- **The shape your framework wants.** Solid a `JSX` off its own `jsxImportSource`,
  React `React.JSX`, Vue a `GlobalComponents` interface.
- **Property-key case.** The subpath emits the dashed name because that is what
  `g_object_set()`, GtkBuilder XML and Blueprint all use. `top_bar_style` and
  `topBarStyle` are binding conveniences, so they are yours to add.

All four together are a mapped type, not a code generator — you supply `TagOf`, the
rest is mechanical:

```ts
import type { Widgets, WidgetGType } from '@girs/gtk-4.0/surface'

export type IntrinsicElements = {
  [G in WidgetGType as TagOf<G>]: Widgets[G]['props'] & {
    [K in keyof Widgets[G]['signals'] as `on${Capitalize<string & K>}`]?: Widgets[G]['signals'][K]
  }
}
```

**Do not reach for a clever `TagOf`.** The obvious camel-to-kebab conditional type — dash
before every capital that starts a new word — resolves `GtkGLArea` to `gtk-g-l-area`,
which no toolkit spells that way (verified against `tsc`, not guessed). Acronyms have no
rule in the GIR, so a tag map is a place where you either hand-correct a short list or
match whatever your template compiler does. If you target Vue, note that Volar resolves
a tag back to a `GlobalComponents` key by camelizing it, so your spelling has to survive
that round trip; gjsify's gtk-host reproduces Volar's rule in a test for precisely this
reason.

**Declare the namespace module-scoped, not global.** The shape that collides is `declare global`
on `React.JSX` — every library augmenting it fights over shared tags. A `JSX` namespace
reached through your own `jsxImportSource` does not collide, and one package can ship
several: gjsify's `@gjsify/gtk-host` ships a Solid one and a React one side by side.

Two consequences worth knowing before you build on this. A consumer that never imports
the subpath parses zero extra bytes, because TypeScript only reads files a program
reaches — the Gtk-4.0 surface is ~158 KB against a 5.86 MB base `.d.ts`. And
`slotCandidates` is honestly named: it is derived from method signatures, so it contains
candidates the GIR cannot distinguish from real slots (`AdwActionRow.set_activatable_widget`
parents nothing, and is `void f(GtkWidget*)` exactly like the ones that do). Which
candidate is a real slot is runtime behaviour; decide it in your renderer.

### 2. Types for a GIR nobody published — use the CLI

For a private, vendored or freshly built `.gir`, run the CLI as a subprocess. No library
API, no TypeScript build on your side:

```sh
ts-for-gir generate --girDirectories=./my-girs --modules=MyLib-1.0 \
  --outdir=./src/types --npmScope=@girs --package=false
```

Add `--widgetSurface` to get the subpath above for your own widgets. This is how gjsify
types its six native bridges, each against the `.gir` shipped next to its prebuilt
binary.

### 3. Changing what gets emitted — the actual library

Only when routes 1 and 2 cannot express it. `@ts-for-gir/lib` holds the model —
`IntrospectedClass`, `IntrospectedProperty`, `IntrospectedEnum`, `GirModule`,
`DependencyManager` — over `@gi.ts/parser`'s GIR reader, and
`@ts-for-gir/generator-typescript` turns that model into declarations.

Build on the MODEL rather than adding a second GIR reader. A parallel parse gives you a
second opinion about what a class is, and then a type you emit can reference a name the
main emitter never produced — invisible until some namespace with an unusual shape hits
it. The widget surface is built this way for exactly that reason.

**One hard constraint: these packages are deliberately build-step-free.**
`@ts-for-gir/lib`, `@ts-for-gir/cli` and `@gi.ts/parser` all resolve
`exports["."]` to `./src/index.ts`, so importing one means importing TypeScript source.
Your build has to compile or bundle it; plain Node cannot `import` it, and you must not
put it in the `dependencies` of a package you publish, or every one of your consumers
inherits raw TS. A `devDependency` you bundle is the seam that works.
