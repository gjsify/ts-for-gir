/** Curated metadata for a GIR namespace / library. */
export interface GirModuleMetadata {
  /** GIR namespace identifier, e.g. "Gtk-4.0" */
  girId: string;
  /** Human-readable display name, e.g. "GTK" */
  displayName: string;
  /** Short description of the library */
  description: string;
  /** SPDX license identifier for the library's documentation */
  docLicense?: string;
  /** SPDX license identifier for the library code itself */
  license?: string;
  /** Author(s) */
  authors?: string;
  /** Project website URL */
  websiteUrl?: string;
  /** Source code browsing URL (e.g. GitLab tree view) */
  browseUrl?: string;
  /** Git repository URL */
  repositoryUrl?: string;
  /** URL to upstream C API documentation */
  cDocsUrl?: string;
  /** Logo/icon URL (absolute URL) */
  logoUrl?: string;
  /** Icon filename from refs/library-icons (e.g. "librsvg-r.svg"). Used as fallback when logoUrl is not set. */
  iconFile?: string;
  /** Category for grouping on documentation homepage */
  category?: string;
  /**
   * Does this entry describe the library for EVERY version of its namespace?
   *
   * Off by default, because a namespace version can mean a different library:
   * `Gtk-3.0` and `Gtk-4.0` carry separate entries and must not answer for one
   * another. But Mutter's namespaces (`Meta`, `Clutter`, `Cogl`, `Mtk`) and
   * GNOME Shell's (`St`, `Shell`) are versioned by an API number that changes
   * every cycle while the library, its authors, licence and docs stay put —
   * and GNOME 51 moved that number from 18 to 51 in one step. Pinning the
   * metadata to one number meant the whole set silently lost its icon,
   * category and upstream links on every release.
   *
   * At most one entry per namespace may set this; a second one is a load-time
   * error, not a last-one-wins.
   */
  versionAgnostic?: boolean;
}
