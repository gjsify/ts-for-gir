import { AnyType, NativeType, TypeIdentifier } from "../gir.ts";
import type { IntrospectedBaseClass } from "../gir/introspected-base-class.ts";
import type { IntrospectedClass } from "../gir/introspected-class.ts";
import type { IntrospectedInterface } from "../gir/interface.ts";
import { IntrospectedRecord } from "../gir/record.ts";
import { IntrospectedError } from "../gir/error.ts";
import { IntrospectedClassFunction } from "../gir/class-function.ts";
import { IntrospectedStaticClassFunction } from "../gir/static-function.ts";
import { IntrospectedDirectAllocationConstructor } from "../gir/direct-allocation-constructor.ts";
import { resolveTypeIdentifier } from "../utils/type-resolution.ts";
import { GirVisitor } from "../visitor.ts";

const filterIntrospectableClassMembers = <T extends IntrospectedBaseClass>(node: T): T => {
    node.fields = node.fields.filter(field => field.isIntrospectable);
    node.props = node.props.filter(prop => prop.isIntrospectable);
    node.callbacks = node.callbacks.filter(prop => prop.isIntrospectable);
    node.constructors = node.constructors.filter(prop => prop.isIntrospectable);
    node.members = node.members.filter(prop => prop.isIntrospectable);

    return node;
};

const PROTECTED_FIELD_NAMES = ["parent_instance", "parent", "parent_class", "object_class"];

const filterProtectedFields = <T extends IntrospectedBaseClass>(node: T): T => {
    const set = new Set(PROTECTED_FIELD_NAMES);

    node.fields = node.fields.filter(f => {
        return !set.has(f.name);
    });

    return node;
};

/**
 * Filters fields, properties, and members to ensure they are not named
 * after reserved object keys (prototype, constructor)
 */
const filterReservedProperties = <T extends IntrospectedBaseClass>(node: T): T => {
    const set = new Set(["prototype", "constructor"]);

    node.fields = node.fields.filter(f => {
        return !set.has(f.name);
    });

    node.props = node.props.filter(p => {
        return !set.has(p.name);
    });

    node.members = node.members.filter(m => {
        return !set.has(m.name);
    });

    return node;
};

const filterConflictingNamedClassMembers = <T extends IntrospectedBaseClass>(node: T): T => {
    // Props shadow members
    node.members = node.members.filter(m => {
        return !node.props.some(prop => prop.name === m.name && !(m instanceof IntrospectedStaticClassFunction));
    });

    // Props and members shadow fields
    node.fields = node.fields.filter(
        f =>
            !node.members.some(n => n.name === f.name && !(n instanceof IntrospectedStaticClassFunction)) &&
            !node.props.some(n => n.name === f.name)
    );

    return node;
};

/**
 * Subtypes of ParamSpec are not supported (e.g. a subtype of ParamSpecString).
 *
 * First, we transform the node to use ParamSpec as a parent and then flag it
 * to not emit.
 *
 * If a generator doesn't follow the emit() standard, the parent type will at least
 * be valid.
 *
 * @param node
 * @returns
 */
const fixParamSpecSubtypes = <T extends IntrospectedBaseClass>(node: T): T => {
    if (node.superType?.namespace === "GObject" && node.superType.name.startsWith("ParamSpec")) {
        // We don't assert this import because we don't want to force libraries
        // to unnecessarily import GObject.
        node.superType = new TypeIdentifier("ParamSpec", "GObject");

        node.noEmit();
    }

    return node;
};

/**
 * Checks if a class implements a GObject.Object-based interface
 * If the class is missing a direct parent we inject GObject.Object
 * as a stand-in considering it already indirectly inherits
 * from it.
 *
 * @param node
 */
const fixMissingParent = <T extends IntrospectedBaseClass>(node: T): T => {
    const { namespace } = node;

    if (node.superType == null) {
        const isGObject = node.someParent(p => p.getType().is("GObject", "Object"));

        if (isGObject) {
            node.superType = namespace.assertInstalledImport("GObject").assertClass("Object").getType();
        }
    }

    return node;
};

/**
 * Fields cannot be array types, error types,
 * or class-like types in GJS. This strips
 * fields which have these "complex" types.
 *
 * @param node
 */
const removeComplexFields = <T extends IntrospectedBaseClass>(node: T): T => {
    const { namespace } = node;

    node.fields = node.fields.filter(f => {
        const type = f.type.deepUnwrap();

        if (type instanceof NativeType) {
            return true;
        }

        if (type instanceof TypeIdentifier) {
            // Find the type for the identifier
            const classNode = resolveTypeIdentifier(namespace, type);

            // Don't allow private or disguised fields
            if (classNode && classNode.isPrivate) {
                return false;
            }

            // Only allow fields pointing to simple structs.
            if (classNode && classNode instanceof IntrospectedRecord && !classNode.isSimple()) {
                return false;
            }

            const en = namespace.assertInstalledImport(type.namespace).getEnum(type.name);

            if (!(en instanceof IntrospectedError)) {
                return true;
            }

            return false;
        }

        return true;
    });

    return node;
};

