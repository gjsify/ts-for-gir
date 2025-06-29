import { ConsoleReporter } from "@ts-for-gir/reporter";
import type { FormatGenerator } from "../generators/generator.ts";
import {
	FunctionType,
	Generic,
	GenericType,
	GenerifiedTypeIdentifier,
	type TypeExpression,
	TypeIdentifier,
	UnknownType,
} from "../gir.ts";
import type {
	GirCallbackElement,
	GirClassElement,
	GirFunctionElement,
	GirInterfaceElement,
	GirMethodElement,
	GirRecordElement,
	GirVirtualMethodElement,
} from "../index.ts";
import type {
	ClassDefinition,
	ClassMember,
	ClassResolution,
	InterfaceResolution,
	IntrospectedOptions,
	OptionsLoad,
	RecordResolution,
} from "../types/index.ts";
import { findMap } from "../util.ts";
import { parseDoc, parseMetadata } from "../utils/gir-parsing.ts";
import { sanitizeIdentifierName } from "../utils/naming.ts";
import { resolveTypeIdentifier } from "../utils/type-resolution.ts";
import { parseTypeIdentifier } from "../utils/types.ts";
import type { GirVisitor } from "../visitor.ts";
import { IntrospectedConstructor } from "./constructor.ts";
import type { IntrospectedDirectAllocationConstructor } from "./direct-allocation-constructor.ts";
import type { IntrospectedEnum } from "./enum.ts";
import { IntrospectedFunction } from "./function.ts";
import { createGenericNameGenerator, createGenericNameGeneratorAt } from "./generics.ts";
import { IntrospectedBase } from "./introspected-base.ts";
import { IntrospectedNamespaceMember } from "./introspected-namespace-member.ts";
import type { IntrospectedNamespace } from "./namespace.ts";
import type { IntrospectedFunctionParameter } from "./parameter.ts";
import { IntrospectedField, IntrospectedProperty } from "./property.ts";
import { IntrospectedSignal } from "./signal.ts";

const log = new ConsoleReporter(true, "gir/introspected-classes", true);

/**
 * Represents a signal with metadata
 */
export interface SignalDescriptor {
	name: string;
	signal?: IntrospectedSignal;
	isNotifySignal?: boolean;
	isDetailSignal?: boolean;
	parameterTypes?: string[];
	returnType?: string;
}

/**
 * Base class for all class functions
 */
export class IntrospectedClassFunction<
	Parent extends IntrospectedBaseClass | IntrospectedEnum = IntrospectedBaseClass | IntrospectedEnum,
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

		this.parameters = parameters.map((p) => p.copy({ parent: this }));
		this.output_parameters = output_parameters.map((p) => p.copy({ parent: this }));
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
			return_type,
		};
	}

	copy({
		parent = this.parent,
		name,
		interfaceParent,
		parameters,
		outputParameters,
		returnType,
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
			return_type: returnType ?? this.return_type,
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
			parameters: this.parameters.map((p) => {
				return p.accept(visitor);
			}),
			outputParameters: this.output_parameters.map((p) => {
				return p.accept(visitor);
			}),
			returnType: visitor.visitType?.(this.return_type),
		});

		const fn = visitor.visitClassFunction?.(node);

		return fn ?? node;
	}

	static fromXML(
		element: GirFunctionElement | GirMethodElement,
		parent: IntrospectedBaseClass | IntrospectedEnum,
		options: OptionsLoad,
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
			isIntrospectable,
		});

		classFn.returnTypeDoc = fn.returnTypeDoc;
		classFn.generics = [...fn.generics];

		return classFn;
	}

	anyify(): this {
		this._anyify = true;

		return this;
	}

	shouldAnyify() {
		return this._anyify;
	}

	return(): TypeExpression {
		return this.return_type;
	}

	asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateClassFunction"]> {
		return generator.generateClassFunction(this) as ReturnType<T["generateClassFunction"]>;
	}
}

/**
 * Virtual class function
 */
export class IntrospectedVirtualClassFunction extends IntrospectedClassFunction<IntrospectedBaseClass> {
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
			...args,
		});
	}

	copy({
		parent = this.parent,
		interfaceParent,
		parameters,
		outputParameters,
		returnType,
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
			return_type: returnType ?? this.return_type,
		});

		fn.generics = [...this.generics];
		fn.returnTypeDoc = this.returnTypeDoc;

		if (interfaceParent) {
			fn.interfaceParent = interfaceParent;
		}

		return fn._copyBaseProperties(this);
	}

	accept(visitor: GirVisitor): IntrospectedVirtualClassFunction {
		const node = this.copy({
			parameters: this.parameters.map((p) => {
				return p.accept(visitor);
			}),
			outputParameters: this.output_parameters.map((p) => {
				return p.accept(visitor);
			}),
			returnType: visitor.visitType?.(this.return_type),
		});
		return visitor.visitVirtualClassFunction?.(node) ?? node;
	}

	static fromXML(
		m: GirVirtualMethodElement,
		parent: IntrospectedBaseClass,
		options: OptionsLoad,
	): IntrospectedVirtualClassFunction {
		const fn = IntrospectedFunction.fromXML(m, parent.namespace, options);

		// Convert the function to a virtual class function
		const { raw_name: name, output_parameters, parameters, return_type, doc, isIntrospectable } = fn;

		return new IntrospectedVirtualClassFunction({
			parent,
			name,
			output_parameters,
			parameters,
			return_type,
			doc,
			isIntrospectable,
		});
	}

	asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateVirtualClassFunction"]> {
		return generator.generateVirtualClassFunction(this) as ReturnType<T["generateVirtualClassFunction"]>;
	}
}

