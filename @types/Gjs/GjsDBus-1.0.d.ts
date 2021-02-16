/**
 * GjsDBus-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export interface Implementation_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    g_interface_info?: Gio.DBusInterfaceInfo
}
export class Implementation {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GjsDBus.Implementation */
    parent: Gio.DBusInterfaceSkeleton
    priv: ImplementationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GjsDBus.Implementation */
    emit_property_changed(property: string, newvalue?: GLib.Variant | null): void
    emit_signal(signal_name: string, parameters?: GLib.Variant | null): void
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of GjsDBus.Implementation */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GjsDBus.Implementation */
    connect(sigName: "handle-method-call", callback: (($obj: Implementation, object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void)): number
    connect_after(sigName: "handle-method-call", callback: (($obj: Implementation, object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void)): number
    emit(sigName: "handle-method-call", object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-property-get", callback: (($obj: Implementation, object: string) => GLib.Variant)): number
    connect_after(sigName: "handle-property-get", callback: (($obj: Implementation, object: string) => GLib.Variant)): number
    emit(sigName: "handle-property-get", object: string): void
    connect(sigName: "handle-property-set", callback: (($obj: Implementation, object: string, p0: GLib.Variant) => void)): number
    connect_after(sigName: "handle-property-set", callback: (($obj: Implementation, object: string, p0: GLib.Variant) => void)): number
    emit(sigName: "handle-property-set", object: string, p0: GLib.Variant): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: Implementation, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: Implementation, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Implementation_ConstructProps)
    _init (config?: Implementation_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ImplementationClass {
    /* Fields of GjsDBus.ImplementationClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ImplementationPrivate {
    static name: string
}