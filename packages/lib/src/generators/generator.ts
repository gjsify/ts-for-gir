import { IntrospectedNamespace } from "../gir/namespace.js";
import { IntrospectedClass, IntrospectedRecord, IntrospectedInterface } from "../gir/class.js";
import { IntrospectedConstant } from "../gir/const.js";
import { IntrospectedEnum, IntrospectedError, GirEnumMember } from "../gir/enum.js";
import { IntrospectedProperty, IntrospectedField } from "../gir/property.js";
import { IntrospectedSignal, IntrospectedSignalType } from "../gir/signal.js";
import {
    IntrospectedFunction,
    IntrospectedFunctionParameter,
    IntrospectedConstructor,
    IntrospectedCallback,
    IntrospectedDirectAllocationConstructor,
    IntrospectedClassCallback
} from "../gir/function.js";
import { IntrospectedClassFunction } from "../gir/function.js";
import { IntrospectedStaticClassFunction } from "../gir/function.js";
import { IntrospectedVirtualClassFunction } from "../gir/function.js";
import { IntrospectedAlias } from "../gir/alias.js";
import { TypeExpression } from "../gir.js";
import { OptionsGeneration } from "../types/options-generation.js";

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

    abstract generateCallback(node: IntrospectedCallback): Promise<T>;
    abstract generateClassCallback(node: IntrospectedClassCallback): Promise<T>;
    abstract generateAlias(node: IntrospectedAlias): Promise<T>;
    abstract generateConstructor(node: IntrospectedConstructor): T;
    abstract generateDirectAllocationConstructor(node: IntrospectedDirectAllocationConstructor): T;
    abstract generateConstructorFunction(node: IntrospectedConstructor): Promise<T>;
    abstract generateRecord(node: IntrospectedRecord): Promise<T>;
    abstract generateInterface(node: IntrospectedInterface): Promise<T>;
    abstract generateEnumMember(node: GirEnumMember): T;
    abstract generateError(node: IntrospectedError): T;
    abstract generateEnum(node: IntrospectedEnum): T;
    abstract generateConst(node: IntrospectedConstant): Promise<T>;
    abstract generateClass(node: IntrospectedClass): Promise<T>;
    abstract generateParameter(node: IntrospectedFunctionParameter): Promise<T>;
    abstract generateProperty(node: IntrospectedProperty, construct?: boolean): Promise<T>;
    abstract generateField(node: IntrospectedField): Promise<T>;
    abstract generateSignal(node: IntrospectedSignal, type?: IntrospectedSignalType): T;
    abstract generateFunction(node: IntrospectedFunction): Promise<T>;
    abstract generateClassFunction(node: IntrospectedClassFunction): Promise<T>;
    abstract generateStaticClassFunction(node: IntrospectedStaticClassFunction): Promise<T>;
    abstract generateVirtualClassFunction(node: IntrospectedVirtualClassFunction): Promise<T>;
}
