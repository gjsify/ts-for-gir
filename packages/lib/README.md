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

`@ts-for-gir/lib` is the model the `ts-for-gir` CLI builds from a GIR before anything
emits TypeScript. It sits on `@gi.ts/parser`'s XML reader and hands
`@ts-for-gir/generator-typescript` a tree of `IntrospectedClass`,
`IntrospectedProperty`, `IntrospectedEnum` and their siblings, grouped per namespace by
`GirModule` and resolved across namespaces by `DependencyManager`.

Most people never import it. Two cheaper routes cover almost every reason to want GIR
data, and both are below.

## Using ts-for-gir as a library

The intended way to build your own framework types out of GObject Introspection data:
TSX intrinsics, a Vue `GlobalComponents` map, a signal-prop convention. Three routes
below. Take the cheapest one that answers your question, because two of them do not need
this package at all.

### 1. Widget types for a published namespace, generating nothing

If the namespace already has a `@girs/*` package, the GIR-derived widget vocabulary is
published beside it on an opt-in subpath, and that is the whole input a framework
binding needs:

```ts
import type { Widgets, WidgetGType, PropsOf, SignalsOf } from '@girs/gtk-4.0/vocabulary'
```

What the subpath exports, per namespace:

| export | shape |
|---|---|
| `<GType>Props` | writable-only, optional, keyed by the DASHED name GObject registered |
| `<GType>ConstructOnly` | the name union a renderer must rebuild rather than patch |
| `<GType>Nick` | the enum nick strings, from GIR's `glib:nick` |
| `Widgets` | GType-keyed map: `class`, `props`, `signals`, `constructOnly`, `slotCandidates` |
| `WidgetGType`, `PropsOf<G>`, `SignalsOf<G>`, `InstanceOf<G>`, `ConstructOnlyOf<G>`, `SlotCandidatesOf<G>` | helpers over that map |
| `OWN_PROPS`, `OWN_SIGNALS`, `DECLS`, `ENUM_NICKS`, `SLOT_CANDIDATES`, `SINCE`, `PROVENANCE` | the same facts as RUNTIME data in the sibling `.js` |

The subpath does not re-derive signal handler types. `Widgets[G]['signals']` points at
the `X.SignalSignatures` the main `@girs` package already emits, with the parent chain,
every implemented interface and the `notify::<prop>` keys folded in.

**What you must contribute, because it is not in the GIR.** Four decisions. Every
framework answers them differently, which is why the subpath answers none of them.

- **Tag spelling.** GIR knows `AdwToolbarView`. `adw-toolbar-view` is your choice.
- **Signal prop names.** GObject says `clicked`; Solid and React want `onClicked`, a
  Vue template wants `@clicked`.
- **The shape your framework wants.** Solid a `JSX` off its own `jsxImportSource`,
  React `React.JSX`, Vue a `GlobalComponents` interface.
- **Property-key case.** The subpath emits the dashed name because that is what
  `g_object_set()`, GtkBuilder XML and Blueprint all use. `top_bar_style` and
  `topBarStyle` are binding conveniences, so they are yours to add.

All four together are a mapped type, not a code generator. You supply `TagOf`, the rest
is mechanical:

```ts
import type { Widgets, WidgetGType } from '@girs/gtk-4.0/vocabulary'

export type IntrinsicElements = {
  [G in WidgetGType as TagOf<G>]: Widgets[G]['props'] & {
    [K in keyof Widgets[G]['signals'] as `on${Capitalize<string & K>}`]?: Widgets[G]['signals'][K]
  }
}
```

**Do not reach for a clever `TagOf`.** The obvious camel-to-kebab conditional type, a
dash before every capital that starts a new word, resolves `GtkGLArea` to
`gtk-g-l-area`. No toolkit spells it that way. That is measured against `tsc`, not
guessed. Acronyms have no rule in the GIR, so a tag map is a place where you either
hand-correct a short list or match whatever your template compiler does. If you target
Vue, note that Volar resolves a tag back to a `GlobalComponents` key by camelizing it,
so your spelling has to survive that round trip. gjsify's gtk-host reproduces Volar's
rule in a test for that reason.

**Declare the namespace module-scoped, not global.** The shape that collides is
`declare global` on `React.JSX`. Every library augmenting it fights over shared tags. A
`JSX` namespace reached through your own `jsxImportSource` does not collide, and one
package can ship several. gjsify's `@gjsify/gtk-host` ships a Solid one and a React one
side by side.

Two consequences worth knowing before you build on this. A consumer that never imports
the subpath parses zero extra bytes, because TypeScript only reads files a program
reaches. The Gtk-4.0 vocabulary is 159 KB against a 5.6 MB base `.d.ts`.

`slotCandidates` is honestly named. It comes from method signatures, so it holds
candidates the GIR cannot tell apart from real slots.
`AdwActionRow.set_activatable_widget` parents nothing and is `void f(GtkWidget*)`, the
same shape as the ones that do. Which candidate is a real slot is runtime behaviour.
Decide it in your renderer.

### 2. Types for a GIR nobody published, via the CLI

For a private, vendored or freshly built `.gir`, run the CLI as a subprocess. No library
API, no TypeScript build on your side:

```sh
ts-for-gir generate --girDirectories=./my-girs --modules=MyLib-1.0 \
  --outdir=./src/types --npmScope=@girs --package=false
```

