import { GirDirection } from "@gi.ts/parser";
import type { IntrospectedAlias } from "../gir/alias.ts";
import type { IntrospectedCallback } from "../gir/callback.ts";
import type { IntrospectedConstant } from "../gir/const.ts";
import { IntrospectedConstructor } from "../gir/constructor.ts";
import { FilterBehavior } from "../gir/data.ts";
import type { IntrospectedDirectAllocationConstructor } from "../gir/direct-allocation-constructor.ts";
import type { IntrospectedEnum } from "../gir/enum.ts";
import type { GirEnumMember } from "../gir/enum-member.ts";
import type { IntrospectedError } from "../gir/error.ts";
import type { IntrospectedFunction } from "../gir/function.ts";
import {
	type IntrospectedBaseClass,
	type IntrospectedClass,
	type IntrospectedClassCallback,
	IntrospectedClassFunction,
	IntrospectedInterface,
	IntrospectedStaticClassFunction,
	type IntrospectedVirtualClassFunction,
} from "../gir/introspected-classes.ts";

import { IntrospectedFunctionParameter } from "../gir/parameter.ts";
import { promisifyFunctions } from "../gir/promisify.ts";
import type { IntrospectedField, IntrospectedProperty } from "../gir/property.ts";
import type { IntrospectedRecord } from "../gir/record.ts";
import { type IntrospectedSignal, IntrospectedSignalType } from "../gir/signal.ts";
import {
	AnyFunctionType,
	AnyType,
	ArrayType,
	BinaryType,
	ConflictType,
	type Generic,
	NativeType,
	NumberType,
	StringType,
	TypeConflict,
	type TypeExpression,
	VoidType,
} from "../gir.ts";
import type { AnyIntrospectedType } from "../types/index.ts";

import { filterConflicts, filterFunctionConflict } from "../utils/conflicts.ts";
import { isInvalid, sanitizeIdentifierName } from "../utils/naming.ts";
import { resolveDirectedType } from "../utils/types.ts";
import { FormatGenerator } from "./generator.ts";

export function versionImportFormat(versionFormat: string, namespace: string, version: string) {
	const versionSlug = version.toLowerCase().split(".")[0];
	const namespaceLowercase = namespace.toLowerCase();

	return `${versionFormat
		.replace("{version}", version)
		.replace("{version-slug}", versionSlug)
		.replace("{namespace}", namespace)
		.replace("{namespace-lower}", namespaceLowercase)}`;
}

export abstract class DtsGenerator extends FormatGenerator<string> {
	protected generateParameters(parameters: IntrospectedFunctionParameter[]): string {
		return parameters
			.map((p) => {
				return p.asString(this);
			})
			.join(", ");
	}

	generateGenerics(nodes: Generic[], withDefaults = true) {
		const { namespace, options } = this;

		const list = nodes.map((generic) => {
			const Type = generic.type.rootPrint(namespace, options);

			if (generic.defaultType && withDefaults) {
				const defaultType = generic.defaultType.rootPrint(namespace, options);

				if (generic.constraint) {
					const constraint = generic.constraint.rootPrint(namespace, options);
					return `${Type} extends ${constraint} = ${defaultType}`;
				}

				return `${Type} = ${defaultType}`;
			} else if (generic.constraint && withDefaults) {
				const constraint = generic.constraint.rootPrint(namespace, options);
				return `${Type} extends ${constraint}`;
			} else {
				return `${Type}`;
			}
		});

		if (list.length > 0) {
			return `<${list.join(", ")}>`;
		}

		return "";
	}

	generateCallbackType(node: IntrospectedCallback | IntrospectedClassCallback): [string, string] {
		const { namespace, options } = this;

		const Parameters = this.generateParameters(node.parameters);

		if (node.generics.length > 0) {
			const GenericDefinitions = this.generateGenerics(node.generics);

			return [
				`${GenericDefinitions}`,
				`(${Parameters}) => ${node.return().resolve(namespace, options).print(namespace, options)}`,
			];
		}
		return ["", `(${Parameters}) => ${node.return().resolve(namespace, options).print(namespace, options)}`];
	}

