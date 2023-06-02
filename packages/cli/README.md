<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/ts-for-gir.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/checks-status/gjsify/ts-for-gir/main" />
  <img src="https://img.shields.io/github/license/gjsify/ts-for-gir" />
  <img src="https://img.shields.io/npm/v/@ts-for-gir/cli" />
  <img src="https://img.shields.io/npm/dw/@ts-for-gir/cli" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection GIR files</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/feeling.gif" />
</p>

# CLI

CLI tool to generate Typescript Type Definition files for GJS and node-gtk.

## Getting started

``` bash
npm install -g @ts-for-gir/cli
ts-for-gir --help
```

> Alternatively you can also add @ts-for-gir/cli to your dependencies:
> ```bash
> npm install --save-dev @ts-for-gir/cli
> ```
>
> Or without installing using `npx`:
> ```bash
> npx @ts-for-gir/cli --help
> ```

After you have installed `@ts-for-gir/cli` you can run the `ts-for-gir` command:

```bash
$ ts-for-gir --help

Typescript .d.ts generator from GIR for GJS or node-gtk

Commands:
  ts-for-gir generate [modules..]  Generates .d.ts files from GIR for GJS or nod
                                   e-gtk
  ts-for-gir list [modules..]      Lists all available GIR modules
  ts-for-gir doc [modules..]       The HTML documentation generator is not yet i
                                   mplemented, but feel free to implement it 🤗

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]                                             [boolean]
```

## Example

To generate the Typescript type definitions of Gtk-4.0 for GJS run:

```
ts-for-gir generate Gtk-4.0
```

