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
    /**
     * This appends `[]` to the generated type
     * TODO: we should transform this to a generic like `Array<...>`
     **/
    isArray: boolean
    isFunction: boolean
    isCallback: boolean
    /**
     * Left type separated, used if multiple types found.
     * If nothing is set, `|` will be used by default.
     * TODO: This should be refactored
     * @Example
     * `string | number` or `Gtk.Window & Gtk.Widget`
     * */
    leftSeparator?: TsTypeSeparator
}
