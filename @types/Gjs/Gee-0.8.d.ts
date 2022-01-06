/**
 * Gee-0.8
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

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
export function functions_get_equal_func_for(t: GObject.Type): [ /* returnType */ EqualDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
export function functions_get_hash_func_for(t: GObject.Type): [ /* returnType */ HashDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
export function functions_get_compare_func_for(t: GObject.Type): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
export function hazard_pointer_policy_is_concrete(): boolean
export function hazard_pointer_policy_is_blocking(): boolean
export function hazard_pointer_policy_is_safe(): boolean
export function hazard_pointer_policy_to_concrete(): HazardPointerPolicy
export function task(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, task: Task): Future
export function async_task(_callback_?: Gio.AsyncReadyCallback | null): void
export function async_task_finish(_res_: Gio.AsyncResult): void
export interface HashDataFunc {
    (t_type: GObject.Type, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, v: object | null): number
}
export interface EqualDataFunc {
    (t_type: GObject.Type, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, a: object | null, b: object | null): boolean
}
export interface LazyFunc {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): object | null
}
export interface FoldMapFunc {
    (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, k: object | null, v: object | null, a: object | null): object | null
}
export interface ForallMapFunc {
    (k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, k: object | null, v: object | null): boolean
}
export interface Task {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): object | null
}
export interface FoldFunc {
    (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null, a: object | null): object | null
}
export interface ForallFunc {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): boolean
}
export interface UnfoldFunc {
    (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify): Lazy | null
}
export interface StreamFunc {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, state: TraversableStream, g: Lazy | null): TraversableStream
}
export interface MapFunc {
    (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): object | null
}
export interface Predicate {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): boolean
}
export interface FlatMapFunc {
    (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): Iterator
}
export interface BidirIterator_ConstructProps extends Iterator_ConstructProps {
}
export class BidirIterator {
    /* Properties of Gee-0.8.Gee.Iterator */
    readonly valid: boolean
    readonly read_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirIterator */
    previous(): boolean
    has_previous(): boolean
    first(): boolean
    last(): boolean
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    has_next(): boolean
    get(): object | null
    remove(): void
    get_valid(): boolean
    get_read_only(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.BidirIterator */
    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_first(): boolean
    vfunc_last(): boolean
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of Gee-0.8.Gee.Iterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BidirIterator_ConstructProps)
    _init (config?: BidirIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unfold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: UnfoldFunc, current?: Lazy | null): Iterator
    static concat(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iters: Iterator): Iterator
    static $gtype: GObject.Type
}
export interface BidirList_ConstructProps extends List_ConstructProps {
}
export class BidirList {
    /* Properties of Gee-0.8.Gee.BidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee-0.8.Gee.List */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee-0.8.Gee.List */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.Collection */
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirList */
    bidir_list_iterator(): BidirListIterator
    get_read_only_view(): BidirList
    /* Methods of Gee-0.8.Gee.List */
    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insert_all(index: number, collection: Collection): void
    sort(compare_func: GLib.CompareDataFunc | null): void
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.List */
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.Collection */
    get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.BidirList */
    vfunc_bidir_list_iterator(): BidirListIterator
    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.List */
    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of Gee-0.8.Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee-0.8.Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BidirList_ConstructProps)
    _init (config?: BidirList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface BidirListIterator_ConstructProps extends BidirIterator_ConstructProps {
}
export class BidirListIterator {
    /* Properties of Gee-0.8.Gee.Iterator */
    readonly valid: boolean
    readonly read_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirListIterator */
    insert(item?: object | null): void
    /* Methods of Gee-0.8.Gee.BidirIterator */
    previous(): boolean
    has_previous(): boolean
    first(): boolean
    last(): boolean
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    has_next(): boolean
    get(): object | null
    remove(): void
    get_valid(): boolean
    get_read_only(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.BidirListIterator */
    vfunc_insert(item?: object | null): void
    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_first(): boolean
    vfunc_last(): boolean
    /* Virtual methods of Gee-0.8.Gee.BidirIterator */
    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_first(): boolean
    vfunc_last(): boolean
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of Gee-0.8.Gee.Iterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly read_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirMapIterator */
    previous(): boolean
    has_previous(): boolean
    first(): boolean
    last(): boolean
    /* Methods of Gee-0.8.Gee.MapIterator */
    next(): boolean
    has_next(): boolean
    get_key(): object | null
    get_value(): object | null
    set_value(value?: object | null): void
    unset(): void
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, seed?: object | null): object | null
    foreach(f: ForallMapFunc): boolean
    get_valid(): boolean
    get_mutable(): boolean
    get_read_only(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.BidirMapIterator */
    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_first(): boolean
    vfunc_last(): boolean
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get_key(): object | null
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_unset(): void
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, seed?: object | null): object | null
    vfunc_foreach(f: ForallMapFunc): boolean
    vfunc_get_valid(): boolean
    vfunc_get_mutable(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of Gee-0.8.Gee.MapIterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get_key(): object | null
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_unset(): void
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, seed?: object | null): object | null
    vfunc_foreach(f: ForallMapFunc): boolean
    vfunc_get_valid(): boolean
    vfunc_get_mutable(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mutable", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BidirMapIterator_ConstructProps)
    _init (config?: BidirMapIterator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BidirSortedSet_ConstructProps extends SortedSet_ConstructProps {
}
export class BidirSortedSet {
    /* Properties of Gee-0.8.Gee.BidirSortedSet */
    readonly read_only_view: BidirSortedSet
    /* Properties of Gee-0.8.Gee.SortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee-0.8.Gee.Set */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee-0.8.Gee.SortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee-0.8.Gee.Set */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.Collection */
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirSortedSet */
    bidir_iterator(): BidirIterator
    get_read_only_view(): BidirSortedSet
    /* Methods of Gee-0.8.Gee.SortedSet */
    first(): object | null
    last(): object | null
    iterator_at(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    head_set(before?: object | null): SortedSet
    tail_set(after?: object | null): SortedSet
    sub_set(from?: object | null, to?: object | null): SortedSet
    get_read_only_view(): SortedSet
    /* Methods of Gee-0.8.Gee.Set */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.SortedSet */
    get_read_only_view(): SortedSet
    /* Methods of Gee-0.8.Gee.Set */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.BidirSortedSet */
    vfunc_bidir_iterator(): BidirIterator
    vfunc_get_read_only_view(): BidirSortedSet
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_lower(element?: object | null): object | null
    vfunc_higher(element?: object | null): object | null
    vfunc_floor(element?: object | null): object | null
    vfunc_ceil(element?: object | null): object | null
    vfunc_head_set(before?: object | null): SortedSet
    vfunc_tail_set(after?: object | null): SortedSet
    vfunc_sub_set(from?: object | null, to?: object | null): SortedSet
    /* Virtual methods of Gee-0.8.Gee.SortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_lower(element?: object | null): object | null
    vfunc_higher(element?: object | null): object | null
    vfunc_floor(element?: object | null): object | null
    vfunc_ceil(element?: object | null): object | null
    vfunc_head_set(before?: object | null): SortedSet
    vfunc_tail_set(after?: object | null): SortedSet
    vfunc_sub_set(from?: object | null, to?: object | null): SortedSet
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.Set */
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of Gee-0.8.Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee-0.8.Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BidirSortedSet_ConstructProps)
    _init (config?: BidirSortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): BidirSortedSet
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface BidirSortedMap_ConstructProps extends SortedMap_ConstructProps {
}
export class BidirSortedMap {
    /* Properties of Gee-0.8.Gee.BidirSortedMap */
    readonly read_only_view: BidirSortedMap
    /* Properties of Gee-0.8.Gee.SortedMap */
    readonly ascending_keys: SortedSet
    readonly ascending_entries: SortedSet
    readonly read_only_view: SortedMap
    /* Properties of Gee-0.8.Gee.Map */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Properties of Gee-0.8.Gee.SortedMap */
    readonly read_only_view: SortedMap
    /* Properties of Gee-0.8.Gee.Map */
    readonly read_only_view: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.BidirSortedMap */
    bidir_map_iterator(): BidirMapIterator
    get_read_only_view(): BidirSortedMap
    /* Methods of Gee-0.8.Gee.SortedMap */
    head_map(before?: object | null): SortedMap
    tail_map(after?: object | null): SortedMap
    sub_map(before?: object | null, after?: object | null): SortedMap
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet
    get_read_only_view(): SortedMap
    /* Methods of Gee-0.8.Gee.Map */
    has_key(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    clear(): void
    map_iterator(): MapIterator
    set_all(map: Map): void
    unset_all(map: Map): boolean
    remove_all(map: Map): boolean
    has_all(map: Map): boolean
    contains_all(map: Map): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_keys(): Set
    get_values(): Collection
    get_entries(): Set
    get_read_only_view(): Map
    get_key_type(): GObject.Type
    get_value_type(): GObject.Type
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.SortedMap */
    get_read_only_view(): SortedMap
    /* Methods of Gee-0.8.Gee.Map */
    get_read_only_view(): Map
    /* Virtual methods of Gee-0.8.Gee.BidirSortedMap */
    vfunc_bidir_map_iterator(): BidirMapIterator
    vfunc_get_read_only_view(): BidirSortedMap
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    vfunc_head_map(before?: object | null): SortedMap
    vfunc_tail_map(after?: object | null): SortedMap
    vfunc_sub_map(before?: object | null, after?: object | null): SortedMap
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet
    /* Virtual methods of Gee-0.8.Gee.SortedMap */
    vfunc_head_map(before?: object | null): SortedMap
    vfunc_tail_map(after?: object | null): SortedMap
    vfunc_sub_map(before?: object | null, after?: object | null): SortedMap
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    /* Virtual methods of Gee-0.8.Gee.Map */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    vfunc_get_read_only_view(): Map
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BidirSortedMap_ConstructProps)
    _init (config?: BidirSortedMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): BidirSortedMap
    static empty(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
    static $gtype: GObject.Type
}
export interface Collection_ConstructProps extends Iterable_ConstructProps {
}
export class Collection {
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee-0.8.Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Collection_ConstructProps)
    _init (config?: Collection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface Comparable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Comparable {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Comparable */
    compare_to(object?: object | null): number
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Comparable */
    vfunc_compare_to(object?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Comparable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Comparable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Deque */
    offer_head(element?: object | null): boolean
    peek_head(): object | null
    poll_head(): object | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element?: object | null): boolean
    peek_tail(): object | null
    poll_tail(): object | null
    drain_tail(recipient: Collection, amount: number): number
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    get_capacity(): number
    get_remaining_capacity(): number
    get_is_full(): boolean
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Deque */
    vfunc_offer_head(element?: object | null): boolean
    vfunc_peek_head(): object | null
    vfunc_poll_head(): object | null
    vfunc_drain_head(recipient: Collection, amount: number): number
    vfunc_offer_tail(element?: object | null): boolean
    vfunc_peek_tail(): object | null
    vfunc_poll_tail(): object | null
    vfunc_drain_tail(recipient: Collection, amount: number): number
    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number
    vfunc_get_capacity(): number
    vfunc_get_remaining_capacity(): number
    vfunc_get_is_full(): boolean
    /* Virtual methods of Gee-0.8.Gee.Queue */
    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number
    vfunc_get_capacity(): number
    vfunc_get_remaining_capacity(): number
    vfunc_get_is_full(): boolean
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee-0.8.Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-full", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Future */
    wait(): object | null
    wait_until(end_time: number): [ /* returnType */ boolean, /* value */ object | null ]
    wait_async(_callback_?: Gio.AsyncReadyCallback | null): void
    wait_finish(_res_: Gio.AsyncResult): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    light_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    light_map_broken(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    zip(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.Type, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Future): Future
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    get_value(): object | null
    get_ready(): boolean
    get_exception(): GLib.Error | null
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Future */
    vfunc_wait(): object | null
    vfunc_wait_until(end_time: number): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_wait_async(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_wait_finish(_res_: Gio.AsyncResult): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    vfunc_light_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    vfunc_light_map_broken(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    vfunc_zip(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.Type, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Future): Future
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    vfunc_get_value(): object | null
    vfunc_get_ready(): boolean
    vfunc_get_exception(): GLib.Error | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ready", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::exception", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exception", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Future_ConstructProps)
    _init (config?: Future_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Hashable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Hashable {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Hashable */
    hash(): number
    equal_to(object?: object | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Hashable */
    vfunc_hash(): number
    vfunc_equal_to(object?: object | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Hashable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hashable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Hashable_ConstructProps)
    _init (config?: Hashable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Iterable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Iterable {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Iterable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Iterable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly read_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    has_next(): boolean
    get(): object | null
    remove(): void
    get_valid(): boolean
    get_read_only(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Iterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Iterator_ConstructProps)
    _init (config?: Iterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unfold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: UnfoldFunc, current?: Lazy | null): Iterator
    static concat(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iters: Iterator): Iterator
    static $gtype: GObject.Type
}
export interface List_ConstructProps extends Collection_ConstructProps {
}
export class List {
    /* Properties of Gee-0.8.Gee.List */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.List */
    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insert_all(index: number, collection: Collection): void
    sort(compare_func: GLib.CompareDataFunc | null): void
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.List */
    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of Gee-0.8.Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee-0.8.Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: List_ConstructProps)
    _init (config?: List_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface ListIterator_ConstructProps extends Iterator_ConstructProps {
}
export class ListIterator {
    /* Properties of Gee-0.8.Gee.Iterator */
    readonly valid: boolean
    readonly read_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.ListIterator */
    set(item?: object | null): void
    add(item?: object | null): void
    index(): number
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    has_next(): boolean
    get(): object | null
    remove(): void
    get_valid(): boolean
    get_read_only(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.ListIterator */
    vfunc_set(item?: object | null): void
    vfunc_add(item?: object | null): void
    vfunc_index(): number
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of Gee-0.8.Gee.Iterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ListIterator_ConstructProps)
    _init (config?: ListIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unfold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: UnfoldFunc, current?: Lazy | null): Iterator
    static concat(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iters: Iterator): Iterator
    static $gtype: GObject.Type
}
export interface Map_ConstructProps extends GObject.Object_ConstructProps {
}
export class Map {
    /* Properties of Gee-0.8.Gee.Map */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Map */
    has_key(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    clear(): void
    map_iterator(): MapIterator
    set_all(map: Map): void
    unset_all(map: Map): boolean
    remove_all(map: Map): boolean
    has_all(map: Map): boolean
    contains_all(map: Map): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_keys(): Set
    get_values(): Collection
    get_entries(): Set
    get_read_only_view(): Map
    get_key_type(): GObject.Type
    get_value_type(): GObject.Type
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Map */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    vfunc_get_read_only_view(): Map
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Map_ConstructProps)
    _init (config?: Map_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
    static $gtype: GObject.Type
}
export interface MapIterator_ConstructProps extends GObject.Object_ConstructProps {
}
export class MapIterator {
    /* Properties of Gee-0.8.Gee.MapIterator */
    readonly valid: boolean
    readonly mutable: boolean
    readonly read_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.MapIterator */
    next(): boolean
    has_next(): boolean
    get_key(): object | null
    get_value(): object | null
    set_value(value?: object | null): void
    unset(): void
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, seed?: object | null): object | null
    foreach(f: ForallMapFunc): boolean
    get_valid(): boolean
    get_mutable(): boolean
    get_read_only(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.MapIterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get_key(): object | null
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_unset(): void
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, seed?: object | null): object | null
    vfunc_foreach(f: ForallMapFunc): boolean
    vfunc_get_valid(): boolean
    vfunc_get_mutable(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mutable", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly read_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.MultiMap */
    get_keys(): Set
    get_all_keys(): MultiSet
    get_values(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    remove_all(key?: object | null): boolean
    clear(): void
    map_iterator(): MapIterator
    get_size(): number
    get_read_only(): boolean
    get_key_type(): GObject.Type
    get_value_type(): GObject.Type
    get_read_only_view(): MultiMap
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.MultiMap */
    vfunc_get_keys(): Set
    vfunc_get_all_keys(): MultiSet
    vfunc_get_values(): Collection
    vfunc_contains(key?: object | null): boolean
    vfunc_get(key?: object | null): Collection
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_remove(key?: object | null, value?: object | null): boolean
    vfunc_remove_all(key?: object | null): boolean
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): MultiMap
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.MultiSet */
    count(item?: object | null): number
    get_read_only_view(): MultiSet
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.MultiSet */
    vfunc_count(item?: object | null): number
    vfunc_get_read_only_view(): MultiSet
    vfunc_get_read_only_view(): Collection
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of Gee-0.8.Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee-0.8.Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MultiSet_ConstructProps)
    _init (config?: MultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface Queue_ConstructProps extends Collection_ConstructProps {
}
export class Queue {
    /* Properties of Gee-0.8.Gee.Queue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    get_capacity(): number
    get_remaining_capacity(): number
    get_is_full(): boolean
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Queue */
    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number
    vfunc_get_capacity(): number
    vfunc_get_remaining_capacity(): number
    vfunc_get_is_full(): boolean
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee-0.8.Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-full", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Queue_ConstructProps)
    _init (config?: Queue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface Set_ConstructProps extends Collection_ConstructProps {
}
export class Set {
    /* Properties of Gee-0.8.Gee.Set */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Set */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Set */
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of Gee-0.8.Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee-0.8.Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Set_ConstructProps)
    _init (config?: Set_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface SortedMap_ConstructProps extends Map_ConstructProps {
}
export class SortedMap {
    /* Properties of Gee-0.8.Gee.SortedMap */
    readonly ascending_keys: SortedSet
    readonly ascending_entries: SortedSet
    readonly read_only_view: SortedMap
    /* Properties of Gee-0.8.Gee.Map */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.SortedMap */
    head_map(before?: object | null): SortedMap
    tail_map(after?: object | null): SortedMap
    sub_map(before?: object | null, after?: object | null): SortedMap
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet
    get_read_only_view(): SortedMap
    /* Methods of Gee-0.8.Gee.Map */
    has_key(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    clear(): void
    map_iterator(): MapIterator
    set_all(map: Map): void
    unset_all(map: Map): boolean
    remove_all(map: Map): boolean
    has_all(map: Map): boolean
    contains_all(map: Map): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_keys(): Set
    get_values(): Collection
    get_entries(): Set
    get_read_only_view(): Map
    get_key_type(): GObject.Type
    get_value_type(): GObject.Type
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.SortedMap */
    vfunc_head_map(before?: object | null): SortedMap
    vfunc_tail_map(after?: object | null): SortedMap
    vfunc_sub_map(before?: object | null, after?: object | null): SortedMap
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    /* Virtual methods of Gee-0.8.Gee.Map */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    vfunc_get_read_only_view(): Map
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ascending-keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SortedMap_ConstructProps)
    _init (config?: SortedMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
    static $gtype: GObject.Type
}
export interface SortedSet_ConstructProps extends Set_ConstructProps {
}
export class SortedSet {
    /* Properties of Gee-0.8.Gee.SortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee-0.8.Gee.Set */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.Collection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee-0.8.Gee.Set */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.Collection */
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.SortedSet */
    first(): object | null
    last(): object | null
    iterator_at(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    head_set(before?: object | null): SortedSet
    tail_set(after?: object | null): SortedSet
    sub_set(from?: object | null, to?: object | null): SortedSet
    get_read_only_view(): SortedSet
    /* Methods of Gee-0.8.Gee.Set */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.Set */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.SortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_lower(element?: object | null): object | null
    vfunc_higher(element?: object | null): object | null
    vfunc_floor(element?: object | null): object | null
    vfunc_ceil(element?: object | null): object | null
    vfunc_head_set(before?: object | null): SortedSet
    vfunc_tail_set(after?: object | null): SortedSet
    vfunc_sub_set(from?: object | null, to?: object | null): SortedSet
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.Set */
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of Gee-0.8.Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee-0.8.Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SortedSet_ConstructProps)
    _init (config?: SortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface Traversable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Traversable {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    filter(pred: Predicate): Iterator
    chop(offset: number, length: number): Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    tee(forks: number): Iterator[]
    first_match(pred: Predicate): object | null
    any_match(pred: Predicate): boolean
    all_match(pred: Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Iterator
    get_element_type(): GObject.Type
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.Traversable */
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Traversable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Traversable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Traversable_ConstructProps)
    _init (config?: Traversable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractBidirList_ConstructProps extends AbstractList_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class AbstractBidirList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee-0.8.Gee.AbstractList */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee-0.8.Gee.BidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee-0.8.Gee.List */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.Collection */
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): BidirListIterator
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
    get_read_only_view(): BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): List | null
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.BidirList */
    get_read_only_view(): BidirList
    /* Methods of Gee-0.8.Gee.List */
    first(): object | null
    last(): object | null
    insert_all(index: number, collection: Collection): void
    sort(compare_func: GLib.CompareDataFunc | null): void
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_is_empty(): boolean
    get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractBidirList_ConstructProps)
    _init (config?: AbstractBidirList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractBidirSortedSet_ConstructProps extends AbstractSortedSet_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class AbstractBidirSortedSet {
    /* Properties of Gee-0.8.Gee.AbstractBidirSortedSet */
    readonly read_only_view: BidirSortedSet
    /* Properties of Gee-0.8.Gee.AbstractSortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractSet */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee-0.8.Gee.BidirSortedSet */
    readonly read_only_view: BidirSortedSet
    /* Properties of Gee-0.8.Gee.SortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee-0.8.Gee.Set */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.Collection */
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedSet */
    bidir_iterator(): BidirIterator
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
    get_read_only_view(): BidirSortedSet
    /* Methods of Gee-0.8.Gee.AbstractSortedSet */
    first(): object | null
    last(): object | null
    iterator_at(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    head_set(before?: object | null): SortedSet
    tail_set(after?: object | null): SortedSet
    sub_set(from?: object | null, to?: object | null): SortedSet
    get_read_only_view(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractSet */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.BidirSortedSet */
    get_read_only_view(): BidirSortedSet
    /* Methods of Gee-0.8.Gee.SortedSet */
    get_read_only_view(): SortedSet
    /* Methods of Gee-0.8.Gee.Set */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_is_empty(): boolean
    get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirSortedSet */
    vfunc_bidir_iterator(): BidirIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirSortedSet
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractSortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_lower(element?: object | null): object | null
    vfunc_higher(element?: object | null): object | null
    vfunc_floor(element?: object | null): object | null
    vfunc_ceil(element?: object | null): object | null
    vfunc_head_set(before?: object | null): SortedSet
    vfunc_tail_set(after?: object | null): SortedSet
    vfunc_sub_set(from?: object | null, to?: object | null): SortedSet
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractSet */
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractBidirSortedSet_ConstructProps)
    _init (config?: AbstractBidirSortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): BidirSortedSet
    static $gtype: GObject.Type
}
export interface AbstractBidirSortedMap_ConstructProps extends AbstractSortedMap_ConstructProps {
    k_type?: GObject.Type
    k_dup_func?: GObject.BoxedCopyFunc
    k_destroy_func?: GLib.DestroyNotify
    v_type?: GObject.Type
    v_dup_func?: GObject.BoxedCopyFunc
    v_destroy_func?: GLib.DestroyNotify
}
export class AbstractBidirSortedMap {
    /* Properties of Gee-0.8.Gee.AbstractBidirSortedMap */
    readonly read_only_view: BidirSortedMap
    /* Properties of Gee-0.8.Gee.AbstractSortedMap */
    readonly ascending_keys: SortedSet
    readonly ascending_entries: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Properties of Gee-0.8.Gee.BidirSortedMap */
    readonly read_only_view: BidirSortedMap
    /* Properties of Gee-0.8.Gee.SortedMap */
    readonly read_only_view: SortedMap
    /* Properties of Gee-0.8.Gee.Map */
    readonly read_only_view: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedMap */
    bidir_map_iterator(): BidirMapIterator
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
    get_read_only_view(): BidirSortedMap
    /* Methods of Gee-0.8.Gee.AbstractSortedMap */
    head_map(before?: object | null): SortedMap
    tail_map(after?: object | null): SortedMap
    sub_map(before?: object | null, after?: object | null): SortedMap
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    get_size(): number
    get_read_only(): boolean
    get_keys(): Set
    get_values(): Collection
    get_entries(): Set
    get_read_only_view(): Map
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.BidirSortedMap */
    get_read_only_view(): BidirSortedMap
    /* Methods of Gee-0.8.Gee.SortedMap */
    get_read_only_view(): SortedMap
    /* Methods of Gee-0.8.Gee.Map */
    contains(key?: object | null): boolean
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    set_all(map: Map): void
    unset_all(map: Map): boolean
    remove_all(map: Map): boolean
    has_all(map: Map): boolean
    contains_all(map: Map): boolean
    get_is_empty(): boolean
    get_read_only_view(): Map
    get_key_type(): GObject.Type
    get_value_type(): GObject.Type
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirSortedMap */
    vfunc_bidir_map_iterator(): BidirMapIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirSortedMap
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    /* Virtual methods of Gee-0.8.Gee.AbstractSortedMap */
    vfunc_head_map(before?: object | null): SortedMap
    vfunc_tail_map(after?: object | null): SortedMap
    vfunc_sub_map(before?: object | null, after?: object | null): SortedMap
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    /* Virtual methods of Gee-0.8.Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    vfunc_get_read_only_view(): Map
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Iterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractBidirSortedMap_ConstructProps)
    _init (config?: AbstractBidirSortedMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): BidirSortedMap
    static $gtype: GObject.Type
}
export interface AbstractCollection_ConstructProps extends GObject.Object_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class AbstractCollection {
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.Traversable */
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    filter(pred: Predicate): Iterator
    chop(offset: number, length: number): Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    tee(forks: number): Iterator[]
    first_match(pred: Predicate): object | null
    any_match(pred: Predicate): boolean
    all_match(pred: Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Iterator
    get_element_type(): GObject.Type
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_is_empty(): boolean
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractCollection_ConstructProps)
    _init (config?: AbstractCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static $gtype: GObject.Type
}
export interface AbstractList_ConstructProps extends AbstractCollection_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class AbstractList {
    /* Properties of Gee-0.8.Gee.AbstractList */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee-0.8.Gee.List */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.Collection */
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
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
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.List */
    first(): object | null
    last(): object | null
    insert_all(index: number, collection: Collection): void
    sort(compare_func: GLib.CompareDataFunc | null): void
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_is_empty(): boolean
    get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractList_ConstructProps)
    _init (config?: AbstractList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List
    static $gtype: GObject.Type
}
export interface AbstractMap_ConstructProps extends GObject.Object_ConstructProps {
    k_type?: GObject.Type
    k_dup_func?: GObject.BoxedCopyFunc
    k_destroy_func?: GLib.DestroyNotify
    v_type?: GObject.Type
    v_dup_func?: GObject.BoxedCopyFunc
    v_destroy_func?: GLib.DestroyNotify
}
export class AbstractMap {
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
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
    get_size(): number
    get_read_only(): boolean
    get_keys(): Set
    get_values(): Collection
    get_entries(): Set
    get_read_only_view(): Map
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.Traversable */
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    filter(pred: Predicate): Iterator
    chop(offset: number, length: number): Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    tee(forks: number): Iterator[]
    first_match(pred: Predicate): object | null
    any_match(pred: Predicate): boolean
    all_match(pred: Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Iterator
    get_element_type(): GObject.Type
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Iterator
    /* Methods of Gee-0.8.Gee.Map */
    contains(key?: object | null): boolean
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    set_all(map: Map): void
    unset_all(map: Map): boolean
    remove_all(map: Map): boolean
    has_all(map: Map): boolean
    contains_all(map: Map): boolean
    get_is_empty(): boolean
    get_key_type(): GObject.Type
    get_value_type(): GObject.Type
    /* Virtual methods of Gee-0.8.Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    vfunc_get_read_only_view(): Map
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Iterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractMap_ConstructProps)
    _init (config?: AbstractMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
    static $gtype: GObject.Type
}
export interface AbstractMultiMap_ConstructProps extends GObject.Object_ConstructProps {
    k_type?: GObject.Type
    k_dup_func?: GObject.BoxedCopyFunc
    k_destroy_func?: GLib.DestroyNotify
    v_type?: GObject.Type
    v_dup_func?: GObject.BoxedCopyFunc
    v_destroy_func?: GLib.DestroyNotify
}
export class AbstractMultiMap {
    /* Properties of Gee-0.8.Gee.MultiMap */
    readonly size: number
    readonly read_only: boolean
    /* Fields of Gee-0.8.Gee.AbstractMultiMap */
    _storage_map: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractMultiMap */
    create_value_storage(): Collection
    create_multi_key_set(): MultiSet
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    get_read_only_view(): MultiMap
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.MultiMap */
    get_keys(): Set
    get_all_keys(): MultiSet
    get_values(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    remove_all(key?: object | null): boolean
    clear(): void
    map_iterator(): MapIterator
    get_size(): number
    get_read_only(): boolean
    get_key_type(): GObject.Type
    get_value_type(): GObject.Type
    /* Virtual methods of Gee-0.8.Gee.AbstractMultiMap */
    vfunc_create_value_storage(): Collection
    vfunc_create_multi_key_set(): MultiSet
    vfunc_get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_get_read_only_view(): MultiMap
    vfunc_get_keys(): Set
    vfunc_get_all_keys(): MultiSet
    vfunc_get_values(): Collection
    vfunc_contains(key?: object | null): boolean
    vfunc_get(key?: object | null): Collection
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_remove(key?: object | null, value?: object | null): boolean
    vfunc_remove_all(key?: object | null): boolean
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractMultiMap_ConstructProps)
    _init (config?: AbstractMultiMap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractMultiSet_ConstructProps extends AbstractCollection_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class AbstractMultiSet {
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of Gee-0.8.Gee.AbstractMultiSet */
    _storage_map: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    get_read_only_view(): MultiSet
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    reserved9(): void
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.MultiSet */
    count(item?: object | null): number
    get_read_only_view(): MultiSet
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_is_empty(): boolean
    get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractMultiSet */
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_get_read_only_view(): MultiSet
    vfunc_get_read_only_view(): Collection
    vfunc_count(item?: object | null): number
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractMultiSet_ConstructProps)
    _init (config?: AbstractMultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static $gtype: GObject.Type
}
export interface AbstractQueue_ConstructProps extends AbstractCollection_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class AbstractQueue {
    /* Properties of Gee-0.8.Gee.AbstractQueue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    get_capacity(): number
    get_remaining_capacity(): number
    get_is_full(): boolean
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_is_empty(): boolean
    /* Virtual methods of Gee-0.8.Gee.AbstractQueue */
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_capacity(): number
    vfunc_get_remaining_capacity(): number
    vfunc_get_is_full(): boolean
    vfunc_offer(element?: object | null): boolean
    vfunc_drain(recipient: Collection, amount: number): number
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-full", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractQueue_ConstructProps)
    _init (config?: AbstractQueue_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractSet_ConstructProps extends AbstractCollection_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class AbstractSet {
    /* Properties of Gee-0.8.Gee.AbstractSet */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee-0.8.Gee.Set */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.Collection */
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.Set */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_is_empty(): boolean
    get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractSet */
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractSet_ConstructProps)
    _init (config?: AbstractSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static $gtype: GObject.Type
}
export interface AbstractSortedMap_ConstructProps extends AbstractMap_ConstructProps {
    k_type?: GObject.Type
    k_dup_func?: GObject.BoxedCopyFunc
    k_destroy_func?: GLib.DestroyNotify
    v_type?: GObject.Type
    v_dup_func?: GObject.BoxedCopyFunc
    v_destroy_func?: GLib.DestroyNotify
}
export class AbstractSortedMap {
    /* Properties of Gee-0.8.Gee.AbstractSortedMap */
    readonly ascending_keys: SortedSet
    readonly ascending_entries: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Properties of Gee-0.8.Gee.SortedMap */
    readonly read_only_view: SortedMap
    /* Properties of Gee-0.8.Gee.Map */
    readonly read_only_view: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractSortedMap */
    head_map(before?: object | null): SortedMap
    tail_map(after?: object | null): SortedMap
    sub_map(before?: object | null, after?: object | null): SortedMap
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
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    get_size(): number
    get_read_only(): boolean
    get_keys(): Set
    get_values(): Collection
    get_entries(): Set
    get_read_only_view(): Map
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.SortedMap */
    get_read_only_view(): SortedMap
    /* Methods of Gee-0.8.Gee.Map */
    contains(key?: object | null): boolean
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    set_all(map: Map): void
    unset_all(map: Map): boolean
    remove_all(map: Map): boolean
    has_all(map: Map): boolean
    contains_all(map: Map): boolean
    get_is_empty(): boolean
    get_read_only_view(): Map
    get_key_type(): GObject.Type
    get_value_type(): GObject.Type
    /* Virtual methods of Gee-0.8.Gee.AbstractSortedMap */
    vfunc_head_map(before?: object | null): SortedMap
    vfunc_tail_map(after?: object | null): SortedMap
    vfunc_sub_map(before?: object | null, after?: object | null): SortedMap
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    /* Virtual methods of Gee-0.8.Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    vfunc_get_read_only_view(): Map
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Iterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ascending-keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractSortedMap_ConstructProps)
    _init (config?: AbstractSortedMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
    static $gtype: GObject.Type
}
export interface AbstractSortedSet_ConstructProps extends AbstractSet_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class AbstractSortedSet {
    /* Properties of Gee-0.8.Gee.AbstractSortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractSet */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee-0.8.Gee.SortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee-0.8.Gee.Set */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.Collection */
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractSortedSet */
    first(): object | null
    last(): object | null
    iterator_at(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    head_set(before?: object | null): SortedSet
    tail_set(after?: object | null): SortedSet
    sub_set(from?: object | null, to?: object | null): SortedSet
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
    get_read_only_view(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractSet */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.SortedSet */
    get_read_only_view(): SortedSet
    /* Methods of Gee-0.8.Gee.Set */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_is_empty(): boolean
    get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractSortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_lower(element?: object | null): object | null
    vfunc_higher(element?: object | null): object | null
    vfunc_floor(element?: object | null): object | null
    vfunc_ceil(element?: object | null): object | null
    vfunc_head_set(before?: object | null): SortedSet
    vfunc_tail_set(after?: object | null): SortedSet
    vfunc_sub_set(from?: object | null, to?: object | null): SortedSet
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractSet */
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractSortedSet_ConstructProps)
    _init (config?: AbstractSortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet
    static $gtype: GObject.Type
}
export interface ArrayList_ConstructProps extends AbstractBidirList_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class ArrayList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee-0.8.Gee.AbstractList */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of Gee-0.8.Gee.ArrayList */
    _items: object[]
    _items_length1: number
    _size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.ArrayList */
    add_all(collection: Collection): boolean
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): BidirListIterator
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
    get_read_only_view(): BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): List | null
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.ArrayList */
    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ArrayList_ConstructProps)
    _init (config?: ArrayList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null): ArrayList
    static wrap(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, items: object[], equal_func: EqualDataFunc | null): ArrayList
    static $gtype: GObject.Type
}
export interface ArrayQueue_ConstructProps extends AbstractQueue_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class ArrayQueue {
    /* Properties of Gee-0.8.Gee.ArrayQueue */
    readonly is_empty: boolean
    /* Properties of Gee-0.8.Gee.AbstractQueue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.ArrayQueue */
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    get_is_empty(): boolean
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
    get_capacity(): number
    get_remaining_capacity(): number
    get_is_full(): boolean
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.Deque */
    offer_head(element?: object | null): boolean
    peek_head(): object | null
    poll_head(): object | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element?: object | null): boolean
    peek_tail(): object | null
    poll_tail(): object | null
    drain_tail(recipient: Collection, amount: number): number
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    /* Virtual methods of Gee-0.8.Gee.ArrayQueue */
    vfunc_offer_head(element?: object | null): boolean
    vfunc_peek_head(): object | null
    vfunc_poll_head(): object | null
    vfunc_drain_head(recipient: Collection, amount: number): number
    vfunc_offer_tail(element?: object | null): boolean
    vfunc_peek_tail(): object | null
    vfunc_poll_tail(): object | null
    vfunc_drain_tail(recipient: Collection, amount: number): number
    /* Virtual methods of Gee-0.8.Gee.AbstractQueue */
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_capacity(): number
    vfunc_get_remaining_capacity(): number
    vfunc_get_is_full(): boolean
    vfunc_offer(element?: object | null): boolean
    vfunc_drain(recipient: Collection, amount: number): number
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-empty", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-full", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ArrayQueue_ConstructProps)
    _init (config?: ArrayQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null): ArrayQueue
    static $gtype: GObject.Type
}
export interface ConcurrentList_ConstructProps extends AbstractList_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class ConcurrentList {
    /* Properties of Gee-0.8.Gee.ConcurrentList */
    readonly is_empty: boolean
    /* Properties of Gee-0.8.Gee.AbstractList */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.ConcurrentList */
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    get_is_empty(): boolean
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
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
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.ConcurrentList */
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-empty", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConcurrentList_ConstructProps)
    _init (config?: ConcurrentList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null): ConcurrentList
    static $gtype: GObject.Type
}
export interface ConcurrentSet_ConstructProps extends AbstractSortedSet_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class ConcurrentSet {
    /* Properties of Gee-0.8.Gee.AbstractSortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractSet */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractSortedSet */
    first(): object | null
    last(): object | null
    iterator_at(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    head_set(before?: object | null): SortedSet
    tail_set(after?: object | null): SortedSet
    sub_set(from?: object | null, to?: object | null): SortedSet
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
    get_read_only_view(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractSet */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.ConcurrentSet */
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractSortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_lower(element?: object | null): object | null
    vfunc_higher(element?: object | null): object | null
    vfunc_floor(element?: object | null): object | null
    vfunc_ceil(element?: object | null): object | null
    vfunc_head_set(before?: object | null): SortedSet
    vfunc_tail_set(after?: object | null): SortedSet
    vfunc_sub_set(from?: object | null, to?: object | null): SortedSet
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractSet */
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConcurrentSet_ConstructProps)
    _init (config?: ConcurrentSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): ConcurrentSet
    static $gtype: GObject.Type
}
export interface HashMap_ConstructProps extends AbstractMap_ConstructProps {
    k_type?: GObject.Type
    k_dup_func?: GObject.BoxedCopyFunc
    k_destroy_func?: GLib.DestroyNotify
    v_type?: GObject.Type
    v_dup_func?: GObject.BoxedCopyFunc
    v_destroy_func?: GLib.DestroyNotify
}
export class HashMap {
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.HashMap */
    get_key_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ object | null ]
    get_key_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
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
    get_size(): number
    get_read_only(): boolean
    get_keys(): Set
    get_values(): Collection
    get_entries(): Set
    get_read_only_view(): Map
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    vfunc_get_read_only_view(): Map
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Iterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HashMap_ConstructProps)
    _init (config?: HashMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: HashDataFunc | null, key_equal_func: EqualDataFunc | null, value_equal_func: EqualDataFunc | null): HashMap
    static $gtype: GObject.Type
}
export interface HashMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {
    k_type?: GObject.Type
    k_dup_func?: GObject.BoxedCopyFunc
    k_destroy_func?: GLib.DestroyNotify
    v_type?: GObject.Type
    v_dup_func?: GObject.BoxedCopyFunc
    v_destroy_func?: GLib.DestroyNotify
}
export class HashMultiMap {
    /* Fields of Gee-0.8.Gee.AbstractMultiMap */
    _storage_map: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.HashMultiMap */
    get_key_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ object | null ]
    get_key_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    get_value_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractMultiMap */
    create_value_storage(): Collection
    create_multi_key_set(): MultiSet
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    get_read_only_view(): MultiMap
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.AbstractMultiMap */
    vfunc_create_value_storage(): Collection
    vfunc_create_multi_key_set(): MultiSet
    vfunc_get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_get_read_only_view(): MultiMap
    vfunc_get_keys(): Set
    vfunc_get_all_keys(): MultiSet
    vfunc_get_values(): Collection
    vfunc_contains(key?: object | null): boolean
    vfunc_get(key?: object | null): Collection
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_remove(key?: object | null, value?: object | null): boolean
    vfunc_remove_all(key?: object | null): boolean
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HashMultiMap_ConstructProps)
    _init (config?: HashMultiMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: HashDataFunc | null, key_equal_func: EqualDataFunc | null, value_hash_func: HashDataFunc | null, value_equal_func: EqualDataFunc | null): HashMultiMap
    static $gtype: GObject.Type
}
export interface HashMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class HashMultiSet {
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of Gee-0.8.Gee.AbstractMultiSet */
    _storage_map: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.HashMultiSet */
    get_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ object | null ]
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
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
    get_read_only_view(): MultiSet
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    reserved9(): void
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.HashMultiSet */
    vfunc_get_read_only_view(): MultiSet
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractMultiSet */
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_get_read_only_view(): MultiSet
    vfunc_get_read_only_view(): Collection
    vfunc_count(item?: object | null): number
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HashMultiSet_ConstructProps)
    _init (config?: HashMultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash_func: HashDataFunc | null, equal_func: EqualDataFunc | null): HashMultiSet
    static broken(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash_func?: HashDataFunc | null, equal_func?: EqualDataFunc | null): HashMultiSet
    static $gtype: GObject.Type
}
export interface HashSet_ConstructProps extends AbstractSet_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class HashSet {
    /* Properties of Gee-0.8.Gee.AbstractSet */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.HashSet */
    get_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ object | null ]
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
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
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.HashSet */
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractSet */
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HashSet_ConstructProps)
    _init (config?: HashSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash_func: HashDataFunc | null, equal_func: EqualDataFunc | null): HashSet
    static $gtype: GObject.Type
}
export class Lazy {
    /* Fields of Gee-0.8.Gee.Lazy */
    ref_count: number
    /* Methods of Gee-0.8.Gee.Lazy */
    eval(): void
    get(): object | null
    get_value(): object | null
    get_future(): Future | null
    static name: string
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: LazyFunc): Lazy
    constructor(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: LazyFunc)
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: LazyFunc): Lazy
    static from_value(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, item?: object | null): Lazy
}
export interface LinkedList_ConstructProps extends AbstractBidirList_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class LinkedList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee-0.8.Gee.AbstractList */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee-0.8.Gee.Queue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.LinkedList */
    first(): object | null
    last(): object | null
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): BidirListIterator
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
    get_read_only_view(): BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): List | null
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    get_capacity(): number
    get_remaining_capacity(): number
    get_is_full(): boolean
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_is_empty(): boolean
    /* Methods of Gee-0.8.Gee.Deque */
    offer_head(element?: object | null): boolean
    peek_head(): object | null
    poll_head(): object | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element?: object | null): boolean
    peek_tail(): object | null
    poll_tail(): object | null
    drain_tail(recipient: Collection, amount: number): number
    /* Virtual methods of Gee-0.8.Gee.LinkedList */
    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number
    vfunc_get_capacity(): number
    vfunc_get_remaining_capacity(): number
    vfunc_get_is_full(): boolean
    vfunc_offer_head(element?: object | null): boolean
    vfunc_peek_head(): object | null
    vfunc_poll_head(): object | null
    vfunc_drain_head(recipient: Collection, amount: number): number
    vfunc_offer_tail(element?: object | null): boolean
    vfunc_peek_tail(): object | null
    vfunc_poll_tail(): object | null
    vfunc_drain_tail(recipient: Collection, amount: number): number
    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-full", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LinkedList_ConstructProps)
    _init (config?: LinkedList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null): LinkedList
    static $gtype: GObject.Type
}
export interface PriorityQueue_ConstructProps extends AbstractQueue_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class PriorityQueue {
    /* Properties of Gee-0.8.Gee.AbstractQueue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.PriorityQueue */
    offer(element?: object | null): boolean
    drain(recipient: Collection, amount: number): number
    get_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
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
    get_capacity(): number
    get_remaining_capacity(): number
    get_is_full(): boolean
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.AbstractQueue */
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_capacity(): number
    vfunc_get_remaining_capacity(): number
    vfunc_get_is_full(): boolean
    vfunc_offer(element?: object | null): boolean
    vfunc_drain(recipient: Collection, amount: number): number
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-full", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PriorityQueue_ConstructProps)
    _init (config?: PriorityQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): PriorityQueue
    static $gtype: GObject.Type
}
export class Promise {
    /* Fields of Gee-0.8.Gee.Promise */
    ref_count: number
    /* Methods of Gee-0.8.Gee.Promise */
    set_value(value?: object | null): void
    set_exception(exception: GLib.Error): void
    get_future(): Future
    static name: string
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Promise
    constructor(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Promise
}
export interface TreeMap_ConstructProps extends AbstractBidirSortedMap_ConstructProps {
    k_type?: GObject.Type
    k_dup_func?: GObject.BoxedCopyFunc
    k_destroy_func?: GLib.DestroyNotify
    v_type?: GObject.Type
    v_dup_func?: GObject.BoxedCopyFunc
    v_destroy_func?: GLib.DestroyNotify
}
export class TreeMap {
    /* Properties of Gee-0.8.Gee.AbstractBidirSortedMap */
    readonly read_only_view: BidirSortedMap
    /* Properties of Gee-0.8.Gee.AbstractSortedMap */
    readonly ascending_keys: SortedSet
    readonly ascending_entries: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.TreeMap */
    get_key_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedMap */
    bidir_map_iterator(): BidirMapIterator
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
    get_read_only_view(): BidirSortedMap
    /* Methods of Gee-0.8.Gee.AbstractSortedMap */
    head_map(before?: object | null): SortedMap
    tail_map(after?: object | null): SortedMap
    sub_map(before?: object | null, after?: object | null): SortedMap
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    get_size(): number
    get_read_only(): boolean
    get_keys(): Set
    get_values(): Collection
    get_entries(): Set
    get_read_only_view(): Map
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.TreeMap */
    vfunc_get_read_only_view(): BidirSortedMap
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirSortedMap */
    vfunc_bidir_map_iterator(): BidirMapIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirSortedMap
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    /* Virtual methods of Gee-0.8.Gee.AbstractSortedMap */
    vfunc_head_map(before?: object | null): SortedMap
    vfunc_tail_map(after?: object | null): SortedMap
    vfunc_sub_map(before?: object | null, after?: object | null): SortedMap
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    /* Virtual methods of Gee-0.8.Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    vfunc_get_read_only_view(): Map
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Iterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMap_ConstructProps)
    _init (config?: TreeMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_compare_func: GLib.CompareDataFunc | null, value_equal_func: EqualDataFunc | null): TreeMap
    static $gtype: GObject.Type
}
export interface TreeMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {
    k_type?: GObject.Type
    k_dup_func?: GObject.BoxedCopyFunc
    k_destroy_func?: GLib.DestroyNotify
    v_type?: GObject.Type
    v_dup_func?: GObject.BoxedCopyFunc
    v_destroy_func?: GLib.DestroyNotify
}
export class TreeMultiMap {
    /* Fields of Gee-0.8.Gee.AbstractMultiMap */
    _storage_map: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.TreeMultiMap */
    get_key_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    get_value_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractMultiMap */
    create_value_storage(): Collection
    create_multi_key_set(): MultiSet
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    get_read_only_view(): MultiMap
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.AbstractMultiMap */
    vfunc_create_value_storage(): Collection
    vfunc_create_multi_key_set(): MultiSet
    vfunc_get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_get_read_only_view(): MultiMap
    vfunc_get_keys(): Set
    vfunc_get_all_keys(): MultiSet
    vfunc_get_values(): Collection
    vfunc_contains(key?: object | null): boolean
    vfunc_get(key?: object | null): Collection
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_remove(key?: object | null, value?: object | null): boolean
    vfunc_remove_all(key?: object | null): boolean
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMultiMap_ConstructProps)
    _init (config?: TreeMultiMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_compare_func: GLib.CompareDataFunc | null, value_compare_func: GLib.CompareDataFunc | null): TreeMultiMap
    static $gtype: GObject.Type
}
export interface TreeMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class TreeMultiSet {
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of Gee-0.8.Gee.AbstractMultiSet */
    _storage_map: Map
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.TreeMultiSet */
    get_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
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
    get_read_only_view(): MultiSet
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    reserved9(): void
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.TreeMultiSet */
    vfunc_get_read_only_view(): MultiSet
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractMultiSet */
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_get_read_only_view(): MultiSet
    vfunc_get_read_only_view(): Collection
    vfunc_count(item?: object | null): number
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMultiSet_ConstructProps)
    _init (config?: TreeMultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): TreeMultiSet
    static $gtype: GObject.Type
}
export interface TreeSet_ConstructProps extends AbstractBidirSortedSet_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class TreeSet {
    /* Properties of Gee-0.8.Gee.AbstractBidirSortedSet */
    readonly read_only_view: BidirSortedSet
    /* Properties of Gee-0.8.Gee.AbstractSortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee-0.8.Gee.AbstractSet */
    readonly read_only_view: Set
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.TreeSet */
    get_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedSet */
    bidir_iterator(): BidirIterator
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
    get_read_only_view(): BidirSortedSet
    /* Methods of Gee-0.8.Gee.AbstractSortedSet */
    first(): object | null
    last(): object | null
    iterator_at(element?: object | null): Iterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    head_set(before?: object | null): SortedSet
    tail_set(after?: object | null): SortedSet
    sub_set(from?: object | null, to?: object | null): SortedSet
    get_read_only_view(): SortedSet
    /* Methods of Gee-0.8.Gee.AbstractSet */
    get_read_only_view(): Set
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.TreeSet */
    vfunc_get_read_only_view(): BidirSortedSet
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirSortedSet */
    vfunc_bidir_iterator(): BidirIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirSortedSet
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractSortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_lower(element?: object | null): object | null
    vfunc_higher(element?: object | null): object | null
    vfunc_floor(element?: object | null): object | null
    vfunc_ceil(element?: object | null): object | null
    vfunc_head_set(before?: object | null): SortedSet
    vfunc_tail_set(after?: object | null): SortedSet
    vfunc_sub_set(from?: object | null, to?: object | null): SortedSet
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractSet */
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeSet_ConstructProps)
    _init (config?: TreeSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): TreeSet
    static $gtype: GObject.Type
}
export interface UnrolledLinkedList_ConstructProps extends AbstractBidirList_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class UnrolledLinkedList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee-0.8.Gee.AbstractList */
    readonly read_only_view: List
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee-0.8.Gee.Queue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.UnrolledLinkedList */
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): BidirListIterator
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
    get_read_only_view(): BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): List | null
    get_read_only_view(): List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gee-0.8.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    get_capacity(): number
    get_remaining_capacity(): number
    get_is_full(): boolean
    /* Methods of Gee-0.8.Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    add_all_array(array: object[]): boolean
    contains_all_array(array: object[]): boolean
    remove_all_array(array: object[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_is_empty(): boolean
    /* Methods of Gee-0.8.Gee.Deque */
    offer_head(element?: object | null): boolean
    peek_head(): object | null
    poll_head(): object | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element?: object | null): boolean
    peek_tail(): object | null
    poll_tail(): object | null
    drain_tail(recipient: Collection, amount: number): number
    /* Virtual methods of Gee-0.8.Gee.UnrolledLinkedList */
    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number
    vfunc_get_capacity(): number
    vfunc_get_remaining_capacity(): number
    vfunc_get_is_full(): boolean
    vfunc_offer_head(element?: object | null): boolean
    vfunc_peek_head(): object | null
    vfunc_poll_head(): object | null
    vfunc_drain_head(recipient: Collection, amount: number): number
    vfunc_offer_tail(element?: object | null): boolean
    vfunc_peek_tail(): object | null
    vfunc_poll_tail(): object | null
    vfunc_drain_tail(recipient: Collection, amount: number): number
    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): object | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-full", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnrolledLinkedList_ConstructProps)
    _init (config?: UnrolledLinkedList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null): UnrolledLinkedList
    static $gtype: GObject.Type
}
export interface MapEntry_ConstructProps extends GObject.Object_ConstructProps {
    k_type?: GObject.Type
    k_dup_func?: GObject.BoxedCopyFunc
    k_destroy_func?: GLib.DestroyNotify
    v_type?: GObject.Type
    v_dup_func?: GObject.BoxedCopyFunc
    v_destroy_func?: GLib.DestroyNotify
    value?: object
}
export class MapEntry {
    /* Properties of Gee-0.8.Gee.MapEntry */
    readonly key: object
    value: object
    readonly read_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.MapEntry */
    get_key(): object | null
    get_value(): object | null
    set_value(value?: object | null): void
    get_read_only(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gee-0.8.Gee.MapEntry */
    vfunc_get_key(): object | null
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MapEntry_ConstructProps)
    _init (config?: MapEntry_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AbstractBidirListClass {
    /* Fields of Gee-0.8.Gee.AbstractBidirListClass */
    bidir_list_iterator: (self: AbstractBidirList) => BidirListIterator
    reserved0: (self: AbstractBidirList) => void
    reserved1: (self: AbstractBidirList) => void
    reserved2: (self: AbstractBidirList) => void
    reserved3: (self: AbstractBidirList) => void
    reserved4: (self: AbstractBidirList) => void
    reserved5: (self: AbstractBidirList) => void
    reserved6: (self: AbstractBidirList) => void
    reserved7: (self: AbstractBidirList) => void
    reserved8: (self: AbstractBidirList) => void
    reserved9: (self: AbstractBidirList) => void
    static name: string
}
export class AbstractBidirListPrivate {
    static name: string
}
export abstract class AbstractBidirSortedSetClass {
    /* Fields of Gee-0.8.Gee.AbstractBidirSortedSetClass */
    bidir_iterator: (self: AbstractBidirSortedSet) => BidirIterator
    reserved0: (self: AbstractBidirSortedSet) => void
    reserved1: (self: AbstractBidirSortedSet) => void
    reserved2: (self: AbstractBidirSortedSet) => void
    reserved3: (self: AbstractBidirSortedSet) => void
    reserved4: (self: AbstractBidirSortedSet) => void
    reserved5: (self: AbstractBidirSortedSet) => void
    reserved6: (self: AbstractBidirSortedSet) => void
    reserved7: (self: AbstractBidirSortedSet) => void
    reserved8: (self: AbstractBidirSortedSet) => void
    reserved9: (self: AbstractBidirSortedSet) => void
    static name: string
}
export class AbstractBidirSortedSetPrivate {
    static name: string
}
export abstract class AbstractBidirSortedMapClass {
    /* Fields of Gee-0.8.Gee.AbstractBidirSortedMapClass */
    bidir_map_iterator: (self: AbstractBidirSortedMap) => BidirMapIterator
    reserved0: (self: AbstractBidirSortedMap) => void
    reserved1: (self: AbstractBidirSortedMap) => void
    reserved2: (self: AbstractBidirSortedMap) => void
    reserved3: (self: AbstractBidirSortedMap) => void
    reserved4: (self: AbstractBidirSortedMap) => void
    reserved5: (self: AbstractBidirSortedMap) => void
    reserved6: (self: AbstractBidirSortedMap) => void
    reserved7: (self: AbstractBidirSortedMap) => void
    reserved8: (self: AbstractBidirSortedMap) => void
    reserved9: (self: AbstractBidirSortedMap) => void
    static name: string
}
export class AbstractBidirSortedMapPrivate {
    static name: string
}
export abstract class AbstractCollectionClass {
    /* Fields of Gee-0.8.Gee.AbstractCollectionClass */
    contains: (self: AbstractCollection, item?: object | null) => boolean
    add: (self: AbstractCollection, item?: object | null) => boolean
    remove: (self: AbstractCollection, item?: object | null) => boolean
    clear: (self: AbstractCollection) => void
    iterator: (self: AbstractCollection) => Iterator
    foreach: (self: AbstractCollection, f: ForallFunc) => boolean
    reserved0: (self: AbstractCollection) => void
    reserved1: (self: AbstractCollection) => void
    reserved2: (self: AbstractCollection) => void
    reserved3: (self: AbstractCollection) => void
    reserved4: (self: AbstractCollection) => void
    reserved5: (self: AbstractCollection) => void
    reserved6: (self: AbstractCollection) => void
    reserved7: (self: AbstractCollection) => void
    reserved8: (self: AbstractCollection) => void
    reserved9: (self: AbstractCollection) => void
    static name: string
}
export class AbstractCollectionPrivate {
    static name: string
}
export abstract class AbstractListClass {
    /* Fields of Gee-0.8.Gee.AbstractListClass */
    list_iterator: (self: AbstractList) => ListIterator
    get: (self: AbstractList, index: number) => object | null
    set: (self: AbstractList, index: number, item?: object | null) => void
    index_of: (self: AbstractList, item?: object | null) => number
    insert: (self: AbstractList, index: number, item?: object | null) => void
    remove_at: (self: AbstractList, index: number) => object | null
    slice: (self: AbstractList, start: number, stop: number) => List | null
    reserved0: (self: AbstractList) => void
    reserved1: (self: AbstractList) => void
    reserved2: (self: AbstractList) => void
    reserved3: (self: AbstractList) => void
    reserved4: (self: AbstractList) => void
    reserved5: (self: AbstractList) => void
    reserved6: (self: AbstractList) => void
    reserved7: (self: AbstractList) => void
    reserved8: (self: AbstractList) => void
    reserved9: (self: AbstractList) => void
    static name: string
}
export class AbstractListPrivate {
    static name: string
}
export abstract class AbstractMapClass {
    /* Fields of Gee-0.8.Gee.AbstractMapClass */
    has_key: (self: AbstractMap, key?: object | null) => boolean
    has: (self: AbstractMap, key?: object | null, value?: object | null) => boolean
    get: (self: AbstractMap, key?: object | null) => object | null
    set: (self: AbstractMap, key?: object | null, value?: object | null) => void
    unset: (self: AbstractMap, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator: (self: AbstractMap) => MapIterator
    clear: (self: AbstractMap) => void
    foreach: (self: AbstractMap, f: ForallFunc) => boolean
    stream: (self: AbstractMap, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc) => Iterator
    reserved0: (self: AbstractMap) => void
    reserved1: (self: AbstractMap) => void
    reserved2: (self: AbstractMap) => void
    reserved3: (self: AbstractMap) => void
    reserved4: (self: AbstractMap) => void
    reserved5: (self: AbstractMap) => void
    reserved6: (self: AbstractMap) => void
    reserved7: (self: AbstractMap) => void
    reserved8: (self: AbstractMap) => void
    reserved9: (self: AbstractMap) => void
    static name: string
}
export class AbstractMapPrivate {
    static name: string
}
export abstract class AbstractMultiMapClass {
    /* Fields of Gee-0.8.Gee.AbstractMultiMapClass */
    create_value_storage: (self: AbstractMultiMap) => Collection
    create_multi_key_set: (self: AbstractMultiMap) => MultiSet
    get_value_equal_func: (self: AbstractMultiMap) => [ /* returnType */ EqualDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
    reserved0: (self: AbstractMultiMap) => void
    reserved1: (self: AbstractMultiMap) => void
    reserved2: (self: AbstractMultiMap) => void
    reserved3: (self: AbstractMultiMap) => void
    reserved4: (self: AbstractMultiMap) => void
    reserved5: (self: AbstractMultiMap) => void
    reserved6: (self: AbstractMultiMap) => void
    reserved7: (self: AbstractMultiMap) => void
    reserved8: (self: AbstractMultiMap) => void
    static name: string
}
export class AbstractMultiMapPrivate {
    static name: string
}
export abstract class AbstractMultiSetClass {
    /* Fields of Gee-0.8.Gee.AbstractMultiSetClass */
    reserved0: (self: AbstractMultiSet) => void
    reserved1: (self: AbstractMultiSet) => void
    reserved2: (self: AbstractMultiSet) => void
    reserved3: (self: AbstractMultiSet) => void
    reserved4: (self: AbstractMultiSet) => void
    reserved5: (self: AbstractMultiSet) => void
    reserved6: (self: AbstractMultiSet) => void
    reserved7: (self: AbstractMultiSet) => void
    reserved8: (self: AbstractMultiSet) => void
    static name: string
}
export class AbstractMultiSetPrivate {
    static name: string
}
export abstract class AbstractQueueClass {
    /* Fields of Gee-0.8.Gee.AbstractQueueClass */
    peek: (self: AbstractQueue) => object | null
    poll: (self: AbstractQueue) => object | null
    reserved0: (self: AbstractQueue) => void
    reserved1: (self: AbstractQueue) => void
    reserved2: (self: AbstractQueue) => void
    reserved3: (self: AbstractQueue) => void
    reserved4: (self: AbstractQueue) => void
    reserved5: (self: AbstractQueue) => void
    reserved6: (self: AbstractQueue) => void
    reserved7: (self: AbstractQueue) => void
    reserved8: (self: AbstractQueue) => void
    reserved9: (self: AbstractQueue) => void
    static name: string
}
export class AbstractQueuePrivate {
    static name: string
}
export abstract class AbstractSetClass {
    /* Fields of Gee-0.8.Gee.AbstractSetClass */
    reserved0: (self: AbstractSet) => void
    reserved1: (self: AbstractSet) => void
    reserved2: (self: AbstractSet) => void
    reserved3: (self: AbstractSet) => void
    reserved4: (self: AbstractSet) => void
    reserved5: (self: AbstractSet) => void
    reserved6: (self: AbstractSet) => void
    reserved7: (self: AbstractSet) => void
    reserved8: (self: AbstractSet) => void
    reserved9: (self: AbstractSet) => void
    static name: string
}
export class AbstractSetPrivate {
    static name: string
}
export abstract class AbstractSortedMapClass {
    /* Fields of Gee-0.8.Gee.AbstractSortedMapClass */
    head_map: (self: AbstractSortedMap, before?: object | null) => SortedMap
    tail_map: (self: AbstractSortedMap, after?: object | null) => SortedMap
    sub_map: (self: AbstractSortedMap, before?: object | null, after?: object | null) => SortedMap
    reserved0: (self: AbstractSortedMap) => void
    reserved1: (self: AbstractSortedMap) => void
    reserved2: (self: AbstractSortedMap) => void
    reserved3: (self: AbstractSortedMap) => void
    reserved4: (self: AbstractSortedMap) => void
    reserved5: (self: AbstractSortedMap) => void
    reserved6: (self: AbstractSortedMap) => void
    reserved7: (self: AbstractSortedMap) => void
    reserved8: (self: AbstractSortedMap) => void
    reserved9: (self: AbstractSortedMap) => void
    static name: string
}
export class AbstractSortedMapPrivate {
    static name: string
}
export abstract class AbstractSortedSetClass {
    /* Fields of Gee-0.8.Gee.AbstractSortedSetClass */
    first: (self: AbstractSortedSet) => object | null
    last: (self: AbstractSortedSet) => object | null
    iterator_at: (self: AbstractSortedSet, element?: object | null) => Iterator | null
    lower: (self: AbstractSortedSet, element?: object | null) => object | null
    higher: (self: AbstractSortedSet, element?: object | null) => object | null
    floor: (self: AbstractSortedSet, element?: object | null) => object | null
    ceil: (self: AbstractSortedSet, element?: object | null) => object | null
    head_set: (self: AbstractSortedSet, before?: object | null) => SortedSet
    tail_set: (self: AbstractSortedSet, after?: object | null) => SortedSet
    sub_set: (self: AbstractSortedSet, from?: object | null, to?: object | null) => SortedSet
    reserved0: (self: AbstractSortedSet) => void
    reserved1: (self: AbstractSortedSet) => void
    reserved2: (self: AbstractSortedSet) => void
    reserved3: (self: AbstractSortedSet) => void
    reserved4: (self: AbstractSortedSet) => void
    reserved5: (self: AbstractSortedSet) => void
    reserved6: (self: AbstractSortedSet) => void
    reserved7: (self: AbstractSortedSet) => void
    reserved8: (self: AbstractSortedSet) => void
    reserved9: (self: AbstractSortedSet) => void
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
    _node: any
    /* Methods of Gee-0.8.Gee.HazardPointer */
    get(other_thread: boolean): object | null
    release(notify: GLib.DestroyNotify): void
    static name: string
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, ptr?: object | null): HazardPointer
    constructor(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, ptr?: object | null)
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, ptr?: object | null): HazardPointer
    static get_hazard_pointer(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, mask: number): [ /* returnType */ HazardPointer | null, /* mask_out */ number ]
    static get_pointer(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, mask: number): [ /* returnType */ object | null, /* mask_out */ number ]
    static exchange_hazard_pointer(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, new_ptr: object | null, mask: number, new_mask: number): [ /* returnType */ HazardPointer | null, /* old_mask */ number ]
    static set_pointer(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, new_ptr: object | null, mask: number, new_mask: number): void
    static exchange_pointer(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, new_ptr: object | null, mask: number, new_mask: number): [ /* returnType */ object | null, /* old_mask */ number ]
    static compare_and_exchange_pointer(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, old_ptr: object | null, _new_ptr: object | null, mask: number, old_mask: number, new_mask: number): boolean
    static set_default_policy(policy: HazardPointerPolicy): void
    static set_thread_exit_policy(policy: HazardPointerPolicy): void
    static set_release_policy(policy: HazardPointerReleasePolicy): boolean
}
export class HazardPointerContext {
    /* Fields of Gee-0.8.Gee.HazardPointerContext */
    _parent: object | null
    _to_free: ArrayList
    _policy: HazardPointerPolicy | null
    /* Methods of Gee-0.8.Gee.HazardPointerContext */
    try_free(): void
    free_all(): void
    try_release(): void
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
    previous: (self: BidirIterator) => boolean
    has_previous: (self: BidirIterator) => boolean
    first: (self: BidirIterator) => boolean
    last: (self: BidirIterator) => boolean
    static name: string
}
export abstract class BidirListIface {
    /* Fields of Gee-0.8.Gee.BidirListIface */
    bidir_list_iterator: (self: BidirList) => BidirListIterator
    get_read_only_view: (self: BidirList) => BidirList
    static name: string
}
export abstract class BidirListIteratorIface {
    /* Fields of Gee-0.8.Gee.BidirListIteratorIface */
    insert: (self: BidirListIterator, item?: object | null) => void
    static name: string
}
export abstract class BidirMapIteratorIface {
    /* Fields of Gee-0.8.Gee.BidirMapIteratorIface */
    previous: (self: BidirMapIterator) => boolean
    has_previous: (self: BidirMapIterator) => boolean
    first: (self: BidirMapIterator) => boolean
    last: (self: BidirMapIterator) => boolean
    static name: string
}
export abstract class BidirSortedSetIface {
    /* Fields of Gee-0.8.Gee.BidirSortedSetIface */
    bidir_iterator: (self: BidirSortedSet) => BidirIterator
    get_read_only_view: (self: BidirSortedSet) => BidirSortedSet
    static name: string
}
export abstract class BidirSortedMapIface {
    /* Fields of Gee-0.8.Gee.BidirSortedMapIface */
    bidir_map_iterator: (self: BidirSortedMap) => BidirMapIterator
    get_read_only_view: (self: BidirSortedMap) => BidirSortedMap
    static name: string
}
export abstract class CollectionIface {
    /* Fields of Gee-0.8.Gee.CollectionIface */
    contains: (self: Collection, item?: object | null) => boolean
    add: (self: Collection, item?: object | null) => boolean
    remove: (self: Collection, item?: object | null) => boolean
    clear: (self: Collection) => void
    add_all: (self: Collection, collection: Collection) => boolean
    contains_all: (self: Collection, collection: Collection) => boolean
    remove_all: (self: Collection, collection: Collection) => boolean
    retain_all: (self: Collection, collection: Collection) => boolean
    to_array: () => [ /* returnType */ object[], /* result_length1 */ number ]
    add_all_array: (self: Collection, array: object[]) => boolean
    contains_all_array: (self: Collection, array: object[]) => boolean
    remove_all_array: (self: Collection, array: object[]) => boolean
    add_all_iterator: (self: Collection, iter: Iterator) => boolean
    contains_all_iterator: (self: Collection, iter: Iterator) => boolean
    remove_all_iterator: (self: Collection, iter: Iterator) => boolean
    get_size: (self: Collection) => number
    get_is_empty: (self: Collection) => boolean
    get_read_only: (self: Collection) => boolean
    get_read_only_view: (self: Collection) => Collection
    static name: string
}
export abstract class ComparableIface {
    /* Fields of Gee-0.8.Gee.ComparableIface */
    compare_to: (self: Comparable, object?: object | null) => number
    static name: string
}
export abstract class DequeIface {
    /* Fields of Gee-0.8.Gee.DequeIface */
    offer_head: (self: Deque, element?: object | null) => boolean
    peek_head: (self: Deque) => object | null
    poll_head: (self: Deque) => object | null
    drain_head: (self: Deque, recipient: Collection, amount: number) => number
    offer_tail: (self: Deque, element?: object | null) => boolean
    peek_tail: (self: Deque) => object | null
    poll_tail: (self: Deque) => object | null
    drain_tail: (self: Deque, recipient: Collection, amount: number) => number
    static name: string
}
export abstract class FutureIface {
    /* Fields of Gee-0.8.Gee.FutureIface */
    wait: (self: Future) => object | null
    wait_until: (self: Future, end_time: number) => [ /* returnType */ boolean, /* value */ object | null ]
    wait_async: (self: Future, _callback_?: Gio.AsyncReadyCallback | null) => void
    wait_finish: (self: Future, _res_: Gio.AsyncResult) => object | null
    map: (self: Future, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    light_map: (self: Future, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    light_map_broken: (self: Future, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    zip: (self: Future, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.Type, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Future) => Future
    flat_map: (self: Future, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    get_value: (self: Future) => object | null
    get_ready: (self: Future) => boolean
    get_exception: (self: Future) => GLib.Error | null
    static name: string
}
export abstract class HashableIface {
    /* Fields of Gee-0.8.Gee.HashableIface */
    hash: (self: Hashable) => number
    equal_to: (self: Hashable, object?: object | null) => boolean
    static name: string
}
export abstract class IterableIface {
    /* Fields of Gee-0.8.Gee.IterableIface */
    iterator: (self: Iterable) => Iterator
    static name: string
}
export abstract class IteratorIface {
    /* Fields of Gee-0.8.Gee.IteratorIface */
    next: (self: Iterator) => boolean
    has_next: (self: Iterator) => boolean
    get: (self: Iterator) => object | null
    remove: (self: Iterator) => void
    get_valid: (self: Iterator) => boolean
    get_read_only: (self: Iterator) => boolean
    static name: string
}
export abstract class ListIface {
    /* Fields of Gee-0.8.Gee.ListIface */
    list_iterator: (self: List) => ListIterator
    get: (self: List, index: number) => object | null
    set: (self: List, index: number, item?: object | null) => void
    index_of: (self: List, item?: object | null) => number
    insert: (self: List, index: number, item?: object | null) => void
    remove_at: (self: List, index: number) => object | null
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => object | null
    last: (self: List) => object | null
    insert_all: (self: List, index: number, collection: Collection) => void
    sort: (self: List, compare_func: GLib.CompareDataFunc | null) => void
    get_read_only_view: (self: List) => List
    static name: string
}
export abstract class ListIteratorIface {
    /* Fields of Gee-0.8.Gee.ListIteratorIface */
    set: (self: ListIterator, item?: object | null) => void
    add: (self: ListIterator, item?: object | null) => void
    index: (self: ListIterator) => number
    static name: string
}
export abstract class MapIface {
    /* Fields of Gee-0.8.Gee.MapIface */
    has_key: (self: Map, key?: object | null) => boolean
    has: (self: Map, key?: object | null, value?: object | null) => boolean
    get: (self: Map, key?: object | null) => object | null
    set: (self: Map, key?: object | null, value?: object | null) => void
    unset: (self: Map, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    clear: (self: Map) => void
    map_iterator: (self: Map) => MapIterator
    set_all: (self: Map, map: Map) => void
    unset_all: (self: Map, map: Map) => boolean
    has_all: (self: Map, map: Map) => boolean
    get_size: (self: Map) => number
    get_is_empty: (self: Map) => boolean
    get_read_only: (self: Map) => boolean
    get_keys: (self: Map) => Set
    get_values: (self: Map) => Collection
    get_entries: (self: Map) => Set
    get_read_only_view: (self: Map) => Map
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
    next: (self: MapIterator) => boolean
    has_next: (self: MapIterator) => boolean
    get_key: (self: MapIterator) => object | null
    get_value: (self: MapIterator) => object | null
    set_value: (self: MapIterator, value?: object | null) => void
    unset: (self: MapIterator) => void
    fold: (self: MapIterator, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, seed?: object | null) => object | null
    foreach: (self: MapIterator, f: ForallMapFunc) => boolean
    get_valid: (self: MapIterator) => boolean
    get_mutable: (self: MapIterator) => boolean
    get_read_only: (self: MapIterator) => boolean
    static name: string
}
export abstract class MultiMapIface {
    /* Fields of Gee-0.8.Gee.MultiMapIface */
    get_keys: (self: MultiMap) => Set
    get_all_keys: (self: MultiMap) => MultiSet
    get_values: (self: MultiMap) => Collection
    contains: (self: MultiMap, key?: object | null) => boolean
    get: (self: MultiMap, key?: object | null) => Collection
    set: (self: MultiMap, key?: object | null, value?: object | null) => void
    remove: (self: MultiMap, key?: object | null, value?: object | null) => boolean
    remove_all: (self: MultiMap, key?: object | null) => boolean
    clear: (self: MultiMap) => void
    map_iterator: (self: MultiMap) => MapIterator
    get_size: (self: MultiMap) => number
    get_read_only: (self: MultiMap) => boolean
    get_read_only_view: (self: MultiMap) => MultiMap
    static name: string
}
export abstract class MultiSetIface {
    /* Fields of Gee-0.8.Gee.MultiSetIface */
    count: (self: MultiSet, item?: object | null) => number
    get_read_only_view: (self: MultiSet) => MultiSet
    static name: string
}
export abstract class QueueIface {
    /* Fields of Gee-0.8.Gee.QueueIface */
    offer: (self: Queue, element?: object | null) => boolean
    peek: (self: Queue) => object | null
    poll: (self: Queue) => object | null
    drain: (self: Queue, recipient: Collection, amount: number) => number
    get_capacity: (self: Queue) => number
    get_remaining_capacity: (self: Queue) => number
    get_is_full: (self: Queue) => boolean
    static name: string
}
export abstract class SetIface {
    /* Fields of Gee-0.8.Gee.SetIface */
    get_read_only_view: (self: Set) => Set
    static name: string
}
export abstract class SortedMapIface {
    /* Fields of Gee-0.8.Gee.SortedMapIface */
    head_map: (self: SortedMap, before?: object | null) => SortedMap
    tail_map: (self: SortedMap, after?: object | null) => SortedMap
    sub_map: (self: SortedMap, before?: object | null, after?: object | null) => SortedMap
    get_ascending_keys: (self: SortedMap) => SortedSet
    get_ascending_entries: (self: SortedMap) => SortedSet
    get_read_only_view: (self: SortedMap) => SortedMap
    static name: string
}
export abstract class SortedSetIface {
    /* Fields of Gee-0.8.Gee.SortedSetIface */
    first: (self: SortedSet) => object | null
    last: (self: SortedSet) => object | null
    iterator_at: (self: SortedSet, element?: object | null) => Iterator | null
    lower: (self: SortedSet, element?: object | null) => object | null
    higher: (self: SortedSet, element?: object | null) => object | null
    floor: (self: SortedSet, element?: object | null) => object | null
    ceil: (self: SortedSet, element?: object | null) => object | null
    head_set: (self: SortedSet, before?: object | null) => SortedSet
    tail_set: (self: SortedSet, after?: object | null) => SortedSet
    sub_set: (self: SortedSet, from?: object | null, to?: object | null) => SortedSet
    get_read_only_view: (self: SortedSet) => SortedSet
    static name: string
}
export abstract class TraversableIface {
    /* Fields of Gee-0.8.Gee.TraversableIface */
    foreach: (self: Traversable, f: ForallFunc) => boolean
    stream: (self: Traversable, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc) => Iterator
    fold: (self: Traversable, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null) => object | null
    map: (self: Traversable, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc) => Iterator
    scan: (self: Traversable, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null) => Iterator
    filter: (self: Traversable, pred: Predicate) => Iterator
    chop: (self: Traversable, offset: number, length: number) => Iterator
    flat_map: (self: Traversable, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc) => Iterator
    tee: (self: Traversable) => [ /* returnType */ Iterator[], /* result_length1 */ number ]
    first_match: (self: Traversable, pred: Predicate) => object | null
    any_match: (self: Traversable, pred: Predicate) => boolean
    all_match: (self: Traversable, pred: Predicate) => boolean
    max: (self: Traversable, compare: GLib.CompareDataFunc) => object | null
    min: (self: Traversable, compare: GLib.CompareDataFunc) => object | null
    order_by: (self: Traversable, compare: GLib.CompareDataFunc | null) => Iterator
    get_element_type: (self: Traversable) => GObject.Type
    static name: string
}