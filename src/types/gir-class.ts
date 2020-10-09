import { GirModule } from '../gir-module'
import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirDoc } from './gir-doc'
import { GirFunction } from './gir-function'
import { GirVariable } from './gir-variable'
import { GirImplements } from './gir-implements'
import { GirPrerequisite } from './gir-prerequisite'
import { GirVirtualMethod } from './gir-virtual-method'

export interface GirClass extends TsForGjsExtended {
    $: {
        name: string
        parent?: string
        version?: string
        // Not sure what this means
        disguised?: string
        'c:symbol-prefix': string
        'c:type': string
        'glib:get-type': string
        'glib:type-name': string
        'glib:is-gtype-struct-for'?: string
        'glib:type-struct'?: string
        when?: 'first' | 'last'
    }
    doc?: GirDoc[]
    function?: GirFunction[]
    'glib:signal'?: GirFunction[]
    method?: GirFunction[]
    property?: GirVariable[]
    field?: GirVariable[]
    'virtual-method'?: GirVirtualMethod[]
    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor?: GirFunction[] | Function
    implements?: GirImplements[]
    prerequisite?: GirPrerequisite[]

    _module?: GirModule
}
