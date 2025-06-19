import {
  UnknownType,
  TypeExpression,
  Generic,
} from "../gir.ts";

import { IntrospectedBase } from "./introspected-base.ts";
import type { IntrospectedOptions } from "../types/index.ts";

import type {
  GirFunctionElement,
  GirMethodElement,
} from "../index.ts";

import { IntrospectedClass } from "./introspected-class.ts";
import { IntrospectedEnum } from "./enum.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";
import { IntrospectedBaseClass } from "./introspected-base-class.ts";

import type { OptionsLoad } from "../types/index.ts";

import type { IntrospectedFunctionParameter } from "./parameter.ts";

import { IntrospectedFunction } from "./function.ts";


export class IntrospectedClassFunction<
    Parent extends IntrospectedBaseClass | IntrospectedEnum = IntrospectedBaseClass | IntrospectedEnum
> extends IntrospectedBase<Parent> {
    readonly parameters: IntrospectedFunctionParameter[];
    protected readonly return_type: TypeExpression;
    readonly output_parameters: IntrospectedFunctionParameter[];
    protected _anyify: boolean = false;
    protected _generify: boolean = false;
    interfaceParent: IntrospectedBaseClass | IntrospectedEnum | null = null;
    returnTypeDoc?: string | null;

    generics: Generic[] = [];

    constructor({
        name,
        parameters = [],
        output_parameters = [],
        return_type = UnknownType,
        parent,
        doc,
        ...args
    }: IntrospectedOptions<{
        name: string;
        parameters?: IntrospectedFunctionParameter[];
        output_parameters?: IntrospectedFunctionParameter[];
        return_type?: TypeExpression;
        parent: Parent;
        originalParent?: Parent | null;
        doc?: string | null;
    }>) {
        super(name, parent, { ...args });

        this.parameters = parameters.map(p => p.copy({ parent: this }));
        this.output_parameters = output_parameters.map(p => p.copy({ parent: this }));
        this.return_type = return_type;
        this.doc = doc;
    }

    get namespace() {
        return this.parent.namespace;
    }

    getCallbackParameters() {
        const { name, parent, output_parameters, parameters, return_type } = this;
        return {
            name,
            parent,
            output_parameters,
            parameters,
            return_type
        }
    }



    copy({
        parent = this.parent,
        name,
        interfaceParent,
        parameters,
        outputParameters,
        returnType
    }: {
        parent?: Parent;
        name?: string;
        interfaceParent?: IntrospectedBaseClass | IntrospectedEnum;
        parameters?: IntrospectedFunctionParameter[];
        outputParameters?: IntrospectedFunctionParameter[];
        returnType?: TypeExpression;
    } = {}): IntrospectedClassFunction<Parent> {
        const fn = new IntrospectedClassFunction<Parent>({
            name: name ?? this.name,
            parent,
            output_parameters: outputParameters ?? this.output_parameters,
            parameters: parameters ?? this.parameters,
            return_type: returnType ?? this.return_type
        });

        fn.generics = [...this.generics];
        fn.returnTypeDoc = this.returnTypeDoc;

        if (interfaceParent) {
            fn.interfaceParent = interfaceParent;
        }

        return fn._copyBaseProperties(this);
    }

    accept(visitor: GirVisitor): IntrospectedClassFunction<Parent> {
        const node = this.copy({
            parameters: this.parameters.map(p => {
                return p.accept(visitor);
            }),
            outputParameters: this.output_parameters.map(p => {
                return p.accept(visitor);
            }),
            returnType: visitor.visitType?.(this.return_type)
        });

        const fn = visitor.visitClassFunction?.(node);

        return fn ?? node;
    }

    anyify(): this {
        this._anyify = true;

        return this;
    }

    shouldAnyify() {
        return this._anyify;
    }

    static fromXML(
        element: GirFunctionElement | GirMethodElement,
        parent: IntrospectedBaseClass | IntrospectedEnum,
        options: OptionsLoad
    ): IntrospectedClassFunction {
        const fn = IntrospectedFunction.fromXML(element, parent.namespace, options);

        // Convert the function to a class function
        const { raw_name: name, output_parameters, parameters, return_type, doc, isIntrospectable } = fn;

        const classFn = new IntrospectedClassFunction({
            parent,
            name,
            output_parameters,
            parameters,
            return_type,
            doc,
            isIntrospectable
        });

        classFn.returnTypeDoc = fn.returnTypeDoc;
        classFn.generics = [...fn.generics];

        return classFn;
    }

    return(): TypeExpression {
        return this.return_type;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateClassFunction"]> {
        return generator.generateClassFunction(this) as ReturnType<T["generateClassFunction"]>;
    }
}
