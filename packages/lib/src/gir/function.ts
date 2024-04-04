import {
    TypeIdentifier,
    UnknownType,
    VoidType,
    ArrayType,
    ClosureType,
    NullableType,
    TypeExpression,
    Generic,
    FunctionType
} from "../gir.js";

import { IntrospectedBase, IntrospectedClassMember, IntrospectedNamespaceMember, Options } from "./base.js";
import {
    GirFunctionElement,
    GirMethodElement,
    GirDirection,
    GirCallableParamElement,
    GirCallbackElement,
    GirVirtualMethodElement,
    GirConstructorElement,
    GirModule
} from "../index.js";

import { IntrospectedNamespace, isIntrospectable } from "./namespace.js";
import { getType, isInvalid, sanitizeMemberName, sanitizeIdentifierName, parseDoc, parseMetadata } from "./util.js";
import { IntrospectedClass } from "./class.js";
import { IntrospectedEnum } from "./enum.js";
import { IntrospectedSignal } from "./signal.js";
import { FormatGenerator } from "../generators/generator.js";
import { LoadOptions } from "../types.js";
import { GirVisitor } from "../visitor.js";
import { IntrospectedField } from "./property.js";
import { IntrospectedBaseClass } from "./nodes.js";

function hasShadow(obj: GirFunctionElement | GirMethodElement): obj is GirFunctionElement & { $: { shadows: string } } {
    return obj.$["shadows"] != null;
}

export class IntrospectedFunction extends IntrospectedNamespaceMember {
    readonly parameters: IntrospectedFunctionParameter[];
    readonly output_parameters: IntrospectedFunctionParameter[];
    readonly return_type: TypeExpression;
    readonly raw_name: string;

    generics: Generic[] = [];
    returnTypeDoc: string | null;

    constructor({
        name,
        raw_name,
        return_type = UnknownType,
        parameters = [],
        output_parameters = [],
        namespace,
        ...args
    }: Options<{
        name: string;
        raw_name: string;
        return_type?: TypeExpression;
        parameters?: IntrospectedFunctionParameter[];
        output_parameters?: IntrospectedFunctionParameter[];
        namespace: GirModule;
    }>) {
        super(name, namespace, { ...args });

        this.raw_name = raw_name;
        this.parameters = parameters.map(p => p.copy({ parent: this }));
        this.output_parameters = output_parameters.map(p => p.copy({ parent: this }));
        this.return_type = return_type;
        this.returnTypeDoc = null;
    }

    copy(
        {
            parent = this.parent,
            outputParameters,
            parameters,
            return_type
        }: {
            parent?: GirModule;
            parameters?: IntrospectedFunctionParameter[];
            outputParameters?: IntrospectedFunctionParameter[];
            return_type?: TypeExpression;
        } = { parent: this.parent }
    ): IntrospectedFunction {
        const fn = new IntrospectedFunction({
            namespace: parent ?? this.namespace,
            raw_name: this.raw_name,
            name: this.name,
            return_type: return_type ?? this.return_type,
            output_parameters: outputParameters ?? this.output_parameters,
            parameters: parameters ?? this.parameters
        });

        fn.returnTypeDoc = this.returnTypeDoc;
        fn.generics = [...this.generics];

        return fn._copyBaseProperties(this);
    }

    accept(visitor: GirVisitor): IntrospectedFunction {
        const node = this.copy({
            parent: this.parent,
            parameters: this.parameters.map(p => {
                return p.accept(visitor);
            }),
            outputParameters: this.output_parameters.map(p => {
                return p.accept(visitor);
            }),
            return_type: visitor.visitType?.(this.return_type)
        });

        return visitor.visitFunction?.(node) ?? node;
    }

