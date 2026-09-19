/**
 * Example usage of the refactored ModuleGenerator
 *
 * This demonstrates how the unified ModuleGenerator now incorporates
 * functionality from DtsGenerator and DtsModuleGenerator
 */

import type { GirModule, NSRegistry, OptionsGeneration } from "@ts-for-gir/lib";
import { ModuleGenerator } from "./module-generator.ts";

// Example: Using ModuleGenerator with different output formats
async function generateTypeDefinitions(girModule: GirModule, config: OptionsGeneration, registry: NSRegistry) {
	// Create a ModuleGenerator instance
	const generator = new ModuleGenerator(girModule, config, registry);

	// 1. Generate as string array (default behavior)
	const arrayOutput = await generator.generateModule(girModule);
	console.log("String array output:", arrayOutput);

	// 2. Generate as single string (DtsGenerator compatibility)
	const stringOutput = await generator.generateModuleString(girModule);
	console.log("String output:", stringOutput);

	// 3. Generate as module declaration (DtsModuleGenerator compatibility)
	const moduleDeclaration = await generator.generateModuleDeclaration(girModule);
	console.log("Module declaration output:", moduleDeclaration);

	// 4. Generate namespace as string
	const namespaceString = await generator.generateNamespaceAsString(girModule);
	console.log("Namespace string output:", namespaceString);

	// 5. The AdvancedVariants feature is automatically applied
	// when generating GLib or GObject modules (unless disabled with noAdvancedVariants option)
	if (girModule.namespace === "GLib" && !config.noAdvancedVariants) {
		console.log("GLib module will include advanced variant type definitions");
	}
	if (girModule.namespace === "GObject") {
		console.log("GObject module will include registerClass overrides");
	}
}

// Example: Migrating from DtsGenerator
function migrateFromDtsGenerator(girModule: GirModule, config: OptionsGeneration, registry: NSRegistry) {
	// Before (using DtsGenerator):
	// const generator = new DtsGenerator(girModule, config);
	// const output = await generator.generateNamespace(girModule);

	// After (using ModuleGenerator):
	const generator = new ModuleGenerator(girModule, config, registry);
	const output = generator.generateNamespaceAsString(girModule);

	return output;
}

// Example: Migrating from DtsModuleGenerator
function migrateFromDtsModuleGenerator(girModule: GirModule, config: OptionsGeneration, registry: NSRegistry) {
	// Before (using DtsModuleGenerator):
	// const generator = new DtsModuleGenerator(girModule, config);
	// const output = await generator.generateNamespace(girModule);

	// After (using ModuleGenerator):
	const generator = new ModuleGenerator(girModule, config, registry);
	const output = generator.generateModuleDeclaration(girModule);

	return output;
}

export { generateTypeDefinitions, migrateFromDtsGenerator, migrateFromDtsModuleGenerator };
