import { CallableParamElement } from '@gi.ts/parser'
import type { GirDocElement, GirAnyType, GirVarArgs, PartOfClass, TsParameter } from './index.js'

export interface GirCallableParamElement extends CallableParamElement, PartOfClass, GirDocElement, GirAnyType {
    varargs?: GirVarArgs[]

    _tsData?: TsParameter
}
