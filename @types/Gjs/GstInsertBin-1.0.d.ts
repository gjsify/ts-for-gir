/**
 * GstInsertBin-1.0
 */

import * as Gjs from './Gjs';
import * as Gst from './Gst-1.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GModule from './GModule-2.0';

export interface InsertBinCallback {
    (insertbin: InsertBin, element: Gst.Element, success: boolean): void
}
export interface InsertBin_ConstructProps extends Gst.Bin_ConstructProps {
}
export class InsertBin {
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
    /* Methods of GstInsertBin.InsertBin */
    append(element: Gst.Element, callback: InsertBinCallback): void
    insert_after(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void
    insert_before(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void
    prepend(element: Gst.Element, callback: InsertBinCallback): void
    remove(element: Gst.Element, callback: InsertBinCallback): void
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
    /* Virtual methods of GstInsertBin.InsertBin */
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
    /* Signals of GstInsertBin.InsertBin */
    connect(sigName: "append", callback: (($obj: InsertBin, callback: Gst.Element, user_data?: object | null, user_data2?: object | null) => void)): number
    connect_after(sigName: "append", callback: (($obj: InsertBin, callback: Gst.Element, user_data?: object | null, user_data2?: object | null) => void)): number
    emit(sigName: "append", callback: Gst.Element, user_data?: object | null, user_data2?: object | null): void
    connect(sigName: "insert-after", callback: (($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, user_data?: object | null, user_data2?: object | null) => void)): number
    connect_after(sigName: "insert-after", callback: (($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, user_data?: object | null, user_data2?: object | null) => void)): number
    emit(sigName: "insert-after", sibling: Gst.Element, callback: Gst.Element, user_data?: object | null, user_data2?: object | null): void
    connect(sigName: "insert-before", callback: (($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, user_data?: object | null, user_data2?: object | null) => void)): number
    connect_after(sigName: "insert-before", callback: (($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, user_data?: object | null, user_data2?: object | null) => void)): number
    emit(sigName: "insert-before", sibling: Gst.Element, callback: Gst.Element, user_data?: object | null, user_data2?: object | null): void
    connect(sigName: "prepend", callback: (($obj: InsertBin, callback: Gst.Element, user_data?: object | null, user_data2?: object | null) => void)): number
    connect_after(sigName: "prepend", callback: (($obj: InsertBin, callback: Gst.Element, user_data?: object | null, user_data2?: object | null) => void)): number
    emit(sigName: "prepend", callback: Gst.Element, user_data?: object | null, user_data2?: object | null): void
    connect(sigName: "remove", callback: (($obj: InsertBin, callback: Gst.Element, user_data?: object | null, user_data2?: object | null) => void)): number
    connect_after(sigName: "remove", callback: (($obj: InsertBin, callback: Gst.Element, user_data?: object | null, user_data2?: object | null) => void)): number
    emit(sigName: "remove", callback: Gst.Element, user_data?: object | null, user_data2?: object | null): void
    /* Signals of Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: InsertBin, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: InsertBin, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-added", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: InsertBin, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: InsertBin, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-removed", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: InsertBin) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: InsertBin) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: InsertBin, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: InsertBin, element: Gst.Element) => void)): number
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: InsertBin, element: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: InsertBin, element: Gst.Element) => void)): number
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: InsertBin) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: InsertBin) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: InsertBin, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: InsertBin, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: InsertBin, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: InsertBin, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: InsertBin, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: InsertBin, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: InsertBin, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: InsertBin, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: InsertBin, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: InsertBin, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::async-handling", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-forward", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InsertBin_ConstructProps)
    _init (config?: InsertBin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): InsertBin
    static $gtype: GObject.Type
}
export abstract class InsertBinClass {
    /* Fields of GstInsertBin.InsertBinClass */
    parent_class: Gst.BinClass
    static name: string
}
export class InsertBinPrivate {
    static name: string
}