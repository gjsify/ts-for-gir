<p align="center">
  <img src=".github/ts-for-gir.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/gjsify/ts-for-gir/ci.yml" />
  <img src="https://img.shields.io/github/license/gjsify/ts-for-gir" />
  <img src="https://img.shields.io/npm/v/@ts-for-gir/cli" />
  <img src="https://img.shields.io/npm/dw/@ts-for-gir/cli" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection GIR files</p>

<p align="center">
  <img src=".github/feeling.gif" />
</p>


`ts-for-gir` is a robust [TypeScript](https://www.typescriptlang.org/) type definitions generator that improves the development experience of [GJS](https://gitlab.gnome.org/GNOME/gjs/) projects. It has been completely rewritten over time to provide a more complete and accurate TypeScript representation of the [GObject introspection](https://gi.readthedocs.io/en/latest/) interfaces. With `ts-for-gir`, developers can now benefit from TypeScript's strong typing and improved code navigation, making it easier to build robust and powerful applications with GJS.

# Branch "main" - Fusion with "gi.ts":

You are on the `main` branch. Join us to contribute to the future of `ts-for-gir` and [gi.ts](https://github.com/gjsify/gi.ts). Collaborate with us as we work on merging the two projects and bring exciting new features and improvements in the upcoming `ts-for-gir` v4.x. This is still under development. If you don't want to help or need Node-GTK support, it's best to use the Stable 3.x version.

`main` branch: https://github.com/gjsify/ts-for-gir/tree/main  
`3.x` branch: https://github.com/gjsify/ts-for-gir/tree/3.x

## Getting Started

Install the latest LTS version of Node.js. We recommend using [NVM](https://github.com/nvm-sh/nvm) for this purpose. After Node.js has been installed, `ts-for-gir` can be executed with the following command:

```bash
npx @ts-for-gir/cli --help
```

That's it, you can start generating your types 👩‍💻☕

## NPM packages

If you are only interested in the types and do not want to generate them yourself, you can use our pre-generated NPM packages. For example, if you want to develop a Gtk4 application with GJS, it is enough to install the corresponding NPM packages:

```bash
npm install @girs/gjs @girs/gtk-4.0 --save
```

```ts
import '@girs/gjs'
import '@girs/gjs/dom'
import '@girs/gtk-4.0'

import Gtk from 'gi://Gtk?version=4.0';

const button = new Gtk.Button();
```

All pre-generated NPM packages can be found on [gjsify/types](https://github.com/gjsify/types).

> You want your or any other missing GObject introspection based library types to be published on NPM for every release? Then feel free to create an issue for it, we will be happy to include it.

## Further information

[Examples](/examples/README.md) - Take a look at many different examples to see how you can use TypeScript with different bundlers.  
[CLI](/packages/cli/README.md) - Learn about the CLI options and what to keep in mind when using them.  
[Development](/DEVELOPMENT.md) - Learn how you can contribute to this project.  
[gjsify/types](https://github.com/gjsify/types) - Pre-generated NPM packages that you can use directly without needing ts-for-gir for it.
[GNOME Shell Extension Types](https://github.com/gjsify/gnome-shell) - Very experimental additional hand written type definitions for GNOME Shell Extensions.
