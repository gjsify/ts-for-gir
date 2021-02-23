/**
 * GstVideo-0.10
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as GstBase from './GstBase-0.10';
import type * as Gst from './Gst-0.10';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum Format {
    UNKNOWN,
    I420,
    YV12,
    YUY2,
    UYVY,
    AYUV,
    RGBX,
    BGRX,
    XRGB,
    XBGR,
    RGBA,
    BGRA,
    ARGB,
    ABGR,
    RGB,
    BGR,
    Y41B,
    Y42B,
    YVYU,
    Y444,
    V210,
    V216,
    NV12,
    NV21,
}
export const BLUE_MASK_15: string
export const BLUE_MASK_15_INT: any
export const BLUE_MASK_16: string
export const BLUE_MASK_16_INT: any
export const BYTE1_MASK_24: string
export const BYTE1_MASK_24_INT: any
export const BYTE1_MASK_32: string
export const BYTE1_MASK_32_INT: any
export const BYTE2_MASK_24: string
export const BYTE2_MASK_24_INT: any
export const BYTE2_MASK_32: string
export const BYTE2_MASK_32_INT: any
export const BYTE3_MASK_24: string
export const BYTE3_MASK_24_INT: any
export const BYTE3_MASK_32: string
export const BYTE3_MASK_32_INT: any
export const BYTE4_MASK_32: string
export const BYTE4_MASK_32_INT: any
export const CAPS_RGB_15: string
export const CAPS_RGB_16: string
export const FPS_RANGE: string
export const GREEN_MASK_15: string
export const GREEN_MASK_15_INT: any
export const GREEN_MASK_16: string
export const GREEN_MASK_16_INT: any
export const RED_MASK_15: string
export const RED_MASK_15_INT: any
export const RED_MASK_16: string
export const RED_MASK_16_INT: any
export const SIZE_RANGE: string
export function calculate_display_ratio(video_width: any, video_height: any, video_par_n: any, video_par_d: any, display_par_n: any, display_par_d: any): [ /* returnType */ any, /* dar_n */ any, /* dar_d */ any ]
export function event_new_still_frame(in_still: any): Gst.Event
export function event_parse_still_frame(event: Gst.Event): [ /* returnType */ any, /* in_still */ any ]
export function format_convert(format: Format, width: any, height: any, fps_n: any, fps_d: any, src_format: Gst.Format, src_value: any, dest_format: Gst.Format): [ /* returnType */ any, /* dest_value */ any ]
export function format_from_fourcc(fourcc: any): Format
export function format_get_component_height(format: Format, component: any, height: any): any
export function format_get_component_offset(format: Format, component: any, width: any, height: any): any
export function format_get_component_width(format: Format, component: any, width: any): any
export function format_get_pixel_stride(format: Format, component: any): any
export function format_get_row_stride(format: Format, component: any, width: any): any
export function format_get_size(format: Format, width: any, height: any): any
export function format_has_alpha(format: Format): any
export function format_is_rgb(format: Format): any
export function format_is_yuv(format: Format): any
export function format_new_caps(format: Format, width: any, height: any, framerate_n: any, framerate_d: any, par_n: any, par_d: any): Gst.Caps
export function format_new_caps_interlaced(format: Format, width: any, height: any, framerate_n: any, framerate_d: any, par_n: any, par_d: any, interlaced: any): Gst.Caps
export function format_parse_caps(caps: Gst.Caps, format: Format): [ /* returnType */ any, /* width */ any, /* height */ any ]
export function format_parse_caps_interlaced(caps: Gst.Caps): [ /* returnType */ any, /* interlaced */ any ]
export function format_to_fourcc(format: Format): any
export function frame_rate(pad: Gst.Pad): any
export function get_size(pad: Gst.Pad): [ /* returnType */ any, /* width */ any, /* height */ any ]
export function parse_caps_chroma_site(caps: Gst.Caps): string
export function parse_caps_color_matrix(caps: Gst.Caps): string
export function parse_caps_framerate(caps: Gst.Caps): [ /* returnType */ any, /* fps_n */ any, /* fps_d */ any ]
export function parse_caps_pixel_aspect_ratio(caps: Gst.Caps): [ /* returnType */ any, /* par_n */ any, /* par_d */ any ]
export interface Filter_ConstructProps extends GstBase.Transform_ConstructProps {
}
export class Filter {
    /* Properties of GstBase-0.10.GstBase.Transform */
    qos: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstVideo-0.10.GstVideo.Filter */
    element: GstBase.Transform
    inited: any
    /* Fields of GstBase-0.10.GstBase.Transform */
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    passthrough: any
    always_in_place: any
    cache_caps1: Gst.Caps
    cache_caps1_size: any
    cache_caps2: Gst.Caps
    cache_caps2_size: any
    have_same_caps: any
    delay_configure: any
    pending_configure: any
    negotiated: any
    have_newsegment: any
    segment: Gst.Segment
    transform_lock: GLib.Mutex
    priv: Gst.BaseTransformPrivate
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Gst.Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.Transform */
    set_passthrough(passthrough: any): void
    is_passthrough(): any
    set_in_place(in_place: any): void
    is_in_place(): any
    update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    set_qos_enabled(enabled: any): void
    is_qos_enabled(): any
    set_gap_aware(gap_aware: any): void
    suggest(caps: Gst.Caps, size: any): void
    reconfigure(): void
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Gst.Clock
    get_clock(): Gst.Clock
    set_clock(clock: Gst.Clock): any
    set_base_time(time: Gst.ClockTime): void
    get_base_time(): Gst.ClockTime
    set_start_time(time: Gst.ClockTime): void
    get_start_time(): Gst.ClockTime
    is_indexable(): any
    set_index(index: Gst.Index): void
    get_index(): Gst.Index
    set_bus(bus: Gst.Bus): void
    get_bus(): Gst.Bus
    add_pad(pad: Gst.Pad): any
    remove_pad(pad: Gst.Pad): any
    no_more_pads(): void
    get_pad(name: string): Gst.Pad
    get_static_pad(name: string): Gst.Pad
    get_request_pad(name: string): Gst.Pad
    release_request_pad(pad: Gst.Pad): void
    iterate_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    send_event(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, cur_type: Gst.SeekType, cur: any, stop_type: Gst.SeekType, stop: any): any
    get_query_types(): Gst.QueryType
    query(query: Gst.Query): any
    post_message(message: Gst.Message): any
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    set_state(state: Gst.State): Gst.StateChangeReturn
    abort_state(): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): Gst.ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    link_filtered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    link_pads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: any): any
    query_position(format: Gst.Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Gst.Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Gst.Format, src_val: any, dest_format: Gst.Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Gst.Pad, list: Gst.TagList): void
    found_tags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): any
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name: string): Gst.Pad
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_set_bus(bus: Gst.Bus): void
    vfunc_provide_clock(): Gst.Clock
    vfunc_set_clock(clock: Gst.Clock): any
    vfunc_get_index(): Gst.Index
    vfunc_set_index(index: Gst.Index): void
    vfunc_send_event(event: Gst.Event): any
    vfunc_get_query_types(): Gst.QueryType
    vfunc_query(query: Gst.Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Filter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Filter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Filter, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Filter, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Filter, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Filter, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Filter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Filter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Filter, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Filter, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Filter, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Filter, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Filter, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Filter, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Sink_ConstructProps extends GstBase.Sink_ConstructProps {
    show_preroll_frame?: any
}
export class Sink {
    /* Properties of GstVideo-0.10.GstVideo.Sink */
    show_preroll_frame: any
    /* Properties of GstBase-0.10.GstBase.Sink */
    async: any
    blocksize: any
    enable_last_buffer: any
    readonly last_buffer: Gst.Buffer
    max_lateness: any
    preroll_queue_len: any
    qos: any
    render_delay: any
    sync: any
    ts_offset: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstVideo-0.10.GstVideo.Sink */
    element: GstBase.Sink
    width: any
    height: any
    priv: SinkPrivate
    _gst_reserved: any[]
    /* Fields of GstBase-0.10.GstBase.Sink */
    sinkpad: Gst.Pad
    pad_mode: Gst.ActivateMode
    offset: any
    can_activate_pull: any
    can_activate_push: any
    preroll_queue: GLib.Queue
    preroll_queue_max_len: any
    preroll_queued: any
    buffers_queued: any
    events_queued: any
    eos: any
    eos_queued: any
    need_preroll: any
    have_preroll: any
    playing_async: any
    have_newsegment: any
    segment: Gst.Segment
    clock_id: Gst.ClockID
    end_time: Gst.ClockTime
    flushing: any
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Gst.Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.Sink */
    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn
    wait_preroll(): Gst.FlowReturn
    set_sync(sync: any): void
    get_sync(): any
    set_max_lateness(max_lateness: any): void
    get_max_lateness(): any
    set_qos_enabled(enabled: any): void
    is_qos_enabled(): any
    set_async_enabled(enabled: any): void
    is_async_enabled(): any
    set_ts_offset(offset: Gst.ClockTimeDiff): void
    get_ts_offset(): Gst.ClockTimeDiff
    get_last_buffer(): Gst.Buffer
    set_last_buffer_enabled(enable: any): void
    is_last_buffer_enabled(): any
    query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): [ /* returnType */ any, /* live */ any, /* upstream_live */ any ]
    get_latency(): Gst.ClockTime
    set_render_delay(delay: Gst.ClockTime): void
    get_render_delay(): Gst.ClockTime
    set_blocksize(blocksize: any): void
    get_blocksize(): any
    wait_clock(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.ClockReturn
    wait_eos(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.FlowReturn
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Gst.Clock
    get_clock(): Gst.Clock
    set_clock(clock: Gst.Clock): any
    set_base_time(time: Gst.ClockTime): void
    get_base_time(): Gst.ClockTime
    set_start_time(time: Gst.ClockTime): void
    get_start_time(): Gst.ClockTime
    is_indexable(): any
    set_index(index: Gst.Index): void
    get_index(): Gst.Index
    set_bus(bus: Gst.Bus): void
    get_bus(): Gst.Bus
    add_pad(pad: Gst.Pad): any
    remove_pad(pad: Gst.Pad): any
    no_more_pads(): void
    get_pad(name: string): Gst.Pad
    get_static_pad(name: string): Gst.Pad
    get_request_pad(name: string): Gst.Pad
    release_request_pad(pad: Gst.Pad): void
    iterate_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    send_event(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, cur_type: Gst.SeekType, cur: any, stop_type: Gst.SeekType, stop: any): any
    get_query_types(): Gst.QueryType
    query(query: Gst.Query): any
    post_message(message: Gst.Message): any
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    set_state(state: Gst.State): Gst.StateChangeReturn
    abort_state(): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): Gst.ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    link_filtered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    link_pads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: any): any
    query_position(format: Gst.Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Gst.Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Gst.Format, src_val: any, dest_format: Gst.Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Gst.Pad, list: Gst.TagList): void
    found_tags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): any
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of GstVideo-0.10.GstVideo.Sink */
    vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name: string): Gst.Pad
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_set_bus(bus: Gst.Bus): void
    vfunc_provide_clock(): Gst.Clock
    vfunc_set_clock(clock: Gst.Clock): any
    vfunc_get_index(): Gst.Index
    vfunc_set_index(index: Gst.Index): void
    vfunc_send_event(event: Gst.Event): any
    vfunc_get_query_types(): Gst.QueryType
    vfunc_query(query: Gst.Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Sink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Sink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Sink, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Sink, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Sink, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Sink, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Sink, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Sink, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Sink, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Sink, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Sink, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Sink, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Sink, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Sink, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::show-preroll-frame", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sink_ConstructProps)
    _init (config?: Sink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static center_rect(src: Rectangle, dst: Rectangle, result: Rectangle, scaling: any): void
    static $gtype: GObject.Type
}
export abstract class FilterClass {
    /* Fields of GstVideo-0.10.GstVideo.FilterClass */
    parent_class: GstBase.TransformClass
    static name: string
}
export class Rectangle {
    /* Fields of GstVideo-0.10.GstVideo.Rectangle */
    x: any
    y: any
    w: any
    h: any
    static name: string
}
export abstract class SinkClass {
    /* Fields of GstVideo-0.10.GstVideo.SinkClass */
    parent_class: GstBase.SinkClass
    show_frame: (video_sink: Sink, buf: Gst.Buffer) => Gst.FlowReturn
    _gst_reserved: any[]
    static name: string
}
export class SinkPrivate {
    static name: string
}