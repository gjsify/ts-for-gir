<%# This template is used if the Option `package` is enabled %>
# <%- packageName %>

<%- PACKAGE_DESC %> using [<%- APP_NAME %>](<%- APP_SOURCE %>) v<%- APP_VERSION %>.
<%_ if (typeof pkgData !== 'undefined' && pkgData.description) { _%>

<%- pkgData.description %>
<%_ } _%>

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
import <%- pkg.namespace %> from '<%- pkg.importPath %>';
```

Or if you prefer CommonJS, you can also use this:
```ts
const <%- pkg.namespace %> = require('<%- pkg.importPath %>');
```

If you use ambient modules, you can also import this module like you would do this in JavaScript:

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

<%_ } _%>

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).