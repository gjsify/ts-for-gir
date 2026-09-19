# AGENTS.md — ts-for-gir

TS type definition generator for GObject Introspection (GIR) → GJS. Prefer retrieval-led reasoning over pre-training-led reasoning.

## General

- `./types-release`, `./types-dev`, `./refs/*` are git submodules — **never delete**
- Always use `.ts` import extensions — TS runs directly, no build step
- Config files: `.ts-for-gir.*.rc.js` in project root

## Workspace

Yarn v4 workspaces | Node >= 22 | all ESM (`"type": "module"`)

Category | Path | Namespace | Notes
---|---|---|---
Core | `/packages/*` | `@ts-for-gir/*`, `@gi.ts/*` | No build, runs TS directly
Types | `/types-release/*`, `/types-dev/*` | `@girs/*` | Generated — **never edit manually**
Examples | `/examples/*` | `@ts-for-gir-example/*` | Req build (GJS can't run TS)
Tests | `/tests/*` | `@ts-for-gir-test/*` | Generator tests

Core packages: `cli` | `parser(@gi.ts)` | `lib` | `reporter` | `generator-base` | `generator-typescript` | `generator-html-doc` | `templates`

## Commands

```
gjsify run start                 # Run CLI (no build)
gjsify run build:{types,examples}
gjsify run copy:girs             # Copy system GIR files
gjsify run test                  # Full suite
gjsify run test:tests            # Quick local
gjsify run check                 # Full type check (SLOW!)
gjsify run check:{app,lint}      # Fast check / lint only
gjsify format                    # Biome via @gjsify/cli wrapper
gjsify run ts-for-gir-dev generate Gtk-4.0 [--reporter --verbose]
gjsify run ts-for-gir-dev analyze -f ./report.json [--severity critical --category type_resolution --namespace Gtk --format table]
gjsify run ts-for-gir-dev list
```

## Generation Flow

GIR XML (`/girs/`) → `@gi.ts/parser` → `@ts-for-gir/lib` → `@ts-for-gir/generator-typescript` → `/types-dev/@girs/*`

### Key Files

Type improvements: `packages/generator-typescript/src/type-definition-generator.ts` | `packages/lib/src/gir-module.ts` | `packages/lib/src/transformation/*.ts`
Templates (EJS + ambient TS): `packages/templates/templates/*.d.ts` — use `<%= %>` vars, `<%- %>` unescaped
New features: extend `GeneratorBase` in `packages/generator-base/`, implement in `packages/generator-typescript/`, add templates, update types in `packages/lib/src/types/`

### Template Rules (`packages/templates/templates/*`)

- Treat as EJS + ambient TypeScript declaration context
- Preserve all EJS tags — never refactor inside `<% %>` blocks
- Ignore ESLint/TS errors in templates — they resolve in generated output
- No runtime code; ambient declarations only; minimal deterministic logic
- Stable whitespace/indentation for minimal generated diffs

### Override System (`packages/generator-typescript/src/overrides/`)

Use `node.assertClass("ClassName").noEmit()` to disable auto-generation; templates provide manual impl.

### Output Dirs

`/types-release/*` (submodule, branch `main`): official published types, may be cached
`/types-dev/*` (submodule, branch `dev`): development types, used by examples and workspace `@girs/*` packages
Custom `--outdir=./test-types-*`: fresh generation for dev/testing

### Validation After Changing Type Generation

When modifying generators, templates, injections, or lib code that affects generated output:

1. `gjsify run build:types` — regenerates all types into `/types-dev/`
2. `cd types-dev && git diff` — inspect generated changes, verify correctness
3. `gjsify run build:examples` — rebuild examples (they depend on `/types-dev/`)
4. `gjsify run check` — full type check including examples and generated types

`gjsify run build` chains all steps: `build:app → build:types → build:examples → build:json → build:doc`

**Important:** Examples import from `@girs/*` packages which resolve to `/types-dev/`. Generator changes will NOT be reflected in examples or `gjsify run check` until `gjsify run build:types` has been run.

### Instantiable vocabulary (`@girs/<ns>/vocabulary`)

Opt-in subpath (`widgetVocabulary`, on in `.ts-for-gir.packages-all.rc.js`) carrying the
GIR-derived VOCABULARY of everything a UI description file can create: a writable-only,
optional, GObject-keyed props interface per
declaration, the construct-only name union, enum nick unions from `glib:nick`, the number
behind each of those nicks from `value` (plus each nick GIR marks deprecated — evidence only,
4 members in 718 GIRs carry it, so absence is silence not currency), the same numbers again
for the registered BITFIELDS — which get no nick union, because GObject cannot resolve a nick
SET, and whose members still carry numbers 23 bitfield-typed settable properties need — the
declaration-keyed join saying WHICH enum or bitfield a settable property is (without it the
numbers are half an answer: nothing else says `orientation` is a `GtkOrientation`; every GType
it names has numbers in SOME vocabulary — a referenced bitfield whose owner emits none is
inlined, which `GtkGLArea:allowed-apis` needed and 4 more rows in the corpus with it), the ARIA
VALUE TYPE of every accessible property/relation/state — the one row not about a ParamSpec,
because an `accessibility { }` block is typed by GTK's ARIA table and not by the widget
(`orientation` is settable on a `GtkLabel` that has no such property, `checked: true` is a
tristate 1 and not a boolean), read from each member's own doc sentence and COMPLETE OR
REFUSED, its only remainder a declared exception list carrying a reason per entry, each entry
failing once it stops being needed — a
GType-keyed `Widgets` map for the subset that IS a widget, and the same facts again as
runtime data in the sibling `.js` —
because types are erased and the only check that can go red for a real reason is a consumer asking the
INSTALLED library whether every name is real. Code:
`packages/generator-typescript/src/vocabulary/`.
Decided in gjsify's ADR 0029.

Four rules bind work here. **Coverage is what a UI description file can INSTANTIATE** —
operationally, a registered non-abstract class (`glib:get-type`; over the 719 GIRs all 16209
`<class>`/`<interface>` carry it) plus everything its base chain reaches. NOT "reachable from
a concrete widget", which is a renderer's question and was the first rule: GtkBuilder resolves
`<object class="…">` through `g_type_from_name`, which knows nothing about widgets, so a `.ui`
file is full of `GtkSizeGroup`, `GtkTextTag`, `GtkCellRenderer*` and every `GtkEventController`.
Measured, the narrower rule covered 127 of Gtk-4.0's 301 registered declarations and 64 of
Adw-1's 92, and it cost a consumer a real defect — `Gtk.SizeGroup { mode: horizontal; }`
emitting `horizontal` where `blueprint-compiler` writes `1`, because no `PROP_ENUMS` row
existed to resolve the nick. **`Widgets` and `CHILD_HOLDERS` do NOT widen with it**: they are
the index of what IS a widget, and a consumer asking that gets the pre-widening answer (proved
over all 142 vocabularies — 0 changed). **The vocabulary ships, the dialect does not** — no tag spelling,
no `on<Signal>` prop, no `JSX.IntrinsicElements`, no Vue `GlobalComponents`, no camelCase
property key. The shape to refuse is the GLOBAL AUGMENT, not JSX: a `declare global` on
`React.JSX` collides with every other library on a shared tag, while a module-scoped `JSX`
behind a `jsxImportSource` does not (gjsify's gtk-host ships two of them, Solid and React,
in one package). `@girs/*` is used by projects that want nothing to do with JSX, so it emits
neither -- but a consumer declaring a module-scoped namespace is doing it right.
**A namespace emits one when it HAS one** — when it declares something instantiable, 627 of
the 715 GIRs; the gate is the coverage rule above read one level up, not a second rule beside
it. It was "declares a concrete `GtkWidget` descendant", 142 GIRs, and that is the renderer's
question the coverage rule already stopped asking: a UI file NAMES types it never
instantiates. A Blueprint cast `as <Gio.Icon>` compiles to `type="GIcon"`, a consumer resolves
that per NAMESPACE, and `Gio`, `Gdk` and `GObject` shipped nothing to resolve it against — no
widening INSIDE the 142 could ever reach it, because the type named in a cast appears in no
`<object class="…">`. ADR 0029 defended the narrow gate as "a widget SURFACE with no widgets
in it"; the artefact was renamed to `vocabulary` — the names a namespace registers — before it
shipped, and the argument did not survive the rename. The 88 excluded declare no registered
non-abstract class at all (`cairo-1.0`, `GLib-2.0`, `Graphene-1.0`, the record-only `Gst*`):
their `DECLS` would be EMPTY, which is not a smaller answer but none. Measured over the
corpus: vocabularies 142 → 627, emitted bytes 7.47 → 28.43 MB, the 142 pre-existing net
±0 (foreign tables move home to their owner as often as `identifierPrefixes` adds a line),
every main `.d.ts` byte-identical, and `Widgets`/`ChildHolders`/`CHILD_HOLDERS`/
`SLOT_CANDIDATES` unchanged in 0 of 142 — a consumer asking "is this a widget" is untouched.
`PROVENANCE.identifierPrefixes` carries `c:identifier-prefixes` VERBATIM, because a type
reference needs the C prefix (`Gio` spells itself `G`) and nothing else in the package states
it; deriving it from the `DECLS` keys is wrong for about a quarter of the namespaces that now
emit. A cross-namespace base is
imported from its owner's `./vocabulary` only where that vocabulary CARRIES it — a namespace
with widgets can still leave a declaration out, and importing on "the owner has one" shipped
`@girs/ide-46` a TS2724 against `@girs/gtksource-5`. A base the owner does not emit is dropped
when it contributes no settable property and INLINED
when it does, named in that file's provenance line. (Refusing it was the first version, and it
took a 705-namespace run down at namespace 265 on `Gcr.Prompt` — the only such base in the
corpus while coverage was widget-reachability.) **Nothing is derived that GIR carries**: the nick comes from `glib:nick` and the
number from `value` — position in the nick list is NOT the value, and counting is wrong on
6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) — substitution
is not a law, some nicks keep an underscore it would have replaced, and Gtk-4.0 and Adw-1
contradict nothing, which is how a derived nick passes review; `gjsify run check:girs`
re-measures that over `girs/` and asserts the two invariants the fallback rests on — the
dashed property name from `IntrospectedProperty.girName`, the GType from `glibTypeName`.

