#!/usr/bin/env node
/**
 * The vocabulary cost figures in `AGENTS.md`, re-derived from the tree and held to it.
 *
 * WHY THIS EXISTS, measured rather than supposed. In #476 the same figures had to be
 * re-derived by hand twice. Round 1 matched because nothing had changed since they were
 * written. Round 2 DRIFTED, and not through carelessness: the numbers were measured, then
 * `PROVENANCE.requiredVocabularies` landed in the same pull request, and nobody re-measured.
 * The prose said 28.60 MB / 222.9 MB; the tree said 29.23 MB / 223.5 MB. An independent
 * reviewer caught it. Nothing in this repository could have.
 *
 * A second defect rode along and is the one a gate prevents outright: the grew/shrank split
 * was computed over the `.d.ts` alone while the net beside it covered both halves, so one
 * sentence described two populations. That is why every figure here names its half.
 *
 * WHAT IT CHECKS, and what it deliberately does not. The three ABSOLUTE figures — how many
 * vocabularies, how many bytes they are, how big the tree is — are properties of the tree as
 * it stands, so they are derived and compared bidirectionally: a stated figure the tree
 * contradicts fails, and so does a sentence that no longer states one. The grew/shrank split
 * is a DELTA between two trees and no single checkout holds both; it is checked only when
 * `--baseline <git-ref>` names the other one, and reported as unchecked otherwise rather than
 * silently passing. An unchecked half that reads like a checked one is the shape this script
 * exists to end.
 *
 * Usage: node scripts/check-vocabulary-cost.mjs [--types <dir>] [--doc <file>] [--json]
 *                                               [--baseline <git-ref>] [--write]
 */
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const argv = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const value = argv[i + 1];
  if (value === undefined || value.startsWith("--")) {
    console.error(`check-vocabulary-cost: --${name} needs a value`);
    process.exit(2);
  }
  return value;
};
const has = (name) => argv.includes(`--${name}`);
for (const arg of argv) {
  if (!arg.startsWith("--")) continue;
  const name = arg.slice(2);
  if (["types", "doc", "baseline", "json", "write"].includes(name)) continue;
  console.error(`check-vocabulary-cost: unknown argument ${arg}`);
  process.exit(2);
}

const typesDir = join(root, flag("types", "types-dev"));
const docPath = join(root, flag("doc", "AGENTS.md"));
if (!existsSync(typesDir)) {
  console.error(
    `check-vocabulary-cost: ${relative(root, typesDir)} does not exist — is the submodule initialised?`,
  );
  process.exit(2);
}

/** Every vocabulary in the tree, as `{ ns, dts, js }` byte counts. */
const vocabularies = [];
let treeBytes = 0;
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") continue;
      walk(path);
      continue;
    }
    if (!entry.isFile()) continue;
    treeBytes += statSync(path).size;
  }
};
walk(typesDir);
for (const entry of readdirSync(typesDir, { withFileTypes: true })) {
  if (!entry.isDirectory() || entry.name === "node_modules" || entry.name === ".git") continue;
  const js = join(typesDir, entry.name, `${entry.name}-vocabulary.js`);
  const dts = join(typesDir, entry.name, `${entry.name}-vocabulary.d.ts`);
  if (!existsSync(js) && !existsSync(dts)) continue;
  vocabularies.push({
    ns: entry.name,
    js: existsSync(js) ? statSync(js).size : 0,
    dts: existsSync(dts) ? statSync(dts).size : 0,
  });
}

// A tree with no vocabulary in it is not a tree with 0 MB of them, it is a tree nobody
// generated — `types-dev` is a submodule whose pin carries none, so a plain checkout is exactly
// that. Reporting 0 against a stated 627 reads like the figures are wrong; passing would be
// worse, because the gate would be green having measured nothing. Exit 2 says "could not
// measure", which is neither.
if (vocabularies.length === 0) {
	console.error(
		`check-vocabulary-cost: ${relative(root, typesDir)} holds no vocabulary — the figures describe a ` +
			"GENERATED tree, and this one has not been. Run `gjsify run build:types` first, or point " +
			"--types at a tree that has one. NOT measured, and therefore neither passed nor failed.",
	);
	process.exit(2);
}

const sum = (pick) => vocabularies.reduce((n, v) => n + pick(v), 0);
const emitted = { both: sum((v) => v.js + v.dts), js: sum((v) => v.js), dts: sum((v) => v.dts) };
const mb = (bytes) => bytes / 1_000_000;
const round = (value, digits) => Number(value.toFixed(digits));

const derived = {
  vocabularies: vocabularies.length,
  emittedMB: round(mb(emitted.both), 2),
  treeMB: round(mb(treeBytes), 1),
  emittedJsMB: round(mb(emitted.js), 2),
  emittedDtsMB: round(mb(emitted.dts), 2),
};

