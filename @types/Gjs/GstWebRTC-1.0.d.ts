/**
 * GstWebRTC-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstSdp from './GstSdp-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum WebRTCBundlePolicy {
    NONE,
    BALANCED,
    MAX_COMPAT,
    MAX_BUNDLE,
}
export enum WebRTCDTLSSetup {
    NONE,
    ACTPASS,
    ACTIVE,
    PASSIVE,
}
export enum WebRTCDTLSTransportState {
    NEW,
    CLOSED,
    FAILED,
    CONNECTING,
    CONNECTED,
}
export enum WebRTCDataChannelState {
    NEW,
    CONNECTING,
    OPEN,
    CLOSING,
    CLOSED,
}
export enum WebRTCFECType {
    NONE,
    ULP_RED,
}
export enum WebRTCICEComponent {
    RTP,
    RTCP,
}
export enum WebRTCICEConnectionState {
    NEW,
    CHECKING,
    CONNECTED,
    COMPLETED,
    FAILED,
    DISCONNECTED,
    CLOSED,
}
export enum WebRTCICEGatheringState {
    NEW,
    GATHERING,
    COMPLETE,
}
export enum WebRTCICERole {
    CONTROLLED,
    CONTROLLING,
}
export enum WebRTCICETransportPolicy {
    ALL,
    RELAY,
}
export enum WebRTCKind {
    UNKNOWN,
    AUDIO,
    VIDEO,
}
export enum WebRTCPeerConnectionState {
    NEW,
    CONNECTING,
    CONNECTED,
    DISCONNECTED,
    FAILED,
    CLOSED,
}
export enum WebRTCPriorityType {
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
}
export enum WebRTCRTPTransceiverDirection {
    NONE,
    INACTIVE,
    SENDONLY,
    RECVONLY,
    SENDRECV,
}
export enum WebRTCSCTPTransportState {
    NEW,
    CONNECTING,
    CONNECTED,
    CLOSED,
}
export enum WebRTCSDPType {
    OFFER,
    PRANSWER,
    ANSWER,
    ROLLBACK,
}
export enum WebRTCSignalingState {
    STABLE,
    CLOSED,
    HAVE_LOCAL_OFFER,
    HAVE_REMOTE_OFFER,
    HAVE_LOCAL_PRANSWER,
    HAVE_REMOTE_PRANSWER,
}
export enum WebRTCStatsType {
    CODEC,
    INBOUND_RTP,
    OUTBOUND_RTP,
    REMOTE_INBOUND_RTP,
    REMOTE_OUTBOUND_RTP,
    CSRC,
    PEER_CONNECTION,
    DATA_CHANNEL,
    STREAM,
    TRANSPORT,
    CANDIDATE_PAIR,
    LOCAL_CANDIDATE,
    REMOTE_CANDIDATE,
    CERTIFICATE,
}
export function webrtc_sdp_type_to_string(type: WebRTCSDPType): string
export interface WebRTCDTLSTransport_ConstructProps extends Gst.Object_ConstructProps {
    certificate?: string
    client?: boolean
    session_id?: number
}
export class WebRTCDTLSTransport {
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport */
    certificate: string
    client: boolean
    readonly remote_certificate: string
    readonly state: WebRTCDTLSTransportState
    readonly transport: WebRTCICETransport
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCDTLSTransport, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCDTLSTransport, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebRTCDTLSTransport_ConstructProps)
    _init (config?: WebRTCDTLSTransport_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebRTCDataChannel_ConstructProps extends GObject.Object_ConstructProps {
    buffered_amount_low_threshold?: number
    id?: number
    label?: string
    max_packet_lifetime?: number
    max_retransmits?: number
    negotiated?: boolean
    ordered?: boolean
    priority?: WebRTCPriorityType
    protocol?: string
}
export class WebRTCDataChannel {
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel */
    readonly buffered_amount: number
    buffered_amount_low_threshold: number
    readonly ready_state: WebRTCDataChannelState
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel */
    close(): void
    send_data(data?: GLib.Bytes | null): void
    send_string(str?: string | null): void
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
    /* Signals of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel */
    connect(sigName: "close", callback: (($obj: WebRTCDataChannel) => void)): number
    connect_after(sigName: "close", callback: (($obj: WebRTCDataChannel) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "on-buffered-amount-low", callback: (($obj: WebRTCDataChannel) => void)): number
    connect_after(sigName: "on-buffered-amount-low", callback: (($obj: WebRTCDataChannel) => void)): number
    emit(sigName: "on-buffered-amount-low"): void
    connect(sigName: "on-close", callback: (($obj: WebRTCDataChannel) => void)): number
    connect_after(sigName: "on-close", callback: (($obj: WebRTCDataChannel) => void)): number
    emit(sigName: "on-close"): void
    connect(sigName: "on-error", callback: (($obj: WebRTCDataChannel, error: GLib.Error) => void)): number
    connect_after(sigName: "on-error", callback: (($obj: WebRTCDataChannel, error: GLib.Error) => void)): number
    emit(sigName: "on-error", error: GLib.Error): void
    connect(sigName: "on-message-data", callback: (($obj: WebRTCDataChannel, data?: GLib.Bytes | null) => void)): number
    connect_after(sigName: "on-message-data", callback: (($obj: WebRTCDataChannel, data?: GLib.Bytes | null) => void)): number
    emit(sigName: "on-message-data", data?: GLib.Bytes | null): void
    connect(sigName: "on-message-string", callback: (($obj: WebRTCDataChannel, data?: string | null) => void)): number
    connect_after(sigName: "on-message-string", callback: (($obj: WebRTCDataChannel, data?: string | null) => void)): number
    emit(sigName: "on-message-string", data?: string | null): void
    connect(sigName: "on-open", callback: (($obj: WebRTCDataChannel) => void)): number
    connect_after(sigName: "on-open", callback: (($obj: WebRTCDataChannel) => void)): number
    emit(sigName: "on-open"): void
    connect(sigName: "send-data", callback: (($obj: WebRTCDataChannel, data?: GLib.Bytes | null) => void)): number
    connect_after(sigName: "send-data", callback: (($obj: WebRTCDataChannel, data?: GLib.Bytes | null) => void)): number
    emit(sigName: "send-data", data?: GLib.Bytes | null): void
    connect(sigName: "send-string", callback: (($obj: WebRTCDataChannel, data?: string | null) => void)): number
    connect_after(sigName: "send-string", callback: (($obj: WebRTCDataChannel, data?: string | null) => void)): number
    emit(sigName: "send-string", data?: string | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffered-amount", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffered-amount", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffered-amount-low-threshold", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffered-amount-low-threshold", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ready-state", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready-state", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebRTCDataChannel_ConstructProps)
    _init (config?: WebRTCDataChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebRTCICETransport_ConstructProps extends Gst.Object_ConstructProps {
    component?: WebRTCICEComponent
}
export class WebRTCICETransport {
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport */
    readonly gathering_state: WebRTCICEGatheringState
    readonly state: WebRTCICEConnectionState
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport */
    connect(sigName: "on-new-candidate", callback: (($obj: WebRTCICETransport, object: string) => void)): number
    connect_after(sigName: "on-new-candidate", callback: (($obj: WebRTCICETransport, object: string) => void)): number
    emit(sigName: "on-new-candidate", object: string): void
    connect(sigName: "on-selected-candidate-pair-change", callback: (($obj: WebRTCICETransport) => void)): number
    connect_after(sigName: "on-selected-candidate-pair-change", callback: (($obj: WebRTCICETransport) => void)): number
    emit(sigName: "on-selected-candidate-pair-change"): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCICETransport, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCICETransport, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gathering-state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gathering-state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebRTCICETransport_ConstructProps)
    _init (config?: WebRTCICETransport_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebRTCRTPReceiver_ConstructProps extends Gst.Object_ConstructProps {
}
export class WebRTCRTPReceiver {
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver */
    readonly transport: WebRTCDTLSTransport
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCRTPReceiver, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCRTPReceiver, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::transport", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebRTCRTPReceiver_ConstructProps)
    _init (config?: WebRTCRTPReceiver_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebRTCRTPSender_ConstructProps extends Gst.Object_ConstructProps {
    priority?: WebRTCPriorityType
}
export class WebRTCRTPSender {
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender */
    priority: WebRTCPriorityType
    readonly transport: WebRTCDTLSTransport
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender */
    set_priority(priority: WebRTCPriorityType): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCRTPSender, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCRTPSender, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::priority", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebRTCRTPSender_ConstructProps)
    _init (config?: WebRTCRTPSender_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebRTCRTPTransceiver_ConstructProps extends Gst.Object_ConstructProps {
    codec_preferences?: Gst.Caps
    direction?: WebRTCRTPTransceiverDirection
    mlineindex?: number
    receiver?: WebRTCRTPReceiver
    sender?: WebRTCRTPSender
}
export class WebRTCRTPTransceiver {
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver */
    codec_preferences: Gst.Caps
    readonly current_direction: WebRTCRTPTransceiverDirection
    direction: WebRTCRTPTransceiverDirection
    readonly kind: WebRTCKind
    readonly mid: string
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCRTPTransceiver, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCRTPTransceiver, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::codec-preferences", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec-preferences", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-direction", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-direction", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kind", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mid", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mid", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebRTCRTPTransceiver_ConstructProps)
    _init (config?: WebRTCRTPTransceiver_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebRTCSCTPTransport_ConstructProps extends Gst.Object_ConstructProps {
}
export class WebRTCSCTPTransport {
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransport */
    readonly max_channels: number
    readonly max_message_size: number
    readonly state: WebRTCSCTPTransportState
    readonly transport: WebRTCDTLSTransport
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCSCTPTransport, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCSCTPTransport, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-channels", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-channels", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-message-size", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-message-size", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebRTCSCTPTransport_ConstructProps)
    _init (config?: WebRTCSCTPTransport_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class WebRTCDTLSTransportClass {
    static name: string
}
export abstract class WebRTCDataChannelClass {
    static name: string
}
export abstract class WebRTCICETransportClass {
    static name: string
}
export abstract class WebRTCRTPReceiverClass {
    static name: string
}
export abstract class WebRTCRTPSenderClass {
    static name: string
}
export abstract class WebRTCRTPTransceiverClass {
    static name: string
}
export abstract class WebRTCSCTPTransportClass {
    static name: string
}
export class WebRTCSessionDescription {
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCSessionDescription */
    type: WebRTCSDPType
    sdp: GstSdp.SDPMessage
    /* Methods of GstWebRTC-1.0.GstWebRTC.WebRTCSessionDescription */
    copy(): WebRTCSessionDescription
    free(): void
    static name: string
    static new(type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription
    constructor(type: WebRTCSDPType, sdp: GstSdp.SDPMessage)
    /* Static methods and pseudo-constructors */
    static new(type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription
}