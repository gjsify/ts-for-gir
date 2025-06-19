import type { IntrospectedNamespace } from "../gir/namespace.ts";
import type { IntrospectedFunction } from "../gir/function.ts";
import { IntrospectedClassFunction } from "../gir/function.ts";
import { IntrospectedConstructor } from "../gir/function.ts";
import type { TypeIdentifier } from "../gir.ts";
import { isSubtypeOf } from "./index.ts";
import type { IntrospectedBaseClass } from "../gir/introspected-base-class.ts";
import { IntrospectedStaticClassFunction } from "../gir/function.ts";
import { IntrospectedVirtualClassFunction } from "../gir/function.ts";
import { IntrospectedFunctionParameter } from "../gir/function.ts";
import { GirDirection } from "@gi.ts/parser";
import { ArrayType } from "../gir.ts";
import { NeverType } from "../gir.ts";
import { AnyType } from "../gir.ts";
import { Logger } from "../logger.ts";
import { IntrospectedClass } from "../gir/introspected-class.ts";
import { FilterBehavior } from "../gir/data.ts";
import { findMap } from "../util.ts";
import { ConflictType, TypeConflict } from "../gir.ts";
import { IntrospectedProperty } from "../gir/property.ts";
import { IntrospectedField } from "../gir/property.ts";
import { IntrospectedClassMember } from "../gir/introspected-class-member.ts";

const log = new Logger(true, "gir/utils/conflicts");

export function isConflictingFunction(
  namespace: IntrospectedNamespace,
  childThis: TypeIdentifier,
  child: IntrospectedFunction | IntrospectedClassFunction | IntrospectedConstructor,
  parentThis: TypeIdentifier,
  parent: IntrospectedClassFunction | IntrospectedFunction | IntrospectedConstructor
) {
  if (!parent.isIntrospectable || !child.isIntrospectable) return false;

  if (child instanceof IntrospectedConstructor && parent instanceof IntrospectedConstructor) {
      return (
          child.parameters.length > parent.parameters.length ||
          !isSubtypeOf(namespace, childThis, parentThis, child.return(), parent.return()) ||
          child.parameters.some(
              (p, i) => !isSubtypeOf(namespace, childThis, parentThis, p.type, parent.parameters[i].type)
          )
      );
  } else if (child instanceof IntrospectedConstructor || parent instanceof IntrospectedConstructor) {
      return true;
  }

  // This occurs if two functions of the same name are passed but they
  // are different types (e.g. GirStaticClassFunction vs GirClassFunction)
  if (Object.getPrototypeOf(child) !== Object.getPrototypeOf(parent)) {
      return false;
  }

  return (
      child.parameters.length > parent.parameters.length ||
      child.output_parameters.length !== parent.output_parameters.length ||
      !isSubtypeOf(namespace, childThis, parentThis, child.return(), parent.return()) ||
      child.parameters.some(
          (np, i) => !isSubtypeOf(namespace, childThis, parentThis, np.type, parent.parameters[i].type)
      ) ||
      child.output_parameters.some(
          (np, i) => !isSubtypeOf(namespace, childThis, parentThis, np.type, parent.output_parameters[i].type)
      )
  );
}

export function filterFunctionConflict<
  T extends
      | IntrospectedStaticClassFunction
      | IntrospectedVirtualClassFunction
      | IntrospectedClassFunction
      | IntrospectedConstructor
