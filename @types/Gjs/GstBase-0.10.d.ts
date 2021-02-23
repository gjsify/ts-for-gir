/**
 * GstBase-0.10
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Gst from './Gst-0.10';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum SrcFlags {
    STARTED,
    FLAG_LAST,
}
export const TRANSFORM_SINK_NAME: string
export const TRANSFORM_SRC_NAME: string
export function gst_type_find_helper(src: Gst.Pad, size: any): Gst.Caps
export function gst_type_find_helper_for_buffer(obj: Gst.Object, buf: Gst.Buffer, prob: Gst.TypeFindProbability): Gst.Caps
export function gst_type_find_helper_for_extension(obj: Gst.Object, extension: string): Gst.Caps
export function gst_type_find_helper_get_range(obj: Gst.Object, func: Gst.TypeFindHelperGetRangeFunction, size: any, prob: Gst.TypeFindProbability): Gst.Caps
export function gst_type_find_helper_get_range_ext(obj: Gst.Object, func: Gst.TypeFindHelperGetRangeFunction, size: any, extension: string, prob: Gst.TypeFindProbability): Gst.Caps
export interface GstCollectDataDestroyNotify {
    (data: Gst.CollectData): void
}
export interface GstCollectPadsClipFunction {
    (pads: Gst.CollectPads, data: Gst.CollectData, buffer: Gst.Buffer): Gst.Buffer
}
export interface GstCollectPadsFunction {
    (pads: Gst.CollectPads): Gst.FlowReturn
}
export interface GstDataQueueCheckFullFunction {
    (queue: Gst.DataQueue, visible: any, bytes: any, time: any, checkdata: any): any
}
export interface GstDataQueueEmptyCallback {
    (queue: Gst.DataQueue, checkdata: any): void
}
export interface GstDataQueueFullCallback {
    (queue: Gst.DataQueue, checkdata: any): void
}
export interface GstTypeFindHelperGetRangeFunction {
    (obj: Gst.Object, offset: any, length: any, buffer: Gst.Buffer): Gst.FlowReturn
}
export interface GstAdapter_ConstructProps extends GObject.Object_ConstructProps {
}
export class GstAdapter {
    /* Fields of GstBase-0.10.GstBase.GstAdapter */
    object: GObject.Object
    buflist: any[]
    size: any
    skip: any
    assembled_data: any
    assembled_size: any
    assembled_len: any
    buflist_end: any[]
    priv: Gst.AdapterPrivate
    _gst_reserved: any[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.GstAdapter */
    clear(): void
    push(buf: Gst.Buffer): void
    peek(size: any): any[]
    copy(dest: any[], offset: any, size: any): void
    flush(flush: any): void
    take(nbytes: any): any[]
    take_buffer(nbytes: any): Gst.Buffer
    available(): any
    available_fast(): any
    prev_timestamp(): [ /* returnType */ Gst.ClockTime, /* distance */ any ]
    masked_scan_uint32(mask: any, pattern: any, offset: any, size: any): any
    masked_scan_uint32_peek(mask: any, pattern: any, offset: any, size: any): [ /* returnType */ any, /* value */ any ]
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
    connect(sigName: "notify", callback: (($obj: GstAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GstAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GstAdapter_ConstructProps)
    _init (config?: GstAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GstAdapter
    static $gtype: GObject.Type
}
export interface GstCollectPads_ConstructProps extends Gst.Object_ConstructProps {
}
export class GstCollectPads {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstBase-0.10.GstBase.GstCollectPads */
    object: Gst.Object
    data: any[]
    cookie: any
    cond: GLib.Cond
    func: Gst.CollectPadsFunction
    user_data: any
    numpads: any
    queuedpads: any
    eospads: any
    started: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Gst.Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.GstCollectPads */
    set_function(func: Gst.CollectPadsFunction, user_data: any): void
    set_clip_function(clipfunc: Gst.CollectPadsClipFunction, user_data: any): void
    add_pad(pad: Gst.Pad, size: any): Gst.CollectData
    add_pad_full(pad: Gst.Pad, size: any, destroy_notify: Gst.CollectDataDestroyNotify): Gst.CollectData
    remove_pad(pad: Gst.Pad): any
    is_active(pad: Gst.Pad): any
    collect(): Gst.FlowReturn
    collect_range(offset: any, length: any): Gst.FlowReturn
    start(): void
    stop(): void
    set_flushing(flushing: any): void
    peek(data: Gst.CollectData): Gst.Buffer
    pop(data: Gst.CollectData): Gst.Buffer
    available(): any
    read(data: Gst.CollectData, size: any): [ /* returnType */ any, /* bytes */ any ]
    read_buffer(data: Gst.CollectData, size: any): Gst.Buffer
    take_buffer(data: Gst.CollectData, size: any): Gst.Buffer
    flush(data: Gst.CollectData, size: any): any
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GstCollectPads, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GstCollectPads, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: GstCollectPads, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: GstCollectPads, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: GstCollectPads, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: GstCollectPads, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: GstCollectPads, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: GstCollectPads, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GstCollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GstCollectPads, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GstCollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GstCollectPads, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GstCollectPads_ConstructProps)
    _init (config?: GstCollectPads_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GstCollectPads
    static $gtype: GObject.Type
}
export interface GstDataQueue_ConstructProps extends GObject.Object_ConstructProps {
}
export class GstDataQueue {
    /* Properties of GstBase-0.10.GstBase.GstDataQueue */
    readonly current_level_bytes: any
    readonly current_level_time: any
    readonly current_level_visible: any
    /* Fields of GstBase-0.10.GstBase.GstDataQueue */
    object: GObject.Object
    queue: GLib.Queue
    cur_level: Gst.DataQueueSize
    checkfull: Gst.DataQueueCheckFullFunction
    checkdata: any
    qlock: GLib.Mutex
    item_add: GLib.Cond
    item_del: GLib.Cond
    flushing: any
    fullcallback: Gst.DataQueueFullCallback
    emptycallback: Gst.DataQueueEmptyCallback
    _gst_reserved: any[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.GstDataQueue */
    push(item: Gst.DataQueueItem): any
    pop(item: Gst.DataQueueItem): any
    flush(): void
    set_flushing(flushing: any): void
    drop_head(type: GObject.Type): any
    is_full(): any
    is_empty(): any
    get_level(level: Gst.DataQueueSize): void
    limits_changed(): void
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
    /* Signals of GstBase-0.10.GstBase.GstDataQueue */
    connect(sigName: "empty", callback: (($obj: GstDataQueue) => void)): number
    connect_after(sigName: "empty", callback: (($obj: GstDataQueue) => void)): number
    emit(sigName: "empty"): void
    connect(sigName: "full", callback: (($obj: GstDataQueue) => void)): number
    connect_after(sigName: "full", callback: (($obj: GstDataQueue) => void)): number
    emit(sigName: "full"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-level-bytes", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-time", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-visible", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GstDataQueue_ConstructProps)
    _init (config?: GstDataQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(checkfull: Gst.DataQueueCheckFullFunction): GstDataQueue
    static new_full(checkfull: Gst.DataQueueCheckFullFunction, fullcallback: Gst.DataQueueFullCallback, emptycallback: Gst.DataQueueEmptyCallback): GstDataQueue
    static $gtype: GObject.Type
}
export interface GstPushSrc_ConstructProps extends Src_ConstructProps {
}
export class GstPushSrc {
    /* Properties of GstBase-0.10.GstBase.Src */
    blocksize: any
    do_timestamp: any
    num_buffers: any
    typefind: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstBase-0.10.GstBase.GstPushSrc */
    parent: Gst.BaseSrc
    _gst_reserved: any[]
    /* Fields of GstBase-0.10.GstBase.Src */
    element: Gst.Element
    srcpad: Gst.Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: any
    live_running: any
    can_activate_push: any
    pad_mode: Gst.ActivateMode
    seekable: any
    random_access: any
    clock_id: Gst.ClockID
    end_time: Gst.ClockTime
    segment: Gst.Segment
    need_newsegment: any
    offset: any
    size: any
    num_buffers_left: any
    priv: Gst.BaseSrcPrivate
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
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.Src */
    wait_playing(): Gst.FlowReturn
    set_live(live: any): void
    set_format(format: Gst.Format): void
    query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): [ /* returnType */ any, /* live */ any ]
    set_blocksize(blocksize: any): void
    get_blocksize(): any
    set_do_timestamp(timestamp: any): void
    get_do_timestamp(): any
    new_seamless_segment(start: any, stop: any, position: any): any
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
    connect(sigName: "no-more-pads", callback: (($obj: GstPushSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: GstPushSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: GstPushSrc, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: GstPushSrc, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: GstPushSrc, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: GstPushSrc, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GstPushSrc, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GstPushSrc, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: GstPushSrc, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: GstPushSrc, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: GstPushSrc, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: GstPushSrc, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: GstPushSrc, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: GstPushSrc, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GstPushSrc_ConstructProps)
    _init (config?: GstPushSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Sink_ConstructProps extends Gst.Element_ConstructProps {
    async?: any
    blocksize?: any
    enable_last_buffer?: any
    max_lateness?: any
    preroll_queue_len?: any
    qos?: any
    render_delay?: any
    sync?: any
    ts_offset?: any
}
export class Sink {
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
    /* Fields of GstBase-0.10.GstBase.Sink */
    element: Gst.Element
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
    priv: Gst.BaseSinkPrivate
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
    _gst_reserved: any
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
    static $gtype: GObject.Type
}
export interface Src_ConstructProps extends Gst.Element_ConstructProps {
    blocksize?: any
    do_timestamp?: any
    num_buffers?: any
    typefind?: any
}
export class Src {
    /* Properties of GstBase-0.10.GstBase.Src */
    blocksize: any
    do_timestamp: any
    num_buffers: any
    typefind: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstBase-0.10.GstBase.Src */
    element: Gst.Element
    srcpad: Gst.Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: any
    live_running: any
    can_activate_push: any
    pad_mode: Gst.ActivateMode
    seekable: any
    random_access: any
    clock_id: Gst.ClockID
    end_time: Gst.ClockTime
    segment: Gst.Segment
    need_newsegment: any
    offset: any
    size: any
    num_buffers_left: any
    priv: Gst.BaseSrcPrivate
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
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.Src */
    wait_playing(): Gst.FlowReturn
    set_live(live: any): void
    set_format(format: Gst.Format): void
    query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): [ /* returnType */ any, /* live */ any ]
    set_blocksize(blocksize: any): void
    get_blocksize(): any
    set_do_timestamp(timestamp: any): void
    get_do_timestamp(): any
    new_seamless_segment(start: any, stop: any, position: any): any
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
    connect(sigName: "no-more-pads", callback: (($obj: Src) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Src) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Src, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Src, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Src, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Src, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Src, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Src, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Src, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Src, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Src, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Src, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Src, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Src, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Src_ConstructProps)
    _init (config?: Src_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transform_ConstructProps extends Gst.Element_ConstructProps {
    qos?: any
}
export class Transform {
    /* Properties of GstBase-0.10.GstBase.Transform */
    qos: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstBase-0.10.GstBase.Transform */
    element: Gst.Element
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
    connect(sigName: "no-more-pads", callback: (($obj: Transform) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Transform) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Transform, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Transform, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Transform, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Transform, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Transform, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Transform, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Transform, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Transform, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Transform, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Transform, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Transform, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Transform, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transform_ConstructProps)
    _init (config?: Transform_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class GstAdapterClass {
    /* Fields of GstBase-0.10.GstBase.GstAdapterClass */
    parent_class: GObject.ObjectClass
    _gst_reserved: any[]
    static name: string
}
export class GstAdapterPrivate {
    static name: string
}
export class GstBitReader {
    /* Fields of GstBase-0.10.GstBase.GstBitReader */
    data: any
    size: any
    byte: any
    bit: any
    /* Methods of GstBase-0.10.GstBase.GstBitReader */
    free(): void
    init(data: any[], size: any): void
    init_from_buffer(buffer: Gst.Buffer): void
    set_pos(pos: any): any
    get_pos(): any
    get_remaining(): any
    get_size(): any
    skip(nbits: any): any
    skip_to_byte(): any
    get_bits_uint8(val: any[], nbits: any): any
    get_bits_uint16(nbits: any): [ /* returnType */ any, /* val */ any ]
    get_bits_uint32(nbits: any): [ /* returnType */ any, /* val */ any ]
    get_bits_uint64(nbits: any): [ /* returnType */ any, /* val */ any ]
    peek_bits_uint8(val: any[], nbits: any): any
    peek_bits_uint16(nbits: any): [ /* returnType */ any, /* val */ any ]
    peek_bits_uint32(nbits: any): [ /* returnType */ any, /* val */ any ]
    peek_bits_uint64(nbits: any): [ /* returnType */ any, /* val */ any ]
    static name: string
    static new(data: any[], size: any): GstBitReader
    constructor(data: any[], size: any)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: any): GstBitReader
    static new_from_buffer(buffer: Gst.Buffer): GstBitReader
}
export class GstByteReader {
    /* Fields of GstBase-0.10.GstBase.GstByteReader */
    data: any
    size: any
    byte: any
    /* Methods of GstBase-0.10.GstBase.GstByteReader */
    free(): void
    init(data: any[], size: any): void
    init_from_buffer(buffer: Gst.Buffer): void
    set_pos(pos: any): any
    get_pos(): any
    get_remaining(): any
    get_size(): any
    skip(nbytes: any): any
    get_uint8(val: any[]): any
    get_int8(): [ /* returnType */ any, /* val */ any ]
    get_uint16_le(): [ /* returnType */ any, /* val */ any ]
    get_int16_le(): [ /* returnType */ any, /* val */ any ]
    get_uint16_be(): [ /* returnType */ any, /* val */ any ]
    get_int16_be(): [ /* returnType */ any, /* val */ any ]
    get_uint24_le(): [ /* returnType */ any, /* val */ any ]
    get_int24_le(): [ /* returnType */ any, /* val */ number ]
    get_uint24_be(): [ /* returnType */ any, /* val */ any ]
    get_int24_be(): [ /* returnType */ any, /* val */ number ]
    get_uint32_le(): [ /* returnType */ any, /* val */ any ]
    get_int32_le(): [ /* returnType */ any, /* val */ number ]
    get_uint32_be(): [ /* returnType */ any, /* val */ any ]
    get_int32_be(): [ /* returnType */ any, /* val */ number ]
    get_uint64_le(): [ /* returnType */ any, /* val */ any ]
    get_int64_le(): [ /* returnType */ any, /* val */ any ]
    get_uint64_be(): [ /* returnType */ any, /* val */ any ]
    get_int64_be(): [ /* returnType */ any, /* val */ any ]
    peek_uint8(val: any[]): any
    peek_int8(): [ /* returnType */ any, /* val */ any ]
    peek_uint16_le(): [ /* returnType */ any, /* val */ any ]
    peek_int16_le(): [ /* returnType */ any, /* val */ any ]
    peek_uint16_be(): [ /* returnType */ any, /* val */ any ]
    peek_int16_be(): [ /* returnType */ any, /* val */ any ]
    peek_uint24_le(): [ /* returnType */ any, /* val */ any ]
    peek_int24_le(): [ /* returnType */ any, /* val */ number ]
    peek_uint24_be(): [ /* returnType */ any, /* val */ any ]
    peek_int24_be(): [ /* returnType */ any, /* val */ number ]
    peek_uint32_le(): [ /* returnType */ any, /* val */ any ]
    peek_int32_le(): [ /* returnType */ any, /* val */ number ]
    peek_uint32_be(): [ /* returnType */ any, /* val */ any ]
    peek_int32_be(): [ /* returnType */ any, /* val */ number ]
    peek_uint64_le(): [ /* returnType */ any, /* val */ any ]
    peek_int64_le(): [ /* returnType */ any, /* val */ any ]
    peek_uint64_be(): [ /* returnType */ any, /* val */ any ]
    peek_int64_be(): [ /* returnType */ any, /* val */ any ]
    get_float32_le(): [ /* returnType */ any, /* val */ any ]
    get_float32_be(): [ /* returnType */ any, /* val */ any ]
    get_float64_le(): [ /* returnType */ any, /* val */ number ]
    get_float64_be(): [ /* returnType */ any, /* val */ number ]
    peek_float32_le(): [ /* returnType */ any, /* val */ any ]
    peek_float32_be(): [ /* returnType */ any, /* val */ any ]
    peek_float64_le(): [ /* returnType */ any, /* val */ number ]
    peek_float64_be(): [ /* returnType */ any, /* val */ number ]
    dup_data(size: any): [ /* returnType */ any, /* val */ any ]
    get_data(size: any): [ /* returnType */ any, /* val */ any ]
    peek_data(size: any): [ /* returnType */ any, /* val */ any ]
    dup_string_utf8(str: string[]): any
    dup_string_utf16(): [ /* returnType */ any, /* str */ any ]
    dup_string_utf32(): [ /* returnType */ any, /* str */ any ]
    skip_string_utf8(): any
    skip_string_utf16(): any
    skip_string_utf32(): any
    get_string_utf8(str: string[]): any
    peek_string_utf8(str: string[]): any
    masked_scan_uint32(mask: any, pattern: any, offset: any, size: any): any
    static name: string
    static new(data: any[], size: any): GstByteReader
    constructor(data: any[], size: any)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: any): GstByteReader
    static new_from_buffer(buffer: Gst.Buffer): GstByteReader
}
export class GstByteWriter {
    /* Fields of GstBase-0.10.GstBase.GstByteWriter */
    parent: Gst.ByteReader
    alloc_size: any
    fixed: any
    owned: any
    /* Methods of GstBase-0.10.GstBase.GstByteWriter */
    init(): void
    init_with_size(size: any, fixed: any): void
    init_with_data(data: any[], size: any, initialized: any): void
    init_with_buffer(buffer: Gst.Buffer, initialized: any): void
    free(): void
    free_and_get_data(): any[]
    free_and_get_buffer(): Gst.Buffer
    reset(): void
    reset_and_get_data(): any[]
    reset_and_get_buffer(): Gst.Buffer
    get_remaining(): any
    ensure_free_space(size: any): any
    put_uint8(val: any): any
    put_int8(val: any): any
    put_uint16_be(val: any): any
    put_uint16_le(val: any): any
    put_int16_be(val: any): any
    put_int16_le(val: any): any
    put_uint24_be(val: any): any
    put_uint24_le(val: any): any
    put_int24_be(val: number): any
    put_int24_le(val: number): any
    put_uint32_be(val: any): any
    put_uint32_le(val: any): any
    put_int32_be(val: number): any
    put_int32_le(val: number): any
    put_uint64_be(val: any): any
    put_uint64_le(val: any): any
    put_int64_be(val: any): any
    put_int64_le(val: any): any
    put_float32_be(val: any): any
    put_float32_le(val: any): any
    put_float64_be(val: number): any
    put_float64_le(val: number): any
    put_data(data: any[], size: any): any
    fill(value: any, size: any): any
    put_string_utf8(data: string): any
    put_string_utf16(): [ /* returnType */ any, /* data */ any ]
    put_string_utf32(): [ /* returnType */ any, /* data */ any ]
    static name: string
    static new(): GstByteWriter
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GstByteWriter
    static new_with_size(size: any, fixed: any): GstByteWriter
    static new_with_data(data: any[], size: any, initialized: any): GstByteWriter
    static new_with_buffer(buffer: Gst.Buffer, initialized: any): GstByteWriter
}
export class GstCollectData {
    /* Fields of GstBase-0.10.GstBase.GstCollectData */
    collect: Gst.CollectPads
    pad: Gst.Pad
    buffer: Gst.Buffer
    pos: any
    segment: Gst.Segment
    static name: string
}
export abstract class GstCollectPadsClass {
    /* Fields of GstBase-0.10.GstBase.GstCollectPadsClass */
    parent_class: Gst.ObjectClass
    _gst_reserved: any[]
    static name: string
}
export class GstCollectPadsPrivate {
    static name: string
}
export abstract class GstDataQueueClass {
    /* Fields of GstBase-0.10.GstBase.GstDataQueueClass */
    parent_class: GObject.ObjectClass
    empty: (queue: Gst.DataQueue) => void
    full: (queue: Gst.DataQueue) => void
    _gst_reserved: any[]
    static name: string
}
export class GstDataQueueItem {
    /* Fields of GstBase-0.10.GstBase.GstDataQueueItem */
    object: Gst.MiniObject
    size: any
    duration: any
    visible: any
    destroy: GLib.DestroyNotify
    static name: string
}
export class GstDataQueueSize {
    /* Fields of GstBase-0.10.GstBase.GstDataQueueSize */
    visible: any
    bytes: any
    time: any
    static name: string
}
export abstract class GstPushSrcClass {
    /* Fields of GstBase-0.10.GstBase.GstPushSrcClass */
    parent_class: Gst.BaseSrcClass
    create: (src: Gst.PushSrc, buf: Gst.Buffer) => Gst.FlowReturn
    _gst_reserved: any[]
    static name: string
}
export abstract class SinkClass {
    /* Fields of GstBase-0.10.GstBase.SinkClass */
    parent_class: Gst.ElementClass
    get_caps: (sink: Gst.BaseSink) => Gst.Caps
    set_caps: (sink: Gst.BaseSink, caps: Gst.Caps) => any
    buffer_alloc: (sink: Gst.BaseSink, offset: any, size: any, caps: Gst.Caps, buf: Gst.Buffer) => Gst.FlowReturn
    get_times: (sink: Gst.BaseSink, buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime) => void
    start: (sink: Gst.BaseSink) => any
    stop: (sink: Gst.BaseSink) => any
    unlock: (sink: Gst.BaseSink) => any
    event: (sink: Gst.BaseSink, event: Gst.Event) => any
    preroll: (sink: Gst.BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    render: (sink: Gst.BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    async_play: (sink: Gst.BaseSink) => Gst.StateChangeReturn
    activate_pull: (sink: Gst.BaseSink, active: any) => any
    fixate: (sink: Gst.BaseSink, caps: Gst.Caps) => void
    unlock_stop: (sink: Gst.BaseSink) => any
    render_list: (sink: Gst.BaseSink, buffer_list: Gst.BufferList) => Gst.FlowReturn
    _gst_reserved: any[]
    static name: string
}
export class SinkPrivate {
    static name: string
}
export abstract class SrcClass {
    /* Fields of GstBase-0.10.GstBase.SrcClass */
    parent_class: Gst.ElementClass
    get_caps: (src: Gst.BaseSrc) => Gst.Caps
    set_caps: (src: Gst.BaseSrc, caps: Gst.Caps) => any
    negotiate: (src: Gst.BaseSrc) => any
    newsegment: (src: Gst.BaseSrc) => any
    start: (src: Gst.BaseSrc) => any
    stop: (src: Gst.BaseSrc) => any
    get_times: (src: Gst.BaseSrc, buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime) => void
    get_size: (src: Gst.BaseSrc) => [ /* returnType */ any, /* size */ any ]
    is_seekable: (src: Gst.BaseSrc) => any
    unlock: (src: Gst.BaseSrc) => any
    event: (src: Gst.BaseSrc, event: Gst.Event) => any
    create: (src: Gst.BaseSrc, offset: any, size: any, buf: Gst.Buffer) => Gst.FlowReturn
    do_seek: (src: Gst.BaseSrc, segment: Gst.Segment) => any
    query: (src: Gst.BaseSrc, query: Gst.Query) => any
    check_get_range: (src: Gst.BaseSrc) => any
    fixate: (src: Gst.BaseSrc, caps: Gst.Caps) => void
    unlock_stop: (src: Gst.BaseSrc) => any
    prepare_seek_segment: (src: Gst.BaseSrc, seek: Gst.Event, segment: Gst.Segment) => any
    _gst_reserved: any[]
    static name: string
}
export class SrcPrivate {
    static name: string
}
export abstract class TransformClass {
    /* Fields of GstBase-0.10.GstBase.TransformClass */
    parent_class: Gst.ElementClass
    transform_caps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => Gst.Caps
    fixate_caps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps) => void
    transform_size: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, size: any, othercaps: Gst.Caps) => [ /* returnType */ any, /* othersize */ any ]
    get_unit_size: (trans: Gst.BaseTransform, caps: Gst.Caps) => [ /* returnType */ any, /* size */ any ]
    set_caps: (trans: Gst.BaseTransform, incaps: Gst.Caps, outcaps: Gst.Caps) => any
    start: (trans: Gst.BaseTransform) => any
    stop: (trans: Gst.BaseTransform) => any
    event: (trans: Gst.BaseTransform, event: Gst.Event) => any
    transform: (trans: Gst.BaseTransform, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => Gst.FlowReturn
    transform_ip: (trans: Gst.BaseTransform, buf: Gst.Buffer) => Gst.FlowReturn
    passthrough_on_same_caps: any
    prepare_output_buffer: (trans: Gst.BaseTransform, input: Gst.Buffer, size: any, caps: Gst.Caps, buf: Gst.Buffer) => Gst.FlowReturn
    src_event: (trans: Gst.BaseTransform, event: Gst.Event) => any
    before_transform: (trans: Gst.BaseTransform, buffer: Gst.Buffer) => void
    accept_caps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => any
    _gst_reserved: any[]
    static name: string
}
export class TransformPrivate {
    static name: string
}