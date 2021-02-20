/**
 * GstAllocators-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum FdMemoryFlags {
    NONE,
    KEEP_MAPPED,
    MAP_PRIVATE,
    DONT_CLOSE,
}
export const ALLOCATOR_DMABUF: string
export const ALLOCATOR_FD: string
export const CAPS_FEATURE_MEMORY_DMABUF: string
export function dmabuf_memory_get_fd(mem: Gst.Memory): number
export function fd_memory_get_fd(mem: Gst.Memory): number
export function is_dmabuf_memory(mem: Gst.Memory): boolean
export function is_fd_memory(mem: Gst.Memory): boolean
export function is_phys_memory(mem: Gst.Memory): boolean
export function phys_memory_get_phys_addr(mem: Gst.Memory): number
export interface PhysMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}
export class PhysMemoryAllocator {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Allocator */
    object: Gst.Object
    mem_type: string
    mem_map: Gst.MemoryMapFunction
    mem_unmap: Gst.MemoryUnmapFunction
    mem_copy: Gst.MemoryCopyFunction
    mem_share: Gst.MemoryShareFunction
    mem_is_span: Gst.MemoryIsSpanFunction
    mem_map_full: Gst.MemoryMapFullFunction
    mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GstAllocators.PhysMemoryAllocator */
    vfunc_get_phys_addr(mem: Gst.Memory): number
    /* Virtual methods of Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PhysMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PhysMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PhysMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PhysMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: PhysMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PhysMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: PhysMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PhysMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PhysMemoryAllocator_ConstructProps)
    _init (config?: PhysMemoryAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DmaBufAllocator_ConstructProps extends FdAllocator_ConstructProps {
}
export class DmaBufAllocator {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Allocator */
    object: Gst.Object
    mem_type: string
    mem_map: Gst.MemoryMapFunction
    mem_unmap: Gst.MemoryUnmapFunction
    mem_copy: Gst.MemoryCopyFunction
    mem_share: Gst.MemoryShareFunction
    mem_is_span: Gst.MemoryIsSpanFunction
    mem_map_full: Gst.MemoryMapFullFunction
    mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: DmaBufAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DmaBufAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DmaBufAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DmaBufAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: DmaBufAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DmaBufAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: DmaBufAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DmaBufAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DmaBufAllocator_ConstructProps)
    _init (config?: DmaBufAllocator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DmaBufAllocator
    static alloc(allocator: Gst.Allocator, fd: number, size: number): Gst.Memory
    static alloc(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory
    static alloc_with_flags(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory
    static $gtype: GObject.Type
}
export interface FdAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}
export class FdAllocator {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Allocator */
    object: Gst.Object
    mem_type: string
    mem_map: Gst.MemoryMapFunction
    mem_unmap: Gst.MemoryUnmapFunction
    mem_copy: Gst.MemoryCopyFunction
    mem_share: Gst.MemoryShareFunction
    mem_is_span: Gst.MemoryIsSpanFunction
    mem_map_full: Gst.MemoryMapFullFunction
    mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: FdAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: FdAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FdAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FdAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: FdAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FdAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: FdAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FdAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FdAllocator_ConstructProps)
    _init (config?: FdAllocator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FdAllocator
    static alloc(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory
    static $gtype: GObject.Type
}
export abstract class DmaBufAllocatorClass {
    /* Fields of GstAllocators.DmaBufAllocatorClass */
    parent_class: FdAllocatorClass
    static name: string
}
export abstract class FdAllocatorClass {
    /* Fields of GstAllocators.FdAllocatorClass */
    parent_class: Gst.AllocatorClass
    static name: string
}
export abstract class PhysMemoryAllocatorInterface {
    /* Fields of GstAllocators.PhysMemoryAllocatorInterface */
    get_phys_addr: (allocator: PhysMemoryAllocator, mem: Gst.Memory) => number
    static name: string
}