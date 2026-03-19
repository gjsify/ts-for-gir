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
	/** Category for grouping on documentation homepage */
	category?: string;
}
