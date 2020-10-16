import { GirFunction } from './gir-function'
import { GirBoolean } from './gir-boolean'

export interface GirVirtualMethod extends GirFunction {
    $: {
        name: string
        version?: string
        'c:identifier'?: string
        introspectable?: GirBoolean
        'moved-to'?: string
        'shadowed-by'?: string
        invoker?: string
    }
}
