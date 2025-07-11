import { BinaryType, BooleanType, ClosureType, PromiseType, TupleType, TypeIdentifier, VoidType } from "../gir.ts";

import type { GirModule } from "../gir-module.ts";
import type { IntrospectedAlias } from "./alias.ts";
import type { IntrospectedConstant } from "./const.ts";
import type { IntrospectedEnum } from "./enum.ts";
import { IntrospectedFunction } from "./function.ts";
import type { IntrospectedBaseClass } from "./introspected-classes.ts";

// TODO: Move to types/
export type GirNSMember =
	| IntrospectedBaseClass
	| IntrospectedFunction
	| IntrospectedConstant
	| IntrospectedEnum
	| IntrospectedAlias;

export function promisifyNamespaceFunctions(namespace: GirModule) {
	return namespace.members.forEach((node) => {
		if (!(node instanceof IntrospectedFunction)) return;

		if (node.parameters.length < 1) return;

		const last_param = node.parameters[node.parameters.length - 1];

		if (!last_param) return;

		const last_param_unwrapped = last_param.type.unwrap();

		if (!(last_param_unwrapped instanceof ClosureType)) return;

		const internal = last_param_unwrapped.type;

		if (internal instanceof TypeIdentifier && internal.is("Gio", "AsyncReadyCallback")) {
			const async_res = [
				...Array.from(namespace.members.values()).filter(
					(m): m is IntrospectedFunction => m instanceof IntrospectedFunction,
				),
			].find((m) => m.name === `${node.name.replace(/_async$/, "")}_finish` || m.name === `${node.name}_finish`);

			if (async_res) {
				const async_parameters = node.parameters.slice(0, -1).map((p) => p.copy());
				const sync_parameters = node.parameters.map((p) => p.copy({ isOptional: false }));
				const output_parameters = async_res.output_parameters;

				let async_return = new PromiseType(async_res.return());

				if (output_parameters.length > 0) {
					const raw_return = async_res.return();
					if (raw_return.equals(VoidType) || raw_return.equals(BooleanType)) {
						const [output_type, ...output_types] = output_parameters.map((op) => op.type);
						async_return = new PromiseType(new TupleType(output_type, ...output_types));
					} else {
						const [...output_types] = output_parameters.map((op) => op.type);
						async_return = new PromiseType(new TupleType(raw_return, ...output_types));
					}
				}

				namespace.members.set(node.name, [
					node.copy({
						parameters: async_parameters,
						return_type: async_return,
					}),
					node.copy({
						parameters: sync_parameters,
					}),
					node.copy({
						return_type: new BinaryType(async_return, node.return()),
					}),
				]);
			}
		}
	});
}

export { GirModule as IntrospectedNamespace } from "../gir-module.ts";
