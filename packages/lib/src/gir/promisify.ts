import { TypeIdentifier, ClosureType, BinaryType, PromiseType, VoidType, TupleType, BooleanType } from "../gir.js";
import {
    IntrospectedClassFunction,
    IntrospectedStaticClassFunction,
    IntrospectedConstructor,
    IntrospectedFunctionParameter
} from "./function.js";

import { IntrospectedBaseClass, IntrospectedInterface } from "./class.js";

/**
 * Generates three overloaded function signatures for async methods:
 * 1. A Promise-based version without callback
 * 2. A callback-based version with required callback
 * 3. A union version with optional callback
 *
 * @param node - The original class function to create overloads from
 * @param async_parameters - Parameters for the Promise-based version (without callback)
 * @param sync_parameters - Parameters for the callback version
 * @param async_return - The Promise return type
 * @returns Array of three overloaded function signatures
 */
function generatePromisifyOverloadedSignatures(
    node: IntrospectedClassFunction,
    async_parameters: IntrospectedFunctionParameter[],
    sync_parameters: IntrospectedFunctionParameter[],
    async_return: PromiseType
): IntrospectedClassFunction[] {
    // Promise-based overload (without callback)
    const promiseOverload = node.copy({
        parameters: async_parameters,
        returnType: async_return
    });

    // Callback-based overload (with required callback)
    const callbackOverload = node.copy({
        parameters: sync_parameters,
        returnType: VoidType
    });

    // Union overload (with optional callback)
    const unionOverload = node.copy({
        parameters: [...async_parameters, sync_parameters[sync_parameters.length - 1].copy({ isOptional: true })],
        returnType: new BinaryType(async_return, VoidType)
    });

    return [promiseOverload, callbackOverload, unionOverload];
}

/**
 * Searches for a corresponding finish method within a class
 * Matches either {name}_finish or {name without _async}_finish
 *
 * @param cls - The class to search in
 * @param node - The async function to find the finish method for
 * @returns The finish method if found, undefined otherwise
 */
function findFinishMethodInClass(cls: IntrospectedBaseClass, node: IntrospectedClassFunction) {
    const members =
        node instanceof IntrospectedStaticClassFunction
            ? [...cls.constructors, ...cls.members.filter(m => m instanceof IntrospectedStaticClassFunction)]
            : [...cls.members.filter(m => !(m instanceof IntrospectedStaticClassFunction))];

    return members.find(
        m => m.name === `${node.name.replace(/_async$/, "")}_finish` || m.name === `${node.name}_finish`
    );
}

/**
 * Searches for a finish method in the class hierarchy:
 * 1. Searches in the current class
 * 2. Searches in the interface parent if available
 * 3. Searches through the parent class hierarchy
 *
 * @param node - The async function to find the finish method for
 * @param parent - The immediate parent class
 * @param interfaceParent - Optional interface parent to search in
 * @returns The finish method if found, undefined otherwise
 */
function findFinishMethod(
    node: IntrospectedClassFunction,
    parent: IntrospectedBaseClass,
    interfaceParent?: IntrospectedInterface
) {
    // Search in current class
    let async_res = findFinishMethodInClass(parent, node);

    // If not found and we have an interface parent, search there
    if (!async_res && interfaceParent) {
        async_res = findFinishMethodInClass(interfaceParent, node);
    }

    // If still not found, search through parent hierarchy
    if (!async_res) {
        async_res = parent.findParentMap(parentClass => findFinishMethodInClass(parentClass, node));
    }

    return async_res;
}

/**
 * Creates a Promise return type for an async function
 * Handles both simple returns and tuple returns with output parameters
 *
 * @param async_res - The finish method or constructor to create the return type from
 * @returns A PromiseType containing the appropriate return type
 */
function createAsyncReturn(async_res: IntrospectedClassFunction | IntrospectedConstructor) {
    const output_parameters = async_res instanceof IntrospectedConstructor ? [] : async_res.output_parameters;
    let async_return = new PromiseType(async_res.return());

    if (output_parameters.length > 0) {
        const raw_return = async_res.return();
        if (raw_return.equals(VoidType) || raw_return.equals(BooleanType)) {
            const [output_type, ...output_types] = output_parameters.map(op => op.type);
            async_return = new PromiseType(new TupleType(output_type, ...output_types));
        } else {
            const [...output_types] = output_parameters.map(op => op.type);
            async_return = new PromiseType(new TupleType(raw_return, ...output_types));
        }
    }

    return async_return;
}

/**
 * Checks if a parameter is a Gio.AsyncReadyCallback
 *
 * @param param - The function parameter to check
 * @returns true if the parameter is an AsyncReadyCallback, false otherwise
 */
function isAsyncReadyCallback(param: IntrospectedFunctionParameter): boolean {
    const unwrapped = param.type.unwrap();
    return (
        unwrapped instanceof ClosureType &&
        unwrapped.type instanceof TypeIdentifier &&
        unwrapped.type.is("Gio", "AsyncReadyCallback")
    );
}

/**
 * Transforms async functions to include Promise-based overloads
 * For each async function that takes a Gio.AsyncReadyCallback, generates:
 * - A Promise-based version
 * - A callback-based version
 * - A union version with optional callback
 *
 * @param functions - Array of class functions to process
 * @returns Array of original and promisified functions
 */
export function promisifyFunctions(functions: IntrospectedClassFunction[]): IntrospectedClassFunction[] {
    return functions
        .map(node => {
            if (node.parameters.length === 0) return node;

            const last_param = node.parameters[node.parameters.length - 1];
            if (!last_param || !isAsyncReadyCallback(last_param)) return node;

            const parent = node.parent;
            if (!(parent instanceof IntrospectedBaseClass)) return node;

            const async_res = findFinishMethod(
                node,
                parent,
                node.interfaceParent instanceof IntrospectedInterface ? node.interfaceParent : undefined
            );

            if (!async_res) return node;

            const async_parameters = node.parameters.slice(0, -1).map(p => p.copy({ parent: null }));
            const sync_parameters = node.parameters.map(p => p.copy({ isOptional: false }));
            const async_return = createAsyncReturn(async_res);

            return generatePromisifyOverloadedSignatures(node, async_parameters, sync_parameters, async_return);
        })
        .flat(1);
}
