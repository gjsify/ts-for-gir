<p align="center">
  <img src=".github/ts-for-gir.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://badgen.net/github/checks/gjsify/ts-for-gir" />
  <img src="https://badgen.net/github/license/gjsify/ts-for-gir" />
  <img src="https://badgen.net/npm/v/@ts-for-gir/cli" />
  <img src="https://badgen.net/npm/dw/@ts-for-gir/cli" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection interfaces</p>

<p align="center">
  <img src=".github/feeling.gif" />
</p>


`ts-for-gir` is a robust [TypeScript](https://www.typescriptlang.org/) type definitions generator that improves the development experience of [GJS](https://wiki.gnome.org/Projects/Gjs) projects. It has been completely rewritten over time to provide a more complete and accurate TypeScript representation of the [GObject
introspection](https://wiki.gnome.org/Projects/GObjectIntrospection) interfaces. With `ts-for-gir`, developers can now benefit from TypeScript's strong typing and improved code navigation, making it easier to build robust and powerful applications with GJS.

## Getting Started

Install the latest LTS version of Node.js. We recommend using [NVM](https://github.com/nvm-sh/nvm) for this purpose. After Node.js has been installed, `ts-for-gir` can be executed with the following command:

```bash
npx @ts-for-gir/cli --help

# Alternatively you can install ts-for-gir globally:
# npm install -g @ts-for-gir/cli
# ts-for-gir --help
```

That's it, you can start generating your types 👩‍💻.

## Further information

[Examples](/examples/README.md) - Take a look at many different examples to see how you can use TypeScript with different bundlers.  
[CLI](/packages/cli/README.md) - Learn about the CLI options and what to keep in mind when using them.  
[Development](/DEVELOPMENT.md) - Learn how you can contribute to this project

## Related Projects

* [node-gtk](https://github.com/romgrk/node-gtk) - GIO bindings for NodeJS
* [cgjs](https://github.com/cgjs/cgjs) - A NodeJS / CommonJS Runtime for GJS
* [vala-girs](https://github.com/nemequ/vala-girs) - Collection of GIRs and VAPIs for the Vala toolchain
* [gjs-examples](https://github.com/optimisme/gjs-examples) - GJS examples showing how to build Gtk javascript applications
* [hello-gjs-yarn](https://github.com/jo/hello-gjs-yarn) - Gjs example using Babel and Rollup
* [vala-object](https://github.com/antono/vala-object) - Set of examples of how you can build native code with Vala and use it in Gjs, Node.js and other environments
* [Workbench](https://github.com/sonnyp/Workbench) - Learn and prototype with GNOME technologies
* [troll](https://github.com/sonnyp/troll) - Common JavaScript APIs for gjs and some helpers.