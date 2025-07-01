import { GirDirection } from "@gi.ts/parser";
import {
	IntrospectedClassFunction,
	IntrospectedFunctionParameter,
	type IntrospectedNamespace,
	NativeType,
	NeverType,
} from "@ts-for-gir/lib";

export function override(node: IntrospectedNamespace) {
	const ParamSpec = node.assertClass("ParamSpec");

	// We only inject __type__ for .d.ts files.
	const type_function = new IntrospectedClassFunction({
		name: "__type__",
		parent: ParamSpec,
		parameters: [
			new IntrospectedFunctionParameter({
				name: "arg",
				type: NeverType,
				direction: GirDirection.In,
			}),
		],
		return_type: new NativeType("A"),
		// TODO: Add support for generic native type replacement.
		// return_type: UnknownType
	});

	ParamSpec.members.push(type_function.copy());

	// Prevent emission of types that we're replacing
	try {
		const propertyMember = node.members.get("Property");
		if (propertyMember) {
			if (Array.isArray(propertyMember)) {
				propertyMember.forEach((m) => {
					if ("noEmit" in m && typeof m.noEmit === "function") {
						m.noEmit();
					}
				});
			} else if ("noEmit" in propertyMember && typeof propertyMember.noEmit === "function") {
				propertyMember.noEmit();
			}
		}
	} catch (_error) {
		// Ignore if Property doesn't exist
	}

	// Template content is now handled in templates/gobject-2.0.d.ts
	// This override only handles ParamSpec.__type__ injection and Property noEmit
	return "";
}
