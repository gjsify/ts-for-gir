# Publishing `@girs/*`

One ts-for-gir release publishes 716 npm packages that depend on each other. This is the part of
that which is not obvious, and the decisions that were made with a measurement rather than a
preference.

Where the code lives: the generator writes the manifests (`packages/lib/src/dependency-manager.ts`),
[gjsify/types](https://github.com/gjsify/types) holds the generated tree and publishes it
(`.github/release-script/`).

## The release is a set, and a set is published in an order

A `@girs/*` package declares its siblings as runtime dependencies — `@girs/adw-1` names fifteen of
them. Until every one of those is on the registry, the package is installed but not installable:
npm finds it, resolves its dependencies, and fails on the one that is not there yet.

**This went wrong in v4.9.0.** The publisher walked the tree in `readdir` order, which is neither
sorted nor topological. Measured afterwards from the registry's own `time` maps:

| | |
|---|---|
| first package published | `@girs/abi-3.0`, 2026-09-10 22:15:33Z |
| last package published | `@girs/xkl-1.0`, 2026-09-11 00:23:15Z |
| length of the sweep | 128 minutes |
| published before something they depend on existed | **508 of 716** |
| worst case | `@girs/abi-3.0` waited 125 min for `@girs/xlib-2.0` |

gjsify's e2e legs went red twice inside that window with

```
npm error notarget No matching version found for @girs/pango-1.0@^4.9.0
```

which names neither the package the consumer asked for nor the repository the cause lives in.
Diagnosis cost more than the bug.

**The fix is in the publisher, and it has two halves** — the first prevents, the second proves:

1. **Topological order.** `planPublishOrder` condenses the dependency graph into its strongly
   connected components (Tarjan) and publishes the components in an order where nothing precedes
   what it needs.
2. **A closure gate after every publish group.** The registry — not our own bookkeeping — is asked
   whether each member's dependencies now resolve. A gap fails the run at the moment it happens,
   naming the package, the dependency and the range.

Plus a real `npm install` of the whole published set into an empty directory at the end, which is
the only check that also proves the tarballs exist. Measured: 5.5 minutes and 225 MB for the full
716-package set on a cold cache.

### The graph has a cycle, and it is six namespaces wide

GIR namespaces reference each other, so the `@girs` graph is not a DAG. Tarjan over the v4.9.0
tree finds exactly one non-trivial component:

```
cairo-1.0 · gio-2.0 · gjs · glib-2.0 · gmodule-2.0 · gobject-2.0
```

No order can make a cycle member's closure complete at its own publish instant — whichever goes
first necessarily points at one that is not there yet. That is why the unit of both halves is the
**group**, not the package: a component publishes together, and the gate exempts the edges inside
it. A per-package gate would be red on a perfectly ordered release, and a gate that is red when
the system is right gets switched off.

The components are computed, never listed by hand. The first count of the v4.9.0 damage exempted
`glib-2.0`/`gobject-2.0` as "the cycle" and reported 12 offenders in a 16-package sample; the
component is six wide, so the real number for that sample is 7. A hand-written exemption list was
five packages wrong on the only cycle this graph has.

## Why sibling ranges are carets, not exact pins

Generated `@girs/*` manifests declare siblings as `^<version>` — all 7637 edges of the v4.9.0 tree.
Exact pins (`--depVersionFormat=exact`) look like they would have protected a consumer during the
window above, and for a consumer pinning an OLD release they would have. They were still the wrong
answer, and the reason is measurable.

Two packages of the same `@girs` set reached over two different ts-for-gir releases — a direct
dependency on one, a transitive dependency on the other — is the ordinary case, not a corner:

```jsonc
// probe: @girs/gtk-4.0 directly, @girs/adw-1 which needs @girs/gtk-4.0 too
{ "@girs/gtk-4.0": "^4.8.0", "@girs/adw-1": "^4.9.0" }   // carets
{ "@girs/gtk-4.0":  "4.8.0", "@girs/adw-1":  "4.9.0" }   // exact
```

Measured with `npm install` and `tsc 5.9.3`:

| | carets | exact pins |
|---|---|---|
| `@girs/*` packages installed | 16 | 17 — `@girs/gtk-4.0` twice |
| `node_modules` | 16 MB | 23 MB |
| TypeScript errors | **0** | **5** |

The five are the failure this project already has a number for — [#431](https://github.com/gjsify/ts-for-gir/issues/431):

```
node_modules/@girs/adw-1/node_modules/@girs/gtk-4.0/gtk-4.0-ambient.d.ts(4,20):
  error TS2300: Duplicate identifier 'Gtk40'.
node_modules/@girs/adw-1/node_modules/@girs/gtk-4.0/gtk-4.0-import.d.ts(6,9):
  error TS2717: Subsequent property declarations must have the same type.
  Property 'Gtk' must be of type 'typeof Gtk', but here has type 'typeof Gtk'.
```

Two copies of one namespace are not a version skew; they are two `declare module 'gi://Gtk'`
blocks, and the second one poisons the first. Carets collapse them to one copy. Exact pins make
that collapse impossible by construction, in exchange for protection against a window that should
not exist in the first place.

**Decision: carets stay. The order closes the window.** That is sufficient, and not only for
consumers tracking the newest set: with a topological order, every dependency of a package is
resolvable at the instant the package appears, so no range — caret, tilde or exact — can point at
something that is not there. Exact pins would have narrowed the blast radius of a defect; the
order removes the defect. And the gate is what keeps the order honest, because an order that is
right today and unchecked stops being right the first time someone changes how packages are
collected.

`--depVersionFormat=exact` remains available for a consumer who wants a frozen set, and
`--bundle` is the supported way to get one that cannot skew at all (see below).

## The SDK channel bundles are one package, and order does not apply

`ts-for-gir generate --bundle @girs/sdk-gnome-50` emits the whole GIR set of a Flatpak SDK as ONE
self-contained package whose namespaces are subpaths of itself. Measured on the published
artefact: `npm view @girs/sdk-gnome-50 dependencies` is empty — a bundle declares no `@girs/*`
sibling, so its publish plan is a single group and the ordering defect cannot reach it.

The closure gate still runs for the bundles, and it earns its place there for the other reason:
`@girs/sdk-gnome-master@4.7.0` was published, listed by `npm view` with an attestation, and
answered `E404` to `npm install` — a manifest without a tarball. The final install probe is what
sees that.

## Running the checks by hand

In [gjsify/types](https://github.com/gjsify/types), `.github/release-script/`:

```bash
npm ci
npm run check          # type-check the publisher
npm test               # the plan and the gate, against the recorded v4.9.0 graph
npm run test:e2e       # the whole publisher against a throwaway Verdaccio
```

To ask whether what is on the registry right now resolves — after an interrupted release, or when
a consumer reports a `notarget` and nobody knows which repository the cause is in:

```bash
node --experimental-strip-types --experimental-transform-types --no-warnings \
  .github/release-script/src/index.ts --verify-only
```

## The workspace-local publish path

`gjsify run publish:types` in this repository publishes the `types-dev` workspaces. It is a manual
escape hatch, not the release path — CI publishes from gjsify/types — and it has **neither half**:
no topological order and no closure gate, so it can reproduce the v4.9.0 window on its own.

`gjsify foreach` does have `-t` / `--topological`, but whether it can order a graph with a cycle in
it has not been measured here, and this graph has one. So: run `--verify-only` against the registry
afterwards, and treat a green sweep as unproven until it does.
