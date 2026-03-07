import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { TypeDefinitionGenerator } from "@ts-for-gir/generator-typescript";
import { type GirModule, type NSRegistry, type OptionsGeneration, Reporter, ReporterService } from "@ts-for-gir/lib";
import { Application, normalizePath, Serializer, TSConfigReader } from "typedoc";

import { buildGirLookupIndex } from "./gir-metadata-index.ts";
import { GirMetadataSerializer } from "./gir-metadata-serializer.ts";
import type { GirNamespaceMetadata } from "./gir-metadata-types.ts";

/**
 * Generator that produces TypeDoc JSON output from GIR modules.
 *
 * Uses a two-step process:
 * 1. Generate .d.ts files into a temporary directory using TypeDefinitionGenerator
 * 2. Run TypeDoc programmatically over those files to produce standardized JSON
 */
export class JsonDefinitionGenerator {
	readonly log: Reporter;
	readonly config: OptionsGeneration;
	readonly registry: NSRegistry;

	private tempDir = "";
	private tsGenerator: TypeDefinitionGenerator | undefined;
	private modules: GirModule[] = [];

	constructor(config: OptionsGeneration, registry: NSRegistry) {
		this.config = config;
		this.registry = registry;
		this.log = new Reporter(
			this.config.verbose,
			JsonDefinitionGenerator.name,
			this.config.reporter,
			this.config.reporterOutput,
		);

		if (this.config.reporter) {
			const reporterService = ReporterService.getInstance();
			reporterService.registerReporter(JsonDefinitionGenerator.name, this.log);
		}
	}

	public async start(): Promise<void> {
		this.log.info("Starting JSON generation via TypeDoc...");

		// Create a temporary directory for .d.ts generation
		this.tempDir = await mkdtemp(join(tmpdir(), "ts-for-gir-json-"));

		// Create an internal TypeDefinitionGenerator with config pointing to the temp directory
		// Force package mode so that tsconfig.json and typedoc.json are generated per module
		const tempConfig: OptionsGeneration = {
			...this.config,
			outdir: this.tempDir,
			package: true,
		};

		this.tsGenerator = new TypeDefinitionGenerator(tempConfig, this.registry);
		await this.tsGenerator.start();
	}

	public async generate(module: GirModule): Promise<void> {
		if (!this.tsGenerator) {
			throw new Error("JsonDefinitionGenerator.start() must be called before generate()");
		}
		this.modules.push(module);
		await this.tsGenerator.generate(module);
	}

	public async finish(girModules: GirModule[]): Promise<void> {
		if (!this.tsGenerator) {
			throw new Error("JsonDefinitionGenerator.start() must be called before finish()");
		}
		// Finish TypeScript generation (creates GJS ambient types, index files, tsconfig.json, typedoc.json per module)
		await this.tsGenerator.finish(girModules);

		try {
			// Create output directory if specified
			if (this.config.outdir) {
				await mkdir(this.config.outdir, { recursive: true });
			}

			// Run TypeDoc for each module
			for (const module of this.modules) {
				await this.generateTypeDocJson(module);
			}

			if (this.config.outdir) {
				this.log.success(`JSON generation completed for ${this.modules.length} modules in ${this.config.outdir}`);
			}
		} finally {
			// Clean up temporary directory
			if (this.tempDir) {
				await rm(this.tempDir, { recursive: true, force: true });
				this.tempDir = "";
			}
		}
	}

	private async generateTypeDocJson(module: GirModule): Promise<void> {
		const moduleDir = join(this.tempDir, module.importName);
		const entryPoint = join(moduleDir, `${module.importName}.d.ts`);
		const tsconfigPath = join(moduleDir, "tsconfig.json");

		const app = await Application.bootstrap(
			{
				entryPoints: [entryPoint],
				tsconfig: normalizePath(tsconfigPath),
				skipErrorChecking: true,
				name: module.packageName,
			},
			[new TSConfigReader()],
		);

		const project = await app.convert();
		if (!project) {
			this.log.error(`TypeDoc conversion failed for ${module.packageName}`);
			return;
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

		const jsonOutput = app.serializer.projectToObject(project, normalizePath(moduleDir));
		const pretty = this.config.verbose;
		const jsonStr = `${JSON.stringify(jsonOutput, null, pretty ? "\t" : "")}\n`;

		if (this.config.outdir) {
			const filepath = join(this.config.outdir, `${module.packageName}.json`);
			await writeFile(filepath, jsonStr, "utf8");
			this.log.info(`Generated ${filepath}`);
		} else {
			this.log.log(jsonStr);
		}
	}
}
