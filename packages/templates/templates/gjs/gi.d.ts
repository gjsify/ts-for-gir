<%_ if(!package){ -%>
declare module 'gi' {
<% } -%>

/**
 * Requires a GObject Introspection namespace, optionally at a specific version.
 * If a version is specified and a different version of the same namespace is
 * already loaded, an error will be thrown.
 *
 * @param namespace The GI namespace to import (e.g. 'Gtk', 'GLib')
 * @param version The version of the namespace (e.g. '4.0', '2.0')
 * @returns The imported namespace module
 */
export function require(namespace: string, version?: string): any

/**
 * The `gi` module provides a single entry point for importing GObject
 * Introspection namespaces in GJS ESM modules.
 *
 * @example
 * ```ts
 * import Gi from 'gi';
 * Gi.require('Gtk', '4.0');
 * ```
 *
 * @see https://gjs-docs.gnome.org/gjs/overrides.md#gi-require
 */
<%- package ? 'declare' : '' %> const Gi: {
    readonly require: typeof require;
}

export default Gi

<%_ if(!package){ -%>
}
<% } -%>
