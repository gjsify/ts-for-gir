/**
 * GnomeAutoar-0.1
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GnomeAutoar {

enum ConflictAction {
    UNHANDLED,
    SKIP,
    OVERWRITE,
    CHANGE_DESTINATION,
}
enum Filter {
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
enum Format {
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
function checkMimeTypeSupported(mimeType: string): boolean
function filterGetDescription(filter: Filter): string
function filterGetDescriptionLibarchive(filter: Filter): string
function filterGetExtension(filter: Filter): string
function filterGetFilterLibarchive(filter: Filter): number
function filterGetMimeType(filter: Filter): string
function filterIsValid(filter: Filter): boolean
function filterLast(): number
function formatFilterGetDescription(format: Format, filter: Filter): string
function formatFilterGetExtension(format: Format, filter: Filter): string
function formatFilterGetMimeType(format: Format, filter: Filter): string
function formatGetDescription(format: Format): string
function formatGetDescriptionLibarchive(format: Format): string
function formatGetExtension(format: Format): string
function formatGetFormatLibarchive(format: Format): number
function formatGetMimeType(format: Format): string
function formatIsValid(format: Format): boolean
function formatLast(): number
function libarchiveQuark(): GLib.Quark
function queryMimeTypeSupported(file: Gio.File): boolean
interface FilterFunc {
    (a?: object | null): number
}
interface FormatFunc {
    (a?: object | null): number
}
export interface Compressor_ConstructProps extends GObject.Object_ConstructProps {
    createTopLevelDirectory?: boolean
    notifyInterval?: number
    outputFile?: Gio.File
    outputIsDest?: boolean
    sourceFiles?: object
}
class Compressor {
    /* Properties of GnomeAutoar-0.1.GnomeAutoar.Compressor */
    readonly completedFiles: number
    readonly completedSize: number
    createTopLevelDirectory: boolean
    readonly files: number
    notifyInterval: number
    outputIsDest: boolean
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeAutoar-0.1.GnomeAutoar.Compressor */
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
    setPassphrase(passphrase: string): void
    start(cancellable?: Gio.Cancellable | null): void
    startAsync(cancellable?: Gio.Cancellable | null): void
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
    /* Signals of GnomeAutoar-0.1.GnomeAutoar.Compressor */
    connect(sigName: "cancelled", callback: (($obj: Compressor) => void)): number
    on(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancelled"): void
    connect(sigName: "completed", callback: (($obj: Compressor) => void)): number
    on(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "completed"): void
    connect(sigName: "decide-dest", callback: (($obj: Compressor, destination: Gio.File) => void)): number
    on(sigName: "decide-dest", callback: (destination: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-dest", callback: (destination: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-dest", callback: (destination: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "decide-dest", destination: Gio.File): void
    connect(sigName: "error", callback: (($obj: Compressor, error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "progress", callback: (($obj: Compressor, completedSize: number, completedFiles: number) => void)): number
    on(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", completedSize: number, completedFiles: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
class Extractor {
    /* Properties of GnomeAutoar-0.1.GnomeAutoar.Extractor */
    readonly completedFiles: number
    readonly completedSize: number
    deleteAfterExtraction: boolean
    notifyInterval: number
    outputIsDest: boolean
    readonly totalFiles: number
    readonly totalSize: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeAutoar-0.1.GnomeAutoar.Extractor */
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
    /* Signals of GnomeAutoar-0.1.GnomeAutoar.Extractor */
    connect(sigName: "cancelled", callback: (($obj: Extractor) => void)): number
    on(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancelled"): void
    connect(sigName: "completed", callback: (($obj: Extractor) => void)): number
    on(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "completed"): void
    connect(sigName: "conflict", callback: (($obj: Extractor, file: Gio.File, newFile?: object | null) => number)): number
    on(sigName: "conflict", callback: (file: Gio.File, newFile?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conflict", callback: (file: Gio.File, newFile?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conflict", callback: (file: Gio.File, newFile?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "conflict", file: Gio.File, newFile?: object | null): void
    connect(sigName: "decide-destination", callback: (($obj: Extractor, destination: Gio.File, files?: object | null) => GObject.Object)): number
    on(sigName: "decide-destination", callback: (destination: Gio.File, files?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-destination", callback: (destination: Gio.File, files?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-destination", callback: (destination: Gio.File, files?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "decide-destination", destination: Gio.File, files?: object | null): void
    connect(sigName: "error", callback: (($obj: Extractor, error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "progress", callback: (($obj: Extractor, completedSize: number, completedFiles: number) => void)): number
    on(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", completedSize: number, completedFiles: number): void
    connect(sigName: "request-passphrase", callback: (($obj: Extractor) => string)): number
    on(sigName: "request-passphrase", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-passphrase", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-passphrase", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "request-passphrase"): void
    connect(sigName: "scanned", callback: (($obj: Extractor, files: number) => void)): number
    on(sigName: "scanned", callback: (files: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scanned", callback: (files: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scanned", callback: (files: number) => void): NodeJS.EventEmitter
    emit(sigName: "scanned", files: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
abstract class CompressorClass {
    /* Fields of GnomeAutoar-0.1.GnomeAutoar.CompressorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ExtractorClass {
    /* Fields of GnomeAutoar-0.1.GnomeAutoar.ExtractorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}
export default GnomeAutoar