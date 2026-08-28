#!/usr/bin/env node
// The library examples in `packages/lib/README.md` must RUN, and must print what
// they claim to print.
//
// WHY. Documentation that shows an API is a second copy of that API, and the copy
// does not fail when the original moves. This section was prose for exactly that
// reason — safe, and useless: it named `GirModule` and `DependencyManager` without
// showing that `load()` only REGISTERS a module and `parse()` is what fills it. A
// reader following the prose gets `members.size === 0` and no error, because an
// unparsed module is valid and empty rather than broken.
//
// So the examples carry their real output as a trailing comment, and this check
// executes them and holds the output to it. A number in the README that nothing
// runs is a claim; a number this reproduces is a measurement.
//
// WHAT IT DOES: extracts every ```ts block from the library section, concatenates
// them in document order (they are written as one continuous script), points
// `girDirectories` at the repo's own `girs/` so the run is hermetic, executes it,
// and asserts each `console.log` line's following `// …` comment appears in stdout.
//
// Usage: node --no-warnings scripts/check-readme-examples.mjs

import { execFileSync } from "node:child_process";
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const README = "packages/lib/README.md";
const SECTION = "### 3. Changing what gets emitted";

/** @returns {string[]} the fenced ```ts blocks of the section, in order. */
export function tsBlocks(markdown, sectionHeading) {
  const at = markdown.indexOf(sectionHeading);
  if (at < 0) throw new Error(`section not found: ${sectionHeading}`);
  return [...markdown.slice(at).matchAll(/```ts\n([\s\S]*?)```/g)].map((m) => m[1]);
}

/**
 * The claims: a `// …` comment on the line(s) after a `console.log(`.
 * @returns {string[]} expected stdout substrings, in order.
 */
export function claims(code) {
  const lines = code.split("\n");
  const out = [];
  for (const [i, line] of lines.entries()) {
    if (!/console\.log\(/.test(line)) continue;
    for (let j = i + 1; j < lines.length; j++) {
      const m = /^\s*\/\/ ?(.*)$/.exec(lines[j]);
      if (!m) break;
      if (m[1].trim() !== "") out.push(m[1].trim());
    }
  }
  return out;
}

// --- SELF-TEST FIRST: a check that cannot go red is worse than no check. -----

const SELF = [
  ["a claim is read", "console.log(x)\n// 42 things\n", ["42 things"]],
  ["prose above a call is not a claim", "// explains why\nconsole.log(x)\n", []],
  ["a bare comment with no call is not a claim", "// just a note\n", []],
  ["a multi-line claim keeps both lines", "console.log(x)\n// one\n// two\n", ["one", "two"]],
  ["an empty comment ends nothing but adds nothing", "console.log(x)\n//\n// real\n", ["real"]],
];
const failures = [];
for (const [label, code, expected] of SELF) {
  const got = claims(code);
  if (JSON.stringify(got) !== JSON.stringify(expected))
    failures.push(`${label}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(got)}`);
}
if (tsBlocks("### S\n```ts\na\n```\ntext\n```ts\nb\n```\n", "### S").length !== 2)
  failures.push("two blocks in a section must both be extracted");
if (failures.length > 0) {
  console.error("check-readme-examples: SELF-TEST failed — the check itself is broken:");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

// --- The repository --------------------------------------------------------

const markdown = readFileSync(join(ROOT, README), "utf8");
const blocks = tsBlocks(markdown, SECTION);
if (blocks.length === 0) {
  console.error(
    `check-readme-examples: no \`\`\`ts blocks under "${SECTION}" — did the section move?`,
  );
  process.exit(1);
}

const source = blocks.join("\n");
const expected = claims(source);
if (expected.length === 0) {
  console.error(
    "check-readme-examples: the examples print nothing they claim — add `// output` lines.",
  );
  process.exit(1);
}

// Hermetic: the repo's own GIRs, never whatever this host happens to have installed.
const runnable = source
  .replace('girDirectories: ["/usr/share/gir-1.0"]', 'girDirectories: ["./girs"]')
  .replace("outdir: null };", "outdir: null } as never;");

const file = join(ROOT, `.readme-examples.${process.pid}.ts`);
let stdout = "";
try {
  writeFileSync(file, runnable);
  stdout = execFileSync(process.execPath, ["--experimental-transform-types", file], {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
} catch (error) {
  console.error("check-readme-examples: the README examples did not run:");
  console.error(
    String(error.stderr || error.message)
      .trim()
      .split("\n")
      .slice(-12)
      .join("\n"),
  );
  process.exit(1);
} finally {
  rmSync(file, { force: true });
}

const missing = expected.filter((claim) => !stdout.includes(claim));
if (missing.length > 0) {
  console.error(
    "check-readme-examples: the examples ran, but printed something else than documented:",
  );
  for (const m of missing) console.error(`  - README claims: ${m}`);
  console.error("  actual output:");
  for (const line of stdout.trim().split("\n")) console.error(`    ${line}`);
  process.exit(1);
}

console.log(
  `check-readme-examples: self-test green — ${SELF.length + 1} vector(s). ` +
    `${blocks.length} example(s) in ${README} run and print all ${expected.length} documented result(s).`,
);
