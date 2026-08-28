#!/bin/bash

# Harvest .gir/.typelib files from a Fedora release inside a container.
#
# The workstation runs ONE Fedora release, so `copy:girs` can only ever see the
# GNOME version that release ships. A GNOME cycle starts in Rawhide months
# earlier, which is where the types for a beta have to come from — so the gir
# pool is filled from a container instead of from the host.
#
# Companion to build-gnome-shell-girs.sh: gnome-shell ships no Shell/St girs at
# all and has to be BUILT, everything else is just a package away. Both write
# into ./girs, which is the repo's committed gir pool.
#
# Prerequisites: podman (or docker)
#
# Usage:
#   ./scripts/fetch-fedora-girs.sh                    # Rawhide, real copy
#   ./scripts/fetch-fedora-girs.sh --dry-run          # report the diff only
#   ./scripts/fetch-fedora-girs.sh --fedora 44        # a specific release
#   ./scripts/fetch-fedora-girs.sh --only 'Gtk-4.0'   # one module (repeatable)

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m'

log_info()    { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[OK]${NC} $1"; }
log_warn()    { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error()   { echo -e "${RED}[ERROR]${NC} $1"; }

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
GIRS_DIR="$PROJECT_DIR/girs"
CONTAINER_NAME="ts-for-gir-fedora-girs"
CONTAINER_RUNTIME="podman"
FEDORA_VERSION="rawhide"
DRY_RUN=false
KEEP_CONTAINER=false
ALLOW_DOWNGRADE=false
FROM_STAGE=false
ONLY_PATTERNS=()

usage() {
    cat <<EOF
Usage: $0 [OPTIONS]

Harvest .gir/.typelib files from a Fedora release inside a container into ./girs.

Options:
  --fedora VERSION   Fedora release / image tag (default: rawhide)
  --only PATTERN     Only harvest girs whose basename matches PATTERN
                     (shell glob, without the .gir suffix). Repeatable.
  --dry-run          Report what would be added/changed, copy nothing
  --allow-downgrade  Also take girs whose library version went BACKWARDS
                     (refused by default — see the note in the script)
  --from-stage       Reuse the staging dir of a previous run: compare and
                     copy without starting a container again
  --docker           Use docker instead of podman
  --keep-container   Do not remove the container afterwards
  --out DIR          Destination directory (default: ./girs)
  --help             Show this help

Examples:
  $0 --dry-run
  $0 --only 'Meta-*' --only 'Clutter-*' --only 'Mtk-*' --only 'Cogl-*'
EOF
}

while [[ $# -gt 0 ]]; do
    case $1 in
        --fedora)         FEDORA_VERSION="$2"; shift 2 ;;
        --only)           ONLY_PATTERNS+=("$2"); shift 2 ;;
        --out)            GIRS_DIR="$2"; shift 2 ;;
        --dry-run)        DRY_RUN=true; shift ;;
        --allow-downgrade) ALLOW_DOWNGRADE=true; shift ;;
        --from-stage)     FROM_STAGE=true; shift ;;
        --docker)         CONTAINER_RUNTIME="docker"; shift ;;
        --keep-container) KEEP_CONTAINER=true; shift ;;
        --help)           usage; exit 0 ;;
        *)                log_error "Unknown option: $1"; usage; exit 1 ;;
    esac
done

if ! command -v "$CONTAINER_RUNTIME" &>/dev/null; then
    log_error "$CONTAINER_RUNTIME is not installed."
    exit 1
fi
mkdir -p "$GIRS_DIR"

# The staging dir is what the container writes into. It is NEVER the gir pool
# itself: a `dnf install` sweep of a whole Fedora release can carry a gir that
# is OLDER than the committed one, and overwriting in place would make that
# invisible until a type regression showed up downstream. Staging first turns
# every candidate into a reviewable add/change.
STAGE_DIR="$PROJECT_DIR/.fedora-girs-$FEDORA_VERSION"
if $FROM_STAGE; then
    [[ -d "$STAGE_DIR" ]] || { log_error "No staging dir at $STAGE_DIR — run without --from-stage first."; exit 1; }
else
    rm -rf "$STAGE_DIR"
    mkdir -p "$STAGE_DIR"
fi

cleanup_container() {
    if $CONTAINER_RUNTIME inspect "$CONTAINER_NAME" &>/dev/null; then
        $CONTAINER_RUNTIME stop "$CONTAINER_NAME" &>/dev/null || true
        $CONTAINER_RUNTIME rm "$CONTAINER_NAME" &>/dev/null || true
    fi
}

finish() {
    if [[ "$KEEP_CONTAINER" == "false" ]]; then
        cleanup_container
    else
        log_info "Keeping container: $CONTAINER_NAME"
    fi
}
trap 'log_error "Interrupted"; finish; exit 1' INT TERM

