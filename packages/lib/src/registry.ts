import { SanitizedIdentifiers } from './gir/util.js'
export { FormatGenerator } from './generators/generator.js'

export * as json from './generators/json.js'

export * from './generators/index.js'

export * from './types.js'

export { isInvalid, isPrimitiveType, isSubtypeOf, sanitizeIdentifierName } from './gir/util.js'

export { NSRegistry as GirNSRegistry } from './gir/registry.js'
export { Formatter } from './formatters/formatter.js'

export function getSanitizedIdentifiers(): ReadonlyMap<string, string> {
    return SanitizedIdentifiers
}
