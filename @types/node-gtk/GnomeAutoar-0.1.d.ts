/**
 * GnomeAutoar-0.1
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GnomeAutoar {

export enum ConflictAction {
    SKIP,
    OVERWRITE,
    CHANGE_DESTINATION,
}
export enum Filter {
    NONE,
    COMPRESS,
    GZIP,
    BZIP2,
    XZ,
    LZMA,
    LZIP,
    LZOP,
    GRZIP,
    LRZIP,
}
export enum Format {
    ZIP,
    TAR,
    CPIO,
    /* 7ZIP (invalid, starts with a number) */
    AR_BSD,
    AR_SVR4,
    CPIO_NEWC,
    GNUTAR,
    ISO9660,
    PAX,
    USTAR,
    XAR,
}
export function checkMimeTypeSupported(mimeType: string): boolean
export function filterGetDescription(filter: Filter): string
export function filterGetDescriptionLibarchive(filter: Filter): string
export function filterGetExtension(filter: Filter): string
export function filterGetFilterLibarchive(filter: Filter): number
export function filterGetMimeType(filter: Filter): string
export function filterIsValid(filter: Filter): boolean
export function filterLast(): number
export function formatFilterGetDescription(format: Format, filter: Filter): string
export function formatFilterGetExtension(format: Format, filter: Filter): string
export function formatFilterGetMimeType(format: Format, filter: Filter): string
export function formatGetDescription(format: Format): string
export function formatGetDescriptionLibarchive(format: Format): string
export function formatGetExtension(format: Format): string
export function formatGetFormatLibarchive(format: Format): number
export function formatGetMimeType(format: Format): string
export function formatIsValid(format: Format): boolean
export function formatLast(): number
export function libarchiveQuark(): GLib.Quark
export function queryMimeTypeSupported(file: Gio.File): boolean
export interface FilterFunc {
    (a?: object | null): number
}
export interface FormatFunc {
    (a?: object | null): number
}
export interface Compressor_ConstructProps extends GObject.Object_ConstructProps {
    createTopLevelDirectory?: boolean
    notifyInterval?: number
    outputFile?: Gio.File
    outputIsDest?: boolean
    sourceFiles?: object
}
export class Compressor {
    /* Properties of GnomeAutoar.Compressor */
    readonly completedFiles: number
    readonly completedSize: number
    createTopLevelDirectory: boolean
    readonly files: number
    notifyInterval: number
    outputIsDest: boolean
    readonly size: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeAutoar.Compressor */
    getCompletedFiles(): number
    getCompletedSize(): number
    getCreateTopLevelDirectory(): boolean
    getFiles(): number
    getFilter(): Filter
    getFormat(): Format
    getNotifyInterval(): number
    getOutputFile(): Gio.File
    getOutputIsDest(): boolean
    getSize(): number
    getSourceFiles(): Gio.File[]
    setNotifyInterval(notifyInterval: number): void
    setOutputIsDest(outputIsDest: boolean): void
    start(cancellable?: Gio.Cancellable | null): void
    startAsync(cancellable?: Gio.Cancellable | null): void
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
    /* Signals of GnomeAutoar.Compressor */
    connect(sigName: "cancelled", callback: (($obj: Compressor) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: Compressor) => void)): number
    emit(sigName: "cancelled"): void
    on(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "completed", callback: (($obj: Compressor) => void)): number
    connect_after(sigName: "completed", callback: (($obj: Compressor) => void)): number
    emit(sigName: "completed"): void
    on(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "decide-dest", callback: (($obj: Compressor, destination: Gio.File) => void)): number
    connect_after(sigName: "decide-dest", callback: (($obj: Compressor, destination: Gio.File) => void)): number
    emit(sigName: "decide-dest", destination: Gio.File): void
    on(sigName: "decide-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "decide-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "decide-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "error", callback: (($obj: Compressor, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Compressor, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    on(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: Compressor, completedSize: number, completedFiles: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Compressor, completedSize: number, completedFiles: number) => void)): number
    emit(sigName: "progress", completedSize: number, completedFiles: number): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completed-files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completed-size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::create-top-level-directory", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-top-level-directory", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::create-top-level-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::create-top-level-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::create-top-level-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notify-interval", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-interval", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-is-dest", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-is-dest", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Compressor_ConstructProps)
    _init (config?: Compressor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sourceFiles: Gio.File[], outputFile: Gio.File, format: Format, filter: Filter, createTopLevelDirectory: boolean): Compressor
    static quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Extractor_ConstructProps extends GObject.Object_ConstructProps {
    deleteAfterExtraction?: boolean
    notifyInterval?: number
    outputFile?: Gio.File
    outputIsDest?: boolean
    sourceFile?: Gio.File
}
export class Extractor {
    /* Properties of GnomeAutoar.Extractor */
    readonly completedFiles: number
    readonly completedSize: number
    deleteAfterExtraction: boolean
    notifyInterval: number
    outputIsDest: boolean
    readonly totalFiles: number
    readonly totalSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeAutoar.Extractor */
    getCompletedFiles(): number
    getCompletedSize(): number
    getDeleteAfterExtraction(): boolean
    getNotifyInterval(): number
    getOutputFile(): Gio.File
    getOutputIsDest(): boolean
    getSourceFile(): Gio.File
    getTotalFiles(): number
    getTotalSize(): number
    setDeleteAfterExtraction(deleteAfterExtraction: boolean): void
    setNotifyInterval(notifyInterval: number): void
    setOutputIsDest(outputIsDest: boolean): void
    start(cancellable?: Gio.Cancellable | null): void
    startAsync(cancellable?: Gio.Cancellable | null): void
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
    /* Signals of GnomeAutoar.Extractor */
    connect(sigName: "cancelled", callback: (($obj: Extractor) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: Extractor) => void)): number
    emit(sigName: "cancelled"): void
    on(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "completed", callback: (($obj: Extractor) => void)): number
    connect_after(sigName: "completed", callback: (($obj: Extractor) => void)): number
    emit(sigName: "completed"): void
    on(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "conflict", callback: (($obj: Extractor, file: Gio.File, newFile?: object | null) => number)): number
    connect_after(sigName: "conflict", callback: (($obj: Extractor, file: Gio.File, newFile?: object | null) => number)): number
    emit(sigName: "conflict", file: Gio.File, newFile?: object | null): void
    on(sigName: "conflict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "conflict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "conflict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "decide-destination", callback: (($obj: Extractor, destination: Gio.File, files?: object | null) => GObject.Object)): number
    connect_after(sigName: "decide-destination", callback: (($obj: Extractor, destination: Gio.File, files?: object | null) => GObject.Object)): number
    emit(sigName: "decide-destination", destination: Gio.File, files?: object | null): void
    on(sigName: "decide-destination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "decide-destination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "decide-destination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "error", callback: (($obj: Extractor, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Extractor, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    on(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: Extractor, completedSize: number, completedFiles: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Extractor, completedSize: number, completedFiles: number) => void)): number
    emit(sigName: "progress", completedSize: number, completedFiles: number): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-passphrase", callback: (($obj: Extractor) => string)): number
    connect_after(sigName: "request-passphrase", callback: (($obj: Extractor) => string)): number
    emit(sigName: "request-passphrase"): void
    on(sigName: "request-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scanned", callback: (($obj: Extractor, files: number) => void)): number
    connect_after(sigName: "scanned", callback: (($obj: Extractor, files: number) => void)): number
    emit(sigName: "scanned", files: number): void
    on(sigName: "scanned", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scanned", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scanned", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completed-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completed-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delete-after-extraction", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-after-extraction", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delete-after-extraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delete-after-extraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delete-after-extraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notify-interval", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-interval", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-is-dest", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-is-dest", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Extractor_ConstructProps)
    _init (config?: Extractor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sourceFile: Gio.File, outputFile: Gio.File): Extractor
    static quark(): GLib.Quark
    static $gtype: GObject.Type
}
export abstract class CompressorClass {
    /* Fields of GnomeAutoar.CompressorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ExtractorClass {
    /* Fields of GnomeAutoar.ExtractorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}