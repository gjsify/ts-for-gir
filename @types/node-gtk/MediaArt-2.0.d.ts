/**
 * MediaArt-2.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace MediaArt {

export enum Error {
    NO_STORAGE,
    NO_TITLE,
    SYMLINK_FAILED,
    RENAME_FAILED,
    NO_CACHE_DIR,
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
export function bufferToJpeg(buffer: any[], bufferMime: string, target: string): boolean
export function errorQuark(): GLib.Quark
export function fileToJpeg(filename: string, target: string): boolean
export function getFile(artist?: string | null, title?: string | null, prefix?: string | null): { returnType: boolean, cacheFile: Gio.File | null }
export function getPath(artist?: string | null, title?: string | null, prefix?: string | null): { returnType: boolean, cachePath: string | null }
export function pluginInit(maxWidth: number): void
export function pluginShutdown(): void
export function remove(artist: string, album?: string | null, cancellable?: Gio.Cancellable | null): boolean
export function removeAsync(artist: string, album: string | null, ioPriority: number, sourceObject?: GObject.Object | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function removeFinish(sourceObject: GObject.Object | null, result: Gio.AsyncResult): boolean
export function stripInvalidEntities(original?: string | null): string
export interface Process_ConstructProps extends GObject.Object_ConstructProps {
}
export class Process {
    /* Fields of MediaArt-2.0.MediaArt.Process */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of MediaArt-2.0.MediaArt.Process */
    buffer(type: Type, flags: ProcessFlags, relatedFile: Gio.File, buffer: any[] | null, mime?: string | null, artist?: string | null, title?: string | null, cancellable?: Gio.Cancellable | null): boolean
    bufferAsync(type: Type, flags: ProcessFlags, relatedFile: Gio.File, buffer: any[] | null, mime: string, artist: string | null, title: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    bufferFinish(result: Gio.AsyncResult): boolean
    file(type: Type, flags: ProcessFlags, file: Gio.File, artist?: string | null, title?: string | null, cancellable?: Gio.Cancellable | null): boolean
    fileAsync(type: Type, flags: ProcessFlags, file: Gio.File, artist: string | null, title: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fileFinish(result: Gio.AsyncResult): boolean
    uri(type: Type, flags: ProcessFlags, uri: string, artist?: string | null, title?: string | null, cancellable?: Gio.Cancellable | null): boolean
    uriAsync(type: Type, flags: ProcessFlags, uri: string, artist: string | null, title: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uriFinish(result: Gio.AsyncResult): boolean
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Process, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Process_ConstructProps)
    _init (config?: Process_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Process
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class ProcessClass {
    /* Fields of MediaArt-2.0.MediaArt.ProcessClass */
    parent: GObject.ObjectClass
    static name: string
}
}