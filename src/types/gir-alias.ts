import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirType } from './gir-type'

export interface GirAlias extends TsForGjsExtended {
    $: {
        name: string
        'c:type'?: string
        introspectable?: string
    }
    type?: GirType[]
}
