# Changelog

## [4.0.0-rc.3](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-rc.2...v4.0.0-rc.3) (2026-04-12)

### Bug Fixes

* **generator-typescript:** Handle guintptr ([5159a0a](https://github.com/gjsify/ts-for-gir/commit/5159a0a6fc5f8383d8039bdfe029d38c2367f302))

### Reverts

* Revert "Mark enum parameters as nullable, fixes #207" ([53cc6c4](https://github.com/gjsify/ts-for-gir/commit/53cc6c43cc552d31a41bf45f4a54b6f790c41f33))

## [4.0.0-rc.2](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-rc.1...v4.0.0-rc.2) (2026-04-10)

### Features

* **examples:** add GOM and GDA SQLite examples ([#355](https://github.com/gjsify/ts-for-gir/issues/355)) ([64c9e73](https://github.com/gjsify/ts-for-gir/commit/64c9e73b3984495f374e2cf908200f3670623f4a)), closes [#295](https://github.com/gjsify/ts-for-gir/issues/295)
* integrate library icons into generated documentation ([#349](https://github.com/gjsify/ts-for-gir/issues/349)) ([f81a778](https://github.com/gjsify/ts-for-gir/commit/f81a778f9f08a14b5186e2be2f6615f5d06a4b42))

### Bug Fixes

* **generator-typescript:** Accept bigint | number for 64-bit params ([#350](https://github.com/gjsify/ts-for-gir/issues/350)) ([b417276](https://github.com/gjsify/ts-for-gir/commit/b417276f9983c2e28b744206c48d0b3ac446bee8))
* **generator-typescript:** direction-aware property accessors ([#352](https://github.com/gjsify/ts-for-gir/issues/352)) ([3b44be3](https://github.com/gjsify/ts-for-gir/commit/3b44be3746eaedc119e07ebf783f4ebb1f7bb7e0)), closes [#350](https://github.com/gjsify/ts-for-gir/issues/350)

## [4.0.0-rc.1](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.44...v4.0.0-rc.1) (2026-04-03)

### Features

* improve documentation with updated GIR files, module metadata, and categories ([#345](https://github.com/gjsify/ts-for-gir/issues/345)) ([5e3e916](https://github.com/gjsify/ts-for-gir/commit/5e3e9160860071503f340af1688c302f5970dc88))

### Bug Fixes

* remove root package.json from bumper to avoid npm version conflict ([7174b87](https://github.com/gjsify/ts-for-gir/commit/7174b87ff546de5d602ba43179b3f005a9e33e05))
* remove unused execSync import in e2e helpers ([b178dc5](https://github.com/gjsify/ts-for-gir/commit/b178dc54305c6485ca0ef43703d516a6d06278cd))

## [4.0.0-beta.44](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.43...v4.0.0-beta.44) (2026-04-01)

### Features

- **GNOME 50 support** — Added type definitions for GNOME Shell 50 (`Shell-18`, `St-18`) with a new reproducible GIR build script via Podman (#343)

### Bug Fixes

- **Restored `ref`/`unref`/`copy`/`free`/`destroy` methods on records** — These methods marked `introspectable="0"` in GIR are now kept for records, since GJS exposes them at runtime (#341)
- Remove unused `execSync` import in e2e helpers

### Documentation

- Improved documentation with updated GIR files, module metadata, and categories (#345)

## [4.0.0-beta.43](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.42...v4.0.0-beta.43) (2026-03-28)

### Bug Fixes

- **`GObject.ParamSpec.override` now returns `GObject.ParamSpecOverride`** instead of `void`, enabling its use in `Properties` objects for interface implementations (#165)
- **`GObject.Object` constructor now accepts property dictionaries**, fixing `super(props)` calls in subclasses (#191)
- **Fixed GVariant parser regression for nested dictionaries** — Types like `a{sa{sv}}` are correctly parsed again, and `v` unpacks to `unknown` instead of `any` (#286)
- **`GLib.Variant.new_tuple` now accepts typed arrays** instead of requiring `GLib.Variant[]` (#337)

### Tests

- Added E2E test suite for CLI (#347)

## [4.0.0-beta.42](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.41...v4.0.0-beta.42) (2026-03-22)

### Performance

- **Split TypeDoc search index into per-module chunks** (#331) — Reduced documentation site payload from 16 MB to ~200 KB per module page

### Features

- **New `analyze` CLI command** for type quality reporting (#332)
- **New `json` CLI command** to generate machine-readable metadata from GIR files (#333)

## [4.0.0-beta.41](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.40...v4.0.0-beta.41) (2026-03-20)

### Features

- **Browsable API documentation** — New `ts-for-gir doc` command generating a full API reference site at [gjsify.github.io/docs](https://gjsify.github.io/docs/), inspired by Valadoc and gi-docgen
- Custom TypeDoc theme with 3-column layout, C↔GJS identifier mapping, and cross-module linking
- New `generator-html-doc` and `typedoc-theme` packages

## [4.0.0-beta.40](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.39...v4.0.0-beta.40) (2026-03-05)

### Bug Fixes

- Enum improvements (#317) by @ptomato

## [4.0.0-beta.39](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.38...v4.0.0-beta.39) (2026-03-01)

### Bug Fixes

- Only emit `_init()` method for GObject classes (#310) by @ptomato

## [4.0.0-beta.38](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.37...v4.0.0-beta.38) (2025-09-21)

### Maintenance

- Added `devdocsgjs` submodule and refreshed GNOME Shell GIRs from upstream, restoring docs for `St-17.gir` and `Shell-17.gir` that were previously lost (#294)

## [4.0.0-beta.37](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.36...v4.0.0-beta.37) (2025-09-19)

### Features

- **GNOME 49 preparation** — New GIR files: `Clutter-17`, `Meta-17`, `St-17`, `Shell-17`
- **New examples**: Dex file operations, dependency injection (`di-needle`, `di-tsyringe`, `di-wise`)

## [4.0.0-beta.36](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.35...4.0.0-beta.36) (2025-08-20)

### Bug Fixes

- Fixed incorrect library versions for GObject and Gio package dependencies (#285)

## [4.0.0-beta.35](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.34...4.0.0-beta.35) (2025-08-20)

### Features

- **Virtual interface generation** — Separate `Interface` namespaces with only `vfunc_*` methods for GObject interface implementations
- New GTK 4 template example

## [4.0.0-beta.34](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.25...v4.0.0-beta.34) (2025-08-15)

### Features

- **gi.ts integration completed** (#279) — Enabled advanced GVariant types originally developed by @ewlsh, including `$ParseShallowVariant`, `$ParseDeepVariant`, and `$ParseRecursiveVariant` type-level parsers

## [4.0.0-beta.25](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.24...v4.0.0-beta.25) (2025-06-18)

### Bug Fixes

- **Treat `gunichar` as string type** instead of number (#265)

## [4.0.0-beta.24](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.23...v4.0.0-beta.24) (2025-06-17)

### Features

- **Type-safe signal handling** — Refactored signal generation with precise typing for all GObject signals, including detail variants like `notify::property-name`
- JSX-based UI declarations support

## [4.0.0-beta.23](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.21...v4.0.0-beta.23) (2025-03-21)

### Bug Fixes

- Improved Cairo type definitions
- Fixed Object property methods and `GObject.ParamSpec.object` parameter typing
- Global gettext methods and pkg properties now properly defined

### Maintenance

- Updated GIR files and dependencies

## [4.0.0-beta.21](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.20...v4.0.0-beta.21) (2025-02-17)

### Features

- **GNOME 48 types** — Added GNOME Shell 48 type definitions (#238)

## [4.0.0-beta.20](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.19...v4.0.0-beta.20) (2025-02-17)

### Bug Fixes

- Fixed types for `ActionMap.add_action_entries` (#219)
- Made `GObject.ParamSpec.*` blurb and nick properties nullable (#224)
- Added `Cogl.SnippetHook` support

### Maintenance

- Improved documentation and updated dependencies

## [4.0.0-beta.19](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.18...4.0.0-beta.19) (2024-11-09)

### Features

- Enable `instanceof` checks (#195, #214)
- Add `Requires` property to `MetaInfo` (#216)
- Inject `IterableIterator` and `AsyncIterableIterator` types for Gtk 4 and Gio (#215)
- Add Gtk 4 generics for `FlowBox.bind_model`, `ListBox.bind_model`, and `StringList` (#217)

## [4.0.0-beta.18](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.17...4.0.0-beta.18) (2024-11-05)

### Bug Fixes

- Fixed wrong return types for promisified methods like `load_contents_async` (#211)

## [4.0.0-beta.17](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.16...4.0.0-beta.17) (2024-11-03)

### Features

- **Promisified method types** — Full TypeScript support using overloads: automatic `Promise` return types when the callback argument is omitted, backward compatible with original types

## [4.0.0-beta.16](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.15...4.0.0-beta.16) (2024-09-20)

### Features

- Improved System module types (#202) by @swsnr
- Add `GLib.Error.stack` property (#201) by @swsnr
- Upgrade GNOME Shell 47 GIR files

## [4.0.0-beta.15](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.14...4.0.0-beta.15) (2024-08-31)

### Features

- Add missing `GObject.TYPE_JSOBJECT` definition (#189)
- Updated GIR files and dependencies

## [4.0.0-beta.14](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.12...4.0.0-beta.14) (2024-07-26)

### Bug Fixes

- Add missing ambient module `console`
- Add missing static property `Object.$gtype`

## [4.0.0-beta.12](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.11...4.0.0-beta.12) (2024-07-24)

### Features

- Preparations for GNOME Shell 46 and 47 (#184)
- Add basic Cairo overrides (#186)

## [4.0.0-beta.11](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.10...4.0.0-beta.11) (2024-07-21)

### Bug Fixes

- Fix missing dependencies in GioUnix-2.0

## [4.0.0-beta.10](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.8...4.0.0-beta.10) (2024-07-21)

### Features

- Add `$gtype` support for enums

## [4.0.0-beta.8](https://github.com/gjsify/ts-for-gir/compare/4.0.0-beta.7...4.0.0-beta.8) (2024-07-21)

### Bug Fixes

- Improved GJS package core types

## [4.0.0-beta.7](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.6...4.0.0-beta.7) (2024-07-19)

### Features

- Types can now be generated locally without `package.json` support (now the default)
- Use `npx @ts-for-gir/cli generate Adw-1.0` to generate types directly
- Use `--package` CLI argument for `package.json` support

## [4.0.0-beta.6](https://github.com/gjsify/ts-for-gir/compare/v4.0.0-beta.2...v4.0.0-beta.6) (2024-07-11)

### Features

- New `copy` command (#162)
- New GIR files included in the repository
- Continued gi.ts merge process (#175)

## [4.0.0-beta.2](https://github.com/gjsify/ts-for-gir/compare/v3.3.0...v4.0.0-beta.2) (2024-04-05)

### Features

- **ts-for-gir + gi.ts merger** — Combined efforts of `ts-for-gir` and `gi.ts` into a unified project under the gjsify organization
- New `@gi.ts/parser` for GIR XML parsing with full namespace support
- ESM-first architecture, Yarn 4 workspaces
- Per-module NPM packages under `@girs/*` scope

## [3.3.0](https://github.com/gjsify/ts-for-gir/compare/v3.2.8...v3.3.0) (2024-03-26)

### Maintenance

- Replaced `xml2js` with `fast-xml-parser`
- Upgraded GIR files for GNOME 46

## [3.2.8](https://github.com/gjsify/ts-for-gir/compare/v3.2.7...v3.2.8) (2024-02-17)

### Features

- Add `dom.js`, `ambient.js` and `node-ambient.js` for bundler imports
- node-gtk: Use `snake_case` for property names at constructor (#131)

### Breaking Changes

- Removed support for additional `underscore` properties in node-gtk

## [3.2.7](https://github.com/gjsify/ts-for-gir/compare/v3.2.0...v3.2.7) (2024-01-01)

### Features

- Add type for `import.meta.url` (#142)
- C type `const` is now `readonly` in TypeScript
- Generate camel-cased property accessors (#138)
- Add `runAsync` override for `GLib.MainLoop` (#130)
- Allow ambient modules without version for NPM packages (#139)

### Bug Fixes

- Constants are not nullable (#141)

## [3.2.0](https://github.com/gjsify/ts-for-gir/compare/v3.1.0...v3.2.0) (2023-06-23)

### Maintenance

- Improved TypeDoc support for TypeDoc 0.24.x

## [3.1.0](https://github.com/gjsify/ts-for-gir/compare/v3.0.4...v3.1.0) (2023-06-12)

### Breaking Changes

- Moved conflicting global GJS types to `dom.d.ts` for optional import — import explicitly if needed

## [3.0.4](https://github.com/gjsify/ts-for-gir/compare/v3.0.3...v3.0.4) (2023-06-05)

### Bug Fixes

- node-gtk: Re-added GObject signal method (#126)

## [3.0.3](https://github.com/gjsify/ts-for-gir/compare/v3.0.1...v3.0.3) (2023-06-04)

### Features

- NPM package Yarn workspace support is now optional (#124)
- Moved templates from `@ts-for-gir/lib` to `@ts-for-gir/generator-typescript`

## [3.0.1](https://github.com/gjsify/ts-for-gir/compare/v3.0.0...v3.0.1) (2023-05-22)

### Bug Fixes

- Add missing `packages.xml` to `@ts-for-gir/lib`

## [3.0.0](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.12...v3.0.0) (2023-05-22)

### Features

- **NPM package generation** — Generate per-module NPM packages for each GIR module with customizable scope name
- Improved documentation and package structure

## [3.0.0-beta.12](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2023-03-14)

### Bug Fixes

- UTF-8 string pointers are now handled as nullable (#108)
- Extract default GIR directories from `XDG_DATA_DIRS`, fixing NixOS support (#107) by @samdroid-apps

### Breaking Changes

- More parameters and returned UTF-8 strings are nullable

## [3.0.0-beta.11](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2023-02-21)

### Maintenance

- Split project into submodules: `cli`, `lib`, `generator-base`, `generator-typescript`, `generator-html-doc`

## [3.0.0-beta.10](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2023-02-13)

### Features

- Add promisified function generation support (#104) by @CharlieQLe
- Add TSDoc `@returns` for return values
- New GNOME Shell types: `ui/checkBox`, `ui/closeDialog`

## [3.0.0-beta.9](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2023-02-07)

### Features

- Support for `gi://` import syntax (#103) by @CharlieQLe
- Improved GNOME Shell types and dependency management

### Breaking Changes

- `gi://` import syntax requires adjustments

## [3.0.0-beta.8](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2023-01-17)

### Features

- New option to enable GNOME Shell type generation (disabled by default)

## [3.0.0-beta.7](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2023-01-17)

### Features

- Initial GNOME Shell imports support (#99)
- GNOME Shell Extension example
- Types-only generation example (#101)
- Add missing `pgettext` and `dpgettext` functions (#97) by @HeavenVolkoff
- Replace TypeScript runtime dependency with `get-tsconfig` (#96) by @HeavenVolkoff

## [3.0.0-beta.6](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.5...v3.0.0-beta.6) (2022-09-26)

### Bug Fixes

- Fix class signal conflict resolution logic (#91) by @HeavenVolkoff
- Expose GJS global `imports.signals` type (#89) by @HeavenVolkoff
- Enhance `GLib.Error` type with GJS-specific additions (#88) by @HeavenVolkoff

## [3.0.0-beta.5](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2022-09-19)

### Bug Fixes

- Fix `noDOMLib` option in templates

## [3.0.0-beta.4](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2022-09-19)

### Features

- Allow disabling generation of DOM-conflicting types
- Add typing for `GLib.Bytes.toArray()`

## [3.0.0-beta.3](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2022-09-16)

### Bug Fixes

- Follow user-defined verbose option in ConflictResolver (#83) by @HeavenVolkoff
- Fix prepend logic in Logger static methods (#84) by @HeavenVolkoff

### Features

- Expose GIRepository namespace underscore properties (#85) by @HeavenVolkoff
- Add type definitions for `Text(D)Encoder` (#86) by @HeavenVolkoff
- New Libadwaita + Vite example

## [3.0.0-beta.2](https://github.com/gjsify/ts-for-gir/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2022-07-13)

### Features

- Renamed package to `@ts-for-gir/cli` (#82)
- Add overrides for Gio-2.0 (#80)
- Add `GLib.Variant` unpacking methods (#70) by @HeavenVolkoff
- node-gtk: Virtual methods support (#77)
- Wrap constructor properties and signal callbacks into class name modules (#73)

## [3.0.0-beta.1](https://github.com/gjsify/ts-for-gir/compare/v2.1.0...v3.0.0-beta.1) (2022-06-29)

### Features

- **Real inheritance** — Classes and interfaces use proper inheritance instead of copying all methods/properties (#63)

## [2.1.0](https://github.com/gjsify/ts-for-gir/compare/v2.0.0...v2.1.0) (2022-06-29)

### Features

- Error handling on `gi` ESM imports (#69) by @HeavenVolkoff
- Add typing for `imports.package` (#67) by @HeavenVolkoff
- Allow Node.js >= 16 (#65) by @HeavenVolkoff
- TSDoc tags identifying original GIR types
- Generate virtual methods

## [2.0.0](https://github.com/gjsify/ts-for-gir/releases/tag/v2.0.0) (2022-02-10)

### Features

- New `doc` command for future implementation
- Replaced `ESLint` with `prettier` for output formatting (#29)
- New simpler patch format
- ESM examples for GJS and Node.js

### Bug Fixes

- Fix config file loading (#48)
- node-gtk: Fixed return types (#46)
- node-gtk: Don't add `$obj` parameter in `connect()` by @peat-psuwit
