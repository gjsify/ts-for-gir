import { AnyType, StringType } from "../gir.js";
import { GirNamespace } from "../gir/namespace.js";

export default {
  namespace: "GLib",
  version: "2.0",
  modifier: (namespace: GirNamespace) => {
    const HashTable = namespace.getClass("HashTable");

    if (!HashTable) {
      throw new Error("GLib.HashTable not found.");
    }

    HashTable.addGeneric({
      default: StringType
    });

    HashTable.addGeneric({
      default: AnyType
    });
  }
};
