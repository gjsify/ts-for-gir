import { CallableParamElement } from '@gi.ts/parser'
import type { GirDocElement, GirAnyType, GirVarArgs, PartOfClass } from './index.js'

export interface GirCallableParamElement extends CallableParamElement, PartOfClass, GirDocElement, GirAnyType {
    varargs?: GirVarArgs[]
}
