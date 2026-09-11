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
// `readdir` order and 508 of 716 packages were published before something they depend on existed.
//
// Usage: node scripts/check-dependency-closure.mjs [dir]   (default: ./types-dev)

import { mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const RUNTIME_FIELDS = ["dependencies", "peerDependencies", "optionalDependencies"];

/** Read the `package.json` of every direct subdirectory into `{ name, version, dependencies }`. */
function readTree(dir) {
  const packages = new Map();
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith(".")) continue;
    let manifest;
    try {
      manifest = JSON.parse(readFileSync(join(dir, entry.name, "package.json"), "utf8"));
    } catch {
      continue; // not a package directory
    }
    if (typeof manifest.name !== "string" || typeof manifest.version !== "string") continue;
    const dependencies = {};
    for (const field of RUNTIME_FIELDS) {
      for (const [name, range] of Object.entries(manifest[field] ?? {})) {
        if (typeof range === "string") dependencies[name] = range;
      }
    }
    packages.set(manifest.name, { name: manifest.name, version: manifest.version, dependencies });
  }
  return packages;
}

/**
 * Does `version` satisfy `range`, for the range shapes this generator emits?
 *
 * `workspace:` refs never reach a registry and are resolved by the package manager, so they are
 * out of scope here. Anything else unrecognised is REFUSED rather than assumed to match: a range
 * shape nobody anticipated must make this loud, not silently green.
 */
function satisfied(version, range) {
  if (range === "*" || range === "" || range.startsWith("workspace:")) return true;
  if (range === version) return true;
  if (range.startsWith("^")) {
    const [wantMajor, wantMinor = "0", wantPatch = "0"] = range.slice(1).split(".");
    const [haveMajor, haveMinor = "0", havePatch = "0"] = version.split(".");
    if (wantMajor !== haveMajor) return false;
    const want = [Number(wantMinor), Number(wantPatch)];
    const have = [Number(haveMinor), Number(havePatch)];
    return have[0] > want[0] || (have[0] === want[0] && have[1] >= want[1]);
  }
  return null; // "I do not know", which is not the same as "no"
}

/** The findings, as data, so the self-test can run the real thing. */
export function closureProblems(packages) {
  const problems = [];
  for (const pkg of packages.values()) {
    for (const [dep, range] of Object.entries(pkg.dependencies)) {
      if (!dep.startsWith("@girs/")) continue;
      const sibling = packages.get(dep);
      if (!sibling) {
        problems.push({ kind: "dangling", package: pkg.name, dependency: dep, range });
        continue;
      }
      const ok = satisfied(sibling.version, range);
      if (ok === null) {
        problems.push({ kind: "unknown-range", package: pkg.name, dependency: dep, range });
      } else if (!ok) {
        problems.push({ kind: "unsatisfied", package: pkg.name, dependency: dep, range, have: sibling.version });
      }
    }
  }
  return problems;
}

/** Strongly connected components (Tarjan, iterative) -- reported, never assumed away. */
export function cycles(packages) {
  const graph = new Map(
    [...packages.values()].map((pkg) => [
      pkg.name,
      new Set(Object.keys(pkg.dependencies).filter((d) => d !== pkg.name && packages.has(d))),
    ]),
  );
  const index = new Map();
  const low = new Map();
  const onStack = new Set();
  const stack = [];
  const out = [];
  let counter = 0;

  for (const root of graph.keys()) {
    if (index.has(root)) continue;
    const work = [{ node: root, edges: [...graph.get(root)], cursor: 0 }];
    index.set(root, counter);
    low.set(root, counter++);
    stack.push(root);
    onStack.add(root);
    while (work.length > 0) {
      const frame = work.at(-1);
      if (frame.cursor < frame.edges.length) {
        const next = frame.edges[frame.cursor++];
        if (!index.has(next)) {
          index.set(next, counter);
          low.set(next, counter++);
          stack.push(next);
          onStack.add(next);
          work.push({ node: next, edges: [...graph.get(next)], cursor: 0 });
        } else if (onStack.has(next)) {
          low.set(frame.node, Math.min(low.get(frame.node), index.get(next)));
        }
        continue;
      }
      work.pop();
      if (low.get(frame.node) === index.get(frame.node)) {
        const component = [];
        let member;
        do {
          member = stack.pop();
          onStack.delete(member);
          component.push(member);
        } while (member !== frame.node);
        if (component.length > 1) out.push(component.sort());
      }
      const parent = work.at(-1);
      if (parent) low.set(parent.node, Math.min(low.get(parent.node), low.get(frame.node)));
    }
  }
  return out;
}

