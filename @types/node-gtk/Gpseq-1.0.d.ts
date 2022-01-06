/**
 * Gpseq-1.0
 */

import "node"
import type { Gee } from './Gee-0.8';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Gpseq {

enum ChannelError {
    CLOSED,
    TIMEOUT,
    TRY_FAILED,
}
enum MapError {
    DUPLICATE_KEY,
}
enum OptionalError {
    NOT_PRESENT,
}
enum CollectorFeatures {
    CONCURRENT,
    UNORDERED,
}
function collectorsToGenericArray(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collector
function collectorsToCollection(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, factory: Supplier): Collector
function collectorsToList(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collector
function collectorsToSet(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Collector
function collectorsToMap(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, keyMapper: MapFunc, valMapper: MapFunc, merger: CombineFunc | null, keyHash: Gee.HashDataFunc | null, keyEqual: Gee.EqualDataFunc | null, valueEqual: Gee.EqualDataFunc | null): Collector
function collectorsSumInt(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumUint(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumLong(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumUlong(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumFloat(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumDouble(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumInt32(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumUint32(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumInt64(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumUint64(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsAverageFloat(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsAverageDouble(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsGroupBy(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, classifier: MapFunc): Collector
function collectorsGroupByWith(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, classifier: MapFunc, downstream: Collector): Collector
function collectorsPartition(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, pred: Predicate): Collector
function collectorsPartitionWith(vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, pred: Predicate, downstream: Collector): Collector
function collectorsMax(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compare: GLib.CompareDataFunc | null): Collector
function collectorsMin(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compare: GLib.CompareDataFunc | null): Collector
function collectorsCount(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collector
function collectorsFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, accumulator: FoldFunc, combiner: CombineFunc, identity?: object | null): Collector
function collectorsReduce(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, accumulator: CombineFunc): Collector
function collectorsJoin(delimiter: string): Collector
function collectorsFilter(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, pred: Predicate, downstream: Collector): Collector
function collectorsTee(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, downstreams: Collector[], merger: TeeMergeFunc): Collector
function collectorsMap(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc, downstream: Collector): Collector
function collectorsWrap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, collector: Collector): Collector
function comparesReverse(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, cmp: GLib.CompareDataFunc | null): { returnType: GLib.CompareDataFunc, resultTarget: object | null, resultTargetDestroyNotify: GLib.DestroyNotify }
function comparesJoin(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, cmp: GLib.CompareDataFunc, cmp2: GLib.CompareDataFunc): { returnType: GLib.CompareDataFunc, resultTarget: object | null, resultTargetDestroyNotify: GLib.DestroyNotify }
function overflowIntAdd(a: number, b: number): { returnType: boolean, result: number }
function overflowIntSub(a: number, b: number): { returnType: boolean, result: number }
function overflowIntMul(a: number, b: number): { returnType: boolean, result: number }
function overflowLongAdd(a: number, b: number): { returnType: boolean, result: number }
function overflowLongSub(a: number, b: number): { returnType: boolean, result: number }
function overflowLongMul(a: number, b: number): { returnType: boolean, result: number }
function overflowInt32Add(a: number, b: number): { returnType: boolean, result: number }
function overflowInt32Sub(a: number, b: number): { returnType: boolean, result: number }
function overflowInt32Mul(a: number, b: number): { returnType: boolean, result: number }
function overflowInt64Add(a: number, b: number): { returnType: boolean, result: number }
function overflowInt64Sub(a: number, b: number): { returnType: boolean, result: number }
function overflowInt64Mul(a: number, b: number): { returnType: boolean, result: number }
function parallelSort(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], compare: GLib.CompareDataFunc | null): Future
function task(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): Future
function run(func: VoidTaskFunc): Future
function blocking(func: VoidTaskFunc): void
function blockingGet(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): object | null
function join(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, left: TaskFunc): { returnType: object[], resultLength1: number }
function atomicInt64Get(atomic: number): { returnType: number, atomic: number }
function atomicInt64Set(atomic: number, newval: number): { atomic: number }
function atomicInt64Inc(atomic: number): { atomic: number }
function atomicInt64DecAndTest(atomic: number): { returnType: boolean, atomic: number }
function atomicInt64CompareAndExchange(atomic: number, oldval: number, newval: number): { returnType: boolean, atomic: number }
function atomicInt64Add(atomic: number, val: number): { returnType: number, atomic: number }
function atomicInt64And(atomic: number, val: number): { returnType: number, atomic: number }
function atomicInt64Or(atomic: number, val: number): { returnType: number, atomic: number }
function atomicInt64Xor(atomic: number, val: number): { returnType: number, atomic: number }
interface CombineFunc {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, a: object | null, b: object | null): object | null
}
interface EachChunkFunc {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, chunk: object[]): boolean
}
interface FlatMapFunc {
    (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): Gee.Iterator
}
interface FoldFunc {
    (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null, a: object | null): object | null
}
interface Func {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): void
}
interface MapFunc {
    (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): object | null
}
interface Predicate {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): boolean
}
interface SupplyFunc {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
interface TaskFunc {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
interface TeeMergeFunc {
    (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, results: GObject.Object[]): object | null
}
interface VoidFunc {
    (): void
}
interface VoidTaskFunc {
    (): void
}
export interface Channel_ConstructProps extends Sender_ConstructProps {
}
class Channel {
    /* Properties of Gpseq-1.0.Gpseq.ChannelBase */
    readonly capacity: Optional
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Sender */
    send(data?: object | null): Result
    sendUntil(data: object | null, endTime: number): Result
    trySend(data?: object | null): Result
    /* Methods of Gpseq-1.0.Gpseq.ChannelBase */
    getCapacity(): Optional
    getLength(): number
    getIsFull(): boolean
    getIsEmpty(): boolean
    close(): void
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
    connect(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Channel_ConstructProps)
    _init (config?: Channel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static bounded(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, proposedCapacity: number): Channel
    static unbounded(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Channel
    static $gtype: GObject.Type
}
export interface ChannelBase_ConstructProps extends GObject.Object_ConstructProps {
}
class ChannelBase {
    /* Properties of Gpseq-1.0.Gpseq.ChannelBase */
    readonly capacity: Optional
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.ChannelBase */
    getCapacity(): Optional
    getLength(): number
    getIsFull(): boolean
    getIsEmpty(): boolean
    close(): void
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
    connect(sigName: "notify", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ChannelBase_ConstructProps)
    _init (config?: ChannelBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Collector_ConstructProps extends GObject.Object_ConstructProps {
}
class Collector {
    /* Properties of Gpseq-1.0.Gpseq.Collector */
    readonly features: CollectorFeatures
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Collector */
    getFeatures(): CollectorFeatures
    createAccumulator(): object | null
    accumulate(g?: object | null, a?: object | null): void
    combine(a?: object | null, b?: object | null): object | null
    finish(a?: object | null): object | null
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
    connect(sigName: "notify", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::features", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Collector_ConstructProps)
    _init (config?: Collector_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Executor_ConstructProps extends GObject.Object_ConstructProps {
}
class Executor {
    /* Properties of Gpseq-1.0.Gpseq.Executor */
    readonly parallels: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Executor */
    submit(task: Task): void
    getParallels(): number
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
    connect(sigName: "notify", callback: (($obj: Executor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parallels", callback: (($obj: Executor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parallels", callback: (($obj: Executor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parallels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parallels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parallels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Executor_ConstructProps)
    _init (config?: Executor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Receiver_ConstructProps extends ChannelBase_ConstructProps {
}
class Receiver {
    /* Properties of Gpseq-1.0.Gpseq.ChannelBase */
    readonly capacity: Optional
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Receiver */
    recv(): Result
    recvUntil(endTime: number): Result
    tryRecv(): Result
    /* Methods of Gpseq-1.0.Gpseq.ChannelBase */
    getCapacity(): Optional
    getLength(): number
    getIsFull(): boolean
    getIsEmpty(): boolean
    close(): void
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
    connect(sigName: "notify", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Receiver_ConstructProps)
    _init (config?: Receiver_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Result_ConstructProps extends Gee.Hashable_ConstructProps {
}
class Result {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Result */
    getValueType(): GObject.Type
    getValue(): object | null
    getException(): GLib.Error | null
    getIsErr(): boolean
    ok(): Result
    okWith(expected: object | null, equal: Gee.EqualDataFunc | null): Result
    future(): Future
    get(): object | null
    transform(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    mapErr(func: any): Result
    zip(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.Type, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Result): Result
    then(func: GLib.Func): Result
    andThen(func: Func): Result
    /* Methods of Gee-0.8.Gee.Hashable */
    hash(): number
    equalTo(object?: object | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Result_ConstructProps)
    _init (config?: Result_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static of(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Result
    static err(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, exception: GLib.Error): Result
    static $gtype: GObject.Type
}
export interface Sender_ConstructProps extends ChannelBase_ConstructProps {
}
class Sender {
    /* Properties of Gpseq-1.0.Gpseq.ChannelBase */
    readonly capacity: Optional
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Sender */
    send(data?: object | null): Result
    sendUntil(data: object | null, endTime: number): Result
    trySend(data?: object | null): Result
    /* Methods of Gpseq-1.0.Gpseq.ChannelBase */
    getCapacity(): Optional
    getLength(): number
    getIsFull(): boolean
    getIsEmpty(): boolean
    close(): void
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
    connect(sigName: "notify", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Sender_ConstructProps)
    _init (config?: Sender_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Spliterator_ConstructProps extends GObject.Object_ConstructProps {
}
class Spliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimatedSize: number
    readonly isSizeKnown: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    getElementType(): GObject.Type
    trySplit(): Spliterator | null
    tryAdvance(consumer: Func): boolean
    getEstimatedSize(): number
    getIsSizeKnown(): boolean
    each(f: Func): void
    eachChunk(f: EachChunkFunc): boolean
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
    connect(sigName: "notify", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-size-known", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Spliterator_ConstructProps)
    _init (config?: Spliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
export interface Supplier_ConstructProps extends GObject.Object_ConstructProps {
}
class Supplier {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Supplier */
    supply(): object | null
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
    connect(sigName: "notify", callback: (($obj: Supplier, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Supplier_ConstructProps)
    _init (config?: Supplier_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromFunc(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: SupplyFunc): Supplier
    static $gtype: GObject.Type
}
export interface Task_ConstructProps extends GObject.Object_ConstructProps {
}
class Task {
    /* Properties of Gpseq-1.0.Gpseq.Task */
    readonly future: Future
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Task */
    getFuture(): Future
    compute(): void
    invoke(): void
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
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::future", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ThreadFactory_ConstructProps extends GObject.Object_ConstructProps {
}
class ThreadFactory {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.ThreadFactory */
    createThread(pool: WorkerPool): WorkerThread
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
    connect(sigName: "notify", callback: (($obj: ThreadFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ThreadFactory_ConstructProps)
    _init (config?: ThreadFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ArraySpliterator_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class ArraySpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimatedSize: number
    readonly isSizeKnown: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    getElementType(): GObject.Type
    trySplit(): Spliterator | null
    tryAdvance(consumer: Func): boolean
    getEstimatedSize(): number
    getIsSizeKnown(): boolean
    each(f: Func): void
    eachChunk(f: EachChunkFunc): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-size-known", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ArraySpliterator_ConstructProps)
    _init (config?: ArraySpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], start: number, stop: number): ArraySpliterator
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
export interface ForkJoinTask_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
    depth?: number
}
class ForkJoinTask {
    /* Properties of Gpseq-1.0.Gpseq.ForkJoinTask */
    readonly parent: ForkJoinTask
    readonly root: ForkJoinTask
    readonly isRoot: boolean
    readonly threshold: number
    readonly maxDepth: number
    depth: number
    readonly executor: Executor
    readonly promise: Promise
    readonly sharedResult: ForkJoinTaskSharedResult
    readonly isCancelled: boolean
    /* Properties of Gpseq-1.0.Gpseq.Task */
    readonly future: Future
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.ForkJoinTask */
    getParent(): ForkJoinTask | null
    getRoot(): ForkJoinTask
    getIsRoot(): boolean
    getThreshold(): number
    getMaxDepth(): number
    getDepth(): number
    setDepth(value: number): void
    getExecutor(): Executor
    getPromise(): Promise
    join(): object | null
    fork(): void
    getSharedResult(): ForkJoinTaskSharedResult
    cancel(): void
    getIsCancelled(): boolean
    compute(): void
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
    /* Methods of Gpseq-1.0.Gpseq.Task */
    getFuture(): Future
    invoke(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::threshold", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threshold", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::executor", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::executor", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::promise", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::promise", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::promise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::promise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::promise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-result", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-result", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-cancelled", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::future", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ForkJoinTask_ConstructProps)
    _init (config?: ForkJoinTask_ConstructProps): void
    static $gtype: GObject.Type
}
class ForkJoinTaskSharedResult {
    /* Fields of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult */
    refCount: number
    /* Methods of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult */
    getReady(): boolean
    getValue(): object | null
    setValue(value?: object | null): void
    getError(): GLib.Error | null
    setError(value?: GLib.Error | null): void
    bakePromise(promise: Promise): void
    static name: string
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): ForkJoinTaskSharedResult
    constructor(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): ForkJoinTaskSharedResult
}
export interface FuncTask_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class FuncTask {
    /* Properties of Gpseq-1.0.Gpseq.Task */
    readonly future: Future
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gpseq-1.0.Gpseq.Task */
    getFuture(): Future
    compute(): void
    invoke(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::future", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FuncTask_ConstructProps)
    _init (config?: FuncTask_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): FuncTask
    static $gtype: GObject.Type
}
export interface Future_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class Future {
    /* Properties of Gpseq-1.0.Gpseq.Future */
    readonly ready: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Future */
    getReady(): boolean
    wait(): object | null
    waitUntil(endTime: number): { returnType: boolean, value: object | null }
    transform(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
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
    /* Methods of Gee-0.8.Gee.Hashable */
    hash(): number
    equalTo(object?: object | null): boolean
    /* Methods of Gpseq-1.0.Gpseq.Result */
    getValueType(): GObject.Type
    getValue(): object | null
    getException(): GLib.Error | null
    getIsErr(): boolean
    ok(): Result
    okWith(expected: object | null, equal: Gee.EqualDataFunc | null): Result
    future(): Future
    get(): object | null
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    mapErr(func: any): Result
    zip(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.Type, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Result): Result
    then(func: GLib.Func): Result
    andThen(func: Func): Result
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ready", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Future_ConstructProps)
    _init (config?: Future_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static of(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Future
    static of(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Result
    static err(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, exception: GLib.Error): Future
    static err(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, exception: GLib.Error): Result
    static done(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, result: Result): Future
    static $gtype: GObject.Type
}
export interface GenericArraySpliterator_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class GenericArraySpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimatedSize: number
    readonly isSizeKnown: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    getElementType(): GObject.Type
    trySplit(): Spliterator | null
    tryAdvance(consumer: Func): boolean
    getEstimatedSize(): number
    getIsSizeKnown(): boolean
    each(f: Func): void
    eachChunk(f: EachChunkFunc): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-size-known", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GenericArraySpliterator_ConstructProps)
    _init (config?: GenericArraySpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], start: number, stop: number): GenericArraySpliterator
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
export interface IteratorSpliterator_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class IteratorSpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimatedSize: number
    readonly isSizeKnown: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    getElementType(): GObject.Type
    trySplit(): Spliterator | null
    tryAdvance(consumer: Func): boolean
    getEstimatedSize(): number
    getIsSizeKnown(): boolean
    each(f: Func): void
    eachChunk(f: EachChunkFunc): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-size-known", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IteratorSpliterator_ConstructProps)
    _init (config?: IteratorSpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iterator: Gee.Iterator, estimatedSize: number, sizeKnown: boolean): IteratorSpliterator
    static fromCollection(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, collection: Gee.Collection): IteratorSpliterator
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
export interface ListSpliterator_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class ListSpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimatedSize: number
    readonly isSizeKnown: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    getElementType(): GObject.Type
    trySplit(): Spliterator | null
    tryAdvance(consumer: Func): boolean
    getEstimatedSize(): number
    getIsSizeKnown(): boolean
    each(f: Func): void
    eachChunk(f: EachChunkFunc): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-size-known", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ListSpliterator_ConstructProps)
    _init (config?: ListSpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, list: Gee.List, start: number, stop: number): ListSpliterator
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
export interface Optional_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class Optional {
    /* Properties of Gpseq-1.0.Gpseq.Optional */
    readonly valueType: GObject.Type
    readonly value: object
    readonly isPresent: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Optional */
    getValueType(): GObject.Type
    getValue(): object | null
    getIsPresent(): boolean
    toString(): string
    ifPresent(consumer: GLib.Func): void
    orElse(other?: object | null): object | null
    orElseGet(supplier: SupplyFunc): object | null
    orElseThrow(errorSupplier?: SupplyFunc | null): object | null
    orElseFail(): object | null
    filter(pred: Gee.Predicate): Optional
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, mapper: Gee.MapFunc): Optional
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
    connect(sigName: "notify", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value-type", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-present", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Optional_ConstructProps)
    _init (config?: Optional_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Optional
    static of(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Optional
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Optional
    static $gtype: GObject.Type
}
class Promise {
    /* Fields of Gpseq-1.0.Gpseq.Promise */
    refCount: number
    /* Methods of Gpseq-1.0.Gpseq.Promise */
    getFuture(): Future
    setValue(value?: object | null): void
    setException(exception: GLib.Error): void
    static name: string
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Promise
    constructor(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Promise
}
export interface Seq_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class Seq {
    /* Properties of Gpseq-1.0.Gpseq.Seq */
    readonly elementType: GObject.Type
    readonly taskEnv: TaskEnv
    readonly isClosed: boolean
    readonly isParallel: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Seq */
    getElementType(): GObject.Type
    getTaskEnv(): TaskEnv
    getIsClosed(): boolean
    close(): void
    getIsParallel(): boolean
    sequential(): Seq
    parallel(): Seq
    iterator(): Gee.Iterator
    spliterator(): Spliterator
    count(): Future
    distinct(hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Seq
    allMatch(pred: Predicate): Future
    anyMatch(pred: Predicate): Future
    noneMatch(pred: Predicate): Future
    findAny(pred: Predicate): Future
    findFirst(pred: Predicate): Future
    skip(n: number): Seq
    limit(n: number): Seq
    chop(offset: number, length: number): Seq
    skipOrdered(n: number): Seq
    limitOrdered(n: number): Seq
    chopOrdered(offset: number, length: number): Seq
    filter(pred: Predicate): Seq
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, accumulator: FoldFunc, combiner: CombineFunc, identity?: object | null): Future
    reduce(accumulator: CombineFunc): Future
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Seq
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, mapper: FlatMapFunc): Seq
    max(compare: GLib.CompareDataFunc | null): Future
    min(compare: GLib.CompareDataFunc | null): Future
    orderBy(compare: GLib.CompareDataFunc | null): Seq
    reverseOrderBy(compare: GLib.CompareDataFunc | null): Seq
    foreach(f: Func): Future
    collect(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, collector: Collector): Future
    collectOrdered(rType: GObject.Type, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, collector: Collector): Future
    groupBy(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, classifier: MapFunc): Future
    partition(pred: Predicate): Future
    toGenericArray(): Future
    toList(): Future
    toSet(hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Future
    toMap(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyMapper: MapFunc, valMapper: MapFunc, merger: CombineFunc | null, keyHash: Gee.HashDataFunc | null, keyEqual: Gee.EqualDataFunc | null, valueEqual: Gee.EqualDataFunc | null): Future
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
    connect(sigName: "notify", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::element-type", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::task-env", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::task-env", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::task-env", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::task-env", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::task-env", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-parallel", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-parallel", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-parallel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-parallel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-parallel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Seq_ConstructProps)
    _init (config?: Seq_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, spliterator: Spliterator, env?: TaskEnv | null): Seq
    static ofArray(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static ofOwnedArray(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static ofGenericArray(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static ofIterator(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iterator: Gee.Iterator, estimatedSize: number, sizeKnown: boolean, env?: TaskEnv | null): Seq
    static ofCollection(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, collection: Gee.Collection, env?: TaskEnv | null): Seq
    static ofList(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, list: Gee.List, env?: TaskEnv | null): Seq
    static ofSupplier(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, supplier: Supplier, env?: TaskEnv | null): Seq
    static ofSupplyFunc(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: SupplyFunc, env?: TaskEnv | null): Seq
    static iterate(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, seed: object | null, pred: Gee.Predicate, next: Gee.MapFunc, env?: TaskEnv | null): Seq
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Seq
    static $gtype: GObject.Type
}
export interface SpliteratorTask_ConstructProps extends ForkJoinTask_ConstructProps {
    rType?: GObject.Type
    rDupFunc?: GObject.BoxedCopyFunc
    rDestroyFunc?: GLib.DestroyNotify
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class SpliteratorTask {
    /* Properties of Gpseq-1.0.Gpseq.SpliteratorTask */
    readonly spliterator: Spliterator
    readonly leftChild: SpliteratorTask
    readonly rightChild: SpliteratorTask
    readonly isLeaf: boolean
    readonly isLeftmost: boolean
    readonly emptyResult: object
    /* Properties of Gpseq-1.0.Gpseq.ForkJoinTask */
    readonly parent: ForkJoinTask
    readonly root: ForkJoinTask
    readonly isRoot: boolean
    readonly threshold: number
    readonly maxDepth: number
    depth: number
    readonly executor: Executor
    readonly promise: Promise
    readonly sharedResult: ForkJoinTaskSharedResult
    readonly isCancelled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.SpliteratorTask */
    getSpliterator(): Spliterator
    getLeftChild(): SpliteratorTask | null
    getRightChild(): SpliteratorTask | null
    getIsLeaf(): boolean
    getIsLeftmost(): boolean
    cancelLaterNodes(): void
    getEmptyResult(): object | null
    leafCompute(): object | null
    mergeResults(left?: object | null, right?: object | null): object | null
    makeChild(spliterator: Spliterator): SpliteratorTask
    /* Methods of Gpseq-1.0.Gpseq.ForkJoinTask */
    getParent(): ForkJoinTask | null
    getRoot(): ForkJoinTask
    getIsRoot(): boolean
    getThreshold(): number
    getMaxDepth(): number
    getDepth(): number
    setDepth(value: number): void
    getExecutor(): Executor
    getPromise(): Promise
    join(): object | null
    fork(): void
    getSharedResult(): ForkJoinTaskSharedResult
    cancel(): void
    getIsCancelled(): boolean
    compute(): void
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
    connect(sigName: "notify", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::spliterator", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spliterator", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::spliterator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::spliterator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::spliterator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::left-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::left-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::left-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-leaf", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-leaf", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-leaf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-leaf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-leaf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-leftmost", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-leftmost", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-leftmost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-leftmost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-leftmost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::empty-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::empty-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::empty-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::empty-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::threshold", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threshold", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::executor", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::executor", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::promise", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::promise", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::promise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::promise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::promise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-cancelled", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SpliteratorTask_ConstructProps)
    _init (config?: SpliteratorTask_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SubArray_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class SubArray {
    /* Properties of Gpseq-1.0.Gpseq.SubArray */
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.SubArray */
    getData(): object[]
    getSize(): number
    get(index: number): object | null
    set(index: number, item?: object | null): void
    sort(compareFunc: GLib.CompareDataFunc | null): void
    copy(start: number, src: SubArray, srcStart: number, count: number): void
    copyArray(start: number, src: object[], srcStart: number, count: number): void
    subArray(start: number, stop: number): SubArray
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
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    firstMatch(pred: Gee.Predicate): object | null
    anyMatch(pred: Gee.Predicate): boolean
    allMatch(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    orderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    getElementType(): GObject.Type
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Gee.Iterator
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SubArray_ConstructProps)
    _init (config?: SubArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, data: object[]): SubArray
    static fromSubArray(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: SubArray, start: number, stop: number): SubArray
    static $gtype: GObject.Type
}
export interface SubArraySpliterator_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class SubArraySpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimatedSize: number
    readonly isSizeKnown: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    getElementType(): GObject.Type
    trySplit(): Spliterator | null
    tryAdvance(consumer: Func): boolean
    getEstimatedSize(): number
    getIsSizeKnown(): boolean
    each(f: Func): void
    eachChunk(f: EachChunkFunc): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-size-known", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SubArraySpliterator_ConstructProps)
    _init (config?: SubArraySpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: SubArray, start: number, stop: number): SubArraySpliterator
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
export interface SupplierSpliterator_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class SupplierSpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimatedSize: number
    readonly isSizeKnown: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    getElementType(): GObject.Type
    trySplit(): Spliterator | null
    tryAdvance(consumer: Func): boolean
    getEstimatedSize(): number
    getIsSizeKnown(): boolean
    each(f: Func): void
    eachChunk(f: EachChunkFunc): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-size-known", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SupplierSpliterator_ConstructProps)
    _init (config?: SupplierSpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, supplier: Supplier): SupplierSpliterator
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
export interface TaskEnv_ConstructProps extends GObject.Object_ConstructProps {
}
class TaskEnv {
    /* Properties of Gpseq-1.0.Gpseq.TaskEnv */
    readonly executor: Executor
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.TaskEnv */
    getExecutor(): Executor
    resolveThreshold(elements: number, threads: number): number
    resolveMaxDepth(elements: number, threads: number): number
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
    connect(sigName: "notify", callback: (($obj: TaskEnv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::executor", callback: (($obj: TaskEnv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::executor", callback: (($obj: TaskEnv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TaskEnv_ConstructProps)
    _init (config?: TaskEnv_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefaultTaskEnv(): TaskEnv
    static setDefaultTaskEnv(taskEnv: TaskEnv): void
    static getCommonTaskEnv(): TaskEnv
    static push(taskEnv: TaskEnv): void
    static pop(): void
    static apply(taskEnv: TaskEnv, func: VoidFunc): void
    static $gtype: GObject.Type
}
export interface WaitGroup_ConstructProps extends GObject.Object_ConstructProps {
}
class WaitGroup {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.WaitGroup */
    add(delta: number): void
    done(): void
    task(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): Future
    run(func: VoidTaskFunc): Future
    wait(): void
    waitUntil(endTime: number): boolean
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
    connect(sigName: "notify", callback: (($obj: WaitGroup, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WaitGroup_ConstructProps)
    _init (config?: WaitGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WaitGroup
    static $gtype: GObject.Type
}
export interface WorkerPool_ConstructProps extends GObject.Object_ConstructProps {
    maxThreads?: number
}
class WorkerPool {
    /* Properties of Gpseq-1.0.Gpseq.WorkerPool */
    maxThreads: number
    readonly numThreads: number
    readonly factory: ThreadFactory
    readonly isTerminating: boolean
    readonly isTerminated: boolean
    readonly isTerminatingStarted: boolean
    /* Properties of Gpseq-1.0.Gpseq.Executor */
    readonly parallels: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.WorkerPool */
    getMaxThreads(): number
    setMaxThreads(value: number): void
    getNumThreads(): number
    getFactory(): ThreadFactory
    getIsTerminating(): boolean
    getIsTerminated(): boolean
    getIsTerminatingStarted(): boolean
    terminate(): void
    terminateNow(): void
    waitTermination(): void
    waitTerminationUntil(endTime: number): void
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
    /* Methods of Gpseq-1.0.Gpseq.Executor */
    submit(task: Task): void
    getParallels(): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::factory", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::factory", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-terminating", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminating", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-terminating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-terminating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-terminating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-terminated", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminated", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-terminating-started", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminating-started", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-terminating-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-terminating-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-terminating-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parallels", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parallels", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parallels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parallels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parallels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WorkerPool_ConstructProps)
    _init (config?: WorkerPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static withDefaults(): WorkerPool
    static new(parallels: number, factory: ThreadFactory): WorkerPool
    static getDefaultFactory(): ThreadFactory
    static $gtype: GObject.Type
}
export interface WorkerThread_ConstructProps extends GObject.Object_ConstructProps {
}
class WorkerThread {
    /* Properties of Gpseq-1.0.Gpseq.WorkerThread */
    readonly thread: GLib.Thread
    readonly pool: WorkerPool
    readonly name: string
    readonly isStarted: boolean
    readonly isTerminated: boolean
    readonly isAlive: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.WorkerThread */
    getThread(): GLib.Thread | null
    getPool(): WorkerPool
    getName(): string
    getIsStarted(): boolean
    getIsTerminated(): boolean
    getIsAlive(): boolean
    start(): void
    join(): void
    blocking(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): object | null
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
    connect(sigName: "notify", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::thread", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thread", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::thread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::thread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::thread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pool", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pool", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-started", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-started", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-terminated", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminated", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-alive", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-alive", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-alive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-alive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-alive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WorkerThread_ConstructProps)
    _init (config?: WorkerThread_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pool: WorkerPool): WorkerThread
    static getBy(thread: GLib.Thread): WorkerThread | null
    static self(): WorkerThread | null
    static $gtype: GObject.Type
}
export interface Wrapper_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
class Wrapper {
    /* Properties of Gpseq-1.0.Gpseq.Wrapper */
    readonly value: object
    readonly valueType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Wrapper */
    getValue(): object | null
    getValueType(): GObject.Type
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
    connect(sigName: "notify", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Wrapper_ConstructProps)
    _init (config?: Wrapper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Wrapper
    static $gtype: GObject.Type
}
abstract class ArraySpliteratorClass {
    static name: string
}
class ArraySpliteratorPrivate {
    static name: string
}
abstract class ForkJoinTaskClass {
    /* Fields of Gpseq-1.0.Gpseq.ForkJoinTaskClass */
    compute: (self: ForkJoinTask) => void
    static name: string
}
class ForkJoinTaskPrivate {
    static name: string
}
abstract class ForkJoinTaskSharedResultClass {
    static name: string
}
class ForkJoinTaskSharedResultPrivate {
    static name: string
}
abstract class FuncTaskClass {
    static name: string
}
class FuncTaskPrivate {
    static name: string
}
abstract class FutureClass {
    /* Fields of Gpseq-1.0.Gpseq.FutureClass */
    wait: (self: Future) => object | null
    waitUntil: (self: Future, endTime: number) => { returnType: boolean, value: object | null }
    transform: (self: Future, aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
    static name: string
}
class FuturePrivate {
    static name: string
}
abstract class GenericArraySpliteratorClass {
    static name: string
}
class GenericArraySpliteratorPrivate {
    static name: string
}
abstract class IteratorSpliteratorClass {
    static name: string
}
class IteratorSpliteratorPrivate {
    static name: string
}
abstract class ListSpliteratorClass {
    static name: string
}
class ListSpliteratorPrivate {
    static name: string
}
abstract class OptionalClass {
    static name: string
}
class OptionalPrivate {
    static name: string
}
abstract class PromiseClass {
    static name: string
}
class PromisePrivate {
    static name: string
}
abstract class SeqClass {
    static name: string
}
class SeqPrivate {
    static name: string
}
abstract class SpliteratorTaskClass {
    /* Fields of Gpseq-1.0.Gpseq.SpliteratorTaskClass */
    leafCompute: (self: SpliteratorTask) => object | null
    mergeResults: (self: SpliteratorTask, left?: object | null, right?: object | null) => object | null
    makeChild: (self: SpliteratorTask, spliterator: Spliterator) => SpliteratorTask
    static name: string
}
class SpliteratorTaskPrivate {
    static name: string
}
abstract class SubArrayClass {
    static name: string
}
class SubArrayPrivate {
    static name: string
}
abstract class SubArraySpliteratorClass {
    static name: string
}
class SubArraySpliteratorPrivate {
    static name: string
}
abstract class SupplierSpliteratorClass {
    static name: string
}
class SupplierSpliteratorPrivate {
    static name: string
}
abstract class TaskEnvClass {
    /* Fields of Gpseq-1.0.Gpseq.TaskEnvClass */
    resolveThreshold: (self: TaskEnv, elements: number, threads: number) => number
    resolveMaxDepth: (self: TaskEnv, elements: number, threads: number) => number
    static name: string
}
class TaskEnvPrivate {
    static name: string
}
abstract class WaitGroupClass {
    static name: string
}
class WaitGroupPrivate {
    static name: string
}
abstract class WorkerPoolClass {
    static name: string
}
class WorkerPoolPrivate {
    static name: string
}
abstract class WorkerThreadClass {
    static name: string
}
class WorkerThreadPrivate {
    static name: string
}
abstract class WrapperClass {
    static name: string
}
class WrapperPrivate {
    static name: string
}
abstract class ChannelIface {
    static name: string
}
abstract class ChannelBaseIface {
    /* Fields of Gpseq-1.0.Gpseq.ChannelBaseIface */
    close: (self: ChannelBase) => void
    getCapacity: (self: ChannelBase) => Optional
    getLength: (self: ChannelBase) => number
    getIsFull: (self: ChannelBase) => boolean
    getIsEmpty: (self: ChannelBase) => boolean
    static name: string
}
abstract class CollectorIface {
    /* Fields of Gpseq-1.0.Gpseq.CollectorIface */
    createAccumulator: (self: Collector) => object | null
    accumulate: (self: Collector, g?: object | null, a?: object | null) => void
    combine: (self: Collector, a?: object | null, b?: object | null) => object | null
    finish: (self: Collector, a?: object | null) => object | null
    getFeatures: (self: Collector) => CollectorFeatures
    static name: string
}
abstract class ExecutorIface {
    /* Fields of Gpseq-1.0.Gpseq.ExecutorIface */
    submit: (self: Executor, task: Task) => void
    getParallels: (self: Executor) => number
    static name: string
}
abstract class ReceiverIface {
    /* Fields of Gpseq-1.0.Gpseq.ReceiverIface */
    recv: (self: Receiver) => Result
    recvUntil: (self: Receiver, endTime: number) => Result
    tryRecv: (self: Receiver) => Result
    static name: string
}
abstract class ResultIface {
    /* Fields of Gpseq-1.0.Gpseq.ResultIface */
    future: (self: Result) => Future
    get: (self: Result) => object | null
    transform: (self: Result, aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
    flatMap: (self: Result, aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
    map: (self: Result, aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
    mapErr: (self: Result, func: any) => Result
    zip: (self: Result, aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.Type, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Result) => Result
    then: (self: Result, func: GLib.Func) => Result
    andThen: (self: Result, func: Func) => Result
    static name: string
}
abstract class SenderIface {
    /* Fields of Gpseq-1.0.Gpseq.SenderIface */
    send: (self: Sender, data?: object | null) => Result
    sendUntil: (self: Sender, data: object | null, endTime: number) => Result
    trySend: (self: Sender, data?: object | null) => Result
    static name: string
}
abstract class SpliteratorIface {
    /* Fields of Gpseq-1.0.Gpseq.SpliteratorIface */
    trySplit: (self: Spliterator) => Spliterator | null
    tryAdvance: (self: Spliterator, consumer: Func) => boolean
    each: (self: Spliterator, f: Func) => void
    eachChunk: (self: Spliterator, f: EachChunkFunc) => boolean
    getEstimatedSize: (self: Spliterator) => number
    getIsSizeKnown: (self: Spliterator) => boolean
    static name: string
}
abstract class SupplierIface {
    /* Fields of Gpseq-1.0.Gpseq.SupplierIface */
    supply: (self: Supplier) => object | null
    static name: string
}
abstract class TaskIface {
    /* Fields of Gpseq-1.0.Gpseq.TaskIface */
    compute: (self: Task) => void
    getFuture: (self: Task) => Future
    static name: string
}
abstract class ThreadFactoryIface {
    /* Fields of Gpseq-1.0.Gpseq.ThreadFactoryIface */
    createThread: (self: ThreadFactory, pool: WorkerPool) => WorkerThread
    static name: string
}
class CacheLinePad {
    static name: string
}
}
export default Gpseq