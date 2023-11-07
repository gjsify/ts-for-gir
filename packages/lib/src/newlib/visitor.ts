import { TypeExpression } from "./gir.js";
import { IntrospectedAlias } from "./gir/alias.js";
import { IntrospectedRecord, IntrospectedInterface, IntrospectedClass } from "./gir/class.js";
import { IntrospectedConstant } from "./gir/const.js";
import { GirEnumMember, IntrospectedError, IntrospectedEnum } from "./gir/enum.js";
import {
    IntrospectedCallback,
    IntrospectedConstructor,
    IntrospectedFunctionParameter,
    IntrospectedFunction,
    IntrospectedClassFunction,
    IntrospectedStaticClassFunction,
    IntrospectedVirtualClassFunction,
    IntrospectedDirectAllocationConstructor,
    IntrospectedClassCallback
} from "./gir/function.js";
import { IntrospectedNamespace } from "./gir/namespace.js";
import { IntrospectedProperty, IntrospectedField } from "./gir/property.js";
import { IntrospectedSignal, IntrospectedSignalType } from "./gir/signal.js";

export abstract class GirVisitor {
    visitType?: (node: TypeExpression) => TypeExpression;
    visitCallback?: (node: IntrospectedCallback) => IntrospectedCallback;
    visitClassCallback?: (node: IntrospectedClassCallback) => IntrospectedClassCallback;
    visitAlias?: (node: IntrospectedAlias) => IntrospectedAlias;
    visitConstructor?: (node: IntrospectedConstructor) => IntrospectedConstructor;
    visitDirectAllocationConstructor?: (
        node: IntrospectedDirectAllocationConstructor
    ) => IntrospectedDirectAllocationConstructor;
    visitConstructorFunction?: (node: IntrospectedConstructor) => IntrospectedConstructor;
    visitRecord?: (node: IntrospectedRecord) => IntrospectedRecord;
    visitInterface?: (node: IntrospectedInterface) => IntrospectedInterface;
    visitEnumMember?: (node: GirEnumMember) => GirEnumMember;
    visitError?: (node: IntrospectedError) => IntrospectedError;
    visitEnum?: (node: IntrospectedEnum) => IntrospectedEnum;
    visitConst?: (node: IntrospectedConstant) => IntrospectedConstant;
    visitClass?: (node: IntrospectedClass) => IntrospectedClass;
    visitParameter?: (node: IntrospectedFunctionParameter) => IntrospectedFunctionParameter;
    visitProperty?: (node: IntrospectedProperty) => IntrospectedProperty;
    visitField?: (node: IntrospectedField) => IntrospectedField;
    visitSignal?: (node: IntrospectedSignal, type?: IntrospectedSignalType) => IntrospectedSignal;
    visitFunction?: (node: IntrospectedFunction) => IntrospectedFunction;
    visitClassFunction?: (node: IntrospectedClassFunction) => IntrospectedClassFunction;
    visitStaticClassFunction?: (node: IntrospectedStaticClassFunction) => IntrospectedStaticClassFunction;
    visitVirtualClassFunction?: (node: IntrospectedVirtualClassFunction) => IntrospectedVirtualClassFunction;
    visitNamespace?: (node: IntrospectedNamespace) => IntrospectedNamespace;
}

export function visit(namespace: IntrospectedNamespace, visitor: GirVisitor) {
    namespace.accept(visitor);
}
