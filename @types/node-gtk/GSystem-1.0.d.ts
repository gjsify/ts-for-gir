/**
 * GSystem-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GSystem {

enum SubprocessStreamDisposition {
    NULL,
    INHERIT,
    PIPE,
    STDERR_MERGE,
}
function dfdAndNameGetAllXattrs(dfd: number, name: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outXattrs: GLib.Variant }
function dfdAndNameSetAllXattrs(dfd: number, name: string, xattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
function dirfdIteratorClear(dfdIter: DirFdIterator): void
function dirfdIteratorInitAt(dfd: number, path: string, follow: boolean, dfdIter: DirFdIterator): boolean
function dirfdIteratorInitTakeFd(dfd: number, dfdIter: DirFdIterator): boolean
function fdGetAllXattrs(fd: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outXattrs: GLib.Variant }
function fdSetAllXattrs(fd: number, xattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
function fileChmod(path: Gio.File, mode: number, cancellable?: Gio.Cancellable | null): boolean
function fileChown(path: Gio.File, owner: number, group: number, cancellable?: Gio.Cancellable | null): boolean
function fileCreate(file: Gio.File, mode: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outStream: Gio.OutputStream | null }
function fileEnsureDirectory(dir: Gio.File, withParents: boolean, cancellable?: Gio.Cancellable | null): boolean
function fileEnsureDirectoryMode(dir: Gio.File, mode: number, cancellable?: Gio.Cancellable | null): boolean
function fileEnumeratorIterate(direnum: Gio.FileEnumerator, cancellable?: Gio.Cancellable | null): { returnType: boolean, outInfo: Gio.FileInfo | null, outChild: Gio.File | null }
function fileGetAllXattrs(f: Gio.File, cancellable?: Gio.Cancellable | null): { returnType: boolean, outXattrs: GLib.Variant }
function fileGetBasenameCached(file: Gio.File): string
function fileGetPathCached(file: Gio.File): string
function fileGetRelpath(one: Gio.File, two: Gio.File): string
function fileLchown(path: Gio.File, owner: number, group: number, cancellable?: Gio.Cancellable | null): boolean
function fileLinkcopy(src: Gio.File, dest: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): boolean
function fileLinkcopySyncData(src: Gio.File, dest: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): boolean
function fileLoadContentsUtf8(file: Gio.File, cancellable?: Gio.Cancellable | null): string
function fileMapReadonly(file: Gio.File, cancellable?: Gio.Cancellable | null): any
function fileOpenDirFd(path: Gio.File, cancellable?: Gio.Cancellable | null): { returnType: boolean, outFd: number }
function fileOpenDirFdAt(parentDfd: number, name: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outFd: number }
function fileOpenInTmpdir(tmpdir: Gio.File, mode: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outFile: Gio.File, outStream: Gio.OutputStream | null }
function fileOpenInTmpdirAt(tmpdirFd: number, mode: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outName: string, outStream: Gio.OutputStream | null }
function fileOpenatNoatime(dfd: number, name: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, retFd: number }
function fileReadNoatime(file: Gio.File, cancellable?: Gio.Cancellable | null): Gio.InputStream
function fileRealpath(file: Gio.File): Gio.File | null
function fileRename(from: Gio.File, to: Gio.File, cancellable?: Gio.Cancellable | null): boolean
function fileSetAllXattrs(file: Gio.File, xattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
function fileSyncData(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
function fileUnlink(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean
function fileutilGenTmpName(prefix?: string | null, suffix?: string | null): string
function logStructured(message: string, keys?: string[] | null): void
function logStructuredPrint(message: string, keys?: string[] | null): void
function opendirat(dfd: number, path: string, follow: boolean, outFd: number): boolean
function opendiratWithErrno(dfd: number, path: string, follow: boolean): number
function setErrorFromErrno(error: GLib.Error | null, savedErrno: number): void
function shutilCpA(src: Gio.File, dest: Gio.File, cancellable?: Gio.Cancellable | null): boolean
function shutilCpAlOrFallback(src: Gio.File, dest: Gio.File, cancellable?: Gio.Cancellable | null): boolean
function shutilRmRf(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean
function shutilRmRfAt(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
function stdoutIsJournal(): boolean
export interface Console_ConstructProps extends GObject.Object_ConstructProps {
}
class Console {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSystem-1.0.GSystem.Console */
    beginStatusLine(line: string, cancellable?: Gio.Cancellable | null): boolean
    endStatusLine(cancellable?: Gio.Cancellable | null): boolean
    readPassword(prompt: string, cancellable?: Gio.Cancellable | null): string
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Console, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Console_ConstructProps)
    _init (config?: Console_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): Console
    static getStderr(): Gio.OutputStream
    static getStdin(): Gio.InputStream
    static getStdout(): Gio.OutputStream
    static $gtype: GObject.Type
}
export interface Subprocess_ConstructProps extends GObject.Object_ConstructProps {
    context?: SubprocessContext
}
class Subprocess {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSystem-1.0.GSystem.Subprocess */
    forceExit(): void
    getPid(): GLib.Pid
    getStderrPipe(): Gio.InputStream
    getStdinPipe(): Gio.OutputStream
    getStdoutPipe(): Gio.InputStream
    requestExit(): boolean
    wait(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    waitFinish(result: Gio.AsyncResult): { returnType: boolean, outExitStatus: number }
    waitSync(cancellable?: Gio.Cancellable | null): { returnType: boolean, outExitStatus: number }
    waitSyncCheck(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Subprocess_ConstructProps)
    _init (config?: Subprocess_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: SubprocessContext, cancellable?: Gio.Cancellable | null): Subprocess
    static newSimpleArgv(argv: string[], stdoutDisposition: SubprocessStreamDisposition, stderrDisposition: SubprocessStreamDisposition, cancellable?: Gio.Cancellable | null): Subprocess
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SubprocessContext_ConstructProps extends GObject.Object_ConstructProps {
    argv?: string[]
}
class SubprocessContext {
    /* Properties of GSystem-1.0.GSystem.SubprocessContext */
    argv: string[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSystem-1.0.GSystem.SubprocessContext */
    argvAppend(arg: string): void
    openPipeRead(): { returnType: boolean, outStream: Gio.InputStream, outFdno: number }
    openPipeWrite(): { returnType: boolean, outStream: Gio.OutputStream, outFdno: number }
    setCwd(cwd: string): void
    setEnvironment(environ: string[]): void
    setKeepDescriptors(keepDescriptors: boolean): void
    setSearchPath(searchPath: boolean, searchPathFromEnvp: boolean): void
    setStderrDisposition(disposition: SubprocessStreamDisposition): void
    setStderrFd(fd: number): void
    setStderrFilePath(path: string): void
    setStdinDisposition(disposition: SubprocessStreamDisposition): void
    setStdinFd(fd: number): void
    setStdinFilePath(path: string): void
    setStdoutDisposition(disposition: SubprocessStreamDisposition): void
    setStdoutFd(fd: number): void
    setStdoutFilePath(path: string): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SubprocessContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::argv", callback: (($obj: SubprocessContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::argv", callback: (($obj: SubprocessContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::argv", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::argv", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::argv", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SubprocessContext_ConstructProps)
    _init (config?: SubprocessContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(argv: string): SubprocessContext
    static newArgv0(argv0: string, argv: string): SubprocessContext
    static $gtype: GObject.Type
}
class DirFdIterator {
    /* Fields of GSystem-1.0.GSystem.DirFdIterator */
    initialized: boolean
    fd: number
    paddingData: object[]
    static name: string
}
}
export default GSystem