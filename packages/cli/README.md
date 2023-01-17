# ts-for-gjs CLI

CLI tool to generate Typescript Type Definition files for Gjs and node-gtk.

## Getting started

``` bash
npm install @ts-for-gir/cli -g
ts-for-gir --help
```

After you have installed `@ts-for-gir/cli` you can run the `ts-for-gir` command:

```bash
$ ts-for-gir --help

Typescript .d.ts generator from GIR for gjs or node-gtk

Commands:
  ts-for-gir generate [modules..]  Generates .d.ts files from GIR for gjs or nod
                                   e-gtk
  ts-for-gir list [modules..]      Lists all available GIR modules

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

## Generate .d.ts files

```bash
$ ts-for-gir generate --help

ts-for-gir generate [modules..]

Generates .d.ts files from GIR for gjs or node-gtk

Options:
      --version          Show version number                           [boolean]
      --help             Show help                                     [boolean]
      --modules          GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple m
                         odules                         [array] [default: ["*"]]
  -g, --girDirectories   GIR directories
                                       [array] [default: ["/usr/share/gir-1.0"]]
  -o, --outdir           Directory to output to   [string] [default: "./@types"]
  -e, --environments     Javascript environment
                      [array] [choices: "gjs", "node"] [default: ["gjs","node"]]
  -i, --ignore           Modules that should be ignored    [array] [default: []]
  -b, --buildType        Definitions generation type
                             [string] [choices: "lib", "types"] [default: "lib"]
  -t, --moduleType       Specify what module code is generated.
                     [string] [choices: "esm", "commonjs"] [default: "commonjs"]
      --pretty           Prettifies the generated .d.ts files
                                                       [string] [default: false]
  -v, --verbose          Switch on/off the verbose mode [string] [default: true]
      --ignoreVersionConflicts  Do not ask for package versions if multiple versions ar
                         e found                       [string] [default: false]
  -p, --print            Print the output to console and create no files
                                                       [string] [default: false]
      --configName       Name of the config if you want to use a different name
                                                                        [string]
  -d, --useNamespace     Export all symbols for each module as a namespace
                                                       [string] [default: false]
  -n, --noComments       Do not generate documentation comments
                                                       [string] [default: false]

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
  ts-for-gir generate --ignore=Gtk-3.0 xra  Generate .d.ts. files but not for Gt
  ndr-1.3                                   k-3.0 and xrandr-1.3
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
  -g, --girDirectories  GIR directories[array] [default: ["/usr/share/gir-1.0"]]
  -i, --ignore          Modules that should be ignored     [array] [default: []]
  -v, --verbose         Switch on/off the verbose mode  [string] [default: true]
      --configName      Name of the config if you want to use a different name
                                                                        [string]

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
  pretty: false,
  print: false,
  verbose: true,
  environments: ['gjs', 'node'],
  outdir: '@types',
  girDirectories: ['/usr/share/gir-1.0'],
  modules: ['*'],
  ignore: [],
  useNamespace: true,
  buildType: 'lib',
  moduleType: 'esm'
}
```

The javascript config files must also be in ESM format if you are inside a ESM Package, this is the case if `"type": "module"` is defined in your package.json. Alternatively, the file can be saved in json format, then it works in both cases.

## About the `--moduleType esm` option

Gjs now supports ES modules, which can be activated with its `gjs -m` flag. Using this in conjunction with `"module": "es6"` in tsconfig.json is generally more
convenient than using the `imports` global object, because you no longer have to provide an implementation of `require`. However, it creates two new
problems for Typescript/ts-for-gjs. The first is that `gi` imports use a URI format, which Typescript doesn't support yet. To work around this problem
you can import from a relative filename as usual, and the Javascript stubs generated by ts-for-gjs now forward the imports from the `gi` URI.

Or you can use a bundler like Webpack, ESBuild, Vite or Parcel to handle the imports, see [examples](../../examples) for examples with different bundlers.

The second problem is that in ES module mode, `gi` imports behave as if they were exported by `export default`, which is not backwards compatible with
ts-for-gjs. Where you would previously write:

`import * as Gtk from "<path to gi bindings>/Gtk-4.0.js"`

you now have to write:

`import Gtk from "<path to gi bindings>/Gtk-4.0.js"`

Destructuring individual items in the import statement is not supported for this type of import.

See `examples/Gjs/browser` for an example for Gjs with ESM. 