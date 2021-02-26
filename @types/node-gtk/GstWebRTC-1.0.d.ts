/**
 * GstWebRTC-1.0
 */

import "node"
import type { GstSdp } from './GstSdp-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GstWebRTC {

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
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport */
    certificate: string
    client: boolean
    readonly remoteCertificate: string
    readonly state: WebRTCDTLSTransportState
    readonly transport: WebRTCICETransport
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport */
    sessionId: number
    dtlssrtpenc: Gst.Element
    dtlssrtpdec: Gst.Element
    padding: object[]
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport */
    setTransport(ice: WebRTCICETransport): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCDTLSTransport, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel */
    readonly bufferedAmount: number
    bufferedAmountLowThreshold: number
    readonly readyState: WebRTCDataChannelState
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel */
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel */
    close(): void
    onBufferedAmountLow(): void
    onClose(): void
    onError(error: GLib.Error): void
    onMessageData(data?: any | null): void
    onMessageString(str?: string | null): void
    onOpen(): void
    sendData(data?: any | null): void
    sendString(str?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel */
    connect(sigName: "close", callback: (($obj: WebRTCDataChannel) => void)): number
    on(sigName: "close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "close"): void
    connect(sigName: "on-buffered-amount-low", callback: (($obj: WebRTCDataChannel) => void)): number
    on(sigName: "on-buffered-amount-low", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "on-buffered-amount-low", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "on-buffered-amount-low", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "on-buffered-amount-low"): void
    connect(sigName: "on-close", callback: (($obj: WebRTCDataChannel) => void)): number
    on(sigName: "on-close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "on-close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "on-close", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "on-close"): void
    connect(sigName: "on-error", callback: (($obj: WebRTCDataChannel, error: GLib.Error) => void)): number
    on(sigName: "on-error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "on-error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "on-error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "on-error", error: GLib.Error): void
    connect(sigName: "on-message-data", callback: (($obj: WebRTCDataChannel, data?: any | null) => void)): number
    on(sigName: "on-message-data", callback: (data?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "on-message-data", callback: (data?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "on-message-data", callback: (data?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "on-message-data", data?: any | null): void
    connect(sigName: "on-message-string", callback: (($obj: WebRTCDataChannel, data?: string | null) => void)): number
    on(sigName: "on-message-string", callback: (data?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "on-message-string", callback: (data?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "on-message-string", callback: (data?: string | null) => void): NodeJS.EventEmitter
    emit(sigName: "on-message-string", data?: string | null): void
    connect(sigName: "on-open", callback: (($obj: WebRTCDataChannel) => void)): number
    on(sigName: "on-open", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "on-open", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "on-open", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "on-open"): void
    connect(sigName: "send-data", callback: (($obj: WebRTCDataChannel, data?: any | null) => void)): number
    on(sigName: "send-data", callback: (data?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "send-data", callback: (data?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "send-data", callback: (data?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "send-data", data?: any | null): void
    connect(sigName: "send-string", callback: (($obj: WebRTCDataChannel, data?: string | null) => void)): number
    on(sigName: "send-string", callback: (data?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "send-string", callback: (data?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "send-string", callback: (data?: string | null) => void): NodeJS.EventEmitter
    emit(sigName: "send-string", data?: string | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport */
    readonly gatheringState: WebRTCICEGatheringState
    readonly state: WebRTCICEConnectionState
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport */
    role: WebRTCICERole
    component: WebRTCICEComponent
    src: Gst.Element
    sink: Gst.Element
    padding: object[]
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport */
    connectionStateChange(newState: WebRTCICEConnectionState): void
    gatheringStateChange(newState: WebRTCICEGatheringState): void
    newCandidate(streamId: number, component: WebRTCICEComponent, attr: string): void
    selectedPairChange(): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport */
    connect(sigName: "on-new-candidate", callback: (($obj: WebRTCICETransport, object: string) => void)): number
    on(sigName: "on-new-candidate", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "on-new-candidate", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "on-new-candidate", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "on-new-candidate", object: string): void
    connect(sigName: "on-selected-candidate-pair-change", callback: (($obj: WebRTCICETransport) => void)): number
    on(sigName: "on-selected-candidate-pair-change", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "on-selected-candidate-pair-change", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "on-selected-candidate-pair-change", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "on-selected-candidate-pair-change"): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCICETransport, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver */
    readonly transport: WebRTCDTLSTransport
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver */
    padding: object[]
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCRTPReceiver, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender */
    priority: WebRTCPriorityType
    readonly transport: WebRTCDTLSTransport
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender */
    sendEncodings: object[]
    padding: object[]
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender */
    setPriority(priority: WebRTCPriorityType): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCRTPSender, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver */
    direction: WebRTCRTPTransceiverDirection
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver */
    mline: number
    mid: string
    stopped: boolean
    sender: WebRTCRTPSender
    receiver: WebRTCRTPReceiver
    currentDirection: WebRTCRTPTransceiverDirection
    codecPreferences: Gst.Caps
    kind: WebRTCKind
    padding: object[]
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: WebRTCRTPTransceiver, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransportClass */
    parentClass: Gst.ObjectClass
    padding: object[]
    static name: string
}
export abstract class WebRTCDataChannelClass {
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannelClass */
    parentClass: GObject.ObjectClass
    sendData: (channel: WebRTCDataChannel, data?: any | null) => void
    sendString: (channel: WebRTCDataChannel, str?: string | null) => void
    close: (channel: WebRTCDataChannel) => void
    padding: object[]
    static name: string
}
export abstract class WebRTCICETransportClass {
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCICETransportClass */
    parentClass: Gst.ObjectClass
    gatherCandidates: (transport: WebRTCICETransport) => boolean
    padding: object[]
    static name: string
}
export abstract class WebRTCRTPReceiverClass {
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiverClass */
    parentClass: Gst.ObjectClass
    padding: object[]
    static name: string
}
export abstract class WebRTCRTPSenderClass {
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSenderClass */
    parentClass: Gst.ObjectClass
    padding: object[]
    static name: string
}
export abstract class WebRTCRTPTransceiverClass {
    /* Fields of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiverClass */
    parentClass: Gst.ObjectClass
    padding: object[]
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
}