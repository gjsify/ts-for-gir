/**
 * GstWebRTC-1.0
 */

/// <reference types="node" />
import type { GstSdp } from './GstSdp-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

declare namespace GstWebRTC {

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
export function webrtcSdpTypeToString(type: WebRTCSDPType): string
export interface WebRTCDTLSTransport_ConstructProps extends Gst.Object_ConstructProps {
    certificate?: string
    client?: boolean
    sessionId?: number
}
export class WebRTCDTLSTransport {
    /* Properties of GstWebRTC.WebRTCDTLSTransport */
    certificate: string
    client: boolean
    readonly remoteCertificate: string
    readonly state: WebRTCDTLSTransportState
    readonly transport: WebRTCICETransport
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstWebRTC.WebRTCDTLSTransport */
    sessionId: number
    dtlssrtpenc: Gst.Element
    dtlssrtpdec: Gst.Element
    padding: object[]
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstWebRTC.WebRTCDTLSTransport */
    setTransport(ice: WebRTCICETransport): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCDTLSTransport, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCDTLSTransport, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebRTCDTLSTransport_ConstructProps)
    _init (config?: WebRTCDTLSTransport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sessionId: number): WebRTCDTLSTransport
    static $gtype: GObject.Type
}
export interface WebRTCDataChannel_ConstructProps extends GObject.Object_ConstructProps {
    bufferedAmountLowThreshold?: number
    id?: number
    label?: string
    maxPacketLifetime?: number
    maxRetransmits?: number
    negotiated?: boolean
    ordered?: boolean
    priority?: WebRTCPriorityType
    protocol?: string
}
export class WebRTCDataChannel {
    /* Properties of GstWebRTC.WebRTCDataChannel */
    readonly bufferedAmount: number
    bufferedAmountLowThreshold: number
    readonly readyState: WebRTCDataChannelState
    /* Fields of GstWebRTC.WebRTCDataChannel */
    parent: GObject.Object
    lock: GLib.Mutex
    label: string
    ordered: boolean
    maxPacketLifetime: number
    maxRetransmits: number
    protocol: string
    negotiated: boolean
    id: number
    priority: WebRTCPriorityType
    padding: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstWebRTC.WebRTCDataChannel */
    close(): void
    onBufferedAmountLow(): void
    onClose(): void
    onError(error: GLib.Error): void
    onMessageData(data?: any): void
    onMessageString(str?: string | null): void
    onOpen(): void
    sendData(data?: any): void
    sendString(str?: string | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstWebRTC.WebRTCDataChannel */
    vfuncClose(): void
    vfuncSendData(data?: any): void
    vfuncSendString(str?: string | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstWebRTC.WebRTCDataChannel */
    connect(sigName: "close", callback: (($obj: WebRTCDataChannel) => void)): number
    connect_after(sigName: "close", callback: (($obj: WebRTCDataChannel) => void)): number
    emit(sigName: "close"): void
    on(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "on-buffered-amount-low", callback: (($obj: WebRTCDataChannel) => void)): number
    connect_after(sigName: "on-buffered-amount-low", callback: (($obj: WebRTCDataChannel) => void)): number
    emit(sigName: "on-buffered-amount-low"): void
    on(sigName: "on-buffered-amount-low", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "on-buffered-amount-low", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "on-buffered-amount-low", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "on-close", callback: (($obj: WebRTCDataChannel) => void)): number
    connect_after(sigName: "on-close", callback: (($obj: WebRTCDataChannel) => void)): number
    emit(sigName: "on-close"): void
    on(sigName: "on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "on-error", callback: (($obj: WebRTCDataChannel, error: GLib.Error) => void)): number
    connect_after(sigName: "on-error", callback: (($obj: WebRTCDataChannel, error: GLib.Error) => void)): number
    emit(sigName: "on-error", error: GLib.Error): void
    on(sigName: "on-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "on-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "on-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "on-message-data", callback: (($obj: WebRTCDataChannel, data?: any) => void)): number
    connect_after(sigName: "on-message-data", callback: (($obj: WebRTCDataChannel, data?: any) => void)): number
    emit(sigName: "on-message-data", data?: any): void
    on(sigName: "on-message-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "on-message-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "on-message-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "on-message-string", callback: (($obj: WebRTCDataChannel, data?: string | null) => void)): number
    connect_after(sigName: "on-message-string", callback: (($obj: WebRTCDataChannel, data?: string | null) => void)): number
    emit(sigName: "on-message-string", data?: string | null): void
    on(sigName: "on-message-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "on-message-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "on-message-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "on-open", callback: (($obj: WebRTCDataChannel) => void)): number
    connect_after(sigName: "on-open", callback: (($obj: WebRTCDataChannel) => void)): number
    emit(sigName: "on-open"): void
    on(sigName: "on-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "on-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "on-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "send-data", callback: (($obj: WebRTCDataChannel, data?: any) => void)): number
    connect_after(sigName: "send-data", callback: (($obj: WebRTCDataChannel, data?: any) => void)): number
    emit(sigName: "send-data", data?: any): void
    on(sigName: "send-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "send-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "send-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "send-string", callback: (($obj: WebRTCDataChannel, data?: string | null) => void)): number
    connect_after(sigName: "send-string", callback: (($obj: WebRTCDataChannel, data?: string | null) => void)): number
    emit(sigName: "send-string", data?: string | null): void
    on(sigName: "send-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "send-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "send-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffered-amount", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffered-amount", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffered-amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffered-amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffered-amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffered-amount-low-threshold", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffered-amount-low-threshold", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffered-amount-low-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffered-amount-low-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffered-amount-low-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ready-state", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready-state", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ready-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ready-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ready-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebRTCDataChannel_ConstructProps)
    _init (config?: WebRTCDataChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebRTCICETransport_ConstructProps extends Gst.Object_ConstructProps {
    component?: WebRTCICEComponent
}
export class WebRTCICETransport {
    /* Properties of GstWebRTC.WebRTCICETransport */
    readonly gatheringState: WebRTCICEGatheringState
    readonly state: WebRTCICEConnectionState
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstWebRTC.WebRTCICETransport */
    role: WebRTCICERole
    component: WebRTCICEComponent
    src: Gst.Element
    sink: Gst.Element
    padding: object[]
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstWebRTC.WebRTCICETransport */
    connectionStateChange(newState: WebRTCICEConnectionState): void
    gatheringStateChange(newState: WebRTCICEGatheringState): void
    newCandidate(streamId: number, component: WebRTCICEComponent, attr: string): void
    selectedPairChange(): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstWebRTC.WebRTCICETransport */
    vfuncGatherCandidates(): boolean
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstWebRTC.WebRTCICETransport */
    connect(sigName: "on-new-candidate", callback: (($obj: WebRTCICETransport, object: string) => void)): number
    connect_after(sigName: "on-new-candidate", callback: (($obj: WebRTCICETransport, object: string) => void)): number
    emit(sigName: "on-new-candidate", object: string): void
    on(sigName: "on-new-candidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "on-new-candidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "on-new-candidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "on-selected-candidate-pair-change", callback: (($obj: WebRTCICETransport) => void)): number
    connect_after(sigName: "on-selected-candidate-pair-change", callback: (($obj: WebRTCICETransport) => void)): number
    emit(sigName: "on-selected-candidate-pair-change"): void
    on(sigName: "on-selected-candidate-pair-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "on-selected-candidate-pair-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "on-selected-candidate-pair-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCICETransport, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCICETransport, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gathering-state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gathering-state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gathering-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gathering-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gathering-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebRTCICETransport_ConstructProps)
    _init (config?: WebRTCICETransport_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebRTCRTPReceiver_ConstructProps extends Gst.Object_ConstructProps {
}
export class WebRTCRTPReceiver {
    /* Properties of GstWebRTC.WebRTCRTPReceiver */
    readonly transport: WebRTCDTLSTransport
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstWebRTC.WebRTCRTPReceiver */
    padding: object[]
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCRTPReceiver, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCRTPReceiver, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebRTCRTPReceiver_ConstructProps)
    _init (config?: WebRTCRTPReceiver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WebRTCRTPReceiver
    static $gtype: GObject.Type
}
export interface WebRTCRTPSender_ConstructProps extends Gst.Object_ConstructProps {
    priority?: WebRTCPriorityType
}
export class WebRTCRTPSender {
    /* Properties of GstWebRTC.WebRTCRTPSender */
    priority: WebRTCPriorityType
    readonly transport: WebRTCDTLSTransport
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstWebRTC.WebRTCRTPSender */
    sendEncodings: object[]
    padding: object[]
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstWebRTC.WebRTCRTPSender */
    setPriority(priority: WebRTCPriorityType): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCRTPSender, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCRTPSender, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebRTCRTPSender_ConstructProps)
    _init (config?: WebRTCRTPSender_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WebRTCRTPSender
    static $gtype: GObject.Type
}
export interface WebRTCRTPTransceiver_ConstructProps extends Gst.Object_ConstructProps {
    direction?: WebRTCRTPTransceiverDirection
    mlineindex?: number
    receiver?: WebRTCRTPReceiver
    sender?: WebRTCRTPSender
}
export class WebRTCRTPTransceiver {
    /* Properties of GstWebRTC.WebRTCRTPTransceiver */
    direction: WebRTCRTPTransceiverDirection
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstWebRTC.WebRTCRTPTransceiver */
    mline: number
    mid: string
    stopped: boolean
    sender: WebRTCRTPSender
    receiver: WebRTCRTPReceiver
    currentDirection: WebRTCRTPTransceiverDirection
    codecPreferences: Gst.Caps
    kind: WebRTCKind
    padding: object[]
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCRTPTransceiver, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: WebRTCRTPTransceiver, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebRTCRTPTransceiver_ConstructProps)
    _init (config?: WebRTCRTPTransceiver_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class WebRTCDTLSTransportClass {
    /* Fields of GstWebRTC.WebRTCDTLSTransportClass */
    parentClass: Gst.ObjectClass
    padding: object[]
    static name: string
}
export abstract class WebRTCDataChannelClass {
    /* Fields of GstWebRTC.WebRTCDataChannelClass */
    parentClass: GObject.ObjectClass
    sendData: (channel: WebRTCDataChannel, data?: any) => void
    sendString: (channel: WebRTCDataChannel, str?: string | null) => void
    close: (channel: WebRTCDataChannel) => void
    padding: object[]
    static name: string
}
export abstract class WebRTCICETransportClass {
    /* Fields of GstWebRTC.WebRTCICETransportClass */
    parentClass: Gst.ObjectClass
    gatherCandidates: (transport: WebRTCICETransport) => boolean
    padding: object[]
    static name: string
}
export abstract class WebRTCRTPReceiverClass {
    /* Fields of GstWebRTC.WebRTCRTPReceiverClass */
    parentClass: Gst.ObjectClass
    padding: object[]
    static name: string
}
export abstract class WebRTCRTPSenderClass {
    /* Fields of GstWebRTC.WebRTCRTPSenderClass */
    parentClass: Gst.ObjectClass
    padding: object[]
    static name: string
}
export abstract class WebRTCRTPTransceiverClass {
    /* Fields of GstWebRTC.WebRTCRTPTransceiverClass */
    parentClass: Gst.ObjectClass
    padding: object[]
    static name: string
}
export class WebRTCSessionDescription {
    /* Fields of GstWebRTC.WebRTCSessionDescription */
    type: WebRTCSDPType
    sdp: GstSdp.SDPMessage
    /* Methods of GstWebRTC.WebRTCSessionDescription */
    copy(): WebRTCSessionDescription
    free(): void
    static name: string
    static new(type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription
    constructor(type: WebRTCSDPType, sdp: GstSdp.SDPMessage)
    /* Static methods and pseudo-constructors */
    static new(type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription
}
}