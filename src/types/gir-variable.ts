import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirDoc } from './gir-doc'
import { GirType } from './gir-type'
import { GirArray } from './gir-array'

export interface GirVariable extends TsForGjsExtended {
    $: {
        name?: string
        'transfer-ownership'?: string
        nullable?: string
        'allow-none'?: string
        writable?: string
        readable?: string
        private?: string
        'construct-only'?: string
        direction?: string
        introspectable?: string
        closure?: string
        destroy?: string
    }
    doc?: GirDoc[]
    type?: GirType[]
    array?: GirArray[]
}
