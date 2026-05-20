# __PROJECT_NAME__

GJS + TypeScript starter, fully Node-free at runtime. Uses pre-generated [`@girs/*`](https://www.npmjs.com/org/girs) types and the [`gjsify` CLI](https://gjsify.github.io/gjsify/) for install, build, run, format and lint — no `npm`, no `node`, no `esbuild` ceremony.

## Setup

```sh
gjsify install
gjsify run build && gjsify run start
```

That's it. `gjsify build` produces a single GJS bundle with the right `firefox*` target + `gi://*` externals; `gjsify run` launches it with `LD_LIBRARY_PATH` / `GI_TYPELIB_PATH` pre-wired for any native typelib deps.

## Scripts

| Script | What it does |
|---|---|
| `gjsify install` | Install deps (Node-free; reads `gjsify-lock.json`) |
| `gjsify run check` | TypeScript `tsc --noEmit` |
| `gjsify run build` | Bundle `main.ts` → `dist/main.js` |
| `gjsify run start` | Launch the bundle under `gjs -m` |
| `gjsify run format` | Format via Biome |
| `gjsify run fix` | Format + safe-fix lint + organize imports |
| `gjsify run clear` | Remove `dist/` |

## Adding GIR modules

Install the matching `@girs/<name>-<version>` package and add it to `tsconfig.json`'s `types` array. Example for GStreamer:

```sh
gjsify install @girs/gst-1.0
```
