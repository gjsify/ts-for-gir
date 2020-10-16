import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirDoc } from './gir-doc'
import { GirEnumerationMember } from './gir-enumeration-member'
import { GirBoolean } from './gir-boolean'

export interface GirEnumeration extends TsForGjsExtended {
    $: {
        name: string
        version?: string
        'c:type'?: string
        introspectable?: GirBoolean
    }
    doc?: GirDoc[]
    member?: GirEnumerationMember[]
}
