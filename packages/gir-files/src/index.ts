/**
 * Access to the original GIR XML files that `@girs/*` is generated from.
 *
 * SCOPE — read this before using the package. It is narrow on purpose, and the narrowness
 * is what makes it compatible with gjsify's ADR 0019 § 2 ("the `.gir` travels with the
 * RUNTIME package, never with the type package").
 *
 * This package answers exactly one question: **what did the corpus that generated
 * `@girs/*` at this version say?** Its version tracks the ts-for-gir release train, so
 * `@ts-for-gir/gir-files@X` carries the XML that produced `@girs/*@X`.
 *
 * It does NOT answer "what library will the host load". It cannot: a `.gir` with no
 * binary beside it says nothing about the installed library, which is the whole point of
 * ADR 0019 — GIRepository matches only the API version, so a `Gtk-4.0` typelib from 4.12
 * and one from 4.23 both satisfy `gi://Gtk?version=4.0`. Do not use this package to
 * decide what is available at runtime; for that the `.gir` must travel next to the binary,
 * which is what `@gjsify/gtk-runtime-*` does via `gjsify.prebuilds`.
 *
 * The consumers this is for never load the library at all: generators, conformance
 * checkers and documentation builders, which ADR 0019 § 5 places squarely in ts-for-gir's
 * domain — "ts-for-gir knows GIR as XML, parsed headlessly, in CI, with no GTK installed
 * and no typelib loaded".
 *
 * Why it exists: GIR XML and the compiled typelib carry different data. Enum nicks live
 * in the typelib; the documentation strings live only in the XML. Neither the generated
 * `.d.ts` nor the typelib carries the `<doc>` prose, so a tool that needs reasons and doc
 * text has to read the XML.
 */

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gunzipSync } from "node:zlib";

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const payloadDir = join(packageRoot, "payload");

/** Where a file's licence and origin were established. */
export type GirProvenanceSource = "fedora" | "gir-module-metadata";

/** The provenance record for one namespace, as committed in `provenance.json`. */
export interface GirProvenanceEntry {
  /** Filename inside the pool, e.g. `Gtk-4.0.gir`. */
  file: string;
  /**
   * SPDX expression declared by the upstream source this file came from.
   *
   * Evidence, not a legal determination: a distribution's `License:` tag covers everything
   * in that package rather than this one file. See NOTICE.md.
   */
  license: string;
  /** SPDX expression for the documentation prose, where the curated records state one. */
  docLicense?: string;
  source: GirProvenanceSource;
  /** Distribution package that ships the file, when the origin is a distro. */
  sourcePackage?: string;
  /** Source RPM the distribution package was built from, when known. */
  sourceRpm?: string;
  upstreamUrl?: string;
}

/** A namespace present in this package, with its provenance and sizes. */
export interface GirFileInfo extends GirProvenanceEntry {
  /** `Gtk-4.0` */
  girId: string;
  /** `Gtk` */
  namespace: string;
  /** `4.0` */
  version: string;
  /** Uncompressed size of the XML in bytes. */
  bytes: number;
  /** Size of the shipped gzip in bytes. */
  gzipBytes: number;
}

interface ProvenanceManifest {
  schemaVersion: number;
  generatedFrom: { distribution: string; release: string };
  entries: Record<string, GirProvenanceEntry>;
  /** Namespaces in the pool that no source could attribute — deliberately NOT shipped. */
  unattributed: string[];
}

interface PayloadIndex {
  [girId: string]: { file: string; bytes: number; gzipBytes: number };
}

const readJson = <T>(path: string): T => JSON.parse(readFileSync(path, "utf8")) as T;

let manifestCache: ProvenanceManifest | undefined;
let indexCache: PayloadIndex | undefined;

const manifest = (): ProvenanceManifest => {
  manifestCache ??= readJson<ProvenanceManifest>(join(packageRoot, "provenance.json"));
  return manifestCache;
};

const payloadIndex = (): PayloadIndex => {
  indexCache ??= readJson<PayloadIndex>(join(payloadDir, "index.json"));
  return indexCache;
};

/** The committed provenance manifest, including the list of namespaces left out. */
export const getProvenance = (): ProvenanceManifest => manifest();

const splitGirId = (girId: string): { namespace: string; version: string } => {
  const at = girId.lastIndexOf("-");
  return at === -1
    ? { namespace: girId, version: "" }
    : { namespace: girId.slice(0, at), version: girId.slice(at + 1) };
};

/** Every namespace shipped by this package. */
export const listGirFiles = (): GirFileInfo[] => {
  const { entries } = manifest();
  const index = payloadIndex();
  return Object.keys(index)
    .sort()
    .map((girId) => {
      const entry = entries[girId];
      const sizes = index[girId];
      if (!entry || !sizes) {
        // Unreachable while build-payload.mjs writes both from the same manifest; the
        // gate in tests/gir-files asserts it stays that way.
        throw new Error(`gir-files: payload and provenance disagree about ${girId}`);
      }
      return { girId, ...splitGirId(girId), ...entry, ...sizes };
    });
};

/** One namespace's record, or `undefined` if this package does not ship it. */
export const getGirFile = (girId: string): GirFileInfo | undefined => {
  const entry = manifest().entries[girId];
  const sizes = payloadIndex()[girId];
  if (!entry || !sizes) return undefined;
  return { girId, ...splitGirId(girId), ...entry, ...sizes };
};

/**
 * The GIR XML for one namespace.
 *
 * @throws if the namespace is not shipped — check {@link getGirFile} first, and consult
 * `getProvenance().unattributed` for namespaces the pool has but this package withholds.
 */
export const readGirXml = (girId: string): string => {
  const info = getGirFile(girId);
  if (!info) {
    const withheld = manifest().unattributed.includes(girId);
    throw new Error(
      withheld
        ? `gir-files: ${girId} is in the pool but has no provenance record, so it is not published. See NOTICE.md.`
        : `gir-files: unknown namespace ${girId}`,
    );
  }
  return gunzipSync(readFileSync(join(payloadDir, `${info.file}.gz`))).toString("utf8");
};

/**
 * Write the shipped namespaces out as plain `.gir` files.
 *
 * For tools that want a directory of XML rather than an API — `ts-for-gir generate
 * --girDirectories=<dir>` being the obvious one. The payload ships gzipped (32.7 MB
 * installed instead of 376.0 MB), so this trades disk for that convenience at the moment
 * a caller actually needs it.
 *
 * @param destDir directory to write into; created if absent.
 * @param girIds namespaces to write, defaulting to all of them.
 * @returns the number of files written.
 */
export const extractGirFiles = (destDir: string, girIds?: readonly string[]): number => {
  mkdirSync(destDir, { recursive: true });
  const wanted = girIds ?? listGirFiles().map((f) => f.girId);
  let written = 0;
  for (const girId of wanted) {
    const info = getGirFile(girId);
    if (!info) throw new Error(`gir-files: unknown namespace ${girId}`);
    writeFileSync(join(destDir, info.file), readGirXml(girId));
    written++;
  }
  return written;
};
