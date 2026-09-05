<%# This template is used for the README.md of @girs/gjs if the Option `package` is enabled %>
# <%- packageName %>

![version](https://img.shields.io/npm/v/<%- npmScope %>/<%- importName %>)
![downloads/week](https://img.shields.io/npm/dw/<%- npmScope %>/<%- importName %>)

<%- PACKAGE_DESC %> using [<%- APP_NAME %>](<%- APP_SOURCE %>) v<%- APP_VERSION %>.

[GJS](https://gitlab.gnome.org/GNOME/gjs) is GNOME's JavaScript runtime. With these type definitions your editor knows the GTK API: it type-checks calls, completes method names, and shows the upstream C documentation inline.

## Install

Install the type definitions with npm:
```bash
npm install <%- npmScope %>/<%- importName %>
```

<%_ const pkg = await dep.get(packageName) _%>
<%_ if(!pkg){ _%>
  <%_ return `Package with package name "${packageName}" not found!` _%>
<%_ } _%>

## Usage

Import it like any other module:
```ts
import <%- pkg.namespace %> from '<%- pkg.importPath %>';
```

For CommonJS:
```ts
const <%- pkg.namespace %> = require('<%- pkg.importPath %>');
```

### Global types

After the import, the global types of GJS are also available:

```ts
import '<%- npmScope %>/gjs';

print('Hello World from print');

const ByteArray = imports.byteArray;

// And so on...
```

### Global DOM types

Some types that conflict with the DOM are outsourced to allow frameworks like Gjsify to rebuild the DOM API without causing type conflicts.
Import them explicitly:

```ts
import '<%- npmScope %>/gjs/dom';

console.log('Hello World from console');

const encoder = new TextEncoder();
const encoded = encoder.encode('𝓽𝓮𝔁𝓽');

setTimeout(() => {
  // ...
}, 1000);

// And so on...
```

These collide with the DOM types. Exclude the DOM lib in your `tsconfig.json` or `jsconfig.json`, or set `noLib`.

### Ambient Modules

GJS's built-in [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) are importable too.
For this you need to include the `<%- npmScope %>/<%- importName %>` or `<%- npmScope %>/<%- importName %>/ambient` in your `tsconfig` or entry point Typescript file:
    
`index.ts`:
```ts
import '<%- npmScope %>/<%- importName %>'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["<%- npmScope %>/<%- importName %>"],
  ...
}
```

`gettext`, `system` and `cairo` now resolve as ESM imports, with types:

```ts
import gettext from 'gettext';
import system from 'system';
import cairo from 'cairo';
```

### GIR modules

If you want to have types for [GObject Introspection](https://gi.readthedocs.io/en/latest/) modules, you have to add them to your dependencies and import them as well, see the description of these modules, e.g. [gtk-4.0](https://www.npmjs.com/package/@girs/gtk-4.0), [gio-2.0](https://www.npmjs.com/package/@girs/gio-2.0), [adw-1](https://www.npmjs.com/package/@girs/adw-1) and [much more](https://github.com/gjsify/types).

These types will then be available to you:

```ts
import '<%- npmScope %>/gjs'
import '<%- npmScope %>/gjs/dom'
import '<%- npmScope %>/gio-2.0'
import '<%- npmScope %>/gtk-4.0'
import '<%- npmScope %>/adw-1'

import Gio from 'gi://Gio?version=2.0';
import Gtk from 'gi://Gtk?version=4.0';
import Adwaita from 'gi://adw?version=1';

const button = new Gtk.Button();

// ...

```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).