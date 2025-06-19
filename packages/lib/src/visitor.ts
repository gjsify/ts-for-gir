import { TypeExpression } from './gir.ts'
import { IntrospectedAlias } from './gir/alias.ts'
import { IntrospectedRecord } from './gir/record.ts'
import { IntrospectedInterface } from './gir/interface.ts'
import { IntrospectedClass } from './gir/introspected-class.ts'
import { IntrospectedBaseClass } from './gir/introspected-base-class.ts'
import { IntrospectedConstant } from './gir/const.ts'
import { GirEnumMember, IntrospectedError, IntrospectedEnum } from './gir/enum.ts'
import {
    IntrospectedConstructor,
    IntrospectedFunctionParameter,
    IntrospectedFunction,
    IntrospectedClassFunction,
    IntrospectedStaticClassFunction,
    IntrospectedVirtualClassFunction,
    IntrospectedDirectAllocationConstructor,
} from './gir/function.ts'
import { IntrospectedCallback, IntrospectedClassCallback } from './gir/callback.ts'
import { IntrospectedNamespace } from './gir/namespace.ts'
import { IntrospectedProperty, IntrospectedField } from './gir/property.ts'
import { IntrospectedSignal, IntrospectedSignalType } from './gir/signal.ts'

export abstract class GirVisitor {
    visitType?: (node: TypeExpression) => TypeExpression
    visitCallback?: (node: IntrospectedCallback) => IntrospectedCallback
    visitClassCallback?: (node: IntrospectedClassCallback) => IntrospectedClassCallback
    visitAlias?: (node: IntrospectedAlias) => IntrospectedAlias
    visitConstructor?: (node: IntrospectedConstructor) => IntrospectedConstructor
    visitDirectAllocationConstructor?: (
        node: IntrospectedDirectAllocationConstructor,
    ) => IntrospectedDirectAllocationConstructor
    visitConstructorFunction?: (node: IntrospectedConstructor) => IntrospectedConstructor
    visitRecord?: (node: IntrospectedRecord) => IntrospectedRecord
    visitInterface?: (node: IntrospectedInterface) => IntrospectedInterface
    visitEnumMember?: (node: GirEnumMember) => GirEnumMember
    visitError?: (node: IntrospectedError) => IntrospectedError
    visitEnum?: (node: IntrospectedEnum) => IntrospectedEnum
    visitConst?: (node: IntrospectedConstant) => IntrospectedConstant
    visitClass?: (node: IntrospectedClass) => IntrospectedClass
    visitParameter?: (node: IntrospectedFunctionParameter) => IntrospectedFunctionParameter
    visitProperty?: (node: IntrospectedProperty) => IntrospectedProperty
    visitField?: (node: IntrospectedField) => IntrospectedField
    visitSignal?: (node: IntrospectedSignal, type?: IntrospectedSignalType) => IntrospectedSignal
    visitFunction?: (node: IntrospectedFunction) => IntrospectedFunction
    visitClassFunction?: <T extends IntrospectedBaseClass | IntrospectedEnum>(
        node: IntrospectedClassFunction<T>,
    ) => IntrospectedClassFunction<T>
    visitStaticClassFunction?: (node: IntrospectedStaticClassFunction) => IntrospectedStaticClassFunction
    visitVirtualClassFunction?: (node: IntrospectedVirtualClassFunction) => IntrospectedVirtualClassFunction
    visitNamespace?: (node: IntrospectedNamespace) => IntrospectedNamespace
}

export function visit(namespace: IntrospectedNamespace, visitor: GirVisitor) {
    namespace.accept(visitor)
}
