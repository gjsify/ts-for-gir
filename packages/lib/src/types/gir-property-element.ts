import { PropertyElement } from '@gi.ts/parser'
import { GirInfoElements, GirAnyType, PartOfClass } from './index.js'

export interface GirPropertyElement extends PropertyElement, PartOfClass, GirInfoElements, GirAnyType {}
