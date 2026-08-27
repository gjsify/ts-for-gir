#!/usr/bin/env node
// This repository has ONE package manager, and every invocation must agree.
//
// WHY. ts-for-gir moved to `@gjsify/cli`: there is no `yarn.lock`, no
// `packageManager` field, and CI runs `gjsify install --immutable` +
// `gjsify run …` throughout. The migration missed exactly one line —
// `.release-it.json`'s `before:init` hook still called `yarn format` — and that
// line sits on the RELEASE path, the one path nobody exercises until they need
// it. A 4.2.0 cut died on `/bin/sh: yarn: Kommando nicht gefunden` with the
// working tree untouched: not a broken release, but a blocked one, discovered
// at the worst moment rather than by anything that looks.
//
// WHAT THIS REFUSES: an invocation of a package manager this repository does not
// install, in a place that is EXECUTED — `package.json` scripts, `.release-it.json`
// hooks, and the `run:` lines of workflows. Prose is not scanned: a comment saying
// "this used to be yarn" is documentation, and a rule that cannot tell the two
// apart gets disabled.
//
// Usage: node --no-warnings scripts/check-package-manager.mjs

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

/** Package managers this repository does not install. A lockfile flips one back. */
const FOREIGN = [
  { name: "yarn", lockfiles: ["yarn.lock"], re: /(?<![\w./-])yarn(?=\s|$)/ },
  { name: "pnpm", lockfiles: ["pnpm-lock.yaml"], re: /(?<![\w./-])pnpm(?=\s|$)/ },
  // `npm view` / `npm publish` talk to the REGISTRY and are fine. Only the
  // script-runner and installer halves imply a package manager is present.
  {
    name: "npm",
    lockfiles: ["package-lock.json"],
    re: /(?<![\w./-])npm\s+(?:run|install|ci)(?=\s|$)/,
  },
];

const active = FOREIGN.filter((pm) => !pm.lockfiles.some((f) => existsSync(join(ROOT, f))));

/** @returns {Array<{where: string, line: string}>} every executed line to inspect. */
export function executedLines({ pkg, releaseIt, workflows }) {
  const out = [];
  for (const [name, body] of Object.entries(pkg?.scripts ?? {})) {
    out.push({ where: `package.json scripts.${name}`, line: body });
  }
  for (const [hook, entries] of Object.entries(releaseIt?.hooks ?? {})) {
    for (const entry of [entries].flat())
      out.push({ where: `.release-it.json hooks.${hook}`, line: entry });
  }
  for (const { file, text } of workflows) {
    // `run:` blocks only, and never a `#` comment line.
    let inRun = false;
    let runIndent = 0;
    for (const [i, raw] of text.split("\n").entries()) {
      const indent = raw.length - raw.trimStart().length;
      const trimmed = raw.trim();
      if (/^-?\s*run:\s*\|?\s*$/.test(trimmed) || /^-?\s*run:\s*\S/.test(trimmed)) {
        inRun = true;
        runIndent = indent;
        const inline = /run:\s*(\S.*)$/.exec(trimmed);
        if (inline && !inline[1].startsWith("|"))
          out.push({ where: `${file}:${i + 1}`, line: inline[1] });
        continue;
      }
      if (!inRun) continue;
      if (trimmed !== "" && indent <= runIndent) {
        inRun = false;
        continue;
      }
      if (trimmed.startsWith("#")) continue;
      if (trimmed !== "") out.push({ where: `${file}:${i + 1}`, line: trimmed });
    }
  }
  return out;
}

/** @returns {string[]} one line per problem; empty means consistent. */
export function problems(lines, managers) {
  const found = [];
  for (const { where, line } of lines) {
    for (const pm of managers) {
      if (pm.re.test(line)) {
        found.push(
          `${where}: calls \`${pm.name}\`, which this repository does not install ` +
            `(no ${pm.lockfiles.join("/")}). Use \`gjsify\`, or add the lockfile if that is the intent.`,
        );
      }
    }
  }
  return found;
}

// --- SELF-TEST FIRST: a check that cannot go red is worse than no check. -----

const VECTORS = [
  ["the incident itself", { hooks: { "before:init": ["yarn format"] } }, 1],
  ["the fix is clean", { hooks: { "before:init": ["gjsify run format"] } }, 0],
  [
    "npm view is a registry call, not a package manager",
    { hooks: { a: ["npm view pkg version"] } },
    0,
  ],
  ["npm run is not", { hooks: { a: ["npm run build"] } }, 1],
  ["a path ending in yarn is not the command", { hooks: { a: ["./tools/build-yarn"] } }, 0],
  ["two hooks, two problems", { hooks: { a: ["yarn a"], b: ["pnpm b"] } }, 2],
];

const selfTestFailures = [];
for (const [label, releaseIt, expected] of VECTORS) {
  const got = problems(executedLines({ pkg: {}, releaseIt, workflows: [] }), FOREIGN).length;
  if (got !== expected) selfTestFailures.push(`${label}: expected ${expected}, got ${got}`);
}
{
  const wf = [
    {
      file: "w.yml",
      text: "    steps:\n      - run: |\n          # yarn was here once\n          gjsify run check\n",
    },
  ];
  if (problems(executedLines({ pkg: {}, releaseIt: {}, workflows: wf }), FOREIGN).length !== 0) {
    selfTestFailures.push("a `#` comment inside a run block must not be read as an invocation");
  }
  const wf2 = [{ file: "w.yml", text: "    steps:\n      - run: |\n          yarn install\n" }];
  if (problems(executedLines({ pkg: {}, releaseIt: {}, workflows: wf2 }), FOREIGN).length !== 1) {
    selfTestFailures.push("a real invocation inside a run block must be read");
  }
}
if (selfTestFailures.length > 0) {
  console.error("check-package-manager: SELF-TEST failed — the check itself is broken:");
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

const found = problems(
  executedLines({
    pkg: JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")),
    releaseIt: existsSync(join(ROOT, ".release-it.json"))
      ? JSON.parse(readFileSync(join(ROOT, ".release-it.json"), "utf8"))
      : {},
    workflows,
  }),
  active,
);

if (found.length > 0) {
  console.error(
    "check-package-manager: an executed line calls a package manager this repository does not install:",
  );
  for (const problem of found) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(
  `check-package-manager: self-test green — ${VECTORS.length + 2} vector(s). ` +
    `${workflows.length} workflow(s) + package.json + .release-it.json call only \`gjsify\`; ` +
    `${active.map((p) => p.name).join(", ")} are absent and stay absent.`,
);
