import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { GenericType } from "../gir.ts";

interface ClutterTemplateConfig {
	namespace: string;
	version: string;
	modifier: (namespace: IntrospectedNamespace, inferGenerics: boolean) => void;
}

function createClutterTemplate(version: string): ClutterTemplateConfig {
	return {
		namespace: "Clutter",
		version,
		modifier: (namespace: IntrospectedNamespace, inferGenerics: boolean) => {
			if (!inferGenerics) {
				return;
			}

			applyClutterGenerics(namespace);
		},
	};
}

function applyClutterGenerics(namespace: IntrospectedNamespace): void {
	const Actor = namespace.assertClass("Actor");
	const Content = namespace.assertClass("Content");
	const LayoutManager = namespace.assertClass("LayoutManager");

	// Add generics to Actor
	Actor.addGeneric({
		default: LayoutManager.getType(),
		constraint: LayoutManager.getType(),
	});

	Actor.addGeneric({
		default: Content.getType(),
		constraint: Content.getType(),
	});

	// Update layout_manager properties
	updatePropertyType(Actor, ["layout_manager", "layoutManager"], new GenericType("A", Content.getType()));

	// Update content properties
	updatePropertyType(Actor, ["content"], new GenericType("B", Content.getType()));

	// Configure Clone class
	const Clone = namespace.assertClass("Clone");
	Clone.addGeneric({
		default: Actor.getType(),
		constraint: Actor.getType(),
	});

	updatePropertyType(Clone, ["source"], new GenericType("A", Content.getType()));
}

function updatePropertyType(
	cls: ReturnType<IntrospectedNamespace["assertClass"]>,
	propertyNames: string[],
	newType: GenericType,
): void {
	cls.props
		.filter((p) => propertyNames.includes(p.name))
		.forEach((prop) => {
			// TODO: Automatically infer such changes.
			prop.type = newType;
		});
}

// Version exports
export const clutter10 = createClutterTemplate("10");
export const clutter11 = createClutterTemplate("11");
export const clutter12 = createClutterTemplate("12");
export const clutter13 = createClutterTemplate("13");
export const clutter14 = createClutterTemplate("14");
export const clutter15 = createClutterTemplate("15");
export const clutter16 = createClutterTemplate("16");

// For backward compatibility
export const clutterTemplate = createClutterTemplate;
