import type { IntrospectedNamespace } from "../gir/namespace.ts";
import type { NSRegistry } from "../gir/registry.ts";
import gee1 from "./gee1.ts";
import gee08 from "./gee08.ts";
import gio from "./gio.ts";
import glib from "./glib.ts";
import gobject from "./gobject.ts";
import gtk4 from "./gtk4.ts";
import { shellTemplates } from "./shell.ts";
import tracker1 from "./tracker1.ts";

export type NamespaceInjection = (namespace: IntrospectedNamespace, registry: NSRegistry) => void;

function injectDefinitions(registry: NSRegistry, required = true) {
	return (definition: { namespace: string; version: string; modifier: NamespaceInjection }) => {
		const ns = registry.namespace(definition.namespace, definition.version);

		if (required && !ns) {
			throw new Error(`Namespace '${definition.namespace}' not found.`);
		}

		if (ns) {
			definition.modifier(ns, registry);
		}
	};
}

export function inject(registry: NSRegistry) {
	const $ = injectDefinitions(registry);

	$(glib);
	$(gobject);
	$(gio);

	const $_ = injectDefinitions(registry, false);

	// Optional injections
	$_(tracker1);
	$_(gee08);
	$_(gee1);
	$_(gtk4);
	for (const shell of shellTemplates) {
		$_(shell);
	}
}