	generateCallback(node: IntrospectedCallback | IntrospectedClassCallback): string {
		return `${this.docString(node)}export type ${node.name}${this.generateCallbackType(node).join(" = ")};`;
	}

	generateClassCallback(node: IntrospectedClassCallback): string {
		return this.generateCallback(node);
	}

	generateReturn(return_type: TypeExpression, output_parameters: IntrospectedFunctionParameter[]) {
		const { namespace, options } = this;

		const resolved_return_type =
			resolveDirectedType(return_type, GirDirection.Out)?.resolve(namespace, options) ??
			return_type.resolve(namespace, options);

		const type = resolved_return_type.rootPrint(namespace, options);

		if (output_parameters.length > 0) {
			const exclude_first = type === "void" || type === "";
			const returns = [
				...(exclude_first ? [] : [`${type}`]),
				...output_parameters
					.map((op) => {
						return (
							resolveDirectedType(op.type, GirDirection.Out)?.resolve(namespace, options) ??
							op.type.resolve(namespace, options)
						);
					})
					.map((p) => p.rootPrint(namespace, options)),
			];
			if (returns.length > 1) {
				return `[${returns.join(", ")}]`;
			} else {
				return `${returns[0]}`;
			}
		}

		return type;
	}

	generateEnum(node: IntrospectedEnum): string {
		const { namespace } = this;

		const isInvalidEnum = Array.from(node.members.keys()).some(
			(name) => name.match(/^[0-9]+$/) || name === "NaN" || name === "Infinity",
		);

		if (isInvalidEnum) {
			return node.asClass().asString(this);
		}

		// So we can use GObject.GType
		this.namespace.assertInstalledImport("GObject");

		return `
export namespace ${node.name} {
    export const $gtype: ${namespace.namespace !== "GObject" ? "GObject." : ""}GType<${node.name}>;
}

${this.docString(node)}export enum ${node.name} {
    ${Array.from(node.members.values())
			.map((member) => `${member.asString(this)}`)
			.join("\n    ")}
}`;
	}

	generateError(node: IntrospectedError): string {
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

		return clazz.asString(this);
	}

	generateConst(node: IntrospectedConstant): string {
		const { namespace, options } = this;

		return `${this.docString(node)}export const ${node.name}: ${node.type
			.resolve(namespace, options)
			.print(namespace, options)};`;
	}

	protected implements(node: IntrospectedClass) {
		const { namespace, options } = this;

		const interfaces = node.interfaces.map((i) => {
			const identifier = i.resolveIdentifier(namespace, options);

			if (!identifier) {
				throw new Error(
					`Unable to resolve type: ${i.name} from ${i.namespace} in ${node.namespace.namespace} ${node.namespace.version}`,
				);
			}

			return identifier;
		});

		if (interfaces.length > 0) {
			return ` implements ${interfaces
				.map((i) => {
					const Type = i.print(namespace, options);
					return `${Type}`;
				})
				.join(", ")}`;
		}

		return "";
	}

	protected extends(node: IntrospectedBaseClass) {
		const { namespace: ns, options } = this;
		if (node.superType) {
			const ResolvedType = node.superType.resolveIdentifier(ns, options);
			const Type = ResolvedType?.print(ns, options);

			if (Type) {
				return ` extends ${Type}`;
			}

			throw new Error(
				`Unable to resolve type: ${node.superType.name} from ${node.superType.namespace} in ${node.namespace.namespace} ${node.namespace.version}`,
			);
		}

		return "";
	}