if $FROM_STAGE; then
    log_info "Reusing staged files at $STAGE_DIR (--from-stage)"
else
    cleanup_container

    log_info "=== Fedora GIR harvester (fedora:$FEDORA_VERSION) ==="

    $CONTAINER_RUNTIME run -d \
        --name "$CONTAINER_NAME" \
        -v "$STAGE_DIR:/out:Z" \
        "registry.fedoraproject.org/fedora:${FEDORA_VERSION}" \
        sleep infinity >/dev/null

    log_info "Container up. Installing every package that provides a .gir ..."

    # Same search dirs and the same conflict groups as fedora-find-gir-packages.sh,
    # which does this against the HOST. Kept in step with it by hand — the two run
    # in different worlds (no dnf on a non-Fedora host, no host paths in here).
    $CONTAINER_RUNTIME exec -i "$CONTAINER_NAME" bash -s <<'INNER'
    set -uo pipefail
    dnf install -y --setopt=install_weak_deps=False findutils >/dev/null 2>&1

    ARCH=$(rpm --eval '%{_arch}')

    # Older members of a conflicting pair install the same non-GIR files and would
    # abort the whole transaction; prefer the newer one.
    declare -A CONFLICT_SKIP=(
        [libgda5-ui-devel]=1
        [libgda5-devel]=1
    )

    mapfile -t pkgs < <(dnf repoquery -f '*.gir' --arch="$ARCH,noarch" --qf '%{name}\n' 2>/dev/null | sort -u)
    echo "repoquery: ${#pkgs[@]} packages provide a .gir"

    install_list=()
    for p in "${pkgs[@]}"; do
        [[ -n "${CONFLICT_SKIP[$p]:-}" ]] && continue
        install_list+=("$p")
    done

    # `fedora-cisco-openh264` serves an rpm whose signature does not verify against
    # the key the container trusts. dnf treats that as a TRANSACTION failure, so one
    # unrelated codec package took all several hundred gir packages down with it and
    # the harvest silently collected nothing. No repo but the Fedora ones ships a
    # .gir, so it is simply not in scope here.
    DNF_ARGS=(-y --disablerepo=fedora-cisco-openh264 --skip-broken --skip-unavailable
              --nobest --setopt=install_weak_deps=False)

    # One big transaction first — then, if it fails, package by package, so that a
    # single unsatisfiable package cannot cost the harvest the other 292.
    if ! dnf install "${DNF_ARGS[@]}" "${install_list[@]}" 2>&1 | tail -3; then
        echo "bulk install failed — retrying one package at a time"
        for p in "${install_list[@]}"; do
            dnf install "${DNF_ARGS[@]}" "$p" >/dev/null 2>&1 || echo "  skipped: $p"
        done
    fi

    echo "installed: $(rpm -qa | wc -l) rpms"
