/**
 * Bump-0.1
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gee from './Gee-0.8';

export interface Callback {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): object | null
}
export interface Queue_ConstructProps extends GObject.Object_ConstructProps {
}
export class Queue {
    /* Properties of Bump-0.1.Bump.Queue */
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Queue */
    process(wait: GLib.TimeSpan): boolean
    get_length(): number
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
    /* Virtual methods of Bump-0.1.Bump.Queue */
    vfunc_process(wait: GLib.TimeSpan): boolean
    vfunc_get_length(): number
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
    connect(sigName: "notify::length", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Queue_ConstructProps)
    _init (config?: Queue_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Threading_ConstructProps extends GObject.Object_ConstructProps {
}
export class Threading {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Threading */
    get_max_threads(): number
    set_max_threads(value: number): void
    get_max_idle_time(): GLib.TimeSpan
    set_max_idle_time(value: GLib.TimeSpan): void
    get_num_threads(): number
    get_idle_threads(): number
    increase_max_threads(new_max_threads: number): void
    run_task(func: GLib.SourceFunc): boolean
    spawn(max_new_threads: number): number
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
    /* Virtual methods of Bump-0.1.Bump.Threading */
    vfunc_spawn(max_new_threads: number): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Threading, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Threading, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Threading_ConstructProps)
    _init (config?: Threading_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AsyncPriorityQueue_ConstructProps extends Gee.PriorityQueue_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
    waiting_threads?: number
}
export class AsyncPriorityQueue {
    /* Properties of Bump-0.1.Bump.AsyncPriorityQueue */
    waiting_threads: number
    /* Properties of Gee-0.8.Gee.AbstractQueue */
    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Gee.Collection
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.AsyncPriorityQueue */
    poll_timed(wait: GLib.TimeSpan): object | null
    peek_timed(wait: GLib.TimeSpan): object | null
    offer(element?: object | null): boolean
    get_waiting_threads(): number
    /* Methods of Gee-0.8.Gee.PriorityQueue */
    drain(recipient: Gee.Collection, amount: number): number
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
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Gee.Collection
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
    vfunc_drain(recipient: Gee.Collection, amount: number): number
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
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
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Bump-0.1.Bump.AsyncPriorityQueue */
    connect(sigName: "consumer-shortage", callback: (($obj: AsyncPriorityQueue) => void)): number
    connect_after(sigName: "consumer-shortage", callback: (($obj: AsyncPriorityQueue) => void)): number
    emit(sigName: "consumer-shortage"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::waiting-threads", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::waiting-threads", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-full", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AsyncPriorityQueue_ConstructProps)
    _init (config?: AsyncPriorityQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): AsyncPriorityQueue
    static $gtype: GObject.Type
}
export interface Claim_ConstructProps extends GObject.Object_ConstructProps {
    time_acquired?: number
    time_released?: number
}
export class Claim {
    /* Properties of Bump-0.1.Bump.Claim */
    readonly active: boolean
    time_acquired: number
    time_released: number
    readonly duration_held: GLib.TimeSpan
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Claim */
    release(): void
    init(cancellable?: Gio.Cancellable | null): boolean
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    init_finish(_res_: Gio.AsyncResult): boolean
    get_active(): boolean
    get_time_acquired(): number
    get_time_released(): number
    get_duration_held(): GLib.TimeSpan
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of Bump-0.1.Bump.Claim */
    vfunc_release(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(_res_: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-acquired", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-acquired", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-released", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-released", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration-held", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-held", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Claim_ConstructProps)
    _init (config?: Claim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Claim
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface Event_ConstructProps extends GObject.Object_ConstructProps {
    t_type?: GObject.Type
    t_dup_func?: GObject.BoxedCopyFunc
    t_destroy_func?: GLib.DestroyNotify
    pool?: TaskQueue
    auto_reset?: boolean
    triggered?: boolean
}
export class Event {
    /* Properties of Bump-0.1.Bump.Event */
    triggered: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Event */
    reset(): void
    trigger(value?: object | null): void
    add(func: any, priority: number, cancellable?: Gio.Cancellable | null): void
    execute(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): object | null
    execute_async(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    execute_finish(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
    execute_background(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    execute_background_finish(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
    get_pool(): TaskQueue
    get_auto_reset(): boolean
    get_triggered(): boolean
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::triggered", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::triggered", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Event_ConstructProps)
    _init (config?: Event_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(t_type: GObject.Type, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, auto_reset: boolean): Event
    static $gtype: GObject.Type
}
export interface Factory_ConstructProps extends GObject.Object_ConstructProps {
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
export class Factory {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Factory */
    create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    create_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    create_finish(_res_: Gio.AsyncResult): object | null
    create_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    create_background_finish(_res_: Gio.AsyncResult): object | null
    acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    acquire_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    acquire_finish(_res_: Gio.AsyncResult): object | null
    acquire_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    acquire_background_finish(_res_: Gio.AsyncResult): object | null
    get_construct_properties(): GObject.Parameter[] | null
    set_construct_properties(value: GObject.Parameter[] | null): void
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
    /* Virtual methods of Bump-0.1.Bump.Factory */
    vfunc_create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    vfunc_create_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_create_finish(_res_: Gio.AsyncResult): object | null
    vfunc_create_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_create_background_finish(_res_: Gio.AsyncResult): object | null
    vfunc_acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    vfunc_acquire_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_acquire_finish(_res_: Gio.AsyncResult): object | null
    vfunc_acquire_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_acquire_background_finish(_res_: Gio.AsyncResult): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Factory_ConstructProps)
    _init (config?: Factory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Lazy_ConstructProps extends Factory_ConstructProps {
    t_type?: GObject.Type
    t_dup_func?: GObject.BoxedCopyFunc
    t_destroy_func?: GLib.DestroyNotify
    pool?: TaskQueue
}
export class Lazy {
    /* Properties of Bump-0.1.Bump.Lazy */
    readonly value: object
    readonly is_initialized: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Lazy */
    get_pool(): TaskQueue
    get_value(): object | null
    get_is_initialized(): boolean
    /* Methods of Bump-0.1.Bump.Factory */
    create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    create_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    create_finish(_res_: Gio.AsyncResult): object | null
    create_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    create_background_finish(_res_: Gio.AsyncResult): object | null
    acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    acquire_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    acquire_finish(_res_: Gio.AsyncResult): object | null
    acquire_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    acquire_background_finish(_res_: Gio.AsyncResult): object | null
    get_construct_properties(): GObject.Parameter[] | null
    set_construct_properties(value: GObject.Parameter[] | null): void
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
    /* Virtual methods of Bump-0.1.Bump.Factory */
    vfunc_create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    vfunc_create_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_create_finish(_res_: Gio.AsyncResult): object | null
    vfunc_create_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_create_background_finish(_res_: Gio.AsyncResult): object | null
    vfunc_acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    vfunc_acquire_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_acquire_finish(_res_: Gio.AsyncResult): object | null
    vfunc_acquire_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_acquire_background_finish(_res_: Gio.AsyncResult): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-initialized", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-initialized", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Lazy_ConstructProps)
    _init (config?: Lazy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(t_type: GObject.Type, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): Lazy
    static $gtype: GObject.Type
}
export interface ResourceClaim_ConstructProps extends Claim_ConstructProps {
    t_type?: GObject.Type
    t_dup_func?: GObject.BoxedCopyFunc
    t_destroy_func?: GLib.DestroyNotify
    pool?: ResourcePool
}
export class ResourceClaim {
    /* Properties of Bump-0.1.Bump.ResourceClaim */
    readonly resource: object
    /* Properties of Bump-0.1.Bump.Claim */
    readonly active: boolean
    time_acquired: number
    time_released: number
    readonly duration_held: GLib.TimeSpan
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.ResourceClaim */
    get_pool(): ResourcePool
    get_resource(): object | null
    /* Methods of Bump-0.1.Bump.Claim */
    release(): void
    init(cancellable?: Gio.Cancellable | null): boolean
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    init_finish(_res_: Gio.AsyncResult): boolean
    get_active(): boolean
    get_time_acquired(): number
    get_time_released(): number
    get_duration_held(): GLib.TimeSpan
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
    /* Virtual methods of Bump-0.1.Bump.Claim */
    vfunc_release(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(_res_: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::resource", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-acquired", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-acquired", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-released", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-released", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration-held", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-held", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResourceClaim_ConstructProps)
    _init (config?: ResourceClaim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(t_type: GObject.Type, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, pool: ResourcePool): ResourceClaim
    static new(): ResourceClaim
    static $gtype: GObject.Type
}
export interface ResourcePool_ConstructProps extends Factory_ConstructProps {
    t_type?: GObject.Type
    t_dup_func?: GObject.BoxedCopyFunc
    t_destroy_func?: GLib.DestroyNotify
    max_resources?: number
    max_idle_time?: GLib.TimeSpan
    num_resources?: number
    pool?: TaskQueue
}
export class ResourcePool {
    /* Properties of Bump-0.1.Bump.ResourcePool */
    max_idle_time: GLib.TimeSpan
    num_resources: number
    readonly idle_resources: number
    readonly active_resources: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.ResourcePool */
    release(resource?: object | null): void
    execute(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): object | null
    execute_async(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    execute_finish(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
    execute_background(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    execute_background_finish(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
    claim(priority: number, cancellable?: Gio.Cancellable | null): ResourceClaim
    claim_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    claim_finish(_res_: Gio.AsyncResult): ResourceClaim
    get_max_resources(): number
    get_max_idle_time(): GLib.TimeSpan
    set_max_idle_time(value: GLib.TimeSpan): void
    get_num_resources(): number
    get_idle_resources(): number
    get_active_resources(): number
    get_pool(): TaskQueue
    /* Methods of Bump-0.1.Bump.Factory */
    create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    create_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    create_finish(_res_: Gio.AsyncResult): object | null
    create_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    create_background_finish(_res_: Gio.AsyncResult): object | null
    acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    acquire_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    acquire_finish(_res_: Gio.AsyncResult): object | null
    acquire_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    acquire_background_finish(_res_: Gio.AsyncResult): object | null
    get_construct_properties(): GObject.Parameter[] | null
    set_construct_properties(value: GObject.Parameter[] | null): void
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
    /* Virtual methods of Bump-0.1.Bump.ResourcePool */
    vfunc_release(resource?: object | null): void
    /* Virtual methods of Bump-0.1.Bump.Factory */
    vfunc_create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    vfunc_create_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_create_finish(_res_: Gio.AsyncResult): object | null
    vfunc_create_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_create_background_finish(_res_: Gio.AsyncResult): object | null
    vfunc_acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    vfunc_acquire_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_acquire_finish(_res_: Gio.AsyncResult): object | null
    vfunc_acquire_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_acquire_background_finish(_res_: Gio.AsyncResult): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-idle-time", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-idle-time", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResourcePool_ConstructProps)
    _init (config?: ResourcePool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(t_type: GObject.Type, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, max_resources: number): ResourcePool
    static $gtype: GObject.Type
}
export interface Semaphore_ConstructProps extends TaskQueue_ConstructProps {
    max_claims?: number
    claims?: number
    pool?: TaskQueue
}
export class Semaphore {
    /* Properties of Bump-0.1.Bump.Semaphore */
    claims: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.Semaphore */
    unlock(): void
    lock(priority: number, cancellable?: Gio.Cancellable | null): void
    lock_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    lock_finish(_res_: Gio.AsyncResult): void
    claim(priority: number, cancellable?: Gio.Cancellable | null): SemaphoreClaim
    claim_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    claim_finish(_res_: Gio.AsyncResult): SemaphoreClaim
    get_max_claims(): number
    get_claims(): number
    get_pool(): TaskQueue
    /* Methods of Bump-0.1.Bump.TaskQueue */
    spawn(max: number): number
    add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    process(wait: GLib.TimeSpan): boolean
    execute(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): object | null
    execute_async(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    execute_finish(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
    execute_background(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    execute_background_finish(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
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
    /* Virtual methods of Bump-0.1.Bump.Semaphore */
    vfunc_claim(priority: number, cancellable?: Gio.Cancellable | null): SemaphoreClaim
    vfunc_claim_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_claim_finish(_res_: Gio.AsyncResult): SemaphoreClaim
    /* Virtual methods of Bump-0.1.Bump.TaskQueue */
    vfunc_spawn(max: number): number
    vfunc_add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    vfunc_process(wait: GLib.TimeSpan): boolean
    vfunc_execute(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): object | null
    vfunc_execute_async(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_execute_finish(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
    vfunc_execute_background(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_execute_background_finish(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
    vfunc_get_length(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::claims", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::claims", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Semaphore_ConstructProps)
    _init (config?: Semaphore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(max_claims: number): Semaphore
    static new(): Semaphore
    static $gtype: GObject.Type
}
export interface SemaphoreClaim_ConstructProps extends Claim_ConstructProps {
    semaphore?: Semaphore
}
export class SemaphoreClaim {
    /* Properties of Bump-0.1.Bump.Claim */
    readonly active: boolean
    time_acquired: number
    time_released: number
    readonly duration_held: GLib.TimeSpan
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.SemaphoreClaim */
    get_semaphore(): Semaphore
    /* Methods of Bump-0.1.Bump.Claim */
    release(): void
    init(cancellable?: Gio.Cancellable | null): boolean
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    init_finish(_res_: Gio.AsyncResult): boolean
    get_active(): boolean
    get_time_acquired(): number
    get_time_released(): number
    get_duration_held(): GLib.TimeSpan
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
    /* Virtual methods of Bump-0.1.Bump.Claim */
    vfunc_release(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(_res_: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-acquired", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-acquired", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-released", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-released", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration-held", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-held", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SemaphoreClaim_ConstructProps)
    _init (config?: SemaphoreClaim_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TaskQueue_ConstructProps extends GObject.Object_ConstructProps {
}
export class TaskQueue {
    /* Properties of Bump-0.1.Bump.Queue */
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bump-0.1.Bump.TaskQueue */
    spawn(max: number): number
    add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    process(wait: GLib.TimeSpan): boolean
    execute(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): object | null
    execute_async(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    execute_finish(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
    execute_background(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    execute_background_finish(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
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
    /* Methods of Bump-0.1.Bump.Queue */
    get_length(): number
    /* Methods of Bump-0.1.Bump.Threading */
    get_max_threads(): number
    set_max_threads(value: number): void
    get_max_idle_time(): GLib.TimeSpan
    set_max_idle_time(value: GLib.TimeSpan): void
    get_num_threads(): number
    get_idle_threads(): number
    increase_max_threads(new_max_threads: number): void
    run_task(func: GLib.SourceFunc): boolean
    spawn(max_new_threads: number): number
    /* Virtual methods of Bump-0.1.Bump.TaskQueue */
    vfunc_spawn(max: number): number
    vfunc_add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    vfunc_process(wait: GLib.TimeSpan): boolean
    vfunc_execute(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): object | null
    vfunc_execute_async(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_execute_finish(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
    vfunc_execute_background(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_execute_background_finish(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): object | null
    vfunc_get_length(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TaskQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TaskQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::length", callback: (($obj: TaskQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: TaskQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TaskQueue_ConstructProps)
    _init (config?: TaskQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TaskQueue
    static get_global(): TaskQueue
    static $gtype: GObject.Type
}
export abstract class AsyncPriorityQueueClass {
    static name: string
}
export class AsyncPriorityQueuePrivate {
    static name: string
}
export abstract class ClaimClass {
    /* Fields of Bump-0.1.Bump.ClaimClass */
    release: () => void
    init: (cancellable?: Gio.Cancellable | null) => boolean
    init_async: (io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    init_finish: (_res_: Gio.AsyncResult) => boolean
    static name: string
}
export class ClaimPrivate {
    static name: string
}
export abstract class EventClass {
    static name: string
}
export class EventPrivate {
    static name: string
}
export abstract class FactoryClass {
    /* Fields of Bump-0.1.Bump.FactoryClass */
    create: (priority: number, cancellable?: Gio.Cancellable | null) => object | null
    create_async: (priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    create_finish: (_res_: Gio.AsyncResult) => object | null
    create_background: (priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    create_background_finish: (_res_: Gio.AsyncResult) => object | null
    acquire: (priority: number, cancellable?: Gio.Cancellable | null) => object | null
    acquire_async: (priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    acquire_finish: (_res_: Gio.AsyncResult) => object | null
    acquire_background: (priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    acquire_background_finish: (_res_: Gio.AsyncResult) => object | null
    static name: string
}
export class FactoryPrivate {
    static name: string
}
export abstract class LazyClass {
    static name: string
}
export class LazyPrivate {
    static name: string
}
export abstract class ResourceClaimClass {
    static name: string
}
export class ResourceClaimPrivate {
    static name: string
}
export abstract class ResourcePoolClass {
    /* Fields of Bump-0.1.Bump.ResourcePoolClass */
    release: (resource?: object | null) => void
    static name: string
}
export class ResourcePoolPrivate {
    static name: string
}
export abstract class SemaphoreClass {
    /* Fields of Bump-0.1.Bump.SemaphoreClass */
    claim: (priority: number, cancellable?: Gio.Cancellable | null) => SemaphoreClaim
    claim_async: (priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    claim_finish: (_res_: Gio.AsyncResult) => SemaphoreClaim
    static name: string
}
export class SemaphorePrivate {
    static name: string
}
export abstract class SemaphoreClaimClass {
    static name: string
}
export class SemaphoreClaimPrivate {
    static name: string
}
export abstract class TaskQueueClass {
    /* Fields of Bump-0.1.Bump.TaskQueueClass */
    spawn: (max: number) => number
    add: (task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null) => void
    process: (wait: GLib.TimeSpan) => boolean
    execute: (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null) => object | null
    execute_async: (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    execute_finish: (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult) => object | null
    execute_background: (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    execute_background_finish: (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult) => object | null
    static name: string
}
export class TaskQueuePrivate {
    static name: string
}
export abstract class QueueIface {
    /* Fields of Bump-0.1.Bump.QueueIface */
    process: (wait: GLib.TimeSpan) => boolean
    get_length: () => number
    static name: string
}
export abstract class ThreadingIface {
    /* Fields of Bump-0.1.Bump.ThreadingIface */
    spawn: (max_new_threads: number) => number
    static name: string
}