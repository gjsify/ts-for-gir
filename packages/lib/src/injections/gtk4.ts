import { IntrospectedNamespace } from "../gir/namespace.js";
import { NativeType, FunctionType, GenericType, GenerifiedType } from "../gir.js";
import { JSField } from "../gir/property.js";

export default {
    namespace: "Gtk",
    version: "4.0",
    modifier(namespace: IntrospectedNamespace) {
        {
            const Widget = namespace.assertClass("Widget");

            Widget.fields.push(
                new JSField({
                    name: "Symbol.iterator",
                    parent: Widget,
                    computed: true,
                    doc: "Gtk.Widget is an iterable of its children.",
                    type: new FunctionType(
                        {},
                        new GenerifiedType(new NativeType("IterableIterator"), new GenericType("Widget"))
                    )
                })
            );
        }
    }
};
