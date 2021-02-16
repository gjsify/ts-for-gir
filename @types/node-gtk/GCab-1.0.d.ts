/**
 * GCab-1.0
 */

/// <reference types="node" />
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GCab {

export enum Compression {
    NONE,
    MSZIP,
    QUANTUM,
    LZX,
    MASK,
}
export enum Error {
    FORMAT,
    FAILED,
    NOT_SUPPORTED,
    INVALID_DATA,
}
export enum FileAttribute {
    RDONLY,
    HIDDEN,
    SYSTEM,
    ARCH,
    EXEC,
    NAME_IS_UTF,
}
export function errorQuark(): GLib.Quark
export interface FileCallback {
    (file: File): boolean
}
export interface Cabinet_ConstructProps extends GObject.Object_ConstructProps {
    reserved?: any
    signature?: any
}
export class Cabinet {
    /* Properties of GCab.Cabinet */
    reserved: any
    signature: any
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCab.Cabinet */
    addFolder(folder: Folder): boolean
    extract(path?: Gio.File | null, fileCallback?: FileCallback | null, progressCallback?: Gio.FileProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    extractSimple(path: Gio.File, fileCallback?: FileCallback | null, cancellable?: Gio.Cancellable | null): boolean
    getFolders(): Folder[]
    getSignature(cancellable?: Gio.Cancellable | null): any
    getSize(): number
    load(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    write(stream: Gio.OutputStream, fileCallback?: FileCallback | null, progressCallback?: Gio.FileProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    writeSimple(stream: Gio.OutputStream, fileCallback?: FileCallback | null, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reserved", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserved", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reserved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reserved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reserved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::signature", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signature", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::signature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::signature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::signature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Cabinet_ConstructProps)
    _init (config?: Cabinet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Cabinet
    static $gtype: GObject.Type
}
export interface File_ConstructProps extends GObject.Object_ConstructProps {
    bytes?: any
    file?: Gio.File
    name?: string
}
export class File {
    /* Properties of GCab.File */
    bytes: any
    file: Gio.File
    name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCab.File */
    getAttributes(): number
    getBytes(): any
    getDate(result: GLib.TimeVal): boolean
    getDateTime(): GLib.DateTime
    getExtractName(): string | null
    getFile(): Gio.File
    getName(): string
    getSize(): number
    setAttributes(attr: number): void
    setDate(tv: GLib.TimeVal): void
    setDateTime(dt: GLib.DateTime): void
    setExtractName(name?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bytes", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: File_ConstructProps)
    _init (config?: File_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithBytes(name: string, bytes: any): File
    static newWithFile(name: string, file: Gio.File): File
    static $gtype: GObject.Type
}
export interface Folder_ConstructProps extends GObject.Object_ConstructProps {
    comptype?: number
    reserved?: any
}
export class Folder {
    /* Properties of GCab.Folder */
    readonly compression: Compression
    reserved: any
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCab.Folder */
    addFile(cabfile: File, recurse: boolean, cancellable?: Gio.Cancellable | null): boolean
    getComptype(): number
    getFileByName(name: string): File
    getFiles(): File[]
    getNfiles(): number
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
    connect(sigName: "notify", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compression", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reserved", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserved", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reserved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reserved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reserved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Folder_ConstructProps)
    _init (config?: Folder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(comptype: number): Folder
    static $gtype: GObject.Type
}
export abstract class CabinetClass {
    /* Fields of GCab.CabinetClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class FileClass {
    /* Fields of GCab.FileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class FolderClass {
    /* Fields of GCab.FolderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}