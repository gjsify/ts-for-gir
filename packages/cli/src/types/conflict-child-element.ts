import type { TsFunction, TsProperty, TsVar } from './index.js'

export interface ConflictChildElement<T = TsFunction | TsProperty | TsVar> {
    /**
     * The depth of the inheritance, starts at 1.
     * 1 means it is a direct inheritance,
     * greater means it is an indirect inheritance
     */
    depth: number
    data: T
}
