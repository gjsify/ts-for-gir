import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirVariable } from './gir-variable'
import { GirDoc } from './gir-doc'
import { GirParameter } from './gir-parameter'
import { GirBoolean } from './gir-boolean'

export interface GirFunction extends TsForGjsExtended {
    $: {
        name: string
        version?: string
        'c:identifier'?: string
        introspectable?: GirBoolean
        'moved-to'?: string
        'shadowed-by'?: string
        when?: 'first' | 'last'
        detailed?: GirBoolean
        throws?: GirBoolean
    }
    doc?: GirDoc[]
    parameters?: GirParameter[]
    'return-value'?: GirVariable[]
}
