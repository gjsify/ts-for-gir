/**
 * GstRtspServer-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstRtsp from './GstRtsp-1.0';
import type * as GstSdp from './GstSdp-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';
import type * as GstBase from './GstBase-1.0';
import type * as Gio from './Gio-2.0';
import type * as GstNet from './GstNet-1.0';

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
export function rtsp_context_get_type(): GObject.Type
export function rtsp_params_get(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult
export function rtsp_params_set(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult
export function rtsp_sdp_from_media(sdp: GstSdp.SDPMessage, info: SDPInfo, media: RTSPMedia): boolean
export function rtsp_sdp_from_stream(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream): boolean
export function rtsp_sdp_make_media(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream, caps: Gst.Caps, profile: GstRtsp.RTSPProfile): boolean
export interface RTSPClientSendFunc {
    (client: RTSPClient, message: GstRtsp.RTSPMessage, close: boolean): boolean
}
export interface RTSPClientSendMessagesFunc {
    (client: RTSPClient, messages: GstRtsp.RTSPMessage, n_messages: number, close: boolean): boolean
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
    (buffer_list: Gst.BufferList, channel: number): boolean
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
    /* Fields of GstRtspServer.RTSPAddressPool */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPAddressPool */
    acquire_address(flags: RTSPAddressFlags, n_ports: number): RTSPAddress | null
    add_range(min_address: string, max_address: string, min_port: number, max_port: number, ttl: number): boolean
    clear(): void
    dump(): void
    has_unicast_addresses(): boolean
    reserve_address(ip_address: string, port: number, n_ports: number, ttl: number): [ /* returnType */ RTSPAddressPoolResult, /* address */ RTSPAddress ]
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
    connect(sigName: "notify", callback: (($obj: RTSPAddressPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPAddressPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Fields of GstRtspServer.RTSPAuth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPAuth */
    add_basic(basic: string, token: RTSPToken): void
    add_digest(user: string, pass: string, token: RTSPToken): void
    get_default_token(): RTSPToken | null
    get_realm(): string
    get_supported_methods(): GstRtsp.RTSPAuthMethod
    get_tls_authentication_mode(): Gio.TlsAuthenticationMode
    get_tls_certificate(): Gio.TlsCertificate | null
    get_tls_database(): Gio.TlsDatabase | null
    parse_htdigest(path: string, token: RTSPToken): boolean
    remove_basic(basic: string): void
    remove_digest(user: string): void
    set_default_token(token?: RTSPToken | null): void
    set_realm(realm: string): void
    set_supported_methods(methods: GstRtsp.RTSPAuthMethod): void
    set_tls_authentication_mode(mode: Gio.TlsAuthenticationMode): void
    set_tls_certificate(cert?: Gio.TlsCertificate | null): void
    set_tls_database(database?: Gio.TlsDatabase | null): void
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
    /* Virtual methods of GstRtspServer.RTSPAuth */
    vfunc_accept_certificate(connection: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    vfunc_authenticate(ctx: RTSPContext): boolean
    vfunc_check(ctx: RTSPContext, check: string): boolean
    vfunc_generate_authenticate_header(ctx: RTSPContext): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPAuth */
    connect(sigName: "accept-certificate", callback: (($obj: RTSPAuth, connection: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: RTSPAuth, connection: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", connection: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPAuth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPAuth, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPAuth_ConstructProps)
    _init (config?: RTSPAuth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPAuth
    static check(check: string): boolean
    static make_basic(user: string, pass: string): string
    static $gtype: GObject.Type
}
export interface RTSPClient_ConstructProps extends GObject.Object_ConstructProps {
    drop_backlog?: boolean
    mount_points?: RTSPMountPoints
    post_session_timeout?: number
    session_pool?: RTSPSessionPool
}
export class RTSPClient {
    /* Properties of GstRtspServer.RTSPClient */
    drop_backlog: boolean
    mount_points: RTSPMountPoints
    post_session_timeout: number
    session_pool: RTSPSessionPool
    /* Fields of GstRtspServer.RTSPClient */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPClient */
    attach(context?: GLib.MainContext | null): number
    close(): void
    get_auth(): RTSPAuth | null
    get_connection(): GstRtsp.RTSPConnection | null
    get_content_length_limit(): number
    get_mount_points(): RTSPMountPoints | null
    get_session_pool(): RTSPSessionPool | null
    get_stream_transport(channel: number): RTSPStreamTransport | null
    get_thread_pool(): RTSPThreadPool | null
    handle_message(message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    send_message(session: RTSPSession | null, message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    session_filter(func?: RTSPClientSessionFilterFunc | null): RTSPSession[]
    set_auth(auth?: RTSPAuth | null): void
    set_connection(conn: GstRtsp.RTSPConnection): boolean
    set_content_length_limit(limit: number): void
    set_mount_points(mounts?: RTSPMountPoints | null): void
    set_send_func(func: RTSPClientSendFunc): void
    set_send_messages_func(func: RTSPClientSendMessagesFunc): void
    set_session_pool(pool?: RTSPSessionPool | null): void
    set_thread_pool(pool?: RTSPThreadPool | null): void
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
    /* Virtual methods of GstRtspServer.RTSPClient */
    vfunc_adjust_play_mode(context: RTSPContext, range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmode_interval: Gst.ClockTime, enable_rate_control: boolean): GstRtsp.RTSPStatusCode
    vfunc_adjust_play_response(context: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_announce_request(ctx: RTSPContext): void
    vfunc_check_requirements(ctx: RTSPContext, arr: string): string
    vfunc_closed(): void
    vfunc_configure_client_media(media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext): boolean
    vfunc_configure_client_transport(ctx: RTSPContext, ct: GstRtsp.RTSPTransport): boolean
    vfunc_create_sdp(media: RTSPMedia): GstSdp.SDPMessage
    vfunc_describe_request(ctx: RTSPContext): void
    vfunc_get_parameter_request(ctx: RTSPContext): void
    vfunc_handle_response(ctx: RTSPContext): void
    vfunc_handle_sdp(ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage): boolean
    vfunc_make_path_from_uri(uri: GstRtsp.RTSPUrl): string
    vfunc_new_session(session: RTSPSession): void
    vfunc_options_request(ctx: RTSPContext): void
    vfunc_params_get(ctx: RTSPContext): GstRtsp.RTSPResult
    vfunc_params_set(ctx: RTSPContext): GstRtsp.RTSPResult
    vfunc_pause_request(ctx: RTSPContext): void
    vfunc_play_request(ctx: RTSPContext): void
    vfunc_pre_announce_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_describe_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_get_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_options_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_pause_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_play_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_record_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_set_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_setup_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_teardown_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_record_request(ctx: RTSPContext): void
    vfunc_send_message(ctx: RTSPContext, response: GstRtsp.RTSPMessage): void
    vfunc_set_parameter_request(ctx: RTSPContext): void
    vfunc_setup_request(ctx: RTSPContext): void
    vfunc_teardown_request(ctx: RTSPContext): void
    vfunc_tunnel_http_response(request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPClient */
    connect(sigName: "announce-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "announce-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "announce-request", ctx: RTSPContext): void
    connect(sigName: "check-requirements", callback: (($obj: RTSPClient, ctx: RTSPContext, arr: string[]) => string)): number
    connect_after(sigName: "check-requirements", callback: (($obj: RTSPClient, ctx: RTSPContext, arr: string[]) => string)): number
    emit(sigName: "check-requirements", ctx: RTSPContext, arr: string[]): void
    connect(sigName: "closed", callback: (($obj: RTSPClient) => void)): number
    connect_after(sigName: "closed", callback: (($obj: RTSPClient) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "describe-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "describe-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "describe-request", ctx: RTSPContext): void
    connect(sigName: "get-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "get-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "handle-response", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "handle-response", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "handle-response", ctx: RTSPContext): void
    connect(sigName: "new-session", callback: (($obj: RTSPClient, object: RTSPSession) => void)): number
    connect_after(sigName: "new-session", callback: (($obj: RTSPClient, object: RTSPSession) => void)): number
    emit(sigName: "new-session", object: RTSPSession): void
    connect(sigName: "options-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "options-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "options-request", ctx: RTSPContext): void
    connect(sigName: "pause-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "pause-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "pause-request", ctx: RTSPContext): void
    connect(sigName: "play-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "play-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "play-request", ctx: RTSPContext): void
    connect(sigName: "pre-announce-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-announce-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-announce-request", ctx: RTSPContext): void
    connect(sigName: "pre-describe-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-describe-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-describe-request", ctx: RTSPContext): void
    connect(sigName: "pre-get-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-get-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-options-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-options-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-options-request", ctx: RTSPContext): void
    connect(sigName: "pre-pause-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-pause-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-pause-request", ctx: RTSPContext): void
    connect(sigName: "pre-play-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-play-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-play-request", ctx: RTSPContext): void
    connect(sigName: "pre-record-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-record-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-record-request", ctx: RTSPContext): void
    connect(sigName: "pre-set-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-set-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-setup-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-setup-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-setup-request", ctx: RTSPContext): void
    connect(sigName: "pre-teardown-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-teardown-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-teardown-request", ctx: RTSPContext): void
    connect(sigName: "record-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "record-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "record-request", ctx: RTSPContext): void
    connect(sigName: "send-message", callback: (($obj: RTSPClient, session: RTSPSession, message: GstRtsp.RTSPMessage) => void)): number
    connect_after(sigName: "send-message", callback: (($obj: RTSPClient, session: RTSPSession, message: GstRtsp.RTSPMessage) => void)): number
    emit(sigName: "send-message", session: RTSPSession, message: GstRtsp.RTSPMessage): void
    connect(sigName: "set-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "set-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "setup-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "setup-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "setup-request", ctx: RTSPContext): void
    connect(sigName: "teardown-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "teardown-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "teardown-request", ctx: RTSPContext): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::drop-backlog", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drop-backlog", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::post-session-timeout", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::post-session-timeout", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPClient_ConstructProps)
    _init (config?: RTSPClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPClient
    static $gtype: GObject.Type
}
export interface RTSPMedia_ConstructProps extends GObject.Object_ConstructProps {
    bind_mcast_address?: boolean
    buffer_size?: number
    clock?: Gst.Clock
    dscp_qos?: number
    element?: Gst.Element
    eos_shutdown?: boolean
    latency?: number
    max_mcast_ttl?: number
    profiles?: GstRtsp.RTSPProfile
    protocols?: GstRtsp.RTSPLowerTrans
    reusable?: boolean
    shared?: boolean
    stop_on_disconnect?: boolean
    suspend_mode?: RTSPSuspendMode
    time_provider?: boolean
    transport_mode?: RTSPTransportMode
}
export class RTSPMedia {
    /* Properties of GstRtspServer.RTSPMedia */
    bind_mcast_address: boolean
    buffer_size: number
    clock: Gst.Clock
    dscp_qos: number
    eos_shutdown: boolean
    latency: number
    max_mcast_ttl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    reusable: boolean
    shared: boolean
    stop_on_disconnect: boolean
    suspend_mode: RTSPSuspendMode
    time_provider: boolean
    transport_mode: RTSPTransportMode
    /* Fields of GstRtspServer.RTSPMedia */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPMedia */
    collect_streams(): void
    complete_pipeline(transports: GstRtsp.RTSPTransport[]): boolean
    create_stream(payloader: Gst.Element, pad: Gst.Pad): RTSPStream
    find_stream(control: string): RTSPStream | null
    get_address_pool(): RTSPAddressPool | null
    get_base_time(): Gst.ClockTime
    get_buffer_size(): number
    get_clock(): Gst.Clock | null
    get_do_retransmission(): boolean
    get_dscp_qos(): number
    get_element(): Gst.Element
    get_latency(): number
    get_max_mcast_ttl(): number
    get_multicast_iface(): string | null
    get_permissions(): RTSPPermissions | null
    get_profiles(): GstRtsp.RTSPProfile
    get_protocols(): GstRtsp.RTSPLowerTrans
    get_publish_clock_mode(): RTSPPublishClockMode
    get_range_string(play: boolean, unit: GstRtsp.RTSPRangeUnit): string | null
    get_rate_control(): boolean
    get_rates(): [ /* returnType */ boolean, /* rate */ number | null, /* applied_rate */ number | null ]
    get_retransmission_time(): Gst.ClockTime
    get_status(): RTSPMediaStatus
    get_stream(idx: number): RTSPStream | null
    get_suspend_mode(): RTSPSuspendMode
    get_time_provider(address: string | null, port: number): GstNet.NetTimeProvider
    get_transport_mode(): RTSPTransportMode
    handle_sdp(sdp: GstSdp.SDPMessage): boolean
    has_completed_sender(): boolean
    is_bind_mcast_address(): boolean
    is_eos_shutdown(): boolean
    is_receive_only(): boolean
    is_reusable(): boolean
    is_shared(): boolean
    is_stop_on_disconnect(): boolean
    is_time_provider(): boolean
    lock(): void
    n_streams(): number
    prepare(thread?: RTSPThread | null): boolean
    seek(range: GstRtsp.RTSPTimeRange): boolean
    seek_full(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags): boolean
    seek_trickmode(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmode_interval: Gst.ClockTime): boolean
    seekable(): Gst.ClockTimeDiff
    set_address_pool(pool?: RTSPAddressPool | null): void
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    set_buffer_size(size: number): void
    set_clock(clock?: Gst.Clock | null): void
    set_do_retransmission(do_retransmission: boolean): void
    set_dscp_qos(dscp_qos: number): void
    set_eos_shutdown(eos_shutdown: boolean): void
    set_latency(latency: number): void
    set_max_mcast_ttl(ttl: number): boolean
    set_multicast_iface(multicast_iface?: string | null): void
    set_permissions(permissions?: RTSPPermissions | null): void
    set_pipeline_state(state: Gst.State): void
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    set_rate_control(enabled: boolean): void
    set_retransmission_time(time: Gst.ClockTime): void
    set_reusable(reusable: boolean): void
    set_shared(shared: boolean): void
    set_state(state: Gst.State, transports: RTSPStreamTransport[]): boolean
    set_stop_on_disconnect(stop_on_disconnect: boolean): void
    set_suspend_mode(mode: RTSPSuspendMode): void
    set_transport_mode(mode: RTSPTransportMode): void
    setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    suspend(): boolean
    take_pipeline(pipeline: Gst.Pipeline): void
    unlock(): void
    unprepare(): boolean
    unsuspend(): boolean
    use_time_provider(time_provider: boolean): void
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
    /* Virtual methods of GstRtspServer.RTSPMedia */
    vfunc_convert_range(range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit): boolean
    vfunc_handle_message(message: Gst.Message): boolean
    vfunc_handle_sdp(sdp: GstSdp.SDPMessage): boolean
    vfunc_new_state(state: Gst.State): void
    vfunc_new_stream(stream: RTSPStream): void
    vfunc_prepare(thread?: RTSPThread | null): boolean
    vfunc_prepared(): void
    vfunc_query_position(position: number): boolean
    vfunc_query_stop(stop: number): boolean
    vfunc_removed_stream(stream: RTSPStream): void
    vfunc_setup_rtpbin(rtpbin: Gst.Element): boolean
    vfunc_setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    vfunc_suspend(): boolean
    vfunc_target_state(state: Gst.State): void
    vfunc_unprepare(): boolean
    vfunc_unprepared(): void
    vfunc_unsuspend(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPMedia */
    connect(sigName: "new-state", callback: (($obj: RTSPMedia, object: number) => void)): number
    connect_after(sigName: "new-state", callback: (($obj: RTSPMedia, object: number) => void)): number
    emit(sigName: "new-state", object: number): void
    connect(sigName: "new-stream", callback: (($obj: RTSPMedia, object: RTSPStream) => void)): number
    connect_after(sigName: "new-stream", callback: (($obj: RTSPMedia, object: RTSPStream) => void)): number
    emit(sigName: "new-stream", object: RTSPStream): void
    connect(sigName: "prepared", callback: (($obj: RTSPMedia) => void)): number
    connect_after(sigName: "prepared", callback: (($obj: RTSPMedia) => void)): number
    emit(sigName: "prepared"): void
    connect(sigName: "removed-stream", callback: (($obj: RTSPMedia, object: RTSPStream) => void)): number
    connect_after(sigName: "removed-stream", callback: (($obj: RTSPMedia, object: RTSPStream) => void)): number
    emit(sigName: "removed-stream", object: RTSPStream): void
    connect(sigName: "target-state", callback: (($obj: RTSPMedia, object: number) => void)): number
    connect_after(sigName: "target-state", callback: (($obj: RTSPMedia, object: number) => void)): number
    emit(sigName: "target-state", object: number): void
    connect(sigName: "unprepared", callback: (($obj: RTSPMedia) => void)): number
    connect_after(sigName: "unprepared", callback: (($obj: RTSPMedia) => void)): number
    emit(sigName: "unprepared"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reusable", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reusable", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-provider", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-provider", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPMedia_ConstructProps)
    _init (config?: RTSPMedia_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(element: Gst.Element): RTSPMedia
    static $gtype: GObject.Type
}
export interface RTSPMediaFactory_ConstructProps extends GObject.Object_ConstructProps {
    bind_mcast_address?: boolean
    buffer_size?: number
    clock?: Gst.Clock
    dscp_qos?: number
    enable_rtcp?: boolean
    eos_shutdown?: boolean
    latency?: number
    launch?: string
    max_mcast_ttl?: number
    profiles?: GstRtsp.RTSPProfile
    protocols?: GstRtsp.RTSPLowerTrans
    shared?: boolean
    stop_on_disconnect?: boolean
    suspend_mode?: RTSPSuspendMode
    transport_mode?: RTSPTransportMode
}
export class RTSPMediaFactory {
    /* Properties of GstRtspServer.RTSPMediaFactory */
    bind_mcast_address: boolean
    buffer_size: number
    clock: Gst.Clock
    dscp_qos: number
    enable_rtcp: boolean
    eos_shutdown: boolean
    latency: number
    launch: string
    max_mcast_ttl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    shared: boolean
    stop_on_disconnect: boolean
    suspend_mode: RTSPSuspendMode
    transport_mode: RTSPTransportMode
    /* Fields of GstRtspServer.RTSPMediaFactory */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPMediaFactory */
    add_role_from_structure(structure: Gst.Structure): void
    construct(url: GstRtsp.RTSPUrl): RTSPMedia
    create_element(url: GstRtsp.RTSPUrl): Gst.Element
    get_address_pool(): RTSPAddressPool | null
    get_buffer_size(): number
    get_clock(): Gst.Clock
    get_do_retransmission(): boolean
    get_dscp_qos(): number
    get_latency(): number
    get_launch(): string | null
    get_max_mcast_ttl(): number
    get_media_gtype(): GObject.Type
    get_multicast_iface(): string | null
    get_permissions(): RTSPPermissions | null
    get_profiles(): GstRtsp.RTSPProfile
    get_protocols(): GstRtsp.RTSPLowerTrans
    get_publish_clock_mode(): RTSPPublishClockMode
    get_retransmission_time(): Gst.ClockTime
    get_suspend_mode(): RTSPSuspendMode
    get_transport_mode(): RTSPTransportMode
    is_bind_mcast_address(): boolean
    is_enable_rtcp(): boolean
    is_eos_shutdown(): boolean
    is_shared(): boolean
    is_stop_on_disonnect(): boolean
    set_address_pool(pool?: RTSPAddressPool | null): void
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    set_buffer_size(size: number): void
    set_clock(clock?: Gst.Clock | null): void
    set_do_retransmission(do_retransmission: boolean): void
    set_dscp_qos(dscp_qos: number): void
    set_enable_rtcp(enable: boolean): void
    set_eos_shutdown(eos_shutdown: boolean): void
    set_latency(latency: number): void
    set_launch(launch: string): void
    set_max_mcast_ttl(ttl: number): boolean
    set_media_gtype(media_gtype: GObject.Type): void
    set_multicast_iface(multicast_iface?: string | null): void
    set_permissions(permissions?: RTSPPermissions | null): void
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    set_retransmission_time(time: Gst.ClockTime): void
    set_shared(shared: boolean): void
    set_stop_on_disconnect(stop_on_disconnect: boolean): void
    set_suspend_mode(mode: RTSPSuspendMode): void
    set_transport_mode(mode: RTSPTransportMode): void
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
    /* Virtual methods of GstRtspServer.RTSPMediaFactory */
    vfunc_configure(media: RTSPMedia): void
    vfunc_construct(url: GstRtsp.RTSPUrl): RTSPMedia
    vfunc_create_element(url: GstRtsp.RTSPUrl): Gst.Element
    vfunc_gen_key(url: GstRtsp.RTSPUrl): string
    vfunc_media_configure(media: RTSPMedia): void
    vfunc_media_constructed(media: RTSPMedia): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPMediaFactory */
    connect(sigName: "media-configure", callback: (($obj: RTSPMediaFactory, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-configure", callback: (($obj: RTSPMediaFactory, object: RTSPMedia) => void)): number
    emit(sigName: "media-configure", object: RTSPMedia): void
    connect(sigName: "media-constructed", callback: (($obj: RTSPMediaFactory, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-constructed", callback: (($obj: RTSPMediaFactory, object: RTSPMedia) => void)): number
    emit(sigName: "media-constructed", object: RTSPMedia): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::launch", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::launch", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPMediaFactory_ConstructProps)
    _init (config?: RTSPMediaFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPMediaFactory
    static $gtype: GObject.Type
}
export interface RTSPMediaFactoryURI_ConstructProps extends RTSPMediaFactory_ConstructProps {
    uri?: string
    use_gstpay?: boolean
}
export class RTSPMediaFactoryURI {
    /* Properties of GstRtspServer.RTSPMediaFactoryURI */
    uri: string
    use_gstpay: boolean
    /* Properties of GstRtspServer.RTSPMediaFactory */
    bind_mcast_address: boolean
    buffer_size: number
    clock: Gst.Clock
    dscp_qos: number
    enable_rtcp: boolean
    eos_shutdown: boolean
    latency: number
    launch: string
    max_mcast_ttl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    shared: boolean
    stop_on_disconnect: boolean
    suspend_mode: RTSPSuspendMode
    transport_mode: RTSPTransportMode
    /* Fields of GstRtspServer.RTSPMediaFactoryURI */
    parent: RTSPMediaFactory
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPMediaFactoryURI */
    get_uri(): string
    set_uri(uri: string): void
    /* Methods of GstRtspServer.RTSPMediaFactory */
    add_role_from_structure(structure: Gst.Structure): void
    construct(url: GstRtsp.RTSPUrl): RTSPMedia
    create_element(url: GstRtsp.RTSPUrl): Gst.Element
    get_address_pool(): RTSPAddressPool | null
    get_buffer_size(): number
    get_clock(): Gst.Clock
    get_do_retransmission(): boolean
    get_dscp_qos(): number
    get_latency(): number
    get_launch(): string | null
    get_max_mcast_ttl(): number
    get_media_gtype(): GObject.Type
    get_multicast_iface(): string | null
    get_permissions(): RTSPPermissions | null
    get_profiles(): GstRtsp.RTSPProfile
    get_protocols(): GstRtsp.RTSPLowerTrans
    get_publish_clock_mode(): RTSPPublishClockMode
    get_retransmission_time(): Gst.ClockTime
    get_suspend_mode(): RTSPSuspendMode
    get_transport_mode(): RTSPTransportMode
    is_bind_mcast_address(): boolean
    is_enable_rtcp(): boolean
    is_eos_shutdown(): boolean
    is_shared(): boolean
    is_stop_on_disonnect(): boolean
    set_address_pool(pool?: RTSPAddressPool | null): void
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    set_buffer_size(size: number): void
    set_clock(clock?: Gst.Clock | null): void
    set_do_retransmission(do_retransmission: boolean): void
    set_dscp_qos(dscp_qos: number): void
    set_enable_rtcp(enable: boolean): void
    set_eos_shutdown(eos_shutdown: boolean): void
    set_latency(latency: number): void
    set_launch(launch: string): void
    set_max_mcast_ttl(ttl: number): boolean
    set_media_gtype(media_gtype: GObject.Type): void
    set_multicast_iface(multicast_iface?: string | null): void
    set_permissions(permissions?: RTSPPermissions | null): void
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    set_retransmission_time(time: Gst.ClockTime): void
    set_shared(shared: boolean): void
    set_stop_on_disconnect(stop_on_disconnect: boolean): void
    set_suspend_mode(mode: RTSPSuspendMode): void
    set_transport_mode(mode: RTSPTransportMode): void
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
    /* Virtual methods of GstRtspServer.RTSPMediaFactory */
    vfunc_configure(media: RTSPMedia): void
    vfunc_construct(url: GstRtsp.RTSPUrl): RTSPMedia
    vfunc_create_element(url: GstRtsp.RTSPUrl): Gst.Element
    vfunc_gen_key(url: GstRtsp.RTSPUrl): string
    vfunc_media_configure(media: RTSPMedia): void
    vfunc_media_constructed(media: RTSPMedia): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPMediaFactory */
    connect(sigName: "media-configure", callback: (($obj: RTSPMediaFactoryURI, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-configure", callback: (($obj: RTSPMediaFactoryURI, object: RTSPMedia) => void)): number
    emit(sigName: "media-configure", object: RTSPMedia): void
    connect(sigName: "media-constructed", callback: (($obj: RTSPMediaFactoryURI, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-constructed", callback: (($obj: RTSPMediaFactoryURI, object: RTSPMedia) => void)): number
    emit(sigName: "media-constructed", object: RTSPMedia): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-gstpay", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gstpay", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::launch", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::launch", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Fields of GstRtspServer.RTSPMountPoints */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPMountPoints */
    add_factory(path: string, factory: RTSPMediaFactory): void
    make_path(url: GstRtsp.RTSPUrl): string | null
    match(path: string): [ /* returnType */ RTSPMediaFactory, /* matched */ number | null ]
    remove_factory(path: string): void
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
    /* Virtual methods of GstRtspServer.RTSPMountPoints */
    vfunc_make_path(url: GstRtsp.RTSPUrl): string | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPMountPoints, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPMountPoints, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GstRtspServer.RTSPClient */
    drop_backlog: boolean
    mount_points: RTSPMountPoints
    post_session_timeout: number
    session_pool: RTSPSessionPool
    /* Fields of GstRtspServer.RTSPOnvifClient */
    parent: RTSPClient
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPClient */
    attach(context?: GLib.MainContext | null): number
    close(): void
    get_auth(): RTSPAuth | null
    get_connection(): GstRtsp.RTSPConnection | null
    get_content_length_limit(): number
    get_mount_points(): RTSPMountPoints | null
    get_session_pool(): RTSPSessionPool | null
    get_stream_transport(channel: number): RTSPStreamTransport | null
    get_thread_pool(): RTSPThreadPool | null
    handle_message(message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    send_message(session: RTSPSession | null, message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    session_filter(func?: RTSPClientSessionFilterFunc | null): RTSPSession[]
    set_auth(auth?: RTSPAuth | null): void
    set_connection(conn: GstRtsp.RTSPConnection): boolean
    set_content_length_limit(limit: number): void
    set_mount_points(mounts?: RTSPMountPoints | null): void
    set_send_func(func: RTSPClientSendFunc): void
    set_send_messages_func(func: RTSPClientSendMessagesFunc): void
    set_session_pool(pool?: RTSPSessionPool | null): void
    set_thread_pool(pool?: RTSPThreadPool | null): void
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
    /* Virtual methods of GstRtspServer.RTSPClient */
    vfunc_adjust_play_mode(context: RTSPContext, range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmode_interval: Gst.ClockTime, enable_rate_control: boolean): GstRtsp.RTSPStatusCode
    vfunc_adjust_play_response(context: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_announce_request(ctx: RTSPContext): void
    vfunc_check_requirements(ctx: RTSPContext, arr: string): string
    vfunc_closed(): void
    vfunc_configure_client_media(media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext): boolean
    vfunc_configure_client_transport(ctx: RTSPContext, ct: GstRtsp.RTSPTransport): boolean
    vfunc_create_sdp(media: RTSPMedia): GstSdp.SDPMessage
    vfunc_describe_request(ctx: RTSPContext): void
    vfunc_get_parameter_request(ctx: RTSPContext): void
    vfunc_handle_response(ctx: RTSPContext): void
    vfunc_handle_sdp(ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage): boolean
    vfunc_make_path_from_uri(uri: GstRtsp.RTSPUrl): string
    vfunc_new_session(session: RTSPSession): void
    vfunc_options_request(ctx: RTSPContext): void
    vfunc_params_get(ctx: RTSPContext): GstRtsp.RTSPResult
    vfunc_params_set(ctx: RTSPContext): GstRtsp.RTSPResult
    vfunc_pause_request(ctx: RTSPContext): void
    vfunc_play_request(ctx: RTSPContext): void
    vfunc_pre_announce_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_describe_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_get_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_options_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_pause_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_play_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_record_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_set_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_setup_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_teardown_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_record_request(ctx: RTSPContext): void
    vfunc_send_message(ctx: RTSPContext, response: GstRtsp.RTSPMessage): void
    vfunc_set_parameter_request(ctx: RTSPContext): void
    vfunc_setup_request(ctx: RTSPContext): void
    vfunc_teardown_request(ctx: RTSPContext): void
    vfunc_tunnel_http_response(request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPClient */
    connect(sigName: "announce-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "announce-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "announce-request", ctx: RTSPContext): void
    connect(sigName: "check-requirements", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext, arr: string[]) => string)): number
    connect_after(sigName: "check-requirements", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext, arr: string[]) => string)): number
    emit(sigName: "check-requirements", ctx: RTSPContext, arr: string[]): void
    connect(sigName: "closed", callback: (($obj: RTSPOnvifClient) => void)): number
    connect_after(sigName: "closed", callback: (($obj: RTSPOnvifClient) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "describe-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "describe-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "describe-request", ctx: RTSPContext): void
    connect(sigName: "get-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "get-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "handle-response", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "handle-response", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "handle-response", ctx: RTSPContext): void
    connect(sigName: "new-session", callback: (($obj: RTSPOnvifClient, object: RTSPSession) => void)): number
    connect_after(sigName: "new-session", callback: (($obj: RTSPOnvifClient, object: RTSPSession) => void)): number
    emit(sigName: "new-session", object: RTSPSession): void
    connect(sigName: "options-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "options-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "options-request", ctx: RTSPContext): void
    connect(sigName: "pause-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "pause-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "pause-request", ctx: RTSPContext): void
    connect(sigName: "play-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "play-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "play-request", ctx: RTSPContext): void
    connect(sigName: "pre-announce-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-announce-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-announce-request", ctx: RTSPContext): void
    connect(sigName: "pre-describe-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-describe-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-describe-request", ctx: RTSPContext): void
    connect(sigName: "pre-get-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-get-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-options-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-options-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-options-request", ctx: RTSPContext): void
    connect(sigName: "pre-pause-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-pause-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-pause-request", ctx: RTSPContext): void
    connect(sigName: "pre-play-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-play-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-play-request", ctx: RTSPContext): void
    connect(sigName: "pre-record-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-record-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-record-request", ctx: RTSPContext): void
    connect(sigName: "pre-set-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-set-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-setup-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-setup-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-setup-request", ctx: RTSPContext): void
    connect(sigName: "pre-teardown-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-teardown-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-teardown-request", ctx: RTSPContext): void
    connect(sigName: "record-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "record-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "record-request", ctx: RTSPContext): void
    connect(sigName: "send-message", callback: (($obj: RTSPOnvifClient, session: RTSPSession, message: GstRtsp.RTSPMessage) => void)): number
    connect_after(sigName: "send-message", callback: (($obj: RTSPOnvifClient, session: RTSPSession, message: GstRtsp.RTSPMessage) => void)): number
    emit(sigName: "send-message", session: RTSPSession, message: GstRtsp.RTSPMessage): void
    connect(sigName: "set-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "set-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "setup-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "setup-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "setup-request", ctx: RTSPContext): void
    connect(sigName: "teardown-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "teardown-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "teardown-request", ctx: RTSPContext): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::drop-backlog", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drop-backlog", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::post-session-timeout", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::post-session-timeout", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GstRtspServer.RTSPMedia */
    bind_mcast_address: boolean
    buffer_size: number
    clock: Gst.Clock
    dscp_qos: number
    eos_shutdown: boolean
    latency: number
    max_mcast_ttl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    reusable: boolean
    shared: boolean
    stop_on_disconnect: boolean
    suspend_mode: RTSPSuspendMode
    time_provider: boolean
    transport_mode: RTSPTransportMode
    /* Fields of GstRtspServer.RTSPOnvifMedia */
    parent: RTSPMedia
    priv: RTSPOnvifMediaPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPOnvifMedia */
    collect_backchannel(): boolean
    get_backchannel_bandwidth(): number
    set_backchannel_bandwidth(bandwidth: number): void
    /* Methods of GstRtspServer.RTSPMedia */
    collect_streams(): void
    complete_pipeline(transports: GstRtsp.RTSPTransport[]): boolean
    create_stream(payloader: Gst.Element, pad: Gst.Pad): RTSPStream
    find_stream(control: string): RTSPStream | null
    get_address_pool(): RTSPAddressPool | null
    get_base_time(): Gst.ClockTime
    get_buffer_size(): number
    get_clock(): Gst.Clock | null
    get_do_retransmission(): boolean
    get_dscp_qos(): number
    get_element(): Gst.Element
    get_latency(): number
    get_max_mcast_ttl(): number
    get_multicast_iface(): string | null
    get_permissions(): RTSPPermissions | null
    get_profiles(): GstRtsp.RTSPProfile
    get_protocols(): GstRtsp.RTSPLowerTrans
    get_publish_clock_mode(): RTSPPublishClockMode
    get_range_string(play: boolean, unit: GstRtsp.RTSPRangeUnit): string | null
    get_rate_control(): boolean
    get_rates(): [ /* returnType */ boolean, /* rate */ number | null, /* applied_rate */ number | null ]
    get_retransmission_time(): Gst.ClockTime
    get_status(): RTSPMediaStatus
    get_stream(idx: number): RTSPStream | null
    get_suspend_mode(): RTSPSuspendMode
    get_time_provider(address: string | null, port: number): GstNet.NetTimeProvider
    get_transport_mode(): RTSPTransportMode
    handle_sdp(sdp: GstSdp.SDPMessage): boolean
    has_completed_sender(): boolean
    is_bind_mcast_address(): boolean
    is_eos_shutdown(): boolean
    is_receive_only(): boolean
    is_reusable(): boolean
    is_shared(): boolean
    is_stop_on_disconnect(): boolean
    is_time_provider(): boolean
    lock(): void
    n_streams(): number
    prepare(thread?: RTSPThread | null): boolean
    seek(range: GstRtsp.RTSPTimeRange): boolean
    seek_full(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags): boolean
    seek_trickmode(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmode_interval: Gst.ClockTime): boolean
    seekable(): Gst.ClockTimeDiff
    set_address_pool(pool?: RTSPAddressPool | null): void
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    set_buffer_size(size: number): void
    set_clock(clock?: Gst.Clock | null): void
    set_do_retransmission(do_retransmission: boolean): void
    set_dscp_qos(dscp_qos: number): void
    set_eos_shutdown(eos_shutdown: boolean): void
    set_latency(latency: number): void
    set_max_mcast_ttl(ttl: number): boolean
    set_multicast_iface(multicast_iface?: string | null): void
    set_permissions(permissions?: RTSPPermissions | null): void
    set_pipeline_state(state: Gst.State): void
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    set_rate_control(enabled: boolean): void
    set_retransmission_time(time: Gst.ClockTime): void
    set_reusable(reusable: boolean): void
    set_shared(shared: boolean): void
    set_state(state: Gst.State, transports: RTSPStreamTransport[]): boolean
    set_stop_on_disconnect(stop_on_disconnect: boolean): void
    set_suspend_mode(mode: RTSPSuspendMode): void
    set_transport_mode(mode: RTSPTransportMode): void
    setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    suspend(): boolean
    take_pipeline(pipeline: Gst.Pipeline): void
    unlock(): void
    unprepare(): boolean
    unsuspend(): boolean
    use_time_provider(time_provider: boolean): void
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
    /* Virtual methods of GstRtspServer.RTSPMedia */
    vfunc_convert_range(range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit): boolean
    vfunc_handle_message(message: Gst.Message): boolean
    vfunc_handle_sdp(sdp: GstSdp.SDPMessage): boolean
    vfunc_new_state(state: Gst.State): void
    vfunc_new_stream(stream: RTSPStream): void
    vfunc_prepare(thread?: RTSPThread | null): boolean
    vfunc_prepared(): void
    vfunc_query_position(position: number): boolean
    vfunc_query_stop(stop: number): boolean
    vfunc_removed_stream(stream: RTSPStream): void
    vfunc_setup_rtpbin(rtpbin: Gst.Element): boolean
    vfunc_setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    vfunc_suspend(): boolean
    vfunc_target_state(state: Gst.State): void
    vfunc_unprepare(): boolean
    vfunc_unprepared(): void
    vfunc_unsuspend(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPMedia */
    connect(sigName: "new-state", callback: (($obj: RTSPOnvifMedia, object: number) => void)): number
    connect_after(sigName: "new-state", callback: (($obj: RTSPOnvifMedia, object: number) => void)): number
    emit(sigName: "new-state", object: number): void
    connect(sigName: "new-stream", callback: (($obj: RTSPOnvifMedia, object: RTSPStream) => void)): number
    connect_after(sigName: "new-stream", callback: (($obj: RTSPOnvifMedia, object: RTSPStream) => void)): number
    emit(sigName: "new-stream", object: RTSPStream): void
    connect(sigName: "prepared", callback: (($obj: RTSPOnvifMedia) => void)): number
    connect_after(sigName: "prepared", callback: (($obj: RTSPOnvifMedia) => void)): number
    emit(sigName: "prepared"): void
    connect(sigName: "removed-stream", callback: (($obj: RTSPOnvifMedia, object: RTSPStream) => void)): number
    connect_after(sigName: "removed-stream", callback: (($obj: RTSPOnvifMedia, object: RTSPStream) => void)): number
    emit(sigName: "removed-stream", object: RTSPStream): void
    connect(sigName: "target-state", callback: (($obj: RTSPOnvifMedia, object: number) => void)): number
    connect_after(sigName: "target-state", callback: (($obj: RTSPOnvifMedia, object: number) => void)): number
    emit(sigName: "target-state", object: number): void
    connect(sigName: "unprepared", callback: (($obj: RTSPOnvifMedia) => void)): number
    connect_after(sigName: "unprepared", callback: (($obj: RTSPOnvifMedia) => void)): number
    emit(sigName: "unprepared"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reusable", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reusable", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-provider", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-provider", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPOnvifMedia_ConstructProps)
    _init (config?: RTSPOnvifMedia_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RTSPOnvifMediaFactory_ConstructProps extends RTSPMediaFactory_ConstructProps {
}
export class RTSPOnvifMediaFactory {
    /* Properties of GstRtspServer.RTSPMediaFactory */
    bind_mcast_address: boolean
    buffer_size: number
    clock: Gst.Clock
    dscp_qos: number
    enable_rtcp: boolean
    eos_shutdown: boolean
    latency: number
    launch: string
    max_mcast_ttl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    shared: boolean
    stop_on_disconnect: boolean
    suspend_mode: RTSPSuspendMode
    transport_mode: RTSPTransportMode
    /* Fields of GstRtspServer.RTSPOnvifMediaFactory */
    parent: RTSPMediaFactory
    priv: RTSPOnvifMediaFactoryPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPOnvifMediaFactory */
    get_backchannel_bandwidth(): number
    get_backchannel_launch(): string
    has_backchannel_support(): boolean
    has_replay_support(): boolean
    set_backchannel_bandwidth(bandwidth: number): void
    set_backchannel_launch(launch: string): void
    set_replay_support(has_replay_support: boolean): void
    /* Methods of GstRtspServer.RTSPMediaFactory */
    add_role_from_structure(structure: Gst.Structure): void
    construct(url: GstRtsp.RTSPUrl): RTSPMedia
    create_element(url: GstRtsp.RTSPUrl): Gst.Element
    get_address_pool(): RTSPAddressPool | null
    get_buffer_size(): number
    get_clock(): Gst.Clock
    get_do_retransmission(): boolean
    get_dscp_qos(): number
    get_latency(): number
    get_launch(): string | null
    get_max_mcast_ttl(): number
    get_media_gtype(): GObject.Type
    get_multicast_iface(): string | null
    get_permissions(): RTSPPermissions | null
    get_profiles(): GstRtsp.RTSPProfile
    get_protocols(): GstRtsp.RTSPLowerTrans
    get_publish_clock_mode(): RTSPPublishClockMode
    get_retransmission_time(): Gst.ClockTime
    get_suspend_mode(): RTSPSuspendMode
    get_transport_mode(): RTSPTransportMode
    is_bind_mcast_address(): boolean
    is_enable_rtcp(): boolean
    is_eos_shutdown(): boolean
    is_shared(): boolean
    is_stop_on_disonnect(): boolean
    set_address_pool(pool?: RTSPAddressPool | null): void
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    set_buffer_size(size: number): void
    set_clock(clock?: Gst.Clock | null): void
    set_do_retransmission(do_retransmission: boolean): void
    set_dscp_qos(dscp_qos: number): void
    set_enable_rtcp(enable: boolean): void
    set_eos_shutdown(eos_shutdown: boolean): void
    set_latency(latency: number): void
    set_launch(launch: string): void
    set_max_mcast_ttl(ttl: number): boolean
    set_media_gtype(media_gtype: GObject.Type): void
    set_multicast_iface(multicast_iface?: string | null): void
    set_permissions(permissions?: RTSPPermissions | null): void
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    set_retransmission_time(time: Gst.ClockTime): void
    set_shared(shared: boolean): void
    set_stop_on_disconnect(stop_on_disconnect: boolean): void
    set_suspend_mode(mode: RTSPSuspendMode): void
    set_transport_mode(mode: RTSPTransportMode): void
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
    /* Virtual methods of GstRtspServer.RTSPOnvifMediaFactory */
    vfunc_has_backchannel_support(): boolean
    /* Virtual methods of GstRtspServer.RTSPMediaFactory */
    vfunc_configure(media: RTSPMedia): void
    vfunc_construct(url: GstRtsp.RTSPUrl): RTSPMedia
    vfunc_create_element(url: GstRtsp.RTSPUrl): Gst.Element
    vfunc_gen_key(url: GstRtsp.RTSPUrl): string
    vfunc_media_configure(media: RTSPMedia): void
    vfunc_media_constructed(media: RTSPMedia): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPMediaFactory */
    connect(sigName: "media-configure", callback: (($obj: RTSPOnvifMediaFactory, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-configure", callback: (($obj: RTSPOnvifMediaFactory, object: RTSPMedia) => void)): number
    emit(sigName: "media-configure", object: RTSPMedia): void
    connect(sigName: "media-constructed", callback: (($obj: RTSPOnvifMediaFactory, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-constructed", callback: (($obj: RTSPOnvifMediaFactory, object: RTSPMedia) => void)): number
    emit(sigName: "media-constructed", object: RTSPMedia): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-rtcp", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-rtcp", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::launch", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::launch", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPOnvifMediaFactory_ConstructProps)
    _init (config?: RTSPOnvifMediaFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPOnvifMediaFactory
    static requires_backchannel(factory: RTSPMediaFactory, ctx: RTSPContext): boolean
    static $gtype: GObject.Type
}
export interface RTSPOnvifServer_ConstructProps extends RTSPServer_ConstructProps {
}
export class RTSPOnvifServer {
    /* Properties of GstRtspServer.RTSPServer */
    address: string
    backlog: number
    readonly bound_port: number
    content_length_limit: number
    mount_points: RTSPMountPoints
    service: string
    session_pool: RTSPSessionPool
    /* Fields of GstRtspServer.RTSPOnvifServer */
    parent: RTSPServer
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPServer */
    attach(context?: GLib.MainContext | null): number
    client_filter(func?: RTSPServerClientFilterFunc | null): RTSPClient[]
    create_socket(cancellable?: Gio.Cancellable | null): Gio.Socket
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    get_address(): string | null
    get_auth(): RTSPAuth | null
    get_backlog(): number
    get_bound_port(): number
    get_content_length_limit(): number
    get_mount_points(): RTSPMountPoints | null
    get_service(): string | null
    get_session_pool(): RTSPSessionPool | null
    get_thread_pool(): RTSPThreadPool | null
    set_address(address: string): void
    set_auth(auth?: RTSPAuth | null): void
    set_backlog(backlog: number): void
    set_content_length_limit(limit: number): void
    set_mount_points(mounts?: RTSPMountPoints | null): void
    set_service(service: string): void
    set_session_pool(pool?: RTSPSessionPool | null): void
    set_thread_pool(pool?: RTSPThreadPool | null): void
    transfer_connection(socket: Gio.Socket, ip: string, port: number, initial_buffer?: string | null): boolean
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
    /* Virtual methods of GstRtspServer.RTSPServer */
    vfunc_client_connected(client: RTSPClient): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPServer */
    connect(sigName: "client-connected", callback: (($obj: RTSPOnvifServer, object: RTSPClient) => void)): number
    connect_after(sigName: "client-connected", callback: (($obj: RTSPOnvifServer, object: RTSPClient) => void)): number
    emit(sigName: "client-connected", object: RTSPClient): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backlog", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backlog", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bound-port", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bound-port", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-length-limit", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length-limit", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    content_length_limit?: number
    mount_points?: RTSPMountPoints
    service?: string
    session_pool?: RTSPSessionPool
}
export class RTSPServer {
    /* Properties of GstRtspServer.RTSPServer */
    address: string
    backlog: number
    readonly bound_port: number
    content_length_limit: number
    mount_points: RTSPMountPoints
    service: string
    session_pool: RTSPSessionPool
    /* Fields of GstRtspServer.RTSPServer */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPServer */
    attach(context?: GLib.MainContext | null): number
    client_filter(func?: RTSPServerClientFilterFunc | null): RTSPClient[]
    create_socket(cancellable?: Gio.Cancellable | null): Gio.Socket
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    get_address(): string | null
    get_auth(): RTSPAuth | null
    get_backlog(): number
    get_bound_port(): number
    get_content_length_limit(): number
    get_mount_points(): RTSPMountPoints | null
    get_service(): string | null
    get_session_pool(): RTSPSessionPool | null
    get_thread_pool(): RTSPThreadPool | null
    set_address(address: string): void
    set_auth(auth?: RTSPAuth | null): void
    set_backlog(backlog: number): void
    set_content_length_limit(limit: number): void
    set_mount_points(mounts?: RTSPMountPoints | null): void
    set_service(service: string): void
    set_session_pool(pool?: RTSPSessionPool | null): void
    set_thread_pool(pool?: RTSPThreadPool | null): void
    transfer_connection(socket: Gio.Socket, ip: string, port: number, initial_buffer?: string | null): boolean
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
    /* Virtual methods of GstRtspServer.RTSPServer */
    vfunc_client_connected(client: RTSPClient): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPServer */
    connect(sigName: "client-connected", callback: (($obj: RTSPServer, object: RTSPClient) => void)): number
    connect_after(sigName: "client-connected", callback: (($obj: RTSPServer, object: RTSPClient) => void)): number
    emit(sigName: "client-connected", object: RTSPClient): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backlog", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backlog", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bound-port", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bound-port", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-length-limit", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length-limit", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPServer_ConstructProps)
    _init (config?: RTSPServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPServer
    static io_func(socket: Gio.Socket, condition: GLib.IOCondition, server: RTSPServer): boolean
    static $gtype: GObject.Type
}
export interface RTSPSession_ConstructProps extends GObject.Object_ConstructProps {
    extra_timeout?: number
    sessionid?: string
    timeout?: number
    timeout_always_visible?: boolean
}
export class RTSPSession {
    /* Properties of GstRtspServer.RTSPSession */
    extra_timeout: number
    timeout: number
    timeout_always_visible: boolean
    /* Fields of GstRtspServer.RTSPSession */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPSession */
    allow_expire(): void
    filter(func?: RTSPSessionFilterFunc | null): RTSPSessionMedia[]
    get_header(): string | null
    get_media(path: string): [ /* returnType */ RTSPSessionMedia | null, /* matched */ number ]
    get_sessionid(): string | null
    get_timeout(): number
    is_expired(now: GLib.TimeVal): boolean
    is_expired_usec(now: number): boolean
    manage_media(path: string, media: RTSPMedia): RTSPSessionMedia
    next_timeout(now: GLib.TimeVal): number
    next_timeout_usec(now: number): number
    prevent_expire(): void
    release_media(media: RTSPSessionMedia): boolean
    set_timeout(timeout: number): void
    touch(): void
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
    connect(sigName: "notify", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::extra-timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout-always-visible", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout-always-visible", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Fields of GstRtspServer.RTSPSessionMedia */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPSessionMedia */
    alloc_channels(): [ /* returnType */ boolean, /* range */ GstRtsp.RTSPRange ]
    get_base_time(): Gst.ClockTime
    get_media(): RTSPMedia | null
    get_rtpinfo(): string | null
    get_rtsp_state(): GstRtsp.RTSPState
    get_transport(idx: number): RTSPStreamTransport | null
    get_transports(): RTSPStreamTransport[]
    matches(path: string): [ /* returnType */ boolean, /* matched */ number ]
    set_rtsp_state(state: GstRtsp.RTSPState): void
    set_state(state: Gst.State): boolean
    set_transport(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport
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
    connect(sigName: "notify", callback: (($obj: RTSPSessionMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPSessionMedia, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPSessionMedia_ConstructProps)
    _init (config?: RTSPSessionMedia_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, media: RTSPMedia): RTSPSessionMedia
    static $gtype: GObject.Type
}
export interface RTSPSessionPool_ConstructProps extends GObject.Object_ConstructProps {
    max_sessions?: number
}
export class RTSPSessionPool {
    /* Properties of GstRtspServer.RTSPSessionPool */
    max_sessions: number
    /* Fields of GstRtspServer.RTSPSessionPool */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPSessionPool */
    cleanup(): number
    create(): RTSPSession | null
    create_watch(): GLib.Source
    filter(func?: RTSPSessionPoolFilterFunc | null): RTSPSession[]
    find(sessionid: string): RTSPSession | null
    get_max_sessions(): number
    get_n_sessions(): number
    remove(sess: RTSPSession): boolean
    set_max_sessions(max: number): void
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
    /* Virtual methods of GstRtspServer.RTSPSessionPool */
    vfunc_create_session_id(): string
    vfunc_session_removed(session: RTSPSession): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstRtspServer.RTSPSessionPool */
    connect(sigName: "session-removed", callback: (($obj: RTSPSessionPool, object: RTSPSession) => void)): number
    connect_after(sigName: "session-removed", callback: (($obj: RTSPSessionPool, object: RTSPSession) => void)): number
    emit(sigName: "session-removed", object: RTSPSession): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-sessions", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-sessions", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GstRtspServer.RTSPStream */
    control: string
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    /* Fields of GstRtspServer.RTSPStream */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPStream */
    add_multicast_client_address(destination: string, rtp_port: number, rtcp_port: number, family: Gio.SocketFamily): boolean
    add_transport(trans: RTSPStreamTransport): boolean
    allocate_udp_sockets(family: Gio.SocketFamily, transport: GstRtsp.RTSPTransport, use_client_settings: boolean): boolean
    complete_stream(transport: GstRtsp.RTSPTransport): boolean
    get_address_pool(): RTSPAddressPool | null
    get_buffer_size(): number
    get_caps(): Gst.Caps | null
    get_control(): string | null
    get_current_seqnum(): number
    get_dscp_qos(): number
    get_index(): number
    get_joined_bin(): Gst.Bin | null
    get_max_mcast_ttl(): number
    get_mtu(): number
    get_multicast_address(family: Gio.SocketFamily): RTSPAddress | null
    get_multicast_client_addresses(): string
    get_multicast_iface(): string | null
    get_profiles(): GstRtsp.RTSPProfile
    get_protocols(): GstRtsp.RTSPLowerTrans
    get_pt(): number
    get_publish_clock_mode(): RTSPPublishClockMode
    get_rate_control(): boolean
    get_rates(): [ /* returnType */ boolean, /* rate */ number | null, /* applied_rate */ number | null ]
    get_retransmission_pt(): number
    get_retransmission_time(): Gst.ClockTime
    get_rtcp_multicast_socket(family: Gio.SocketFamily): Gio.Socket | null
    get_rtcp_socket(family: Gio.SocketFamily): Gio.Socket | null
    get_rtp_multicast_socket(family: Gio.SocketFamily): Gio.Socket | null
    get_rtp_socket(family: Gio.SocketFamily): Gio.Socket | null
    get_rtpinfo(): [ /* returnType */ boolean, /* rtptime */ number | null, /* seq */ number | null, /* clock_rate */ number | null, /* running_time */ Gst.ClockTime ]
    get_rtpsession(): GObject.Object
    get_server_port(family: Gio.SocketFamily): /* server_port */ GstRtsp.RTSPRange
    get_sinkpad(): Gst.Pad | null
    get_srcpad(): Gst.Pad | null
    get_srtp_encoder(): Gst.Element
    get_ssrc(): /* ssrc */ number
    get_ulpfec_enabled(): boolean
    get_ulpfec_percentage(): number
    get_ulpfec_pt(): number
    handle_keymgmt(keymgmt: string): boolean
    has_control(control?: string | null): boolean
    is_bind_mcast_address(): boolean
    is_blocking(): boolean
    is_client_side(): boolean
    is_complete(): boolean
    is_receiver(): boolean
    is_sender(): boolean
    is_transport_supported(transport: GstRtsp.RTSPTransport): boolean
    join_bin(bin: Gst.Bin, rtpbin: Gst.Element, state: Gst.State): boolean
    leave_bin(bin: Gst.Bin, rtpbin: Gst.Element): boolean
    query_position(): [ /* returnType */ boolean, /* position */ number ]
    query_stop(): [ /* returnType */ boolean, /* stop */ number ]
    recv_rtcp(buffer: Gst.Buffer): Gst.FlowReturn
    recv_rtp(buffer: Gst.Buffer): Gst.FlowReturn
    remove_transport(trans: RTSPStreamTransport): boolean
    request_aux_receiver(sessid: number): Gst.Element | null
    request_aux_sender(sessid: number): Gst.Element | null
    request_ulpfec_decoder(rtpbin: Gst.Element, sessid: number): Gst.Element | null
    request_ulpfec_encoder(sessid: number): Gst.Element | null
    reserve_address(address: string, port: number, n_ports: number, ttl: number): RTSPAddress | null
    seekable(): boolean
    set_address_pool(pool?: RTSPAddressPool | null): void
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    set_blocked(blocked: boolean): boolean
    set_buffer_size(size: number): void
    set_client_side(client_side: boolean): void
    set_control(control?: string | null): void
    set_dscp_qos(dscp_qos: number): void
    set_max_mcast_ttl(ttl: number): boolean
    set_mtu(mtu: number): void
    set_multicast_iface(multicast_iface?: string | null): void
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    set_pt_map(pt: number, caps: Gst.Caps): void
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    set_rate_control(enabled: boolean): void
    set_retransmission_pt(rtx_pt: number): void
    set_retransmission_time(time: Gst.ClockTime): void
    set_seqnum_offset(seqnum: number): void
    set_ulpfec_percentage(percentage: number): void
    set_ulpfec_pt(pt: number): void
    transport_filter(func?: RTSPStreamTransportFilterFunc | null): RTSPStreamTransport[]
    unblock_linked(): boolean
    update_crypto(ssrc: number, crypto?: Gst.Caps | null): boolean
    verify_mcast_ttl(ttl: number): boolean
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
    /* Signals of GstRtspServer.RTSPStream */
    connect(sigName: "new-rtcp-encoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    connect_after(sigName: "new-rtcp-encoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    emit(sigName: "new-rtcp-encoder", object: Gst.Element): void
    connect(sigName: "new-rtp-encoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    connect_after(sigName: "new-rtp-encoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    emit(sigName: "new-rtp-encoder", object: Gst.Element): void
    connect(sigName: "new-rtp-rtcp-decoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    connect_after(sigName: "new-rtp-rtcp-decoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    emit(sigName: "new-rtp-rtcp-decoder", object: Gst.Element): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::control", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Fields of GstRtspServer.RTSPStreamTransport */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPStreamTransport */
    get_rtpinfo(start_time: Gst.ClockTime): string | null
    get_stream(): RTSPStream | null
    get_transport(): GstRtsp.RTSPTransport | null
    get_url(): GstRtsp.RTSPUrl | null
    is_timed_out(): boolean
    keep_alive(): void
    message_sent(): void
    recv_data(channel: number, buffer: Gst.Buffer): Gst.FlowReturn
    send_rtcp(buffer: Gst.Buffer): boolean
    send_rtcp_list(buffer_list: Gst.BufferList): boolean
    send_rtp(buffer: Gst.Buffer): boolean
    send_rtp_list(buffer_list: Gst.BufferList): boolean
    set_active(active: boolean): boolean
    set_callbacks(send_rtp: RTSPSendFunc, send_rtcp: RTSPSendFunc): void
    set_keepalive(keep_alive: RTSPKeepAliveFunc): void
    set_list_callbacks(send_rtp_list: RTSPSendListFunc, send_rtcp_list: RTSPSendListFunc): void
    set_message_sent(message_sent: RTSPMessageSentFunc): void
    set_message_sent_full(message_sent: RTSPMessageSentFuncFull): void
    set_timed_out(timedout: boolean): void
    set_transport(tr: GstRtsp.RTSPTransport): void
    set_url(url?: GstRtsp.RTSPUrl | null): void
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
    connect(sigName: "notify", callback: (($obj: RTSPStreamTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPStreamTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPStreamTransport_ConstructProps)
    _init (config?: RTSPStreamTransport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport
    static $gtype: GObject.Type
}
export interface RTSPThreadPool_ConstructProps extends GObject.Object_ConstructProps {
    max_threads?: number
}
export class RTSPThreadPool {
    /* Properties of GstRtspServer.RTSPThreadPool */
    max_threads: number
    /* Fields of GstRtspServer.RTSPThreadPool */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer.RTSPThreadPool */
    get_max_threads(): number
    get_thread(type: RTSPThreadType, ctx: RTSPContext): RTSPThread | null
    set_max_threads(max_threads: number): void
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
    /* Virtual methods of GstRtspServer.RTSPThreadPool */
    vfunc_configure_thread(thread: RTSPThread, ctx: RTSPContext): void
    vfunc_get_thread(type: RTSPThreadType, ctx: RTSPContext): RTSPThread | null
    vfunc_thread_enter(thread: RTSPThread): void
    vfunc_thread_leave(thread: RTSPThread): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-threads", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-threads", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPThreadPool_ConstructProps)
    _init (config?: RTSPThreadPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPThreadPool
    static cleanup(): void
    static $gtype: GObject.Type
}
export class RTSPAddress {
    /* Fields of GstRtspServer.RTSPAddress */
    pool: RTSPAddressPool
    address: string
    port: number
    n_ports: number
    ttl: number
    /* Methods of GstRtspServer.RTSPAddress */
    copy(): RTSPAddress
    free(): void
    static name: string
}
export abstract class RTSPAddressPoolClass {
    /* Fields of GstRtspServer.RTSPAddressPoolClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RTSPAddressPoolPrivate {
    static name: string
}
export abstract class RTSPAuthClass {
    /* Fields of GstRtspServer.RTSPAuthClass */
    parent_class: GObject.ObjectClass
    authenticate: (auth: RTSPAuth, ctx: RTSPContext) => boolean
    check: (auth: RTSPAuth, ctx: RTSPContext, check: string) => boolean
    generate_authenticate_header: (auth: RTSPAuth, ctx: RTSPContext) => void
    accept_certificate: (auth: RTSPAuth, connection: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean
    static name: string
}
export class RTSPAuthPrivate {
    static name: string
}
export abstract class RTSPClientClass {
    /* Fields of GstRtspServer.RTSPClientClass */
    parent_class: GObject.ObjectClass
    create_sdp: (client: RTSPClient, media: RTSPMedia) => GstSdp.SDPMessage
    configure_client_media: (client: RTSPClient, media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext) => boolean
    configure_client_transport: (client: RTSPClient, ctx: RTSPContext, ct: GstRtsp.RTSPTransport) => boolean
    params_set: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPResult
    params_get: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPResult
    make_path_from_uri: (client: RTSPClient, uri: GstRtsp.RTSPUrl) => string
    adjust_play_mode: (client: RTSPClient, context: RTSPContext, range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmode_interval: Gst.ClockTime, enable_rate_control: boolean) => GstRtsp.RTSPStatusCode
    adjust_play_response: (client: RTSPClient, context: RTSPContext) => GstRtsp.RTSPStatusCode
    closed: (client: RTSPClient) => void
    new_session: (client: RTSPClient, session: RTSPSession) => void
    options_request: (client: RTSPClient, ctx: RTSPContext) => void
    describe_request: (client: RTSPClient, ctx: RTSPContext) => void
    setup_request: (client: RTSPClient, ctx: RTSPContext) => void
    play_request: (client: RTSPClient, ctx: RTSPContext) => void
    pause_request: (client: RTSPClient, ctx: RTSPContext) => void
    teardown_request: (client: RTSPClient, ctx: RTSPContext) => void
    set_parameter_request: (client: RTSPClient, ctx: RTSPContext) => void
    get_parameter_request: (client: RTSPClient, ctx: RTSPContext) => void
    handle_response: (client: RTSPClient, ctx: RTSPContext) => void
    tunnel_http_response: (client: RTSPClient, request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage) => void
    send_message: (client: RTSPClient, ctx: RTSPContext, response: GstRtsp.RTSPMessage) => void
    handle_sdp: (client: RTSPClient, ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage) => boolean
    announce_request: (client: RTSPClient, ctx: RTSPContext) => void
    record_request: (client: RTSPClient, ctx: RTSPContext) => void
    check_requirements: (client: RTSPClient, ctx: RTSPContext, arr: string) => string
    pre_options_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_describe_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_setup_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_play_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_pause_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_teardown_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_set_parameter_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_get_parameter_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_announce_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_record_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    static name: string
}
export class RTSPClientPrivate {
    static name: string
}
export class RTSPContext {
    /* Fields of GstRtspServer.RTSPContext */
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
    /* Methods of GstRtspServer.RTSPContext */
    pop_current(): void
    push_current(): void
    static name: string
}
export abstract class RTSPMediaClass {
    /* Fields of GstRtspServer.RTSPMediaClass */
    parent_class: GObject.ObjectClass
    handle_message: (media: RTSPMedia, message: Gst.Message) => boolean
    prepare: (media: RTSPMedia, thread?: RTSPThread | null) => boolean
    unprepare: (media: RTSPMedia) => boolean
    suspend: (media: RTSPMedia) => boolean
    unsuspend: (media: RTSPMedia) => boolean
    convert_range: (media: RTSPMedia, range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit) => boolean
    query_position: (media: RTSPMedia, position: number) => boolean
    query_stop: (media: RTSPMedia, stop: number) => boolean
    setup_rtpbin: (media: RTSPMedia, rtpbin: Gst.Element) => boolean
    setup_sdp: (media: RTSPMedia, sdp: GstSdp.SDPMessage, info: SDPInfo) => boolean
    new_stream: (media: RTSPMedia, stream: RTSPStream) => void
    removed_stream: (media: RTSPMedia, stream: RTSPStream) => void
    prepared: (media: RTSPMedia) => void
    unprepared: (media: RTSPMedia) => void
    target_state: (media: RTSPMedia, state: Gst.State) => void
    new_state: (media: RTSPMedia, state: Gst.State) => void
    handle_sdp: (media: RTSPMedia, sdp: GstSdp.SDPMessage) => boolean
    static name: string
}
export abstract class RTSPMediaFactoryClass {
    /* Fields of GstRtspServer.RTSPMediaFactoryClass */
    parent_class: GObject.ObjectClass
    gen_key: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => string
    create_element: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => Gst.Element
    construct: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => RTSPMedia
    configure: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    media_constructed: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    media_configure: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    static name: string
}
export class RTSPMediaFactoryPrivate {
    static name: string
}
export abstract class RTSPMediaFactoryURIClass {
    /* Fields of GstRtspServer.RTSPMediaFactoryURIClass */
    parent_class: RTSPMediaFactoryClass
    static name: string
}
export class RTSPMediaFactoryURIPrivate {
    static name: string
}
export class RTSPMediaPrivate {
    static name: string
}
export abstract class RTSPMountPointsClass {
    /* Fields of GstRtspServer.RTSPMountPointsClass */
    parent_class: GObject.ObjectClass
    make_path: (mounts: RTSPMountPoints, url: GstRtsp.RTSPUrl) => string | null
    static name: string
}
export class RTSPMountPointsPrivate {
    static name: string
}
export abstract class RTSPOnvifClientClass {
    /* Fields of GstRtspServer.RTSPOnvifClientClass */
    parent: RTSPClientClass
    static name: string
}
export abstract class RTSPOnvifMediaClass {
    /* Fields of GstRtspServer.RTSPOnvifMediaClass */
    parent: RTSPMediaClass
    static name: string
}
export abstract class RTSPOnvifMediaFactoryClass {
    /* Fields of GstRtspServer.RTSPOnvifMediaFactoryClass */
    parent: RTSPMediaFactoryClass
    has_backchannel_support: (factory: RTSPOnvifMediaFactory) => boolean
    static name: string
}
export class RTSPOnvifMediaFactoryPrivate {
    static name: string
}
export class RTSPOnvifMediaPrivate {
    static name: string
}
export abstract class RTSPOnvifServerClass {
    /* Fields of GstRtspServer.RTSPOnvifServerClass */
    parent: RTSPServerClass
    static name: string
}
export class RTSPPermissions {
    /* Fields of GstRtspServer.RTSPPermissions */
    mini_object: Gst.MiniObject
    /* Methods of GstRtspServer.RTSPPermissions */
    add_permission_for_role(role: string, permission: string, allowed: boolean): void
    add_role(role: string): void
    add_role_from_structure(structure: Gst.Structure): void
    get_role(role: string): Gst.Structure
    is_allowed(role: string, permission: string): boolean
    remove_role(role: string): void
    static name: string
    static new(): RTSPPermissions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RTSPPermissions
}
export abstract class RTSPServerClass {
    /* Fields of GstRtspServer.RTSPServerClass */
    parent_class: GObject.ObjectClass
    client_connected: (server: RTSPServer, client: RTSPClient) => void
    static name: string
}
export class RTSPServerPrivate {
    static name: string
}
export abstract class RTSPSessionClass {
    /* Fields of GstRtspServer.RTSPSessionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RTSPSessionMediaClass {
    /* Fields of GstRtspServer.RTSPSessionMediaClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RTSPSessionMediaPrivate {
    static name: string
}
export abstract class RTSPSessionPoolClass {
    /* Fields of GstRtspServer.RTSPSessionPoolClass */
    parent_class: GObject.ObjectClass
    create_session_id: (pool: RTSPSessionPool) => string
    session_removed: (pool: RTSPSessionPool, session: RTSPSession) => void
    static name: string
}
export class RTSPSessionPoolPrivate {
    static name: string
}
export class RTSPSessionPrivate {
    static name: string
}
export abstract class RTSPStreamClass {
    /* Fields of GstRtspServer.RTSPStreamClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RTSPStreamPrivate {
    static name: string
}
export abstract class RTSPStreamTransportClass {
    /* Fields of GstRtspServer.RTSPStreamTransportClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RTSPStreamTransportPrivate {
    static name: string
}
export class RTSPThread {
    /* Fields of GstRtspServer.RTSPThread */
    mini_object: Gst.MiniObject
    type: RTSPThreadType
    context: GLib.MainContext
    loop: GLib.MainLoop
    /* Methods of GstRtspServer.RTSPThread */
    reuse(): boolean
    stop(): void
    static name: string
    static new(type: RTSPThreadType): RTSPThread
    constructor(type: RTSPThreadType)
    /* Static methods and pseudo-constructors */
    static new(type: RTSPThreadType): RTSPThread
}
export abstract class RTSPThreadPoolClass {
    /* Fields of GstRtspServer.RTSPThreadPoolClass */
    parent_class: GObject.ObjectClass
    pool: GLib.ThreadPool
    get_thread: (pool: RTSPThreadPool, type: RTSPThreadType, ctx: RTSPContext) => RTSPThread | null
    configure_thread: (pool: RTSPThreadPool, thread: RTSPThread, ctx: RTSPContext) => void
    thread_enter: (pool: RTSPThreadPool, thread: RTSPThread) => void
    thread_leave: (pool: RTSPThreadPool, thread: RTSPThread) => void
    static name: string
}
export class RTSPThreadPoolPrivate {
    static name: string
}
export class RTSPToken {
    /* Fields of GstRtspServer.RTSPToken */
    mini_object: Gst.MiniObject
    /* Methods of GstRtspServer.RTSPToken */
    get_string(field: string): string | null
    get_structure(): Gst.Structure
    is_allowed(field: string): boolean
    set_bool(field: string, bool_value: boolean): void
    set_string(field: string, string_value: string): void
    writable_structure(): Gst.Structure
    static name: string
    static new(): RTSPToken
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RTSPToken
}
export class SDPInfo {
    /* Fields of GstRtspServer.SDPInfo */
    is_ipv6: boolean
    server_ip: string
    static name: string
}