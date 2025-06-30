# TODO
- New test: Create simple vala classes, build the gir files from that, generate the typescript type definitions for that and test if the result looks good
- Update types for GJS v1.75.2, see https://gitlab.gnome.org/GNOME/gjs/-/commit/666755b3b09d765e43d415e76105b828517b5509

# 4.0.0-beta.26
- Extract reporting system into new `@ts-for-gir/reporter` package with dependency injection pattern
- Add comprehensive problem tracking and statistics generation capabilities
- Implement structured reporting for type resolution issues, conflicts, and generation problems
- Add support for console and file output with colorized formatting
- Provide `ReporterService` for managing multiple reporter instances
- Migrate all existing reporter functionality from `@ts-for-gir/lib` to the new dedicated package
- Add complete documentation and examples for the new reporter system

# 3.2.8
- Upgrade dependencies
- Update examples and removed deprecated function calls like `byteArray.toString()`
- Add `dom.js`, `ambient.js` and `node-ambient.js` to allow importing there type definitions in the codebase with a bundler
- Update TSDoc documentation for `system`
- node-gtk: Add new `gtk-4-application` example
- node-gtk: Uses snake_case for property names at constructor, fixes #131

## Breaking Changes

- Removed support for additional `underscore` properties (next to `lowerCamelCase`) in the generated types, if this causes problems please let us know, then we will undo it again

# 3.2.7
- Upgrade dependencies
- Add type for import.meta.url, see 142
- C type `const` is readonly in typescript
- Constants are not nullable, fixes #141

# 3.2.6
- Upgrade dependencies
- Generate camel cased property accessors, see #138
- Add `runAsync` override for `GLib.MainLoop`, see #130

# 3.2.5
- Upgrade dependencies
- Allow ambient modules without version for NPM packages, see #139
- Add information about ESM and CommonJS modules to README.md for NPM packages

# 3.2.4
- Upgrade dependencies
- Add instruction to install `GnomeBluetooth-3.0.gir` on Fedora
- Add more *.gir files to `./girs` directory

# 3.2.3
- Upgrade dependencies
- Upgrade gir files
  
# 3.2.1
- TypeDoc: Only include main entry point
- Upgrade dependencies

# 3.2.0
- TypeDoc: Improved support for TypeDoc 0.24.x
- Upgrade dependencies
- Upgrade gir files

# 3.1.0
- Upgrade dependencies
- Move conflicting global GJS types to `dom.d.ts` for optional import

## Breaking Changes
Move conflicting global GJS types to `dom.d.ts`, allowing you to optionally import them in your project. By doing so, you have the flexibility to choose whether or not to include these types based on your specific needs. This resolves the conflict between the GJS and DOM types and provides you with more control over managing the type definitions.

To use the previous behavior and include the conflicting GJS types, you can import both `./@types/gjs.d.ts` and `./@types/dom.d.ts` in your code.

Alternatively, if you are using the NPM packages, you can import the following:

- `@girs/gjs`: This package provides the GJS types.
- `@girs/gjs/dom`: This package provides the conflicting DOM types.

Please update your imports accordingly based on your chosen approach.

# 3.0.4
- Update badges on README template files
- Node-gtk: Readd gobject signal method, fixes #126