Gate: `tests/widget-vocabulary` — positives plus ten controls that must go the other way (flag
off emits nothing; an identifier missing from a namespace's OWN GIR exits non-zero naming the
property, while one missing across a namespace boundary is printed `never` like the main
emitter does and named in its own provenance remainder; the `.d.ts` and
`.js` halves are read separately and compared; an ARIA member whose doc states no value type is
refused; a declared ARIA exception that is no longer needed is refused; `noComments` with
`widgetVocabulary` is refused rather than emitting an empty ARIA table; an abstract class no
chain reaches is absent ENTIRELY, which is what keeps "instantiable" from becoming "every
declaration"; a non-widget instantiable gets props, a `DECLS` chain and a `PROP_ENUMS` row
while reaching neither `Widgets` nor `ChildHolders` nor `SLOT_CANDIDATES`; and a foreign
declaration its owner's vocabulary leaves out is inlined rather than imported; a namespace
with NO widget in it emits anyway and carries the GIR's own `c:identifier-prefixes`, while one
that can instantiate NOTHING emits neither the file nor the `./vocabulary` export — the two
halves of the namespace gate, held over real GIRs by `gobject-2.0` and `glib-2.0` side by side
in one generated tree). The emitted
vocabulary is also in each package's
own `tsconfig.json#include`, so `gjsify run check:types` compiles it — the only thing that
catches it referencing a name the main emitter did not emit. One refusal has no fixture,
because only Clutter, St, Gtk, Gio and GLib are generified, by name: a property typed by its
class's own type parameter prints the type the parameter REPLACED, and that hand-written
record (`packages/lib/src/generics/`) is refused when it disagrees with the bound the class
declares — two of the four were wrong, and `@girs/shell-11` shipped `Clutter.Content` for a
`ClutterLayoutManager`. `gjsify run build:types` is what exercises it.

