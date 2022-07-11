import { GirInfoAttrs, GirFunctionElement, GirInfoElements, GirMemberElement, TsEnum, PartOfModule } from './index.js'

export interface GirBitfieldElement extends PartOfModule, GirInfoElements {
    /** element defining a bit field (as in C) */
    $: GirInfoAttrs & {
        /** name of the bit field */
        name: string
        /** corresponding C type of the bit field type */
        'c:type': string
        /** GObject compatible type name */
        'glib:type-name'?: string
        /** function to retrieve the GObject compatible type of the element */
        'glib:get-type'?: string
    }

    member: GirMemberElement[]
    function: GirFunctionElement[]

    _tsData?: TsEnum
}
