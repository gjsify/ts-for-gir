import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { GenerifiedTypeIdentifier } from "../gir.ts";
import { MUTTER_API_VERSIONS } from "../mutter-api-versions.ts";
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

// Version exports — one template per known Mutter API version. See
// MUTTER_API_VERSIONS for why the list lives in one shared place.
export const metaTemplates: MetaTemplateConfig[] = MUTTER_API_VERSIONS.map(createMetaTemplate);