### GIR → TS Mapping

`<class>` → class | `<interface>` → interface | `<enumeration>` → enum | `<signal>` → event methods | `<property>` → getters/setters | `<callback>` → function types | `<record>` → interface

Parameter `direction` affects signatures. `nullable` → optional (`?`). Array specs → array/tuple types.

## GIR Sources

`/girs/` — local copies | `/vala-girs/` — submodule | System: `/usr/share/gir-1.0/`
Add new: install pkg → `gjsify run copy:girs` → `gjsify run ts-for-gir-dev generate ModuleName-Version`

## GIR XML Reference (`**/*.gir`)

Spec: https://gitlab.gnome.org/GNOME/gobject-introspection/-/raw/main/docs/gir-1.2.rnc — impl in `packages/parser`

Namespaces: `core=".../core/1.0"` | `c=".../c/1.0"` | `glib=".../glib/1.0"` | `doc=".../doc/1.0"`

Structure: `Repository > {Include,Package,Namespace > {Class,Interface,Record,Enumeration,Function,Union,Bitfield,Callback,Constant,Alias}}`

Key attrs: `introspectable="0|1"` | `direction="in|out|inout"` | `transfer-ownership="none|container|full"` | `nullable="0|1"` | `optional="0|1"` | `glib:type-name` | `c:type`

