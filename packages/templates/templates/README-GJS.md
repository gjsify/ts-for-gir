<%# This template is used for the README.md of @girs/gjs if the Option `package` is enabled %>
# <%- packageName %>

![version](https://img.shields.io/npm/v/<%- npmScope %>/<%- importName %>)
![downloads/week](https://img.shields.io/npm/dw/<%- npmScope %>/<%- importName %>)

<%- PACKAGE_DESC %> using [<%- APP_NAME %>](<%- APP_SOURCE %>) v<%- APP_VERSION %>.

[GJS](https://gitlab.gnome.org/GNOME/gjs) is a JavaScript runtime for the GNOME ecosystem. Using GJS and the type definitions in this NPM package, you can build GTK applications in JavaScript or TypeScript with type checking, better autocompletion and inline documentations.

## Install

To use this type definitions, install them with NPM:
```bash
npm install <%- npmScope %>/<%- importName %>
```

<%_ const pkg = await dep.get(packageName) _%>
<%_ if(!pkg){ _%>
  <%_ return `Package with package name "${packageName}" not found!` _%>
<%_ } _%>

## Usage

You can import this package into your project like this:
```ts
import <%- pkg.namespace %> from '<%- pkg.importPath %>';
```

Or if you prefer CommonJS, you can also use this:
```ts
const <%- pkg.namespace %> = require('<%- pkg.importPath %>');
```

### Global types

After the import, the global types of GJS are also available:

```ts
import '@girs/gjs';

print('Hello World from print');

const ByteArray = imports.byteArray;

// And so on...
```

### Global DOM types

Some types that conflict with the DOM are outsourced to allow frameworks like Gjsify to rebuild the DOM API without causing type conflicts.
But you can easily import them:

```ts
import '@girs/gjs/dom';

console.log('Hello World from console');

const encoder = new TextEncoder();
const encoded = encoder.encode('𝓽𝓮𝔁𝓽');

setTimeout(() => {
  // ...
}, 1000);

// And so on...
```

To avoid a type conflict with the DOM types it is recommended to either modify your `tsconfig.json` or `jsconfig.json` file to exclude the DOM lib, or to enable the `noLib` property.

### Ambient Modules

You can import the built in [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) of GJS.
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

Now you can import `gettext`, `system` and `cairo` in ESM style with Typescript support:

```ts
import gettext from 'gettext';
import system from 'system';
import cairo from 'cairo';
```

### GIR modules

If you want to have types for [GObject Introspection](https://gi.readthedocs.io/en/latest/) modules, you have to add them to your dependencies and import them as well, see the description of these modules, e.g. [gtk-4.0](https://www.npmjs.com/package/@girs/gtk-4.0), [gio-2.0](https://www.npmjs.com/package/@girs/gio-2.0), [adw-1](https://www.npmjs.com/package/@girs/adw-1) and [much more](https://github.com/gjsify/types).

These types will then be available to you:

```ts
import '@girs/gjs'
import '@girs/gjs/dom'
import '@girs/gio-2.0'
import '@girs/gtk-4.0'
import '@girs/adw-1'

import Gio from 'gi://Gio?version=2.0';
import Gtk from 'gi://Gtk?version=4.0';
import Adwaita from 'gi://adw?version=1';

const button = new Gtk.Button();

// ...

```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).