    static fromXML(
        element: GirFunctionElement | GirMethodElement,
        ns: IntrospectedNamespace,
        options: LoadOptions
    ): IntrospectedFunction {
        let raw_name = element.$.name;
        let name = sanitizeIdentifierName(null, raw_name);

        if (hasShadow(element)) {
            raw_name = element.$["shadows"];
            name = sanitizeIdentifierName(null, element.$["shadows"]);
        }

        // TODO: Don't create a useless function object here
        let fn = new IntrospectedFunction({
            name,
            raw_name,
            namespace: ns,
            isIntrospectable: isIntrospectable(element)
        });

        let return_type: TypeExpression;

        if ("return-value" in element && element["return-value"] && element["return-value"].length > 0) {
            const value = element["return-value"][0];

            return_type = getType(ns, value);

            fn.returnTypeDoc = parseDoc(value);
        } else {
            return_type = VoidType;
        }

        let parameters: IntrospectedFunctionParameter[] = [];

        if (element.parameters) {
            const param = element.parameters[0].parameter;

            if (param) {
                const inputs = param.filter((p): p is typeof p & { $: { name: string } } => {
                    return !!p.$.name;
                });

                parameters.push(...inputs.map(i => IntrospectedFunctionParameter.fromXML(i, fn, options)));

                const unwrapped = return_type.unwrap();

                const length_params =
                    unwrapped instanceof ArrayType && unwrapped.length != null ? [unwrapped.length] : ([] as number[]);
                const user_data_params = [] as number[];

                parameters = parameters
                    .map(p => {
                        const unwrapped_type = p.type.unwrap();

                        if (unwrapped_type instanceof ArrayType && unwrapped_type.length != null) {
                            length_params.push(unwrapped_type.length);

                            return p;
                        }

                        if (unwrapped_type instanceof ClosureType && unwrapped_type.user_data != null) {
                            user_data_params.push(unwrapped_type.user_data);

                            return p;
                        }

                        return p;
                    })
                    .filter((_, i) => {
                        // We remove any length parameters.
                        return !length_params.includes(i) && !user_data_params.includes(i);
                    })
                    .filter(v => !(v.type instanceof TypeIdentifier && v.type.is("GLib", "DestroyNotify")))
                    .reverse()
                    .reduce(
                        ({ allowOptions, params }, p) => {
                            const { type, isOptional } = p;

                            if (allowOptions) {
                                if (type instanceof NullableType) {
                                    params.push(p.copy({ isOptional: true }));
                                } else if (!isOptional) {
                                    params.push(p);
                                    return { allowOptions: false, params };
                                } else {
                                    params.push(p);
                                }
                            } else {
                                if (isOptional) {
                                    params.push(p.copy({ type: new NullableType(type), isOptional: false }));
                                } else {
                                    params.push(p);
                                }
                            }

                            return { allowOptions, params };
                        },
                        {
                            allowOptions: true,
                            params: [] as IntrospectedFunctionParameter[]
                        }
                    )
                    .params.reverse()
                    .filter((p): p is IntrospectedFunctionParameter => p != null);
            }
        }

        const input_parameters = parameters.filter(
            param => param.direction === GirDirection.In || param.direction === GirDirection.Inout
        );
        const output_parameters = parameters
            .filter(
                param =>
                    param.direction && (param.direction === GirDirection.Out || param.direction === GirDirection.Inout)
            )
            .map(parameter => parameter.copy({ isOptional: false }));

        fn = fn.copy({
            parent: ns,
            parameters: input_parameters,
            outputParameters: output_parameters,
            return_type
        });

        if (options.loadDocs) {
            fn.doc = parseDoc(element);
            fn.metadata = parseMetadata(element);
        }

        return fn;
    }

    return() {
        return this.return_type;
    }

    asCallback(): IntrospectedCallback {
        const { name, raw_name, namespace, output_parameters, parameters, return_type } = this;

        return new IntrospectedCallback({
            namespace,
            raw_name,
            name,
            output_parameters,
            parameters,
            return_type
        });
    }

    asClassFunction(parent: IntrospectedBaseClass | IntrospectedEnum): IntrospectedClassFunction {
        const { raw_name: name, output_parameters, parameters, return_type, doc, isIntrospectable } = this;

        const fn = new IntrospectedClassFunction({
            parent,
            name,
            output_parameters,
            parameters,
            return_type,
            doc,
            isIntrospectable
        });

        fn.returnTypeDoc = this.returnTypeDoc;
        fn.generics = [...this.generics];

        return fn;
    }

