#!/usr/bin/env node
// Merges the provenance sources for `girs/` into one committed manifest.
// Driven by scripts/build-gir-provenance.sh, which supplies the Fedora rows; see that
// file's header for why this manifest has to exist at all.
//
// Two authorities, in priority order, because they answer different questions:
//
//   1. Fedora repository metadata (`%{license}`) -- authoritative for the bulk of the
//      pool, which fetch-fedora-girs.sh harvested out of Fedora RPMs. It maps a .gir
//      FILENAME to the package that ships it, so it answers per file.
//   2. `@ts-for-gir/gir-module-metadata` -- this repo's own curated records. It covers
//      the namespaces Fedora cannot: gnome-shell's Shell/St/Gvc/Shew are built from
//      source by build-gnome-shell-girs.sh and ship in no RPM, and its `versionAgnostic`
//      entries answer for the historical namespace versions (Cally-3 ... Cally-15) that
//      current Fedora has long since dropped.
//
// A file no authority places gets NO entry. That is deliberate: `packages/gir-files`
// publishes exactly the entries in this manifest, so an unattributable file is an
// unpublished file rather than a silent licence claim.

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const args = process.argv.slice(2);
const argOf = (name) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? undefined : args[i + 1];
};

const tsvPath = argOf("tsv");
const girDir = argOf("gir-dir");
const outPath = argOf("out");
const release = argOf("release") ?? "unknown";

if (!tsvPath || !girDir || !outPath) {
  console.error(
    "usage: build-gir-provenance.mjs --tsv <f> --gir-dir <d> --out <f> [--release <r>]",
  );
  process.exit(2);
}

/** Fedora rows: girFile -> { package, license, url, sourceRpm }. */
const fedora = new Map();
for (const line of readFileSync(tsvPath, "utf8").split("\n")) {
  if (!line || line.startsWith("#")) continue;
  const [girFile, pkg, license, url, sourceRpm] = line.split("\t");
  if (!girFile || !license) continue;
  // A .gir can be provided by more than one package (e.g. a -devel and a compat split).
  // First wins, and the set is sorted upstream, so the choice is stable across runs.
  if (!fedora.has(girFile)) {
    fedora.set(girFile, {
      package: pkg,
      license: license.trim(),
      url: url?.trim() || undefined,
      sourceRpm: sourceRpm?.trim() || undefined,
    });
  }
}

/** Curated in-repo records, keyed by girId, with versionAgnostic entries expanded on lookup. */
const { getModuleMetadata } = await import(
  new URL("../packages/gir-module-metadata/src/index.ts", import.meta.url).href
);

const girFiles = readdirSync(girDir)
  .filter((f) => f.endsWith(".gir"))
  .sort();

const entries = {};
const unattributed = [];

for (const file of girFiles) {
  const girId = file.replace(/\.gir$/, "");
  const fromFedora = fedora.get(file);
  if (fromFedora) {
    entries[girId] = {
      file,
      license: fromFedora.license,
      source: "fedora",
      sourcePackage: fromFedora.package,
      sourceRpm: fromFedora.sourceRpm,
      upstreamUrl: fromFedora.url,
    };
    continue;
  }

  const curated = getModuleMetadata?.(girId);
  if (curated?.license) {
    entries[girId] = {
      file,
      license: curated.license,
      docLicense: curated.docLicense,
      source: "gir-module-metadata",
      upstreamUrl: curated.repositoryUrl ?? curated.websiteUrl,
    };
    continue;
  }

  unattributed.push(girId);
}

const manifest = {
  schemaVersion: 1,
  // Regenerate with scripts/build-gir-provenance.sh. Do not hand-edit: the licence
  // column is a claim about third-party terms and must stay traceable to a query.
  generatedFrom: { distribution: "fedora", release },
  entries: Object.fromEntries(Object.entries(entries).sort(([a], [b]) => (a < b ? -1 : 1))),
  unattributed: unattributed.sort(),
};

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, `${JSON.stringify(manifest, null, 2)}\n`);

const byLicence = new Map();
for (const e of Object.values(entries))
  byLicence.set(e.license, (byLicence.get(e.license) ?? 0) + 1);

console.error(`==> ${girFiles.length} .gir files in ${girDir}`);
console.error(`    attributed:   ${Object.keys(entries).length}`);
console.error(
  `      via fedora: ${Object.values(entries).filter((e) => e.source === "fedora").length}`,
);
console.error(
  `      via curated:${Object.values(entries).filter((e) => e.source !== "fedora").length}`,
);
console.error(`    unattributed: ${unattributed.length}  (these will NOT be published)`);
console.error(`    distinct licence expressions: ${byLicence.size}`);
console.error(`==> wrote ${outPath}`);
