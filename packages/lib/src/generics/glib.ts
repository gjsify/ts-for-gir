import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { AnyType, StringType } from "../gir.ts";
import type { GlibConfig } from "../types/generics-config.ts";

function createGlibConfig(): GlibConfig {
	return {
		namespace: "GLib",
		version: "2.0",
		modifier: (namespace: IntrospectedNamespace) => {
			applyGlibGenerics(namespace);
		},
	};
}

function applyGlibGenerics(namespace: IntrospectedNamespace): void {
	const HashTable = namespace.getClass("HashTable");

	if (!HashTable) {
		throw new Error("GLib.HashTable not found.");
	}

	HashTable.addGeneric({
		default: StringType,
	});

	HashTable.addGeneric({
		default: AnyType,
	});
}

export default createGlibConfig();
