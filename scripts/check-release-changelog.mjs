#!/usr/bin/env node
// Guards against a repeat of the 2026-07-02 incident (v4.1.0): a
// `conventional-changelog-conventionalcommits` major bump resolved to an
// API-incompatible version of the changelog templates, so `beforeRelease`
// wrote a version heading to CHANGELOG.md with no commit list underneath.
// Runs as the `after:beforeRelease` release-it hook, once CHANGELOG.md has
// been rewritten for the new version but before it's committed/tagged/pushed.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const changelog = readFileSync("CHANGELOG.md", "utf8");
const sectionMatch = changelog.match(/## \[.+?\].*\n([\s\S]*?)(?=\n## \[|\n*$)/);

if (!sectionMatch) {
  console.error("check-release-changelog: could not find a version section in CHANGELOG.md");
  process.exit(1);
}

const lastTag = execFileSync("git", ["describe", "--tags", "--abbrev=0", "--match=v*"], {
  encoding: "utf8",
}).trim();
const commitCount = Number(
  execFileSync("git", ["rev-list", "--count", `${lastTag}..HEAD`], { encoding: "utf8" }).trim(),
);

const body = sectionMatch[1].trim();

if (body.length === 0 && commitCount > 0) {
  console.error(
    `check-release-changelog: the new CHANGELOG.md section is empty despite ${commitCount} commit(s) since ${lastTag}.\n` +
      "This has happened before when `conventional-changelog-conventionalcommits` resolved to a major version whose " +
      "templates are incompatible with the installed `conventional-changelog-writer` (silently renders a blank body). " +
      "Compare node_modules/conventional-changelog-conventionalcommits/package.json's version against the one " +
      "nested under node_modules/@release-it/conventional-changelog/node_modules/ (if present) — they must match " +
      "the same major version. Run `yarn release:dry` to inspect the preview once fixed.",
  );
  process.exit(1);
}

console.log(
  `check-release-changelog: OK (${commitCount} commit(s) since ${lastTag}, new changelog section has content)`,
);
