import { FieldElement } from '@gi.ts/parser'
import {
    GirInfoElements,
    GirAnyType,
    GirInfoAttrs,
    GirBoolean,
    GirUnparsedNumber,
    GirCallbackElement,
    PartOfClass,
    TsVar,
} from './index.js'

export interface GirFieldElement extends FieldElement, PartOfClass, GirInfoElements, GirAnyType {
    /* Other elements a property can contain */
    callback?: GirCallbackElement[]

    _tsData?: TsVar
}
