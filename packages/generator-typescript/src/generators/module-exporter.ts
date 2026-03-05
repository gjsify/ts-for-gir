import type { DependencyManager, GirModule, NSRegistry, OptionsGeneration, Reporter } from "@ts-for-gir/lib";
import type { ModuleGenerator } from "../module-generator.ts";
import { NpmPackage } from "../npm-package.ts";
import type { TemplateProcessor } from "../template-processor.ts";

/** Handles exporting generated modules to files. */
export class ModuleExporter {
	constructor(private readonly core: ModuleGenerator) {}

	private get config(): OptionsGeneration {
		return this.core.config;
	}

	private get log(): Reporter {
		return this.core.log;
	}

	private get moduleTemplateProcessor(): TemplateProcessor {
		return this.core.moduleTemplateProcessor;
	}

	private get dependencyManager(): DependencyManager {
		return this.core.dependencyManager;
	}

	async exportModuleIndexJS(): Promise<void> {
		const template = "index.js";
		const target = "index.js";

		if (this.config.outdir) {
			await this.moduleTemplateProcessor.create(template, this.config.outdir, target);
		} else {
			const { append, prepend } = await this.moduleTemplateProcessor.load(template);
			this.log.log(append + prepend);
		}
	}

	async exportModuleIndexTS(): Promise<void> {
		const template = "index.d.ts";
		const target = "index.d.ts";

		if (this.config.outdir) {
			await this.moduleTemplateProcessor.create(template, this.config.outdir, target);
		} else {
			const { append, prepend } = await this.moduleTemplateProcessor.load(template);
			this.log.log(append + prepend);
		}
	}

	async exportModuleJS(girModule: GirModule): Promise<void> {
		const template = "module.js";
		const target = `${girModule.importName}.js`;

		if (this.config.outdir) {
			await this.moduleTemplateProcessor.create(template, this.config.outdir, target);
		} else {
			const { append, prepend } = await this.moduleTemplateProcessor.load(template);
			this.log.log(append + prepend);
		}
	}

	async exportModuleAmbientTS(girModule: GirModule): Promise<void> {
		const template = "module-ambient.d.ts";
		const target = `${girModule.importName}-ambient.d.ts`;

		if (this.config.outdir) {
			await this.moduleTemplateProcessor.create(template, this.config.outdir, target);
		} else {
			const { append, prepend } = await this.moduleTemplateProcessor.load(template);
			this.log.log(append + prepend);
		}
	}

	async exportModuleAmbientJS(girModule: GirModule): Promise<void> {
		const template = "module-ambient.js";
		const target = `${girModule.importName}-ambient.js`;

		if (this.config.outdir) {
			await this.moduleTemplateProcessor.create(template, this.config.outdir, target);
		} else {
			const { append, prepend } = await this.moduleTemplateProcessor.load(template);
			this.log.log(append + prepend);
		}
	}

	async exportModuleImportTS(girModule: GirModule): Promise<void> {
		const template = "module-import.d.ts";
		const target = `${girModule.importName}-import.d.ts`;

		if (this.config.outdir) {
			await this.moduleTemplateProcessor.create(template, this.config.outdir, target);
		} else {
			const { append, prepend } = await this.moduleTemplateProcessor.load(template);
			this.log.log(append + prepend);
		}
	}

	async exportModuleImportJS(girModule: GirModule): Promise<void> {
		const template = "module-import.js";
		const target = `${girModule.importName}-import.js`;

		if (this.config.outdir) {
			await this.moduleTemplateProcessor.create(template, this.config.outdir, target);
		} else {
			const { append, prepend } = await this.moduleTemplateProcessor.load(template);
			this.log.log(append + prepend);
		}
	}

	async exportModuleTS(): Promise<void> {
		const girModule = this.core.girNamespace;
		const template = "module.d.ts";
		const explicitTemplate = `${girModule.importName}.d.ts`;
		const target = explicitTemplate;
		const output = await this.core.generateModule(girModule);

		if (!output) {
			this.log.error("Failed to generate gir module");
			return;
		}

		const outputArray = output;

		if (await this.moduleTemplateProcessor.exists(explicitTemplate)) {
			const { append: appendExplicit, prepend: prependExplicit } =
				await this.moduleTemplateProcessor.load(explicitTemplate);
			outputArray.unshift(prependExplicit);
			outputArray.push(appendExplicit);
		}

		const { append, prepend } = await this.moduleTemplateProcessor.load(template);
		outputArray.unshift(prepend);
		outputArray.push(append);

		if (this.config.outdir) {
			await this.moduleTemplateProcessor.write(outputArray.join("\n"), this.config.outdir, target);
		} else {
			this.log.log(outputArray.join("\n"));
		}
	}

	async exportModule(_registry: NSRegistry, girModule: GirModule): Promise<void> {
		await this.exportModuleTS();

		if (this.config.package) {
			await this.exportModuleJS(girModule);

			await this.exportModuleIndexTS();
			await this.exportModuleIndexJS();

			await this.exportModuleAmbientTS(girModule);
			await this.exportModuleAmbientJS(girModule);

			await this.exportModuleImportTS(girModule);
			await this.exportModuleImportJS(girModule);

			const pkg = new NpmPackage(
				this.config,
				this.dependencyManager,
				_registry,
				girModule,
				girModule.transitiveDependencies,
			);
			await pkg.exportNPMPackage();
		}
	}
}
