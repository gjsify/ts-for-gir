# <%- packageName %>

<%- PACKAGE_DESC %>.

Generated with [<%- APP_NAME %>](<%- APP_SOURCE %>) v<%- APP_VERSION %>.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install <%- npmScope %>/<%- importName %>
```

<%_ const pkg = dep.get(packageName) _%>
<%_ if(pkg){ _%>
## Usage

You can import this package into your project like this:
```ts
import <%- pkg.namespace %> from "<%- pkg.importPath %>";
```
<%_ } _%>

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).