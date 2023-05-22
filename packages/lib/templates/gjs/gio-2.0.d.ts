// See https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/core/overrides/Gio.js
export const DBus: {
    readonly session: DBusConnection;
    readonly system: DBusConnection;
    get(bus_type: BusType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void;
    get_finish(res: AsyncResult): DBusConnection;
    get_sync(bus_type: BusType, cancellable?: Cancellable | null): DBusConnection;
    own_name(
        bus_type: BusType,
        name: string,
        flags: BusNameOwnerFlags,
        bus_acquired_closure?: GObject.Closure | null,
        name_acquired_closure?: GObject.Closure | null,
        name_lost_closure?: GObject.Closure | null
    ): number;
    own_name_on_connection(
        connection: DBusConnection,
        name: string,
        flags: BusNameOwnerFlags,
        name_acquired_closure?: GObject.Closure | null,
        name_lost_closure?: GObject.Closure | null
    ): number;
    unown_name(owner_id: number): void;
    watch_name(
        bus_type: BusType,
        name: string,
        flags: BusNameWatcherFlags,
        name_appeared_closure?: GObject.Closure | null,
        name_vanished_closure?: GObject.Closure | null
    ): number;
    unwatch_name(watcher_id: number): void;
    watch_name_on_connection(
        connection: DBusConnection,
        name: string,
        flags: BusNameWatcherFlags,
        name_appeared_closure?: GObject.Closure | null,
        name_vanished_closure?: GObject.Closure | null
    ): number;
}

export module DBusExportedObject {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

// See https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/core/overrides/Gio.js
export class DBusExportedObject {
    static $gtype: GObject.GType<DBusExportedObject>;

    constructor(properties?: Partial<DBusExportedObject.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusExportedObject.ConstructorProperties>, ...args: any[]): void;

    static wrapJSObject(info: string, obj: any): DBusExportedObject;
    get_info(): DBusInterfaceInfo;
    get_connection(): DBusConnection;
    get_object_path(): string;
    unexport_from_connection(connection: DBusConnection): void;
    ["export"](busConnection: DBusConnection, objectPath: string): void;
    unexport(): void;
    flush(): void;
    emit_signal(name: string, variant: GLib.Variant): void;
    emit_property_changed(name: string, variant: GLib.Variant): void;
}

/**
 * A convenient helper to create Promise wrappers for asynchronous functions in GJS.
 * 
 * This utility replaces the original function on the class prototype with a Promise-based version,
 * allowing the function to be called on any instance of the class, including subclasses.
 * Simply pass the class prototype, the "async" function name, and the "finish" function name as arguments.
 * 
 * The function can be used like any other Promise, without the need for a custom wrapper, by leaving out the callback argument.
 * The original function will still be available, and can be used by passing the callback.
 * 
 * @param proto - The class prototype that contains the asynchronous function.
 * @param asyncFunc - The name of the asynchronous function.
 * @param finishFunc - The name of the "finish" function that is used to retrieve the result of the asynchronous function.
 * 
 * @version Gjs 1.54
 * @see https://gjs.guide/guides/gjs/asynchronous-programming.html#promisify-helper
 * 
 * @example
 * ```js
 * import Gio from "gi://Gio?version=2.0";
 * 
 * Gio._promisify(Gio.InputStream.prototype, 'read_bytes_async', 'read_bytes_finish');
 * 
 * try {
 *    const inputStream = new Gio.UnixInputStream({fd: 0});
 *    const bytes = await inputStream.read_bytes_async(4096, GLib.PRIORITY_DEFAULT, null);
 * } catch (e) {
 *    logError(e, 'Failed to read bytes');
 * }
 * ```
 * 
 */
export function _promisify(proto: any, asyncFunc: string, finishFunc?: string): void;

/** Temporary Gio.File.prototype fix */
export const _LocalFilePrototype: typeof File.prototype;
