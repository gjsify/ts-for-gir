# __PROJECT_NAME__

GJS + TypeScript starter that uses an **npm workspace** with the `@girs/*` types generated locally as workspace packages. Useful when you want pinned, hermetic types under version control without depending on the published `@girs/*` packages on NPM.

## Setup

```sh
npm install
npm run build:types   # ts-for-gir generate --package --workspace into ./@girs/
npm install           # picks up the freshly generated @girs/* workspace packages
npm run build:app
npm start
```

Or shorthand: `npm run build` runs all three steps in order.

The application lives in [`packages/app/`](./packages/app/). Its dependencies on `@girs/*` are written as `"*"` which works across all three package managers — npm, yarn, pnpm all resolve to the locally generated workspace packages in `./@girs/`.

### About the dependency version format

Two deliberate choices keep the template portable:

1. **Generated `@girs/*` packages** reference each other via `^<version>` (not `workspace:^`). Controlled by `depVersionFormat: "caret"` in [`.ts-for-girrc.js`](./.ts-for-girrc.js). npm and yarn/pnpm all prefer the local workspace match; the registry serves as fallback for transitive GIR packages outside your `modules` set.
2. **Sub-package deps** (`packages/app/package.json`) use `"*"`. Same reasoning — all managers resolve to the local workspace.

If you run yarn or pnpm exclusively and want strict workspace-only resolution, switch both: add `workspace: true` and `depVersionFormat: "workspace"` in `.ts-for-girrc.js`, plus `"workspace:^"` specs in `packages/app/package.json`. npm does **not** support the `workspace:` protocol.
