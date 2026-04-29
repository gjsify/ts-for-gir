import type { GirModule } from "../gir-module.ts";

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

	// Resolve C enum/bitfield constant via the existing GirModule.enum_constants map
	// e.g. "GTK_ALIGN_FILL" → ["Align", "FILL"] → "Gtk.Align.FILL"
	const entry = ns.enum_constants.get(trimmed);
	if (entry) return `${ns.namespace}.${entry[0]}.${entry[1]}`;

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