/**
 * Static class function
 */
export class IntrospectedStaticClassFunction extends IntrospectedClassFunction {
	asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateStaticClassFunction"]> {
		return generator.generateStaticClassFunction(this) as ReturnType<T["generateStaticClassFunction"]>;
	}

	copy({
		parent = this.parent,
		interfaceParent,
		parameters,
		outputParameters,
		returnType,
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
			return_type: returnType ?? this.return_type,
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
			parameters: this.parameters.map((p) => {
				return p.accept(visitor);
			}),
			outputParameters: this.output_parameters.map((p) => {
				return p.accept(visitor);
			}),
			returnType: visitor.visitType?.(this.return_type),
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
			isIntrospectable,
		});

		fn.returnTypeDoc = this.returnTypeDoc;
		fn.generics = [...this.generics];

		return fn;
	}

	static fromXML(
		m: GirFunctionElement,
		parent: IntrospectedBaseClass | IntrospectedEnum,
		options: OptionsLoad,
	): IntrospectedStaticClassFunction {
		const fn = IntrospectedFunction.fromXML(m, parent.namespace, options);

		// Convert the function to a static class function
		const { raw_name: name, output_parameters, parameters, return_type, doc, isIntrospectable } = fn;

		return new IntrospectedStaticClassFunction({
			parent,
			name,
			output_parameters,
			parameters,
			return_type,
			doc,
			isIntrospectable,
		});
	}
}

/**
 * Class callback function
 */
export class IntrospectedClassCallback extends IntrospectedClassFunction {
	asFunctionType(): FunctionType {
		return new FunctionType(
			Object.fromEntries(this.parameters.map((p) => [p.name, p.type] as const)),
			this.return_type,
		);
	}

	copy({
		parameters,
		returnType,
		outputParameters,
		parent,
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
			parent: parent ?? this.parent,
		})._copyBaseProperties(this);

		cb.generics = [...this.generics];

		return cb;
	}

	accept(visitor: GirVisitor): IntrospectedClassCallback {
		const node = this.copy({
			parameters: this.parameters.map((p) => {
				return p.accept(visitor);
			}),
			outputParameters: this.output_parameters.map((p) => {
				return p.accept(visitor);
			}),
			returnType: visitor.visitType?.(this.return_type),
		});

		return visitor.visitClassCallback?.(node) ?? node;
	}

	static fromXML(
		element: GirCallbackElement,
		parent: IntrospectedBaseClass,
		options: OptionsLoad,
	): IntrospectedClassCallback {
		const ns = parent.namespace;
		const cb = new IntrospectedClassCallback(
			IntrospectedClassFunction.fromXML(element, parent, options).getCallbackParameters(),
		);

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

	asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateClassCallback"]> {
		return generator.generateClassCallback(this) as ReturnType<T["generateClassCallback"]>;
	}
}

/**
 * Abstract base class for classes and interfaces
 */
export abstract class IntrospectedBaseClass extends IntrospectedNamespaceMember {
	/**
	 * Used to add a TypeScript index signature to a class
	 *
	 * NOTE: This should probably be migrated into the TypeScript generator itself.
	 */
	__ts__indexSignature?: string;
	superType: TypeIdentifier | null;

	mainConstructor: null | IntrospectedConstructor | IntrospectedDirectAllocationConstructor;
	constructors: IntrospectedConstructor[];
	members: IntrospectedClassFunction[];
	props: IntrospectedProperty[];
	fields: IntrospectedField[];
	callbacks: IntrospectedClassCallback[];

	// Generics support
	generics: Generic[] = [];

	constructor(
		options: IntrospectedOptions<{
			name: string;
			namespace: IntrospectedNamespace;
		}> &
			Partial<ClassDefinition>,
	) {
		const {
			name,
			namespace,
			superType = null,
			mainConstructor = null,
			constructors = [],
			members = [],
			props = [],
			fields = [],
			callbacks = [],
			...args
		} = options;

		super(name, namespace, { ...args });

		this.superType = superType;

		this.mainConstructor = mainConstructor?.copy({ parent: this }) ?? null;
		this.constructors = [...constructors.map((c) => c.copy({ parent: this }))];
		this.members = [...members.map((m) => m.copy({ parent: this }))];
		this.props = [...props.map((p) => p.copy({ parent: this }))];
		this.fields = [...fields.map((f) => f.copy({ parent: this }))];
		this.callbacks = [...callbacks.map((c) => c.copy({ parent: this }))];
	}

	abstract accept(visitor: GirVisitor): IntrospectedBaseClass;

	abstract copy(options?: {
		parent?: undefined;
		constructors?: IntrospectedConstructor[];
		members?: IntrospectedClassFunction[];
		props?: IntrospectedProperty[];
		fields?: IntrospectedField[];
		callbacks?: IntrospectedClassCallback[];
	}): IntrospectedBaseClass;

