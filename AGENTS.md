# AGENTS.md — ts-for-gir

TS type definition generator for GObject Introspection (GIR) → GJS. Prefer retrieval-led reasoning over pre-training-led reasoning.

## General

- `./types`, `./gjs`, `./vala-girs` are git submodules — **never delete**
- Always use `.ts` import extensions — TS runs directly, no build step
- Config files: `.ts-for-gir.*.rc.js` in project root

## Workspace

Yarn v4 workspaces | Node >= 22 | all ESM (`"type": "module"`)

Category | Path | Namespace | Notes
---|---|---|---
Core | `/packages/*` | `@ts-for-gir/*`, `@gi.ts/*` | No build, runs TS directly
Types | `/types/*` | `@girs/*` | Generated — **never edit manually**
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

GIR XML (`/girs/`) → `@gi.ts/parser` → `@ts-for-gir/lib` → `@ts-for-gir/generator-typescript` → `/types/@girs/*`

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

`/types/*` (submodule, branch `main`): official published types, may be cached
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
