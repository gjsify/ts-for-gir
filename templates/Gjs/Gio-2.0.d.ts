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
