import { XMLParser } from "fast-xml-parser";
import type { GirXML } from "./gir-types.ts";

/**
 * fast-xml-parser v5.5.5+ blocks "constructor" as a tag name to prevent
 * prototype pollution. GIR files legitimately use <constructor> elements,
 * so we rename it during parsing and restore it in post-processing.
 */
const CRITICAL_TAG_REPLACEMENTS: Record<string, string> = {
	constructor: "__gir_constructor__",
};

const CRITICAL_TAG_RESTORATIONS: Record<string, string> = Object.fromEntries(
	Object.entries(CRITICAL_TAG_REPLACEMENTS).map(([k, v]) => [v, k]),
);

//  TODO: Treat properties that contain only one element like `repository`, 'namespace', 'package', ...  as an object instead of an array
const isArrayProperty = [
	"type",
	"include",
	"c:include",
	"member",
	"parameter",
	"parameters",
	"return-value",
	"class",
	"__gir_constructor__",
	"constructors",
	"method",
	"virtual-method",
	"property",
	"field",
	"constant",
	"enumeration",
	"bitfield",
	"alias",
	"function",
	"callback",
	"record",
	"union",
	"interface",
	"namespace",
	"repository",
	"package",
	"glib:boxed",
	"implements",
	"prerequisite",
	"doc",
	"doc-deprecated",
	"signal",
	"glib:signal",
	"annotation",
	"stability",
	"doc-version",
	"doc-stability",
	"source-position",
	"column",
	"array",
	"moved-to",
	"varargs",
	"instance-parameter",
];

/**
 * Attributes that should be converted from strings to numbers during parsing.
 * This maintains type safety while handling XML's string-only attribute values.
 */
const numericAttributes = ["fixed-size", "length", "closure", "destroy", "bits"] as const;

const parser = new XMLParser({
	attributeNamePrefix: "",
	attributesGroupName: "$", // default is 'false',
	textNodeName: "_",
	ignoreAttributes: false,
	removeNSPrefix: false,
	allowBooleanAttributes: true,
	parseTagValue: true,
	parseAttributeValue: false,
	trimValues: true,
	processEntities: {
		enabled: true,
		maxTotalExpansions: 100_000,
	},
	transformTagName: (tagName: string) => CRITICAL_TAG_REPLACEMENTS[tagName] ?? tagName,
	isArray: (name, _jpath, isLeafNode, _isAttribute) => {
		// Restore previous behaviour...
		if (isArrayProperty.includes(name)) {
			return true;
		}
		return !isLeafNode;
	},
});

/**
 * Recursively post-processes the parsed XML tree:
 * - Converts numeric string attributes to actual numbers
 * - Restores tag names that were renamed to bypass fast-xml-parser's security checks
 */
function postProcessParsedXml(obj: unknown): unknown {
	if (obj === null || typeof obj !== "object") {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map(postProcessParsedXml);
	}

	const result = { ...obj } as Record<string, unknown>;

	// Transform attributes in the $ object (XML attributes)
	if (result.$ && typeof result.$ === "object") {
		const attrs = result.$ as Record<string, unknown>;
		for (const attr of numericAttributes) {
			if (attr in attrs && typeof attrs[attr] === "string") {
				const numValue = Number.parseInt(attrs[attr] as string, 10);
				if (!Number.isNaN(numValue)) {
					attrs[attr] = numValue;
				}
			}
		}
	}

	// Recursively transform nested objects and restore renamed tag keys
	for (const key in result) {
		if (key !== "$" && result[key] !== null && typeof result[key] === "object") {
			result[key] = postProcessParsedXml(result[key]);
		}
		const restoredKey = CRITICAL_TAG_RESTORATIONS[key];
		if (restoredKey) {
			result[restoredKey] = result[key];
			delete result[key];
		}
	}

	return result;
}

export function parseGir(contents: string): GirXML {
	const parsed = parser.parse(contents);
	return postProcessParsedXml(parsed) as GirXML;
}