# 3.0.3
- NPM package Yarn workspace support is optional now, see #124
- Upgrade all dependencies (except `xml2js`, see #125)
- Parse app version from `package.json`
- Moved `templates`, `packages.xml`, `package-data-parser.ts` and `template-processor.ts` from `@ts-for-gir/lib` to `@ts-for-gir/generator-typescript`
- Cleanup yarn scripts in `./package.json`

# 3.0.1
- Add missing `packages.xml` to `@ts-for-gir/lib`

# 3.0.0
This is the first stable release of version 3.0.0 with support for NPM package generation.

## Changelog
- Add support to generate a package for each GIR module we can publish on NPM, see #106
- Add a new CLI option to generate NPM packages
- Add a new CLI option to change the NPM package scope name
- Documentation for the new CLI options
- Generate a `package.json` for each package
- One folder for each package
- New example
- Add dependencies to each `package.json`
- Package names in lower case
- Separate package names for node-gtk types
- Package directory and file names in lower case
- Parse library versions
- Add a README.md for each NPM package
- Different README.md for node-gtk NPM packages
- Add an test to CI
- Fix `tsconfig.alias.json`
- Add support for [ambient modules](https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules)
- Documentation for ambient modules
- Generate both CJS and ESM modules
- Add node-gtk to the peer dependencies to the node-gtk NPM packages 
- Remove destination environment directory
- Separate README.md for the main NPM packages (`@gir/gjs` and `@gir/node-gtk`)
- Generate and publish the new [NPM packages](https://www.npmjs.com/search?q=%40girs)
- Provide system and gettext as ESM, see #114
- Include only desired types (instead of all existing ones)
- Add repository and homepage to `package.json`
- Updated Documentation for the new NPM packages
- Move the GNOME Shell type definitions to a [NPM package](https://github.com/gjsify/gnome-shell) and make use of the new generated NPM packages

## Braking changes
 * All filenames for the generated types now contain the name of the module
 * All filenames for the generated types are now lowercase
 * All filenames for the generated types for Node.js now have a `node-` prefix 
 * Now no parent folder `Gjs` or `note-gtk` is created. When types are generated for both environments, they all end up in the same folder
 * Now not all GIR modules are imported in the gjs.js, who wants to have types for a certain GIR module, must include this module now itself. This saves a lot of processing work in your IDE
 * Some default values of the CLI options have changed, for example now by default only the types for Gjs are generated and the default module format is now ESM with namespaces
# 3.0.0-beta.12
- UTF-8 string pointers are nullable, so all of this pointers are handled as nullable now, see #108
- Extract default GIR directories from `XDG_DATA_DIRS` environment variable, this fixes ts-for-gir on NixOS. See #107 by @samdroid-apps
## Breaking Changes
  - More parameters and returned UTF-8 strings are nullable now, so maybe you need to update your code to check if the string is not null. Please give us feedback about this change
# 3.0.0-beta.11
- Split this project into more submodules: 'cli', 'lib', 'generator-base', 'generator-typescript' and 'generator-html-doc'
- Fix node bin path for ts-for-gir execution
- Upgrade dependencies

# 3.0.0-beta.10
- Add GNOME Shell types for:
  - ui/checkBox
  - ui/closeDialog
- Paths in the config file are now relative to the path of the config file itself
- Add TSDoc `@returns` for return values
- Fixed VSCode launch.json for debugging
- Reenable `ts-node` to develop without the need to rebuild `ts-for-gir` for debugging
- Add support for promisified function generation, see #104 by @CharlieQLe
- Upgrade dependencies

# 3.0.0-beta.9
- Add support for the `"gi://..."` import syntax, see #103 by @CharlieQLe
- README.md greatly simplified and split into several files
- Add new DependencyManager to be able to search for a dependency regardless of the version 
- Improved GNOME Shell types
- Only extend class/interface parent if the dependency of the parent exists
- Add more properties to the dependency object like `exists` to be able to check if a dependency `gir` file was found
- Upgrade dependencies
## Breaking Changes
- Removed the `pretty` and ` noCheck` options
- Changed default options to:
  - `noNamespace: true` (was `useNamespace: false` before)
  - `environments: ["gjs"]` (was `["gjs", "node"]` before)
  - `moduleType: "esm"` (was `"commonjs"` before)


# 3.0.0-beta.8
- Add new option to enable type generation for GNOME Shell (disabled by default now)
- Add some more types for GNOME Shell
# 3.0.0-beta.7
- Set verbose to `false` by default
- Removed casts.ts
- Removed ava test
- Upgrade dependencies, yarn and vala-girs
- Add initial support for GNOME Shell imports, see #99
- Added new GNOME Shell Extension example, see #99
- Added new example with types only generation, see #101
- Add missing `getttext` functions: `pgettext`, `dpgettext`, see #97 by @HeavenVolkoff
- Replace typescript runtime dependency with `get-tsconfig`, see #96 by @HeavenVolkoff
# 3.0.0-beta.6
- Change Class Signal conflict resolution logic, see #91 by @HeavenVolkoff
- Expose GJS global imports.signals type, see #89 by @HeavenVolkoff
- Enhance Glib.Error type with GJS specific additions, see #88 by @HeavenVolkoff
# 3.0.0-beta.5
- CLI: Fix noDOMLib option in templates
# 3.0.0-beta.4
- CLI: Allow to disable generation of types that are in conflict with the DOM types
- Add typing definition for `GLib.Bytes.toArray()`
- Upgrade dependencies
# 3.0.0-beta.3
- Follow user defined verbose option in ConflictResolver, see #83 by @HeavenVolkoff
- Fix prepend logic in Logger's static methods, see #84 by @HeavenVolkoff
- Expose GIRepositoryNamespace underscore properties in TS namespace, see #85 by @HeavenVolkoff
- Solution for #72 + Add type definitions for Text(D)Encoder, see #86 by @HeavenVolkoff
- Added new simple GJS example with Libadwaita and Vite
# 3.0.0-beta.2
- Rename package to `@ts-for-gir/cli`, see #82
- Ported more examples, see #81
- Add overrides for Gio-2.0, see #80
- Add GLib.Variant unpacking methods, see #70 by @HeavenVolkoff
- node-gtk: Now supports virtual methods, see #77
- Wrap constructor properties and signal callback interfaces to a class name module, see #73
- Improve typing definition of log and logError, see #71 by @HeavenVolkoff

# 3.0.0-beta.1
- Real inheritance and implementations instead of copy all inherited methods / properties to the classes / interfaces, see #63
- During the implementation of the upper pull request many other small improvements have been made.
- Upgrade dependencies
- More splitting of the Github workflows so that more can be tested in parallel

# v2.1.0
- Expect error on gi ESM imports, see #69 by @HeavenVolkoff
- Add typing definition for `imports.package`, see #67 by @HeavenVolkoff
- Allow Node.js versions greater or equal than v16 , see #65 by @HeavenVolkoff
- Ported GJS for http server + client example to node-gtk
- Split GObject template for separate templates for gjs and node-gtk
- Do not skip generation of GObject fields anymore
- Add TSDoc tags which identifies the type with the original gir type
- Also generate TSDocs for classes 
- Split Github workflows into gjs and node-gtk
- General improvements #59
  - Added new GJS example for http server + client with Soap 3
  - Renamed CHANGELOG.md to NEWS.md because as it is not always a detailed changelog
  - Cleanup detection / generation of Array types
  - Added new GJS example for `Gtk.ListStore`
  - Inject additional static methods to GObject.ParamSpec and other GObject overrides
  - Export GJS System namespace
  - Ignore depreciated allow-none if `optional` or `nullable` is used
  - Distinguish between `optional` and `nullable` types
  - Add types for timer functions (`setTimeout`, `setInterval`), supported by GJS since 1.71.1
  - Renamed GObject.Type to GObject.Gtype
  - General improvements to the generated types
  - Add initial support for generic type parameters
- Add initial support for TSDoc with text and `@param` tag support, see #49
- Upgrade dependencies
- Fix logic around property's readonly & construct-only, see #52
- Fix properties with the name of `constructor`
- Fix enums with duplicate identifiers
- Disabled Ava test for now, because it needs a refactoring

# v2.0.0
- Fix config file loading, see #48
- The browser example now uses ESM for GJS and Node.js
- Upgrade all dependencies to latest
- [node-gtk] don't add $obj parameter in connect() method either, by @peat-psuwit
- [node-gtk] Fixed Return types, see #46
- New and simpler patch format
- Replaced `ESLint` with `prettier` for prettify output, this fixes #29
- New `doc` command for future implementation
- New class `HtmlDocGenerator` this is not implemented yet, but can serve as a template for a future implementation
- Fix type `Uint8Array` (should not be `Uint8Array[]`)
- CI: Run GJS CLI examples to test working bindings
- The generated types now contain a note that they are automatically generated with `ts-for-gir`
- Split option `exportDefault` to `useNamespace` and `moduleType` to specify `ESM` or `CommonJS` module generation
- Fix VSCode debugging configuration to work with ESM
- Debugging information added to README.md
- Moved all signature generations to new TypeDefinitionGenerator
- The utility functions are no longer static members of a class
- Fixed a bug in the `forEachInterface` method, which caused that not all inherited methods were implemented anymore (slipped in with the last PR)
- Added this CHANGELOG.md

# 17 Jan 2022
- All types in vala-gir can now be built and validated without errors, this can be tested with `npm run test:girs:all`, this test is now also executed with github actions
- Switch to ESM for ts-for-gir itself
- Replaced `oclif` with `yargs` for CLI parsing (`yargs` has ESM Support, `oclif` not)
- Improved @realh's GJS ESM support
- Improved types based on [gobject-introspection/docs/gir-1.2.rnc](https://gitlab.gnome.org/GNOME/gobject-introspection/-/blob/master/docs/gir-1.2.rnc) and [gi.ts/parser/src/xml.ts](https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/parser/src/xml.ts)
- Changed `examples/gjs/builder` example to use the GJS ESM feature using `gi://` imports
- Version conflicts in Gir modules fixed, now multiple versions of the same module name can be generated
- Made the source code more readable in some places, this mainly affects places where an array was returned, here a more meaningful tuple / object is now returned
- Dependencies updated
- It is now possible to build all gir modules from the vala-girs repository. 
- Some older girs are missing in the vala-girs repository, they are now included in this repository
- Added some new examples

## Breaking Changes
- Node.js minimum version is now 16 for ESM support
- The config files must also be in ESM format if you are inside a ESM Package, this is the case if `"type": "module"` is defined in your `package.json`. Alternatively, the file can be saved in json format, then it works in both cases.


See PR [#44](https://github.com/gjsify/ts-for-gir/pull/44)
# 5 Jan 2022
- Fix error type

See PR [#43](https://github.com/gjsify/ts-for-gir/pull/43)

# 1 Aug 2021
- Add support for ES modules using default exports

See PR [#41](https://github.com/gjsify/ts-for-gir/pull/41)

# 14 Jan 2021
- Use /usr/local/share when on Darwin systems

See PR [#39](https://github.com/gjsify/ts-for-gir/pull/39)

# 21 Apr 2021
- Missing quote in generate example

See PR [#38](https://github.com/gjsify/ts-for-gir/pull/38)

# 13 Dec 2020
- Use qualified names in circular dependency check (fixes #28)
- Fixed type transformations for arrays of bytes
- Add support for inline callback types
- Expose instance parameters of class methods
- Add CI / action tests using Github workflow

See PR [#30](https://github.com/gjsify/ts-for-gir/pull/30), [#31](https://github.com/gjsify/ts-for-gir/pull/31), [#34](https://github.com/gjsify/ts-for-gir/pull/34), [#36](https://github.com/gjsify/ts-for-gir/pull/36) and [#37](https://github.com/gjsify/ts-for-gir/pull/37)

# 16 Oct 2020
- Improved types and also use more types in test data
- Fixed test npm run build:test:girs
- Upgrade dependencies (With the upgrade of eslint some new automatic formatting has been added which increases the PR)
- Added tests to README.md
- Added version to fix
- Add versions property type to imports.gi for gobject-introspection classes #25
- Added src to NPM module
- Is it possible to use ts-for-gir as dev dependency #20
- Split method exportObjectInternal in more methods to make it more readable
- Improved debugging by log the full error when an error occurs
- Some improvements taken from @realh `s fork

See PR [#27](https://github.com/gjsify/ts-for-gir/pull/27)

# 10 Oct 2020
- Add ts-node as devDep to fix running in-tree
- Improve typing for cast.ts

See PR [#22](https://github.com/gjsify/ts-for-gir/pull/22) and [#23](https://github.com/gjsify/ts-for-gir/pull/23)

# 7 Mar 2020
- Moved CLI specific code to `cli.ts`
- Add a new `TemplateProcessor` class to generate definitions from templates to reduce the GirModule class
- Add a new `Transformation` class to transform methods, enums, etc for the specific environment (gjs or node)
- Convert string templates to ejs templates
- Because there are now more source files, I have moved them all to `src/`
- The compiled source files now in `lib/`
- I have moved the dependencies loading to `module-loader.ts`
- I have moved the file parser to `module-loader.ts`
- I have moved the cli specific to `./src/commands/*` and `./src/config`
- All types now in `./src/types`, each type / interface in his own file
- Added `bin/bin.js`, required to use ts-for-gir as a cl tool by npm
- Added **ESLint** with the **Prettier** plugin, I tried to keep the code style (for example, there is a rule to not use semicolon's).
- ESLint and Prettier are also used to validate and auto format the generated template files.
- I've changed the default output dir to `@types/` to make it easier to generate type definitions in other projects without having to specify the output path each time
- The output path now contains subfolder's for `GJS` and / or `node-gtk` (the directory name `node-gtk` is required to get typescript automatically working with `import * as gi from 'node-gtk'`)
- There is now a new option called `--build-type` which can be `"lib"` or `"types"`, `"lib"` is the default for generating types for `GJS` and the way it was before. I added "types" for node-gtk and generates the types e.g. as you would publish them on DefinitelyTyped.
- Source maps are now also generated, which simplify debugging, Zhe IDE can now points directly to the typescript files e.g. at a breakpoint
- Updated dependencies
- Replaced [commander.js](https://github.com/tj/commander.js/) with [oclif](https://github.com/oclif/oclif) because `commander.js` was a difficult to use with multiple arguments
- Added wild card support for module names to load (e.g. Gtk*)
- Ask which module version should be used if several are found
- It can now be specified which modules should be ignored
- A config can now be created in which the cli options are available (e.g. the modules that should be ignored)
- Added new reserved keywords for functions, class names, etc
- Fixed data type errors
- Added a new list

See PR [#19](https://github.com/gjsify/ts-for-gir/pull/19)


# 19 Jul 2019
- Export symbols used by registerClass

See PR [#16](https://github.com/gjsify/ts-for-gir/pull/16)

# 14 Jul 2019
- Add GObject signal connect methods
- Fix GType and add $gtype properties

See PR [#14](https://github.com/gjsify/ts-for-gir/pull/14) and [#15](https://github.com/gjsify/ts-for-gir/pull/15)

# 2 Jul 2019
- Fix return value of signal connect methods

See PR [#10](https://github.com/gjsify/ts-for-gir/pull/10)