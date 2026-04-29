import type { GirModule } from "../gir-module.ts";

/**
 * Resolves a single C enum/bitfield constant to its GJS-qualified path by searching
 * the module's own enum_constants map and then all direct and transitive dependencies.
 * Returns [namespaceName, enumTypeName, memberName] or null if not found.
 *
 * Called during the generation phase (after all modules have been parsed), so all
 * dependency enum_constants maps are fully populated. Each GirModule.enum_constants
 * is an O(1) Map; the total cost per call is O(deps) — negligible given the small
 * fraction of properties that carry a default-value attribute.
 */
function resolveCEnumConstant(cIdentifier: string, ns: GirModule): readonly [string, string, string] | null {
	// Check own namespace first
	const own = ns.enum_constants.get(cIdentifier);
	if (own) return [ns.namespace, own[0], own[1]] as const;

	// Check all direct and transitive dependencies
	for (const dep of ns.allDependencies) {
		const depModule = ns.getInstalledImport(dep.namespace);
		if (!depModule) continue;
		const entry = depModule.enum_constants.get(cIdentifier);
		if (entry) return [depModule.namespace, entry[0], entry[1]] as const;
	}

	return null;
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

	// Resolve C enum/bitfield constant (own namespace + all dependencies)
	// e.g. "GTK_ALIGN_FILL"         → "Gtk.Align.FILL"
	// e.g. "GDK_NO_MODIFIER_MASK"   → "Gdk.ModifierType.NO_MODIFIER_MASK"
	// e.g. "PANGO_ALIGN_LEFT"       → "Pango.Alignment.LEFT"
	const entry = resolveCEnumConstant(trimmed, ns);
	if (entry) return `${entry[0]}.${entry[1]}.${entry[2]}`;

	return trimmed;
}

/**
 * Converts a raw C default-value string from GIR XML to its JavaScript equivalent.
 * Handles NULL/TRUE/FALSE, C float literals, C enum/bitfield constants (including
 * cross-namespace lookups), and bitmask combinations (A | B | C).
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