/** The `.js`/`.d.ts` byte counts of every vocabulary at a git ref of the types submodule. */
const baselineSizes = (ref) => {
  const out = execFileSync("git", ["-C", typesDir, "ls-tree", "-r", "-l", ref], {
    encoding: "utf8",
    maxBuffer: 1 << 28,
  });
  const sizes = new Map();
  for (const line of out.split("\n")) {
    const match = /^\d+ blob [0-9a-f]+\s+(\d+)\t(.+)$/.exec(line);
    if (!match) continue;
    const [, size, path] = match;
    const hit = /^([^/]+)\/\1-vocabulary\.(js|d\.ts)$/.exec(path);
    if (!hit) continue;
    const entry = sizes.get(hit[1]) ?? { js: 0, dts: 0 };
    entry[hit[2] === "js" ? "js" : "dts"] = Number(size);
    sizes.set(hit[1], entry);
  }
  return sizes;
};

let delta = null;
const baseline = flag("baseline", undefined);
if (baseline !== undefined) {
  const before = baselineSizes(baseline);
  const halves = { both: (v) => v.js + v.dts, dts: (v) => v.dts, js: (v) => v.js };
  delta = {};
  for (const [half, pick] of Object.entries(halves)) {
    let grew = 0;
    let shrank = 0;
    let net = 0;
    for (const v of vocabularies) {
      const was = before.get(v.ns);
      if (!was) continue; // new, not "grew" — the split is about the PRE-EXISTING ones
      const diff = pick(v) - pick(was);
      net += diff;
      if (diff > 0) grew++;
      else if (diff < 0) shrank++;
    }
    delta[half] = { preexisting: before.size, grew, shrank, netKB: round(net / 1000, 1) };
  }
}

const report = { ...derived, baseline: baseline ?? null, delta };
if (has("json")) {
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  process.exit(0);
}

// The sentence the figures live in. Its shape is the contract; a rewrite that drops a figure
// fails here rather than quietly stopping being checked.
const doc = readFileSync(docPath, "utf8");
//
// It reads the AS IT STANDS line, deliberately NOT the `142 → 627` before/after sentence
// beside it. That one records what one change did and is history: rewriting its "after" to
// today's number would make it claim a byte count that change never produced. A record and a
// measurement are two different sentences, and only the second is derivable.
const stated = {
  vocabularies: /as it stands: vocabularies (\d+)/.exec(doc),
  emittedMB: /as it stands: vocabularies \d+, emitted ([\d.]+) MB/.exec(doc),
  treeMB: /as it stands: vocabularies \d+, emitted [\d.]+ MB, tree ([\d.]+) MB/.exec(doc),
};

const problems = [];
for (const [key, match] of Object.entries(stated)) {
  if (!match) {
    problems.push(
      `${relative(root, docPath)} no longer states a "${key}" figure — the gate reads that sentence, so removing it removes the check`,
    );
    continue;
  }
  const said = Number(match[1]);
  if (said !== derived[key]) {
    problems.push(`${relative(root, docPath)} says ${key} ${said}, the tree holds ${derived[key]}`);
  }
}

if (has("write") && problems.length > 0) {
  let next = doc;
  next = next.replace(
    /as it stands: vocabularies \d+, emitted [\d.]+ MB, tree [\d.]+ MB/,
    `as it stands: vocabularies ${derived.vocabularies}, emitted ${derived.emittedMB} MB, tree ${derived.treeMB} MB`,
  );
  writeFileSync(docPath, next);
  console.log(
    "check-vocabulary-cost: rewrote the stated figures — re-read the sentence, the PROSE around them is not derived",
  );
  process.exit(0);
}

const line =
  `check-vocabulary-cost: ${derived.vocabularies} vocabularies, ${derived.emittedMB} MB emitted ` +
  `(${derived.emittedDtsMB} MB .d.ts + ${derived.emittedJsMB} MB .js), tree ${derived.treeMB} MB`;

if (problems.length > 0) {
  console.error("check-vocabulary-cost: FAILED\n");
  for (const p of problems) console.error(`  - ${p}`);
  console.error(`\n  ${line}`);
  console.error("\n  Re-measure and write it down: node scripts/check-vocabulary-cost.mjs --write");
  process.exit(1);
}

console.log(line);
if (delta === null) {
  console.log(
    "check-vocabulary-cost: the grew/shrank split is a DELTA and no single tree holds both sides — " +
      "pass --baseline <git-ref of the types submodule> to check it. It is UNCHECKED here.",
  );
} else {
  for (const [half, d] of Object.entries(delta)) {
    console.log(
      `  vs ${baseline} over ${half}: ${d.grew} grew / ${d.shrank} shrank of ${d.preexisting} pre-existing, net ${d.netKB >= 0 ? "+" : ""}${d.netKB} kB`,
    );
  }
}
