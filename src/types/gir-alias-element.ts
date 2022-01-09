import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirType } from './gir-type'
import { GirInfoElements } from './gir-info-elements'
import { GirInfoAttrs } from './gir-info-attrs'

export interface GirAliasElement extends TsForGjsExtended, GirInfoElements {
    /** Type's name substitution, representing a typedef in C */
    $: GirInfoAttrs & {
        /** the new name or typedef'd name */
        name: string
        /** the corresponding C type's name */
        'c:type'?: string
    }
    /** Other elements an alias can contain */
    type?: GirType[]
}
