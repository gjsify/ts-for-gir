import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { GenericType, GenerifiedTypeIdentifier } from "../gir.ts";
import type { StTemplateConfig } from "../types/generics-config.ts";

function createStTemplate(version: string): StTemplateConfig {
	return {
		namespace: "St",
		version,
		modifier: (namespace: IntrospectedNamespace, inferGenerics: boolean) => {
			if (!inferGenerics) {
				return;
			}

			applyStGenerics(namespace, version);
		},
	};
}

function applyStGenerics(namespace: IntrospectedNamespace, version: string): void {
	const clutterImport = namespace.assertInstalledImport("Clutter");
	const classes = getStClasses(namespace);
	const clutterClasses = getClutterClasses(clutterImport, version);

	setupWidgetGenerics(classes, clutterClasses);
	setupViewportGenerics(classes, clutterClasses);
	setupContainerGenerics(classes, clutterClasses, version);
	setupBoxLayout(classes, clutterClasses);
	setupBinGenerics(classes, clutterClasses);
	setupScrollViewMethods(classes);
}

function getStClasses(namespace: IntrospectedNamespace) {
	return {
		Bin: namespace.assertClass("Bin"),
		Button: namespace.assertClass("Button"),
		ScrollView: namespace.assertClass("ScrollView"),
		ScrollBar: namespace.assertClass("ScrollBar"),
		Widget: namespace.assertClass("Widget"),
		Viewport: namespace.assertClass("Viewport"),
		StBoxLayout: namespace.assertClass("BoxLayout"),
	};
}

function getClutterClasses(clutterImport: ReturnType<IntrospectedNamespace["assertInstalledImport"]>, version: string) {
	return {
		Actor: clutterImport.assertClass("Actor"),
		Content: clutterImport.assertClass("Content"),
		Container: Number(version) < 14 ? clutterImport.assertClass("Container") : null,
		LayoutManager: clutterImport.assertClass("LayoutManager"),
		ClutterBoxLayout: clutterImport.assertClass("BoxLayout"),
	};
}

function setupWidgetGenerics(
	stClasses: ReturnType<typeof getStClasses>,
	clutterClasses: ReturnType<typeof getClutterClasses>,
): void {
	const { Widget } = stClasses;
	const { Actor, Content, LayoutManager } = clutterClasses;

	Widget.addGeneric({
		deriveFrom: Actor.getType(),
		default: LayoutManager.getType(),
		constraint: LayoutManager.getType(),
	});

	Widget.addGeneric({
		deriveFrom: Actor.getType(),
		default: Content.getType(),
		constraint: Content.getType(),
	});
}

function setupViewportGenerics(
	stClasses: ReturnType<typeof getStClasses>,
	clutterClasses: ReturnType<typeof getClutterClasses>,
): void {
	const { Viewport, Widget } = stClasses;
	const { Content, LayoutManager } = clutterClasses;

	Viewport.addGeneric({
		deriveFrom: Widget.getType(),
		default: LayoutManager.getType(),
		constraint: LayoutManager.getType(),
	});

	Viewport.addGeneric({
		deriveFrom: Widget.getType(),
		default: Content.getType(),
		constraint: Content.getType(),
	});
}

function setupContainerGenerics(
	stClasses: ReturnType<typeof getStClasses>,
	clutterClasses: ReturnType<typeof getClutterClasses>,
	version: string,
): void {
	const { StBoxLayout } = stClasses;
	const { Actor, Container } = clutterClasses;

	if (!Container) {
		return;
	}

	Container.addGeneric({
		default: Actor.getType(),
		constraint: Actor.getType(),
	});

	StBoxLayout.addGeneric({
		deriveFrom: Container.getType(),
		default: Actor.getType(),
		constraint: Actor.getType(),
	});
}

function setupBoxLayout(
	stClasses: ReturnType<typeof getStClasses>,
	clutterClasses: ReturnType<typeof getClutterClasses>,
): void {
	const { StBoxLayout } = stClasses;
	const { ClutterBoxLayout } = clutterClasses;

	if (StBoxLayout.superType) {
		StBoxLayout.superType = new GenerifiedTypeIdentifier(StBoxLayout.superType.name, StBoxLayout.superType.namespace, [
			ClutterBoxLayout.getType(),
		]);
	}
}

function setupBinGenerics(
	stClasses: ReturnType<typeof getStClasses>,
	clutterClasses: ReturnType<typeof getClutterClasses>,
): void {
	const { Bin, Button, ScrollView } = stClasses;
	const { Actor } = clutterClasses;

	Bin.addGeneric({
		default: Actor.getType(),
		constraint: Actor.getType(),
	});

	Button.addGeneric({
		deriveFrom: Bin.getType(),
		default: Actor.getType(),
		constraint: Actor.getType(),
	});

	ScrollView.addGeneric({
		deriveFrom: Bin.getType(),
		default: Actor.getType(),
		constraint: Actor.getType(),
	});

	// Update Bin child property
	updatePropertyType(Bin, ["child"], new GenericType("A", Actor.getType()));
}

function setupScrollViewMethods(stClasses: ReturnType<typeof getStClasses>): void {
	const { ScrollView, ScrollBar } = stClasses;

	const methodConfigs = [
		{ name: "get_hscroll_bar", returnType: ScrollBar.getType() },
		{ name: "get_vscroll_bar", returnType: ScrollBar.getType() },
	];

	for (const config of methodConfigs) {
		const method = ScrollView.members.find((member) => member.name === config.name);
		if (method) {
			const fixedMethod = method.copy({ returnType: config.returnType });
			const index = ScrollView.members.indexOf(method);
			ScrollView.members.splice(index, 1, fixedMethod);
		}
	}
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
export const st1 = createStTemplate("1.0");
export const st12 = createStTemplate("12");
export const st13 = createStTemplate("13");
export const st14 = createStTemplate("14");
export const st15 = createStTemplate("15");
export const st16 = createStTemplate("16");
