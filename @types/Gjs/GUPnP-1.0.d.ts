/**
 * GUPnP-1.0
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
// WARN: Dependency not found: 'GstPbutils-0.10'
// WARN: Dependency not found: 'Gst-0.10'
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export class DLNADiscoverer {
    /* Fields of GUPnP-1.0.GUPnP.DLNADiscoverer */
    parent: any
    /* Methods of GUPnP-1.0.GUPnP.DLNADiscoverer */
    discover_uri(uri: string): boolean
    discover_uri_sync(uri: string): DLNAInformation
    get_extended_mode(): boolean
    get_profile(name: string): DLNAProfile
    get_relaxed_mode(): boolean
    list_profiles(): DLNAProfile[]
    /* Virtual methods of GUPnP-1.0.GUPnP.DLNADiscoverer */
    vfunc_done(dlna: DLNAInformation, err: GLib.Error): void
    /* Signals of GUPnP-1.0.GUPnP.DLNADiscoverer */
    connect(sigName: "done", callback: (($obj: DLNADiscoverer, dlna: DLNAInformation, err: GLib.Error) => void)): number
    connect_after(sigName: "done", callback: (($obj: DLNADiscoverer, dlna: DLNAInformation, err: GLib.Error) => void)): number
    emit(sigName: "done", dlna: DLNAInformation, err: GLib.Error): void
    static name: string
    static new(timeout: any, relaxed_mode: boolean, extended_mode: boolean): DLNADiscoverer
    constructor(timeout: any, relaxed_mode: boolean, extended_mode: boolean)
    /* Static methods and pseudo-constructors */
    static new(timeout: any, relaxed_mode: boolean, extended_mode: boolean): DLNADiscoverer
}
export interface DLNAInformation_ConstructProps extends GObject.Object_ConstructProps {
    info?: any
    mime?: string
    name?: string
}
export class DLNAInformation {
    /* Fields of GUPnP-1.0.GUPnP.DLNAInformation */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.DLNAInformation */
    get_info(): any
    get_mime(): string
    get_name(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DLNAInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DLNAInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DLNAInformation_ConstructProps)
    _init (config?: DLNAInformation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, mime: string, info: any): DLNAInformation
    static $gtype: GObject.Type
}
export interface DLNAProfile_ConstructProps extends GObject.Object_ConstructProps {
    extended?: boolean
    mime?: string
    name?: string
}
export class DLNAProfile {
    /* Properties of GUPnP-1.0.GUPnP.DLNAProfile */
    readonly encoding_profile: any
    /* Fields of GUPnP-1.0.GUPnP.DLNAProfile */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.DLNAProfile */
    get_encoding_profile(): any
    get_extended(): boolean
    get_mime(): string
    get_name(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DLNAProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DLNAProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::encoding-profile", callback: (($obj: DLNAProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding-profile", callback: (($obj: DLNAProfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DLNAProfile_ConstructProps)
    _init (config?: DLNAProfile_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class DLNADiscovererClass {
    /* Fields of GUPnP-1.0.GUPnP.DLNADiscovererClass */
    parent_class: any
    done: (discoverer: DLNADiscoverer, dlna: DLNAInformation, err: GLib.Error) => void
    static name: string
}
export abstract class DLNAInformationClass {
    /* Fields of GUPnP-1.0.GUPnP.DLNAInformationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DLNAProfileClass {
    /* Fields of GUPnP-1.0.GUPnP.DLNAProfileClass */
    parent_class: GObject.ObjectClass
    static name: string
}