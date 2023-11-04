import * as parser from '@gi.ts/parser'

import { GirBoxedElement } from '@gi.ts/parser'
import { GirAliasElement } from './gir-alias-element'
import { GirBitfieldElement } from './gir-bitfield-element'
import { GirCallbackElement } from './gir-callback-element'
import { GirClassElement } from './gir-class-element'
import { GirFunctionElement } from './gir-function-element'
import { GirRecordElement } from './gir-record-element'
import { GirUnionElement } from './gir-union-element'
import { GirConstantElement } from './gir-constant-element'
import { GirAnnotation } from './gir-annotation'
import { GirInterfaceElement } from './gir-interface-element'
import { GirEnumElement } from './gir-enum-element'

export interface GirNamespace extends parser.GirNamespace {
    alias?: GirAliasElement[]
    class?: GirClassElement[]
    interface?: GirInterfaceElement[]
    record?: GirRecordElement[]
    enumeration?: GirEnumElement[]
    function?: GirFunctionElement[]
    union?: GirUnionElement[]
    bitfield?: GirBitfieldElement[]
    callback?: GirCallbackElement[]
    constant?: GirConstantElement[]
    annotation?: GirAnnotation[]
    ['glib:boxed']?: GirBoxedElement[]
}
