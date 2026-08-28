import type { NSRegistry } from "../gir/registry.ts";
import type { NamespaceDefinition } from "../types/generics-config.ts";
import { clutterTemplates } from "./clutter.ts";
import gio from "./gio.ts";
import glib from "./glib.ts";
import gtk from "./gtk.ts";
import { metaTemplates } from "./meta.ts";
import { stTemplates } from "./st.ts";
import { GenericVisitor } from "./visitor.ts";

// Core namespace definitions that are required
const CORE_DEFINITIONS: NamespaceDefinition[] = [gio, glib];

// Optional namespace definitions
const OPTIONAL_DEFINITIONS: NamespaceDefinition[] = [gtk, ...clutterTemplates, ...stTemplates, ...metaTemplates];

function createDefinitionProcessor(registry: NSRegistry, inferGenerics: boolean, required: boolean = true) {
	return (definition: NamespaceDefinition) => {
		const { namespace: namespaceName, version, modifier } = definition;
		const namespace = registry.namespace(namespaceName, version);

		if (namespace) {
			modifier(namespace, inferGenerics);
			return;
		}

		if (required) {
			throw new Error(`Could not generify ${namespaceName} ${version}`);
		}
	};
}

function applyDefinitions(
	definitions: NamespaceDefinition[],
	processor: (definition: NamespaceDefinition) => void,
): void {
	for (const definition of definitions) {
		processor(definition);
	}
}

export function generify(registry: NSRegistry, inferGenerics: boolean): void {
	const processCoreDefinition = createDefinitionProcessor(registry, inferGenerics, true);
	const processOptionalDefinition = createDefinitionProcessor(registry, inferGenerics, false);

	// Apply core definitions (required)
	applyDefinitions(CORE_DEFINITIONS, processCoreDefinition);

	// Apply optional definitions
	applyDefinitions(OPTIONAL_DEFINITIONS, processOptionalDefinition);

	// Register visitor for runtime transformations
	const visitor = new GenericVisitor(inferGenerics);
	registry.registerTransformation(visitor);
}
