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

The application lives in [`packages/app/`](./packages/app/) and depends on `@girs/*` via `workspace:^` — those references are resolved by your package manager to the locally generated packages in `./@girs/`.