>(ns: IntrospectedNamespace, base: IntrospectedBaseClass, elements: T[], conflict_ids: string[]) {
  const nextType = base.getType();
  return elements
      .filter(m => m.name)
      .reduce((prev, next) => {
          // TODO This should catch most of them.
          let msg: string | null = null;
          let conflicts =
              conflict_ids.includes(next.name) ||
              base.someParent(resolved_parent => {
                  const parentType = resolved_parent.getType();
                  return [...resolved_parent.constructors, ...resolved_parent.members].some(p => {
                      if (p.name && p.name == next.name) {
                          const conflicting = isConflictingFunction(ns, nextType, next, parentType, p);

                          if (conflicting) {
                              msg = `// Conflicted with ${resolved_parent.namespace.namespace}.${resolved_parent.name}.${p.name}`;
                              return true;
                          }
                          return conflicting;
                      }
                      return false;
                  });
              });

          // Check if the method name conflicts with any props or fields either on
          // the class or in the parent...
          const field_conflicts =
              [...base.props, ...base.fields].some(p => p.name && p.name === next.name) ||
              base.someParent(resolved_parent =>
                  [...resolved_parent.props, ...resolved_parent.fields].some(p => p.name && p.name === next.name)
              );

          const isGObject = base.someParent(p => p.namespace.namespace === "GObject" && p.name === "Object");

          if (isGObject) {
              conflicts = conflicts || ["connect", "connect_after", "emit"].includes(next.name);
          }

          if (conflicts) {
              let never:
                  | IntrospectedConstructor
                  | IntrospectedFunction
                  | IntrospectedClassFunction
                  | IntrospectedStaticClassFunction
                  | IntrospectedVirtualClassFunction;

              const never_param = new IntrospectedFunctionParameter({
                  name: "args",
                  direction: GirDirection.In,
                  isVarArgs: true,
                  type: new ArrayType(NeverType)
              });

              const neverOptions = {
                  name: next.name,
                  parent: base,
                  parameters: [never_param],
                  return_type: AnyType
              };

              if (next instanceof IntrospectedConstructor) {
                  never = new IntrospectedConstructor(neverOptions);
              } else if (next instanceof IntrospectedStaticClassFunction) {
                  never = new IntrospectedStaticClassFunction({ ...neverOptions, parent: next.parent });
              } else if (
                  next instanceof IntrospectedVirtualClassFunction &&
                  next.parent instanceof IntrospectedClass
              ) {
                  never = new IntrospectedVirtualClassFunction({ ...neverOptions, parent: next.parent });
              } else if (next instanceof IntrospectedClassFunction) {
                  never = new IntrospectedClassFunction({ ...neverOptions, parent: next.parent });
              } else {
                  const parent = Object.getPrototypeOf(next as (...args: unknown[]) => unknown) as
                      | ((...args: unknown[]) => unknown)
                      | null
                      | undefined;
                  throw new Error(`Unknown function type ${parent?.name} encountered.`);
              }

              if (msg) never.setWarning(msg);

              prev.push(next, never as T);
          } else if (field_conflicts) {
              log.warn(`Omitting ${next.name} due to field or property conflict.`);
          } else {
              prev.push(next);
          }

          return prev;
      }, [] as T[]);
}


export function filterConflicts<T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty>(
  ns: IntrospectedNamespace,
  c: IntrospectedBaseClass,
  elements: T[],
  behavior = FilterBehavior.PRESERVE
): T[] {
  const filtered = [...elements.filter(p => p && p.name)];
  const prev = [] as T[];
  const thisType = c.getType();
  for (const next of filtered) {
      const field_conflicts = c.findParentMap(resolved_parent => {
          return findMap([...resolved_parent.fields], p => {
              if (p.name && p.name == next.name) {
                  if (next instanceof IntrospectedProperty) {
                      return ConflictType.ACCESSOR_PROPERTY_CONFLICT;
                  }

                  if (
                      next instanceof IntrospectedField &&
                      !isSubtypeOf(ns, thisType, resolved_parent.getType(), next.type, p.type)
                  ) {
                      return ConflictType.FIELD_NAME_CONFLICT;
                  }
              }

              return undefined;
          });
      });

      const prop_conflicts = !field_conflicts
          ? c.findParentMap(resolved_parent => {
                return findMap([...resolved_parent.props], p => {
                    if (p.name && p.name == next.name) {
                        // TODO: This is very TypeScript-specific but until we include which parent
                        // a conflict originates from in the return, we have to handle this here
                        // and not in the generator...
                        //
                        // Classes can override parent interface accessors with properties _but_
                        // classes cannot override parent class accessors with properties without
                        // an error occuring.
                        if (p.parent instanceof IntrospectedClass && next instanceof IntrospectedField) {
                            return ConflictType.PROPERTY_ACCESSOR_CONFLICT;
                        }

                        if (
                            next instanceof IntrospectedProperty &&
                            !isSubtypeOf(ns, thisType, resolved_parent.getType(), next.type, p.type)
                        ) {
                            log.warn(
                                `>> Conflict in ${next.parent?.name}.${next.name} with ${p.parent?.name}.${p.name}.`
                            );
                            return ConflictType.PROPERTY_NAME_CONFLICT;
                        }
                    }

                    return undefined;
                });
            })
          : undefined;

      const function_conflicts =
          !field_conflicts && !prop_conflicts
              ? c.findParentMap(resolved_parent =>
                    findMap([...resolved_parent.constructors, ...resolved_parent.members], p => {
                        if (p.name && p.name == next.name) {
                            if (
                                !(next instanceof IntrospectedClassFunction) ||
                                isConflictingFunction(ns, thisType, next, resolved_parent.getType(), p)
                            ) {
                                return ConflictType.FUNCTION_NAME_CONFLICT;
                            }
                        }

                        return undefined;
                    })
                )
              : undefined;
      const conflict = field_conflicts || prop_conflicts || function_conflicts;
      if (conflict) {
          if (behavior === FilterBehavior.PRESERVE) {
              if (next instanceof IntrospectedField || next instanceof IntrospectedProperty) {
                  prev.push(
                      next.copy({
                          type: new TypeConflict(next.type, conflict)
                      }) as T
                  );
              } else {
                  prev.push(next);
              }
          }
      } else {
          prev.push(next);
      }
  }

  return prev;
}