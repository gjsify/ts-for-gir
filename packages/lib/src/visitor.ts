import type { IntrospectedAlias } from "./gir/alias.ts";
import type { IntrospectedCallback } from "./gir/callback.ts";
import type { IntrospectedConstant } from "./gir/const.ts";
import type { IntrospectedConstructor } from "./gir/constructor.ts";
import type { IntrospectedDirectAllocationConstructor } from "./gir/direct-allocation-constructor.ts";
import type { IntrospectedEnum } from "./gir/enum.ts";
import type { GirEnumMember } from "./gir/enum-member.ts";
import type { IntrospectedError } from "./gir/error.ts";
import type { IntrospectedFunction } from "./gir/function.ts";
import type {
	IntrospectedBaseClass,
	IntrospectedClass,
	IntrospectedClassCallback,
	IntrospectedClassFunction,
	IntrospectedInterface,
	IntrospectedStaticClassFunction,
	IntrospectedVirtualClassFunction,
} from "./gir/introspected-classes.ts";
import type { IntrospectedNamespace } from "./gir/namespace.ts";
import type { IntrospectedFunctionParameter } from "./gir/parameter.ts";
import type { IntrospectedField, IntrospectedProperty } from "./gir/property.ts";
import type { IntrospectedRecord } from "./gir/record.ts";
import type { IntrospectedSignal, IntrospectedSignalType } from "./gir/signal.ts";
import type { TypeExpression } from "./gir.ts";

export abstract class GirVisitor {
	visitType?: (node: TypeExpression) => TypeExpression;
	visitCallback?: (node: IntrospectedCallback) => IntrospectedCallback;
	visitClassCallback?: (node: IntrospectedClassCallback) => IntrospectedClassCallback;
	visitAlias?: (node: IntrospectedAlias) => IntrospectedAlias;
	visitConstructor?: (node: IntrospectedConstructor) => IntrospectedConstructor;
	visitDirectAllocationConstructor?: (
		node: IntrospectedDirectAllocationConstructor,
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
	visitClassFunction?: <T extends IntrospectedBaseClass | IntrospectedEnum>(
		node: IntrospectedClassFunction<T>,
	) => IntrospectedClassFunction<T>;
	visitStaticClassFunction?: (node: IntrospectedStaticClassFunction) => IntrospectedStaticClassFunction;
	visitVirtualClassFunction?: (node: IntrospectedVirtualClassFunction) => IntrospectedVirtualClassFunction;
	visitNamespace?: (node: IntrospectedNamespace) => IntrospectedNamespace;
}

export function visit(namespace: IntrospectedNamespace, visitor: GirVisitor) {
	namespace.accept(visitor);
}
