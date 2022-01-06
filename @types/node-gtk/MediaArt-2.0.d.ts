/**
 * MediaArt-2.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace MediaArt {

enum Error {
    NO_STORAGE,
    NO_TITLE,
    SYMLINK_FAILED,
    RENAME_FAILED,
    NO_CACHE_DIR,
}
enum Type {
    NONE,
    ALBUM,
    VIDEO,
}
enum ProcessFlags {
    NONE,
    FORCE,
}
function bufferToJpeg(buffer: any[], bufferMime: string, target: string): boolean
function errorQuark(): GLib.Quark
function fileToJpeg(filename: string, target: string): boolean
function getFile(artist?: string | null, title?: string | null, prefix?: string | null): { returnType: boolean, cacheFile: Gio.File | null }
function getPath(artist?: string | null, title?: string | null, prefix?: string | null): { returnType: boolean, cachePath: string | null }
function pluginInit(maxWidth: number): void
function pluginShutdown(): void
function remove(artist: string, album?: string | null, cancellable?: Gio.Cancellable | null): boolean
function removeAsync(artist: string, album: string | null, ioPriority: number, sourceObject?: GObject.Object | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function removeFinish(sourceObject: GObject.Object | null, result: Gio.AsyncResult): boolean
function stripInvalidEntities(original?: string | null): string
export interface Process_ConstructProps extends GObject.Object_ConstructProps {
}
class Process {
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
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
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
abstract class ProcessClass {
    static name: string
}
}
export default MediaArt