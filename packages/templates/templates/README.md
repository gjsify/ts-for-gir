<%# This template is used if the Option `package` is enabled %>
# <%- packageName %>

![version](https://img.shields.io/npm/v/<%- npmScope %>/<%- importName %>)
![downloads/week](https://img.shields.io/npm/dw/<%- npmScope %>/<%- importName %>)


<%- PACKAGE_DESC %> using [<%- APP_NAME %>](<%- APP_SOURCE %>) v<%- APP_VERSION %>.

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

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `<%- npmScope %>/<%- importName %>` or `<%- npmScope %>/<%- importName %>/ambient` in your `tsconfig` or entry point Typescript file:

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

The ambient module now resolves with types:

```ts
import <%= pkg.namespace %> from 'gi://<%= pkg.namespace %>?version=<%= pkg.version %>';
```

### Global import

GJS's global `imports.gi` works too, with types.
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

That form carries types as well:

```ts
const <%= pkg.namespace %> = imports.gi.<%= pkg.namespace %>;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).