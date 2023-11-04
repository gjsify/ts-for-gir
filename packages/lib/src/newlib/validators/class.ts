import { FormatGenerator } from "../generators/index.js";
import { AnyType, ArrayType, GirBase, NativeType, TypeIdentifier } from "../gir.js";
import { GirBaseClass, GirClass, GirInterface, GirRecord } from "../gir/class.js";
import { GirEnum, GirError } from "../gir/enum.js";
import { GirDirectAllocationConstructor } from "../gir/function.js";
import { GirClassFunction, GirConstructor, GirStaticClassFunction } from "../gir/nodes.js";
import { resolveTypeIdentifier } from "../gir/util.js";
import { GirVisitor } from "../visitor.js";

const filterIntrospectableClassMembers = <T extends GirBaseClass>(node: T): T => {
  node.fields = node.fields.filter(field => field.isIntrospectable);
  node.props = node.props.filter(prop => prop.isIntrospectable);
  node.callbacks = node.callbacks.filter(prop => prop.isIntrospectable);
  node.constructors = node.constructors.filter(prop => prop.isIntrospectable);
  node.members = node.members.filter(prop => prop.isIntrospectable);

  return node;
};

const PROTECTED_FIELD_NAMES = ["parent_instance", "parent", "parent_class", "object_class"];

const filterProtectedFields = <T extends GirBaseClass>(node: T): T => {
  const set = new Set(PROTECTED_FIELD_NAMES);

  node.fields = node.fields.filter(f => {
    return !set.has(f.name);
  });

  return node;
};

const filterConflictingNamedClassMembers = <T extends GirBaseClass>(node: T): T => {
  // Props shadow members
  node.members = node.members.filter(m => {
    return !node.props.some(prop => prop.name === m.name && !(m instanceof GirStaticClassFunction));
  });

  // Props and members shadow fields
  node.fields = node.fields.filter(
    f =>
      !node.members.some(n => n.name === f.name && !(n instanceof GirStaticClassFunction)) &&
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
const fixParamSpecSubtypes = <T extends GirBaseClass>(node: T): T => {
  if (node.parent?.namespace === "GObject" && node.parent.name.startsWith("ParamSpec")) {
    // We don't assert this import because we don't want to force libraries
    // to unnecessarily import GObject.
    node.parent = new TypeIdentifier("ParamSpec", "GObject");

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
const fixMissingParent = <T extends GirBaseClass>(node: T): T => {
  const { namespace } = node;

  if (node.parent == null) {
    const isGObject = node.someParent(p => p.getType().is("GObject", "Object"));

    if (isGObject) {
      node.parent = namespace.assertInstalledImport("GObject").assertClass("Object").getType();
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
const removeComplexFields = <T extends GirBaseClass>(node: T): T => {
  const { namespace } = node;

  node.fields = node.fields.filter(f => {
    let type = f.type.deepUnwrap();

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
      if (classNode && classNode instanceof GirRecord && !classNode.isSimple()) {
        return false;
      }

      const en = namespace.assertInstalledImport(type.namespace).getEnum(type.name);

      if (!(en instanceof GirError)) {
        return true;
      }

      return false;
    }

    return true;
  });

  return node;
};

const removePrivateFields = <T extends GirBaseClass>(node: T): T => {
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
const resolveMainConstructor = (node: GirRecord): GirRecord => {
  const newConstructor = node.constructors.find(c => c.name === "new");
  const zeroArgsConstructor = node.constructors.find(c => c.parameters.length === 0);
  const firstConstructor = node.constructors?.[0];

  if (node.isForeign()) {
    node.mainConstructor = null;

    return node;
  }

  if (zeroArgsConstructor || node.isSimpleWithoutPointers()) {
    node.mainConstructor = 
      new GirDirectAllocationConstructor(node.fields);

    return node;
  }

  const resolvedConstructor = newConstructor ?? firstConstructor;
  if (resolvedConstructor) {
    node.mainConstructor = resolvedConstructor.copy();
  }

  if (node.isSimple()) {
    node.mainConstructor = new GirDirectAllocationConstructor(node.fields);

    return node;
  }

  return node;
};

const mergeStaticDefinitions = (node: GirClass): GirClass => {
  if (!node.staticDefinition) {
    return node;
  }

  const { namespace } = node;
  const staticDefinition = namespace.getClass(node.staticDefinition);

  if (!(staticDefinition instanceof GirRecord)) {
    return node;
  }

  const staticMethods = staticDefinition.members
    .filter(m => m instanceof GirClassFunction)
    .map(m => m.asStaticClassFunction(node));

  for (const staticMethod of staticMethods) {
    if (
      !node.members.some(
        member => member.name === staticMethod.name && member instanceof GirStaticClassFunction
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
  visitClass = (node: GirClass) =>
    chainVisitors(
      node,
      fixMissingParent,
      fixParamSpecSubtypes,
      removeComplexFields,
      removePrivateFields,
      mergeStaticDefinitions,
      filterConflictingNamedClassMembers,
      filterIntrospectableClassMembers,
      filterProtectedFields
    );

  visitInterface = (node: GirInterface) => chainVisitors(node, filterIntrospectableClassMembers);

  visitRecord = (node: GirRecord) =>
    chainVisitors(
      node,
      fixMissingParent,
      fixParamSpecSubtypes,
      resolveMainConstructor,
      removeComplexFields,
      removePrivateFields,
      filterConflictingNamedClassMembers,
      filterIntrospectableClassMembers,
      filterProtectedFields
    );
}