	getGenericName = createGenericNameGenerator();

	abstract resolveParents(): RecordResolution | InterfaceResolution | ClassResolution;
	abstract someParent(predicate: (b: IntrospectedBaseClass) => boolean): boolean;
	abstract findParent(predicate: (b: IntrospectedBaseClass) => boolean): IntrospectedBaseClass | undefined;
	abstract findParentMap<K>(predicate: (b: IntrospectedBaseClass) => K | undefined): K | undefined;

	addGeneric(definition: {
		deriveFrom?: TypeIdentifier;
		default?: TypeExpression;
		constraint?: TypeExpression;
		propagate?: boolean;
	}) {
		const param = new Generic(
			new GenericType(this.getGenericName(), definition.constraint),
			definition.default,
			definition.deriveFrom,
			definition.constraint,
			definition.propagate,
		);

		this.generics.push(param);
	}

	getType(): TypeIdentifier {
		return new TypeIdentifier(this.name, this.namespace.namespace);
	}

	static fromXML(
		_element: GirClassElement | GirInterfaceElement | GirRecordElement,
		_ns: IntrospectedNamespace,
		_options: OptionsLoad,
	): IntrospectedBaseClass {
		throw new Error("fromXML is not implemented on GirBaseClass");
	}

	abstract asString<T = string>(generator: FormatGenerator<T>): T;
}

/**
 * Represents a GIR class
 */
export class IntrospectedClass extends IntrospectedBaseClass {
	signals: IntrospectedSignal[] = [];
	interfaces: TypeIdentifier[] = [];
	isAbstract: boolean = false;
	mainConstructor: null | IntrospectedConstructor = null;
	private _staticDefinition: string | null = null;

	constructor(name: string, namespace: IntrospectedNamespace) {
		super({ name, namespace });
	}

	getAllSignals(): SignalDescriptor[] {
		const allSignals = this.getBaseSignals();

		if (this.hasGObjectSupport()) {
			this.addNotifySignals(allSignals);
			this.addDetailedSignals(allSignals);
		}

		return allSignals;
	}

	private getBaseSignals() {
		return this.signals.map((signal) => ({
			name: signal.name,
			signal: signal,
			isNotifySignal: false,
			isDetailSignal: false,
		}));
	}

	private hasGObjectSupport(): boolean {
		const isGObjectObject = this.isGObjectObject();
		const hasNotifySignal = this.hasExplicitNotifySignal();
		const hasGObjectParent = this.hasGObjectParent();

		return isGObjectObject || hasNotifySignal || hasGObjectParent;
	}

	private isGObjectObject(): boolean {
		return this.name === "Object" && this.namespace.namespace === "GObject";
	}

	private hasExplicitNotifySignal(): boolean {
		return this.signals.some((signal) => signal.name === "notify");
	}

	private hasGObjectParent(): boolean {
		return this.someParent(
			(p: IntrospectedClass | IntrospectedInterface) => p.namespace.namespace === "GObject" && p.name === "Object",
		);
	}

	private addNotifySignals(allSignals: SignalDescriptor[]): void {
		const propertyNames = this.getUniquePropertyNames();

		propertyNames.forEach((propertyName) => {
			allSignals.push({
				name: `notify::${propertyName}`,
				isNotifySignal: true,
				isDetailSignal: false,
				parameterTypes: ["GObject.ParamSpec"],
				returnType: "void",
			});
		});
	}

	private addDetailedSignals(allSignals: SignalDescriptor[]): void {
		const propertyNames = this.getUniquePropertyNames();

		this.signals.forEach((signal) => {
			if (signal.detailed) {
				propertyNames.forEach((propertyName) => {
					allSignals.push({
						name: `${signal.name}::${propertyName}`,
						signal: signal,
						isNotifySignal: false,
						isDetailSignal: true,
						parameterTypes: signal.parameters.map((p) => this.getPropertyTypeString(p.type)),
						returnType: this.getPropertyTypeString(signal.return_type),
					});
				});
			}
		});
	}

	private getUniquePropertyNames(): Set<string> {
		const allProperties = this.getAllProperties();
		return new Set(
			allProperties.map((prop) =>
				prop.name
					.replace(/_/g, "-")
					.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
					.toLowerCase(),
			),
		);
	}

	private getPropertyTypeString(type: TypeExpression): string {
		// Simple type conversion - this might need to be adjusted based on actual type structure
		if (typeof type === "string") return type;
		if (type?.toString) return type.toString();
		return "any";
	}

	private getAllProperties(): IntrospectedProperty[] {
		const allProperties = [...this.props];
		let currentClass = this as IntrospectedClass;
		while (currentClass) {
			const parentResolution = currentClass.resolveParents().extends();
			if (parentResolution && parentResolution.node instanceof IntrospectedClass) {
				const parentClass = parentResolution.node as IntrospectedClass;
				allProperties.push(...parentClass.props);
				currentClass = parentClass;
			} else {
				break;
			}
		}
		const implementedProps = this.implementedProperties();
		allProperties.push(...implementedProps);
		return allProperties;
	}

