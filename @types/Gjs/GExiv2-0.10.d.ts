/**
 * GExiv2-0.10
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ByteOrder {
    LITTLE,
    BIG,
}
export enum LogLevel {
    DEBUG,
    INFO,
    WARN,
    ERROR,
    MUTE,
}
export enum Orientation {
    UNSPECIFIED,
    NORMAL,
    HFLIP,
    ROT_180,
    VFLIP,
    ROT_90_HFLIP,
    ROT_90,
    ROT_90_VFLIP,
    ROT_270,
}
export enum StructureType {
    NONE,
    ALT,
    BAG,
    SEQ,
    LANG,
}
export enum XmpFormatFlags {
    OMIT_PACKET_WRAPPER,
    READ_ONLY_PACKET,
    USE_COMPACT_FORMAT,
    INCLUDE_THUMBNAIL_PAD,
    EXACT_PACKET_LENGTH,
    WRITE_ALIAS_COMMENTS,
    OMIT_ALL_FORMATTING,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function get_version(): number
export function initialize(): boolean
export function log_get_level(): LogLevel
export function log_set_level(level: LogLevel): void
export function log_use_glib_logging(): void
export interface LogHandler {
    (level: LogLevel, msg: string): void
}
export interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}
export class Metadata {
    /* Fields of GExiv2-0.10.GExiv2.Metadata */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GExiv2-0.10.GExiv2.Metadata */
    clear(): void
    clear_comment(): void
    clear_exif(): void
    clear_iptc(): void
    clear_tag(tag: string): boolean
    clear_xmp(): void
    delete_gps_info(): void
    erase_exif_thumbnail(): void
    free(): void
    from_app1_segment(data: Uint8Array[]): boolean
    from_stream(stream: Gio.InputStream): boolean
    generate_xmp_packet(xmp_format_flags: XmpFormatFlags, padding: number): string | null
    get_comment(): string | null
    get_exif_data(byte_order: ByteOrder): GLib.Bytes | null
    get_exif_tag_rational(tag: string): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    get_exif_tags(): string[]
    get_exif_thumbnail(): [ /* returnType */ boolean, /* buffer */ Uint8Array[] ]
    get_exposure_time(): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    get_fnumber(): number
    get_focal_length(): number
    get_gps_altitude(): [ /* returnType */ boolean, /* altitude */ number ]
    get_gps_info(): [ /* returnType */ boolean, /* longitude */ number, /* latitude */ number, /* altitude */ number ]
    get_gps_latitude(): [ /* returnType */ boolean, /* latitude */ number ]
    get_gps_longitude(): [ /* returnType */ boolean, /* longitude */ number ]
    get_iptc_tags(): string[]
    get_iso_speed(): number
    get_metadata_pixel_height(): number
    get_metadata_pixel_width(): number
    get_mime_type(): string
    get_orientation(): Orientation
    get_pixel_height(): number
    get_pixel_width(): number
    get_preview_image(props: PreviewProperties): PreviewImage
    get_preview_properties(): PreviewProperties[] | null
    get_supports_exif(): boolean
    get_supports_iptc(): boolean
    get_supports_xmp(): boolean
    get_tag_interpreted_string(tag: string): string | null
    get_tag_long(tag: string): number
    get_tag_multiple(tag: string): string[] | null
    get_tag_raw(tag: string): GLib.Bytes | null
    get_tag_string(tag: string): string | null
    get_xmp_packet(): string | null
    get_xmp_tags(): string[]
    has_exif(): boolean
    has_iptc(): boolean
    has_tag(tag: string): boolean
    has_xmp(): boolean
    open_buf(data: Uint8Array[]): boolean
    open_path(path: string): boolean
    save_external(path: string): boolean
    save_file(path: string): boolean
    set_comment(comment: string): void
    set_exif_tag_rational(tag: string, nom: number, den: number): boolean
    set_exif_thumbnail_from_buffer(buffer: Uint8Array[]): void
    set_exif_thumbnail_from_file(path: string): boolean
    set_gps_info(longitude: number, latitude: number, altitude: number): boolean
    set_metadata_pixel_height(height: number): void
    set_metadata_pixel_width(width: number): void
    set_orientation(orientation: Orientation): void
    set_tag_long(tag: string, value: number): boolean
    set_tag_multiple(tag: string, values: string[]): boolean
    set_tag_string(tag: string, value: string): boolean
    set_xmp_tag_struct(tag: string, type: StructureType): boolean
    try_get_tag_multiple(tag: string): string[] | null
    try_get_tag_string(tag: string): string | null
    try_set_tag_multiple(tag: string, values: string[]): boolean
    try_set_tag_string(tag: string, value: string): boolean
    update_gps_info(longitude: number, latitude: number, altitude: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Metadata_ConstructProps)
    _init (config?: Metadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Metadata
    static get_tag_description(tag: string): string | null
    static get_tag_label(tag: string): string | null
    static get_tag_type(tag: string): string | null
    static get_xmp_namespace_for_tag(tag: string): string
    static is_exif_tag(tag: string): boolean
    static is_iptc_tag(tag: string): boolean
    static is_xmp_tag(tag: string): boolean
    static register_xmp_namespace(name: string, prefix: string): boolean
    static unregister_all_xmp_namespaces(): void
    static unregister_xmp_namespace(name: string): boolean
    static $gtype: GObject.Type
}
export interface PreviewImage_ConstructProps extends GObject.Object_ConstructProps {
}
export class PreviewImage {
    /* Fields of GExiv2-0.10.GExiv2.PreviewImage */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GExiv2-0.10.GExiv2.PreviewImage */
    free(): void
    get_data(): Uint8Array[]
    get_extension(): string
    get_height(): number
    get_mime_type(): string
    get_width(): number
    write_file(path: string): number
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
    connect(sigName: "notify", callback: (($obj: PreviewImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PreviewImage_ConstructProps)
    _init (config?: PreviewImage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PreviewProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class PreviewProperties {
    /* Fields of GExiv2-0.10.GExiv2.PreviewProperties */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GExiv2-0.10.GExiv2.PreviewProperties */
    get_extension(): string
    get_height(): number
    get_mime_type(): string
    get_size(): number
    get_width(): number
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
    connect(sigName: "notify", callback: (($obj: PreviewProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PreviewProperties_ConstructProps)
    _init (config?: PreviewProperties_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class MetadataClass {
    /* Fields of GExiv2-0.10.GExiv2.MetadataClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MetadataPrivate {
    static name: string
}
export abstract class PreviewImageClass {
    /* Fields of GExiv2-0.10.GExiv2.PreviewImageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PreviewImagePrivate {
    static name: string
}
export abstract class PreviewPropertiesClass {
    /* Fields of GExiv2-0.10.GExiv2.PreviewPropertiesClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PreviewPropertiesPrivate {
    static name: string
}