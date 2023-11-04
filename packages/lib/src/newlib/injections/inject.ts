import glib from "./glib.js";
import gobject from "./gobject.js";
import gio from "./gio.js";

import { IntrospectedNamespace } from "../gir/namespace.js";
import { NSRegistry } from "../gir/registry.js";

export type NamespaceInjection = (namespace: IntrospectedNamespace, registry: NSRegistry) => void;

function injectDefinitions(registry: NSRegistry) {
    return (definition: { namespace: string; version: string; modifier: NamespaceInjection }) => {
        const ns = registry.assertNamespace(definition.namespace, definition.version);

        definition.modifier(ns, registry);
    };
}

export function inject(registry: NSRegistry) {
    const $ = injectDefinitions(registry);

    $(glib);
    $(gobject);
    $(gio);
}
