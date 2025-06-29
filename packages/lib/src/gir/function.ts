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

		const return_type = IntrospectedFunction.parseReturnType(element, ns);
		const { input_parameters, output_parameters, returnTypeDoc } = IntrospectedFunction.parseParameters(
			element,
			ns,
			return_type,
			options,
		);

		const fn = new IntrospectedFunction({
			name,
			raw_name,
			namespace: ns,
			parameters: input_parameters,
			output_parameters,
			return_type,
			isIntrospectable: isIntrospectable(element),
		});

		fn.returnTypeDoc = returnTypeDoc;

		if (options.loadDocs) {
			fn.doc = parseDoc(element);
			fn.metadata = parseMetadata(element);
		}

		return fn;
	}

	private static parseReturnType(
		element: GirFunctionElement | GirMethodElement,
		ns: IntrospectedNamespace,
	): TypeExpression {
		if ("return-value" in element && element["return-value"] && element["return-value"].length > 0) {
			const value = element["return-value"][0];
			return getType(ns, value);
		}
		return VoidType;
	}

	private static parseParameters(
		element: GirFunctionElement | GirMethodElement,
		ns: IntrospectedNamespace,
		return_type: TypeExpression,
		options: OptionsLoad,
	): {
		input_parameters: IntrospectedFunctionParameter[];
		output_parameters: IntrospectedFunctionParameter[];
		returnTypeDoc: string | null;
	} {
		let returnTypeDoc: string | null = null;

		if ("return-value" in element && element["return-value"] && element["return-value"].length > 0) {
			const value = element["return-value"][0];
			returnTypeDoc = parseDoc(value);
		}

		if (!element.parameters) {
			return { input_parameters: [], output_parameters: [], returnTypeDoc };
		}

		const param = element.parameters[0].parameter;
		if (!param) {
			return { input_parameters: [], output_parameters: [], returnTypeDoc };
		}

		// Create a temporary function for parameter processing
		const tempFn = new IntrospectedFunction({
			name: "temp",
			raw_name: "temp",
			namespace: ns,
			isIntrospectable: isIntrospectable(element),
		});

		const inputs = param.filter((p): p is typeof p & { $: { name: string } } => !!p.$.name);
		let parameters = inputs.map((i) => IntrospectedFunctionParameter.fromXML(i, tempFn, options));

		const unwrapped = return_type.unwrap();
		const length_params = unwrapped instanceof ArrayType && unwrapped.length != null ? [unwrapped.length] : [];
		const user_data_params: number[] = [];

		parameters = IntrospectedFunction.processParameterTypes(parameters, length_params, user_data_params);
		parameters = IntrospectedFunction.filterParameters(parameters, length_params, user_data_params);
		parameters = IntrospectedFunction.processOptionalParameters(parameters);

		const input_parameters = parameters.filter(
			(param) => param.direction === GirDirection.In || param.direction === GirDirection.Inout,
		);
		const output_parameters = parameters
			.filter(
				(param) => param.direction && (param.direction === GirDirection.Out || param.direction === GirDirection.Inout),
			)
			.map((parameter) => parameter.copy({ isOptional: false }));

		return { input_parameters, output_parameters, returnTypeDoc };
	}

	private static processParameterTypes(
		parameters: IntrospectedFunctionParameter[],
		length_params: number[],
		user_data_params: number[],
	): IntrospectedFunctionParameter[] {
		return parameters.map((p) => {
			const unwrapped_type = p.type.unwrap();

			if (unwrapped_type instanceof ArrayType && unwrapped_type.length != null) {
				length_params.push(unwrapped_type.length);
			}

			if (unwrapped_type instanceof ClosureType && unwrapped_type.user_data != null) {
				user_data_params.push(unwrapped_type.user_data);
			}

			return p;
		});
	}

	private static filterParameters(
		parameters: IntrospectedFunctionParameter[],
		length_params: number[],
		user_data_params: number[],
	): IntrospectedFunctionParameter[] {
		return parameters
			.filter((_, i) => !length_params.includes(i) && !user_data_params.includes(i))
			.filter((v) => !(v.type instanceof TypeIdentifier && v.type.is("GLib", "DestroyNotify")));
	}

	private static processOptionalParameters(
		parameters: IntrospectedFunctionParameter[],
	): IntrospectedFunctionParameter[] {
		return parameters
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