	generateInterface(node: IntrospectedInterface): string {
		const { namespace, options } = this;

		const isGObject = node.someParent((p) => p.namespace.namespace === "GObject" && p.name === "Object");

		const name = node.name;

		const generics = node.generics;

		let Generics = "";
		let GenericTypes = "";

		if (generics.length > 0) {
			Generics = `${this.generateGenerics(generics)}`;
			GenericTypes = `${this.generateGenerics(generics, false)}`;
		}

		const Extends = this.extends(node);
		const filteredFunctions = filterFunctionConflict(node.namespace, node, node.members, []);
		const functions = options.promisify ? promisifyFunctions(filteredFunctions) : filteredFunctions;

		const staticFunctions = functions.filter((f) => f instanceof IntrospectedStaticClassFunction);
		const staticFields = node.fields
			.filter((f) => f.isStatic)
			.map((f) =>
				f.copy({
					isStatic: false,
				}),
			);

		const nonStaticFunctions = functions.filter((f) => !(f instanceof IntrospectedStaticClassFunction));
		const nonStaticFields = node.fields.filter((f) => !f.isStatic);

		// Filter out methods that conflict with properties (have same name as a property)
		// In TypeScript interfaces, you cannot have both properties and methods with the same name
		const propertyNames = new Set(node.props.map((p) => p.name));
		const nonConflictingFunctions = nonStaticFunctions.filter((f) => !propertyNames.has(f.name));

		const hasNamespace = isGObject || staticFunctions.length > 0 || node.callbacks.length > 0;

		if (isGObject) {
			// So we can use GObject.GType
			this.namespace.assertInstalledImport("GObject");
		}

		return `
        ${
					node.callbacks.length > 0
						? `export module ${name} {
  ${node.callbacks.map((c) => c.asString(this)).join("\n")}
  }`
						: ""
				}
      ${
				hasNamespace
					? `${this.docString(node)}export interface ${name}Namespace {
    ${isGObject ? `$gtype: ${namespace.namespace !== "GObject" ? "GObject." : ""}GType<${name}>;` : ""}
    prototype: ${name}Prototype;
    ${staticFields.length > 0 ? staticFields.map((sf) => sf.asString(this)).join("\n") : ""}
    ${
			staticFunctions.length > 0
				? staticFunctions.map((sf) => IntrospectedClassFunction.prototype.asString.call(sf, this)).join("\n")
				: ""
		}    
    }`
					: ""
			}
export type ${name}${Generics} = ${name}Prototype${GenericTypes};
export interface ${name}Prototype${Generics}${Extends} {${node.__ts__indexSignature ? `\n${node.__ts__indexSignature}\n` : ""}
    ${node.props.length > 0 ? "// Properties" : ""}
    ${filterConflicts(node.namespace, node, node.props)
			.map((p) => p.asString(this))
			.join("\n")}
    ${nonStaticFields.length > 0 ? "// Fields" : ""}
    ${filterConflicts(node.namespace, node, nonStaticFields)
			.map((p) => p.asString(this))
			.join("\n")}
    ${nonConflictingFunctions.length > 0 ? "// Methods\n" : ""}
    ${nonConflictingFunctions.map((m) => m.asString(this)).join("\n")}
    }${hasNamespace ? `\n\nexport const ${name}: ${name}Namespace;\n` : ""}`;
	}

