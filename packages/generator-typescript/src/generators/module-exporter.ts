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

	/** Export a template file to outdir or log its content. */
	private async exportTemplate(template: string, target: string): Promise<void> {
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
		const output = await this.core.generateModule(girModule);

		if (!output) {
			this.log.error("Failed to generate gir module");
			return;
		}

		if (await this.moduleTemplateProcessor.exists(explicitTemplate)) {
			const { append: appendExplicit, prepend: prependExplicit } =
				await this.moduleTemplateProcessor.load(explicitTemplate);
			output.unshift(prependExplicit);
			output.push(appendExplicit);
		}

		const { append, prepend } = await this.moduleTemplateProcessor.load(template);
		output.unshift(prepend);
		output.push(append);

		if (this.config.outdir) {
			await this.moduleTemplateProcessor.write(output.join("\n"), this.config.outdir, explicitTemplate);
		} else {
			this.log.log(output.join("\n"));
		}
	}

	async exportModule(registry: NSRegistry, girModule: GirModule): Promise<void> {
		await this.exportModuleTS();

		if (this.config.package) {
			const name = girModule.importName;
			await this.exportTemplate("module.js", `${name}.js`);
			await this.exportTemplate("index.d.ts", "index.d.ts");
			await this.exportTemplate("index.js", "index.js");
			await this.exportTemplate("module-ambient.d.ts", `${name}-ambient.d.ts`);
			await this.exportTemplate("module-ambient.js", `${name}-ambient.js`);
			await this.exportTemplate("module-import.d.ts", `${name}-import.d.ts`);
			await this.exportTemplate("module-import.js", `${name}-import.js`);

			const pkg = new NpmPackage(
				this.config,
				this.dependencyManager,
				registry,
				girModule,
				girModule.transitiveDependencies,
			);
			await pkg.exportNPMPackage();
		}
	}
}
