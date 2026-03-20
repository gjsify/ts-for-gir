#!/bin/bash

# Find and install Fedora packages that provide .gir files.
#
# Searches the same directories that ts-for-gir uses (see defaults.ts),
# queries available packages in one batch, and shows what's missing.
#
# Usage:
#   ./fedora-find-gir-packages.sh           # show what's available/missing
#   ./fedora-find-gir-packages.sh --install  # also install missing packages

set -euo pipefail

# Colors
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

DO_INSTALL=false
if [[ "${1:-}" == "--install" ]]; then
    DO_INSTALL=true
fi

# --- Dependency check ---

if ! command -v dnf &>/dev/null; then
    log_error "dnf not found – this script is for Fedora/RHEL-based systems"
    exit 1
fi

# --- Resolve architecture ---

ARCH=$(rpm --eval '%{_arch}')  # e.g. x86_64

# --- GIR search directories (mirrors defaults.ts getDefaultGirDirectories) ---

GIR_DIRS=(
    /usr/local/share/gir-1.0
    /usr/share/gir-1.0
    /usr/share/gnome-shell
    /usr/share/gnome-shell/gir-1.0
)

# Expand /usr/share/*/gir-1.0 (e.g. /usr/share/glib-2.0/gir-1.0)
for d in /usr/share/*/gir-1.0; do
    [ -d "$d" ] && GIR_DIRS+=("$d")
done

# Expand mutter paths (Fedora: /usr/lib64/mutter-*, Debian/Ubuntu: /usr/lib/x86_64-linux-gnu/mutter-*)
for d in /usr/lib64/mutter-* /usr/lib/mutter-* /usr/lib/x86_64-linux-gnu/mutter-*; do
    [ -d "$d" ] && GIR_DIRS+=("$d")
done

# XDG_DATA_DIRS (NixOS, Flatpak, etc.)
if [ -n "${XDG_DATA_DIRS:-}" ]; then
    IFS=: read -ra xdg_dirs <<< "$XDG_DATA_DIRS"
    for d in "${xdg_dirs[@]}"; do
        gir_d="$d/gir-1.0"
        [ -d "$gir_d" ] && GIR_DIRS+=("$gir_d")
    done
fi

# Deduplicate
mapfile -t GIR_DIRS < <(printf '%s\n' "${GIR_DIRS[@]}" | sort -u)

log_info "GIR search directories (same as ts-for-gir defaults.ts):"
for d in "${GIR_DIRS[@]}"; do
    if [ -d "$d" ]; then
        echo -e "  ${GREEN}✓${NC} $d"
    else
        echo -e "  ${YELLOW}–${NC} $d (not found)"
    fi
done

# --- Step 1: Query all available packages that provide .gir files (single batch) ---

log_info "Querying available packages that provide .gir files..."

mapfile -t available_pkgs < <(
    dnf repoquery -f '*.gir' --arch="$ARCH,noarch" --qf '%{name}\n' 2>/dev/null \
    | sort -u
)

log_info "Found ${#available_pkgs[@]} unique packages providing .gir files"

# --- Step 2: Find which packages with .gir files are already installed ---

mapfile -t installed_pkgs < <(
    dnf repoquery --installed -f '*.gir' --qf '%{name}\n' 2>/dev/null \
    | sort -u
)

log_info "${#installed_pkgs[@]} of those already installed"

# --- Step 3: Build missing list, resolving file conflicts ---

# Known conflicting package groups: packages that install the same non-GIR files.
# Within each group, prefer the newer version (listed last).
CONFLICT_GROUPS=(
    "libgda5-ui-devel libgda-ui-devel"
    "libgda5-devel libgda-devel"
)

# Build a map: package -> preferred replacement (or empty if it IS the preferred one)
declare -A conflict_skip
for group in "${CONFLICT_GROUPS[@]}"; do
    read -ra pkgs <<< "$group"
    preferred="${pkgs[-1]}"
    for pkg in "${pkgs[@]}"; do
        if [[ "$pkg" != "$preferred" ]]; then
            conflict_skip["$pkg"]="$preferred"
        fi
    done
done

declare -A installed_set
for pkg in "${installed_pkgs[@]}"; do
    installed_set["$pkg"]=1
done

missing_pkgs=()
skipped_conflicts=()
for pkg in "${available_pkgs[@]}"; do
    if [[ -n "${installed_set[$pkg]:-}" ]]; then
        continue
    fi
    if [[ -n "${conflict_skip[$pkg]:-}" ]]; then
        skipped_conflicts+=("$pkg -> ${conflict_skip[$pkg]}")
        continue
    fi
    missing_pkgs+=("$pkg")
done

# --- Step 4: Show installed packages and their .gir files ---

echo ""
echo -e "${BOLD}=== Installed packages with .gir files (${#installed_pkgs[@]}) ===${NC}"

for pkg in "${installed_pkgs[@]}"; do
    gir_files=$(dnf repoquery --installed -l "$pkg" 2>/dev/null | grep '\.gir$' || true)
    if [ -n "$gir_files" ]; then
        echo -e "  ${GREEN}●${NC} ${BOLD}$pkg${NC}"
        while IFS= read -r f; do
            echo "      $f"
        done <<< "$gir_files"
    fi
done

# --- Step 5: Show not-installed packages ---

echo ""
echo -e "${BOLD}=== Available but not installed (${#missing_pkgs[@]} packages) ===${NC}"

if [ ${#missing_pkgs[@]} -eq 0 ]; then
    log_success "All available GIR packages are already installed!"
else
    for pkg in "${missing_pkgs[@]}"; do
        echo -e "  ${YELLOW}○${NC} $pkg"
    done

    if [ ${#skipped_conflicts[@]} -gt 0 ]; then
        echo ""
        echo -e "${BOLD}Skipped due to file conflicts (older version → preferred):${NC}"
        for entry in "${skipped_conflicts[@]}"; do
            echo -e "  ${YELLOW}⚠${NC} $entry"
        done
    fi

    echo ""
    if $DO_INSTALL; then
        log_info "Installing ${#missing_pkgs[@]} missing packages..."
        sudo dnf install --skip-unavailable "${missing_pkgs[@]}"
    else
        echo -e "${BOLD}To install all missing packages:${NC}"
        echo "  sudo dnf install --skip-unavailable ${missing_pkgs[*]}"
        echo ""
        echo -e "  Or re-run this script with ${BOLD}--install${NC}"
    fi
fi

# --- Step 6: Known GIR gaps (not available as any Fedora package) ---

echo ""
echo -e "${BOLD}=== Known GIR gaps (not available as Fedora packages) ===${NC}"
echo "These GIRs must be obtained manually (e.g. from the devdocs gnome branch"
echo "or by building from source)."

declare -A known_gaps=(
    ["Shell-*.gir"]="gnome-shell does not ship Shell GIRs"
    ["St-*.gir"]="gnome-shell does not ship St GIRs"
)

has_gaps=false
for pattern in "${!known_gaps[@]}"; do
    found=0
    for d in "${GIR_DIRS[@]}"; do
        for f in "$d"/$pattern; do
            [ -f "$f" ] && found=1 && break
        done
        [ $found -eq 1 ] && break
    done
    if [ $found -eq 0 ]; then
        echo -e "  ${RED}✗${NC} ${BOLD}$pattern${NC}: ${known_gaps[$pattern]}"
        has_gaps=true
    else
        echo -e "  ${GREEN}✓${NC} $pattern: found on system"
    fi
done

if $has_gaps; then
    echo ""
    echo "Tip: Shell/St GIRs are available on the 'gnome' branch of devdocs:"
    echo "  git -C refs/devdocsgjs show origin/gnome:lib/docs/scrapers/gnome/girs/mutter-17/Shell-17.gir"
    echo "  git -C refs/devdocsgjs show origin/gnome:lib/docs/scrapers/gnome/girs/mutter-17/St-17.gir"
fi
