import { BinaryType, BooleanType, ClosureType, PromiseType, TupleType, TypeIdentifier, VoidType } from "../gir.ts";
import { IntrospectedConstructor } from "./constructor.ts";
import type { IntrospectedClassFunction } from "./introspected-classes.ts";
import {
	IntrospectedBaseClass,
	IntrospectedInterface,
	IntrospectedStaticClassFunction,
	IntrospectedVirtualClassFunction,
} from "./introspected-classes.ts";
import type { IntrospectedFunctionParameter } from "./parameter.ts";

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
	async_return: PromiseType,
): IntrospectedClassFunction[] {
	// Promise-based overload (without callback)
	const promiseOverload = node.copy({
		parameters: async_parameters,
		returnType: async_return,
	});

	// Callback-based overload (with required callback)
	const callbackOverload = node.copy({
		parameters: sync_parameters,
		returnType: VoidType,
	});

	// Union overload (with optional callback)
	const unionOverload = node.copy({
		parameters: [...async_parameters, sync_parameters[sync_parameters.length - 1].copy({ isOptional: true })],
		returnType: new BinaryType(async_return, VoidType),
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
			? [...cls.constructors, ...cls.members.filter((m) => m instanceof IntrospectedStaticClassFunction)]
			: [...cls.members.filter((m) => !(m instanceof IntrospectedStaticClassFunction))];

	return members.find(
		(m) => m.name === `${node.name.replace(/_async$/, "")}_finish` || m.name === `${node.name}_finish`,
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
	interfaceParent?: IntrospectedInterface,
) {
	// Search in current class
	let async_res = findFinishMethodInClass(parent, node);

	// If not found and we have an interface parent, search there
	if (!async_res && interfaceParent) {
		async_res = findFinishMethodInClass(interfaceParent, node);
	}

	// If still not found, search through parent hierarchy
	if (!async_res) {
		async_res = parent.findParentMap((parentClass) => findFinishMethodInClass(parentClass, node));
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
function createAsyncReturn(async_res: IntrospectedClassFunction | IntrospectedConstructor): PromiseType {
	const output_parameters = async_res instanceof IntrospectedConstructor ? [] : async_res.output_parameters;
	const return_type = async_res.return();

	// For async methods that return multiple values (like read_bytes_finish)
	if (output_parameters.length > 0) {
		// If there's only one output parameter and the return type is void/boolean,
		// use the output parameter as the Promise result type
		if (output_parameters.length === 1 && (return_type.equals(VoidType) || return_type.equals(BooleanType))) {
			return new PromiseType(output_parameters[0].type);
		}

		// Special case: If return type is boolean and we have multiple output parameters,
		// GJS drops the boolean from the tuple (as it's used for error handling)
		if (return_type.equals(BooleanType) && output_parameters.length > 0) {
			const [firstParam, ...restParams] = output_parameters;
			return new PromiseType(new TupleType(firstParam.type, ...restParams.map((p) => p.type)));
		}

		// Otherwise, return a tuple of [return_value, ...output_parameters]
		return new PromiseType(new TupleType(return_type, ...output_parameters.map((p) => p.type)));
	}

	// For simple async methods that just return a value
	return new PromiseType(return_type);
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
 * Checks if a function is an async function that can be promisified
 * Must have a corresponding _finish method and take an AsyncReadyCallback
 */
function isPromisifiable(node: IntrospectedClassFunction): boolean {
	// Skip virtual functions
	if (node instanceof IntrospectedVirtualClassFunction) return false;

	// Must have at least one parameter
	if (node.parameters.length === 0) return false;

	// Last parameter must be AsyncReadyCallback
	const last_param = node.parameters[node.parameters.length - 1];
	if (!last_param || !isAsyncReadyCallback(last_param)) return false;

	// Must have a parent class
	const parent = node.parent;
	if (!(parent instanceof IntrospectedBaseClass)) return false;

	// Must have a corresponding finish method
	const async_res = findFinishMethod(
		node,
		parent,
		node.interfaceParent instanceof IntrospectedInterface ? node.interfaceParent : undefined,
	);

	return async_res !== undefined;
}

/**
 * Transforms async functions to include Promise-based overloads
 */
export function promisifyFunctions(functions: IntrospectedClassFunction[]): IntrospectedClassFunction[] {
	return functions.flatMap((node) => {
		// Check if function can be promisified
		if (!isPromisifiable(node)) return node;

		const parent = node.parent as IntrospectedBaseClass;
		const async_res = findFinishMethod(
			node,
			parent,
			node.interfaceParent instanceof IntrospectedInterface ? node.interfaceParent : undefined,
		);

		if (!async_res) return node;

		// Create parameters for Promise version (without callback)
		const async_parameters = node.parameters.slice(0, -1).map((p) => p.copy({ parent: node }));

		// Create parameters for callback version (all parameters required)
		const sync_parameters = node.parameters.map((p) => p.copy({ isOptional: false }));

		// Create Promise return type
		const async_return = createAsyncReturn(async_res);

		// Generate the three overloaded signatures
		return generatePromisifyOverloadedSignatures(node, async_parameters, sync_parameters, async_return);
	});
}
