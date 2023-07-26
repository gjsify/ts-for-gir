import { FieldElement } from '@gi.ts/parser'
import { GirInfoElements, GirAnyType, GirCallbackElement, PartOfClass } from './index.js'

export interface GirFieldElement extends FieldElement, PartOfClass, GirInfoElements, GirAnyType {
    /* Other elements a property can contain */
    callback?: GirCallbackElement[]
}
