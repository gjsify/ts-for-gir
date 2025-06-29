import type { IntrospectedBaseClass, IntrospectedClassFunction } from "../gir/introspected-classes.ts";
import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { AnyType, Generic, GenericType, GenerifiedTypeIdentifier, StringType, TypeIdentifier } from "../gir.ts";
import type { GioConfig } from "../types/generics-config.ts";

function createGioConfig(): GioConfig {
	return {
		namespace: "Gio",
		version: "2.0",
		modifier: (namespace: IntrospectedNamespace) => {
			applyGioGenerics(namespace);
		},
	};
}

function applyGioGenerics(namespace: IntrospectedNamespace): void {
	const GObject = namespace.assertInstalledImport("GObject").assertClass("Object");

	setupAsyncInitable(namespace, GObject);
	setupListModel(namespace, GObject);
	setupListStore(namespace, GObject);
	setupSettingsValueMethods(namespace);
}

function setupAsyncInitable(namespace: IntrospectedNamespace, GObject: IntrospectedBaseClass): void {
	const AsyncInitable = namespace.getClass("AsyncInitable");
	if (!AsyncInitable) {
		throw new Error("Gio.AsyncInitable not found.");
	}

	AsyncInitable.addGeneric({
		constraint: GObject.getType(),
		default: GObject.getType(),
		propagate: false,
	});
}

function setupListModel(namespace: IntrospectedNamespace, GObject: IntrospectedBaseClass): void {
	const ListModel = namespace.getClass("ListModel");
	if (!ListModel) {
		throw new Error("Gio.ListModel not found.");
	}

	ListModel.addGeneric({
		default: GObject.getType(),
		constraint: GObject.getType(),
	});
}

function setupListStore(namespace: IntrospectedNamespace, GObject: IntrospectedBaseClass): void {
	const ListModel = namespace.getClass("ListModel");
	const ListStore = namespace.getClass("ListStore");

	if (!ListStore) {
		throw new Error("Gio.ListStore not found.");
	}

	ListStore.addGeneric({
		deriveFrom: ListModel?.getType(),
		default: GObject.getType(),
		constraint: GObject.getType(),
	});
}

function setupSettingsValueMethods(namespace: IntrospectedNamespace): void {
	const Settings = namespace.assertClass("Settings");
	const methodNames = ["get_value", "get_default_value", "get_user_value"];

	Settings.members = Settings.members.map((member) => {
		if (!methodNames.includes(member.name)) {
			return member;
		}

		return updateSettingsMethod(member);
	});
}

function updateSettingsMethod(method: IntrospectedClassFunction): IntrospectedClassFunction {
	method.generics.push(new Generic(new GenericType("T"), AnyType, undefined, StringType));

	const returnType = method.return().deepUnwrap();
	if (returnType instanceof TypeIdentifier && returnType.is("GLib", "Variant")) {
		return method.copy({
			returnType: method.return().rewrap(new GenerifiedTypeIdentifier("Variant", "GLib", [new GenericType("T")])),
		});
	}

	return method;
}

export default createGioConfig();
