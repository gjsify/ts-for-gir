import { AnyType, StringType } from "../gir.ts";
import { IntrospectedNamespace } from "../gir/namespace.ts";

export default {
    namespace: "GLib",
    version: "2.0",
    modifier: (namespace: IntrospectedNamespace) => {
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
