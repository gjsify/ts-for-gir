import { XMLParser } from 'fast-xml-parser'
import type { ParsedPackageData } from '@ts-for-gir/lib'

export const packageXmlParser = (fileContents: string): ParsedPackageData => {
    const parser = new XMLParser({
        attributeNamePrefix: '',
        attributesGroupName: '$', // default is 'false',
        textNodeName: '_',
        ignoreAttributes: false,
        removeNSPrefix: false,
        allowBooleanAttributes: true,
        parseTagValue: true,
        parseAttributeValue: false,
        trimValues: true,
    })
    return parser.parse(fileContents) as ParsedPackageData
}
