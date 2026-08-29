#!/usr/bin/env bash
# Build the provenance + licence manifest for the .gir files in `girs/`.
#
# WHY THIS EXISTS
#
# `girs/` is not our work. Every file in it is a verbatim copy of a distro-packaged
# artefact (see fetch-fedora-girs.sh) or a build output of an upstream project, and not
# one of them carries a licence header -- `grep -lE 'SPDX-License|Copyright' girs/*.gir`
# matches zero files. The licence is therefore inherited from the project each file was
# generated from, and nothing in this repository recorded which project that was.
#
# That gap is fine while the pool is only ever READ (the generator emits TypeScript, and
# a type signature is not the XML). It stops being fine the moment we redistribute the
# XML itself, because the upstream licences are real copyleft -- LGPL-2.1-or-later is the
# common case, but the pool also draws on GPL-3.0-only, LGPL-2.1-only and AGPL-3.0-or-later
# packages, and the documentation prose embedded in the `<doc>` elements is separately
# licensed again (packages/gir-module-metadata/src/data/gtk4.ts records GTK's as
# GPL-2.1-or-later against library code that is LGPL-2.1-or-later).
#
# So: a file may only be redistributed if we can say where it came from and under what
# terms. This script establishes that, from the same authority the pool was harvested
# from -- Fedora's repository metadata, whose `%{license}` tag is a maintained SPDX
# expression. It installs nothing; it is a metadata query only, which is why it takes
# a couple of minutes rather than the harvester's hour.
#
# WHAT IT CANNOT DO, stated plainly because a manifest that overclaims is worse than none:
# `%{license}` is the licence of the whole RPM, an AND-expression over everything the
# package ships. It is evidence of the terms the file arrives under, not a per-file
# determination, and it is not legal advice. Files the query cannot place get NO entry,
# and a file with no entry is not published -- that refusal is the point.
#
# Usage: scripts/build-gir-provenance.sh [--fedora <release>] [--gir-dir <dir>] [--out <file>]

set -euo pipefail

FEDORA_VERSION="rawhide"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GIR_DIR="$PROJECT_DIR/girs"
OUT_FILE="$PROJECT_DIR/packages/gir-files/provenance.json"
CONTAINER_RUNTIME="${CONTAINER_RUNTIME:-podman}"

while [[ $# -gt 0 ]]; do
    case "$1" in
        --fedora)  FEDORA_VERSION="$2"; shift 2 ;;
        --gir-dir) GIR_DIR="$2"; shift 2 ;;
        --out)     OUT_FILE="$2"; shift 2 ;;
        -h|--help) sed -n '2,32p' "${BASH_SOURCE[0]}"; exit 0 ;;
        *) echo "unknown argument: $1" >&2; exit 2 ;;
    esac
done

command -v "$CONTAINER_RUNTIME" >/dev/null || {
    echo "error: $CONTAINER_RUNTIME not found" >&2; exit 1
}

TSV="$(mktemp "${TMPDIR:-/tmp}/gir-provenance.XXXXXX.tsv")"
trap 'rm -f "$TSV"' EXIT

echo "==> Querying Fedora $FEDORA_VERSION metadata for .gir provenance (no installs) ..." >&2

# One container, one metadata download. For every package that provides a file under a
# gir-1.0 directory we emit one row per .gir file it owns, carrying the package's SPDX
# licence expression and upstream URL. `--file` matches on file-provides, so this finds
# the owning package without installing it.
#
# `run -i` is load-bearing: without it the container gets no stdin, `bash -s` reads an
# empty script, and podman exits 0 having done nothing. That produced a complete-looking
# manifest with zero Fedora rows on the first run of this script.
# dnf's `--qf` interprets `\n` but NOT `\t`, and terminates no record on its own, so fields
# come back `|`-joined with an explicit newline and are re-split here -- an SPDX expression
# uses the words AND/OR and never a pipe. Omitting the `\n` returns all 288 packages as one
# line, which `sort -u` then reports as a single package: the second silent near-miss here.
"$CONTAINER_RUNTIME" run --rm -i "registry.fedoraproject.org/fedora:${FEDORA_VERSION}" bash -s > "$TSV" <<'INNER'
set -uo pipefail
ARCH="$(rpm --eval '%{_arch}'),noarch"

declare -A LICENSE URL SRPM
while IFS='|' read -r name lic url srpm; do
    [ -n "$name" ] || continue
    [ -n "${LICENSE[$name]:-}" ] && continue
    LICENSE[$name]="$lic"; URL[$name]="$url"; SRPM[$name]="$srpm"
done < <(dnf repoquery -q --file '*/gir-1.0/*.gir' --arch="$ARCH" \
             --qf '%{name}|%{license}|%{url}|%{sourcerpm}\n' 2>/dev/null | sort -u)

echo "# packages providing a .gir: ${#LICENSE[@]}" >&2

# A smoke floor, not a target: Fedora has carried ~288 packages providing a .gir for years,
# and every way this query has broken so far collapsed it to 1. Anything under 100 means the
# query shape is wrong, not that the distro shrank.
if [ "${#LICENSE[@]}" -lt 100 ]; then
    echo "# error: only ${#LICENSE[@]} packages matched -- query shape is broken" >&2
    exit 1
fi

for p in "${!LICENSE[@]}"; do
    dnf repoquery -q --list "$p" --arch="$ARCH" 2>/dev/null \
      | grep -E '/gir-1\.0/[^/]+\.gir$' \
      | sed 's#.*/##' \
      | sort -u \
      | while IFS= read -r girfile; do
            [ -n "$girfile" ] || continue
            printf '%s\t%s\t%s\t%s\t%s\n' \
                "$girfile" "$p" "${LICENSE[$p]}" "${URL[$p]}" "${SRPM[$p]}"
        done
done
INNER

rows=$(grep -cv '^#' "$TSV" || true)
echo "==> $rows (gir file, package) rows returned" >&2

# A metadata query that returns nothing is a broken query, not an empty distro. Exiting 0
# here is what let the first run write a manifest attributing nothing via Fedora at all.
if [ "$rows" -eq 0 ]; then
    echo "error: the Fedora metadata query returned no rows -- refusing to write a manifest" >&2
    echo "       (check container stdin, network, and that fedora:${FEDORA_VERSION} exists)" >&2
    exit 1
fi

node "$PROJECT_DIR/scripts/build-gir-provenance.mjs" \
    --tsv "$TSV" --gir-dir "$GIR_DIR" --out "$OUT_FILE" --release "$FEDORA_VERSION"
