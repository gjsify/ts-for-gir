#!/usr/bin/env node
// The publish path must be ABLE to notice a publish that never landed, and the step that
// publishes must run the same CLI it reports.
//
// WHY. v5.1.0 (run 34899018849) reported SUCCESS and printed npm's `+ <pkg>@5.1.0` marker
// for all twelve packages; three never reached the registry. `gjsify publish` has read back
// what it PUT since @gjsify/cli 0.47.0 (gjsify#1509) -- but the job published with 0.44.0,
// because both manifests pinned `^0.44.0` and a caret on a 0.x version means
// `>=0.44.0 <0.45.0`. No lockfile refresh could ever have crossed that gap. Meanwhile a
// step of its own printed `gjsify --version` -> 0.51.1, the BOOTSTRAPPED CLI, which the
// `PATH="$WS_PATH/node_modules/.bin:$PATH"` prefix on the publish step then overrode.
//
// Two separate failures, so two separate rules, each of which would have caught it alone:
//
//   1. A `@gjsify/cli` range that cannot resolve to the read-back release. This is the
//      root cause, and it is visible without running anything.
//   2. A publishing step that does not state, in its own shell, which binary is about to
//      publish -- and one that lets the publish command carry its own `PATH=` prefix, so
//      the statement and the publish could resolve different binaries again.
//
// `assert-publish-cli.mjs` is the runtime half; this is the half that runs in `check`.
//
// Usage: node --no-warnings scripts/check-publish-cli.mjs

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { MIN_CLI_VERSION, isAtLeast, parseVersion } from "./assert-publish-cli.mjs";

const ROOT = process.cwd();
const GUARD = "scripts/assert-publish-cli.mjs";

/** Manifests whose `@gjsify/cli` range decides what the release job can install. */
const MANIFESTS = ["package.json", "packages/cli/package.json"];

// --- Rule 1: the declared range must be able to reach the floor -------------

/**
 * Could `range` ever resolve to a version at or above `floor`? Only the forms this
 * repository uses are decided; anything unrecognised is admitted rather than guessed at,
 * because a check that invents a verdict is worse than one that declines.
 */
export function rangeAdmits(range, floor) {
  const spec = String(range ?? "").trim();
  if (spec === "" || spec === "*" || spec === "latest") return true;
  if (spec.startsWith("workspace:")) return true;
  if (/^(>=?|\|\||\s)/.test(spec)) return true; // unbounded above, or a union we do not parse

  const parsed = parseVersion(spec);
  if (!parsed) return true;
  const { major, minor } = parsed;

  // `^0.y.z` is `>=0.y.z <0.(y+1).0`; `^x.y.z` (x>0) is `>=x.y.z <(x+1).0.0`.
  if (spec.startsWith("^")) {
    const upper = major === 0 ? `0.${minor + 1}.0` : `${major + 1}.0.0`;
    return isAtLeast(upper, floor) && upper !== floor;
  }
  // `~x.y.z` is `>=x.y.z <x.(y+1).0`.
  if (spec.startsWith("~")) {
    const upper = `${major}.${minor + 1}.0`;
    return isAtLeast(upper, floor) && upper !== floor;
  }
  // A bare version pins exactly one release.
  return isAtLeast(spec, floor);
}

/** @returns {string[]} one line per problem. */
export function pinProblems(manifests, floor) {
  const found = [];
  for (const { file, json } of manifests) {
    const pkg = JSON.parse(json);
    for (const field of ["dependencies", "devDependencies"]) {
      const range = pkg[field]?.["@gjsify/cli"];
      if (range === undefined) continue;
      if (rangeAdmits(range, floor)) continue;
      found.push(
        `${file} pins \`@gjsify/cli\`: "${range}", which can never resolve to ${floor} -- the ` +
          "release that made `gjsify publish` read back what it PUT (gjsify#1509). A caret on a " +
          "0.x version does not cross a minor, so the release job would publish with a CLI that " +
          "reports success for a package npm never stored.",
      );
    }
  }
  return found;
}

// --- Rule 2: the publishing step states which binary publishes --------------

/**
 * Every `run:` script in a workflow, block scalars included.
 * @returns {string[]}
 */
export function runBlocks(text) {
  const lines = text.split("\n");
  const blocks = [];
  for (let i = 0; i < lines.length; i++) {
    const match = /^(\s*)(?:-\s+)?run:\s*(\|[-+]?|>[-+]?)?\s*(.*)$/.exec(lines[i]);
    if (!match) continue;
    const [, indent, blockIndicator, inline] = match;
    if (!blockIndicator) {
      if (inline.trim() !== "") blocks.push(inline);
      continue;
    }
    const body = [];
    for (let j = i + 1; j < lines.length; j++) {
      const line = lines[j];
      if (line.trim() === "") {
        body.push("");
        continue;
      }
      const lead = /^\s*/.exec(line)[0].length;
      if (lead <= indent.length) break;
      body.push(line);
    }
    blocks.push(body.join("\n"));
  }
  return blocks;
}