	accept(visitor: GirVisitor): IntrospectedClass {
		const node = this.copy({
			signals: this.signals.map((s) => s.accept(visitor)),
			constructors: this.constructors.map((c) => c.accept(visitor)),
			members: this.members.map((m) => m.accept(visitor)),
			props: this.props.map((p) => p.accept(visitor)),
			fields: this.fields.map((f) => f.accept(visitor)),
			callbacks: this.callbacks.map((c) => c.accept(visitor)),
		});
		return visitor.visitClass?.(node) ?? node;
	}

	hasInstanceSymbol<S extends { name: string }>(s: S): boolean {
		return (
			this.members.some((p) => s.name === p.name && !(p instanceof IntrospectedStaticClassFunction)) ||
			this.props.some((p) => s.name === p.name) ||
			this.fields.some((p) => s.name === p.name)
		);
	}

	someParent(predicate: (p: IntrospectedClass | IntrospectedInterface) => boolean): boolean {
		const resolution = this.resolveParents();
		const parent = resolution.extends();

		if (parent) {
			if (predicate(parent.node as IntrospectedClass | IntrospectedInterface)) return true;
			const some = parent.node.someParent(predicate);
			if (some) return some;
		}

		return resolution
			.implements()
			.map((i) => i.node)
			.some(
				(i) =>
					predicate(i) ||
					i.someParent(
						(p: IntrospectedBaseClass) =>
							(p instanceof IntrospectedClass || p instanceof IntrospectedInterface) && predicate(p),
					),
			);
	}

	findParent(
		predicate: (p: IntrospectedClass | IntrospectedInterface) => boolean,
	): IntrospectedClass | IntrospectedInterface | undefined {
		return this.findParentMap((parent) => {
			if (predicate(parent)) {
				return parent;
			}
			return undefined;
		});
	}

	findParentMap<K>(predicate: (p: IntrospectedClass | IntrospectedInterface) => K | undefined): K | undefined {
		const resolution = this.resolveParents();
		const parent = resolution.extends();

		if (parent) {
			const value = predicate(parent.node as IntrospectedClass | IntrospectedInterface);
			if (value) return value;
			const parentMap = parent.node.findParentMap(predicate);
			if (parentMap) return parentMap;
		}

		return findMap(
			resolution.implements().map((i) => i.node),
			(i) =>
				predicate(i) ||
				i.findParentMap((p: IntrospectedBaseClass) =>
					p instanceof IntrospectedClass || p instanceof IntrospectedInterface ? predicate(p) : undefined,
				),
		);
	}

	implementedProperties(potentialConflicts: IntrospectedBase<never>[] = []) {
		const resolution = this.resolveParents();
		const implementedOnParent = [...(resolution.extends() ?? [])].flatMap((r) => r.implements());
		const properties = new Map<string, IntrospectedProperty>();

		const validateProp = (prop: IntrospectedProperty) =>
			!this.hasInstanceSymbol(prop) &&
			!properties.has(prop.name) &&
			potentialConflicts.every((p) => prop.name !== p.name);

		for (const implemented of resolution.implements()) {
			if (implemented.node instanceof IntrospectedClass) continue;

			if (implementedOnParent.find((p) => p.identifier.equals(implemented.identifier))?.node?.generics?.length === 0)
				continue;
			for (const prop of implemented.node.props) {
				if (!validateProp(prop)) continue;
				properties.set(prop.name, prop);
			}
		}

		for (const implemented of resolution.implements()) {
			[...implemented].forEach((e) => {
				if (e.node instanceof IntrospectedClass) return;

				if (implementedOnParent.find((p) => p.identifier.equals(e.identifier))?.node.generics.length === 0) return;
				for (const prop of e.node.props) {
					if (!validateProp(prop)) continue;

					properties.set(prop.name, prop);
				}
			});
		}

		// If an interface inherits from a class (such as Gtk.Widget)
		// we need to pull in every property from that class...
		for (const implemented of resolution.implements()) {
			const extended = implemented.extends();

			if (extended?.node instanceof IntrospectedClass) {
				for (const prop of extended.node.props) {
					if (!validateProp(prop)) continue;

					properties.set(prop.name, prop);
				}
			}
		}

		return [...properties.values()];
	}

