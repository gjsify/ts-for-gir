import { GirClass } from './gir-class'
import { GirFunction } from './gir-function'
import { GirVariable } from './gir-variable'
import { GirAlias } from './gir-alias'
import { GirEnumeration } from './gir-enumeration'

export interface GirNamespace {
    $: {
        name: string
        version: string
    }
    alias?: GirAlias[]
    bitfield?: GirEnumeration[]
    callback?: GirFunction[]
    class?: GirClass[]
    constant?: GirVariable[]
    enumeration?: GirEnumeration[]
    function?: GirFunction[]
    interface?: GirClass[]
    record?: GirClass[]
    union?: GirClass[]
}
