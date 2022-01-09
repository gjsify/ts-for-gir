import type { TsForGjsExtended } from './ts-for-gjs-extended'
import type { GirType } from './gir-type'
import type { GirArrayType } from './gir-array-type'
import type { GirFunctionElement } from './gir-function-element'
import type { GirBoolean } from './gir-boolean'
import type { GirClassElement } from './gir-class-element'
import type { GirDocElement } from './gir-doc-element'

export interface GirVariable extends TsForGjsExtended, GirDocElement {
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
    type?: GirType[]
    array?: GirArrayType[]
    callback?: GirFunctionElement[]
    varargs?: string[]

    /**
     * The class this variable is defined in
     */
    _class?: GirClassElement
}
