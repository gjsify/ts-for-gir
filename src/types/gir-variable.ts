import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirDoc } from './gir-doc'
import { GirType } from './gir-type'
import { GirArray } from './gir-array'
import { GirParameter } from './gir-parameter'
import { GirBoolean } from './gir-boolean'

// Declaring these two together is the easiest way to prevent circular
// imports

export interface GirVariable extends TsForGjsExtended {
    $: {
        name?: string
        version?: string
        'transfer-ownership'?: 'none' | 'full'
        nullable?: GirBoolean
        optional?: GirBoolean
        'allow-none'?: GirBoolean
        writable?: GirBoolean
        readable?: GirBoolean
        private?: GirBoolean
        'construct-only'?: GirBoolean
        direction?: 'inout' | 'out'
        introspectable?: GirBoolean
        'caller-allocates'?: GirBoolean
        scope?: 'async' | 'call' | 'notified'
        closure?: string
        destroy?: string
    }
    doc?: GirDoc[]
    type?: GirType[]
    array?: GirArray[]
    callback?: GirFunction[]
    varargs?: string[]
}

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
