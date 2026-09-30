# __PROJECT_NAME__

A GJS app written in TypeScript. It builds with Meson and ships as a Flatpak. The types
come from the [`@girs/*`](https://www.npmjs.com/org/girs) packages on npm. They contain
only types, so the compiler removes them and the finished app has no npm packages in it.

## Files

| Path | What it is |
| --- | --- |
| `main.ts` | The app. |
| `esbuild.ts` | Bundles `main.ts` into one JavaScript file. Meson calls it. |
| `env.d.ts` | Types for `.ui` and `.css` imports and for `__APP_ID__`. |
| `meson.build` | Installs the npm packages, runs the bundler, installs the app. |
| `build-aux/` | Type-check settings for `esbuild.ts`, which runs on Node, not GJS. |
| `data/` | Launcher script, desktop entry, AppStream metainfo, icon. |
| `com.example.__PROJECT_NAME__.json` | The Flatpak manifest. |

## Develop

```sh
npm install
npm run check
npm run build && npm start
```

## Build the Flatpak

The Flatpak build has no network access. `flatpak-builder` downloads everything listed
in the manifest first and then builds offline. `node-sources.json` is that list for
your npm packages, and you generate it from the lockfile:

```sh
# once
pipx install git+https://github.com/flatpak/flatpak-builder-tools.git#subdirectory=node

# after every dependency change
npm install
flatpak-node-generator npm package-lock.json -o node-sources.json

# build and install
flatpak-builder --user --install build-dir com.example.__PROJECT_NAME__.json
```

Don't skip the second step. If `node-sources.json` is older than `package-lock.json`,
everything still works on your machine, but in the Flatpak build `npm ci` fails with
`ENOTCACHED`, because a package it needs was never downloaded.

## The app id

You set the app id in one place: `"id"` in the Flatpak manifest. The manifest passes it
to Meson as `-Dapp_id=`, and Meson uses it for the launcher, the desktop entry, the
metainfo and the icon. The bundler writes it into `main.js` as `__APP_ID__`, so the
running app uses it too. To rename the app, rename the manifest and change `"id"`,
`"command"` and `-Dapp_id=` inside it.

## UI files and stylesheets

You can `import Template from "./window.ui"`. `esbuild.ts` imports `.ui` and `.css`
files as plain text, which GJS parses at runtime. `env.d.ts` tells TypeScript that such
an import is a string. Keep both. Without the `loader` entry in `esbuild.ts` the
bundle fails, and without the declarations in `env.d.ts` TypeScript reports `TS2307`.

## Before you submit to Flathub

`data/app.metainfo.xml.in` still contains `TODO` placeholders and `example.com` URLs.
`appstreamcli validate` does not catch them, so replace them yourself: both description
paragraphs, the developer name and the URLs. Update `<release version="..." date="...">`
with every release. The validator fails on a release without a date.
