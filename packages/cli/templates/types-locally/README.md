# __PROJECT_NAME__

GJS + TypeScript starter that generates GObject Introspection types **locally** into `./@types/`, without using the `@girs/*` NPM packages.

## Setup

```sh
npm install
npm run generate     # writes types into ./@types/
npm run check:types  # tsc --noEmit
npm run build        # bundles main.ts to dist/ via esbuild
npm start            # runs dist/main.js with gjs
```

`@types/index.d.ts` is regenerated each time you run `npm run generate`. Add or remove modules in `.ts-for-girrc.js`.
