import { GirCallbackElement, TsGenericParameter, TsTypeSeparator } from './index.js'

/**
 * Holds the data to generate a type in/for Typescript
 */
export interface TsType {
    // TODO: move option property to `TsParameter` and add the `undefined` type to types
    optional: boolean
    nullable: boolean
    type: string
    callbacks: GirCallbackElement[]
    generics: TsGenericParameter[]
    // TODO: transform array to type with generics?
    isArray: boolean
    isFunction: boolean
    isCallback: boolean
    /**
     * Left type separated, used if multiple types found.
     * If nothing os set, `|` will be used by default.
     *
     * @Example
     * `string | number` or `Gtk.Window & Gtk.Widget`
     * */
    leftSeparator?: TsTypeSeparator
}
