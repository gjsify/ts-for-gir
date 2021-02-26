/**
 * GnomeAutoar-0.1
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ConflictAction {
    SKIP,
    OVERWRITE,
    CHANGE_DESTINATION,
}
export enum Filter {
    NONE,
    COMPRESS,
    GZIP,
    BZIP2,
    XZ,
    LZMA,
    LZIP,
    LZOP,
    GRZIP,
    LRZIP,
}
export enum Format {
    ZIP,
    TAR,
    CPIO,
    /* 7ZIP (invalid, starts with a number) */
    AR_BSD,
    AR_SVR4,
    CPIO_NEWC,
    GNUTAR,
    ISO9660,
    PAX,
    USTAR,
    XAR,
}
export function check_mime_type_supported(mime_type: string): boolean
export function filter_get_description(filter: Filter): string
export function filter_get_description_libarchive(filter: Filter): string
export function filter_get_extension(filter: Filter): string
export function filter_get_filter_libarchive(filter: Filter): number
export function filter_get_mime_type(filter: Filter): string
export function filter_is_valid(filter: Filter): boolean
export function filter_last(): number
export function format_filter_get_description(format: Format, filter: Filter): string
export function format_filter_get_extension(format: Format, filter: Filter): string
export function format_filter_get_mime_type(format: Format, filter: Filter): string
export function format_get_description(format: Format): string
export function format_get_description_libarchive(format: Format): string
export function format_get_extension(format: Format): string
export function format_get_format_libarchive(format: Format): number
export function format_get_mime_type(format: Format): string
export function format_is_valid(format: Format): boolean
export function format_last(): number
export function libarchive_quark(): GLib.Quark
export function query_mime_type_supported(file: Gio.File): boolean
export interface FilterFunc {
    (a?: object | null): number
}
export interface FormatFunc {
    (a?: object | null): number
}
export interface Compressor_ConstructProps extends GObject.Object_ConstructProps {
    create_top_level_directory?: boolean
    notify_interval?: number
    output_file?: Gio.File
    output_is_dest?: boolean
    source_files?: object
}
export class Compressor {
    /* Properties of GnomeAutoar-0.1.GnomeAutoar.Compressor */
    readonly completed_files: number
    readonly completed_size: number
    create_top_level_directory: boolean
    readonly files: number
    notify_interval: number
    output_is_dest: boolean
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeAutoar-0.1.GnomeAutoar.Compressor */
    get_completed_files(): number
    get_completed_size(): number
    get_create_top_level_directory(): boolean
    get_files(): number
    get_filter(): Filter
    get_format(): Format
    get_notify_interval(): number
    get_output_file(): Gio.File
    get_output_is_dest(): boolean
    get_size(): number
    get_source_files(): Gio.File[]
    set_notify_interval(notify_interval: number): void
    set_output_is_dest(output_is_dest: boolean): void
    start(cancellable?: Gio.Cancellable | null): void
    start_async(cancellable?: Gio.Cancellable | null): void
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
    /* Signals of GnomeAutoar-0.1.GnomeAutoar.Compressor */
    connect(sigName: "cancelled", callback: (($obj: Compressor) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: Compressor) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "completed", callback: (($obj: Compressor) => void)): number
    connect_after(sigName: "completed", callback: (($obj: Compressor) => void)): number
    emit(sigName: "completed"): void
    connect(sigName: "decide-dest", callback: (($obj: Compressor, destination: Gio.File) => void)): number
    connect_after(sigName: "decide-dest", callback: (($obj: Compressor, destination: Gio.File) => void)): number
    emit(sigName: "decide-dest", destination: Gio.File): void
    connect(sigName: "error", callback: (($obj: Compressor, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Compressor, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "progress", callback: (($obj: Compressor, completed_size: number, completed_files: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Compressor, completed_size: number, completed_files: number) => void)): number
    emit(sigName: "progress", completed_size: number, completed_files: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed-files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::completed-size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::create-top-level-directory", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-top-level-directory", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::notify-interval", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-interval", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-is-dest", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-is-dest", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Compressor_ConstructProps)
    _init (config?: Compressor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source_files: Gio.File[], output_file: Gio.File, format: Format, filter: Filter, create_top_level_directory: boolean): Compressor
    static quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Extractor_ConstructProps extends GObject.Object_ConstructProps {
    delete_after_extraction?: boolean
    notify_interval?: number
    output_file?: Gio.File
    output_is_dest?: boolean
    source_file?: Gio.File
}
export class Extractor {
    /* Properties of GnomeAutoar-0.1.GnomeAutoar.Extractor */
    readonly completed_files: number
    readonly completed_size: number
    delete_after_extraction: boolean
    notify_interval: number
    output_is_dest: boolean
    readonly total_files: number
    readonly total_size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeAutoar-0.1.GnomeAutoar.Extractor */
    get_completed_files(): number
    get_completed_size(): number
    get_delete_after_extraction(): boolean
    get_notify_interval(): number
    get_output_file(): Gio.File
    get_output_is_dest(): boolean
    get_source_file(): Gio.File
    get_total_files(): number
    get_total_size(): number
    set_delete_after_extraction(delete_after_extraction: boolean): void
    set_notify_interval(notify_interval: number): void
    set_output_is_dest(output_is_dest: boolean): void
    start(cancellable?: Gio.Cancellable | null): void
    start_async(cancellable?: Gio.Cancellable | null): void
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
    /* Signals of GnomeAutoar-0.1.GnomeAutoar.Extractor */
    connect(sigName: "cancelled", callback: (($obj: Extractor) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: Extractor) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "completed", callback: (($obj: Extractor) => void)): number
    connect_after(sigName: "completed", callback: (($obj: Extractor) => void)): number
    emit(sigName: "completed"): void
    connect(sigName: "conflict", callback: (($obj: Extractor, file: Gio.File, new_file?: object | null) => number)): number
    connect_after(sigName: "conflict", callback: (($obj: Extractor, file: Gio.File, new_file?: object | null) => number)): number
    emit(sigName: "conflict", file: Gio.File, new_file?: object | null): void
    connect(sigName: "decide-destination", callback: (($obj: Extractor, destination: Gio.File, files?: object | null) => GObject.Object)): number
    connect_after(sigName: "decide-destination", callback: (($obj: Extractor, destination: Gio.File, files?: object | null) => GObject.Object)): number
    emit(sigName: "decide-destination", destination: Gio.File, files?: object | null): void
    connect(sigName: "error", callback: (($obj: Extractor, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Extractor, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "progress", callback: (($obj: Extractor, completed_size: number, completed_files: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Extractor, completed_size: number, completed_files: number) => void)): number
    emit(sigName: "progress", completed_size: number, completed_files: number): void
    connect(sigName: "request-passphrase", callback: (($obj: Extractor) => string)): number
    connect_after(sigName: "request-passphrase", callback: (($obj: Extractor) => string)): number
    emit(sigName: "request-passphrase"): void
    connect(sigName: "scanned", callback: (($obj: Extractor, files: number) => void)): number
    connect_after(sigName: "scanned", callback: (($obj: Extractor, files: number) => void)): number
    emit(sigName: "scanned", files: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::completed-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delete-after-extraction", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-after-extraction", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::notify-interval", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-interval", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-is-dest", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-is-dest", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Extractor_ConstructProps)
    _init (config?: Extractor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source_file: Gio.File, output_file: Gio.File): Extractor
    static quark(): GLib.Quark
    static $gtype: GObject.Type
}
export abstract class CompressorClass {
    /* Fields of GnomeAutoar-0.1.GnomeAutoar.CompressorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ExtractorClass {
    /* Fields of GnomeAutoar-0.1.GnomeAutoar.ExtractorClass */
    parent_class: GObject.ObjectClass
    static name: string
}