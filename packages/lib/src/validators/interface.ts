import { IntrospectedInterface } from "../gir/introspected-classes.ts";
import { GirVisitor } from "../visitor.ts";

export class InterfaceVisitor extends GirVisitor {
    visitInterface = (node: IntrospectedInterface): IntrospectedInterface => {
        // If an interface does not list a prerequisite type, we fill it with GObject.Object
        if (!node.noParent && node.superType == null) {
            const gobject = node.namespace.assertInstalledImport("GObject");
            const GObject = gobject.assertClass("Object");

            if (!GObject) {
                throw new Error(
                    `GObject.Object could not be found while generating ${node.namespace.namespace}.${node.name}`
                );
            }

            node.superType = GObject.getType();
        }

        return node;
    };
}
