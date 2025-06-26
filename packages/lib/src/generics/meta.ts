import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { GenerifiedTypeIdentifier } from "../gir.ts";

interface MetaTemplateConfig {
	namespace: string;
	version: string;
	modifier: (namespace: IntrospectedNamespace, inferGenerics: boolean) => void;
}

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
export const meta14 = createMetaTemplate("14");
export const meta15 = createMetaTemplate("15");
export const meta16 = createMetaTemplate("16");
