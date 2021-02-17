/**
 * TrackerControl-2.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace TrackerControl {

export enum MinerManagerError {
    NOT_AVAILABLE,
    NOENT,
}
export interface MinerManager_ConstructProps extends GObject.Object_ConstructProps {
    autoStart?: boolean
    domainOntology?: string
}
export class MinerManager {
    /* Fields of TrackerControl.MinerManager */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerControl.MinerManager */
    getAvailable(): string[] | null
    getDescription(miner: string): string
    getDisplayName(miner: string): string
    getRunning(): string[] | null
    getStatus(miner: string): [ /* returnType */ boolean, /* status */ string | null, /* progress */ number | null, /* remainingTime */ number | null ]
    indexFile(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    indexFileAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indexFileFinish(result: Gio.AsyncResult): boolean
    indexFileForProcess(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    indexFileForProcessAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indexFileForProcessFinish(result: Gio.AsyncResult): boolean
    isActive(miner: string): boolean
    isPaused(miner: string): [ /* returnType */ boolean, /* applications */ string[] | null, /* reasons */ string[] | null ]
    pause(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number | null ]
    pauseForProcess(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number | null ]
    reindexByMimetype(mimetypes: string[]): boolean
    resume(miner: string, cookie: number): boolean
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
    /* Virtual methods of TrackerControl.MinerManager */
    vfuncMinerActivated(minerName: string): void
    vfuncMinerDeactivated(minerName: string): void
    vfuncMinerPaused(minerName: string): void
    vfuncMinerProgress(minerName: string, status: string, progress: number): void
    vfuncMinerResumed(minerName: string): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerControl.MinerManager */
    connect(sigName: "miner-activated", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-activated", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-activated", miner: string): void
    on(sigName: "miner-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "miner-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "miner-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "miner-deactivated", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-deactivated", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-deactivated", miner: string): void
    on(sigName: "miner-deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "miner-deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "miner-deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "miner-paused", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-paused", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-paused", miner: string): void
    on(sigName: "miner-paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "miner-paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "miner-paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "miner-progress", callback: (($obj: MinerManager, miner: string, status: string, progress: number, remainingTime: number) => void)): number
    connect_after(sigName: "miner-progress", callback: (($obj: MinerManager, miner: string, status: string, progress: number, remainingTime: number) => void)): number
    emit(sigName: "miner-progress", miner: string, status: string, progress: number, remainingTime: number): void
    on(sigName: "miner-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "miner-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "miner-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "miner-resumed", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-resumed", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-resumed", miner: string): void
    on(sigName: "miner-resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "miner-resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "miner-resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MinerManager_ConstructProps)
    _init (config?: MinerManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MinerManager
    static newFull(autoStart: boolean): MinerManager
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class MinerManagerClass {
    /* Fields of TrackerControl.MinerManagerClass */
    parentClass: GObject.ObjectClass
    minerProgress: (manager: MinerManager, minerName: string, status: string, progress: number) => void
    minerPaused: (manager: MinerManager, minerName: string) => void
    minerResumed: (manager: MinerManager, minerName: string) => void
    minerActivated: (manager: MinerManager, minerName: string) => void
    minerDeactivated: (manager: MinerManager, minerName: string) => void
    static name: string
}
}