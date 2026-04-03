#!/bin/bash
# Pack all non-private workspace packages (from packages/*) into tarballs.
# Usage: bash pack.sh <tarballs-dir>
# Outputs a JSON map of { packageName: tarballFilename } to stdout.
# All yarn/pack output goes to stderr.
set -euo pipefail

TARBALLS_DIR="$1"
mkdir -p "$TARBALLS_DIR"

MONOREPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$MONOREPO_ROOT"

# Collect workspace entries, filtering out root, examples, tests, and types-dev
ENTRIES=$(yarn workspaces list --json 2>/dev/null | while read -r line; do
  LOC=$(echo "$line" | node -e "process.stdout.write(JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')).location)")
  [ "$LOC" = "." ] && continue
  case "$LOC" in examples/*|tests/*|types-dev/*) continue ;; esac
  echo "$line"
done)

# Build JSON map
echo "{"
FIRST=true
echo "$ENTRIES" | while read -r line; do
  [ -z "$line" ] && continue
  NAME=$(echo "$line" | node -e "process.stdout.write(JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')).name)")
  # Safe tarball filename: @ts-for-gir/cli → ts-for-gir-cli, @gi.ts/parser → gi.ts-parser
  SAFE=$(echo "$NAME" | sed 's/@//;s/\//-/g')
  TARBALL="$SAFE.tgz"

  yarn workspace "$NAME" pack --out "$TARBALLS_DIR/$TARBALL" >/dev/null 2>&1 || {
    echo "Failed to pack $NAME" >&2
    continue
  }

  if $FIRST; then
    FIRST=false
  else
    echo ","
  fi
  printf '  "%s": "%s"' "$NAME" "$TARBALL"
done
echo ""
echo "}"