## GVariant Types

Applies to GLib.Variant typing in `packages/templates/templates/glib-2.0.d.ts`. Uses `$ParseShallowVariant`, `$ParseDeepVariant`, `$ParseRecursiveVariant`.

Scalars: `b`→bool | `s|o|g`→str | numeric→number | `h|?`→unknown | `v`→Variant(deep)/unknown(recursive)
`ay`→Uint8Array | Arrays: unpack→Variant[], deep→native[], recursive→fully native
Tuples `(…)`: unpack→Variant[], deep→native (v stays Variant), recursive→fully native
Dicts `a{kv}`: `a{sv}` deep→`{[k:string]:Variant}` | `a{ss}` deep→`{[k:string]:string}`
Maybe `mT`: `null | T`

Quality: generic parser (no hardcoded tuples) | concrete overloads first+last, generic middle | prefer `unknown` over `any` | no runtime code in templates

Files: template=`packages/templates/templates/glib-2.0.d.ts` | upstream=`gjs/installed-tests/js/testGLib.js` | example=`examples/glib-2-variant/main.ts` | tests=`tests/language-server-validation/src/gvariant-validation.test.ts`

Acceptance: `gjsify workspace @ts-for-gir-test/language-server-validation run test` + `gjsify workspace @ts-for-gir-example/glib-2-variant run check` pass deterministically

## TypeScript (`**/*.ts`)

- `strict: true` — avoid `any`, use `unknown` + type guards
- Generics with proper constraints; discriminated unions for complex state
- Utility types (`Partial|Pick|Omit|Record`) over manual construction
- Interfaces for shapes, types for unions/intersections/mapped
- Types in `src/types/` per package; JSDoc on public interfaces
- Naming: `PascalCase` types/classes/enums | `camelCase` vars/fns | `SCREAMING_SNAKE_CASE` constants | bool prefix: `is|has|can|should`
- `index.ts` = barrel re-exports only, never implementation
- Prefer enums over string literals; pure functions; immutable patterns
- Error handling: Result types or custom error classes, meaningful messages

## Clean Code

