import { GirDirection } from "@gi.ts/parser";
import {
	AnyFunctionType,
	type AnyIntrospectedType,
	AnyType,
	ArrayType,
	ClosureType,
	FormatGenerator,
	type GirEnumMember,
	type GirModule,
	IntrospectedAlias,
	IntrospectedBaseClass,
	type IntrospectedCallback,
	IntrospectedClass,
	type IntrospectedClassCallback,
	IntrospectedClassFunction,
	IntrospectedConstant,
	IntrospectedConstructor,
	type IntrospectedDirectAllocationConstructor,
	IntrospectedEnum,
	IntrospectedError,
	type IntrospectedField,
	IntrospectedFunction,
	type IntrospectedFunctionParameter,
	IntrospectedInterface,
	type IntrospectedMetadata,
	type IntrospectedNamespaceMember,
	type IntrospectedProperty,
	IntrospectedRecord,
	type IntrospectedSignal,
	IntrospectedSignalType,
	IntrospectedStaticClassFunction,
	IntrospectedVirtualClassFunction,
	isInvalid,
	NativeType,
	type NSRegistry,
	NullableType,
	NumberType,
	type OptionsGeneration,
	OrType,
	Reporter,
	ReporterService,
	resolveDirectedType,
	StringType,
	sanitizeIdentifierName,
	TupleType,
	TypeConflict,
	type TypeExpression,
	TypeIdentifier,
	VoidType,
} from "@ts-for-gir/lib";

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

export class JsonGenerator {
	readonly namespace: GirModule;
	readonly options: OptionsGeneration;
	readonly log: Reporter;

	constructor(namespace: GirModule, options: OptionsGeneration) {
		this.namespace = namespace;
		this.options = options;
		this.log = new Reporter(options.verbose, JsonGenerator.name, options.reporter, options.reporterOutput);

		// Register with reporter service if reporting is enabled
		if (options.reporter) {
			const reporterService = ReporterService.getInstance();
			reporterService.registerReporter(`${JsonGenerator.name}(${namespace.packageName})`, this.log);
		}
	}

	private generateDoc(doc: string): string {
		const HTML_BREAK = /<br\/>\s?/gi;
		const HTML_SQUASH = /<[^>]*>/gi;
		return doc
			.replaceAll(HTML_BREAK, "\n")
			.replaceAll(HTML_SQUASH, "")
			.replaceAll(/^\s*\*+\s*/gm, "")
			.replaceAll(/^\s*\n/gm, "")
			.trim();
	}

	private generateMetadata(metadata: IntrospectedMetadata): MetadataJson {
		return JSON.parse(JSON.stringify(metadata));
	}

	private generateParameters(parameters: IntrospectedFunctionParameter[]): ParameterJson[] {
		return parameters.map((param) => this.generateParameter(param));
	}

	generateParameter(node: IntrospectedFunctionParameter): ParameterJson {
		const type = generateType(node.type);

		return {
			kind: NodeKind.parameter,
			doc: node.doc ? this.generateDoc(node.doc) : null,
			metadata: node.metadata ? this.generateMetadata(node.metadata) : null,
			private: false,
			optional: node.isOptional,
			varargs: node.isVarArgs,
			name: node.name,
			type,
		};
	}

	generateCallbackType(_node: IntrospectedCallback | IntrospectedClassCallback): [Json, Json] {
		return [{}, {}];
	}

	generateCallback(node: IntrospectedCallback): CallbackJson {
		const parameters = this.generateParameters(node.parameters);
		const returnType = generateType(node.return());

		return {
			kind: NodeKind.callback,
			doc: node.doc ? this.generateDoc(node.doc) : null,
			metadata: node.metadata ? this.generateMetadata(node.metadata) : null,
			private: false,
			name: node.name,
			type: this.generateCallbackType(node),
			parameters,
			returnType,
		};
	}

	generateClassCallback(node: IntrospectedClassCallback): CallbackJson {
		const parameters = this.generateParameters(node.parameters);
		const returnType = generateType(node.return());

		return {
			kind: NodeKind.callback,
			doc: node.doc ? this.generateDoc(node.doc) : null,
			metadata: node.metadata ? this.generateMetadata(node.metadata) : null,
			private: false,
			name: node.name,
			type: this.generateCallbackType(node),
			parameters,
			returnType,
		};
	}

	// For now, simplified implementation - can be extended later with full methods
	async generateNamespace(node: GirModule): Promise<NamespaceJson> {
		// Basic structure - full implementation would iterate through all members
		return {
			kind: NodeKind.namespace,
			imports: {},
			version: node.version,
			name: node.namespace,
			alias: [],
			enums: [],
			errors: [],
			functions: [],
			callbacks: [],
			constants: [],
			records: [],
			interfaces: [],
			classes: [],
		};
	}

	async stringifyNamespace(node: GirModule): Promise<string | null> {
		try {
			const namespace = await this.generateNamespace(node);
			return JSON.stringify(namespace, null, 2);
		} catch (error) {
			this.log.error(`Failed to stringify namespace: ${error}`);
			return null;
		}
	}
}