Add `--widgetVocabulary` to get the subpath above for your own widgets. This is how gjsify
types its six native bridges, each against the `.gir` shipped next to its prebuilt
binary.

### 3. Changing what gets emitted, the actual library

Only when routes 1 and 2 cannot express it. `@ts-for-gir/lib` holds the model over
`@gi.ts/parser`'s GIR reader: `IntrospectedClass`, `IntrospectedProperty`,
`IntrospectedEnum`, `GirModule`, `DependencyManager`. `@ts-for-gir/generator-typescript`
turns that model into declarations.

Build on the MODEL rather than adding a second GIR reader. A parallel parse gives you a
second opinion about what a class is, and then a type you emit can reference a name the
main emitter never produced. That stays invisible until a namespace with an unusual
shape hits it. The widget vocabulary is built this way for that reason.

#### Loading a namespace

Four steps, and the fourth is the one that is easy to miss. **`load()` resolves and
registers the module, `parse()` fills it.** A `GirModule` you never parsed has
`members.size === 0` and reports no error. It is a valid empty module, not a failure.

```ts
import { defaults } from "@ts-for-gir/cli";
import { DependencyManager, GirModule, NSRegistry } from "@ts-for-gir/lib";

// `defaults` is the CLI's full flag set. Take it and override; hand-rolling an
// `OptionsGeneration` is a second copy of ~30 fields that drifts on the next flag.
const config = { ...defaults, girDirectories: ["/usr/share/gir-1.0"], outdir: null };

const registry = new NSRegistry();
const deps = DependencyManager.getInstance(config);

const gtk = await GirModule.load(await deps.get("Gtk", "4.0"), config, registry);
gtk.parse(); // ← without this, `gtk.members` is empty

console.log(gtk.namespace, gtk.version, String(gtk.libraryVersion));
// Gtk 4.0 4.23.3
```

`deps.get()` returns a `Dependency` whose `.exists` is `false` when no GIR was found in
`girDirectories`. Check it, because `GirModule.load()` turns that into a thrown
`Failed to load gir xml of <package>` one line later.

#### Walking the model

`module.members` is a `Map`, and a value is either one member or an ARRAY of them
(same name, different kinds). Discriminate with `instanceof`, never on a string:

```ts
import { IntrospectedClass, IntrospectedEnum } from "@ts-for-gir/lib";

const classes: IntrospectedClass[] = [];
const enums: IntrospectedEnum[] = [];
for (const member of gtk.members.values()) {
  for (const m of Array.isArray(member) ? member : [member]) {
    if (m instanceof IntrospectedClass) classes.push(m);
    else if (m instanceof IntrospectedEnum) enums.push(m);
  }
}
console.log(`${classes.length} classes, ${enums.length} enums`);
// 272 classes, 132 enums
```

`IntrospectedError` extends `IntrospectedEnum`, so the 132 above includes the 9 error
domains. That is usually what you want, and always worth knowing.

#### Properties: `writable`, `constructOnly`, and both spellings

`cls.props` is the class's OWN properties, not the inherited chain. Each carries
`writable`, `readable` and `constructOnly`, which is the distinction
`X.ConstructorProps` does not make:

```ts
const widget = classes.find((c) => c.name === "Widget")!;
const readOnly = widget.props.filter((p) => !p.writable).map((p) => p.name);
console.log(readOnly.join(", "));
// has_default, hasDefault, has_focus, hasFocus, parent, root, scale_factor, scaleFactor
```

Note the doubling. **The model carries every property twice, once `snake_case` and once
`camelCase`**, because both are valid ways to reach it from generated bindings. Neither
is GObject's own name. `g_object_set()` takes `has-default`, in kebab. If you are
emitting kebab keys, normalise and de-duplicate rather than mapping `props` one to one,
or you emit two keys for one property.

Those five names are also the concrete reason a widget vocabulary is not
`Partial<ConstructorProps>`: `Gtk.Widget.ConstructorProps` offers `has_default`,
`has_focus`, `parent`, `root` and `scale_factor` as settable, and GTK's failure mode for
writing one is exit 0.

#### Enums and their nicks

`enum.members` is a `Map` too. `nick` is GIR's `glib:nick`, the string GObject itself
accepts, which is what an attribute or a JSX prop carries:

```ts
const align = enums.find((e) => e.name === "Align")!;
console.log([...align.members.values()].map((m) => m.nick).join(" | "));
// fill | start | end | center | baseline-fill | baseline | baseline-center
```

Read the nick; do not derive it from the member name. The derivation that lowercases is
wrong for 876 members across the 718 GIRs in `girs/`. `scripts/check-nick-derivation.mjs`
measures it and asserts the invariants.

#### Running it

**One hard constraint. These packages are deliberately build-step-free.**
`@ts-for-gir/lib`, `@ts-for-gir/cli` and `@gi.ts/parser` all resolve
`exports["."]` to `./src/index.ts`, so importing one means importing TypeScript source.
Your build has to compile or bundle it; plain Node cannot `import` it, and you must not
put it in the `dependencies` of a package you publish, or every one of your consumers
inherits raw TS. A `devDependency` you bundle is what works.

For a one-off script, Node 24 runs the examples above directly, but only in the full
transform mode:

```sh
node --experimental-transform-types my-script.ts   # works
node --experimental-strip-types my-script.ts       # ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX
```

Strip-only mode erases types without emitting code, and the library uses TypeScript
`enum`s, which have a runtime representation. The error names the enum, not the import,
so it reads like a problem in your file.
