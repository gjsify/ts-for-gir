import type {
  DependencyManager,
  GirModule,
  NSRegistry,
  OptionsGeneration,
  Reporter,
} from "@ts-for-gir/lib";
import type { ModuleGenerator } from "../module-generator.ts";
import { NpmPackage } from "../npm-package.ts";
import {
  buildWidgetVocabulary,
  emitVocabularyData,
  emitVocabularyTypes,
} from "../vocabulary/index.ts";
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
      await this.moduleTemplateProcessor.write(
        output.join("\n"),
        this.config.outdir,
        explicitTemplate,
      );
    } else {
      this.log.log(output.join("\n"));
    }
  }

  /**
   * Emit the opt-in `@girs/<ns>/vocabulary` subpath, if this namespace declares widgets.
   *
   * Two gates, and the second is the one that keeps the count honest: the config flag
   * has to be on, and the namespace has to declare at least one concrete descendant of
   * `GtkWidget`. Of the 705 GIRs in this repository a handful do; emitting an empty
   * vocabulary for the rest would put a `./vocabulary` entry in every package that resolves
   * to a file with no widgets in it.
   *
   * `package` mode only: the subpath needs an `exports` entry to be reachable at all,
   * and `externalDeps` mode deliberately emits one flat ambient `.d.ts` with no package
   * around it.
   */
  private async exportWidgetVocabulary(girModule: GirModule): Promise<void> {
    if (!this.config.widgetVocabulary || !this.config.package || this.config.externalDeps) return;
    if (!this.config.outdir) return;

    const surface = buildWidgetVocabulary(girModule, this.config);
    if (!surface) return;

    const name = girModule.importName;
    await this.moduleTemplateProcessor.write(
      emitVocabularyTypes(surface),
      this.config.outdir,
      `${name}-vocabulary.d.ts`,
    );
    await this.moduleTemplateProcessor.write(
      emitVocabularyData(surface),
      this.config.outdir,
      `${name}-vocabulary.js`,
    );
    // Read by the package.json and tsconfig.json templates, which run after this.
    girModule.hasWidgetVocabulary = true;
    this.log.log(
      `${girModule.packageName}: widget surface — ${surface.widgets.length} widgets, ` +
        `${[...surface.declarations.values()].filter((d) => d.emitted).length} declarations, ` +
        `${surface.enums.size} enum nick unions`,
    );
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

      // Before the package.json, which needs to know whether the subpath exists.
      await this.exportWidgetVocabulary(girModule);

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
