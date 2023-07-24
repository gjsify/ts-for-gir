import { ConstantElement } from '@gi.ts/parser'
import type { GirInfoElements, GirAnyType, PartOfModule } from './index.js'

export interface GirConstantElement extends ConstantElement, PartOfModule, GirInfoElements, GirAnyType {}
