/**
 * Types for config file
 */
export interface UserConfig {
	/** root / working directory of your project */
	root: string;
	/** directory to output to */
	outdir: string | null;
	/** GIR directories */
	girDirectories: string[];
	/** Switch on/off the verbose mode */
	verbose: boolean;
	/** Do not ask for package versions if multiple versions are found */
	ignoreVersionConflicts: boolean;
	/** print the output to console and create no files */
	print: boolean;
	/** GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules */
	modules: string[];
	/** modules that should be ignored */
	ignore?: string[];
	/** Do not export all symbols for each module as a namespace */
	noNamespace: boolean;
	/** Do not generate documentation comments */
	noComments: boolean;
	/** Generate promisified functions for async/finish calls */
	promisify: boolean;
	/**
	 * Emit the GIR-derived widget vocabulary on an opt-in `./vocabulary` subpath, for
	 * every namespace that declares descendants of `GtkWidget`.
	 *
	 * Off by default: it is a separate subpath, so a consumer that never imports it
	 * parses zero additional bytes, but the FILES still cost generation time and
	 * tarball size for the 700-odd namespaces that have no widgets at all. The
	 * namespace gate is automatic — a namespace with no `GtkWidget` descendant
	 * never emits a surface even with this on.
	 */
	widgetVocabulary: boolean;
	/**
	 * Emit every generated namespace as ONE npm package with this name, instead of one
	 * package per namespace.
	 *
	 * Implies `package: true` and sets `npmScope` to this name, so cross-namespace imports
	 * become self-reference subpaths (`@girs/sdk-gnome-50/gdk-4.0`) that resolve inside the
	 * bundle. The per-namespace manifests are replaced by a single `package.json` at the
	 * output root whose `exports` map every namespace to a subpath.
	 *
	 * The point is a closed set: a runtime-pinned type set (a Flatpak SDK, say) must never
	 * be able to resolve half its namespaces against a differently-versioned copy from the
	 * registry. Two copies of one namespace are not a version skew, they are duplicate
	 * `declare module 'gi://GLib'` blocks — the "Incompatible GObject type" failure of #431.
	 * One package cannot be installed twice at different versions, so the failure mode is
	 * gone by construction rather than by discipline.
	 */
	bundle?: string;
	/**
	 * JSON object merged into the bundle `package.json`. Carries provenance the generator
	 * cannot know — which SDK the GIR files came from, at which commit. Only valid together
	 * with `bundle`; `name` and `exports` are computed and cannot be overridden.
	 */
	bundleMeta?: Record<string, unknown>;
	/** Scope of the generated NPM packages */
	npmScope: string;
	/** Uses the workspace protocol for the generated packages which can be used with package managers like Yarn and PNPM */
	workspace: boolean;
	/**
	 * Format used for dependency version specifiers in generated package.json files.
	 * - `workspace`: emit `workspace:^` (yarn/pnpm; npm only when the ref matches a registered workspace)
	 * - `caret`: emit `^<version>` (all managers, falls back to registry for dangling refs)
	 * - `any`: emit `*` (all managers, most permissive)
	 * - `exact`: emit `<version>` (all managers, no range)
	 *
	 * If unset, defaults to `workspace` when `workspace: true`, else `caret`.
	 */
	depVersionFormat?: "workspace" | "caret" | "any" | "exact";
	/**
	 * Only use the version prefix for the ambient module exports.
	 * This is useful if, for whatever reason, you want to use different library versions of the same library in your project.
	 *
	 * @example
	 * ```ts
	 * declare module 'gi://Gtk?version=4.0' {...}
	 * declare module 'gi://Gtk?version=3.0' {...}
	 * ```
	 */
	onlyVersionPrefix: boolean;
	/** Do not prettify the generated types */
	noPrettyPrint: boolean;
	/** Disable GLib.Variant class with string parsing */
	noAdvancedVariants: boolean;
	/**
	 * Generate the typescript types with package.json support
	 */
	package: boolean;
	/**
	 * Enable generation problem reporter and create a detailed report file
	 */
	reporter: boolean;
	/**
	 * Output file path for the reporter
	 */
	reporterOutput: string;
	/** Generate a single unified documentation for all modules instead of separate per-module docs */
	combined?: boolean;
	/** URL template for source links in generated documentation. Supports {path}, {line}, {gitRevision} placeholders */
	sourceLinkTemplate?: string;
	/** Theme for HTML documentation generation (default: "gi-docgen") */
	theme?: string;
	/** Path to a README file to use as the documentation index page (default: "none") */
	readme?: string;
	/** Use TypeDoc merge mode to generate HTML from pre-generated JSON files */
	merge?: boolean;
	/** Directory containing pre-generated TypeDoc JSON files for merge mode (from 'ts-for-gir json') */
	jsonDir?: string;
	/**
	 * External-deps mode: emit `import` statements that reference dependency types from
	 * already-installed npm packages (e.g. `@girs/glib-2.0`) instead of regenerating them.
	 * Designed for project-local GIRs (Vala bridges etc.) where the surrounding `@girs/*`
	 * ecosystem is already in node_modules.
	 */
	externalDeps: boolean;
	/**
	 * Allow `externalDeps` generation to proceed when some transitive dep GIRs are missing.
	 * Default is strict: missing deps cause an error to prevent silent type-quality drift
	 * between environments with and without system GIR -devel packages installed.
	 */
	allowMissingDeps: boolean;
	/**
	 * Override the default `<npmScope>/<importName>` mapping for individual namespaces when
	 * resolving external dependency imports in `externalDeps` mode.
	 *
	 * Example: `{ Soup: '@girs/soup-3.0', GLib: '@girs/glib-2.0' }`
	 */
	externalPackages?: Record<string, string>;
}
