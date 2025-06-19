import {
    type TypeExpression,
    FunctionType
} from "../gir.ts";

import type {
    GirCallbackElement,
    GirModule,
} from "../index.ts";

import type { FormatGenerator } from "../generators/generator.ts";
import type { GirVisitor } from "../visitor.ts";

import type { OptionsLoad } from "../types/index.ts";
import { IntrospectedFunction } from "./function.ts";
import type { IntrospectedFunctionParameter } from "./parameter.ts";

export class IntrospectedCallback extends IntrospectedFunction {
    asFunctionType(): FunctionType {
        return new FunctionType(
            Object.fromEntries(this.parameters.map(p => [p.name, p.type] as const)),
            this.return_type
        );
    }

    copy({
        parameters,
        returnType,
        outputParameters,
        parent
    }: {
        parent?: GirModule;
        parameters?: IntrospectedFunctionParameter[];
        outputParameters?: IntrospectedFunctionParameter[];
        returnType?: TypeExpression;
    } = {}): IntrospectedCallback {
        const cb = new IntrospectedCallback({
            name: this.name,
            raw_name: this.raw_name,
            return_type: returnType ?? this.return_type,
            parameters: parameters ?? this.parameters,
            output_parameters: outputParameters ?? this.output_parameters,
            namespace: parent ?? this.parent
        })._copyBaseProperties(this);

        cb.generics = [...this.generics];

        return cb;
    }

    accept(visitor: GirVisitor): IntrospectedCallback {
        const node = this.copy({
            parameters: this.parameters.map(p => {
                return p.accept(visitor);
            }),
            outputParameters: this.output_parameters.map(p => {
                return p.accept(visitor);
            }),
            returnType: visitor.visitType?.(this.return_type)
        });

        return visitor.visitCallback?.(node) ?? node;
    }

    static fromXML(element: GirCallbackElement, namespace: GirModule, options: OptionsLoad): IntrospectedCallback {
        const ns = namespace;
        const cb = new IntrospectedCallback(IntrospectedFunction.fromXML(element, ns, options).getCallbackParameters());

        const glibTypeName = element.$["glib:type-name"];
        if (typeof glibTypeName === "string" && element.$["glib:type-name"]) {
            cb.resolve_names.push(glibTypeName);

            ns.registerResolveName(glibTypeName, ns.namespace, cb.name);
        }

        if (element.$["c:type"]) {
            cb.resolve_names.push(element.$["c:type"]);

            ns.registerResolveName(element.$["c:type"], ns.namespace, cb.name);
        }

        return cb;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateCallback"]> {
        return generator.generateCallback(this) as ReturnType<T["generateCallback"]>;
    }
}
