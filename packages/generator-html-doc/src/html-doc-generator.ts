import { mkdir } from "node:fs/promises";
import { join } from "node:path";

import { TypeDocPipeline } from "@ts-for-gir/generator-json";
import type { GirModule, NSRegistry, OptionsGeneration } from "@ts-for-gir/lib";
import { Reporter, ReporterService } from "@ts-for-gir/lib";

/**
 * Generator that produces HTML documentation from GIR modules using TypeDoc.
 *
 * Uses {@link TypeDocPipeline} for the shared .d.ts → TypeDoc conversion,
 * then generates HTML documentation via TypeDoc's built-in renderer.
 */
export class HtmlDocGenerator {
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
			HtmlDocGenerator.name,
			this.config.reporter,
			this.config.reporterOutput,
		);

		if (this.config.reporter) {
			const reporterService = ReporterService.getInstance();
			reporterService.registerReporter(HtmlDocGenerator.name, this.log);
		}
	}

	public async start(): Promise<void> {
		this.log.info("Starting HTML documentation generation via TypeDoc...");
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

			if (this.config.combined !== false) {
				await this.generateCombinedHtmlDoc();
			} else {
				for (const module of this.pipeline.modules) {
					await this.generateHtmlDoc(module);
				}
			}

			if (this.config.outdir) {
				this.log.success(`HTML documentation generated for ${this.pipeline.modules.length} modules in ${this.config.outdir}`);
			}
		} finally {
			await this.pipeline.cleanup();
		}
	}

	private async generateCombinedHtmlDoc(): Promise<void> {
		if (!this.config.outdir) {
			this.log.error("HTML documentation requires --outdir to be specified");
			return;
		}

		const { app, project } = await this.pipeline.createCombinedTypeDocApp();
		await app.generateDocs(project, this.config.outdir);
		this.log.info(`Generated combined HTML docs for ${this.pipeline.modules.length} modules in ${this.config.outdir}`);
	}

	private async generateHtmlDoc(module: GirModule): Promise<void> {
		const { app, project } = await this.pipeline.createTypeDocApp(module);

		if (!this.config.outdir) {
			this.log.error("HTML documentation requires --outdir to be specified");
			return;
		}

		const outDir = join(this.config.outdir, module.packageName);
		await app.generateDocs(project, outDir);
		this.log.info(`Generated HTML docs for ${module.packageName} in ${outDir}`);
	}
}
