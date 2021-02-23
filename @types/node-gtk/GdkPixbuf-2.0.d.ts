/**
 * GdkPixbuf-2.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GdkPixbuf {

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
export enum PixbufFormatFlags {
    WRITABLE,
    SCALABLE,
    THREADSAFE,
}
export const PIXBUF_FEATURES_H: number
export const PIXBUF_MAJOR: number
export const PIXBUF_MICRO: number
export const PIXBUF_MINOR: number
export const PIXBUF_VERSION: string
export function pixbufErrorQuark(): GLib.Quark
export interface PixbufDestroyNotify {
    (pixels: any[]): void
}
export interface PixbufModuleFillInfoFunc {
    (info: PixbufFormat): void
}
export interface PixbufModuleFillVtableFunc {
    (module: PixbufModule): void
}
export interface PixbufModulePreparedFunc {
    (pixbuf: Pixbuf, anim: PixbufAnimation): void
}
export interface PixbufModuleSizeFunc {
    (width: number, height: number): void
}
export interface PixbufModuleUpdatedFunc {
    (pixbuf: Pixbuf, x: number, y: number, width: number, height: number): void
}
export interface PixbufSaveFunc {
    (buf: any[]): boolean
}
export interface Pixbuf_ConstructProps extends GObject.Object_ConstructProps {
    bitsPerSample?: number
    colorspace?: Colorspace
    hasAlpha?: boolean
    height?: number
    nChannels?: number
    pixelBytes?: any
    pixels?: object
    rowstride?: number
    width?: number
}
export class Pixbuf {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    addAlpha(substituteColor: boolean, r: number, g: number, b: number): Pixbuf
    applyEmbeddedOrientation(): Pixbuf
    composite(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType, overallAlpha: number): void
    compositeColor(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType, overallAlpha: number, checkX: number, checkY: number, checkSize: number, color1: number, color2: number): void
    compositeColorSimple(destWidth: number, destHeight: number, interpType: InterpType, overallAlpha: number, checkSize: number, color1: number, color2: number): Pixbuf | null
    copy(): Pixbuf | null
    copyArea(srcX: number, srcY: number, width: number, height: number, destPixbuf: Pixbuf, destX: number, destY: number): void
    copyOptions(destPixbuf: Pixbuf): boolean
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
    getPixels(): any[]
    getRowstride(): number
    getWidth(): number
    newSubpixbuf(srcX: number, srcY: number, width: number, height: number): Pixbuf
    readPixelBytes(): any
    readPixels(): number
    removeOption(key: string): boolean
    rotateSimple(angle: PixbufRotation): Pixbuf | null
    saturateAndPixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void
    saveToBufferv(type: string, optionKeys: string[], optionValues: string[]): { returnType: boolean, buffer: any[] }
    saveToCallbackv(saveFunc: PixbufSaveFunc, type: string, optionKeys: string[], optionValues: string[]): boolean
    saveToStreamv(stream: Gio.OutputStream, type: string, optionKeys: string[], optionValues: string[], cancellable?: Gio.Cancellable | null): boolean
    saveToStreamvAsync(stream: Gio.OutputStream, type: string, optionKeys: string[], optionValues: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    savev(filename: string, type: string, optionKeys: string[], optionValues: string[]): boolean
    scale(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType): void
    scaleSimple(destWidth: number, destHeight: number, interpType: InterpType): Pixbuf | null
    setOption(key: string, value: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Gio.Icon | null): boolean
    serialize(): GLib.Variant | null
    toString(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    load(size: number, cancellable?: Gio.Cancellable | null): { returnType: Gio.InputStream, type: string | null }
    loadAsync(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): { returnType: Gio.InputStream, type: string | null }
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Pixbuf_ConstructProps)
    _init (config?: Pixbuf_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number): Pixbuf
    static newFromBytes(data: any, colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number): Pixbuf
    static newFromData(data: any[], colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number, destroyFn?: PixbufDestroyNotify | null): Pixbuf
    static newFromFile(filename: string): Pixbuf
    static newFromFileAtScale(filename: string, width: number, height: number, preserveAspectRatio: boolean): Pixbuf
    static newFromFileAtSize(filename: string, width: number, height: number): Pixbuf
    static newFromInline(data: any[], copyPixels: boolean): Pixbuf
    static newFromResource(resourcePath: string): Pixbuf
    static newFromResourceAtScale(resourcePath: string, width: number, height: number, preserveAspectRatio: boolean): Pixbuf
    static newFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): Pixbuf
    static newFromStreamAtScale(stream: Gio.InputStream, width: number, height: number, preserveAspectRatio: boolean, cancellable?: Gio.Cancellable | null): Pixbuf
    static newFromStreamFinish(asyncResult: Gio.AsyncResult): Pixbuf
    static newFromXpmData(data: string[]): Pixbuf
    static calculateRowstride(colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number): number
    static getFileInfo(filename: string): { returnType: PixbufFormat | null, width: number | null, height: number | null }
    static getFileInfoAsync(filename: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFileInfoFinish(asyncResult: Gio.AsyncResult): { returnType: PixbufFormat, width: number, height: number }
    static getFormats(): PixbufFormat[]
    static initModules(path: string): boolean
    static newFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newFromStreamAtScaleAsync(stream: Gio.InputStream, width: number, height: number, preserveAspectRatio: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static saveToStreamFinish(asyncResult: Gio.AsyncResult): boolean
    static deserialize(value: GLib.Variant): Gio.Icon | null
    static hash(icon: object): number
    static newForString(str: string): Gio.Icon
    static $gtype: GObject.Type
}
export interface PixbufAnimation_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufAnimation {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufAnimation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufAnimation_ConstructProps)
    _init (config?: PixbufAnimation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromFile(filename: string): PixbufAnimation
    static newFromResource(resourcePath: string): PixbufAnimation
    static newFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): PixbufAnimation
    static newFromStreamFinish(asyncResult: Gio.AsyncResult): PixbufAnimation
    static newFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface PixbufAnimationIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufAnimationIter {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    advance(currentTime?: GLib.TimeVal | null): boolean
    getDelayTime(): number
    getPixbuf(): Pixbuf
    onCurrentlyLoadingFrame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufAnimationIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufAnimationIter_ConstructProps)
    _init (config?: PixbufAnimationIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PixbufLoader_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufLoader {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    close(): boolean
    getAnimation(): PixbufAnimation
    getFormat(): PixbufFormat | null
    getPixbuf(): Pixbuf
    setSize(width: number, height: number): void
    write(buf: any[]): boolean
    writeBytes(buffer: any): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    connect(sigName: "area-prepared", callback: (($obj: PixbufLoader) => void)): number
    on(sigName: "area-prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "area-prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "area-prepared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "area-prepared"): void
    connect(sigName: "area-updated", callback: (($obj: PixbufLoader, x: number, y: number, width: number, height: number) => void)): number
    on(sigName: "area-updated", callback: (x: number, y: number, width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "area-updated", callback: (x: number, y: number, width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "area-updated", callback: (x: number, y: number, width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "area-updated", x: number, y: number, width: number, height: number): void
    connect(sigName: "closed", callback: (($obj: PixbufLoader) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "size-prepared", callback: (($obj: PixbufLoader, width: number, height: number) => void)): number
    on(sigName: "size-prepared", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-prepared", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-prepared", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-prepared", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufLoader_ConstructProps)
    _init (config?: PixbufLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PixbufLoader
    static newWithMimeType(mimeType: string): PixbufLoader
    static newWithType(imageType: string): PixbufLoader
    static $gtype: GObject.Type
}
export interface PixbufNonAnim_ConstructProps extends PixbufAnimation_ConstructProps {
}
export class PixbufNonAnim {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufNonAnim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufNonAnim_ConstructProps)
    _init (config?: PixbufNonAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pixbuf: Pixbuf): PixbufNonAnim
    static $gtype: GObject.Type
}
export interface PixbufSimpleAnim_ConstructProps extends PixbufAnimation_ConstructProps {
    loop?: boolean
}
export class PixbufSimpleAnim {
    /* Properties of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    loop: boolean
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    addFrame(pixbuf: Pixbuf): void
    getLoop(): boolean
    setLoop(loop: boolean): void
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loop", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufSimpleAnim_ConstructProps)
    _init (config?: PixbufSimpleAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, rate: number): PixbufSimpleAnim
    static $gtype: GObject.Type
}
export interface PixbufSimpleAnimIter_ConstructProps extends PixbufAnimationIter_ConstructProps {
}
export class PixbufSimpleAnimIter {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    advance(currentTime?: GLib.TimeVal | null): boolean
    getDelayTime(): number
    getPixbuf(): Pixbuf
    onCurrentlyLoadingFrame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufSimpleAnimIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufSimpleAnimIter_ConstructProps)
    _init (config?: PixbufSimpleAnimIter_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class PixbufAnimationClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationClass */
    parentClass: GObject.ObjectClass
    isStaticImage: (animation: PixbufAnimation) => boolean
    getStaticImage: (animation: PixbufAnimation) => Pixbuf
    getSize: (animation: PixbufAnimation, width: number, height: number) => void
    getIter: any
    static name: string
}
export abstract class PixbufAnimationIterClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIterClass */
    parentClass: GObject.ObjectClass
    getDelayTime: (iter: PixbufAnimationIter) => number
    getPixbuf: (iter: PixbufAnimationIter) => Pixbuf
    onCurrentlyLoadingFrame: (iter: PixbufAnimationIter) => boolean
    advance: any
    static name: string
}
export class PixbufFormat {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufFormat */
    name: string
    signature: PixbufModulePattern
    domain: string
    description: string
    mimeTypes: string
    extensions: string
    flags: number
    disabled: boolean
    license: string
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufFormat */
    copy(): PixbufFormat
    free(): void
    getDescription(): string
    getExtensions(): string[]
    getLicense(): string
    getMimeTypes(): string[]
    getName(): string
    isDisabled(): boolean
    isSaveOptionSupported(optionKey: string): boolean
    isScalable(): boolean
    isWritable(): boolean
    setDisabled(disabled: boolean): void
    static name: string
}
export abstract class PixbufLoaderClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufLoaderClass */
    parentClass: GObject.ObjectClass
    sizePrepared: (loader: PixbufLoader, width: number, height: number) => void
    areaPrepared: (loader: PixbufLoader) => void
    areaUpdated: (loader: PixbufLoader, x: number, y: number, width: number, height: number) => void
    closed: (loader: PixbufLoader) => void
    static name: string
}
export class PixbufModule {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufModule */
    moduleName: string
    modulePath: string
    module: GModule.Module
    info: PixbufFormat
    stopLoad: (context: object) => boolean
    loadIncrement: (context: object, buf: number, size: number) => boolean
    save: (f: object, pixbuf: Pixbuf, paramKeys: string, paramValues: string) => boolean
    isSaveOptionSupported: (optionKey: string) => boolean
    static name: string
}
export class PixbufModulePattern {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufModulePattern */
    prefix: string
    mask: string
    relevance: number
    static name: string
}
export abstract class PixbufSimpleAnimClass {
    static name: string
}
}