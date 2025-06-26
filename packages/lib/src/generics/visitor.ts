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
import { ClosureType, Generic, GenericType, GenerifiedTypeIdentifier, ThisType, TypeIdentifier } from "../gir.ts";
import { resolveTypeIdentifier } from "../utils/type-resolution.ts";
import { GirVisitor } from "../visitor.ts";

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
		return node.parameters.some((p) => {
			const type = p.type.unwrap();
			return type instanceof TypeIdentifier && type.is("GObject", "Object");
		});
	}

	private createGenerifiedCallback(node: IntrospectedCallback): IntrospectedCallback {
		const generateName = createGenericNameGenerator();
		const generics: Generic[] = [];

		const generifiedParameters = node.parameters.map((p) => {
			const type = p.type.unwrap();

			if (type instanceof TypeIdentifier && type.is("GObject", "Object")) {
				const identifier = generateName();
				const generic = new GenericType(identifier, type);
				generics.push(new Generic(generic, type));

				return p.copy({
					type: p.type.rewrap(generic),
				});
			}

			return p;
		});

		const generified = node.copy({
			parameters: generifiedParameters,
		});

		generified.generics = generics;
		return generified;
	}

	private processInterfaces<T extends IntrospectedBaseClass>(node: T, derivatives: Generic[]): void {
		if (!(node instanceof IntrospectedClass)) {
			return;
		}

		const resolvedInterfaces = node.interfaces
			.map((i) => resolveTypeIdentifier(node.namespace, i))
			.filter((c): c is IntrospectedBaseClass => c != null);

		node.interfaces = node.interfaces.map((iface) => {
			const generic = derivatives.filter((d) => d.parent?.is(iface.namespace, iface.name));

			if (generic.length > 0) {
				return new GenerifiedTypeIdentifier(
					iface.name,
					iface.namespace,
					generic.map((g) => g.type),
				);
			}

			const resolved = resolvedInterfaces.find((i) => i.getType().equals(iface));
			if (resolved) {
				return this.processResolvedInterface(node, iface, resolved);
			}

			return iface;
		});
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
			const constrainedGeneric = node.generics.find(
				(d) => generic.constraint && d.constraint?.equals(generic.constraint),
			);

			if (constrainedGeneric) {
				return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [constrainedGeneric.type]);
			}

			if (!generic.defaultType?.equals(node.getType()) && !generic.constraint?.equals(node.getType())) {
				node.addGeneric({
					constraint: generic.constraint ?? undefined,
					default: generic.defaultType ?? undefined,
					deriveFrom: resolved.getType(),
				});

				const firstGeneric = node.generics[node.generics.length - 1];
				return new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.namespace, [firstGeneric.type]);
			}
		}

		return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [node.getType()]);
	}

	private processSuperType<T extends IntrospectedBaseClass>(node: T, derivatives: Generic[]): void {
		if (!node.superType) {
			return;
		}

		const parentType = node.superType;
		const generic = derivatives.filter((d) => d.parent?.is(parentType.namespace, parentType.name));

		if (node.superType instanceof GenerifiedTypeIdentifier) {
			return;
		}

		if (generic.length > 0) {
			node.superType = new GenerifiedTypeIdentifier(
				parentType.name,
				parentType.namespace,
				generic.map((g) => g.type),
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
		const constrainedGeneric = node.generics.find(
			(d) => generic.constraint && d.constraint?.equals(generic.constraint),
		);

		if (constrainedGeneric) {
			node.superType = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.namespace, [
				constrainedGeneric.type,
			]);
			return;
		}

		if (!generic.defaultType?.equals(node.getType()) && !generic.constraint?.equals(node.getType())) {
			node.addGeneric({
				constraint: generic.constraint ?? undefined,
				default: generic.defaultType ?? undefined,
				deriveFrom: resolved.getType(),
			});

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

		if (member instanceof IntrospectedFunction && member.parameters.length >= 2) {
			return node.copy({
				type: node.type.rewrap(
					new GenerifiedTypeIdentifier(internal.name, internal.namespace, [member.parameters[0].type]),
				),
			});
		}

		if (member instanceof IntrospectedStaticClassFunction) {
			return node.copy({
				type: node.type.rewrap(
					new GenerifiedTypeIdentifier(internal.name, internal.namespace, [member.parent.getType()]),
				),
			});
		}

		if (member instanceof IntrospectedClassFunction) {
			return node.copy({
				type: node.type.rewrap(new GenerifiedTypeIdentifier(internal.name, internal.namespace, [ThisType])),
			});
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
		const unwrapped = node.return().unwrap();

		if (node.parent.getType().is("GObject", "Object")) {
			return node;
		}

		if (unwrapped instanceof TypeIdentifier && unwrapped.is("GObject", "Object")) {
			const genericReturnType = new GenericType("T", unwrapped);
			const copied = node.copy({
				returnType: genericReturnType,
			});
			copied.generics.push(new Generic(genericReturnType, unwrapped, unwrapped));
			return copied as T;
		}

		return node;
	}

	private processClassFunctionWithGenerics<T extends IntrospectedBaseClass | IntrospectedEnum>(
		node: IntrospectedClassFunction<T>,
	): IntrospectedClassFunction<T> | null {
		const clazz = node.parent as IntrospectedBaseClass;

		if (clazz.generics.length === 0) {
			return null;
		}

		let returnType = node.return();

		for (const generic of clazz.generics) {
			if (generic.defaultType?.equals(node.return().deepUnwrap())) {
				returnType = node.return().rewrap(generic.type);
				break;
			}
		}

		return node.copy({
			parameters: this.processParametersWithGenerics(node.parameters, clazz.generics),
			outputParameters: this.processOutputParametersWithGenerics(node.output_parameters, clazz.generics),
			returnType,
		});
	}

	private processParametersWithGenerics(
		parameters: IntrospectedFunctionParameter[],
		generics: Generic[],
	): IntrospectedFunctionParameter[] {
		return parameters.map((p) => {
			for (const generic of generics) {
				if (generic.defaultType?.equals(p.type.deepUnwrap())) {
					return p.copy({
						type: p.type.rewrap(generic.type),
					});
				}
			}
			return p;
		});
	}

	private processOutputParametersWithGenerics(
		outputParameters: IntrospectedFunctionParameter[],
		generics: Generic[],
	): IntrospectedFunctionParameter[] {
		return outputParameters.map((p) => {
			for (const generic of generics) {
				if (generic.defaultType?.equals(p.type.unwrap())) {
					return p.copy({
						type: p.type.rewrap(generic.type),
					});
				}
			}
			return p;
		});
	}
}
