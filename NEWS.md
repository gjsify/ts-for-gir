# TODO
- Refactor Ava test
- New test: Create simple vala classes, build the gir files from that, generate the typescript type definitions for that and test if the result looks good
- Create a Reporter to create a text or json file with warnings like unknown types, renamings, etc and a summary of all that (e.g. 5 type conflicts resolved, 8 unknown types of *gint)

# Dev
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
- Ported Gjs for http server + client example to node-gtk
- Split GObject template for separate templates for gjs and node-gtk
- Do not skip generation of GObject fields anymore
- Add TSDoc tags which identifies the type with the original gir type
- Also generate TSDocs for classes 
- Split Github workflows into gjs and node-gtk
- General improvements #59
  - Added new Gjs example for http server + client with Soap 3
  - Renamed CHANGELOG.md to NEWS.md because as it is not always a detailed changelog
  - Cleanup detection / generation of Array types
  - Added new Gjs example for `Gtk.ListStore`
  - Inject additional static methods to GObject.ParamSpec and other GObject overrides
  - Export Gjs System namespace
  - Ignore depreciated allow-none if `optional` or `nullable` is used
  - Distinguish between `optional` and `nullable` types
  - Add types for timer functions (`setTimeout`, `setInterval`), supported by Gjs since 1.71.1
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
- The browser example now uses ESM for Gjs and Node.js
- Upgrade all dependencies to latest
- [node-gtk] don't add $obj parameter in connect() method either, by @peat-psuwit
- [node-gtk] Fixed Return types, see #46
- New and simpler patch format
- Replaced `ESLint` with `prettier` for prettify output, this fixes #29
- New `doc` command for future implementation
- New class `HtmlDocGenerator` this is not implemented yet, but can serve as a template for a future implementation
- Fix type `Uint8Array` (should not be `Uint8Array[]`)
- CI: Run Gjs CLI examples to test working bindings
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
- Improved @realh's Gjs ESM support
- Improved types based on [gobject-introspection/docs/gir-1.2.rnc](https://gitlab.gnome.org/GNOME/gobject-introspection/-/blob/master/docs/gir-1.2.rnc) and [gi.ts/parser/src/xml.ts](https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/parser/src/xml.ts)
- Changed `examples/Gjs/builder` example to use the Gjs ESM feature using `gi://` imports
- Version conflicts in Gir modules fixed, now multiple versions of the same module name can be generated
- Made the source code more readable in some places, this mainly affects places where an array was returned, here a more meaningful tuple / object is now returned
- Dependencies updated
- It is now possible to build all gir modules from the vala-girs repository. 
- Some older girs are missing in the vala-girs repository, they are now included in this repository
- Added some new examples

## Breaking Changes
- Node.js minimum version is now 16 for ESM support
- The config files must also be in ESM format if you are inside a ESM Package, this is the case if `"type": "module"` is defined in your package.json. Alternatively, the file can be saved in json format, then it works in both cases.


See PR [#44](https://github.com/sammydre/ts-for-gjs/pull/44)
# 5 Jan 2022
- Fix error type

See PR [#43](https://github.com/sammydre/ts-for-gjs/pull/43)

# 1 Aug 2021
- Add support for ES modules using default exports

See PR [#41](https://github.com/sammydre/ts-for-gjs/pull/41)

# 14 Jan 2021
- Use /usr/local/share when on Darwin systems

See PR [#39](https://github.com/sammydre/ts-for-gjs/pull/39)

# 21 Apr 2021
- Missing quote in generate example

See PR [#38](https://github.com/sammydre/ts-for-gjs/pull/38)

# 13 Dec 2020
- Use qualified names in circular dependency check (fixes #28)
- Fixed type transformations for arrays of bytes
- Add support for inline callback types
- Expose instance parameters of class methods
- Add CI / action tests using Github workflow

See PR [#30](https://github.com/sammydre/ts-for-gjs/pull/30), [#31](https://github.com/sammydre/ts-for-gjs/pull/31), [#34](https://github.com/sammydre/ts-for-gjs/pull/34), [#36](https://github.com/sammydre/ts-for-gjs/pull/36) and [#37](https://github.com/sammydre/ts-for-gjs/pull/37)

# 16 Oct 2020
- Improved types and also use more types in test data
- Fixed test npm run build:test:girs
- Upgrade dependencies (With the upgrade of eslint some new automatic formatting has been added which increases the PR)
- Added tests to README.md
- Added version to fix
- Add versions property type to imports.gi for gobject-introspection classes #25
- Added src to NPM module
- Is it possible to use ts-for-gjs as dev dependency #20
- Split method exportObjectInternal in more methods to make it more readable
- Improved debugging by log the full error when an error occurs
- Some improvements taken from @realh `s fork

See PR [#27](https://github.com/sammydre/ts-for-gjs/pull/27)

# 10 Oct 2020
- Add ts-node as devDep to fix running in-tree
- Improve typing for cast.ts

See PR [#22](https://github.com/sammydre/ts-for-gjs/pull/22) and [#23](https://github.com/sammydre/ts-for-gjs/pull/23)

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
- The output path now contains subfolder's for `Gjs` and / or `node-gtk` (the directory name `node-gtk` is required to get typescript automatically working with `import * as gi from 'node-gtk'`)
- There is now a new option called `--build-type` which can be `"lib"` or `"types"`, `"lib"` is the default for generating types for `Gjs` and the way it was before. I added "types" for node-gtk and generates the types e.g. as you would publish them on DefinitelyTyped.
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

See PR [#19](https://github.com/sammydre/ts-for-gjs/pull/19)


# 19 Jul 2019
- Export symbols used by registerClass

See PR [#16](https://github.com/sammydre/ts-for-gjs/pull/16)

# 14 Jul 2019
- Add GObject signal connect methods
- Fix GType and add $gtype properties

See PR [#14](https://github.com/sammydre/ts-for-gjs/pull/14) and [#15](https://github.com/sammydre/ts-for-gjs/pull/15)

# 2 Jul 2019
- Fix return value of signal connect methods

See PR [#10](https://github.com/sammydre/ts-for-gjs/pull/10)