import { mkdir } from "node:fs/promises";
import { type Generator, GeneratorType } from "@ts-for-gir/generator-base";
import { HtmlDocGenerator } from "@ts-for-gir/generator-html-doc";
import { JsonDefinitionGenerator } from "@ts-for-gir/generator-json";
import { TypeDefinitionGenerator } from "@ts-for-gir/generator-typescript";
import {
	conflictsReporter,
	ERROR_NO_MODULE_SPECIFIED,
	FILE_PARSING_DONE,
	GENERATING_TYPES_DONE,
	type GirModule,
	girParsingReporter,
	type NSRegistry,
	type OptionsGeneration,
	Reporter,
	ReporterService,
	START_MODULE,
	TSDATA_PARSING_DONE,
	TypeIdentifier,
} from "@ts-for-gir/lib";

export class GenerationHandler {
	log: Reporter;
	generator: Generator;
	protected readonly config: OptionsGeneration;
	protected readonly registry: NSRegistry;
	private readonly reporterService: ReporterService;

	constructor(config: OptionsGeneration, type: GeneratorType, registry: NSRegistry) {
		this.registry = registry;
		this.config = config;
		this.log = new Reporter(config.verbose, "GenerationHandler", config.reporter, config.reporterOutput);
		this.reporterService = ReporterService.getInstance();

		// Configure the reporter service
		this.reporterService.configure(config.reporter, config.reporterOutput);

		// Configure reporters globally
		TypeIdentifier.configureReporter(config.reporter, config.reporterOutput);
		conflictsReporter.configure(config.reporter, config.reporterOutput);
		girParsingReporter.configure(config.reporter, config.reporterOutput);

		// Register the main handler reporter
		if (config.reporter) {
			this.reporterService.registerReporter("GenerationHandler", this.log);
		}

		switch (type) {
			case GeneratorType.TYPES:
				this.generator = new TypeDefinitionGenerator(config, this.registry);
				break;
			case GeneratorType.HTML_DOC:
				this.generator = new HtmlDocGenerator(config, this.registry);
				break;
			case GeneratorType.JSON:
				this.generator = new JsonDefinitionGenerator(config, this.registry);
				break;
			default:
				throw new Error("Unknown Generator");
		}
	}

	public async start(girModules: GirModule[]): Promise<void> {
		this.log.info(START_MODULE);

		if (girModules.length === 0) {
			this.log.error(ERROR_NO_MODULE_SPECIFIED);
		}

		this.log.info(FILE_PARSING_DONE);

		this.log.info(TSDATA_PARSING_DONE);

		try {
			if (this.config.outdir) {
				await mkdir(this.config.outdir, { recursive: true });
			}

			// TODO: Put this somewhere that makes sense
			this.registry.transform({
				inferGenerics: true,
				verbose: this.config.verbose,
				reporter: this.config.reporter,
				reporterOutput: this.config.reporterOutput,
			});

			await this.generator.start();

			for (const girModule of girModules) {
				this.log.log(` - ${girModule.packageName} ...`);
				await this.generator.generate(girModule);
			}

			await this.generator.finish(girModules);

			this.log.success(GENERATING_TYPES_DONE);
		} finally {
			// Generate comprehensive report if reporter is enabled
			// This will run even if there's an error
			if (this.config.reporter) {
				await this.generateComprehensiveReport();
			}
		}
	}

	private async generateComprehensiveReport(): Promise<void> {
		try {
			// Generate report once, pass to print and save
			const report = this.reporterService.generateComprehensiveReport();

			this.reporterService.printComprehensiveSummary(report);
			await this.reporterService.saveComprehensiveReport(undefined, report);

			const totalProblems = report.statistics.totalProblems;
			const modulesProcessed = this.reporterService.getReporters().size;

			if (totalProblems > 0) {
				this.log.info(`📊 Generated comprehensive report: ${totalProblems} issues across ${modulesProcessed} modules`);
			} else {
				this.log.success("🎉 Generation completed without any reported issues across all modules!");
			}
		} catch (error) {
			this.log.danger(`Failed to generate comprehensive report: ${error}`);
		}
	}
}
