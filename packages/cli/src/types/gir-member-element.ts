import { GirInfoElements, GirInfoAttrs, TsMember } from './index.js'

export interface GirMemberElement extends GirInfoElements {
    /** element defining a member of a bit field or an enumeration */
    $: GirInfoAttrs & {
        /** name of the member */
        name: string
        /** value of the member */
        value: string
        /** corresponding C type of the member */
        'c:identifier': string
        /** short nickname of the member (from GEnumValue/GFlagsValue) */
        'glib:nick'?: string
        /** name of the member (from GEnumValue/GFlagsValue) */
        'glib:name'?: string
    }

    _tsData?: TsMember
}
