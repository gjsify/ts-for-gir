import type { IntrospectedNamespace } from "@ts-for-gir/lib";

export function override(node: IntrospectedNamespace) {
	// We provide manually written versions of these types below.
	node.assertClass("Variant").noEmit();
	node.assertClass("VariantType").noEmit();
	node.assertClass("VariantBuilder").noEmit();
	node.assertClass("VariantDict").noEmit();

	// The advanced variant types are handled by the template in packages/templates/templates/gobject-2.0.d.ts
	// Here we just prevent duplicate generation
	return "";
}
