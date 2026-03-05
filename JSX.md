# TODO
* Consider changing version format from `2.86.4-4.0.0-beta.39` (lib-version first) to `4.0.0-beta.39-2.86.4` (ts-for-gir version first) for both NPM and JSR to make the semver base version more intuitive

# Done
* Package-Name can not contain dots, so we need to rename the package names to use hyphens instead of dots, e.g. `gobject-2.0` -> `gobject-2-0` (applied to both NPM and JSR)
* JSR does not support `gi://` protocol imports. For JSR packages, `mod.ts` uses `globalThis.imports.gi` instead. NPM packages continue to use `gi://` via their `.js` files.
* JSR does not support `declare module 'gi://...'` in `.d.ts` files. The `publish.exclude` in `jsr.json` excludes `*-ambient.d.ts` and `*-import.d.ts` files.

# Known Limitations
* `@girs/gjs` requires `--allow-slow-types` when publishing to JSR because it uses `declare global { ... }` blocks to extend GJS runtime globals (e.g. `String.prototype.format()`). This is inherent to its purpose and cannot be avoided.
* JSR does not support `description`, `keywords`, `repository` fields in `jsr.json` — these are only available via `package.json`.