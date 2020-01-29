import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirDoc } from './gir-doc'
import { GirParameter } from './gir-parameter'

export interface GirSignal extends TsForGjsExtended {
    $: {
        name: string
        when: string
    }
    doc?: GirDoc[]
    'return-value'?: GirParameter[]
}