- Simplicity first; readability over cleverness; early returns/guard clauses
- Single responsibility; DRY; encapsulation
- Comment *why*, not *what*; JSDoc for public APIs (TypeDoc)
- Functions: pure when possible, max 3 params (use objects), split if >20 lines

## Refactoring

- Minimal changes; file-by-file; preserve functionality; evidence-based
- Smells: long fns (>20 lines) | deep nesting | duplication | large classes | 3+ params | impl in index.ts
- Process: analyze → ensure tests → incremental changes → validate

## Testing (`**/*.{test,spec}.ts`)

**Failing test = implementation may be wrong.** Modify tests only when clearly invalid per spec.

Triage: locate assertion → map to spec → identify cause → fix SUT (not test) unless test is provably wrong
Allowed: fix expectations per spec (cite it), remove nondeterminism, fix brittle setup, strengthen assertions
Prohibited: change expected values without rationale, weaken assertions, delete tests without replacement, swallow errors

When changing tests, add: `// Rationale: <reason referencing spec>`

## Git Commits

Format: `<type>[scope]: <description>` | imperative mood | ≤50 char subject | subject must start with a letter or backtick
Atomic commits, working code only. Match existing patterns via `git log --oneline -10`.

Pre-commit validation: `gjsify run check:app` + `gjsify run test:tests` + `gjsify format` (regular) | `gjsify run check` (major changes, slow)

### Commit type → changelog section mapping

All types below are accepted by commitlint (`.commitlintrc.cjs`), the PR-title
check (`.github/workflows/pr-lint.yml`), and rendered in the release changelog
(`.release-it.json` preset.types). No release will have an empty body.

| Type | Changelog section |
|---|---|
| `feat` | Features |
| `fix` | Bug Fixes |
| `perf` | Performance Improvements |
| `revert` | Reverts |
| `docs` | Documentation |
| `refactor` | Code Refactoring |
| `build` | Build System |
| `ci` | Continuous Integration |
| `chore` | Maintenance |
| `test` | Tests |

Keep this table in sync with `.release-it.json` `preset.types` and `.commitlintrc.cjs` `type-enum` when adding new types.

## Fixing Generated Type Errors

Req: error message, affected package(s), context, usage pattern
Workflow: generate with `--reporter` → `gjsify run ts-for-gir-dev analyze` → examine `cd types && git diff` → review commits in `packages/{generator-typescript,parser,lib,templates}/`
Validate: baseline report → fix → `gjsify run test:types` → `gjsify workspace @girs/[pkg] run test` → `gjsify run check:types`

## GJS Examples (`examples/**/*`)

Demonstrate TS+GJS apps, validate generated types, serve as CI test cases.
Patterns: `GObject.registerClass` with Properties/Signals | type-safe signal connections | Gtk.Template | bundler integrations (Vite, Webpack, esbuild, Rollup)
All examples built+validated in CI; create/adapt examples when type issues are found.

**Required for every type-generation PR**: Create or update an example that uses the previously-broken construct. The example exercises the affected types both at compile time (via `tsc --noEmit`) and at runtime (when executed with GJS), giving the fix static and dynamic regression coverage. Prefer extending an existing namespace example (e.g. `gio-2-dbus`, `glib-2-types`) over adding a new one. Mention the example update in the PR description.

## New Packages

Structure: `packages/[name]/{src/index.ts, package.json, tsconfig.json(opt)}`
Naming: `@ts-for-gir/[name]` | `@gi.ts/[name]` | `@ts-for-gir-example/[name]` | `@ts-for-gir-test/[name]`
Rules: no build (export TS directly) | main/module/exports → `src/index.ts` | `workspace:^` for internal deps | `"type": "module"` req | formatting at root via `gjsify format`

## GJS Runtime Analysis

When GIR XML doesn't match JS runtime behavior, check GJS source (`./gjs/` submodule):
`gjs/modules/core/overrides/` — GObject/GLib overrides | `gjs/gi/` — C++ GI bindings | `gjs/modules/` — Core JS API impl
