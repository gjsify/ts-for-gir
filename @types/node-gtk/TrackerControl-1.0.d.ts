/**
 * TrackerControl-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace TrackerControl {

enum MinerManagerError {
    NOT_AVAILABLE,
    NOENT,
}
export interface MinerManager_ConstructProps extends GObject.Object_ConstructProps {
    autoStart?: boolean
}
class MinerManager {
    /* Fields of TrackerControl-1.0.TrackerControl.MinerManager */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerControl-1.0.TrackerControl.MinerManager */
    getAvailable(): string[] | null
    getDescription(miner: string): string
    getDisplayName(miner: string): string
    getRunning(): string[] | null
    getStatus(miner: string): { returnType: boolean, status: string | null, progress: number | null, remainingTime: number | null }
    ignoreNextUpdate(miner: string, urls: string): boolean
    indexFile(file: Gio.File): boolean
    indexFileAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indexFileFinish(result: Gio.AsyncResult): boolean
    indexFileForProcess(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    indexFileForProcessAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indexFileForProcessFinish(result: Gio.AsyncResult): boolean
    isActive(miner: string): boolean
    isPaused(miner: string): { returnType: boolean, applications: string[] | null, reasons: string[] | null }
    pause(miner: string, reason: string): { returnType: boolean, cookie: number | null }
    pauseForProcess(miner: string, reason: string): { returnType: boolean, cookie: number | null }
    reindexByMimetype(mimetypes: string[]): boolean
    resume(miner: string, cookie: number): boolean
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
    /* Signals of TrackerControl-1.0.TrackerControl.MinerManager */
    connect(sigName: "miner-activated", callback: (($obj: MinerManager, miner: string) => void)): number
    on(sigName: "miner-activated", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-activated", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-activated", callback: (miner: string) => void): NodeJS.EventEmitter
    emit(sigName: "miner-activated", miner: string): void
    connect(sigName: "miner-deactivated", callback: (($obj: MinerManager, miner: string) => void)): number
    on(sigName: "miner-deactivated", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-deactivated", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-deactivated", callback: (miner: string) => void): NodeJS.EventEmitter
    emit(sigName: "miner-deactivated", miner: string): void
    connect(sigName: "miner-paused", callback: (($obj: MinerManager, miner: string) => void)): number
    on(sigName: "miner-paused", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-paused", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-paused", callback: (miner: string) => void): NodeJS.EventEmitter
    emit(sigName: "miner-paused", miner: string): void
    connect(sigName: "miner-progress", callback: (($obj: MinerManager, miner: string, status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "miner-progress", callback: (miner: string, status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-progress", callback: (miner: string, status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-progress", callback: (miner: string, status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "miner-progress", miner: string, status: string, progress: number, remainingTime: number): void
    connect(sigName: "miner-resumed", callback: (($obj: MinerManager, miner: string) => void)): number
    on(sigName: "miner-resumed", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-resumed", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-resumed", callback: (miner: string) => void): NodeJS.EventEmitter
    emit(sigName: "miner-resumed", miner: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MinerManager_ConstructProps)
    _init (config?: MinerManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MinerManager
    static newFull(autoStart: boolean): MinerManager
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class MinerManagerClass {
    /* Fields of TrackerControl-1.0.TrackerControl.MinerManagerClass */
    parentClass: GObject.ObjectClass
    minerProgress: (manager: MinerManager, minerName: string, status: string, progress: number) => void
    minerPaused: (manager: MinerManager, minerName: string) => void
    minerResumed: (manager: MinerManager, minerName: string) => void
    minerActivated: (manager: MinerManager, minerName: string) => void
    minerDeactivated: (manager: MinerManager, minerName: string) => void
    static name: string
}
}
export default TrackerControl