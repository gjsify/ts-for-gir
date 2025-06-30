import type { IntrospectedNamespace } from "@ts-for-gir/lib";

export function override(node: IntrospectedNamespace) {
	const Variant = node.assertClass("Variant");

	// JS-only variant constructor
	Variant.members.push(
		node.members.formatIdentifier({
			name: "new_internal",
			type: "(x: any) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_variant",
			type: "(x: GLib.Variant) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_boolean",
			type: "(x: boolean) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_uint8",
			type: "(x: number) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_int16",
			type: "(x: number) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_uint16",
			type: "(x: number) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_int32",
			type: "(x: number) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_uint32",
			type: "(x: number) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_int64",
			type: "(x: number) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_uint64",
			type: "(x: number) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_double",
			type: "(x: number) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_string",
			type: "(x: string) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_bytestring",
			type: "(x: string) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_object_path",
			type: "(x: string) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_signature",
			type: "(x: string) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_variant",
			type: "(x: GLib.Variant) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_strv",
			type: "(x: string[]) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_array",
			type: "(x: GLib.VariantType | null, children: GLib.Variant[]) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_tuple",
			type: "(children: GLib.Variant[]) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_dict_entry",
			type: "(key: GLib.Variant, value: GLib.Variant) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_maybe",
			type: "(childType: GLib.VariantType | null, child: GLib.Variant | null) => GLib.Variant",
		}),
		node.members.formatIdentifier({
			name: "new_from_bytes",
			type: "(type: GLib.VariantType, bytes: GLib.Bytes | Uint8Array, trusted: boolean) => GLib.Variant",
		}),
	);

	// Instance methods
	Variant.members.push(
		node.members.formatIdentifier("unpack", {
			name: "unpack",
			type: "() => any",
		}),
		node.members.formatIdentifier("deep_unpack", {
			name: "deepUnpack",
			type: "() => any",
		}),
		node.members.formatIdentifier("_init", {
			name: "_init",
			type: "(sig: string, value: any) => GLib.Variant",
		}),
		node.members.formatIdentifier("_unpack", {
			name: "_unpack",
			type: "() => any",
		}),
		node.members.formatIdentifier("_deep_unpack", {
			name: "_deepUnpack",
			type: "() => any",
		}),
		node.members.formatIdentifier("deep_unpack", {
			name: "deep_unpack",
			type: "() => any",
		}),
		node.members.formatIdentifier("recursiveUnpack", {
			name: "recursiveUnpack",
			type: "() => any",
		}),
	);

	// Re-export for directory-based imports
	const dir = node.assertClass("Dir");
	dir.members.push(
		node.members.formatIdentifier({
			name: "make_tmp",
			type: "(tmpl?: string | null) => string",
		}),
		node.members.formatIdentifier({
			name: "rewind",
			type: "() => void",
		}),
		node.members.formatIdentifier({
			name: "read_name",
			type: "() => string | null",
		}),
		node.members.formatIdentifier({
			name: "close",
			type: "() => void",
		}),
	);

	// No conflicting type definitions that need to be renamed in GLib overrides
	return "";
}
