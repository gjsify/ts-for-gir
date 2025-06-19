import type { IntrospectedNamespace } from "../gir/namespace.ts";
import type { IntrospectedClass } from "../gir/introspected-class.ts";
import type { IntrospectedRecord } from "../gir/record.ts";
import type { IntrospectedInterface } from "../gir/interface.ts";
import type { IntrospectedConstant } from "../gir/const.ts";
import type { IntrospectedEnum } from "../gir/enum.ts";
import type { IntrospectedError } from "../gir/error.ts";
import type { GirEnumMember } from "../gir/enum-member.ts";
import type { IntrospectedProperty, IntrospectedField } from "../gir/property.ts";
import type { IntrospectedSignal, IntrospectedSignalType } from "../gir/signal.ts";
import type { IntrospectedFunctionParameter } from "../gir/parameter.ts";
import type { IntrospectedConstructor } from "../gir/constructor.ts";
import type { IntrospectedDirectAllocationConstructor } from "../gir/direct-allocation-constructor.ts";
import type { IntrospectedFunction } from "../gir/function.ts";
import type { IntrospectedCallback, IntrospectedClassCallback } from "../gir/callback.ts";
import type { IntrospectedClassFunction } from "../gir/class-function.ts";
import type { IntrospectedStaticClassFunction } from "../gir/static-function.ts";
import type { IntrospectedVirtualClassFunction } from "../gir/virtual-function.ts";
import type { IntrospectedAlias } from "../gir/alias.ts";
import type { TypeExpression } from "../gir.ts";
import type { OptionsGeneration } from "../types/options-generation.ts";

// TODO: Move to types/
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
