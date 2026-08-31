<%# This template is used if the Option `package` is enabled %>
# <%- packageName %>

![version](https://img.shields.io/npm/v/<%- npmScope %>/<%- importName %>)
![downloads/week](https://img.shields.io/npm/dw/<%- npmScope %>/<%- importName %>)

<%- PACKAGE_DESC %> using [<%- APP_NAME %>](<%- APP_SOURCE %>) v<%- APP_VERSION %>.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install <%- npmScope %>/<%- importName %>
```

Any package manager works. The package has no dependencies beyond other `<%- npmScope %>/*`
type packages.

<%_ const pkg = await dep.get(packageName) _%>
<%_ if(!pkg){ _%>
  <%_ return `Package with package name "${packageName}" not found!` _%>
<%_ } _%>
## What it exports

| Import | What you get |
|---|---|
| `<%- npmScope %>/<%- importName %>` | the namespace as a default export, plus the ambient and global declarations |
| `<%- npmScope %>/<%- importName %>/ambient` | only the `gi://` module declarations |
| `<%- npmScope %>/<%- importName %>/import` | only the `imports.gi` declarations |
| `<%- npmScope %>/<%- importName %>/<%- importName %>` | the namespace, without the side-effecting declarations |
<%_ if (typeof girModule !== "undefined" && girModule && girModule.hasWidgetVocabulary) { _%>
| `<%- npmScope %>/<%- importName %>/vocabulary` | GIR-derived widget data: settable properties, enum nicks, slot candidates |
<%_ } _%>

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import <%- pkg.namespace %> from '<%- npmScope %>/<%- importName %>';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '<%- npmScope %>/<%- importName %>';
```

```json
{ "include": ["<%- npmScope %>/<%- importName %>"] }
```

Then the runtime spelling type-checks:

```ts
import <%- pkg.namespace %> from 'gi://<%- pkg.namespace %>?version=<%- pkg.version %>';
```

Referencing `<%- npmScope %>/<%- importName %>/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `<%- npmScope %>/<%- importName %>/import`:

```ts
const <%- pkg.namespace %> = imports.gi.<%- pkg.namespace %>;
```
<%_ if (typeof girModule !== "undefined" && girModule && girModule.hasWidgetVocabulary) { _%>

## Widget vocabulary

`<%- importName %>` declares widgets, so it also carries what the GIR says about them, as
types and as values a test can read:

```ts
import type { Widgets, PropsOf } from '<%- npmScope %>/<%- importName %>/vocabulary';
import { OWN_PROPS, ENUM_NICKS, PROVENANCE } from '<%- npmScope %>/<%- importName %>/vocabulary';
```

Properties are keyed the way GObject registered them, writable-only and optional, so they
match `g_object_set`, GtkBuilder XML and Blueprint. `PROVENANCE.libraryVersion` names the
library release this was generated from, which lets a check tell "newer than what is
installed" from "wrong".

This subpath answers what the GIR says, not what the installed library has. For the
second question, ask the library.
<%_ } _%>

## Building

The declarations need no build step. If you bundle, every bundler works, since there is
no runtime code to resolve. The [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples)
show working setups for several.

## Other packages

Every pre-generated package is at [gjsify/types](https://github.com/gjsify/types).
