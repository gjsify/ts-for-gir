import type { GirCallableParamElement, GirSignalElement } from "@gi.ts/parser";
import { GirDirection } from "@gi.ts/parser";
import type { FormatGenerator } from "../generators/generator.ts";
import {
	ArrayType,
	NativeType,
	NullableType,
	NumberType,
	ThisType,
	type TypeExpression,
	UnknownType,
	VoidType,
} from "../gir.ts";
import type { OptionsLoad } from "../types/index.ts";
import type { Options } from "../types/introspected.ts";
import { getType, parseDoc, parseMetadata } from "../utils/gir-parsing.ts";
import { isIntrospectable } from "../utils/girs.ts";
import type { GirVisitor } from "../visitor.ts";
import { IntrospectedClassMember } from "./introspected-class-member.ts";
import {
	type IntrospectedClass,
	IntrospectedClassCallback,
	IntrospectedClassFunction,
} from "./introspected-classes.ts";
import { IntrospectedFunctionParameter } from "./parameter.ts";

export enum IntrospectedSignalType {
	CONNECT,
	CONNECT_AFTER,
	EMIT,
}

export class IntrospectedSignal extends IntrospectedClassMember<IntrospectedClass> {
	parameters: IntrospectedFunctionParameter[];
	return_type: TypeExpression;
	detailed: boolean;

	constructor({
		name,
		parameters = [],
		return_type = UnknownType,
		detailed = false,
		parent,
		...args
	}: Options<{
		name: string;
		parameters?: IntrospectedFunctionParameter[];
		return_type?: TypeExpression;
		detailed?: boolean;
		parent: IntrospectedClass;
	}>) {
		super(name, parent, { ...args });

		this.parameters = parameters.map((p) => p.copy({ parent: this }));
		this.return_type = return_type;
		this.detailed = detailed;
	}

	accept(visitor: GirVisitor): IntrospectedSignal {
		const node = this.copy({
			parameters: this.parameters.map((p) => {
				return p.accept(visitor);
			}),
			returnType: visitor.visitType?.(this.return_type),
		});

		return visitor.visitSignal?.(node) ?? node;
	}

	copy({
		parent = this.parent,
		parameters,
		returnType,
		detailed,
	}: {
		parent?: IntrospectedClass;
		parameters?: IntrospectedFunctionParameter[];
		returnType?: TypeExpression;
		detailed?: boolean;
	} = {}): IntrospectedSignal {
		return new IntrospectedSignal({
			name: this.name,
			parent,
			parameters: parameters ?? this.parameters,
			return_type: returnType ?? this.return_type,
			detailed: detailed ?? this.detailed,
		})._copyBaseProperties(this);
	}

	static fromXML(element: GirSignalElement, parent: IntrospectedClass, options: OptionsLoad): IntrospectedSignal {
		const ns = parent.namespace;
		const signal = new IntrospectedSignal({
			name: element.$.name,
			parent,
			detailed: element.$.detailed === "1",
			isIntrospectable: isIntrospectable(element),
		});

		if (element.parameters?.[0].parameter) {
			signal.parameters.push(
				...element.parameters[0].parameter
					.filter((p): p is GirCallableParamElement & { $: { name: string } } => !!p.$.name)
					.map((p) => IntrospectedFunctionParameter.fromXML(p, signal, options)),
			);
		}

		const length_params = [] as number[];

		signal.parameters = signal.parameters
			.map((p) => {
				const unwrapped_type = p.type.unwrap();

				if (unwrapped_type instanceof ArrayType && unwrapped_type.length != null) {
					length_params.push(unwrapped_type.length);

					return p;
				}

				return p;
			})
			.filter((_, i) => {
				// We remove any length parameters.
				return !length_params.includes(i);
			})

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
					params: [] as IntrospectedFunctionParameter[],
				},
			)
			.params.reverse()
			.filter((p): p is IntrospectedFunctionParameter => p != null);

		signal.return_type = getType(ns, element["return-value"]?.[0]);

		if (options.loadDocs) {
			signal.doc = parseDoc(element);
			signal.metadata = parseMetadata(element);
		}

		return signal;
	}

	asEmit() {
		const emit = this.copy();

		const parent = this.parent;

		const prefix_signal = emit.parameters.some((p) => {
			return p.name === "signal";
		});

		const parameters = [
			new IntrospectedFunctionParameter({
				name: prefix_signal ? "$signal" : "signal",
				type: NativeType.of(`'${this.name}'`),
				direction: GirDirection.In,
			}),
			...emit.parameters,
		];

		const return_type = VoidType;

		return new IntrospectedClassFunction({
			return_type,
			parameters,
			name: "emit",
			parent,
		});
	}

	asConnect(after = false) {
		const connect = this.copy();

		const name = after ? "connect_after" : "connect";

		const parent = this.parent;
		const cb = new IntrospectedClassCallback({
			parent,
			name: "callback",
			output_parameters: [],
			parameters: [
				new IntrospectedFunctionParameter({
					name: "_source",
					type: ThisType,
					direction: GirDirection.In,
				}),
				...connect.parameters.map((p) => p.copy()),
			],
			return_type: connect.return_type,
		});

		const parameters = [
			new IntrospectedFunctionParameter({
				name: "signal",
				type: NativeType.of(`'${this.name}'`),
				direction: GirDirection.In,
			}),
			new IntrospectedFunctionParameter({
				name: "callback",
				type: cb.asFunctionType(),
				direction: GirDirection.In,
			}),
		];

		const return_type = NumberType;

		return new IntrospectedClassFunction({
			return_type,
			parameters,
			name,
			parent: this.parent,
		});
	}

	asString<T extends FormatGenerator<unknown>>(
		generator: T,
		type?: IntrospectedSignalType,
	): ReturnType<T["generateSignal"]> {
		return generator.generateSignal(this, type) as ReturnType<T["generateSignal"]>;
	}
}
