<%# This template is used if the Option `package` is enabled %>
# <%- packageName %>

![version](https://img.shields.io/npm/v/<%- npmScope %>/<%- importName %>)
![downloads/week](https://img.shields.io/npm/dw/<%- npmScope %>/<%- importName %>)


<%- PACKAGE_DESC %> using [<%- APP_NAME %>](<%- APP_SOURCE %>) v<%- APP_VERSION %>.

<%_ if (typeof pkgData !== 'undefined' && pkgData.description) { _%>
<%- pkgData.description %>
<%_ } _%>

## Install

To use this type definitions, install them with NPM:
```bash
npm install <%- npmScope %>/<%- importName %>
```

<%_ const pkg = dep.get(packageName) _%>
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

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `<%- npmScope %>/<%- importName %>` or `<%- npmScope %>/<%- importName %>/<%= environment === 'gjs' ? "ambient" : "import" %>` in your `tsconfig` or entry point Typescript file:

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

Now you can import the ambient module with TypeScript support: 

<%_ if(environment === 'gjs'){ _%>
```ts
import <%= pkg.namespace %> from 'gi://<%= pkg.namespace %>?version=<%= pkg.version %>';
```
<%_ } else { _%>
```ts
const gi = require('node-gtk')
const <%= pkg.namespace %> = gi.require('<%= pkg.namespace %>', '<%= pkg.version %>')
```
<%_ } _%>

<%_ if(environment === 'gjs'){ _%>
### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `<%- npmScope %>/<%- importName %>` or `<%- npmScope %>/<%- importName %>/import` in your `tsconfig` or entry point Typescript file:

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

Now you have also type support for this, too:

```ts
const <%= pkg.namespace %> = imports.gi.<%= pkg.namespace %>;
```
<%_ } _%>

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).