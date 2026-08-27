#!/usr/bin/env node
// Every job that runs `gjsify` in a container must install the native libraries
// gjsify's own typelibs link against.
//
// WHY. `@gjsify/cli`'s bundler engine ships as `libgjsifyrolldown.so`, whose
// typelib references `libjson-glib-1.0.so.0`. Without it GIRepository logs a
// WARNING, not an error, and the CLI degrades into a build that then dies with a
// usage dump — a shape that reads like a bad command line rather than a missing
// package.
//
// This already happened once and was already fixed: #437, "install json-glib".
// It landed in `ci.yml` and in `ci.yml` only. `release-app.yml` and
// `release-types.yml` bootstrap the same CLI in the same fedora container and
// were left with the old list, so PRs stayed green while the RELEASE path was
// broken. It surfaced on the v4.2.0 cut: tag pushed, GitHub release created,
// `@ts-for-gir/*` never published — a release that looks successful from
// everywhere except npm.
//
// So the rule is not "install json-glib". It is: the prerequisite list cannot
// drift between the workflows that run the same tool. A fix applied to one
// workflow and not its siblings is the defect this refuses.
//
// SCOPE: a job is in scope when it BOTH installs packages with `dnf` (so it is a
// container job that must state its own prerequisites) AND runs `gjsify`.
// A job on a stock runner installs nothing and is none of our business.
//
// Usage: node --no-warnings scripts/check-workflow-prereqs.mjs

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

/**
 * Native packages every gjsify-running container job needs.
 * `json-glib` is here because of the incident above; `gjs` because the CLI is a
 * GJS bundle; `libsoup3` because the CLI's fetch path binds it.
 */
const REQUIRED = ["gjs", "libsoup3", "json-glib"];

/**
 * Split a workflow into jobs. Job keys sit at exactly two spaces under `jobs:`.
 * @returns {Array<{name: string, body: string}>}
 */
export function jobsOf(text) {
  const lines = text.split("\n");
  const start = lines.findIndex((l) => /^jobs:\s*$/.test(l));
  if (start < 0) return [];
  const jobs = [];
  let current = null;
  for (const line of lines.slice(start + 1)) {
    const head = /^ {2}([A-Za-z_][\w-]*):\s*$/.exec(line);
    if (head) {
      if (current) jobs.push(current);
      current = { name: head[1], body: "" };
      continue;
    }
    // A key back at column 0 ends the `jobs:` block entirely.
    if (/^\S/.test(line) && line.trim() !== "") break;
    if (current) current.body += `${line}\n`;
  }
  if (current) jobs.push(current);
  return jobs;
}

/**
 * The packages a job's `dnf install` lines actually name. Comments are not
 * installs: a line mentioning json-glib in prose must not satisfy the rule.
 * @returns {string[] | null} null when the job runs no `dnf install` at all.
 */
export function installedPackages(body) {
  const found = [];
  let any = false;
  for (const raw of body.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("#")) continue;
    const m = /\bdnf\s+(?:-\S+\s+)*install\s+(.+)$/.exec(line);
    if (!m) continue;
    any = true;
    for (const tok of m[1].split(/\s+/)) {
      if (tok.startsWith("-") || tok === "\\") continue;
      found.push(tok);
    }
  }
  return any ? found : null;
}

