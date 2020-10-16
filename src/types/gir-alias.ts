import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirType } from './gir-type'
import { GirBoolean } from './gir-boolean'

export interface GirAlias extends TsForGjsExtended {
    $: {
        name: string
        'c:type'?: string
        introspectable?: GirBoolean
    }
    type?: GirType[]
}
