/**
 * GstBase-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum AggregatorStartTimeSelection {
    ZERO,
    FIRST,
    SET,
}
export enum BaseParseFrameFlags {
    NONE,
    NEW_FRAME,
    NO_FRAME,
    CLIP,
    DROP,
    QUEUE,
}
export enum BaseSrcFlags {
    STARTING,
    STARTED,
    LAST,
}
export enum CollectPadsStateFlags {
    EOS,
    FLUSHING,
    NEW_SEGMENT,
    WAITING,
    LOCKED,
}
export const BASE_PARSE_FLAG_DRAINING: number
export const BASE_PARSE_FLAG_LOST_SYNC: number
export const BASE_TRANSFORM_SINK_NAME: string
export const BASE_TRANSFORM_SRC_NAME: string
export function type_find_helper(src: Gst.Pad, size: number): Gst.Caps | null
export function type_find_helper_for_buffer(obj: Gst.Object | null, buf: Gst.Buffer): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
export function type_find_helper_for_buffer_with_extension(obj: Gst.Object | null, buf: Gst.Buffer, extension?: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
export function type_find_helper_for_data(obj: Gst.Object | null, data: Uint8Array[]): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
export function type_find_helper_for_data_with_extension(obj: Gst.Object | null, data: Uint8Array[], extension?: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
export function type_find_helper_for_extension(obj: Gst.Object | null, extension: string): Gst.Caps | null
export function type_find_helper_get_range(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: number, extension?: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
export function type_find_helper_get_range_full(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: number, extension?: string | null): [ /* returnType */ Gst.FlowReturn, /* caps */ Gst.Caps, /* prob */ Gst.TypeFindProbability | null ]
export interface CollectDataDestroyNotify {
    (data: CollectData): void
}
export interface CollectPadsBufferFunction {
    (pads: CollectPads, data: CollectData, buffer: Gst.Buffer): Gst.FlowReturn
}
export interface CollectPadsClipFunction {
    (pads: CollectPads, data: CollectData, inbuffer: Gst.Buffer): Gst.FlowReturn
}
export interface CollectPadsCompareFunction {
    (pads: CollectPads, data1: CollectData, timestamp1: Gst.ClockTime, data2: CollectData, timestamp2: Gst.ClockTime): number
}
export interface CollectPadsEventFunction {
    (pads: CollectPads, pad: CollectData, event: Gst.Event): boolean
}
export interface CollectPadsFlushFunction {
    (pads: CollectPads): void
}
export interface CollectPadsFunction {
    (pads: CollectPads): Gst.FlowReturn
}
export interface CollectPadsQueryFunction {
    (pads: CollectPads, pad: CollectData, query: Gst.Query): boolean
}
export interface DataQueueEmptyCallback {
    (queue: DataQueue, checkdata?: object | null): void
}
export interface DataQueueFullCallback {
    (queue: DataQueue, checkdata?: object | null): void
}
export interface TypeFindHelperGetRangeFunction {
    (obj: Gst.Object, parent: Gst.Object | null, offset: number, length: number): Gst.FlowReturn
}
export interface Adapter_ConstructProps extends GObject.Object_ConstructProps {
}
export class Adapter {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.Adapter */
    available(): number
    available_fast(): number
    clear(): void
    copy(offset: number, size: number): GLib.Bytes
    distance_from_discont(): number
    dts_at_discont(): Gst.ClockTime
    flush(flush: number): void
    get_buffer(nbytes: number): Gst.Buffer | null
    get_buffer_fast(nbytes: number): Gst.Buffer | null
    get_buffer_list(nbytes: number): Gst.BufferList | null
    get_list(nbytes: number): Gst.Buffer[] | null
    map(): Uint8Array[] | null
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number | null ]
    offset_at_discont(): number
    prev_dts(): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prev_dts_at_offset(offset: number): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prev_offset(): [ /* returnType */ number, /* distance */ number | null ]
    prev_pts(): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prev_pts_at_offset(offset: number): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    pts_at_discont(): Gst.ClockTime
    push(buf: Gst.Buffer): void
    take(): Uint8Array[] | null
    take_buffer(nbytes: number): Gst.Buffer | null
    take_buffer_fast(nbytes: number): Gst.Buffer | null
    take_buffer_list(nbytes: number): Gst.BufferList | null
    take_list(nbytes: number): Gst.Buffer[] | null
    unmap(): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Adapter_ConstructProps)
    _init (config?: Adapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Adapter
    static $gtype: GObject.Type
}
export interface Aggregator_ConstructProps extends Gst.Element_ConstructProps {
    emit_signals?: boolean
    latency?: number
    min_upstream_latency?: number
    start_time?: number
    start_time_selection?: AggregatorStartTimeSelection
}
export class Aggregator {
    /* Properties of GstBase-1.0.GstBase.Aggregator */
    emit_signals: boolean
    latency: number
    min_upstream_latency: number
    start_time: number
    start_time_selection: AggregatorStartTimeSelection
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstBase-1.0.GstBase.Aggregator */
    srcpad: Gst.Pad
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.Aggregator */
    finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    get_latency(): Gst.ClockTime
    negotiate(): boolean
    peek_next_sample(pad: AggregatorPad): Gst.Sample | null
    selected_samples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info?: Gst.Structure | null): void
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_src_caps(caps: Gst.Caps): void
    simple_get_next_time(): Gst.ClockTime
    update_segment(segment: Gst.Segment): void
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GstBase-1.0.GstBase.Aggregator */
    vfunc_aggregate(timeout: boolean): Gst.FlowReturn
    vfunc_clip(aggregator_pad: AggregatorPad, buf: Gst.Buffer): Gst.Buffer
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn
    vfunc_fixate_src_caps(caps: Gst.Caps): Gst.Caps
    vfunc_flush(): Gst.FlowReturn
    vfunc_get_next_time(): Gst.ClockTime
    vfunc_negotiate(): boolean
    vfunc_negotiated_src_caps(caps: Gst.Caps): boolean
    vfunc_peek_next_sample(aggregator_pad: AggregatorPad): Gst.Sample | null
    vfunc_propose_allocation(pad: AggregatorPad, decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_sink_event(aggregator_pad: AggregatorPad, event: Gst.Event): boolean
    vfunc_sink_event_pre_queue(aggregator_pad: AggregatorPad, event: Gst.Event): Gst.FlowReturn
    vfunc_sink_query(aggregator_pad: AggregatorPad, query: Gst.Query): boolean
    vfunc_sink_query_pre_queue(aggregator_pad: AggregatorPad, query: Gst.Query): boolean
    vfunc_src_activate(mode: Gst.PadMode, active: boolean): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_update_src_caps(caps: Gst.Caps): [ /* returnType */ Gst.FlowReturn, /* ret */ Gst.Caps | null ]
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.Aggregator */
    connect(sigName: "samples-selected", callback: (($obj: Aggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    connect_after(sigName: "samples-selected", callback: (($obj: Aggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    emit(sigName: "samples-selected", segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Aggregator) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Aggregator) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Aggregator, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Aggregator, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Aggregator, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Aggregator, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Aggregator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Aggregator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::emit-signals", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-upstream-latency", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time-selection", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Aggregator_ConstructProps)
    _init (config?: Aggregator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AggregatorPad_ConstructProps extends Gst.Pad_ConstructProps {
    emit_signals?: boolean
}
export class AggregatorPad {
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emit_signals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstBase-1.0.GstBase.AggregatorPad */
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Pad */
    object: Gst.Object
    element_private: object
    padtemplate: Gst.PadTemplate
    direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    drop_buffer(): boolean
    has_buffer(): boolean
    is_eos(): boolean
    peek_buffer(): Gst.Buffer | null
    pop_buffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activate_mode(mode: Gst.PadMode, active: boolean): boolean
    add_probe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    can_link(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chain_list(list: Gst.BufferList): Gst.FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Gst.Element, stream_id?: string | null): string
    event_default(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    get_allowed_caps(): Gst.Caps | null
    get_current_caps(): Gst.Caps | null
    get_direction(): Gst.PadDirection
    get_element_private(): object | null
    get_last_flow_return(): Gst.FlowReturn
    get_offset(): number
    get_pad_template(): Gst.PadTemplate | null
    get_pad_template_caps(): Gst.Caps
    get_parent_element(): Gst.Element | null
    get_peer(): Gst.Pad | null
    get_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_single_internal_link(): Gst.Pad | null
    get_sticky_event(event_type: Gst.EventType, idx: number): Gst.Event | null
    get_stream(): Gst.Stream | null
    get_stream_id(): string | null
    get_task_state(): Gst.TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Gst.Iterator | null
    iterate_internal_links_default(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    link_full(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    link_maybe_ghosting(sink: Gst.Pad): boolean
    link_maybe_ghosting_full(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Gst.Query): boolean
    peer_query_accept_caps(caps: Gst.Caps): boolean
    peer_query_caps(filter?: Gst.Caps | null): Gst.Caps
    peer_query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Gst.Query): boolean
    proxy_query_caps(query: Gst.Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_event(event: Gst.Event): boolean
    push_list(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    query_accept_caps(caps: Gst.Caps): boolean
    query_caps(filter?: Gst.Caps | null): Gst.Caps
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Gst.Object | null, query: Gst.Query): boolean
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Gst.Event): boolean
    set_activate_function_full(activate: Gst.PadActivateFunction): void
    set_activatemode_function_full(activatemode: Gst.PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: Gst.PadChainFunction): void
    set_chain_list_function_full(chainlist: Gst.PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: Gst.PadEventFullFunction): void
    set_event_function_full(event: Gst.PadEventFunction): void
    set_getrange_function_full(get: Gst.PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: Gst.PadIterIntLinkFunction): void
    set_link_function_full(link: Gst.PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: Gst.PadQueryFunction): void
    set_unlink_function_full(unlink: Gst.PadUnlinkFunction): void
    start_task(func: Gst.TaskFunction): boolean
    sticky_events_foreach(foreach_func: Gst.PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    use_fixed_caps(): void
    /* Methods of Gst-1.0.Gst.Object */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GstBase-1.0.GstBase.AggregatorPad */
    vfunc_flush(aggregator: Aggregator): Gst.FlowReturn
    vfunc_skip_buffer(aggregator: Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst-1.0.Gst.Pad */
    vfunc_linked(peer: Gst.Pad): void
    vfunc_unlinked(peer: Gst.Pad): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: AggregatorPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: AggregatorPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: AggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: AggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: AggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: AggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AggregatorPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AggregatorPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::emit-signals", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AggregatorPad_ConstructProps)
    _init (config?: AggregatorPad_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseParse_ConstructProps extends Gst.Element_ConstructProps {
    disable_passthrough?: boolean
}
export class BaseParse {
    /* Properties of GstBase-1.0.GstBase.BaseParse */
    disable_passthrough: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstBase-1.0.GstBase.BaseParse */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    flags: number
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseParse */
    add_index_entry(offset: number, ts: Gst.ClockTime, key: boolean, force: boolean): boolean
    convert_default(src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_value */ number ]
    drain(): void
    finish_frame(frame: BaseParseFrame, size: number): Gst.FlowReturn
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    push_frame(frame: BaseParseFrame): Gst.FlowReturn
    set_average_bitrate(bitrate: number): void
    set_duration(fmt: Gst.Format, duration: number, interval: number): void
    set_frame_rate(fps_num: number, fps_den: number, lead_in: number, lead_out: number): void
    set_has_timing_info(has_timing: boolean): void
    set_infer_ts(infer_ts: boolean): void
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_min_frame_size(min_size: number): void
    set_passthrough(passthrough: boolean): void
    set_pts_interpolation(pts_interpolate: boolean): void
    set_syncable(syncable: boolean): void
    set_ts_at_offset(offset: number): void
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GstBase-1.0.GstBase.BaseParse */
    vfunc_convert(src_format: Gst.Format, src_value: number, dest_format: Gst.Format, dest_value: number): boolean
    vfunc_detect(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_get_sink_caps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: BaseParseFrame, skipsize: number): Gst.FlowReturn
    vfunc_pre_push_frame(frame: BaseParseFrame): Gst.FlowReturn
    vfunc_set_sink_caps(caps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseParse) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseParse) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseParse, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseParse, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseParse, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseParse, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseParse, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseParse, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::disable-passthrough", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-passthrough", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseParse_ConstructProps)
    _init (config?: BaseParse_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseSink_ConstructProps extends Gst.Element_ConstructProps {
    async?: boolean
    blocksize?: number
    enable_last_sample?: boolean
    max_bitrate?: number
    max_lateness?: number
    processing_deadline?: number
    qos?: boolean
    render_delay?: number
    sync?: boolean
    throttle_time?: number
    ts_offset?: number
}
export class BaseSink {
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    async: boolean
    blocksize: number
    enable_last_sample: boolean
    readonly last_sample: Gst.Sample
    max_bitrate: number
    max_lateness: number
    processing_deadline: number
    qos: boolean
    render_delay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttle_time: number
    ts_offset: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    element: Gst.Element
    sinkpad: Gst.Pad
    pad_mode: Gst.PadMode
    offset: number
    can_activate_pull: boolean
    can_activate_push: boolean
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    eos: boolean
    need_preroll: boolean
    have_preroll: boolean
    playing_async: boolean
    have_newsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn
    get_blocksize(): number
    get_drop_out_of_segment(): boolean
    get_last_sample(): Gst.Sample | null
    get_latency(): Gst.ClockTime
    get_max_bitrate(): number
    get_max_lateness(): number
    get_processing_deadline(): Gst.ClockTime
    get_render_delay(): Gst.ClockTime
    get_stats(): Gst.Structure
    get_sync(): boolean
    get_throttle_time(): number
    get_ts_offset(): Gst.ClockTimeDiff
    is_async_enabled(): boolean
    is_last_sample_enabled(): boolean
    is_qos_enabled(): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstream_live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async_enabled(enabled: boolean): void
    set_blocksize(blocksize: number): void
    set_drop_out_of_segment(drop_out_of_segment: boolean): void
    set_last_sample_enabled(enabled: boolean): void
    set_max_bitrate(max_bitrate: number): void
    set_max_lateness(max_lateness: number): void
    set_processing_deadline(processing_deadline: Gst.ClockTime): void
    set_qos_enabled(enabled: boolean): void
    set_render_delay(delay: Gst.ClockTime): void
    set_sync(sync: boolean): void
    set_throttle_time(throttle: number): void
    set_ts_offset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_clock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_preroll(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GstBase-1.0.GstBase.BaseSink */
    vfunc_activate_pull(active: boolean): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter: Gst.Caps): Gst.Caps
    vfunc_get_times(buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime): void
    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    vfunc_wait_event(event: Gst.Event): Gst.FlowReturn
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseSink, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseSink, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseSink, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseSink, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-sample", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-sample", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-deadline", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle-time", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseSink_ConstructProps)
    _init (config?: BaseSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseSrc_ConstructProps extends Gst.Element_ConstructProps {
    blocksize?: number
    do_timestamp?: boolean
    num_buffers?: number
    typefind?: boolean
}
export class BaseSrc {
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize: number
    do_timestamp: boolean
    num_buffers: number
    typefind: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstBase-1.0.GstBase.BaseSrc */
    element: Gst.Element
    srcpad: Gst.Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: boolean
    live_running: boolean
    can_activate_push: boolean
    random_access: boolean
    clock_id: Gst.ClockID
    segment: Gst.Segment
    need_newsegment: boolean
    num_buffers_left: number
    running: boolean
    pending_seek: Gst.Event
    priv: BaseSrcPrivate
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_blocksize(): number
    get_buffer_pool(): Gst.BufferPool | null
    get_do_timestamp(): boolean
    is_async(): boolean
    negotiate(): boolean
    new_seamless_segment(start: number, stop: number, time: number): boolean
    new_segment(segment: Gst.Segment): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async(async: boolean): void
    set_automatic_eos(automatic_eos: boolean): void
    set_blocksize(blocksize: number): void
    set_caps(caps: Gst.Caps): boolean
    set_do_timestamp(timestamp: boolean): void
    set_dynamic_size(dynamic: boolean): void
    set_format(format: Gst.Format): void
    set_live(live: boolean): void
    start_complete(ret: Gst.FlowReturn): void
    start_wait(): Gst.FlowReturn
    submit_buffer_list(buffer_list: Gst.BufferList): void
    wait_playing(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GstBase-1.0.GstBase.BaseSrc */
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_do_seek(segment: Gst.Segment): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps
    vfunc_get_size(size: number): boolean
    vfunc_get_times(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    vfunc_is_seekable(): boolean
    vfunc_negotiate(): boolean
    vfunc_prepare_seek_segment(seek: Gst.Event, segment: Gst.Segment): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseSrc, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseSrc, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseSrc, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseSrc, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseSrc_ConstructProps)
    _init (config?: BaseSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseTransform_ConstructProps extends Gst.Element_ConstructProps {
    qos?: boolean
}
export class BaseTransform {
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstBase-1.0.GstBase.BaseTransform */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    have_segment: boolean
    segment: Gst.Segment
    queued_buf: Gst.Buffer
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseTransform */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    is_in_place(): boolean
    is_passthrough(): boolean
    is_qos_enabled(): boolean
    reconfigure(): boolean
    reconfigure_sink(): void
    reconfigure_src(): void
    set_gap_aware(gap_aware: boolean): void
    set_in_place(in_place: boolean): void
    set_passthrough(passthrough: boolean): void
    set_prefer_passthrough(prefer_passthrough: boolean): void
    set_qos_enabled(enabled: boolean): void
    update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    update_src_caps(updated_caps: Gst.Caps): boolean
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GstBase-1.0.GstBase.BaseTransform */
    vfunc_accept_caps(direction: Gst.PadDirection, caps: Gst.Caps): boolean
    vfunc_before_transform(buffer: Gst.Buffer): void
    vfunc_copy_metadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_filter_meta(query: Gst.Query, api: GObject.Type, params: Gst.Structure): boolean
    vfunc_fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    vfunc_generate_output(): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_get_unit_size(caps: Gst.Caps): [ /* returnType */ boolean, /* size */ number ]
    vfunc_prepare_output_buffer(input: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_propose_allocation(decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn
    vfunc_transform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    vfunc_transform_ip(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    vfunc_transform_size(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [ /* returnType */ boolean, /* othersize */ number ]
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseTransform) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseTransform) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseTransform, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseTransform, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseTransform, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseTransform, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseTransform, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseTransform, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseTransform_ConstructProps)
    _init (config?: BaseTransform_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CollectPads_ConstructProps extends Gst.Object_ConstructProps {
}
export class CollectPads {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstBase-1.0.GstBase.CollectPads */
    object: Gst.Object
    data: CollectData[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.CollectPads */
    add_pad(pad: Gst.Pad, size: number, destroy_notify: CollectDataDestroyNotify, lock: boolean): CollectData | null
    available(): number
    clip_running_time(cdata: CollectData, buf: Gst.Buffer, user_data?: object | null): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer | null ]
    event_default(data: CollectData, event: Gst.Event, discard: boolean): boolean
    flush(data: CollectData, size: number): number
    peek(data: CollectData): Gst.Buffer | null
    pop(data: CollectData): Gst.Buffer | null
    query_default(data: CollectData, query: Gst.Query, discard: boolean): boolean
    read_buffer(data: CollectData, size: number): Gst.Buffer | null
    remove_pad(pad: Gst.Pad): boolean
    set_buffer_function(func: CollectPadsBufferFunction): void
    set_clip_function(clipfunc: CollectPadsClipFunction): void
    set_compare_function(func: CollectPadsCompareFunction): void
    set_event_function(func: CollectPadsEventFunction): void
    set_flush_function(func: CollectPadsFlushFunction): void
    set_flushing(flushing: boolean): void
    set_function(func: CollectPadsFunction): void
    set_query_function(func: CollectPadsQueryFunction): void
    set_waiting(data: CollectData, waiting: boolean): void
    src_event_default(pad: Gst.Pad, event: Gst.Event): boolean
    start(): void
    stop(): void
    take_buffer(data: CollectData, size: number): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Object */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: CollectPads, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: CollectPads, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CollectPads_ConstructProps)
    _init (config?: CollectPads_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CollectPads
    static $gtype: GObject.Type
}
export interface DataQueue_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataQueue {
    /* Properties of GstBase-1.0.GstBase.DataQueue */
    readonly current_level_bytes: number
    readonly current_level_time: number
    readonly current_level_visible: number
    /* Fields of GstBase-1.0.GstBase.DataQueue */
    object: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GstBase-1.0.GstBase.DataQueue */
    vfunc_empty(): void
    vfunc_full(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.DataQueue */
    connect(sigName: "empty", callback: (($obj: DataQueue) => void)): number
    connect_after(sigName: "empty", callback: (($obj: DataQueue) => void)): number
    emit(sigName: "empty"): void
    connect(sigName: "full", callback: (($obj: DataQueue) => void)): number
    connect_after(sigName: "full", callback: (($obj: DataQueue) => void)): number
    emit(sigName: "full"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataQueue_ConstructProps)
    _init (config?: DataQueue_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PushSrc_ConstructProps extends BaseSrc_ConstructProps {
}
export class PushSrc {
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize: number
    do_timestamp: boolean
    num_buffers: number
    typefind: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstBase-1.0.GstBase.BaseSrc */
    element: Gst.Element
    srcpad: Gst.Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: boolean
    live_running: boolean
    can_activate_push: boolean
    random_access: boolean
    clock_id: Gst.ClockID
    segment: Gst.Segment
    need_newsegment: boolean
    num_buffers_left: number
    running: boolean
    pending_seek: Gst.Event
    priv: BaseSrcPrivate
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_blocksize(): number
    get_buffer_pool(): Gst.BufferPool | null
    get_do_timestamp(): boolean
    is_async(): boolean
    negotiate(): boolean
    new_seamless_segment(start: number, stop: number, time: number): boolean
    new_segment(segment: Gst.Segment): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async(async: boolean): void
    set_automatic_eos(automatic_eos: boolean): void
    set_blocksize(blocksize: number): void
    set_caps(caps: Gst.Caps): boolean
    set_do_timestamp(timestamp: boolean): void
    set_dynamic_size(dynamic: boolean): void
    set_format(format: Gst.Format): void
    set_live(live: boolean): void
    start_complete(ret: Gst.FlowReturn): void
    start_wait(): Gst.FlowReturn
    submit_buffer_list(buffer_list: Gst.BufferList): void
    wait_playing(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GstBase-1.0.GstBase.PushSrc */
    vfunc_alloc(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase-1.0.GstBase.BaseSrc */
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_do_seek(segment: Gst.Segment): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps
    vfunc_get_size(size: number): boolean
    vfunc_get_times(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    vfunc_is_seekable(): boolean
    vfunc_negotiate(): boolean
    vfunc_prepare_seek_segment(seek: Gst.Event, segment: Gst.Segment): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: PushSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: PushSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: PushSrc, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: PushSrc, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: PushSrc, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: PushSrc, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PushSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PushSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PushSrc_ConstructProps)
    _init (config?: PushSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AdapterClass {
    static name: string
}
export abstract class AggregatorClass {
    /* Fields of GstBase-1.0.GstBase.AggregatorClass */
    parent_class: Gst.ElementClass
    flush: any
    clip: any
    finish_buffer: any
    sink_event: any
    sink_query: any
    src_event: any
    src_query: any
    src_activate: any
    aggregate: any
    stop: (aggregator: Aggregator) => boolean
    start: (aggregator: Aggregator) => boolean
    get_next_time: any
    update_src_caps: any
    fixate_src_caps: any
    negotiated_src_caps: any
    decide_allocation: any
    propose_allocation: any
    negotiate: (self: Aggregator) => boolean
    sink_event_pre_queue: any
    sink_query_pre_queue: any
    finish_buffer_list: any
    peek_next_sample: any
    static name: string
}
export abstract class AggregatorPadClass {
    /* Fields of GstBase-1.0.GstBase.AggregatorPadClass */
    parent_class: Gst.PadClass
    flush: any
    skip_buffer: any
    static name: string
}
export class AggregatorPadPrivate {
    static name: string
}
export class AggregatorPrivate {
    static name: string
}
export abstract class BaseParseClass {
    /* Fields of GstBase-1.0.GstBase.BaseParseClass */
    parent_class: Gst.ElementClass
    start: (parse: BaseParse) => boolean
    stop: (parse: BaseParse) => boolean
    set_sink_caps: any
    handle_frame: any
    pre_push_frame: any
    convert: any
    sink_event: any
    src_event: any
    get_sink_caps: any
    detect: any
    sink_query: any
    src_query: any
    static name: string
}
export class BaseParseFrame {
    /* Fields of GstBase-1.0.GstBase.BaseParseFrame */
    buffer: Gst.Buffer
    out_buffer: Gst.Buffer
    flags: number
    offset: number
    overhead: number
    /* Methods of GstBase-1.0.GstBase.BaseParseFrame */
    copy(): BaseParseFrame
    free(): void
    init(): void
    static name: string
    static new(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number): BaseParseFrame
    constructor(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number)
    /* Static methods and pseudo-constructors */
    static new(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number): BaseParseFrame
}
export class BaseParsePrivate {
    static name: string
}
export abstract class BaseSinkClass {
    /* Fields of GstBase-1.0.GstBase.BaseSinkClass */
    parent_class: Gst.ElementClass
    get_caps: any
    set_caps: any
    fixate: any
    activate_pull: (sink: BaseSink, active: boolean) => boolean
    get_times: any
    propose_allocation: any
    start: (sink: BaseSink) => boolean
    stop: (sink: BaseSink) => boolean
    unlock: (sink: BaseSink) => boolean
    unlock_stop: (sink: BaseSink) => boolean
    query: any
    event: any
    wait_event: any
    prepare: any
    prepare_list: any
    preroll: any
    render: any
    render_list: any
    static name: string
}
export class BaseSinkPrivate {
    static name: string
}
export abstract class BaseSrcClass {
    /* Fields of GstBase-1.0.GstBase.BaseSrcClass */
    parent_class: Gst.ElementClass
    get_caps: any
    negotiate: (src: BaseSrc) => boolean
    fixate: any
    set_caps: any
    decide_allocation: any
    start: (src: BaseSrc) => boolean
    stop: (src: BaseSrc) => boolean
    get_times: any
    get_size: (src: BaseSrc, size: number) => boolean
    is_seekable: (src: BaseSrc) => boolean
    prepare_seek_segment: any
    do_seek: any
    unlock: (src: BaseSrc) => boolean
    unlock_stop: (src: BaseSrc) => boolean
    query: any
    event: any
    create: any
    alloc: any
    fill: any
    static name: string
}
export class BaseSrcPrivate {
    static name: string
}
export abstract class BaseTransformClass {
    /* Fields of GstBase-1.0.GstBase.BaseTransformClass */
    parent_class: Gst.ElementClass
    passthrough_on_same_caps: boolean
    transform_ip_on_passthrough: boolean
    transform_caps: any
    fixate_caps: any
    accept_caps: any
    set_caps: any
    query: any
    decide_allocation: any
    filter_meta: any
    propose_allocation: any
    transform_size: any
    get_unit_size: any
    start: (trans: BaseTransform) => boolean
    stop: (trans: BaseTransform) => boolean
    sink_event: any
    src_event: any
    prepare_output_buffer: any
    copy_metadata: any
    transform_meta: any
    before_transform: any
    transform: any
    transform_ip: any
    submit_input_buffer: any
    generate_output: any
    static name: string
}
export class BaseTransformPrivate {
    static name: string
}
export class BitReader {
    /* Fields of GstBase-1.0.GstBase.BitReader */
    data: Uint8Array[]
    size: number
    byte: number
    bit: number
    /* Methods of GstBase-1.0.GstBase.BitReader */
    free(): void
    get_bits_uint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint8(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_pos(): number
    get_remaining(): number
    get_size(): number
    init(data: Uint8Array[]): void
    peek_bits_uint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint8(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    set_pos(pos: number): boolean
    skip(nbits: number): boolean
    skip_to_byte(): boolean
    static name: string
}
export class BitWriter {
    /* Fields of GstBase-1.0.GstBase.BitWriter */
    data: number
    bit_size: number
    /* Methods of GstBase-1.0.GstBase.BitWriter */
    align_bytes(trailing_bit: number): boolean
    free(): void
    free_and_get_buffer(): Gst.Buffer
    free_and_get_data(): Uint8Array[]
    get_data(): number
    get_remaining(): number
    get_size(): number
    put_bits_uint16(value: number, nbits: number): boolean
    put_bits_uint32(value: number, nbits: number): boolean
    put_bits_uint64(value: number, nbits: number): boolean
    put_bits_uint8(value: number, nbits: number): boolean
    put_bytes(data: number, nbytes: number): boolean
    reset(): void
    reset_and_get_buffer(): Gst.Buffer
    reset_and_get_data(): Uint8Array[]
    set_pos(pos: number): boolean
    static name: string
}
export class ByteReader {
    /* Fields of GstBase-1.0.GstBase.ByteReader */
    data: Uint8Array[]
    size: number
    byte: number
    /* Methods of GstBase-1.0.GstBase.ByteReader */
    dup_data(): [ /* returnType */ boolean, /* val */ Uint8Array[] ]
    dup_string_utf16(): [ /* returnType */ boolean, /* str */ number[] ]
    dup_string_utf32(): [ /* returnType */ boolean, /* str */ number[] ]
    dup_string_utf8(): [ /* returnType */ boolean, /* str */ string[] ]
    free(): void
    get_data(): [ /* returnType */ boolean, /* val */ Uint8Array[] ]
    get_float32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_float32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_float64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_float64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int16_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int16_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int24_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int24_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int8(): [ /* returnType */ boolean, /* val */ number ]
    get_pos(): number
    get_remaining(): number
    get_size(): number
    get_string_utf8(): [ /* returnType */ boolean, /* str */ string[] ]
    get_uint16_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint16_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint24_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint24_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint8(): [ /* returnType */ boolean, /* val */ number ]
    init(data: Uint8Array[]): void
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]
    peek_data(): [ /* returnType */ boolean, /* val */ Uint8Array[] ]
    peek_float32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_float32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_float64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_float64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int16_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int16_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int24_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int24_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int8(): [ /* returnType */ boolean, /* val */ number ]
    peek_string_utf8(): [ /* returnType */ boolean, /* str */ string[] ]
    peek_uint16_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint16_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint24_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint24_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint8(): [ /* returnType */ boolean, /* val */ number ]
    set_pos(pos: number): boolean
    skip(nbytes: number): boolean
    skip_string_utf16(): boolean
    skip_string_utf32(): boolean
    skip_string_utf8(): boolean
    static name: string
}
export class ByteWriter {
    /* Fields of GstBase-1.0.GstBase.ByteWriter */
    parent: ByteReader
    alloc_size: number
    fixed: boolean
    owned: boolean
    /* Methods of GstBase-1.0.GstBase.ByteWriter */
    ensure_free_space(size: number): boolean
    fill(value: number, size: number): boolean
    free(): void
    free_and_get_buffer(): Gst.Buffer
    free_and_get_data(): number
    get_remaining(): number
    init(): void
    init_with_data(data: Uint8Array[], initialized: boolean): void
    init_with_size(size: number, fixed: boolean): void
    put_buffer(buffer: Gst.Buffer, offset: number, size: number): boolean
    put_data(data: Uint8Array[]): boolean
    put_float32_be(val: number): boolean
    put_float32_le(val: number): boolean
    put_float64_be(val: number): boolean
    put_float64_le(val: number): boolean
    put_int16_be(val: number): boolean
    put_int16_le(val: number): boolean
    put_int24_be(val: number): boolean
    put_int24_le(val: number): boolean
    put_int32_be(val: number): boolean
    put_int32_le(val: number): boolean
    put_int64_be(val: number): boolean
    put_int64_le(val: number): boolean
    put_int8(val: number): boolean
    put_string_utf16(data: number[]): boolean
    put_string_utf32(data: number[]): boolean
    put_string_utf8(data: string): boolean
    put_uint16_be(val: number): boolean
    put_uint16_le(val: number): boolean
    put_uint24_be(val: number): boolean
    put_uint24_le(val: number): boolean
    put_uint32_be(val: number): boolean
    put_uint32_le(val: number): boolean
    put_uint64_be(val: number): boolean
    put_uint64_le(val: number): boolean
    put_uint8(val: number): boolean
    reset(): void
    reset_and_get_buffer(): Gst.Buffer
    reset_and_get_data(): Uint8Array[]
    static name: string
}
export class CollectData {
    /* Fields of GstBase-1.0.GstBase.CollectData */
    collect: CollectPads
    pad: Gst.Pad
    buffer: Gst.Buffer
    pos: number
    segment: Gst.Segment
    static name: string
}
export class CollectDataPrivate {
    static name: string
}
export abstract class CollectPadsClass {
    /* Fields of GstBase-1.0.GstBase.CollectPadsClass */
    parent_class: Gst.ObjectClass
    static name: string
}
export class CollectPadsPrivate {
    static name: string
}
export abstract class DataQueueClass {
    /* Fields of GstBase-1.0.GstBase.DataQueueClass */
    parent_class: GObject.ObjectClass
    empty: (queue: DataQueue) => void
    full: (queue: DataQueue) => void
    _gst_reserved: object[]
    static name: string
}
export class DataQueueItem {
    /* Fields of GstBase-1.0.GstBase.DataQueueItem */
    object: Gst.MiniObject
    size: number
    duration: number
    visible: boolean
    destroy: GLib.DestroyNotify
    static name: string
}
export class DataQueuePrivate {
    static name: string
}
export class DataQueueSize {
    /* Fields of GstBase-1.0.GstBase.DataQueueSize */
    visible: number
    bytes: number
    time: number
    static name: string
}
export class FlowCombiner {
    /* Methods of GstBase-1.0.GstBase.FlowCombiner */
    add_pad(pad: Gst.Pad): void
    clear(): void
    free(): void
    ref(): FlowCombiner
    remove_pad(pad: Gst.Pad): void
    reset(): void
    unref(): void
    update_flow(fret: Gst.FlowReturn): Gst.FlowReturn
    update_pad_flow(pad: Gst.Pad, fret: Gst.FlowReturn): Gst.FlowReturn
    static name: string
    static new(): FlowCombiner
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FlowCombiner
}
export abstract class PushSrcClass {
    /* Fields of GstBase-1.0.GstBase.PushSrcClass */
    parent_class: BaseSrcClass
    create: any
    alloc: any
    fill: any
    static name: string
}
export class QueueArray {
    /* Methods of GstBase-1.0.GstBase.QueueArray */
    push_tail_struct(p_struct?: object | null): void
    static name: string
}