/** Lines that are shell comments are prose, not commands. */
const commandLines = (block) => block.split("\n").filter((l) => !l.trim().startsWith("#"));

/**
 * Command positions in a shell line. A line is not one command: `a && b`, `a; b` and
 * `a | b` each hold several, and only the position a word sits in says whether it is the
 * program being run or an argument to `echo`.
 */
/**
 * Collapse every quoted span to a single opaque token. Quoted text is DATA: a `;` inside
 * `echo "a; b"` does not start a command, and a `gjsify publish` inside one is prose. The
 * token is one non-space character, so a real `PATH="..." gjsify` prefix still reads as an
 * assignment followed by a program.
 */
const collapseQuoted = (line) => line.replace(/"[^"]*"/g, "Q").replace(/'[^']*'/g, "Q");

const commandPositions = (line) => collapseQuoted(line).split(/&&|\|\||;|\|/);

/** A command whose PROGRAM is gjsify, and whose subcommand publishes. */
const PUBLISH_COMMAND = /^\s*(?:[A-Za-z_]\w*=\S*\s+)*gjsify\s+(?:run\s+)?publish\b/;
/** The same command, carrying a `PATH=` of its own -- which scopes PATH to it alone. */
const PATH_PREFIXED_PUBLISH = /^\s*(?:[A-Za-z_]\w*=\S*\s+)*PATH=\S+\s+gjsify\b/;

const publishes = (line) => commandPositions(line).some((c) => PUBLISH_COMMAND.test(c));
const pathPrefixed = (line) => commandPositions(line).some((c) => PATH_PREFIXED_PUBLISH.test(c));

/** @returns {string[]} one line per problem. */
export function guardProblems(workflows) {
  const found = [];
  for (const { file, text } of workflows) {
    for (const block of runBlocks(text)) {
      const lines = commandLines(block);
      const publishAt = lines.findIndex(publishes);
      if (publishAt < 0) continue;

      const guardAt = lines.findIndex((l) => l.includes(GUARD));
      if (guardAt < 0 || guardAt > publishAt) {
        found.push(
          `${file}: a step publishes to npm without running \`${GUARD}\` first in the SAME ` +
            "`run:` block. A separate step cannot vouch for this one -- that is exactly how the " +
            "job came to print one CLI's version and publish with another.",
        );
      }
      const prefixed = lines.filter(pathPrefixed);
      if (prefixed.length > 0) {
        found.push(
          `${file}: a publishing block prefixes \`gjsify\` with its own \`PATH=\` ` +
            `(${prefixed[0].trim()}). That scopes PATH to one command, so the guard and the ` +
            "publish can resolve different binaries. Put the directory on PATH for the whole " +
            "job (`$GITHUB_PATH`) or the whole block (`export PATH=...`) instead.",
        );
      }
    }
  }
  return found;
}

// --- SELF-TEST FIRST: a check that cannot go red is worse than no check. -----

const manifest = (range) => JSON.stringify({ devDependencies: { "@gjsify/cli": range } });
const wf = (body) => `jobs:\n  publish:\n    steps:\n${body}`;
const GOOD_BLOCK = wf(
  `      - name: Publish\n        run: |\n          export PATH="$WS_PATH/node_modules/.bin:$PATH"\n          node --no-warnings ${GUARD}\n          gjsify run publish:app\n`,
);

const PIN_VECTORS = [
  ["the pin that shipped nine of twelve packages", "^0.44.0", 1],
  ["one minor below the floor", "^0.46.0", 1],
  ["the floor itself", "^0.47.0", 0],
  ["the pin this branch lands", "^0.51.1", 0],
  ["a tilde below the floor", "~0.46.9", 1],
  ["an exact version below the floor", "0.44.0", 1],
  ["an exact version at the floor", "0.47.0", 0],
  ["an open lower bound is unbounded above", ">=0.44.0", 0],
  ["a wildcard admits anything", "*", 0],
  ["a future major clears it", "^1.2.3", 0],
];

