import type { GirModule } from "../gir-module.ts";

// Structural type for enum/bitfield nodes — avoids circular import via gir/enum.ts → gir/property.ts
type EnumLike = {
	name: string;
	members: Map<string, { c_identifier: string }>;
};

function isEnumLike(node: unknown): node is EnumLike {
	return (
		typeof node === "object" &&
		node !== null &&
		"members" in node &&
		node.members instanceof Map &&
		"name" in node &&
		typeof (node as Record<string, unknown>).name === "string"
	);
}

// Lazy cache per namespace: c_identifier → JavaScript path (e.g. "Gtk.Align.FILL")
const cIdentifierCache = new WeakMap<GirModule, Map<string, string>>();

function buildCIdentifierMap(ns: GirModule): Map<string, string> {
	const map = new Map<string, string>();
	for (const [, nodeOrArray] of ns.members) {
		const node = Array.isArray(nodeOrArray) ? nodeOrArray[0] : nodeOrArray;
		if (!isEnumLike(node)) continue;
		for (const [memberName, member] of node.members) {
			if (member.c_identifier) {
				map.set(member.c_identifier, `${ns.namespace}.${node.name}.${memberName}`);
			}
		}
	}
	return map;
}

function getCIdentifierMap(ns: GirModule): Map<string, string> {
	let map = cIdentifierCache.get(ns);
	if (!map) {
		map = buildCIdentifierMap(ns);
		cIdentifierCache.set(ns, map);
	}
	return map;
}

function convertSingleCValue(value: string, ns: GirModule): string {
	const trimmed = value.trim();

	if (trimmed === "NULL") return "null";
	if (trimmed === "TRUE") return "true";
	if (trimmed === "FALSE") return "false";

	// Normalize C floats: "0.000000" → "0", "1.500000" → "1.5"
	if (/^-?\d+\.\d+$/.test(trimmed)) {
		const n = parseFloat(trimmed);
		if (!Number.isNaN(n)) return String(n);
	}

	// C enum/bitfield constant lookup
	const jsPath = getCIdentifierMap(ns).get(trimmed);
	if (jsPath) return jsPath;

	return trimmed;
}

/**
 * Converts a raw C default-value string from GIR XML to its JavaScript equivalent.
 * Handles NULL/TRUE/FALSE, C float literals, C enum constants, and bitmask combinations.
 */
export function convertCDefaultValue(rawValue: string, ns: GirModule): string {
	// Handle bitmask combinations: "A | B | C"
	if (rawValue.includes("|")) {
		return rawValue
			.split("|")
			.map((part) => convertSingleCValue(part, ns))
			.join(" | ");
	}
	return convertSingleCValue(rawValue, ns);
}
