/**
 * MediaArt-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace MediaArt {

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
export function bufferToJpeg(buffer: number, len: number, bufferMime: string, target: string): boolean
export function errorQuark(): GLib.Quark
export function fileToJpeg(filename: string, target: string): boolean
export function getFile(artist?: string | null, title?: string | null, prefix?: string | null, file?: Gio.File | null): [ /* returnType */ boolean, /* cacheFile */ Gio.File | null, /* localFile */ Gio.File | null ]
export function getPath(artist?: string | null, title?: string | null, prefix?: string | null, uri?: string | null): [ /* returnType */ boolean, /* cachePath */ string | null, /* localUri */ string | null ]
export function pluginInit(maxWidth: number): void
export function pluginShutdown(): void
export function remove(artist: string, album?: string | null): boolean
export function stripInvalidEntities(original: string): string
export interface Process_ConstructProps extends GObject.Object_ConstructProps {
}
export class Process {
    /* Fields of MediaArt.Process */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of MediaArt.Process */
    buffer(type: Type, flags: ProcessFlags, relatedFile: Gio.File, buffer: any | null, mime: string, artist?: string | null, title?: string | null): boolean
    file(type: Type, flags: ProcessFlags, file: Gio.File, artist?: string | null, title?: string | null): boolean
    uri(type: Type, flags: ProcessFlags, uri: string, artist?: string | null, title?: string | null): boolean
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of MediaArt.Process */
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Process, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Process, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Process_ConstructProps)
    _init (config?: Process_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Process
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class ProcessClass {
    /* Fields of MediaArt.ProcessClass */
    parent: GObject.ObjectClass
    static name: string
}
}