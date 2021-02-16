/**
 * Gee-0.8
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.BidirIterator */
    previous(): boolean
    has_previous(): boolean
    first(): boolean
    last(): boolean
    /* Methods of Gee.Iterator */
    next(): boolean
    has_next(): boolean
    get(): object | null
    remove(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.BidirIterator */
    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_first(): boolean
    vfunc_last(): boolean
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    /* Virtual methods of Gee.Iterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_first(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BidirIterator_ConstructProps)
    _init (config?: BidirIterator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BidirList_ConstructProps extends List_ConstructProps {
}
export class BidirList {
    /* Properties of Gee.BidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee.Collection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.BidirList */
    bidir_list_iterator(): BidirListIterator
    get_read_only_view(): BidirList
    /* Methods of Gee.List */
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
    sort(compare_func?: GLib.CompareFunc | null): void
    /* Methods of Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.BidirList */
    vfunc_bidir_list_iterator(): BidirListIterator
    vfunc_get_read_only_view(): BidirList
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
    vfunc_sort(compare_func?: GLib.CompareFunc | null): void
    /* Virtual methods of Gee.List */
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
    vfunc_sort(compare_func?: GLib.CompareFunc | null): void
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    /* Virtual methods of Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BidirList_ConstructProps)
    _init (config?: BidirList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): List
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface BidirListIterator_ConstructProps extends BidirIterator_ConstructProps {
}
export class BidirListIterator {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.BidirListIterator */
    insert(item?: object | null): void
    /* Methods of Gee.BidirIterator */
    previous(): boolean
    has_previous(): boolean
    last(): boolean
    /* Methods of Gee.Iterator */
    next(): boolean
    has_next(): boolean
    first(): boolean
    get(): object | null
    remove(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.BidirListIterator */
    vfunc_insert(item?: object | null): void
    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_last(): boolean
    /* Virtual methods of Gee.BidirIterator */
    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_last(): boolean
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_first(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    /* Virtual methods of Gee.Iterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_first(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.BidirMapIterator */
    previous(): boolean
    has_previous(): boolean
    first(): boolean
    last(): boolean
    /* Methods of Gee.MapIterator */
    next(): boolean
    has_next(): boolean
    get_key(): object | null
    get_value(): object | null
    set_value(value?: object | null): void
    unset(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.BidirMapIterator */
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
    /* Virtual methods of Gee.MapIterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_first(): boolean
    vfunc_get_key(): object | null
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_unset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of Gee.BidirSortedSet */
    readonly read_only_view: BidirSortedSet
    /* Properties of Gee.Collection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.BidirSortedSet */
    bidir_iterator(): BidirIterator
    get_read_only_view(): BidirSortedSet
    /* Methods of Gee.SortedSet */
    first(): object | null
    last(): object | null
    iterator_at(element?: object | null): BidirIterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    head_set(before?: object | null): SortedSet
    tail_set(after?: object | null): SortedSet
    sub_set(from?: object | null, to?: object | null): SortedSet
    /* Methods of Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.BidirSortedSet */
    vfunc_bidir_iterator(): BidirIterator
    vfunc_get_read_only_view(): BidirSortedSet
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): BidirIterator | null
    vfunc_lower(element?: object | null): object | null
    vfunc_higher(element?: object | null): object | null
    vfunc_floor(element?: object | null): object | null
    vfunc_ceil(element?: object | null): object | null
    vfunc_head_set(before?: object | null): SortedSet
    vfunc_tail_set(after?: object | null): SortedSet
    vfunc_sub_set(from?: object | null, to?: object | null): SortedSet
    /* Virtual methods of Gee.SortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_bidir_iterator(): BidirIterator
    vfunc_iterator_at(element?: object | null): BidirIterator | null
    vfunc_lower(element?: object | null): object | null
    vfunc_higher(element?: object | null): object | null
    vfunc_floor(element?: object | null): object | null
    vfunc_ceil(element?: object | null): object | null
    vfunc_head_set(before?: object | null): SortedSet
    vfunc_tail_set(after?: object | null): SortedSet
    vfunc_sub_set(from?: object | null, to?: object | null): SortedSet
    /* Virtual methods of Gee.Set */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    /* Virtual methods of Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BidirSortedSet_ConstructProps)
    _init (config?: BidirSortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): BidirSortedSet
    static empty(): Set
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface BidirSortedMap_ConstructProps extends SortedMap_ConstructProps {
}
export class BidirSortedMap {
    /* Properties of Gee.BidirSortedMap */
    readonly read_only_view: BidirSortedMap
    /* Properties of Gee.SortedMap */
    readonly ascending_keys: SortedSet
    readonly ascending_entries: SortedSet
    /* Properties of Gee.Map */
    readonly size: number
    readonly is_empty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly key_type: GObject.Type
    readonly value_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.BidirSortedMap */
    bidir_map_iterator(): BidirMapIterator
    get_read_only_view(): BidirSortedMap
    /* Methods of Gee.SortedMap */
    head_map(before?: object | null): SortedMap
    tail_map(after?: object | null): SortedMap
    sub_map(before?: object | null, after?: object | null): SortedMap
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet
    get_read_only_view(): SortedMap
    /* Methods of Gee.Map */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.BidirSortedMap */
    vfunc_bidir_map_iterator(): BidirMapIterator
    vfunc_get_read_only_view(): BidirSortedMap
    vfunc_get_read_only_view(): SortedMap
    vfunc_head_map(before?: object | null): SortedMap
    vfunc_tail_map(after?: object | null): SortedMap
    vfunc_sub_map(before?: object | null, after?: object | null): SortedMap
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet
    /* Virtual methods of Gee.SortedMap */
    vfunc_head_map(before?: object | null): SortedMap
    vfunc_tail_map(after?: object | null): SortedMap
    vfunc_sub_map(before?: object | null, after?: object | null): SortedMap
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet
    vfunc_get_read_only_view(): SortedMap
    vfunc_has_key(key?: object | null): boolean
    vfunc_contains(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_remove_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_contains_all(map: Map): boolean
    /* Virtual methods of Gee.Map */
    vfunc_has_key(key?: object | null): boolean
    vfunc_contains(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_remove_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_contains_all(map: Map): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-type", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
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
    static empty(): Map
    static $gtype: GObject.Type
}
export interface Collection_ConstructProps extends Iterable_ConstructProps {
}
export class Collection {
    /* Properties of Gee.Collection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Collection */
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
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Collection */
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
    /* Virtual methods of Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Comparable */
    compare_to(object?: object | null): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Comparable */
    vfunc_compare_to(object?: object | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Properties of Gee.Queue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee.Collection */
    readonly size: number
    readonly is_empty: boolean
    readonly read_only_view: Collection
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Deque */
    offer_head(element?: object | null): boolean
    peek_head(): object | null
    poll_head(): object | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element?: object | null): boolean
    peek_tail(): object | null
    poll_tail(): object | null
    drain_tail(recipient: Collection, amount: number): number
    /* Methods of Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Deque */
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
    /* Virtual methods of Gee.Queue */
    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    /* Virtual methods of Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::is-empty", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.Future */
    readonly ready: boolean
    readonly exception: GLib.Error
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Future */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Future */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Hashable */
    hash(): number
    equal_to(object?: object | null): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Hashable */
    vfunc_hash(): number
    vfunc_equal_to(object?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Properties of Gee.Iterator */
    readonly valid: boolean
    readonly read_only: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Iterator */
    next(): boolean
    has_next(): boolean
    get(): object | null
    remove(): void
    get_valid(): boolean
    get_read_only(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Iterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Properties of Gee.List */
    readonly read_only_view: List
    /* Properties of Gee.Collection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.List */
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
    /* Methods of Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.List */
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
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    /* Virtual methods of Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: List_ConstructProps)
    _init (config?: List_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface ListIterator_ConstructProps extends Iterator_ConstructProps {
}
export class ListIterator {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.ListIterator */
    set(item?: object | null): void
    add(item?: object | null): void
    index(): number
    /* Methods of Gee.Iterator */
    next(): boolean
    has_next(): boolean
    first(): boolean
    get(): object | null
    remove(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.ListIterator */
    vfunc_set(item?: object | null): void
    vfunc_add(item?: object | null): void
    vfunc_index(): number
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_first(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    /* Virtual methods of Gee.Iterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_first(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ListIterator_ConstructProps)
    _init (config?: ListIterator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Map_ConstructProps extends GObject.Object_ConstructProps {
}
export class Map {
    /* Properties of Gee.Map */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Map */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Map */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Properties of Gee.MapIterator */
    readonly valid: boolean
    readonly mutable: boolean
    readonly read_only: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.MapIterator */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.MapIterator */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Properties of Gee.MultiMap */
    readonly size: number
    readonly read_only: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.MultiMap */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.MultiMap */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Properties of Gee.Collection */
    readonly size: number
    readonly is_empty: boolean
    readonly read_only_view: Collection
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.MultiSet */
    count(item?: object | null): number
    get_read_only_view(): MultiSet
    /* Methods of Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.MultiSet */
    vfunc_count(item?: object | null): number
    vfunc_get_read_only_view(): MultiSet
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    /* Virtual methods of Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MultiSet_ConstructProps)
    _init (config?: MultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface Queue_ConstructProps extends Collection_ConstructProps {
}
export class Queue {
    /* Properties of Gee.Queue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee.Collection */
    readonly size: number
    readonly is_empty: boolean
    readonly read_only_view: Collection
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    get_capacity(): number
    get_remaining_capacity(): number
    get_is_full(): boolean
    /* Methods of Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Queue */
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
    /* Virtual methods of Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::is-empty", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of Gee.Set */
    readonly read_only_view: Set
    /* Properties of Gee.Collection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Set */
    get_read_only_view(): Set
    /* Methods of Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Set */
    vfunc_get_read_only_view(): Set
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    /* Virtual methods of Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Set_ConstructProps)
    _init (config?: Set_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface SortedMap_ConstructProps extends Map_ConstructProps {
}
export class SortedMap {
    /* Properties of Gee.SortedMap */
    readonly ascending_keys: SortedSet
    readonly ascending_entries: SortedSet
    readonly read_only_view: SortedMap
    /* Properties of Gee.Map */
    readonly size: number
    readonly is_empty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly key_type: GObject.Type
    readonly value_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.SortedMap */
    head_map(before?: object | null): SortedMap
    tail_map(after?: object | null): SortedMap
    sub_map(before?: object | null, after?: object | null): SortedMap
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet
    get_read_only_view(): SortedMap
    /* Methods of Gee.Map */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.SortedMap */
    vfunc_head_map(before?: object | null): SortedMap
    vfunc_tail_map(after?: object | null): SortedMap
    vfunc_sub_map(before?: object | null, after?: object | null): SortedMap
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet
    vfunc_get_read_only_view(): SortedMap
    vfunc_has_key(key?: object | null): boolean
    vfunc_contains(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_remove_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_contains_all(map: Map): boolean
    /* Virtual methods of Gee.Map */
    vfunc_has_key(key?: object | null): boolean
    vfunc_contains(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_remove_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_contains_all(map: Map): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::is-empty", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-type", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SortedMap_ConstructProps)
    _init (config?: SortedMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
    static empty(): Map
    static $gtype: GObject.Type
}
export interface SortedSet_ConstructProps extends Set_ConstructProps {
}
export class SortedSet {
    /* Properties of Gee.SortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee.Collection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.SortedSet */
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
    /* Methods of Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.SortedSet */
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
    /* Virtual methods of Gee.Set */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    /* Virtual methods of Gee.Collection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]
    vfunc_iterator(): Iterator
    /* Virtual methods of Gee.Iterable */
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SortedSet_ConstructProps)
    _init (config?: SortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet
    static empty(): Set
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface Traversable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Traversable {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.Traversable */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.Traversable */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Properties of Gee.AbstractBidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of Gee.AbstractList */
    parent_instance: AbstractCollection
    priv: AbstractListPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractBidirList */
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
    /* Methods of Gee.AbstractList */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.List */
    sort(compare_func?: GLib.CompareFunc | null): void
    /* Virtual methods of Gee.AbstractBidirList */
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
    /* Virtual methods of Gee.AbstractList */
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
    vfunc_sort(compare_func?: GLib.CompareFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractBidirSortedSet */
    readonly read_only_view: BidirSortedSet
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of Gee.AbstractSet */
    parent_instance: AbstractCollection
    priv: AbstractSetPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractBidirSortedSet */
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
    /* Methods of Gee.AbstractSortedSet */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.BidirSortedSet */
    get_read_only_view(): BidirSortedSet
    /* Methods of Gee.SortedSet */
    iterator_at(element?: object | null): BidirIterator | null
    /* Virtual methods of Gee.AbstractBidirSortedSet */
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
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_iterator_at(element?: object | null): BidirIterator | null
    /* Virtual methods of Gee.AbstractSortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_iterator_at(element?: object | null): BidirIterator | null
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
    vfunc_bidir_iterator(): BidirIterator
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractBidirSortedMap */
    readonly read_only_view: BidirSortedMap
    /* Properties of Gee.AbstractSortedMap */
    readonly ascending_keys: SortedSet
    readonly ascending_entries: SortedSet
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly is_empty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    /* Properties of Gee.Map */
    readonly key_type: GObject.Type
    readonly value_type: GObject.Type
    /* Fields of Gee.AbstractMap */
    parent_instance: GObject.Object
    priv: AbstractMapPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractBidirSortedMap */
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
    /* Methods of Gee.AbstractSortedMap */
    head_map(before?: object | null): SortedMap
    tail_map(after?: object | null): SortedMap
    sub_map(before?: object | null, after?: object | null): SortedMap
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet
    /* Methods of Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): MapIterator
    clear(): void
    set_all(map: Map): void
    unset_all(map: Map): boolean
    has_all(map: Map): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.SortedMap */
    get_read_only_view(): SortedMap
    /* Methods of Gee.Map */
    contains(key?: object | null): boolean
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove_all(map: Map): boolean
    contains_all(map: Map): boolean
    /* Virtual methods of Gee.AbstractBidirSortedMap */
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
    /* Virtual methods of Gee.AbstractSortedMap */
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
    /* Virtual methods of Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_iterator(): Iterator
    vfunc_contains(key?: object | null): boolean
    vfunc_remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_remove_all(map: Map): boolean
    vfunc_contains_all(map: Map): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-type", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Collection
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Properties of Gee.Collection */
    readonly is_empty: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractCollection */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.Traversable */
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
    /* Methods of Gee.Collection */
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]
    /* Virtual methods of Gee.AbstractCollection */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractCollection_ConstructProps)
    _init (config?: AbstractCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Collection
    static $gtype: GObject.Type
}
export interface AbstractList_ConstructProps extends AbstractCollection_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class AbstractList {
    /* Properties of Gee.AbstractList */
    readonly read_only_view: List
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of Gee.AbstractCollection */
    parent_instance: GObject.Object
    priv: AbstractCollectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractList */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.List */
    first(): object | null
    last(): object | null
    insert_all(index: number, collection: Collection): void
    sort(compare_func?: GLib.CompareFunc | null): void
    /* Virtual methods of Gee.AbstractList */
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
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func?: GLib.CompareFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractList_ConstructProps)
    _init (config?: AbstractList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): List
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
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Properties of Gee.Map */
    readonly is_empty: boolean
    readonly key_type: GObject.Type
    readonly value_type: GObject.Type
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractMap */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.Traversable */
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
    /* Methods of Gee.Iterable */
    iterator(): Iterator
    /* Methods of Gee.Map */
    contains(key?: object | null): boolean
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    set_all(map: Map): void
    unset_all(map: Map): boolean
    remove_all(map: Map): boolean
    has_all(map: Map): boolean
    contains_all(map: Map): boolean
    /* Virtual methods of Gee.AbstractMap */
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
    vfunc_contains(key?: object | null): boolean
    vfunc_remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_remove_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_contains_all(map: Map): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::element-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractMap_ConstructProps)
    _init (config?: AbstractMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Map
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
    /* Properties of Gee.MultiMap */
    readonly size: number
    /* Fields of Gee.AbstractMultiMap */
    _storage_map: Map
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractMultiMap */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.MultiMap */
    get_keys(): Set
    get_all_keys(): MultiSet
    get_values(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    remove_all(key?: object | null): boolean
    clear(): void
    /* Virtual methods of Gee.AbstractMultiMap */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    readonly read_only_view: Collection
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of Gee.AbstractMultiSet */
    _storage_map: Map
    /* Fields of Gee.AbstractCollection */
    parent_instance: GObject.Object
    priv: AbstractCollectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractMultiSet */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.MultiSet */
    count(item?: object | null): number
    /* Virtual methods of Gee.AbstractMultiSet */
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
    vfunc_count(item?: object | null): number
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractMultiSet_ConstructProps)
    _init (config?: AbstractMultiSet_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractQueue_ConstructProps extends AbstractCollection_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class AbstractQueue {
    /* Properties of Gee.AbstractQueue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    readonly read_only_view: Collection
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of Gee.AbstractCollection */
    parent_instance: GObject.Object
    priv: AbstractCollectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractQueue */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.Queue */
    offer(element?: object | null): boolean
    drain(recipient: Collection, amount: number): number
    /* Virtual methods of Gee.AbstractQueue */
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
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractSet */
    readonly read_only_view: Set
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of Gee.AbstractCollection */
    parent_instance: GObject.Object
    priv: AbstractCollectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractSet */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.AbstractSet */
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
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractSet_ConstructProps)
    _init (config?: AbstractSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Set
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
    /* Properties of Gee.AbstractSortedMap */
    readonly ascending_keys: SortedSet
    readonly ascending_entries: SortedSet
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly is_empty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Properties of Gee.Map */
    readonly key_type: GObject.Type
    readonly value_type: GObject.Type
    /* Fields of Gee.AbstractMap */
    parent_instance: GObject.Object
    priv: AbstractMapPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractSortedMap */
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
    /* Methods of Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): MapIterator
    clear(): void
    set_all(map: Map): void
    unset_all(map: Map): boolean
    has_all(map: Map): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.SortedMap */
    get_read_only_view(): SortedMap
    /* Methods of Gee.Map */
    contains(key?: object | null): boolean
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove_all(map: Map): boolean
    contains_all(map: Map): boolean
    /* Virtual methods of Gee.AbstractSortedMap */
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
    /* Virtual methods of Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_iterator(): Iterator
    vfunc_contains(key?: object | null): boolean
    vfunc_remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_remove_all(map: Map): boolean
    vfunc_contains_all(map: Map): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ascending-keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-type", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractSortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of Gee.AbstractSet */
    parent_instance: AbstractCollection
    priv: AbstractSetPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractSortedSet */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.SortedSet */
    bidir_iterator(): BidirIterator
    iterator_at(element?: object | null): BidirIterator | null
    /* Virtual methods of Gee.AbstractSortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_iterator_at(element?: object | null): BidirIterator | null
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
    vfunc_bidir_iterator(): BidirIterator
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractSortedSet_ConstructProps)
    _init (config?: AbstractSortedSet_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ArrayList_ConstructProps extends AbstractBidirList_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class ArrayList {
    /* Properties of Gee.AbstractBidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Fields of Gee.ArrayList */
    _items: object[]
    _items_length1: number
    _size: number
    /* Fields of Gee.AbstractList */
    parent_instance: AbstractCollection
    priv: AbstractListPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.ArrayList */
    add_all(collection: Collection): boolean
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractBidirList */
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
    /* Methods of Gee.AbstractList */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.AbstractBidirList */
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
    /* Virtual methods of Gee.AbstractList */
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
    vfunc_sort(compare_func?: GLib.CompareFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.ArrayQueue */
    readonly is_empty: boolean
    /* Properties of Gee.AbstractQueue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly read_only_view: Collection
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of Gee.AbstractQueue */
    parent_instance: AbstractCollection
    priv: AbstractQueuePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.ArrayQueue */
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    get_is_empty(): boolean
    /* Methods of Gee.AbstractQueue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.Deque */
    offer_head(element?: object | null): boolean
    peek_head(): object | null
    poll_head(): object | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element?: object | null): boolean
    peek_tail(): object | null
    poll_tail(): object | null
    drain_tail(recipient: Collection, amount: number): number
    /* Virtual methods of Gee.ArrayQueue */
    vfunc_offer_head(element?: object | null): boolean
    vfunc_peek_head(): object | null
    vfunc_poll_head(): object | null
    vfunc_drain_head(recipient: Collection, amount: number): number
    vfunc_offer_tail(element?: object | null): boolean
    vfunc_peek_tail(): object | null
    vfunc_poll_tail(): object | null
    vfunc_drain_tail(recipient: Collection, amount: number): number
    /* Virtual methods of Gee.AbstractQueue */
    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.ConcurrentList */
    readonly is_empty: boolean
    /* Properties of Gee.AbstractList */
    readonly read_only_view: List
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    /* Fields of Gee.AbstractList */
    parent_instance: AbstractCollection
    priv: AbstractListPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.ConcurrentList */
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    get_is_empty(): boolean
    /* Methods of Gee.AbstractList */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.AbstractList */
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
    vfunc_sort(compare_func?: GLib.CompareFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-empty", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractSortedSet */
    readonly read_only_view: SortedSet
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Fields of Gee.AbstractSet */
    parent_instance: AbstractCollection
    priv: AbstractSetPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.AbstractSortedSet */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.ConcurrentSet */
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_iterator_at(element?: object | null): BidirIterator | null
    /* Virtual methods of Gee.AbstractSortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_iterator_at(element?: object | null): BidirIterator | null
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
    vfunc_bidir_iterator(): BidirIterator
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly is_empty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    /* Fields of Gee.AbstractMap */
    parent_instance: GObject.Object
    priv: AbstractMapPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.HashMap */
    get_key_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ object | null ]
    get_key_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): MapIterator
    clear(): void
    set_all(map: Map): void
    unset_all(map: Map): boolean
    has_all(map: Map): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_iterator(): Iterator
    vfunc_contains(key?: object | null): boolean
    vfunc_remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_remove_all(map: Map): boolean
    vfunc_contains_all(map: Map): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of Gee.AbstractMultiMap */
    parent_instance: GObject.Object
    priv: AbstractMultiMapPrivate
    _storage_map: Map
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.HashMultiMap */
    get_key_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ object | null ]
    get_key_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    get_value_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractMultiMap */
    create_value_storage(): Collection
    create_multi_key_set(): MultiSet
    get_value_equal_func(): GLib.EqualFunc
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.AbstractMultiMap */
    vfunc_create_value_storage(): Collection
    vfunc_create_multi_key_set(): MultiSet
    vfunc_get_value_equal_func(): GLib.EqualFunc
    vfunc_get_keys(): Set
    vfunc_get_all_keys(): MultiSet
    vfunc_get_values(): Collection
    vfunc_contains(key?: object | null): boolean
    vfunc_get(key?: object | null): Collection
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_remove(key?: object | null, value?: object | null): boolean
    vfunc_remove_all(key?: object | null): boolean
    vfunc_clear(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    readonly read_only_view: Collection
    /* Fields of Gee.AbstractMultiSet */
    parent_instance: AbstractCollection
    priv: AbstractMultiSetPrivate
    _storage_map: Map
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.HashMultiSet */
    get_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ object | null ]
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.AbstractMultiSet */
    vfunc_count(item?: object | null): number
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractSet */
    readonly read_only_view: Set
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Fields of Gee.AbstractSet */
    parent_instance: AbstractCollection
    priv: AbstractSetPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.HashSet */
    get_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ object | null ]
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of Gee.Lazy */
    ref_count: number
    /* Methods of Gee.Lazy */
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
    /* Properties of Gee.AbstractBidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Queue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of Gee.AbstractList */
    parent_instance: AbstractCollection
    priv: AbstractListPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.LinkedList */
    first(): object | null
    last(): object | null
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractBidirList */
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
    /* Methods of Gee.AbstractList */
    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): List | null
    insert_all(index: number, collection: Collection): void
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee.Deque */
    offer_head(element?: object | null): boolean
    peek_head(): object | null
    poll_head(): object | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element?: object | null): boolean
    peek_tail(): object | null
    poll_tail(): object | null
    drain_tail(recipient: Collection, amount: number): number
    /* Virtual methods of Gee.LinkedList */
    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number
    vfunc_offer_head(element?: object | null): boolean
    vfunc_peek_head(): object | null
    vfunc_poll_head(): object | null
    vfunc_drain_head(recipient: Collection, amount: number): number
    vfunc_offer_tail(element?: object | null): boolean
    vfunc_peek_tail(): object | null
    vfunc_poll_tail(): object | null
    vfunc_drain_tail(recipient: Collection, amount: number): number
    /* Virtual methods of Gee.AbstractBidirList */
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
    /* Virtual methods of Gee.AbstractList */
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
    vfunc_sort(compare_func?: GLib.CompareFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-full", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractQueue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    readonly read_only_view: Collection
    /* Fields of Gee.AbstractQueue */
    parent_instance: AbstractCollection
    priv: AbstractQueuePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.PriorityQueue */
    offer(element?: object | null): boolean
    drain(recipient: Collection, amount: number): number
    get_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractQueue */
    peek(): object | null
    poll(): object | null
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.AbstractQueue */
    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::is-empty", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of Gee.Promise */
    ref_count: number
    /* Methods of Gee.Promise */
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
    /* Properties of Gee.AbstractBidirSortedMap */
    readonly read_only_view: BidirSortedMap
    /* Properties of Gee.AbstractSortedMap */
    readonly ascending_keys: SortedSet
    readonly ascending_entries: SortedSet
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly is_empty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    /* Fields of Gee.AbstractMap */
    parent_instance: GObject.Object
    priv: AbstractMapPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.TreeMap */
    get_key_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractBidirSortedMap */
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
    /* Methods of Gee.AbstractSortedMap */
    head_map(before?: object | null): SortedMap
    tail_map(after?: object | null): SortedMap
    sub_map(before?: object | null, after?: object | null): SortedMap
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet
    /* Methods of Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): MapIterator
    clear(): void
    set_all(map: Map): void
    unset_all(map: Map): boolean
    has_all(map: Map): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.TreeMap */
    vfunc_get_read_only_view(): BidirSortedMap
    vfunc_get_read_only_view(): SortedMap
    /* Virtual methods of Gee.AbstractBidirSortedMap */
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
    /* Virtual methods of Gee.AbstractSortedMap */
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
    /* Virtual methods of Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_iterator(): Iterator
    vfunc_contains(key?: object | null): boolean
    vfunc_remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_remove_all(map: Map): boolean
    vfunc_contains_all(map: Map): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::is-empty", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of Gee.AbstractMultiMap */
    parent_instance: GObject.Object
    priv: AbstractMultiMapPrivate
    _storage_map: Map
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.TreeMultiMap */
    get_key_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    get_value_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractMultiMap */
    create_value_storage(): Collection
    create_multi_key_set(): MultiSet
    get_value_equal_func(): GLib.EqualFunc
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.AbstractMultiMap */
    vfunc_create_value_storage(): Collection
    vfunc_create_multi_key_set(): MultiSet
    vfunc_get_value_equal_func(): GLib.EqualFunc
    vfunc_get_keys(): Set
    vfunc_get_all_keys(): MultiSet
    vfunc_get_values(): Collection
    vfunc_contains(key?: object | null): boolean
    vfunc_get(key?: object | null): Collection
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_remove(key?: object | null, value?: object | null): boolean
    vfunc_remove_all(key?: object | null): boolean
    vfunc_clear(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    readonly read_only_view: Collection
    /* Fields of Gee.AbstractMultiSet */
    parent_instance: AbstractCollection
    priv: AbstractMultiSetPrivate
    _storage_map: Map
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.TreeMultiSet */
    get_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.AbstractMultiSet */
    vfunc_count(item?: object | null): number
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractBidirSortedSet */
    readonly read_only_view: BidirSortedSet
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Fields of Gee.AbstractSet */
    parent_instance: AbstractCollection
    priv: AbstractSetPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.TreeSet */
    get_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractBidirSortedSet */
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
    /* Methods of Gee.AbstractSortedSet */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.TreeSet */
    vfunc_iterator_at(element?: object | null): BidirIterator | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_get_read_only_view(): BidirSortedSet
    vfunc_get_read_only_view(): SortedSet
    /* Virtual methods of Gee.AbstractBidirSortedSet */
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
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_iterator_at(element?: object | null): BidirIterator | null
    /* Virtual methods of Gee.AbstractSortedSet */
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_iterator_at(element?: object | null): Iterator | null
    vfunc_iterator_at(element?: object | null): BidirIterator | null
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
    vfunc_bidir_iterator(): BidirIterator
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.AbstractBidirList */
    readonly read_only_view: BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly is_empty: boolean
    /* Properties of Gee.Queue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee.Iterable */
    readonly element_type: GObject.Type
    /* Fields of Gee.AbstractList */
    parent_instance: AbstractCollection
    priv: AbstractListPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.UnrolledLinkedList */
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractBidirList */
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
    /* Methods of Gee.AbstractList */
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
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee.Deque */
    offer_head(element?: object | null): boolean
    peek_head(): object | null
    poll_head(): object | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element?: object | null): boolean
    peek_tail(): object | null
    poll_tail(): object | null
    drain_tail(recipient: Collection, amount: number): number
    /* Virtual methods of Gee.UnrolledLinkedList */
    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number
    vfunc_offer_head(element?: object | null): boolean
    vfunc_peek_head(): object | null
    vfunc_poll_head(): object | null
    vfunc_drain_head(recipient: Collection, amount: number): number
    vfunc_offer_tail(element?: object | null): boolean
    vfunc_peek_tail(): object | null
    vfunc_poll_tail(): object | null
    vfunc_drain_tail(recipient: Collection, amount: number): number
    /* Virtual methods of Gee.AbstractBidirList */
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
    /* Virtual methods of Gee.AbstractList */
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
    vfunc_sort(compare_func?: GLib.CompareFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-empty", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-full", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element-type", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gee.MapEntry */
    readonly key: object
    value: object
    readonly read_only: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee.MapEntry */
    get_key(): object | null
    get_value(): object | null
    set_value(value?: object | null): void
    get_read_only(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gee.MapEntry */
    vfunc_get_key(): object | null
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Fields of Gee.AbstractBidirListClass */
    bidir_list_iterator: () => BidirListIterator
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
    /* Fields of Gee.AbstractBidirSortedSetClass */
    bidir_iterator: () => BidirIterator
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
    /* Fields of Gee.AbstractBidirSortedMapClass */
    bidir_map_iterator: () => BidirMapIterator
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
    /* Fields of Gee.AbstractCollectionClass */
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
    /* Fields of Gee.AbstractListClass */
    list_iterator: () => ListIterator
    get: (index: number) => object | null
    set: (index: number, item?: object | null) => void
    index_of: (item?: object | null) => number
    insert: (index: number, item?: object | null) => void
    remove_at: (index: number) => object | null
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
    /* Fields of Gee.AbstractMapClass */
    has_key: (key?: object | null) => boolean
    has: (key?: object | null, value?: object | null) => boolean
    get: (key?: object | null) => object | null
    set: (key?: object | null, value?: object | null) => void
    unset: (key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator: () => MapIterator
    clear: () => void
    foreach: (f: ForallFunc) => boolean
    stream: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc) => Iterator
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
    /* Fields of Gee.AbstractMultiMapClass */
    create_value_storage: () => Collection
    create_multi_key_set: () => MultiSet
    get_value_equal_func: () => [ /* returnType */ EqualDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
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
    /* Fields of Gee.AbstractMultiSetClass */
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
    /* Fields of Gee.AbstractQueueClass */
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
    /* Fields of Gee.AbstractSetClass */
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
    /* Fields of Gee.AbstractSortedMapClass */
    head_map: (before?: object | null) => SortedMap
    tail_map: (after?: object | null) => SortedMap
    sub_map: (before?: object | null, after?: object | null) => SortedMap
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
    /* Fields of Gee.AbstractSortedSetClass */
    first: () => object | null
    last: () => object | null
    iterator_at: (element?: object | null) => Iterator | null
    lower: (element?: object | null) => object | null
    higher: (element?: object | null) => object | null
    floor: (element?: object | null) => object | null
    ceil: (element?: object | null) => object | null
    head_set: (before?: object | null) => SortedSet
    tail_set: (after?: object | null) => SortedSet
    sub_set: (from?: object | null, to?: object | null) => SortedSet
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
    /* Fields of Gee.HazardPointer */
    _node: any
    /* Methods of Gee.HazardPointer */
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
    /* Fields of Gee.HazardPointerContext */
    _parent: object | null
    _to_free: ArrayList
    _policy: HazardPointerPolicy | null
    /* Methods of Gee.HazardPointerContext */
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
    /* Fields of Gee.BidirIteratorIface */
    previous: () => boolean
    has_previous: () => boolean
    first: () => boolean
    last: () => boolean
    static name: string
}
export abstract class BidirListIface {
    /* Fields of Gee.BidirListIface */
    bidir_list_iterator: () => BidirListIterator
    get_read_only_view: () => BidirList
    static name: string
}
export abstract class BidirListIteratorIface {
    /* Fields of Gee.BidirListIteratorIface */
    insert: (item?: object | null) => void
    static name: string
}
export abstract class BidirMapIteratorIface {
    /* Fields of Gee.BidirMapIteratorIface */
    previous: () => boolean
    has_previous: () => boolean
    first: () => boolean
    last: () => boolean
    static name: string
}
export abstract class BidirSortedSetIface {
    /* Fields of Gee.BidirSortedSetIface */
    bidir_iterator: () => BidirIterator
    get_read_only_view: () => BidirSortedSet
    static name: string
}
export abstract class BidirSortedMapIface {
    /* Fields of Gee.BidirSortedMapIface */
    bidir_map_iterator: () => BidirMapIterator
    get_read_only_view: () => BidirSortedMap
    static name: string
}
export abstract class CollectionIface {
    /* Fields of Gee.CollectionIface */
    contains: (item?: object | null) => boolean
    add: (item?: object | null) => boolean
    remove: (item?: object | null) => boolean
    clear: () => void
    add_all: (collection: Collection) => boolean
    contains_all: (collection: Collection) => boolean
    remove_all: (collection: Collection) => boolean
    retain_all: (collection: Collection) => boolean
    to_array: () => object[]
    add_all_array: (array: object[]) => boolean
    contains_all_array: (array: object[]) => boolean
    remove_all_array: (array: object[]) => boolean
    add_all_iterator: (iter: Iterator) => boolean
    contains_all_iterator: (iter: Iterator) => boolean
    remove_all_iterator: (iter: Iterator) => boolean
    get_size: () => number
    get_is_empty: () => boolean
    get_read_only: () => boolean
    get_read_only_view: () => Collection
    static name: string
}
export abstract class ComparableIface {
    /* Fields of Gee.ComparableIface */
    compare_to: (object?: object | null) => number
    static name: string
}
export abstract class DequeIface {
    /* Fields of Gee.DequeIface */
    offer_head: (element?: object | null) => boolean
    peek_head: () => object | null
    poll_head: () => object | null
    drain_head: (recipient: Collection, amount: number) => number
    offer_tail: (element?: object | null) => boolean
    peek_tail: () => object | null
    poll_tail: () => object | null
    drain_tail: (recipient: Collection, amount: number) => number
    static name: string
}
export abstract class FutureIface {
    /* Fields of Gee.FutureIface */
    wait: () => object | null
    wait_until: (end_time: number) => [ /* returnType */ boolean, /* value */ object | null ]
    wait_async: (_callback_?: Gio.AsyncReadyCallback | null) => void
    wait_finish: (_res_: Gio.AsyncResult) => object | null
    map: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    light_map: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    light_map_broken: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    zip: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.Type, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Future) => Future
    flat_map: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    get_value: () => object | null
    get_ready: () => boolean
    get_exception: () => GLib.Error | null
    static name: string
}
export abstract class HashableIface {
    /* Fields of Gee.HashableIface */
    hash: () => number
    equal_to: (object?: object | null) => boolean
    static name: string
}
export abstract class IterableIface {
    /* Fields of Gee.IterableIface */
    iterator: () => Iterator
    static name: string
}
export abstract class IteratorIface {
    /* Fields of Gee.IteratorIface */
    next: () => boolean
    has_next: () => boolean
    get: () => object | null
    remove: () => void
    get_valid: () => boolean
    get_read_only: () => boolean
    static name: string
}
export abstract class ListIface {
    /* Fields of Gee.ListIface */
    list_iterator: () => ListIterator
    get: (index: number) => object | null
    set: (index: number, item?: object | null) => void
    index_of: (item?: object | null) => number
    insert: (index: number, item?: object | null) => void
    remove_at: (index: number) => object | null
    slice: (start: number, stop: number) => List | null
    first: () => object | null
    last: () => object | null
    insert_all: (index: number, collection: Collection) => void
    sort: (compare_func: GLib.CompareDataFunc | null) => void
    get_read_only_view: () => List
    static name: string
}
export abstract class ListIteratorIface {
    /* Fields of Gee.ListIteratorIface */
    set: (item?: object | null) => void
    add: (item?: object | null) => void
    index: () => number
    static name: string
}
export abstract class MapIface {
    /* Fields of Gee.MapIface */
    has_key: (key?: object | null) => boolean
    has: (key?: object | null, value?: object | null) => boolean
    get: (key?: object | null) => object | null
    set: (key?: object | null, value?: object | null) => void
    unset: (key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    clear: () => void
    map_iterator: () => MapIterator
    set_all: (map: Map) => void
    unset_all: (map: Map) => boolean
    has_all: (map: Map) => boolean
    get_size: () => number
    get_is_empty: () => boolean
    get_read_only: () => boolean
    get_keys: () => Set
    get_values: () => Collection
    get_entries: () => Set
    get_read_only_view: () => Map
    static name: string
}
export abstract class MapEntryClass {
    static name: string
}
export class MapEntryPrivate {
    static name: string
}
export abstract class MapIteratorIface {
    /* Fields of Gee.MapIteratorIface */
    next: () => boolean
    has_next: () => boolean
    get_key: () => object | null
    get_value: () => object | null
    set_value: (value?: object | null) => void
    unset: () => void
    fold: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, seed?: object | null) => object | null
    foreach: (f: ForallMapFunc) => boolean
    get_valid: () => boolean
    get_mutable: () => boolean
    get_read_only: () => boolean
    static name: string
}
export abstract class MultiMapIface {
    /* Fields of Gee.MultiMapIface */
    get_keys: () => Set
    get_all_keys: () => MultiSet
    get_values: () => Collection
    contains: (key?: object | null) => boolean
    get: (key?: object | null) => Collection
    set: (key?: object | null, value?: object | null) => void
    remove: (key?: object | null, value?: object | null) => boolean
    remove_all: (key?: object | null) => boolean
    clear: () => void
    map_iterator: () => MapIterator
    get_size: () => number
    get_read_only: () => boolean
    get_read_only_view: () => MultiMap
    static name: string
}
export abstract class MultiSetIface {
    /* Fields of Gee.MultiSetIface */
    count: (item?: object | null) => number
    get_read_only_view: () => MultiSet
    static name: string
}
export abstract class QueueIface {
    /* Fields of Gee.QueueIface */
    offer: (element?: object | null) => boolean
    peek: () => object | null
    poll: () => object | null
    drain: (recipient: Collection, amount: number) => number
    get_capacity: () => number
    get_remaining_capacity: () => number
    get_is_full: () => boolean
    static name: string
}
export abstract class SetIface {
    /* Fields of Gee.SetIface */
    get_read_only_view: () => Set
    static name: string
}
export abstract class SortedMapIface {
    /* Fields of Gee.SortedMapIface */
    head_map: (before?: object | null) => SortedMap
    tail_map: (after?: object | null) => SortedMap
    sub_map: (before?: object | null, after?: object | null) => SortedMap
    get_ascending_keys: () => SortedSet
    get_ascending_entries: () => SortedSet
    get_read_only_view: () => SortedMap
    static name: string
}
export abstract class SortedSetIface {
    /* Fields of Gee.SortedSetIface */
    first: () => object | null
    last: () => object | null
    iterator_at: (element?: object | null) => Iterator | null
    lower: (element?: object | null) => object | null
    higher: (element?: object | null) => object | null
    floor: (element?: object | null) => object | null
    ceil: (element?: object | null) => object | null
    head_set: (before?: object | null) => SortedSet
    tail_set: (after?: object | null) => SortedSet
    sub_set: (from?: object | null, to?: object | null) => SortedSet
    get_read_only_view: () => SortedSet
    static name: string
}
export abstract class TraversableIface {
    /* Fields of Gee.TraversableIface */
    foreach: (f: ForallFunc) => boolean
    stream: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc) => Iterator
    fold: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null) => object | null
    map: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc) => Iterator
    scan: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed?: object | null) => Iterator
    filter: (pred: Predicate) => Iterator
    chop: (offset: number, length: number) => Iterator
    flat_map: (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc) => Iterator
    tee: (forks: number) => Iterator[]
    first_match: (pred: Predicate) => object | null
    any_match: (pred: Predicate) => boolean
    all_match: (pred: Predicate) => boolean
    max: (compare: GLib.CompareDataFunc) => object | null
    min: (compare: GLib.CompareDataFunc) => object | null
    order_by: (compare: GLib.CompareDataFunc | null) => Iterator
    get_element_type: () => GObject.Type
    static name: string
}