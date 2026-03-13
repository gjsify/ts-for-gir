import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { TypeDefinitionGenerator } from "@ts-for-gir/generator-typescript";
import type { GirModule, NSRegistry, OptionsGeneration } from "@ts-for-gir/lib";
import {
	Application,
	type NormalizedPath,
	normalizePath,
	type ProjectReflection,
	Serializer,
	TSConfigReader,
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

	/** Shared TypeDoc bootstrap options. */
	private get sharedOptions() {
		return {
			skipErrorChecking: true,
			validation: NO_VALIDATION,
			readme: this.config.readme || "none",
			logLevel: this.config.verbose ? ("Verbose" as const) : ("Info" as const),
			highlightLanguages: ["typescript", "javascript", "c", "cpp", "xml", "bash", "json", "css"],
		};
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

	/**
	 * Bootstrap a TypeDoc Application for the given module,
	 * convert to ProjectReflection, and enrich with GIR metadata.
	 */
	async createTypeDocApp(module: GirModule): Promise<{ app: Application; project: ProjectReflection }> {
		const moduleDir = join(this.tempDir, module.importName);
		const entryPoint = join(moduleDir, `${module.importName}.d.ts`);
		const tsconfigPath = join(moduleDir, "tsconfig.json");

		const app = await Application.bootstrap(
			{
				entryPoints: [entryPoint],
				tsconfig: normalizePath(tsconfigPath),
				name: module.packageName,
				...this.sharedOptions,
				...this.sourceLinkOptions,
			},
			[new TSConfigReader()],
		);

		const project = await app.convert();
		if (!project) {
			throw new Error(`TypeDoc conversion failed for ${module.packageName}`);
		}

		this.registerGirMetadata(app, module);

		return { app, project };
	}

	/** Register GIR metadata serializer and namespace-level metadata on a TypeDoc app. */
	private registerGirMetadata(app: Application, module: GirModule): void {
		const index = buildGirLookupIndex(module);
		app.serializer.addSerializer(new GirMetadataSerializer(index));

		app.serializer.on(Serializer.EVENT_END, (event) => {
			if (event.output) {
				const nsMeta: GirNamespaceMetadata = {
					namespace: module.namespace,
					version: module.version,
					packageName: module.packageName,
					cPrefixes: module.c_prefixes,
					libraryVersion: module.libraryVersion.toString(),
					dependencies: module.dependencies.map((d) => ({
						namespace: d.namespace,
						version: d.version,
					})),
				};
				// biome-ignore lint/suspicious/noExplicitAny: extending TypeDoc's JSON schema with custom field
				(event.output as any).girNamespaceMetadata = nsMeta;
			}
		});
	}

	/**
	 * Get the normalized path to a module's temporary directory.
	 * Useful for TypeDoc's `projectToObject()` base path.
	 */
	getModuleDir(module: GirModule): NormalizedPath {
		return normalizePath(join(this.tempDir, module.importName));
	}

	/**
	 * Bootstrap a single TypeDoc Application using the "packages" entry point strategy
	 * to generate combined documentation for all modules.
	 *
	 * TypeDoc discovers each module's package.json, typedoc.json, and tsconfig.json,
	 * converts each package separately, then merges them into one ProjectReflection.
	 */
	async createCombinedTypeDocApp(): Promise<{ app: Application; project: ProjectReflection }> {
		const app = await Application.bootstrap(
			{
				entryPoints: [join(this.tempDir, "*")],
				entryPointStrategy: "packages",
				name: "GIR API Documentation",
				...this.sharedOptions,
				...this.sourceLinkOptions,
				packageOptions: {
					skipErrorChecking: true,
					validation: NO_VALIDATION,
					...this.sourceLinkOptions,
				},
			},
			[new TSConfigReader()],
		);

		const project = await app.convert();
		if (!project) {
			throw new Error("TypeDoc conversion failed for combined packages");
		}

		return { app, project };
	}

	/**
	 * Bootstrap a TypeDoc Application using the "merge" entry point strategy.
	 * Reads pre-generated JSON files and merges them into a single ProjectReflection.
	 *
	 * This does NOT require start() or generate() to have been called.
	 * It works entirely from pre-existing JSON files generated by `ts-for-gir json`.
	 */
	async createMergedTypeDocApp(jsonDir: string): Promise<{ app: Application; project: ProjectReflection }> {
		const app = await Application.bootstrap(
			{
				entryPoints: [join(jsonDir, "*.json")],
				entryPointStrategy: "merge",
				name: "GIR API Documentation",
				...this.sharedOptions,
			},
			[],
		);

		// Register GIR metadata deserializer to restore custom fields from JSON
		app.deserializer.addDeserializer(new GirMetadataDeserializer());

		const project = await app.convert();
		if (!project) {
			throw new Error("TypeDoc merge conversion failed");
		}

		return { app, project };
	}

	async cleanup(): Promise<void> {
		if (this.tempDir) {
			await rm(this.tempDir, { recursive: true, force: true });
			this.tempDir = "";
		}
	}
}
