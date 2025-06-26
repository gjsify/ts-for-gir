import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { AnyType, StringType } from "../gir.ts";

interface GlibConfig {
	namespace: string;
	version: string;
	modifier: (namespace: IntrospectedNamespace) => void;
}

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
