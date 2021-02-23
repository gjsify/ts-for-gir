/**
 * GstCodecs-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstVideo from './GstVideo-1.0';
import type * as GstBase from './GstBase-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum H264PictureField {
    FRAME,
    TOP_FIELD,
    BOTTOM_FIELD,
}
export enum H264PictureReference {
    NONE,
    SHORT_TERM,
    LONG_TERM,
}
export const H264_DPB_MAX_SIZE: number
export const H265_DPB_MAX_SIZE: number
export interface H264Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
export class H264Decoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    discard_corrupted_frames: boolean
    max_errors: number
    min_force_key_unit_interval: number
    qos: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
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
    /* Methods of GstCodecs-1.0.GstCodecs.H264Decoder */
    get_picture(system_frame_number: number): H264Picture
    set_process_ref_pic_lists(process: boolean): void
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    add_to_frame(n_bytes: number): void
    allocate_output_buffer(): Gst.Buffer
    allocate_output_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    allocate_output_frame_with_params(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    drop_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    finish_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool
    get_estimate_rate(): number
    get_frame(frame_number: number): GstVideo.VideoCodecFrame
    get_frames(): GstVideo.VideoCodecFrame[]
    get_latency(): [ /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    get_max_decode_time(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    get_max_errors(): number
    get_needs_format(): boolean
    get_needs_sync_point(): boolean
    get_oldest_frame(): GstVideo.VideoCodecFrame
    get_output_state(): GstVideo.VideoCodecState
    get_packetized(): boolean
    get_pending_frame_size(): number
    get_qos_proportion(): number
    have_frame(): Gst.FlowReturn
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    release_frame(frame: GstVideo.VideoCodecFrame): void
    request_sync_point(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    set_estimate_rate(enabled: boolean): void
    set_interlaced_output_state(fmt: GstVideo.VideoFormat, interlace_mode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_max_errors(num: number): void
    set_needs_format(enabled: boolean): void
    set_needs_sync_point(enabled: boolean): void
    set_output_state(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    set_packetized(packetized: boolean): void
    set_use_default_pad_acceptcaps(use: boolean): void
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
    /* Virtual methods of GstCodecs-1.0.GstCodecs.H264Decoder */
    vfunc_decode_slice(picture: H264Picture, slice: H264Slice, ref_pic_list0: H264Picture[], ref_pic_list1: H264Picture[]): boolean
    vfunc_end_picture(picture: H264Picture): boolean
    vfunc_get_preferred_output_delay(live: boolean): number
    vfunc_new_field_picture(first_field: H264Picture, second_field: H264Picture): boolean
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): boolean
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn
    vfunc_start_picture(picture: H264Picture, slice: H264Slice, dpb: H264Dpb): boolean
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoDecoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_drain(): Gst.FlowReturn
    vfunc_finish(): Gst.FlowReturn
    vfunc_flush(): boolean
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_parse(frame: GstVideo.VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_reset(hard: boolean): boolean
    vfunc_set_format(state: GstVideo.VideoCodecState): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(frame: GstVideo.VideoCodecFrame, meta: Gst.Meta): boolean
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
    connect(sigName: "no-more-pads", callback: (($obj: H264Decoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: H264Decoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: H264Decoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: H264Decoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: H264Decoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: H264Decoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: H264Decoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: H264Decoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-errors", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: H264Decoder_ConstructProps)
    _init (config?: H264Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface H265Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
export class H265Decoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    discard_corrupted_frames: boolean
    max_errors: number
    min_force_key_unit_interval: number
    qos: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
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
    /* Methods of GstCodecs-1.0.GstCodecs.H265Decoder */
    get_picture(system_frame_number: number): H265Picture
    set_process_ref_pic_lists(process: boolean): void
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    add_to_frame(n_bytes: number): void
    allocate_output_buffer(): Gst.Buffer
    allocate_output_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    allocate_output_frame_with_params(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    drop_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    finish_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool
    get_estimate_rate(): number
    get_frame(frame_number: number): GstVideo.VideoCodecFrame
    get_frames(): GstVideo.VideoCodecFrame[]
    get_latency(): [ /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    get_max_decode_time(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    get_max_errors(): number
    get_needs_format(): boolean
    get_needs_sync_point(): boolean
    get_oldest_frame(): GstVideo.VideoCodecFrame
    get_output_state(): GstVideo.VideoCodecState
    get_packetized(): boolean
    get_pending_frame_size(): number
    get_qos_proportion(): number
    have_frame(): Gst.FlowReturn
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    release_frame(frame: GstVideo.VideoCodecFrame): void
    request_sync_point(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    set_estimate_rate(enabled: boolean): void
    set_interlaced_output_state(fmt: GstVideo.VideoFormat, interlace_mode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_max_errors(num: number): void
    set_needs_format(enabled: boolean): void
    set_needs_sync_point(enabled: boolean): void
    set_output_state(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    set_packetized(packetized: boolean): void
    set_use_default_pad_acceptcaps(use: boolean): void
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
    /* Virtual methods of GstCodecs-1.0.GstCodecs.H265Decoder */
    vfunc_end_picture(picture: H265Picture): boolean
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): boolean
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn
    vfunc_start_picture(picture: H265Picture, slice: H265Slice, dpb: H265Dpb): boolean
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoDecoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_drain(): Gst.FlowReturn
    vfunc_finish(): Gst.FlowReturn
    vfunc_flush(): boolean
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_parse(frame: GstVideo.VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_reset(hard: boolean): boolean
    vfunc_set_format(state: GstVideo.VideoCodecState): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(frame: GstVideo.VideoCodecFrame, meta: Gst.Meta): boolean
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
    connect(sigName: "no-more-pads", callback: (($obj: H265Decoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: H265Decoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: H265Decoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: H265Decoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: H265Decoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: H265Decoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: H265Decoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: H265Decoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-errors", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: H265Decoder_ConstructProps)
    _init (config?: H265Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Mpeg2Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
export class Mpeg2Decoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    discard_corrupted_frames: boolean
    max_errors: number
    min_force_key_unit_interval: number
    qos: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
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
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    add_to_frame(n_bytes: number): void
    allocate_output_buffer(): Gst.Buffer
    allocate_output_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    allocate_output_frame_with_params(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    drop_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    finish_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool
    get_estimate_rate(): number
    get_frame(frame_number: number): GstVideo.VideoCodecFrame
    get_frames(): GstVideo.VideoCodecFrame[]
    get_latency(): [ /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    get_max_decode_time(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    get_max_errors(): number
    get_needs_format(): boolean
    get_needs_sync_point(): boolean
    get_oldest_frame(): GstVideo.VideoCodecFrame
    get_output_state(): GstVideo.VideoCodecState
    get_packetized(): boolean
    get_pending_frame_size(): number
    get_qos_proportion(): number
    have_frame(): Gst.FlowReturn
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    release_frame(frame: GstVideo.VideoCodecFrame): void
    request_sync_point(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    set_estimate_rate(enabled: boolean): void
    set_interlaced_output_state(fmt: GstVideo.VideoFormat, interlace_mode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_max_errors(num: number): void
    set_needs_format(enabled: boolean): void
    set_needs_sync_point(enabled: boolean): void
    set_output_state(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    set_packetized(packetized: boolean): void
    set_use_default_pad_acceptcaps(use: boolean): void
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
    /* Virtual methods of GstCodecs-1.0.GstCodecs.Mpeg2Decoder */
    vfunc_decode_slice(picture: Mpeg2Picture, slice: Mpeg2Slice): boolean
    vfunc_end_picture(picture: Mpeg2Picture): boolean
    vfunc_new_field_picture(first_field: Mpeg2Picture, second_field: Mpeg2Picture): boolean
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): boolean
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn
    vfunc_start_picture(picture: Mpeg2Picture, slice: Mpeg2Slice, prev_picture: Mpeg2Picture, next_picture: Mpeg2Picture): boolean
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoDecoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_drain(): Gst.FlowReturn
    vfunc_finish(): Gst.FlowReturn
    vfunc_flush(): boolean
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_parse(frame: GstVideo.VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_reset(hard: boolean): boolean
    vfunc_set_format(state: GstVideo.VideoCodecState): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(frame: GstVideo.VideoCodecFrame, meta: Gst.Meta): boolean
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
    connect(sigName: "no-more-pads", callback: (($obj: Mpeg2Decoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Mpeg2Decoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Mpeg2Decoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Mpeg2Decoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Mpeg2Decoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Mpeg2Decoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Mpeg2Decoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Mpeg2Decoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-errors", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Mpeg2Decoder_ConstructProps)
    _init (config?: Mpeg2Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Vp8Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
export class Vp8Decoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    discard_corrupted_frames: boolean
    max_errors: number
    min_force_key_unit_interval: number
    qos: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
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
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    add_to_frame(n_bytes: number): void
    allocate_output_buffer(): Gst.Buffer
    allocate_output_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    allocate_output_frame_with_params(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    drop_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    finish_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool
    get_estimate_rate(): number
    get_frame(frame_number: number): GstVideo.VideoCodecFrame
    get_frames(): GstVideo.VideoCodecFrame[]
    get_latency(): [ /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    get_max_decode_time(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    get_max_errors(): number
    get_needs_format(): boolean
    get_needs_sync_point(): boolean
    get_oldest_frame(): GstVideo.VideoCodecFrame
    get_output_state(): GstVideo.VideoCodecState
    get_packetized(): boolean
    get_pending_frame_size(): number
    get_qos_proportion(): number
    have_frame(): Gst.FlowReturn
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    release_frame(frame: GstVideo.VideoCodecFrame): void
    request_sync_point(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    set_estimate_rate(enabled: boolean): void
    set_interlaced_output_state(fmt: GstVideo.VideoFormat, interlace_mode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_max_errors(num: number): void
    set_needs_format(enabled: boolean): void
    set_needs_sync_point(enabled: boolean): void
    set_output_state(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    set_packetized(packetized: boolean): void
    set_use_default_pad_acceptcaps(use: boolean): void
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
    /* Virtual methods of GstCodecs-1.0.GstCodecs.Vp8Decoder */
    vfunc_end_picture(picture: Vp8Picture): boolean
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): boolean
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn
    vfunc_start_picture(picture: Vp8Picture): boolean
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoDecoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_drain(): Gst.FlowReturn
    vfunc_finish(): Gst.FlowReturn
    vfunc_flush(): boolean
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_parse(frame: GstVideo.VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_reset(hard: boolean): boolean
    vfunc_set_format(state: GstVideo.VideoCodecState): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(frame: GstVideo.VideoCodecFrame, meta: Gst.Meta): boolean
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
    connect(sigName: "no-more-pads", callback: (($obj: Vp8Decoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Vp8Decoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Vp8Decoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Vp8Decoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Vp8Decoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Vp8Decoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Vp8Decoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Vp8Decoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-errors", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Vp8Decoder_ConstructProps)
    _init (config?: Vp8Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Vp9Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
export class Vp9Decoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    discard_corrupted_frames: boolean
    max_errors: number
    min_force_key_unit_interval: number
    qos: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
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
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    add_to_frame(n_bytes: number): void
    allocate_output_buffer(): Gst.Buffer
    allocate_output_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    allocate_output_frame_with_params(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    drop_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    finish_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool
    get_estimate_rate(): number
    get_frame(frame_number: number): GstVideo.VideoCodecFrame
    get_frames(): GstVideo.VideoCodecFrame[]
    get_latency(): [ /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    get_max_decode_time(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    get_max_errors(): number
    get_needs_format(): boolean
    get_needs_sync_point(): boolean
    get_oldest_frame(): GstVideo.VideoCodecFrame
    get_output_state(): GstVideo.VideoCodecState
    get_packetized(): boolean
    get_pending_frame_size(): number
    get_qos_proportion(): number
    have_frame(): Gst.FlowReturn
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    release_frame(frame: GstVideo.VideoCodecFrame): void
    request_sync_point(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    set_estimate_rate(enabled: boolean): void
    set_interlaced_output_state(fmt: GstVideo.VideoFormat, interlace_mode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_max_errors(num: number): void
    set_needs_format(enabled: boolean): void
    set_needs_sync_point(enabled: boolean): void
    set_output_state(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    set_packetized(packetized: boolean): void
    set_use_default_pad_acceptcaps(use: boolean): void
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
    /* Virtual methods of GstCodecs-1.0.GstCodecs.Vp9Decoder */
    vfunc_decode_picture(picture: Vp9Picture, dpb: Vp9Dpb): boolean
    vfunc_duplicate_picture(picture: Vp9Picture): Vp9Picture
    vfunc_end_picture(picture: Vp9Picture): boolean
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): boolean
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn
    vfunc_start_picture(picture: Vp9Picture): boolean
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoDecoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_drain(): Gst.FlowReturn
    vfunc_finish(): Gst.FlowReturn
    vfunc_flush(): boolean
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_parse(frame: GstVideo.VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_reset(hard: boolean): boolean
    vfunc_set_format(state: GstVideo.VideoCodecState): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(frame: GstVideo.VideoCodecFrame, meta: Gst.Meta): boolean
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
    connect(sigName: "no-more-pads", callback: (($obj: Vp9Decoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Vp9Decoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Vp9Decoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Vp9Decoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Vp9Decoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Vp9Decoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Vp9Decoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Vp9Decoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-errors", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Vp9Decoder_ConstructProps)
    _init (config?: Vp9Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class H264DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.H264DecoderClass */
    parent_class: GstVideo.VideoDecoderClass
    new_picture: (decoder: H264Decoder, frame: GstVideo.VideoCodecFrame, picture: H264Picture) => boolean
    new_field_picture: (decoder: H264Decoder, first_field: H264Picture, second_field: H264Picture) => boolean
    start_picture: (decoder: H264Decoder, picture: H264Picture, slice: H264Slice, dpb: H264Dpb) => boolean
    decode_slice: (decoder: H264Decoder, picture: H264Picture, slice: H264Slice, ref_pic_list0: H264Picture[], ref_pic_list1: H264Picture[]) => boolean
    end_picture: (decoder: H264Decoder, picture: H264Picture) => boolean
    output_picture: (decoder: H264Decoder, frame: GstVideo.VideoCodecFrame, picture: H264Picture) => Gst.FlowReturn
    get_preferred_output_delay: (decoder: H264Decoder, live: boolean) => number
    static name: string
}
export class H264DecoderPrivate {
    static name: string
}
export class H264Dpb {
    /* Methods of GstCodecs-1.0.GstCodecs.H264Dpb */
    add(picture: H264Picture): void
    bump(drain: boolean): H264Picture | null
    clear(): void
    delete_unused(): void
    free(): void
    get_interlaced(): boolean
    get_long_ref_by_long_term_pic_num(long_term_pic_num: number): H264Picture | null
    get_lowest_frame_num_short_ref(): H264Picture
    get_max_num_frames(): number
    get_picture(system_frame_number: number): H264Picture
    get_pictures_all(): H264Picture[]
    get_pictures_long_term_ref(include_second_field: boolean): /* out */ H264Picture[]
    get_pictures_short_term_ref(include_non_existing: boolean, include_second_field: boolean): /* out */ H264Picture[]
    get_short_ref_by_pic_num(pic_num: number): H264Picture | null
    get_size(): number
    mark_all_non_ref(): void
    needs_bump(max_num_reorder_frames: number, low_latency: boolean): boolean
    num_ref_frames(): number
    set_interlaced(interlaced: boolean): void
    set_max_num_frames(max_num_frames: number): void
    static name: string
}
export class H264Picture {
    /* Methods of GstCodecs-1.0.GstCodecs.H264Picture */
    get_user_data(): object | null
    set_reference(reference: H264PictureReference, other_field: boolean): void
    set_user_data(notify: GLib.DestroyNotify): void
    static name: string
    static new(): H264Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): H264Picture
}
export class H264Slice {
    static name: string
}
export abstract class H265DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.H265DecoderClass */
    parent_class: GstVideo.VideoDecoderClass
    new_picture: (decoder: H265Decoder, frame: GstVideo.VideoCodecFrame, picture: H265Picture) => boolean
    start_picture: (decoder: H265Decoder, picture: H265Picture, slice: H265Slice, dpb: H265Dpb) => boolean
    end_picture: (decoder: H265Decoder, picture: H265Picture) => boolean
    output_picture: (decoder: H265Decoder, frame: GstVideo.VideoCodecFrame, picture: H265Picture) => Gst.FlowReturn
    static name: string
}
export class H265DecoderPrivate {
    static name: string
}
export class H265Dpb {
    /* Methods of GstCodecs-1.0.GstCodecs.H265Dpb */
    add(picture: H265Picture): void
    bump(drain: boolean): H265Picture | null
    clear(): void
    delete_unused(): void
    free(): void
    get_long_ref_by_poc(poc: number): H265Picture | null
    get_max_num_pics(): number
    get_picture(system_frame_number: number): H265Picture
    get_pictures_all(): H265Picture[]
    get_ref_by_poc(poc: number): H265Picture | null
    get_ref_by_poc_lsb(poc_lsb: number): H265Picture | null
    get_short_ref_by_poc(poc: number): H265Picture | null
    get_size(): number
    is_full(): boolean
    mark_all_non_ref(): void
    needs_bump(max_num_reorder_pics: number, max_latency_increase: number, max_dec_pic_buffering: number): boolean
    num_ref_pictures(): number
    set_max_num_pics(max_num_pics: number): void
    static name: string
}
export class H265Picture {
    /* Methods of GstCodecs-1.0.GstCodecs.H265Picture */
    get_user_data(): object | null
    set_user_data(notify: GLib.DestroyNotify): void
    static name: string
    static new(): H265Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): H265Picture
}
export class H265Slice {
    static name: string
}
export abstract class Mpeg2DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.Mpeg2DecoderClass */
    parent_class: GstVideo.VideoDecoderClass
    new_picture: (decoder: Mpeg2Decoder, frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture) => boolean
    new_field_picture: (decoder: Mpeg2Decoder, first_field: Mpeg2Picture, second_field: Mpeg2Picture) => boolean
    start_picture: (decoder: Mpeg2Decoder, picture: Mpeg2Picture, slice: Mpeg2Slice, prev_picture: Mpeg2Picture, next_picture: Mpeg2Picture) => boolean
    decode_slice: (decoder: Mpeg2Decoder, picture: Mpeg2Picture, slice: Mpeg2Slice) => boolean
    end_picture: (decoder: Mpeg2Decoder, picture: Mpeg2Picture) => boolean
    output_picture: (decoder: Mpeg2Decoder, frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture) => Gst.FlowReturn
    static name: string
}
export class Mpeg2DecoderPrivate {
    static name: string
}
export class Mpeg2Dpb {
    /* Methods of GstCodecs-1.0.GstCodecs.Mpeg2Dpb */
    add(picture: Mpeg2Picture): void
    bump(): Mpeg2Picture | null
    clear(): void
    free(): void
    get_neighbours(picture: Mpeg2Picture): [ /* prev_picture_ptr */ Mpeg2Picture | null, /* next_picture_ptr */ Mpeg2Picture | null ]
    need_bump(): boolean
    static name: string
}
export class Mpeg2Picture {
    /* Methods of GstCodecs-1.0.GstCodecs.Mpeg2Picture */
    get_user_data(): object | null
    set_user_data(notify: GLib.DestroyNotify): void
    static name: string
    static new(): Mpeg2Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Mpeg2Picture
}
export class Mpeg2Slice {
    static name: string
}
export abstract class Vp8DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp8DecoderClass */
    parent_class: GstVideo.VideoDecoderClass
    new_picture: (decoder: Vp8Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp8Picture) => boolean
    start_picture: (decoder: Vp8Decoder, picture: Vp8Picture) => boolean
    end_picture: (decoder: Vp8Decoder, picture: Vp8Picture) => boolean
    output_picture: (decoder: Vp8Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp8Picture) => Gst.FlowReturn
    static name: string
}
export class Vp8DecoderPrivate {
    static name: string
}
export class Vp8Picture {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp8Picture */
    parent: Gst.MiniObject
    pts: Gst.ClockTime
    system_frame_number: number
    data: number
    size: number
    user_data: object
    notify: GLib.DestroyNotify
    /* Methods of GstCodecs-1.0.GstCodecs.Vp8Picture */
    get_user_data(): object | null
    set_user_data(notify: GLib.DestroyNotify): void
    static name: string
    static new(): Vp8Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Vp8Picture
}
export abstract class Vp9DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp9DecoderClass */
    parent_class: GstVideo.VideoDecoderClass
    new_picture: (decoder: Vp9Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp9Picture) => boolean
    duplicate_picture: (decoder: Vp9Decoder, picture: Vp9Picture) => Vp9Picture
    start_picture: (decoder: Vp9Decoder, picture: Vp9Picture) => boolean
    decode_picture: (decoder: Vp9Decoder, picture: Vp9Picture, dpb: Vp9Dpb) => boolean
    end_picture: (decoder: Vp9Decoder, picture: Vp9Picture) => boolean
    output_picture: (decoder: Vp9Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp9Picture) => Gst.FlowReturn
    static name: string
}
export class Vp9DecoderPrivate {
    static name: string
}
export class Vp9Dpb {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp9Dpb */
    pic_list: Vp9Picture[]
    /* Methods of GstCodecs-1.0.GstCodecs.Vp9Dpb */
    add(picture: Vp9Picture): void
    clear(): void
    free(): void
    static name: string
}
export class Vp9Picture {
    /* Methods of GstCodecs-1.0.GstCodecs.Vp9Picture */
    get_user_data(): object | null
    set_user_data(notify: GLib.DestroyNotify): void
    static name: string
    static new(): Vp9Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Vp9Picture
}