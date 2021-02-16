/**
 * Farstream-0.2
 */

import * as Gjs from './Gjs';
import * as Gst from './Gst-1.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GModule from './GModule-2.0';

export enum CandidateType {
    HOST,
    SRFLX,
    PRFLX,
    RELAY,
    MULTICAST,
}
export enum ComponentType {
    NONE,
    RTP,
    RTCP,
}
export enum DTMFEvent {
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    STAR,
    POUND,
    A,
    B,
    C,
    D,
}
export enum DTMFMethod {
    RTP_RFC4733,
    SOUND,
}
export enum Error {
    CONSTRUCTION,
    INTERNAL,
    INVALID_ARGUMENTS,
    NETWORK,
    NOT_IMPLEMENTED,
    NEGOTIATION_FAILED,
    UNKNOWN_CODEC,
    NO_CODECS,
    NO_CODECS_LEFT,
    CONNECTION_FAILED,
    DISPOSED,
    ALREADY_EXISTS,
}
export enum MediaType {
    AUDIO,
    VIDEO,
    APPLICATION,
    LAST,
}
export enum NetworkProtocol {
    UDP,
    TCP,
    TCP_PASSIVE,
    TCP_ACTIVE,
    TCP_SO,
}
export enum StreamState {
    FAILED,
    DISCONNECTED,
    GATHERING,
    CONNECTING,
    CONNECTED,
    READY,
}
export enum StreamDirection {
    NONE,
    SEND,
    RECV,
    BOTH,
}
export const CODEC_FORMAT: string
export const CODEC_ID_ANY: number
export const CODEC_ID_DISABLE: number
export const RTP_HEADER_EXTENSION_FORMAT: string
export function candidate_list_copy(candidate_list: Codec[]): Codec[]
export function codec_list_are_equal(list1?: Codec[] | null, list2?: Codec[] | null): boolean
export function codec_list_copy(codec_list: Codec[]): Codec[]
export function codec_list_from_keyfile(filename: string): Codec[]
export function error_quark(): GLib.Quark
export function media_type_to_string(media_type: MediaType): string
export function parse_error(object: GObject.Object, message: Gst.Message): [ /* returnType */ boolean, /* error */ Error, /* error_msg */ string ]
export function rtp_header_extension_list_copy(extensions: RtpHeaderExtension[]): RtpHeaderExtension[]
export function rtp_header_extension_list_from_keyfile(filename: string, media_type: MediaType): RtpHeaderExtension[]
export function utils_get_default_codec_preferences(element: Gst.Element): Codec[]
export function utils_get_default_rtp_header_extension_preferences(element: Gst.Element, media_type: MediaType): Codec[]
export function utils_set_bitrate(element: Gst.Element, bitrate: number): void
export function value_set_candidate_list(value: any, candidates?: Candidate[] | null): void
export interface Conference_ConstructProps extends Gst.Bin_ConstructProps {
}
export class Conference {
    /* Properties of Gst.Bin */
    async_handling: boolean
    message_forward: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    children_cookie: number
    child_bus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    state_dirty: boolean
    clock_dirty: boolean
    provided_clock: Gst.Clock
    clock_provider: Gst.Element
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
    /* Methods of Farstream.Conference */
    new_participant(): Participant
    new_session(media_type: MediaType): Session
    /* Methods of Gst.Bin */
    add(element: Gst.Element): boolean
    find_unlinked_pad(direction: Gst.PadDirection): Gst.Pad | null
    get_by_interface(iface: GObject.Type): Gst.Element | null
    get_by_name(name: string): Gst.Element | null
    get_by_name_recurse_up(name: string): Gst.Element | null
    get_suppressed_flags(): Gst.ElementFlags
    iterate_all_by_element_factory_name(factory_name: string): Gst.Iterator | null
    iterate_all_by_interface(iface: GObject.Type): Gst.Iterator | null
    iterate_elements(): Gst.Iterator | null
    iterate_recurse(): Gst.Iterator | null
    iterate_sinks(): Gst.Iterator | null
    iterate_sorted(): Gst.Iterator | null
    iterate_sources(): Gst.Iterator | null
    recalculate_latency(): boolean
    remove(element: Gst.Element): boolean
    set_suppressed_flags(flags: Gst.ElementFlags): void
    sync_children_states(): boolean
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
    /* Methods of Gst.ChildProxy */
    child_added(child: GObject.Object, name: string): void
    child_removed(child: GObject.Object, name: string): void
    get_child_by_index(index: number): GObject.Object | null
    get_child_by_name(name: string): GObject.Object | null
    get_children_count(): number
    get_property(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    set_property(name: string, value: any): void
    /* Virtual methods of Farstream.Conference */
    vfunc_new_participant(): Participant
    vfunc_new_session(media_type: MediaType): Session
    vfunc_child_added(child: GObject.Object, name: string): void
    vfunc_child_removed(child: GObject.Object, name: string): void
    vfunc_get_child_by_index(index: number): GObject.Object | null
    vfunc_get_child_by_name(name: string): GObject.Object | null
    vfunc_get_children_count(): number
    /* Virtual methods of Gst.Bin */
    vfunc_add_element(element: Gst.Element): boolean
    vfunc_deep_element_added(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_deep_element_removed(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_do_latency(): boolean
    vfunc_element_added(child: Gst.Element): void
    vfunc_element_removed(child: Gst.Element): void
    vfunc_handle_message(message: Gst.Message): void
    vfunc_remove_element(element: Gst.Element): boolean
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
    /* Signals of Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Conference, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: Conference, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-added", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: Conference, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: Conference, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-removed", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: Conference) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Conference) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Conference, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Conference, element: Gst.Element) => void)): number
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: Conference, element: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Conference, element: Gst.Element) => void)): number
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Conference) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Conference) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Conference, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Conference, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Conference, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Conference, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Conference, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Conference, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Conference, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Conference, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: Conference, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Conference, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::async-handling", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-forward", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Conference_ConstructProps)
    _init (config?: Conference_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ElementAddedNotifier_ConstructProps extends GObject.Object_ConstructProps {
}
export class ElementAddedNotifier {
    /* Fields of Farstream.ElementAddedNotifier */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream.ElementAddedNotifier */
    add(bin: Gst.Bin): void
    remove(bin: Gst.Bin): boolean
    set_default_properties(element: Gst.Element): number
    set_properties_from_file(filename: string): boolean
    set_properties_from_keyfile(keyfile: GLib.KeyFile): number
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Farstream.ElementAddedNotifier */
    connect(sigName: "element-added", callback: (($obj: ElementAddedNotifier, bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: ElementAddedNotifier, bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "element-added", bin: Gst.Bin, element: Gst.Element): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ElementAddedNotifier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ElementAddedNotifier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ElementAddedNotifier_ConstructProps)
    _init (config?: ElementAddedNotifier_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ElementAddedNotifier
    static $gtype: GObject.Type
}
export interface Participant_ConstructProps extends GObject.Object_ConstructProps {
}
export class Participant {
    /* Fields of Farstream.Participant */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Participant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Participant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Participant_ConstructProps)
    _init (config?: Participant_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends GObject.TypeModule_ConstructProps {
}
export class Plugin {
    /* Fields of Farstream.Plugin */
    parent: GObject.TypeModule
    /* Fields of GObject.TypeModule */
    parent_instance: GObject.Object
    use_count: number
    type_infos: object[]
    interface_infos: object[]
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.TypeModule */
    add_interface(instance_type: GObject.Type, interface_type: GObject.Type, interface_info: GObject.InterfaceInfo): void
    register_enum(name: string, const_static_values: GObject.EnumValue): GObject.Type
    register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.Type
    register_type(parent_type: GObject.Type, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    set_name(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject.TypePlugin */
    complete_interface_info(instance_type: GObject.Type, interface_type: GObject.Type, info: GObject.InterfaceInfo): void
    complete_type_info(g_type: GObject.Type, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void
    use(): void
    /* Virtual methods of GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static list_available(type_suffix: string): string[]
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    conference?: Conference
    id?: number
    media_type?: MediaType
    tos?: number
}
export class Session {
    /* Properties of Farstream.Session */
    readonly allowed_sink_caps: Gst.Caps
    readonly allowed_src_caps: Gst.Caps
    readonly codec_preferences: Codec[]
    readonly codecs: Codec[]
    readonly codecs_without_config: Codec[]
    readonly current_send_codec: Codec
    readonly encryption_parameters: Gst.Structure
    readonly sink_pad: Gst.Pad
    tos: number
    /* Fields of Farstream.Session */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream.Session */
    codecs_need_resend(old_codecs?: Codec[] | null, new_codecs?: Codec[] | null): Codec[]
    destroy(): void
    emit_error(error_no: number, error_msg: string): void
    get_stream_transmitter_type(transmitter: string): GObject.Type
    list_transmitters(): string[]
    new_stream(participant: Participant, direction: StreamDirection): Stream
    parse_codecs_changed(message: Gst.Message): boolean
    parse_send_codec_changed(message: Gst.Message): [ /* returnType */ boolean, /* codec */ Codec, /* secondary_codecs */ Codec[] ]
    parse_telephony_event_started(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod, /* event */ DTMFEvent, /* volume */ number ]
    parse_telephony_event_stopped(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod ]
    set_allowed_caps(sink_caps?: Gst.Caps | null, src_caps?: Gst.Caps | null): boolean
    set_codec_preferences(codec_preferences?: Codec[] | null): boolean
    set_encryption_parameters(parameters?: Gst.Structure | null): boolean
    set_send_codec(send_codec: Codec): boolean
    start_telephony_event(event: number, volume: number): boolean
    stop_telephony_event(): boolean
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
    /* Virtual methods of Farstream.Session */
    vfunc_codecs_need_resend(old_codecs?: Codec[] | null, new_codecs?: Codec[] | null): Codec[]
    vfunc_get_stream_transmitter_type(transmitter: string): GObject.Type
    vfunc_list_transmitters(): string[]
    vfunc_new_stream(participant: Participant, direction: StreamDirection): Stream
    vfunc_set_allowed_caps(sink_caps?: Gst.Caps | null, src_caps?: Gst.Caps | null): boolean
    vfunc_set_codec_preferences(codec_preferences?: Codec[] | null): boolean
    vfunc_set_encryption_parameters(parameters?: Gst.Structure | null): boolean
    vfunc_set_send_codec(send_codec: Codec): boolean
    vfunc_start_telephony_event(event: number, volume: number): boolean
    vfunc_stop_telephony_event(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Farstream.Session */
    connect(sigName: "error", callback: (($obj: Session, object: GObject.Object, error_no: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Session, object: GObject.Object, error_no: Error, error_msg: string) => void)): number
    emit(sigName: "error", object: GObject.Object, error_no: Error, error_msg: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-sink-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-sink-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allowed-src-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-src-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::codec-preferences", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec-preferences", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::codecs", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codecs", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::codecs-without-config", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codecs-without-config", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-send-codec", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-send-codec", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encryption-parameters", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encryption-parameters", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink-pad", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink-pad", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tos", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tos", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Stream_ConstructProps extends GObject.Object_ConstructProps {
    direction?: StreamDirection
    participant?: Participant
    session?: Session
}
export class Stream {
    /* Properties of Farstream.Stream */
    readonly current_recv_codecs: Codec[]
    readonly decryption_parameters: Gst.Structure
    direction: StreamDirection
    readonly negotiated_codecs: Codec[]
    readonly remote_codecs: Codec[]
    /* Fields of Farstream.Stream */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream.Stream */
    add_id(id: number): void
    add_remote_candidates(candidates: Candidate[]): boolean
    destroy(): void
    emit_error(error_no: number, error_msg: string): void
    emit_src_pad_added(pad: Gst.Pad, codec: Codec): void
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    iterate_src_pads(): Gst.Iterator
    parse_component_state_changed(message: Gst.Message): [ /* returnType */ boolean, /* component */ number, /* state */ StreamState ]
    parse_local_candidates_prepared(message: Gst.Message): boolean
    parse_new_active_candidate_pair(message: Gst.Message): [ /* returnType */ boolean, /* local_candidate */ Candidate, /* remote_candidate */ Candidate ]
    parse_new_local_candidate(message: Gst.Message): [ /* returnType */ boolean, /* candidate */ Candidate ]
    parse_recv_codecs_changed(message: Gst.Message): [ /* returnType */ boolean, /* codecs */ Codec[] ]
    set_decryption_parameters(parameters: Gst.Structure): boolean
    set_remote_codecs(remote_codecs: Codec[]): boolean
    set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter[] | null): boolean
    set_transmitter_ht(transmitter: string, stream_transmitter_parameters?: GLib.HashTable | null): boolean
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
    /* Virtual methods of Farstream.Stream */
    vfunc_add_id(id: number): void
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    vfunc_set_decryption_parameters(parameters: Gst.Structure): boolean
    vfunc_set_remote_codecs(remote_codecs: Codec[]): boolean
    vfunc_set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter[] | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Farstream.Stream */
    connect(sigName: "error", callback: (($obj: Stream, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Stream, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    connect(sigName: "src-pad-added", callback: (($obj: Stream, pad: Gst.Pad, codec: Codec) => void)): number
    connect_after(sigName: "src-pad-added", callback: (($obj: Stream, pad: Gst.Pad, codec: Codec) => void)): number
    emit(sigName: "src-pad-added", pad: Gst.Pad, codec: Codec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-recv-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-recv-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decryption-parameters", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decryption-parameters", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::negotiated-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StreamTransmitter_ConstructProps extends GObject.Object_ConstructProps {
    associate_on_source?: boolean
    preferred_local_candidates?: any
    sending?: boolean
}
export class StreamTransmitter {
    /* Properties of Farstream.StreamTransmitter */
    sending: boolean
    /* Fields of Farstream.StreamTransmitter */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream.StreamTransmitter */
    add_remote_candidates(candidates: Candidate[]): boolean
    emit_error(error_no: number, error_msg: string): void
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    gather_local_candidates(): boolean
    stop(): void
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
    /* Virtual methods of Farstream.StreamTransmitter */
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    vfunc_gather_local_candidates(): boolean
    vfunc_stop(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Farstream.StreamTransmitter */
    connect(sigName: "error", callback: (($obj: StreamTransmitter, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: StreamTransmitter, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    connect(sigName: "known-source-packet-received", callback: (($obj: StreamTransmitter, component: number, buffer: object) => void)): number
    connect_after(sigName: "known-source-packet-received", callback: (($obj: StreamTransmitter, component: number, buffer: object) => void)): number
    emit(sigName: "known-source-packet-received", component: number, buffer: object): void
    connect(sigName: "local-candidates-prepared", callback: (($obj: StreamTransmitter) => void)): number
    connect_after(sigName: "local-candidates-prepared", callback: (($obj: StreamTransmitter) => void)): number
    emit(sigName: "local-candidates-prepared"): void
    connect(sigName: "new-active-candidate-pair", callback: (($obj: StreamTransmitter, local_candidate: Candidate, remote_candidate: Candidate) => void)): number
    connect_after(sigName: "new-active-candidate-pair", callback: (($obj: StreamTransmitter, local_candidate: Candidate, remote_candidate: Candidate) => void)): number
    emit(sigName: "new-active-candidate-pair", local_candidate: Candidate, remote_candidate: Candidate): void
    connect(sigName: "new-local-candidate", callback: (($obj: StreamTransmitter, local_candidate: Candidate) => void)): number
    connect_after(sigName: "new-local-candidate", callback: (($obj: StreamTransmitter, local_candidate: Candidate) => void)): number
    emit(sigName: "new-local-candidate", local_candidate: Candidate): void
    connect(sigName: "state-changed", callback: (($obj: StreamTransmitter, component: number, state: StreamState) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: StreamTransmitter, component: number, state: StreamState) => void)): number
    emit(sigName: "state-changed", component: number, state: StreamState): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sending", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sending", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamTransmitter_ConstructProps)
    _init (config?: StreamTransmitter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transmitter_ConstructProps extends GObject.Object_ConstructProps {
    components?: number
    do_timestamp?: boolean
    tos?: number
}
export class Transmitter {
    /* Properties of Farstream.Transmitter */
    do_timestamp: boolean
    readonly gst_sink: Gst.Element
    readonly gst_src: Gst.Element
    tos: number
    /* Fields of Farstream.Transmitter */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream.Transmitter */
    emit_error(error_no: number, error_msg: string): void
    get_stream_transmitter_type(): GObject.Type
    new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter
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
    /* Virtual methods of Farstream.Transmitter */
    vfunc_get_stream_transmitter_type(): GObject.Type
    vfunc_new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Farstream.Transmitter */
    connect(sigName: "error", callback: (($obj: Transmitter, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Transmitter, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::do-timestamp", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gst-sink", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gst-sink", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gst-src", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gst-src", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tos", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tos", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transmitter_ConstructProps)
    _init (config?: Transmitter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: string, components: number, tos: number): Transmitter
    static list_available(): string[]
    static $gtype: GObject.Type
}
export class Candidate {
    /* Fields of Farstream.Candidate */
    foundation: string
    component_id: number
    ip: string
    port: number
    base_ip: string
    base_port: number
    proto: NetworkProtocol
    priority: number
    type: CandidateType
    username: string
    password: string
    ttl: number
    /* Methods of Farstream.Candidate */
    copy(): Candidate
    static name: string
    static new(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string | null, port: number): Candidate
    constructor(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string | null, port: number)
    /* Static methods and pseudo-constructors */
    static new(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string | null, port: number): Candidate
    static new_full(foundation: string, component_id: number, ip: string | null, port: number, base_ip: string | null, base_port: number, proto: NetworkProtocol, priority: number, type: CandidateType, username: string | null, password: string | null, ttl: number): Candidate
}
export class Codec {
    /* Fields of Farstream.Codec */
    id: number
    encoding_name: string
    media_type: MediaType
    clock_rate: number
    channels: number
    minimum_reporting_interval: number
    optional_params: CodecParameter[]
    feedback_params: FeedbackParameter[]
    /* Methods of Farstream.Codec */
    add_feedback_parameter(type: string, subtype: string, extra_params: string): void
    add_optional_parameter(name: string, value: string): void
    are_equal(codec2: Codec): boolean
    copy(): Codec
    get_feedback_parameter(type?: string | null, subtype?: string | null, extra_params?: string | null): FeedbackParameter
    get_optional_parameter(name: string, value?: string | null): CodecParameter
    remove_feedback_parameter(item: FeedbackParameter[]): void
    remove_optional_parameter(param: CodecParameter): void
    to_string(): string
    static name: string
    static new(id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec
    constructor(id: number, encoding_name: string, media_type: MediaType, clock_rate: number)
    /* Static methods and pseudo-constructors */
    static new(id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec
}
export class CodecParameter {
    /* Fields of Farstream.CodecParameter */
    name: string
    value: string
    /* Methods of Farstream.CodecParameter */
    copy(): CodecParameter
    free(): void
    static name: string
}
export abstract class ConferenceClass {
    /* Fields of Farstream.ConferenceClass */
    parent: Gst.BinClass
    new_session: (conference: Conference, media_type: MediaType) => Session
    new_participant: (conference: Conference) => Participant
    static name: string
}
export abstract class ElementAddedNotifierClass {
    /* Fields of Farstream.ElementAddedNotifierClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ElementAddedNotifierPrivate {
    static name: string
}
export class FeedbackParameter {
    /* Fields of Farstream.FeedbackParameter */
    type: string
    subtype: string
    extra_params: string
    /* Methods of Farstream.FeedbackParameter */
    copy(): FeedbackParameter
    free(): void
    static name: string
}
export abstract class ParticipantClass {
    /* Fields of Farstream.ParticipantClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ParticipantPrivate {
    static name: string
}
export abstract class PluginClass {
    /* Fields of Farstream.PluginClass */
    parent_class: GObject.TypeModuleClass
    static name: string
}
export class PluginPrivate {
    static name: string
}
export class RtpHeaderExtension {
    /* Fields of Farstream.RtpHeaderExtension */
    id: number
    direction: StreamDirection
    uri: string
    /* Methods of Farstream.RtpHeaderExtension */
    are_equal(extension2: RtpHeaderExtension): boolean
    static name: string
    static new(id: number, direction: StreamDirection, uri: string): RtpHeaderExtension
    constructor(id: number, direction: StreamDirection, uri: string)
    /* Static methods and pseudo-constructors */
    static new(id: number, direction: StreamDirection, uri: string): RtpHeaderExtension
}
export abstract class SessionClass {
    /* Fields of Farstream.SessionClass */
    parent_class: GObject.ObjectClass
    new_stream: (session: Session, participant: Participant, direction: StreamDirection) => Stream
    start_telephony_event: (session: Session, event: number, volume: number) => boolean
    stop_telephony_event: (session: Session) => boolean
    set_send_codec: (session: Session, send_codec: Codec) => boolean
    set_codec_preferences: (session: Session, codec_preferences?: Codec[] | null) => boolean
    list_transmitters: (session: Session) => string[]
    get_stream_transmitter_type: (session: Session, transmitter: string) => GObject.Type
    codecs_need_resend: (session: Session, old_codecs?: Codec[] | null, new_codecs?: Codec[] | null) => Codec[]
    set_allowed_caps: (session: Session, sink_caps?: Gst.Caps | null, src_caps?: Gst.Caps | null) => boolean
    set_encryption_parameters: (session: Session, parameters?: Gst.Structure | null) => boolean
    static name: string
}
export class SessionPrivate {
    static name: string
}
export abstract class StreamClass {
    /* Fields of Farstream.StreamClass */
    parent_class: GObject.ObjectClass
    add_remote_candidates: (stream: Stream, candidates: Candidate[]) => boolean
    force_remote_candidates: (stream: Stream, remote_candidates: Candidate[]) => boolean
    set_remote_codecs: (stream: Stream, remote_codecs: Codec[]) => boolean
    add_id: (stream: Stream, id: number) => void
    set_transmitter: (stream: Stream, transmitter: string, stream_transmitter_parameters: GObject.Parameter[] | null) => boolean
    set_decryption_parameters: (stream: Stream, parameters: Gst.Structure) => boolean
    static name: string
}
export class StreamPrivate {
    static name: string
}
export abstract class StreamTransmitterClass {
    /* Fields of Farstream.StreamTransmitterClass */
    parent_class: GObject.ObjectClass
    add_remote_candidates: (streamtransmitter: StreamTransmitter, candidates: Candidate[]) => boolean
    force_remote_candidates: (streamtransmitter: StreamTransmitter, remote_candidates: Candidate[]) => boolean
    gather_local_candidates: (streamtransmitter: StreamTransmitter) => boolean
    stop: (streamtransmitter: StreamTransmitter) => void
    static name: string
}
export class StreamTransmitterPrivate {
    static name: string
}
export abstract class TransmitterClass {
    /* Fields of Farstream.TransmitterClass */
    parent_class: GObject.ObjectClass
    new_stream_transmitter: (transmitter: Transmitter, participant: Participant, n_parameters: number, parameters: GObject.Parameter) => StreamTransmitter
    get_stream_transmitter_type: (transmitter: Transmitter) => GObject.Type
    static name: string
}
export class TransmitterPrivate {
    static name: string
}