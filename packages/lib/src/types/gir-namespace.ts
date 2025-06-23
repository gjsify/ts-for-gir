import * as parser from '@gi.ts/parser'

import type { GirBoxedElement } from '@gi.ts/parser'
import type { GirAliasElement } from './gir-alias-element.ts'
import type { GirBitfieldElement } from './gir-bitfield-element.ts'
import type { GirCallbackElement } from './gir-callback-element.ts'
import type { GirClassElement } from './gir-class-element.ts'
import type { GirFunctionElement } from './gir-function-element.ts'
import type { GirRecordElement } from './gir-record-element.ts'
import type { GirUnionElement } from './gir-union-element.ts'
import type { GirConstantElement } from './gir-constant-element.ts'
import type { GirAnnotation } from './gir-annotation.ts'
import type { GirInterfaceElement } from './gir-interface-element.ts'
import type { GirEnumElement } from './gir-enum-element.ts'

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