/**
 * A check that has never been red is not a check.
 *
 * Both failure modes are synthesised on disk and run through the REAL reader, so the thing under
 * test is the one that runs in CI -- not a hand-built object that skips `readTree`.
 */
function selfTest() {
  const dir = mkdtempSync(join(tmpdir(), "girs-closure-selftest-"));
  const write = (name, manifest) => {
    mkdirSync(join(dir, name), { recursive: true });
    writeFileSync(join(dir, name, "package.json"), JSON.stringify(manifest));
  };
  try {
    write("glib-2.0", { name: "@girs/glib-2.0", version: "4.9.0", dependencies: { "@girs/gobject-2.0": "^4.9.0" } });
    write("gobject-2.0", { name: "@girs/gobject-2.0", version: "4.9.0", dependencies: { "@girs/glib-2.0": "^4.9.0" } });
    write("gtk-4.0", {
      name: "@girs/gtk-4.0",
      version: "4.9.0",
      // dangling: nothing emits @girs/pango-1.0 in this tree
      dependencies: { "@girs/pango-1.0": "^4.9.0", "@girs/glib-2.0": "^4.9.0" },
    });
    write("adw-1", {
      name: "@girs/adw-1",
      version: "4.9.0",
      // unsatisfied: gtk-4.0 is there, at 4.9.0, and ^4.10.0 does not accept it
      dependencies: { "@girs/gtk-4.0": "^4.10.0" },
    });

    const tree = readTree(dir);
    const problems = closureProblems(tree);
    const kinds = problems.map((p) => `${p.kind}:${p.package}->${p.dependency}`).sort();
    const expected = ["dangling:@girs/gtk-4.0->@girs/pango-1.0", "unsatisfied:@girs/adw-1->@girs/gtk-4.0"];
    if (JSON.stringify(kinds) !== JSON.stringify(expected)) {
      throw new Error(`self-test: expected ${JSON.stringify(expected)}, got ${JSON.stringify(kinds)}`);
    }
    // …and the mutual glib/gobject pair is a CYCLE, not a problem: it is legal, and a check that
    // flagged it would be red on every correct tree.
    const found = cycles(tree);
    if (found.length !== 1 || found[0].length !== 2) {
      throw new Error(`self-test: expected one 2-member cycle, got ${JSON.stringify(found)}`);
    }
    if (problems.some((p) => p.dependency === "@girs/gobject-2.0" || p.dependency === "@girs/glib-2.0")) {
      throw new Error("self-test: a legal cycle was reported as a problem");
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
  console.log("🧪 closure self-test green — 2 broken trees caught, 1 legal cycle left alone");
}

selfTest();

const dir = process.argv[2] ?? "./types-dev";
let tree;
try {
  tree = readTree(dir);
} catch (error) {
  console.error(`❌ cannot read ${dir}: ${error.message}`);
  console.error("   Generate the types first: gjsify run build:types");
  process.exit(1);
}

if (tree.size === 0) {
  // An empty tree passing every assertion is the classic green that checked nothing. The
  // submodule is probably not initialised.
  console.error(`❌ ${dir} holds no packages — nothing was checked.`);
  console.error("   git submodule update --init types-dev && gjsify run build:types");
  process.exit(1);
}

const problems = closureProblems(tree);
const found = cycles(tree);

console.log(`📦 ${dir}: ${tree.size} packages`);
for (const component of found) {
  console.log(`🔁 dependency cycle (${component.length}): ${component.join(", ")}`);
}
console.log(
  found.length === 0
    ? "   no cycles — the set can be published one package at a time"
    : "   cycles publish as one group; see PUBLISHING.md",
);

if (problems.length > 0) {
  for (const problem of problems) {
    const detail =
      problem.kind === "dangling"
        ? "no package in this tree provides it"
        : problem.kind === "unknown-range"
          ? "range shape not recognised — teach `satisfied()` or fix the generator"
          : `the tree has ${problem.have}`;
    console.error(`❌ ${problem.package} declares ${problem.dependency}@${problem.range} — ${detail}`);
  }
  console.error(`\n${problems.length} package(s) in ${dir} could not be installed as published.`);
  process.exit(1);
}

console.log(`✅ every @girs dependency resolves inside ${dir}`);