To generate this types for [node-gtk](https://github.com/romgrk/node-gtk) run:

```
ts-for-gir generate Gtk-4.0 -e node
```

You can also look at the [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples) to see how the types are generated there.

## Generate .d.ts files

```bash
$ ts-for-gir generate --help

ts-for-gir generate [modules..]

ts-for-gir generate [modules..]

Generates .d.ts files from GIR for GJS or node-gtk

Options:
      --version                 Show version number                    [boolean]
      --help                    Show help                              [boolean]
      --modules                 GIR modules to load, e.g. 'Gio-2.0'. Accepts mul
                                tiple modules           [array] [default: ["*"]]
  -g, --girDirectories          GIR directories
  [array] [default: ["/usr/local/share/gir-1.0","/usr/share/gir-1.0","/usr/share
  /gnome-shell","/usr/share/gnome-shell/gir-1.0","/usr/lib64/mutter-10","/usr/li
  b64/mutter-11","/usr/lib64/mutter-12","/usr/lib/x86_64-linux-gnu/mutter-10","/
  usr/lib/x86_64-linux-gnu/mutter-11","/usr/lib/x86_64-linux-gnu/mutter-12","/ho
  me/jumplink/.local/share/flatpak/exports/share/gir-1.0","/var/lib/flatpak/expo
                                                            rts/share/gir-1.0"]]
      --root                    Root directory of your project
                        [string] [default: "/home/jumplink/Projekte/ts-for-gir"]
  -o, --outdir                  Directory to output to
                                                  [string] [default: "./@types"]
  -e, --environments            Javascript environment
                             [array] [choices: "gjs", "node"] [default: ["gjs"]]
  -i, --ignore                  Modules that should be ignored
                                                           [array] [default: []]
  -b, --buildType               Definitions generation type
                             [string] [choices: "lib", "types"] [default: "lib"]
  -t, --moduleType              Specify what module code is generated.
                   [string] [choices: "esm", "commonjs", "cjs"] [default: "esm"]
  -v, --verbose                 Switch on/off the verbose mode
                                                       [string] [default: false]
      --ignoreVersionConflicts  Do not ask for package versions if multiple vers
                                ions are found         [string] [default: false]
  -p, --print                   Print the output to console and create no files
                                                       [string] [default: false]
      --configName              Name of the config if you want to use a differen
                                t name    [string] [default: ".ts-for-girrc.js"]
  -d, --noNamespace             Do not export all symbols for each module as a n
                                amespace               [string] [default: false]
  -n, --noComments              Do not generate documentation comments
                                                       [string] [default: false]
      --noDebugComments         Do not generate debugging inline comments
                                                       [string] [default: false]
      --noDOMLib                Disables the generation of types that are in con
                                flict with the DOM types
                                                       [string] [default: false]
      --fixConflicts            Fix Inheritance and implementation type conflict
                                s                       [string] [default: true]
  -a, --generateAlias           Generate an alias tsconfig file to support GJS E
                                SM module imports      [string] [default: false]
      --promisify               Generate promisified functions for async/finish
                                calls                   [string] [default: true]
      --npmScope                Scope of the generated NPM packages
                                                     [string] [default: "@girs"]
      --package                 Generates an NPM compatible packages for each GI
                                R module               [string] [default: false]

Examples:
  ts-for-gir generate                       Run 'ts-for-gir generate' in your gj
                                            s or node-gtk project to generate ty
                                            pings for your project, pass the gir
                                             modules you need for your project
  ts-for-gir generate Gtk*                  You can also use wild cards
  ts-for-gir generate '*'                   If you want to parse all of your loc
                                            ally installed gir modules run
  ts-for-gir generate '*' -e gjs            Generate .d.ts. files only for gjs
  ts-for-gir generate '*' -e node           Generate .d.ts. files only for node
  ts-for-gir generate --configName='.ts-fo  Use a special config file
  r-gir.gtk4.rc.js
  ts-for-gir generate --ignore=Gtk-4.0 xra  Generate .d.ts. files but not for Gt
  ndr-1.3                                   k-4.0 and xrandr-1.3
```

## List available GIR modules

```bash
$ ts-for-gir list --help
 
ts-for-gir list [modules..]

Lists all available GIR modules

Options:
      --version         Show version number                            [boolean]
      --help            Show help                                      [boolean]
      --modules         GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple mo
                        dules                           [array] [default: ["*"]]
  -g, --girDirectories  GIR directories
  [array] [default: ["/usr/local/share/gir-1.0","/usr/share/gir-1.0","/usr/share
  /gnome-shell","/usr/share/gnome-shell/gir-1.0","/usr/lib64/mutter-10","/usr/li
  b64/mutter-11","/usr/lib64/mutter-12","/usr/lib/x86_64-linux-gnu/mutter-10","/
  usr/lib/x86_64-linux-gnu/mutter-11","/usr/lib/x86_64-linux-gnu/mutter-12","/ho
  me/jumplink/.local/share/flatpak/exports/share/gir-1.0","/var/lib/flatpak/expo
                                                            rts/share/gir-1.0"]]
  -i, --ignore          Modules that should be ignored     [array] [default: []]
      --configName      Name of the config if you want to use a different name
                                          [string] [default: ".ts-for-girrc.js"]
  -v, --verbose         Switch on/off the verbose mode [string] [default: false]

Examples:
  ts-for-gir list -g ./vala-girs/gir-1.0    Lists all available GIR modules in .
                                            /vala-girs/gir-1.0
  ts-for-gir list --ignore=Gtk-3.0 xrandr-  Lists all available GIR modules in /
  1.3                                       usr/share/gir-1.0 but not Gtk-3.0 an
                                            d xrandr-1.3
```

## Generate HTML documentation

```bash
$ ts-for-gir doc --help

ts-for-gir doc [modules..]

The HTML documentation generator is not yet implemented, but feel free to implem
ent it 🤗
```
## Config

In addition to the option of passing options as a CLI flag, you can also write them in a config file.
To do that, create a new config file called `.ts-for-girrc.js` in your project root directory, like this:

```js
// or on CommonJs: exports.default = {
export default {
  print: false,
  verbose: true,
  environments: ['gjs', 'node'],
  outdir: '@types',
  girDirectories: ['/usr/share/gir-1.0'],
  modules: ['*'],
  ignore: [],
  noNamespace: false,
  buildType: 'lib',
  moduleType: 'esm'
}
```

The javascript config files must also be in ESM format if you are inside a ESM Package, this is the case if `"type": "module"` is defined in your package.json. Alternatively, the file can be saved in json format, then it works in both cases.

You can pass the config file name to the CLI using [configName](#configName).

## Options

### girDirectories
Directories in which `*.gir` files are to be searched for. Default is `["/usr/share/gir-1.0"]`. More than one can be specified. If you want to generate the types for the GNOME Shell you have to search in several folders for the corresponding types: 
```js
girDirectories: [
  // General gir files
  '/usr/share/gir-1.0',

  // GNOME Shell gir file (package: gnome-shell-common / gnome-shell)
  '/usr/share/gnome-shell',
  '/usr/share/gnome-shell/gir-1.0',

  // GNOME Shell gir file dependencies on Fedora Workstation 37 (package: mutter)
  '/usr/lib64/mutter-11',

  //  GNOME Shell gir file dependencies on Ubuntu 22.10 (package: libmutter-11-dev)
  '/usr/lib/x86_64-linux-gnu/mutter-11',
]
```

### outdir
The `outdir` option is used to specify the name of the directory where the generated TypeScript types should be saved. The default value of the `outdir` option is `"./@types"`.

Here is an example of how you can use the outdir option in the CLI of `ts-for-gir`:

```bash
ts-for-gir generate * --outdir ./types
```

In this example, the generated TypeScript types will be saved in the `./types` directory.

It is important to note that the outdir option should be a valid directory path, and `ts-for-gir` will create the directory if it does not exist. If the specified directory already contains files, `ts-for-gir` will overwrite the existing files with the newly generated types.

### environments
The `environments` option allows you to specify the JavaScript environment for which you want to generate the TypeScript type definitions. The available values are `"gjs"` and `"node"`. You can also specify both environments.

The default value for this option is `"gjs"`.

To specify the environments option when running ts-for-gir, you would add the `--environments` or `-e` flag, followed by a comma-separated list of values. For example:

```bash
ts-for-gir generate * --environments gjs node
```

This option is useful if you want to generate type definitions for use in different JavaScript environments, such as in a `GJS` application or in a `Node.js` application using [node-gtk](https://github.com/romgrk/node-gtk). By specifying the appropriate environment, ts-for-gir can generate type definitions that are optimized for that environment, ensuring that your code will be type-checked correctly and you will receive meaningful error messages in your development environment.

### ignore
The `ignore` CLI option allows you to specify modules that should be ignored when generating TypeScript types. This can be useful if you have multiple versions of a library installed but only want to generate types for one of them.

To use the ignore option, pass one or more module names as arguments. For example, to ignore the `Gtk-3.0` module, you would use the following command:

```bash
ts-for-gir generate Gtk-* --ignore Gtk-3.0
```

You can also ignore multiple modules:

```bash
ts-for-gir generate * --ignore Gtk-2.0 Gtk-3.0 Gtk-4.0
```

Note that ignoring a module will prevent ts-for-gir from generating types for that module and any submodules that it might contain.

### buildType
`ts-for-gir` supports two build types for generating the types: `"lib"` and `"types"`.

* If `"lib"` is specified, `.js` files are generated as well as `.d.ts`, this is useful for some bundlers that expect a `.js` file. Some bundlers are also able to generate the import of this file only once, even if it occurs multiple times in your code.
* If `"types"` is specified, only `.d.ts` files are generated. In this mode it is recommended to add the generated `"@types/gjs.d.ts"` and `"@types/ambient.d.ts"` under `"include"` in the `tsconfig` to make the generated types known in your project. If you have problems to use imports in `ESM` format, you can also enable the `generateAlias` option and extend your `tsconfig` from the generated `"tsconfig.alias.json"`.

### moduleType
The `moduleType` CLI option determines the format in which the generated JavaScript files should be exported. The option takes either `"esm"` or `"cjs"` as its value, with `"esm"` being the default.

> This option is only relevant if the `buildType` is set to `"lib"`. The choice of `moduleType` may affect how the generated code is used in other parts of your project, so it's important to choose the right format that works best for your use case.

The choice of `moduleType` is also important in the context of the bundler that you plan to use in your project. For example, if you are using a bundler that only supports ESM (such as Rollup), you would need to set `moduleType` to "esm". On the other hand, if you are using a bundler that supports both ESM and CommonJS (such as Webpack), you can choose whichever format you prefer. Ultimately, the choice of `moduleType` will depend on your project requirements and the tools that you are using. For Example, if you want to build a GNOME Shell Extension, you should use `"cjs"` because `ESM` is currently not supported for GNOME Shell Extensions. For [node-gtk](https://github.com/romgrk/node-gtk) you also need to use `"cjs"`. If you want to build a regular GJS Application we recommend to use `ESM`.

When `"esm"` is set, the generated JavaScript files will use the ECMAScript module (ESM) format for imports and exports. For example, the generated code might look like this:

```ts
// Gtk-4.0.d.ts
import type GLib from './GLib-2.0.js';

namespace Gtk {
  class Window extends Widget {
    ...
  }
  function builder_error_quark(): GLib.Quark
}

export default Gtk;
```

```js
// Gtk-4.0.js
import Gtk from 'gi://Gtk?version=4.0';
export default Gtk;
```

> The `"esm"` module type is recommended for GJS applications as it makes use of the ESM import syntax, which is more modern and flexible compared to imports.gi / CommonJS imports. This allows for a more streamlined and convenient way of using the generated types in your GJS application. Support for ES modules can be activated in `gjs` with its `gjs -m` flag.

When `"cjs"` and [`noNamespace`](#nonamespace) is set, the generated JavaScript files will use the CommonJS format exports and the `imports.gi` object for imports. For example:

```ts
// Gtk-4.0.d.ts
import type * as GLib from './GLib-2.0.js';

export class Window extends Widget {
  ...
}
export function builder_error_quark(): GLib.Quark
```

```js
// Gtk-4.0.js
imports.gi.versions.Gtk = '4.0'
const Gtk = imports.gi.Gtk;
  
module.exports = { Gtk };
exports.default = Gtk;
```

> It is recommended to also set the [noNamespace](#nonamespace) option to true when using the `"cjs"` moduleType option. This will ensure that the generated code is fully compatible with the CommonJS format.


### verbose
The `--verbose` or `-v` option is a flag that can be used to enable verbose output in the console when running the CLI. When this option is enabled, additional warnings and information about the processing of GIR files and the generation of TypeScript definitions will be printed to the console. This information can be useful for debugging purposes or for understanding what is happening behind the scenes when generating the TypeScript definitions.

### ignoreVersionConflicts
The `ignoreVersionConflicts` CLI option allows you to disable the prompt to choose between multiple versions of a `.gir` file. When multiple versions of a `.gir` file are found, such as `Gtk-3.0.gir` and `Gtk-4.0.gir`, the user is normally asked to select which version to use. However, if the `ignoreVersionConflicts` option is set, all versions of the file will be loaded without prompt.

This option can be useful in certain scenarios where you want to generate types for all versions of a library, even if there are conflicts between the versions. Note that this may result in type conflicts and other issues, so it should be used with caution.

Another way to disable the prompt and ignore conflicting versions of `.gir` files is to use the [ignore CLI option](#ignore). 

### print
The `print` CLI option allows you to output the generated TypeScript definitions to the console, instead of saving them to files on disk. This is useful if you want to quickly inspect the generated types without having to save them to disk and open them in an editor.

By default, the print option is disabled and the generated types will be saved to disk. To enable the `print` option, you can pass the `--print` flag to the command line interface.

### configName
The `configName` CLI option allows you to specify the name of the configuration file to be used when generating the TypeScript definitions. This option is useful if you want to use a custom configuration file instead of the default one.

By default,` ts-for-gir` looks for a configuration file named `.ts-for-girrc.js` in the current directory. If a different configuration file name is required, the `configName` option can be used to specify the name of the configuration file.

For example, if you have a configuration file named `custom-config.js`, you can use the following command to generate TypeScript definitions using this configuration file:

```bash
ts-for-gir generate * --configName custom-config.js
```

### noNamespace
This option disables the namespaces for each module type.

* By default the types are exported as a namespace. Namespaces should be used when the types are generated and used in **ESM** format.
* If imports in `imports.gi` or **CJS** format are used, then namespaces should be disabled.

### noComments
The `noComments` option for `ts-for-gir` is a CLI option used to control the generation of **TSDoc** comments in the generated TypeScript bindings.

When `noComments` is set to `false`, `ts-for-gir` will include TSDoc comments in the generated TypeScript bindings that are based on the comments found in the GObject Introspection (GIR) files. These comments provide helpful information to developers about the usage and behavior of the bindings, making it easier to work with them.

When `noComments` is set to `true`, `ts-for-gir` will not include TSDoc comments in the generated TypeScript bindings. This can be useful if you want to reduce the size of the generated code.

To use the noComments option, pass it as a command line argument to `ts-for-gir`:

```bash
ts-for-gir generate * --noComments`
```

### noDebugComments
The `noDebugComments` CLI option is used to control the generation of inline comments in the generated TypeScript files. These comments are used for debugging purposes and can be useful in tracking down issues with the generated types.

By default, the `noDebugComments` option is disabled and these inline comments will be included in the generated TypeScript files. If you do not require these comments for debugging purposes, you can use the -`-noDebugComments` option to disable their generation and keep your TypeScript code more compact.

### noDOMLib
The `noDOMLib` option helps to avoid conflicts between the generated GJS global types and the DOM types, which can cause lint warnings and compilation errors with TypeScript.

To utilize this option, it is recommended to either modify your `tsconfig.json` or `jsconfig.json` file to exclude the DOM lib, or to enable the `noLib` property. Doing so will prevent the generation of types that conflict with the DOM types.

For more information on the `lib` and `noLib` properties, please refer to the official TypeScript documentation at https://www.typescriptlang.org/tsconfig/#lib and https://www.typescriptlang.org/tsconfig#noLib.

In summary, the `noDOMLib` option provides a convenient way to prevent the generation of conflicting types, making it easier to build robust and error-free TypeScript applications with GJS.

### fixConflicts
The `fixConflicts` CLI option is used to resolve type conflicts between the GObject Introspection descriptions in GIR XML format and TypeScript. For example, properties in the GIR XML format can be overwritten by methods, which is not allowed in TypeScript. When this option is active, `ts-for-gir` attempts to resolve these conflicts. However, it's important to note that this may result in generating types that do not exist.

> If you have found an issue with the `fixConflicts` CLI option, we encourage you to report it. Reporting issues helps improve the quality of `ts-for-gir` and makes it a better tool for everyone.

### generateAlias
The `generateAlias` CLI option, when active, generates an alias `tsconfig.alias.json` file to support ESM module imports in GJS. This is particularly useful if you want to import GIR modules in your GJS code using the `'gi://...'` syntax. The generated `tsconfig.alias.json` file will contain the necessary path aliases to enable TypeScript to properly resolve the imported modules, allowing for improved code editor functionality, such as type checking and code completion.

The generateAlias option is particularly useful for GJS applications, as it allows you to import GIR modules using the standard ESM syntax, rather than having to use the global imports object.

You can extend the generated `tsconfig.alias.json` file in your main tsconfig.json file by setting the extends field to `./tsconfig.alias.json`.

```json
// tsconfig.alias.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { 
      "gi://Gio?version=2.0": ["./@types/gio-2.0.d.ts"],
      "gi://Gio": ["./@types/gio-2.0.d.ts"],
      "gi://GObject?version=2.0": ["./@types/gobject-2.0.d.ts"],
      "gi://GObject": ["./@types/gobject-2.0.d.ts"],
      "gi://GLib?version=2.0": ["./@types/glib-2.0.d.ts"],
      "gi://GLib": ["./@types/glib-2.0.d.ts"]
    }
  },
  "include": ["./@types/*.ts"]
}
```

```json
// tsconfig.json
{
  "extends": "./tsconfig.alias.json",
  "compilerOptions": {   
    "lib": ["ESNext"],
    "types": [],
    "target": "ESNext",
    "module": "ESNext"
  },
  "include": ["@types/gjs.d.ts"],
  "files": [
    "main.ts",
  ]
}
```

> The example in [examples/gjs/gio-2-cat-alias](https://github.com/gjsify/ts-for-gir/tree/main/examples/gjs/gio-2-cat-alias) demonstrates the usage of the generateAlias option. This example shows how to use the generated tsconfig.alias.json file in a GJS project and provides a clear understanding of how this option can be used in practice.

# package

The `--package` option of ts-for-gir is used to package the generated TypeScript type definitions into an NPM package. The generated package can be easily installed and used in other TypeScript projects via `npm install`.

> Another advantage is NPM packages is, that you can use them in a monorepo using a package manager with support for workspaces such as Yarn, PNPM and Lerna. To use the generated packages in a monorepo, you can add them as dependencies to your project's package.json file, and use relative file paths or the file: protocol to point to the local package directories. This way, you can import the generated types from within your project like any other TypeScript module.

When this option is used, each GObject introspection module will be packaged into its own NPM package. The package name will be in the format of `@girs/<lower case module name>-<version>`.

For example, if the `--package` option is used to generate the TypeScript type definitions for the `Gtk-4.0` module, then the generated NPM package will have the name `@girs/gtk-3.0`.

> You can change the NPM package scope name with the [`--npmScope`](#npmscope) option.

To use the generated NPM package in your TypeScript project, you can also install our pregenerated packages:

```bash
npm install @girs/gtk-3.0
```

Then, import the desired module in your TypeScript code:

```ts
import Gtk from '@girs/gtk-4.0';

const button = new Gtk.Button();
```

It is recommended to use the `--package` option when generating TypeScript type definitions for a GObject introspection module, as it allows for easy distribution and consumption of the generated types. However, please note that the generated NPM packages will only work with a package manager like NPM or Yarn, and cannot be used directly in a GJS or Node.js project.

> Here are some examples are making use of the `--package` option:
> * [examples/gjs/gio-2-cat-packages](https://github.com/gjsify/ts-for-gir/tree/main/examples/gjs/gio-2-cat-packages) - GJS example with `--package` option
> * [examples/node-gtk/gio-2-cat-packages](https://github.com/gjsify/ts-for-gir/tree/main/examples/node-gtk/gio-2-cat-packages) - node-gtk example with `--package` option

## npmScope

The `--npmScope` CLI option can be used to specify a custom NPM package scope name for the generated packages. By default, the scope name is `@girs`.

Here's an example command to generate NPM packages with a custom scope name:

```bash
ts-for-gir --buildType lib --package --npmScope my-scope
```

This command will generate NPM packages with the scope `my-scope` instead of the default `@girs` scope. For `Gtk-4.0` this would generate a package with the name of `@my-scope/gtk-4.0`.

## Ambient modules

In TypeScript, ambient modules are a way to define external modules that are not part of the TypeScript codebase. This can be useful for importing external libraries or modules, including those generated by ts-for-gir using the `gi://` syntax.

If you want to have support for ambient modules, then you have to enable the [`--package`](#package) option, this will generate a NPM package for each module.
Alternatively, you can also use the pre-generated NPM packages for this, so you don't even need to use ts-for-gir for it. For example, look at the NPM packages [gtk-4.0](https://www.npmjs.com/package/@girs/gtk-4.0), [gio-2.0](https://www.npmjs.com/package/@girs/gio-2.0) and [adw-1](https://www.npmjs.com/package/@girs/adw-1). All pre-generated NPM packages can be found on [gjsify/types](https://github.com/gjsify/types).

> The advantage of self-generated types is that you generate the types exactly for your locally installed library version. However, we try to keep the pre-generated NPM packages as up to date as possible.

### Alias
If for some reason you don't want to or can't generate NPM packages, you can instead use the [`--generateAlias`](#generatealias) CLI option. This way you can also use imports in the `gi://` syntax with the generated types.

To use ambient modules, the `ambient.d.ts` file must be imported either in the code like `import '@girs/gjs/ambient'` or by adding an entry to the `includes` property in the `tsconfig` file. The `ambient.d.ts` file is automatically generated.

```json
// tsconfig.json
{
  "compilerOptions": {   
    "lib": ["ESNext"],
    "types": [],
    "target": "ESNext",
    "module": "ESNext"
  },
  "include": ["@girs/gjs", "@girs/gjs/ambient"],
  "files": [
    "main.ts",
  ]
}
```

> Here are some examples demonstrating the usage of ambient modules:
> * [examples/gjs/gio-2-cat-packages](https://github.com/gjsify/ts-for-gir/tree/main/examples/gjs/gio-2-cat-packages) - GJS example with `--package` option
> * [examples/node-gtk/gio-2-cat-packages](https://github.com/gjsify/ts-for-gir/tree/main/examples/node-gtk/gio-2-cat-packages) - node-gtk example with `--package` option

### Without version specifier

Some ambient modules declarations are only defined with the version specifier to prevent version conflicts e.g. between Gtk-3.0 and Gtk-4.0.
If you want to import the modules without the version specifier you can define the module declarations by yourself, similarly to this:

```ts
// gtk4-ambient.d.ts
declare module "gi://Gtk" {
  import Gtk from "gi://Gtk?version=4.0";
  export default Gtk;
}
```