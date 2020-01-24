/**
 * GdkPixbuf-2.0
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GModule from './GModule-2.0';

export enum Colorspace {
    RGB,
}
export enum InterpType {
    NEAREST,
    TILES,
    BILINEAR,
    HYPER,
}
export enum PixbufAlphaMode {
    BILEVEL,
    FULL,
}
export enum PixbufError {
    CORRUPT_IMAGE,
    INSUFFICIENT_MEMORY,
    BAD_OPTION,
    UNKNOWN_TYPE,
    UNSUPPORTED_OPERATION,
    FAILED,
    INCOMPLETE_ANIMATION,
}
export enum PixbufRotation {
    NONE,
    COUNTERCLOCKWISE,
    UPSIDEDOWN,
    CLOCKWISE,
}
export const PIXBUF_FEATURES_H:number
export const PIXBUF_MAJOR:number
export const PIXBUF_MICRO:number
export const PIXBUF_MINOR:number
export const PIXBUF_VERSION:string
export function pixbuf_error_quark(): GLib.Quark
export interface PixbufDestroyNotify {
    (pixels: Gjs.byteArray.ByteArray): void
}
export interface PixbufSaveFunc {
    (buf: Gjs.byteArray.ByteArray): boolean
}
export interface Pixbuf_ConstructProps extends GObject.Object_ConstructProps {
    bits_per_sample?:number
    colorspace?:Colorspace
    has_alpha?:boolean
    height?:number
    n_channels?:number
    pixel_bytes?:Gjs.byteArray.ByteArray
    pixels?:object
    rowstride?:number
    width?:number
}
export class Pixbuf {
    /* Properties of GdkPixbuf.Pixbuf */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GdkPixbuf.Pixbuf */
    add_alpha(substitute_color: boolean, r: number, g: number, b: number): Pixbuf
    apply_embedded_orientation(): Pixbuf
    composite(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number): void
    composite_color(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number, check_x: number, check_y: number, check_size: number, color1: number, color2: number): void
    composite_color_simple(dest_width: number, dest_height: number, interp_type: InterpType, overall_alpha: number, check_size: number, color1: number, color2: number): Pixbuf | null
    copy(): Pixbuf | null
    copy_area(src_x: number, src_y: number, width: number, height: number, dest_pixbuf: Pixbuf, dest_x: number, dest_y: number): void
    copy_options(dest_pixbuf: Pixbuf): boolean
    fill(pixel: number): void
    flip(horizontal: boolean): Pixbuf | null
    get_bits_per_sample(): number
    get_byte_length(): number
    get_colorspace(): Colorspace
    get_has_alpha(): boolean
    get_height(): number
    get_n_channels(): number
    get_option(key: string): string
    get_options(): GLib.HashTable
    get_pixels(): Gjs.byteArray.ByteArray
    get_rowstride(): number
    get_width(): number
    new_subpixbuf(src_x: number, src_y: number, width: number, height: number): Pixbuf
    read_pixel_bytes(): Gjs.byteArray.ByteArray
    read_pixels(): number
    remove_option(key: string): boolean
    rotate_simple(angle: PixbufRotation): Pixbuf | null
    saturate_and_pixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void
    save_to_bufferv(type: string, option_keys: string[], option_values: string[]): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray ]
    save_to_callbackv(save_func: PixbufSaveFunc, type: string, option_keys: string[], option_values: string[]): boolean
    save_to_streamv(stream: Gio.OutputStream, type: string, option_keys: string[], option_values: string[], cancellable?: Gio.Cancellable | null): boolean
    save_to_streamv_async(stream: Gio.OutputStream, type: string, option_keys: string[], option_values: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    savev(filename: string, type: string, option_keys: string[], option_values: string[]): boolean
    scale(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType): void
    scale_simple(dest_width: number, dest_height: number, interp_type: InterpType): Pixbuf | null
    set_option(key: string, value: string): boolean
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
    /* Methods of Gio.Icon */
    equal(icon2?: Gio.Icon | null): boolean
    serialize(): GLib.Variant
    to_string(): string | null
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pixbuf_ConstructProps)
    _init (config?: Pixbuf_ConstructProps): void
    static new(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): Pixbuf | null
    static new_from_bytes(data: Gjs.byteArray.ByteArray, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): Pixbuf
    static new_from_data(data: Gjs.byteArray.ByteArray, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number, destroy_fn?: PixbufDestroyNotify | null): Pixbuf
    static new_from_file(filename: string): Pixbuf
    static new_from_file_at_scale(filename: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf
    static new_from_file_at_size(filename: string, width: number, height: number): Pixbuf
    static new_from_inline(data: Gjs.byteArray.ByteArray, copy_pixels: boolean): Pixbuf
    static new_from_resource(resource_path: string): Pixbuf
    static new_from_resource_at_scale(resource_path: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf
    static new_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): Pixbuf
    static new_from_stream_at_scale(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable?: Gio.Cancellable | null): Pixbuf
    static new_from_stream_finish(async_result: Gio.AsyncResult): Pixbuf
    static new_from_xpm_data(data: string[]): Pixbuf
    static calculate_rowstride(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): number
    static get_file_info(filename: string): [ /* returnType */ PixbufFormat | null, /* width */ number | null, /* height */ number | null ]
    static get_file_info_async(filename: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static get_file_info_finish(async_result: Gio.AsyncResult): [ /* returnType */ PixbufFormat, /* width */ number, /* height */ number ]
    static get_formats(): PixbufFormat[]
    static init_modules(path: string): boolean
    static new_from_stream_async(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_from_stream_at_scale_async(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static save_to_stream_finish(async_result: Gio.AsyncResult): boolean
    static $gtype: GObject.Type
}
export interface PixbufAnimation_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufAnimation {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufAnimation */
    get_height(): number
    get_iter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    get_static_image(): Pixbuf
    get_width(): number
    is_static_image(): boolean
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
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PixbufAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PixbufAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufAnimation_ConstructProps)
    _init (config?: PixbufAnimation_ConstructProps): void
    static new_from_file(filename: string): PixbufAnimation
    static new_from_resource(resource_path: string): PixbufAnimation
    static new_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): PixbufAnimation
    static new_from_stream_finish(async_result: Gio.AsyncResult): PixbufAnimation
    static new_from_stream_async(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface PixbufAnimationIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufAnimationIter {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufAnimationIter */
    advance(current_time?: GLib.TimeVal | null): boolean
    get_delay_time(): number
    get_pixbuf(): Pixbuf
    on_currently_loading_frame(): boolean
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
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PixbufAnimationIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PixbufAnimationIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufAnimationIter_ConstructProps)
    _init (config?: PixbufAnimationIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PixbufLoader_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufLoader {
    /* Fields of GdkPixbuf.PixbufLoader */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufLoader */
    close(): boolean
    get_animation(): PixbufAnimation
    get_format(): PixbufFormat | null
    get_pixbuf(): Pixbuf
    set_size(width: number, height: number): void
    write(buf: Gjs.byteArray.ByteArray): boolean
    write_bytes(buffer: Gjs.byteArray.ByteArray): boolean
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
    /* Virtual methods of GdkPixbuf.PixbufLoader */
    vfunc_area_prepared?(): void
    vfunc_area_updated?(x: number, y: number, width: number, height: number): void
    vfunc_closed?(): void
    vfunc_size_prepared?(width: number, height: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GdkPixbuf.PixbufLoader */
    connect(sigName: "area-prepared", callback: ((obj: PixbufLoader) => void)): number
    connect_after(sigName: "area-prepared", callback: ((obj: PixbufLoader) => void)): number
    emit(sigName: "area-prepared"): void
    connect(sigName: "area-updated", callback: ((obj: PixbufLoader, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "area-updated", callback: ((obj: PixbufLoader, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "area-updated", x: number, y: number, width: number, height: number): void
    connect(sigName: "closed", callback: ((obj: PixbufLoader) => void)): number
    connect_after(sigName: "closed", callback: ((obj: PixbufLoader) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "size-prepared", callback: ((obj: PixbufLoader, width: number, height: number) => void)): number
    connect_after(sigName: "size-prepared", callback: ((obj: PixbufLoader, width: number, height: number) => void)): number
    emit(sigName: "size-prepared", width: number, height: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PixbufLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PixbufLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufLoader_ConstructProps)
    _init (config?: PixbufLoader_ConstructProps): void
    static new(): PixbufLoader
    static new_with_mime_type(mime_type: string): PixbufLoader
    static new_with_type(image_type: string): PixbufLoader
    static $gtype: GObject.Type
}
export interface PixbufSimpleAnim_ConstructProps extends PixbufAnimation_ConstructProps {
    loop?:boolean
}
export class PixbufSimpleAnim {
    /* Properties of GdkPixbuf.PixbufSimpleAnim */
    loop:boolean
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufSimpleAnim */
    add_frame(pixbuf: Pixbuf): void
    get_loop(): boolean
    set_loop(loop: boolean): void
    /* Methods of GdkPixbuf.PixbufAnimation */
    get_height(): number
    get_iter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    get_static_image(): Pixbuf
    get_width(): number
    is_static_image(): boolean
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
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loop", callback: ((obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: ((obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufSimpleAnim_ConstructProps)
    _init (config?: PixbufSimpleAnim_ConstructProps): void
    static new(width: number, height: number, rate: number): PixbufSimpleAnim
    static $gtype: GObject.Type
}
export interface PixbufSimpleAnimIter_ConstructProps extends PixbufAnimationIter_ConstructProps {
}
export class PixbufSimpleAnimIter {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufAnimationIter */
    advance(current_time?: GLib.TimeVal | null): boolean
    get_delay_time(): number
    get_pixbuf(): Pixbuf
    on_currently_loading_frame(): boolean
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
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PixbufSimpleAnimIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PixbufSimpleAnimIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufSimpleAnimIter_ConstructProps)
    _init (config?: PixbufSimpleAnimIter_ConstructProps): void
    static $gtype: GObject.Type
}
export class PixbufFormat {
    /* Methods of GdkPixbuf.PixbufFormat */
    copy(): PixbufFormat
    free(): void
    get_description(): string
    get_extensions(): string[]
    get_license(): string
    get_mime_types(): string[]
    get_name(): string
    is_disabled(): boolean
    is_save_option_supported(option_key: string): boolean
    is_scalable(): boolean
    is_writable(): boolean
    set_disabled(disabled: boolean): void
    static name: string
}