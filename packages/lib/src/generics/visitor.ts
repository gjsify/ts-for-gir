import type { IntrospectedCallback } from "../gir/callback.ts";
import type { IntrospectedEnum } from "../gir/enum.ts";
import { IntrospectedFunction } from "../gir/function.ts";
import { createGenericNameGenerator } from "../gir/generics.ts";
import type { IntrospectedInterface, IntrospectedVirtualClassFunction } from "../gir/introspected-classes.ts";
import {
	IntrospectedBaseClass,
	IntrospectedClass,
	IntrospectedClassFunction,
	IntrospectedStaticClassFunction,
} from "../gir/introspected-classes.ts";
import type { IntrospectedFunctionParameter } from "../gir/parameter.ts";
import type { NSRegistry } from "../gir/registry.ts";
import {
	ClosureType,
	Generic,
	GenericType,
	GenerifiedTypeIdentifier,
	ThisType,
	type TypeExpression,
	TypeIdentifier,
} from "../gir.ts";
import { resolveTypeIdentifier } from "../utils/type-resolution.ts";
import { GirVisitor } from "../visitor.ts";

/**
 * Visitor that handles generic type inference and transformations
 */
export class GenericVisitor extends GirVisitor {
	private readonly registry: NSRegistry;
	private readonly inferGenerics: boolean;

	constructor(registry: NSRegistry, inferGenerics: boolean) {
		super();
		this.registry = registry;
		this.inferGenerics = inferGenerics;
	}

	visitCallback = (node: IntrospectedCallback): IntrospectedCallback => {
		if (!this.inferGenerics) {
			return node;
		}

		const shouldGenerify = this.shouldGenerifyCallback(node);
		if (!shouldGenerify) {
			return node;
		}

		return this.createGenerifiedCallback(node);
	};

	visitClass = (node: IntrospectedClass): IntrospectedClass => {
		return this.visitBaseClass(node);
	};

	visitInterface = (node: IntrospectedInterface): IntrospectedInterface => {
		return this.visitBaseClass(node);
	};

	visitParameter = (node: IntrospectedFunctionParameter): IntrospectedFunctionParameter => {
		if (!this.inferGenerics) {
			return node;
		}

		const unwrapped = node.type.unwrap();
		if (!(unwrapped instanceof ClosureType)) {
			return node;
		}

		return this.processAsyncReadyCallback(node) ?? node;
	};

	visitFunction = (node: IntrospectedFunction): IntrospectedFunction => {
		if (!this.inferGenerics) {
			return node;
		}

		const unwrapped = node.return_type.unwrap();
		const shouldGenerify = unwrapped instanceof TypeIdentifier && unwrapped.is("GObject", "Object");

		if (!shouldGenerify) {
			return node;
		}

		return this.createGenerifiedFunction(node, unwrapped);
	};

	visitStaticClassFunction = (node: IntrospectedStaticClassFunction): IntrospectedStaticClassFunction => {
		if (this.inferGenerics) {
			return this.generifyStandaloneClassFunction(node);
		}
		return node;
	};

	visitClassFunction = <T extends IntrospectedBaseClass | IntrospectedEnum>(
		node: IntrospectedClassFunction<T>,
	): IntrospectedClassFunction<T> => {
		if (node.parent instanceof IntrospectedBaseClass) {
			const processedNode = this.processClassFunctionWithGenerics(node);
			if (processedNode) {
				return processedNode;
			}
		}

		if (this.inferGenerics) {
			return this.generifyStandaloneClassFunction(node);
		}

		return node;
	};

	visitVirtualClassFunction = (node: IntrospectedVirtualClassFunction): IntrospectedVirtualClassFunction => {
		return this.visitClassFunction(node);
	};

	// Private helper methods

	private visitBaseClass<T extends IntrospectedBaseClass>(node: T): T {
		const copiedNode = node.copy() as T;
		const derivatives = copiedNode.generics.filter((generic) => generic.parent != null);

		this.processInterfaces(copiedNode, derivatives);
		this.processSuperType(copiedNode, derivatives);

		return copiedNode;
	}

	private shouldGenerifyCallback(node: IntrospectedCallback): boolean {
		return node.parameters.some((parameter) => this.isGObjectType(parameter.type.unwrap()));
	}

	private isGObjectType(type: TypeExpression): boolean {
		return type instanceof TypeIdentifier && type.is("GObject", "Object");
	}

	private createGenerifiedCallback(node: IntrospectedCallback): IntrospectedCallback {
		const generateName = createGenericNameGenerator();
		const generics: Generic[] = [];

		const generifiedParameters = node.parameters.map((parameter) => {
			const type = parameter.type.unwrap();

			if (this.isGObjectType(type)) {
				const { identifier, generic } = this.createGeneric(generateName(), type as TypeIdentifier);
				generics.push(generic);

				return parameter.copy({
					type: parameter.type.rewrap(identifier),
				});
			}

			return parameter;
		});

		const generifiedCallback = node.copy({
			parameters: generifiedParameters,
		});

		generifiedCallback.generics = generics;
		return generifiedCallback;
	}

