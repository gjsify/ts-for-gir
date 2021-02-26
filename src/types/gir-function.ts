import type { TsForGjsExtended } from './ts-for-gjs-extended'
import type { GirDoc } from './gir-doc'
import type { GirParameter } from './gir-parameter'
import type { GirBoolean } from './gir-boolean'
import type { GirVariable } from './gir-variable'
import type { GirClass } from './gir-class'

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

    // Custom properties

    /**
     * The class this function is defined in
     */
    _class?: GirClass
}
