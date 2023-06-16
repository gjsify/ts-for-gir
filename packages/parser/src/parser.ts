import { parse } from "fast-xml-parser";
import { GirXML } from "./xml.js";

export function parseGir(contents: string): GirXML {
    return parse(contents, {
        attributeNamePrefix: "",
        attrNodeName: "$", // default is 'false',
        textNodeName: "_",
        ignoreAttributes : false,
        ignoreNameSpace : false,
        allowBooleanAttributes : true,
        parseNodeValue : true,
        parseAttributeValue : false,
        trimValues: true,
        arrayMode: true
    }) as GirXML;
}