# GJSIFY-PREP-PLAN — Preparation work for `ts-for-gir` running on GJS

> **Audience:** the ts-for-gir agent.
> **Sister project:** [`gjsify/gjsify`](https://github.com/gjsify/gjsify) — Node.js/Web/DOM/Framework polyfills for GJS.
> **Strategic goal:** publish `@ts-for-gir/cli` so it runs on **GJS** (SpiderMonkey 128, libsoup, Gio) without Node.js, the same way it runs on Node today. End state: a user installs the npm tarball, runs `gjs -m bin/ts-for-gir generate Gtk-4.0`, and gets `.d.ts` output — no Node binary in the picture.
>
> The gjsify side is preparing two changes that are **only useful** once a few small ts-for-gir-side changes land. This file lists those changes. They are all small, all backward-compatible with Node, and each is independently mergeable.

## Where the gjsify integration sits today

`tests/integration/ts-for-gir/` in the gjsify repo bundles `@ts-for-gir/cli@4.0.0-rc.7` for both Node and GJS:

- **Node bundle** ([`dist/cli.node.mjs`](https://github.com/gjsify/gjsify/blob/main/tests/integration/ts-for-gir/package.json)) uses the same `--external` set as your own [`packages/cli/esbuild.ts`](packages/cli/esbuild.ts) (typedoc, prettier, @inquirer/prompts, inquirer, …). All 5 cli.spec.ts assertions green: `--version`, `--help`, unknown-command rejection, `list --help`, `list -g <dir>`.
- **GJS bundle** ([`dist/cli.gjs.mjs`](https://github.com/gjsify/gjsify/blob/main/tests/integration/ts-for-gir/scripts/build-cli-gjs.mjs)) currently relies on three workarounds that the ts-for-gir-side changes below will let us delete:
  1. A custom build wrapper script that resolves `--alias` paths to absolutes ([`scripts/build-cli-gjs.mjs`](https://github.com/gjsify/gjsify/blob/main/tests/integration/ts-for-gir/scripts/build-cli-gjs.mjs)).
  2. Per-test stub modules at [`src/stubs/`](https://github.com/gjsify/gjsify/blob/main/tests/integration/ts-for-gir/src/stubs/) that fake the API surface of typedoc / prettier / @inquirer/prompts / inquirer / generator-html-doc / generator-json so the bundle compiles.
  3. A custom [`src/cli.entry.ts`](https://github.com/gjsify/gjsify/blob/main/tests/integration/ts-for-gir/src/cli.entry.ts) that mirrors `start.ts` but adds GJS-specific MainLoop bootstrap, yargs `.exitProcess(false)`, and `GLib.idle_add` shutdown.

The right fix sits half in gjsify (a Node-compat module loader for `gjsify run` so externals resolve at GJS runtime) and half **here in ts-for-gir** — that's what this plan covers.

---

## Change 1 — `@ts-for-gir/lib`: drop the filesystem fallback in `getPackageVersion`

**File:** [`packages/lib/src/constants.ts`](packages/lib/src/constants.ts)

**Today:**

```ts
declare const __TS_FOR_GIR_VERSION__: string;

function getPackageVersion(): string {
    if (typeof __TS_FOR_GIR_VERSION__ !== "undefined") {
        return __TS_FOR_GIR_VERSION__;
    }
    const currentModulePath = fileURLToPath(import.meta.url);
    const currentDir = dirname(currentModulePath);
    const packageJsonPath = join(currentDir, "..", "package.json");
    const content = readFileSync(packageJsonPath, "utf-8");
    return (JSON.parse(content) as { version: string }).version;
}
```

**Problem:** when the lib gets bundled (your own `bin/ts-for-gir`, our gjsify integration bundle, any third-party tool wrapping it), `import.meta.url` resolves to the bundle file. The `join(currentDir, '..', 'package.json')` fallback then escapes the package, reads a wrong `package.json`, and either crashes or returns the wrong version. We hit this on first contact in the gjsify integration.

**Wanted:**

```ts
declare const __TS_FOR_GIR_VERSION__: string;

function getPackageVersion(): string {
    if (typeof __TS_FOR_GIR_VERSION__ !== "undefined") {
        return __TS_FOR_GIR_VERSION__;
    }
    // Dev mode (yarn ts-for-gir-dev) — read sibling package.json relative to
    // THIS source file. Wrapped in try/catch so a bundle that forgot to inject
    // the constant degrades gracefully instead of crashing on load.
    try {
        const currentModulePath = fileURLToPath(import.meta.url);
        const currentDir = dirname(currentModulePath);
        const packageJsonPath = join(currentDir, "..", "package.json");
        const content = readFileSync(packageJsonPath, "utf-8");
        return (JSON.parse(content) as { version: string }).version;
    } catch {
        return "0.0.0-unknown";
    }
}
```

**Why try/catch and not removing the fallback entirely:** the dev workflow (`yarn ts-for-gir-dev`) loads the source files directly without bundling, so the constant is absent and the fallback fires. Removing it would break dev. Wrapping it in try/catch keeps dev working AND makes any bundled consumer fail-soft instead of crashing at module load — the explicit `__TS_FOR_GIR_VERSION__` define remains the supported production path.

**Acceptance:** `yarn ts-for-gir-dev --version` prints the real version (dev path); a bundle without the define and without a sibling `package.json` returns `'0.0.0-unknown'` instead of throwing.

---

## Change 2 — `@ts-for-gir/cli`: keep startup Node-idiomatic, push GJS plumbing into gjsify

**File:** [`packages/cli/src/start.ts`](packages/cli/src/start.ts)

**Guiding principle:** ts-for-gir should not contain GJS-specific runtime code. Anything that's about "make Node-style code run under SpiderMonkey + GLib" belongs in the gjsify Node-compat layer so every project benefits, not just this one. The only ts-for-gir-side changes here are yargs-API decisions that we want regardless of runtime.

**Today:**

```ts
void yargs(hideBin(process.argv))
    .scriptName(APP_NAME)
    .strict()
    .usage(APP_USAGE)
    .version(APP_VERSION)
    .command(analyze as unknown as CommandModule)
    // ...
    .demandCommand(1)
    .help().argv;
```

**Problems on GJS without runtime support:**

1. `yargs.argv` is fire-and-forget — async command handlers (e.g. `list`, `generate`, `analyze`) never get awaited. JS module evaluation finishes before Gio async callbacks run.
2. yargs's internal `process.exit(0)` for `--version` / `--help` runs synchronously inside the parse pipeline. On a parked GLib MainLoop this becomes `imports.system.exit` mid-microtask and deadlocks until timeout.
3. The GLib MainLoop has to be parked somewhere or async Gio I/O won't dispatch at all.

**Wanted:**

```ts
import { APP_NAME, APP_USAGE, APP_VERSION } from "@ts-for-gir/lib";
import yargs, { type CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";
import { analyze, copy, create, doc, generate, json, list } from "./commands/index.ts";

try {
    await yargs(hideBin(process.argv))
        .scriptName(APP_NAME)
        .strict()
        .usage(APP_USAGE)
        .version(APP_VERSION)
        // Disable yargs's internal `process.exit` and route both success
        // and failure through `parseAsync` + `process.exitCode` so async
        // command handlers complete and stdout drains before the runtime
        // tears down.
        .exitProcess(false)
        .fail(false)
        .command(analyze as unknown as CommandModule)
        .command(create as unknown as CommandModule)
        .command(generate as unknown as CommandModule)
        .command(json as unknown as CommandModule)
        .command(list as unknown as CommandModule)
        .command(copy as unknown as CommandModule)
        .command(doc as unknown as CommandModule)
        .demandCommand(1)
        .help()
        .parseAsync();
} catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(`${message}\n`);
    process.exitCode = 1;
}
```

**Why this is safe on Node:**
- `parseAsync` + `await` is idiomatic Node yargs usage and awaits async command handlers properly (vs. `void yargs.argv`, which leaks them as unhandled Promises).
- `.exitProcess(false)` + `.fail(false)` route every yargs error through our `catch`, where we print the user-facing message and set `process.exitCode = 1`. Node exits with that code once the event loop drains.
- `process.exitCode = 0` (implicit on success) lets pending async stdout writes flush before exit. `process.exit(code)` would truncate them on piped stdout.
- The catch path matches today's behavior: yargs error message on stderr, non-zero exit.

**What gjsify must provide for this same code to work on GJS** (tracked in [`gjsify/gjsify` PR #58](https://github.com/gjsify/gjsify/pull/58)):

1. **Auto MainLoop**: gjsify's runtime parks an idempotent `GLib.MainLoop` at startup so async Gio I/O dispatches without ts-for-gir having to think about it.
2. **`process.exit(code)` is async-safe**: gjsify's `process` polyfill quits the parked MainLoop and schedules `imports.system.exit(code)` via `GLib.idle_add(PRIORITY_DEFAULT, …)` so the syscall fires from a fresh main-loop iteration, not from a microtask continuation. (yargs may still call this internally even with `.exitProcess(false)` in edge cases — and any other library we depend on may.)
3. **`process.exitCode` semantics**: when JS module evaluation finishes with no pending I/O and `process.exitCode` is set, gjsify quits the MainLoop and exits with that code.
4. **`process.stderr.write` is fast for `string`**: the slow path we hit empirically was `console.error(errorInstance)` going through a JSON-stringify; writing the pre-extracted message string avoids it. If gjsify's `console.error` polyfill formats Errors efficiently, even our `process.stderr.write(message)` becomes optional.

If any of (1)–(3) is missing in gjsify, this same start.ts will hang on GJS — that's a gjsify bug, not a ts-for-gir bug.

**Acceptance on Node** (this repo):
- `yarn ts-for-gir-dev --version` exits 0 within 1 second.
- `yarn ts-for-gir-dev --help` lists all commands and exits 0 within 1 second.
- `yarn ts-for-gir-dev nonexistent-command` exits non-zero with yargs's error message.
- `yarn ts-for-gir-dev generate Gtk-4.0` produces `.d.ts` output.
- All existing `tests/e2e/cli/` end-to-end tests still pass.

**Acceptance on GJS** (gjsify side):
- After gjsify's polyfills (1)–(3) land, `gjs -m packages/cli/bin/ts-for-gir generate Gtk-4.0` produces `.d.ts` output without any ts-for-gir-side patches beyond what's in this repo.

---

## Change 3 — `@ts-for-gir/cli/esbuild.ts`: re-inject `__TS_FOR_GIR_VERSION__` after Change 1

**File:** [`packages/cli/esbuild.ts`](packages/cli/esbuild.ts)

This is already correct today, but cross-check after Change 1: the `define` block must keep injecting `__TS_FOR_GIR_VERSION__`, otherwise the bundled `bin/ts-for-gir` falls into the new "0.0.0-unknown" fallback. No change expected; just verify after Change 1 lands.

---

## Change 4 — `@ts-for-gir/cli`: list a `bin/ts-for-gir` smoke test in `tests/`

**Optional but valuable.** The existing `tests/e2e/cli/run.mjs` (if any) probably exercises the dev-mode `ts-for-gir-dev` script. Add a counterpart that runs the **packed bin/** output instead — i.e., the same artifact users get from npm. This is the surface our gjsify integration will eventually consume directly.

Minimum viable test:

```js
// tests/e2e/cli-bin/run.mjs
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const BIN = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'packages', 'cli', 'bin', 'ts-for-gir');

test('bin/ts-for-gir --version matches package.json', () => {
    const out = execFileSync('node', [BIN, '--version'], { encoding: 'utf8' }).trim();
    assert.match(out, /^\d+\.\d+\.\d+/);
});

test('bin/ts-for-gir --help lists all commands', () => {
    const out = execFileSync('node', [BIN, '--help'], { encoding: 'utf8' });
    for (const cmd of ['analyze', 'create', 'generate', 'json', 'list', 'copy', 'doc']) {
        assert.ok(out.includes(`ts-for-gir ${cmd}`), `missing command: ${cmd}`);
    }
});
```

This protects against regressions in the bundled output that the dev tests don't catch — exactly the surface the gjsify integration consumes.

**Acceptance:** `yarn build && node tests/e2e/cli-bin/run.mjs` exits 0.

---

## Change 5 — `@ts-for-gir/lib` & `@ts-for-gir/cli`: confirm `import.meta.url`-relative reads are gone

**Search across the codebase for the pattern that breaks bundles:**

```
grep -rn 'import.meta.url' packages/lib/src packages/cli/src packages/generator-*/src
```

Each match is a candidate bundle bomb. Common offenders:

- Reading a sibling `package.json` for version info → switch to a `--define`-injected constant (Change 1 pattern).
- Locating a sibling template file → switch to `import templateString from './path/to/template.ejs'` if your bundler supports text loaders, or inline the template as a TypeScript constant.
- Locating a config schema → inline as a TS constant.

If any unavoidable read remains, document it in this file under "**Known bundle escape hatches**" so the gjsify integration knows to provide a stub/define instead of fighting it.

**Acceptance:** every `import.meta.url` reference in `lib/`, `cli/`, and `generator-*/` is either (a) gone, (b) wrapped in the same try/catch dev-fallback shape as Change 1, or (c) explicitly listed in this file with a rationale.

### Known bundle escape hatches

After Change 1, 2, 5 the following `import.meta.url` references remain on purpose. Each is a contract with the bundler/loader, not a bundle bomb:

- [`packages/lib/src/templates/template-engine.ts:9`](packages/lib/src/templates/template-engine.ts#L9) — `createRequire(import.meta.url)` to resolve the externalized `@ts-for-gir/templates` package at runtime. Stays in the externals list ([`packages/cli/esbuild.ts:20`](packages/cli/esbuild.ts#L20)). The gjsify Node-compat module loader is expected to provide `node:module` `createRequire` and externals resolution; bundlers without that need to either externalize `@ts-for-gir/templates` and provide a Node-compatible require, or replace this site with a `--define`-injected absolute path.
- [`packages/cli/src/commands/create.ts:56-57`](packages/cli/src/commands/create.ts#L56-L57) — `findTemplatesRoot()` is lazy (only runs when `create` is invoked) and already throws a descriptive error when none of its three candidate paths exist. On GJS, `create` is not a typical use case — the GJS bundle is a generator runtime, not a scaffolding tool. Bundlers that need `create` on a non-Node target should `--define` a constant for the resolved templates path or polyfill `node:url`/`fileURLToPath` via the gjsify loader.

The two remaining sites in [`packages/lib/src/utils/path.ts`](packages/lib/src/utils/path.ts) and [`packages/generator-typescript/src/utils.ts`](packages/generator-typescript/src/utils.ts) are wrapped in try/catch (Change 5 patch) and degrade to `""` in bundles where `fileURLToPath` is unavailable. The exported `__dirname` is part of the public API for backward compatibility but is not consumed inside the workspace; bundled consumers must not rely on it pointing to a real filesystem path.

---

## Change 6 — Validate that `bin/ts-for-gir` runs unmodified on GJS once gjsify lands its loader

After all the above ships and gjsify publishes its Node-compat module loader (`@gjsify/runtime`'s `setModuleResolveHook` integration), the gjsify integration test will switch from the workaround pipeline to:

```bash
gjsify run packages/cli/bin/ts-for-gir generate Gwebgl-0.1
```

— exactly the same artifact you publish to npm, just dispatched through the GJS module loader instead of Node's. **No fork, no stubs, no patched entrypoint.** That is the real acceptance test for "ts-for-gir runs on GJS unmodified", and the changes above are what make it possible.

When that test passes end-to-end, this file can be deleted.

---

## What we're NOT asking for

- **No bundling typedoc/prettier/inquirer inline.** Externals are the right pattern; `bin/ts-for-gir` already does this and it stays as is.
- **No conditional `if (isGjs)` branches** scattered through the codebase. The MainLoop bootstrap and shutdown helper in Change 2 are the only GJS-aware code; both fall through to no-ops / `process.exit` on Node.
- **No new dependencies.** Everything above is shape changes to existing code.
- **No version bumps to peer deps.** The above is independent of typedoc/prettier/inquirer versions.

---

## Suggested order

1. **Change 1** alone is mergeable and unblocks any consumer that bundles `@ts-for-gir/lib` (us, Excalibur tooling, anyone wrapping the generator).
2. **Change 2** depends on Change 1 (because the `__TS_FOR_GIR_VERSION__` path is the production version source). Mergeable as a follow-up.
3. **Change 3** is a one-line verification after Change 1.
4. **Change 4 + 5** can land in either order, independently of 1–3.
5. **Change 6** is a tracking checkbox — when gjsify ships its loader (separate PR over there) we'll come back here and flip it green.

Each change is small. None breaks existing Node usage. Together they remove every workaround the gjsify integration currently carries.
