import type { IntrospectedBaseClass } from "../gir/introspected-classes.ts";
import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { Generic, GenericType, GenerifiedTypeIdentifier } from "../gir.ts";
import type { GtkConfig } from "../types/generics-config.ts";

function createGtkConfig(): GtkConfig {
	return {
		namespace: "Gtk",
		version: "4.0",
		modifier: (namespace: IntrospectedNamespace) => {
			applyGtkGenerics(namespace);
		},
	};
}

function applyGtkGenerics(namespace: IntrospectedNamespace): void {
	const classes = getGtkClasses(namespace);
	const GObject = namespace.assertInstalledImport("GObject").assertClass("Object");

	setupStringListGenerics(classes, GObject);
	updateBindModelMethods(classes, GObject);
}

function getGtkClasses(namespace: IntrospectedNamespace) {
	const requiredClasses = {
		FlowBox: namespace.getClass("FlowBox"),
		ListBox: namespace.getClass("ListBox"),
		StringList: namespace.getClass("StringList"),
		StringObject: namespace.getClass("StringObject"),
	};

	// Validate required classes exist
	for (const [name, cls] of Object.entries(requiredClasses)) {
		if (!cls) {
			throw new Error(`Gtk.${name} not found.`);
		}
	}

	return requiredClasses as Record<
		keyof typeof requiredClasses,
		NonNullable<(typeof requiredClasses)[keyof typeof requiredClasses]>
	>;
}

function setupStringListGenerics(classes: ReturnType<typeof getGtkClasses>, GObject: any): void {
	const { StringList, StringObject } = classes;

	StringList.addGeneric({
		default: StringObject.getType(),
		constraint: GObject.getType(),
	});
}

function updateBindModelMethods(classes: ReturnType<typeof getGtkClasses>, GObject: any): void {
	const { FlowBox, ListBox } = classes;

	const bindModelConfigs = [
		{ cls: FlowBox, widgetFuncName: "FlowBoxCreateWidgetFunc" },
		{ cls: ListBox, widgetFuncName: "ListBoxCreateWidgetFunc" },
	];

	for (const config of bindModelConfigs) {
		updateBindModelMethod(config.cls, config.widgetFuncName, GObject);
	}
}

function updateBindModelMethod(cls: IntrospectedBaseClass, widgetFuncName: string, GObject: any): void {
	cls.members = cls.members.map((member) => {
		if (member.name !== "bind_model") {
			return member;
		}

		member.generics.push(new Generic(new GenericType("A"), GObject.getType(), undefined, GObject.getType()));

		return member.copy({
			parameters: member.parameters.map((param) => {
				if (param.name === "model") {
					return param.copy({
						type: new GenerifiedTypeIdentifier("ListModel", "Gio", [new GenericType("A")]),
					});
				}

				if (param.name === "create_widget_func") {
					return param.copy({
						type: new GenerifiedTypeIdentifier(widgetFuncName, "Gtk", [new GenericType("A")]),
					});
				}

				return param;
			}),
		});
	});
}

export default createGtkConfig();
