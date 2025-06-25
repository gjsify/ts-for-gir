import { GirDirection } from "@gi.ts/parser";
import type { FormatGenerator } from "../generators/generator.ts";
import {
	ArrayType,
	ClosureType,
	type Generic,
	NullableType,
	type TypeExpression,
	TypeIdentifier,
	UnknownType,
	VoidType,
} from "../gir.ts";

import type { GirFunctionElement, GirMethodElement, GirModule } from "../index.ts";
import type { IntrospectedOptions, OptionsLoad } from "../types/index.ts";
import { getType, hasShadow, parseDoc, parseMetadata } from "../utils/gir-parsing.ts";
import { isIntrospectable } from "../utils/girs.ts";
import { sanitizeIdentifierName } from "../utils/naming.ts";
import type { GirVisitor } from "../visitor.ts";
import { IntrospectedNamespaceMember } from "./introspected-namespace-member.ts";
import type { IntrospectedNamespace } from "./namespace.ts";

import { IntrospectedFunctionParameter } from "./parameter.ts";

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
	}: IntrospectedOptions<{
		name: string;
		raw_name: string;
		return_type?: TypeExpression;
		parameters?: IntrospectedFunctionParameter[];
		output_parameters?: IntrospectedFunctionParameter[];
		namespace: GirModule;
	}>) {
		super(name, namespace, { ...args });

		this.raw_name = raw_name;
		this.parameters = parameters.map((p) => p.copy({ parent: this }));
		this.output_parameters = output_parameters.map((p) => p.copy({ parent: this }));
		this.return_type = return_type;
		this.returnTypeDoc = null;
	}

	copy(
		{
			parent = this.parent,
			outputParameters,
			parameters,
			return_type,
		}: {
			parent?: GirModule;
			parameters?: IntrospectedFunctionParameter[];
			outputParameters?: IntrospectedFunctionParameter[];
			return_type?: TypeExpression;
		} = { parent: this.parent },
	): IntrospectedFunction {
		const fn = new IntrospectedFunction({
			namespace: parent ?? this.namespace,
			raw_name: this.raw_name,
			name: this.name,
			return_type: return_type ?? this.return_type,
			output_parameters: outputParameters ?? this.output_parameters,
			parameters: parameters ?? this.parameters,
		});

		fn.returnTypeDoc = this.returnTypeDoc;
		fn.generics = [...this.generics];

		return fn._copyBaseProperties(this);
	}

	accept(visitor: GirVisitor): IntrospectedFunction {
		const node = this.copy({
			parent: this.parent,
			parameters: this.parameters.map((p) => {
				return p.accept(visitor);
			}),
			outputParameters: this.output_parameters.map((p) => {
				return p.accept(visitor);
			}),
			return_type: visitor.visitType?.(this.return_type),
		});

		return visitor.visitFunction?.(node) ?? node;
	}

	static fromXML(
		element: GirFunctionElement | GirMethodElement,
		ns: IntrospectedNamespace,
		options: OptionsLoad,
	): IntrospectedFunction {
		let raw_name = element.$.name;
		let name = sanitizeIdentifierName(null, raw_name);

		if (hasShadow(element)) {
			raw_name = element.$.shadows;
			name = sanitizeIdentifierName(null, element.$.shadows);
		}

		// TODO: Don't create a useless function object here
		let fn = new IntrospectedFunction({
			name,
			raw_name,
			namespace: ns,
			isIntrospectable: isIntrospectable(element),
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

				parameters.push(...inputs.map((i) => IntrospectedFunctionParameter.fromXML(i, fn, options)));

				const unwrapped = return_type.unwrap();

				const length_params =
					unwrapped instanceof ArrayType && unwrapped.length != null ? [unwrapped.length] : ([] as number[]);
				const user_data_params = [] as number[];

				parameters = parameters
					.map((p) => {
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
					.filter((v) => !(v.type instanceof TypeIdentifier && v.type.is("GLib", "DestroyNotify")))
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
			}
		}

		const input_parameters = parameters.filter(
			(param) => param.direction === GirDirection.In || param.direction === GirDirection.Inout,
		);
		const output_parameters = parameters
			.filter(
				(param) => param.direction && (param.direction === GirDirection.Out || param.direction === GirDirection.Inout),
			)
			.map((parameter) => parameter.copy({ isOptional: false }));

		fn = fn.copy({
			parent: ns,
			parameters: input_parameters,
			outputParameters: output_parameters,
			return_type,
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

	getCallbackParameters() {
		return {
			name: this.name,
			raw_name: this.raw_name,
			namespace: this.namespace,
			output_parameters: this.output_parameters,
			parameters: this.parameters,
			return_type: this.return_type,
		};
	}

	asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateFunction"]> {
		return generator.generateFunction(this) as ReturnType<T["generateFunction"]>;
	}
}
