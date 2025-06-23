import type { IntrospectedCallback } from '../gir/callback.ts'
import type { IntrospectedEnum } from '../gir/enum.ts'
import { IntrospectedFunction } from '../gir/function.ts'
import { GenericNameGenerator } from '../gir/generics.ts'
import type { IntrospectedInterface, IntrospectedVirtualClassFunction } from '../gir/introspected-classes.ts'
import {
    IntrospectedBaseClass,
    IntrospectedClass,
    IntrospectedClassFunction,
    IntrospectedStaticClassFunction,
} from '../gir/introspected-classes.ts'
import type { IntrospectedFunctionParameter } from '../gir/parameter.ts'
import type { NSRegistry } from '../gir/registry.ts'
import { ClosureType, Generic, GenericType, GenerifiedTypeIdentifier, ThisType, TypeIdentifier } from '../gir.ts'
import { resolveTypeIdentifier } from '../utils/type-resolution.ts'
import { GirVisitor } from '../visitor.ts'

export class GenericVisitor extends GirVisitor {
    registry: NSRegistry
    inferGenerics: boolean

    constructor(registry: NSRegistry, inferGenerics: boolean) {
        super()

        this.registry = registry
        this.inferGenerics = inferGenerics
    }

    visitCallback = (node: IntrospectedCallback) => {
        if (!this.inferGenerics) {
            return node
        }

        const shouldGenerify = node.parameters.some((p) => {
            const type = p.type.unwrap()
            return type instanceof TypeIdentifier && type.is('GObject', 'Object')
        })

        if (shouldGenerify) {
            const generateName = GenericNameGenerator.new()

            const generics = [] as Generic[]

            const GenerifiedParameters = node.parameters.map((p) => {
                const type = p.type.unwrap()

                if (type instanceof TypeIdentifier && type.is('GObject', 'Object')) {
                    const Identifier = generateName()
                    const generic = new GenericType(Identifier, type)
                    generics.push(new Generic(generic, type))

                    return p.copy({
                        type: p.type.rewrap(generic),
                    })
                }

                return p
            })

            const generified = node.copy({
                parameters: GenerifiedParameters,
            })

            generified.generics = generics

            return generified
        }

        return node
    }

    visitClass = (node: IntrospectedClass) => {
        return this.visitBaseClass(node)
    }

    visitInterface = (node: IntrospectedInterface) => {
        return this.visitBaseClass(node)
    }