	generateRecord(node: IntrospectedRecord): string {
		const { options, namespace } = this;

		const { name } = node;

		const Extends = this.extends(node);

		let Generics = "";

		if (node.generics.length > 0) {
			Generics = `${this.generateGenerics(node.generics)}`;
		}

		let MainConstructor: string = "";

		if (node.isForeign()) {
			MainConstructor = "";
		} else if (node.mainConstructor) {
			MainConstructor = node.mainConstructor.asString(this);
		}

		const hasCallbacks = node.callbacks.length > 0;

		const Properties = filterConflicts(node.namespace, node, node.props)
			.map((v) => v.asString(this))
			.join("\n");

		const Fields = filterConflicts(node.namespace, node, node.fields)
			.map((v) => v.asString(this))
			.join("\n");

		const Constructors = filterConflicts(node.namespace, node, node.constructors)
			.map((v) => this.generateConstructorFunction(v))
			.join("\n");

		const FilteredMembers = filterFunctionConflict(node.namespace, node, node.members, []);
		const Members = (options.promisify ? promisifyFunctions(FilteredMembers) : FilteredMembers)
			.map((v) => v.asString(this))
			.join("\n");

		// So we can use GObject.GType
		this.namespace.assertInstalledImport("GObject");

		return `${
			hasCallbacks
				? `export module ${name} {
                ${node.callbacks.map((c) => c.asString(this)).join("\n")}
}`
				: ""
		}
  
${this.docString(node)}export class ${name}${Generics}${Extends} {${
			node.__ts__indexSignature ? `\n${node.__ts__indexSignature}\n` : ""
		}
    static $gtype: ${namespace.namespace !== "GObject" ? "GObject." : ""}GType<${name}>;

    ${MainConstructor}
    constructor(copy: ${node.name});
    
    ${node.props.length > 0 ? "// Properties" : ""}
    ${Properties}
        
    ${node.fields.length > 0 ? "// Fields" : ""}
    ${Fields}

    ${node.constructors.length > 0 ? "// Constructors" : ""}
    ${Constructors}
      
    ${node.members.length > 0 ? "// Members" : ""}
    ${Members}
}`;
	}

	generateClass(node: IntrospectedClass): string {
		const { options, namespace } = this;

		const name = node.name;

		const injectConstructorBucket = !node.mainConstructor;

		let Generics = "";
		let GenericTypes = "";

		if (node.generics.length > 0) {
			Generics = `${this.generateGenerics(node.generics)}`;
			GenericTypes = `${this.generateGenerics(node.generics, false)}`;
		}

		const Extends = this.extends(node);
		const Implements = this.implements(node);

		const implementedProperties = node.implementedProperties();
		const implementedMethods = node.implementedMethods(implementedProperties);

		let MainConstructor: string = "";

		if (node.mainConstructor) {
			MainConstructor = `\n${node.mainConstructor.asString(this)}`;
		} else {
			MainConstructor = `\nconstructor(properties?: Partial<${name}.ConstructorProperties${GenericTypes}>, ...args: any[]);\n`;

			// TODO: options migration
			//if (!options.noInitTypes) {
			//    MainConstructor += `_init(properties?: Partial<${name}.ConstructorProperties${GenericTypes}>, ...args: any[]): void;\n`;
			//} else {
			MainConstructor += "_init(...args: any[]): void;\n";
			//}
		}

		const ConstructorProps = filterConflicts(
			node.namespace,
			node,
			// TODO: Include properties from interface parents too.
			node.props,
		)
			.map((v) => v.asString(this, true))
			.join("\n    ");

		const Properties = filterConflicts(node.namespace, node, node.props)
			.map((v) => v.asString(this))
			.join("\n    ");

		const Fields = filterConflicts(node.namespace, node, node.fields)
			.map((v) => v.asString(this))
			.join("\n    ");

		const Constructors = filterFunctionConflict(node.namespace, node, node.constructors, [])
			.map((v) => this.generateConstructorFunction(v))
			.join("\n    ");

		const FilteredMembers = filterFunctionConflict(node.namespace, node, node.members, []);
		const Members = (options.promisify ? promisifyFunctions(FilteredMembers) : FilteredMembers)
			.map((v) => v.asString(this))
			.join("\n    ");

		const ImplementedProperties = filterConflicts(node.namespace, node, implementedProperties)
			.map((m) => m.asString(this))
			.join("\n    ");

		const FilteredImplMethods = filterFunctionConflict(node.namespace, node, implementedMethods, [], true);
		const ImplementedMethods = (options.promisify ? promisifyFunctions(FilteredImplMethods) : FilteredImplMethods)
			.map((m) => m.asString(this))
			.join("\n    ");

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

		let default_signals = [] as IntrospectedClassFunction[];
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

			default_signals = filterConflicts(namespace, node, default_signals, FilterBehavior.DELETE);

			hasConnect = !default_signals.some((s) => s.name === "connect");
			hasConnectAfter = !default_signals.some((s) => s.name === "connect_after");
			hasEmit = !default_signals.some((s) => s.name === "emit");
		}

