import type { TsForGjsExtended } from './ts-for-gjs-extended'
import type { GirDoc } from './gir-doc'
import type { GirType } from './gir-type'
import type { GirArray } from './gir-array'
import type { GirFunction } from './gir-function'
import type { GirBoolean } from './gir-boolean'
import type { GirClass } from './gir-class'

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

    /**
     * The class this variable is defined in
     */
    _class?: GirClass
}
