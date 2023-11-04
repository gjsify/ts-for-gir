import { AnyType, Generic, GenericType, GenerifiedTypeIdentifier, StringType, TypeIdentifier } from "../gir.js";
import { GirNamespace } from "../gir/namespace.js";

export default {
  namespace: "Gio",
  version: "2.0",
  modifier: (namespace: GirNamespace) => {
    const AsyncInitable = namespace.getClass("AsyncInitable");

    if (!AsyncInitable) {
      throw new Error("Gio.AsyncInitable not found.");
    }

    const GObject = namespace.assertInstalledImport("GObject").assertClass("Object");

    AsyncInitable.addGeneric({
      constraint: GObject.getType(),
      default: GObject.getType(),
      propagate: false
    });

    const ListModel = namespace.getClass("ListModel");

    if (!ListModel) {
      throw new Error("Gio.ListModel not found.");
    }

    ListModel.addGeneric({
      default: GObject.getType(),
      constraint: GObject.getType()
    });

    const ListStore = namespace.getClass("ListStore");

    if (!ListStore) {
      throw new Error("Gio.ListStore not found.");
    }

    ListStore.addGeneric({
      deriveFrom: ListModel.getType(),
      default: GObject.getType(),
      constraint: GObject.getType()
    });

    const Settings = namespace.assertClass("Settings");

    Settings.members = Settings.members.map(m => {
      if (m.name === "get_value" || m.name === "get_default_value" || m.name === "get_user_value") {
        m.generics.push(new Generic(new GenericType("T"), AnyType, undefined, StringType));
        const returnType = m.return().deepUnwrap();

        if (returnType instanceof TypeIdentifier && returnType.is("GLib", "Variant")) {
          return m.copy({
            returnType: m
              .return()
              .rewrap(new GenerifiedTypeIdentifier("Variant", "GLib", [new GenericType("T")]))
          });
        }

        return m;
      }

      return m;
    });
  }
};
