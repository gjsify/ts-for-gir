#!/usr/bin/env node
// Asserts that a generated `@girs/*` tree is PUBLISHABLE as a set, before anything is published.
//
// A generated package declares its siblings as runtime dependencies -- `@girs/adw-1` names
// fifteen of them. Two things can make that set unresolvable, and neither shows up in a type
// check, a generated diff, or a green `build:types`:
//
//   1. A DANGLING edge: a manifest names a namespace the same run did not emit. The package is
//      then uninstallable from the day it is published, for everybody, forever -- not for a
//      window. It happens by configuration: a namespace dropped from `.ts-for-gir.*.rc.js` while
//      another still imports it.
//   2. An UNSATISFIABLE range: a sibling is present but at a version the declared range does not
//      accept, which is what a half-bumped tree looks like.
//
// The publisher in gjsify/types has a closure gate that catches both -- but only at publish time,
// with part of the set already on the registry. This is the same invariant asked at BUILD time,
// where the answer is free and the fix is a regeneration.
//
// See PUBLISHING.md for the incident that produced this family of checks: v4.9.0 went out in
// `readdir` order and 513 of 716 packages were published before something they depend on existed.
//
// Usage: node --no-warnings scripts/check-dependency-closure.mjs [dir]   (default: ./types-dev)

import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const RUNTIME_FIELDS = ["dependencies", "peerDependencies", "optionalDependencies"];

/** `major.minor.patch` plus an optional prerelease: the one version shape the generator writes. */
const VERSION = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/;

// --- Reading the tree --------------------------------------------------------

/**
 * One manifest as `{ name, version, dependencies }`, or the reason it cannot be one. A manifest
 * that does not parse is a finding in its own right: silently dropping it would turn "this file
 * is corrupt" into "no package provides it" -- or into nothing at all, when nobody depends on it.
 */
export function parseManifest(text, where) {
  let manifest;
  try {
    manifest = JSON.parse(text);
  } catch (error) {
    return { broken: `${where}: ${error.message}` };
  }
  if (typeof manifest.name !== "string" || typeof manifest.version !== "string") {
    return { broken: `${where}: has no string \`name\` and \`version\`` };
  }
  const dependencies = {};
  for (const field of RUNTIME_FIELDS) {
    for (const [name, range] of Object.entries(manifest[field] ?? {})) {
      if (typeof range === "string") dependencies[name] = range;
    }
  }
  return { pkg: { name: manifest.name, version: manifest.version, dependencies } };
}

/**
 * Every direct subdirectory holding a `package.json`. A directory without one is not a package
 * (`types-release/sdk/`, a leftover `node_modules/`) and is listed as skipped so the summary
 * says what was NOT read; a duplicate package name would let one manifest shadow another.
 * @returns {{ packages: Map<string, object>, skipped: string[], broken: string[] }}
 */
export function readTree(dir) {
  const tree = { packages: new Map(), skipped: [], broken: [] };
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith(".")) continue;
    const where = join(dir, entry.name, "package.json");
    if (!existsSync(where)) {
      tree.skipped.push(entry.name);
      continue;
    }
    const { pkg, broken } = parseManifest(readFileSync(where, "utf8"), where);
    if (broken) {
      tree.broken.push(broken);
    } else if (tree.packages.has(pkg.name)) {
      tree.broken.push(`${where}: \`${pkg.name}\` is already declared by another directory`);
    } else {
      tree.packages.set(pkg.name, pkg);
    }
  }
  return tree;
}

// --- Ranges ------------------------------------------------------------------

/** Parse `major.minor.patch[-pre]`; anything else is `null`. */
function parseVersion(text) {
  const match = VERSION.exec(text);
  if (!match) return null;
  return { core: match.slice(1, 4).map(Number), prerelease: match[4]?.split(".") ?? [] };
}

function compareCore(a, b) {
  for (let i = 0; i < 3; i++) {
    if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
  }
  return 0;
}

/**
 * semver §11: identifiers compare numerically when both are numbers and by ASCII otherwise, a
 * number ranks below a word, and a prefix ranks below anything that extends it.
 */
function comparePrerelease(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] === undefined) return -1;
    if (b[i] === undefined) return 1;
    const [aNumeric, bNumeric] = [/^\d+$/.test(a[i]), /^\d+$/.test(b[i])];
    if (aNumeric !== bNumeric) return aNumeric ? -1 : 1;
    if (a[i] === b[i]) continue;
    if (aNumeric) return Number(a[i]) < Number(b[i]) ? -1 : 1;
    return a[i] < b[i] ? -1 : 1;
  }
  return 0;
}