/**
 * TODO: Consider making this transformation optional.
 *
 * If we are referencing an unknown library, any-ify the type.
 *
 * @param node
 */
const removeReferencesToMissingLibraries = <T extends IntrospectedBaseClass>(node: T): T => {
    const { namespace } = node;

    node.fields = node.fields.map(f => {
        const type = f.type.deepUnwrap();

        if (type instanceof TypeIdentifier) {
            // Find the type for the identifier
            const nsNode = namespace.getInstalledImport(type.namespace);

            // Don't allow private or disguised fields
            if (!nsNode) {
                return f.copy({ type: AnyType });
            }
        }

        return f;
    });

    return node;
};

const removePrivateFields = <T extends IntrospectedBaseClass>(node: T): T => {
    node.fields = node.fields.filter(f => {
        return !f.isPrivate && !f.name.startsWith("_");
    });

    return node;
};

/**
 * Boxed types have a specific order of preference for
 * which constructor will be used...
 *
 * 1. Zero Args Constructor
 * 2. Direct Allocation (if the type is simple)
 * 3. The new() constructor
 * 4. The first constructor
 *
 * @param node
 */
const resolveMainConstructor = (node: IntrospectedRecord): IntrospectedRecord => {
    const newConstructor = node.constructors.find(c => c.name === "new");
    const zeroArgsConstructor = node.constructors.find(c => c.parameters.length === 0);
    const firstConstructor = node.constructors?.[0];

    if (node.isForeign()) {
        node.mainConstructor = null;

        return node;
    }

    if (zeroArgsConstructor || node.isSimpleWithoutPointers()) {
        node.mainConstructor = IntrospectedDirectAllocationConstructor.fromFields(node.fields, node);

        return node;
    }

    const resolvedConstructor = newConstructor ?? firstConstructor;
    if (resolvedConstructor) {
        node.mainConstructor = resolvedConstructor.copy();
    }

    if (node.isSimple()) {
        node.mainConstructor = IntrospectedDirectAllocationConstructor.fromFields(node.fields, node);

        return node;
    }

    return node;
};

const mergeStaticDefinitions = (node: IntrospectedClass): IntrospectedClass => {
    if (!node.staticDefinition) {
        return node;
    }

    const { namespace } = node;
    const staticDefinition = namespace.getClass(node.staticDefinition);

    if (!(staticDefinition instanceof IntrospectedRecord)) {
        return node;
    }

    const staticMethods = staticDefinition.members
        .filter(m => m instanceof IntrospectedClassFunction)
        .map(m => {
            // Convert the class function to a static class function
            const { name, parameters, output_parameters, doc, isIntrospectable } = m;

            return new IntrospectedStaticClassFunction({
                name,
                parameters,
                output_parameters,
                return_type: m.return(),
                parent: node,
                isIntrospectable
            });
        });

    for (const staticMethod of staticMethods) {
        if (
            !node.members.some(
                member => member.name === staticMethod.name && member instanceof IntrospectedStaticClassFunction
            )
        ) {
            node.members.push(staticMethod);
        }
    }

    return node;
};

function chainVisitors<T>(node: T, ...args: ((node: T) => T)[]) {
    let currentNode = node;

    for (const visitor of args) {
        currentNode = visitor(currentNode);
    }

    return currentNode;
}

export class ClassVisitor extends GirVisitor {
    visitClass = (node: IntrospectedClass) =>
        chainVisitors(
            node,
            removeReferencesToMissingLibraries,
            fixMissingParent,
            fixParamSpecSubtypes,
            removeComplexFields,
            removePrivateFields,
            mergeStaticDefinitions,
            filterConflictingNamedClassMembers,
            filterIntrospectableClassMembers,
            filterProtectedFields,
            filterReservedProperties
        );

    visitInterface = (node: IntrospectedInterface) =>
        chainVisitors(node, filterIntrospectableClassMembers, filterReservedProperties);

    visitRecord = (node: IntrospectedRecord) =>
        chainVisitors(
            node,
            fixMissingParent,
            fixParamSpecSubtypes,
            resolveMainConstructor,
            removeComplexFields,
            removePrivateFields,
            filterConflictingNamedClassMembers,
            filterIntrospectableClassMembers,
            filterProtectedFields,
            filterReservedProperties
        );
}
