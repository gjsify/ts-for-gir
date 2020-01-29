import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirVariable } from './gir-variable'
import { GirDoc } from './gir-doc'
import { GirParameter } from './gir-parameter'

export interface GirFunction extends TsForGjsExtended {
    $: {
        name: string
        version?: string
        'c-identifier'?: string
        introspectable?: string
        'moved-to'?: string
        'shadowed-by'?: string
    }
    doc?: GirDoc[]
    parameters?: GirParameter[]
    'return-value'?: GirVariable[]
}
