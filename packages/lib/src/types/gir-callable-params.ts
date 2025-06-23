import * as parser from '@gi.ts/parser'
import type { GirCallableParamElement } from './gir-callable-param-element.ts'
import type { GirInstanceParameter } from './gir-instance-parameter.ts'

export interface GirCallableParams extends parser.GirCallableParams {
    parameter: GirCallableParamElement[]
    'instance-parameter'?: GirInstanceParameter[]
}
