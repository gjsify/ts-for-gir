<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/ts-for-gir.png" />
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
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/feeling.gif" />
</p>

# CLI

CLI tool to generate TypeScript type definitions for GObject Introspection Repository (GIR) files, primarily for GJS applications.

## Getting started

``` bash
npx @ts-for-gir/cli --help
```

> Alternatively you can also add @ts-for-gir/cli to your dependencies:
> ```bash
> npm install --save-dev @ts-for-gir/cli
> ```
>
> Or globally install it:
> ```bash
> npm install -g @ts-for-gir/cli
> ts-for-gir --help
> ```

```bash
$ npx @ts-for-gir/cli --help

TypeScript type definition generator for GObject introspection GIR files

Commands:
  ts-for-gir generate [modules..]  Generates .d.ts files from GIR for GJS
  ts-for-gir list [modules..]      Lists all available GIR modules
  ts-for-gir copy [modules..]      Scan for *.gir files and copy them to a new directory
  ts-for-gir doc [modules..]       The HTML documentation generator is not yet implemented, but feel free to implement it 🤗

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

## Example

To generate the TypeScript type definitions of Gtk-4.0 for GJS run:

```
ts-for-gir generate Gtk-4.0
```

You can also look at the [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples) to see how the types are generated and/or used there.

## Generate .d.ts files

```bash
$ npx @ts-for-gir/cli generate --help

ts-for-gir generate [modules..]

Generates .d.ts files from GIR for GJS

Options:
      --version                 Show version number                    [boolean]
      --help                    Show help                              [boolean]
      --modules                 GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules           [array] [default: ["*"]]
  -g, --girDirectories          GIR directories
  [array] [default: ["/usr/local/share/gir-1.0","/usr/share/gir-1.0","/usr/share/*/gir-1.0","/usr/share/gnome-shell","/usr/share/gnome-shell/gir-1.0","/usr/lib64/mutter-*","/usr/lib/mutter-*","/usr/lib/x86_64-linux-gnu/mutter-*"]]
      --root                    Root directory of your project
                 [string] [default: "/home/jumplink/Projekte/gjsify/ts-for-gir"]
  -o, --outdir                  Directory to output to
                                                  [string] [default: "./@types"]
  -i, --ignore                  Modules that should be ignored
                                                           [array] [default: []]
  -v, --verbose                 Switch on/off the verbose mode
                                                      [boolean] [default: false]
      --ignoreVersionConflicts  Skip prompts for library version selection when
                                multiple versions are detected
                                                      [boolean] [default: false]
  -p, --print                   Print the output to console and create no files
                                                      [boolean] [default: false]
      --configName              Specify a custom name for the configuration file
                                          [string] [default: ".ts-for-girrc.js"]
  -d, --noNamespace             Do not export all symbols for each module as a namespace
                                                      [boolean] [default: false]
  -n, --noComments              Do not generate documentation comments
                                                      [boolean] [default: false]
      --promisify               Generate promisified functions for async/finish
                                calls                  [boolean] [default: true]
      --npmScope                Scope of the generated NPM packages
                                                     [string] [default: "@girs"]
      --workspace               Uses the workspace protocol for the generated packages 
                                which can be used with package managers like 
                                Yarn and PNPM       [boolean] [default: false]
      --onlyVersionPrefix       Only use the version prefix for the ambient module
                                exports. This is useful if you want to use different
                                library versions of the same library in your project.
                                                      [boolean] [default: false]
      --noPrettyPrint           Do not prettify the generated types
                                                      [boolean] [default: false]
      --noAdvancedVariants      Disable GLib.Variant class with string parsing
                                                       [boolean] [default: true]
      --package                 Generate the typescript types with package.json
                                support               [boolean] [default: false]

Examples:
  ts-for-gir generate                       Run 'ts-for-gir generate' in your gjs
                                            project to generate typings for your
                                            project, pass the gir modules you need
  ts-for-gir generate Gtk*                  You can also use wild cards
  ts-for-gir generate '*'                   If you want to parse all of your locally
                                            installed gir modules run
  ts-for-gir generate --configName='.ts-for-gir.gtk4.rc.js'  Use a special config file
  ts-for-gir generate --ignore=Gtk-4.0 xrandr-1.3             Generate .d.ts files but not for
                                                              Gtk-4.0 and xrandr-1.3
```

## List available GIR modules

```bash
$ npx @ts-for-gir/cli list --help
 
ts-for-gir list [modules..]

Lists all available GIR modules

Options:
      --version         Show version number                            [boolean]
      --help            Show help                                      [boolean]
      --modules         GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules
                                                     [array] [default: ["*"]]
  -g, --girDirectories  GIR directories
  [array] [default: ["/usr/local/share/gir-1.0","/usr/share/gir-1.0","/usr/share/*/gir-1.0","/usr/share/gnome-shell","/usr/share/gnome-shell/gir-1.0","/usr/lib64/mutter-*","/usr/lib/mutter-*","/usr/lib/x86_64-linux-gnu/mutter-*"]]
      --root            Root directory of your project
                 [string] [default: "/home/jumplink/Projekte/gjsify/ts-for-gir"]
  -i, --ignore          Modules that should be ignored     [array] [default: []]
      --configName      Specify a custom name for the configuration file
                                          [string] [default: ".ts-for-girrc.js"]
  -v, --verbose         Switch on/off the verbose mode [boolean] [default: false]

