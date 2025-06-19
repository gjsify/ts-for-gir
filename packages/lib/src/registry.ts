import { SanitizedIdentifiers } from './utils/index.ts'
export { FormatGenerator } from './generators/generator.ts'

export * as dts from './generators/dts-modules.ts'

export * as json from './generators/json.ts'

export * from './generators/index.ts'

export { isInvalid, isPrimitiveType, isSubtypeOf, sanitizeIdentifierName } from './utils/index.ts'

export { NSRegistry as GirNSRegistry } from './gir/registry.ts'
export { Formatter } from './formatters/formatter.ts'

export function getSanitizedIdentifiers(): ReadonlyMap<string, string> {
    return SanitizedIdentifiers
}
