import type { IntrospectedNamespace } from "../gir/namespace.ts";
import type { NSRegistry } from "../gir/registry.ts";
import { clutter10, clutter11, clutter12, clutter13, clutter14, clutter15 } from "./clutter.ts";
import gio from "./gio.ts";
import glib from "./glib.ts";
import gtk from "./gtk.ts";
import { meta10, meta11, meta12, meta13, meta14, meta15 } from "./meta.ts";
import { st1, st12, st13, st14, st15 } from "./st.ts";
import { GenericVisitor } from "./visitor.ts";

type NamespaceModifier = (namespace: IntrospectedNamespace, inferGenerics: boolean) => void;

interface NamespaceDefinition {
	namespace: string;
	version: string;
	modifier: NamespaceModifier;
}

// Core namespace definitions that are required
const CORE_DEFINITIONS: NamespaceDefinition[] = [gio, glib];

// Optional namespace definitions
const OPTIONAL_DEFINITIONS: NamespaceDefinition[] = [
	gtk,
	clutter10,
	clutter11,
	clutter12,
	clutter13,
	clutter14,
	clutter15,
	st1,
	st12,
	st13,
	st14,
	st15,
	meta10,
	meta11,
	meta12,
	meta13,
	meta14,
	meta15,
];

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
	const visitor = new GenericVisitor(registry, inferGenerics);
	registry.registerTransformation(visitor);
}
