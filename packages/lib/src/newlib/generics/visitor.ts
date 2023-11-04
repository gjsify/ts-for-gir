import {
  ClosureType,
  GenericType,
  Generic,
  TypeIdentifier,
  GenerifiedTypeIdentifier,
  ThisType
} from "../gir.js";
import { GirClass, GirBaseClass, GirInterface } from "../gir/class.js";
import {
  GirCallback,
  GirFunctionParameter,
  GirFunction,
  GirClassFunction,
  GirStaticClassFunction,
  GirVirtualClassFunction
} from "../gir/function.js";
import { GenericNameGenerator } from "../gir/generics.js";
import { GirNSRegistry } from "../gir/registry.js";
import { resolveTypeIdentifier } from "../gir/util.js";
import { GirVisitor } from "../visitor.js";

export class GenericVisitor extends GirVisitor {
  registry: GirNSRegistry;
  inferGenerics: boolean;

  constructor(registry: GirNSRegistry, inferGenerics: boolean) {
    super();

    this.registry = registry;
    this.inferGenerics = inferGenerics;
  }

  visitCallback = (node: GirCallback) => {
    if (!this.inferGenerics) {
      return node;
    }

    const shouldGenerify = node.parameters.some(p => {
      const type = p.type.unwrap();
      return type instanceof TypeIdentifier && type.is("GObject", "Object");
    });

    if (shouldGenerify) {
      const generateName = GenericNameGenerator.new();

      let generics = [] as Generic[];

      const GenerifiedParameters = node.parameters.map(p => {
        const type = p.type.unwrap();

        if (type instanceof TypeIdentifier && type.is("GObject", "Object")) {
          const Identifier = generateName();
          const generic = new GenericType(Identifier, type);
          generics.push(new Generic(generic, type));

          return p.copy({
            type: p.type.rewrap(generic)
          });
        }

        return p;
      });

      const generified = node.copy({
        parameters: GenerifiedParameters
      });

      generified.generics = generics;

      return generified;
    }

    return node;
  };

  visitClass = (node: GirClass) => {
    return this.visitBaseClass(node);
  };

  visitInterface = (node: GirInterface) => {
    return this.visitBaseClass(node);
  };