	implementedMethods(potentialConflicts: ClassMember[] = []) {
		const resolution = this.resolveParents();
		const implementedOnParent = [...(resolution.extends() ?? [])].flatMap((r) => r.implements());
		const methods = new Map<string, IntrospectedClassFunction>();

		const validateMethod = (method: IntrospectedClassFunction) =>
			!(method instanceof IntrospectedStaticClassFunction) &&
			!this.hasInstanceSymbol(method) &&
			!methods.has(method.name) &&
			potentialConflicts.every((m) => method.name !== m.name);

		for (const implemented of resolution.implements()) {
			if (implemented.node instanceof IntrospectedClass) continue;

			if (implementedOnParent.find((p) => p.identifier.equals(implemented.identifier))?.node?.generics?.length === 0)
				continue;
			for (const member of implemented.node.members) {
				if (!validateMethod(member)) continue;
				methods.set(member.name, member);
			}
		}

		for (const implemented of resolution.implements()) {
			[...implemented].forEach((e) => {
				if (e.node instanceof IntrospectedClass) return;

				if (implementedOnParent.find((p) => p.identifier.equals(e.identifier))?.node.generics.length === 0) return;
				for (const member of e.node.members) {
					if (!validateMethod(member)) continue;

					methods.set(member.name, member);
				}
			});
		}

		// If an interface inherits from a class (such as Gtk.Widget)
		// we need to pull in every method from that class...
		for (const implemented of resolution.implements()) {
			const extended = implemented.extends();

			if (extended?.node instanceof IntrospectedClass) {
				for (const member of extended.node.members) {
					if (!validateMethod(member)) continue;

					methods.set(member.name, member);
				}
			}
		}

		return [...methods.values()].map((f) => {
			const mapping = new Map<string, TypeExpression>();
			if (f.parent instanceof IntrospectedBaseClass) {
				const inter = this.interfaces.find((i) => i.equals(f.parent.getType()));

				if (inter instanceof GenerifiedTypeIdentifier) {
					f.parent.generics.forEach((g, i) => {
						if (inter.generics.length > i) {
							mapping.set(g.type.identifier, inter.generics[i]);
						}
					});
				}
			}

			const unwrapped = f.return().deepUnwrap();
			let modifiedReturn = f.return();

			if (unwrapped instanceof GenericType && mapping.has(unwrapped.identifier)) {
				const mapped = mapping.get(unwrapped.identifier);

				if (mapped) {
					modifiedReturn = f.return().rewrap(mapped);
				}
				// Handles the case where a class implements an interface and thus copies its virtual methods.
			} else if (unwrapped.equals(this.getType())) {
				modifiedReturn = f.return().rewrap(this.getType());
			}

			return f.copy({
				parent: this,
				interfaceParent: f.parent,
				parameters: f.parameters.map((p) => {
					const t = p.type.deepUnwrap();
					if (t instanceof GenericType && mapping.has(t.identifier)) {
						const iden = mapping.get(t.identifier);

						if (iden) {
							return p.copy({ type: p.type.rewrap(iden) });
						}
					}

					return p;
				}),
				outputParameters: f.output_parameters.map((p) => {
					const t = p.type.deepUnwrap();
					if (t instanceof GenericType && mapping.has(t.identifier)) {
						const iden = mapping.get(t.identifier);

						if (iden) {
							return p.copy({ type: p.type.rewrap(iden) });
						}
					}

					return p;
				}),
				returnType: modifiedReturn,
			});
		});
	}

	resolveParents(): ClassResolution {
		const self = this;
		return {
			*[Symbol.iterator]() {
				let current = this.extends();
				while (current !== undefined) {
					yield current;
					current = current.extends();
				}
			},
			extends(): ClassResolution | undefined {
				const resolved_parent = self.superType ? resolveTypeIdentifier(self.namespace, self.superType) : undefined;
				if (resolved_parent instanceof IntrospectedClass) {
					return resolved_parent.resolveParents();
				}
				return undefined;
			},
			implements(): InterfaceResolution[] {
				return self.interfaces
					.map((iface) => {
						const resolved = resolveTypeIdentifier(self.namespace, iface);
						if (resolved instanceof IntrospectedInterface) {
							return resolved.resolveParents();
						}
						throw new Error(`Interface ${iface.name} not found`);
					})
					.filter((res): res is InterfaceResolution => res !== undefined);
			},
			node: self,
			identifier: self.getType(),
		};
	}

	copy(
		options: {
			parent?: undefined;
			signals?: IntrospectedSignal[];
			constructors?: IntrospectedConstructor[];
			members?: IntrospectedClassFunction[];
			props?: IntrospectedProperty[];
			fields?: IntrospectedField[];
			callbacks?: IntrospectedClassCallback[];
		} = {},
	): IntrospectedClass {
		const klass = new IntrospectedClass(this.name, this.namespace);
		klass.interfaces = [...this.interfaces];
		klass.superType = this.superType;
		klass.isAbstract = this.isAbstract;
		klass.doc = this.doc;
		klass.generics = [...this.generics];
		klass._staticDefinition = this._staticDefinition;

		const {
			signals = this.signals,
			constructors = this.constructors,
			members = this.members,
			props = this.props,
			fields = this.fields,
			callbacks = this.callbacks,
		} = options;

		klass.signals = [...signals.map((s) => s.copy({ parent: klass }))];
		klass.constructors = [...constructors.map((c) => c.copy({ parent: klass }))];
		klass.members = [...members.map((m) => m.copy({ parent: klass }))];
		klass.props = [...props.map((p) => p.copy({ parent: klass }))];
		klass.fields = [...fields.map((f) => f.copy({ parent: klass }))];
		klass.callbacks = [...callbacks.map((c) => c.copy({ parent: klass }))];

		if (this.mainConstructor) {
			klass.mainConstructor = this.mainConstructor.copy({ parent: klass });
		}

		klass.getGenericName = createGenericNameGeneratorAt(this.getGenericName());
		return klass._copyBaseProperties(this);
	}

	get staticDefinition() {
		return this._staticDefinition;
	}

