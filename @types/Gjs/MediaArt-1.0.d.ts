/**
 * MediaArt-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum Error {
    NO_STORAGE,
    NO_TITLE,
    SYMLINK_FAILED,
    RENAME_FAILED,
}
export enum Type {
    NONE,
    ALBUM,
    VIDEO,
}
export enum ProcessFlags {
    NONE,
    FORCE,
}
export function buffer_to_jpeg(buffer: number, len: number, buffer_mime: string, target: string): boolean
export function error_quark(): GLib.Quark
export function file_to_jpeg(filename: string, target: string): boolean
export function get_file(artist?: string | null, title?: string | null, prefix?: string | null, file?: Gio.File | null): [ /* returnType */ boolean, /* cache_file */ Gio.File | null, /* local_file */ Gio.File | null ]
export function get_path(artist?: string | null, title?: string | null, prefix?: string | null, uri?: string | null): [ /* returnType */ boolean, /* cache_path */ string | null, /* local_uri */ string | null ]
export function plugin_init(max_width: number): void
export function plugin_shutdown(): void
export function remove(artist: string, album?: string | null): boolean
export function strip_invalid_entities(original: string): string
export interface Process_ConstructProps extends GObject.Object_ConstructProps {
}
export class Process {
    /* Fields of MediaArt-1.0.MediaArt.Process */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of MediaArt-1.0.MediaArt.Process */
    buffer(type: Type, flags: ProcessFlags, related_file: Gio.File, buffer: Uint8Array[] | null, mime: string, artist?: string | null, title?: string | null): boolean
    file(type: Type, flags: ProcessFlags, file: Gio.File, artist?: string | null, title?: string | null): boolean
    uri(type: Type, flags: ProcessFlags, uri: string, artist?: string | null, title?: string | null): boolean
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of MediaArt-1.0.MediaArt.Process */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Process, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Process, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Process_ConstructProps)
    _init (config?: Process_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Process
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class ProcessClass {
    /* Fields of MediaArt-1.0.MediaArt.ProcessClass */
    parent: GObject.ObjectClass
    static name: string
}