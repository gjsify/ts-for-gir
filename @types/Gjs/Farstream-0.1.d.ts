/**
 * Farstream-0.1
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Gst from './Gst-0.10';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

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
    LAST,
}
export enum NetworkProtocol {
    UDP,
    TCP,
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
export function codec_list_are_equal(list1: Codec[], list2: Codec[]): boolean
export function codec_list_copy(codec_list: Codec[]): Codec[]
export function codec_list_from_keyfile(filename: string): Codec[]
export function error_quark(): GLib.Quark
export function media_type_to_string(media_type: MediaType): string
export function parse_error(object: GObject.Object, message: Gst.Message): [ /* returnType */ boolean, /* error */ Error, /* error_msg */ string ]
export function rtp_header_extension_list_copy(extensions: any[]): any[]
export function rtp_header_extension_list_from_keyfile(filename: string, media_type: MediaType): any[]
export function utils_get_default_codec_preferences(element: Gst.Element): Codec[]
export function utils_get_default_element_properties(element: Gst.Element): GLib.KeyFile
export function utils_get_default_rtp_header_extension_preferences(element: Gst.Element, media_type: MediaType): Codec[]
export function utils_set_bitrate(element: Gst.Element, bitrate: number): void
export interface Conference_ConstructProps extends Gst.Bin_ConstructProps {
}
export class Conference {
    /* Properties of Gst-0.10.Gst.Bin */
    async_handling: boolean
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Farstream-0.1.Farstream.Conference */
    parent: Gst.Bin
    /* Fields of Gst-0.10.Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: object[]
    children_cookie: number
    child_bus: Gst.Bus
    messages: object[]
    polling: boolean
    state_dirty: boolean
    clock_dirty: boolean
    provided_clock: Gst.Clock
    clock_provider: Gst.Element
    priv: Gst.BinPrivate
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: number
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    numpads: number
    pads: object[]
    numsrcpads: number
    srcpads: object[]
    numsinkpads: number
    sinkpads: object[]
    pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    refcount: number
    lock: GLib.Mutex
    name_prefix: string
    flags: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Conference */
    new_participant(): Participant
    new_session(media_type: MediaType): Session
    /* Methods of Gst-0.10.Gst.Bin */
    add(element: Gst.Element): boolean
    remove(element: Gst.Element): boolean
    get_by_name(name: string): Gst.Element
    get_by_name_recurse_up(name: string): Gst.Element
    get_by_interface(iface: GObject.Type): Gst.Element
    iterate_elements(): Gst.Iterator
    iterate_sorted(): Gst.Iterator
    iterate_recurse(): Gst.Iterator
    iterate_sinks(): Gst.Iterator
    iterate_sources(): Gst.Iterator
    iterate_all_by_interface(iface: GObject.Type): Gst.Iterator
    recalculate_latency(): boolean
    find_unlinked_pad(direction: Gst.PadDirection): Gst.Pad
    find_unconnected_pad(direction: Gst.PadDirection): Gst.Pad
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Gst.Clock
    get_clock(): Gst.Clock
    set_clock(clock: Gst.Clock): boolean
    set_base_time(time: Gst.ClockTime): void
    get_base_time(): Gst.ClockTime
    set_start_time(time: Gst.ClockTime): void
    get_start_time(): Gst.ClockTime
    is_indexable(): boolean
    set_index(index: Gst.Index): void
    get_index(): Gst.Index
    set_bus(bus: Gst.Bus): void
    get_bus(): Gst.Bus
    add_pad(pad: Gst.Pad): boolean
    remove_pad(pad: Gst.Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Gst.Pad
    get_static_pad(name: string): Gst.Pad
    get_request_pad(name: string): Gst.Pad
    release_request_pad(pad: Gst.Pad): void
    iterate_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    send_event(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, cur_type: Gst.SeekType, cur: number, stop_type: Gst.SeekType, stop: number): boolean
    get_query_types(): Gst.QueryType
    query(query: Gst.Query): boolean
    post_message(message: Gst.Message): boolean
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    set_state(state: Gst.State): Gst.StateChangeReturn
    abort_state(): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): Gst.ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    link_pads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Gst.Pad, list: Gst.TagList): void
    found_tags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Methods of Gst-0.10.Gst.ChildProxy */
    get_child_by_name(name: string): Gst.Object
    get_child_by_index(index: number): Gst.Object
    get_children_count(): number
    /* Virtual methods of Farstream-0.1.Farstream.Conference */
    vfunc_new_participant(): Participant
    vfunc_new_session(media_type: MediaType): Session
    vfunc_get_child_by_index(index: number): Gst.Object
    vfunc_get_children_count(): number
    /* Virtual methods of Gst-0.10.Gst.Bin */
    vfunc_add_element(element: Gst.Element): boolean
    vfunc_remove_element(element: Gst.Element): boolean
    vfunc_handle_message(message: Gst.Message): void
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name: string): Gst.Pad
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_set_bus(bus: Gst.Bus): void
    vfunc_provide_clock(): Gst.Clock
    vfunc_set_clock(clock: Gst.Clock): boolean
    vfunc_get_index(): Gst.Index
    vfunc_set_index(index: Gst.Index): void
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_get_query_types(): Gst.QueryType
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Bin */
    connect(sigName: "do-latency", callback: (($obj: Conference) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Conference) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Conference, object: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Conference, object: Gst.Element) => void)): number
    emit(sigName: "element-added", object: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: Conference, object: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Conference, object: Gst.Element) => void)): number
    emit(sigName: "element-removed", object: Gst.Element): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Conference) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Conference) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Conference, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Conference, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Conference, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Conference, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Conference, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Conference, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Conference, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Conference, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Conference, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Conference, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Conference, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Conference, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Conference, object: GObject.Object) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Conference, object: GObject.Object) => void)): number
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: (($obj: Conference, object: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Conference, object: GObject.Object) => void)): number
    emit(sigName: "child-removed", object: GObject.Object): void
    connect(sigName: "notify::async-handling", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of Farstream-0.1.Farstream.ElementAddedNotifier */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.ElementAddedNotifier */
    add(bin: Gst.Bin): void
    remove(bin: Gst.Bin): boolean
    set_default_properties(element: Gst.Element): void
    set_properties_from_file(filename: string): boolean
    set_properties_from_keyfile(keyfile: GLib.KeyFile): void
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
    /* Signals of Farstream-0.1.Farstream.ElementAddedNotifier */
    connect(sigName: "element-added", callback: (($obj: ElementAddedNotifier, bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: ElementAddedNotifier, bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "element-added", bin: Gst.Bin, element: Gst.Element): void
    /* Signals of GObject-2.0.GObject.Object */
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
export interface Participant_ConstructProps extends Gst.Object_ConstructProps {
}
export class Participant {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Farstream-0.1.Farstream.Participant */
    parent: Gst.Object
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name_prefix: string
    flags: number
    _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Participant, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Participant, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Participant, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Participant, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Participant, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Participant, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Participant, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Participant, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Participant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Participant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Participant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Participant, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of Farstream-0.1.Farstream.Plugin */
    parent: GObject.TypeModule
    /* Fields of GObject-2.0.GObject.TypeModule */
    parent_instance: GObject.Object
    use_count: number
    type_infos: object[]
    interface_infos: object[]
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.TypeModule */
    add_interface(instance_type: GObject.Type, interface_type: GObject.Type, interface_info: GObject.InterfaceInfo): void
    register_enum(name: string, const_static_values: GObject.EnumValue): GObject.Type
    register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.Type
    register_type(parent_type: GObject.Type, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    set_name(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject-2.0.GObject.TypePlugin */
    complete_interface_info(instance_type: GObject.Type, interface_type: GObject.Type, info: GObject.InterfaceInfo): void
    complete_type_info(g_type: GObject.Type, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void
    use(): void
    /* Virtual methods of GObject-2.0.GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
export interface Session_ConstructProps extends Gst.Object_ConstructProps {
    conference?: Conference
    id?: number
    media_type?: MediaType
    tos?: number
}
export class Session {
    /* Properties of Farstream-0.1.Farstream.Session */
    readonly codec_preferences: Codec[]
    readonly codecs: Codec[]
    readonly codecs_without_config: Codec[]
    readonly current_send_codec: Codec
    readonly sink_pad: Gst.Pad
    tos: number
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Farstream-0.1.Farstream.Session */
    parent: Gst.Object
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name_prefix: string
    flags: number
    _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Session */
    codecs_need_resend(old_codecs: Codec[], new_codecs: Codec[]): Codec[]
    destroy(): void
    emit_error(error_no: number, error_msg: string): void
    get_stream_transmitter_type(transmitter: string): GObject.Type
    list_transmitters(): string[]
    new_stream(participant: Participant, direction: StreamDirection): Stream
    parse_codecs_changed(message: Gst.Message): boolean
    parse_send_codec_changed(message: Gst.Message): [ /* returnType */ boolean, /* codec */ Codec, /* secondary_codecs */ Codec[] ]
    parse_telephony_event_started(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod, /* event */ DTMFEvent, /* volume */ number ]
    parse_telephony_event_stopped(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod ]
    set_codec_preferences(codec_preferences: Codec[]): boolean
    set_send_codec(send_codec: Codec): boolean
    start_telephony_event(event: number, volume: number): boolean
    stop_telephony_event(): boolean
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Farstream-0.1.Farstream.Session */
    vfunc_codecs_need_resend(old_codecs: Codec[], new_codecs: Codec[]): Codec[]
    vfunc_get_stream_transmitter_type(transmitter: string): GObject.Type
    vfunc_list_transmitters(): string[]
    vfunc_new_stream(participant: Participant, direction: StreamDirection): Stream
    vfunc_set_codec_preferences(codec_preferences: Codec[]): boolean
    vfunc_set_send_codec(send_codec: Codec): boolean
    vfunc_start_telephony_event(event: number, volume: number): boolean
    vfunc_stop_telephony_event(): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Farstream-0.1.Farstream.Session */
    connect(sigName: "error", callback: (($obj: Session, object: GObject.Object, error_no: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Session, object: GObject.Object, error_no: Error, error_msg: string) => void)): number
    emit(sigName: "error", object: GObject.Object, error_no: Error, error_msg: string): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Session, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Session, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Session, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Session, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Session, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Session, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Session, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Session, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::codec-preferences", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec-preferences", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::codecs", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codecs", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::codecs-without-config", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codecs-without-config", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-send-codec", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-send-codec", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink-pad", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink-pad", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tos", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tos", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Stream_ConstructProps extends Gst.Object_ConstructProps {
    direction?: StreamDirection
    participant?: Participant
    session?: Session
}
export class Stream {
    /* Properties of Farstream-0.1.Farstream.Stream */
    readonly current_recv_codecs: Codec[]
    direction: StreamDirection
    readonly negotiated_codecs: Codec[]
    readonly remote_codecs: Codec[]
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Farstream-0.1.Farstream.Stream */
    parent: Gst.Object
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name_prefix: string
    flags: number
    _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Stream */
    add_id(id: number): void
    add_remote_candidates(candidates: Candidate[]): boolean
    destroy(): void
    emit_error(error_no: number, error_msg: string): void
    emit_src_pad_added(pad: Gst.Pad, codec: Codec): void
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    parse_component_state_changed(message: Gst.Message): [ /* returnType */ boolean, /* component */ number, /* state */ StreamState ]
    parse_local_candidates_prepared(message: Gst.Message): boolean
    parse_new_active_candidate_pair(message: Gst.Message): [ /* returnType */ boolean, /* local_candidate */ Candidate, /* remote_candidate */ Candidate ]
    parse_new_local_candidate(message: Gst.Message): [ /* returnType */ boolean, /* candidate */ Candidate ]
    parse_recv_codecs_changed(message: Gst.Message): [ /* returnType */ boolean, /* codecs */ Codec[] ]
    set_remote_codecs(remote_codecs: Codec[]): boolean
    set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter, stream_transmitter_n_parameters: number): boolean
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Farstream-0.1.Farstream.Stream */
    vfunc_add_id(id: number): void
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    vfunc_set_remote_codecs(remote_codecs: Codec[]): boolean
    vfunc_set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter, stream_transmitter_n_parameters: number): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Farstream-0.1.Farstream.Stream */
    connect(sigName: "error", callback: (($obj: Stream, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Stream, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    connect(sigName: "src-pad-added", callback: (($obj: Stream, pad: Gst.Pad, codec: Codec) => void)): number
    connect_after(sigName: "src-pad-added", callback: (($obj: Stream, pad: Gst.Pad, codec: Codec) => void)): number
    emit(sigName: "src-pad-added", pad: Gst.Pad, codec: Codec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Stream, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Stream, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Stream, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Stream, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Stream, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Stream, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Stream, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Stream, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-recv-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-recv-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::negotiated-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StreamTransmitter_ConstructProps extends Gst.Object_ConstructProps {
    associate_on_source?: boolean
    preferred_local_candidates?: any
    sending?: boolean
}
export class StreamTransmitter {
    /* Properties of Farstream-0.1.Farstream.StreamTransmitter */
    sending: boolean
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Farstream-0.1.Farstream.StreamTransmitter */
    parent: Gst.Object
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name_prefix: string
    flags: number
    _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.StreamTransmitter */
    add_remote_candidates(candidates: Candidate[]): boolean
    emit_error(error_no: number, error_msg: string): void
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    gather_local_candidates(): boolean
    stop(): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Farstream-0.1.Farstream.StreamTransmitter */
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    vfunc_gather_local_candidates(): boolean
    vfunc_stop(): void
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Farstream-0.1.Farstream.StreamTransmitter */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: StreamTransmitter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: StreamTransmitter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: StreamTransmitter, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: StreamTransmitter, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: StreamTransmitter, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: StreamTransmitter, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: StreamTransmitter, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: StreamTransmitter, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sending", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sending", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamTransmitter_ConstructProps)
    _init (config?: StreamTransmitter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transmitter_ConstructProps extends Gst.Object_ConstructProps {
    components?: number
    tos?: number
}
export class Transmitter {
    /* Properties of Farstream-0.1.Farstream.Transmitter */
    readonly gst_sink: Gst.Element
    readonly gst_src: Gst.Element
    tos: number
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Farstream-0.1.Farstream.Transmitter */
    parent: Gst.Object
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name_prefix: string
    flags: number
    _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Transmitter */
    emit_error(error_no: number, error_msg: string): void
    get_recvonly_filter(component: number): Gst.Element
    get_stream_transmitter_type(): GObject.Type
    new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Farstream-0.1.Farstream.Transmitter */
    vfunc_get_stream_transmitter_type(): GObject.Type
    vfunc_new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Farstream-0.1.Farstream.Transmitter */
    connect(sigName: "error", callback: (($obj: Transmitter, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Transmitter, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    connect(sigName: "get-recvonly-filter", callback: (($obj: Transmitter, component: number) => Gst.Element)): number
    connect_after(sigName: "get-recvonly-filter", callback: (($obj: Transmitter, component: number) => Gst.Element)): number
    emit(sigName: "get-recvonly-filter", component: number): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Transmitter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Transmitter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Transmitter, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Transmitter, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Transmitter, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Transmitter, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Transmitter, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Transmitter, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gst-sink", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gst-sink", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gst-src", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gst-src", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tos", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tos", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of Farstream-0.1.Farstream.Candidate */
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
    /* Methods of Farstream-0.1.Farstream.Candidate */
    copy(): Candidate
    destroy(): void
    static name: string
    static new(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number): Candidate
    constructor(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number)
    /* Static methods and pseudo-constructors */
    static new(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number): Candidate
}
export class Codec {
    /* Fields of Farstream-0.1.Farstream.Codec */
    id: number
    encoding_name: string
    media_type: MediaType
    clock_rate: number
    channels: number
    minimum_reporting_interval: number
    optional_params: CodecParameter[]
    feedback_params: FeedbackParameter[]
    /* Methods of Farstream-0.1.Farstream.Codec */
    add_feedback_parameter(type: string, subtype: string, extra_params: string): void
    add_optional_parameter(name: string, value: string): void
    are_equal(codec2: Codec): boolean
    copy(): Codec
    destroy(): void
    get_feedback_parameter(type: string, subtype: string, extra_params: string): FeedbackParameter
    get_optional_parameter(name: string, value: string): CodecParameter
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
    /* Fields of Farstream-0.1.Farstream.CodecParameter */
    name: string
    value: string
    /* Methods of Farstream-0.1.Farstream.CodecParameter */
    copy(): CodecParameter
    free(): void
    static name: string
}
export abstract class ConferenceClass {
    /* Fields of Farstream-0.1.Farstream.ConferenceClass */
    parent: Gst.BinClass
    new_session: (conference: Conference, media_type: MediaType) => Session
    new_participant: (conference: Conference) => Participant
    static name: string
}
export abstract class ElementAddedNotifierClass {
    /* Fields of Farstream-0.1.Farstream.ElementAddedNotifierClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ElementAddedNotifierPrivate {
    static name: string
}
export class FeedbackParameter {
    /* Fields of Farstream-0.1.Farstream.FeedbackParameter */
    type: string
    subtype: string
    extra_params: string
    /* Methods of Farstream-0.1.Farstream.FeedbackParameter */
    copy(): FeedbackParameter
    free(): void
    static name: string
}
export abstract class ParticipantClass {
    /* Fields of Farstream-0.1.Farstream.ParticipantClass */
    parent_class: Gst.ObjectClass
    static name: string
}
export class ParticipantPrivate {
    static name: string
}
export abstract class PluginClass {
    /* Fields of Farstream-0.1.Farstream.PluginClass */
    parent_class: GObject.TypeModuleClass
    static name: string
}
export class PluginPrivate {
    static name: string
}
export abstract class SessionClass {
    /* Fields of Farstream-0.1.Farstream.SessionClass */
    parent_class: Gst.ObjectClass
    new_stream: (session: Session, participant: Participant, direction: StreamDirection) => Stream
    start_telephony_event: (session: Session, event: number, volume: number) => boolean
    stop_telephony_event: (session: Session) => boolean
    set_send_codec: (session: Session, send_codec: Codec) => boolean
    set_codec_preferences: (session: Session, codec_preferences: Codec[]) => boolean
    list_transmitters: (session: Session) => string[]
    get_stream_transmitter_type: (session: Session, transmitter: string) => GObject.Type
    codecs_need_resend: (session: Session, old_codecs: Codec[], new_codecs: Codec[]) => Codec[]
    static name: string
}
export class SessionPrivate {
    static name: string
}
export abstract class StreamClass {
    /* Fields of Farstream-0.1.Farstream.StreamClass */
    parent_class: Gst.ObjectClass
    add_remote_candidates: (stream: Stream, candidates: Candidate[]) => boolean
    force_remote_candidates: (stream: Stream, remote_candidates: Candidate[]) => boolean
    set_remote_codecs: (stream: Stream, remote_codecs: Codec[]) => boolean
    add_id: (stream: Stream, id: number) => void
    set_transmitter: (stream: Stream, transmitter: string, stream_transmitter_parameters: GObject.Parameter, stream_transmitter_n_parameters: number) => boolean
    static name: string
}
export class StreamPrivate {
    static name: string
}
export abstract class StreamTransmitterClass {
    /* Fields of Farstream-0.1.Farstream.StreamTransmitterClass */
    parent_class: Gst.ObjectClass
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
    /* Fields of Farstream-0.1.Farstream.TransmitterClass */
    parent_class: Gst.ObjectClass
    new_stream_transmitter: (transmitter: Transmitter, participant: Participant, n_parameters: number, parameters: GObject.Parameter) => StreamTransmitter
    get_stream_transmitter_type: (transmitter: Transmitter) => GObject.Type
    static name: string
}
export class TransmitterPrivate {
    static name: string
}
export class _RtpHeaderExtension {
    /* Fields of Farstream-0.1.Farstream._RtpHeaderExtension */
    id: number
    direction: StreamDirection
    uri: string
    static name: string
}