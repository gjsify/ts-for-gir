/**
 * GdkPixbuf-2.0
 */

import * as Gio from './Gio'
import * as GObject from './GObject'
import * as GLib from './GLib'
import * as GModule from './GModule'
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
}
export enum PixbufRotation {
    NONE,
    COUNTERCLOCKWISE,
    UPSIDEDOWN,
    CLOCKWISE,
}
export enum PixdataDumpType {
    PIXDATA_STREAM,
    PIXDATA_STRUCT,
    MACROS,
    GTYPES,
    CTYPES,
    STATIC,
    CONST,
    RLE_DECODER,
}
export enum PixdataType {
    COLOR_TYPE_RGB,
    COLOR_TYPE_RGBA,
    COLOR_TYPE_MASK,
    SAMPLE_WIDTH_8,
    SAMPLE_WIDTH_MASK,
    ENCODING_RAW,
    ENCODING_RLE,
    ENCODING_MASK,
}
export const PIXBUF_FEATURES_H:number
export const PIXBUF_MAGIC_NUMBER:number
export const PIXBUF_MAJOR:number
export const PIXBUF_MICRO:number
export const PIXBUF_MINOR:number
export const PIXBUF_VERSION:string
export const PIXDATA_HEADER_LENGTH:number
export function pixbuf_error_quark(): GLib.Quark
export interface PixbufDestroyNotify {
    (pixels: number[], data: object): void
}
export interface PixbufSaveFunc {
    (buf: number[], count: number, data: object): boolean
}
export interface Pixbuf_ConstructProps {
    /* Properties of GdkPixbuf.Pixbuf */
    bits_per_sample?:number
    colorspace?:Colorspace
    has_alpha?:boolean
    height?:number
    n_channels?:number
    pixel_bytes?:GLib.Bytes
    pixels?:object
    rowstride?:number
    width?:number
}
export interface Pixbuf {
    /* Properties of GdkPixbuf.Pixbuf */
    /* Methods of GdkPixbuf.Pixbuf */
    add_alpha(substitute_color: boolean, r: number, g: number, b: number): Pixbuf
    apply_embedded_orientation(): Pixbuf
    composite(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number): void
    composite_color(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number, check_x: number, check_y: number, check_size: number, color1: number, color2: number): void
    composite_color_simple(dest_width: number, dest_height: number, interp_type: InterpType, overall_alpha: number, check_size: number, color1: number, color2: number): Pixbuf
    copy(): Pixbuf
    copy_area(src_x: number, src_y: number, width: number, height: number, dest_pixbuf: Pixbuf, dest_x: number, dest_y: number): void
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
    get_pixels(): number[]
    get_pixels_with_length(): [ /* returnType */ number[], /* length */ number ]
    get_rowstride(): number
    get_width(): number
    new_subpixbuf(src_x: number, src_y: number, width: number, height: number): Pixbuf
    read_pixel_bytes(): GLib.Bytes
    read_pixels(): number
    rotate_simple(angle: PixbufRotation): Pixbuf | null
    saturate_and_pixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void
    save_to_bufferv(type: string, option_keys: string[], option_values: string[]): [ /* returnType */ boolean, /* buffer */ number[], /* buffer_size */ number ]
    save_to_callbackv(save_func: PixbufSaveFunc, user_data: object, type: string, option_keys: string[], option_values: string[]): boolean
    savev(filename: string, type: string, option_keys: string[], option_values: string[]): boolean
    scale(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType): void
    scale_simple(dest_width: number, dest_height: number, interp_type: InterpType): Pixbuf
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
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
    connect(sigName: "notify", callback: ((obj: Pixbuf, pspec: GObject.ParamSpec) => void))
}
export interface Pixbuf_Static {
    new (config: Pixbuf_ConstructProps): Pixbuf
}
export declare class Pixbuf_Static {
    new(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): Pixbuf
    new_from_bytes(data: GLib.Bytes, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): Pixbuf
    new_from_data(data: number[], colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number, destroy_fn: PixbufDestroyNotify | null, destroy_fn_data: object): Pixbuf
    new_from_file(filename: string): Pixbuf
    new_from_file_at_scale(filename: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf
    new_from_file_at_size(filename: string, width: number, height: number): Pixbuf
    new_from_inline(data_length: number, data: number[], copy_pixels: boolean): Pixbuf
    new_from_resource(resource_path: string): Pixbuf
    new_from_resource_at_scale(resource_path: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf
    new_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): Pixbuf
    new_from_stream_at_scale(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable: Gio.Cancellable | null): Pixbuf
    new_from_stream_finish(async_result: Gio.AsyncResult): Pixbuf
    new_from_xpm_data(data: string[]): Pixbuf
    from_pixdata(pixdata: Pixdata, copy_pixels: boolean): Pixbuf
    get_file_info(filename: string): [ /* returnType */ PixbufFormat | null, /* width */ number | null, /* height */ number | null ]
    get_file_info_async(filename: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    get_file_info_finish(async_result: Gio.AsyncResult): [ /* returnType */ PixbufFormat, /* width */ number, /* height */ number ]
    get_formats(): GLib.SList
    new_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    new_from_stream_at_scale_async(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    save_to_stream_finish(async_result: Gio.AsyncResult): boolean
}
export declare var Pixbuf: Pixbuf_Static
export interface PixbufAnimation_ConstructProps {
}
export interface PixbufAnimation {
    /* Methods of GdkPixbuf.PixbufAnimation */
    get_height(): number
    get_iter(start_time: GLib.TimeVal | null): PixbufAnimationIter
    get_static_image(): Pixbuf
    get_width(): number
    is_static_image(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
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
    connect(sigName: "notify", callback: ((obj: PixbufAnimation, pspec: GObject.ParamSpec) => void))
}
export interface PixbufAnimation_Static {
    new (config: PixbufAnimation_ConstructProps): PixbufAnimation
}
export declare class PixbufAnimation_Static {
    new_from_file(filename: string): PixbufAnimation
    new_from_resource(resource_path: string): PixbufAnimation
    new_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): PixbufAnimation
    new_from_stream_finish(async_result: Gio.AsyncResult): PixbufAnimation
    new_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
}
export declare var PixbufAnimation: PixbufAnimation_Static
export interface PixbufAnimationIter_ConstructProps {
}
export interface PixbufAnimationIter {
    /* Methods of GdkPixbuf.PixbufAnimationIter */
    advance(current_time: GLib.TimeVal | null): boolean
    get_delay_time(): number
    get_pixbuf(): Pixbuf
    on_currently_loading_frame(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
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
    connect(sigName: "notify", callback: ((obj: PixbufAnimationIter, pspec: GObject.ParamSpec) => void))
}
export interface PixbufAnimationIter_Static {
    new (config: PixbufAnimationIter_ConstructProps): PixbufAnimationIter
}
export declare var PixbufAnimationIter: PixbufAnimationIter_Static
export interface PixbufLoader_ConstructProps {
}
export interface PixbufLoader {
    /* Methods of GdkPixbuf.PixbufLoader */
    close(): boolean
    get_animation(): PixbufAnimation
    get_format(): PixbufFormat | null
    get_pixbuf(): Pixbuf
    set_size(width: number, height: number): void
    write(buf: number[], count: number): boolean
    write_bytes(buffer: GLib.Bytes): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GdkPixbuf.PixbufLoader */
    vfunc_area_prepared(): void
    vfunc_area_updated(x: number, y: number, width: number, height: number): void
    vfunc_closed(): void
    vfunc_size_prepared(width: number, height: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GdkPixbuf.PixbufLoader */
    connect(sigName: "area-prepared", callback: ((obj: PixbufLoader) => void))
    connect(sigName: "area-updated", callback: ((obj: PixbufLoader, x: number, y: number, width: number, height: number) => void))
    connect(sigName: "closed", callback: ((obj: PixbufLoader) => void))
    connect(sigName: "size-prepared", callback: ((obj: PixbufLoader, width: number, height: number) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PixbufLoader, pspec: GObject.ParamSpec) => void))
}
export interface PixbufLoader_Static {
    new (config: PixbufLoader_ConstructProps): PixbufLoader
}
export declare class PixbufLoader_Static {
    new(): PixbufLoader
    new_with_mime_type(mime_type: string): PixbufLoader
    new_with_type(image_type: string): PixbufLoader
}
export declare var PixbufLoader: PixbufLoader_Static
export interface PixbufSimpleAnim_ConstructProps {
    /* Properties of GdkPixbuf.PixbufSimpleAnim */
    loop?:boolean
}
export interface PixbufSimpleAnim {
    /* Properties of GdkPixbuf.PixbufSimpleAnim */
    loop:boolean
    /* Methods of GdkPixbuf.PixbufSimpleAnim */
    add_frame(pixbuf: Pixbuf): void
    get_loop(): boolean
    set_loop(loop: boolean): void
    /* Methods of GdkPixbuf.PixbufAnimation */
    get_height(): number
    get_iter(start_time: GLib.TimeVal | null): PixbufAnimationIter
    get_static_image(): Pixbuf
    get_width(): number
    is_static_image(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
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
    connect(sigName: "notify", callback: ((obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::loop", callback: ((obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void))
}
export interface PixbufSimpleAnim_Static {
    new (config: PixbufSimpleAnim_ConstructProps): PixbufSimpleAnim
}
export declare class PixbufSimpleAnim_Static {
    new(width: number, height: number, rate: number): PixbufSimpleAnim
}
export declare var PixbufSimpleAnim: PixbufSimpleAnim_Static
export interface PixbufSimpleAnimIter_ConstructProps {
}
export interface PixbufSimpleAnimIter {
    /* Methods of GdkPixbuf.PixbufAnimationIter */
    advance(current_time: GLib.TimeVal | null): boolean
    get_delay_time(): number
    get_pixbuf(): Pixbuf
    on_currently_loading_frame(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
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
    connect(sigName: "notify", callback: ((obj: PixbufSimpleAnimIter, pspec: GObject.ParamSpec) => void))
}
export interface PixbufSimpleAnimIter_Static {
    new (config: PixbufSimpleAnimIter_ConstructProps): PixbufSimpleAnimIter
}
export declare var PixbufSimpleAnimIter: PixbufSimpleAnimIter_Static
export interface PixbufFormat {
    /* Methods of GdkPixbuf.PixbufFormat */
    copy(): PixbufFormat
    free(): void
    get_description(): string
    get_extensions(): string[]
    get_license(): string
    get_mime_types(): string[]
    get_name(): string
    is_disabled(): boolean
    is_scalable(): boolean
    is_writable(): boolean
    set_disabled(disabled: boolean): void
}
export interface PixbufFormat_Static {
}
export declare var PixbufFormat: PixbufFormat_Static
export interface PixbufLoaderClass {
}
export interface PixbufLoaderClass_Static {
}
export declare var PixbufLoaderClass: PixbufLoaderClass_Static
export interface PixbufSimpleAnimClass {
}
export interface PixbufSimpleAnimClass_Static {
}
export declare var PixbufSimpleAnimClass: PixbufSimpleAnimClass_Static
export interface Pixdata {
    /* Methods of GdkPixbuf.Pixdata */
    deserialize(stream_length: number, stream: number[]): boolean
    serialize(): [ /* returnType */ number[], /* stream_length_p */ number ]
    to_csource(name: string, dump_type: PixdataDumpType): GLib.String
}
export interface Pixdata_Static {
}
export declare var Pixdata: Pixdata_Static
type PixbufAnimationIter_autoptr = object
type PixbufAnimation_autoptr = object
type PixbufLoader_autoptr = object
type PixbufSimpleAnim_autoptr = object
type Pixbuf_autoptr = object