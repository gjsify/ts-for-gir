import { SanitizedIdentifiers } from './gir/util.ts'
export { FormatGenerator } from './generators/generator.ts'

export * as dts from './generators/dts-modules.ts'

export * as json from './generators/json.ts'

export * from './generators/index.ts'

export { isInvalid, isPrimitiveType, isSubtypeOf, sanitizeIdentifierName } from './gir/util.ts'

export { NSRegistry as GirNSRegistry } from './gir/registry.ts'
export { Formatter } from './formatters/formatter.ts'

export function getSanitizedIdentifiers(): ReadonlyMap<string, string> {
    return SanitizedIdentifiers
}