    asVirtualClassFunction(parent: IntrospectedBaseClass): IntrospectedVirtualClassFunction {
        const { raw_name: name, output_parameters, parameters, return_type, doc, isIntrospectable } = this;

        return new IntrospectedVirtualClassFunction({
            parent,
            name,
            output_parameters,
            parameters,
            return_type,
            doc,
            isIntrospectable
        });
    }

    asStaticClassFunction(parent: IntrospectedBaseClass | IntrospectedEnum): IntrospectedStaticClassFunction {
        const { raw_name: name, output_parameters, parameters, return_type, doc, isIntrospectable } = this;

        return new IntrospectedStaticClassFunction({
            parent,
            name,
            output_parameters,
            parameters,
            return_type,
            doc,
            isIntrospectable
        });
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateFunction"]> {
        return generator.generateFunction(this) as ReturnType<T["generateFunction"]>;
    }
}

export class IntrospectedDirectAllocationConstructor extends IntrospectedClassMember {
    parameters: IntrospectedFunctionParameter[];

    constructor(parameters: IntrospectedFunctionParameter[], parent: IntrospectedBaseClass | null) {
        super("new", parent, { isPrivate: false, isIntrospectable: true });

        this.parameters = parameters.map(parameter => parameter.copy({ parent: this }));
    }

    static fromFields(fields: IntrospectedField[], parent: IntrospectedBaseClass) {
        const building = new IntrospectedDirectAllocationConstructor([], parent);

        building.parameters = fields
            .filter(field => {
                return !field.isStatic && !field.isPrivate && !field.type.isPointer;
            })
            .map(
                field =>
                    new IntrospectedFunctionParameter({
                        parent: building,
                        type: field.type,
                        name: field.name,
                        direction: GirDirection.In
                    })
            );

        return building;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateDirectAllocationConstructor"]> {
        return generator.generateDirectAllocationConstructor(this) as ReturnType<
            T["generateDirectAllocationConstructor"]
        >;
    }

    copy(
        options?:
            | { parent?: IntrospectedBaseClass | undefined; parameters?: IntrospectedFunctionParameter[] }
            | undefined
    ): IntrospectedDirectAllocationConstructor {
        const copy = new IntrospectedDirectAllocationConstructor(
            options?.parameters ?? this.parameters,
            options?.parent ?? this.parent
        );

        copy._copyBaseProperties(this);

        return copy;
    }

    accept(visitor: GirVisitor): IntrospectedDirectAllocationConstructor {
        const node = this.copy({
            parameters: this.parameters.map(parameters => {
                return parameters.accept(visitor);
            })
        });

        return visitor.visitDirectAllocationConstructor?.(node) ?? node;
    }
}

export class IntrospectedConstructor extends IntrospectedClassMember {
    readonly parameters: IntrospectedFunctionParameter[] = [];
    readonly return_type: TypeExpression = UnknownType;

    generics: Generic[] = [];

    constructor({
        name,
        parameters = [],
        return_type,
        parent,
        ...args
    }: Options<{
        name: string;
        parent: IntrospectedBaseClass | null;
        parameters?: IntrospectedFunctionParameter[];
        return_type: TypeExpression;
    }>) {
        super(name, parent, { ...args });
        this.return_type = return_type;
        this.parameters = parameters.map(p => p.copy({ parent: this }));
    }

    copy({
        parent,
        parameters,
        return_type
    }: {
        parent?: IntrospectedBaseClass;
        parameters?: IntrospectedFunctionParameter[];
        return_type?: TypeExpression;
    } = {}): IntrospectedConstructor {
        const constr = new IntrospectedConstructor({
            name: this.name,
            parent: parent ?? this.parent ?? null,
            return_type: return_type ?? this.return_type,
            parameters: parameters ?? this.parameters
        })._copyBaseProperties(this);

        constr.generics = [...this.generics];

        return constr;
    }

    static fromXML(
        m: GirConstructorElement,
        parent: IntrospectedBaseClass,
        options: LoadOptions
    ): IntrospectedConstructor {
        return IntrospectedClassFunction.fromXML(m as GirFunctionElement, parent, options).asConstructor();
    }

