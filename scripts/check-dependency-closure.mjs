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
  ["4.9.0", "", null],
  ["v4.9.0", "^4.9.0", null], // the version side is parsed just as strictly
];

/**
 * One synthetic tree on disk, run through the REAL reader, carrying every finding this script can
 * make: a dangling edge, an unsatisfied range, a corrupt manifest, a directory that is not a
 * package -- and a legal cycle, which must come back as a cycle and not as a problem.
 */
function syntheticTreeFailures() {
  const dir = mkdtempSync(join(tmpdir(), "girs-closure-selftest-"));
  const write = (name, manifest) => {
    mkdirSync(join(dir, name), { recursive: true });
    writeFileSync(join(dir, name, "package.json"), manifest);
  };
  const manifest = (name, dependencies) =>
    JSON.stringify({ name: `@girs/${name}`, version: "4.9.0", dependencies });
  try {
    write("glib-2.0", manifest("glib-2.0", { "@girs/gobject-2.0": "^4.9.0" }));
    write("gobject-2.0", manifest("gobject-2.0", { "@girs/glib-2.0": "^4.9.0" }));
    // dangling: nothing emits @girs/pango-1.0 in this tree
    write(
      "gtk-4.0",
      manifest("gtk-4.0", { "@girs/pango-1.0": "^4.9.0", "@girs/glib-2.0": "^4.9.0" }),
    );
    // unsatisfied: gtk-4.0 is there, at 4.9.0, and ^4.10.0 does not accept it
    write("adw-1", manifest("adw-1", { "@girs/gtk-4.0": "^4.10.0" }));
    write("gsk-4.0", "{ not json");
    mkdirSync(join(dir, "sdk"));

    const tree = readTree(dir);
    const failures = [];
    const kinds = closureProblems(tree.packages)
      .map((p) => `${p.kind}:${p.package}->${p.dependency}`)
      .sort();
    const expected = [
      "dangling:@girs/gtk-4.0->@girs/pango-1.0",
      "unsatisfied:@girs/adw-1->@girs/gtk-4.0",
    ];
    if (JSON.stringify(kinds) !== JSON.stringify(expected)) {
      failures.push(`problems: expected ${JSON.stringify(expected)}, got ${JSON.stringify(kinds)}`);
    }
    if (tree.broken.length !== 1 || !tree.broken[0].includes("gsk-4.0")) {
      failures.push(`a corrupt manifest must be named, got ${JSON.stringify(tree.broken)}`);
    }
    if (JSON.stringify(tree.skipped) !== '["sdk"]') {
      failures.push(`a manifest-less directory is skipped, got ${JSON.stringify(tree.skipped)}`);
    }
    const found = cycles(tree.packages);
    if (JSON.stringify(found) !== '[["@girs/glib-2.0","@girs/gobject-2.0"]]') {
      failures.push(`expected the one glib/gobject cycle, got ${JSON.stringify(found)}`);
    }
    return failures;
  } finally {
    rmSync(dir, { recursive: true, force: true });
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
  `🧪 closure self-test green — ${RANGE_VECTORS.length} range vectors; one synthetic tree: ` +
    "2 broken edges caught, 1 corrupt manifest named, 1 legal cycle left alone",
);

// --- The tree ----------------------------------------------------------------

const DETAIL = {
  dangling: () => "no package in this tree provides it",
  "unknown-range": () => "range shape not recognised — teach `satisfied()` or fix the generator",
  unsatisfied: (problem) => `the tree has ${problem.have}`,
};

const dir = process.argv[2] ?? "./types-dev";
let tree;
try {
  tree = readTree(dir);
} catch (error) {
  console.error(`❌ cannot read ${dir}: ${error.message}`);
  console.error("   Generate the types first: gjsify run build:types");
  process.exit(1);
}

for (const broken of tree.broken) console.error(`❌ ${broken}`);

if (tree.packages.size === 0) {
  // An empty tree passing every assertion is the classic green that checked nothing. The
  // submodule is probably not initialised.
  console.error(`❌ ${dir} holds no packages — nothing was checked.`);
  console.error("   git submodule update --init types-dev && gjsify run build:types");
  process.exit(1);
}

console.log(`📦 ${dir}: ${tree.packages.size} packages`);
if (tree.skipped.length > 0) {
  const names = tree.skipped.join(", ");
  console.log(`   skipped ${tree.skipped.length} without a package.json: ${names}`);
}
const found = cycles(tree.packages);
for (const component of found) {
  console.log(`🔁 dependency cycle (${component.length}): ${component.join(", ")}`);
}
console.log(
  found.length === 0
    ? "   no cycles — the set can be published one package at a time"
    : "   cycles publish as one group; see PUBLISHING.md",
);

const problems = closureProblems(tree.packages);
for (const problem of problems) {
  const edge = `${problem.package} declares ${problem.dependency}@${problem.range}`;
  console.error(`❌ ${edge} — ${DETAIL[problem.kind](problem)}`);
}
if (problems.length > 0 || tree.broken.length > 0) {
  const count = problems.length + tree.broken.length;
  console.error(`\n${count} finding(s): ${dir} could not be installed as published.`);
  process.exit(1);
}

console.log(`✅ every @girs dependency resolves inside ${dir}`);
