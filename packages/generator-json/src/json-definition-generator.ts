import { type GirModule, type NSRegistry, type OptionsGeneration, Reporter, ReporterService } from "@ts-for-gir/lib";
import { JsonGenerator } from "./json-generator.ts";

/**
 * Generator interface implementation for JSON output
 * This provides the high-level Generator interface that can be used by the CLI
 */
export class JsonDefinitionGenerator {
	readonly log: Reporter;
	readonly config: OptionsGeneration;
	readonly registry: NSRegistry;

	constructor(config: OptionsGeneration, registry: NSRegistry) {
		this.config = config;
		this.registry = registry;
		this.log = new Reporter(
			this.config.verbose,
			JsonDefinitionGenerator.name,
			this.config.reporter,
			this.config.reporterOutput,
		);

		// Register with reporter service if reporting is enabled
		if (this.config.reporter) {
			const reporterService = ReporterService.getInstance();
			reporterService.registerReporter(JsonDefinitionGenerator.name, this.log);
		}
	}

	public async generate(module: GirModule): Promise<void> {
		const jsonGenerator = new JsonGenerator(module, this.config);
		const output = await jsonGenerator.stringifyNamespace(module);

		if (output) {
			if (this.config.outdir) {
				// Write to file
				const fs = await import("node:fs/promises");
				const path = await import("node:path");

				const filename = `${module.packageName}.json`;
				const filepath = path.join(this.config.outdir, filename);

				await fs.writeFile(filepath, output, "utf8");
				this.log.info(`Generated ${filename}`);
			} else {
				// Output to console
				this.log.log(output);
			}
		} else {
			this.log.error(`Failed to generate JSON for ${module.packageName}`);
		}
	}

	public async start(): Promise<void> {
		this.log.info("Starting JSON generation...");
	}

	public async finish(girModules: GirModule[]): Promise<void> {
		this.log.success(`JSON generation completed for ${girModules.length} modules`);
	}
}
