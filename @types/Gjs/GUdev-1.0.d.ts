/**
 * GUdev-1.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum DeviceType {
    NONE,
    BLOCK,
    CHAR,
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    subsystems?: string[]
}
export class Client {
    /* Fields of GUdev.Client */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUdev.Client */
    query_by_device_file(device_file: string): Device | null
    query_by_device_number(type: DeviceType, number: DeviceNumber): Device | null
    query_by_subsystem(subsystem?: string | null): Device[] | null
    query_by_subsystem_and_name(subsystem: string, name: string): Device | null
    query_by_sysfs_path(sysfs_path: string): Device | null
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
    /* Virtual methods of GUdev.Client */
    vfunc_uevent(action: string, device: Device): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUdev.Client */
    connect(sigName: "uevent", callback: (($obj: Client, action: string, device: Device) => void)): number
    connect_after(sigName: "uevent", callback: (($obj: Client, action: string, device: Device) => void)): number
    emit(sigName: "uevent", action: string, device: Device): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(subsystems?: string[] | null): Client
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
}
export class Device {
    /* Fields of GUdev.Device */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUdev.Device */
    get_action(): string
    get_device_file(): string | null
    get_device_file_symlinks(): string[]
    get_device_number(): DeviceNumber
    get_device_type(): DeviceType
    get_devtype(): string
    get_driver(): string | null
    get_is_initialized(): boolean
    get_name(): string
    get_number(): string
    get_parent(): Device | null
    get_parent_with_subsystem(subsystem: string, devtype?: string | null): Device | null
    get_property(key: string): string | null
    get_property_as_boolean(key: string): boolean
    get_property_as_double(key: string): number
    get_property_as_int(key: string): number
    get_property_as_strv(key: string): string[] | null
    get_property_as_uint64(key: string): number
    get_property_keys(): string[]
    get_seqnum(): number
    get_subsystem(): string
    get_sysfs_attr(name: string): string | null
    get_sysfs_attr_as_boolean(name: string): boolean
    get_sysfs_attr_as_boolean_uncached(name: string): boolean
    get_sysfs_attr_as_double(name: string): number
    get_sysfs_attr_as_double_uncached(name: string): number
    get_sysfs_attr_as_int(name: string): number
    get_sysfs_attr_as_int_uncached(name: string): number
    get_sysfs_attr_as_strv(name: string): string[] | null
    get_sysfs_attr_as_strv_uncached(name: string): string[] | null
    get_sysfs_attr_as_uint64(name: string): number
    get_sysfs_attr_as_uint64_uncached(name: string): number
    get_sysfs_attr_keys(): string[]
    get_sysfs_attr_uncached(name: string): string | null
    get_sysfs_path(): string
    get_tags(): string[]
    get_usec_since_initialized(): number
    has_property(key: string): boolean
    has_sysfs_attr(key: string): boolean
    has_sysfs_attr_uncached(key: string): boolean
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Enumerator_ConstructProps extends GObject.Object_ConstructProps {
    client?: Client
}
export class Enumerator {
    /* Fields of GUdev.Enumerator */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUdev.Enumerator */
    add_match_is_initialized(): Enumerator
    add_match_name(name: string): Enumerator
    add_match_property(name: string, value: string): Enumerator
    add_match_subsystem(subsystem: string): Enumerator
    add_match_sysfs_attr(name: string, value: string): Enumerator
    add_match_tag(tag: string): Enumerator
    add_nomatch_subsystem(subsystem: string): Enumerator
    add_nomatch_sysfs_attr(name: string, value: string): Enumerator
    add_sysfs_path(sysfs_path: string): Enumerator
    execute(): Device[]
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Enumerator_ConstructProps)
    _init (config?: Enumerator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client: Client): Enumerator
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of GUdev.ClientClass */
    parent_class: GObject.ObjectClass
    uevent: (client: Client, action: string, device: Device) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class DeviceClass {
    /* Fields of GUdev.DeviceClass */
    parent_class: GObject.ObjectClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    static name: string
}
export class DevicePrivate {
    static name: string
}
export abstract class EnumeratorClass {
    /* Fields of GUdev.EnumeratorClass */
    parent_class: GObject.ObjectClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    static name: string
}
export class EnumeratorPrivate {
    static name: string
}
export type DeviceNumber = number