INNER

    log_info "Collecting .gir / .typelib files from the container ..."

    $CONTAINER_RUNTIME exec -i "$CONTAINER_NAME" bash -s <<'INNER'
    set -uo pipefail
    GIR_DIRS=(/usr/local/share/gir-1.0 /usr/share/gir-1.0 /usr/share/gnome-shell /usr/share/gnome-shell/gir-1.0)
    for d in /usr/share/*/gir-1.0 /usr/lib64/mutter-* /usr/lib/mutter-*; do
        [ -d "$d" ] && GIR_DIRS+=("$d")
    done
    LIB_DIRS=(/usr/lib64/girepository-1.0 /usr/lib/girepository-1.0)
    for d in /usr/lib64/mutter-* /usr/lib/mutter-*; do
        [ -d "$d" ] && LIB_DIRS+=("$d")
    done

    n=0
    for d in "${GIR_DIRS[@]}"; do
        [ -d "$d" ] || continue
        for f in "$d"/*.gir; do
            [ -e "$f" ] || continue
            cp -f "$f" /out/ && n=$((n+1))
        done
    done
    for d in "${LIB_DIRS[@]}"; do
        [ -d "$d" ] || continue
        for f in "$d"/*.typelib; do
            [ -e "$f" ] || continue
            cp -f "$f" /out/
        done
    done
    echo "collected: $n .gir, $(ls /out/*.typelib 2>/dev/null | wc -l) .typelib"
INNER
    finish
fi


# A harvest that collected nothing is a broken rig, not an up-to-date pool —
# and the two report identically ("0 new, 0 changed"). The first version of
# this script ran `podman exec` without -i, so the container never received the
# heredoc, ran an empty script and exited 0.
staged_count=$(find "$STAGE_DIR" -maxdepth 1 -name '*.gir' | wc -l)
if [[ "$staged_count" -eq 0 ]]; then
    log_error "No .gir files came out of the container — the harvest did not run."
    exit 1
fi
log_success "Staged $staged_count .gir file(s) from fedora:$FEDORA_VERSION"

# --- Compare staged against the pool ---------------------------------------

matches_only() {
    local base="$1"
    [[ ${#ONLY_PATTERNS[@]} -eq 0 ]] && return 0
    local pat
    for pat in "${ONLY_PATTERNS[@]}"; do
        # shellcheck disable=SC2053
        [[ "$base" == $pat ]] && return 0
    done
    return 1
}

# A gir states its library version in three constants. Read them, because a
# Fedora release is NOT uniformly newer than the one that filled the pool:
# measured against rawhide (GNOME 51 beta), 8 of 279 changed girs went
# BACKWARDS — legacy stacks Rawhide has not rebuilt (Gtk-3.0 3.24.53 -> .52,
# Clutter-1.0 1.26.5 -> .4, GIRepository-2.0 1.86.1 -> .0 and five more). A
# wholesale copy would have quietly regressed those types while the commit
# message said "update GIR files".
gir_constant() {
    # `value=` can sit on the line AFTER `name=` — the tag is pretty printed in
    # some girs. A single-line pattern misses those, and it misses them
    # SILENTLY: measured against rawhide it read 6 of the 8 real downgrades and
    # waved GIRepository-2.0 (1.86.1 -> 1.86.0) and ClutterGst-3.0 through.
    grep -m1 -A2 "name=\"$2_VERSION\"" "$1" 2>/dev/null |
        grep -m1 -oE 'value="[0-9]+"' |
        grep -oE '[0-9]+'
}

gir_version() {
    local file="$1" major minor micro
    major=$(gir_constant "$file" MAJOR)
    minor=$(gir_constant "$file" MINOR)
    micro=$(gir_constant "$file" MICRO)
    # Not every gir carries them; an unknown version is not a downgrade claim.
    [[ -z "$major" || -z "$minor" ]] && return 1
    echo "${major}.${minor}.${micro:-0}"
}

added=()
changed=()
downgraded=()
unchanged=0
skipped=0

shopt -s nullglob
for staged in "$STAGE_DIR"/*.gir "$STAGE_DIR"/*.typelib; do
    file="$(basename "$staged")"
    base="${file%.gir}"; base="${base%.typelib}"
    if ! matches_only "$base"; then
        skipped=$((skipped+1))
        continue
    fi
    target="$GIRS_DIR/$file"
    if [[ ! -f "$target" ]]; then
        added+=("$file")
    elif cmp -s "$staged" "$target"; then
        unchanged=$((unchanged+1))
    elif [[ "$file" == *.gir ]] && ! $ALLOW_DOWNGRADE \
         && old_v=$(gir_version "$target") && new_v=$(gir_version "$staged") \
         && [[ "$old_v" != "$new_v" ]] \
         && [[ "$(printf '%s\n%s\n' "$old_v" "$new_v" | sort -V | head -1)" == "$new_v" ]]; then
        downgraded+=("$file ($old_v -> $new_v)")
    else
        changed+=("$file")
    fi
done
shopt -u nullglob

echo ""
echo -e "${BOLD}=== fedora:$FEDORA_VERSION vs $GIRS_DIR ===${NC}"
echo "  new:        ${#added[@]}"
echo "  changed:    ${#changed[@]}"
echo "  identical:  $unchanged"
echo "  refused:    ${#downgraded[@]} (older in fedora:$FEDORA_VERSION)"
[[ $skipped -gt 0 ]] && echo "  filtered:   $skipped (--only)"

if [[ ${#downgraded[@]} -gt 0 ]]; then
    echo ""
    echo -e "${BOLD}Refused — the pool already has a newer library${NC}"
    printf '  ! %s\n' "${downgraded[@]}"
    echo "  (pass --allow-downgrade to take them anyway)"
fi

if [[ ${#added[@]} -gt 0 ]]; then
    echo ""
    echo -e "${BOLD}New files${NC}"
    printf '  + %s\n' "${added[@]}"
fi
if [[ ${#changed[@]} -gt 0 ]]; then
    echo ""
    echo -e "${BOLD}Changed files${NC}"
    printf '  ~ %s\n' "${changed[@]}"
fi

if $DRY_RUN; then
    echo ""
    log_info "Dry run — nothing copied. Staged files kept at:"
    echo "  $STAGE_DIR"
    exit 0
fi

for file in "${added[@]}" "${changed[@]}"; do
    cp -f "$STAGE_DIR/$file" "$GIRS_DIR/$file"
done
rm -rf "$STAGE_DIR"

echo ""
log_success "Copied $(( ${#added[@]} + ${#changed[@]} )) file(s) into $GIRS_DIR"
log_info "Next: review 'git -C \"$PROJECT_DIR\" status girs' before committing"