	static fromXML(element: GirClassElement, ns: IntrospectedNamespace, options: OptionsLoad): IntrospectedClass {
		const name = sanitizeIdentifierName(ns.namespace, element.$.name);
		if (options.verbose) {
			log.debug(`  >> GirClass: Parsing definition ${element.$.name} (${name})...`);
		}

		const clazz = new IntrospectedClass(name, ns);

		IntrospectedClass.parseBasicProperties(element, clazz, ns, options);
		IntrospectedClass.parseResolveNames(element, clazz, ns, name);
		IntrospectedClass.parseInheritanceAndMembers(element, clazz, ns, options);

		return clazz;
	}

	private static parseBasicProperties(
		element: GirClassElement,
		clazz: IntrospectedClass,
		ns: IntrospectedNamespace,
		options: OptionsLoad,
	): void {
		if (options.loadDocs) {
			clazz.doc = parseDoc(element);
			clazz.metadata = parseMetadata(element);
		}

		if (element.$.parent) {
			clazz.superType = parseTypeIdentifier(ns.namespace, element.$.parent);
		}

		if (element.$.abstract) {
			clazz.isAbstract = true;
		}
	}

	private static parseResolveNames(
		element: GirClassElement,
		clazz: IntrospectedClass,
		ns: IntrospectedNamespace,
		name: string,
	): void {
		if (element.$["glib:type-name"]) {
			clazz.resolve_names.push(element.$["glib:type-name"]);
			ns.registerResolveName(element.$["glib:type-name"], ns.namespace, name);
		}

		if (element.$["c:type"]) {
			clazz.resolve_names.push(element.$["c:type"]);
			ns.registerResolveName(element.$["c:type"], ns.namespace, name);
		}

		const typeStruct = element.$["glib:type-struct"];
		if (typeStruct) {
			clazz.registerStaticDefinition(typeStruct);
			clazz.resolve_names.push(typeStruct);
			ns.registerResolveName(typeStruct, ns.namespace, name);
		}
	}

	private static parseInheritanceAndMembers(
		element: GirClassElement,
		clazz: IntrospectedClass,
		ns: IntrospectedNamespace,
		options: OptionsLoad,
	): void {
		try {
			IntrospectedClass.parseConstructors(element, clazz, options);
			IntrospectedClass.parseSignals(element, clazz, options);
			IntrospectedClass.parseProperties(element, clazz, options);
			IntrospectedClass.parseMethods(element, clazz, options);
			IntrospectedClass.parseFields(element, clazz);
			IntrospectedClass.parseInterfaces(element, clazz, ns);
			IntrospectedClass.parseCallbacks(element, clazz, ns, options);
			IntrospectedClass.parseVirtualMethods(element, clazz, options);
			IntrospectedClass.parseStaticFunctions(element, clazz, options);
		} catch (e) {
			log.reportParsingFailure(clazz.name, "class", ns.namespace, e as Error);
		}
	}

	private static parseConstructors(element: GirClassElement, clazz: IntrospectedClass, options: OptionsLoad): void {
		if (Array.isArray(element.constructor)) {
			clazz.constructors.push(
				...element.constructor.map((constructorElement) =>
					IntrospectedConstructor.fromXML(constructorElement, clazz, options),
				),
			);
		}
	}

	private static parseSignals(element: GirClassElement, clazz: IntrospectedClass, options: OptionsLoad): void {
		if (element["glib:signal"]) {
			clazz.signals.push(...element["glib:signal"].map((signal) => IntrospectedSignal.fromXML(signal, clazz, options)));
		}
	}

	private static parseProperties(element: GirClassElement, clazz: IntrospectedClass, options: OptionsLoad): void {
		if (!element.property) return;

		element.property.forEach((prop) => {
			const property = IntrospectedProperty.fromXML(prop, clazz, options);
			switch (options.propertyCase) {
				case "both": {
					clazz.props.push(property);
					const camelCase = property.toCamelCase();
					if (property.name !== camelCase.name) {
						clazz.props.push(camelCase);
					}
					break;
				}
				case "camel":
					clazz.props.push(property.toCamelCase());
					break;
				case "underscore":
					clazz.props.push(property);
					break;
			}
		});
	}

	private static parseMethods(element: GirClassElement, clazz: IntrospectedClass, options: OptionsLoad): void {
		if (element.method) {
			clazz.members.push(...element.method.map((method) => IntrospectedClassFunction.fromXML(method, clazz, options)));
		}
	}

	private static parseFields(element: GirClassElement, clazz: IntrospectedClass): void {
		if (element.field) {
			element.field
				.filter((field) => !("callback" in field))
				.forEach((field) => {
					const f = IntrospectedField.fromXML(field, clazz);
					clazz.fields.push(f);
				});
		}
	}

	private static parseInterfaces(element: GirClassElement, clazz: IntrospectedClass, ns: IntrospectedNamespace): void {
		if (element.implements) {
			element.implements.forEach((implementee) => {
				const name = implementee.$.name;
				const type = parseTypeIdentifier(ns.namespace, name);
				if (type) {
					clazz.interfaces.push(type);
				}
			});
		}
	}

	private static parseCallbacks(
		element: GirClassElement,
		clazz: IntrospectedClass,
		ns: IntrospectedNamespace,
		options: OptionsLoad,
	): void {
		if (element.callback) {
			if (options.verbose) {
				element.callback.forEach((callback) => {
					log.debug(`Adding callback ${callback.$.name} for ${ns.namespace}`);
				});
			}
			clazz.callbacks.push(
				...element.callback.map((callback) => IntrospectedClassCallback.fromXML(callback, clazz, options)),
			);
		}
	}

