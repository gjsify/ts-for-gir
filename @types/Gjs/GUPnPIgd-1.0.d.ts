/**
 * GUPnPIgd-1.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum SimpleIgdError {
    SIMPLE_IGD_ERROR_EXTERNAL_ADDRESS,
}
export interface SimpleIgd_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleIgd {
    /* Properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    readonly main_context: object
    /* Fields of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    add_port(protocol: string, external_port: number, local_ip: string, local_port: number, lease_duration: number, description: string): void
    delete_all_mappings(): boolean
    remove_port(protocol: string, external_port: number): void
    remove_port_local(protocol: string, local_ip: string, local_port: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    connect(sigName: "context-available", callback: (($obj: SimpleIgd, context: GObject.Object) => boolean)): number
    connect_after(sigName: "context-available", callback: (($obj: SimpleIgd, context: GObject.Object) => boolean)): number
    emit(sigName: "context-available", context: GObject.Object): void
    connect(sigName: "error-mapping-port", callback: (($obj: SimpleIgd, error: GLib.Error, proto: string, external_port: number, local_ip: string, local_port: number, description: string) => void)): number
    connect_after(sigName: "error-mapping-port", callback: (($obj: SimpleIgd, error: GLib.Error, proto: string, external_port: number, local_ip: string, local_port: number, description: string) => void)): number
    emit(sigName: "error-mapping-port", error: GLib.Error, proto: string, external_port: number, local_ip: string, local_port: number, description: string): void
    connect(sigName: "mapped-external-port", callback: (($obj: SimpleIgd, proto: string, external_ip: string, replaces_external_ip: string, external_port: number, local_ip: string, local_port: number, description: string) => void)): number
    connect_after(sigName: "mapped-external-port", callback: (($obj: SimpleIgd, proto: string, external_ip: string, replaces_external_ip: string, external_port: number, local_ip: string, local_port: number, description: string) => void)): number
    emit(sigName: "mapped-external-port", proto: string, external_ip: string, replaces_external_ip: string, external_port: number, local_ip: string, local_port: number, description: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleIgd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleIgd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::main-context", callback: (($obj: SimpleIgd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: SimpleIgd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleIgd_ConstructProps)
    _init (config?: SimpleIgd_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleIgd
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface SimpleIgdThread_ConstructProps extends SimpleIgd_ConstructProps {
}
export class SimpleIgdThread {
    /* Properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    readonly main_context: object
    /* Fields of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread */
    parent: SimpleIgd
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    add_port(protocol: string, external_port: number, local_ip: string, local_port: number, lease_duration: number, description: string): void
    delete_all_mappings(): boolean
    remove_port(protocol: string, external_port: number): void
    remove_port_local(protocol: string, local_ip: string, local_port: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    connect(sigName: "context-available", callback: (($obj: SimpleIgdThread, context: GObject.Object) => boolean)): number
    connect_after(sigName: "context-available", callback: (($obj: SimpleIgdThread, context: GObject.Object) => boolean)): number
    emit(sigName: "context-available", context: GObject.Object): void
    connect(sigName: "error-mapping-port", callback: (($obj: SimpleIgdThread, error: GLib.Error, proto: string, external_port: number, local_ip: string, local_port: number, description: string) => void)): number
    connect_after(sigName: "error-mapping-port", callback: (($obj: SimpleIgdThread, error: GLib.Error, proto: string, external_port: number, local_ip: string, local_port: number, description: string) => void)): number
    emit(sigName: "error-mapping-port", error: GLib.Error, proto: string, external_port: number, local_ip: string, local_port: number, description: string): void
    connect(sigName: "mapped-external-port", callback: (($obj: SimpleIgdThread, proto: string, external_ip: string, replaces_external_ip: string, external_port: number, local_ip: string, local_port: number, description: string) => void)): number
    connect_after(sigName: "mapped-external-port", callback: (($obj: SimpleIgdThread, proto: string, external_ip: string, replaces_external_ip: string, external_port: number, local_ip: string, local_port: number, description: string) => void)): number
    emit(sigName: "mapped-external-port", proto: string, external_ip: string, replaces_external_ip: string, external_port: number, local_ip: string, local_port: number, description: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleIgdThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleIgdThread, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::main-context", callback: (($obj: SimpleIgdThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: SimpleIgdThread, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleIgdThread_ConstructProps)
    _init (config?: SimpleIgdThread_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleIgdThread
    static $gtype: GObject.Type
}
export abstract class SimpleIgdClass {
    static name: string
}
export class SimpleIgdPrivate {
    static name: string
}
export abstract class SimpleIgdThreadClass {
    static name: string
}
export class SimpleIgdThreadPrivate {
    static name: string
}