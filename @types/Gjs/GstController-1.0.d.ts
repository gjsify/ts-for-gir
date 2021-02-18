/**
 * GstController-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum InterpolationMode {
    NONE,
    LINEAR,
    CUBIC,
    CUBIC_MONOTONIC,
}
export enum LFOWaveform {
    SINE,
    SQUARE,
    SAW,
    REVERSE_SAW,
    TRIANGLE,
}
export function timed_value_control_invalidate_cache(self: TimedValueControlSource): void
export interface DirectControlBindingConvertGValue {
    (self: DirectControlBinding, src_value: number, dest_value: any): void
}
export interface DirectControlBindingConvertValue {
    (self: DirectControlBinding, src_value: number, dest_value?: object | null): void
}
export interface ARGBControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {
    control_source_a?: Gst.ControlSource
    control_source_b?: Gst.ControlSource
    control_source_g?: Gst.ControlSource
    control_source_r?: Gst.ControlSource
}
export class ARGBControlBinding {
    /* Properties of GstController.ARGBControlBinding */
    control_source_a: Gst.ControlSource
    control_source_b: Gst.ControlSource
    control_source_g: Gst.ControlSource
    control_source_r: Gst.ControlSource
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.ControlBinding */
    pspec: GObject.ParamSpec
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst.ControlBinding */
    get_g_value_array(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_value(timestamp: Gst.ClockTime): any | null
    is_disabled(): boolean
    set_disabled(disabled: boolean): void
    sync_values(object: Gst.Object, timestamp: Gst.ClockTime, last_sync: Gst.ClockTime): boolean
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
    /* Virtual methods of Gst.ControlBinding */
    vfunc_get_g_value_array(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    vfunc_get_value(timestamp: Gst.ClockTime): any | null
    vfunc_sync_values(object: Gst.Object, timestamp: Gst.ClockTime, last_sync: Gst.ClockTime): boolean
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
    connect(sigName: "deep-notify", callback: (($obj: ARGBControlBinding, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ARGBControlBinding, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::control-source-a", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-a", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::control-source-b", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-b", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::control-source-g", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-g", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::control-source-r", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-r", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ARGBControlBinding_ConstructProps)
    _init (config?: ARGBControlBinding_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: Gst.Object, property_name: string, cs_a: Gst.ControlSource, cs_r: Gst.ControlSource, cs_g: Gst.ControlSource, cs_b: Gst.ControlSource): ARGBControlBinding
    static $gtype: GObject.Type
}
export interface DirectControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {
    absolute?: boolean
    control_source?: Gst.ControlSource
}
export class DirectControlBinding {
    /* Properties of GstController.DirectControlBinding */
    control_source: Gst.ControlSource
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.ControlBinding */
    pspec: GObject.ParamSpec
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst.ControlBinding */
    get_g_value_array(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_value(timestamp: Gst.ClockTime): any | null
    is_disabled(): boolean
    set_disabled(disabled: boolean): void
    sync_values(object: Gst.Object, timestamp: Gst.ClockTime, last_sync: Gst.ClockTime): boolean
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
    /* Virtual methods of Gst.ControlBinding */
    vfunc_get_g_value_array(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    vfunc_get_value(timestamp: Gst.ClockTime): any | null
    vfunc_sync_values(object: Gst.Object, timestamp: Gst.ClockTime, last_sync: Gst.ClockTime): boolean
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
    connect(sigName: "deep-notify", callback: (($obj: DirectControlBinding, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DirectControlBinding, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::control-source", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DirectControlBinding_ConstructProps)
    _init (config?: DirectControlBinding_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: Gst.Object, property_name: string, cs: Gst.ControlSource): DirectControlBinding
    static new_absolute(object: Gst.Object, property_name: string, cs: Gst.ControlSource): DirectControlBinding
    static $gtype: GObject.Type
}
export interface InterpolationControlSource_ConstructProps extends TimedValueControlSource_ConstructProps {
    mode?: InterpolationMode
}
export class InterpolationControlSource {
    /* Properties of GstController.InterpolationControlSource */
    mode: InterpolationMode
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstController.TimedValueControlSource */
    lock: GLib.Mutex
    values: GLib.Sequence
    nvalues: number
    valid_cache: boolean
    /* Fields of Gst.ControlSource */
    get_value: Gst.ControlSourceGetValue
    get_value_array: Gst.ControlSourceGetValueArray
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstController.TimedValueControlSource */
    find_control_point_iter(timestamp: Gst.ClockTime): GLib.SequenceIter
    get_all(): Gst.TimedValue[]
    get_count(): number
    set(timestamp: Gst.ClockTime, value: number): boolean
    set_from_list(timedvalues: Gst.TimedValue[]): boolean
    unset(timestamp: Gst.ClockTime): boolean
    unset_all(): void
    /* Methods of Gst.ControlSource */
    control_source_get_value(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    control_source_get_value_array(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
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
    /* Signals of GstController.TimedValueControlSource */
    connect(sigName: "value-added", callback: (($obj: InterpolationControlSource, timed_value: ControlPoint) => void)): number
    connect_after(sigName: "value-added", callback: (($obj: InterpolationControlSource, timed_value: ControlPoint) => void)): number
    emit(sigName: "value-added", timed_value: ControlPoint): void
    connect(sigName: "value-changed", callback: (($obj: InterpolationControlSource, timed_value: ControlPoint) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: InterpolationControlSource, timed_value: ControlPoint) => void)): number
    emit(sigName: "value-changed", timed_value: ControlPoint): void
    connect(sigName: "value-removed", callback: (($obj: InterpolationControlSource, timed_value: ControlPoint) => void)): number
    connect_after(sigName: "value-removed", callback: (($obj: InterpolationControlSource, timed_value: ControlPoint) => void)): number
    emit(sigName: "value-removed", timed_value: ControlPoint): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: InterpolationControlSource, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: InterpolationControlSource, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mode", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InterpolationControlSource_ConstructProps)
    _init (config?: InterpolationControlSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InterpolationControlSource
    static $gtype: GObject.Type
}
export interface LFOControlSource_ConstructProps extends Gst.ControlSource_ConstructProps {
    amplitude?: number
    frequency?: number
    offset?: number
    timeshift?: number
    waveform?: LFOWaveform
}
export class LFOControlSource {
    /* Properties of GstController.LFOControlSource */
    amplitude: number
    frequency: number
    offset: number
    timeshift: number
    waveform: LFOWaveform
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.ControlSource */
    get_value: Gst.ControlSourceGetValue
    get_value_array: Gst.ControlSourceGetValueArray
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst.ControlSource */
    control_source_get_value(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    control_source_get_value_array(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
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
    connect(sigName: "deep-notify", callback: (($obj: LFOControlSource, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: LFOControlSource, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::amplitude", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::amplitude", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frequency", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frequency", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeshift", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeshift", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::waveform", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::waveform", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LFOControlSource_ConstructProps)
    _init (config?: LFOControlSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LFOControlSource
    static $gtype: GObject.Type
}
export interface ProxyControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {
}
export class ProxyControlBinding {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.ControlBinding */
    pspec: GObject.ParamSpec
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst.ControlBinding */
    get_g_value_array(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_value(timestamp: Gst.ClockTime): any | null
    is_disabled(): boolean
    set_disabled(disabled: boolean): void
    sync_values(object: Gst.Object, timestamp: Gst.ClockTime, last_sync: Gst.ClockTime): boolean
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
    /* Virtual methods of Gst.ControlBinding */
    vfunc_get_g_value_array(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    vfunc_get_value(timestamp: Gst.ClockTime): any | null
    vfunc_sync_values(object: Gst.Object, timestamp: Gst.ClockTime, last_sync: Gst.ClockTime): boolean
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
    connect(sigName: "deep-notify", callback: (($obj: ProxyControlBinding, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ProxyControlBinding, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyControlBinding_ConstructProps)
    _init (config?: ProxyControlBinding_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: Gst.Object, property_name: string, ref_object: Gst.Object, ref_property_name: string): ProxyControlBinding
    static $gtype: GObject.Type
}
export interface TimedValueControlSource_ConstructProps extends Gst.ControlSource_ConstructProps {
}
export class TimedValueControlSource {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstController.TimedValueControlSource */
    lock: GLib.Mutex
    values: GLib.Sequence
    nvalues: number
    valid_cache: boolean
    /* Fields of Gst.ControlSource */
    get_value: Gst.ControlSourceGetValue
    get_value_array: Gst.ControlSourceGetValueArray
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstController.TimedValueControlSource */
    find_control_point_iter(timestamp: Gst.ClockTime): GLib.SequenceIter
    get_all(): Gst.TimedValue[]
    get_count(): number
    set(timestamp: Gst.ClockTime, value: number): boolean
    set_from_list(timedvalues: Gst.TimedValue[]): boolean
    unset(timestamp: Gst.ClockTime): boolean
    unset_all(): void
    /* Methods of Gst.ControlSource */
    control_source_get_value(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    control_source_get_value_array(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
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
    /* Signals of GstController.TimedValueControlSource */
    connect(sigName: "value-added", callback: (($obj: TimedValueControlSource, timed_value: ControlPoint) => void)): number
    connect_after(sigName: "value-added", callback: (($obj: TimedValueControlSource, timed_value: ControlPoint) => void)): number
    emit(sigName: "value-added", timed_value: ControlPoint): void
    connect(sigName: "value-changed", callback: (($obj: TimedValueControlSource, timed_value: ControlPoint) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: TimedValueControlSource, timed_value: ControlPoint) => void)): number
    emit(sigName: "value-changed", timed_value: ControlPoint): void
    connect(sigName: "value-removed", callback: (($obj: TimedValueControlSource, timed_value: ControlPoint) => void)): number
    connect_after(sigName: "value-removed", callback: (($obj: TimedValueControlSource, timed_value: ControlPoint) => void)): number
    emit(sigName: "value-removed", timed_value: ControlPoint): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TimedValueControlSource, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TimedValueControlSource, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimedValueControlSource_ConstructProps)
    _init (config?: TimedValueControlSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TriggerControlSource_ConstructProps extends TimedValueControlSource_ConstructProps {
    tolerance?: number
}
export class TriggerControlSource {
    /* Properties of GstController.TriggerControlSource */
    tolerance: number
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstController.TimedValueControlSource */
    lock: GLib.Mutex
    values: GLib.Sequence
    nvalues: number
    valid_cache: boolean
    /* Fields of Gst.ControlSource */
    get_value: Gst.ControlSourceGetValue
    get_value_array: Gst.ControlSourceGetValueArray
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstController.TimedValueControlSource */
    find_control_point_iter(timestamp: Gst.ClockTime): GLib.SequenceIter
    get_all(): Gst.TimedValue[]
    get_count(): number
    set(timestamp: Gst.ClockTime, value: number): boolean
    set_from_list(timedvalues: Gst.TimedValue[]): boolean
    unset(timestamp: Gst.ClockTime): boolean
    unset_all(): void
    /* Methods of Gst.ControlSource */
    control_source_get_value(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    control_source_get_value_array(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
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
    /* Signals of GstController.TimedValueControlSource */
    connect(sigName: "value-added", callback: (($obj: TriggerControlSource, timed_value: ControlPoint) => void)): number
    connect_after(sigName: "value-added", callback: (($obj: TriggerControlSource, timed_value: ControlPoint) => void)): number
    emit(sigName: "value-added", timed_value: ControlPoint): void
    connect(sigName: "value-changed", callback: (($obj: TriggerControlSource, timed_value: ControlPoint) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: TriggerControlSource, timed_value: ControlPoint) => void)): number
    emit(sigName: "value-changed", timed_value: ControlPoint): void
    connect(sigName: "value-removed", callback: (($obj: TriggerControlSource, timed_value: ControlPoint) => void)): number
    connect_after(sigName: "value-removed", callback: (($obj: TriggerControlSource, timed_value: ControlPoint) => void)): number
    emit(sigName: "value-removed", timed_value: ControlPoint): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TriggerControlSource, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TriggerControlSource, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::tolerance", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tolerance", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TriggerControlSource_ConstructProps)
    _init (config?: TriggerControlSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TriggerControlSource
    static $gtype: GObject.Type
}
export abstract class ARGBControlBindingClass {
    /* Fields of GstController.ARGBControlBindingClass */
    parent_class: Gst.ControlBindingClass
    static name: string
}
export class ControlPoint {
    /* Fields of GstController.ControlPoint */
    timestamp: Gst.ClockTime
    value: number
    /* Methods of GstController.ControlPoint */
    copy(): ControlPoint
    free(): void
    static name: string
}
export abstract class DirectControlBindingClass {
    /* Fields of GstController.DirectControlBindingClass */
    parent_class: Gst.ControlBindingClass
    static name: string
}
export abstract class InterpolationControlSourceClass {
    /* Fields of GstController.InterpolationControlSourceClass */
    parent_class: TimedValueControlSourceClass
    static name: string
}
export class InterpolationControlSourcePrivate {
    static name: string
}
export abstract class LFOControlSourceClass {
    /* Fields of GstController.LFOControlSourceClass */
    parent_class: Gst.ControlSourceClass
    static name: string
}
export class LFOControlSourcePrivate {
    static name: string
}
export abstract class ProxyControlBindingClass {
    static name: string
}
export abstract class TimedValueControlSourceClass {
    /* Fields of GstController.TimedValueControlSourceClass */
    parent_class: Gst.ControlSourceClass
    static name: string
}
export class TimedValueControlSourcePrivate {
    static name: string
}
export abstract class TriggerControlSourceClass {
    /* Fields of GstController.TriggerControlSourceClass */
    parent_class: TimedValueControlSourceClass
    static name: string
}
export class TriggerControlSourcePrivate {
    static name: string
}