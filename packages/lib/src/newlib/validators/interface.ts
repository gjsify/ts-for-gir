import { GirInterface } from "../gir/class.js";
import { GirVisitor } from "../visitor.js";

export class InterfaceVisitor extends GirVisitor {
    visitInterface = (node: GirInterface): GirInterface => {
        // If an interface does not list a prerequisite type, we fill it with GObject.Object
        if (!node.noParent && node.parent == null) {
            const gobject = node.namespace.assertInstalledImport("GObject");
            const GObject = gobject.assertClass("Object");

            if (!GObject) {
                throw new Error(`GObject.Object could not be found while generating ${node.namespace.name}.${node.name}`);
            }

            node.parent = GObject.getType();
        }

        return node;
    }
}