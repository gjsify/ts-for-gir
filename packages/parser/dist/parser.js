import { XMLParser } from "fast-xml-parser";
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
    attributesGroupName: "$",
    textNodeName: "_",
    ignoreAttributes: false,
    removeNSPrefix: false,
    allowBooleanAttributes: true,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true,
    isArray: (name, _jpath, isLeafNode, _isAttribute) => {
        if (isArrayProperty.includes(name)) {
            return true;
        }
        return !isLeafNode;
    },
});
export function parseGir(contents) {
    return parser.parse(contents);
}
