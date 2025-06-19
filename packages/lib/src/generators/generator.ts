import { IntrospectedNamespace } from "../gir/namespace.ts";
import { IntrospectedClass, IntrospectedRecord, IntrospectedInterface } from "../gir/class.ts";
import { IntrospectedConstant } from "../gir/const.ts";
import { IntrospectedEnum, IntrospectedError, GirEnumMember } from "../gir/enum.ts";
import { IntrospectedProperty, IntrospectedField } from "../gir/property.ts";
import { IntrospectedSignal, IntrospectedSignalType } from "../gir/signal.ts";
import {
    IntrospectedFunction,
    IntrospectedFunctionParameter,
    IntrospectedConstructor,
    IntrospectedDirectAllocationConstructor
} from "../gir/function.ts";
import { IntrospectedCallback, IntrospectedClassCallback } from "../gir/callback.ts";
import { IntrospectedClassFunction } from "../gir/function.ts";
import { IntrospectedStaticClassFunction } from "../gir/function.ts";
import { IntrospectedVirtualClassFunction } from "../gir/function.ts";
import { IntrospectedAlias } from "../gir/alias.ts";
import { TypeExpression } from "../gir.ts";
import type { OptionsGeneration } from "../types/options-generation.ts";

export interface GenericDescriptor {
    type: TypeExpression;
    name: string;
}

export abstract class FormatGenerator<T = string> {
    protected namespace: IntrospectedNamespace;
    protected options: OptionsGeneration;

    constructor(namespace: IntrospectedNamespace, options: OptionsGeneration) {
        this.namespace = namespace;
        this.options = options;
    }

    abstract generateNamespace(node: IntrospectedNamespace): Promise<T | null>;
    abstract stringifyNamespace(node: IntrospectedNamespace): Promise<string | null>;

    abstract generateCallback(node: IntrospectedCallback): T;
    abstract generateClassCallback(node: IntrospectedClassCallback): T;
    abstract generateAlias(node: IntrospectedAlias): T;
    abstract generateConstructor(node: IntrospectedConstructor): T;
    abstract generateDirectAllocationConstructor(node: IntrospectedDirectAllocationConstructor): T;
    abstract generateConstructorFunction(node: IntrospectedConstructor): T;
    abstract generateRecord(node: IntrospectedRecord): T;
    abstract generateInterface(node: IntrospectedInterface): T;
    abstract generateEnumMember(node: GirEnumMember): T;
    abstract generateError(node: IntrospectedError): T;
    abstract generateEnum(node: IntrospectedEnum): T;
    abstract generateConst(node: IntrospectedConstant): T;
    abstract generateClass(node: IntrospectedClass): T;
    abstract generateParameter(node: IntrospectedFunctionParameter): T;
    abstract generateProperty(node: IntrospectedProperty, construct?: boolean): T;
    abstract generateField(node: IntrospectedField): T;
    abstract generateSignal(node: IntrospectedSignal, type?: IntrospectedSignalType): T;
    abstract generateFunction(node: IntrospectedFunction): T;
    abstract generateClassFunction(node: IntrospectedClassFunction): T;
    abstract generateStaticClassFunction(node: IntrospectedStaticClassFunction): T;
    abstract generateVirtualClassFunction(node: IntrospectedVirtualClassFunction): T;
}
