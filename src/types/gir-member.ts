import { GirInfoElements, GirInfoAttrs } from '.'

export interface GirMemberElement extends GirInfoElements {
    /** element defining a member of a bit field or an enumeration */
    $: GirInfoAttrs & {
        /** name of the member */
        name: string
        /** value of the member */
        value: string
        /** corresponding C type of the member */
        'c:identifier': string
        /** short nickname of the member */
        'glib:nick'?: string
    }
}
