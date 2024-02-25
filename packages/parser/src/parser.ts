import { XMLParser } from "fast-xml-parser";
import { GirXML } from "./xml.js";

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isArray: (name, _jpath, isLeafNode, _isAttribute) => {
        // Restore previous behaviour...
        if (isArrayProperty.includes(name)) {
            return true;
        }
        return !isLeafNode;
    },
});

export function parseGir(contents: string): GirXML {
    return parser.parse(contents) as GirXML;
}
