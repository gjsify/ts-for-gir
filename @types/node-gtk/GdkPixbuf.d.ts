/**
 * GdkPixbuf-2.0
 */

/// <reference path="Gio.d.ts" />
/// <reference path="GObject.d.ts" />
/// <reference path="GLib.d.ts" />
/// <reference path="GModule.d.ts" />

declare namespace GdkPixbuf {

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
export function pixbufErrorQuark(): GLib.Quark
export interface PixbufDestroyNotify {
    (pixels: any): void
}
export interface PixbufSaveFunc {
    (buf: any): boolean
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
    addAlpha(substitute_color: boolean, r: number, g: number, b: number): Pixbuf
    applyEmbeddedOrientation(): Pixbuf
    composite(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number): void
    compositeColor(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number, check_x: number, check_y: number, check_size: number, color1: number, color2: number): void
    compositeColorSimple(dest_width: number, dest_height: number, interp_type: InterpType, overall_alpha: number, check_size: number, color1: number, color2: number): Pixbuf | null
    copy(): Pixbuf | null
    copyArea(src_x: number, src_y: number, width: number, height: number, dest_pixbuf: Pixbuf, dest_x: number, dest_y: number): void
    copyOptions(dest_pixbuf: Pixbuf): boolean
    fill(pixel: number): void
    flip(horizontal: boolean): Pixbuf | null
    getBitsPerSample(): number
    getByteLength(): number
    getColorspace(): Colorspace
    getHasAlpha(): boolean
    getHeight(): number
    getNChannels(): number
    getOption(key: string): string
    getOptions(): GLib.HashTable
    getPixels(): any
    getRowstride(): number
    getWidth(): number
    newSubpixbuf(src_x: number, src_y: number, width: number, height: number): Pixbuf
    readPixelBytes(): Gjs.byteArray.ByteArray
    readPixels(): number
    removeOption(key: string): boolean
    rotateSimple(angle: PixbufRotation): Pixbuf | null
    saturateAndPixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void
    saveToBufferv(type: string, option_keys: string[], option_values: string[]): [ /* returnType */ boolean, /* buffer */ any ]
    saveToCallbackv(save_func: PixbufSaveFunc, type: string, option_keys: string[], option_values: string[]): boolean
    saveToStreamv(stream: Gio.OutputStream, type: string, option_keys: string[], option_values: string[], cancellable?: Gio.Cancellable | null): boolean
    saveToStreamvAsync(stream: Gio.OutputStream, type: string, option_keys: string[], option_values: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    savev(filename: string, type: string, option_keys: string[], option_values: string[]): boolean
    scale(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType): void
    scaleSimple(dest_width: number, dest_height: number, interp_type: InterpType): Pixbuf | null
    setOption(key: string, value: string): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Icon */
    equal(icon2?: Gio.Icon | null): boolean
    serialize(): GLib.Variant
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
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
    static newFromBytes(data: Gjs.byteArray.ByteArray, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): Pixbuf
    static newFromData(data: any, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number, destroy_fn?: PixbufDestroyNotify | null): Pixbuf
    static newFromFile(filename: string): Pixbuf
    static newFromFileAtScale(filename: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf
    static newFromFileAtSize(filename: string, width: number, height: number): Pixbuf
    static newFromInline(data: any, copy_pixels: boolean): Pixbuf
    static newFromResource(resource_path: string): Pixbuf
    static newFromResourceAtScale(resource_path: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf
    static newFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): Pixbuf
    static newFromStreamAtScale(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable?: Gio.Cancellable | null): Pixbuf
    static newFromStreamFinish(async_result: Gio.AsyncResult): Pixbuf
    static newFromXpmData(data: string[]): Pixbuf
    static calculateRowstride(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): number
    static getFileInfo(filename: string): [ /* returnType */ PixbufFormat | null, /* width */ number | null, /* height */ number | null ]
    static getFileInfoAsync(filename: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFileInfoFinish(async_result: Gio.AsyncResult): [ /* returnType */ PixbufFormat, /* width */ number, /* height */ number ]
    static getFormats(): PixbufFormat[]
    static initModules(path: string): boolean
    static newFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newFromStreamAtScaleAsync(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static saveToStreamFinish(async_result: Gio.AsyncResult): boolean
    static $gtype: GObject.Type
}
export interface PixbufAnimation_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufAnimation {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
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
    static newFromFile(filename: string): PixbufAnimation
    static newFromResource(resource_path: string): PixbufAnimation
    static newFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): PixbufAnimation
    static newFromStreamFinish(async_result: Gio.AsyncResult): PixbufAnimation
    static newFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface PixbufAnimationIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufAnimationIter {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufAnimationIter */
    advance(current_time?: GLib.TimeVal | null): boolean
    getDelayTime(): number
    getPixbuf(): Pixbuf
    onCurrentlyLoadingFrame(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
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
    getAnimation(): PixbufAnimation
    getFormat(): PixbufFormat | null
    getPixbuf(): Pixbuf
    setSize(width: number, height: number): void
    write(buf: any): boolean
    writeBytes(buffer: Gjs.byteArray.ByteArray): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GdkPixbuf.PixbufLoader */
    vfuncAreaPrepared?(): void
    vfuncAreaUpdated?(x: number, y: number, width: number, height: number): void
    vfuncClosed?(): void
    vfuncSizePrepared?(width: number, height: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
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
    static newWithMimeType(mime_type: string): PixbufLoader
    static newWithType(image_type: string): PixbufLoader
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
    addFrame(pixbuf: Pixbuf): void
    getLoop(): boolean
    setLoop(loop: boolean): void
    /* Methods of GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
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
    getDelayTime(): number
    getPixbuf(): Pixbuf
    onCurrentlyLoadingFrame(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
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
    getDescription(): string
    getExtensions(): string[]
    getLicense(): string
    getMimeTypes(): string[]
    getName(): string
    isDisabled(): boolean
    isSaveOptionSupported(option_key: string): boolean
    isScalable(): boolean
    isWritable(): boolean
    setDisabled(disabled: boolean): void
    static name: string
}
}