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
| published before something they depend on existed | **513 of 716** |
| worst case | `@girs/abi-3.0` waited 125 min for `@girs/xlib-2.0` |

(Reproducible: `npm view @girs/<name> time --json` for each of the 716, counting a package whose
own `4.9.0` stamp precedes that of one of its dependencies. 513 raw; 5 of them are members of the
cycle below, which no order can avoid, and the other 508 are the defect.)

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
the only check that also proves the tarballs exist. Measured in
[gjsify/types#16](https://github.com/gjsify/types/pull/16): 5.5 minutes and 225 MB for the full
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

**What is left after the fix.** npm has no atomic multi-package publish, so the cycle keeps a
window of its own: the six go out one after another as the first group, and whichever goes first
names members that are not there yet. How many of the six do depends on the order inside the
group — two at best (`gjs`, `glib-2.0`, `gobject-2.0`, `cairo-1.0`, `gmodule-2.0`, `gio-2.0`;
brute-forced over all 720 orders of the v4.9.0 edges), five at worst, and v4.9.0's `readdir`
order hit five. At v4.9.0's observed pace (127.7 min / 716 = 10.7 s per package) that is

| | before | after |
|---|---|---|
| packages published with an incomplete closure | 513 | 2–5 |
| how long | 128 min | ≤ 54 s |

and it is the remainder, not an oversight: no order can shorten it, and the gate exempts it on
purpose. Everything outside the cycle — the other 710 packages — has no window at all.

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

The five are the defect this project already has a number for — [#431](https://github.com/gjsify/ts-for-gir/issues/431),
which hit the same duplicate through `@girs/gjs` and reported it as `TS2345`, two incompatible
`GObject.Object` types. Here it surfaces on Gtk instead:

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
sees that. That version has a tarball again since, so the case no longer reproduces; it is kept
here because nothing except an actual install would have caught it while it was true.

## Before you cut: npm's own status page

A release is not an event, it is a sweep — the tag starts something that publishes 716 packages
one at a time and runs for three and a half hours. So the question at cut time is not "is npm up"
but "will npm still be up in four hours".

**This went wrong in v5.3.0.** npm ran a scheduled maintenance window on `Package publishing`
from 17:00 to 19:00Z; the sweep ran 14:44 → 18:15 and walked straight into it.

| | |
|---|---|
| tag pushed | 2026-09-19 14:41Z |
| sweep starts | 14:44Z |
| window opens, `Package publishing` → `under_maintenance` | 17:00Z |
| `@girs/atrilview-1.5.0` gets `E503` on its PUT | 17:18Z |
| gives up after 10 retries, on `E404` | 17:37Z |
| sweep ends: **715 of 716**, run red | 18:15Z |
| window closes | 19:00Z |
| a re-run publishes the missing package | 19:02Z, in **4 seconds** |

`scripts/check-npm-status.mjs` runs from `.release-it.json`'s `before:init`, so a cut into a
window is refused before the tag exists. Two things about it are load-bearing:

**Asking "is publishing operational right now" would NOT have caught this.** At 14:41 it was.
The window was created at 2026-09-18T21:00:58Z — nearly eighteen hours before the cut — and
listed `Package publishing` the whole time. So the check also asks whether any *scheduled* window
overlaps the next `--horizon` hours (default 4, the measured sweep length rounded up). That
second question is the one that pays.

**It reads the component, never the page banner.** During the incident the page said
`maintenance` while `Package installation` stayed `operational`. The banner cannot tell "the
website is down" from "nobody can publish", and only the second half-lands a release.

Unreadable is **unknown**, and unknown blocks — a status API that times out has not told you
anything, least of all that everything is fine. To ship anyway, say why:

```bash
gjsify run check:npm                                    # ask by hand
NPM_STATUS_OVERRIDE="<reason>" npx release-it …         # ship inside a window, on the record
node --no-warnings scripts/check-npm-status.mjs --status-url=file:///abs/fixture   # prove it red
```

It is deliberately **not** part of `gjsify run check`: a maintenance window is no reason to
red-line every pull request, and a gate that cries wolf on unrelated work gets switched off.

## When the sweep half-lands

Two facts worth knowing before you need them, because this is what you reach for under pressure:

**`release.yml` in gjsify/types has no `workflow_dispatch`.** It triggers on `release: published`
and `push: main` — nothing else. So there is no "run the release workflow" button, and looking for
one costs time you do not have mid-incident. The recovery verb is a re-run:

```bash
gh run rerun --failed <run-id> -R gjsify/types
```

That is safe, and not by luck: the publisher checks the registry for every package before it
publishes anything, so a re-run republishes only what is genuinely missing. Measured on the
v5.3.0 recovery — `715 already published, 1 to publish`, four seconds of publishing, then the
full closure gate and cold-install probe as usual.

**Visible is not installable.** A packument read says a version EXISTS; a tarball fetch says it
INSTALLS. Those came apart for real at v5.2.0, where all four `@girs/sdk-*` bundles were visible
at a version nobody could install yet. When you verify a recovery, verify both — and read the
registry with a cache buster, because `npm view` and a bare `curl` will hand back a stale
packument and look authoritative while doing it.

## Running the checks by hand

Here, against a generated tree — the build-time half. It is part of `gjsify run check`, and CI
runs it again in `build-validate` on the tree `build:types` has just written:

```bash
gjsify run check:closure                                                 # ./types-dev
node --no-warnings scripts/check-dependency-closure.mjs ./types-release  # any tree
```

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

`gjsify foreach` does have `-t` / `--topological`, and it cannot order this graph. Measured
2026-09-11 over the 703 `types-dev` workspaces: with `-t`, `@girs/gtk-4.0` started 166 places
before the `@girs/pango-1.0` it depends on, and the start order of the whole set violated 3030 of
the 7428 `@girs` edges that tree declares — `@gjsify/workspace` counts only `workspace:`-protocol
specs as edges (`graph.ts`), and the committed tree declares carets, so `-t` sees no graph at all.
The order it returns is plain alphabetical, which is why the number is reproducible rather than a
property of one run: sort the 703 package names and count the edges pointing forwards.

A tree regenerated with `--workspace=true` does declare `workspace:^`, and there the same ordering
code refuses a cycle outright (`dependency cycle detected`) — and this graph has one. So: run
`--verify-only` against the registry afterwards, and treat a green sweep as unproven until it
does.
