/**
 * Bump-0.1
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gee } from './Gee-0.8';

declare namespace Bump {

interface Callback {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
export interface Queue_ConstructProps extends GObject.Object_ConstructProps {
}
class Queue {
    /* Properties of Bump-0.1.Bump.Queue */
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Queue */
    process(wait: GLib.TimeSpan): boolean
    getLength(): number
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
    connect(sigName: "notify", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::length", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Queue_ConstructProps)
    _init (config?: Queue_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Threading_ConstructProps extends GObject.Object_ConstructProps {
}
class Threading {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Threading */
    getMaxThreads(): number
    setMaxThreads(value: number): void
    getMaxIdleTime(): GLib.TimeSpan
    setMaxIdleTime(value: GLib.TimeSpan): void
    getNumThreads(): number
    getIdleThreads(): number
    increaseMaxThreads(newMaxThreads: number): void
    runTask(func: GLib.SourceFunc): boolean
    spawn(maxNewThreads: number): number
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
    connect(sigName: "notify", callback: (($obj: Threading, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Threading_ConstructProps)
    _init (config?: Threading_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AsyncPriorityQueue_ConstructProps extends Gee.PriorityQueue_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
    waitingThreads?: number
}
class AsyncPriorityQueue {
    /* Properties of Bump-0.1.Bump.AsyncPriorityQueue */
    waitingThreads: number
    /* Properties of Gee-0.8.Gee.AbstractQueue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Gee.Collection
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.AsyncPriorityQueue */
    pollTimed(wait: GLib.TimeSpan): object | null
    peekTimed(wait: GLib.TimeSpan): object | null
    offer(element?: object | null): boolean
    getWaitingThreads(): number
    /* Methods of Gee-0.8.Gee.PriorityQueue */
    drain(recipient: Gee.Collection, amount: number): number
    getCompareFunc(): { returnType: GLib.CompareDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractQueue */
    peek(): object | null
    poll(): object | null
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    getCapacity(): number
    getRemainingCapacity(): number
    getIsFull(): boolean
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
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
    /* Signals of Bump-0.1.Bump.AsyncPriorityQueue */
    connect(sigName: "consumer-shortage", callback: (($obj: AsyncPriorityQueue) => void)): number
    on(sigName: "consumer-shortage", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "consumer-shortage", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "consumer-shortage", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "consumer-shortage"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::waiting-threads", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::waiting-threads", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::waiting-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::waiting-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::waiting-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AsyncPriorityQueue_ConstructProps)
    _init (config?: AsyncPriorityQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): AsyncPriorityQueue
    static $gtype: GObject.Type
}
export interface Claim_ConstructProps extends GObject.Object_ConstructProps {
    timeAcquired?: number
    timeReleased?: number
}
class Claim {
    /* Properties of Bump-0.1.Bump.Claim */
    readonly active: boolean
    timeAcquired: number
    timeReleased: number
    readonly durationHeld: GLib.TimeSpan
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Claim */
    release(): void
    init(cancellable?: Gio.Cancellable | null): boolean
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    getActive(): boolean
    getTimeAcquired(): number
    getTimeReleased(): number
    getDurationHeld(): GLib.TimeSpan
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-acquired", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-acquired", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-released", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-released", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-held", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-held", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Claim_ConstructProps)
    _init (config?: Claim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Claim
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface Event_ConstructProps extends GObject.Object_ConstructProps {
    tType?: GObject.Type
    tDupFunc?: GObject.BoxedCopyFunc
    tDestroyFunc?: GLib.DestroyNotify
    pool?: TaskQueue
    autoReset?: boolean
    triggered?: boolean
}
class Event {
    /* Properties of Bump-0.1.Bump.Event */
    triggered: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Event */
    reset(): void
    trigger(value?: object | null): void
    add(func: any, priority: number, cancellable?: Gio.Cancellable | null): void
    execute(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): object | null
    executeAsync(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    executeBackground(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeBackgroundFinish(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    getPool(): TaskQueue
    getAutoReset(): boolean
    getTriggered(): boolean
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
    connect(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::triggered", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::triggered", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::triggered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::triggered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::triggered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Event_ConstructProps)
    _init (config?: Event_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(tType: GObject.Type, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, autoReset: boolean): Event
    static $gtype: GObject.Type
}
export interface Factory_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class Factory {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Factory */
    create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    createAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFinish(res: Gio.AsyncResult): object | null
    createBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createBackgroundFinish(res: Gio.AsyncResult): object | null
    acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    acquireAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireFinish(res: Gio.AsyncResult): object | null
    acquireBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireBackgroundFinish(res: Gio.AsyncResult): object | null
    getConstructProperties(): GObject.Parameter[] | null
    setConstructProperties(value: GObject.Parameter[] | null): void
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
    connect(sigName: "notify", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Factory_ConstructProps)
    _init (config?: Factory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Lazy_ConstructProps extends Factory_ConstructProps {
    tType?: GObject.Type
    tDupFunc?: GObject.BoxedCopyFunc
    tDestroyFunc?: GLib.DestroyNotify
    pool?: TaskQueue
}
class Lazy {
    /* Properties of Bump-0.1.Bump.Lazy */
    readonly value: object
    readonly isInitialized: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Lazy */
    getPool(): TaskQueue
    getValue(): object | null
    getIsInitialized(): boolean
    /* Methods of Bump-0.1.Bump.Factory */
    create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    createAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFinish(res: Gio.AsyncResult): object | null
    createBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createBackgroundFinish(res: Gio.AsyncResult): object | null
    acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    acquireAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireFinish(res: Gio.AsyncResult): object | null
    acquireBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireBackgroundFinish(res: Gio.AsyncResult): object | null
    getConstructProperties(): GObject.Parameter[] | null
    setConstructProperties(value: GObject.Parameter[] | null): void
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
    connect(sigName: "notify", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-initialized", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-initialized", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Lazy_ConstructProps)
    _init (config?: Lazy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(tType: GObject.Type, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): Lazy
    static $gtype: GObject.Type
}
export interface ResourceClaim_ConstructProps extends Claim_ConstructProps {
    tType?: GObject.Type
    tDupFunc?: GObject.BoxedCopyFunc
    tDestroyFunc?: GLib.DestroyNotify
    pool?: ResourcePool
}
class ResourceClaim {
    /* Properties of Bump-0.1.Bump.ResourceClaim */
    readonly resource: object
    /* Properties of Bump-0.1.Bump.Claim */
    readonly active: boolean
    timeAcquired: number
    timeReleased: number
    readonly durationHeld: GLib.TimeSpan
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.ResourceClaim */
    getPool(): ResourcePool
    getResource(): object | null
    /* Methods of Bump-0.1.Bump.Claim */
    release(): void
    init(cancellable?: Gio.Cancellable | null): boolean
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    getActive(): boolean
    getTimeAcquired(): number
    getTimeReleased(): number
    getDurationHeld(): GLib.TimeSpan
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
    connect(sigName: "notify", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::resource", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-acquired", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-acquired", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-released", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-released", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-held", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-held", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ResourceClaim_ConstructProps)
    _init (config?: ResourceClaim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(tType: GObject.Type, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, pool: ResourcePool): ResourceClaim
    static new(): ResourceClaim
    static $gtype: GObject.Type
}
export interface ResourcePool_ConstructProps extends Factory_ConstructProps {
    tType?: GObject.Type
    tDupFunc?: GObject.BoxedCopyFunc
    tDestroyFunc?: GLib.DestroyNotify
    maxResources?: number
    maxIdleTime?: GLib.TimeSpan
    numResources?: number
    pool?: TaskQueue
}
class ResourcePool {
    /* Properties of Bump-0.1.Bump.ResourcePool */
    maxIdleTime: GLib.TimeSpan
    numResources: number
    readonly idleResources: number
    readonly activeResources: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.ResourcePool */
    release(resource?: object | null): void
    execute(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): object | null
    executeAsync(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    executeBackground(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeBackgroundFinish(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    claim(priority: number, cancellable?: Gio.Cancellable | null): ResourceClaim
    claimAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    claimFinish(res: Gio.AsyncResult): ResourceClaim
    getMaxResources(): number
    getMaxIdleTime(): GLib.TimeSpan
    setMaxIdleTime(value: GLib.TimeSpan): void
    getNumResources(): number
    getIdleResources(): number
    getActiveResources(): number
    getPool(): TaskQueue
    /* Methods of Bump-0.1.Bump.Factory */
    create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    createAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFinish(res: Gio.AsyncResult): object | null
    createBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createBackgroundFinish(res: Gio.AsyncResult): object | null
    acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    acquireAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireFinish(res: Gio.AsyncResult): object | null
    acquireBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireBackgroundFinish(res: Gio.AsyncResult): object | null
    getConstructProperties(): GObject.Parameter[] | null
    setConstructProperties(value: GObject.Parameter[] | null): void
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
    connect(sigName: "notify", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-idle-time", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-idle-time", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-idle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-idle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-idle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ResourcePool_ConstructProps)
    _init (config?: ResourcePool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(tType: GObject.Type, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, maxResources: number): ResourcePool
    static $gtype: GObject.Type
}
export interface Semaphore_ConstructProps extends TaskQueue_ConstructProps {
    maxClaims?: number
    claims?: number
    pool?: TaskQueue
}
class Semaphore {
    /* Properties of Bump-0.1.Bump.Semaphore */
    claims: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Semaphore */
    unlock(): void
    lock(priority: number, cancellable?: Gio.Cancellable | null): void
    lockAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lockFinish(res: Gio.AsyncResult): void
    claim(priority: number, cancellable?: Gio.Cancellable | null): SemaphoreClaim
    claimAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    claimFinish(res: Gio.AsyncResult): SemaphoreClaim
    getMaxClaims(): number
    getClaims(): number
    getPool(): TaskQueue
    /* Methods of Bump-0.1.Bump.TaskQueue */
    spawn(max: number): number
    add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    process(wait: GLib.TimeSpan): boolean
    execute(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): object | null
    executeAsync(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    executeBackground(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeBackgroundFinish(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
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
    connect(sigName: "notify", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::claims", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::claims", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::claims", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::claims", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::claims", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Semaphore_ConstructProps)
    _init (config?: Semaphore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(maxClaims: number): Semaphore
    static new(): Semaphore
    static $gtype: GObject.Type
}
export interface SemaphoreClaim_ConstructProps extends Claim_ConstructProps {
    semaphore?: Semaphore
}
class SemaphoreClaim {
    /* Properties of Bump-0.1.Bump.Claim */
    readonly active: boolean
    timeAcquired: number
    timeReleased: number
    readonly durationHeld: GLib.TimeSpan
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.SemaphoreClaim */
    getSemaphore(): Semaphore
    /* Methods of Bump-0.1.Bump.Claim */
    release(): void
    init(cancellable?: Gio.Cancellable | null): boolean
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    getActive(): boolean
    getTimeAcquired(): number
    getTimeReleased(): number
    getDurationHeld(): GLib.TimeSpan
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
    connect(sigName: "notify", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-acquired", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-acquired", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-released", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-released", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-held", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-held", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SemaphoreClaim_ConstructProps)
    _init (config?: SemaphoreClaim_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TaskQueue_ConstructProps extends GObject.Object_ConstructProps {
}
class TaskQueue {
    /* Properties of Bump-0.1.Bump.Queue */
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.TaskQueue */
    spawn(max: number): number
    add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    process(wait: GLib.TimeSpan): boolean
    execute(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): object | null
    executeAsync(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    executeBackground(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeBackgroundFinish(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
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
    /* Methods of Bump-0.1.Bump.Queue */
    getLength(): number
    /* Methods of Bump-0.1.Bump.Threading */
    getMaxThreads(): number
    setMaxThreads(value: number): void
    getMaxIdleTime(): GLib.TimeSpan
    setMaxIdleTime(value: GLib.TimeSpan): void
    getNumThreads(): number
    getIdleThreads(): number
    increaseMaxThreads(newMaxThreads: number): void
    runTask(func: GLib.SourceFunc): boolean
    spawn(maxNewThreads: number): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TaskQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::length", callback: (($obj: TaskQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: TaskQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TaskQueue_ConstructProps)
    _init (config?: TaskQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TaskQueue
    static getGlobal(): TaskQueue
    static $gtype: GObject.Type
}
abstract class AsyncPriorityQueueClass {
    static name: string
}
class AsyncPriorityQueuePrivate {
    static name: string
}
abstract class ClaimClass {
    /* Fields of Bump-0.1.Bump.ClaimClass */
    release: () => void
    init: (cancellable?: Gio.Cancellable | null) => boolean
    initAsync: (ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    initFinish: (res: Gio.AsyncResult) => boolean
    static name: string
}
class ClaimPrivate {
    static name: string
}
abstract class EventClass {
    static name: string
}
class EventPrivate {
    static name: string
}
abstract class FactoryClass {
    /* Fields of Bump-0.1.Bump.FactoryClass */
    create: (priority: number, cancellable?: Gio.Cancellable | null) => object | null
    createAsync: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    createFinish: (res: Gio.AsyncResult) => object | null
    createBackground: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    createBackgroundFinish: (res: Gio.AsyncResult) => object | null
    acquire: (priority: number, cancellable?: Gio.Cancellable | null) => object | null
    acquireAsync: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    acquireFinish: (res: Gio.AsyncResult) => object | null
    acquireBackground: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    acquireBackgroundFinish: (res: Gio.AsyncResult) => object | null
    static name: string
}
class FactoryPrivate {
    static name: string
}
abstract class LazyClass {
    static name: string
}
class LazyPrivate {
    static name: string
}
abstract class ResourceClaimClass {
    static name: string
}
class ResourceClaimPrivate {
    static name: string
}
abstract class ResourcePoolClass {
    /* Fields of Bump-0.1.Bump.ResourcePoolClass */
    release: (resource?: object | null) => void
    static name: string
}
class ResourcePoolPrivate {
    static name: string
}
abstract class SemaphoreClass {
    /* Fields of Bump-0.1.Bump.SemaphoreClass */
    claim: (priority: number, cancellable?: Gio.Cancellable | null) => SemaphoreClaim
    claimAsync: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    claimFinish: (res: Gio.AsyncResult) => SemaphoreClaim
    static name: string
}
class SemaphorePrivate {
    static name: string
}
abstract class SemaphoreClaimClass {
    static name: string
}
class SemaphoreClaimPrivate {
    static name: string
}
abstract class TaskQueueClass {
    /* Fields of Bump-0.1.Bump.TaskQueueClass */
    spawn: (max: number) => number
    add: (task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null) => void
    process: (wait: GLib.TimeSpan) => boolean
    execute: (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null) => object | null
    executeAsync: (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    executeFinish: (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult) => object | null
    executeBackground: (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    executeBackgroundFinish: (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult) => object | null
    static name: string
}
class TaskQueuePrivate {
    static name: string
}
abstract class QueueIface {
    /* Fields of Bump-0.1.Bump.QueueIface */
    process: (wait: GLib.TimeSpan) => boolean
    getLength: () => number
    static name: string
}
abstract class ThreadingIface {
    /* Fields of Bump-0.1.Bump.ThreadingIface */
    spawn: (maxNewThreads: number) => number
    static name: string
}
}
export default Bump