	private static parseVirtualMethods(element: GirClassElement, clazz: IntrospectedClass, options: OptionsLoad): void {
		if (element["virtual-method"]) {
			clazz.members.push(
				...element["virtual-method"].map((method) => IntrospectedVirtualClassFunction.fromXML(method, clazz, options)),
			);
		}
	}

	private static parseStaticFunctions(element: GirClassElement, clazz: IntrospectedClass, options: OptionsLoad): void {
		if (element.function) {
			clazz.members.push(
				...element.function.map((func) => IntrospectedStaticClassFunction.fromXML(func, clazz, options)),
			);
		}
	}

	registerStaticDefinition(typeStruct: string) {
		this._staticDefinition = typeStruct;
	}

	asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateClass"]> {
		return generator.generateClass(this) as ReturnType<T["generateClass"]>;
	}
}

/**
 * Represents a GIR interface
 */
export class IntrospectedInterface extends IntrospectedBaseClass {
	interfaces: TypeIdentifier[] = [];
	noParent: boolean = false;

	accept(visitor: GirVisitor): IntrospectedInterface {
		const node = this.copy({
			constructors: this.constructors.map((c) => c.accept(visitor)),
			members: this.members.map((m) => m.accept(visitor)),
			props: this.props.map((p) => p.accept(visitor)),
			fields: this.fields.map((f) => f.accept(visitor)),
			callbacks: this.callbacks.map((c) => c.accept(visitor)),
		});
		return visitor.visitInterface?.(node) ?? node;
	}

	someParent(predicate: (b: IntrospectedBaseClass) => boolean): boolean {
		const resolution = this.resolveParents();
		const parent = resolution.extends();
		return !!parent && (predicate(parent.node) || parent.node.someParent(predicate));
	}

	findParent(predicate: (b: IntrospectedBaseClass) => boolean): IntrospectedBaseClass | undefined {
		return this.findParentMap((parent) => {
			if (predicate(parent)) {
				return parent;
			}
			return undefined;
		});
	}

	findParentMap<K>(predicate: (b: IntrospectedBaseClass) => K | undefined): K | undefined {
		const resolution = this.resolveParents();
		const parent = resolution.extends();

		if (parent) {
			const result = predicate(parent.node);
			if (result !== undefined) return result;
			return parent.node.findParentMap(predicate);
		}

		return undefined;
	}

	resolveParents(): InterfaceResolution {
		const self = this;
		return {
			*[Symbol.iterator]() {
				const parentResolution = this.extends();
				if (parentResolution) {
					yield parentResolution;
					yield* parentResolution;
				}
			},
			extends(): InterfaceResolution | ClassResolution | undefined {
				// For interfaces, superType would be the prerequisite
				const resolved_parent = self.superType ? resolveTypeIdentifier(self.namespace, self.superType) : undefined;
				if (resolved_parent instanceof IntrospectedInterface) {
					return resolved_parent.resolveParents();
				}
				if (resolved_parent instanceof IntrospectedClass) {
					return resolved_parent.resolveParents();
				}
				return undefined;
			},
			node: self,
			identifier: self.getType(),
		};
	}

	copy(
		options: {
			parent?: undefined;
			constructors?: IntrospectedConstructor[];
			members?: IntrospectedClassFunction[];
			props?: IntrospectedProperty[];
			fields?: IntrospectedField[];
			callbacks?: IntrospectedClassCallback[];
		} = {},
	): IntrospectedInterface {
		const iface = new IntrospectedInterface({ name: this.name, namespace: this.namespace });

		iface.interfaces = [...this.interfaces];
		iface.superType = this.superType;
		iface.doc = this.doc;
		iface.generics = [...this.generics];

		const {
			constructors = this.constructors,
			members = this.members,
			props = this.props,
			fields = this.fields,
			callbacks = this.callbacks,
		} = options;

		iface.constructors = [...constructors.map((c) => c.copy({ parent: iface }))];
		iface.members = [...members.map((m) => m.copy({ parent: iface }))];
		iface.props = [...props.map((p) => p.copy({ parent: iface }))];
		iface.fields = [...fields.map((f) => f.copy({ parent: iface }))];
		iface.callbacks = [...callbacks.map((c) => c.copy({ parent: iface }))];

		if (this.mainConstructor) {
			iface.mainConstructor = this.mainConstructor.copy({ parent: iface });
		}

		return iface._copyBaseProperties(this);
	}

	static fromXML(
		element: GirInterfaceElement,
		namespace: IntrospectedNamespace,
		options: OptionsLoad,
	): IntrospectedInterface {
		const name = sanitizeIdentifierName(namespace.namespace, element.$.name);
		if (options.verbose) {
			log.debug(`  >> GirInterface: Parsing definition ${element.$.name} (${name})...`);
		}

		const iface = new IntrospectedInterface({ name, namespace });

		IntrospectedInterface.parseInterfaceBasicProperties(element, iface, namespace, options);
		IntrospectedInterface.parseInterfaceResolveNames(element, iface, namespace, name);
		IntrospectedInterface.parseInterfaceMembers(element, iface, namespace, options);

		return iface;
	}

