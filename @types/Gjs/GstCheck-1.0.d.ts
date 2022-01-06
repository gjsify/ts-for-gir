/**
 * GstCheck-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export function buffer_straw_get_buffer(bin: Gst.Element, pad: Gst.Pad): Gst.Buffer
export function buffer_straw_start_pipeline(bin: Gst.Element, pad: Gst.Pad): void
export function buffer_straw_stop_pipeline(bin: Gst.Element, pad: Gst.Pad): void
export function check_abi_list(list: CheckABIStruct, have_abi_sizes: boolean): void
export function check_buffer_data(buffer: Gst.Buffer, data: object | null, size: number): void
export function check_caps_equal(caps1: Gst.Caps, caps2: Gst.Caps): void
export function check_chain_func(pad: Gst.Pad, parent: Gst.Object, buffer: Gst.Buffer): Gst.FlowReturn
export function check_clear_log_filter(): void
export function check_drop_buffers(): void
export function check_element_push_buffer(element_name: string, buffer_in: Gst.Buffer, caps_in: Gst.Caps, buffer_out: Gst.Buffer, caps_out: Gst.Caps): void
export function check_element_push_buffer_list(element_name: string, buffer_in: Gst.Buffer[], caps_in: Gst.Caps, buffer_out: Gst.Buffer[], caps_out: Gst.Caps, last_flow_return: Gst.FlowReturn): void
export function check_init(argc: number, argv: string): void
export function check_message_error(message: Gst.Message, type: Gst.MessageType, domain: GLib.Quark, code: number): void
export function check_object_destroyed_on_unref(object_to_unref?: object | null): void
export function check_remove_log_filter(filter: CheckLogFilter): void
export function check_setup_element(factory: string): Gst.Element
export function check_setup_events(srcpad: Gst.Pad, element: Gst.Element, caps: Gst.Caps | null, format: Gst.Format): void
export function check_setup_events_with_stream_id(srcpad: Gst.Pad, element: Gst.Element, caps: Gst.Caps | null, format: Gst.Format, stream_id: string): void
export function check_setup_sink_pad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad
export function check_setup_sink_pad_by_name(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad
export function check_setup_sink_pad_by_name_from_template(element: Gst.Element, tmpl: Gst.PadTemplate, name: string): Gst.Pad
export function check_setup_sink_pad_from_template(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad
export function check_setup_src_pad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad
export function check_setup_src_pad_by_name(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad
export function check_setup_src_pad_by_name_from_template(element: Gst.Element, tmpl: Gst.PadTemplate, name: string): Gst.Pad
export function check_setup_src_pad_from_template(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad
export function check_teardown_element(element: Gst.Element): void
export function check_teardown_pad_by_name(element: Gst.Element, name: string): void
export function check_teardown_sink_pad(element: Gst.Element): void
export function check_teardown_src_pad(element: Gst.Element): void
export function consistency_checker_add_pad(consist: StreamConsistency, pad: Gst.Pad): boolean
export function consistency_checker_free(consist: StreamConsistency): void
export function consistency_checker_reset(consist: StreamConsistency): void
export function harness_stress_thread_stop(t: HarnessThread): number
export interface CheckLogFilterFunc {
    (log_domain: string, log_level: GLib.LogLevelFlags, message: string): boolean
}
export interface HarnessPrepareBufferFunc {
    (h: Harness, data?: object | null): Gst.Buffer
}
export interface HarnessPrepareEventFunc {
    (h: Harness, data?: object | null): Gst.Event
}
export interface TestClock_ConstructProps extends Gst.Clock_ConstructProps {
    clock_type?: Gst.ClockType
    start_time?: number
}
export class TestClock {
    /* Properties of GstCheck-1.0.GstCheck.TestClock */
    clock_type: Gst.ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstCheck-1.0.GstCheck.TestClock */
    advance_time(delta: Gst.ClockTimeDiff): void
    crank(): boolean
    get_next_entry_time(): Gst.ClockTime
    has_id(id: Gst.ClockID): boolean
    peek_id_count(): number
    peek_next_pending_id(): [ /* returnType */ boolean, /* pending_id */ Gst.ClockID | null ]
    process_id(pending_id: Gst.ClockID): boolean
    process_id_list(pending_list?: Gst.ClockID[] | null): number
    process_next_clock_id(): Gst.ClockID | null
    set_time(new_time: Gst.ClockTime): void
    timed_wait_for_multiple_pending_ids(count: number, timeout_ms: number): [ /* returnType */ boolean, /* pending_list */ Gst.ClockID[] | null ]
    wait_for_multiple_pending_ids(count: number): /* pending_list */ Gst.ClockID[] | null
    wait_for_next_pending_id(): /* pending_id */ Gst.ClockID | null
    wait_for_pending_id_count(count: number): void
    /* Methods of Gst-1.0.Gst.Clock */
    add_observation(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    add_observation_unapplied(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ Gst.ClockTime | null, /* external */ Gst.ClockTime | null, /* rate_num */ Gst.ClockTime | null, /* rate_denom */ Gst.ClockTime | null ]
    adjust_unlocked(internal: Gst.ClockTime): Gst.ClockTime
    adjust_with_calibration(internal_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    get_calibration(): [ /* internal */ Gst.ClockTime | null, /* external */ Gst.ClockTime | null, /* rate_num */ Gst.ClockTime | null, /* rate_denom */ Gst.ClockTime | null ]
    get_internal_time(): Gst.ClockTime
    get_master(): Gst.Clock | null
    get_resolution(): Gst.ClockTime
    get_time(): Gst.ClockTime
    get_timeout(): Gst.ClockTime
    is_synced(): boolean
    new_periodic_id(start_time: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    new_single_shot_id(time: Gst.ClockTime): Gst.ClockID
    periodic_id_reinit(id: Gst.ClockID, start_time: Gst.ClockTime, interval: Gst.ClockTime): boolean
    set_calibration(internal: Gst.ClockTime, external: Gst.ClockTime, rate_num: Gst.ClockTime, rate_denom: Gst.ClockTime): void
    set_master(master?: Gst.Clock | null): boolean
    set_resolution(resolution: Gst.ClockTime): Gst.ClockTime
    set_synced(synced: boolean): void
    set_timeout(timeout: Gst.ClockTime): void
    single_shot_id_reinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    unadjust_unlocked(external: Gst.ClockTime): Gst.ClockTime
    unadjust_with_calibration(external_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    wait_for_sync(timeout: Gst.ClockTime): boolean
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Clock */
    vfunc_change_resolution(old_resolution: Gst.ClockTime, new_resolution: Gst.ClockTime): Gst.ClockTime
    vfunc_get_internal_time(): Gst.ClockTime
    vfunc_get_resolution(): Gst.ClockTime
    vfunc_unschedule(entry: Gst.ClockEntry): void
    vfunc_wait(entry: Gst.ClockEntry): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    vfunc_wait_async(entry: Gst.ClockEntry): Gst.ClockReturn
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: TestClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: TestClock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TestClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TestClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock-type", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TestClock_ConstructProps)
    _init (config?: TestClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TestClock
    static new_with_start_time(start_time: Gst.ClockTime): TestClock
    static id_list_get_latest_time(pending_list?: Gst.ClockID[] | null): Gst.ClockTime
    static $gtype: GObject.Type
}
export class CheckABIStruct {
    /* Fields of GstCheck-1.0.GstCheck.CheckABIStruct */
    name: string
    size: number
    abi_size: number
    static name: string
}
export class CheckLogFilter {
    static name: string
}
export class Harness {
    /* Fields of GstCheck-1.0.GstCheck.Harness */
    element: Gst.Element
    srcpad: Gst.Pad
    sinkpad: Gst.Pad
    src_harness: Harness
    sink_harness: Harness
    /* Methods of GstCheck-1.0.GstCheck.Harness */
    add_element_sink_pad(sinkpad: Gst.Pad): void
    add_element_src_pad(srcpad: Gst.Pad): void
    add_probe(element_name: string, pad_name: string, mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): void
    add_propose_allocation_meta(api: GObject.Type, params?: Gst.Structure | null): void
    add_sink(sink_element_name: string): void
    add_sink_harness(sink_harness: Harness): void
    add_sink_parse(launchline: string): void
    add_src(src_element_name: string, has_clock_wait: boolean): void
    add_src_harness(src_harness: Harness, has_clock_wait: boolean): void
    add_src_parse(launchline: string, has_clock_wait: boolean): void
    buffers_in_queue(): number
    buffers_received(): number
    crank_multiple_clock_waits(waits: number): boolean
    crank_single_clock_wait(): boolean
    create_buffer(size: number): Gst.Buffer
    dump_to_file(filename: string): void
    events_in_queue(): number
    events_received(): number
    find_element(element_name: string): Gst.Element | null
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_last_pushed_timestamp(): Gst.ClockTime
    get_testclock(): TestClock
    play(): void
    pull(): Gst.Buffer
    pull_event(): Gst.Event
    pull_until_eos(): [ /* returnType */ boolean, /* buf */ Gst.Buffer ]
    pull_upstream_event(): Gst.Event
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_and_pull(buffer: Gst.Buffer): Gst.Buffer
    push_event(event: Gst.Event): boolean
    push_from_src(): Gst.FlowReturn
    push_to_sink(): Gst.FlowReturn
    push_upstream_event(event: Gst.Event): boolean
    query_latency(): Gst.ClockTime
    set_blocking_push_mode(): void
    set_caps(in_: Gst.Caps, out: Gst.Caps): void
    set_caps_str(in_: string, out: string): void
    set_drop_buffers(drop_buffers: boolean): void
    set_forwarding(forwarding: boolean): void
    set_live(is_live: boolean): void
    set_propose_allocator(allocator?: Gst.Allocator | null, params?: Gst.AllocationParams | null): void
    set_sink_caps(caps: Gst.Caps): void
    set_sink_caps_str(str: string): void
    set_src_caps(caps: Gst.Caps): void
    set_src_caps_str(str: string): void
    set_time(time: Gst.ClockTime): boolean
    set_upstream_latency(latency: Gst.ClockTime): void
    sink_push_many(pushes: number): Gst.FlowReturn
    src_crank_and_push_many(cranks: number, pushes: number): Gst.FlowReturn
    src_push_event(): boolean
    take_all_data_as_buffer(): Gst.Buffer
    take_all_data(): GLib.Bytes
    teardown(): void
    try_pull(): Gst.Buffer
    try_pull_event(): Gst.Event
    try_pull_upstream_event(): Gst.Event
    upstream_events_in_queue(): number
    upstream_events_received(): number
    use_systemclock(): void
    use_testclock(): void
    wait_for_clock_id_waits(waits: number, timeout: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static stress_thread_stop(t: HarnessThread): number
}
export class HarnessPrivate {
    static name: string
}
export class HarnessThread {
    static name: string
}
export class StreamConsistency {
    static name: string
}
export abstract class TestClockClass {
    /* Fields of GstCheck-1.0.GstCheck.TestClockClass */
    parent_class: Gst.ClockClass
    static name: string
}
export class TestClockPrivate {
    static name: string
}