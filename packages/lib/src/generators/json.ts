import { GirDirection } from "@gi.ts/parser";
import { IntrospectedAlias } from "../gir/alias.ts";
import { IntrospectedCallback } from "../gir/callback.ts";
import { IntrospectedConstant } from "../gir/const.ts";
import { IntrospectedConstructor } from "../gir/constructor.ts";
import type { IntrospectedDirectAllocationConstructor } from "../gir/direct-allocation-constructor.ts";
import { IntrospectedEnum } from "../gir/enum.ts";
import type { GirEnumMember } from "../gir/enum-member.ts";
import { IntrospectedError } from "../gir/error.ts";
import { IntrospectedFunction } from "../gir/function.ts";
import {
	IntrospectedBaseClass,
	IntrospectedClass,
	type IntrospectedClassCallback,
	IntrospectedClassFunction,
	IntrospectedInterface,
	IntrospectedStaticClassFunction,
	IntrospectedVirtualClassFunction,
} from "../gir/introspected-classes.ts";
import type { IntrospectedNamespaceMember } from "../gir/introspected-namespace-member.ts";
import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { IntrospectedFunctionParameter } from "../gir/parameter.ts";
import type { IntrospectedField, IntrospectedProperty } from "../gir/property.ts";
import { IntrospectedRecord } from "../gir/record.ts";
import { type IntrospectedSignal, IntrospectedSignalType } from "../gir/signal.ts";
import {
	AnyFunctionType,
	AnyType,
	ArrayType,
	ClosureType,
	NativeType,
	NullableType,
	NumberType,
	OrType,
	StringType,
	TupleType,
	TypeConflict,
	type TypeExpression,
	TypeIdentifier,
	VoidType,
} from "../gir.ts";
import { Logger } from "../logger.ts";
import type { AnyIntrospectedType, OptionsGeneration } from "../types/index.ts";
import type { IntrospectedMetadata } from "../types/introspected.ts";
import { isInvalid, sanitizeIdentifierName } from "../utils/naming.ts";
import { resolveDirectedType } from "../utils/types.ts";
import { FormatGenerator } from "./generator.ts";

export enum NodeKind {
	class = "class",
	interface = "interface",
	function = "function",
	classFunction = "class_function",
	staticClassFunction = "static_class_function",
	virtualClassFunction = "virtual_class_function",
	prop = "prop",
	field = "field",
	alias = "alias",
	namespace = "namespace",
	callback = "callback",
	constant = "constant",
	record = "record",
	constructor = "constructor",
	propertiesConstructor = "properties_constructor",
	parameter = "parameter",
	enum = "enum",
	enumMember = "enum_member",
	error = "error",
}

export type Primitive = string[] | number[] | boolean[] | null | string | number | boolean;
export type Json = {
	[key: string]: Primitive | Json | Json[];
};
export type NodeJson = {
	kind: NodeKind;
	doc: string | null;
	metadata: MetadataJson | null;
	private: boolean;
} & Json;

export enum TypeKind {
	or = "or",
	tuple = "tuple",
	identifier = "identifier",
	native = "native",
	array = "array",
	nulled = "null",
	closure = "closure",
}

function generateType(type: TypeExpression): TypeJson {
	if (type instanceof TypeIdentifier) {
		return {
			kind: TypeKind.identifier,
			name: type.name,
			namespace: type.namespace,
		};
	} else if (type instanceof NativeType) {
		return {
			kind: TypeKind.native,
			type: type.expression(),
		};
	} else if (type instanceof ClosureType) {
		return {
			kind: TypeKind.closure,
			type: generateType(type.type),
			user_data: type.user_data,
		};
	} else if (type instanceof ArrayType) {
		return {
			kind: TypeKind.array,
			type: generateType(type.type),
			depth: type.arrayDepth,
		};
	} else if (type instanceof NullableType) {
		return {
			kind: TypeKind.nulled,
			type: generateType(type.type),
		};
	} else if (type instanceof TypeConflict) {
		// Type conflicts aren't considered in JSON outputs.
		return generateType(type.type);
	} else if (type instanceof TupleType) {
		return {
			kind: TypeKind.tuple,
			types: type.types.map((t) => generateType(t)),
		};
	} else if (type instanceof OrType) {
		return {
			kind: TypeKind.or,
			types: type.types.map((t) => generateType(t)),
		};
	} else {
		return {
			kind: TypeKind.native,
			type: "any",
		};
	}
}

