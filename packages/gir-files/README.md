# @ts-for-gir/gir-files

The original **GIR XML** files that `@girs/*` is generated from, with a per-namespace
provenance and licence record.

```bash
npm install @ts-for-gir/gir-files
```

```ts
import { listGirFiles, readGirXml, getGirFile } from "@ts-for-gir/gir-files";

const xml = readGirXml("Gtk-4.0");        // the full <repository> document
const info = getGirFile("Gtk-4.0");       // provenance + sizes
console.log(info?.license, info?.sourcePackage);

for (const f of listGirFiles()) console.log(f.girId, f.bytes);
```

Need a directory of plain `.gir` files (for `ts-for-gir generate --girDirectories=…`, say)?

```ts
import { extractGirFiles } from "@ts-for-gir/gir-files";
extractGirFiles("./girs");                       // all of them
extractGirFiles("./girs", ["Gtk-4.0", "Adw-1"]); // or a few
```

## Why this exists

GIR XML and the compiled typelib carry **different** data, and the generated `.d.ts` carries
neither in full:

| | GIR XML | typelib | generated `.d.ts` |
|---|---|---|---|
| enum nicks (`glib:nick`) | yes | yes | in `@girs/<ns>/surface` |
| **documentation prose (`<doc>`)** | **yes** | no | no |
| deprecation reasons, `<doc-deprecated>` | yes | no | no |
| introspection annotations (`transfer-ownership`, `nullable`, …) | yes | partly | erased into types |

A tool that wants to explain *why* — a property ledger with reasons and doc text, a
conformance report, a documentation builder — has to read the XML. Until now the only way
to get it was to install the distro `-devel` packages and hope the versions matched the
types you were compiling against.

## What this is NOT — please read

**This package does not tell you what the host will load at runtime.**

gjsify's [ADR 0019 § 2](https://github.com/gjsify/gjsify/blob/main/docs/adr/0019-ts-for-gir-as-library.md)
decided that "the `.gir` travels with the RUNTIME package, never with the type package",
and it is right: GIRepository matches only the *API* version, so a `Gtk-4.0` typelib built
from GTK 4.12 and one built from 4.23 both satisfy `gi://Gtk?version=4.0`. A `.gir` with no
binary next to it therefore proves nothing about the installed library. That is a real
failure that was measured — `tsc` exit 0, `TypeError` at runtime.

This package sits outside that decision because it answers a different question. It does not
claim to describe your host; it describes **its own corpus**:

- Its version tracks the ts-for-gir release train, so `@ts-for-gir/gir-files@X` carries the
  XML that produced `@girs/*@X`. That is a *build-time* correspondence — which input made
  which output — not a runtime one.
- Every entry states where it came from (`sourcePackage`, `sourceRpm`, `upstreamUrl`), so a
  consumer can see it is reading Fedora's `gtk4-devel` and not the GTK on this machine.

The consumers this is for **never load the library at all**: generators, conformance
checkers, documentation builders. ADR 0019 § 5 puts exactly that in ts-for-gir's domain —
*"ts-for-gir knows GIR as XML, parsed headlessly, in CI, with no GTK installed and no typelib
loaded"*.

If you need to know what the running process will actually see, use the `.gir` that ships
beside the binary (`@gjsify/gtk-runtime-*` via `gjsify.prebuilds`), not this package.

## Licensing — read NOTICE.md

The files in `payload/` are **not ours** and are **not permissively licensed**. They are
verbatim copies of upstream artefacts, predominantly under **LGPL-2.1-or-later**, with
**GPL-2.0-or-later**, **GPL-3.0-only**, **LGPL-2.1-only** and other expressions across the
set. None of them carries a licence header of its own, so the terms are inherited from the
project each was generated from.

`package.json` therefore says `"license": "SEE LICENSE IN NOTICE.md"` — no single identifier
is true of this package's contents. [`NOTICE.md`](./NOTICE.md) lists **every** file with the
licence expression and the upstream package it came from.

The packaging around them (`src/`, `scripts/`, `provenance.json`) is Apache-2.0, like the
rest of ts-for-gir.

**A namespace with no provenance record is not published.** `getProvenance().unattributed`
names the ones held back; `readGirXml()` on one of those throws and says why. That refusal is
deliberate: shipping a file we cannot name terms for would be worse than not shipping it.

The provenance table is **evidence, not a legal determination** — a distribution's `License:`
tag covers a whole package rather than one file, and nothing here is legal advice.

## Size

The payload ships **gzipped per file** and is decompressed on read.

Measured over the 510 shipped namespaces (308.0 MB of raw XML), via `npm pack --dry-run`:

| shape | tarball | installed |
|---|---|---|
| plain `.gir` files | 27.5 MB | 308.0 MB |
| per-file `.gir.gz` (what this ships) | 27.6 MB | 27.9 MB |

The tarball costs 0.1 MB more (+0.4 %) and the installed footprint is 11.0× smaller.

That trade is nearly free because gzip's 32 KB window captures almost no redundancy
*between* files. Over the full pool: one `tar.gz` of all 718 files is 32.4 MB, while gzipping
each file separately and summing comes to 32.7 MB — a 0.9 % difference. Pooling into one
stream buys essentially nothing, so pre-compressing gives up essentially nothing. (A format
with a long window — `zstd --long`, `xz` — would do considerably better on this set, but npm
tarballs are gzip.)

Reproduce every number here with the commands in the PR that added this package.

## Regenerating

```bash
scripts/build-gir-provenance.sh              # re-query provenance + licences (needs podman)
node packages/gir-files/scripts/build-payload.mjs   # rebuild payload/ + NOTICE.md
```

`build:app` runs the second one, so a release cut picks it up. The payload is generated, not
committed — `girs/` is already in the repo and a second copy would be 32.7 MB of duplication.
