#!/bin/bash

# Script to build Shell and St GIR files from the gnome-shell submodule
# using a Podman/Docker container with the matching Fedora version.
#
# gnome-shell does not install .gir files (only .typelib), so we must
# build from source to obtain Shell-<N>.gir and St-<N>.gir.
#
# Prerequisites: podman (or docker)
#
# Usage:
#   ./scripts/build-gnome-shell-girs.sh                  # auto-detect version from submodule
#   ./scripts/build-gnome-shell-girs.sh --fedora 44      # override Fedora version
#   ./scripts/build-gnome-shell-girs.sh --tag 50.0       # checkout a specific tag first
#   ./scripts/build-gnome-shell-girs.sh --docker          # use docker instead of podman

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SUBMODULE_DIR="$PROJECT_DIR/refs/gnome-shell"
GIRS_DIR="$PROJECT_DIR/girs"
CONTAINER_NAME="ts-for-gir-gnome-shell-build"
CONTAINER_RUNTIME="podman"

# Fedora version to GNOME version mapping (update as new releases come out):
# Fedora 43 = GNOME 49 (Mutter API 17)
# Fedora 44 = GNOME 50 (Mutter API 18)
# Fedora 45 = GNOME 51 (Mutter API 19) — expected
FEDORA_VERSION=""
GNOME_SHELL_TAG=""

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Build Shell and St GIR files from the gnome-shell submodule."
    echo ""
    echo "Options:"
    echo "  --fedora VERSION   Fedora version to use for the build container (default: auto-detect)"
    echo "  --tag TAG          Checkout a specific gnome-shell tag before building"
    echo "  --docker           Use docker instead of podman"
    echo "  --keep-container   Do not remove the build container after completion"
    echo "  --help             Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                          # Build with auto-detected versions"
    echo "  $0 --fedora 44 --tag 50.0   # Build GNOME 50 GIRs using Fedora 44"
    echo "  $0 --tag 51.0 --fedora 45   # Build GNOME 51 GIRs using Fedora 45"
}

# Parse command line arguments
parse_args() {
    local keep_container=false
    while [[ $# -gt 0 ]]; do
        case $1 in
            --fedora)
                FEDORA_VERSION="$2"
                shift 2
                ;;
            --tag)
                GNOME_SHELL_TAG="$2"
                shift 2
                ;;
            --docker)
                CONTAINER_RUNTIME="docker"
                shift
                ;;
            --keep-container)
                keep_container=true
                shift
                ;;
            --help)
                usage
                exit 0
                ;;
            *)
                log_error "Unknown option: $1"
                usage
                exit 1
                ;;
        esac
    done
    KEEP_CONTAINER=$keep_container
}

# Check prerequisites
check_dependencies() {
    if ! command -v "$CONTAINER_RUNTIME" &> /dev/null; then
        log_error "$CONTAINER_RUNTIME is not installed."
        if [[ "$CONTAINER_RUNTIME" == "podman" ]]; then
            log_error "Install it with: sudo dnf install podman"
        else
            log_error "Install Docker Desktop or use --docker flag"
        fi
        exit 1
    fi

    if [[ ! -d "$SUBMODULE_DIR/.git" ]] && [[ ! -f "$SUBMODULE_DIR/.git" ]]; then
        log_error "gnome-shell submodule not found at $SUBMODULE_DIR"
        log_error "Initialize it with: git submodule update --init refs/gnome-shell"
        exit 1
    fi
}

# Checkout a specific tag if requested
checkout_tag() {
    if [[ -n "$GNOME_SHELL_TAG" ]]; then
        log_info "Checking out gnome-shell tag: $GNOME_SHELL_TAG"
        git -C "$SUBMODULE_DIR" fetch --tags
        git -C "$SUBMODULE_DIR" checkout "$GNOME_SHELL_TAG"
    fi
}

# Detect the Mutter API version from the submodule's meson.build
detect_api_version() {
    local meson_file="$SUBMODULE_DIR/meson.build"
    if [[ ! -f "$meson_file" ]]; then
        log_error "Cannot find $meson_file"
        exit 1
    fi

    MUTTER_API_VERSION=$(grep "^mutter_api_version" "$meson_file" | head -1 | grep -oP "'\K[^']+")
    GNOME_SHELL_VERSION=$(grep "version:" "$meson_file" | head -1 | grep -oP "'\\K[^']+")

    if [[ -z "$MUTTER_API_VERSION" ]]; then
        log_error "Could not detect mutter_api_version from $meson_file"
        exit 1
    fi

    log_info "Detected gnome-shell version: $GNOME_SHELL_VERSION"
    log_info "Detected Mutter API version: $MUTTER_API_VERSION"
    log_info "Will generate: Shell-${MUTTER_API_VERSION}.gir and St-${MUTTER_API_VERSION}.gir"
}

# Auto-detect Fedora version based on GNOME Shell version
detect_fedora_version() {
    if [[ -n "$FEDORA_VERSION" ]]; then
        log_info "Using specified Fedora version: $FEDORA_VERSION"
        return
    fi

    # Extract major GNOME version
    local gnome_major
    gnome_major=$(echo "$GNOME_SHELL_VERSION" | cut -d. -f1)

    # Mapping: GNOME major version → Fedora version
    # GNOME 47 → Fedora 41, GNOME 48 → Fedora 42, GNOME 49 → Fedora 43, etc.
    # Pattern: Fedora = GNOME_major - 6
    FEDORA_VERSION=$((gnome_major - 6))

    log_info "Auto-detected Fedora version: $FEDORA_VERSION (for GNOME $gnome_major)"
}