Examples:
  ts-for-gir list -g ./vala-girs/gir-1.0    Lists all available GIR modules in ./vala-girs/gir-1.0
  ts-for-gir list --ignore=Gtk-3.0 xrandr-1.3  Lists all available GIR modules but not Gtk-3.0 and xrandr-1.3
```

## Generate HTML documentation

```bash
$ npx @ts-for-gir/cli doc --help

ts-for-gir doc [modules..]

The HTML documentation generator is not yet implemented, but feel free to implement it 🤗

Options:
      --version                 Show version number                    [boolean]
      --help                    Show help                              [boolean]
      --modules                 GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules
                                                    [array] [default: ["*"]]
  -g, --girDirectories          GIR directories
  [array] [default: ["/usr/local/share/gir-1.0","/usr/share/gir-1.0","/usr/share/*/gir-1.0","/usr/share/gnome-shell","/usr/share/gnome-shell/gir-1.0","/usr/lib64/mutter-*","/usr/lib/mutter-*","/usr/lib/x86_64-linux-gnu/mutter-*"]]
      --root                    Root directory of your project
                 [string] [default: "/home/jumplink/Projekte/gjsify/ts-for-gir"]
  -o, --outdir                  Directory to output to
                                                  [string] [default: "./@types"]
  -i, --ignore                  Modules that should be ignored
                                                           [array] [default: []]
  -v, --verbose                 Switch on/off the verbose mode
                                                      [boolean] [default: false]
      --ignoreVersionConflicts  Skip prompts for library version selection when
                                multiple versions are detected
                                                      [boolean] [default: false]
      --configName              Specify a custom name for the configuration file
                                          [string] [default: ".ts-for-girrc.js"]
```

## Config

In addition to the option of passing options as a CLI flag, you can also write them in a config file.
To do that, create a new config file called `.ts-for-girrc.js` in your project root directory, like this:

```js
// or on CommonJs: exports.default = {
export default {
  verbose: true,
  outdir: '@types',
  girDirectories: ['/usr/share/gir-1.0'],
  modules: ['*'],
  ignore: [],
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

### ignore
The `ignore` CLI option allows you to specify modules that should be ignored when generating TypeScript types. This can be useful if you have multiple versions of a library installed but only want to generate types for one of them.

To use the ignore option, pass one or more module names as arguments. For example, to ignore the `Gtk-3.0` module, you would use the following command:

```bash
ts-for-gir generate Gtk-* --ignore */Gtk-3.0
```

You can also ignore multiple modules:

```bash
ts-for-gir generate * --ignore */Gtk-2.0 */Gtk-3.0 */Gtk-4.0
```

Note that ignoring a module will prevent ts-for-gir from generating types for that module and any submodules that it might contain.

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
ts-for-gir generate * --noComments
```

### noPrettyPrint
The `noPrettyPrint` option controls whether the generated TypeScript definitions are formatted using Prettier. When set to `true`, the output will not be formatted, which can be useful for debugging or in cases where you want to handle formatting separately.

```bash
ts-for-gir generate * --noPrettyPrint
```

### noAdvancedVariants
The `noAdvancedVariants` option disables the advanced GLib.Variant class with string parsing capabilities. This option is enabled by default (`true`) as these advanced features can impact performance, especially with older TypeScript versions.

```bash
ts-for-gir generate * --noAdvancedVariants=false
```

### package

The `--package` option of ts-for-gir is used to package the generated TypeScript type definitions into an NPM package. The generated package can be easily installed and used in other TypeScript projects via `npm install`.

> Another advantage is NPM packages is, that you can use them in a monorepo using a package manager with support for workspaces such as Yarn, PNPM and Lerna. To use the generated packages in a monorepo, you can add them as dependencies to your project's package.json file, and use relative file paths or the file: protocol to point to the local package directories. This way, you can import the generated types from within your project like any other TypeScript module.

When this option is used, each GObject introspection module will be packaged into its own NPM package. The package name will be in the format of `@girs/<lower case module name>-<version>`.

For example, if the `--package` option is used to generate the TypeScript type definitions for the `Gtk-4.0` module, then the generated NPM package will have the name `@girs/gtk-4.0`.

> You can change the NPM package scope name with the [`--npmScope`](#npmscope) option.

To use the generated NPM package in your TypeScript project, you can also install our pregenerated packages:

```bash
npm install @girs/gtk-4.0
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
ts-for-gir generate * --package --npmScope my-scope
```

This command will generate NPM packages with the scope `@my-scope` instead of the default `@girs` scope. For `Gtk-4.0` this would generate a package with the name of `@my-scope/gtk-4.0`.

## Ambient modules

In TypeScript, ambient modules are a way to define external modules that are not part of the TypeScript codebase. This can be useful for importing external libraries or modules, including those generated by ts-for-gir using the `gi://` syntax.

If you want to have support for ambient modules, then you have to enable the [`--package`](#package) option, this will generate a NPM package for each module.
Alternatively, you can also use the pre-generated NPM packages for this, so you don't even need to use ts-for-gir for it. For example, look at the NPM packages [gtk-4.0](https://www.npmjs.com/package/@girs/gtk-4.0), [gio-2.0](https://www.npmjs.com/package/@girs/gio-2.0) and [adw-1](https://www.npmjs.com/package/@girs/adw-1). All pre-generated NPM packages can be found on [gjsify/types](https://github.com/gjsify/types).

> The advantage of self-generated types is that you generate the types exactly for your locally installed library version. However, we try to keep the pre-generated NPM packages as up to date as possible.

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