const GUARD_VECTORS = [
  [
    "the incident itself -- a bare prefixed publish",
    wf('      - run: PATH="$W/node_modules/.bin:$PATH" gjsify run publish:app\n'),
    2,
  ],
  ["the fix -- guard first, one PATH for the block", GOOD_BLOCK, 0],
  [
    "a guard AFTER the publish vouches for nothing",
    wf(`      - run: |\n          gjsify run publish:app\n          node --no-warnings ${GUARD}\n`),
    1,
  ],
  [
    "a guard in a step of its own is a different shell",
    wf(`      - run: node --no-warnings ${GUARD}\n      - run: gjsify run publish:app\n`),
    1,
  ],
  [
    "a PATH prefix beside a correct guard still diverges",
    wf(
      `      - run: |\n          node --no-warnings ${GUARD}\n          PATH="$W/node_modules/.bin:$PATH" gjsify run publish:app\n`,
    ),
    1,
  ],
  [
    "a build step is not a publish step",
    wf('      - run: PATH="$W/node_modules/.bin:$PATH" gjsify run build:app\n'),
    0,
  ],
  [
    "`gjsify publish` called directly counts as publishing",
    wf("      - run: |\n          gjsify publish --trusted\n"),
    1,
  ],
  [
    "a publish named only in a COMMENT is not a publish",
    wf(
      "      - run: |\n          # gjsify run publish:app happens in release-app.yml\n          gjsify run build:app\n",
    ),
    0,
  ],
  [
    "a publish ECHOED in a summary is prose, not a command",
    wf(
      '      - run: |\n          echo "npm: published @ts-for-gir/* (confirmed by gjsify publish)"\n',
    ),
    0,
  ],
  [
    "a `;` INSIDE a quoted string does not open a command position",
    wf('      - run: |\n          echo "published; gjsify publish confirmed on the registry"\n'),
    0,
  ],
  [
    "collapsing quotes must not hide a real PATH prefix",
    wf(
      `      - run: |\n          node --no-warnings ${GUARD}\n          PATH="$W/node_modules/.bin:$PATH" gjsify run publish:app\n`,
    ),
    1,
  ],
  [
    "a publish chained after another command still counts",
    wf(
      `      - run: |\n          node --no-warnings ${GUARD}\n          gjsify run build:app && gjsify run publish:app\n`,
    ),
    0,
  ],
  [
    "the same chain without the guard does not",
    wf("      - run: |\n          gjsify run build:app && gjsify run publish:app\n"),
    1,
  ],
];

const selfTestFailures = [];
for (const [label, range, expected] of PIN_VECTORS) {
  const got = pinProblems([{ file: "v.json", json: manifest(range) }], MIN_CLI_VERSION).length;
  if (got !== expected) selfTestFailures.push(`pin/${label}: expected ${expected}, got ${got}`);
}
for (const [label, text, expected] of GUARD_VECTORS) {
  const got = guardProblems([{ file: "v.yml", text }]).length;
  if (got !== expected) selfTestFailures.push(`guard/${label}: expected ${expected}, got ${got}`);
}
if (runBlocks(GOOD_BLOCK).length !== 1) {
  selfTestFailures.push("runBlocks: a block scalar must come back as one block");
}
if (selfTestFailures.length > 0) {
  console.error("check-publish-cli: SELF-TEST failed -- the check itself is broken:");
  for (const failure of selfTestFailures) console.error(`  - ${failure}`);
  process.exit(1);
}

// --- The repository --------------------------------------------------------

// Importing this module for its helpers must not run the repository check below.
if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) main();

function main() {
  const manifests = MANIFESTS.filter((f) => existsSync(join(ROOT, f))).map((file) => ({
    file,
    json: readFileSync(join(ROOT, file), "utf8"),
  }));

  const wfDir = join(ROOT, ".github", "workflows");
  const workflows = existsSync(wfDir)
    ? readdirSync(wfDir)
        .filter((f) => f.endsWith(".yml") || f.endsWith(".yaml"))
        .map((f) => ({
          file: `.github/workflows/${f}`,
          text: readFileSync(join(wfDir, f), "utf8"),
        }))
    : [];

  const problems = [...pinProblems(manifests, MIN_CLI_VERSION), ...guardProblems(workflows)];
  if (problems.length > 0) {
    console.error("check-publish-cli: the npm publish path cannot prove what it published:");
    for (const problem of problems) console.error(`  - ${problem}`);
    process.exit(1);
  }

  const publishing = workflows.filter(({ text }) =>
    runBlocks(text).some((b) => commandLines(b).some(publishes)),
  );
  console.log(
    `check-publish-cli: self-test green -- ${PIN_VECTORS.length + GUARD_VECTORS.length} vector(s). ` +
      `${manifests.length} manifest(s) pin \`@gjsify/cli\` at or above ${MIN_CLI_VERSION}; ` +
      `${publishing.length} publishing workflow(s) of ${workflows.length} state the binary they ` +
      "publish with, in the step that publishes.",
  );
}