	private static parseInterfaceBasicProperties(
		element: GirInterfaceElement,
		iface: IntrospectedInterface,
		namespace: IntrospectedNamespace,
		options: OptionsLoad,
	): void {
		if (options.loadDocs) {
			iface.doc = parseDoc(element);
			iface.metadata = parseMetadata(element);
		}

		if (element.prerequisite?.[0]) {
			const [prerequisite] = element.prerequisite;
			if (prerequisite.$.name) {
				iface.superType = parseTypeIdentifier(namespace.namespace, prerequisite.$.name);
			}
		}
	}

	private static parseInterfaceResolveNames(
		element: GirInterfaceElement,
		iface: IntrospectedInterface,
		namespace: IntrospectedNamespace,
		name: string,
	): void {
		if (element.$["glib:type-name"]) {
			iface.resolve_names.push(element.$["glib:type-name"]);
			namespace.registerResolveName(element.$["glib:type-name"], namespace.namespace, name);
		}

		if (element.$["c:type"]) {
			iface.resolve_names.push(element.$["c:type"]);
			namespace.registerResolveName(element.$["c:type"], namespace.namespace, name);
		}
	}

	private static parseInterfaceMembers(
		element: GirInterfaceElement,
		iface: IntrospectedInterface,
		namespace: IntrospectedNamespace,
		options: OptionsLoad,
	): void {
		try {
			IntrospectedInterface.parseInterfaceConstructors(element, iface, options);
			IntrospectedInterface.parseInterfaceProperties(element, iface, options);
			IntrospectedInterface.parseInterfaceMethods(element, iface, options);
			IntrospectedInterface.parseInterfaceFields(element, iface);
			IntrospectedInterface.parseInterfaceCallbacks(element, iface, namespace, options);
			IntrospectedInterface.parseInterfaceVirtualMethods(element, iface, options);
			IntrospectedInterface.parseInterfaceStaticFunctions(element, iface, options);
		} catch (e) {
			log.reportParsingFailure(iface.name, "interface", namespace.namespace, e as Error);
		}
	}

	private static parseInterfaceConstructors(
		element: GirInterfaceElement,
		iface: IntrospectedInterface,
		options: OptionsLoad,
	): void {
		if (Array.isArray(element.constructor)) {
			iface.constructors.push(
				...element.constructor.map((constructorElement) =>
					IntrospectedConstructor.fromXML(constructorElement, iface, options),
				),
			);
		}
	}

	private static parseInterfaceProperties(
		element: GirInterfaceElement,
		iface: IntrospectedInterface,
		options: OptionsLoad,
	): void {
		if (!element.property) return;

		element.property.forEach((prop) => {
			const property = IntrospectedProperty.fromXML(prop, iface, options);
			switch (options.propertyCase) {
				case "both": {
					iface.props.push(property);
					const camelCase = property.toCamelCase();
					if (property.name !== camelCase.name) {
						iface.props.push(camelCase);
					}
					break;
				}
				case "camel":
					iface.props.push(property.toCamelCase());
					break;
				case "underscore":
					iface.props.push(property);
					break;
			}
		});
	}

	private static parseInterfaceMethods(
		element: GirInterfaceElement,
		iface: IntrospectedInterface,
		options: OptionsLoad,
	): void {
		if (element.method) {
			iface.members.push(...element.method.map((method) => IntrospectedClassFunction.fromXML(method, iface, options)));
		}
	}

	private static parseInterfaceFields(element: GirInterfaceElement, iface: IntrospectedInterface): void {
		if (element.field) {
			element.field
				.filter((field) => !("callback" in field))
				.forEach((field) => {
					const f = IntrospectedField.fromXML(field, iface);
					iface.fields.push(f);
				});
		}
	}

	private static parseInterfaceCallbacks(
		element: GirInterfaceElement,
		iface: IntrospectedInterface,
		namespace: IntrospectedNamespace,
		options: OptionsLoad,
	): void {
		if (element.callback) {
			if (options.verbose) {
				element.callback.forEach((callback) => {
					log.debug(`Adding callback ${callback.$.name} for ${namespace.namespace}`);
				});
			}
			iface.callbacks.push(
				...element.callback.map((callback) => IntrospectedClassCallback.fromXML(callback, iface, options)),
			);
		}
	}

	private static parseInterfaceVirtualMethods(
		element: GirInterfaceElement,
		iface: IntrospectedInterface,
		options: OptionsLoad,
	): void {
		if (element["virtual-method"]) {
			iface.members.push(
				...element["virtual-method"].map((method) => IntrospectedVirtualClassFunction.fromXML(method, iface, options)),
			);
		}
	}

	private static parseInterfaceStaticFunctions(
		element: GirInterfaceElement,
		iface: IntrospectedInterface,
		options: OptionsLoad,
	): void {
		if (element.function) {
			iface.members.push(
				...element.function.map((func) => IntrospectedStaticClassFunction.fromXML(func, iface, options)),
			);
		}
	}

	asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateInterface"]> {
		return generator.generateInterface(this) as ReturnType<T["generateInterface"]>;
	}
}