function capitalize(str: string) {
	if (str.length === 0) {
		return "";
	}

	if (str.length === 1) {
		return str[0].toUpperCase();
	}

	return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

export interface ParameterJson extends NodeJson {
	kind: NodeKind.parameter;
	optional: boolean;
	varargs: boolean;
	name: string;
	type: TypeJson;
}

export type TypeJson = Json &
	(
		| {
				kind: TypeKind.native;
				type: string;
		  }
		| {
				kind: TypeKind.array;
				depth: number;
				type: TypeJson;
		  }
		| {
				kind: TypeKind.or | TypeKind.tuple;
				types: TypeJson[];
		  }
		| {
				kind: TypeKind.nulled;
				type: TypeJson;
		  }
		| {
				kind: TypeKind.closure;
				user_data: number | null;
				type: TypeJson;
		  }
		| {
				kind: TypeKind.identifier;
				namespace: string;
				name: string;
		  }
	);
export interface EnumMemberJson extends NodeJson {
	kind: NodeKind.enumMember;
	name: string;
	value: string | null;
}

export interface EnumJson extends NodeJson {
	kind: NodeKind.enum;
	name: string;
	members: EnumMemberJson[];
}
export interface CallbackJson extends NodeJson {
	kind: NodeKind.callback;
	name: string;
	type: [Json, Json];
	parameters: ParameterJson[];
	returnType: TypeJson;
}
export interface PropertyJson extends NodeJson {
	kind: NodeKind.prop;
	name: string;
	type: TypeJson;
}
export interface FieldJson extends NodeJson {
	kind: NodeKind.field;
	name: string;
	type: TypeJson;
}

export interface MethodJson extends NodeJson {
	kind: NodeKind.classFunction;
	name: string;
	parameters: ParameterJson[];
	returnType: TypeJson[] | TypeJson;
}

export interface StaticMethodJson extends NodeJson {
	kind: NodeKind.staticClassFunction;
	name: string;
	parameters: ParameterJson[];
	returnType: TypeJson[] | TypeJson;
}
export interface VirtualMethodJson extends NodeJson {
	kind: NodeKind.virtualClassFunction;
	name: string;
	parameters: ParameterJson[];
	returnType: TypeJson[] | TypeJson;
}
export type MetadataJson = Json;
export interface ConstJson extends NodeJson {
	kind: NodeKind.constant;
	name: string;
	type: TypeJson;
}

export interface InterfaceJson extends NodeJson {
	kind: NodeKind.interface;
	name: string;
	extends: TypeJson | null;
	type: TypeJson;
	props: PropertyJson[];
	methods: MethodJson[];
	staticMethods: StaticMethodJson[];
	virtualMethods: VirtualMethodJson[];
}

export interface BaseClassJson extends NodeJson {
	name: string;
	type: TypeJson;
	constructors: MethodJson[];
	mainConstructor: PropertiesConstructorJson | ConstructorJson | null;
	extends: TypeJson | null;
	implements: TypeJson[];
	props: PropertyJson[];
	fields: FieldJson[];
	methods: MethodJson[];
	staticMethods: StaticMethodJson[];
	virtualMethods: VirtualMethodJson[];
}

export interface ClassJson extends BaseClassJson {
	kind: NodeKind.class;
	abstract: boolean;
}

export interface RecordJson extends BaseClassJson {
	kind: NodeKind.record;
	mainConstructor: ConstructorJson | null;
}

export interface ErrorJson extends BaseClassJson {
	kind: NodeKind.error;
	mainConstructor: ConstructorJson | null;
}

export interface FunctionJson extends NodeJson {
	name: string;
	kind: NodeKind.function;
	parameters: ParameterJson[];
	returnType: TypeJson[] | TypeJson;
}

export interface AliasJson extends NodeJson {
	name: string;
	kind: NodeKind.alias;
	type: TypeJson;
}

export interface PropertiesConstructorJson extends NodeJson {
	name: string;
	kind: NodeKind.propertiesConstructor;
	properties: ParameterJson[];
}

export interface ConstructorJson extends NodeJson {
	name: string;
	kind: NodeKind.constructor;
	parameters: ParameterJson[];
}

export type ImportsJson = { [lib: string]: string };

export interface NamespaceJson extends Json {
	kind: NodeKind.namespace;
	imports: ImportsJson;
	version: string;
	name: string;
	alias: AliasJson[];
	enums: EnumJson[];
	errors: ErrorJson[];
	functions: FunctionJson[];
	callbacks: CallbackJson[];
	constants: ConstJson[];
	records: RecordJson[];
	interfaces: InterfaceJson[];
	classes: ClassJson[];
}

export class JsonGenerator extends FormatGenerator<Json> {
	readonly log: Logger;

	constructor(namespace: IntrospectedNamespace, options: OptionsGeneration) {
		super(namespace, options);
		this.log = new Logger(options.verbose, JsonGenerator.name);
	}

	/**
	 * Intelligently reformats # and () references
	 * to handle c-prefixes and namespacing.
	 *
	 * @param doc
	 */
	private generateDoc(doc: string): string {
		const { namespace } = this;

		// Replace references with formatted versions
		doc = doc.replace(
			/(#?)([A-Z][a-z][A-Za-z0-9]*(?:[A-Z][a-z]*[A-Za-z0-9]*)*)([:.]([a-z_-]+))?([^a-zA-Z0-9]|$)/g,
			(_, prefix, className, memberPart, memberName, suffix) => {
				if (prefix !== "#") return _; // Only process references starting with #

				const memberSeparator = memberPart?.[0];
				const formattedRef = this.formatClassReference(namespace, className, memberName, memberSeparator);

				return formattedRef ? `${formattedRef}${suffix}` : _;
			},
		);

		// Replace function references
		doc = doc.replace(/([a-z_][a-z0-9_]*)\(\)/g, (_, funcName) => {
			const formattedRef = this.formatFunctionReference(namespace, funcName);
			return formattedRef ? formattedRef : _;
		});

		return doc;
	}

	private resolveClass(
		ns: IntrospectedNamespace,
		className: string,
	): readonly [IntrospectedNamespaceMember | null, boolean] {
		let classes = ns.getMembers(className);
		let plural = false;

		// Try various class name suffixes
		const suffixes = [
			{ suffix: "Class", remove: 5 },
			{ suffix: "Iface", remove: 5 },
			{ suffix: "Interface", remove: 9 },
		];

		for (const { suffix, remove } of suffixes) {
			if (classes.length === 0 && className.endsWith(suffix)) {
				classes = ns.getMembers(className.slice(0, -remove));
				break;
			}
		}

		// Try plural form
		if (classes.length === 0 && className.endsWith("s")) {
			plural = true;
			classes = ns.getMembers(className.slice(0, -1));
		}

		return [classes[0] ?? null, plural] as const;
	}

	private formatClassReference(
		namespace: IntrospectedNamespace,
		identifier: string,
		memberName?: string,
		punctuation?: string,
	): string | null {
		const parts = this.parseIdentifierParts(identifier);
		const namespaceInfo = this.findNamespaceForIdentifier(namespace, parts);

		if (!namespaceInfo) return null;

		const { resolvedNamespace, className } = namespaceInfo;
		const [clazz, plural] = this.resolveClass(resolvedNamespace, className);

		if (!clazz) return null;

		return this.buildClassReference(resolvedNamespace, clazz, memberName, punctuation, plural);
	}

	private parseIdentifierParts(identifier: string): string[] {
		return identifier
			.split(/([A-Z])/)
			.filter((p) => p !== "")
			.reduce((prev, next) => {
				if (next.toUpperCase() === next) {
					prev.push(`${next}`);
				} else {
					const lastCapital = prev.pop();
					prev.push(`${lastCapital}${next}`);
				}
				return prev;
			}, [] as string[]);
	}

	private findNamespaceForIdentifier(
		namespace: IntrospectedNamespace,
		parts: string[],
	): { resolvedNamespace: IntrospectedNamespace; className: string } | null {
		const [basePart] = parts;

		const [, , namespaces, className] = parts.slice(1).reduce(
			([underscore, camel, ns, selected], next) => {
				const nextUnderscore = [underscore, next.toLowerCase()].join("_");
				const foundNamespaces = namespace.getImportsForCPrefix(nextUnderscore);
				const nextCamel = camel + capitalize(next);

				if (foundNamespaces.length > 0) {
					return [nextUnderscore, nextCamel, foundNamespaces, capitalize(next)] as const;
				}

				return [nextUnderscore, nextCamel, ns, selected + capitalize(next)] as const;
			},
			[
				basePart.toLowerCase(),
				capitalize(basePart),
				namespace.getImportsForCPrefix(basePart.toLowerCase()),
				"" as string,
			] as const,
		);

		// Find namespace that has the symbol or class
		let resolvedNamespace = namespaces.find((n) => n.hasSymbol(className));

		if (!resolvedNamespace) {
			resolvedNamespace = namespaces.find((n) => {
				const [c] = this.resolveClass(n, className);
				return c != null;
			});
		}

		return resolvedNamespace ? { resolvedNamespace, className } : null;
	}

	private buildClassReference(
		namespace: IntrospectedNamespace,
		clazz: IntrospectedNamespaceMember,
		memberName?: string,
		punctuation?: string,
		plural?: boolean,
	): string {
		if (clazz instanceof IntrospectedBaseClass || clazz instanceof IntrospectedEnum) {
			const isProperty = punctuation === ":";
			const modifiedName = isProperty && memberName ? memberName.replace(/[-]/g, "_") : memberName;

			return `#${plural ? "{" : ""}${namespace.namespace}.${clazz.name}${
				punctuation && modifiedName ? `${punctuation}${modifiedName}` : ""
			}${plural ? "}s" : ""}`;
		}

		return `#${namespace.namespace}${punctuation && memberName ? ` (${punctuation}${memberName})` : ""}`;
	}

	private formatFunctionReference(namespace: IntrospectedNamespace, func: string): string | null {
		const parts = func.toLowerCase().split("_");
		const namespaceInfo = this.findNamespaceForFunction(namespace, parts);

		if (!namespaceInfo) return null;

		const { namespaces, nameParts, baseIndex } = namespaceInfo;
		const functionName = nameParts.join("_");

		// Try different lookup strategies
		return this.tryFunctionLookupStrategies(namespaces, functionName, func, parts, baseIndex);
	}

	private findNamespaceForFunction(
		namespace: IntrospectedNamespace,
		parts: string[],
	): { namespaces: IntrospectedNamespace[]; nameParts: string[]; baseIndex: number } | null {
		const [basePart] = parts;
		const namespaceBase = [
			basePart.toLowerCase(),
			capitalize(basePart),
			namespace.getImportsForCPrefix(basePart.toLowerCase()),
			0 as number,
		] as const;

		const [, , namespaces, baseIndex] = parts.slice(1).reduce(([prev, camel, currentNamespaces, selected], next, i) => {
			const underscore = [prev, next.toLowerCase()].join("_");
			const foundNamespaces = namespace.getImportsForCPrefix(underscore);
			const identifier = camel + capitalize(next);

			// We've found namespace(s) which matches the c_prefix
			if (foundNamespaces.length > 0) {
				return [underscore, identifier, foundNamespaces, i] as const;
			}

			return [underscore, identifier, currentNamespaces, selected] as const;
		}, namespaceBase);

		if (namespaces.length === 0) return null;

		const nameParts = parts.slice(baseIndex + 1);
		return { namespaces, nameParts, baseIndex };
	}

	private tryFunctionLookupStrategies(
		namespaces: IntrospectedNamespace[],
		functionName: string,
		originalFunc: string,
		parts: string[],
		baseIndex: number,
	): string | null {
		// Strategy 1: Direct function lookup
		const directResult = this.tryDirectFunctionLookup(namespaces, functionName);
		if (directResult) return directResult;

		// Strategy 2: Constant lookup
		const constantResult = this.tryConstantLookup(namespaces, functionName);
		if (constantResult) return constantResult;

		// Strategy 3: Enum constant lookup
		const enumResult = this.tryEnumConstantLookup(namespaces, originalFunc);
		if (enumResult) return enumResult;

		// Strategy 4: Class method lookup
		return this.tryClassMethodLookup(namespaces, parts, baseIndex);
	}

	private tryDirectFunctionLookup(namespaces: IntrospectedNamespace[], functionName: string): string | null {
		const functionNamespace = namespaces.find((n) => n.hasSymbol(functionName.toLowerCase()));
		if (!functionNamespace) return null;

		const [member = null] = functionNamespace.getMembers(functionName.toLowerCase());
		if (member instanceof IntrospectedFunction) {
			return `${functionNamespace.namespace}.${member.name}`;
		}

		return null;
	}

	private tryConstantLookup(namespaces: IntrospectedNamespace[], functionName: string): string | null {
		const constNamespace = namespaces.find((n) => n.hasSymbol(functionName.toUpperCase()));
		if (!constNamespace) return null;

		const [member = null] = constNamespace.getMembers(functionName.toUpperCase());
		if (member instanceof IntrospectedConstant) {
			return `${constNamespace.namespace}.${member.name}`;
		}

		return null;
	}

	private tryEnumConstantLookup(namespaces: IntrospectedNamespace[], func: string): string | null {
		const enumNamespace = namespaces.find((n) => n.enum_constants.has(func.toUpperCase()));
		if (!enumNamespace) return null;

		const constantInfo = enumNamespace.enum_constants.get(func.toUpperCase());
		if (!constantInfo) return null;

		const [enumName, memberName] = constantInfo;
		const [klass = null] = enumNamespace.getMembers(enumName);

		if (klass instanceof IntrospectedEnum) {
			return `${enumNamespace.namespace}.${klass.name}.${memberName.toUpperCase()}`;
		}

		return null;
	}

	private tryClassMethodLookup(namespaces: IntrospectedNamespace[], parts: string[], baseIndex: number): string | null {
		const nameParts = parts.slice(baseIndex + 1);

		const { selectedClassName, resolvedNamespace, selectedIndex } = nameParts.reduce(
			({ className, selectedClassName, resolvedNamespace, selectedIndex }, next, i) => {
				const identifier = `${className}${capitalize(next)}`;
				const withSymbol = namespaces.find((n) => n.hasSymbol(identifier));

				if (withSymbol) {
					return {
						className: identifier,
						selectedClassName: identifier,
						resolvedNamespace: withSymbol,
						selectedIndex: i,
					} as const;
				}

				return { className: identifier, selectedClassName, resolvedNamespace, selectedIndex } as const;
			},
			{
				className: "" as string,
				selectedClassName: "" as string,
				resolvedNamespace: null as IntrospectedNamespace | null,
				selectedIndex: -1,
			},
		);

		if (!resolvedNamespace || selectedIndex < 0) return null;

		const nextIndex = baseIndex + selectedIndex + 2; // +1 for slice, +1 for next index
		const methodName = parts.slice(nextIndex).join("_");

		const [klass] = this.resolveClass(resolvedNamespace, selectedClassName);
		if (klass instanceof IntrospectedBaseClass || klass instanceof IntrospectedEnum) {
			return `${resolvedNamespace.namespace}.${klass.name}.${methodName}`;
		}

		return `${resolvedNamespace.namespace}.${selectedClassName}.${methodName}`;
	}

	private generateMetadata(metadata: IntrospectedMetadata): MetadataJson {
		return { ...metadata } as MetadataJson;
	}

	private generateParameters(parameters: IntrospectedFunctionParameter[]): ParameterJson[] {
		const { namespace, options } = this;

		return parameters.map((p) => ({
			kind: NodeKind.parameter,
			direction: p.direction,
			optional: p.isOptional,
			varargs: p.isVarArgs,
			name: p.name,
			resoleNames: p.resolve_names,
			type: generateType(p.type.resolve(namespace, options)),
			...this._generateDocAndMetadata(p),
		}));
	}

	generateCallbackType(_node: IntrospectedCallback | IntrospectedClassCallback): [Json, Json] {
		return [{}, {}];
	}

	generateCallback(node: IntrospectedCallback): CallbackJson {
		const { namespace, options } = this;

		const parameters = this.generateParameters(node.parameters);

		return {
			kind: NodeKind.callback,
			name: node.name,
			type: this.generateCallbackType(node),
			parameters,
			returnType: generateType(node.return().resolve(namespace, options)),
			...this._generateDocAndMetadata(node),
		};
	}

	generateClassCallback(node: IntrospectedClassCallback): CallbackJson {
		const { namespace, options } = this;

		const parameters = this.generateParameters(node.parameters);

		return {
			kind: NodeKind.callback,
			name: node.name,
			type: this.generateCallbackType(node),
			parameters,
			returnType: generateType(node.return().resolve(namespace, options)),
			...this._generateDocAndMetadata(node),
		};
	}

	generateReturn(
		return_type: TypeExpression,
		output_parameters: IntrospectedFunctionParameter[],
	): TypeJson | TypeJson[] {
		const { namespace, options } = this;
		const type = return_type.resolve(namespace, options);

		if (output_parameters.length > 0) {
			const exclude_first = type.equals(VoidType);
			const returns = [
				...(exclude_first ? [] : [type]),
				...output_parameters.map((op) => op.type.resolve(namespace, options)),
			];

			return returns.map((r) => generateType(r));
		}

		return generateType(type);
	}

	generateEnum(node: IntrospectedEnum): EnumJson {
		return {
			kind: NodeKind.enum,
			name: node.name,
			members: Array.from(node.members.values()).map((member) => member.asString(this)),
			...this._generateDocAndMetadata(node),
		};
	}

	generateError(node: IntrospectedError): ErrorJson {
		const { namespace } = this;
		const clazz = node.asClass();

		clazz.members = [];
		clazz.members.push(...Array.from(node.functions.values()));

		const GLib = namespace.assertInstalledImport("GLib");
		const GLibError = GLib.assertClass("Error");

		clazz.superType = GLibError.getType();

		// Manually construct a GLib.Error constructor.
		clazz.mainConstructor = new IntrospectedConstructor({
			name: "new",
			parent: clazz,
			parameters: [
				new IntrospectedFunctionParameter({
					name: "options",
					type: NativeType.of("{ message: string, code: number}"),
					direction: GirDirection.In,
				}),
			],
			return_type: clazz.getType(),
		});

		return {
			...clazz.asString(this),
			kind: NodeKind.error,
		};
	}

	_generateDocAndMetadata(node: AnyIntrospectedType) {
		const { options } = this;

		if (!options.noComments) {
			return {
				private: node.isPrivate,
				doc: this.generateDoc(node.doc ?? "") ?? null,
				metadata: this.generateMetadata(node.metadata ?? {}) ?? null,
			};
		}

		return {
			private: false,
			doc: null,
			metadata: null,
		};
	}

	generateConst(node: IntrospectedConstant): ConstJson {
		const { namespace, options } = this;

		return {
			kind: NodeKind.constant,
			name: node.name,
			type: generateType(node.type.resolve(namespace, options)),
			...this._generateDocAndMetadata(node),
		};
	}

	private implements(node: IntrospectedClass): TypeIdentifier[] {
		const { namespace, options } = this;

		if (node.interfaces.length > 0) {
			return node.interfaces
				.map((i) => i.resolveIdentifier(namespace, options))
				.filter((i): i is TypeIdentifier => i != null);
		}

		return [];
	}

	private extends(node: IntrospectedBaseClass): TypeIdentifier | null {
		const { namespace: ns, options } = this;

		if (node.superType) {
			return node.superType.resolveIdentifier(ns, options);
		}

		return null;
	}

	generateInterface(node: IntrospectedInterface): InterfaceJson {
		const { namespace } = this;
		// If an interface does not list a prerequisite type, we fill it with GObject.Object
		if (node.superType == null) {
			const gobject = namespace.assertInstalledImport("GObject");

			// TODO Optimize GObject.Object
			if (!gobject) {
				throw new Error("GObject not generated, all interfaces extend from GObject.Object!");
			}

			const GObject = gobject.getClass("Object");

			if (!GObject) {
				throw new Error(`GObject.Object could not be found while generating ${node.namespace.namespace}.${node.name}`);
			}

			node.superType = GObject.getType();
		}

		const { name } = node;

		const Extends = this.extends(node);

		const Properties = node.props.map((v) => v?.asString(this));

		const Methods = node.members
			.filter(
				(m) => !(m instanceof IntrospectedStaticClassFunction) && !(m instanceof IntrospectedVirtualClassFunction),
			)
			.map((v) => v?.asString(this));
		const StaticMethods = node.members
			.filter((m): m is IntrospectedStaticClassFunction => m instanceof IntrospectedStaticClassFunction)
			.map((v) => v?.asString(this));
		const VirtualMethods = node.members
			.filter((m): m is IntrospectedVirtualClassFunction => m instanceof IntrospectedVirtualClassFunction)
			.map((v) => v?.asString(this));

		return {
			kind: NodeKind.interface,
			name,
			type: generateType(node.getType()),
			extends: Extends ? generateType(Extends) : null,
			props: Properties,
			methods: Methods,
			staticMethods: StaticMethods,
			virtualMethods: VirtualMethods,
			...this._generateDocAndMetadata(node),
		};
	}

	generateRecord(node: IntrospectedRecord): RecordJson {
		const { name } = node;

		const Extends = this.extends(node);

		const Properties = node.props.map((v) => v?.asString(this));

		const Fields = node.fields.map((v) => v?.asString(this));

		const Constructors = node.constructors.map((v) => v && this.generateConstructorFunction(v));

		const Methods = node.members
			.filter(
				(m) => !(m instanceof IntrospectedStaticClassFunction) && !(m instanceof IntrospectedVirtualClassFunction),
			)
			.map((v) => v?.asString(this));
		const StaticMethods = node.members
			.filter((m): m is IntrospectedStaticClassFunction => m instanceof IntrospectedStaticClassFunction)
			.map((v) => v?.asString(this));
		const VirtualMethods = node.members
			.filter((m): m is IntrospectedVirtualClassFunction => m instanceof IntrospectedVirtualClassFunction)
			.map((v) => v?.asString(this));

		const Callbacks = node.callbacks.map((c) => c?.asString(this));

		return {
			kind: NodeKind.record,
			name,
			type: generateType(node.getType()),
			mainConstructor: node.mainConstructor?.asString(this) ?? null,
			extends: Extends ? generateType(Extends) : null,
			implements: [],
			props: Properties,
			fields: Fields,
			constructors: Constructors,
			methods: Methods,
			staticMethods: StaticMethods,
			virtualMethods: VirtualMethods,
			callbacks: Callbacks,
			...this._generateDocAndMetadata(node),
		};
	}

	generateClass(node: IntrospectedClass): ClassJson {
		const Extends = this.extends(node);
		const Implements = this.implements(node);

		let MainConstructor: PropertiesConstructorJson | ConstructorJson | null = null;

		const ConstructorProps = node.props.map((v) => this.generateProperty(v, true));

		if (node.mainConstructor) {
			MainConstructor = this.generateConstructor(node.mainConstructor);
		} else {
			MainConstructor = {
				kind: NodeKind.propertiesConstructor,
				name: "new",
				private: false,
				properties: ConstructorProps.map((p) => ({
					kind: NodeKind.parameter,
					private: p.private,
					varargs: false,
					name: p.name,
					type: p.type,
					doc: p.doc,
					metadata: p.metadata,
					optional: true,
				})),
				doc: null,
				metadata: null,
			};
		}

		const Properties = node.props.map((v) => v.asString(this));

		const Fields = node.fields.map((v) => v.asString(this));

		const Constructors = node.constructors.map((v) => this.generateConstructorFunction(v));

		const Methods = node.members
			.filter(
				(m) => !(m instanceof IntrospectedStaticClassFunction) && !(m instanceof IntrospectedVirtualClassFunction),
			)
			.map((v) => v?.asString(this));
		const StaticMethods = node.members
			.filter((m): m is IntrospectedStaticClassFunction => m instanceof IntrospectedStaticClassFunction)
			.map((v) => v?.asString(this));
		const VirtualMethods = node.members
			.filter((m): m is IntrospectedVirtualClassFunction => m instanceof IntrospectedVirtualClassFunction)
			.map((v) => v?.asString(this));

		// TODO Move these to a cleaner place.

		const Connect = new IntrospectedClassFunction({
			name: "connect",
			parent: node,
			parameters: [
				new IntrospectedFunctionParameter({
					name: "id",
					type: StringType,
					direction: GirDirection.In,
				}),
				new IntrospectedFunctionParameter({
					name: "callback",
					type: AnyFunctionType,
					direction: GirDirection.In,
				}),
			],
			return_type: NumberType,
		});

		const ConnectAfter = new IntrospectedClassFunction({
			name: "connect_after",
			parent: node,
			parameters: [
				new IntrospectedFunctionParameter({
					name: "id",
					type: StringType,
					direction: GirDirection.In,
				}),
				new IntrospectedFunctionParameter({
					name: "callback",
					type: AnyFunctionType,
					direction: GirDirection.In,
				}),
			],
			return_type: NumberType,
		});

		const Emit = new IntrospectedClassFunction({
			name: "emit",
			parent: node,
			parameters: [
				new IntrospectedFunctionParameter({
					name: "id",
					type: StringType,
					direction: GirDirection.In,
				}),
				new IntrospectedFunctionParameter({
					name: "args",
					isVarArgs: true,
					type: new ArrayType(AnyType),
					direction: GirDirection.In,
				}),
			],
			return_type: VoidType,
		});

		const default_signals = [] as IntrospectedClassFunction[];
		let hasConnect: boolean, hasConnectAfter: boolean, hasEmit: boolean;

		if (node.signals.length > 0) {
			hasConnect = node.members.some((m) => m.name === "connect");
			hasConnectAfter = node.members.some((m) => m.name === "connect_after");
			hasEmit = node.members.some((m) => m.name === "emit");

			if (!hasConnect) {
				default_signals.push(Connect);
			}
			if (!hasConnectAfter) {
				default_signals.push(ConnectAfter);
			}
			if (!hasEmit) {
				default_signals.push(Emit);
			}

			hasConnect = !default_signals.some((s) => s.name === "connect");
			hasConnectAfter = !default_signals.some((s) => s.name === "connect_after");
			hasEmit = !default_signals.some((s) => s.name === "emit");
		}

		const SignalsList = [
			...default_signals.map((s) => s.asString(this)),
			...node.signals.flatMap((s) => {
				const methods = [] as Json[];

				if (!hasConnect) methods.push(s.asString(this, IntrospectedSignalType.CONNECT));
				if (!hasConnectAfter) methods.push(s.asString(this, IntrospectedSignalType.CONNECT_AFTER));
				if (!hasEmit) methods.push(s.asString(this, IntrospectedSignalType.EMIT));

				return methods;
			}),
		];

		const Signals = SignalsList;

		return {
			kind: NodeKind.class,
			abstract: node.isAbstract,
			type: generateType(node.getType()),
			name: node.name,
			mainConstructor: MainConstructor,
			signals: Signals,
			extends: Extends ? generateType(Extends) : null,
			implements: Implements.map((i) => generateType(i)),
			props: Properties,
			fields: Fields,
			constructors: Constructors,
			methods: Methods,
			staticMethods: StaticMethods,
			virtualMethods: VirtualMethods,
			...this._generateDocAndMetadata(node),
		};
	}

	generateField(node: IntrospectedField): FieldJson {
		const { namespace, options } = this;
		const { name, computed } = node;
		const invalid = isInvalid(name);

		const Static = node.isStatic;
		const ReadOnly = node.writable;

		return {
			kind: NodeKind.field,
			readonly: ReadOnly,
			static: Static,
			computed,
			type: generateType(node.type.resolve(namespace, options)),
			name: invalid ? `"${name}"` : name,
			...this._generateDocAndMetadata(node),
		};
	}

	generateProperty(node: IntrospectedProperty, construct: boolean = false): PropertyJson {
		const { namespace, options } = this;

		const invalid = isInvalid(node.name);
		const ReadOnly = node.writable || construct;

		const Name = invalid ? `"${node.name}"` : node.name;

		const Type = generateType(node.type.resolve(namespace, options));
		return {
			kind: NodeKind.prop,
			readonly: ReadOnly,
			constructOnly: node.constructOnly,
			readable: node.readable,
			writable: node.writable,
			static: false,
			type: Type,
			name: Name,
			...this._generateDocAndMetadata(node),
		};
	}

	generateSignal(node: IntrospectedSignal, type: IntrospectedSignalType = IntrospectedSignalType.CONNECT): MethodJson {
		switch (type) {
			case IntrospectedSignalType.CONNECT:
				return node.asConnect(false).asString(this);
			case IntrospectedSignalType.CONNECT_AFTER:
				return node.asConnect(true).asString(this);
			case IntrospectedSignalType.EMIT:
				return node.asEmit().asString(this);
		}
	}

	generateEnumMember(node: GirEnumMember): EnumMemberJson {
		const invalid = isInvalid(node.name);

		let enumMember: {
			name: string;
			value: string | null;
		};

		if (
			node.value != null &&
			!Number.isNaN(Number.parseInt(node.value, 10)) &&
			Number.isNaN(Number.parseInt(node.name, 10)) &&
			node.name !== "NaN"
		) {
			enumMember = { name: invalid ? `"${node.name}"` : `${node.name}`, value: `${node.value}` };
		} else {
			enumMember = { name: invalid ? `"${node.name}"` : `${node.name}`, value: null };
		}

		return {
			kind: NodeKind.enumMember,
			...enumMember,
			...this._generateDocAndMetadata(node),
		};
	}

	generateParameter(node: IntrospectedFunctionParameter): ParameterJson {
		const { namespace, options } = this;

		const type = generateType(
			resolveDirectedType(node.type, node.direction)?.resolve(namespace, options) ??
				node.type.resolve(namespace, options),
		);

		return {
			kind: NodeKind.parameter,
			name: node.name,
			type,
			varargs: node.isVarArgs,
			optional: node.isOptional,
			...this._generateDocAndMetadata(node),
		};
	}

	generateFunction(node: IntrospectedFunction): FunctionJson {
		const { namespace } = this;
		// Register our identifier with the sanitized identifiers.
		// We avoid doing this in fromXML because other class-level function classes
		// depends on that code.
		sanitizeIdentifierName(namespace.namespace, node.raw_name);

		const Parameters = this.generateParameters(node.parameters);
		const ReturnType = this.generateReturn(node.return(), node.output_parameters);

		return {
			kind: NodeKind.function,
			name: node.name,
			parameters: Parameters,
			returnType: ReturnType,
			...this._generateDocAndMetadata(node),
		};
	}

	generateConstructorFunction(node: IntrospectedConstructor): MethodJson {
		const { namespace, options } = this;

		const Parameters = this.generateParameters(node.parameters);

		return {
			kind: NodeKind.classFunction,
			static: true,
			name: node.name,
			parameters: Parameters,
			returnType: generateType(node.return().resolve(namespace, options)),
			...this._generateDocAndMetadata(node),
		};
	}

	generateConstructor(node: IntrospectedConstructor): ConstructorJson {
		return {
			name: node.name,
			kind: NodeKind.constructor,
			parameters: this.generateParameters(node.parameters),
			...this._generateDocAndMetadata(node),
		};
	}

	generateDirectAllocationConstructor(node: IntrospectedDirectAllocationConstructor): ConstructorJson {
		return {
			name: node.name,
			kind: NodeKind.constructor,
			parameters: this.generateParameters(node.parameters),
			...this._generateDocAndMetadata(node),
		};
	}

	generateClassFunction(node: IntrospectedClassFunction): MethodJson {
		const parameters = node.parameters.map((p) => this.generateParameter(p));
		const output_parameters = node.output_parameters;
		const return_type = node.return();

		const ReturnType = this.generateReturn(return_type, output_parameters);

		return {
			kind: NodeKind.classFunction,
			name: node.name,
			parameters,
			returnType: ReturnType,
			...this._generateDocAndMetadata(node),
		};
	}

	generateStaticClassFunction(node: IntrospectedStaticClassFunction): StaticMethodJson {
		const parameters = node.parameters.map((p) => this.generateParameter(p));
		const output_parameters = node.output_parameters;
		const return_type = node.return();

		const ReturnType = this.generateReturn(return_type, output_parameters);

		return {
			kind: NodeKind.staticClassFunction,
			name: node.name,
			parameters,
			returnType: ReturnType,
			...this._generateDocAndMetadata(node),
		};
	}

	generateAlias(node: IntrospectedAlias): AliasJson {
		const { namespace, options } = this;
		const type = node.type.resolve(namespace, options);

		const { name } = node;

		return {
			kind: NodeKind.alias,
			name,
			type: generateType(type.resolve(namespace, options)),
			...this._generateDocAndMetadata(node),
		};
	}

	generateVirtualClassFunction(node: IntrospectedVirtualClassFunction): VirtualMethodJson {
		return {
			...this.generateClassFunction(node),
			kind: NodeKind.virtualClassFunction,
		};
	}

	generateNamespace(node: IntrospectedNamespace): Promise<NamespaceJson> {
		function shouldGenerate(node: AnyIntrospectedType) {
			return node.emit;
		}

		const { namespace, version } = node.dependency;

		const members = Array.from(node.members.values()).flat().filter(shouldGenerate);

		const classes = members
			.filter((m): m is IntrospectedClass => m instanceof IntrospectedClass)
			.map((m) => m.asString(this));
		const interfaces = members
			.filter((m): m is IntrospectedInterface => m instanceof IntrospectedInterface)
			.map((m) => m.asString(this));
		const records = members
			.filter((m): m is IntrospectedRecord => m instanceof IntrospectedRecord)
			.map((m) => m.asString(this));
		const constants = members
			.filter((m): m is IntrospectedConstant => m instanceof IntrospectedConstant)
			.map((m) => m.asString(this));
		const callbacks = members
			.filter((m): m is IntrospectedCallback => m instanceof IntrospectedCallback)
			.map((m) => m.asString(this));
		// Functions can have overrides.
		const functions = [
			...members
				.filter(
					(m): m is IntrospectedFunction => !(m instanceof IntrospectedCallback) && m instanceof IntrospectedFunction,
				)
				.reduce((prev, next) => {
					if (!prev.has(next.name)) prev.set(next.name, next.asString(this));

					return prev;
				}, new Map<string, FunctionJson>())
				.values(),
		];
		const errors = members
			.filter((m): m is IntrospectedError => m instanceof IntrospectedError)
			.map((m) => m.asString(this));
		const enums = members
			.filter((m): m is IntrospectedEnum => !(m instanceof IntrospectedError) && m instanceof IntrospectedEnum)
			.map((m) => m.asString(this));
		const alias = members
			.filter((m): m is IntrospectedAlias => m instanceof IntrospectedAlias)
			.map((m) => m.asString(this));

		// Resolve imports after we stringify everything else, sometimes we have to ad-hoc add an import.
		const imports = [];

		return Promise.resolve({
			kind: NodeKind.namespace,
			name: namespace,
			version,
			imports: Object.fromEntries(imports),
			classes,
			interfaces,
			records,
			constants,
			functions,
			callbacks,
			errors,
			enums,
			alias,
		});
	}

	async stringifyNamespace(node: IntrospectedNamespace): Promise<string | null> {
		const { namespace } = this;

		this.log.debug(`Resolving the types of ${namespace.namespace}...`);

		try {
			const output = await this.generateNamespace(node);

			this.log.debug(`Printing ${namespace.namespace}...`);

			if (!output) return null;

			return JSON.stringify(output, null, 4);
		} catch (err) {
			this.log.error(`Failed to generate namespace: "${node.namespace}"`, err);
			return null;
		}
	}
}
