import * as parser from '@gi.ts/parser'
import { GirCallableParamElement } from './gir-callable-param-element'
import { GirInstanceParameter } from './gir-instance-parameter'

export interface GirCallableParams extends parser.GirCallableParams {
    parameter: GirCallableParamElement[]
    'instance-parameter'?: GirInstanceParameter[]
}
