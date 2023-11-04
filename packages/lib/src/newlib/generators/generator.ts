import { GirNamespace } from "../gir/namespace.js";
import { GirClass, GirRecord, GirInterface } from "../gir/class.js";
import { GirConst } from "../gir/const.js";
import { GirEnum, GirError, GirEnumMember } from "../gir/enum.js";
import { GirProperty, GirField } from "../gir/property.js";
import { GirSignal, GirSignalType } from "../gir/signal.js";
import { GirFunction, GirFunctionParameter, GirConstructor, GirCallback, GirDirectAllocationConstructor } from "../gir/function.js";
import { GirClassFunction } from "../gir/function.js";
import { GirStaticClassFunction } from "../gir/function.js";
import { GirVirtualClassFunction } from "../gir/function.js";
import { GirAlias } from "../gir/alias.js";
import { TypeExpression } from "../gir.js";
import { GenerationOptions } from "../types.js";

export interface GenericDescriptor {
  type: TypeExpression;
  name: string;
}

export abstract class FormatGenerator<T = string> {
  protected namespace: GirNamespace;
  protected options: GenerationOptions;

  constructor(namespace: GirNamespace, options: GenerationOptions) {
    this.namespace = namespace;
    this.options = options;
  }

  abstract generateNamespace(node: GirNamespace): Promise<T | null>;
  abstract stringifyNamespace(node: GirNamespace): Promise<string | null>;

  abstract generateCallback(node: GirCallback): T;
  abstract generateAlias(node: GirAlias): T;
  abstract generateConstructor(node: GirConstructor): T;
  abstract generateDirectAllocationConstructor(node: GirDirectAllocationConstructor): T;
  abstract generateConstructorFunction(node: GirConstructor): T;
  abstract generateRecord(node: GirRecord): T;
  abstract generateInterface(node: GirInterface): T;
  abstract generateEnumMember(node: GirEnumMember): T;
  abstract generateError(node: GirError): T;
  abstract generateEnum(node: GirEnum): T;
  abstract generateConst(node: GirConst): T;
  abstract generateClass(node: GirClass): T;
  abstract generateParameter(node: GirFunctionParameter): T;
  abstract generateProperty(node: GirProperty, construct?: boolean): T;
  abstract generateField(node: GirField): T;
  abstract generateSignal(node: GirSignal, type?: GirSignalType): T;
  abstract generateFunction(node: GirFunction): T;
  abstract generateClassFunction(node: GirClassFunction): T;
  abstract generateStaticClassFunction(node: GirStaticClassFunction): T;
  abstract generateVirtualClassFunction(node: GirVirtualClassFunction): T;
}
