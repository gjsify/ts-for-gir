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

import { IntrospectedClassCallback } from "./class-callback.ts";
import type { IntrospectedFunctionParameter } from "./parameter.ts";
import { IntrospectedConstructor } from "./constructor.ts";
import { IntrospectedStaticClassFunction } from "./static-function.ts";
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

    asCallback(): IntrospectedClassCallback {
        const { name, parent, output_parameters, parameters, return_type } = this;

        return new IntrospectedClassCallback({
            parent,
            name,
            output_parameters,
            parameters,
            return_type
        });
    }

    asConstructor(): IntrospectedConstructor {
        const { name, parent, parameters } = this;

        if (parent instanceof IntrospectedBaseClass) {
            // Always force constructors to have the correct return type.
            return new IntrospectedConstructor({
                name,
                parent,
                parameters,
                return_type: this.parent.getType(),
                isIntrospectable: this.isIntrospectable
            });
        }

        throw new Error(
            `Attempted to convert GirClassFunction into GirConstructor from invalid enum parent: ${this.parent.name}`
        );
    }

    asStaticClassFunction(parent: IntrospectedClass) {
        const { name, parameters, return_type, output_parameters } = this;

        return new IntrospectedStaticClassFunction({
            name,
            parameters,
            output_parameters,
            return_type,
            parent,
            isIntrospectable: this.isIntrospectable
        });
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

        return fn.asClassFunction(parent);
    }

    return(): TypeExpression {
        return this.return_type;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateClassFunction"]> {
        return generator.generateClassFunction(this) as ReturnType<T["generateClassFunction"]>;
    }
}
