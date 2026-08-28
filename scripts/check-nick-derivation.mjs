#!/usr/bin/env node
// Holds the two corpus facts that justify `GirEnumMember`'s nick fallback, and exists
// because a derivation claim without its derivation is how the same corpus produced two
// different "disagreement" counts in two repositories:
//
//   `name.replace(/_/g, "-")`               ->  97 members contradict the attribute
//   `name.toLowerCase().replace(/_/g, "-")` -> 889
//
// Both were measured over these same files and neither was wrong; they differ by the 792
// members whose GIR name carries uppercase and whose nick preserves it, so they disagree
// only with a derivation that lowercases. Quoting either number without naming its
// derivation is what made them look like a contradiction, so this script names both and
// asserts the two invariants a fallback may actually rely on:
//
//   1. A nick differs from its member name ONLY in which underscores became dashes --
//      never in case, never in spelling. So a fallback must not change case.
//   2. No member LACKING `glib:nick` has an uppercase name. This is what makes the two
//      spellings above indistinguishable in practice: the fallback's whole input set is
//      already lowercase, so `toLowerCase()` cannot change one byte of output.
//
// Invariant 1 is what makes a case-changing fallback wrong; invariant 2 is why removing
// one changed no generated types. If either goes red after a corpus refresh, the fallback
// lost its justification and the comment on `GirEnumMember.nick` needs re-measuring --
// this script failing IS that notification.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2] ?? "girs";
const MEMBER = /<member\b([^>]*?)\/?>/g;
const attrOf = (attrs, name) => attrs.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];

let files = 0;
let members = 0;
let withNick = 0;
let disagreeSubstitution = 0;
let disagreeLowercased = 0;
let upperNamed = 0;
/** Invariant 1 violations: a nick that differs from its name by more than `_` vs `-`. */
const beyondUnderscores = [];
/** Invariant 2 violations: the fallback's input set is meant to be all-lowercase. */
const fallbackUpperNamed = [];

for (const file of readdirSync(dir)
  .filter((f) => f.endsWith(".gir"))
  .sort()) {
  files++;
  const src = readFileSync(join(dir, file), "utf8");
  MEMBER.lastIndex = 0;
  let match;
  while ((match = MEMBER.exec(src)) !== null) {
    const name = attrOf(match[1], "name");
    if (name === undefined) continue;
    members++;
    const nick = attrOf(match[1], "glib:nick");
    const hasUpper = name !== name.toLowerCase();
    if (nick === undefined) {
      if (hasUpper) fallbackUpperNamed.push(`${file}: ${name}`);
      continue;
    }
    withNick++;
    if (hasUpper) upperNamed++;
    if (nick !== name.replace(/_/g, "-")) disagreeSubstitution++;
    if (nick !== name.toLowerCase().replace(/_/g, "-")) disagreeLowercased++;
    if (nick.replace(/-/g, "_") !== name)
      beyondUnderscores.push(`${file}: name=${name} nick=${nick}`);
  }
}

console.log(`corpus                                     ${dir} (${files} .gir files)`);
console.log(`<member> elements                          ${members}`);
console.log(`  carrying glib:nick                       ${withNick}`);
console.log(`    ...with an uppercase name              ${upperNamed}`);
console.log(`  without it -- the fallback's input        ${members - withNick}`);
console.log("disagreements with the attribute, by derivation:");
console.log(`  name.replace(/_/g, "-")                  ${disagreeSubstitution}`);
console.log(`  name.toLowerCase().replace(/_/g, "-")    ${disagreeLowercased}`);

const report = (violations, invariant) => {
  if (violations.length === 0) return false;
  console.error(
    `\ncheck-nick-derivation: ${invariant}\n  ${violations.length} violation(s), first 10:`,
  );
  for (const line of violations.slice(0, 10)) console.error(`    ${line}`);
  return true;
};

const broken =
  report(beyondUnderscores, "a nick differs from its member name by more than `_` vs `-`") ||
  report(
    fallbackUpperNamed,
    "a member without `glib:nick` has an uppercase name, so the fallback's case matters",
  );

if (broken) {
  console.error(
    "\nThe nick fallback in packages/lib/src/gir/enum-member.ts rests on these two invariants.",
  );
  console.error(
    "Re-measure it and update the comment there before changing the corpus expectations.",
  );
  process.exit(1);
}

console.log(
  "\nboth invariants hold: a nick is its name with underscores substituted, and the fallback",
);
console.log(
  "never sees an uppercase name -- so the fallback may not change case, and does not need to.",
);
