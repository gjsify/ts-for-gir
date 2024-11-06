import { IntrospectedNamespace } from "../gir/namespace.js";
import { Generic, GenericType, GenerifiedTypeIdentifier } from "../gir.js";
import { IntrospectedBaseClass } from "../gir/class.js";

export default {
    namespace: "Gtk",
    version: "4.0",
    modifier: (namespace: IntrospectedNamespace) => {
        const FlowBox = namespace.getClass("FlowBox");
        const ListBox = namespace.getClass("ListBox");
        const StringList = namespace.getClass("StringList");
        const StringObject = namespace.getClass("StringObject");
        const GObject = namespace.assertInstalledImport("GObject").assertClass("Object");

        if (!FlowBox) {
            throw new Error("Gtk.FlowBox not found.");
        }

        if (!ListBox) {
            throw new Error("Gtk.ListBox not found.");
        }

        if (!StringList) {
            throw new Error("Gtk.StringList not found.");
        }

        if (!StringObject) {
            throw new Error("Gtk.StringObject not found.");
        }

        // Add generic support for StringList
        StringList.addGeneric({
            default: StringObject.getType(),
            constraint: GObject.getType()
        });

        // Update bind_model methods to use generics
        const updateBindModelMethod = (cls: IntrospectedBaseClass, widgetFuncName: string) => {
            cls.members = cls.members.map(m => {
                if (m.name === "bind_model") {
                    m.generics.push(new Generic(new GenericType("A"), GObject.getType(), undefined, GObject.getType()));
                    return m.copy({
                        parameters: m.parameters.map(p => {
                            if (p.name === "model") {
                                return p.copy({
                                    type: new GenerifiedTypeIdentifier("ListModel", "Gio", [new GenericType("A")])
                                });
                            }
                            if (p.name === "create_widget_func") {
                                return p.copy({
                                    type: new GenerifiedTypeIdentifier(widgetFuncName, "Gtk", [new GenericType("A")])
                                });
                            }
                            return p;
                        })
                    });
                }
                return m;
            });
        };

        updateBindModelMethod(FlowBox, "FlowBoxCreateWidgetFunc");
        updateBindModelMethod(ListBox, "ListBoxCreateWidgetFunc");
    }
};