  visitBaseClass = <T extends GirBaseClass>(_node: T): T => {
    const node = _node.copy() as T;

    const { namespace } = _node;

    const resolvedParent = node.parent ? resolveTypeIdentifier(namespace, node.parent) : null;
    let derivatives = node.generics.filter(generic => generic.parent != null);

    if (node instanceof GirClass) {
      const resolvedInterfaces = node.interfaces
        .map(i => resolveTypeIdentifier(namespace, i))
        .filter((c): c is GirBaseClass => c != null);

      node.interfaces = node.interfaces.map(iface => {
        const generic = derivatives.filter(d => d.parent?.is(iface.namespace, iface.name));

        if (generic.length > 0) {
          return new GenerifiedTypeIdentifier(
            iface.name,
            iface.namespace,
            generic.map(g => g.type)
          );
        }

        const resolved = resolvedInterfaces.find(i => i.getType().equals(iface));

        if (resolved) {
          if (resolved.generics.length === 1) {
            const generic = resolved.generics[0];

            if (generic.propagate) {
              const constrainedGeneric = node.generics.find(
                d => generic.constraint && d.constraint?.equals(generic.constraint)
              );

              if (constrainedGeneric) {
                return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [constrainedGeneric.type]);
              }

              if (
                !generic.defaultType?.equals(node.getType()) &&
                !generic.constraint?.equals(node.getType())
              ) {
                node.addGeneric({
                  constraint: generic.constraint ?? undefined,
                  default: generic.defaultType ?? undefined,
                  deriveFrom: resolved.getType()
                });

                const firstGeneric = node.generics[node.generics.length - 1];

                return new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.name, [
                  firstGeneric.type
                ]);
              }
            }

            return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [node.getType()]);
          }
        }

        return iface;
      });
    }

    if (node.parent) {
      const parentType = node.parent;

      const generic = derivatives.filter(d => d.parent?.is(parentType.namespace, parentType.name));

      if (node.parent instanceof GenerifiedTypeIdentifier) {
        // Do nothing
      } else if (generic.length > 0) {
        node.parent = new GenerifiedTypeIdentifier(
          parentType.name,
          parentType.namespace,
          generic.map(g => g.type)
        );
      } else {
        const resolved = resolvedParent;

        if (resolved?.generics.length === 1) {
          const [generic] = resolved.generics;

          if (generic.propagate) {
            const constrainedGeneric = node.generics.find(
              d => generic.constraint && d.constraint?.equals(generic.constraint)
            );

            if (constrainedGeneric) {
              node.parent = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.name, [
                constrainedGeneric.type
              ]);
            } else {
              if (
                !generic.defaultType?.equals(node.getType()) &&
                !generic.constraint?.equals(node.getType())
              ) {
                node.addGeneric({
                  constraint: generic.constraint ?? undefined,
                  default: generic.defaultType ?? undefined,
                  deriveFrom: resolved.getType()
                });

                const firstGeneric = node.generics[node.generics.length - 1];

                node.parent = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.name, [
                  firstGeneric.type
                ]);
              } else if (
                [...node.resolveParents()].some(
                  c => generic.defaultType && c.identifier.equals(generic.defaultType)
                )
              ) {
                node.parent = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.name, [
                  node.getType()
                ]);
              }
            }
          } else if (
            [...node.resolveParents()].some(
              c => generic.defaultType && c.identifier.equals(generic.defaultType)
            )
          ) {
            node.parent = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.name, [
              node.getType()
            ]);
          }
        }
      }
    }

    return node;
  };

  visitParameter = (node: GirFunctionParameter) => {
    const { inferGenerics } = this;

    const member = node.parent;

    const unwrapped = node.type.unwrap();
    // TODO I need a better system for this, but handling Gio.AsyncReadyCallback is the most common.

    if (inferGenerics && unwrapped instanceof ClosureType) {
      const internal = unwrapped.type.unwrap();

      if (internal instanceof TypeIdentifier && internal.is("Gio", "AsyncReadyCallback")) {
        if (member instanceof GirFunction && member.parameters.length >= 2) {
          const generified = node.copy({
            type: node.type.rewrap(
              new GenerifiedTypeIdentifier(internal.name, internal.namespace, [member.parameters[0].type])
            )
          });

          return generified;
        } else if (member instanceof GirStaticClassFunction) {
          const generified = node.copy({
            type: node.type.rewrap(
              new GenerifiedTypeIdentifier(internal.name, internal.namespace, [member.parent.getType()])
            )
          });

          return generified;
        } else if (member instanceof GirClassFunction) {
          const generified = node.copy({
            type: node.type.rewrap(
              new GenerifiedTypeIdentifier(internal.name, internal.namespace, [ThisType])
            )
          });

          return generified;
        }
      }
    }

    return node;
  };

  visitFunction = (node: GirFunction) => {
    if (!this.inferGenerics) {
      return node;
    }

    const unwrapped = node.return_type.unwrap();
    const shouldGenerify = unwrapped instanceof TypeIdentifier && unwrapped.is("GObject", "Object");

    if (shouldGenerify) {
      const genericReturnType = new GenericType("T", unwrapped);

      const copied = node.copy({
        return_type: genericReturnType
      });

      copied.generics.push(new Generic(genericReturnType, unwrapped));

      return copied;
    }

    return node;
  };

  private generifyStandaloneClassFunction = (node: GirClassFunction) => {
    const unwrapped = node.return().unwrap();

    if (node.parent.getType().is("GObject", "Object")) {
      return node;
    }

    if (unwrapped instanceof TypeIdentifier && unwrapped.is("GObject", "Object")) {
      const genericReturnType = new GenericType("T", unwrapped);

      const copied = node.copy({
        returnType: genericReturnType
      });

      copied.generics.push(new Generic(genericReturnType, unwrapped, unwrapped));

      return copied;
    }

    return node;
  };

  visitStaticClassFunction = (node: GirStaticClassFunction) => {
    if (this.inferGenerics) {
      return this.generifyStandaloneClassFunction(node);
    }

    return node;
  };

  visitClassFunction = (node: GirClassFunction) => {
    if (node.parent instanceof GirBaseClass) {
      const clazz = node.parent;

      if (clazz.generics.length > 0) {
        let returnType = node.return();

        for (const generic of clazz.generics) {
          if (generic.defaultType?.equals(node.return().deepUnwrap())) {
            returnType = node.return().rewrap(generic.type);
            break;
          }
        }

        return node.copy({
          parameters: node.parameters.map(p => {
            for (const generic of clazz.generics) {
              if (generic.defaultType?.equals(p.type.deepUnwrap())) {
                return p.copy({
                  type: p.type.rewrap(generic.type)
                });
              }
            }

            return p;
          }),
          outputParameters: node.output_parameters.map(p => {
            for (const generic of clazz.generics) {
              if (generic.defaultType?.equals(p.type.unwrap())) {
                return p.copy({
                  type: p.type.rewrap(generic.type)
                });
              }
            }

            return p;
          }),
          returnType
        });
      }
    }

    if (this.inferGenerics) {
      return this.generifyStandaloneClassFunction(node);
    }

    return node;
  };

  visitVirtualClassFunction = (node: GirVirtualClassFunction) => {
    return this.visitClassFunction(node);
  };
}
