import type { GeneratorType } from "@ts-for-gir/generator-base";
import {
	type ConfigFlags,
	ERROR_NO_MODULES_FOUND,
	type GirModule,
	Logger,
	NSRegistry,
	ReporterService,
} from "@ts-for-gir/lib";
import { getOptionsGeneration, load } from "../config.ts";
import { GenerationHandler } from "../generation-handler.ts";
import { ModuleLoader } from "../module-loader.ts";

interface GenerationCommandOptions {
	generatorType: GeneratorType;
	loggerName: string;
	configureRegistry?: (registry: NSRegistry) => void;
}

export async function runGenerationCommand(args: ConfigFlags, options: GenerationCommandOptions): Promise<void> {
	const config = await load(args);
	const generateConfig = getOptionsGeneration(config);
	const logger = new Logger(true, options.loggerName);
	const registry = new NSRegistry();

	options.configureRegistry?.(registry);

	const moduleLoader = new ModuleLoader(generateConfig, registry);

	let tsForGir: GenerationHandler | null = null;

	try {
		const { keep } = await moduleLoader.getModulesResolved(
			config.modules,
			config.ignore || [],
			config.ignoreVersionConflicts,
		);

		if (keep.length === 0) {
			logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories));
			return;
		}

		tsForGir = new GenerationHandler(generateConfig, options.generatorType, registry);

		moduleLoader.parse(keep);

		const girModules = Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module as GirModule);

		await tsForGir.start(girModules);
	} catch (error) {
		if (generateConfig.reporter && tsForGir) {
			const service = ReporterService.getInstance();

			if (tsForGir.log) {
				tsForGir.log.reportGenerationFailure(
					"Main",
					error instanceof Error ? error : new Error(String(error)),
					"Generation failed",
				);
			}

			const report = service.generateComprehensiveReport();
			service.printComprehensiveSummary(report);
			await service.saveComprehensiveReport(undefined, report);
		}

		throw error;
	}
}