    visitBaseClass = <T extends IntrospectedBaseClass>(_node: T): T => {
        const node = _node.copy() as T

        const { namespace } = _node

        const resolvedParent = node.superType ? resolveTypeIdentifier(namespace, node.superType) : null
        const derivatives = node.generics.filter((generic) => generic.parent != null)

        if (node instanceof IntrospectedClass) {
            const resolvedInterfaces = node.interfaces
                .map((i) => resolveTypeIdentifier(namespace, i))
                .filter((c): c is IntrospectedBaseClass => c != null)

            node.interfaces = node.interfaces.map((iface) => {
                const generic = derivatives.filter((d) => d.parent?.is(iface.namespace, iface.name))

                if (generic.length > 0) {
                    return new GenerifiedTypeIdentifier(
                        iface.name,
                        iface.namespace,
                        generic.map((g) => g.type),
                    )
                }

                const resolved = resolvedInterfaces.find((i) => i.getType().equals(iface))

                if (resolved) {
                    if (resolved.generics.length === 1) {
                        const generic = resolved.generics[0]

                        if (generic.propagate) {
                            const constrainedGeneric = node.generics.find(
                                (d) => generic.constraint && d.constraint?.equals(generic.constraint),
                            )

                            if (constrainedGeneric) {
                                return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [
                                    constrainedGeneric.type,
                                ])
                            }

                            if (
                                !generic.defaultType?.equals(node.getType()) &&
                                !generic.constraint?.equals(node.getType())
                            ) {
                                node.addGeneric({
                                    constraint: generic.constraint ?? undefined,
                                    default: generic.defaultType ?? undefined,
                                    deriveFrom: resolved.getType(),
                                })

                                const firstGeneric = node.generics[node.generics.length - 1]

                                return new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.namespace, [
                                    firstGeneric.type,
                                ])
                            }
                        }

                        return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [node.getType()])
                    }
                }

                return iface
            })
        }

        if (node.superType) {
            const parentType = node.superType

            const generic = derivatives.filter((d) => d.parent?.is(parentType.namespace, parentType.name))

            if (node.superType instanceof GenerifiedTypeIdentifier) {
                // Do nothing
            } else if (generic.length > 0) {
                node.superType = new GenerifiedTypeIdentifier(
                    parentType.name,
                    parentType.namespace,
                    generic.map((g) => g.type),
                )
            } else {
                const resolved = resolvedParent

                if (resolved?.generics.length === 1) {
                    const [generic] = resolved.generics

                    if (generic.propagate) {
                        const constrainedGeneric = node.generics.find(
                            (d) => generic.constraint && d.constraint?.equals(generic.constraint),
                        )

                        if (constrainedGeneric) {
                            node.superType = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.namespace, [
                                constrainedGeneric.type,
                            ])
                        } else {
                            if (
                                !generic.defaultType?.equals(node.getType()) &&
                                !generic.constraint?.equals(node.getType())
                            ) {
                                node.addGeneric({
                                    constraint: generic.constraint ?? undefined,
                                    default: generic.defaultType ?? undefined,
                                    deriveFrom: resolved.getType(),
                                })

                                const firstGeneric = node.generics[node.generics.length - 1]

                                node.superType = new GenerifiedTypeIdentifier(
                                    resolved.name,
                                    resolved.namespace.namespace,
                                    [firstGeneric.type],
                                )
                            } else if (
                                [...node.resolveParents()].some(
                                    (c) => generic.defaultType && c.identifier.equals(generic.defaultType),
                                )
                            ) {
                                node.superType = new GenerifiedTypeIdentifier(
                                    resolved.name,
                                    resolved.namespace.namespace,
                                    [node.getType()],
                                )
                            }
                        }
                    } else if (
                        [...node.resolveParents()].some(
                            (c) => generic.defaultType && c.identifier.equals(generic.defaultType),
                        )
                    ) {
                        node.superType = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.namespace, [
                            node.getType(),
                        ])
                    }
                }
            }
        }

        return node
    }

    visitParameter = (node: IntrospectedFunctionParameter) => {
        const { inferGenerics } = this

        const member = node.parent

        const unwrapped = node.type.unwrap()
        // TODO I need a better system for this, but handling Gio.AsyncReadyCallback is the most common.

        if (inferGenerics && unwrapped instanceof ClosureType) {
            const internal = unwrapped.type.unwrap()

            if (internal instanceof TypeIdentifier && internal.is('Gio', 'AsyncReadyCallback')) {
                if (member instanceof IntrospectedFunction && member.parameters.length >= 2) {
                    const generified = node.copy({
                        type: node.type.rewrap(
                            new GenerifiedTypeIdentifier(internal.name, internal.namespace, [
                                member.parameters[0].type,
                            ]),
                        ),
                    })

                    return generified
                } else if (member instanceof IntrospectedStaticClassFunction) {
                    const generified = node.copy({
                        type: node.type.rewrap(
                            new GenerifiedTypeIdentifier(internal.name, internal.namespace, [member.parent.getType()]),
                        ),
                    })

                    return generified
                } else if (member instanceof IntrospectedClassFunction) {
                    const generified = node.copy({
                        type: node.type.rewrap(
                            new GenerifiedTypeIdentifier(internal.name, internal.namespace, [ThisType]),
                        ),
                    })

                    return generified
                }
            }
        }

        return node
    }

    visitFunction = (node: IntrospectedFunction) => {
        if (!this.inferGenerics) {
            return node
        }

        const unwrapped = node.return_type.unwrap()
        const shouldGenerify = unwrapped instanceof TypeIdentifier && unwrapped.is('GObject', 'Object')

        if (shouldGenerify) {
            const genericReturnType = new GenericType('T', unwrapped)

            const copied = node.copy({
                return_type: genericReturnType,
            })

            copied.generics.push(new Generic(genericReturnType, unwrapped))

            return copied
        }

        return node
    }

    private generifyStandaloneClassFunction = <T extends IntrospectedClassFunction>(node: T): T => {
        const unwrapped = node.return().unwrap()

        if (node.parent.getType().is('GObject', 'Object')) {
            return node
        }

        if (unwrapped instanceof TypeIdentifier && unwrapped.is('GObject', 'Object')) {
            const genericReturnType = new GenericType('T', unwrapped)

            const copied = node.copy({
                returnType: genericReturnType,
            })

            copied.generics.push(new Generic(genericReturnType, unwrapped, unwrapped))

            // TODO: .copy() isn't generic.
            return copied as T
        }

        return node
    }

    visitStaticClassFunction = (node: IntrospectedStaticClassFunction) => {
        if (this.inferGenerics) {
            return this.generifyStandaloneClassFunction(node)
        }

        return node
    }

    visitClassFunction = <T extends IntrospectedBaseClass | IntrospectedEnum>(node: IntrospectedClassFunction<T>) => {
        if (node.parent instanceof IntrospectedBaseClass) {
            const clazz = node.parent

            if (clazz.generics.length > 0) {
                let returnType = node.return()

                for (const generic of clazz.generics) {
                    if (generic.defaultType?.equals(node.return().deepUnwrap())) {
                        returnType = node.return().rewrap(generic.type)
                        break
                    }
                }

                return node.copy({
                    parameters: node.parameters.map((p) => {
                        for (const generic of clazz.generics) {
                            if (generic.defaultType?.equals(p.type.deepUnwrap())) {
                                return p.copy({
                                    type: p.type.rewrap(generic.type),
                                })
                            }
                        }

                        return p
                    }),
                    outputParameters: node.output_parameters.map((p) => {
                        for (const generic of clazz.generics) {
                            if (generic.defaultType?.equals(p.type.unwrap())) {
                                return p.copy({
                                    type: p.type.rewrap(generic.type),
                                })
                            }
                        }

                        return p
                    }),
                    returnType,
                })
            }
        }

        if (this.inferGenerics) {
            return this.generifyStandaloneClassFunction(node)
        }

        return node
    }

    visitVirtualClassFunction = (node: IntrospectedVirtualClassFunction) => {
        return this.visitClassFunction(node)
    }
}
