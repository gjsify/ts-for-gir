/**
 * GstRtspServer-1.0
 */

import "node"
import type { GstRtsp } from './GstRtsp-1.0';
import type { GstSdp } from './GstSdp-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GstBase } from './GstBase-1.0';
import type { Gio } from './Gio-2.0';
import type { GstNet } from './GstNet-1.0';

export declare namespace GstRtspServer {

export enum RTSPAddressPoolResult {
    OK,
    EINVAL,
    ERESERVED,
    ERANGE,
    ELAST,
}
export enum RTSPFilterResult {
    REMOVE,
    KEEP,
    REF,
}
export enum RTSPMediaStatus {
    UNPREPARED,
    UNPREPARING,
    PREPARING,
    PREPARED,
    SUSPENDED,
    ERROR,
}
export enum RTSPPublishClockMode {
    NONE,
    CLOCK,
    CLOCK_AND_OFFSET,
}
export enum RTSPSuspendMode {
    NONE,
    PAUSE,
    RESET,
}
export enum RTSPThreadType {
    CLIENT,
    MEDIA,
}
export enum RTSPAddressFlags {
    NONE,
    IPV4,
    IPV6,
    EVEN_PORT,
    MULTICAST,
    UNICAST,
}
export enum RTSPTransportMode {
    PLAY,
    RECORD,
}
export const RTSP_ADDRESS_POOL_ANY_IPV4: string
export const RTSP_ADDRESS_POOL_ANY_IPV6: string
export const RTSP_AUTH_CHECK_CONNECT: string
export const RTSP_AUTH_CHECK_MEDIA_FACTORY_ACCESS: string
export const RTSP_AUTH_CHECK_MEDIA_FACTORY_CONSTRUCT: string
export const RTSP_AUTH_CHECK_TRANSPORT_CLIENT_SETTINGS: string
export const RTSP_AUTH_CHECK_URL: string
export const RTSP_ONVIF_BACKCHANNEL_REQUIREMENT: string
export const RTSP_ONVIF_REPLAY_REQUIREMENT: string
export const RTSP_PERM_MEDIA_FACTORY_ACCESS: string
export const RTSP_PERM_MEDIA_FACTORY_CONSTRUCT: string
export const RTSP_TOKEN_MEDIA_FACTORY_ROLE: string
export const RTSP_TOKEN_TRANSPORT_CLIENT_SETTINGS: string
export function rtspContextGetType(): GObject.Type
export function rtspParamsGet(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult
export function rtspParamsSet(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult
export function rtspSdpFromMedia(sdp: GstSdp.SDPMessage, info: SDPInfo, media: RTSPMedia): boolean
export function rtspSdpFromStream(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream): boolean
export function rtspSdpMakeMedia(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream, caps: Gst.Caps, profile: GstRtsp.RTSPProfile): boolean
export interface RTSPClientSendFunc {
    (client: RTSPClient, message: GstRtsp.RTSPMessage, close: boolean): boolean
}
export interface RTSPClientSendMessagesFunc {
    (client: RTSPClient, messages: GstRtsp.RTSPMessage, nMessages: number, close: boolean): boolean
}
export interface RTSPClientSessionFilterFunc {
    (client: RTSPClient, sess: RTSPSession): RTSPFilterResult
}
export interface RTSPKeepAliveFunc {
    (): void
}
export interface RTSPMessageSentFunc {
    (): void
}
export interface RTSPMessageSentFuncFull {
    (trans: RTSPStreamTransport): void
}
export interface RTSPSendFunc {
    (buffer: Gst.Buffer, channel: number): boolean
}
export interface RTSPSendListFunc {
    (bufferList: Gst.BufferList, channel: number): boolean
}
export interface RTSPServerClientFilterFunc {
    (server: RTSPServer, client: RTSPClient): RTSPFilterResult
}
export interface RTSPSessionFilterFunc {
    (sess: RTSPSession, media: RTSPSessionMedia): RTSPFilterResult
}
export interface RTSPSessionPoolFilterFunc {
    (pool: RTSPSessionPool, session: RTSPSession): RTSPFilterResult
}
export interface RTSPSessionPoolFunc {
    (pool: RTSPSessionPool): boolean
}
export interface RTSPStreamTransportFilterFunc {
    (stream: RTSPStream, trans: RTSPStreamTransport): RTSPFilterResult
}
export interface RTSPAddressPool_ConstructProps extends GObject.Object_ConstructProps {
}
export class RTSPAddressPool {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPAddressPool */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPAddressPool */
    acquireAddress(flags: RTSPAddressFlags, nPorts: number): RTSPAddress | null
    addRange(minAddress: string, maxAddress: string, minPort: number, maxPort: number, ttl: number): boolean
    clear(): void
    dump(): void
    hasUnicastAddresses(): boolean
    reserveAddress(ipAddress: string, port: number, nPorts: number, ttl: number): { returnType: RTSPAddressPoolResult, address: RTSPAddress }
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPAddressPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPAddressPool_ConstructProps)
    _init (config?: RTSPAddressPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPAddressPool
    static $gtype: GObject.Type
}
export interface RTSPAuth_ConstructProps extends GObject.Object_ConstructProps {
}
export class RTSPAuth {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPAuth */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPAuth */
    addBasic(basic: string, token: RTSPToken): void
    addDigest(user: string, pass: string, token: RTSPToken): void
    getDefaultToken(): RTSPToken | null
    getRealm(): string
    getSupportedMethods(): GstRtsp.RTSPAuthMethod
    getTlsAuthenticationMode(): Gio.TlsAuthenticationMode
    getTlsCertificate(): Gio.TlsCertificate | null
    getTlsDatabase(): Gio.TlsDatabase | null
    parseHtdigest(path: string, token: RTSPToken): boolean
    removeBasic(basic: string): void
    removeDigest(user: string): void
    setDefaultToken(token?: RTSPToken | null): void
    setRealm(realm: string): void
    setSupportedMethods(methods: GstRtsp.RTSPAuthMethod): void
    setTlsAuthenticationMode(mode: Gio.TlsAuthenticationMode): void
    setTlsCertificate(cert?: Gio.TlsCertificate | null): void
    setTlsDatabase(database?: Gio.TlsDatabase | null): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPAuth */
    connect(sigName: "accept-certificate", callback: (($obj: RTSPAuth, connection: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    on(sigName: "accept-certificate", callback: (connection: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (connection: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (connection: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "accept-certificate", connection: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPAuth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPAuth_ConstructProps)
    _init (config?: RTSPAuth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPAuth
    static check(check: string): boolean
    static makeBasic(user: string, pass: string): string
    static $gtype: GObject.Type
}
export interface RTSPClient_ConstructProps extends GObject.Object_ConstructProps {
    dropBacklog?: boolean
    mountPoints?: RTSPMountPoints
    postSessionTimeout?: number
    sessionPool?: RTSPSessionPool
}
export class RTSPClient {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    dropBacklog: boolean
    mountPoints: RTSPMountPoints
    postSessionTimeout: number
    sessionPool: RTSPSessionPool
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    attach(context?: GLib.MainContext | null): number
    close(): void
    getAuth(): RTSPAuth | null
    getConnection(): GstRtsp.RTSPConnection | null
    getContentLengthLimit(): number
    getMountPoints(): RTSPMountPoints | null
    getSessionPool(): RTSPSessionPool | null
    getStreamTransport(channel: number): RTSPStreamTransport | null
    getThreadPool(): RTSPThreadPool | null
    handleMessage(message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    sendMessage(session: RTSPSession | null, message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    sessionFilter(func?: RTSPClientSessionFilterFunc | null): RTSPSession[]
    setAuth(auth?: RTSPAuth | null): void
    setConnection(conn: GstRtsp.RTSPConnection): boolean
    setContentLengthLimit(limit: number): void
    setMountPoints(mounts?: RTSPMountPoints | null): void
    setSendFunc(func: RTSPClientSendFunc): void
    setSendMessagesFunc(func: RTSPClientSendMessagesFunc): void
    setSessionPool(pool?: RTSPSessionPool | null): void
    setThreadPool(pool?: RTSPThreadPool | null): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    connect(sigName: "announce-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "announce-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "announce-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "announce-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "announce-request", ctx: RTSPContext): void
    connect(sigName: "check-requirements", callback: (($obj: RTSPClient, ctx: RTSPContext, arr: string[]) => string)): number
    on(sigName: "check-requirements", callback: (ctx: RTSPContext, arr: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-requirements", callback: (ctx: RTSPContext, arr: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-requirements", callback: (ctx: RTSPContext, arr: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "check-requirements", ctx: RTSPContext, arr: string[]): void
    connect(sigName: "closed", callback: (($obj: RTSPClient) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "describe-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "describe-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "describe-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "describe-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "describe-request", ctx: RTSPContext): void
    connect(sigName: "get-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "get-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-parameter-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "handle-response", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "handle-response", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-response", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-response", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "handle-response", ctx: RTSPContext): void
    connect(sigName: "new-session", callback: (($obj: RTSPClient, object: RTSPSession) => void)): number
    on(sigName: "new-session", callback: (object: RTSPSession) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-session", callback: (object: RTSPSession) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-session", callback: (object: RTSPSession) => void): NodeJS.EventEmitter
    emit(sigName: "new-session", object: RTSPSession): void
    connect(sigName: "options-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "options-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "options-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "options-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "options-request", ctx: RTSPContext): void
    connect(sigName: "pause-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "pause-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pause-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pause-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pause-request", ctx: RTSPContext): void
    connect(sigName: "play-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "play-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "play-request", ctx: RTSPContext): void
    connect(sigName: "pre-announce-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-announce-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-announce-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-announce-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-announce-request", ctx: RTSPContext): void
    connect(sigName: "pre-describe-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-describe-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-describe-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-describe-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-describe-request", ctx: RTSPContext): void
    connect(sigName: "pre-get-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-get-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-get-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-get-parameter-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-options-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-options-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-options-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-options-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-options-request", ctx: RTSPContext): void
    connect(sigName: "pre-pause-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-pause-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-pause-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-pause-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-pause-request", ctx: RTSPContext): void
    connect(sigName: "pre-play-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-play-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-play-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-play-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-play-request", ctx: RTSPContext): void
    connect(sigName: "pre-record-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-record-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-record-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-record-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-record-request", ctx: RTSPContext): void
    connect(sigName: "pre-set-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-set-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-set-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-set-parameter-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-setup-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-setup-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-setup-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-setup-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-setup-request", ctx: RTSPContext): void
    connect(sigName: "pre-teardown-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-teardown-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-teardown-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-teardown-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-teardown-request", ctx: RTSPContext): void
    connect(sigName: "record-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "record-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "record-request", ctx: RTSPContext): void
    connect(sigName: "send-message", callback: (($obj: RTSPClient, session: RTSPSession, message: GstRtsp.RTSPMessage) => void)): number
    on(sigName: "send-message", callback: (session: RTSPSession, message: GstRtsp.RTSPMessage) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "send-message", callback: (session: RTSPSession, message: GstRtsp.RTSPMessage) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "send-message", callback: (session: RTSPSession, message: GstRtsp.RTSPMessage) => void): NodeJS.EventEmitter
    emit(sigName: "send-message", session: RTSPSession, message: GstRtsp.RTSPMessage): void
    connect(sigName: "set-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "set-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-parameter-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "setup-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "setup-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setup-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setup-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "setup-request", ctx: RTSPContext): void
    connect(sigName: "teardown-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    on(sigName: "teardown-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "teardown-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "teardown-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "teardown-request", ctx: RTSPContext): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::drop-backlog", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drop-backlog", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drop-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drop-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drop-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::post-session-timeout", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::post-session-timeout", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPClient_ConstructProps)
    _init (config?: RTSPClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPClient
    static $gtype: GObject.Type
}
export interface RTSPMedia_ConstructProps extends GObject.Object_ConstructProps {
    bindMcastAddress?: boolean
    bufferSize?: number
    clock?: Gst.Clock
    dscpQos?: number
    element?: Gst.Element
    eosShutdown?: boolean
    latency?: number
    maxMcastTtl?: number
    profiles?: GstRtsp.RTSPProfile
    protocols?: GstRtsp.RTSPLowerTrans
    reusable?: boolean
    shared?: boolean
    stopOnDisconnect?: boolean
    suspendMode?: RTSPSuspendMode
    timeProvider?: boolean
    transportMode?: RTSPTransportMode
}
export class RTSPMedia {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    bindMcastAddress: boolean
    bufferSize: number
    clock: Gst.Clock
    dscpQos: number
    eosShutdown: boolean
    latency: number
    maxMcastTtl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    reusable: boolean
    shared: boolean
    stopOnDisconnect: boolean
    suspendMode: RTSPSuspendMode
    timeProvider: boolean
    transportMode: RTSPTransportMode
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    collectStreams(): void
    completePipeline(transports: GstRtsp.RTSPTransport[]): boolean
    createStream(payloader: Gst.Element, pad: Gst.Pad): RTSPStream
    findStream(control: string): RTSPStream | null
    getAddressPool(): RTSPAddressPool | null
    getBaseTime(): Gst.ClockTime
    getBufferSize(): number
    getClock(): Gst.Clock | null
    getDoRetransmission(): boolean
    getDscpQos(): number
    getElement(): Gst.Element
    getLatency(): number
    getMaxMcastTtl(): number
    getMulticastIface(): string | null
    getPermissions(): RTSPPermissions | null
    getProfiles(): GstRtsp.RTSPProfile
    getProtocols(): GstRtsp.RTSPLowerTrans
    getPublishClockMode(): RTSPPublishClockMode
    getRangeString(play: boolean, unit: GstRtsp.RTSPRangeUnit): string | null
    getRateControl(): boolean
    getRates(): { returnType: boolean, rate: number | null, appliedRate: number | null }
    getRetransmissionTime(): Gst.ClockTime
    getStatus(): RTSPMediaStatus
    getStream(idx: number): RTSPStream | null
    getSuspendMode(): RTSPSuspendMode
    getTimeProvider(address: string | null, port: number): GstNet.NetTimeProvider
    getTransportMode(): RTSPTransportMode
    handleSdp(sdp: GstSdp.SDPMessage): boolean
    hasCompletedSender(): boolean
    isBindMcastAddress(): boolean
    isEosShutdown(): boolean
    isReceiveOnly(): boolean
    isReusable(): boolean
    isShared(): boolean
    isStopOnDisconnect(): boolean
    isTimeProvider(): boolean
    lock(): void
    nStreams(): number
    prepare(thread?: RTSPThread | null): boolean
    seek(range: GstRtsp.RTSPTimeRange): boolean
    seekFull(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags): boolean
    seekTrickmode(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmodeInterval: Gst.ClockTime): boolean
    seekable(): Gst.ClockTimeDiff
    setAddressPool(pool?: RTSPAddressPool | null): void
    setBindMcastAddress(bindMcastAddr: boolean): void
    setBufferSize(size: number): void
    setClock(clock?: Gst.Clock | null): void
    setDoRetransmission(doRetransmission: boolean): void
    setDscpQos(dscpQos: number): void
    setEosShutdown(eosShutdown: boolean): void
    setLatency(latency: number): void
    setMaxMcastTtl(ttl: number): boolean
    setMulticastIface(multicastIface?: string | null): void
    setPermissions(permissions?: RTSPPermissions | null): void
    setPipelineState(state: Gst.State): void
    setProfiles(profiles: GstRtsp.RTSPProfile): void
    setProtocols(protocols: GstRtsp.RTSPLowerTrans): void
    setPublishClockMode(mode: RTSPPublishClockMode): void
    setRateControl(enabled: boolean): void
    setRetransmissionTime(time: Gst.ClockTime): void
    setReusable(reusable: boolean): void
    setShared(shared: boolean): void
    setState(state: Gst.State, transports: RTSPStreamTransport[]): boolean
    setStopOnDisconnect(stopOnDisconnect: boolean): void
    setSuspendMode(mode: RTSPSuspendMode): void
    setTransportMode(mode: RTSPTransportMode): void
    setupSdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    suspend(): boolean
    takePipeline(pipeline: Gst.Pipeline): void
    unlock(): void
    unprepare(): boolean
    unsuspend(): boolean
    useTimeProvider(timeProvider: boolean): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    connect(sigName: "new-state", callback: (($obj: RTSPMedia, object: number) => void)): number
    on(sigName: "new-state", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-state", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-state", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "new-state", object: number): void
    connect(sigName: "new-stream", callback: (($obj: RTSPMedia, object: RTSPStream) => void)): number
    on(sigName: "new-stream", callback: (object: RTSPStream) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-stream", callback: (object: RTSPStream) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-stream", callback: (object: RTSPStream) => void): NodeJS.EventEmitter
    emit(sigName: "new-stream", object: RTSPStream): void
    connect(sigName: "prepared", callback: (($obj: RTSPMedia) => void)): number
    on(sigName: "prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prepared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "prepared"): void
    connect(sigName: "removed-stream", callback: (($obj: RTSPMedia, object: RTSPStream) => void)): number
    on(sigName: "removed-stream", callback: (object: RTSPStream) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed-stream", callback: (object: RTSPStream) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed-stream", callback: (object: RTSPStream) => void): NodeJS.EventEmitter
    emit(sigName: "removed-stream", object: RTSPStream): void
    connect(sigName: "target-state", callback: (($obj: RTSPMedia, object: number) => void)): number
    on(sigName: "target-state", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "target-state", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "target-state", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "target-state", object: number): void
    connect(sigName: "unprepared", callback: (($obj: RTSPMedia) => void)): number
    on(sigName: "unprepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unprepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unprepared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unprepared"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clock", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::profiles", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocols", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reusable", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reusable", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-provider", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-provider", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPMedia_ConstructProps)
    _init (config?: RTSPMedia_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(element: Gst.Element): RTSPMedia
    static $gtype: GObject.Type
}
export interface RTSPMediaFactory_ConstructProps extends GObject.Object_ConstructProps {
    bindMcastAddress?: boolean
    bufferSize?: number
    clock?: Gst.Clock
    dscpQos?: number
    enableRtcp?: boolean
    eosShutdown?: boolean
    latency?: number
    launch?: string
    maxMcastTtl?: number
    profiles?: GstRtsp.RTSPProfile
    protocols?: GstRtsp.RTSPLowerTrans
    shared?: boolean
    stopOnDisconnect?: boolean
    suspendMode?: RTSPSuspendMode
    transportMode?: RTSPTransportMode
}
export class RTSPMediaFactory {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    bindMcastAddress: boolean
    bufferSize: number
    clock: Gst.Clock
    dscpQos: number
    enableRtcp: boolean
    eosShutdown: boolean
    latency: number
    launch: string
    maxMcastTtl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    shared: boolean
    stopOnDisconnect: boolean
    suspendMode: RTSPSuspendMode
    transportMode: RTSPTransportMode
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    addRoleFromStructure(structure: Gst.Structure): void
    construct(url: GstRtsp.RTSPUrl): RTSPMedia
    createElement(url: GstRtsp.RTSPUrl): Gst.Element
    getAddressPool(): RTSPAddressPool | null
    getBufferSize(): number
    getClock(): Gst.Clock
    getDoRetransmission(): boolean
    getDscpQos(): number
    getLatency(): number
    getLaunch(): string | null
    getMaxMcastTtl(): number
    getMediaGtype(): GObject.Type
    getMulticastIface(): string | null
    getPermissions(): RTSPPermissions | null
    getProfiles(): GstRtsp.RTSPProfile
    getProtocols(): GstRtsp.RTSPLowerTrans
    getPublishClockMode(): RTSPPublishClockMode
    getRetransmissionTime(): Gst.ClockTime
    getSuspendMode(): RTSPSuspendMode
    getTransportMode(): RTSPTransportMode
    isBindMcastAddress(): boolean
    isEnableRtcp(): boolean
    isEosShutdown(): boolean
    isShared(): boolean
    isStopOnDisonnect(): boolean
    setAddressPool(pool?: RTSPAddressPool | null): void
    setBindMcastAddress(bindMcastAddr: boolean): void
    setBufferSize(size: number): void
    setClock(clock?: Gst.Clock | null): void
    setDoRetransmission(doRetransmission: boolean): void
    setDscpQos(dscpQos: number): void
    setEnableRtcp(enable: boolean): void
    setEosShutdown(eosShutdown: boolean): void
    setLatency(latency: number): void
    setLaunch(launch: string): void
    setMaxMcastTtl(ttl: number): boolean
    setMediaGtype(mediaGtype: GObject.Type): void
    setMulticastIface(multicastIface?: string | null): void
    setPermissions(permissions?: RTSPPermissions | null): void
    setProfiles(profiles: GstRtsp.RTSPProfile): void
    setProtocols(protocols: GstRtsp.RTSPLowerTrans): void
    setPublishClockMode(mode: RTSPPublishClockMode): void
    setRetransmissionTime(time: Gst.ClockTime): void
    setShared(shared: boolean): void
    setStopOnDisconnect(stopOnDisconnect: boolean): void
    setSuspendMode(mode: RTSPSuspendMode): void
    setTransportMode(mode: RTSPTransportMode): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    connect(sigName: "media-configure", callback: (($obj: RTSPMediaFactory, object: RTSPMedia) => void)): number
    on(sigName: "media-configure", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-configure", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-configure", callback: (object: RTSPMedia) => void): NodeJS.EventEmitter
    emit(sigName: "media-configure", object: RTSPMedia): void
    connect(sigName: "media-constructed", callback: (($obj: RTSPMediaFactory, object: RTSPMedia) => void)): number
    on(sigName: "media-constructed", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-constructed", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-constructed", callback: (object: RTSPMedia) => void): NodeJS.EventEmitter
    emit(sigName: "media-constructed", object: RTSPMedia): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clock", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::launch", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::launch", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPMediaFactory_ConstructProps)
    _init (config?: RTSPMediaFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPMediaFactory
    static $gtype: GObject.Type
}
export interface RTSPMediaFactoryURI_ConstructProps extends RTSPMediaFactory_ConstructProps {
    uri?: string
    useGstpay?: boolean
}
export class RTSPMediaFactoryURI {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI */
    uri: string
    useGstpay: boolean
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    bindMcastAddress: boolean
    bufferSize: number
    clock: Gst.Clock
    dscpQos: number
    enableRtcp: boolean
    eosShutdown: boolean
    latency: number
    launch: string
    maxMcastTtl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    shared: boolean
    stopOnDisconnect: boolean
    suspendMode: RTSPSuspendMode
    transportMode: RTSPTransportMode
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI */
    parent: RTSPMediaFactory
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI */
    getUri(): string
    setUri(uri: string): void
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    addRoleFromStructure(structure: Gst.Structure): void
    construct(url: GstRtsp.RTSPUrl): RTSPMedia
    createElement(url: GstRtsp.RTSPUrl): Gst.Element
    getAddressPool(): RTSPAddressPool | null
    getBufferSize(): number
    getClock(): Gst.Clock
    getDoRetransmission(): boolean
    getDscpQos(): number
    getLatency(): number
    getLaunch(): string | null
    getMaxMcastTtl(): number
    getMediaGtype(): GObject.Type
    getMulticastIface(): string | null
    getPermissions(): RTSPPermissions | null
    getProfiles(): GstRtsp.RTSPProfile
    getProtocols(): GstRtsp.RTSPLowerTrans
    getPublishClockMode(): RTSPPublishClockMode
    getRetransmissionTime(): Gst.ClockTime
    getSuspendMode(): RTSPSuspendMode
    getTransportMode(): RTSPTransportMode
    isBindMcastAddress(): boolean
    isEnableRtcp(): boolean
    isEosShutdown(): boolean
    isShared(): boolean
    isStopOnDisonnect(): boolean
    setAddressPool(pool?: RTSPAddressPool | null): void
    setBindMcastAddress(bindMcastAddr: boolean): void
    setBufferSize(size: number): void
    setClock(clock?: Gst.Clock | null): void
    setDoRetransmission(doRetransmission: boolean): void
    setDscpQos(dscpQos: number): void
    setEnableRtcp(enable: boolean): void
    setEosShutdown(eosShutdown: boolean): void
    setLatency(latency: number): void
    setLaunch(launch: string): void
    setMaxMcastTtl(ttl: number): boolean
    setMediaGtype(mediaGtype: GObject.Type): void
    setMulticastIface(multicastIface?: string | null): void
    setPermissions(permissions?: RTSPPermissions | null): void
    setProfiles(profiles: GstRtsp.RTSPProfile): void
    setProtocols(protocols: GstRtsp.RTSPLowerTrans): void
    setPublishClockMode(mode: RTSPPublishClockMode): void
    setRetransmissionTime(time: Gst.ClockTime): void
    setShared(shared: boolean): void
    setStopOnDisconnect(stopOnDisconnect: boolean): void
    setSuspendMode(mode: RTSPSuspendMode): void
    setTransportMode(mode: RTSPTransportMode): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    connect(sigName: "media-configure", callback: (($obj: RTSPMediaFactoryURI, object: RTSPMedia) => void)): number
    on(sigName: "media-configure", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-configure", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-configure", callback: (object: RTSPMedia) => void): NodeJS.EventEmitter
    emit(sigName: "media-configure", object: RTSPMedia): void
    connect(sigName: "media-constructed", callback: (($obj: RTSPMediaFactoryURI, object: RTSPMedia) => void)): number
    on(sigName: "media-constructed", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-constructed", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-constructed", callback: (object: RTSPMedia) => void): NodeJS.EventEmitter
    emit(sigName: "media-constructed", object: RTSPMedia): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-gstpay", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gstpay", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-gstpay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-gstpay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-gstpay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clock", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::launch", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::launch", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPMediaFactoryURI_ConstructProps)
    _init (config?: RTSPMediaFactoryURI_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPMediaFactoryURI
    static $gtype: GObject.Type
}
export interface RTSPMountPoints_ConstructProps extends GObject.Object_ConstructProps {
}
export class RTSPMountPoints {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMountPoints */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMountPoints */
    addFactory(path: string, factory: RTSPMediaFactory): void
    makePath(url: GstRtsp.RTSPUrl): string | null
    match(path: string): { returnType: RTSPMediaFactory, matched: number | null }
    removeFactory(path: string): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPMountPoints, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPMountPoints_ConstructProps)
    _init (config?: RTSPMountPoints_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPMountPoints
    static $gtype: GObject.Type
}
export interface RTSPOnvifClient_ConstructProps extends RTSPClient_ConstructProps {
}
export class RTSPOnvifClient {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    dropBacklog: boolean
    mountPoints: RTSPMountPoints
    postSessionTimeout: number
    sessionPool: RTSPSessionPool
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifClient */
    parent: RTSPClient
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    attach(context?: GLib.MainContext | null): number
    close(): void
    getAuth(): RTSPAuth | null
    getConnection(): GstRtsp.RTSPConnection | null
    getContentLengthLimit(): number
    getMountPoints(): RTSPMountPoints | null
    getSessionPool(): RTSPSessionPool | null
    getStreamTransport(channel: number): RTSPStreamTransport | null
    getThreadPool(): RTSPThreadPool | null
    handleMessage(message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    sendMessage(session: RTSPSession | null, message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    sessionFilter(func?: RTSPClientSessionFilterFunc | null): RTSPSession[]
    setAuth(auth?: RTSPAuth | null): void
    setConnection(conn: GstRtsp.RTSPConnection): boolean
    setContentLengthLimit(limit: number): void
    setMountPoints(mounts?: RTSPMountPoints | null): void
    setSendFunc(func: RTSPClientSendFunc): void
    setSendMessagesFunc(func: RTSPClientSendMessagesFunc): void
    setSessionPool(pool?: RTSPSessionPool | null): void
    setThreadPool(pool?: RTSPThreadPool | null): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    connect(sigName: "announce-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "announce-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "announce-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "announce-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "announce-request", ctx: RTSPContext): void
    connect(sigName: "check-requirements", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext, arr: string[]) => string)): number
    on(sigName: "check-requirements", callback: (ctx: RTSPContext, arr: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-requirements", callback: (ctx: RTSPContext, arr: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-requirements", callback: (ctx: RTSPContext, arr: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "check-requirements", ctx: RTSPContext, arr: string[]): void
    connect(sigName: "closed", callback: (($obj: RTSPOnvifClient) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "describe-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "describe-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "describe-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "describe-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "describe-request", ctx: RTSPContext): void
    connect(sigName: "get-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "get-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-parameter-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "handle-response", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "handle-response", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-response", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-response", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "handle-response", ctx: RTSPContext): void
    connect(sigName: "new-session", callback: (($obj: RTSPOnvifClient, object: RTSPSession) => void)): number
    on(sigName: "new-session", callback: (object: RTSPSession) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-session", callback: (object: RTSPSession) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-session", callback: (object: RTSPSession) => void): NodeJS.EventEmitter
    emit(sigName: "new-session", object: RTSPSession): void
    connect(sigName: "options-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "options-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "options-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "options-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "options-request", ctx: RTSPContext): void
    connect(sigName: "pause-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "pause-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pause-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pause-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pause-request", ctx: RTSPContext): void
    connect(sigName: "play-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "play-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "play-request", ctx: RTSPContext): void
    connect(sigName: "pre-announce-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-announce-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-announce-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-announce-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-announce-request", ctx: RTSPContext): void
    connect(sigName: "pre-describe-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-describe-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-describe-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-describe-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-describe-request", ctx: RTSPContext): void
    connect(sigName: "pre-get-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-get-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-get-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-get-parameter-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-options-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-options-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-options-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-options-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-options-request", ctx: RTSPContext): void
    connect(sigName: "pre-pause-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-pause-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-pause-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-pause-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-pause-request", ctx: RTSPContext): void
    connect(sigName: "pre-play-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-play-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-play-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-play-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-play-request", ctx: RTSPContext): void
    connect(sigName: "pre-record-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-record-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-record-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-record-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-record-request", ctx: RTSPContext): void
    connect(sigName: "pre-set-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-set-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-set-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-set-parameter-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-setup-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-setup-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-setup-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-setup-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-setup-request", ctx: RTSPContext): void
    connect(sigName: "pre-teardown-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    on(sigName: "pre-teardown-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-teardown-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-teardown-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "pre-teardown-request", ctx: RTSPContext): void
    connect(sigName: "record-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "record-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "record-request", ctx: RTSPContext): void
    connect(sigName: "send-message", callback: (($obj: RTSPOnvifClient, session: RTSPSession, message: GstRtsp.RTSPMessage) => void)): number
    on(sigName: "send-message", callback: (session: RTSPSession, message: GstRtsp.RTSPMessage) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "send-message", callback: (session: RTSPSession, message: GstRtsp.RTSPMessage) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "send-message", callback: (session: RTSPSession, message: GstRtsp.RTSPMessage) => void): NodeJS.EventEmitter
    emit(sigName: "send-message", session: RTSPSession, message: GstRtsp.RTSPMessage): void
    connect(sigName: "set-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "set-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-parameter-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-parameter-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "setup-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "setup-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setup-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setup-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "setup-request", ctx: RTSPContext): void
    connect(sigName: "teardown-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    on(sigName: "teardown-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "teardown-request", callback: (ctx: RTSPContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "teardown-request", callback: (ctx: RTSPContext) => void): NodeJS.EventEmitter
    emit(sigName: "teardown-request", ctx: RTSPContext): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::drop-backlog", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drop-backlog", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drop-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drop-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drop-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::post-session-timeout", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::post-session-timeout", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPOnvifClient_ConstructProps)
    _init (config?: RTSPOnvifClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPOnvifClient
    static $gtype: GObject.Type
}
export interface RTSPOnvifMedia_ConstructProps extends RTSPMedia_ConstructProps {
}
export class RTSPOnvifMedia {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    bindMcastAddress: boolean
    bufferSize: number
    clock: Gst.Clock
    dscpQos: number
    eosShutdown: boolean
    latency: number
    maxMcastTtl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    reusable: boolean
    shared: boolean
    stopOnDisconnect: boolean
    suspendMode: RTSPSuspendMode
    timeProvider: boolean
    transportMode: RTSPTransportMode
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMedia */
    parent: RTSPMedia
    priv: RTSPOnvifMediaPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMedia */
    collectBackchannel(): boolean
    getBackchannelBandwidth(): number
    setBackchannelBandwidth(bandwidth: number): void
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    collectStreams(): void
    completePipeline(transports: GstRtsp.RTSPTransport[]): boolean
    createStream(payloader: Gst.Element, pad: Gst.Pad): RTSPStream
    findStream(control: string): RTSPStream | null
    getAddressPool(): RTSPAddressPool | null
    getBaseTime(): Gst.ClockTime
    getBufferSize(): number
    getClock(): Gst.Clock | null
    getDoRetransmission(): boolean
    getDscpQos(): number
    getElement(): Gst.Element
    getLatency(): number
    getMaxMcastTtl(): number
    getMulticastIface(): string | null
    getPermissions(): RTSPPermissions | null
    getProfiles(): GstRtsp.RTSPProfile
    getProtocols(): GstRtsp.RTSPLowerTrans
    getPublishClockMode(): RTSPPublishClockMode
    getRangeString(play: boolean, unit: GstRtsp.RTSPRangeUnit): string | null
    getRateControl(): boolean
    getRates(): { returnType: boolean, rate: number | null, appliedRate: number | null }
    getRetransmissionTime(): Gst.ClockTime
    getStatus(): RTSPMediaStatus
    getStream(idx: number): RTSPStream | null
    getSuspendMode(): RTSPSuspendMode
    getTimeProvider(address: string | null, port: number): GstNet.NetTimeProvider
    getTransportMode(): RTSPTransportMode
    handleSdp(sdp: GstSdp.SDPMessage): boolean
    hasCompletedSender(): boolean
    isBindMcastAddress(): boolean
    isEosShutdown(): boolean
    isReceiveOnly(): boolean
    isReusable(): boolean
    isShared(): boolean
    isStopOnDisconnect(): boolean
    isTimeProvider(): boolean
    lock(): void
    nStreams(): number
    prepare(thread?: RTSPThread | null): boolean
    seek(range: GstRtsp.RTSPTimeRange): boolean
    seekFull(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags): boolean
    seekTrickmode(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmodeInterval: Gst.ClockTime): boolean
    seekable(): Gst.ClockTimeDiff
    setAddressPool(pool?: RTSPAddressPool | null): void
    setBindMcastAddress(bindMcastAddr: boolean): void
    setBufferSize(size: number): void
    setClock(clock?: Gst.Clock | null): void
    setDoRetransmission(doRetransmission: boolean): void
    setDscpQos(dscpQos: number): void
    setEosShutdown(eosShutdown: boolean): void
    setLatency(latency: number): void
    setMaxMcastTtl(ttl: number): boolean
    setMulticastIface(multicastIface?: string | null): void
    setPermissions(permissions?: RTSPPermissions | null): void
    setPipelineState(state: Gst.State): void
    setProfiles(profiles: GstRtsp.RTSPProfile): void
    setProtocols(protocols: GstRtsp.RTSPLowerTrans): void
    setPublishClockMode(mode: RTSPPublishClockMode): void
    setRateControl(enabled: boolean): void
    setRetransmissionTime(time: Gst.ClockTime): void
    setReusable(reusable: boolean): void
    setShared(shared: boolean): void
    setState(state: Gst.State, transports: RTSPStreamTransport[]): boolean
    setStopOnDisconnect(stopOnDisconnect: boolean): void
    setSuspendMode(mode: RTSPSuspendMode): void
    setTransportMode(mode: RTSPTransportMode): void
    setupSdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    suspend(): boolean
    takePipeline(pipeline: Gst.Pipeline): void
    unlock(): void
    unprepare(): boolean
    unsuspend(): boolean
    useTimeProvider(timeProvider: boolean): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    connect(sigName: "new-state", callback: (($obj: RTSPOnvifMedia, object: number) => void)): number
    on(sigName: "new-state", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-state", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-state", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "new-state", object: number): void
    connect(sigName: "new-stream", callback: (($obj: RTSPOnvifMedia, object: RTSPStream) => void)): number
    on(sigName: "new-stream", callback: (object: RTSPStream) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-stream", callback: (object: RTSPStream) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-stream", callback: (object: RTSPStream) => void): NodeJS.EventEmitter
    emit(sigName: "new-stream", object: RTSPStream): void
    connect(sigName: "prepared", callback: (($obj: RTSPOnvifMedia) => void)): number
    on(sigName: "prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prepared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "prepared"): void
    connect(sigName: "removed-stream", callback: (($obj: RTSPOnvifMedia, object: RTSPStream) => void)): number
    on(sigName: "removed-stream", callback: (object: RTSPStream) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed-stream", callback: (object: RTSPStream) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed-stream", callback: (object: RTSPStream) => void): NodeJS.EventEmitter
    emit(sigName: "removed-stream", object: RTSPStream): void
    connect(sigName: "target-state", callback: (($obj: RTSPOnvifMedia, object: number) => void)): number
    on(sigName: "target-state", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "target-state", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "target-state", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "target-state", object: number): void
    connect(sigName: "unprepared", callback: (($obj: RTSPOnvifMedia) => void)): number
    on(sigName: "unprepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unprepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unprepared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unprepared"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clock", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reusable", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reusable", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-provider", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-provider", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPOnvifMedia_ConstructProps)
    _init (config?: RTSPOnvifMedia_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RTSPOnvifMediaFactory_ConstructProps extends RTSPMediaFactory_ConstructProps {
}
export class RTSPOnvifMediaFactory {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    bindMcastAddress: boolean
    bufferSize: number
    clock: Gst.Clock
    dscpQos: number
    enableRtcp: boolean
    eosShutdown: boolean
    latency: number
    launch: string
    maxMcastTtl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    shared: boolean
    stopOnDisconnect: boolean
    suspendMode: RTSPSuspendMode
    transportMode: RTSPTransportMode
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactory */
    parent: RTSPMediaFactory
    priv: RTSPOnvifMediaFactoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactory */
    getBackchannelBandwidth(): number
    getBackchannelLaunch(): string
    hasBackchannelSupport(): boolean
    hasReplaySupport(): boolean
    setBackchannelBandwidth(bandwidth: number): void
    setBackchannelLaunch(launch: string): void
    setReplaySupport(hasReplaySupport: boolean): void
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    addRoleFromStructure(structure: Gst.Structure): void
    construct(url: GstRtsp.RTSPUrl): RTSPMedia
    createElement(url: GstRtsp.RTSPUrl): Gst.Element
    getAddressPool(): RTSPAddressPool | null
    getBufferSize(): number
    getClock(): Gst.Clock
    getDoRetransmission(): boolean
    getDscpQos(): number
    getLatency(): number
    getLaunch(): string | null
    getMaxMcastTtl(): number
    getMediaGtype(): GObject.Type
    getMulticastIface(): string | null
    getPermissions(): RTSPPermissions | null
    getProfiles(): GstRtsp.RTSPProfile
    getProtocols(): GstRtsp.RTSPLowerTrans
    getPublishClockMode(): RTSPPublishClockMode
    getRetransmissionTime(): Gst.ClockTime
    getSuspendMode(): RTSPSuspendMode
    getTransportMode(): RTSPTransportMode
    isBindMcastAddress(): boolean
    isEnableRtcp(): boolean
    isEosShutdown(): boolean
    isShared(): boolean
    isStopOnDisonnect(): boolean
    setAddressPool(pool?: RTSPAddressPool | null): void
    setBindMcastAddress(bindMcastAddr: boolean): void
    setBufferSize(size: number): void
    setClock(clock?: Gst.Clock | null): void
    setDoRetransmission(doRetransmission: boolean): void
    setDscpQos(dscpQos: number): void
    setEnableRtcp(enable: boolean): void
    setEosShutdown(eosShutdown: boolean): void
    setLatency(latency: number): void
    setLaunch(launch: string): void
    setMaxMcastTtl(ttl: number): boolean
    setMediaGtype(mediaGtype: GObject.Type): void
    setMulticastIface(multicastIface?: string | null): void
    setPermissions(permissions?: RTSPPermissions | null): void
    setProfiles(profiles: GstRtsp.RTSPProfile): void
    setProtocols(protocols: GstRtsp.RTSPLowerTrans): void
    setPublishClockMode(mode: RTSPPublishClockMode): void
    setRetransmissionTime(time: Gst.ClockTime): void
    setShared(shared: boolean): void
    setStopOnDisconnect(stopOnDisconnect: boolean): void
    setSuspendMode(mode: RTSPSuspendMode): void
    setTransportMode(mode: RTSPTransportMode): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    connect(sigName: "media-configure", callback: (($obj: RTSPOnvifMediaFactory, object: RTSPMedia) => void)): number
    on(sigName: "media-configure", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-configure", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-configure", callback: (object: RTSPMedia) => void): NodeJS.EventEmitter
    emit(sigName: "media-configure", object: RTSPMedia): void
    connect(sigName: "media-constructed", callback: (($obj: RTSPOnvifMediaFactory, object: RTSPMedia) => void)): number
    on(sigName: "media-constructed", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-constructed", callback: (object: RTSPMedia) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-constructed", callback: (object: RTSPMedia) => void): NodeJS.EventEmitter
    emit(sigName: "media-constructed", object: RTSPMedia): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clock", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-rtcp", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-rtcp", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::launch", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::launch", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPOnvifMediaFactory_ConstructProps)
    _init (config?: RTSPOnvifMediaFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPOnvifMediaFactory
    static requiresBackchannel(factory: RTSPMediaFactory, ctx: RTSPContext): boolean
    static $gtype: GObject.Type
}
export interface RTSPOnvifServer_ConstructProps extends RTSPServer_ConstructProps {
}
export class RTSPOnvifServer {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    address: string
    backlog: number
    readonly boundPort: number
    contentLengthLimit: number
    mountPoints: RTSPMountPoints
    service: string
    sessionPool: RTSPSessionPool
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifServer */
    parent: RTSPServer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    attach(context?: GLib.MainContext | null): number
    clientFilter(func?: RTSPServerClientFilterFunc | null): RTSPClient[]
    createSocket(cancellable?: Gio.Cancellable | null): Gio.Socket
    createSource(cancellable?: Gio.Cancellable | null): GLib.Source
    getAddress(): string | null
    getAuth(): RTSPAuth | null
    getBacklog(): number
    getBoundPort(): number
    getContentLengthLimit(): number
    getMountPoints(): RTSPMountPoints | null
    getService(): string | null
    getSessionPool(): RTSPSessionPool | null
    getThreadPool(): RTSPThreadPool | null
    setAddress(address: string): void
    setAuth(auth?: RTSPAuth | null): void
    setBacklog(backlog: number): void
    setContentLengthLimit(limit: number): void
    setMountPoints(mounts?: RTSPMountPoints | null): void
    setService(service: string): void
    setSessionPool(pool?: RTSPSessionPool | null): void
    setThreadPool(pool?: RTSPThreadPool | null): void
    transferConnection(socket: Gio.Socket, ip: string, port: number, initialBuffer?: string | null): boolean
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    connect(sigName: "client-connected", callback: (($obj: RTSPOnvifServer, object: RTSPClient) => void)): number
    on(sigName: "client-connected", callback: (object: RTSPClient) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "client-connected", callback: (object: RTSPClient) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "client-connected", callback: (object: RTSPClient) => void): NodeJS.EventEmitter
    emit(sigName: "client-connected", object: RTSPClient): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backlog", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backlog", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bound-port", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bound-port", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bound-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bound-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bound-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-length-limit", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length-limit", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-length-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-length-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-length-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPOnvifServer_ConstructProps)
    _init (config?: RTSPOnvifServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPOnvifServer
    static $gtype: GObject.Type
}
export interface RTSPServer_ConstructProps extends GObject.Object_ConstructProps {
    address?: string
    backlog?: number
    contentLengthLimit?: number
    mountPoints?: RTSPMountPoints
    service?: string
    sessionPool?: RTSPSessionPool
}
export class RTSPServer {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    address: string
    backlog: number
    readonly boundPort: number
    contentLengthLimit: number
    mountPoints: RTSPMountPoints
    service: string
    sessionPool: RTSPSessionPool
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    attach(context?: GLib.MainContext | null): number
    clientFilter(func?: RTSPServerClientFilterFunc | null): RTSPClient[]
    createSocket(cancellable?: Gio.Cancellable | null): Gio.Socket
    createSource(cancellable?: Gio.Cancellable | null): GLib.Source
    getAddress(): string | null
    getAuth(): RTSPAuth | null
    getBacklog(): number
    getBoundPort(): number
    getContentLengthLimit(): number
    getMountPoints(): RTSPMountPoints | null
    getService(): string | null
    getSessionPool(): RTSPSessionPool | null
    getThreadPool(): RTSPThreadPool | null
    setAddress(address: string): void
    setAuth(auth?: RTSPAuth | null): void
    setBacklog(backlog: number): void
    setContentLengthLimit(limit: number): void
    setMountPoints(mounts?: RTSPMountPoints | null): void
    setService(service: string): void
    setSessionPool(pool?: RTSPSessionPool | null): void
    setThreadPool(pool?: RTSPThreadPool | null): void
    transferConnection(socket: Gio.Socket, ip: string, port: number, initialBuffer?: string | null): boolean
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    connect(sigName: "client-connected", callback: (($obj: RTSPServer, object: RTSPClient) => void)): number
    on(sigName: "client-connected", callback: (object: RTSPClient) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "client-connected", callback: (object: RTSPClient) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "client-connected", callback: (object: RTSPClient) => void): NodeJS.EventEmitter
    emit(sigName: "client-connected", object: RTSPClient): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backlog", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backlog", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bound-port", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bound-port", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bound-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bound-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bound-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-length-limit", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length-limit", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-length-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-length-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-length-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPServer_ConstructProps)
    _init (config?: RTSPServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPServer
    static ioFunc(socket: Gio.Socket, condition: GLib.IOCondition, server: RTSPServer): boolean
    static $gtype: GObject.Type
}
export interface RTSPSession_ConstructProps extends GObject.Object_ConstructProps {
    extraTimeout?: number
    sessionid?: string
    timeout?: number
    timeoutAlwaysVisible?: boolean
}
export class RTSPSession {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPSession */
    extraTimeout: number
    timeout: number
    timeoutAlwaysVisible: boolean
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPSession */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPSession */
    allowExpire(): void
    filter(func?: RTSPSessionFilterFunc | null): RTSPSessionMedia[]
    getHeader(): string | null
    getMedia(path: string): { returnType: RTSPSessionMedia | null, matched: number }
    getSessionid(): string | null
    getTimeout(): number
    isExpired(now: GLib.TimeVal): boolean
    isExpiredUsec(now: number): boolean
    manageMedia(path: string, media: RTSPMedia): RTSPSessionMedia
    nextTimeout(now: GLib.TimeVal): number
    nextTimeoutUsec(now: number): number
    preventExpire(): void
    releaseMedia(media: RTSPSessionMedia): boolean
    setTimeout(timeout: number): void
    touch(): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::extra-timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extra-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extra-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extra-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout-always-visible", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout-always-visible", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout-always-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout-always-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout-always-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPSession_ConstructProps)
    _init (config?: RTSPSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sessionid: string): RTSPSession
    static $gtype: GObject.Type
}
export interface RTSPSessionMedia_ConstructProps extends GObject.Object_ConstructProps {
}
export class RTSPSessionMedia {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionMedia */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPSessionMedia */
    allocChannels(): { returnType: boolean, range: GstRtsp.RTSPRange }
    getBaseTime(): Gst.ClockTime
    getMedia(): RTSPMedia | null
    getRtpinfo(): string | null
    getRtspState(): GstRtsp.RTSPState
    getTransport(idx: number): RTSPStreamTransport | null
    getTransports(): RTSPStreamTransport[]
    matches(path: string): { returnType: boolean, matched: number }
    setRtspState(state: GstRtsp.RTSPState): void
    setState(state: Gst.State): boolean
    setTransport(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPSessionMedia, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPSessionMedia_ConstructProps)
    _init (config?: RTSPSessionMedia_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, media: RTSPMedia): RTSPSessionMedia
    static $gtype: GObject.Type
}
export interface RTSPSessionPool_ConstructProps extends GObject.Object_ConstructProps {
    maxSessions?: number
}
export class RTSPSessionPool {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool */
    maxSessions: number
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool */
    cleanup(): number
    create(): RTSPSession | null
    createWatch(): GLib.Source
    filter(func?: RTSPSessionPoolFilterFunc | null): RTSPSession[]
    find(sessionid: string): RTSPSession | null
    getMaxSessions(): number
    getNSessions(): number
    remove(sess: RTSPSession): boolean
    setMaxSessions(max: number): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool */
    connect(sigName: "session-removed", callback: (($obj: RTSPSessionPool, object: RTSPSession) => void)): number
    on(sigName: "session-removed", callback: (object: RTSPSession) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "session-removed", callback: (object: RTSPSession) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "session-removed", callback: (object: RTSPSession) => void): NodeJS.EventEmitter
    emit(sigName: "session-removed", object: RTSPSession): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-sessions", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-sessions", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPSessionPool_ConstructProps)
    _init (config?: RTSPSessionPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPSessionPool
    static $gtype: GObject.Type
}
export interface RTSPStream_ConstructProps extends GObject.Object_ConstructProps {
    control?: string
    profiles?: GstRtsp.RTSPProfile
    protocols?: GstRtsp.RTSPLowerTrans
}
export class RTSPStream {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPStream */
    control: string
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPStream */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPStream */
    addMulticastClientAddress(destination: string, rtpPort: number, rtcpPort: number, family: Gio.SocketFamily): boolean
    addTransport(trans: RTSPStreamTransport): boolean
    allocateUdpSockets(family: Gio.SocketFamily, transport: GstRtsp.RTSPTransport, useClientSettings: boolean): boolean
    completeStream(transport: GstRtsp.RTSPTransport): boolean
    getAddressPool(): RTSPAddressPool | null
    getBufferSize(): number
    getCaps(): Gst.Caps | null
    getControl(): string | null
    getCurrentSeqnum(): number
    getDscpQos(): number
    getIndex(): number
    getJoinedBin(): Gst.Bin | null
    getMaxMcastTtl(): number
    getMtu(): number
    getMulticastAddress(family: Gio.SocketFamily): RTSPAddress | null
    getMulticastClientAddresses(): string
    getMulticastIface(): string | null
    getProfiles(): GstRtsp.RTSPProfile
    getProtocols(): GstRtsp.RTSPLowerTrans
    getPt(): number
    getPublishClockMode(): RTSPPublishClockMode
    getRateControl(): boolean
    getRates(): { returnType: boolean, rate: number | null, appliedRate: number | null }
    getRetransmissionPt(): number
    getRetransmissionTime(): Gst.ClockTime
    getRtcpMulticastSocket(family: Gio.SocketFamily): Gio.Socket | null
    getRtcpSocket(family: Gio.SocketFamily): Gio.Socket | null
    getRtpMulticastSocket(family: Gio.SocketFamily): Gio.Socket | null
    getRtpSocket(family: Gio.SocketFamily): Gio.Socket | null
    getRtpinfo(): { returnType: boolean, rtptime: number | null, seq: number | null, clockRate: number | null, runningTime: Gst.ClockTime }
    getRtpsession(): GObject.Object
    getServerPort(family: Gio.SocketFamily): { serverPort: GstRtsp.RTSPRange }
    getSinkpad(): Gst.Pad | null
    getSrcpad(): Gst.Pad | null
    getSrtpEncoder(): Gst.Element
    getSsrc(): { ssrc: number }
    getUlpfecEnabled(): boolean
    getUlpfecPercentage(): number
    getUlpfecPt(): number
    handleKeymgmt(keymgmt: string): boolean
    hasControl(control?: string | null): boolean
    isBindMcastAddress(): boolean
    isBlocking(): boolean
    isClientSide(): boolean
    isComplete(): boolean
    isReceiver(): boolean
    isSender(): boolean
    isTransportSupported(transport: GstRtsp.RTSPTransport): boolean
    joinBin(bin: Gst.Bin, rtpbin: Gst.Element, state: Gst.State): boolean
    leaveBin(bin: Gst.Bin, rtpbin: Gst.Element): boolean
    queryPosition(): { returnType: boolean, position: number }
    queryStop(): { returnType: boolean, stop: number }
    recvRtcp(buffer: Gst.Buffer): Gst.FlowReturn
    recvRtp(buffer: Gst.Buffer): Gst.FlowReturn
    removeTransport(trans: RTSPStreamTransport): boolean
    requestAuxReceiver(sessid: number): Gst.Element | null
    requestAuxSender(sessid: number): Gst.Element | null
    requestUlpfecDecoder(rtpbin: Gst.Element, sessid: number): Gst.Element | null
    requestUlpfecEncoder(sessid: number): Gst.Element | null
    reserveAddress(address: string, port: number, nPorts: number, ttl: number): RTSPAddress | null
    seekable(): boolean
    setAddressPool(pool?: RTSPAddressPool | null): void
    setBindMcastAddress(bindMcastAddr: boolean): void
    setBlocked(blocked: boolean): boolean
    setBufferSize(size: number): void
    setClientSide(clientSide: boolean): void
    setControl(control?: string | null): void
    setDscpQos(dscpQos: number): void
    setMaxMcastTtl(ttl: number): boolean
    setMtu(mtu: number): void
    setMulticastIface(multicastIface?: string | null): void
    setProfiles(profiles: GstRtsp.RTSPProfile): void
    setProtocols(protocols: GstRtsp.RTSPLowerTrans): void
    setPtMap(pt: number, caps: Gst.Caps): void
    setPublishClockMode(mode: RTSPPublishClockMode): void
    setRateControl(enabled: boolean): void
    setRetransmissionPt(rtxPt: number): void
    setRetransmissionTime(time: Gst.ClockTime): void
    setSeqnumOffset(seqnum: number): void
    setUlpfecPercentage(percentage: number): void
    setUlpfecPt(pt: number): void
    transportFilter(func?: RTSPStreamTransportFilterFunc | null): RTSPStreamTransport[]
    unblockLinked(): boolean
    updateCrypto(ssrc: number, crypto?: Gst.Caps | null): boolean
    verifyMcastTtl(ttl: number): boolean
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPStream */
    connect(sigName: "new-rtcp-encoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    on(sigName: "new-rtcp-encoder", callback: (object: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-rtcp-encoder", callback: (object: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-rtcp-encoder", callback: (object: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "new-rtcp-encoder", object: Gst.Element): void
    connect(sigName: "new-rtp-encoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    on(sigName: "new-rtp-encoder", callback: (object: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-rtp-encoder", callback: (object: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-rtp-encoder", callback: (object: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "new-rtp-encoder", object: Gst.Element): void
    connect(sigName: "new-rtp-rtcp-decoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    on(sigName: "new-rtp-rtcp-decoder", callback: (object: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-rtp-rtcp-decoder", callback: (object: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-rtp-rtcp-decoder", callback: (object: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "new-rtp-rtcp-decoder", object: Gst.Element): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::control", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::profiles", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocols", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPStream_ConstructProps)
    _init (config?: RTSPStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(idx: number, payloader: Gst.Element, pad: Gst.Pad): RTSPStream
    static $gtype: GObject.Type
}
export interface RTSPStreamTransport_ConstructProps extends GObject.Object_ConstructProps {
}
export class RTSPStreamTransport {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransport */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransport */
    getRtpinfo(startTime: Gst.ClockTime): string | null
    getStream(): RTSPStream | null
    getTransport(): GstRtsp.RTSPTransport | null
    getUrl(): GstRtsp.RTSPUrl | null
    isTimedOut(): boolean
    keepAlive(): void
    messageSent(): void
    recvData(channel: number, buffer: Gst.Buffer): Gst.FlowReturn
    sendRtcp(buffer: Gst.Buffer): boolean
    sendRtcpList(bufferList: Gst.BufferList): boolean
    sendRtp(buffer: Gst.Buffer): boolean
    sendRtpList(bufferList: Gst.BufferList): boolean
    setActive(active: boolean): boolean
    setCallbacks(sendRtp: RTSPSendFunc, sendRtcp: RTSPSendFunc): void
    setKeepalive(keepAlive: RTSPKeepAliveFunc): void
    setListCallbacks(sendRtpList: RTSPSendListFunc, sendRtcpList: RTSPSendListFunc): void
    setMessageSent(messageSent: RTSPMessageSentFunc): void
    setMessageSentFull(messageSent: RTSPMessageSentFuncFull): void
    setTimedOut(timedout: boolean): void
    setTransport(tr: GstRtsp.RTSPTransport): void
    setUrl(url?: GstRtsp.RTSPUrl | null): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPStreamTransport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPStreamTransport_ConstructProps)
    _init (config?: RTSPStreamTransport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport
    static $gtype: GObject.Type
}
export interface RTSPThreadPool_ConstructProps extends GObject.Object_ConstructProps {
    maxThreads?: number
}
export class RTSPThreadPool {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool */
    maxThreads: number
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool */
    getMaxThreads(): number
    getThread(type: RTSPThreadType, ctx: RTSPContext): RTSPThread | null
    setMaxThreads(maxThreads: number): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-threads", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-threads", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTSPThreadPool_ConstructProps)
    _init (config?: RTSPThreadPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPThreadPool
    static cleanup(): void
    static $gtype: GObject.Type
}
export class RTSPAddress {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPAddress */
    pool: RTSPAddressPool
    address: string
    port: number
    nPorts: number
    ttl: number
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPAddress */
    copy(): RTSPAddress
    free(): void
    static name: string
}
export abstract class RTSPAddressPoolClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPAddressPoolClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RTSPAddressPoolPrivate {
    static name: string
}
export abstract class RTSPAuthClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPAuthClass */
    parentClass: GObject.ObjectClass
    authenticate: (auth: RTSPAuth, ctx: RTSPContext) => boolean
    check: (auth: RTSPAuth, ctx: RTSPContext, check: string) => boolean
    generateAuthenticateHeader: (auth: RTSPAuth, ctx: RTSPContext) => void
    acceptCertificate: (auth: RTSPAuth, connection: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean
    static name: string
}
export class RTSPAuthPrivate {
    static name: string
}
export abstract class RTSPClientClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPClientClass */
    parentClass: GObject.ObjectClass
    createSdp: (client: RTSPClient, media: RTSPMedia) => GstSdp.SDPMessage
    configureClientMedia: (client: RTSPClient, media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext) => boolean
    configureClientTransport: (client: RTSPClient, ctx: RTSPContext, ct: GstRtsp.RTSPTransport) => boolean
    paramsSet: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPResult
    paramsGet: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPResult
    makePathFromUri: (client: RTSPClient, uri: GstRtsp.RTSPUrl) => string
    adjustPlayMode: (client: RTSPClient, context: RTSPContext, range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmodeInterval: Gst.ClockTime, enableRateControl: boolean) => GstRtsp.RTSPStatusCode
    adjustPlayResponse: (client: RTSPClient, context: RTSPContext) => GstRtsp.RTSPStatusCode
    closed: (client: RTSPClient) => void
    newSession: (client: RTSPClient, session: RTSPSession) => void
    optionsRequest: (client: RTSPClient, ctx: RTSPContext) => void
    describeRequest: (client: RTSPClient, ctx: RTSPContext) => void
    setupRequest: (client: RTSPClient, ctx: RTSPContext) => void
    playRequest: (client: RTSPClient, ctx: RTSPContext) => void
    pauseRequest: (client: RTSPClient, ctx: RTSPContext) => void
    teardownRequest: (client: RTSPClient, ctx: RTSPContext) => void
    setParameterRequest: (client: RTSPClient, ctx: RTSPContext) => void
    getParameterRequest: (client: RTSPClient, ctx: RTSPContext) => void
    handleResponse: (client: RTSPClient, ctx: RTSPContext) => void
    tunnelHttpResponse: (client: RTSPClient, request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage) => void
    sendMessage: (client: RTSPClient, ctx: RTSPContext, response: GstRtsp.RTSPMessage) => void
    handleSdp: (client: RTSPClient, ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage) => boolean
    announceRequest: (client: RTSPClient, ctx: RTSPContext) => void
    recordRequest: (client: RTSPClient, ctx: RTSPContext) => void
    checkRequirements: (client: RTSPClient, ctx: RTSPContext, arr: string) => string
    preOptionsRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preDescribeRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preSetupRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    prePlayRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    prePauseRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preTeardownRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preSetParameterRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preGetParameterRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preAnnounceRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preRecordRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    static name: string
}
export class RTSPClientPrivate {
    static name: string
}
export class RTSPContext {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPContext */
    server: RTSPServer
    conn: GstRtsp.RTSPConnection
    client: RTSPClient
    request: GstRtsp.RTSPMessage
    uri: GstRtsp.RTSPUrl
    method: GstRtsp.RTSPMethod
    auth: RTSPAuth
    token: RTSPToken
    session: RTSPSession
    sessmedia: RTSPSessionMedia
    factory: RTSPMediaFactory
    media: RTSPMedia
    stream: RTSPStream
    response: GstRtsp.RTSPMessage
    trans: RTSPStreamTransport
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPContext */
    popCurrent(): void
    pushCurrent(): void
    static name: string
}
export abstract class RTSPMediaClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaClass */
    parentClass: GObject.ObjectClass
    handleMessage: (media: RTSPMedia, message: Gst.Message) => boolean
    prepare: (media: RTSPMedia, thread?: RTSPThread | null) => boolean
    unprepare: (media: RTSPMedia) => boolean
    suspend: (media: RTSPMedia) => boolean
    unsuspend: (media: RTSPMedia) => boolean
    convertRange: (media: RTSPMedia, range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit) => boolean
    queryPosition: (media: RTSPMedia, position: number) => boolean
    queryStop: (media: RTSPMedia, stop: number) => boolean
    setupRtpbin: (media: RTSPMedia, rtpbin: Gst.Element) => boolean
    setupSdp: (media: RTSPMedia, sdp: GstSdp.SDPMessage, info: SDPInfo) => boolean
    newStream: (media: RTSPMedia, stream: RTSPStream) => void
    removedStream: (media: RTSPMedia, stream: RTSPStream) => void
    prepared: (media: RTSPMedia) => void
    unprepared: (media: RTSPMedia) => void
    targetState: (media: RTSPMedia, state: Gst.State) => void
    newState: (media: RTSPMedia, state: Gst.State) => void
    handleSdp: (media: RTSPMedia, sdp: GstSdp.SDPMessage) => boolean
    static name: string
}
export abstract class RTSPMediaFactoryClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryClass */
    parentClass: GObject.ObjectClass
    genKey: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => string
    createElement: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => Gst.Element
    construct: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => RTSPMedia
    configure: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    mediaConstructed: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    mediaConfigure: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    static name: string
}
export class RTSPMediaFactoryPrivate {
    static name: string
}
export abstract class RTSPMediaFactoryURIClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURIClass */
    parentClass: RTSPMediaFactoryClass
    static name: string
}
export class RTSPMediaFactoryURIPrivate {
    static name: string
}
export class RTSPMediaPrivate {
    static name: string
}
export abstract class RTSPMountPointsClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMountPointsClass */
    parentClass: GObject.ObjectClass
    makePath: (mounts: RTSPMountPoints, url: GstRtsp.RTSPUrl) => string | null
    static name: string
}
export class RTSPMountPointsPrivate {
    static name: string
}
export abstract class RTSPOnvifClientClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifClientClass */
    parent: RTSPClientClass
    static name: string
}
export abstract class RTSPOnvifMediaClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaClass */
    parent: RTSPMediaClass
    static name: string
}
export abstract class RTSPOnvifMediaFactoryClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactoryClass */
    parent: RTSPMediaFactoryClass
    hasBackchannelSupport: (factory: RTSPOnvifMediaFactory) => boolean
    static name: string
}
export class RTSPOnvifMediaFactoryPrivate {
    static name: string
}
export class RTSPOnvifMediaPrivate {
    static name: string
}
export abstract class RTSPOnvifServerClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifServerClass */
    parent: RTSPServerClass
    static name: string
}
export class RTSPPermissions {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPPermissions */
    miniObject: Gst.MiniObject
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPPermissions */
    addPermissionForRole(role: string, permission: string, allowed: boolean): void
    addRole(role: string): void
    addRoleFromStructure(structure: Gst.Structure): void
    getRole(role: string): Gst.Structure
    isAllowed(role: string, permission: string): boolean
    removeRole(role: string): void
    static name: string
    static new(): RTSPPermissions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RTSPPermissions
}
export abstract class RTSPServerClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPServerClass */
    parentClass: GObject.ObjectClass
    clientConnected: (server: RTSPServer, client: RTSPClient) => void
    static name: string
}
export class RTSPServerPrivate {
    static name: string
}
export abstract class RTSPSessionClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class RTSPSessionMediaClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionMediaClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RTSPSessionMediaPrivate {
    static name: string
}
export abstract class RTSPSessionPoolClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionPoolClass */
    parentClass: GObject.ObjectClass
    createSessionId: (pool: RTSPSessionPool) => string
    sessionRemoved: (pool: RTSPSessionPool, session: RTSPSession) => void
    static name: string
}
export class RTSPSessionPoolPrivate {
    static name: string
}
export class RTSPSessionPrivate {
    static name: string
}
export abstract class RTSPStreamClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPStreamClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RTSPStreamPrivate {
    static name: string
}
export abstract class RTSPStreamTransportClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransportClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RTSPStreamTransportPrivate {
    static name: string
}
export class RTSPThread {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPThread */
    miniObject: Gst.MiniObject
    type: RTSPThreadType
    context: GLib.MainContext
    loop: GLib.MainLoop
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPThread */
    reuse(): boolean
    stop(): void
    static name: string
    static new(type: RTSPThreadType): RTSPThread
    constructor(type: RTSPThreadType)
    /* Static methods and pseudo-constructors */
    static new(type: RTSPThreadType): RTSPThread
}
export abstract class RTSPThreadPoolClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPThreadPoolClass */
    parentClass: GObject.ObjectClass
    pool: GLib.ThreadPool
    getThread: (pool: RTSPThreadPool, type: RTSPThreadType, ctx: RTSPContext) => RTSPThread | null
    configureThread: (pool: RTSPThreadPool, thread: RTSPThread, ctx: RTSPContext) => void
    threadEnter: (pool: RTSPThreadPool, thread: RTSPThread) => void
    threadLeave: (pool: RTSPThreadPool, thread: RTSPThread) => void
    static name: string
}
export class RTSPThreadPoolPrivate {
    static name: string
}
export class RTSPToken {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPToken */
    miniObject: Gst.MiniObject
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPToken */
    getString(field: string): string | null
    getStructure(): Gst.Structure
    isAllowed(field: string): boolean
    setBool(field: string, boolValue: boolean): void
    setString(field: string, stringValue: string): void
    writableStructure(): Gst.Structure
    static name: string
    static new(): RTSPToken
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RTSPToken
}
export class SDPInfo {
    /* Fields of GstRtspServer-1.0.GstRtspServer.SDPInfo */
    isIpv6: boolean
    serverIp: string
    static name: string
}
}