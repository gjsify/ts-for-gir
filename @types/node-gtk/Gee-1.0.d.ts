/**
 * Gee-1.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Gee {

export function functionsGetEqualFuncFor(t: GObject.Type): GLib.EqualFunc
export function functionsGetHashFuncFor(t: GObject.Type): GLib.HashFunc
export function functionsGetCompareFuncFor(t: GObject.Type): GLib.CompareFunc
export function directCompare(val1?: object | null, val2?: object | null): number
export interface BidirIterator_ConstructProps extends Iterator_ConstructProps {
}
export class BidirIterator {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.BidirIterator */
    previous(): boolean
    hasPrevious(): boolean
    last(): boolean
    /* Methods of Gee-1.0.Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    first(): boolean
    get(): object | null
    remove(): void
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
    static $gtype: GObject.Type
}
export interface Collection_ConstructProps extends Iterable_ConstructProps {
}
export class Collection {
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
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
    connect(sigName: "notify::is-empty", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface Comparable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Comparable {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Comparable */
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
    /* Properties of Gee-1.0.Gee.Queue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Deque */
    offerHead(element?: object | null): boolean
    peekHead(): object | null
    pollHead(): object | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element?: object | null): boolean
    peekTail(): object | null
    pollTail(): object | null
    drainTail(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
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
    connect(sigName: "notify::is-empty", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface Iterable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Iterable {
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Iterable */
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
    connect(sigName: "notify::element-type", callback: (($obj: Iterable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Iterable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    first(): boolean
    get(): object | null
    remove(): void
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
    static $gtype: GObject.Type
}
export interface List_ConstructProps extends Collection_ConstructProps {
}
export class List {
    /* Properties of Gee-1.0.Gee.List */
    readonly readOnlyView: List
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.List */
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
    sort(compareFunc?: GLib.CompareFunc | null): void
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
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
    connect(sigName: "notify::is-empty", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static empty(): List
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface ListIterator_ConstructProps extends BidirIterator_ConstructProps {
}
export class ListIterator {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.ListIterator */
    set(item?: object | null): void
    insert(item?: object | null): void
    add(item?: object | null): void
    index(): number
    /* Methods of Gee-1.0.Gee.BidirIterator */
    previous(): boolean
    hasPrevious(): boolean
    last(): boolean
    /* Methods of Gee-1.0.Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    first(): boolean
    get(): object | null
    remove(): void
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
    static $gtype: GObject.Type
}
export interface Map_ConstructProps extends GObject.Object_ConstructProps {
}
export class Map {
    /* Properties of Gee-1.0.Gee.Map */
    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    readonly keyType: GObject.Type
    readonly valueType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Map */
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
    connect(sigName: "notify::is-empty", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::key-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Map_ConstructProps)
    _init (config?: Map_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Map
    static $gtype: GObject.Type
}
export interface MapIterator_ConstructProps extends GObject.Object_ConstructProps {
}
export class MapIterator {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.MapIterator */
    next(): boolean
    hasNext(): boolean
    first(): boolean
    getKey(): object | null
    getValue(): object | null
    setValue(value?: object | null): void
    unset(): void
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
    /* Properties of Gee-1.0.Gee.MultiMap */
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.MultiMap */
    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    removeAll(key?: object | null): boolean
    clear(): void
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
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.MultiSet */
    count(item?: object | null): number
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
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
    connect(sigName: "notify::is-empty", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface Queue_ConstructProps extends Collection_ConstructProps {
}
export class Queue {
    /* Properties of Gee-1.0.Gee.Queue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
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
    connect(sigName: "notify::is-empty", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface Set_ConstructProps extends Collection_ConstructProps {
}
export class Set {
    /* Properties of Gee-1.0.Gee.Set */
    readonly readOnlyView: Set
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
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
    connect(sigName: "notify::is-empty", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static empty(): Set
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface SortedSet_ConstructProps extends Set_ConstructProps {
}
export class SortedSet {
    /* Properties of Gee-1.0.Gee.Set */
    readonly readOnlyView: Set
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.SortedSet */
    first(): object | null
    last(): object | null
    bidirIterator(): BidirIterator
    iteratorAt(element?: object | null): BidirIterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
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
    connect(sigName: "notify::is-empty", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static empty(): Set
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface AbstractCollection_ConstructProps extends GObject.Object_ConstructProps {
}
export class AbstractCollection {
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractCollection */
    parentInstance: GObject.Object
    priv: AbstractCollectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface AbstractList_ConstructProps extends AbstractCollection_ConstructProps {
}
export class AbstractList {
    /* Properties of Gee-1.0.Gee.AbstractList */
    readonly readOnlyView: List
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractList */
    parentInstance: AbstractCollection
    priv: AbstractListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractList */
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
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    /* Methods of Gee-1.0.Gee.List */
    sort(compareFunc?: GLib.CompareFunc | null): void
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
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static empty(): List
    static $gtype: GObject.Type
}
export interface AbstractMap_ConstructProps extends GObject.Object_ConstructProps {
}
export class AbstractMap {
    /* Properties of Gee-1.0.Gee.AbstractMap */
    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Properties of Gee-1.0.Gee.Map */
    readonly keyType: GObject.Type
    readonly valueType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractMap */
    parentInstance: GObject.Object
    priv: AbstractMapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    mapIterator(): MapIterator
    clear(): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean
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
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
    /* Methods of Gee-1.0.Gee.Map */
    contains(key?: object | null): boolean
    remove(key?: object | null): { returnType: boolean, value: object | null }
    removeAll(map: Map): boolean
    containsAll(map: Map): boolean
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
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::element-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AbstractMap_ConstructProps)
    _init (config?: AbstractMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Map
    static $gtype: GObject.Type
}
export interface AbstractMultiMap_ConstructProps extends GObject.Object_ConstructProps {
}
export class AbstractMultiMap {
    /* Properties of Gee-1.0.Gee.MultiMap */
    readonly size: number
    /* Fields of Gee-1.0.Gee.AbstractMultiMap */
    parentInstance: GObject.Object
    priv: AbstractMultiMapPrivate
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMultiMap */
    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): GLib.EqualFunc
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
    /* Methods of Gee-1.0.Gee.MultiMap */
    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    removeAll(key?: object | null): boolean
    clear(): void
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
}
export class AbstractMultiSet {
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractMultiSet */
    parentInstance: AbstractCollection
    priv: AbstractMultiSetPrivate
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    /* Methods of Gee-1.0.Gee.MultiSet */
    count(item?: object | null): number
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
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface AbstractQueue_ConstructProps extends AbstractCollection_ConstructProps {
}
export class AbstractQueue {
    /* Properties of Gee-1.0.Gee.AbstractQueue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractQueue */
    parentInstance: AbstractCollection
    priv: AbstractQueuePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractQueue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
}
export class AbstractSet {
    /* Properties of Gee-1.0.Gee.AbstractSet */
    readonly readOnlyView: Set
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractSet */
    parentInstance: AbstractCollection
    priv: AbstractSetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static empty(): Set
    static $gtype: GObject.Type
}
export interface ArrayList_ConstructProps extends AbstractList_ConstructProps {
    equalFunc?: GLib.EqualFunc
}
export class ArrayList {
    /* Properties of Gee-1.0.Gee.ArrayList */
    equalFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractList */
    readonly readOnlyView: List
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Fields of Gee-1.0.Gee.ArrayList */
    parentInstance: AbstractList
    priv: ArrayListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.ArrayList */
    sortWithData(compare: GLib.CompareDataFunc): void
    /* Methods of Gee-1.0.Gee.AbstractList */
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
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    connect(sigName: "notify", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::equal-func", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-empty", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(equalFunc?: GLib.EqualFunc | null): ArrayList
    static $gtype: GObject.Type
}
export interface HashMap_ConstructProps extends AbstractMap_ConstructProps {
    keyHashFunc?: GLib.HashFunc
    keyEqualFunc?: GLib.EqualFunc
    valueEqualFunc?: GLib.EqualFunc
}
export class HashMap {
    /* Properties of Gee-1.0.Gee.HashMap */
    keyHashFunc: GLib.HashFunc
    keyEqualFunc: GLib.EqualFunc
    valueEqualFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractMap */
    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    /* Fields of Gee-1.0.Gee.HashMap */
    parentInstance: AbstractMap
    priv: HashMapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    mapIterator(): MapIterator
    clear(): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean
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
    connect(sigName: "notify::key-hash-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-hash-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-equal-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-equal-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-equal-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueEqualFunc?: GLib.EqualFunc | null): HashMap
    static $gtype: GObject.Type
}
export interface HashMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {
    valueHashFunc?: GLib.HashFunc
    valueEqualFunc?: GLib.EqualFunc
}
export class HashMultiMap {
    /* Properties of Gee-1.0.Gee.HashMultiMap */
    readonly keyHashFunc: GLib.HashFunc
    readonly keyEqualFunc: GLib.EqualFunc
    valueHashFunc: GLib.HashFunc
    valueEqualFunc: GLib.EqualFunc
    /* Fields of Gee-1.0.Gee.HashMultiMap */
    parentInstance: AbstractMultiMap
    priv: HashMultiMapPrivate
    /* Fields of Gee-1.0.Gee.AbstractMultiMap */
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMultiMap */
    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): GLib.EqualFunc
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
    connect(sigName: "notify::key-hash-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-hash-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-equal-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-equal-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-hash-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-hash-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-equal-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueHashFunc?: GLib.HashFunc | null, valueEqualFunc?: GLib.EqualFunc | null): HashMultiMap
    static $gtype: GObject.Type
}
export interface HashMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
}
export class HashMultiSet {
    /* Properties of Gee-1.0.Gee.HashMultiSet */
    readonly hashFunc: GLib.HashFunc
    readonly equalFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Fields of Gee-1.0.Gee.HashMultiSet */
    parentInstance: AbstractMultiSet
    priv: HashMultiSetPrivate
    /* Fields of Gee-1.0.Gee.AbstractMultiSet */
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    connect(sigName: "notify", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hash-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hash-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::equal-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null): HashMultiSet
    static $gtype: GObject.Type
}
export interface HashSet_ConstructProps extends AbstractSet_ConstructProps {
    hashFunc?: GLib.HashFunc
    equalFunc?: GLib.EqualFunc
}
export class HashSet {
    /* Properties of Gee-1.0.Gee.HashSet */
    hashFunc: GLib.HashFunc
    equalFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractSet */
    readonly readOnlyView: Set
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Fields of Gee-1.0.Gee.HashSet */
    parentInstance: AbstractSet
    priv: HashSetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    connect(sigName: "notify", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hash-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hash-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::equal-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-empty", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null): HashSet
    static $gtype: GObject.Type
}
export interface LinkedList_ConstructProps extends AbstractList_ConstructProps {
    equalFunc?: GLib.EqualFunc
}
export class LinkedList {
    /* Properties of Gee-1.0.Gee.LinkedList */
    equalFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractList */
    readonly readOnlyView: List
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Queue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.LinkedList */
    parentInstance: AbstractList
    priv: LinkedListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractList */
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
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    /* Methods of Gee-1.0.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.Deque */
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
    connect(sigName: "notify::equal-func", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-empty", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::element-type", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(equalFunc?: GLib.EqualFunc | null): LinkedList
    static $gtype: GObject.Type
}
export interface PriorityQueue_ConstructProps extends AbstractQueue_ConstructProps {
    compareFunc?: GLib.CompareFunc
}
export class PriorityQueue {
    /* Properties of Gee-1.0.Gee.PriorityQueue */
    compareFunc: GLib.CompareFunc
    /* Properties of Gee-1.0.Gee.AbstractQueue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Fields of Gee-1.0.Gee.PriorityQueue */
    parentInstance: AbstractQueue
    priv: PriorityQueuePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractQueue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    connect(sigName: "notify", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compare-func", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compare-func", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-empty", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(compareFunc?: GLib.CompareFunc | null): PriorityQueue
    static $gtype: GObject.Type
}
export interface TreeMap_ConstructProps extends AbstractMap_ConstructProps {
    keyCompareFunc?: GLib.CompareFunc
    valueEqualFunc?: GLib.EqualFunc
}
export class TreeMap {
    /* Properties of Gee-1.0.Gee.TreeMap */
    keyCompareFunc: GLib.CompareFunc
    valueEqualFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractMap */
    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    /* Fields of Gee-1.0.Gee.TreeMap */
    parentInstance: AbstractMap
    priv: TreeMapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): { returnType: boolean, value: object | null }
    mapIterator(): MapIterator
    clear(): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean
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
    connect(sigName: "notify::key-compare-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-compare-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-equal-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TreeMap_ConstructProps)
    _init (config?: TreeMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueEqualFunc?: GLib.EqualFunc | null): TreeMap
    static $gtype: GObject.Type
}
export interface TreeMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {
    valueCompareFunc?: GLib.CompareFunc
}
export class TreeMultiMap {
    /* Properties of Gee-1.0.Gee.TreeMultiMap */
    readonly keyCompareFunc: GLib.CompareFunc
    valueCompareFunc: GLib.CompareFunc
    /* Fields of Gee-1.0.Gee.TreeMultiMap */
    parentInstance: AbstractMultiMap
    priv: TreeMultiMapPrivate
    /* Fields of Gee-1.0.Gee.AbstractMultiMap */
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMultiMap */
    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): GLib.EqualFunc
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
    connect(sigName: "notify::key-compare-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-compare-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-compare-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-compare-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueCompareFunc?: GLib.CompareFunc | null): TreeMultiMap
    static $gtype: GObject.Type
}
export interface TreeMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
}
export class TreeMultiSet {
    /* Properties of Gee-1.0.Gee.TreeMultiSet */
    readonly compareFunc: GLib.CompareFunc
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Fields of Gee-1.0.Gee.TreeMultiSet */
    parentInstance: AbstractMultiSet
    priv: TreeMultiSetPrivate
    /* Fields of Gee-1.0.Gee.AbstractMultiSet */
    storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    connect(sigName: "notify", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compare-func", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compare-func", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(compareFunc?: GLib.CompareFunc | null): TreeMultiSet
    static $gtype: GObject.Type
}
export interface TreeSet_ConstructProps extends AbstractSet_ConstructProps {
    compareFunc?: GLib.CompareFunc
}
export class TreeSet {
    /* Properties of Gee-1.0.Gee.TreeSet */
    compareFunc: GLib.CompareFunc
    /* Properties of Gee-1.0.Gee.AbstractSet */
    readonly readOnlyView: Set
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.TreeSet */
    parentInstance: AbstractSet
    priv: TreeSetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    /* Methods of Gee-1.0.Gee.SortedSet */
    first(): object | null
    last(): object | null
    bidirIterator(): BidirIterator
    iteratorAt(element?: object | null): BidirIterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compare-func", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compare-func", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-empty", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(compareFunc?: GLib.CompareFunc | null): TreeSet
    static $gtype: GObject.Type
}
export interface MapEntry_ConstructProps extends GObject.Object_ConstructProps {
    value?: object
}
export class MapEntry {
    /* Properties of Gee-1.0.Gee.MapEntry */
    readonly key: object
    value: object
    /* Fields of Gee-1.0.Gee.MapEntry */
    parentInstance: GObject.Object
    priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
export abstract class AbstractCollectionClass {
    /* Fields of Gee-1.0.Gee.AbstractCollectionClass */
    parentClass: GObject.ObjectClass
    contains: (self: AbstractCollection, item?: object | null) => boolean
    add: (self: AbstractCollection, item?: object | null) => boolean
    remove: (self: AbstractCollection, item?: object | null) => boolean
    clear: (self: AbstractCollection) => void
    toArray: (self: AbstractCollection) => object[]
    addAll: (self: AbstractCollection, collection: Collection) => boolean
    containsAll: (self: AbstractCollection, collection: Collection) => boolean
    removeAll: (self: AbstractCollection, collection: Collection) => boolean
    retainAll: (self: AbstractCollection, collection: Collection) => boolean
    iterator: (self: AbstractCollection) => Iterator
    static name: string
}
export class AbstractCollectionPrivate {
    static name: string
}
export abstract class AbstractListClass {
    /* Fields of Gee-1.0.Gee.AbstractListClass */
    parentClass: AbstractCollectionClass
    listIterator: (self: AbstractList) => ListIterator
    get: (self: AbstractList, index: number) => object | null
    set: (self: AbstractList, index: number, item?: object | null) => void
    indexOf: (self: AbstractList, item?: object | null) => number
    insert: (self: AbstractList, index: number, item?: object | null) => void
    removeAt: (self: AbstractList, index: number) => object | null
    slice: (self: AbstractList, start: number, stop: number) => List | null
    first: (self: AbstractList) => object | null
    last: (self: AbstractList) => object | null
    insertAll: (self: AbstractList, index: number, collection: Collection) => void
    static name: string
}
export class AbstractListPrivate {
    static name: string
}
export abstract class AbstractMapClass {
    /* Fields of Gee-1.0.Gee.AbstractMapClass */
    parentClass: GObject.ObjectClass
    hasKey: (self: AbstractMap, key?: object | null) => boolean
    has: (self: AbstractMap, key?: object | null, value?: object | null) => boolean
    get: (self: AbstractMap, key?: object | null) => object | null
    set: (self: AbstractMap, key?: object | null, value?: object | null) => void
    unset: (self: AbstractMap, key?: object | null) => { returnType: boolean, value: object | null }
    mapIterator: (self: AbstractMap) => MapIterator
    clear: (self: AbstractMap) => void
    setAll: (self: AbstractMap, map: Map) => void
    unsetAll: (self: AbstractMap, map: Map) => boolean
    hasAll: (self: AbstractMap, map: Map) => boolean
    static name: string
}
export class AbstractMapPrivate {
    static name: string
}
export abstract class AbstractMultiMapClass {
    /* Fields of Gee-1.0.Gee.AbstractMultiMapClass */
    parentClass: GObject.ObjectClass
    createValueStorage: (self: AbstractMultiMap) => Collection
    createMultiKeySet: (self: AbstractMultiMap) => MultiSet
    getValueEqualFunc: (self: AbstractMultiMap) => GLib.EqualFunc
    static name: string
}
export class AbstractMultiMapPrivate {
    static name: string
}
export abstract class AbstractMultiSetClass {
    /* Fields of Gee-1.0.Gee.AbstractMultiSetClass */
    parentClass: AbstractCollectionClass
    static name: string
}
export class AbstractMultiSetPrivate {
    static name: string
}
export abstract class AbstractQueueClass {
    /* Fields of Gee-1.0.Gee.AbstractQueueClass */
    parentClass: AbstractCollectionClass
    offer: (self: AbstractQueue, element?: object | null) => boolean
    peek: (self: AbstractQueue) => object | null
    poll: (self: AbstractQueue) => object | null
    drain: (self: AbstractQueue, recipient: Collection, amount: number) => number
    static name: string
}
export class AbstractQueuePrivate {
    static name: string
}
export abstract class AbstractSetClass {
    /* Fields of Gee-1.0.Gee.AbstractSetClass */
    parentClass: AbstractCollectionClass
    static name: string
}
export class AbstractSetPrivate {
    static name: string
}
export abstract class ArrayListClass {
    /* Fields of Gee-1.0.Gee.ArrayListClass */
    parentClass: AbstractListClass
    static name: string
}
export class ArrayListPrivate {
    static name: string
}
export abstract class HashMapClass {
    /* Fields of Gee-1.0.Gee.HashMapClass */
    parentClass: AbstractMapClass
    static name: string
}
export class HashMapPrivate {
    static name: string
}
export abstract class HashMultiMapClass {
    /* Fields of Gee-1.0.Gee.HashMultiMapClass */
    parentClass: AbstractMultiMapClass
    static name: string
}
export class HashMultiMapPrivate {
    static name: string
}
export abstract class HashMultiSetClass {
    /* Fields of Gee-1.0.Gee.HashMultiSetClass */
    parentClass: AbstractMultiSetClass
    static name: string
}
export class HashMultiSetPrivate {
    static name: string
}
export abstract class HashSetClass {
    /* Fields of Gee-1.0.Gee.HashSetClass */
    parentClass: AbstractSetClass
    static name: string
}
export class HashSetPrivate {
    static name: string
}
export abstract class LinkedListClass {
    /* Fields of Gee-1.0.Gee.LinkedListClass */
    parentClass: AbstractListClass
    static name: string
}
export class LinkedListPrivate {
    static name: string
}
export abstract class PriorityQueueClass {
    /* Fields of Gee-1.0.Gee.PriorityQueueClass */
    parentClass: AbstractQueueClass
    static name: string
}
export class PriorityQueuePrivate {
    static name: string
}
export abstract class TreeMapClass {
    /* Fields of Gee-1.0.Gee.TreeMapClass */
    parentClass: AbstractMapClass
    static name: string
}
export class TreeMapPrivate {
    static name: string
}
export abstract class TreeMultiMapClass {
    /* Fields of Gee-1.0.Gee.TreeMultiMapClass */
    parentClass: AbstractMultiMapClass
    static name: string
}
export class TreeMultiMapPrivate {
    static name: string
}
export abstract class TreeMultiSetClass {
    /* Fields of Gee-1.0.Gee.TreeMultiSetClass */
    parentClass: AbstractMultiSetClass
    static name: string
}
export class TreeMultiSetPrivate {
    static name: string
}
export abstract class TreeSetClass {
    /* Fields of Gee-1.0.Gee.TreeSetClass */
    parentClass: AbstractSetClass
    static name: string
}
export class TreeSetPrivate {
    static name: string
}
export abstract class BidirIteratorIface {
    /* Fields of Gee-1.0.Gee.BidirIteratorIface */
    parentIface: GObject.TypeInterface
    previous: (self: BidirIterator) => boolean
    hasPrevious: (self: BidirIterator) => boolean
    last: (self: BidirIterator) => boolean
    static name: string
}
export abstract class CollectionIface {
    /* Fields of Gee-1.0.Gee.CollectionIface */
    parentIface: GObject.TypeInterface
    contains: (self: Collection, item?: object | null) => boolean
    add: (self: Collection, item?: object | null) => boolean
    remove: (self: Collection, item?: object | null) => boolean
    clear: (self: Collection) => void
    addAll: (self: Collection, collection: Collection) => boolean
    containsAll: (self: Collection, collection: Collection) => boolean
    removeAll: (self: Collection, collection: Collection) => boolean
    retainAll: (self: Collection, collection: Collection) => boolean
    toArray: (self: Collection) => object[]
    static name: string
}
export abstract class ComparableIface {
    /* Fields of Gee-1.0.Gee.ComparableIface */
    parentIface: GObject.TypeInterface
    compareTo: (self: Comparable, object?: object | null) => number
    static name: string
}
export abstract class DequeIface {
    /* Fields of Gee-1.0.Gee.DequeIface */
    parentIface: GObject.TypeInterface
    offerHead: (self: Deque, element?: object | null) => boolean
    peekHead: (self: Deque) => object | null
    pollHead: (self: Deque) => object | null
    drainHead: (self: Deque, recipient: Collection, amount: number) => number
    offerTail: (self: Deque, element?: object | null) => boolean
    peekTail: (self: Deque) => object | null
    pollTail: (self: Deque) => object | null
    drainTail: (self: Deque, recipient: Collection, amount: number) => number
    static name: string
}
export abstract class IterableIface {
    /* Fields of Gee-1.0.Gee.IterableIface */
    parentIface: GObject.TypeInterface
    iterator: (self: Iterable) => Iterator
    static name: string
}
export abstract class IteratorIface {
    /* Fields of Gee-1.0.Gee.IteratorIface */
    parentIface: GObject.TypeInterface
    next: (self: Iterator) => boolean
    hasNext: (self: Iterator) => boolean
    first: (self: Iterator) => boolean
    get: (self: Iterator) => object | null
    remove: (self: Iterator) => void
    static name: string
}
export abstract class ListIface {
    /* Fields of Gee-1.0.Gee.ListIface */
    parentIface: GObject.TypeInterface
    listIterator: (self: List) => ListIterator
    get: (self: List, index: number) => object | null
    set: (self: List, index: number, item?: object | null) => void
    indexOf: (self: List, item?: object | null) => number
    insert: (self: List, index: number, item?: object | null) => void
    removeAt: (self: List, index: number) => object | null
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => object | null
    last: (self: List) => object | null
    insertAll: (self: List, index: number, collection: Collection) => void
    sort: (self: List, compareFunc?: GLib.CompareFunc | null) => void
    static name: string
}
export abstract class ListIteratorIface {
    /* Fields of Gee-1.0.Gee.ListIteratorIface */
    parentIface: GObject.TypeInterface
    set: (self: ListIterator, item?: object | null) => void
    insert: (self: ListIterator, item?: object | null) => void
    add: (self: ListIterator, item?: object | null) => void
    index: (self: ListIterator) => number
    static name: string
}
export abstract class MapIface {
    /* Fields of Gee-1.0.Gee.MapIface */
    parentIface: GObject.TypeInterface
    hasKey: (self: Map, key?: object | null) => boolean
    contains: (self: Map, key?: object | null) => boolean
    has: (self: Map, key?: object | null, value?: object | null) => boolean
    get: (self: Map, key?: object | null) => object | null
    set: (self: Map, key?: object | null, value?: object | null) => void
    unset: (self: Map, key?: object | null) => { returnType: boolean, value: object | null }
    remove: (self: Map, key?: object | null) => { returnType: boolean, value: object | null }
    clear: (self: Map) => void
    mapIterator: (self: Map) => MapIterator
    setAll: (self: Map, map: Map) => void
    unsetAll: (self: Map, map: Map) => boolean
    removeAll: (self: Map, map: Map) => boolean
    hasAll: (self: Map, map: Map) => boolean
    containsAll: (self: Map, map: Map) => boolean
    static name: string
}
export abstract class MapEntryClass {
    /* Fields of Gee-1.0.Gee.MapEntryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class EntryPrivate {
    static name: string
}
export abstract class MapIteratorIface {
    /* Fields of Gee-1.0.Gee.MapIteratorIface */
    parentIface: GObject.TypeInterface
    next: (self: MapIterator) => boolean
    hasNext: (self: MapIterator) => boolean
    first: (self: MapIterator) => boolean
    getKey: (self: MapIterator) => object | null
    getValue: (self: MapIterator) => object | null
    setValue: (self: MapIterator, value?: object | null) => void
    unset: (self: MapIterator) => void
    static name: string
}
export abstract class MultiMapIface {
    /* Fields of Gee-1.0.Gee.MultiMapIface */
    parentIface: GObject.TypeInterface
    getKeys: (self: MultiMap) => Set
    getAllKeys: (self: MultiMap) => MultiSet
    getValues: (self: MultiMap) => Collection
    contains: (self: MultiMap, key?: object | null) => boolean
    get: (self: MultiMap, key?: object | null) => Collection
    set: (self: MultiMap, key?: object | null, value?: object | null) => void
    remove: (self: MultiMap, key?: object | null, value?: object | null) => boolean
    removeAll: (self: MultiMap, key?: object | null) => boolean
    clear: (self: MultiMap) => void
    static name: string
}
export abstract class MultiSetIface {
    /* Fields of Gee-1.0.Gee.MultiSetIface */
    parentIface: GObject.TypeInterface
    count: (self: MultiSet, item?: object | null) => number
    static name: string
}
export abstract class QueueIface {
    /* Fields of Gee-1.0.Gee.QueueIface */
    parentIface: GObject.TypeInterface
    offer: (self: Queue, element?: object | null) => boolean
    peek: (self: Queue) => object | null
    poll: (self: Queue) => object | null
    drain: (self: Queue, recipient: Collection, amount: number) => number
    static name: string
}
export abstract class SetIface {
    /* Fields of Gee-1.0.Gee.SetIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class SortedSetIface {
    /* Fields of Gee-1.0.Gee.SortedSetIface */
    parentIface: GObject.TypeInterface
    first: (self: SortedSet) => object | null
    last: (self: SortedSet) => object | null
    bidirIterator: (self: SortedSet) => BidirIterator
    iteratorAt: (self: SortedSet, element?: object | null) => BidirIterator | null
    lower: (self: SortedSet, element?: object | null) => object | null
    higher: (self: SortedSet, element?: object | null) => object | null
    floor: (self: SortedSet, element?: object | null) => object | null
    ceil: (self: SortedSet, element?: object | null) => object | null
    headSet: (self: SortedSet, before?: object | null) => SortedSet
    tailSet: (self: SortedSet, after?: object | null) => SortedSet
    subSet: (self: SortedSet, from?: object | null, to?: object | null) => SortedSet
    static name: string
}
}