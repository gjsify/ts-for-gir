# __PROJECT_NAME__

GJS + TypeScript app that builds with **Meson** and ships as a **Flatpak**. Types come from
the pre-generated [`@girs/*`](https://www.npmjs.com/org/girs) packages, which are
**type-only** — they are erased when the bundle is built, so nothing npm-shaped ends up
inside the app.

## Layout

| Path | What it is |
| --- | --- |
| `main.ts` | The app. Bundled to `dist/main.js`. |
| `esbuild.ts` | The bundle step Meson calls. |
| `env.d.ts` | Types for `.ui` / `.css` imports, and for the `__APP_ID__` constant. |
| `meson.build` | Installs the dependencies, bundles, installs the app. |
| `build-aux/` | Type-check config for the build scripts (they run on Node, not GJS). |
| `data/` | Launcher, desktop entry, AppStream metainfo, icon. |
| `com.example.__PROJECT_NAME__.json` | The Flatpak manifest. |

## Develop

```sh
npm install
npm run check
npm run build && npm start
```

## Ship it as a Flatpak

The build sandbox has **no network**, so every dependency has to reach it through the
manifest's `sources` before the build starts. The order matters:

```sh
# once
pipx install git+https://github.com/flatpak/flatpak-builder-tools.git#subdirectory=node

# per dependency change
npm install                                        # writes package-lock.json
flatpak-node-generator npm package-lock.json -o node-sources.json

# build
flatpak-builder --install com.example.__PROJECT_NAME__.json
```

`meson.build` then installs **offline** from the cache `flatpak-builder` filled from
`node-sources.json`. Regenerate that file whenever you change a dependency: it is
generated from the lockfile by a *different* command, so a tarball the lockfile pins and
the sources array omits is a build that cannot succeed — and it fails only inside the
sandbox, long after every local check passed.

## UI files and stylesheets

`import Template from "./window.ui"` works out of the box: `esbuild.ts` loads `.ui`
and `.css` as **text** (GJS parses them at runtime, they are not modules to
execute) and `env.d.ts` tells TypeScript the import is a string. Without the
loaders esbuild rejects the import, and the TypeScript error is a bare `TS2307`
that never mentions loaders — that pairing is why both halves ship here.

## Before you submit to Flathub

`data/app.metainfo.xml.in` still says `TODO`, and `appstreamcli validate` fails on
those placeholders — replace both description paragraphs, the developer name and the
URLs. Bump `<release version=… date=…>` on every release; the date is not optional.

## The app id

One home: the `"id"` in the Flatpak manifest, which passes it to Meson as
`-Dapp_id=`. From there it reaches the desktop entry, the metainfo, the launcher,
the icon **and** the running app — `applicationId` in `main.ts` is the esbuild
constant `__APP_ID__`, which the build substitutes from that same value. Rename
the app in the manifest and everything follows.