    accept(visitor: GirVisitor): IntrospectedConstructor {
        const node = this.copy({
            parameters: this.parameters.map(p => {
                return p.accept(visitor);
            }),
            return_type: visitor.visitType?.(this.return_type)
        });

        return visitor.visitConstructor?.(node) ?? node;
    }

    return() {
        return this.return_type;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateConstructor"]> {
        return generator.generateConstructor(this) as ReturnType<T["generateConstructor"]>;
    }
}

export class IntrospectedFunctionParameter extends IntrospectedBase<
    | IntrospectedClassFunction
    | IntrospectedFunction
    | IntrospectedSignal
    | IntrospectedConstructor
    | IntrospectedDirectAllocationConstructor
    | null
> {
    readonly type: TypeExpression;
    readonly direction: GirDirection;
    readonly isVarArgs: boolean = false;
    readonly isOptional: boolean = false;
    readonly isNullable: boolean = false;

    constructor({
        name,
        direction,
        type,
        parent,
        doc,
        isVarArgs = false,
        isOptional = false,
        isNullable = false,
        ...args
    }: Options<{
        name: string;
        parent?:
            | IntrospectedClassFunction
            | IntrospectedFunction
            | IntrospectedSignal
            | IntrospectedConstructor
            | IntrospectedDirectAllocationConstructor
            | null;
        type: TypeExpression;
        direction: GirDirection;
        doc?: string | null;
        isVarArgs?: boolean;
        isOptional?: boolean;
        isNullable?: boolean;
    }>) {
        super(name, parent ?? null, { ...args });

        this.type = type;
        this.direction = direction;
        this.doc = doc;
        this.isVarArgs = isVarArgs;
        this.isOptional = isOptional;
        this.isNullable = isNullable;
    }

    get namespace() {
        if (!this.parent) throw new Error(`Failed to get namespace for ${this.name}`);

        return this.parent.namespace;
    }

    asField() {
        const { name, parent, isOptional: optional, type } = this;

        if (!(parent?.parent instanceof IntrospectedBaseClass)) {
            throw new Error("Can't convert parameter of non-class function to field");
        }

        return new IntrospectedField({ name, parent: parent.parent, optional, type });
    }

    copy(
        options: {
            parent?:
                | IntrospectedClassFunction
                | IntrospectedFunction
                | IntrospectedSignal
                | IntrospectedConstructor
                | IntrospectedDirectAllocationConstructor
                | null;
            type?: TypeExpression;
            isOptional?: boolean;
            isNullable?: boolean;
        } = {
            parent: this.parent
        }
    ): IntrospectedFunctionParameter {
        const { type, parent, direction, isVarArgs, isOptional, isNullable, name, doc } = this;

        return new IntrospectedFunctionParameter({
            parent: options.parent ?? parent,
            name,
            direction,
            isVarArgs,
            isOptional: options.isOptional ?? isOptional,
            isNullable: options.isNullable ?? isNullable,
            type: options.type ?? type,
            doc
        })._copyBaseProperties(this);
    }

    accept(visitor: GirVisitor): IntrospectedFunctionParameter {
        const node = this.copy({
            type: visitor.visitType?.(this.type)
        });

        return visitor.visitParameter?.(node) ?? node;
    }

    asString<T>(generator: FormatGenerator<T>): T {
        return generator.generateParameter(this);
    }

    static fromXML<
        Parent extends IntrospectedSignal | IntrospectedClassFunction | IntrospectedFunction | IntrospectedConstructor
    >(
        parameter: GirCallableParamElement & { $: { name: string } },
        parent: Parent,
        options: LoadOptions
    ): IntrospectedFunctionParameter {
        const ns = parent.namespace;
        let name = sanitizeMemberName(parameter.$.name);

        if (isInvalid(name)) {
            name = `_${name}`;
        }

        let isVarArgs = false;
        let isOptional = false;
        let isNullable = false;

        let type: TypeExpression;
        let direction: GirDirection;

        if (
            !parameter.$.direction ||
            parameter.$.direction === GirDirection.In ||
            parameter.$.direction === GirDirection.Inout ||
            parameter.$.direction === GirDirection.InOut
        ) {
            if (name === "...") {
                isVarArgs = true;
                name = "args";
            }

            // Default to "in" direction
            direction = parameter.$.direction || GirDirection.In;

            const optional = parameter.$.optional === "1";
            const nullable = parameter.$.nullable === "1";

            if (optional) {
                isOptional = true;
            }

            if (nullable) {
                isNullable = true;
            }

            type = getType(ns, parameter);
        } else if (parameter.$.direction === GirDirection.Out) {
            direction = parameter.$.direction;
            type = getType(ns, parameter);
        } else {
            throw new Error(`Unknown parameter direction: ${parameter.$.direction as string}`);
        }

        const fp = new IntrospectedFunctionParameter({
            isVarArgs,
            type: isVarArgs ? new ArrayType(type) : type,
            direction,
            parent: parent ?? undefined,
            isOptional,
            isNullable,
            name,
            isIntrospectable: isIntrospectable(parameter)
        });

        if (options.loadDocs) {
            fp.doc = parseDoc(parameter);
            fp.metadata = parseMetadata(parameter);
        }

        return fp;
    }
}

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
    }: Options<{
        name: string;
        parameters?: IntrospectedFunctionParameter[];
        output_parameters?: IntrospectedFunctionParameter[];
        return_type?: TypeExpression;
        parent: Parent;
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
        options: LoadOptions
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

export class IntrospectedVirtualClassFunction extends IntrospectedClassFunction<IntrospectedBaseClass> {
    constructor({
        name,
        parameters = [],
        output_parameters = [],
        return_type = UnknownType,
        parent,
        doc,
        ...args
    }: Options<{
        name: string;
        parameters: IntrospectedFunctionParameter[];
        output_parameters?: IntrospectedFunctionParameter[];
        return_type?: TypeExpression;
        parent: IntrospectedBaseClass;
        doc?: string | null;
    }>) {
        super({
            parent,
            name: name.startsWith("vfunc_") ? name : `vfunc_${name}`,
            parameters,
            output_parameters,
            return_type,
            doc,
            ...args
        });
    }

    copy({
        parent = this.parent,
        interfaceParent,
        parameters,
        outputParameters,
        returnType
    }: {
        parent?: IntrospectedBaseClass;
        interfaceParent?: IntrospectedBaseClass | IntrospectedEnum | undefined;
        parameters?: IntrospectedFunctionParameter[] | undefined;
        outputParameters?: IntrospectedFunctionParameter[] | undefined;
        returnType?: TypeExpression | undefined;
    }): IntrospectedVirtualClassFunction {
        const fn = new IntrospectedVirtualClassFunction({
            name: this.name,
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

    return(): TypeExpression {
        return this.return_type;
    }

    accept(visitor: GirVisitor): IntrospectedVirtualClassFunction {
        const node = this.copy({
            parameters: this.parameters.map(p => {
                return p.accept(visitor);
            }),
            outputParameters: this.output_parameters.map(p => {
                return p.accept(visitor);
            }),
            returnType: visitor.visitType?.(this.return_type)
        });
        return visitor.visitVirtualClassFunction?.(node) ?? node;
    }

    static fromXML(
        m: GirVirtualMethodElement,
        parent: IntrospectedBaseClass,
        options: LoadOptions
    ): IntrospectedVirtualClassFunction {
        const fn = IntrospectedFunction.fromXML(m, parent.namespace, options);

        return fn.asVirtualClassFunction(parent);
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateVirtualClassFunction"]> {
        return generator.generateVirtualClassFunction(this) as ReturnType<T["generateVirtualClassFunction"]>;
    }
}

export class IntrospectedStaticClassFunction extends IntrospectedClassFunction {
    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateStaticClassFunction"]> {
        return generator.generateStaticClassFunction(this) as ReturnType<T["generateStaticClassFunction"]>;
    }

    copy({
        parent = this.parent,
        interfaceParent,
        parameters,
        outputParameters,
        returnType
    }: {
        parent?: IntrospectedBaseClass | IntrospectedEnum;
        interfaceParent?: IntrospectedBaseClass | IntrospectedEnum | undefined;
        parameters?: IntrospectedFunctionParameter[] | undefined;
        outputParameters?: IntrospectedFunctionParameter[] | undefined;
        returnType?: TypeExpression | undefined;
    } = {}): IntrospectedStaticClassFunction {
        const fn = new IntrospectedStaticClassFunction({
            name: this.name,
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

    accept(visitor: GirVisitor): IntrospectedStaticClassFunction {
        const node = this.copy({
            parent: this.parent,
            parameters: this.parameters.map(p => {
                return p.accept(visitor);
            }),
            outputParameters: this.output_parameters.map(p => {
                return p.accept(visitor);
            }),
            returnType: visitor.visitType?.(this.return_type)
        });

        return visitor.visitStaticClassFunction?.(node) ?? node;
    }

    asClassFunction(parent: IntrospectedBaseClass): IntrospectedClassFunction {
        const { name, output_parameters, parameters, return_type, doc, isIntrospectable } = this;

        const fn = new IntrospectedClassFunction({
            parent,
            name,
            output_parameters,
            parameters,
            return_type,
            doc,
            isIntrospectable
        });

        fn.returnTypeDoc = this.returnTypeDoc;
        fn.generics = [...this.generics];

        return fn;
    }

    static fromXML(
        m: GirFunctionElement,
        parent: IntrospectedBaseClass | IntrospectedEnum,
        options: LoadOptions
    ): IntrospectedStaticClassFunction {
        const fn = IntrospectedFunction.fromXML(m, parent.namespace, options);

        return fn.asStaticClassFunction(parent);
    }
}

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

    static fromXML(element: GirCallbackElement, namespace: GirModule, options: LoadOptions): IntrospectedCallback {
        const ns = namespace;
        const cb = IntrospectedFunction.fromXML(element, ns, options).asCallback();

        const glibTypeName = element.$["glib:type-name"];
        if (typeof glibTypeName === "string" && element.$["glib:type-name"]) {
            cb.resolve_names.push(glibTypeName);

            ns.registerResolveName(glibTypeName, ns.name, cb.name);
        }

        if (element.$["c:type"]) {
            cb.resolve_names.push(element.$["c:type"]);

            ns.registerResolveName(element.$["c:type"], ns.name, cb.name);
        }

        return cb;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateCallback"]> {
        return generator.generateCallback(this) as ReturnType<T["generateCallback"]>;
    }
}

export class IntrospectedClassCallback extends IntrospectedClassFunction {
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
        parent?: IntrospectedBaseClass;
        parameters?: IntrospectedFunctionParameter[];
        outputParameters?: IntrospectedFunctionParameter[];
        returnType?: TypeExpression;
    } = {}): IntrospectedClassCallback {
        const cb = new IntrospectedClassCallback({
            name: this.name,
            return_type: returnType ?? this.return_type,
            parameters: parameters ?? this.parameters,
            output_parameters: outputParameters ?? this.output_parameters,
            parent: parent ?? this.parent
        })._copyBaseProperties(this);

        cb.generics = [...this.generics];

        return cb;
    }

    accept(visitor: GirVisitor): IntrospectedClassCallback {
        const node = this.copy({
            parameters: this.parameters.map(p => {
                return p.accept(visitor);
            }),
            outputParameters: this.output_parameters.map(p => {
                return p.accept(visitor);
            }),
            returnType: visitor.visitType?.(this.return_type)
        });

        return visitor.visitClassCallback?.(node) ?? node;
    }

    static fromXML(
        element: GirCallbackElement,
        parent: IntrospectedBaseClass,
        options: LoadOptions
    ): IntrospectedClassCallback {
        const ns = parent.namespace;
        const cb = IntrospectedClassFunction.fromXML(element, parent, options).asCallback();

        const glibTypeName = element.$["glib:type-name"];
        if (typeof glibTypeName === "string" && element.$["glib:type-name"]) {
            cb.resolve_names.push(glibTypeName);

            ns.registerResolveName(glibTypeName, ns.name, cb.name);
        }

        if (element.$["c:type"]) {
            cb.resolve_names.push(element.$["c:type"]);

            ns.registerResolveName(element.$["c:type"], ns.name, cb.name);
        }

        return cb;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateClassCallback"]> {
        return generator.generateClassCallback(this) as ReturnType<T["generateClassCallback"]>;
    }
}
