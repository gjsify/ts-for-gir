// @ts-nocheck

/**
 * GJS replaces `Gtk.Builder` with a JS subclass (`GtkJSBuilder`) whose constructor
 * accepts five additional, JS-only properties on top of the GIR-derived ones:
 * `data`, `filename`, `resource`, `callbacks`, and `objects`. They are consumed at
 * construction time (used to call `add_from_string` / `add_from_file` /
 * `add_from_resource`, set up a callback scope, and register named objects), so
 * they appear only in the constructor signature, not as instance accessors.
 *
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/core/overrides/Gtk.js
 * @example
 * ```ts
 * const builder = new Gtk.Builder({
 *     filename: "window.ui",
 *     callbacks: { on_clicked: () => print("clicked") },
 *     objects: { existing: someExistingWidget },
 * });
 * ```
 */
export namespace Builder {
    interface ConstructorProps {
        /** Inline XML interface description. Calls `add_from_string` on construction. */
        data?: string | Uint8Array
        /** Path to a UI file. Calls `add_from_file` on construction. */
        filename?: string
        /** Resource path to a UI file. Calls `add_from_resource` on construction. */
        resource?: string
        /** Named signal callbacks resolved against `<signal>` `handler` attributes. */
        callbacks?: Record<string, (...args: any[]) => any>
        /** Pre-existing objects exposed to the UI via {@link Builder.exposeObjects}. */
        objects?: Record<string, GObject.Object>
    }
}

/**
 * GJS-only convenience method on {@link Builder}: registers every entry of
 * `objects` so the UI XML can reference them by name.
 *
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/core/overrides/Gtk.js
 */
export interface Builder {
    exposeObjects(objects: Record<string, GObject.Object>): void
}
