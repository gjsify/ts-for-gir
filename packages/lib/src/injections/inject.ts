import glib from "./glib.js";
import gobject from "./gobject.js";
import gio from "./gio.js";
import tracker1 from "./tracker1.js";
import gee08 from "./gee08.js";
import gee1 from "./gee1.js";
import gtk4 from "./gtk4.js";
import { shell14, shell15 } from "./shell.js";
import { IntrospectedNamespace } from "../gir/namespace.js";
import { NSRegistry } from "../gir/registry.js";

export type NamespaceInjection = (namespace: IntrospectedNamespace, registry: NSRegistry) => void;

function injectDefinitions(registry: NSRegistry, required = true) {
    return (definition: { namespace: string; version: string; modifier: NamespaceInjection }) => {
        const ns = registry.namespace(definition.namespace, definition.version);

        if (required && !ns) {
            throw new Error(`Namespace '${definition.namespace}' not found.`);
        }

        if (ns) {
            definition.modifier(ns, registry);
        }
    };
}

export function inject(registry: NSRegistry) {
    const $ = injectDefinitions(registry);

    $(glib);
    $(gobject);
    $(gio);

    const $_ = injectDefinitions(registry, false);

    $_(tracker1);
    $_(gee08);
    $_(gee1);
    $_(gtk4);
    $_(shell14);
    $_(shell15);
}
