import glib from "./glib.js";
import gobject from "./gobject.js";
import gio from "./gio.js";

import { GirNamespace } from "../gir/namespace.js";
import { GirNSRegistry } from "../gir/registry.js";

export type NamespaceInjection = (namespace: GirNamespace, registry: GirNSRegistry) => void;

function injectDefinitions(registry: GirNSRegistry) {
  return (definition: { namespace: string; version: string; modifier: NamespaceInjection }) => {
    const ns = registry.assertNamespace(definition.namespace, definition.version);

    definition.modifier(ns, registry);
  };
}

export function inject(registry: GirNSRegistry) {
  const $ = injectDefinitions(registry);

  $(glib);
  $(gobject);
  $(gio);
}
