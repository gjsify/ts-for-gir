/**
 * Guestfs-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum SessionEvent {
    CLOSE,
    SUBPROCESS_QUIT,
    LAUNCH_DONE,
    PROGRESS,
    APPLIANCE,
    LIBRARY,
    TRACE,
    ENTER,
    LIBVIRT_AUTH,
    WARNING,
}
export enum Tristate {
    FALSE,
    TRUE,
    NONE,
}
export interface AddDomain_ConstructProps extends GObject.Object_ConstructProps {
    allowuuid?: Tristate
    cachemode?: string
    copyonread?: Tristate
    discard?: string
    iface?: string
    libvirturi?: string
    live?: Tristate
    readonly?: Tristate
    readonlydisk?: string
}
export class AddDomain {
    /* Properties of Guestfs.AddDomain */
    allowuuid: Tristate
    cachemode: string
    copyonread: Tristate
    discard: string
    iface: string
    libvirturi: string
    live: Tristate
    readonly: Tristate
    readonlydisk: string
    /* Fields of Guestfs.AddDomain */
    parent: GObject.Object
    priv: AddDomainPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowuuid", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowuuid", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cachemode", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::copyonread", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discard", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::iface", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::libvirturi", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::libvirturi", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::live", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonlydisk", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonlydisk", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AddDomain_ConstructProps)
    _init (config?: AddDomain_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddDomain
    static $gtype: GObject.Type
}
export interface AddDrive_ConstructProps extends GObject.Object_ConstructProps {
    cachemode?: string
    copyonread?: Tristate
    discard?: string
    format?: string
    iface?: string
    label?: string
    name?: string
    protocol?: string
    readonly?: Tristate
    secret?: string
    username?: string
}
export class AddDrive {
    /* Properties of Guestfs.AddDrive */
    cachemode: string
    copyonread: Tristate
    discard: string
    format: string
    iface: string
    label: string
    name: string
    protocol: string
    readonly: Tristate
    secret: string
    username: string
    /* Fields of Guestfs.AddDrive */
    parent: GObject.Object
    priv: AddDrivePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cachemode", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::copyonread", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discard", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::iface", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secret", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secret", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AddDrive_ConstructProps)
    _init (config?: AddDrive_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddDrive
    static $gtype: GObject.Type
}
export interface AddDriveScratch_ConstructProps extends GObject.Object_ConstructProps {
    label?: string
    name?: string
}
export class AddDriveScratch {
    /* Properties of Guestfs.AddDriveScratch */
    label: string
    name: string
    /* Fields of Guestfs.AddDriveScratch */
    parent: GObject.Object
    priv: AddDriveScratchPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AddDriveScratch_ConstructProps)
    _init (config?: AddDriveScratch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddDriveScratch
    static $gtype: GObject.Type
}
export interface AddLibvirtDom_ConstructProps extends GObject.Object_ConstructProps {
    cachemode?: string
    copyonread?: Tristate
    discard?: string
    iface?: string
    live?: Tristate
    readonly?: Tristate
    readonlydisk?: string
}
export class AddLibvirtDom {
    /* Properties of Guestfs.AddLibvirtDom */
    cachemode: string
    copyonread: Tristate
    discard: string
    iface: string
    live: Tristate
    readonly: Tristate
    readonlydisk: string
    /* Fields of Guestfs.AddLibvirtDom */
    parent: GObject.Object
    priv: AddLibvirtDomPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cachemode", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::copyonread", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discard", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::iface", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::live", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonlydisk", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonlydisk", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AddLibvirtDom_ConstructProps)
    _init (config?: AddLibvirtDom_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddLibvirtDom
    static $gtype: GObject.Type
}
export interface AugTransform_ConstructProps extends GObject.Object_ConstructProps {
    remove?: Tristate
}
export class AugTransform {
    /* Properties of Guestfs.AugTransform */
    remove: Tristate
    /* Fields of Guestfs.AugTransform */
    parent: GObject.Object
    priv: AugTransformPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: AugTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AugTransform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::remove", callback: (($obj: AugTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove", callback: (($obj: AugTransform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AugTransform_ConstructProps)
    _init (config?: AugTransform_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AugTransform
    static $gtype: GObject.Type
}
export interface BTRFSFilesystemDefragment_ConstructProps extends GObject.Object_ConstructProps {
    compress?: string
    flush?: Tristate
}
export class BTRFSFilesystemDefragment {
    /* Properties of Guestfs.BTRFSFilesystemDefragment */
    compress: string
    flush: Tristate
    /* Fields of Guestfs.BTRFSFilesystemDefragment */
    parent: GObject.Object
    priv: BTRFSFilesystemDefragmentPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compress", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flush", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BTRFSFilesystemDefragment_ConstructProps)
    _init (config?: BTRFSFilesystemDefragment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSFilesystemDefragment
    static $gtype: GObject.Type
}
export interface BTRFSFilesystemResize_ConstructProps extends GObject.Object_ConstructProps {
    size?: number
}
export class BTRFSFilesystemResize {
    /* Properties of Guestfs.BTRFSFilesystemResize */
    size: number
    /* Fields of Guestfs.BTRFSFilesystemResize */
    parent: GObject.Object
    priv: BTRFSFilesystemResizePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: BTRFSFilesystemResize, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BTRFSFilesystemResize, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: BTRFSFilesystemResize, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BTRFSFilesystemResize, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BTRFSFilesystemResize_ConstructProps)
    _init (config?: BTRFSFilesystemResize_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSFilesystemResize
    static $gtype: GObject.Type
}
export interface BTRFSImage_ConstructProps extends GObject.Object_ConstructProps {
    compresslevel?: number
}
export class BTRFSImage {
    /* Properties of Guestfs.BTRFSImage */
    compresslevel: number
    /* Fields of Guestfs.BTRFSImage */
    parent: GObject.Object
    priv: BTRFSImagePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: BTRFSImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BTRFSImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compresslevel", callback: (($obj: BTRFSImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compresslevel", callback: (($obj: BTRFSImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BTRFSImage_ConstructProps)
    _init (config?: BTRFSImage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSImage
    static $gtype: GObject.Type
}
export interface BTRFSSubvolumeCreate_ConstructProps extends GObject.Object_ConstructProps {
    qgroupid?: string
}
export class BTRFSSubvolumeCreate {
    /* Properties of Guestfs.BTRFSSubvolumeCreate */
    qgroupid: string
    /* Fields of Guestfs.BTRFSSubvolumeCreate */
    parent: GObject.Object
    priv: BTRFSSubvolumeCreatePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: BTRFSSubvolumeCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BTRFSSubvolumeCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BTRFSSubvolumeCreate_ConstructProps)
    _init (config?: BTRFSSubvolumeCreate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSSubvolumeCreate
    static $gtype: GObject.Type
}
export interface BTRFSSubvolumeSnapshot_ConstructProps extends GObject.Object_ConstructProps {
    qgroupid?: string
    ro?: Tristate
}
export class BTRFSSubvolumeSnapshot {
    /* Properties of Guestfs.BTRFSSubvolumeSnapshot */
    qgroupid: string
    ro: Tristate
    /* Fields of Guestfs.BTRFSSubvolumeSnapshot */
    parent: GObject.Object
    priv: BTRFSSubvolumeSnapshotPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ro", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ro", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BTRFSSubvolumeSnapshot_ConstructProps)
    _init (config?: BTRFSSubvolumeSnapshot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSSubvolumeSnapshot
    static $gtype: GObject.Type
}
export interface BtrfsFsck_ConstructProps extends GObject.Object_ConstructProps {
    repair?: Tristate
    superblock?: number
}
export class BtrfsFsck {
    /* Properties of Guestfs.BtrfsFsck */
    repair: Tristate
    superblock: number
    /* Fields of Guestfs.BtrfsFsck */
    parent: GObject.Object
    priv: BtrfsFsckPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::repair", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repair", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::superblock", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::superblock", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BtrfsFsck_ConstructProps)
    _init (config?: BtrfsFsck_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BtrfsFsck
    static $gtype: GObject.Type
}
export interface CompressDeviceOut_ConstructProps extends GObject.Object_ConstructProps {
    level?: number
}
export class CompressDeviceOut {
    /* Properties of Guestfs.CompressDeviceOut */
    level: number
    /* Fields of Guestfs.CompressDeviceOut */
    parent: GObject.Object
    priv: CompressDeviceOutPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CompressDeviceOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompressDeviceOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: (($obj: CompressDeviceOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: CompressDeviceOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CompressDeviceOut_ConstructProps)
    _init (config?: CompressDeviceOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompressDeviceOut
    static $gtype: GObject.Type
}
export interface CompressOut_ConstructProps extends GObject.Object_ConstructProps {
    level?: number
}
export class CompressOut {
    /* Properties of Guestfs.CompressOut */
    level: number
    /* Fields of Guestfs.CompressOut */
    parent: GObject.Object
    priv: CompressOutPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CompressOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompressOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: (($obj: CompressOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: CompressOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CompressOut_ConstructProps)
    _init (config?: CompressOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompressOut
    static $gtype: GObject.Type
}
export interface CopyAttributes_ConstructProps extends GObject.Object_ConstructProps {
    all?: Tristate
    mode?: Tristate
    ownership?: Tristate
    xattributes?: Tristate
}
export class CopyAttributes {
    /* Properties of Guestfs.CopyAttributes */
    all: Tristate
    mode: Tristate
    ownership: Tristate
    xattributes: Tristate
    /* Fields of Guestfs.CopyAttributes */
    parent: GObject.Object
    priv: CopyAttributesPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::all", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ownership", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ownership", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xattributes", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattributes", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CopyAttributes_ConstructProps)
    _init (config?: CopyAttributes_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyAttributes
    static $gtype: GObject.Type
}
export interface CopyDeviceToDevice_ConstructProps extends GObject.Object_ConstructProps {
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
export class CopyDeviceToDevice {
    /* Properties of Guestfs.CopyDeviceToDevice */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
    /* Fields of Guestfs.CopyDeviceToDevice */
    parent: GObject.Object
    priv: CopyDeviceToDevicePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::append", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sparse", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CopyDeviceToDevice_ConstructProps)
    _init (config?: CopyDeviceToDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyDeviceToDevice
    static $gtype: GObject.Type
}
export interface CopyDeviceToFile_ConstructProps extends GObject.Object_ConstructProps {
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
export class CopyDeviceToFile {
    /* Properties of Guestfs.CopyDeviceToFile */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
    /* Fields of Guestfs.CopyDeviceToFile */
    parent: GObject.Object
    priv: CopyDeviceToFilePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::append", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sparse", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CopyDeviceToFile_ConstructProps)
    _init (config?: CopyDeviceToFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyDeviceToFile
    static $gtype: GObject.Type
}
export interface CopyFileToDevice_ConstructProps extends GObject.Object_ConstructProps {
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
export class CopyFileToDevice {
    /* Properties of Guestfs.CopyFileToDevice */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
    /* Fields of Guestfs.CopyFileToDevice */
    parent: GObject.Object
    priv: CopyFileToDevicePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::append", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sparse", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CopyFileToDevice_ConstructProps)
    _init (config?: CopyFileToDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyFileToDevice
    static $gtype: GObject.Type
}
export interface CopyFileToFile_ConstructProps extends GObject.Object_ConstructProps {
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
export class CopyFileToFile {
    /* Properties of Guestfs.CopyFileToFile */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
    /* Fields of Guestfs.CopyFileToFile */
    parent: GObject.Object
    priv: CopyFileToFilePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::append", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sparse", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CopyFileToFile_ConstructProps)
    _init (config?: CopyFileToFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyFileToFile
    static $gtype: GObject.Type
}
export interface CpioOut_ConstructProps extends GObject.Object_ConstructProps {
    format?: string
}
export class CpioOut {
    /* Properties of Guestfs.CpioOut */
    format: string
    /* Fields of Guestfs.CpioOut */
    parent: GObject.Object
    priv: CpioOutPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CpioOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CpioOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::format", callback: (($obj: CpioOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: CpioOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CpioOut_ConstructProps)
    _init (config?: CpioOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CpioOut
    static $gtype: GObject.Type
}
export interface DiskCreate_ConstructProps extends GObject.Object_ConstructProps {
    backingfile?: string
    backingformat?: string
    clustersize?: number
    compat?: string
    preallocation?: string
}
export class DiskCreate {
    /* Properties of Guestfs.DiskCreate */
    backingfile: string
    backingformat: string
    clustersize: number
    compat: string
    preallocation: string
    /* Fields of Guestfs.DiskCreate */
    parent: GObject.Object
    priv: DiskCreatePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backingfile", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backingfile", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backingformat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backingformat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clustersize", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clustersize", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::compat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preallocation", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preallocation", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiskCreate_ConstructProps)
    _init (config?: DiskCreate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DiskCreate
    static $gtype: GObject.Type
}
export interface DownloadBlocks_ConstructProps extends GObject.Object_ConstructProps {
    unallocated?: Tristate
}
export class DownloadBlocks {
    /* Properties of Guestfs.DownloadBlocks */
    unallocated: Tristate
    /* Fields of Guestfs.DownloadBlocks */
    parent: GObject.Object
    priv: DownloadBlocksPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: DownloadBlocks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DownloadBlocks, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unallocated", callback: (($obj: DownloadBlocks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unallocated", callback: (($obj: DownloadBlocks, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DownloadBlocks_ConstructProps)
    _init (config?: DownloadBlocks_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DownloadBlocks
    static $gtype: GObject.Type
}
export interface E2fsck_ConstructProps extends GObject.Object_ConstructProps {
    correct?: Tristate
    forceall?: Tristate
}
export class E2fsck {
    /* Properties of Guestfs.E2fsck */
    correct: Tristate
    forceall: Tristate
    /* Fields of Guestfs.E2fsck */
    parent: GObject.Object
    priv: E2fsckPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::correct", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::correct", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::forceall", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forceall", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: E2fsck_ConstructProps)
    _init (config?: E2fsck_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): E2fsck
    static $gtype: GObject.Type
}
export interface Fstrim_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
    minimumfreeextent?: number
    offset?: number
}
export class Fstrim {
    /* Properties of Guestfs.Fstrim */
    length: number
    minimumfreeextent: number
    offset: number
    /* Fields of Guestfs.Fstrim */
    parent: GObject.Object
    priv: FstrimPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::length", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minimumfreeextent", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimumfreeextent", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Fstrim_ConstructProps)
    _init (config?: Fstrim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Fstrim
    static $gtype: GObject.Type
}
export interface GlobExpand_ConstructProps extends GObject.Object_ConstructProps {
    directoryslash?: Tristate
}
export class GlobExpand {
    /* Properties of Guestfs.GlobExpand */
    directoryslash: Tristate
    /* Fields of Guestfs.GlobExpand */
    parent: GObject.Object
    priv: GlobExpandPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: GlobExpand, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GlobExpand, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::directoryslash", callback: (($obj: GlobExpand, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directoryslash", callback: (($obj: GlobExpand, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GlobExpand_ConstructProps)
    _init (config?: GlobExpand_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GlobExpand
    static $gtype: GObject.Type
}
export interface Grep_ConstructProps extends GObject.Object_ConstructProps {
    compressed?: Tristate
    extended?: Tristate
    fixed?: Tristate
    insensitive?: Tristate
}
export class Grep {
    /* Properties of Guestfs.Grep */
    compressed: Tristate
    extended: Tristate
    fixed: Tristate
    insensitive: Tristate
    /* Fields of Guestfs.Grep */
    parent: GObject.Object
    priv: GrepPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compressed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compressed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extended", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extended", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::insensitive", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insensitive", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Grep_ConstructProps)
    _init (config?: Grep_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Grep
    static $gtype: GObject.Type
}
export interface HivexOpen_ConstructProps extends GObject.Object_ConstructProps {
    debug?: Tristate
    unsafe?: Tristate
    verbose?: Tristate
    write?: Tristate
}
export class HivexOpen {
    /* Properties of Guestfs.HivexOpen */
    debug: Tristate
    unsafe: Tristate
    verbose: Tristate
    write: Tristate
    /* Fields of Guestfs.HivexOpen */
    parent: GObject.Object
    priv: HivexOpenPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::debug", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unsafe", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unsafe", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::verbose", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::verbose", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::write", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HivexOpen_ConstructProps)
    _init (config?: HivexOpen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HivexOpen
    static $gtype: GObject.Type
}
export interface InspectGetIcon_ConstructProps extends GObject.Object_ConstructProps {
    favicon?: Tristate
    highquality?: Tristate
}
export class InspectGetIcon {
    /* Properties of Guestfs.InspectGetIcon */
    favicon: Tristate
    highquality: Tristate
    /* Fields of Guestfs.InspectGetIcon */
    parent: GObject.Object
    priv: InspectGetIconPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::favicon", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::highquality", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highquality", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InspectGetIcon_ConstructProps)
    _init (config?: InspectGetIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InspectGetIcon
    static $gtype: GObject.Type
}
export interface InternalTest_ConstructProps extends GObject.Object_ConstructProps {
    obool?: Tristate
    oint?: number
    oint64?: number
    ostring?: string
}
export class InternalTest {
    /* Properties of Guestfs.InternalTest */
    obool: Tristate
    oint: number
    oint64: number
    ostring: string
    /* Fields of Guestfs.InternalTest */
    parent: GObject.Object
    priv: InternalTestPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::obool", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::obool", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::oint", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oint", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::oint64", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oint64", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ostring", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ostring", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternalTest_ConstructProps)
    _init (config?: InternalTest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternalTest
    static $gtype: GObject.Type
}
export interface InternalTest63Optargs_ConstructProps extends GObject.Object_ConstructProps {
    opt1?: number
    opt10?: number
    opt11?: number
    opt12?: number
    opt13?: number
    opt14?: number
    opt15?: number
    opt16?: number
    opt17?: number
    opt18?: number
    opt19?: number
    opt2?: number
    opt20?: number
    opt21?: number
    opt22?: number
    opt23?: number
    opt24?: number
    opt25?: number
    opt26?: number
    opt27?: number
    opt28?: number
    opt29?: number
    opt3?: number
    opt30?: number
    opt31?: number
    opt32?: number
    opt33?: number
    opt34?: number
    opt35?: number
    opt36?: number
    opt37?: number
    opt38?: number
    opt39?: number
    opt4?: number
    opt40?: number
    opt41?: number
    opt42?: number
    opt43?: number
    opt44?: number
    opt45?: number
    opt46?: number
    opt47?: number
    opt48?: number
    opt49?: number
    opt5?: number
    opt50?: number
    opt51?: number
    opt52?: number
    opt53?: number
    opt54?: number
    opt55?: number
    opt56?: number
    opt57?: number
    opt58?: number
    opt59?: number
    opt6?: number
    opt60?: number
    opt61?: number
    opt62?: number
    opt63?: number
    opt7?: number
    opt8?: number
    opt9?: number
}
export class InternalTest63Optargs {
    /* Properties of Guestfs.InternalTest63Optargs */
    opt1: number
    opt10: number
    opt11: number
    opt12: number
    opt13: number
    opt14: number
    opt15: number
    opt16: number
    opt17: number
    opt18: number
    opt19: number
    opt2: number
    opt20: number
    opt21: number
    opt22: number
    opt23: number
    opt24: number
    opt25: number
    opt26: number
    opt27: number
    opt28: number
    opt29: number
    opt3: number
    opt30: number
    opt31: number
    opt32: number
    opt33: number
    opt34: number
    opt35: number
    opt36: number
    opt37: number
    opt38: number
    opt39: number
    opt4: number
    opt40: number
    opt41: number
    opt42: number
    opt43: number
    opt44: number
    opt45: number
    opt46: number
    opt47: number
    opt48: number
    opt49: number
    opt5: number
    opt50: number
    opt51: number
    opt52: number
    opt53: number
    opt54: number
    opt55: number
    opt56: number
    opt57: number
    opt58: number
    opt59: number
    opt6: number
    opt60: number
    opt61: number
    opt62: number
    opt63: number
    opt7: number
    opt8: number
    opt9: number
    /* Fields of Guestfs.InternalTest63Optargs */
    parent: GObject.Object
    priv: InternalTest63OptargsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::opt1", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt1", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt10", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt10", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt11", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt11", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt12", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt12", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt13", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt13", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt14", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt14", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt15", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt15", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt16", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt16", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt17", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt17", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt18", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt18", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt19", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt19", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt2", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt2", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt20", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt20", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt21", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt21", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt22", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt22", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt23", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt23", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt24", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt24", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt25", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt25", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt26", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt26", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt27", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt27", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt28", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt28", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt29", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt29", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt3", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt3", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt30", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt30", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt31", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt31", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt32", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt32", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt33", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt33", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt34", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt34", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt35", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt35", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt36", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt36", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt37", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt37", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt38", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt38", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt39", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt39", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt4", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt4", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt40", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt40", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt41", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt41", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt42", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt42", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt43", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt43", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt44", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt44", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt45", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt45", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt46", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt46", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt47", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt47", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt48", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt48", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt49", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt49", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt5", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt5", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt50", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt50", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt51", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt51", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt52", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt52", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt53", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt53", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt54", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt54", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt55", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt55", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt56", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt56", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt57", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt57", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt58", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt58", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt59", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt59", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt6", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt6", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt60", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt60", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt61", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt61", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt62", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt62", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt63", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt63", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt7", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt7", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt8", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt8", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opt9", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt9", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternalTest63Optargs_ConstructProps)
    _init (config?: InternalTest63Optargs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternalTest63Optargs
    static $gtype: GObject.Type
}
export interface InternalTestOnlyOptargs_ConstructProps extends GObject.Object_ConstructProps {
    test?: number
}
export class InternalTestOnlyOptargs {
    /* Properties of Guestfs.InternalTestOnlyOptargs */
    test: number
    /* Fields of Guestfs.InternalTestOnlyOptargs */
    parent: GObject.Object
    priv: InternalTestOnlyOptargsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: InternalTestOnlyOptargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternalTestOnlyOptargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::test", callback: (($obj: InternalTestOnlyOptargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::test", callback: (($obj: InternalTestOnlyOptargs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternalTestOnlyOptargs_ConstructProps)
    _init (config?: InternalTestOnlyOptargs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternalTestOnlyOptargs
    static $gtype: GObject.Type
}
export interface IsBlockdev_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsBlockdev {
    /* Properties of Guestfs.IsBlockdev */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsBlockdev */
    parent: GObject.Object
    priv: IsBlockdevPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: IsBlockdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsBlockdev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsBlockdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsBlockdev, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IsBlockdev_ConstructProps)
    _init (config?: IsBlockdev_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsBlockdev
    static $gtype: GObject.Type
}
export interface IsChardev_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsChardev {
    /* Properties of Guestfs.IsChardev */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsChardev */
    parent: GObject.Object
    priv: IsChardevPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: IsChardev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsChardev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsChardev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsChardev, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IsChardev_ConstructProps)
    _init (config?: IsChardev_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsChardev
    static $gtype: GObject.Type
}
export interface IsDir_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsDir {
    /* Properties of Guestfs.IsDir */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsDir */
    parent: GObject.Object
    priv: IsDirPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: IsDir, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsDir, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsDir, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsDir, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IsDir_ConstructProps)
    _init (config?: IsDir_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsDir
    static $gtype: GObject.Type
}
export interface IsFifo_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsFifo {
    /* Properties of Guestfs.IsFifo */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsFifo */
    parent: GObject.Object
    priv: IsFifoPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: IsFifo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsFifo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsFifo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsFifo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IsFifo_ConstructProps)
    _init (config?: IsFifo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsFifo
    static $gtype: GObject.Type
}
export interface IsFile_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsFile {
    /* Properties of Guestfs.IsFile */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsFile */
    parent: GObject.Object
    priv: IsFilePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: IsFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IsFile_ConstructProps)
    _init (config?: IsFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsFile
    static $gtype: GObject.Type
}
export interface IsSocket_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsSocket {
    /* Properties of Guestfs.IsSocket */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsSocket */
    parent: GObject.Object
    priv: IsSocketPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: IsSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsSocket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IsSocket_ConstructProps)
    _init (config?: IsSocket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsSocket
    static $gtype: GObject.Type
}
export interface MDCreate_ConstructProps extends GObject.Object_ConstructProps {
    chunk?: number
    level?: string
    missingbitmap?: number
    nrdevices?: number
    spare?: number
}
export class MDCreate {
    /* Properties of Guestfs.MDCreate */
    chunk: number
    level: string
    missingbitmap: number
    nrdevices: number
    spare: number
    /* Fields of Guestfs.MDCreate */
    parent: GObject.Object
    priv: MDCreatePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::chunk", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::level", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::missingbitmap", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::missingbitmap", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nrdevices", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nrdevices", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spare", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spare", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MDCreate_ConstructProps)
    _init (config?: MDCreate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MDCreate
    static $gtype: GObject.Type
}
export interface Mke2fs_ConstructProps extends GObject.Object_ConstructProps {
    blockscount?: number
    blocksize?: number
    blockspergroup?: number
    bytesperinode?: number
    creatoros?: string
    discard?: Tristate
    extent?: Tristate
    filetype?: Tristate
    flexbg?: Tristate
    forcecreate?: Tristate
    fragsize?: number
    fstype?: string
    hasjournal?: Tristate
    inodesize?: number
    journaldev?: Tristate
    journaldevice?: string
    journalsize?: number
    label?: string
    largefile?: Tristate
    lastmounteddir?: string
    lazyitableinit?: Tristate
    lazyjournalinit?: Tristate
    maxonlineresize?: number
    mmpupdateinterval?: number
    numberofgroups?: number
    numberofinodes?: number
    quota?: Tristate
    quotatype?: Tristate
    reservedblockspercentage?: number
    resizeinode?: Tristate
    sparsesuper?: Tristate
    stridesize?: number
    stripewidth?: number
    testfs?: Tristate
    uninitbg?: Tristate
    usagetype?: string
    uuid?: string
    writesbandgrouponly?: Tristate
}
export class Mke2fs {
    /* Properties of Guestfs.Mke2fs */
    blockscount: number
    blocksize: number
    blockspergroup: number
    bytesperinode: number
    creatoros: string
    discard: Tristate
    extent: Tristate
    filetype: Tristate
    flexbg: Tristate
    forcecreate: Tristate
    fragsize: number
    fstype: string
    hasjournal: Tristate
    inodesize: number
    journaldev: Tristate
    journaldevice: string
    journalsize: number
    label: string
    largefile: Tristate
    lastmounteddir: string
    lazyitableinit: Tristate
    lazyjournalinit: Tristate
    maxonlineresize: number
    mmpupdateinterval: number
    numberofgroups: number
    numberofinodes: number
    quota: Tristate
    quotatype: Tristate
    reservedblockspercentage: number
    resizeinode: Tristate
    sparsesuper: Tristate
    stridesize: number
    stripewidth: number
    testfs: Tristate
    uninitbg: Tristate
    usagetype: string
    uuid: string
    writesbandgrouponly: Tristate
    /* Fields of Guestfs.Mke2fs */
    parent: GObject.Object
    priv: Mke2fsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blockscount", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blockscount", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blockspergroup", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blockspergroup", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bytesperinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytesperinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creatoros", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creatoros", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discard", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extent", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extent", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flexbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flexbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::forcecreate", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcecreate", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fragsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fragsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fstype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fstype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hasjournal", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hasjournal", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inodesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inodesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::journaldev", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journaldev", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::journaldevice", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journaldevice", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::journalsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journalsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::largefile", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::largefile", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lastmounteddir", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lastmounteddir", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lazyitableinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyitableinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lazyjournalinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyjournalinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maxonlineresize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxonlineresize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mmpupdateinterval", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mmpupdateinterval", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::numberofgroups", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numberofgroups", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::numberofinodes", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numberofinodes", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quotatype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quotatype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reservedblockspercentage", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockspercentage", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizeinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizeinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sparsesuper", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparsesuper", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stridesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stridesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stripewidth", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stripewidth", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::testfs", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::testfs", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uninitbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uninitbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::usagetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::usagetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writesbandgrouponly", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writesbandgrouponly", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Mke2fs_ConstructProps)
    _init (config?: Mke2fs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mke2fs
    static $gtype: GObject.Type
}
export interface Mkfs_ConstructProps extends GObject.Object_ConstructProps {
    blocksize?: number
    features?: string
    inode?: number
    label?: string
    sectorsize?: number
}
export class Mkfs {
    /* Properties of Guestfs.Mkfs */
    blocksize: number
    features: string
    inode: number
    label: string
    sectorsize: number
    /* Fields of Guestfs.Mkfs */
    parent: GObject.Object
    priv: MkfsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::features", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inode", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inode", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sectorsize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sectorsize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Mkfs_ConstructProps)
    _init (config?: Mkfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mkfs
    static $gtype: GObject.Type
}
export interface MkfsBtrfs_ConstructProps extends GObject.Object_ConstructProps {
    allocstart?: number
    bytecount?: number
    datatype?: string
    label?: string
    leafsize?: number
    metadata?: string
    nodesize?: number
    sectorsize?: number
}
export class MkfsBtrfs {
    /* Properties of Guestfs.MkfsBtrfs */
    allocstart: number
    bytecount: number
    datatype: string
    label: string
    leafsize: number
    metadata: string
    nodesize: number
    sectorsize: number
    /* Fields of Guestfs.MkfsBtrfs */
    parent: GObject.Object
    priv: MkfsBtrfsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allocstart", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocstart", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bytecount", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytecount", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::datatype", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datatype", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::leafsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leafsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::metadata", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nodesize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodesize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sectorsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sectorsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MkfsBtrfs_ConstructProps)
    _init (config?: MkfsBtrfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MkfsBtrfs
    static $gtype: GObject.Type
}
export interface Mksquashfs_ConstructProps extends GObject.Object_ConstructProps {
    compress?: string
}
export class Mksquashfs {
    /* Properties of Guestfs.Mksquashfs */
    compress: string
    /* Fields of Guestfs.Mksquashfs */
    parent: GObject.Object
    priv: MksquashfsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Mksquashfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mksquashfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compress", callback: (($obj: Mksquashfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: Mksquashfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Mksquashfs_ConstructProps)
    _init (config?: Mksquashfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mksquashfs
    static $gtype: GObject.Type
}
export interface Mkswap_ConstructProps extends GObject.Object_ConstructProps {
    label?: string
    uuid?: string
}
export class Mkswap {
    /* Properties of Guestfs.Mkswap */
    label: string
    uuid: string
    /* Fields of Guestfs.Mkswap */
    parent: GObject.Object
    priv: MkswapPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Mkswap_ConstructProps)
    _init (config?: Mkswap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mkswap
    static $gtype: GObject.Type
}
export interface Mktemp_ConstructProps extends GObject.Object_ConstructProps {
    suffix?: string
}
export class Mktemp {
    /* Properties of Guestfs.Mktemp */
    suffix: string
    /* Fields of Guestfs.Mktemp */
    parent: GObject.Object
    priv: MktempPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Mktemp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mktemp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::suffix", callback: (($obj: Mktemp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: (($obj: Mktemp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Mktemp_ConstructProps)
    _init (config?: Mktemp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mktemp
    static $gtype: GObject.Type
}
export interface Mount9P_ConstructProps extends GObject.Object_ConstructProps {
    options?: string
}
export class Mount9P {
    /* Properties of Guestfs.Mount9P */
    options: string
    /* Fields of Guestfs.Mount9P */
    parent: GObject.Object
    priv: Mount9PPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Mount9P, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mount9P, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::options", callback: (($obj: Mount9P, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: Mount9P, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Mount9P_ConstructProps)
    _init (config?: Mount9P_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mount9P
    static $gtype: GObject.Type
}
export interface MountLocal_ConstructProps extends GObject.Object_ConstructProps {
    cachetimeout?: number
    debugcalls?: Tristate
    options?: string
    readonly?: Tristate
}
export class MountLocal {
    /* Properties of Guestfs.MountLocal */
    cachetimeout: number
    debugcalls: Tristate
    options: string
    readonly: Tristate
    /* Fields of Guestfs.MountLocal */
    parent: GObject.Object
    priv: MountLocalPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cachetimeout", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachetimeout", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::debugcalls", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debugcalls", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::options", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MountLocal_ConstructProps)
    _init (config?: MountLocal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MountLocal
    static $gtype: GObject.Type
}
export interface NTFSResizeOpts_ConstructProps extends GObject.Object_ConstructProps {
    force?: Tristate
    size?: number
}
export class NTFSResizeOpts {
    /* Properties of Guestfs.NTFSResizeOpts */
    force: Tristate
    size: number
    /* Fields of Guestfs.NTFSResizeOpts */
    parent: GObject.Object
    priv: NTFSResizeOptsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::force", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NTFSResizeOpts_ConstructProps)
    _init (config?: NTFSResizeOpts_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NTFSResizeOpts
    static $gtype: GObject.Type
}
export interface NtfscloneOut_ConstructProps extends GObject.Object_ConstructProps {
    force?: Tristate
    ignorefscheck?: Tristate
    metadataonly?: Tristate
    preservetimestamps?: Tristate
    rescue?: Tristate
}
export class NtfscloneOut {
    /* Properties of Guestfs.NtfscloneOut */
    force: Tristate
    ignorefscheck: Tristate
    metadataonly: Tristate
    preservetimestamps: Tristate
    rescue: Tristate
    /* Fields of Guestfs.NtfscloneOut */
    parent: GObject.Object
    priv: NtfscloneOutPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::force", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignorefscheck", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignorefscheck", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::metadataonly", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadataonly", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preservetimestamps", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preservetimestamps", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rescue", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rescue", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NtfscloneOut_ConstructProps)
    _init (config?: NtfscloneOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NtfscloneOut
    static $gtype: GObject.Type
}
export interface Ntfsfix_ConstructProps extends GObject.Object_ConstructProps {
    clearbadsectors?: Tristate
}
export class Ntfsfix {
    /* Properties of Guestfs.Ntfsfix */
    clearbadsectors: Tristate
    /* Fields of Guestfs.Ntfsfix */
    parent: GObject.Object
    priv: NtfsfixPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Ntfsfix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Ntfsfix, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clearbadsectors", callback: (($obj: Ntfsfix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clearbadsectors", callback: (($obj: Ntfsfix, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Ntfsfix_ConstructProps)
    _init (config?: Ntfsfix_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Ntfsfix
    static $gtype: GObject.Type
}
export interface Remount_ConstructProps extends GObject.Object_ConstructProps {
    rw?: Tristate
}
export class Remount {
    /* Properties of Guestfs.Remount */
    rw: Tristate
    /* Fields of Guestfs.Remount */
    parent: GObject.Object
    priv: RemountPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Remount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Remount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::rw", callback: (($obj: Remount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rw", callback: (($obj: Remount, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Remount_ConstructProps)
    _init (config?: Remount_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Remount
    static $gtype: GObject.Type
}
export interface Rsync_ConstructProps extends GObject.Object_ConstructProps {
    archive?: Tristate
    deletedest?: Tristate
}
export class Rsync {
    /* Properties of Guestfs.Rsync */
    archive: Tristate
    deletedest: Tristate
    /* Fields of Guestfs.Rsync */
    parent: GObject.Object
    priv: RsyncPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::archive", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletedest", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Rsync_ConstructProps)
    _init (config?: Rsync_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Rsync
    static $gtype: GObject.Type
}
export interface RsyncIn_ConstructProps extends GObject.Object_ConstructProps {
    archive?: Tristate
    deletedest?: Tristate
}
export class RsyncIn {
    /* Properties of Guestfs.RsyncIn */
    archive: Tristate
    deletedest: Tristate
    /* Fields of Guestfs.RsyncIn */
    parent: GObject.Object
    priv: RsyncInPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::archive", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletedest", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RsyncIn_ConstructProps)
    _init (config?: RsyncIn_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RsyncIn
    static $gtype: GObject.Type
}
export interface RsyncOut_ConstructProps extends GObject.Object_ConstructProps {
    archive?: Tristate
    deletedest?: Tristate
}
export class RsyncOut {
    /* Properties of Guestfs.RsyncOut */
    archive: Tristate
    deletedest: Tristate
    /* Fields of Guestfs.RsyncOut */
    parent: GObject.Object
    priv: RsyncOutPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::archive", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletedest", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RsyncOut_ConstructProps)
    _init (config?: RsyncOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RsyncOut
    static $gtype: GObject.Type
}
export interface SelinuxRelabel_ConstructProps extends GObject.Object_ConstructProps {
    force?: Tristate
}
export class SelinuxRelabel {
    /* Properties of Guestfs.SelinuxRelabel */
    force: Tristate
    /* Fields of Guestfs.SelinuxRelabel */
    parent: GObject.Object
    priv: SelinuxRelabelPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: SelinuxRelabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SelinuxRelabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::force", callback: (($obj: SelinuxRelabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: SelinuxRelabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SelinuxRelabel_ConstructProps)
    _init (config?: SelinuxRelabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SelinuxRelabel
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
}
export class Session {
    /* Fields of Guestfs.Session */
    parent: GObject.Object
    priv: SessionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Guestfs.Session */
    acl_delete_def_file(dir: string): boolean
    acl_get_file(path: string, acltype: string): string
    acl_set_file(path: string, acltype: string, acl: string): boolean
    add_cdrom(filename: string): boolean
    add_domain(dom: string, optargs?: AddDomain | null): number
    add_drive(filename: string, optargs?: AddDrive | null): boolean
    add_drive_ro(filename: string): boolean
    add_drive_ro_with_if(filename: string, iface: string): boolean
    add_drive_scratch(size: number, optargs?: AddDriveScratch | null): boolean
    add_drive_with_if(filename: string, iface: string): boolean
    add_libvirt_dom(dom?: object | null, optargs?: AddLibvirtDom | null): number
    aug_clear(augpath: string): boolean
    aug_close(): boolean
    aug_defnode(name: string, expr: string, val: string): IntBool
    aug_defvar(name: string, expr?: string | null): number
    aug_get(augpath: string): string
    aug_init(root: string, flags: number): boolean
    aug_insert(augpath: string, label: string, before: boolean): boolean
    aug_label(augpath: string): string
    aug_load(): boolean
    aug_ls(augpath: string): string[]
    aug_match(augpath: string): string[]
    aug_mv(src: string, dest: string): boolean
    aug_rm(augpath: string): number
    aug_save(): boolean
    aug_set(augpath: string, val: string): boolean
    aug_setm(base: string, sub: string | null, val: string): number
    aug_transform(lens: string, file: string, optargs?: AugTransform | null): boolean
    available(groups: string[]): boolean
    available_all_groups(): string[]
    base64_in(base64file: string, filename: string, cancellable?: Gio.Cancellable | null): boolean
    base64_out(filename: string, base64file: string, cancellable?: Gio.Cancellable | null): boolean
    blkdiscard(device: string): boolean
    blkdiscardzeroes(device: string): number
    blkid(device: string): GLib.HashTable
    blockdev_flushbufs(device: string): boolean
    blockdev_getbsz(device: string): number
    blockdev_getro(device: string): number
    blockdev_getsize64(device: string): number
    blockdev_getss(device: string): number
    blockdev_getsz(device: string): number
    blockdev_rereadpt(device: string): boolean
    blockdev_setbsz(device: string, blocksize: number): boolean
    blockdev_setra(device: string, sectors: number): boolean
    blockdev_setro(device: string): boolean
    blockdev_setrw(device: string): boolean
    btrfs_balance_cancel(path: string): boolean
    btrfs_balance_pause(path: string): boolean
    btrfs_balance_resume(path: string): boolean
    btrfs_balance_status(path: string): BTRFSBalance
    btrfs_device_add(devices: string[], fs: string): boolean
    btrfs_device_delete(devices: string[], fs: string): boolean
    btrfs_filesystem_balance(fs: string): boolean
    btrfs_filesystem_defragment(path: string, optargs?: BTRFSFilesystemDefragment | null): boolean
    btrfs_filesystem_resize(mountpoint: string, optargs?: BTRFSFilesystemResize | null): boolean
    btrfs_filesystem_show(device: string): string[]
    btrfs_filesystem_sync(fs: string): boolean
    btrfs_fsck(device: string, optargs?: BtrfsFsck | null): boolean
    btrfs_image(source: string[], image: string, optargs?: BTRFSImage | null): boolean
    btrfs_qgroup_assign(src: string, dst: string, path: string): boolean
    btrfs_qgroup_create(qgroupid: string, subvolume: string): boolean
    btrfs_qgroup_destroy(qgroupid: string, subvolume: string): boolean
    btrfs_qgroup_limit(subvolume: string, size: number): boolean
    btrfs_qgroup_remove(src: string, dst: string, path: string): boolean
    btrfs_qgroup_show(path: string): BTRFSQgroup[]
    btrfs_quota_enable(fs: string, enable: boolean): boolean
    btrfs_quota_rescan(fs: string): boolean
    btrfs_replace(srcdev: string, targetdev: string, mntpoint: string): boolean
    btrfs_rescue_chunk_recover(device: string): boolean
    btrfs_rescue_super_recover(device: string): boolean
    btrfs_scrub_cancel(path: string): boolean
    btrfs_scrub_resume(path: string): boolean
    btrfs_scrub_start(path: string): boolean
    btrfs_scrub_status(path: string): BTRFSScrub
    btrfs_set_seeding(device: string, seeding: boolean): boolean
    btrfs_subvolume_create(dest: string, optargs?: BTRFSSubvolumeCreate | null): boolean
    btrfs_subvolume_delete(subvolume: string): boolean
    btrfs_subvolume_get_default(fs: string): number
    btrfs_subvolume_list(fs: string): BTRFSSubvolume[]
    btrfs_subvolume_set_default(id: number, fs: string): boolean
    btrfs_subvolume_show(subvolume: string): GLib.HashTable
    btrfs_subvolume_snapshot(source: string, dest: string, optargs?: BTRFSSubvolumeSnapshot | null): boolean
    btrfstune_enable_extended_inode_refs(device: string): boolean
    btrfstune_enable_skinny_metadata_extent_refs(device: string): boolean
    btrfstune_seeding(device: string, seeding: boolean): boolean
    c_pointer(): number
    canonical_device_name(device: string): string
    cap_get_file(path: string): string
    cap_set_file(path: string, cap: string): boolean
    case_sensitive_path(path: string): string
    cat(path: string): string
    checksum(csumtype: string, path: string): string
    checksum_device(csumtype: string, device: string): string
    checksums_out(csumtype: string, directory: string, sumsfile: string, cancellable?: Gio.Cancellable | null): boolean
    chmod(mode: number, path: string): boolean
    chown(owner: number, group: number, path: string): boolean
    clear_backend_setting(name: string): number
    close(): boolean
    command(arguments_: string[]): string
    command_lines(arguments_: string[]): string[]
    compress_device_out(ctype: string, device: string, zdevice: string, optargs?: CompressDeviceOut | null, cancellable?: Gio.Cancellable | null): boolean
    compress_out(ctype: string, file: string, zfile: string, optargs?: CompressOut | null, cancellable?: Gio.Cancellable | null): boolean
    config(hvparam: string, hvvalue?: string | null): boolean
    copy_attributes(src: string, dest: string, optargs?: CopyAttributes | null): boolean
    copy_device_to_device(src: string, dest: string, optargs?: CopyDeviceToDevice | null): boolean
    copy_device_to_file(src: string, dest: string, optargs?: CopyDeviceToFile | null): boolean
    copy_file_to_device(src: string, dest: string, optargs?: CopyFileToDevice | null): boolean
    copy_file_to_file(src: string, dest: string, optargs?: CopyFileToFile | null): boolean
    copy_in(localpath: string, remotedir: string): boolean
    copy_out(remotepath: string, localdir: string): boolean
    copy_size(src: string, dest: string, size: number): boolean
    cp(src: string, dest: string): boolean
    cp_a(src: string, dest: string): boolean
    cp_r(src: string, dest: string): boolean
    cpio_out(directory: string, cpiofile: string, optargs?: CpioOut | null, cancellable?: Gio.Cancellable | null): boolean
    dd(src: string, dest: string): boolean
    debug(subcmd: string, extraargs: string[]): string
    debug_drives(): string[]
    debug_upload(filename: string, tmpname: string, mode: number, cancellable?: Gio.Cancellable | null): boolean
    device_index(device: string): number
    df(): string
    df_h(): string
    disk_create(filename: string, format: string, size: number, optargs?: DiskCreate | null): boolean
    disk_format(filename: string): string
    disk_has_backing_file(filename: string): number
    disk_virtual_size(filename: string): number
    dmesg(): string
    download(remotefilename: string, filename: string, cancellable?: Gio.Cancellable | null): boolean
    download_blocks(device: string, start: number, stop: number, filename: string, optargs?: DownloadBlocks | null, cancellable?: Gio.Cancellable | null): boolean
    download_inode(device: string, inode: number, filename: string, cancellable?: Gio.Cancellable | null): boolean
    download_offset(remotefilename: string, filename: string, offset: number, size: number, cancellable?: Gio.Cancellable | null): boolean
    drop_caches(whattodrop: number): boolean
    du(path: string): number
    e2fsck(device: string, optargs?: E2fsck | null): boolean
    e2fsck_f(device: string): boolean
    echo_daemon(words: string[]): string
    egrep(regex: string, path: string): string[]
    egrepi(regex: string, path: string): string[]
    equal(file1: string, file2: string): number
    exists(path: string): number
    extlinux(directory: string): boolean
    f2fs_expand(device: string): boolean
    fallocate(path: string, len: number): boolean
    fallocate64(path: string, len: number): boolean
    feature_available(groups: string[]): number
    fgrep(pattern: string, path: string): string[]
    fgrepi(pattern: string, path: string): string[]
    file(path: string): string
    file_architecture(filename: string): string
    filesize(file: string): number
    filesystem_available(filesystem: string): number
    filesystem_walk(device: string, cancellable?: Gio.Cancellable | null): TSKDirent[]
    fill(c: number, len: number, path: string): boolean
    fill_dir(dir: string, nr: number): boolean
    fill_pattern(pattern: string, len: number, path: string): boolean
    find(directory: string): string[]
    find0(directory: string, files: string, cancellable?: Gio.Cancellable | null): boolean
    find_inode(device: string, inode: number, cancellable?: Gio.Cancellable | null): TSKDirent[]
    findfs_label(label: string): string
    findfs_uuid(uuid: string): string
    fsck(fstype: string, device: string): number
    fstrim(mountpoint: string, optargs?: Fstrim | null): boolean
    get_append(): string
    get_attach_method(): string
    get_autosync(): number
    get_backend(): string
    get_backend_setting(name: string): string
    get_backend_settings(): string[]
    get_cachedir(): string
    get_direct(): number
    get_e2attrs(file: string): string
    get_e2generation(file: string): number
    get_e2label(device: string): string
    get_e2uuid(device: string): string
    get_hv(): string
    get_identifier(): string
    get_libvirt_requested_credential_challenge(index: number): string
    get_libvirt_requested_credential_defresult(index: number): string
    get_libvirt_requested_credential_prompt(index: number): string
    get_libvirt_requested_credentials(): string[]
    get_memsize(): number
    get_network(): number
    get_path(): string
    get_pgroup(): number
    get_pid(): number
    get_program(): string
    get_qemu(): string
    get_recovery_proc(): number
    get_selinux(): number
    get_smp(): number
    get_sockdir(): string
    get_state(): number
    get_tmpdir(): string
    get_trace(): number
    get_umask(): number
    get_verbose(): number
    getcon(): string
    getxattr(path: string, name: string): Uint8Array[]
    getxattrs(path: string): XAttr[]
    glob_expand(pattern: string, optargs?: GlobExpand | null): string[]
    grep(regex: string, path: string, optargs?: Grep | null): string[]
    grepi(regex: string, path: string): string[]
    grub_install(root: string, device: string): boolean
    head(path: string): string[]
    head_n(nrlines: number, path: string): string[]
    hexdump(path: string): string
    hivex_close(): boolean
    hivex_commit(filename?: string | null): boolean
    hivex_node_add_child(parent: number, name: string): number
    hivex_node_children(nodeh: number): HivexNode[]
    hivex_node_delete_child(nodeh: number): boolean
    hivex_node_get_child(nodeh: number, name: string): number
    hivex_node_get_value(nodeh: number, key: string): number
    hivex_node_name(nodeh: number): string
    hivex_node_parent(nodeh: number): number
    hivex_node_set_value(nodeh: number, key: string, t: number, val: Uint8Array[]): boolean
    hivex_node_values(nodeh: number): HivexValue[]
    hivex_open(filename: string, optargs?: HivexOpen | null): boolean
    hivex_root(): number
    hivex_value_key(valueh: number): string
    hivex_value_string(valueh: number): string
    hivex_value_type(valueh: number): number
    hivex_value_utf8(valueh: number): string
    hivex_value_value(valueh: number): Uint8Array[]
    initrd_cat(initrdpath: string, filename: string): Uint8Array[]
    initrd_list(path: string): string[]
    inotify_add_watch(path: string, mask: number): number
    inotify_close(): boolean
    inotify_files(): string[]
    inotify_init(maxevents: number): boolean
    inotify_read(): INotifyEvent[]
    inotify_rm_watch(wd: number): boolean
    inspect_get_arch(root: string): string
    inspect_get_distro(root: string): string
    inspect_get_drive_mappings(root: string): GLib.HashTable
    inspect_get_filesystems(root: string): string[]
    inspect_get_format(root: string): string
    inspect_get_hostname(root: string): string
    inspect_get_icon(root: string, optargs?: InspectGetIcon | null): Uint8Array[]
    inspect_get_major_version(root: string): number
    inspect_get_minor_version(root: string): number
    inspect_get_mountpoints(root: string): GLib.HashTable
    inspect_get_osinfo(root: string): string
    inspect_get_package_format(root: string): string
    inspect_get_package_management(root: string): string
    inspect_get_product_name(root: string): string
    inspect_get_product_variant(root: string): string
    inspect_get_roots(): string[]
    inspect_get_type(root: string): string
    inspect_get_windows_current_control_set(root: string): string
    inspect_get_windows_software_hive(root: string): string
    inspect_get_windows_system_hive(root: string): string
    inspect_get_windows_systemroot(root: string): string
    inspect_is_live(root: string): number
    inspect_is_multipart(root: string): number
    inspect_is_netinst(root: string): number
    inspect_list_applications(root: string): Application[]
    inspect_list_applications2(root: string): Application2[]
    inspect_os(): string[]
    internal_exit(cancellable?: Gio.Cancellable | null): boolean
    internal_test(str: string, optstr: string | null, strlist: string[], b: boolean, integer: number, integer64: number, filein: string, fileout: string, bufferin: Uint8Array[], optargs?: InternalTest | null, cancellable?: Gio.Cancellable | null): boolean
    internal_test_63_optargs(optargs?: InternalTest63Optargs | null, cancellable?: Gio.Cancellable | null): boolean
    internal_test_close_output(): boolean
    internal_test_only_optargs(optargs?: InternalTestOnlyOptargs | null, cancellable?: Gio.Cancellable | null): boolean
    internal_test_rbool(val: string): number
    internal_test_rboolerr(): number
    internal_test_rbufferout(val: string): Uint8Array[]
    internal_test_rbufferouterr(): Uint8Array[]
    internal_test_rconstoptstring(val: string): string
    internal_test_rconstoptstringerr(): string
    internal_test_rconststring(val: string): string
    internal_test_rconststringerr(): string
    internal_test_rhashtable(val: string): GLib.HashTable
    internal_test_rhashtableerr(): GLib.HashTable
    internal_test_rint(val: string): number
    internal_test_rint64(val: string): number
    internal_test_rint64err(): number
    internal_test_rinterr(): number
    internal_test_rstring(val: string): string
    internal_test_rstringerr(): string
    internal_test_rstringlist(val: string): string[]
    internal_test_rstringlisterr(): string[]
    internal_test_rstruct(val: string): PV
    internal_test_rstructerr(): PV
    internal_test_rstructlist(val: string): PV[]
    internal_test_rstructlisterr(): PV[]
    internal_test_set_output(filename: string): boolean
    is_blockdev(path: string, optargs?: IsBlockdev | null): number
    is_busy(): number
    is_chardev(path: string, optargs?: IsChardev | null): number
    is_config(): number
    is_dir(path: string, optargs?: IsDir | null): number
    is_fifo(path: string, optargs?: IsFifo | null): number
    is_file(path: string, optargs?: IsFile | null): number
    is_launching(): number
    is_lv(mountable: string): number
    is_ready(): number
    is_socket(path: string, optargs?: IsSocket | null): number
    is_symlink(path: string): number
    is_whole_device(device: string): number
    is_zero(path: string): number
    is_zero_device(device: string): number
    isoinfo(isofile: string): ISOInfo
    isoinfo_device(device: string): ISOInfo
    journal_close(): boolean
    journal_get(): XAttr[]
    journal_get_data_threshold(): number
    journal_get_realtime_usec(): number
    journal_next(): number
    journal_open(directory: string): boolean
    journal_set_data_threshold(threshold: number): boolean
    journal_skip(skip: number): number
    kill_subprocess(): boolean
    launch(): boolean
    lchown(owner: number, group: number, path: string): boolean
    ldmtool_create_all(): boolean
    ldmtool_diskgroup_disks(diskgroup: string): string[]
    ldmtool_diskgroup_name(diskgroup: string): string
    ldmtool_diskgroup_volumes(diskgroup: string): string[]
    ldmtool_remove_all(): boolean
    ldmtool_scan(): string[]
    ldmtool_scan_devices(devices: string[]): string[]
    ldmtool_volume_hint(diskgroup: string, volume: string): string
    ldmtool_volume_partitions(diskgroup: string, volume: string): string[]
    ldmtool_volume_type(diskgroup: string, volume: string): string
    lgetxattr(path: string, name: string): Uint8Array[]
    lgetxattrs(path: string): XAttr[]
    list_9p(): string[]
    list_devices(): string[]
    list_disk_labels(): GLib.HashTable
    list_dm_devices(): string[]
    list_filesystems(): GLib.HashTable
    list_ldm_partitions(): string[]
    list_ldm_volumes(): string[]
    list_md_devices(): string[]
    list_partitions(): string[]
    ll(directory: string): string
    llz(directory: string): string
    ln(target: string, linkname: string): boolean
    ln_f(target: string, linkname: string): boolean
    ln_s(target: string, linkname: string): boolean
    ln_sf(target: string, linkname: string): boolean
    lremovexattr(xattr: string, path: string): boolean
    ls(directory: string): string[]
    ls0(dir: string, filenames: string): boolean
    lsetxattr(xattr: string, val: string, vallen: number, path: string): boolean
    lstat(path: string): Stat
    lstatlist(path: string, names: string[]): Stat[]
    lstatns(path: string): StatNS
    lstatnslist(path: string, names: string[]): StatNS[]
    luks_add_key(device: string, key: string, newkey: string, keyslot: number): boolean
    luks_close(device: string): boolean
    luks_format(device: string, key: string, keyslot: number): boolean
    luks_format_cipher(device: string, key: string, keyslot: number, cipher: string): boolean
    luks_kill_slot(device: string, key: string, keyslot: number): boolean
    luks_open(device: string, key: string, mapname: string): boolean
    luks_open_ro(device: string, key: string, mapname: string): boolean
    lvcreate(logvol: string, volgroup: string, mbytes: number): boolean
    lvcreate_free(logvol: string, volgroup: string, percent: number): boolean
    lvm_canonical_lv_name(lvname: string): string
    lvm_clear_filter(): boolean
    lvm_remove_all(): boolean
    lvm_scan(activate: boolean): boolean
    lvm_set_filter(devices: string[]): boolean
    lvremove(device: string): boolean
    lvrename(logvol: string, newlogvol: string): boolean
    lvresize(device: string, mbytes: number): boolean
    lvresize_free(lv: string, percent: number): boolean
    lvs(): string[]
    lvs_full(): LV[]
    lvuuid(device: string): string
    lxattrlist(path: string, names: string[]): XAttr[]
    max_disks(): number
    md_create(name: string, devices: string[], optargs?: MDCreate | null): boolean
    md_detail(md: string): GLib.HashTable
    md_stat(md: string): MDStat[]
    md_stop(md: string): boolean
    mkdir(path: string): boolean
    mkdir_mode(path: string, mode: number): boolean
    mkdir_p(path: string): boolean
    mkdtemp(tmpl: string): string
    mke2fs(device: string, optargs?: Mke2fs | null): boolean
    mke2fs_J(fstype: string, blocksize: number, device: string, journal: string): boolean
    mke2fs_JL(fstype: string, blocksize: number, device: string, label: string): boolean
    mke2fs_JU(fstype: string, blocksize: number, device: string, uuid: string): boolean
    mke2journal(blocksize: number, device: string): boolean
    mke2journal_L(blocksize: number, label: string, device: string): boolean
    mke2journal_U(blocksize: number, uuid: string, device: string): boolean
    mkfifo(mode: number, path: string): boolean
    mkfs(fstype: string, device: string, optargs?: Mkfs | null): boolean
    mkfs_b(fstype: string, blocksize: number, device: string): boolean
    mkfs_btrfs(devices: string[], optargs?: MkfsBtrfs | null): boolean
    mklost_and_found(mountpoint: string): boolean
    mkmountpoint(exemptpath: string): boolean
    mknod(mode: number, devmajor: number, devminor: number, path: string): boolean
    mknod_b(mode: number, devmajor: number, devminor: number, path: string): boolean
    mknod_c(mode: number, devmajor: number, devminor: number, path: string): boolean
    mksquashfs(path: string, filename: string, optargs?: Mksquashfs | null, cancellable?: Gio.Cancellable | null): boolean
    mkswap(device: string, optargs?: Mkswap | null): boolean
    mkswap_L(label: string, device: string): boolean
    mkswap_U(uuid: string, device: string): boolean
    mkswap_file(path: string): boolean
    mktemp(tmpl: string, optargs?: Mktemp | null): string
    modprobe(modulename: string): boolean
    mount(mountable: string, mountpoint: string): boolean
    mount_9p(mounttag: string, mountpoint: string, optargs?: Mount9P | null): boolean
    mount_local(localmountpoint: string, optargs?: MountLocal | null): boolean
    mount_local_run(cancellable?: Gio.Cancellable | null): boolean
    mount_loop(file: string, mountpoint: string): boolean
    mount_options(options: string, mountable: string, mountpoint: string): boolean
    mount_ro(mountable: string, mountpoint: string): boolean
    mount_vfs(options: string, vfstype: string, mountable: string, mountpoint: string): boolean
    mountable_device(mountable: string): string
    mountable_subvolume(mountable: string): string
    mountpoints(): GLib.HashTable
    mounts(): string[]
    mv(src: string, dest: string): boolean
    nr_devices(): number
    ntfs_3g_probe(rw: boolean, device: string): number
    ntfscat_i(device: string, inode: number, filename: string, cancellable?: Gio.Cancellable | null): boolean
    ntfsclone_in(backupfile: string, device: string, cancellable?: Gio.Cancellable | null): boolean
    ntfsclone_out(device: string, backupfile: string, optargs?: NtfscloneOut | null, cancellable?: Gio.Cancellable | null): boolean
    ntfsfix(device: string, optargs?: Ntfsfix | null): boolean
    ntfsresize(device: string, optargs?: NTFSResizeOpts | null): boolean
    ntfsresize_size(device: string, size: number): boolean
    parse_environment(): boolean
    parse_environment_list(environment: string[]): boolean
    part_add(device: string, prlogex: string, startsect: number, endsect: number): boolean
    part_del(device: string, partnum: number): boolean
    part_disk(device: string, parttype: string): boolean
    part_expand_gpt(device: string): boolean
    part_get_bootable(device: string, partnum: number): number
    part_get_disk_guid(device: string): string
    part_get_gpt_attributes(device: string, partnum: number): number
    part_get_gpt_guid(device: string, partnum: number): string
    part_get_gpt_type(device: string, partnum: number): string
    part_get_mbr_id(device: string, partnum: number): number
    part_get_mbr_part_type(device: string, partnum: number): string
    part_get_name(device: string, partnum: number): string
    part_get_parttype(device: string): string
    part_init(device: string, parttype: string): boolean
    part_list(device: string): Partition[]
    part_resize(device: string, partnum: number, endsect: number): boolean
    part_set_bootable(device: string, partnum: number, bootable: boolean): boolean
    part_set_disk_guid(device: string, guid: string): boolean
    part_set_disk_guid_random(device: string): boolean
    part_set_gpt_attributes(device: string, partnum: number, attributes: number): boolean
    part_set_gpt_guid(device: string, partnum: number, guid: string): boolean
    part_set_gpt_type(device: string, partnum: number, guid: string): boolean
    part_set_mbr_id(device: string, partnum: number, idbyte: number): boolean
    part_set_name(device: string, partnum: number, name: string): boolean
    part_to_dev(partition: string): string
    part_to_partnum(partition: string): number
    ping_daemon(): boolean
    pread(path: string, count: number, offset: number): Uint8Array[]
    pread_device(device: string, count: number, offset: number): Uint8Array[]
    pvchange_uuid(device: string): boolean
    pvchange_uuid_all(): boolean
    pvcreate(device: string): boolean
    pvremove(device: string): boolean
    pvresize(device: string): boolean
    pvresize_size(device: string, size: number): boolean
    pvs(): string[]
    pvs_full(): PV[]
    pvuuid(device: string): string
    pwrite(path: string, content: Uint8Array[], offset: number): number
    pwrite_device(device: string, content: Uint8Array[], offset: number): number
    read_file(path: string): Uint8Array[]
    read_lines(path: string): string[]
    readdir(dir: string): Dirent[]
    readlink(path: string): string
    readlinklist(path: string, names: string[]): string[]
    realpath(path: string): string
    remount(mountpoint: string, optargs?: Remount | null): boolean
    remove_drive(label: string): boolean
    removexattr(xattr: string, path: string): boolean
    rename(oldpath: string, newpath: string): boolean
    resize2fs(device: string): boolean
    resize2fs_M(device: string): boolean
    resize2fs_size(device: string, size: number): boolean
    rm(path: string): boolean
    rm_f(path: string): boolean
    rm_rf(path: string): boolean
    rmdir(path: string): boolean
    rmmountpoint(exemptpath: string): boolean
    rsync(src: string, dest: string, optargs?: Rsync | null): boolean
    rsync_in(remote: string, dest: string, optargs?: RsyncIn | null): boolean
    rsync_out(src: string, remote: string, optargs?: RsyncOut | null): boolean
    scrub_device(device: string): boolean
    scrub_file(file: string): boolean
    scrub_freespace(dir: string): boolean
    selinux_relabel(specfile: string, path: string, optargs?: SelinuxRelabel | null): boolean
    set_append(append?: string | null): boolean
    set_attach_method(backend: string): boolean
    set_autosync(autosync: boolean): boolean
    set_backend(backend: string): boolean
    set_backend_setting(name: string, val: string): boolean
    set_backend_settings(settings: string[]): boolean
    set_cachedir(cachedir?: string | null): boolean
    set_direct(direct: boolean): boolean
    set_e2attrs(file: string, attrs: string, optargs?: SetE2attrs | null): boolean
    set_e2generation(file: string, generation: number): boolean
    set_e2label(device: string, label: string): boolean
    set_e2uuid(device: string, uuid: string): boolean
    set_hv(hv: string): boolean
    set_identifier(identifier: string): boolean
    set_label(mountable: string, label: string): boolean
    set_libvirt_requested_credential(index: number, cred: Uint8Array[]): boolean
    set_libvirt_supported_credentials(creds: string[]): boolean
    set_memsize(memsize: number): boolean
    set_network(network: boolean): boolean
    set_path(searchpath?: string | null): boolean
    set_pgroup(pgroup: boolean): boolean
    set_program(program: string): boolean
    set_qemu(hv?: string | null): boolean
    set_recovery_proc(recoveryproc: boolean): boolean
    set_selinux(selinux: boolean): boolean
    set_smp(smp: number): boolean
    set_tmpdir(tmpdir?: string | null): boolean
    set_trace(trace: boolean): boolean
    set_uuid(device: string, uuid: string): boolean
    set_uuid_random(device: string): boolean
    set_verbose(verbose: boolean): boolean
    setcon(context: string): boolean
    setxattr(xattr: string, val: string, vallen: number, path: string): boolean
    sfdisk(device: string, cyls: number, heads: number, sectors: number, lines: string[]): boolean
    sfdiskM(device: string, lines: string[]): boolean
    sfdisk_N(device: string, partnum: number, cyls: number, heads: number, sectors: number, line: string): boolean
    sfdisk_disk_geometry(device: string): string
    sfdisk_kernel_geometry(device: string): string
    sfdisk_l(device: string): string
    sh(command: string): string
    sh_lines(command: string): string[]
    shutdown(): boolean
    sleep(secs: number): boolean
    stat(path: string): Stat
    statns(path: string): StatNS
    statvfs(path: string): StatVFS
    strings(path: string): string[]
    strings_e(encoding: string, path: string): string[]
    swapoff_device(device: string): boolean
    swapoff_file(file: string): boolean
    swapoff_label(label: string): boolean
    swapoff_uuid(uuid: string): boolean
    swapon_device(device: string): boolean
    swapon_file(file: string): boolean
    swapon_label(label: string): boolean
    swapon_uuid(uuid: string): boolean
    sync(): boolean
    syslinux(device: string, optargs?: Syslinux | null): boolean
    tail(path: string): string[]
    tail_n(nrlines: number, path: string): string[]
    tar_in(tarfile: string, directory: string, optargs?: TarIn | null, cancellable?: Gio.Cancellable | null): boolean
    tar_out(directory: string, tarfile: string, optargs?: TarOut | null, cancellable?: Gio.Cancellable | null): boolean
    tgz_in(tarball: string, directory: string, cancellable?: Gio.Cancellable | null): boolean
    tgz_out(directory: string, tarball: string, cancellable?: Gio.Cancellable | null): boolean
    touch(path: string): boolean
    truncate(path: string): boolean
    truncate_size(path: string, size: number): boolean
    tune2fs(device: string, optargs?: Tune2FS | null): boolean
    tune2fs_l(device: string): GLib.HashTable
    txz_in(tarball: string, directory: string, cancellable?: Gio.Cancellable | null): boolean
    txz_out(directory: string, tarball: string, cancellable?: Gio.Cancellable | null): boolean
    umask(mask: number): number
    umount(pathordevice: string, optargs?: Umount | null): boolean
    umount_all(): boolean
    umount_local(optargs?: UmountLocal | null): boolean
    upload(filename: string, remotefilename: string, cancellable?: Gio.Cancellable | null): boolean
    upload_offset(filename: string, remotefilename: string, offset: number, cancellable?: Gio.Cancellable | null): boolean
    user_cancel(): boolean
    utimens(path: string, atsecs: number, atnsecs: number, mtsecs: number, mtnsecs: number): boolean
    utsname(): UTSName
    version(): Version
    vfs_label(mountable: string): string
    vfs_minimum_size(mountable: string): number
    vfs_type(mountable: string): string
    vfs_uuid(mountable: string): string
    vg_activate(activate: boolean, volgroups: string[]): boolean
    vg_activate_all(activate: boolean): boolean
    vgchange_uuid(vg: string): boolean
    vgchange_uuid_all(): boolean
    vgcreate(volgroup: string, physvols: string[]): boolean
    vglvuuids(vgname: string): string[]
    vgmeta(vgname: string): Uint8Array[]
    vgpvuuids(vgname: string): string[]
    vgremove(vgname: string): boolean
    vgrename(volgroup: string, newvolgroup: string): boolean
    vgs(): string[]
    vgs_full(): VG[]
    vgscan(): boolean
    vguuid(vgname: string): string
    wait_ready(): boolean
    wc_c(path: string): number
    wc_l(path: string): number
    wc_w(path: string): number
    wipefs(device: string): boolean
    write(path: string, content: Uint8Array[]): boolean
    write_append(path: string, content: Uint8Array[]): boolean
    write_file(path: string, content: string, size: number): boolean
    xfs_admin(device: string, optargs?: XfsAdmin | null): boolean
    xfs_growfs(path: string, optargs?: XfsGrowfs | null): boolean
    xfs_info(pathordevice: string): XFSInfo
    xfs_repair(device: string, optargs?: XfsRepair | null): number
    yara_destroy(): boolean
    yara_load(filename: string, cancellable?: Gio.Cancellable | null): boolean
    yara_scan(path: string, cancellable?: Gio.Cancellable | null): YaraDetection[]
    zegrep(regex: string, path: string): string[]
    zegrepi(regex: string, path: string): string[]
    zero(device: string): boolean
    zero_device(device: string): boolean
    zero_free_space(directory: string): boolean
    zerofree(device: string): boolean
    zfgrep(pattern: string, path: string): string[]
    zfgrepi(pattern: string, path: string): string[]
    zfile(meth: string, path: string): string
    zgrep(regex: string, path: string): string[]
    zgrepi(regex: string, path: string): string[]
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
    /* Signals of Guestfs.Session */
    connect(sigName: "appliance", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "appliance", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "appliance", params: SessionEventParams): void
    connect(sigName: "close", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "close", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "close", params: SessionEventParams): void
    connect(sigName: "enter", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "enter", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "enter", params: SessionEventParams): void
    connect(sigName: "launch-done", callback: (($obj: Session, object: SessionEventParams) => void)): number
    connect_after(sigName: "launch-done", callback: (($obj: Session, object: SessionEventParams) => void)): number
    emit(sigName: "launch-done", object: SessionEventParams): void
    connect(sigName: "library", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "library", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "library", params: SessionEventParams): void
    connect(sigName: "libvirt-auth", callback: (($obj: Session, object: SessionEventParams) => void)): number
    connect_after(sigName: "libvirt-auth", callback: (($obj: Session, object: SessionEventParams) => void)): number
    emit(sigName: "libvirt-auth", object: SessionEventParams): void
    connect(sigName: "progress", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "progress", params: SessionEventParams): void
    connect(sigName: "subprocess-quit", callback: (($obj: Session, object: SessionEventParams) => void)): number
    connect_after(sigName: "subprocess-quit", callback: (($obj: Session, object: SessionEventParams) => void)): number
    emit(sigName: "subprocess-quit", object: SessionEventParams): void
    connect(sigName: "trace", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "trace", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "trace", params: SessionEventParams): void
    connect(sigName: "warning", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "warning", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "warning", params: SessionEventParams): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Session
    static $gtype: GObject.Type
}
export interface SetE2attrs_ConstructProps extends GObject.Object_ConstructProps {
    clear?: Tristate
}
export class SetE2attrs {
    /* Properties of Guestfs.SetE2attrs */
    clear: Tristate
    /* Fields of Guestfs.SetE2attrs */
    parent: GObject.Object
    priv: SetE2attrsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: SetE2attrs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SetE2attrs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clear", callback: (($obj: SetE2attrs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clear", callback: (($obj: SetE2attrs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SetE2attrs_ConstructProps)
    _init (config?: SetE2attrs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SetE2attrs
    static $gtype: GObject.Type
}
export interface Syslinux_ConstructProps extends GObject.Object_ConstructProps {
    directory?: string
}
export class Syslinux {
    /* Properties of Guestfs.Syslinux */
    directory: string
    /* Fields of Guestfs.Syslinux */
    parent: GObject.Object
    priv: SyslinuxPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Syslinux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Syslinux, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::directory", callback: (($obj: Syslinux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directory", callback: (($obj: Syslinux, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Syslinux_ConstructProps)
    _init (config?: Syslinux_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Syslinux
    static $gtype: GObject.Type
}
export interface TarIn_ConstructProps extends GObject.Object_ConstructProps {
    acls?: Tristate
    compress?: string
    selinux?: Tristate
    xattrs?: Tristate
}
export class TarIn {
    /* Properties of Guestfs.TarIn */
    acls: Tristate
    compress: string
    selinux: Tristate
    xattrs: Tristate
    /* Fields of Guestfs.TarIn */
    parent: GObject.Object
    priv: TarInPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::acls", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acls", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::compress", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selinux", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selinux", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xattrs", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattrs", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TarIn_ConstructProps)
    _init (config?: TarIn_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TarIn
    static $gtype: GObject.Type
}
export interface TarOut_ConstructProps extends GObject.Object_ConstructProps {
    acls?: Tristate
    compress?: string
    numericowner?: Tristate
    selinux?: Tristate
    xattrs?: Tristate
}
export class TarOut {
    /* Properties of Guestfs.TarOut */
    acls: Tristate
    compress: string
    numericowner: Tristate
    selinux: Tristate
    xattrs: Tristate
    /* Fields of Guestfs.TarOut */
    parent: GObject.Object
    priv: TarOutPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::acls", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acls", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::compress", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::numericowner", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numericowner", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selinux", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selinux", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xattrs", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattrs", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TarOut_ConstructProps)
    _init (config?: TarOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TarOut
    static $gtype: GObject.Type
}
export interface Tune2FS_ConstructProps extends GObject.Object_ConstructProps {
    errorbehavior?: string
    force?: Tristate
    group?: number
    intervalbetweenchecks?: number
    lastmounteddirectory?: string
    maxmountcount?: number
    mountcount?: number
    reservedblockscount?: number
    reservedblockspercentage?: number
    user?: number
}
export class Tune2FS {
    /* Properties of Guestfs.Tune2FS */
    errorbehavior: string
    force: Tristate
    group: number
    intervalbetweenchecks: number
    lastmounteddirectory: string
    maxmountcount: number
    mountcount: number
    reservedblockscount: number
    reservedblockspercentage: number
    user: number
    /* Fields of Guestfs.Tune2FS */
    parent: GObject.Object
    priv: Tune2FSPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::errorbehavior", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::errorbehavior", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::force", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::group", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::intervalbetweenchecks", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::intervalbetweenchecks", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lastmounteddirectory", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lastmounteddirectory", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maxmountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxmountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reservedblockscount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockscount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reservedblockspercentage", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockspercentage", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tune2FS_ConstructProps)
    _init (config?: Tune2FS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Tune2FS
    static $gtype: GObject.Type
}
export interface Umount_ConstructProps extends GObject.Object_ConstructProps {
    force?: Tristate
    lazyunmount?: Tristate
}
export class Umount {
    /* Properties of Guestfs.Umount */
    force: Tristate
    lazyunmount: Tristate
    /* Fields of Guestfs.Umount */
    parent: GObject.Object
    priv: UmountPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::force", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lazyunmount", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyunmount", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Umount_ConstructProps)
    _init (config?: Umount_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Umount
    static $gtype: GObject.Type
}
export interface UmountLocal_ConstructProps extends GObject.Object_ConstructProps {
    retry?: Tristate
}
export class UmountLocal {
    /* Properties of Guestfs.UmountLocal */
    retry: Tristate
    /* Fields of Guestfs.UmountLocal */
    parent: GObject.Object
    priv: UmountLocalPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: UmountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UmountLocal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::retry", callback: (($obj: UmountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::retry", callback: (($obj: UmountLocal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UmountLocal_ConstructProps)
    _init (config?: UmountLocal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UmountLocal
    static $gtype: GObject.Type
}
export interface XfsAdmin_ConstructProps extends GObject.Object_ConstructProps {
    extunwritten?: Tristate
    imgfile?: Tristate
    label?: string
    lazycounter?: Tristate
    projid32bit?: Tristate
    uuid?: string
    v2log?: Tristate
}
export class XfsAdmin {
    /* Properties of Guestfs.XfsAdmin */
    extunwritten: Tristate
    imgfile: Tristate
    label: string
    lazycounter: Tristate
    projid32bit: Tristate
    uuid: string
    v2log: Tristate
    /* Fields of Guestfs.XfsAdmin */
    parent: GObject.Object
    priv: XfsAdminPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::extunwritten", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extunwritten", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imgfile", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imgfile", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lazycounter", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazycounter", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::projid32bit", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projid32bit", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::v2log", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v2log", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XfsAdmin_ConstructProps)
    _init (config?: XfsAdmin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XfsAdmin
    static $gtype: GObject.Type
}
export interface XfsGrowfs_ConstructProps extends GObject.Object_ConstructProps {
    datasec?: Tristate
    datasize?: number
    logsec?: Tristate
    logsize?: number
    maxpct?: number
    rtextsize?: number
    rtsec?: Tristate
    rtsize?: number
}
export class XfsGrowfs {
    /* Properties of Guestfs.XfsGrowfs */
    datasec: Tristate
    datasize: number
    logsec: Tristate
    logsize: number
    maxpct: number
    rtextsize: number
    rtsec: Tristate
    rtsize: number
    /* Fields of Guestfs.XfsGrowfs */
    parent: GObject.Object
    priv: XfsGrowfsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::datasec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datasec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::datasize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datasize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maxpct", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxpct", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rtextsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtextsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rtsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rtsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XfsGrowfs_ConstructProps)
    _init (config?: XfsGrowfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XfsGrowfs
    static $gtype: GObject.Type
}
export interface XfsRepair_ConstructProps extends GObject.Object_ConstructProps {
    agstride?: number
    bhashsize?: number
    forcegeometry?: Tristate
    forcelogzero?: Tristate
    ihashsize?: number
    logdev?: string
    maxmem?: number
    nomodify?: Tristate
    noprefetch?: Tristate
    rtdev?: string
}
export class XfsRepair {
    /* Properties of Guestfs.XfsRepair */
    agstride: number
    bhashsize: number
    forcegeometry: Tristate
    forcelogzero: Tristate
    ihashsize: number
    logdev: string
    maxmem: number
    nomodify: Tristate
    noprefetch: Tristate
    rtdev: string
    /* Fields of Guestfs.XfsRepair */
    parent: GObject.Object
    priv: XfsRepairPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::agstride", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agstride", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bhashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bhashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::forcegeometry", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcegeometry", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::forcelogzero", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcelogzero", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ihashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ihashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maxmem", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxmem", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nomodify", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nomodify", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::noprefetch", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::noprefetch", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rtdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XfsRepair_ConstructProps)
    _init (config?: XfsRepair_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XfsRepair
    static $gtype: GObject.Type
}
export abstract class AddDomainClass {
    /* Fields of Guestfs.AddDomainClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AddDomainPrivate {
    static name: string
}
export abstract class AddDriveClass {
    /* Fields of Guestfs.AddDriveClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AddDrivePrivate {
    static name: string
}
export abstract class AddDriveScratchClass {
    /* Fields of Guestfs.AddDriveScratchClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AddDriveScratchPrivate {
    static name: string
}
export abstract class AddLibvirtDomClass {
    /* Fields of Guestfs.AddLibvirtDomClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AddLibvirtDomPrivate {
    static name: string
}
export class Application {
    /* Fields of Guestfs.Application */
    app_name: string
    app_display_name: string
    app_epoch: number
    app_version: string
    app_release: string
    app_install_path: string
    app_trans_path: string
    app_publisher: string
    app_url: string
    app_source_package: string
    app_summary: string
    app_description: string
    static name: string
}
export class Application2 {
    /* Fields of Guestfs.Application2 */
    app2_name: string
    app2_display_name: string
    app2_epoch: number
    app2_version: string
    app2_release: string
    app2_arch: string
    app2_install_path: string
    app2_trans_path: string
    app2_publisher: string
    app2_url: string
    app2_source_package: string
    app2_summary: string
    app2_description: string
    app2_spare1: string
    app2_spare2: string
    app2_spare3: string
    app2_spare4: string
    static name: string
}
export abstract class AugTransformClass {
    /* Fields of Guestfs.AugTransformClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AugTransformPrivate {
    static name: string
}
export class BTRFSBalance {
    /* Fields of Guestfs.BTRFSBalance */
    btrfsbalance_status: string
    btrfsbalance_total: number
    btrfsbalance_balanced: number
    btrfsbalance_considered: number
    btrfsbalance_left: number
    static name: string
}
export abstract class BTRFSFilesystemDefragmentClass {
    /* Fields of Guestfs.BTRFSFilesystemDefragmentClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class BTRFSFilesystemDefragmentPrivate {
    static name: string
}
export abstract class BTRFSFilesystemResizeClass {
    /* Fields of Guestfs.BTRFSFilesystemResizeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class BTRFSFilesystemResizePrivate {
    static name: string
}
export abstract class BTRFSImageClass {
    /* Fields of Guestfs.BTRFSImageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class BTRFSImagePrivate {
    static name: string
}
export class BTRFSQgroup {
    /* Fields of Guestfs.BTRFSQgroup */
    btrfsqgroup_id: string
    btrfsqgroup_rfer: number
    btrfsqgroup_excl: number
    static name: string
}
export class BTRFSScrub {
    /* Fields of Guestfs.BTRFSScrub */
    btrfsscrub_data_extents_scrubbed: number
    btrfsscrub_tree_extents_scrubbed: number
    btrfsscrub_data_bytes_scrubbed: number
    btrfsscrub_tree_bytes_scrubbed: number
    btrfsscrub_read_errors: number
    btrfsscrub_csum_errors: number
    btrfsscrub_verify_errors: number
    btrfsscrub_no_csum: number
    btrfsscrub_csum_discards: number
    btrfsscrub_super_errors: number
    btrfsscrub_malloc_errors: number
    btrfsscrub_uncorrectable_errors: number
    btrfsscrub_unverified_errors: number
    btrfsscrub_corrected_errors: number
    btrfsscrub_last_physical: number
    static name: string
}
export class BTRFSSubvolume {
    /* Fields of Guestfs.BTRFSSubvolume */
    btrfssubvolume_id: number
    btrfssubvolume_top_level_id: number
    btrfssubvolume_path: string
    static name: string
}
export abstract class BTRFSSubvolumeCreateClass {
    /* Fields of Guestfs.BTRFSSubvolumeCreateClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class BTRFSSubvolumeCreatePrivate {
    static name: string
}
export abstract class BTRFSSubvolumeSnapshotClass {
    /* Fields of Guestfs.BTRFSSubvolumeSnapshotClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class BTRFSSubvolumeSnapshotPrivate {
    static name: string
}
export abstract class BtrfsFsckClass {
    /* Fields of Guestfs.BtrfsFsckClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class BtrfsFsckPrivate {
    static name: string
}
export abstract class CompressDeviceOutClass {
    /* Fields of Guestfs.CompressDeviceOutClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CompressDeviceOutPrivate {
    static name: string
}
export abstract class CompressOutClass {
    /* Fields of Guestfs.CompressOutClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CompressOutPrivate {
    static name: string
}
export abstract class CopyAttributesClass {
    /* Fields of Guestfs.CopyAttributesClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CopyAttributesPrivate {
    static name: string
}
export abstract class CopyDeviceToDeviceClass {
    /* Fields of Guestfs.CopyDeviceToDeviceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CopyDeviceToDevicePrivate {
    static name: string
}
export abstract class CopyDeviceToFileClass {
    /* Fields of Guestfs.CopyDeviceToFileClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CopyDeviceToFilePrivate {
    static name: string
}
export abstract class CopyFileToDeviceClass {
    /* Fields of Guestfs.CopyFileToDeviceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CopyFileToDevicePrivate {
    static name: string
}
export abstract class CopyFileToFileClass {
    /* Fields of Guestfs.CopyFileToFileClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CopyFileToFilePrivate {
    static name: string
}
export abstract class CpioOutClass {
    /* Fields of Guestfs.CpioOutClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CpioOutPrivate {
    static name: string
}
export class Dirent {
    /* Fields of Guestfs.Dirent */
    ino: number
    ftyp: number
    name: string
    static name: string
}
export abstract class DiskCreateClass {
    /* Fields of Guestfs.DiskCreateClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DiskCreatePrivate {
    static name: string
}
export abstract class DownloadBlocksClass {
    /* Fields of Guestfs.DownloadBlocksClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DownloadBlocksPrivate {
    static name: string
}
export abstract class E2fsckClass {
    /* Fields of Guestfs.E2fsckClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class E2fsckPrivate {
    static name: string
}
export abstract class FstrimClass {
    /* Fields of Guestfs.FstrimClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FstrimPrivate {
    static name: string
}
export abstract class GlobExpandClass {
    /* Fields of Guestfs.GlobExpandClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GlobExpandPrivate {
    static name: string
}
export abstract class GrepClass {
    /* Fields of Guestfs.GrepClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GrepPrivate {
    static name: string
}
export class HivexNode {
    /* Fields of Guestfs.HivexNode */
    hivex_node_h: number
    static name: string
}
export abstract class HivexOpenClass {
    /* Fields of Guestfs.HivexOpenClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class HivexOpenPrivate {
    static name: string
}
export class HivexValue {
    /* Fields of Guestfs.HivexValue */
    hivex_value_h: number
    static name: string
}
export class INotifyEvent {
    /* Fields of Guestfs.INotifyEvent */
    in_wd: number
    in_mask: number
    in_cookie: number
    in_name: string
    static name: string
}
export class ISOInfo {
    /* Fields of Guestfs.ISOInfo */
    iso_system_id: string
    iso_volume_id: string
    iso_volume_space_size: number
    iso_volume_set_size: number
    iso_volume_sequence_number: number
    iso_logical_block_size: number
    iso_volume_set_id: string
    iso_publisher_id: string
    iso_data_preparer_id: string
    iso_application_id: string
    iso_copyright_file_id: string
    iso_abstract_file_id: string
    iso_bibliographic_file_id: string
    iso_volume_creation_t: number
    iso_volume_modification_t: number
    iso_volume_expiration_t: number
    iso_volume_effective_t: number
    static name: string
}
export abstract class InspectGetIconClass {
    /* Fields of Guestfs.InspectGetIconClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class InspectGetIconPrivate {
    static name: string
}
export class IntBool {
    /* Fields of Guestfs.IntBool */
    i: number
    b: number
    static name: string
}
export abstract class InternalTest63OptargsClass {
    /* Fields of Guestfs.InternalTest63OptargsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class InternalTest63OptargsPrivate {
    static name: string
}
export abstract class InternalTestClass {
    /* Fields of Guestfs.InternalTestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class InternalTestOnlyOptargsClass {
    /* Fields of Guestfs.InternalTestOnlyOptargsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class InternalTestOnlyOptargsPrivate {
    static name: string
}
export class InternalTestPrivate {
    static name: string
}
export abstract class IsBlockdevClass {
    /* Fields of Guestfs.IsBlockdevClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class IsBlockdevPrivate {
    static name: string
}
export abstract class IsChardevClass {
    /* Fields of Guestfs.IsChardevClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class IsChardevPrivate {
    static name: string
}
export abstract class IsDirClass {
    /* Fields of Guestfs.IsDirClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class IsDirPrivate {
    static name: string
}
export abstract class IsFifoClass {
    /* Fields of Guestfs.IsFifoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class IsFifoPrivate {
    static name: string
}
export abstract class IsFileClass {
    /* Fields of Guestfs.IsFileClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class IsFilePrivate {
    static name: string
}
export abstract class IsSocketClass {
    /* Fields of Guestfs.IsSocketClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class IsSocketPrivate {
    static name: string
}
export class LV {
    /* Fields of Guestfs.LV */
    lv_name: string
    lv_uuid: number[]
    lv_attr: string
    lv_major: number
    lv_minor: number
    lv_kernel_major: number
    lv_kernel_minor: number
    lv_size: number
    seg_count: number
    origin: string
    snap_percent: number
    copy_percent: number
    move_pv: string
    lv_tags: string
    mirror_log: string
    modules: string
    static name: string
}
export abstract class MDCreateClass {
    /* Fields of Guestfs.MDCreateClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MDCreatePrivate {
    static name: string
}
export class MDStat {
    /* Fields of Guestfs.MDStat */
    mdstat_device: string
    mdstat_index: number
    mdstat_flags: string
    static name: string
}
export abstract class Mke2fsClass {
    /* Fields of Guestfs.Mke2fsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Mke2fsPrivate {
    static name: string
}
export abstract class MkfsBtrfsClass {
    /* Fields of Guestfs.MkfsBtrfsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MkfsBtrfsPrivate {
    static name: string
}
export abstract class MkfsClass {
    /* Fields of Guestfs.MkfsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MkfsPrivate {
    static name: string
}
export abstract class MksquashfsClass {
    /* Fields of Guestfs.MksquashfsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MksquashfsPrivate {
    static name: string
}
export abstract class MkswapClass {
    /* Fields of Guestfs.MkswapClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MkswapPrivate {
    static name: string
}
export abstract class MktempClass {
    /* Fields of Guestfs.MktempClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MktempPrivate {
    static name: string
}
export abstract class Mount9PClass {
    /* Fields of Guestfs.Mount9PClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Mount9PPrivate {
    static name: string
}
export abstract class MountLocalClass {
    /* Fields of Guestfs.MountLocalClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MountLocalPrivate {
    static name: string
}
export abstract class NTFSResizeOptsClass {
    /* Fields of Guestfs.NTFSResizeOptsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class NTFSResizeOptsPrivate {
    static name: string
}
export abstract class NtfscloneOutClass {
    /* Fields of Guestfs.NtfscloneOutClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class NtfscloneOutPrivate {
    static name: string
}
export abstract class NtfsfixClass {
    /* Fields of Guestfs.NtfsfixClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class NtfsfixPrivate {
    static name: string
}
export class PV {
    /* Fields of Guestfs.PV */
    pv_name: string
    pv_uuid: number[]
    pv_fmt: string
    pv_size: number
    dev_size: number
    pv_free: number
    pv_used: number
    pv_attr: string
    pv_pe_count: number
    pv_pe_alloc_count: number
    pv_tags: string
    pe_start: number
    pv_mda_count: number
    pv_mda_free: number
    static name: string
}
export class Partition {
    /* Fields of Guestfs.Partition */
    part_num: number
    part_start: number
    part_end: number
    part_size: number
    static name: string
}
export abstract class RemountClass {
    /* Fields of Guestfs.RemountClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RemountPrivate {
    static name: string
}
export abstract class RsyncClass {
    /* Fields of Guestfs.RsyncClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RsyncInClass {
    /* Fields of Guestfs.RsyncInClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RsyncInPrivate {
    static name: string
}
export abstract class RsyncOutClass {
    /* Fields of Guestfs.RsyncOutClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RsyncOutPrivate {
    static name: string
}
export class RsyncPrivate {
    static name: string
}
export abstract class SelinuxRelabelClass {
    /* Fields of Guestfs.SelinuxRelabelClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SelinuxRelabelPrivate {
    static name: string
}
export abstract class SessionClass {
    /* Fields of Guestfs.SessionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SessionEventParams {
    /* Fields of Guestfs.SessionEventParams */
    event: SessionEvent
    flags: number
    buf: Uint8Array[]
    array: number[]
    array_len: number
    static name: string
}
export class SessionPrivate {
    static name: string
}
export abstract class SetE2attrsClass {
    /* Fields of Guestfs.SetE2attrsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SetE2attrsPrivate {
    static name: string
}
export class Stat {
    /* Fields of Guestfs.Stat */
    dev: number
    ino: number
    mode: number
    nlink: number
    uid: number
    gid: number
    rdev: number
    size: number
    blksize: number
    blocks: number
    atime: number
    mtime: number
    ctime: number
    static name: string
}
export class StatNS {
    /* Fields of Guestfs.StatNS */
    st_dev: number
    st_ino: number
    st_mode: number
    st_nlink: number
    st_uid: number
    st_gid: number
    st_rdev: number
    st_size: number
    st_blksize: number
    st_blocks: number
    st_atime_sec: number
    st_atime_nsec: number
    st_mtime_sec: number
    st_mtime_nsec: number
    st_ctime_sec: number
    st_ctime_nsec: number
    st_spare1: number
    st_spare2: number
    st_spare3: number
    st_spare4: number
    st_spare5: number
    st_spare6: number
    static name: string
}
export class StatVFS {
    /* Fields of Guestfs.StatVFS */
    bsize: number
    frsize: number
    blocks: number
    bfree: number
    bavail: number
    files: number
    ffree: number
    favail: number
    fsid: number
    flag: number
    namemax: number
    static name: string
}
export abstract class SyslinuxClass {
    /* Fields of Guestfs.SyslinuxClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SyslinuxPrivate {
    static name: string
}
export class TSKDirent {
    /* Fields of Guestfs.TSKDirent */
    tsk_inode: number
    tsk_type: number
    tsk_size: number
    tsk_name: string
    tsk_flags: number
    tsk_atime_sec: number
    tsk_atime_nsec: number
    tsk_mtime_sec: number
    tsk_mtime_nsec: number
    tsk_ctime_sec: number
    tsk_ctime_nsec: number
    tsk_crtime_sec: number
    tsk_crtime_nsec: number
    tsk_nlink: number
    tsk_link: string
    tsk_spare1: number
    static name: string
}
export abstract class TarInClass {
    /* Fields of Guestfs.TarInClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TarInPrivate {
    static name: string
}
export abstract class TarOutClass {
    /* Fields of Guestfs.TarOutClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TarOutPrivate {
    static name: string
}
export abstract class Tune2FSClass {
    /* Fields of Guestfs.Tune2FSClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Tune2FSPrivate {
    static name: string
}
export class UTSName {
    /* Fields of Guestfs.UTSName */
    uts_sysname: string
    uts_release: string
    uts_version: string
    uts_machine: string
    static name: string
}
export abstract class UmountClass {
    /* Fields of Guestfs.UmountClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class UmountLocalClass {
    /* Fields of Guestfs.UmountLocalClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class UmountLocalPrivate {
    static name: string
}
export class UmountPrivate {
    static name: string
}
export class VG {
    /* Fields of Guestfs.VG */
    vg_name: string
    vg_uuid: number[]
    vg_fmt: string
    vg_attr: string
    vg_size: number
    vg_free: number
    vg_sysid: string
    vg_extent_size: number
    vg_extent_count: number
    vg_free_count: number
    max_lv: number
    max_pv: number
    pv_count: number
    lv_count: number
    snap_count: number
    vg_seqno: number
    vg_tags: string
    vg_mda_count: number
    vg_mda_free: number
    static name: string
}
export class Version {
    /* Fields of Guestfs.Version */
    major: number
    minor: number
    release: number
    extra: string
    static name: string
}
export class XAttr {
    /* Fields of Guestfs.XAttr */
    attrname: string
    attrval: Uint8Array[]
    static name: string
}
export class XFSInfo {
    /* Fields of Guestfs.XFSInfo */
    xfs_mntpoint: string
    xfs_inodesize: number
    xfs_agcount: number
    xfs_agsize: number
    xfs_sectsize: number
    xfs_attr: number
    xfs_blocksize: number
    xfs_datablocks: number
    xfs_imaxpct: number
    xfs_sunit: number
    xfs_swidth: number
    xfs_dirversion: number
    xfs_dirblocksize: number
    xfs_cimode: number
    xfs_logname: string
    xfs_logblocksize: number
    xfs_logblocks: number
    xfs_logversion: number
    xfs_logsectsize: number
    xfs_logsunit: number
    xfs_lazycount: number
    xfs_rtname: string
    xfs_rtextsize: number
    xfs_rtblocks: number
    xfs_rtextents: number
    static name: string
}
export abstract class XfsAdminClass {
    /* Fields of Guestfs.XfsAdminClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class XfsAdminPrivate {
    static name: string
}
export abstract class XfsGrowfsClass {
    /* Fields of Guestfs.XfsGrowfsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class XfsGrowfsPrivate {
    static name: string
}
export abstract class XfsRepairClass {
    /* Fields of Guestfs.XfsRepairClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class XfsRepairPrivate {
    static name: string
}
export class YaraDetection {
    /* Fields of Guestfs.YaraDetection */
    yara_name: string
    yara_rule: string
    static name: string
}