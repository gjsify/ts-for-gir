import { XMLParser } from "fast-xml-parser";
import type { GirXML } from "./gir-types.ts";

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
	"constructor",
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
	isArray: (name, _jpath, isLeafNode, _isAttribute) => {
		// Restore previous behaviour...
		if (isArrayProperty.includes(name)) {
			return true;
		}
		return !isLeafNode;
	},
});

/**
 * Recursively transforms numeric string attributes to actual numbers.
 * This ensures type safety while maintaining clean separation of concerns:
 * the parser handles data transformation, not the consuming lib.
 */
function transformNumericAttributes(obj: unknown): unknown {
	if (obj === null || typeof obj !== "object") {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map(transformNumericAttributes);
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

	// Recursively transform nested objects
	for (const key in result) {
		if (key !== "$" && result[key] !== null && typeof result[key] === "object") {
			result[key] = transformNumericAttributes(result[key]);
		}
	}

	return result;
}

export function parseGir(contents: string): GirXML {
	const parsed = parser.parse(contents);
	return transformNumericAttributes(parsed) as GirXML;
}