# Clean up any previous container
cleanup_container() {
    if $CONTAINER_RUNTIME inspect "$CONTAINER_NAME" &> /dev/null; then
        log_info "Removing existing build container..."
        $CONTAINER_RUNTIME stop "$CONTAINER_NAME" &> /dev/null || true
        $CONTAINER_RUNTIME rm "$CONTAINER_NAME" &> /dev/null || true
    fi
}

# Build GIR files in container
build_girs() {
    local image="fedora:${FEDORA_VERSION}"

    log_info "Starting build container ($image)..."

    # Start persistent container
    $CONTAINER_RUNTIME run -d \
        --name "$CONTAINER_NAME" \
        -v "$SUBMODULE_DIR:/src:Z" \
        -v "$GIRS_DIR:/out:Z" \
        "$image" \
        sleep infinity

    # Install build dependencies
    log_info "Installing build dependencies (this may take a few minutes)..."
    $CONTAINER_RUNTIME exec "$CONTAINER_NAME" bash -c '
        dnf install -y \
            meson gcc git pkg-config sassc python3-docutils \
            gobject-introspection-devel \
            mutter-devel gjs-devel \
            evolution-data-server-devel \
            gcr-devel gdk-pixbuf2-devel \
            pipewire-devel gnome-desktop4-devel \
            polkit-devel startup-notification-devel \
            gnome-autoar-devel gnome-bluetooth-libs-devel \
            NetworkManager-libnm-devel \
            libsoup3-devel systemd-devel \
            pulseaudio-libs-devel gnome-settings-daemon \
            2>&1 | tail -5
    '

    # Configure
    log_info "Configuring meson build..."
    $CONTAINER_RUNTIME exec "$CONTAINER_NAME" bash -c '
        cd /src && rm -rf _build && meson setup _build --prefix=/usr 2>&1
    ' | tail -20

    # Build
    log_info "Compiling gnome-shell (this may take a few minutes)..."
    $CONTAINER_RUNTIME exec "$CONTAINER_NAME" bash -c '
        cd /src && meson compile -C _build 2>&1
    ' | tail -10

    # Copy GIR files
    log_info "Copying GIR files..."
    local api_ver="$MUTTER_API_VERSION"

    $CONTAINER_RUNTIME exec "$CONTAINER_NAME" bash -c "
        cp /src/_build/src/Shell-${api_ver}.gir /out/ &&
        cp /src/_build/src/st/St-${api_ver}.gir /out/ &&
        cp /src/_build/subprojects/gvc/Gvc-1.0.gir /out/ &&
        cp /src/_build/subprojects/libshew/src/Shew-0.gir /out/ &&
        echo 'Shell-${api_ver}.gir: '\$(wc -c < /out/Shell-${api_ver}.gir)' bytes' &&
        echo 'St-${api_ver}.gir: '\$(wc -c < /out/St-${api_ver}.gir)' bytes' &&
        echo 'Gvc-1.0.gir: '\$(wc -c < /out/Gvc-1.0.gir)' bytes' &&
        echo 'Shew-0.gir: '\$(wc -c < /out/Shew-0.gir)' bytes'
    "
}

# Clean up build artifacts and container
cleanup() {
    # Clean up build directory inside submodule
    if [[ -d "$SUBMODULE_DIR/_build" ]]; then
        log_info "Cleaning up build directory..."
        rm -rf "$SUBMODULE_DIR/_build"
    fi

    # Remove container
    if [[ "$KEEP_CONTAINER" == "false" ]]; then
        log_info "Removing build container..."
        $CONTAINER_RUNTIME stop "$CONTAINER_NAME" &> /dev/null || true
        $CONTAINER_RUNTIME rm "$CONTAINER_NAME" &> /dev/null || true
    else
        log_info "Keeping build container: $CONTAINER_NAME"
    fi
}

# Show summary
show_summary() {
    local api_ver="$MUTTER_API_VERSION"
    echo ""
    log_success "=== BUILD COMPLETE ==="
    echo "  GNOME Shell version: $GNOME_SHELL_VERSION"
    echo "  Mutter API version:  $api_ver"
    echo "  Fedora version:      $FEDORA_VERSION"
    echo ""
    echo "  Generated files:"
    echo "    $GIRS_DIR/Shell-${api_ver}.gir"
    echo "    $GIRS_DIR/St-${api_ver}.gir"
    echo "    $GIRS_DIR/Gvc-1.0.gir (updated)"
    echo "    $GIRS_DIR/Shew-0.gir (updated)"
    echo ""
    log_info "Next steps:"
    echo "  1. yarn ts-for-gir-dev generate Shell-${api_ver} St-${api_ver}"
    echo "  2. yarn build:types"
    echo "  3. yarn check"
}

# Main execution
main() {
    parse_args "$@"

    log_info "=== gnome-shell GIR Builder ==="
    echo ""

    check_dependencies
    checkout_tag
    detect_api_version
    detect_fedora_version
    cleanup_container
    build_girs
    cleanup
    show_summary
}

# Handle interruption — clean up container
trap 'log_error "Interrupted"; cleanup; exit 1' INT TERM

main "$@"