		const SignalsList = [
			// TODO Relocate these.
			...default_signals.map((s) => s.asString(this)),
			...node.signals.flatMap((s) => {
				const methods = [] as string[];

				if (!hasConnect) methods.push(s.asString(this, IntrospectedSignalType.CONNECT));
				if (!hasConnectAfter) methods.push(s.asString(this, IntrospectedSignalType.CONNECT_AFTER));
				if (!hasEmit) methods.push(s.asString(this, IntrospectedSignalType.EMIT));

				return methods;
			}),
		];

		const hasSignals = SignalsList.length > 0;
		const Signals = SignalsList.join("\n");

		const hasCallbacks = node.callbacks.length > 0;
		const hasModule = injectConstructorBucket || hasCallbacks;

		// So we can use GObject.GType
		this.namespace.assertInstalledImport("GObject");

		const parts = Extends.split("<");
		const ExtendsInterface = parts[0];
		let ExtendsGenerics = parts[1] ?? "";

		if (ExtendsGenerics.length > 0) {
			ExtendsGenerics = `<${ExtendsGenerics}`;
		}

		return `${
			hasModule
				? `export module ${name} {
                ${hasCallbacks ? node.callbacks.map((c) => c.asString(this)).join("\n") : ""}
                ${
									injectConstructorBucket
										? `export interface ConstructorProperties${Generics}${
												Extends ? `${ExtendsInterface}.ConstructorProperties${ExtendsGenerics}` : ""
											} {
    [key: string]: any;
    ${ConstructorProps}
}`
										: ""
								}
}`
				: ""
		}
      export ${node.isAbstract ? "abstract " : ""}class ${name}${Generics}${Extends}${Implements} {${
				node.__ts__indexSignature ? `\n${node.__ts__indexSignature}\n` : ""
			}
      static $gtype: ${namespace.namespace !== "GObject" ? "GObject." : ""}GType<${name}>;

      ${MainConstructor}
      
      ${node.props.length > 0 ? "// Properties" : ""}
      ${Properties}
      
      ${node.fields.length > 0 ? "// Fields" : ""}
      ${Fields}
  
      ${hasSignals ? "// Signals\n" : ""}
      ${Signals}
    
      ${implementedProperties.length > 0 ? "// Implemented Properties\n" : ""}
      ${ImplementedProperties}
    
      ${node.constructors.length > 0 ? "// Constructors\n" : ""}
      ${Constructors}
      
      ${node.members.length > 0 ? "// Members\n" : ""}
      ${Members}
      
      ${implementedMethods.length > 0 ? "// Implemented Members\n" : ""}
      ${ImplementedMethods}
}`;
	}

	generateField(node: IntrospectedField): string {
		const { namespace, options } = this;
		const { name, computed } = node;
		const invalid = isInvalid(name);

		const Static = node.isStatic ? "static" : "";
		const ReadOnly = node.writable ? "" : "readonly";

		const Modifier = [Static, ReadOnly].filter((a) => a !== "").join(" ");

		const Name = computed ? `[${name}]` : invalid ? `"${name}"` : name;

		let { type } = node;
		let fieldAnnotation = "";
		if (type instanceof TypeConflict) {
			if (type.conflictType === ConflictType.PROPERTY_ACCESSOR_CONFLICT) {
				fieldAnnotation = `// This accessor conflicts with a property, field, or function name in a parent class or interface.
// @ts-expect-error\n`;
			}

			type = new BinaryType(type.unwrap(), AnyType);
		}

		return `${this.docString(node)}${fieldAnnotation}${Modifier} ${Name}${node.optional ? "?" : ""}: ${type
			.resolve(namespace, options)
			.rootPrint(namespace, options)};`;
	}

	generateProperty(node: IntrospectedProperty, construct: boolean = false): string {
		const { namespace, options } = this;

		const invalid = isInvalid(node.name);
		const Name = invalid ? `"${node.name}"` : node.name;

		let type = node.type;
		let getterAnnotation = "";
		let setterAnnotation = "";
		let getterSetterAnnotation = "";

		if (type instanceof TypeConflict) {
			switch (type.conflictType) {
				case ConflictType.FUNCTION_NAME_CONFLICT:
				case ConflictType.FIELD_NAME_CONFLICT:
					getterSetterAnnotation = setterAnnotation =
						"// This accessor conflicts with a property, field, or function name in a parent class or interface.\n";
					break;
				case ConflictType.ACCESSOR_PROPERTY_CONFLICT:
					getterSetterAnnotation = getterAnnotation =
						"// This accessor conflicts with a property, field, or function name in a parent class or interface.\n";
					type = new BinaryType(type.unwrap(), AnyType);
					break;
				case ConflictType.PROPERTY_ACCESSOR_CONFLICT:
					type = new BinaryType(type.unwrap(), AnyType);
					break;
				case ConflictType.PROPERTY_NAME_CONFLICT:
					getterSetterAnnotation =
						setterAnnotation =
						getterAnnotation =
							"// This accessor conflicts with another accessor's type in a parent class or interface.\n";
					type = new BinaryType(type.unwrap(), AnyType);
					break;
			}

			if (construct && !(type instanceof BinaryType)) {
				// For constructor properties we just convert to any.
				type = new BinaryType(type, AnyType);
			}
		}

		const Type = type.resolve(namespace, options).rootPrint(namespace, options) || "any";

		if (construct) {
			return `${Name}: ${Type};`;
		}

		const { readable, writable, constructOnly } = node;

		const hasGetter = readable;
		const hasSetter = writable && !constructOnly;

		if (node.parent instanceof IntrospectedInterface) {
			if (!hasSetter && hasGetter) {
				return `readonly ${Name}: ${Type};`;
			} else {
				return `${Name}: ${Type};`;
			}
		}

		if (hasGetter && hasSetter) {
			return `${getterAnnotation} get ${Name}(): ${Type};
              ${setterAnnotation} set ${Name}(val: ${Type});`;
		} else if (hasGetter) {
			return `${getterSetterAnnotation} get ${Name}(): ${Type};`;
		} else {
			return `${getterSetterAnnotation} set ${Name}(val: ${Type});`;
		}
	}

	generateSignal(node: IntrospectedSignal, type: IntrospectedSignalType = IntrospectedSignalType.CONNECT): string {
		switch (type) {
			case IntrospectedSignalType.CONNECT:
				return node.asConnect(false).asString(this);
			case IntrospectedSignalType.CONNECT_AFTER:
				return node.asConnect(true).asString(this);
			case IntrospectedSignalType.EMIT:
				return node.asEmit().asString(this);
		}
	}

	generateEnumMember(node: GirEnumMember): string {
		const invalid = isInvalid(node.name);
		if (node.value != null && !Number.isNaN(Number.parseInt(node.value, 10))) {
			return invalid
				? `${this.docString(node)}"${node.name}" = ${node.value},`
				: `${this.docString(node)}${node.name} = ${node.value},`;
		} else {
			return invalid ? `${this.docString(node)}"${node.name}",` : `${this.docString(node)}${node.name},`;
		}
	}

	generateParameter(node: IntrospectedFunctionParameter): string {
		const { namespace, options } = this;

		const type: string =
			resolveDirectedType(node.type, node.direction)?.resolve(namespace, options).rootPrint(namespace, options) ??
			node.type.resolve(namespace, options).rootPrint(namespace, options);

		if (node.isVarArgs) {
			return `...args: ${type}`;
		}

		if (node.isOptional) {
			return `${node.name}?: ${type}`;
		} else {
			return `${node.name}: ${type}`;
		}
	}

	docString(node: AnyIntrospectedType) {
		// TODO: Support node.doc not being a string?
		return typeof node.doc === "string" && !this.options.noComments
			? `/**
${node.doc
	.split("\n")
	.map((line) =>
		` * ${line
			.trim()
			.replace("*/", "*\\/")
			.replace(/@([a-z_]+?)([. ])/g, "`$1$2`")}`.replace(/@([a-z])/g, "$1"),
	)
	.join("\n")}
    */\n`
			: "";
	}

	generateFunction(node: IntrospectedFunction): string {
		const { namespace } = this;
		// Register our identifier with the sanitized identifiers.
		// We avoid doing this in fromXML because other class-level function classes
		// depends on that code.
		sanitizeIdentifierName(namespace.namespace, node.raw_name);

		const Parameters = this.generateParameters(node.parameters);
		const ReturnType = this.generateReturn(node.return(), node.output_parameters);
		const Generics = this.generateGenerics(node.generics);
		return `${this.docString(node)}export function ${node.name}${Generics}(${Parameters}): ${ReturnType};`;
	}

	generateConstructorFunction(node: IntrospectedConstructor): string {
		const { namespace, options } = this;

		const Parameters = this.generateParameters(node.parameters);

		const invalid = isInvalid(node.name);
		const name = invalid ? `["${node.name}"]` : node.name;
		const warning = node.getWarning();
		return `${warning ? `${warning}\n` : ""}${this.docString(node)}static ${name}(${Parameters}): ${node
			.return()
			.resolve(namespace, options)
			.rootPrint(namespace, options)};`;
	}

	generateConstructor(node: IntrospectedConstructor): string {
		const Parameters = this.generateParameters(node.parameters);

		return `constructor(${Parameters});`;
	}

	generateDirectAllocationConstructor(node: IntrospectedDirectAllocationConstructor): string {
		const ConstructorFields = node.parameters.map((param) => param.asField().asString(this)).join("\n");

		return `
    constructor(properties?: Partial<{
      ${ConstructorFields}
    }>);`;
	}

	generateClassFunction(node: IntrospectedClassFunction): string {
		const invalid = isInvalid(node.name);

		const parameters = node.parameters;
		const output_parameters = node.output_parameters;
		const return_type = node.return();

		const Parameters = this.generateParameters(parameters);
		const ReturnType = this.generateReturn(return_type, output_parameters);

		const Generics = this.generateGenerics(node.generics);

		if (node.shouldAnyify()) {
			return `${invalid ? `["${node.name}"]` : node.name}: ${Generics}((${Parameters}) => ${ReturnType}) | any;`;
		}

		const warning = node.getWarning();
		return `${warning ? `${warning}\n` : ""}${this.docString(node)}${
			invalid ? `["${node.name}"]` : node.name
		}${Generics}(${Parameters}): ${ReturnType};`;
	}

	generateStaticClassFunction(node: IntrospectedStaticClassFunction): string {
		const Generics = this.generateGenerics(node.generics);

		const ReturnType = this.generateReturn(node.return(), node.output_parameters);

		const warning = node.getWarning();
		return `${warning ? `${warning}\n` : ""}${this.docString(node)}static ${
			node.name
		}${Generics}(${this.generateParameters(node.parameters)}): ${ReturnType};`;
	}

	generateAlias(node: IntrospectedAlias): string {
		const { namespace, options } = this;
		const Type = node.type.resolve(namespace, options).print(namespace, options);
		const GenericBase = node.generics
			.map((g) => {
				if (g.type) {
					return `${g.name} = ${g.type.resolve(namespace, options).rootPrint(namespace, options)}`;
				}

				return `${g.name}`;
			})
			.join(", ");
		const Generic = GenericBase ? `<${GenericBase}>` : "";

		return `${this.docString(node)}export type ${node.name}${Generic} = ${Type};`;
	}

	generateVirtualClassFunction(node: IntrospectedVirtualClassFunction): string {
		return this.generateClassFunction(node);
	}
}
