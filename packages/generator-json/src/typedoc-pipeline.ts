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

import { buildGirLookupIndex } from "./gir-metadata-index.ts";
import { GirMetadataSerializer } from "./gir-metadata-serializer.ts";
import type { GirNamespaceMetadata } from "./gir-metadata-types.ts";

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
	async createTypeDocApp(module: GirModule): Promise<{ app: Application; project: ProjectReflection }> {
		const moduleDir = join(this.tempDir, module.importName);
		const entryPoint = join(moduleDir, `${module.importName}.d.ts`);
		const tsconfigPath = join(moduleDir, "tsconfig.json");

		const app = await Application.bootstrap(
			{
				entryPoints: [entryPoint],
				tsconfig: normalizePath(tsconfigPath),
				skipErrorChecking: true,
				name: module.packageName,
				// Enable C/C++ highlighting for code blocks in JSDoc (GIR docs often show C API examples)
				highlightLanguages: ["typescript", "javascript", "c", "cpp", "xml", "bash", "json", "css"],
			},
			[new TSConfigReader()],
		);

		const project = await app.convert();
		if (!project) {
			throw new Error(`TypeDoc conversion failed for ${module.packageName}`);
		}

		// Register GIR metadata serializer to enrich JSON output
		const index = buildGirLookupIndex(module);
		app.serializer.addSerializer(new GirMetadataSerializer(index));

		// Add namespace-level metadata via EVENT_END
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

		return { app, project };
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
				skipErrorChecking: true,
				highlightLanguages: ["typescript", "javascript", "c", "cpp", "xml", "bash", "json", "css"],
				packageOptions: {
					skipErrorChecking: true,
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

	async cleanup(): Promise<void> {
		if (this.tempDir) {
			await rm(this.tempDir, { recursive: true, force: true });
			this.tempDir = "";
		}
	}
}