function compareVersions(a, b) {
  const core = compareCore(a.core, b.core);
  if (core !== 0) return core;
  // A release outranks every prerelease of the same core.
  if (a.prerelease.length === 0 || b.prerelease.length === 0) {
    return Math.sign(b.prerelease.length - a.prerelease.length);
  }
  return comparePrerelease(a.prerelease, b.prerelease);
}

/** `^` per npm: the leftmost non-zero component may not change -- `^0.2.3` is `<0.3.0`. */
function caretUpperBound([major, minor, patch]) {
  if (major > 0) return [major + 1, 0, 0];
  if (minor > 0) return [0, minor + 1, 0];
  return [0, 0, patch + 1];
}

/**
 * Does `version` satisfy `range`? Only the four shapes the generator writes are understood
 * (`createPackageJsonImport` in packages/lib/src/dependency-manager.ts): `workspace:^`, which
 * never reaches a registry and is resolved by the package manager; `*`; `x.y.z`; and `^x.y.z`.
 * Anything else -- a tilde, a partial `^4.9`, a `latest` -- is `null`, "I do not know", which
 * the caller reports rather than assumes: a range shape nobody anticipated must be loud.
 */
export function satisfied(version, range) {
  if (range === "*" || range.startsWith("workspace:")) return true;
  const have = parseVersion(version);
  const isCaret = range.startsWith("^");
  const want = parseVersion(isCaret ? range.slice(1) : range);
  if (!have || !want) return null;
  if (!isCaret) return compareVersions(have, want) === 0;
  // npm admits a prerelease into a range only when the range itself names a prerelease on the
  // same `major.minor.patch`; `^4.9.0` does not float onto `4.10.0-rc.1`. The generator's choice
  // of carets rests on exactly that (see the comment above `createPackageJsonImport`).
  const hasPrerelease = have.prerelease.length > 0;
  if (hasPrerelease && (want.prerelease.length === 0 || compareCore(have.core, want.core) !== 0)) {
    return false;
  }
  return compareVersions(have, want) >= 0 && compareCore(have.core, caretUpperBound(want.core)) < 0;
}

// --- The two questions -------------------------------------------------------

/** `null` when the edge resolves inside the tree; otherwise the finding, as data. */
function edgeProblem(packages, edge) {
  if (!edge.dependency.startsWith("@girs/")) return null;
  const sibling = packages.get(edge.dependency);
  if (!sibling) return { kind: "dangling", ...edge };
  const ok = satisfied(sibling.version, edge.range);
  if (ok === null) return { kind: "unknown-range", ...edge };
  if (!ok) return { kind: "unsatisfied", ...edge, have: sibling.version };
  return null;
}

/** Every `@girs/*` edge the tree cannot honour -- as data, so the self-test runs the real thing. */
export function closureProblems(packages) {
  const problems = [];
  for (const pkg of packages.values()) {
    for (const [dependency, range] of Object.entries(pkg.dependencies)) {
      const problem = edgeProblem(packages, { package: pkg.name, dependency, range });
      if (problem) problems.push(problem);
    }
  }
  return problems;
}

/** Tarjan's visit. Recursion depth is the longest dependency chain: dozens, in 716 packages. */
function strongConnect(node, edges, state) {
  const { index, low, stack, onStack } = state;
  index.set(node, index.size);
  low.set(node, index.get(node));
  stack.push(node);
  onStack.add(node);
  for (const next of edges.get(node)) {
    if (!index.has(next)) {
      strongConnect(next, edges, state);
      low.set(node, Math.min(low.get(node), low.get(next)));
    } else if (onStack.has(next)) {
      low.set(node, Math.min(low.get(node), index.get(next)));
    }
  }
  if (low.get(node) !== index.get(node)) return;
  const component = stack.splice(stack.indexOf(node));
  for (const member of component) onStack.delete(member);
  if (component.length > 1) state.found.push(component.sort());
}

/**
 * Strongly connected components with more than one member -- reported, never flagged: a cycle
 * is legal, and it is what forces the publisher to move in groups instead of packages.
 */
export function cycles(packages) {
  const edges = new Map(
    [...packages.values()].map((pkg) => [
      pkg.name,
      Object.keys(pkg.dependencies).filter((d) => d !== pkg.name && packages.has(d)),
    ]),
  );
  const state = { index: new Map(), low: new Map(), stack: [], onStack: new Set(), found: [] };
  for (const name of edges.keys()) {
    if (!state.index.has(name)) strongConnect(name, edges, state);
  }
  return state.found;
}

