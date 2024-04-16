import gio from "./gio.js";
import glib from "./glib.js";
import { clutter10, clutter11, clutter12, clutter13 } from "./clutter.js";
import { st1, st12, st13 } from "./st.js";
import { meta10, meta11, meta12, meta13 } from "./meta.js";

import { IntrospectedNamespace } from "../gir/namespace.js";
import { NSRegistry } from "../gir/registry.js";
import { GenericVisitor } from "./visitor.js";

type NamespaceModifier = (namespace: IntrospectedNamespace, inferGenerics: boolean) => Promise<void>;

function generifyDefinitions(registry: NSRegistry, inferGenerics: boolean, required: boolean = true) {
    return async (definition: { namespace: string; version: string; modifier: NamespaceModifier }) => {
        const version = definition.version;
        const ns = registry.namespace(definition.namespace, version);

        if (ns) {
            await definition.modifier(ns, inferGenerics);
            return;
        }

        if (required) {
            throw new Error(`Could not generify ${definition.namespace} ${definition.version}`);
        }
    };
}

export async function generify(registry: NSRegistry, inferGenerics: boolean) {
    const $ = generifyDefinitions(registry, inferGenerics);

    await $(gio);
    await $(glib);

    const $_ = generifyDefinitions(registry, inferGenerics, false);

    await $_(clutter10);
    await $_(clutter11);
    await $_(clutter12);
    await $_(clutter13);
    await $_(st1);
    await $_(st12);
    await $_(st13);
    await $_(meta10);
    await $_(meta11);
    await $_(meta12);
    await $_(meta13);
    const visitor = new GenericVisitor(registry, inferGenerics);

    await registry.registerTransformation(visitor);
}