	private createGeneric(identifier: string, baseType: TypeIdentifier): { identifier: GenericType; generic: Generic } {
		const genericType = new GenericType(identifier, baseType);
		const generic = new Generic(genericType, baseType);
		return { identifier: genericType, generic };
	}

	private processInterfaces<T extends IntrospectedBaseClass>(node: T, derivatives: Generic[]): void {
		if (!(node instanceof IntrospectedClass)) {
			return;
		}

		const resolvedInterfaces = this.resolveInterfaces(node);
		node.interfaces = node.interfaces.map((iface) =>
			this.processInterface(node, iface, derivatives, resolvedInterfaces),
		);
	}

	private resolveInterfaces(node: IntrospectedClass): IntrospectedBaseClass[] {
		return node.interfaces
			.map((i) => resolveTypeIdentifier(node.namespace, i))
			.filter((c): c is IntrospectedBaseClass => c != null);
	}

	private processInterface<T extends IntrospectedBaseClass>(
		node: T,
		iface: TypeIdentifier,
		derivatives: Generic[],
		resolvedInterfaces: IntrospectedBaseClass[],
	): TypeIdentifier {
		const matchingGenerics = derivatives.filter((d) => d.parent?.is(iface.namespace, iface.name));

		if (matchingGenerics.length > 0) {
			return new GenerifiedTypeIdentifier(
				iface.name,
				iface.namespace,
				matchingGenerics.map((g) => g.type),
			);
		}

		const resolved = resolvedInterfaces.find((i) => i.getType().equals(iface));
		if (resolved) {
			return this.processResolvedInterface(node, iface, resolved);
		}

		return iface;
	}

