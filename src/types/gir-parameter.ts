import { GirVariable } from './gir-variable'

export interface GirParameter {
    parameter?: GirVariable[]
    'instance-parameter'?: GirVariable[]
}
