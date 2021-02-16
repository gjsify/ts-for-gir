/**
 * GstApp-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstBase from './GstBase-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum AppStreamType {
    STREAM,
    SEEKABLE,
    RANDOM_ACCESS,
}
export interface AppSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    buffer_list?: boolean
    caps?: Gst.Caps
    drop?: boolean
    emit_signals?: boolean
    max_buffers?: number
    wait_on_eos?: boolean
}
export class AppSink {
    /* Properties of GstApp.AppSink */
    buffer_list: boolean
    caps: Gst.Caps
    drop: boolean
    emit_signals: boolean
    readonly eos: boolean
    max_buffers: number
    wait_on_eos: boolean
    /* Properties of GstBase.BaseSink */
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
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstApp.AppSink */
    basesink: GstBase.BaseSink
    /* Fields of GstBase.BaseSink */
    element: Gst.Element
    sinkpad: Gst.Pad
    pad_mode: Gst.PadMode
    offset: number
    can_activate_pull: boolean
    can_activate_push: boolean
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    need_preroll: boolean
    have_preroll: boolean
    playing_async: boolean
    have_newsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst.Element */
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
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstApp.AppSink */
    get_buffer_list_support(): boolean
    get_caps(): Gst.Caps
    get_drop(): boolean
    get_emit_signals(): boolean
    get_max_buffers(): number
    get_wait_on_eos(): boolean
    is_eos(): boolean
    pull_preroll(): Gst.Sample
    pull_sample(): Gst.Sample
    set_buffer_list_support(enable_lists: boolean): void
    set_caps(caps?: Gst.Caps | null): void
    set_drop(drop: boolean): void
    set_emit_signals(emit: boolean): void
    set_max_buffers(max: number): void
    set_wait_on_eos(wait: boolean): void
    try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample
    try_pull_sample(timeout: Gst.ClockTime): Gst.Sample
    /* Methods of GstBase.BaseSink */
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
    /* Methods of Gst.Element */
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
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any
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
    /* Methods of Gst.URIHandler */
    get_protocols(): string[] | null
    get_uri(): string | null
    get_uri_type(): Gst.URIType
    set_uri(uri: string): boolean
    /* Virtual methods of GstApp.AppSink */
    vfunc_eos(): void
    vfunc_new_preroll(): Gst.FlowReturn
    vfunc_new_sample(): Gst.FlowReturn
    vfunc_pull_preroll(): Gst.Sample
    vfunc_pull_sample(): Gst.Sample
    vfunc_try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample
    vfunc_try_pull_sample(timeout: Gst.ClockTime): Gst.Sample
    vfunc_get_uri(): string | null
    vfunc_set_uri(uri: string): boolean
    /* Virtual methods of GstBase.BaseSink */
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
    /* Virtual methods of Gst.Element */
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
    /* Signals of GstApp.AppSink */
    connect(sigName: "eos", callback: (($obj: AppSink) => void)): number
    connect_after(sigName: "eos", callback: (($obj: AppSink) => void)): number
    emit(sigName: "eos"): void
    connect(sigName: "new-preroll", callback: (($obj: AppSink) => Gst.FlowReturn)): number
    connect_after(sigName: "new-preroll", callback: (($obj: AppSink) => Gst.FlowReturn)): number
    emit(sigName: "new-preroll"): void
    connect(sigName: "new-sample", callback: (($obj: AppSink) => Gst.FlowReturn)): number
    connect_after(sigName: "new-sample", callback: (($obj: AppSink) => Gst.FlowReturn)): number
    emit(sigName: "new-sample"): void
    connect(sigName: "pull-preroll", callback: (($obj: AppSink) => Gst.Sample)): number
    connect_after(sigName: "pull-preroll", callback: (($obj: AppSink) => Gst.Sample)): number
    emit(sigName: "pull-preroll"): void
    connect(sigName: "pull-sample", callback: (($obj: AppSink) => Gst.Sample)): number
    connect_after(sigName: "pull-sample", callback: (($obj: AppSink) => Gst.Sample)): number
    emit(sigName: "pull-sample"): void
    connect(sigName: "try-pull-preroll", callback: (($obj: AppSink, timeout: number) => Gst.Sample)): number
    connect_after(sigName: "try-pull-preroll", callback: (($obj: AppSink, timeout: number) => Gst.Sample)): number
    emit(sigName: "try-pull-preroll", timeout: number): void
    connect(sigName: "try-pull-sample", callback: (($obj: AppSink, timeout: number) => Gst.Sample)): number
    connect_after(sigName: "try-pull-sample", callback: (($obj: AppSink, timeout: number) => Gst.Sample)): number
    emit(sigName: "try-pull-sample", timeout: number): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AppSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AppSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AppSink, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AppSink, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AppSink, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AppSink, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AppSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AppSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer-list", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-list", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drop", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drop", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emit-signals", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-buffers", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-buffers", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wait-on-eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wait-on-eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-deadline", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle-time", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppSink_ConstructProps)
    _init (config?: AppSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AppSrc_ConstructProps extends GstBase.BaseSrc_ConstructProps {
    block?: boolean
    caps?: Gst.Caps
    duration?: number
    emit_signals?: boolean
    format?: Gst.Format
    handle_segment_change?: boolean
    is_live?: boolean
    max_bytes?: number
    max_latency?: number
    min_latency?: number
    min_percent?: number
    size?: number
    stream_type?: AppStreamType
}
export class AppSrc {
    /* Properties of GstApp.AppSrc */
    block: boolean
    caps: Gst.Caps
    readonly current_level_bytes: number
    duration: number
    emit_signals: boolean
    format: Gst.Format
    handle_segment_change: boolean
    is_live: boolean
    max_bytes: number
    max_latency: number
    min_latency: number
    min_percent: number
    size: number
    stream_type: AppStreamType
    /* Properties of GstBase.BaseSrc */
    blocksize: number
    do_timestamp: boolean
    num_buffers: number
    typefind: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstApp.AppSrc */
    basesrc: GstBase.BaseSrc
    /* Fields of GstBase.BaseSrc */
    element: Gst.Element
    srcpad: Gst.Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    live_running: boolean
    can_activate_push: boolean
    random_access: boolean
    clock_id: Gst.ClockID
    segment: Gst.Segment
    need_newsegment: boolean
    num_buffers_left: number
    running: boolean
    pending_seek: Gst.Event
    priv: GstBase.BaseSrcPrivate
    /* Fields of Gst.Element */
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
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstApp.AppSrc */
    end_of_stream(): Gst.FlowReturn
    get_caps(): Gst.Caps
    get_current_level_bytes(): number
    get_duration(): Gst.ClockTime
    get_emit_signals(): boolean
    get_latency(): [ /* min */ number, /* max */ number ]
    get_max_bytes(): number
    get_size(): number
    get_stream_type(): AppStreamType
    push_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    push_sample(sample: Gst.Sample): Gst.FlowReturn
    set_caps(caps?: Gst.Caps | null): void
    set_duration(duration: Gst.ClockTime): void
    set_emit_signals(emit: boolean): void
    set_latency(min: number, max: number): void
    set_max_bytes(max: number): void
    set_size(size: number): void
    set_stream_type(type: AppStreamType): void
    /* Methods of GstBase.BaseSrc */
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
    /* Methods of Gst.Element */
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
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any
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
    /* Methods of Gst.URIHandler */
    get_protocols(): string[] | null
    get_uri(): string | null
    get_uri_type(): Gst.URIType
    set_uri(uri: string): boolean
    /* Virtual methods of GstApp.AppSrc */
    vfunc_end_of_stream(): Gst.FlowReturn
    vfunc_enough_data(): void
    vfunc_need_data(length: number): void
    vfunc_push_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_push_sample(sample: Gst.Sample): Gst.FlowReturn
    vfunc_seek_data(offset: number): boolean
    vfunc_get_uri(): string | null
    vfunc_set_uri(uri: string): boolean
    /* Virtual methods of GstBase.BaseSrc */
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
    /* Virtual methods of Gst.Element */
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
    /* Signals of GstApp.AppSrc */
    connect(sigName: "end-of-stream", callback: (($obj: AppSrc) => Gst.FlowReturn)): number
    connect_after(sigName: "end-of-stream", callback: (($obj: AppSrc) => Gst.FlowReturn)): number
    emit(sigName: "end-of-stream"): void
    connect(sigName: "enough-data", callback: (($obj: AppSrc) => void)): number
    connect_after(sigName: "enough-data", callback: (($obj: AppSrc) => void)): number
    emit(sigName: "enough-data"): void
    connect(sigName: "need-data", callback: (($obj: AppSrc, length: number) => void)): number
    connect_after(sigName: "need-data", callback: (($obj: AppSrc, length: number) => void)): number
    emit(sigName: "need-data", length: number): void
    connect(sigName: "push-buffer", callback: (($obj: AppSrc, buffer: Gst.Buffer) => Gst.FlowReturn)): number
    connect_after(sigName: "push-buffer", callback: (($obj: AppSrc, buffer: Gst.Buffer) => Gst.FlowReturn)): number
    emit(sigName: "push-buffer", buffer: Gst.Buffer): void
    connect(sigName: "push-buffer-list", callback: (($obj: AppSrc, buffer_list: Gst.BufferList) => Gst.FlowReturn)): number
    connect_after(sigName: "push-buffer-list", callback: (($obj: AppSrc, buffer_list: Gst.BufferList) => Gst.FlowReturn)): number
    emit(sigName: "push-buffer-list", buffer_list: Gst.BufferList): void
    connect(sigName: "push-sample", callback: (($obj: AppSrc, sample: Gst.Sample) => Gst.FlowReturn)): number
    connect_after(sigName: "push-sample", callback: (($obj: AppSrc, sample: Gst.Sample) => Gst.FlowReturn)): number
    emit(sigName: "push-sample", sample: Gst.Sample): void
    connect(sigName: "seek-data", callback: (($obj: AppSrc, offset: number) => boolean)): number
    connect_after(sigName: "seek-data", callback: (($obj: AppSrc, offset: number) => boolean)): number
    emit(sigName: "seek-data", offset: number): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AppSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AppSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AppSrc, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AppSrc, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AppSrc, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AppSrc, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AppSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AppSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::block", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emit-signals", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::handle-segment-change", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-segment-change", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-live", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-live", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-percent", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-percent", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stream-type", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-type", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppSrc_ConstructProps)
    _init (config?: AppSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export class AppSinkCallbacks {
    /* Fields of GstApp.AppSinkCallbacks */
    eos: (appsink: AppSink) => void
    new_preroll: (appsink: AppSink) => Gst.FlowReturn
    new_sample: (appsink: AppSink) => Gst.FlowReturn
    static name: string
}
export abstract class AppSinkClass {
    /* Fields of GstApp.AppSinkClass */
    basesink_class: GstBase.BaseSinkClass
    eos: (appsink: AppSink) => void
    new_preroll: (appsink: AppSink) => Gst.FlowReturn
    new_sample: (appsink: AppSink) => Gst.FlowReturn
    pull_preroll: (appsink: AppSink) => Gst.Sample
    pull_sample: (appsink: AppSink) => Gst.Sample
    try_pull_preroll: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.Sample
    try_pull_sample: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.Sample
    static name: string
}
export class AppSinkPrivate {
    static name: string
}
export class AppSrcCallbacks {
    /* Fields of GstApp.AppSrcCallbacks */
    need_data: (src: AppSrc, length: number) => void
    enough_data: (src: AppSrc) => void
    seek_data: (src: AppSrc, offset: number) => boolean
    static name: string
}
export abstract class AppSrcClass {
    /* Fields of GstApp.AppSrcClass */
    basesrc_class: GstBase.BaseSrcClass
    need_data: (appsrc: AppSrc, length: number) => void
    enough_data: (appsrc: AppSrc) => void
    seek_data: (appsrc: AppSrc, offset: number) => boolean
    push_buffer: (appsrc: AppSrc, buffer: Gst.Buffer) => Gst.FlowReturn
    end_of_stream: (appsrc: AppSrc) => Gst.FlowReturn
    push_sample: (appsrc: AppSrc, sample: Gst.Sample) => Gst.FlowReturn
    push_buffer_list: (appsrc: AppSrc, buffer_list: Gst.BufferList) => Gst.FlowReturn
    static name: string
}
export class AppSrcPrivate {
    static name: string
}