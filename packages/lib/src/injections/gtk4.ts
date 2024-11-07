import { IntrospectedNamespace } from "../gir/namespace.js";
import { NativeType, FunctionType } from "../gir.js";
import { IntrospectedField, JSField } from "../gir/property.js";

export default {
    namespace: "Gtk",
    version: "4.0",
    modifier(namespace: IntrospectedNamespace) {
        {
            const Widget = namespace.assertClass("Widget");

            Widget.fields.push(
                new IntrospectedField({
                    name: "Symbol.iterator",
                    parent: Widget,
                    computed: true,
                    type: new FunctionType({}, new NativeType("IterableIterator"))
                })
            );
        }

        {
            const ListBox = namespace.assertClass("ListBox");

            ListBox.fields.push(
                new JSField({
                    name: "Symbol.iterator",
                    parent: ListBox,
                    computed: true,
                    type: new FunctionType({}, new NativeType("IterableIterator"))
                })
            );
        }
    }
};
