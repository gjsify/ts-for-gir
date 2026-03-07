import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import type { GirModule, NSRegistry, OptionsGeneration } from "@ts-for-gir/lib";
import { Reporter, ReporterService } from "@ts-for-gir/lib";

import { TypeDocPipeline } from "./typedoc-pipeline.ts";

/**
 * Generator that produces TypeDoc JSON output from GIR modules.
 *
 * Uses {@link TypeDocPipeline} for the shared .d.ts → TypeDoc conversion,
 * then serializes each ProjectReflection to JSON.
 */
export class JsonDefinitionGenerator {
	readonly log: Reporter;
	readonly config: OptionsGeneration;
	readonly registry: NSRegistry;

	private readonly pipeline: TypeDocPipeline;

	constructor(config: OptionsGeneration, registry: NSRegistry) {
		this.config = config;
		this.registry = registry;
		this.pipeline = new TypeDocPipeline(config, registry);
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
		await this.pipeline.start();
	}

	public async generate(module: GirModule): Promise<void> {
		await this.pipeline.generate(module);
	}

	public async finish(girModules: GirModule[]): Promise<void> {
		await this.pipeline.finishTypescriptGeneration(girModules);

		try {
			if (this.config.outdir) {
				await mkdir(this.config.outdir, { recursive: true });
			}

			for (const module of this.pipeline.modules) {
				await this.generateTypeDocJson(module);
			}

			if (this.config.outdir) {
				this.log.success(
					`JSON generation completed for ${this.pipeline.modules.length} modules in ${this.config.outdir}`,
				);
			}
		} finally {
			await this.pipeline.cleanup();
		}
	}

	private async generateTypeDocJson(module: GirModule): Promise<void> {
		const { app, project } = await this.pipeline.createTypeDocApp(module);
		const moduleDir = this.pipeline.getModuleDir(module);

		const jsonOutput = app.serializer.projectToObject(project, moduleDir);
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