// --- Deciding about one tree ------------------------------------------------

const DETAIL = {
  dangling: () => "no package in this tree provides it",
  "unknown-range": () => "range shape not recognised — teach `satisfied()` or fix the generator",
  unsatisfied: (problem) => `the tree has ${problem.have}`,
};

/** What was read, and what the shape of the graph means for publishing it. */
function reportShape(tree, dir, io) {
  io.log(`📦 ${dir}: ${tree.packages.size} packages`);
  if (tree.skipped.length > 0) {
    io.log(`   skipped ${tree.skipped.length} without a package.json: ${tree.skipped.join(", ")}`);
  }
  const found = cycles(tree.packages);
  for (const component of found) {
    io.log(`🔁 dependency cycle (${component.length}): ${component.join(", ")}`);
  }
  io.log(
    found.length === 0
      ? "   no cycles — the set can be published one package at a time"
      : "   cycles publish as one group; see PUBLISHING.md",
  );
}

/**
 * Read one tree and answer the process exit code: 0 installable as published, 1 not.
 *
 * It RETURNS the code instead of exiting, because the decision is the half a self-test that only
 * calls the pure helpers can never reach -- `satisfied()` can be perfect while the script still
 * exits 0 on a tree full of findings, and that is the failure this whole file exists to prevent.
 * @param {{ log: (line: string) => void, error: (line: string) => void }} io
 */
export function checkTree(dir, io) {
  let tree;
  try {
    tree = readTree(dir);
  } catch (error) {
    io.error(`❌ cannot read ${dir}: ${error.message}`);
    io.error("   Generate the types first: gjsify run build:types");
    return 1;
  }
  for (const broken of tree.broken) io.error(`❌ ${broken}`);
  if (tree.packages.size === 0) {
    // An empty tree satisfies every assertion below, which is the classic green that checked
    // nothing. The submodule is probably not initialised.
    io.error(`❌ ${dir} holds no packages — nothing was checked.`);
    io.error("   git submodule update --init types-dev && gjsify run build:types");
    return 1;
  }
  reportShape(tree, dir, io);
  const problems = closureProblems(tree.packages);
  for (const problem of problems) {
    const edge = `${problem.package} declares ${problem.dependency}@${problem.range}`;
    io.error(`❌ ${edge} — ${DETAIL[problem.kind](problem)}`);
  }
  const findings = problems.length + tree.broken.length;
  if (findings === 0) {
    io.log(`✅ every @girs dependency resolves inside ${dir}`);
    return 0;
  }
  io.error(`\n${findings} finding(s): ${dir} could not be installed as published.`);
  return 1;
}

// --- SELF-TEST FIRST: a check that cannot go red is worse than no check. -----

/** `[version, range, expected]` -- `null` is "refused". Cross-checked against npm's `semver`. */
const RANGE_VECTORS = [
  ["4.9.0", "^4.9.0", true],
  ["4.10.3", "^4.9.0", true],
  ["5.0.0", "^4.9.0", false],
  ["4.8.9", "^4.9.0", false],
  ["0.2.9", "^0.2.3", true],
  ["0.3.0", "^0.2.3", false], // caret on 0.x pins the minor
  ["0.0.4", "^0.0.3", false], // caret on 0.0.x pins the patch
  ["4.10.0-rc.1", "^4.9.0", false], // a prerelease never satisfies a release caret
  ["4.9.0", "^4.9.0-rc.1", true],
  ["4.9.0-rc.1", "^4.9.0-rc.1", true], // an rc tree is uniform and must be green
  ["4.9.0-rc.2", "^4.9.0-rc.1", true],
  ["4.9.0-rc.10", "^4.9.0-rc.9", true], // numeric, not lexical
  ["4.9.0-rc.1", "^4.9.0-rc.2", false],
  ["4.10.0-rc.1", "^4.9.0-rc.1", false], // prerelease of a DIFFERENT core
  ["4.9.0", "4.9.0", true],
  ["4.9.1", "4.9.0", false],
  ["4.9.0", "*", true],
  ["4.9.0", "workspace:^", true],
  ["4.9.0", "~4.9.0", null],
  ["4.9.0", ">=4.9.0", null],
  ["4.9.0", "4.x", null],
  ["4.9.0", "^4.9", null], // partial: not a shape the generator writes
  ["4.9.0", "latest", null],
  // an alias spec: refused, and it also proves `workspace:` is matched as a PREFIX, not searched
  // for anywhere in the string
  ["4.9.0", "npm:@girs/workspace-1.0@4.9.0", null],
  ["4.9.0", "", null],
  ["v4.9.0", "^4.9.0", null], // the version side is parsed just as strictly
];

