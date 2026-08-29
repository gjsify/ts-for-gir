#!/usr/bin/env node
// Builds the shipped payload of @ts-for-gir/gir-files from the repo's `girs/` pool.
//
// Runs from `build:app`, NOT from a `prepack` hook: the production packer does not run
// npm lifecycle scripts (tests/e2e/cli-tarball-shape/run.mjs states this outright), so an
// artefact that only a lifecycle hook produces ships as an empty directory. `packages/cli`
// chains `dist-templates` the same way.
//
// TWO THINGS THIS DOES THAT LOOK OPTIONAL AND ARE NOT
//
// 1. It gzips each file individually instead of copying the XML in.
//    Measured over the 510 shipped namespaces (308.0 MB raw), via `npm pack --dry-run`:
//      plain .gir files ...................... 27.5 MB tarball / 308.0 MB unpacked
//      per-file .gir.gz (what this writes) ... 27.6 MB tarball /  27.9 MB unpacked
//    The tarball costs 0.1 MB (+0.4 %) and the installed footprint drops 11.0x. That is
//    almost free ONLY because gzip's 32 KB window captures essentially no redundancy
//    ACROSS files: over the full 718-file pool, one tar.gz of everything is 32.4 MB while
//    the sum of the files gzipped separately is 32.7 MB -- 0.9 % apart. Pooling into one
//    stream buys nothing, so pre-compressing gives up nothing. Do not "simplify" this
//    back to plain files: 308 MB unpacked is 2.5x the largest widely-installed npm
//    package (aws-cdk-lib, 124.3 MB).
//
// 2. It ships a file only if `provenance.json` attributes it.
//    `girs/` is third-party content under real copyleft and carries no licence headers.
//    An unattributed file is one we cannot name terms for, so it does not go in the
//    tarball and does not go in NOTICE.md. See scripts/build-gir-provenance.sh.

import { createRequire } from "node:module";
import { gzipSync } from "node:zlib";
import { mkdirSync, readFileSync, rmSync, writeFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(here, "..");
const repoRoot = join(pkgRoot, "..", "..");
const girDir = join(repoRoot, "girs");
const payloadDir = join(pkgRoot, "payload");

const require = createRequire(import.meta.url);
const pkg = require(join(pkgRoot, "package.json"));

const manifest = JSON.parse(readFileSync(join(pkgRoot, "provenance.json"), "utf8"));
const entries = Object.entries(manifest.entries ?? {});

if (entries.length === 0) {
  console.error(
    "error: provenance.json attributes no files, so there is nothing publishable.\n" +
      "       Regenerate it with scripts/build-gir-provenance.sh.",
  );
  process.exit(1);
}

rmSync(payloadDir, { recursive: true, force: true });
mkdirSync(payloadDir, { recursive: true });

const index = {};
let rawBytes = 0;
let gzBytes = 0;
const missing = [];

for (const [girId, entry] of entries) {
  const src = join(girDir, entry.file);
  let xml;
  try {
    xml = readFileSync(src);
  } catch {
    missing.push(entry.file);
    continue;
  }
  const gz = gzipSync(xml, { level: 6 });
  writeFileSync(join(payloadDir, `${entry.file}.gz`), gz);
  rawBytes += xml.length;
  gzBytes += gz.length;
  index[girId] = { file: entry.file, bytes: xml.length, gzipBytes: gz.length };
}

// The manifest is generated from a listing of `girs/`, so a name in it that is not on
// disk means the two have drifted -- refusing here beats shipping a NOTICE entry for a
// file the tarball does not contain.
if (missing.length > 0) {
  console.error(`error: provenance.json names ${missing.length} file(s) absent from ${girDir}:`);
  for (const f of missing.slice(0, 10)) console.error(`         ${f}`);
  process.exit(1);
}

writeFileSync(join(payloadDir, "index.json"), `${JSON.stringify(index, null, 2)}\n`);

// NOTICE.md is the attribution artefact, not documentation. Every file in the tarball is
// listed with the upstream package it came from and the terms that package declares.
const licences = new Map();
for (const [, e] of entries) {
  licences.set(e.license, (licences.get(e.license) ?? 0) + 1);
}

const rows = entries
  .map(([girId, e]) => {
    const origin = e.sourcePackage
      ? `${e.sourcePackage} (${manifest.generatedFrom?.distribution ?? "distro"})`
      : e.source;
    const url = e.upstreamUrl ? `[link](${e.upstreamUrl})` : "";
    return `| \`${girId}\` | ${e.license} | ${origin} | ${url} |`;
  })
  .join("\n");

const notice = `# NOTICE — third-party content in \`${pkg.name}\`

This package redistributes **GObject Introspection (GIR) XML files that this project did
not author**. They are verbatim copies of files shipped by upstream projects and by the
Fedora packages built from them.

## Licensing

The packaging around them — \`src/\`, \`scripts/\`, \`provenance.json\` — is **Apache-2.0**,
like the rest of ts-for-gir.

The \`payload/\` files are **not**. Each carries the licence of the project it was generated
from, and those are predominantly copyleft. The table below records, for every file in this
package, the licence expression declared by the upstream source it came from. That is why
\`package.json\` says \`"license": "SEE LICENSE IN NOTICE.md"\` rather than naming one licence:
no single identifier is true of this package's contents.

**This table is evidence, not a legal determination.** A distribution's \`License:\` tag is an
expression covering everything in that package, not a per-file finding, and nothing here is
legal advice. If you redistribute these files onward, satisfy the terms below yourself.

Files that no source could attribute are **not included** in this package. See
\`provenance.json\` → \`unattributed\` for what was left out and why.

## Licence expressions present (${licences.size} distinct, over ${entries.length} files)

${[...licences.entries()]
  .sort((a, b) => b[1] - a[1])
  .map(([lic, n]) => `- \`${lic}\` — ${n} file(s)`)
  .join("\n")}

## Per-file attribution

| Namespace | Declared licence | Origin | Upstream |
|---|---|---|---|
${rows}

---

Regenerate this file with \`node packages/gir-files/scripts/build-payload.mjs\`.
Provenance is re-queried with \`scripts/build-gir-provenance.sh\`.
`;

writeFileSync(join(pkgRoot, "NOTICE.md"), notice);

const mb = (n) => (n / 1048576).toFixed(1);
console.error(`==> payload: ${entries.length} files`);
console.error(
  `    raw  ${mb(rawBytes)} MB -> gzip ${mb(gzBytes)} MB (${(rawBytes / gzBytes).toFixed(1)}x)`,
);
console.error(`    NOTICE.md: ${licences.size} distinct licence expressions`);
console.error(`    payload/index.json: ${statSync(join(payloadDir, "index.json")).size} bytes`);
