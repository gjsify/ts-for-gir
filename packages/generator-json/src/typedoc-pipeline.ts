import { readFileSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { TypeDefinitionGenerator } from "@ts-for-gir/generator-typescript";
import { getModuleMetadata } from "@ts-for-gir/gir-module-metadata";
import type { GirModule, NSRegistry, OptionsGeneration } from "@ts-for-gir/lib";
import {
	Application,
	Converter,
	type DeclarationReflection,
	type NormalizedPath,
	normalizePath,
	type OptionsReader,
	type ProjectReflection,
	ReferenceReflection,
	ReflectionCategory,
	Serializer,
	TSConfigReader,
	type TypeDocOptions,
} from "typedoc";
import { GirMetadataDeserializer } from "./gir-metadata-deserializer.ts";
import { buildGirLookupIndex } from "./gir-metadata-index.ts";
import { GirMetadataSerializer } from "./gir-metadata-serializer.ts";
import type { GirNamespaceMetadata } from "./gir-metadata-types.ts";

/** Disable all TypeDoc validation checks to speed up generation. */
const NO_VALIDATION = {
	notExported: false,
	invalidLink: false,
	invalidPath: false,
	rewrittenLink: false,
	notDocumented: false,
	unusedMergeModuleWith: false,
} as const;

/** Languages to highlight in TypeDoc code blocks. */
const HIGHLIGHT_LANGUAGES = ["typescript", "javascript", "c", "cpp", "xml", "bash", "json", "css"] as const;

/** Result of bootstrapping a TypeDoc application. */
export interface TypeDocAppResult {
	app: Application;
	project: ProjectReflection;
}

/**
 * Shared pipeline for TypeDoc-based generators (JSON and HTML doc).
 *
 * Handles the common steps:
 * 1. Generate .d.ts files into a temporary directory
 * 2. Bootstrap TypeDoc and convert to ProjectReflection
 * 3. Enrich with GIR metadata via custom SerializerComponent
 *
 * Consumers call `createTypeDocApp()` per module and then decide
 * what to do with the result (serialize to JSON, generate HTML, etc.).
 */
export class TypeDocPipeline {
	private tempDir = "";
	private tsGenerator: TypeDefinitionGenerator | undefined;
	private readonly _modules: GirModule[] = [];
	readonly config: OptionsGeneration;
	readonly registry: NSRegistry;

	constructor(config: OptionsGeneration, registry: NSRegistry) {
		this.config = config;
		this.registry = registry;
	}

	get modules(): ReadonlyArray<GirModule> {
		return this._modules;
	}

	async start(): Promise<void> {
		this.tempDir = await mkdtemp(join(tmpdir(), "ts-for-gir-typedoc-"));

		const tempConfig: OptionsGeneration = {
			...this.config,
			outdir: this.tempDir,
			package: true,
		};

		this.tsGenerator = new TypeDefinitionGenerator(tempConfig, this.registry);
		await this.tsGenerator.start();
	}

	async generate(module: GirModule): Promise<void> {
		if (!this.tsGenerator) {
			throw new Error("TypeDocPipeline.start() must be called before generate()");
		}
		this._modules.push(module);
		await this.tsGenerator.generate(module);
	}

	async finishTypescriptGeneration(girModules: GirModule[]): Promise<void> {
		if (!this.tsGenerator) {
			throw new Error("TypeDocPipeline.start() must be called before finishTypescriptGeneration()");
		}
		await this.tsGenerator.finish(girModules);
	}

	/**
	 * Bootstrap a TypeDoc Application for the given module,
	 * convert to ProjectReflection, and enrich with GIR metadata.
	 */
	async createTypeDocApp(module: GirModule): Promise<TypeDocAppResult> {
		const moduleDir = join(this.tempDir, module.importName);
		const entryPoint = join(moduleDir, `${module.importName}.d.ts`);
		const tsconfigPath = join(moduleDir, "tsconfig.json");
		const readmePath = join(moduleDir, "README.md");

		const result = await this.bootstrapAndConvert(
			{
				entryPoints: [entryPoint],
				tsconfig: normalizePath(tsconfigPath),
				name: module.packageName,
				// Include the generated README.md so it gets embedded in JSON output
				// and is available when using merge mode later.
				readme: readmePath,
				...this.sourceLinkOptions,
			},
			[new TSConfigReader()],
		);

		// Set packageVersion so it's serialized into JSON and available in merge mode.
		// In "packages" mode TypeDoc reads this from package.json automatically,
		// but in per-module mode we need to set it explicitly.
		result.project.packageVersion = module.libraryVersion.toString();

		this.registerGirMetadata(result.app, module);

		// Attach metadata directly to module reflections for HTML rendering.
		// registerGirMetadata only hooks into the serializer (for JSON export);
		// the theme needs metadata on the reflections themselves.
		const nsMeta = this.buildNamespaceMetadata(module);
		for (const child of result.project.children ?? []) {
			(child as unknown as { girNamespaceMetadata?: GirNamespaceMetadata }).girNamespaceMetadata ??= nsMeta;
		}

		return result;
	}

	/**
	 * Get the normalized path to a module's temporary directory.
	 * Useful for TypeDoc's `projectToObject()` base path.
	 */
	getModuleDir(module: GirModule): NormalizedPath {
		return normalizePath(join(this.tempDir, module.importName));
	}

	/**
	 * Get the normalized path to the GJS package temporary directory.
	 */
	getGjsDir(): NormalizedPath {
		return normalizePath(join(this.tempDir, "gjs"));
	}

	/**
	 * Bootstrap a TypeDoc Application for the GJS core types package.
	 *
	 * GJS is a pseudo-package (not a GIR module) that provides core GJS
	 * type definitions. It is generated by TypeDefinitionGenerator.exportGjs()
	 * during finishTypescriptGeneration(), creating a complete package with
	 * gjs.d.ts, typedoc.json, tsconfig.json, etc. in the temp directory.
	 *
	 * Returns null if the GJS package was not generated (e.g. temp dir missing).
	 */
	async createGjsTypeDocApp(): Promise<TypeDocAppResult | null> {
		const gjsDir = join(this.tempDir, "gjs");
		const tsconfigPath = join(gjsDir, "tsconfig.json");
		const readmePath = join(gjsDir, "README.md");

		// Include all GJS .d.ts files so TypeDoc sees all namespaces.
		// With a single entry point, only gjs.d.ts contents are visible;
		// cairo, gettext, system, console, dom namespaces would be missing.
		const entryPoints = [
			join(gjsDir, "gjs.d.ts"),
			join(gjsDir, "cairo.d.ts"),
			join(gjsDir, "gettext.d.ts"),
			join(gjsDir, "system.d.ts"),
			join(gjsDir, "dom.d.ts"),
			join(gjsDir, "console.d.ts"),
		];

		try {
			const result = await this.bootstrapAndConvert(
				{
					entryPoints,
					tsconfig: normalizePath(tsconfigPath),
					name: "Gjs",
					readme: readmePath,
					...this.sourceLinkOptions,
				},
				[new TSConfigReader()],
			);

			this.attachNamespaceMetadata(result.app, this.buildGjsNamespaceMetadata());
			return result;
		} catch {
			return null;
		}
	}

	/**
	 * Bootstrap a single TypeDoc Application using the "packages" entry point strategy
	 * to generate combined documentation for all modules.
	 *
	 * TypeDoc discovers each module's package.json, typedoc.json, and tsconfig.json,
	 * converts each package separately, then merges them into one ProjectReflection.
	 */
	async createCombinedTypeDocApp(): Promise<TypeDocAppResult> {
		const result = await this.bootstrapAndConvert(
			{
				entryPoints: [join(this.tempDir, "*")],
				entryPointStrategy: "packages",
				name: "TypeScript API Documentation for GJS",
				...this.sourceLinkOptions,
				packageOptions: {
					skipErrorChecking: true,
					validation: NO_VALIDATION,
					...this.sourceLinkOptions,
				},
			},
			[new TSConfigReader()],
		);
		this.fixExportImportReferences(result.project);
		this.enrichModuleReflections(result.project);
		return result;
	}

	/**
	 * Bootstrap a TypeDoc Application using the "merge" entry point strategy.
	 * Reads pre-generated JSON files and merges them into a single ProjectReflection.
	 *
	 * This does NOT require start() or generate() to have been called.
	 * It works entirely from pre-existing JSON files generated by `ts-for-gir json`.
	 */
	async createMergedTypeDocApp(jsonDir: string): Promise<TypeDocAppResult> {
		const app = await this.bootstrapApp(
			{
				entryPoints: [join(jsonDir, "*.json")],
				entryPointStrategy: "merge",
				name: "TypeScript API Documentation for GJS",
			},
			[],
		);

		// Register deserializer for merge mode — restores GIR metadata from JSON
		app.deserializer.addDeserializer(new GirMetadataDeserializer());

		const result = await this.convertApp(app, "merged documentation");
		this.fixExportImportReferences(result.project);
		this.enrichMergedModuleMetadata(result.project);
		return result;
	}

	/**
	 * Enrich module reflections with curated metadata after merge.
	 *
	 * In merge mode, girNamespaceMetadata lives at the project-root level of
	 * each individual JSON file. When TypeDoc merges these files, the metadata
	 * may not be transferred to the resulting module reflections. This method
	 * fills in missing metadata from the curated registry so that the theme
	 * can always categorise and describe every module.
	 */
	private enrichMergedModuleMetadata(project: ProjectReflection): void {
		if (!project.children) return;
		for (const child of project.children) {
			const enriched = child as DeclarationReflection & { girNamespaceMetadata?: GirNamespaceMetadata };
			// Skip modules that already have a category from the JSON deserializer
			if (enriched.girNamespaceMetadata?.category) continue;

			// Try to find curated metadata by matching the module name to a GIR ID.
			// Module names in the merged project follow the pattern "Namespace-Version"
			// (e.g. "Gtk-4.0") which matches the girId used in the metadata registry.
			const meta = getModuleMetadata(child.name);
			if (!meta) continue;

			const existing = enriched.girNamespaceMetadata ?? ({} as GirNamespaceMetadata);
			enriched.girNamespaceMetadata = {
				...existing,
				displayName: existing.displayName ?? meta.displayName,
				description: existing.description ?? meta.description,
				logoUrl: existing.logoUrl ?? meta.logoUrl ?? (meta.iconFile ? `assets/library-icons/${meta.iconFile}` : undefined),
				iconFile: existing.iconFile ?? meta.iconFile,
				websiteUrl: existing.websiteUrl ?? meta.websiteUrl,
				cDocsUrl: existing.cDocsUrl ?? meta.cDocsUrl,
				license: existing.license ?? meta.license,
				category: existing.category ?? meta.category,
			};
		}
	}

	/**
	 * Attach metadata to module reflections by matching against known GIR modules.
	 * Used in combined mode where modules are discovered via "packages" entry point strategy.
	 */
	private enrichModuleReflections(project: ProjectReflection): void {
		if (!project.children) return;

		// Build lookup maps: by importName (e.g. "rsvg-2.0") and by packageName (e.g. "Rsvg-2.0")
		const metaByImportName = new Map<string, GirNamespaceMetadata>();
		for (const module of this.modules) {
			metaByImportName.set(module.importName, this.buildNamespaceMetadata(module));
		}

		for (const child of project.children) {
			const enriched = child as DeclarationReflection & { girNamespaceMetadata?: GirNamespaceMetadata };
			if (enriched.girNamespaceMetadata?.category) continue;

			// Module name may be scoped (e.g. "@girs/rsvg-2.0") — extract the importName part
			const scopeMatch = child.name.match(/^@[^/]+\/(.+)$/);
			const importName = scopeMatch ? scopeMatch[1] : child.name.toLowerCase();
			const nsMeta = metaByImportName.get(importName);
			if (nsMeta) {
				enriched.girNamespaceMetadata ??= nsMeta;
			}
		}
	}

	async cleanup(): Promise<void> {
		if (this.tempDir) {
			await rm(this.tempDir, { recursive: true, force: true });
			this.tempDir = "";
		}
	}

	/** Source link options derived from config. */
	private get sourceLinkOptions() {
		if (!this.config.sourceLinkTemplate) return {};
		return {
			sourceLinkTemplate: this.config.sourceLinkTemplate,
			basePath: normalizePath(this.tempDir),
			disableGit: true,
		};
	}

	/** Shared bootstrap options used by all create*TypeDocApp methods. */
	private get sharedBootstrapOptions(): Partial<TypeDocOptions> {
		return {
			skipErrorChecking: true,
			validation: NO_VALIDATION,
			// Disable TypeDoc's built-in output directory cleanup so that git
			// submodule files (e.g. docs/.git) are preserved across builds.
			cleanOutputDir: false,
			// Only set readme if explicitly configured — otherwise let TypeDoc
			// auto-discover README.md files from individual packages.
			...(this.config.readme ? { readme: this.config.readme } : {}),
			logLevel: this.config.verbose ? ("Verbose" as const) : ("Info" as const),
			highlightLanguages: [...HIGHLIGHT_LANGUAGES],
		};
	}

	/**
	 * Bootstrap a TypeDoc Application with shared defaults and custom tags.
	 * Does NOT convert — call {@link convertApp} separately when you need
	 * to register additional plugins (e.g. deserializers) before conversion.
	 */
	private async bootstrapApp(
		options: Partial<TypeDocOptions>,
		readers: readonly OptionsReader[],
	): Promise<Application> {
		const app = await Application.bootstrap({ ...this.sharedBootstrapOptions, ...options }, readers);
		this.registerCustomTags(app);
		return app;
	}

	/** Convert a bootstrapped TypeDoc Application to a ProjectReflection. */
	private async convertApp(app: Application, name = "unknown"): Promise<TypeDocAppResult> {
		const project = await app.convert();
		if (!project) {
			throw new Error(`TypeDoc conversion failed for ${name}`);
		}
		return { app, project };
	}

	/** Bootstrap and immediately convert — shorthand for the common case. */
	private async bootstrapAndConvert(
		options: Partial<TypeDocOptions>,
		readers: readonly OptionsReader[],
	): Promise<TypeDocAppResult> {
		const app = await this.bootstrapApp(options, readers);
		return this.convertApp(app, (options.name as string) || "unknown");
	}

	/** Register custom GIR-specific TSDoc tags so TypeDoc parses and preserves them. */
	private registerCustomTags(app: Application): void {
		const blockTags = app.options.getValue("blockTags") as string[];
		if (!blockTags.includes("@gir-type")) {
			app.options.setValue("blockTags", [...blockTags, "@gir-type"]);
		}

		const modTags = app.options.getValue("modifierTags") as string[];
		const newModTags = [
			"@signal",
			"@detailed",
			"@action",
			"@run-first",
			"@run-last",
			"@run-cleanup",
			"@construct-only",
			"@read-only",
			"@write-only",
		];
		const missingModTags = newModTags.filter((t) => !modTags.includes(t));
		if (missingModTags.length > 0) {
			app.options.setValue("modifierTags", [...modTags, ...missingModTags]);
		}

		// Prevent TypeDoc from rendering these tags in comment output —
		// the theme handles display via badges instead.
		const notRendered = app.options.getValue("notRenderedTags") as string[];
		const tagsToSuppress = [
			"@gir-type",
			"@virtual",
			"@signal",
			"@detailed",
			"@action",
			"@run-first",
			"@run-last",
			"@run-cleanup",
			"@construct-only",
			"@read-only",
			"@write-only",
		];
		const missing = tagsToSuppress.filter((t) => !notRendered.includes(t));
		if (missing.length > 0) {
			app.options.setValue("notRenderedTags", [...notRendered, ...missing]);
		}

		// Enable per-group categories so @category "Inherited from X" creates
		// subcategories within their kind group (Properties, Methods, etc.)
		app.options.setValue("categorizeByGroup", true);
		app.options.setValue("defaultCategory", "None");

		// After TypeDoc's CategoryPlugin has processed categories, move
		// natively inherited members (from TS extends) into "Inherited from X"
		// categories so they display the same as our @category-injected members.
		// Priority -300 ensures this runs AFTER GroupPlugin (-100) creates groups
		// and CategoryPlugin (-200) creates categories.
		app.converter.on(
			Converter.EVENT_RESOLVE_END,
			(context) => {
				this.categorizeInheritedMembers(context.project);
			},
			-300,
		);
	}

	/**
	 * Move natively inherited members from the default "None" category
	 * into "Inherited from X" categories based on their `inheritedFrom` source.
	 *
	 * TypeDoc marks members inherited via TS `extends` with `flags.isInherited`
	 * and `inheritedFrom`, but puts them in the default category alongside own
	 * members. This method splits them into proper source-based categories to
	 * match our @category-injected interface members.
	 */
	private categorizeInheritedMembers(project: ProjectReflection): void {
		for (const r of Object.values(project.reflections)) {
			if (!r.isDeclaration()) continue;
			const refl = r as DeclarationReflection;
			if (!refl.groups) continue;

			for (const group of refl.groups) {
				if (!group.children?.length) continue;

				// Get the children to process: from "None" category if categories exist,
				// or from group.children directly if no categories were created
				const hasCategories = !!group.categories?.length;
				const noneIdx = hasCategories
					? (group.categories?.findIndex((c) => c.title.toLowerCase() === "none") ?? -1)
					: -1;

				// Source of children to split: "None" category or all group children
				const childrenToSplit =
					hasCategories && noneIdx >= 0 ? group.categories?.[noneIdx].children : !hasCategories ? group.children : null;

				if (!childrenToSplit?.length) continue;

				// Split: own members stay, inherited move to source categories
				const inheritedBySource = new Map<string, Array<(typeof childrenToSplit)[0]>>();
				const ownMembers: typeof childrenToSplit = [];

				// Get the owning class name to skip self-references
				const ownerName = refl.getFullName();

				for (const child of childrenToSplit) {
					if (
						child.isDeclaration() &&
						(child as DeclarationReflection).flags.isInherited &&
						(child as DeclarationReflection).inheritedFrom
					) {
						const source = this.extractInheritedSourceName(child as DeclarationReflection);
						// Skip if source is the same class (self-inheritance artifact)
						if (source && source !== ownerName && source !== refl.name) {
							let list = inheritedBySource.get(source);
							if (!list) {
								list = [];
								inheritedBySource.set(source, list);
							}
							list.push(child);
							continue;
						}
					}
					ownMembers.push(child);
				}

				if (inheritedBySource.size === 0) continue;

				// Ensure categories array exists
				if (!group.categories) {
					group.categories = [];
				}

				// Update or remove the None category
				if (hasCategories && noneIdx >= 0) {
					if (ownMembers.length > 0) {
						group.categories[noneIdx].children = ownMembers;
					} else {
						group.categories.splice(noneIdx, 1);
					}
				} else if (!hasCategories && ownMembers.length > 0) {
					// No categories existed before — create None for own members
					const noneCat = new ReflectionCategory("None");
					noneCat.children = ownMembers;
					group.categories.unshift(noneCat);
				}

				// Add inherited members to existing or new "Inherited from X" categories
				const catByTitle = new Map(group.categories.map((c) => [c.title, c]));
				for (const [source, members] of inheritedBySource) {
					const catTitle = `Inherited from ${source}`;
					const existing = catByTitle.get(catTitle);
					if (existing) {
						existing.children.push(...members);
					} else {
						const cat = new ReflectionCategory(catTitle);
						cat.children = members;
						group.categories.push(cat);
						catByTitle.set(catTitle, cat);
					}
				}
			}
		}
	}

	/**
	 * Extract a human-readable source name from an inherited member's `inheritedFrom`.
	 * e.g. `"Window.accessible_role"` → looks up parent to get `"Gtk.Window"`.
	 */
	private extractInheritedSourceName(child: DeclarationReflection): string | null {
		if (!child.inheritedFrom) return null;

		// Try to resolve via the referenced reflection's parent
		const target = child.inheritedFrom.reflection;
		if (target?.parent) {
			const parent = target.parent;
			// Get the full qualified name: "Gtk.Window" from the parent's path
			const fullName = parent.getFullName();
			// The full name format is "Module.Class" — keep as-is
			if (fullName) return fullName;
		}

		// Fallback: extract from the name string (e.g. "Window.method" → "Window")
		const name = child.inheritedFrom.name;
		const dotIdx = name.indexOf(".");
		return dotIdx > 0 ? name.slice(0, dotIdx) : name;
	}

	/**
	 * Fix ReferenceReflection targets broken by TypeDoc's handling of
	 * `export import X = Y.Z` statements.
	 *
	 * TypeDoc may resolve all such re-exports within a namespace to the same
	 * target reflection (e.g. every Cairo enum points to Status). This method
	 * detects the mismatch and corrects each reference's internal target ID.
	 */
	private fixExportImportReferences(project: ProjectReflection): void {
		// Step 1: Identify targets that are shared by multiple references with
		// different names — the specific bug pattern where TypeDoc resolves all
		// `export import X = Y.Z` statements to the same target.
		const refsByTargetId = new Map<number, ReferenceReflection[]>();
		for (const r of Object.values(project.reflections)) {
			if (!(r instanceof ReferenceReflection)) continue;
			const target = r.tryGetTargetReflectionDeep();
			if (!target) continue;
			let list = refsByTargetId.get(target.id);
			if (!list) {
				list = [];
				refsByTargetId.set(target.id, list);
			}
			list.push(r);
		}

		// Only consider targets where multiple differently-named references
		// point to the same reflection — a single reference with a different
		// name (e.g. `default → Gio`) is intentional, not a bug.
		const brokenTargetIds = new Set<number>();
		for (const [targetId, refs] of refsByTargetId) {
			const distinctNames = new Set(refs.map((r) => r.name));
			if (distinctNames.size > 1) {
				brokenTargetIds.add(targetId);
			}
		}

		if (brokenTargetIds.size === 0) return;

		// Step 2: Build a lookup of non-reference reflections by name.
		const nonRefByName = new Map<string, Array<{ id: number; kind: number }>>();
		for (const refl of Object.values(project.reflections)) {
			if (refl.isReference()) continue;
			let list = nonRefByName.get(refl.name);
			if (!list) {
				list = [];
				nonRefByName.set(refl.name, list);
			}
			list.push({ id: refl.id, kind: refl.kind });
		}

		// Step 3: Fix only the references pointing to broken (shared) targets.
		for (const r of Object.values(project.reflections)) {
			if (!(r instanceof ReferenceReflection)) continue;

			const target = r.tryGetTargetReflectionDeep();
			if (!target || target.name === r.name) continue;
			if (!brokenTargetIds.has(target.id)) continue;

			const candidates = nonRefByName.get(r.name);
			if (!candidates?.length) continue;

			// Prefer a candidate with the same kind as the (wrong) target.
			// Fall back to the first candidate if kinds don't match.
			const correctTarget = candidates.find((c) => c.kind === target.kind) ?? candidates[0];

			// ReferenceReflection._target is private; direct assignment
			// is the only way to fix the resolved ID after conversion.
			(r as unknown as { _target: number })._target = correctTarget.id;
		}
	}

	/** Register GIR metadata serializer and namespace-level metadata on a TypeDoc app. */
	private registerGirMetadata(app: Application, module: GirModule): void {
		const index = buildGirLookupIndex(module);
		app.serializer.addSerializer(new GirMetadataSerializer(index));
		this.attachNamespaceMetadata(app, this.buildNamespaceMetadata(module));
	}

	/** Attach namespace-level metadata to the TypeDoc JSON output via a serializer event. */
	private attachNamespaceMetadata(app: Application, nsMeta: GirNamespaceMetadata): void {
		app.serializer.on(Serializer.EVENT_END, (event) => {
			if (event.output) {
				// biome-ignore lint/suspicious/noExplicitAny: extending TypeDoc's JSON schema with custom field
				(event.output as any).girNamespaceMetadata = nsMeta;
			}
		});
	}

	private buildNamespaceMetadata(module: GirModule): GirNamespaceMetadata {
		const meta = getModuleMetadata(`${module.namespace}-${module.version}`);
		const pkgJson = this.readPackageJson(module.importName);

		return this.mergeMetadataWithPackageJson(
			{
				namespace: module.namespace,
				version: module.version,
				packageName: module.packageName,
				cPrefixes: module.c_prefixes,
				libraryVersion: module.libraryVersion.toString(),
				dependencies: module.dependencies.map((d) => ({
					namespace: d.namespace,
					version: d.version,
				})),
			},
			meta,
			pkgJson,
		);
	}

	/** Build namespace metadata for the GJS pseudo-package (no GIR module). */
	private buildGjsNamespaceMetadata(): GirNamespaceMetadata {
		const meta = getModuleMetadata("Gjs");
		const pkgJson = this.readPackageJson("gjs");

		return this.mergeMetadataWithPackageJson(
			{
				namespace: "Gjs",
				version: "",
				packageName: "Gjs",
				cPrefixes: [],
				libraryVersion: "",
				dependencies: [],
			},
			meta,
			pkgJson,
		);
	}

	/** Merge curated module metadata and package.json fallbacks into a GirNamespaceMetadata. */
	private mergeMetadataWithPackageJson(
		base: Pick<
			GirNamespaceMetadata,
			"namespace" | "version" | "packageName" | "cPrefixes" | "libraryVersion" | "dependencies"
		>,
		meta: ReturnType<typeof getModuleMetadata>,
		pkgJson: { version?: string; description?: string; license?: string; homepage?: string } | null,
	): GirNamespaceMetadata {
		return {
			...base,
			packageVersion: pkgJson?.version,
			displayName: meta?.displayName,
			description: meta?.description ?? pkgJson?.description,
			logoUrl: meta?.logoUrl ?? (meta?.iconFile ? `assets/library-icons/${meta.iconFile}` : undefined),
			iconFile: meta?.iconFile,
			websiteUrl: meta?.websiteUrl ?? pkgJson?.homepage,
			cDocsUrl: meta?.cDocsUrl,
			license: meta?.license ?? pkgJson?.license,
			category: meta?.category,
		};
	}

	/** Try to read the generated package.json for a module from the temp directory. */
	private readPackageJson(
		importName: string,
	): { version?: string; description?: string; license?: string; homepage?: string } | null {
		try {
			const content = readFileSync(join(this.tempDir, importName, "package.json"), "utf8");
			return JSON.parse(content);
		} catch {
			return null;
		}
	}
}
