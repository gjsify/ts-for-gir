import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { IntrospectedBaseClass } from "../gir/introspected-base-class.ts";
import { TwoKeyMap } from "../util.ts";
import { 
    TypeIdentifier, 
    TypeExpression, 
    GenericType, 
    AnyType,
    ThisType
} from "../gir.ts";

/**
 * Resolves a class identifier.
 *
 * If the identifier is a class type it is returned,
 * otherwise `null`.
 *
 * @param namespace
 * @param type
 */
export function resolveTypeIdentifier(
    namespace: IntrospectedNamespace,
    type: TypeIdentifier
): IntrospectedBaseClass | null {
    const ns = type.namespace;
    const name = type.name;

    const resolved_ns = namespace.assertInstalledImport(ns);

    const pclass = resolved_ns.getClass(name);
    if (pclass) {
        return pclass;
    } else {
        return null;
    }
}

/**
 * Checks if two type expressions are in conflict (not equal)
 * @param a
 * @param b
 */
function isTypeConflict(a: TypeExpression, b: TypeExpression) {
    return !a.equals(b) || !b.equals(a);
}

/**
 * Checks if a given type expression in the context of a given this type
 * is a subtype (compatible with) of another type expression in the context
 * of a parent type.
 *
 * @param namespace
 * @param thisType
 * @param parentThisType
 * @param potentialSubtype
 * @param parentType
 */
export function isSubtypeOf(
    namespace: IntrospectedNamespace,
    thisType: TypeIdentifier,
    parentThisType: TypeIdentifier,
    potentialSubtype: TypeExpression,
    parentType: TypeExpression
) {
    if (!isTypeConflict(potentialSubtype, parentType)) {
        return true;
    }

    const unwrappedSubtype = potentialSubtype.unwrap();
    let unwrappedParent = parentType.unwrap();

    if (
        (potentialSubtype.equals(ThisType) && unwrappedParent.equals(thisType)) ||
        (parentType.equals(ThisType) && unwrappedSubtype.equals(parentThisType))
    ) {
        return true;
    }

    if (unwrappedParent instanceof GenericType && unwrappedParent.identifier !== "T") {
        // Technically there could be a conflicting generic, but most generic types should specify a replacement for type checking.
        // "T" denotes a local function generic in the current implementation, those can't be ignored.
        if (!unwrappedParent.replacedType) {
            return true;
        }

        // Use the generic replaced type as a stand-in.
        unwrappedParent = unwrappedParent.replacedType;
    }

    if (!(unwrappedSubtype instanceof TypeIdentifier) || !(unwrappedParent instanceof TypeIdentifier)) {
        return false;
    }

    const resolutions =
        namespace.parent.subtypes.get(unwrappedSubtype.name, unwrappedSubtype.namespace) ??
        new TwoKeyMap<string, string, boolean>();
    const resolution = resolutions.get(unwrappedParent.name, unwrappedParent.namespace);

    if (typeof resolution === "boolean") {
        return resolution;
    }

    const resolved = resolveTypeIdentifier(namespace, unwrappedSubtype);

    if (!resolved) {
        return false;
    }
    const parentResolution = resolved.resolveParents();

    // This checks that the two types have the same form, regardless of identifier (e.g. A | null and B | null)
    const isStructurallySubtype = potentialSubtype.rewrap(AnyType).equals(parentType.rewrap(AnyType));

    const isSubtype =
        isStructurallySubtype &&
        parentResolution.node.someParent((t: IntrospectedBaseClass) => t.getType().equals(unwrappedParent));

    resolutions.set(unwrappedParent.name, unwrappedParent.namespace, isSubtype);

    namespace.parent.subtypes.set(unwrappedSubtype.name, unwrappedSubtype.namespace, resolutions);

    return isSubtype;
} 