	private processResolvedInterface<T extends IntrospectedBaseClass>(
		node: T,
		iface: TypeIdentifier,
		resolved: IntrospectedBaseClass,
	): TypeIdentifier {
		if (resolved.generics.length !== 1) {
			return iface;
		}

		const [generic] = resolved.generics;

		if (generic.propagate) {
			return this.handlePropagatingInterfaceGeneric(node, iface, resolved, generic);
		}

		return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [node.getType()]);
	}

	private handlePropagatingInterfaceGeneric<T extends IntrospectedBaseClass>(
		node: T,
		iface: TypeIdentifier,
		resolved: IntrospectedBaseClass,
		generic: Generic,
	): TypeIdentifier {
		const constrainedGeneric = this.findConstrainedGeneric(node, generic);

		if (constrainedGeneric) {
			return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [constrainedGeneric.type]);
		}

		if (this.shouldAddNewGeneric(node, generic)) {
			this.addGenericToNode(node, resolved, generic);
			const firstGeneric = node.generics[node.generics.length - 1];
			return new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.namespace, [firstGeneric.type]);
		}

		return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [node.getType()]);
	}

	private findConstrainedGeneric<T extends IntrospectedBaseClass>(node: T, generic: Generic): Generic | undefined {
		return node.generics.find((d) => generic.constraint && d.constraint?.equals(generic.constraint));
	}

	private shouldAddNewGeneric<T extends IntrospectedBaseClass>(node: T, generic: Generic): boolean {
		return !generic.defaultType?.equals(node.getType()) && !generic.constraint?.equals(node.getType());
	}

	private addGenericToNode<T extends IntrospectedBaseClass>(
		node: T,
		resolved: IntrospectedBaseClass,
		generic: Generic,
	): void {
		node.addGeneric({
			constraint: generic.constraint ?? undefined,
			default: generic.defaultType ?? undefined,
			deriveFrom: resolved.getType(),
		});
	}

	private processSuperType<T extends IntrospectedBaseClass>(node: T, derivatives: Generic[]): void {
		if (!node.superType) {
			return;
		}

		const parentType = node.superType;
		const matchingGenerics = derivatives.filter((d) => d.parent?.is(parentType.namespace, parentType.name));

		if (node.superType instanceof GenerifiedTypeIdentifier) {
			return;
		}

		if (matchingGenerics.length > 0) {
			node.superType = new GenerifiedTypeIdentifier(
				parentType.name,
				parentType.namespace,
				matchingGenerics.map((g) => g.type),
			);
			return;
		}

		const resolvedParent = resolveTypeIdentifier(node.namespace, node.superType);
		this.processResolvedParent(node, resolvedParent);
	}

	private processResolvedParent<T extends IntrospectedBaseClass>(
		node: T,
		resolved: IntrospectedBaseClass | null,
	): void {
		if (!resolved || resolved.generics.length !== 1) {
			return;
		}

		const [generic] = resolved.generics;

		if (generic.propagate) {
			this.handlePropagatingGeneric(node, resolved, generic);
		} else if (this.shouldUseNodeType(node, generic)) {
			node.superType = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.namespace, [node.getType()]);
		}
	}

	private handlePropagatingGeneric<T extends IntrospectedBaseClass>(
		node: T,
		resolved: IntrospectedBaseClass,
		generic: Generic,
	): void {
		const constrainedGeneric = this.findConstrainedGeneric(node, generic);

		if (constrainedGeneric) {
			node.superType = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.namespace, [
				constrainedGeneric.type,
			]);
			return;
		}

		if (this.shouldAddNewGeneric(node, generic)) {
			this.addGenericToNode(node, resolved, generic);
			const firstGeneric = node.generics[node.generics.length - 1];
			node.superType = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.namespace, [firstGeneric.type]);
		} else if (this.shouldUseNodeType(node, generic)) {
			node.superType = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.namespace, [node.getType()]);
		}
	}

	private shouldUseNodeType<T extends IntrospectedBaseClass>(node: T, generic: Generic): boolean {
		return [...node.resolveParents()].some((c) => generic.defaultType && c.identifier.equals(generic.defaultType));
	}

	private processAsyncReadyCallback(node: IntrospectedFunctionParameter): IntrospectedFunctionParameter | null {
		const unwrapped = node.type.unwrap();
		if (!(unwrapped instanceof ClosureType)) {
			return null;
		}

		const internal = unwrapped.type.unwrap();
		if (!(internal instanceof TypeIdentifier) || !internal.is("Gio", "AsyncReadyCallback")) {
			return null;
		}

		const member = node.parent;
		const generifiedType = this.createAsyncReadyCallbackType(member, internal);

		if (generifiedType) {
			return node.copy({
				type: node.type.rewrap(generifiedType),
			});
		}

		return null;
	}

	private createAsyncReadyCallbackType(member: any, internal: TypeIdentifier): GenerifiedTypeIdentifier | null {
		if (member instanceof IntrospectedFunction && member.parameters.length >= 2) {
			return new GenerifiedTypeIdentifier(internal.name, internal.namespace, [member.parameters[0].type]);
		}

		if (member instanceof IntrospectedStaticClassFunction) {
			return new GenerifiedTypeIdentifier(internal.name, internal.namespace, [member.parent.getType()]);
		}

		if (member instanceof IntrospectedClassFunction) {
			return new GenerifiedTypeIdentifier(internal.name, internal.namespace, [ThisType]);
		}

		return null;
	}

	private createGenerifiedFunction(node: IntrospectedFunction, unwrapped: TypeIdentifier): IntrospectedFunction {
		const genericReturnType = new GenericType("T", unwrapped);
		const copied = node.copy({
			return_type: genericReturnType,
		});
		copied.generics.push(new Generic(genericReturnType, unwrapped));
		return copied;
	}

	private generifyStandaloneClassFunction<T extends IntrospectedClassFunction>(node: T): T {
		if (this.shouldSkipFunctionGenerification(node)) {
			return node;
		}

		const unwrapped = node.return().unwrap();

		if (this.isGObjectType(unwrapped)) {
			const genericReturnType = new GenericType("T", unwrapped as TypeIdentifier);
			const copied = node.copy({
				returnType: genericReturnType,
			});
			copied.generics.push(new Generic(genericReturnType, unwrapped as TypeIdentifier, unwrapped as TypeIdentifier));
			return copied as T;
		}

		return node;
	}

	private shouldSkipFunctionGenerification<T extends IntrospectedClassFunction>(node: T): boolean {
		return node.parent.getType().is("GObject", "Object");
	}

	private processClassFunctionWithGenerics<T extends IntrospectedBaseClass | IntrospectedEnum>(
		node: IntrospectedClassFunction<T>,
	): IntrospectedClassFunction<T> | null {
		const clazz = node.parent as IntrospectedBaseClass;

		if (clazz.generics.length === 0) {
			return null;
		}

		const returnType = this.processReturnTypeWithGenerics(node.return(), clazz.generics);

		return node.copy({
			parameters: this.processParametersWithGenerics(node.parameters, clazz.generics),
			outputParameters: this.processOutputParametersWithGenerics(node.output_parameters, clazz.generics),
			returnType,
		});
	}

	private processReturnTypeWithGenerics(returnType: TypeExpression, generics: Generic[]): TypeExpression {
		for (const generic of generics) {
			if (generic.defaultType?.equals(returnType.deepUnwrap())) {
				return returnType.rewrap(generic.type);
			}
		}
		return returnType;
	}

	private processParametersWithGenerics(
		parameters: IntrospectedFunctionParameter[],
		generics: Generic[],
	): IntrospectedFunctionParameter[] {
		return parameters.map((parameter) => this.processParameterWithGenerics(parameter, generics));
	}

	private processParameterWithGenerics(
		parameter: IntrospectedFunctionParameter,
		generics: Generic[],
	): IntrospectedFunctionParameter {
		for (const generic of generics) {
			if (generic.defaultType?.equals(parameter.type.deepUnwrap())) {
				return parameter.copy({
					type: parameter.type.rewrap(generic.type),
				});
			}
		}
		return parameter;
	}

	private processOutputParametersWithGenerics(
		outputParameters: IntrospectedFunctionParameter[],
		generics: Generic[],
	): IntrospectedFunctionParameter[] {
		return outputParameters.map((parameter) => {
			for (const generic of generics) {
				if (generic.defaultType?.equals(parameter.type.unwrap())) {
					return parameter.copy({
						type: parameter.type.rewrap(generic.type),
					});
				}
			}
			return parameter;
		});
	}
}