const SILENT = { log: () => {}, error: () => {} };

/** Set in the child spawned below, so it runs the check instead of spawning a child of its own. */
const SELFTEST_CHILD = "GIRS_CLOSURE_SELFTEST_CHILD";

/**
 * Synthetic trees on disk, run through the REAL reader and the REAL decision, carrying every
 * finding this script can make and every field it claims to read: dangling edges reached through
 * each of the three runtime fields, an unsatisfied range, a corrupt manifest, a manifest with no
 * name, two directories claiming one name, a directory that is not a package -- plus a legal
 * cycle, which must come back as a cycle and not as a problem, and a dev-only dangling edge,
 * which must not come back at all: `devDependencies` do not travel with a published package.
 */
function syntheticTreeFailures() {
  const root = mkdtempSync(join(tmpdir(), "girs-closure-selftest-"));
  const broken = join(root, "broken");
  const healthy = join(root, "healthy");
  const write = (dir, name, manifest) => {
    mkdirSync(join(dir, name), { recursive: true });
    writeFileSync(join(dir, name, "package.json"), manifest);
  };
  const manifest = (name, fields) =>
    JSON.stringify({ name: `@girs/${name}`, version: "4.9.0", ...fields });
  const deps = (dependencies) => ({ dependencies });
  try {
    write(broken, "glib-2.0", manifest("glib-2.0", deps({ "@girs/gobject-2.0": "^4.9.0" })));
    write(broken, "gobject-2.0", manifest("gobject-2.0", deps({ "@girs/glib-2.0": "^4.9.0" })));
    // dangling: nothing emits @girs/pango-1.0 in this tree
    const gtk = { "@girs/pango-1.0": "^4.9.0", "@girs/glib-2.0": "^4.9.0" };
    write(broken, "gtk-4.0", manifest("gtk-4.0", deps(gtk)));
    // unsatisfied: gtk-4.0 is there, at 4.9.0, and ^4.10.0 does not accept it
    write(broken, "adw-1", manifest("adw-1", deps({ "@girs/gtk-4.0": "^4.10.0" })));
    // a shape `satisfied()` does not decide must become a FINDING, not a pass: refusing it in the
    // predicate is only half the claim, the gate has to carry it out to the exit code
    write(broken, "gdkpixbuf-2.0", manifest("gdkpixbuf-2.0", deps({ "@girs/glib-2.0": "~4.9.0" })));
    // the other two runtime fields reach the registry too, so they are read and must be caught
    const peer = { peerDependencies: { "@girs/peeronly-1.0": "^4.9.0" } };
    write(broken, "soup-3.0", manifest("soup-3.0", peer));
    const optional = { optionalDependencies: { "@girs/optonly-1.0": "^4.9.0" } };
    write(broken, "gdk-4.0", manifest("gdk-4.0", optional));
    // ...and devDependencies do NOT: an installed package never pulls them
    const dev = { devDependencies: { "@girs/devonly-1.0": "^4.9.0" } };
    write(broken, "gio-2.0", manifest("gio-2.0", dev));
    write(broken, "gsk-4.0", "{ not json");
    write(broken, "nameless", JSON.stringify({ version: "4.9.0" }));
    write(broken, "adw-1-again", manifest("adw-1", deps({ "@girs/gtk-4.0": "^4.10.0" })));
    mkdirSync(join(broken, "sdk"));

    write(healthy, "glib-2.0", manifest("glib-2.0", deps({ "@girs/gobject-2.0": "^4.9.0" })));
    write(healthy, "gobject-2.0", manifest("gobject-2.0", deps({ "@girs/glib-2.0": "^4.9.0" })));

    const tree = readTree(broken);
    const failures = [];
    const kinds = closureProblems(tree.packages)
      .map((p) => `${p.kind}:${p.package}->${p.dependency}`)
      .sort();
    const expected = [
      "dangling:@girs/gdk-4.0->@girs/optonly-1.0",
      "dangling:@girs/gtk-4.0->@girs/pango-1.0",
      "dangling:@girs/soup-3.0->@girs/peeronly-1.0",
      "unknown-range:@girs/gdkpixbuf-2.0->@girs/glib-2.0",
      "unsatisfied:@girs/adw-1->@girs/gtk-4.0",
    ];
    if (JSON.stringify(kinds) !== JSON.stringify(expected)) {
      failures.push(`problems: expected ${JSON.stringify(expected)}, got ${JSON.stringify(kinds)}`);
    }
    // Directory order is the filesystem's, so match on what each finding says, not on position.
    const says = (text) => tree.broken.filter((line) => line.includes(text)).length;
    if (tree.broken.length !== 3) {
      failures.push(`expected 3 unreadable manifests, got ${JSON.stringify(tree.broken)}`);
    }
    if (says("gsk-4.0") !== 1) failures.push("a corrupt manifest must be named");
    if (says("has no string") !== 1) failures.push("a manifest without a name must be named");
    if (says("already declared by another directory") !== 1) {
      failures.push("two directories claiming one package name must be named");
    }
    if (JSON.stringify(tree.skipped) !== '["sdk"]') {
      failures.push(`a manifest-less directory is skipped, got ${JSON.stringify(tree.skipped)}`);
    }
    const found = cycles(tree.packages);
    if (JSON.stringify(found) !== '[["@girs/glib-2.0","@girs/gobject-2.0"]]') {
      failures.push(`expected the one glib/gobject cycle, got ${JSON.stringify(found)}`);
    }
    // The exit code itself, in both directions -- a gate that cannot go red, and one that cannot
    // go green, are the same defect seen from two sides.
    const code = (dir) => checkTree(dir, SILENT);
    if (code(broken) !== 1) failures.push("a tree with findings must exit non-zero");
    if (code(healthy) !== 0) failures.push("a healthy tree must exit zero");
    if (code(join(broken, "sdk")) !== 1) failures.push("a tree holding no packages must exit non-zero");
    if (code(join(root, "not-generated")) !== 1) {
      failures.push("an unreadable directory must exit non-zero");
    }
    // `checkTree` RETURNING 1 and the PROCESS exiting 1 are two different facts, and the line that
    // joins them is unreachable from here: running it would end this run. So prove it once from
    // outside -- one child, pointed at the broken tree above, which has to come back non-zero AND
    // say why. Deleting that line leaves a script that still prints every finding and exits 0,
    // which is the quietest way this whole file could fail. The child sees SELFTEST_CHILD and
    // skips this branch, so the spawn cannot recurse.
    if (!process.env[SELFTEST_CHILD]) {
      const child = spawnSync(
        process.execPath,
        ["--no-warnings", fileURLToPath(import.meta.url), broken],
        { encoding: "utf8", env: { ...process.env, [SELFTEST_CHILD]: "1" } },
      );
      if (child.error) {
        failures.push(`could not spawn the exit-code child: ${child.error.message}`);
      } else if (child.status !== 1 || !child.stderr.includes("finding(s)")) {
        const saw = `exit ${child.status}, signal ${child.signal}`;
        failures.push(`a child over a broken tree must exit 1 naming its findings; saw ${saw}`);
      }
    }
    return failures;
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

const selfTestFailures = RANGE_VECTORS.filter(([v, r, want]) => satisfied(v, r) !== want).map(
  ([v, r, want]) =>
    `satisfied(${v}, ${JSON.stringify(r)}): expected ${want}, got ${satisfied(v, r)}`,
);
selfTestFailures.push(...syntheticTreeFailures());
if (selfTestFailures.length > 0) {
  console.error("check-dependency-closure: SELF-TEST failed — the check itself is broken:");
  for (const failure of selfTestFailures) console.error(`  - ${failure}`);
  process.exit(1);
}
console.log(
  `🧪 closure self-test green — ${RANGE_VECTORS.length} range vectors; two synthetic trees: ` +
    "5 broken edges caught across all three runtime fields, 3 unreadable manifests named, " +
    "1 dev-only edge ignored, 1 legal cycle left alone, the exit code checked both ways" +
    // The child skips the spawn, so it must not print the claim the spawn earns.
    (process.env[SELFTEST_CHILD]
      ? " — and this run IS that child"
      : ", and one child proving a broken tree really does exit non-zero"),
);

// --- The tree ----------------------------------------------------------------

// Exit only on a finding, so the exports stay importable on a healthy tree -- the same shape the
// sibling `scripts/check-*.mjs` use.
const exitCode = checkTree(process.argv[2] ?? "./types-dev", console);
if (exitCode !== 0) process.exit(exitCode);
