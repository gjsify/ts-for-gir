/**
 * Rsvg-2.0
 */

/// <reference types="node" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace Rsvg {

export enum Error {
    FAILED,
}
export enum Unit {
    PERCENT,
    PX,
    EM,
    EX,
    IN,
    CM,
    MM,
    PT,
    PC,
}
export enum HandleFlags {
    FLAGS_NONE,
    FLAG_UNLIMITED,
    FLAG_KEEP_IMAGE_DATA,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION: string
export function cleanup(): void
export function errorQuark(): GLib.Quark
export function setDefaultDpi(dpi: number): void
export function setDefaultDpiXY(dpiX: number, dpiY: number): void
export interface Handle_ConstructProps extends GObject.Object_ConstructProps {
    baseUri?: string
    dpiX?: number
    dpiY?: number
    flags?: HandleFlags
}
export class Handle {
    /* Properties of Rsvg.Handle */
    baseUri: string
    readonly desc: string
    dpiX: number
    dpiY: number
    readonly em: number
    readonly ex: number
    readonly height: number
    readonly metadata: string
    readonly title: string
    readonly width: number
    /* Fields of Rsvg.Handle */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Rsvg.Handle */
    close(): boolean
    getBaseUri(): string
    getDimensions(): /* dimensionData */ DimensionData
    getDimensionsSub(id?: string | null): [ /* returnType */ boolean, /* dimensionData */ DimensionData ]
    getGeometryForElement(id?: string | null): [ /* returnType */ boolean, /* outInkRect */ Rectangle | null, /* outLogicalRect */ Rectangle | null ]
    getGeometryForLayer(id: string | null, viewport: Rectangle): [ /* returnType */ boolean, /* outInkRect */ Rectangle | null, /* outLogicalRect */ Rectangle | null ]
    getIntrinsicDimensions(): [ /* outHasWidth */ boolean | null, /* outWidth */ Length | null, /* outHasHeight */ boolean | null, /* outHeight */ Length | null, /* outHasViewbox */ boolean | null, /* outViewbox */ Rectangle | null ]
    getIntrinsicSizeInPixels(): [ /* returnType */ boolean, /* outWidth */ number | null, /* outHeight */ number | null ]
    getPixbuf(): GdkPixbuf.Pixbuf | null
    getPixbufSub(id?: string | null): GdkPixbuf.Pixbuf | null
    getPositionSub(id?: string | null): [ /* returnType */ boolean, /* positionData */ PositionData ]
    hasSub(id: string): boolean
    internalSetTesting(testing: boolean): void
    readStreamSync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    renderCairo(cr: cairo.Context): boolean
    renderCairoSub(cr: cairo.Context, id?: string | null): boolean
    renderDocument(cr: cairo.Context, viewport: Rectangle): boolean
    renderElement(cr: cairo.Context, id: string | null, elementViewport: Rectangle): boolean
    renderLayer(cr: cairo.Context, id: string | null, viewport: Rectangle): boolean
    setBaseGfile(baseFile: Gio.File): void
    setBaseUri(baseUri: string): void
    setDpi(dpi: number): void
    setDpiXY(dpiX: number, dpiY: number): void
    setStylesheet(css: any): boolean
    write(buf: any): boolean
    /* Methods of GObject.Object */
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::base-uri", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::desc", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dpi-x", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpi-x", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dpi-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dpi-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dpi-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dpi-y", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpi-y", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dpi-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dpi-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dpi-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::em", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::em", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::em", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::em", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::em", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ex", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ex", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Handle_ConstructProps)
    _init (config?: Handle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Handle
    static newFromData(data: any): Handle
    static newFromFile(filename: string): Handle
    static newFromGfileSync(file: Gio.File, flags: HandleFlags, cancellable?: Gio.Cancellable | null): Handle
    static newFromStreamSync(inputStream: Gio.InputStream, baseFile: Gio.File | null, flags: HandleFlags, cancellable?: Gio.Cancellable | null): Handle
    static newWithFlags(flags: HandleFlags): Handle
    static $gtype: GObject.Type
}
export class DimensionData {
    /* Fields of Rsvg.DimensionData */
    width: number
    height: number
    em: number
    ex: number
    static name: string
}
export abstract class HandleClass {
    /* Fields of Rsvg.HandleClass */
    parent: GObject.ObjectClass
    static name: string
}
export class Length {
    /* Fields of Rsvg.Length */
    length: number
    unit: Unit
    static name: string
}
export class PositionData {
    /* Fields of Rsvg.PositionData */
    x: number
    y: number
    static name: string
}
export class Rectangle {
    /* Fields of Rsvg.Rectangle */
    x: number
    y: number
    width: number
    height: number
    static name: string
}
}