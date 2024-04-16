import glib from "./glib.js";
import gobject from "./gobject.js";
import gio from "./gio.js";
import tracker1 from "./tracker1.js";
import gee08 from "./gee08.js";
import gee1 from "./gee1.js";
import { IntrospectedNamespace } from "../gir/namespace.js";
import { NSRegistry } from "../gir/registry.js";

export type NamespaceInjection = (namespace: IntrospectedNamespace, registry: NSRegistry) => Promise<void>;

function injectDefinitions(registry: NSRegistry, required = true) {
    return async (definition: { namespace: string; version: string; modifier: NamespaceInjection }) => {
        const ns = registry.namespace(definition.namespace, definition.version);

        if (required && !ns) {
            throw new Error(`Namespace '${definition.namespace}' not found.`);
        }

        if (ns) {
            await definition.modifier(ns, registry);
        }
    };
}

export async function inject(registry: NSRegistry) {
    const $ = injectDefinitions(registry);

    await $(glib);
    await $(gobject);
    await $(gio);

    const $_ = injectDefinitions(registry, false);

    await $_(tracker1);
    await $_(gee08);
    await $_(gee1);
}
