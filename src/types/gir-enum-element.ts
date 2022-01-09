import type { GirFunctionElement, GirMemberElement, GirInfoAttrs, GirInfoElements, TsForGjsExtended } from '.'

export interface GirEnumElement extends TsForGjsExtended, GirInfoElements {
    /** element defining a enumeration type similar to enum in C/C++ */
    $: GirInfoAttrs & {
        /** name of the enumeration */
        name: string
        /** corresponding C type of the enumeration type */
        'c:type': string
        /** GObject compatible type name */
        'glib:type-name'?: string
        /** function to retrieve the GObject compatible type of the element */
        'glib:get-type'?: string
        /** Error domain of this enumeration in a stringified form */
        'glib:error-domain'?: string
    }
    member?: GirMemberElement[]
    function?: GirFunctionElement[]
}
