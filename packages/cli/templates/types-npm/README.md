# __PROJECT_NAME__

GJS + TypeScript starter that consumes pre-generated GObject Introspection types from the [`@girs/*`](https://www.npmjs.com/org/girs) NPM packages.

## Setup

```sh
npm install
npm run check   # tsc --noEmit
npm run build   # bundles main.ts to dist/ via esbuild
npm start       # runs dist/main.js with gjs
```

To add another GIR module, install the matching `@girs/<name>-<version>` package and add it to `tsconfig.json`'s `types` array.
