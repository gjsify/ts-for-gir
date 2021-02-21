/**
 * Gee-0.8
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Gee {

export enum FutureError {
    ABANDON_PROMISE,
    EXCEPTION,
}
export enum ConcurrentSetRangeType {
    HEAD,
    TAIL,
    BOUNDED,
    EMPTY,
}
export enum HazardPointerPolicy {
    DEFAULT,
    THREAD_EXIT,
    TRY_FREE,
    FREE,
    TRY_RELEASE,
    RELEASE,
}
export enum HazardPointerReleasePolicy {
    HELPER_THREAD,
    MAIN_LOOP,
}
export enum TraversableStream {
    YIELD,
    CONTINUE,
    END,
    WAIT,
}
export function functionsGetEqualFuncFor(t: GObject.Type): { returnType: EqualDataFunc, resultTarget: object | null, resultTargetDestroyNotify: GLib.DestroyNotify }
export function functionsGetHashFuncFor(t: GObject.Type): { returnType: HashDataFunc, resultTarget: object | null, resultTargetDestroyNotify: GLib.DestroyNotify }
export function functionsGetCompareFuncFor(t: GObject.Type): { returnType: GLib.CompareDataFunc, resultTarget: object | null, resultTargetDestroyNotify: GLib.DestroyNotify }
export function hazardPointerPolicyIsConcrete(): boolean
export function hazardPointerPolicyIsBlocking(): boolean
export function hazardPointerPolicyIsSafe(): boolean
export function hazardPointerPolicyToConcrete(): HazardPointerPolicy
export function task(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, task: Task): Future
export function asyncTask(callback?: Gio.AsyncReadyCallback | null): void
export function asyncTaskFinish(res: Gio.AsyncResult): void
export interface HashDataFunc {
    (tType: GObject.Type, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, v: object | null): number
}
export interface EqualDataFunc {
    (tType: GObject.Type, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, a: object | null, b: object | null): boolean
}
export interface LazyFunc {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
export interface FoldMapFunc {
    (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, k: object | null, v: object | null, a: object | null): object | null
}
export interface ForallMapFunc {
    (kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, k: object | null, v: object | null): boolean
}
export interface Task {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
export interface FoldFunc {
    (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null, a: object | null): object | null
}
export interface ForallFunc {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): boolean
}
export interface UnfoldFunc {
    (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify): Lazy | null
}
export interface StreamFunc {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, state: TraversableStream, g: Lazy | null): TraversableStream
}
export interface MapFunc {
    (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): object | null
}
export interface Predicate {
    (gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): boolean
}
export interface FlatMapFunc {
    (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): Iterator
}
export interface BidirIterator_ConstructProps extends Iterator_ConstructProps {
}
export class BidirIterator {
    /* Properties of Gee-0.8.Gee.Iterator */
    readonly valid: boolean
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirIterator */
    previous(): boolean
    hasPrevious(): boolean
    first(): boolean
    last(): boolean
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    get(): object | null
    remove(): void
    getValid(): boolean
    getReadOnly(): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BidirIterator_ConstructProps)
    _init (config?: BidirIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unfold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: UnfoldFunc, current?: Lazy | null): Iterator
    static concat(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iters: Iterator): Iterator
    static $gtype: GObject.Type
}
export interface BidirList_ConstructProps extends List_ConstructProps {
}
export class BidirList {
    /* Properties of Gee-0.8.Gee.BidirList */
    readonly readOnlyView: BidirList
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirList */
    bidirListIterator(): BidirListIterator
    getReadOnlyView(): BidirList
    /* Methods of Gee-0.8.Gee.List */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    sort(compareFunc: GLib.CompareDataFunc | null): void
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
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
    /* Methods of Gee-0.8.Gee.List */
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.Collection */
    getReadOnlyView(): Collection
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BidirList_ConstructProps)
    _init (config?: BidirList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface BidirListIterator_ConstructProps extends BidirIterator_ConstructProps {
}
export class BidirListIterator {
    /* Properties of Gee-0.8.Gee.Iterator */
    readonly valid: boolean
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirListIterator */
    insert(item?: object | null): void
    /* Methods of Gee-0.8.Gee.BidirIterator */
    previous(): boolean
    hasPrevious(): boolean
    first(): boolean
    last(): boolean
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    get(): object | null
    remove(): void
    getValid(): boolean
    getReadOnly(): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BidirListIterator_ConstructProps)
    _init (config?: BidirListIterator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BidirMapIterator_ConstructProps extends MapIterator_ConstructProps {
}
export class BidirMapIterator {
    /* Properties of Gee-0.8.Gee.MapIterator */
    readonly valid: boolean
    readonly mutable: boolean
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirMapIterator */
    previous(): boolean
    hasPrevious(): boolean
    first(): boolean
    last(): boolean
    /* Methods of Gee-0.8.Gee.MapIterator */
    next(): boolean
    hasNext(): boolean
    getKey(): object | null
    getValue(): object | null
    setValue(value?: object | null): void
    unset(): void
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed?: object | null): object | null
    foreach(f: ForallMapFunc): boolean
    getValid(): boolean
    getMutable(): boolean
    getReadOnly(): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mutable", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BidirMapIterator_ConstructProps)
    _init (config?: BidirMapIterator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BidirSortedSet_ConstructProps extends SortedSet_ConstructProps {
}
export class BidirSortedSet {
    /* Properties of Gee-0.8.Gee.BidirSortedSet */
    readonly readOnlyView: BidirSortedSet
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirSortedSet */
    bidirIterator(): BidirIterator
    getReadOnlyView(): BidirSortedSet
    /* Methods of Gee-0.8.Gee.SortedSet */
    first(): object | null
    last(): object | null
    iteratorAt(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet
    getReadOnlyView(): SortedSet
    /* Methods of Gee-0.8.Gee.Set */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
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
    /* Methods of Gee-0.8.Gee.SortedSet */
    getReadOnlyView(): SortedSet
    /* Methods of Gee-0.8.Gee.Set */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    getReadOnlyView(): Collection
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BidirSortedSet_ConstructProps)
    _init (config?: BidirSortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): BidirSortedSet
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface BidirSortedMap_ConstructProps extends SortedMap_ConstructProps {
}
export class BidirSortedMap {
    /* Properties of Gee-0.8.Gee.BidirSortedMap */
    readonly readOnlyView: BidirSortedMap
    /* Properties of Gee-0.8.Gee.SortedMap */
    readonly ascendingKeys: SortedSet
    readonly ascendingEntries: SortedSet
    /* Properties of Gee-0.8.Gee.Map */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirSortedMap */
    bidirMapIterator(): BidirMapIterator
    getReadOnlyView(): BidirSortedMap
    /* Methods of Gee-0.8.Gee.SortedMap */
    headMap(before?: object | null): SortedMap
    tailMap(after?: object | null): SortedMap
    subMap(before?: object | null, after?: object | null): SortedMap
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet
    getReadOnlyView(): SortedMap
    /* Methods of Gee-0.8.Gee.Map */
    hasKey(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    remove(key?: object | null): { returnType: boolean, value: object | null }
    clear(): void
    mapIterator(): MapIterator
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map
    getKeyType(): GObject.Type
    getValueType(): GObject.Type
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
    /* Methods of Gee-0.8.Gee.SortedMap */
    getReadOnlyView(): SortedMap
    /* Methods of Gee-0.8.Gee.Map */
    getReadOnlyView(): Map
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ascending-keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ascending-entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BidirSortedMap_ConstructProps)
    _init (config?: BidirSortedMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): BidirSortedMap
    static empty(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
    static $gtype: GObject.Type
}
export interface Collection_ConstructProps extends Iterable_ConstructProps {
}
export class Collection {
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Collection_ConstructProps)
    _init (config?: Collection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface Comparable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Comparable {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Comparable */
    compareTo(object?: object | null): number
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Comparable, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Comparable_ConstructProps)
    _init (config?: Comparable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Deque_ConstructProps extends Queue_ConstructProps {
}
export class Deque {
    /* Properties of Gee-0.8.Gee.Queue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Deque */
    offerHead(element?: object | null): boolean
    peekHead(): object | null
    pollHead(): object | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element?: object | null): boolean
    peekTail(): object | null
    pollTail(): object | null
    drainTail(recipient: Collection, amount: number): number
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    getCapacity(): number
    getRemainingCapacity(): number
    getIsFull(): boolean
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Deque_ConstructProps)
    _init (config?: Deque_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Future_ConstructProps extends GObject.Object_ConstructProps {
}
export class Future {
    /* Properties of Gee-0.8.Gee.Future */
    readonly ready: boolean
    readonly exception: GLib.Error
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Future */
    wait(): object | null
    waitUntil(endTime: number): { returnType: boolean, value: object | null }
    waitAsync(callback?: Gio.AsyncReadyCallback | null): void
    waitFinish(res: Gio.AsyncResult): object | null
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    lightMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    lightMapBroken(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    zip(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.Type, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Future): Future
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    getValue(): object | null
    getReady(): boolean
    getException(): GLib.Error | null
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
    connect(sigName: "notify::exception", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exception", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exception", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exception", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exception", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface Hashable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Hashable {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Hashable */
    hash(): number
    equalTo(object?: object | null): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Hashable, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Hashable_ConstructProps)
    _init (config?: Hashable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Iterable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Iterable {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Iterable, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Iterable_ConstructProps)
    _init (config?: Iterable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Iterator_ConstructProps extends GObject.Object_ConstructProps {
}
export class Iterator {
    /* Properties of Gee-0.8.Gee.Iterator */
    readonly valid: boolean
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    get(): object | null
    remove(): void
    getValid(): boolean
    getReadOnly(): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Iterator_ConstructProps)
    _init (config?: Iterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unfold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: UnfoldFunc, current?: Lazy | null): Iterator
    static concat(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iters: Iterator): Iterator
    static $gtype: GObject.Type
}
export interface List_ConstructProps extends Collection_ConstructProps {
}
export class List {
    /* Properties of Gee-0.8.Gee.List */
    readonly readOnlyView: List
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.List */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    sort(compareFunc: GLib.CompareDataFunc | null): void
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: List_ConstructProps)
    _init (config?: List_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface ListIterator_ConstructProps extends Iterator_ConstructProps {
}
export class ListIterator {
    /* Properties of Gee-0.8.Gee.Iterator */
    readonly valid: boolean
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.ListIterator */
    set(item?: object | null): void
    add(item?: object | null): void
    index(): number
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    get(): object | null
    remove(): void
    getValid(): boolean
    getReadOnly(): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ListIterator_ConstructProps)
    _init (config?: ListIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unfold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: UnfoldFunc, current?: Lazy | null): Iterator
    static concat(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iters: Iterator): Iterator
    static $gtype: GObject.Type
}
export interface Map_ConstructProps extends GObject.Object_ConstructProps {
}
export class Map {
    /* Properties of Gee-0.8.Gee.Map */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Map */
    hasKey(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    remove(key?: object | null): { returnType: boolean, value: object | null }
    clear(): void
    mapIterator(): MapIterator
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map
    getKeyType(): GObject.Type
    getValueType(): GObject.Type
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Map_ConstructProps)
    _init (config?: Map_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
    static $gtype: GObject.Type
}
export interface MapIterator_ConstructProps extends GObject.Object_ConstructProps {
}
export class MapIterator {
    /* Properties of Gee-0.8.Gee.MapIterator */
    readonly valid: boolean
    readonly mutable: boolean
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.MapIterator */
    next(): boolean
    hasNext(): boolean
    getKey(): object | null
    getValue(): object | null
    setValue(value?: object | null): void
    unset(): void
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed?: object | null): object | null
    foreach(f: ForallMapFunc): boolean
    getValid(): boolean
    getMutable(): boolean
    getReadOnly(): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mutable", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MapIterator_ConstructProps)
    _init (config?: MapIterator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MultiMap_ConstructProps extends GObject.Object_ConstructProps {
}
export class MultiMap {
    /* Properties of Gee-0.8.Gee.MultiMap */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.MultiMap */
    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    removeAll(key?: object | null): boolean
    clear(): void
    mapIterator(): MapIterator
    getSize(): number
    getReadOnly(): boolean
    getKeyType(): GObject.Type
    getValueType(): GObject.Type
    getReadOnlyView(): MultiMap
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MultiMap_ConstructProps)
    _init (config?: MultiMap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MultiSet_ConstructProps extends Collection_ConstructProps {
}
export class MultiSet {
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.MultiSet */
    count(item?: object | null): number
    getReadOnlyView(): MultiSet
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MultiSet_ConstructProps)
    _init (config?: MultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface Queue_ConstructProps extends Collection_ConstructProps {
}
export class Queue {
    /* Properties of Gee-0.8.Gee.Queue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    getCapacity(): number
    getRemainingCapacity(): number
    getIsFull(): boolean
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Queue_ConstructProps)
    _init (config?: Queue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface Set_ConstructProps extends Collection_ConstructProps {
}
export class Set {
    /* Properties of Gee-0.8.Gee.Set */
    readonly readOnlyView: Set
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Set */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Set_ConstructProps)
    _init (config?: Set_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface SortedMap_ConstructProps extends Map_ConstructProps {
}
export class SortedMap {
    /* Properties of Gee-0.8.Gee.SortedMap */
    readonly ascendingKeys: SortedSet
    readonly ascendingEntries: SortedSet
    readonly readOnlyView: SortedMap
    /* Properties of Gee-0.8.Gee.Map */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.SortedMap */
    headMap(before?: object | null): SortedMap
    tailMap(after?: object | null): SortedMap
    subMap(before?: object | null, after?: object | null): SortedMap
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet
    getReadOnlyView(): SortedMap
    /* Methods of Gee-0.8.Gee.Map */
    hasKey(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    remove(key?: object | null): { returnType: boolean, value: object | null }
    clear(): void
    mapIterator(): MapIterator
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map
    getKeyType(): GObject.Type
    getValueType(): GObject.Type
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ascending-keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ascending-entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SortedMap_ConstructProps)
    _init (config?: SortedMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
    static $gtype: GObject.Type
}
export interface SortedSet_ConstructProps extends Set_ConstructProps {
}
export class SortedSet {
    /* Properties of Gee-0.8.Gee.SortedSet */
    readonly readOnlyView: SortedSet
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.SortedSet */
    first(): object | null
    last(): object | null
    iteratorAt(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet
    getReadOnlyView(): SortedSet
    /* Methods of Gee-0.8.Gee.Set */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
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
    /* Methods of Gee-0.8.Gee.Set */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    getReadOnlyView(): Collection
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SortedSet_ConstructProps)
    _init (config?: SortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface Traversable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Traversable {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc): Iterator
    scan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    filter(pred: Predicate): Iterator
    chop(offset: number, length: number): Iterator
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    tee(forks: number): Iterator[]
    firstMatch(pred: Predicate): object | null
    anyMatch(pred: Predicate): boolean
    allMatch(pred: Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    orderBy(compare: GLib.CompareDataFunc | null): Iterator
    getElementType(): GObject.Type
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Traversable, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Traversable_ConstructProps)
    _init (config?: Traversable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractBidirList_ConstructProps extends AbstractList_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class AbstractBidirList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly readOnlyView: BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidirListIterator(): BidirListIterator
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
    getReadOnlyView(): BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.BidirList */
    getReadOnlyView(): BidirList
    /* Methods of Gee-0.8.Gee.List */
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    sort(compareFunc: GLib.CompareDataFunc | null): void
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getIsEmpty(): boolean
    getReadOnlyView(): Collection
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractBidirList_ConstructProps)
    _init (config?: AbstractBidirList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractBidirSortedSet_ConstructProps extends AbstractSortedSet_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class AbstractBidirSortedSet {
    /* Properties of Gee-0.8.Gee.AbstractBidirSortedSet */
    readonly readOnlyView: BidirSortedSet
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedSet */
    bidirIterator(): BidirIterator
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
    getReadOnlyView(): BidirSortedSet
    /* Methods of Gee-0.8.Gee.AbstractSortedSet */
    first(): object | null
    last(): object | null
    iteratorAt(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet
    getReadOnlyView(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractSet */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.BidirSortedSet */
    getReadOnlyView(): BidirSortedSet
    /* Methods of Gee-0.8.Gee.SortedSet */
    getReadOnlyView(): SortedSet
    /* Methods of Gee-0.8.Gee.Set */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getIsEmpty(): boolean
    getReadOnlyView(): Collection
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractBidirSortedSet_ConstructProps)
    _init (config?: AbstractBidirSortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): BidirSortedSet
    static $gtype: GObject.Type
}
export interface AbstractBidirSortedMap_ConstructProps extends AbstractSortedMap_ConstructProps {
    kType?: GObject.Type
    kDupFunc?: GObject.BoxedCopyFunc
    kDestroyFunc?: GLib.DestroyNotify
    vType?: GObject.Type
    vDupFunc?: GObject.BoxedCopyFunc
    vDestroyFunc?: GLib.DestroyNotify
}
export class AbstractBidirSortedMap {
    /* Properties of Gee-0.8.Gee.AbstractBidirSortedMap */
    readonly readOnlyView: BidirSortedMap
    /* Properties of Gee-0.8.Gee.AbstractSortedMap */
    readonly ascendingKeys: SortedSet
    readonly ascendingEntries: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedMap */
    bidirMapIterator(): BidirMapIterator
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
    getReadOnlyView(): BidirSortedMap
    /* Methods of Gee-0.8.Gee.AbstractSortedMap */
    headMap(before?: object | null): SortedMap
    tailMap(after?: object | null): SortedMap
    subMap(before?: object | null, after?: object | null): SortedMap
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    mapIterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    getSize(): number
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map
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
    /* Methods of Gee-0.8.Gee.BidirSortedMap */
    getReadOnlyView(): BidirSortedMap
    /* Methods of Gee-0.8.Gee.SortedMap */
    getReadOnlyView(): SortedMap
    /* Methods of Gee-0.8.Gee.Map */
    contains(key?: object | null): boolean
    remove(key?: object | null): { returnType: boolean, value: object | null }
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean
    getIsEmpty(): boolean
    getReadOnlyView(): Map
    getKeyType(): GObject.Type
    getValueType(): GObject.Type
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ascending-keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ascending-entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractBidirSortedMap_ConstructProps)
    _init (config?: AbstractBidirSortedMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): BidirSortedMap
    static $gtype: GObject.Type
}
export interface AbstractCollection_ConstructProps extends GObject.Object_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class AbstractCollection {
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
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
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.Traversable */
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc): Iterator
    scan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    filter(pred: Predicate): Iterator
    chop(offset: number, length: number): Iterator
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    tee(forks: number): Iterator[]
    firstMatch(pred: Predicate): object | null
    anyMatch(pred: Predicate): boolean
    allMatch(pred: Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    orderBy(compare: GLib.CompareDataFunc | null): Iterator
    getElementType(): GObject.Type
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getIsEmpty(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AbstractCollection_ConstructProps)
    _init (config?: AbstractCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface AbstractList_ConstructProps extends AbstractCollection_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class AbstractList {
    /* Properties of Gee-0.8.Gee.AbstractList */
    readonly readOnlyView: List
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractList */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
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
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.List */
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    sort(compareFunc: GLib.CompareDataFunc | null): void
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getIsEmpty(): boolean
    getReadOnlyView(): Collection
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractList_ConstructProps)
    _init (config?: AbstractList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List
    static $gtype: GObject.Type
}
export interface AbstractMap_ConstructProps extends GObject.Object_ConstructProps {
    kType?: GObject.Type
    kDupFunc?: GObject.BoxedCopyFunc
    kDestroyFunc?: GLib.DestroyNotify
    vType?: GObject.Type
    vDupFunc?: GObject.BoxedCopyFunc
    vDestroyFunc?: GLib.DestroyNotify
}
export class AbstractMap {
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    mapIterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
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
    getSize(): number
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map
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
    /* Methods of Gee-0.8.Gee.Traversable */
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc): Iterator
    scan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    filter(pred: Predicate): Iterator
    chop(offset: number, length: number): Iterator
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    tee(forks: number): Iterator[]
    firstMatch(pred: Predicate): object | null
    anyMatch(pred: Predicate): boolean
    allMatch(pred: Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    orderBy(compare: GLib.CompareDataFunc | null): Iterator
    getElementType(): GObject.Type
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of Gee-0.8.Gee.Map */
    contains(key?: object | null): boolean
    remove(key?: object | null): { returnType: boolean, value: object | null }
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean
    getIsEmpty(): boolean
    getKeyType(): GObject.Type
    getValueType(): GObject.Type
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AbstractMap_ConstructProps)
    _init (config?: AbstractMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
    static $gtype: GObject.Type
}
export interface AbstractMultiMap_ConstructProps extends GObject.Object_ConstructProps {
    kType?: GObject.Type
    kDupFunc?: GObject.BoxedCopyFunc
    kDestroyFunc?: GLib.DestroyNotify
    vType?: GObject.Type
    vDupFunc?: GObject.BoxedCopyFunc
    vDestroyFunc?: GLib.DestroyNotify
}
export class AbstractMultiMap {
    /* Properties of Gee-0.8.Gee.MultiMap */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of Gee-0.8.Gee.AbstractMultiMap */
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractMultiMap */
    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null, resultTargetDestroyNotify: GLib.DestroyNotify }
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    getReadOnlyView(): MultiMap
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
    /* Methods of Gee-0.8.Gee.MultiMap */
    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    removeAll(key?: object | null): boolean
    clear(): void
    mapIterator(): MapIterator
    getSize(): number
    getReadOnly(): boolean
    getKeyType(): GObject.Type
    getValueType(): GObject.Type
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractMultiMap_ConstructProps)
    _init (config?: AbstractMultiMap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractMultiSet_ConstructProps extends AbstractCollection_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class AbstractMultiSet {
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of Gee-0.8.Gee.AbstractMultiSet */
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractMultiSet */
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    getReadOnlyView(): MultiSet
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    reserved9(): void
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.MultiSet */
    count(item?: object | null): number
    getReadOnlyView(): MultiSet
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getIsEmpty(): boolean
    getReadOnlyView(): Collection
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AbstractMultiSet_ConstructProps)
    _init (config?: AbstractMultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static $gtype: GObject.Type
}
export interface AbstractQueue_ConstructProps extends AbstractCollection_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class AbstractQueue {
    /* Properties of Gee-0.8.Gee.AbstractQueue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getIsEmpty(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AbstractQueue_ConstructProps)
    _init (config?: AbstractQueue_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractSet_ConstructProps extends AbstractCollection_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class AbstractSet {
    /* Properties of Gee-0.8.Gee.AbstractSet */
    readonly readOnlyView: Set
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractSet */
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
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.Set */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getIsEmpty(): boolean
    getReadOnlyView(): Collection
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractSet_ConstructProps)
    _init (config?: AbstractSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static $gtype: GObject.Type
}
export interface AbstractSortedMap_ConstructProps extends AbstractMap_ConstructProps {
    kType?: GObject.Type
    kDupFunc?: GObject.BoxedCopyFunc
    kDestroyFunc?: GLib.DestroyNotify
    vType?: GObject.Type
    vDupFunc?: GObject.BoxedCopyFunc
    vDestroyFunc?: GLib.DestroyNotify
}
export class AbstractSortedMap {
    /* Properties of Gee-0.8.Gee.AbstractSortedMap */
    readonly ascendingKeys: SortedSet
    readonly ascendingEntries: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractSortedMap */
    headMap(before?: object | null): SortedMap
    tailMap(after?: object | null): SortedMap
    subMap(before?: object | null, after?: object | null): SortedMap
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
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    mapIterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    getSize(): number
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map
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
    /* Methods of Gee-0.8.Gee.SortedMap */
    getReadOnlyView(): SortedMap
    /* Methods of Gee-0.8.Gee.Map */
    contains(key?: object | null): boolean
    remove(key?: object | null): { returnType: boolean, value: object | null }
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean
    getIsEmpty(): boolean
    getReadOnlyView(): Map
    getKeyType(): GObject.Type
    getValueType(): GObject.Type
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ascending-keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ascending-entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AbstractSortedMap_ConstructProps)
    _init (config?: AbstractSortedMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
    static $gtype: GObject.Type
}
export interface AbstractSortedSet_ConstructProps extends AbstractSet_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class AbstractSortedSet {
    /* Properties of Gee-0.8.Gee.AbstractSortedSet */
    readonly readOnlyView: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractSortedSet */
    first(): object | null
    last(): object | null
    iteratorAt(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet
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
    getReadOnlyView(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractSet */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.SortedSet */
    getReadOnlyView(): SortedSet
    /* Methods of Gee-0.8.Gee.Set */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getIsEmpty(): boolean
    getReadOnlyView(): Collection
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractSortedSet_ConstructProps)
    _init (config?: AbstractSortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet
    static $gtype: GObject.Type
}
export interface ArrayList_ConstructProps extends AbstractBidirList_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class ArrayList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly readOnlyView: BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of Gee-0.8.Gee.ArrayList */
    items: object[]
    itemsLength1: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.ArrayList */
    addAll(collection: Collection): boolean
    getEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidirListIterator(): BidirListIterator
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
    getReadOnlyView(): BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ArrayList_ConstructProps)
    _init (config?: ArrayList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): ArrayList
    static wrap(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, items: object[], equalFunc: EqualDataFunc | null): ArrayList
    static $gtype: GObject.Type
}
export interface ArrayQueue_ConstructProps extends AbstractQueue_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class ArrayQueue {
    /* Properties of Gee-0.8.Gee.ArrayQueue */
    readonly isEmpty: boolean
    /* Properties of Gee-0.8.Gee.AbstractQueue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.ArrayQueue */
    getEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    getIsEmpty(): boolean
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
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.Deque */
    offerHead(element?: object | null): boolean
    peekHead(): object | null
    pollHead(): object | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element?: object | null): boolean
    peekTail(): object | null
    pollTail(): object | null
    drainTail(recipient: Collection, amount: number): number
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-empty", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ArrayQueue_ConstructProps)
    _init (config?: ArrayQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): ArrayQueue
    static $gtype: GObject.Type
}
export interface ConcurrentList_ConstructProps extends AbstractList_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class ConcurrentList {
    /* Properties of Gee-0.8.Gee.ConcurrentList */
    readonly isEmpty: boolean
    /* Properties of Gee-0.8.Gee.AbstractList */
    readonly readOnlyView: List
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.ConcurrentList */
    getEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    getIsEmpty(): boolean
    /* Methods of Gee-0.8.Gee.AbstractList */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
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
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-empty", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ConcurrentList_ConstructProps)
    _init (config?: ConcurrentList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): ConcurrentList
    static $gtype: GObject.Type
}
export interface ConcurrentSet_ConstructProps extends AbstractSortedSet_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class ConcurrentSet {
    /* Properties of Gee-0.8.Gee.AbstractSortedSet */
    readonly readOnlyView: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractSortedSet */
    first(): object | null
    last(): object | null
    iteratorAt(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet
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
    getReadOnlyView(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractSet */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ConcurrentSet_ConstructProps)
    _init (config?: ConcurrentSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): ConcurrentSet
    static $gtype: GObject.Type
}
export interface HashMap_ConstructProps extends AbstractMap_ConstructProps {
    kType?: GObject.Type
    kDupFunc?: GObject.BoxedCopyFunc
    kDestroyFunc?: GLib.DestroyNotify
    vType?: GObject.Type
    vDupFunc?: GObject.BoxedCopyFunc
    vDestroyFunc?: GLib.DestroyNotify
}
export class HashMap {
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.HashMap */
    getKeyHashFunc(): { returnType: HashDataFunc, resultTarget: object | null }
    getKeyEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    getValueEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    mapIterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
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
    getSize(): number
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: HashMap_ConstructProps)
    _init (config?: HashMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueEqualFunc: EqualDataFunc | null): HashMap
    static $gtype: GObject.Type
}
export interface HashMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {
    kType?: GObject.Type
    kDupFunc?: GObject.BoxedCopyFunc
    kDestroyFunc?: GLib.DestroyNotify
    vType?: GObject.Type
    vDupFunc?: GObject.BoxedCopyFunc
    vDestroyFunc?: GLib.DestroyNotify
}
export class HashMultiMap {
    /* Fields of Gee-0.8.Gee.AbstractMultiMap */
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.HashMultiMap */
    getKeyHashFunc(): { returnType: HashDataFunc, resultTarget: object | null }
    getKeyEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    getValueHashFunc(): { returnType: HashDataFunc, resultTarget: object | null }
    getValueEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractMultiMap */
    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null, resultTargetDestroyNotify: GLib.DestroyNotify }
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    getReadOnlyView(): MultiMap
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: HashMultiMap_ConstructProps)
    _init (config?: HashMultiMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueHashFunc: HashDataFunc | null, valueEqualFunc: EqualDataFunc | null): HashMultiMap
    static $gtype: GObject.Type
}
export interface HashMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class HashMultiSet {
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of Gee-0.8.Gee.AbstractMultiSet */
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.HashMultiSet */
    getHashFunc(): { returnType: HashDataFunc, resultTarget: object | null }
    getEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractMultiSet */
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    getReadOnlyView(): MultiSet
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    reserved9(): void
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: HashMultiSet_ConstructProps)
    _init (config?: HashMultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null): HashMultiSet
    static broken(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc?: HashDataFunc | null, equalFunc?: EqualDataFunc | null): HashMultiSet
    static $gtype: GObject.Type
}
export interface HashSet_ConstructProps extends AbstractSet_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class HashSet {
    /* Properties of Gee-0.8.Gee.AbstractSet */
    readonly readOnlyView: Set
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.HashSet */
    getHashFunc(): { returnType: HashDataFunc, resultTarget: object | null }
    getEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractSet */
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
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HashSet_ConstructProps)
    _init (config?: HashSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null): HashSet
    static $gtype: GObject.Type
}
export class Lazy {
    /* Fields of Gee-0.8.Gee.Lazy */
    refCount: number
    /* Methods of Gee-0.8.Gee.Lazy */
    eval(): void
    get(): object | null
    getValue(): object | null
    getFuture(): Future | null
    static name: string
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: LazyFunc): Lazy
    constructor(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: LazyFunc)
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: LazyFunc): Lazy
    static fromValue(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, item?: object | null): Lazy
}
export interface LinkedList_ConstructProps extends AbstractBidirList_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class LinkedList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly readOnlyView: BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Properties of Gee-0.8.Gee.Queue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.LinkedList */
    first(): object | null
    last(): object | null
    getEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidirListIterator(): BidirListIterator
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
    getReadOnlyView(): BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    getCapacity(): number
    getRemainingCapacity(): number
    getIsFull(): boolean
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getIsEmpty(): boolean
    /* Methods of Gee-0.8.Gee.Deque */
    offerHead(element?: object | null): boolean
    peekHead(): object | null
    pollHead(): object | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element?: object | null): boolean
    peekTail(): object | null
    pollTail(): object | null
    drainTail(recipient: Collection, amount: number): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LinkedList_ConstructProps)
    _init (config?: LinkedList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): LinkedList
    static $gtype: GObject.Type
}
export interface PriorityQueue_ConstructProps extends AbstractQueue_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class PriorityQueue {
    /* Properties of Gee-0.8.Gee.AbstractQueue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.PriorityQueue */
    offer(element?: object | null): boolean
    drain(recipient: Collection, amount: number): number
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
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PriorityQueue_ConstructProps)
    _init (config?: PriorityQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): PriorityQueue
    static $gtype: GObject.Type
}
export class Promise {
    /* Fields of Gee-0.8.Gee.Promise */
    refCount: number
    /* Methods of Gee-0.8.Gee.Promise */
    setValue(value?: object | null): void
    setException(exception: GLib.Error): void
    getFuture(): Future
    static name: string
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Promise
    constructor(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Promise
}
export interface TreeMap_ConstructProps extends AbstractBidirSortedMap_ConstructProps {
    kType?: GObject.Type
    kDupFunc?: GObject.BoxedCopyFunc
    kDestroyFunc?: GLib.DestroyNotify
    vType?: GObject.Type
    vDupFunc?: GObject.BoxedCopyFunc
    vDestroyFunc?: GLib.DestroyNotify
}
export class TreeMap {
    /* Properties of Gee-0.8.Gee.AbstractBidirSortedMap */
    readonly readOnlyView: BidirSortedMap
    /* Properties of Gee-0.8.Gee.AbstractSortedMap */
    readonly ascendingKeys: SortedSet
    readonly ascendingEntries: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.TreeMap */
    getKeyCompareFunc(): { returnType: GLib.CompareDataFunc, resultTarget: object | null }
    getValueEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedMap */
    bidirMapIterator(): BidirMapIterator
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
    getReadOnlyView(): BidirSortedMap
    /* Methods of Gee-0.8.Gee.AbstractSortedMap */
    headMap(before?: object | null): SortedMap
    tailMap(after?: object | null): SortedMap
    subMap(before?: object | null, after?: object | null): SortedMap
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    mapIterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    getSize(): number
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ascending-keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ascending-entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMap_ConstructProps)
    _init (config?: TreeMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueEqualFunc: EqualDataFunc | null): TreeMap
    static $gtype: GObject.Type
}
export interface TreeMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {
    kType?: GObject.Type
    kDupFunc?: GObject.BoxedCopyFunc
    kDestroyFunc?: GLib.DestroyNotify
    vType?: GObject.Type
    vDupFunc?: GObject.BoxedCopyFunc
    vDestroyFunc?: GLib.DestroyNotify
}
export class TreeMultiMap {
    /* Fields of Gee-0.8.Gee.AbstractMultiMap */
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.TreeMultiMap */
    getKeyCompareFunc(): { returnType: GLib.CompareDataFunc, resultTarget: object | null }
    getValueCompareFunc(): { returnType: GLib.CompareDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractMultiMap */
    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null, resultTargetDestroyNotify: GLib.DestroyNotify }
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    getReadOnlyView(): MultiMap
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TreeMultiMap_ConstructProps)
    _init (config?: TreeMultiMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueCompareFunc: GLib.CompareDataFunc | null): TreeMultiMap
    static $gtype: GObject.Type
}
export interface TreeMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class TreeMultiSet {
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    /* Fields of Gee-0.8.Gee.AbstractMultiSet */
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.TreeMultiSet */
    getCompareFunc(): { returnType: GLib.CompareDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractMultiSet */
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    getReadOnlyView(): MultiSet
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    reserved9(): void
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TreeMultiSet_ConstructProps)
    _init (config?: TreeMultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): TreeMultiSet
    static $gtype: GObject.Type
}
export interface TreeSet_ConstructProps extends AbstractBidirSortedSet_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class TreeSet {
    /* Properties of Gee-0.8.Gee.AbstractBidirSortedSet */
    readonly readOnlyView: BidirSortedSet
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.TreeSet */
    getCompareFunc(): { returnType: GLib.CompareDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedSet */
    bidirIterator(): BidirIterator
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
    getReadOnlyView(): BidirSortedSet
    /* Methods of Gee-0.8.Gee.AbstractSortedSet */
    first(): object | null
    last(): object | null
    iteratorAt(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet
    getReadOnlyView(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractSet */
    getReadOnlyView(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeSet_ConstructProps)
    _init (config?: TreeSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): TreeSet
    static $gtype: GObject.Type
}
export interface UnrolledLinkedList_ConstructProps extends AbstractBidirList_ConstructProps {
    gType?: GObject.Type
    gDupFunc?: GObject.BoxedCopyFunc
    gDestroyFunc?: GLib.DestroyNotify
}
export class UnrolledLinkedList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly readOnlyView: BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Properties of Gee-0.8.Gee.Queue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.UnrolledLinkedList */
    getEqualFunc(): { returnType: EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidirListIterator(): BidirListIterator
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
    getReadOnlyView(): BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    getReadOnlyView(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection
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
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    getCapacity(): number
    getRemainingCapacity(): number
    getIsFull(): boolean
    /* Methods of Gee-0.8.Gee.Collection */
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getIsEmpty(): boolean
    /* Methods of Gee-0.8.Gee.Deque */
    offerHead(element?: object | null): boolean
    peekHead(): object | null
    pollHead(): object | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element?: object | null): boolean
    peekTail(): object | null
    pollTail(): object | null
    drainTail(recipient: Collection, amount: number): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnrolledLinkedList_ConstructProps)
    _init (config?: UnrolledLinkedList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): UnrolledLinkedList
    static $gtype: GObject.Type
}
export interface MapEntry_ConstructProps extends GObject.Object_ConstructProps {
    kType?: GObject.Type
    kDupFunc?: GObject.BoxedCopyFunc
    kDestroyFunc?: GLib.DestroyNotify
    vType?: GObject.Type
    vDupFunc?: GObject.BoxedCopyFunc
    vDestroyFunc?: GLib.DestroyNotify
    value?: object
}
export class MapEntry {
    /* Properties of Gee-0.8.Gee.MapEntry */
    readonly key: object
    value: object
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.MapEntry */
    getKey(): object | null
    getValue(): object | null
    setValue(value?: object | null): void
    getReadOnly(): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MapEntry_ConstructProps)
    _init (config?: MapEntry_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AbstractBidirListClass {
    /* Fields of Gee-0.8.Gee.AbstractBidirListClass */
    bidirListIterator: () => BidirListIterator
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    reserved9: () => void
    static name: string
}
export class AbstractBidirListPrivate {
    static name: string
}
export abstract class AbstractBidirSortedSetClass {
    /* Fields of Gee-0.8.Gee.AbstractBidirSortedSetClass */
    bidirIterator: () => BidirIterator
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    reserved9: () => void
    static name: string
}
export class AbstractBidirSortedSetPrivate {
    static name: string
}
export abstract class AbstractBidirSortedMapClass {
    /* Fields of Gee-0.8.Gee.AbstractBidirSortedMapClass */
    bidirMapIterator: () => BidirMapIterator
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    reserved9: () => void
    static name: string
}
export class AbstractBidirSortedMapPrivate {
    static name: string
}
export abstract class AbstractCollectionClass {
    /* Fields of Gee-0.8.Gee.AbstractCollectionClass */
    contains: (item?: object | null) => boolean
    add: (item?: object | null) => boolean
    remove: (item?: object | null) => boolean
    clear: () => void
    iterator: () => Iterator
    foreach: (f: ForallFunc) => boolean
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    reserved9: () => void
    static name: string
}
export class AbstractCollectionPrivate {
    static name: string
}
export abstract class AbstractListClass {
    /* Fields of Gee-0.8.Gee.AbstractListClass */
    listIterator: () => ListIterator
    get: (index: number) => object | null
    set: (index: number, item?: object | null) => void
    indexOf: (item?: object | null) => number
    insert: (index: number, item?: object | null) => void
    removeAt: (index: number) => object | null
    slice: (start: number, stop: number) => List | null
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    reserved9: () => void
    static name: string
}
export class AbstractListPrivate {
    static name: string
}
export abstract class AbstractMapClass {
    /* Fields of Gee-0.8.Gee.AbstractMapClass */
    hasKey: (key?: object | null) => boolean
    has: (key?: object | null, value?: object | null) => boolean
    get: (key?: object | null) => object | null
    set: (key?: object | null, value?: object | null) => void
    unset: (key?: object | null) => { returnType: boolean, value: object | null }
    mapIterator: () => MapIterator
    clear: () => void
    foreach: (f: ForallFunc) => boolean
    stream: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc) => Iterator
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    reserved9: () => void
    static name: string
}
export class AbstractMapPrivate {
    static name: string
}
export abstract class AbstractMultiMapClass {
    /* Fields of Gee-0.8.Gee.AbstractMultiMapClass */
    createValueStorage: () => Collection
    createMultiKeySet: () => MultiSet
    getValueEqualFunc: () => { returnType: EqualDataFunc, resultTarget: object | null, resultTargetDestroyNotify: GLib.DestroyNotify }
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    static name: string
}
export class AbstractMultiMapPrivate {
    static name: string
}
export abstract class AbstractMultiSetClass {
    /* Fields of Gee-0.8.Gee.AbstractMultiSetClass */
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    static name: string
}
export class AbstractMultiSetPrivate {
    static name: string
}
export abstract class AbstractQueueClass {
    /* Fields of Gee-0.8.Gee.AbstractQueueClass */
    peek: () => object | null
    poll: () => object | null
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    reserved9: () => void
    static name: string
}
export class AbstractQueuePrivate {
    static name: string
}
export abstract class AbstractSetClass {
    /* Fields of Gee-0.8.Gee.AbstractSetClass */
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    reserved9: () => void
    static name: string
}
export class AbstractSetPrivate {
    static name: string
}
export abstract class AbstractSortedMapClass {
    /* Fields of Gee-0.8.Gee.AbstractSortedMapClass */
    headMap: (before?: object | null) => SortedMap
    tailMap: (after?: object | null) => SortedMap
    subMap: (before?: object | null, after?: object | null) => SortedMap
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    reserved9: () => void
    static name: string
}
export class AbstractSortedMapPrivate {
    static name: string
}
export abstract class AbstractSortedSetClass {
    /* Fields of Gee-0.8.Gee.AbstractSortedSetClass */
    first: () => object | null
    last: () => object | null
    iteratorAt: (element?: object | null) => Iterator | null
    lower: (element?: object | null) => object | null
    higher: (element?: object | null) => object | null
    floor: (element?: object | null) => object | null
    ceil: (element?: object | null) => object | null
    headSet: (before?: object | null) => SortedSet
    tailSet: (after?: object | null) => SortedSet
    subSet: (from?: object | null, to?: object | null) => SortedSet
    reserved0: () => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    reserved9: () => void
    static name: string
}
export class AbstractSortedSetPrivate {
    static name: string
}
export abstract class ArrayListClass {
    static name: string
}
export class ArrayListPrivate {
    static name: string
}
export abstract class ArrayQueueClass {
    static name: string
}
export class ArrayQueuePrivate {
    static name: string
}
export abstract class ConcurrentListClass {
    static name: string
}
export class ConcurrentListPrivate {
    static name: string
}
export abstract class ConcurrentSetClass {
    static name: string
}
export class ConcurrentSetPrivate {
    static name: string
}
export abstract class HashMapClass {
    static name: string
}
export class HashMapPrivate {
    static name: string
}
export abstract class HashMultiMapClass {
    static name: string
}
export class HashMultiMapPrivate {
    static name: string
}
export abstract class HashMultiSetClass {
    static name: string
}
export class HashMultiSetPrivate {
    static name: string
}
export abstract class HashSetClass {
    static name: string
}
export class HashSetPrivate {
    static name: string
}
export class HazardPointer {
    /* Fields of Gee-0.8.Gee.HazardPointer */
    node: any
    /* Methods of Gee-0.8.Gee.HazardPointer */
    get(otherThread: boolean): object | null
    release(notify: GLib.DestroyNotify): void
    static name: string
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, ptr?: object | null): HazardPointer
    constructor(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, ptr?: object | null)
    /* Static methods and pseudo-constructors */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, ptr?: object | null): HazardPointer
    static getHazardPointer(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, mask: number): { returnType: HazardPointer | null, maskOut: number }
    static getPointer(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, mask: number): { returnType: object | null, maskOut: number }
    static exchangeHazardPointer(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, newPtr: object | null, mask: number, newMask: number): { returnType: HazardPointer | null, oldMask: number }
    static setPointer(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, newPtr: object | null, mask: number, newMask: number): void
    static exchangePointer(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, newPtr: object | null, mask: number, newMask: number): { returnType: object | null, oldMask: number }
    static compareAndExchangePointer(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, oldPtr: object | null, newPtr: object | null, mask: number, oldMask: number, newMask: number): boolean
    static setDefaultPolicy(policy: HazardPointerPolicy): void
    static setThreadExitPolicy(policy: HazardPointerPolicy): void
    static setReleasePolicy(policy: HazardPointerReleasePolicy): boolean
}
export class HazardPointerContext {
    /* Fields of Gee-0.8.Gee.HazardPointerContext */
    parent: object | null
    toFree: ArrayList
    policy: HazardPointerPolicy | null
    /* Methods of Gee-0.8.Gee.HazardPointerContext */
    tryFree(): void
    freeAll(): void
    tryRelease(): void
    release(): void
    static name: string
    static new(policy?: HazardPointerPolicy | null): HazardPointerContext
    constructor(policy?: HazardPointerPolicy | null)
    /* Static methods and pseudo-constructors */
    static new(policy?: HazardPointerPolicy | null): HazardPointerContext
}
export abstract class LazyClass {
    static name: string
}
export class LazyPrivate {
    static name: string
}
export abstract class LinkedListClass {
    static name: string
}
export class LinkedListPrivate {
    static name: string
}
export abstract class PriorityQueueClass {
    static name: string
}
export class PriorityQueuePrivate {
    static name: string
}
export abstract class PromiseClass {
    static name: string
}
export class PromisePrivate {
    static name: string
}
export abstract class TreeMapClass {
    static name: string
}
export class TreeMapPrivate {
    static name: string
}
export abstract class TreeMultiMapClass {
    static name: string
}
export class TreeMultiMapPrivate {
    static name: string
}
export abstract class TreeMultiSetClass {
    static name: string
}
export class TreeMultiSetPrivate {
    static name: string
}
export abstract class TreeSetClass {
    static name: string
}
export class TreeSetPrivate {
    static name: string
}
export abstract class UnrolledLinkedListClass {
    static name: string
}
export class UnrolledLinkedListPrivate {
    static name: string
}
export abstract class BidirIteratorIface {
    /* Fields of Gee-0.8.Gee.BidirIteratorIface */
    previous: () => boolean
    hasPrevious: () => boolean
    first: () => boolean
    last: () => boolean
    static name: string
}
export abstract class BidirListIface {
    /* Fields of Gee-0.8.Gee.BidirListIface */
    bidirListIterator: () => BidirListIterator
    getReadOnlyView: () => BidirList
    static name: string
}
export abstract class BidirListIteratorIface {
    /* Fields of Gee-0.8.Gee.BidirListIteratorIface */
    insert: (item?: object | null) => void
    static name: string
}
export abstract class BidirMapIteratorIface {
    /* Fields of Gee-0.8.Gee.BidirMapIteratorIface */
    previous: () => boolean
    hasPrevious: () => boolean
    first: () => boolean
    last: () => boolean
    static name: string
}
export abstract class BidirSortedSetIface {
    /* Fields of Gee-0.8.Gee.BidirSortedSetIface */
    bidirIterator: () => BidirIterator
    getReadOnlyView: () => BidirSortedSet
    static name: string
}
export abstract class BidirSortedMapIface {
    /* Fields of Gee-0.8.Gee.BidirSortedMapIface */
    bidirMapIterator: () => BidirMapIterator
    getReadOnlyView: () => BidirSortedMap
    static name: string
}
export abstract class CollectionIface {
    /* Fields of Gee-0.8.Gee.CollectionIface */
    contains: (item?: object | null) => boolean
    add: (item?: object | null) => boolean
    remove: (item?: object | null) => boolean
    clear: () => void
    addAll: (collection: Collection) => boolean
    containsAll: (collection: Collection) => boolean
    removeAll: (collection: Collection) => boolean
    retainAll: (collection: Collection) => boolean
    toArray: () => object[]
    addAllArray: (array: object[]) => boolean
    containsAllArray: (array: object[]) => boolean
    removeAllArray: (array: object[]) => boolean
    addAllIterator: (iter: Iterator) => boolean
    containsAllIterator: (iter: Iterator) => boolean
    removeAllIterator: (iter: Iterator) => boolean
    getSize: () => number
    getIsEmpty: () => boolean
    getReadOnly: () => boolean
    getReadOnlyView: () => Collection
    static name: string
}
export abstract class ComparableIface {
    /* Fields of Gee-0.8.Gee.ComparableIface */
    compareTo: (object?: object | null) => number
    static name: string
}
export abstract class DequeIface {
    /* Fields of Gee-0.8.Gee.DequeIface */
    offerHead: (element?: object | null) => boolean
    peekHead: () => object | null
    pollHead: () => object | null
    drainHead: (recipient: Collection, amount: number) => number
    offerTail: (element?: object | null) => boolean
    peekTail: () => object | null
    pollTail: () => object | null
    drainTail: (recipient: Collection, amount: number) => number
    static name: string
}
export abstract class FutureIface {
    /* Fields of Gee-0.8.Gee.FutureIface */
    wait: () => object | null
    waitUntil: (endTime: number) => { returnType: boolean, value: object | null }
    waitAsync: (callback?: Gio.AsyncReadyCallback | null) => void
    waitFinish: (res: Gio.AsyncResult) => object | null
    map: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    lightMap: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    lightMapBroken: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    zip: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.Type, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Future) => Future
    flatMap: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    getValue: () => object | null
    getReady: () => boolean
    getException: () => GLib.Error | null
    static name: string
}
export abstract class HashableIface {
    /* Fields of Gee-0.8.Gee.HashableIface */
    hash: () => number
    equalTo: (object?: object | null) => boolean
    static name: string
}
export abstract class IterableIface {
    /* Fields of Gee-0.8.Gee.IterableIface */
    iterator: () => Iterator
    static name: string
}
export abstract class IteratorIface {
    /* Fields of Gee-0.8.Gee.IteratorIface */
    next: () => boolean
    hasNext: () => boolean
    get: () => object | null
    remove: () => void
    getValid: () => boolean
    getReadOnly: () => boolean
    static name: string
}
export abstract class ListIface {
    /* Fields of Gee-0.8.Gee.ListIface */
    listIterator: () => ListIterator
    get: (index: number) => object | null
    set: (index: number, item?: object | null) => void
    indexOf: (item?: object | null) => number
    insert: (index: number, item?: object | null) => void
    removeAt: (index: number) => object | null
    slice: (start: number, stop: number) => List | null
    first: () => object | null
    last: () => object | null
    insertAll: (index: number, collection: Collection) => void
    sort: (compareFunc: GLib.CompareDataFunc | null) => void
    getReadOnlyView: () => List
    static name: string
}
export abstract class ListIteratorIface {
    /* Fields of Gee-0.8.Gee.ListIteratorIface */
    set: (item?: object | null) => void
    add: (item?: object | null) => void
    index: () => number
    static name: string
}
export abstract class MapIface {
    /* Fields of Gee-0.8.Gee.MapIface */
    hasKey: (key?: object | null) => boolean
    has: (key?: object | null, value?: object | null) => boolean
    get: (key?: object | null) => object | null
    set: (key?: object | null, value?: object | null) => void
    unset: (key?: object | null) => { returnType: boolean, value: object | null }
    clear: () => void
    mapIterator: () => MapIterator
    setAll: (map: Map) => void
    unsetAll: (map: Map) => boolean
    hasAll: (map: Map) => boolean
    getSize: () => number
    getIsEmpty: () => boolean
    getReadOnly: () => boolean
    getKeys: () => Set
    getValues: () => Collection
    getEntries: () => Set
    getReadOnlyView: () => Map
    static name: string
}
export abstract class MapEntryClass {
    static name: string
}
export class MapEntryPrivate {
    static name: string
}
export abstract class MapIteratorIface {
    /* Fields of Gee-0.8.Gee.MapIteratorIface */
    next: () => boolean
    hasNext: () => boolean
    getKey: () => object | null
    getValue: () => object | null
    setValue: (value?: object | null) => void
    unset: () => void
    fold: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed?: object | null) => object | null
    foreach: (f: ForallMapFunc) => boolean
    getValid: () => boolean
    getMutable: () => boolean
    getReadOnly: () => boolean
    static name: string
}
export abstract class MultiMapIface {
    /* Fields of Gee-0.8.Gee.MultiMapIface */
    getKeys: () => Set
    getAllKeys: () => MultiSet
    getValues: () => Collection
    contains: (key?: object | null) => boolean
    get: (key?: object | null) => Collection
    set: (key?: object | null, value?: object | null) => void
    remove: (key?: object | null, value?: object | null) => boolean
    removeAll: (key?: object | null) => boolean
    clear: () => void
    mapIterator: () => MapIterator
    getSize: () => number
    getReadOnly: () => boolean
    getReadOnlyView: () => MultiMap
    static name: string
}
export abstract class MultiSetIface {
    /* Fields of Gee-0.8.Gee.MultiSetIface */
    count: (item?: object | null) => number
    getReadOnlyView: () => MultiSet
    static name: string
}
export abstract class QueueIface {
    /* Fields of Gee-0.8.Gee.QueueIface */
    offer: (element?: object | null) => boolean
    peek: () => object | null
    poll: () => object | null
    drain: (recipient: Collection, amount: number) => number
    getCapacity: () => number
    getRemainingCapacity: () => number
    getIsFull: () => boolean
    static name: string
}
export abstract class SetIface {
    /* Fields of Gee-0.8.Gee.SetIface */
    getReadOnlyView: () => Set
    static name: string
}
export abstract class SortedMapIface {
    /* Fields of Gee-0.8.Gee.SortedMapIface */
    headMap: (before?: object | null) => SortedMap
    tailMap: (after?: object | null) => SortedMap
    subMap: (before?: object | null, after?: object | null) => SortedMap
    getAscendingKeys: () => SortedSet
    getAscendingEntries: () => SortedSet
    getReadOnlyView: () => SortedMap
    static name: string
}
export abstract class SortedSetIface {
    /* Fields of Gee-0.8.Gee.SortedSetIface */
    first: () => object | null
    last: () => object | null
    iteratorAt: (element?: object | null) => Iterator | null
    lower: (element?: object | null) => object | null
    higher: (element?: object | null) => object | null
    floor: (element?: object | null) => object | null
    ceil: (element?: object | null) => object | null
    headSet: (before?: object | null) => SortedSet
    tailSet: (after?: object | null) => SortedSet
    subSet: (from?: object | null, to?: object | null) => SortedSet
    getReadOnlyView: () => SortedSet
    static name: string
}
export abstract class TraversableIface {
    /* Fields of Gee-0.8.Gee.TraversableIface */
    foreach: (f: ForallFunc) => boolean
    stream: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc) => Iterator
    fold: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed?: object | null) => object | null
    map: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc) => Iterator
    scan: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed?: object | null) => Iterator
    filter: (pred: Predicate) => Iterator
    chop: (offset: number, length: number) => Iterator
    flatMap: (aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc) => Iterator
    tee: (forks: number) => Iterator[]
    firstMatch: (pred: Predicate) => object | null
    anyMatch: (pred: Predicate) => boolean
    allMatch: (pred: Predicate) => boolean
    max: (compare: GLib.CompareDataFunc) => object | null
    min: (compare: GLib.CompareDataFunc) => object | null
    orderBy: (compare: GLib.CompareDataFunc | null) => Iterator
    getElementType: () => GObject.Type
    static name: string
}
}