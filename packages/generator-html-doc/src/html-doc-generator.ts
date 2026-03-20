import { mkdir } from "node:fs/promises";
import { join } from "node:path";

import { type TypeDocAppResult, TypeDocPipeline } from "@ts-for-gir/generator-json";
import { type GirModule, type NSRegistry, type OptionsGeneration, Reporter, ReporterService } from "@ts-for-gir/lib";
import { load as loadGiDocgenTheme } from "@ts-for-gir/typedoc-theme";
import type { Application } from "typedoc";

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
			ReporterService.getInstance().registerReporter(HtmlDocGenerator.name, this.log);
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
			const outdir = this.requireOutdir();
			await mkdir(outdir, { recursive: true });

			if (this.config.combined) {
				const result = await this.pipeline.createCombinedTypeDocApp();
				await this.generateDocsWithTheme(result, outdir);
			} else {
				for (const module of this.pipeline.modules) {
					const result = await this.pipeline.createTypeDocApp(module);
					await this.generateDocsWithTheme(result, join(outdir, module.packageName));
				}
			}

			this.log.success(`HTML documentation generated for ${this.pipeline.modules.length} modules in ${outdir}`);
		} finally {
			await this.pipeline.cleanup();
		}
	}

	/**
	 * Generate combined HTML documentation from pre-generated TypeDoc JSON files.
	 * This bypasses the normal .d.ts generation pipeline entirely, using TypeDoc's merge mode.
	 */
	public async generateFromJson(jsonDir: string): Promise<void> {
		const outdir = this.requireOutdir();
		await mkdir(outdir, { recursive: true });

		this.log.info(`Generating HTML documentation from JSON files in ${jsonDir}...`);
		const result = await this.pipeline.createMergedTypeDocApp(jsonDir);
		await this.generateDocsWithTheme(result, outdir);
		this.log.success(`Generated merged HTML docs from JSON in ${outdir}`);
	}

	/** Apply the configured theme and generate HTML docs into the given directory. */
	private async generateDocsWithTheme({ app, project }: TypeDocAppResult, outdir: string): Promise<void> {
		this.applyTheme(app);
		await app.generateDocs(project, outdir);
	}

	private applyTheme(app: Application): void {
		const themeName = this.config.theme || "gi-docgen";
		if (themeName === "gi-docgen") {
			loadGiDocgenTheme(app);
		}
		app.options.setValue("theme", themeName);
	}

	/** Returns outdir or throws if not configured. */
	private requireOutdir(): string {
		if (!this.config.outdir) {
			throw new Error("HTML documentation requires --outdir to be specified");
		}
		return this.config.outdir;
	}
}