/** Does this job actually run the tool whose prerequisites we are checking? */
export function runsGjsify(body) {
  for (const raw of body.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("#")) continue;
    if (/(?<![\w./-])gjsify(?=[\s"']|$)/.test(line) || line.includes("install.mjs")) return true;
  }
  return false;
}

/** @returns {string[]} one line per problem; empty means the lists agree. */
export function problems(workflows, required) {
  const found = [];
  for (const { file, text } of workflows) {
    for (const job of jobsOf(text)) {
      const packages = installedPackages(job.body);
      if (packages === null) continue; // not a container job that states its own deps
      if (!runsGjsify(job.body)) continue;
      const missing = required.filter((p) => !packages.includes(p));
      if (missing.length > 0) {
        found.push(
          `${file} job \`${job.name}\`: runs gjsify in a container but its \`dnf install\` ` +
            `omits ${missing.map((m) => `\`${m}\``).join(", ")}. ` +
            `GIRepository reports a missing shared library as a WARNING, so the build fails later ` +
            `and elsewhere. Add it here, not only in the workflow that happened to hit it.`,
        );
      }
    }
  }
  return found;
}

// --- SELF-TEST FIRST: a check that cannot go red is worse than no check. -----

const job = (name, body) => `jobs:\n  ${name}:\n${body}`;
const CONTAINER = (pkgs, extra = "") =>
  `    container: fedora:43\n    steps:\n      - run: |\n          dnf install -y ${pkgs}\n${extra}`;
const BOOTSTRAP = "      - run: gjsify install\n";

const VECTORS = [
  [
    "the incident itself — release-app's old list",
    job("publish", CONTAINER("git tar xz findutils curl gjs libsoup3 nodejs", BOOTSTRAP)),
    1,
  ],
  [
    "the fix",
    job("publish", CONTAINER("git tar xz findutils curl gjs libsoup3 json-glib nodejs", BOOTSTRAP)),
    0,
  ],
  [
    "a container job that never runs gjsify is not our business",
    job("docs", CONTAINER("git curl", "      - run: make html\n")),
    0,
  ],
  [
    "a stock-runner job installs nothing and states nothing",
    job("lint", "    runs-on: ubuntu-latest\n    steps:\n      - run: gjsify run check\n"),
    0,
  ],
  [
    "json-glib named in a COMMENT does not install it",
    job(
      "publish",
      CONTAINER("git gjs libsoup3", `          # json-glib is handled elsewhere\n${BOOTSTRAP}`),
    ),
    1,
  ],
  [
    "two workflows drifting is two problems",
    `${job("a", CONTAINER("gjs libsoup3", BOOTSTRAP))}\n  b:\n${CONTAINER("gjs libsoup3", BOOTSTRAP)}`,
    2,
  ],
  [
    "the install.mjs bootstrap counts as running gjsify",
    job(
      "publish",
      CONTAINER("git gjs libsoup3", "      - run: |\n          gjs -m /tmp/install.mjs\n"),
    ),
    1,
  ],
];

const selfTestFailures = [];
for (const [label, text, expected] of VECTORS) {
  const got = problems([{ file: "v.yml", text }], REQUIRED).length;
  if (got !== expected) selfTestFailures.push(`${label}: expected ${expected}, got ${got}`);
}
if (REQUIRED.length === 0) selfTestFailures.push("REQUIRED is empty — the check asserts nothing");
if (selfTestFailures.length > 0) {
  console.error("check-workflow-prereqs: SELF-TEST failed — the check itself is broken:");
  for (const f of selfTestFailures) console.error(`  - ${f}`);
  process.exit(1);
}

// --- The repository --------------------------------------------------------

const wfDir = join(ROOT, ".github", "workflows");
const workflows = existsSync(wfDir)
  ? readdirSync(wfDir)
      .filter((f) => f.endsWith(".yml") || f.endsWith(".yaml"))
      .map((f) => ({ file: `.github/workflows/${f}`, text: readFileSync(join(wfDir, f), "utf8") }))
  : [];

const inScope = workflows.flatMap(({ file, text }) =>
  jobsOf(text)
    .filter((j) => installedPackages(j.body) !== null && runsGjsify(j.body))
    .map((j) => `${file}:${j.name}`),
);

const found = problems(workflows, REQUIRED);
if (found.length > 0) {
  console.error("check-workflow-prereqs: a gjsify container job is missing a native prerequisite:");
  for (const problem of found) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(
  `check-workflow-prereqs: self-test green — ${VECTORS.length} vector(s). ` +
    `${inScope.length} gjsify container job(s) across ${workflows.length} workflow(s) all install ` +
    `${REQUIRED.join(", ")}.`,
);
