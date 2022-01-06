/**
 * GCab-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GCab {

enum Compression {
    NONE,
    MSZIP,
    QUANTUM,
    LZX,
    MASK,
}
enum Error {
    FORMAT,
    FAILED,
    NOT_SUPPORTED,
    INVALID_DATA,
}
enum FileAttribute {
    RDONLY,
    HIDDEN,
    SYSTEM,
    ARCH,
    EXEC,
    NAME_IS_UTF,
}
function error_quark(): GLib.Quark
interface FileCallback {
    (file: File): boolean
}
export interface Cabinet_ConstructProps extends GObject.Object_ConstructProps {
    reserved?: Uint8Array[]
    signature?: Uint8Array[]
}
class Cabinet {
    /* Properties of GCab-1.0.GCab.Cabinet */
    reserved: Uint8Array[]
    signature: Uint8Array[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCab-1.0.GCab.Cabinet */
    add_folder(folder: Folder): boolean
    extract(path?: Gio.File | null, file_callback?: FileCallback | null, progress_callback?: Gio.FileProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    extract_simple(path: Gio.File, file_callback?: FileCallback | null, cancellable?: Gio.Cancellable | null): boolean
    get_folders(): Folder[]
    get_signature(cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_size(): number
    load(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    write(stream: Gio.OutputStream, file_callback?: FileCallback | null, progress_callback?: Gio.FileProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    write_simple(stream: Gio.OutputStream, file_callback?: FileCallback | null, cancellable?: Gio.Cancellable | null): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::reserved", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserved", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signature", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signature", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cabinet_ConstructProps)
    _init (config?: Cabinet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Cabinet
    static $gtype: GObject.Type
}
export interface File_ConstructProps extends GObject.Object_ConstructProps {
    bytes?: GLib.Bytes
    file?: Gio.File
    name?: string
}
class File {
    /* Properties of GCab-1.0.GCab.File */
    bytes: GLib.Bytes
    file: Gio.File
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCab-1.0.GCab.File */
    get_attributes(): number
    get_bytes(): GLib.Bytes
    get_date(result: GLib.TimeVal): boolean
    get_date_time(): GLib.DateTime
    get_extract_name(): string | null
    get_file(): Gio.File
    get_name(): string
    get_size(): number
    set_attributes(attr: number): void
    set_bytes(bytes: GLib.Bytes): void
    set_date(tv: GLib.TimeVal): void
    set_date_time(dt: GLib.DateTime): void
    set_extract_name(name?: string | null): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bytes", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: File_ConstructProps)
    _init (config?: File_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_bytes(name: string, bytes: GLib.Bytes): File
    static new_with_file(name: string, file: Gio.File): File
    static $gtype: GObject.Type
}
export interface Folder_ConstructProps extends GObject.Object_ConstructProps {
    comptype?: number
    reserved?: Uint8Array[]
}
class Folder {
    /* Properties of GCab-1.0.GCab.Folder */
    readonly compression: Compression
    reserved: Uint8Array[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCab-1.0.GCab.Folder */
    add_file(cabfile: File, recurse: boolean, cancellable?: Gio.Cancellable | null): boolean
    get_comptype(): number
    get_file_by_name(name: string): File
    get_files(): File[]
    get_nfiles(): number
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compression", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reserved", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserved", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Folder_ConstructProps)
    _init (config?: Folder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(comptype: number): Folder
    static $gtype: GObject.Type
}
abstract class CabinetClass {
    /* Fields of GCab-1.0.GCab.CabinetClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class FileClass {
    /* Fields of GCab-1.0.GCab.FileClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class FolderClass {
    /* Fields of GCab-1.0.GCab.FolderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
}
export default GCab