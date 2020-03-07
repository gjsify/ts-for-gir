import { GirModule } from '../gir-module'
import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirDoc } from './gir-doc'
import { GirFunction } from './gir-function'
import { GirVariable } from './gir-variable'
import { GirImplements } from './gir-implements'
import { GirPrerequisite } from './gir-prerequisite'

export interface GirClass extends TsForGjsExtended {
    $: {
        name: string
        parent?: string
        version?: string
        // Not sure what this means
        disguised?: string
        // c:symbol-prefix, c:type, glib:get-type, glib:type-name
        'glib:is-gtype-struct-for'?: string
    }
    doc?: GirDoc[]
    function?: GirFunction[]
    'glib:signal'?: GirFunction[]
    method?: GirFunction[]
    property?: GirVariable[]
    field?: GirVariable[]
    'virtual-method'?: GirFunction[]
    constructor?: GirFunction[] | Function
    implements?: GirImplements[]
    prerequisite?: GirPrerequisite[]

    _module?: GirModule
}
