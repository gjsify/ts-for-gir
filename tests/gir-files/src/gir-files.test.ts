// WHY THIS EXISTS
//
// `@ts-for-gir/gir-files` is a package whose entire value is its payload, and whose payload
// is GENERATED at build time rather than committed. That combination has one dominant
// failure mode: the builder does not run, or runs against an empty manifest, and a tarball
// ships with zero `.gir` files while every script in the chain exits 0. Nothing else in the
// repo would notice -- there is no type to compile, no import to resolve, no example to run.
// This file is the thing that notices.
//
// It also guards the licensing invariant, which is not a nice-to-have here. `girs/` is
// third-party content under real copyleft with no licence headers, so the package ships a
// file ONLY if `provenance.json` attributes it. A file that leaks into the payload without a
// record is an undeclared redistribution, and that is the assertion in
// "no unattributed namespace is shipped".
//
// Every count below is DERIVED from the manifest. The pool grows (GNOME 51 added 13
// namespaces in one commit), so a hard-coded 718 would be a gate that fails for the wrong
// reason on the next corpus refresh.

import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { describe, expect, it } from "vitest";

import {
  extractGirFiles,
  getGirFile,
  getProvenance,
  listGirFiles,
  readGirXml,
} from "@ts-for-gir/gir-files";

const require = createRequire(import.meta.url);
const pkgJsonPath = require.resolve("@ts-for-gir/gir-files/package.json");
const pkgRoot = dirname(pkgJsonPath);
const payloadDir = join(pkgRoot, "payload");
const pkg = JSON.parse(readFileSync(pkgJsonPath, "utf8")) as {
  files: string[];
  license: string;
};

const provenance = getProvenance();
const shipped = listGirFiles();
const payloadFiles = readdirSync(payloadDir).filter((f) => f.endsWith(".gir.gz"));

describe("payload", () => {
  it("is not empty", () => {
    // The failure this package would otherwise ship silently.
    expect(payloadFiles.length).toBeGreaterThan(0);
    expect(shipped.length).toBeGreaterThan(0);
  });

  it("contains exactly the namespaces the manifest attributes", () => {
    const claimed = Object.keys(provenance.entries).sort();
    const onDisk = payloadFiles.map((f) => f.replace(/\.gir\.gz$/, "")).sort();
    expect(onDisk).toEqual(claimed);
    expect(shipped.map((f) => f.girId).sort()).toEqual(claimed);
  });

  it("holds real bytes for every namespace it lists", () => {
    for (const file of shipped) {
      expect(file.gzipBytes, `${file.girId} gzip is empty`).toBeGreaterThan(0);
      expect(file.bytes, `${file.girId} raw size is zero`).toBeGreaterThan(0);
      expect(file.bytes, `${file.girId} did not compress`).toBeGreaterThan(file.gzipBytes);
    }
  });
});

describe("licensing", () => {
  it("attributes every shipped namespace with a non-empty licence", () => {
    const unlicensed = shipped.filter((f) => !f.license || f.license.trim() === "");
    expect(unlicensed.map((f) => f.girId)).toEqual([]);
  });

  it("records where every licence came from", () => {
    const badSource = shipped.filter(
      (f) => f.source !== "fedora" && f.source !== "gir-module-metadata",
    );
    expect(badSource.map((f) => f.girId)).toEqual([]);
  });

  it("ships no unattributed namespace", () => {
    // The invariant that makes redistribution defensible at all.
    const leaked = provenance.unattributed.filter((girId) =>
      payloadFiles.includes(`${girId}.gir.gz`),
    );
    expect(leaked).toEqual([]);
  });

  it("declares itself as not single-licensed", () => {
    // A blanket "MIT" here would be a false claim about LGPL/GPL content.
    expect(pkg.license).toBe("SEE LICENSE IN NOTICE.md");
  });

  it("names every shipped namespace and licence expression in NOTICE.md", () => {
    const notice = readFileSync(join(pkgRoot, "NOTICE.md"), "utf8");
    const missingIds = shipped.filter((f) => !notice.includes(`\`${f.girId}\``));
    expect(missingIds.map((f) => f.girId)).toEqual([]);

    const expressions = new Set(shipped.map((f) => f.license));
    const missingLicences = [...expressions].filter((lic) => !notice.includes(lic));
    expect(missingLicences).toEqual([]);
  });

  it("refuses to serve a namespace it cannot attribute", () => {
    const withheld = provenance.unattributed[0];
    if (withheld === undefined) return; // nothing held back in this corpus
    expect(getGirFile(withheld)).toBeUndefined();
    expect(() => readGirXml(withheld)).toThrow(/no provenance record/);
  });
});

describe("tarball shape", () => {
  it("ships the payload, the manifest and the NOTICE", () => {
    for (const entry of ["payload", "provenance.json", "NOTICE.md", "src"]) {
      expect(pkg.files, `package.json "files" omits ${entry}`).toContain(entry);
    }
  });
});

describe("reading", () => {
  // Derived, not hard-coded: the three largest namespaces in whatever corpus is present.
  const samples = [...shipped].sort((a, b) => b.bytes - a.bytes).slice(0, 3);

  it("has samples to read", () => {
    expect(samples.length).toBeGreaterThan(0);
  });

  for (const sample of samples) {
    it(`round-trips ${sample.girId} to GIR XML`, () => {
      const xml = readGirXml(sample.girId);
      expect(xml.startsWith("<?xml")).toBe(true);
      expect(xml).toContain("<repository");
      expect(xml).toContain(`name="${sample.namespace}"`);
      expect(Buffer.byteLength(xml, "utf8")).toBe(sample.bytes);
    });

    it(`carries documentation prose for ${sample.girId}`, () => {
      // The reason this package exists: <doc> survives only in the XML.
      expect(readGirXml(sample.girId)).toContain("<doc ");
    });
  }

  it("throws a named error for an unknown namespace", () => {
    expect(() => readGirXml("NotANamespace-9.9")).toThrow(/unknown namespace/);
  });

  it("extracts plain .gir files on request", () => {
    const first = samples[0];
    if (!first) return;
    const dir = mkdtempSync(join(tmpdir(), "gir-files-extract-"));
    try {
      expect(extractGirFiles(dir, [first.girId])).toBe(1);
      const onDisk = readFileSync(join(dir, first.file), "utf8");
      expect(Buffer.byteLength(onDisk, "utf8")).toBe(first.bytes);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
