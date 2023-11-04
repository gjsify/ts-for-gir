import { TypeExpression } from "./gir.js";
import { GirAlias } from "./gir/alias.js";
import { GirRecord, GirInterface, GirClass } from "./gir/class.js";
import { GirConst } from "./gir/const.js";
import { GirEnumMember, GirError, GirEnum } from "./gir/enum.js";
import {
  GirCallback,
  GirConstructor,
  GirFunctionParameter,
  GirFunction,
  GirClassFunction,
  GirStaticClassFunction,
  GirVirtualClassFunction,
  GirDirectAllocationConstructor
} from "./gir/function.js";
import { GirNamespace } from "./gir/namespace.js";
import { GirProperty, GirField } from "./gir/property.js";
import { GirSignal, GirSignalType } from "./gir/signal.js";

export abstract class GirVisitor {
  visitType?: (node: TypeExpression) => TypeExpression;
  visitCallback?: (node: GirCallback) => GirCallback;
  visitAlias?: (node: GirAlias) => GirAlias;
  visitConstructor?: (node: GirConstructor) => GirConstructor;
  visitDirectAllocationConstructor?: (node: GirDirectAllocationConstructor) => GirDirectAllocationConstructor;
  visitConstructorFunction?: (node: GirConstructor) => GirConstructor;
  visitRecord?: (node: GirRecord) => GirRecord;
  visitInterface?: (node: GirInterface) => GirInterface;
  visitEnumMember?: (node: GirEnumMember) => GirEnumMember;
  visitError?: (node: GirError) => GirError;
  visitEnum?: (node: GirEnum) => GirEnum;
  visitConst?: (node: GirConst) => GirConst;
  visitClass?: (node: GirClass) => GirClass;
  visitParameter?: (node: GirFunctionParameter) => GirFunctionParameter;
  visitProperty?: (node: GirProperty) => GirProperty;
  visitField?: (node: GirField) => GirField;
  visitSignal?: (node: GirSignal, type?: GirSignalType) => GirSignal;
  visitFunction?: (node: GirFunction) => GirFunction;
  visitClassFunction?: (node: GirClassFunction) => GirClassFunction;
  visitStaticClassFunction?: (node: GirStaticClassFunction) => GirStaticClassFunction;
  visitVirtualClassFunction?: (node: GirVirtualClassFunction) => GirVirtualClassFunction;
  visitNamespace?: (node: GirNamespace) => GirNamespace;
}

export function visit(namespace: GirNamespace, visitor: GirVisitor) {
  namespace.accept(visitor);
}
