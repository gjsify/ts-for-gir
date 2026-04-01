import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { GenerifiedTypeIdentifier } from "../gir.ts";
import type { MetaTemplateConfig } from "../types/generics-config.ts";

function createMetaTemplate(version: string): MetaTemplateConfig {
	return {
		namespace: "Meta",
		version,
		modifier: (namespace: IntrospectedNamespace, inferGenerics: boolean) => {
			if (!inferGenerics) {
				return;
			}

			applyMetaGenerics(namespace);
		},
	};
}

function applyMetaGenerics(namespace: IntrospectedNamespace): void {
	// Connect BackgroundActor to BackgroundContent
	const LayoutManager = namespace.assertInstalledImport("Clutter").assertClass("LayoutManager");
	const BackgroundContent = namespace.assertClass("BackgroundContent");
	const BackgroundActor = namespace.assertClass("BackgroundActor");

	const parent = BackgroundActor.superType;
	if (parent) {
		BackgroundActor.superType = new GenerifiedTypeIdentifier(parent.name, parent.namespace, [
			LayoutManager.getType(),
			BackgroundContent.getType(),
		]);
	}
}

// Version exports
export const meta10 = createMetaTemplate("10");
export const meta11 = createMetaTemplate("11");
export const meta12 = createMetaTemplate("12");
export const meta13 = createMetaTemplate("13");
/** Meta-14 was introduced with GNOME 46 */
export const meta14 = createMetaTemplate("14");
/** Meta-15 was introduced with GNOME 47 */
export const meta15 = createMetaTemplate("15");
/** Meta-16 was introduced with GNOME 48 */
export const meta16 = createMetaTemplate("16");
/** Meta-17 was introduced with GNOME 49 */
export const meta17 = createMetaTemplate("17");
/** Meta-18 was introduced with GNOME 50 */
export const meta18 = createMetaTemplate("18");
// Possibly future versions, adjust if necessary
export const meta19 = createMetaTemplate("19");
export const meta20 = createMetaTemplate("20");
