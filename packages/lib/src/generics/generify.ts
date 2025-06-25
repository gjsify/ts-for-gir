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

function generifyDefinitions(registry: NSRegistry, inferGenerics: boolean, required: boolean = true) {
	return (definition: { namespace: string; version: string; modifier: NamespaceModifier }) => {
		const version = definition.version;
		const ns = registry.namespace(definition.namespace, version);

		if (ns) {
			definition.modifier(ns, inferGenerics);
			return;
		}

		if (required) {
			throw new Error(`Could not generify ${definition.namespace} ${definition.version}`);
		}
	};
}

export function generify(registry: NSRegistry, inferGenerics: boolean) {
	const $ = generifyDefinitions(registry, inferGenerics);

	$(gio);
	$(glib);
	const $_ = generifyDefinitions(registry, inferGenerics, false);

	$_(gtk);

	$_(clutter10);
	$_(clutter11);
	$_(clutter12);
	$_(clutter13);
	$_(clutter14);
	$_(clutter15);
	$_(st1);
	$_(st12);
	$_(st13);
	$_(st14);
	$_(st15);
	$_(meta10);
	$_(meta11);
	$_(meta12);
	$_(meta13);
	$_(meta14);
	$_(meta15);

	const visitor = new GenericVisitor(registry, inferGenerics);

	registry.registerTransformation(visitor);
}
