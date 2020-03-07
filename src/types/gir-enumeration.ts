import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirDoc } from './gir-doc'
import { GirEnumerationMember } from './gir-enumeration-member'

export interface GirEnumeration extends TsForGjsExtended {
    $: {
        name: string
        version?: string
        'c:type'?: string
        introspectable?: string
        // glib:get-type, glib:type-name
    }
    doc?: GirDoc[]
    member?: GirEnumerationMember[]
}
