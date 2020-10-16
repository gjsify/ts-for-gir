import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirDoc } from './gir-doc'
import { GirType } from './gir-type'
import { GirArray } from './gir-array'
import { GirParameter } from './gir-parameter'

// Declaring these two together is the easiest way to prevent circular
// imports

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
    callback?: GirFunction
}

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
