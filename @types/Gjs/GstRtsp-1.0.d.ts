/**
 * GstRtsp-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstSdp from './GstSdp-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';
import type * as GstBase from './GstBase-1.0';
import type * as Gio from './Gio-2.0';

export enum RTSPAuthMethod {
    NONE,
    BASIC,
    DIGEST,
}
export enum RTSPFamily {
    NONE,
    INET,
    INET6,
}
export enum RTSPHeaderField {
    INVALID,
    ACCEPT,
    ACCEPT_ENCODING,
    ACCEPT_LANGUAGE,
    ALLOW,
    AUTHORIZATION,
    BANDWIDTH,
    BLOCKSIZE,
    CACHE_CONTROL,
    CONFERENCE,
    CONNECTION,
    CONTENT_BASE,
    CONTENT_ENCODING,
    CONTENT_LANGUAGE,
    CONTENT_LENGTH,
    CONTENT_LOCATION,
    CONTENT_TYPE,
    CSEQ,
    DATE,
    EXPIRES,
    FROM,
    IF_MODIFIED_SINCE,
    LAST_MODIFIED,
    PROXY_AUTHENTICATE,
    PROXY_REQUIRE,
    PUBLIC,
    RANGE,
    REFERER,
    REQUIRE,
    RETRY_AFTER,
    RTP_INFO,
    SCALE,
    SESSION,
    SERVER,
    SPEED,
    TRANSPORT,
    UNSUPPORTED,
    USER_AGENT,
    VIA,
    WWW_AUTHENTICATE,
    CLIENT_CHALLENGE,
    REAL_CHALLENGE1,
    REAL_CHALLENGE2,
    REAL_CHALLENGE3,
    SUBSCRIBE,
    ALERT,
    CLIENT_ID,
    COMPANY_ID,
    GUID,
    REGION_DATA,
    MAX_ASM_WIDTH,
    LANGUAGE,
    PLAYER_START_TIME,
    LOCATION,
    ETAG,
    IF_MATCH,
    ACCEPT_CHARSET,
    SUPPORTED,
    VARY,
    X_ACCELERATE_STREAMING,
    X_ACCEPT_AUTHENT,
    X_ACCEPT_PROXY_AUTHENT,
    X_BROADCAST_ID,
    X_BURST_STREAMING,
    X_NOTICE,
    X_PLAYER_LAG_TIME,
    X_PLAYLIST,
    X_PLAYLIST_CHANGE_NOTICE,
    X_PLAYLIST_GEN_ID,
    X_PLAYLIST_SEEK_ID,
    X_PROXY_CLIENT_AGENT,
    X_PROXY_CLIENT_VERB,
    X_RECEDING_PLAYLISTCHANGE,
    X_RTP_INFO,
    X_STARTUPPROFILE,
    TIMESTAMP,
    AUTHENTICATION_INFO,
    HOST,
    PRAGMA,
    X_SERVER_IP_ADDRESS,
    X_SESSIONCOOKIE,
    RTCP_INTERVAL,
    KEYMGMT,
    PIPELINED_REQUESTS,
    MEDIA_PROPERTIES,
    SEEK_STYLE,
    ACCEPT_RANGES,
    FRAMES,
    RATE_CONTROL,
    LAST,
}
export enum RTSPMsgType {
    INVALID,
    REQUEST,
    RESPONSE,
    HTTP_REQUEST,
    HTTP_RESPONSE,
    DATA,
}
export enum RTSPRangeUnit {
    SMPTE,
    SMPTE_30_DROP,
    SMPTE_25,
    NPT,
    CLOCK,
}
export enum RTSPResult {
    OK,
    ERROR,
    EINVAL,
    EINTR,
    ENOMEM,
    ERESOLV,
    ENOTIMPL,
    ESYS,
    EPARSE,
    EWSASTART,
    EWSAVERSION,
    EEOF,
    ENET,
    ENOTIP,
    ETIMEOUT,
    ETGET,
    ETPOST,
    ELAST,
}
export enum RTSPState {
    INVALID,
    INIT,
    READY,
    SEEKING,
    PLAYING,
    RECORDING,
}
export enum RTSPStatusCode {
    INVALID,
    CONTINUE,
    OK,
    CREATED,
    LOW_ON_STORAGE,
    MULTIPLE_CHOICES,
    MOVED_PERMANENTLY,
    MOVE_TEMPORARILY,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    BAD_REQUEST,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTH_REQUIRED,
    REQUEST_TIMEOUT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    REQUEST_ENTITY_TOO_LARGE,
    REQUEST_URI_TOO_LARGE,
    UNSUPPORTED_MEDIA_TYPE,
    PARAMETER_NOT_UNDERSTOOD,
    CONFERENCE_NOT_FOUND,
    NOT_ENOUGH_BANDWIDTH,
    SESSION_NOT_FOUND,
    METHOD_NOT_VALID_IN_THIS_STATE,
    HEADER_FIELD_NOT_VALID_FOR_RESOURCE,
    INVALID_RANGE,
    PARAMETER_IS_READONLY,
    AGGREGATE_OPERATION_NOT_ALLOWED,
    ONLY_AGGREGATE_OPERATION_ALLOWED,
    UNSUPPORTED_TRANSPORT,
    DESTINATION_UNREACHABLE,
    KEY_MANAGEMENT_FAILURE,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    RTSP_VERSION_NOT_SUPPORTED,
    OPTION_NOT_SUPPORTED,
}
export enum RTSPTimeType {
    SECONDS,
    NOW,
    END,
    FRAMES,
    UTC,
}
export enum RTSPVersion {
    INVALID,
    /* 1_0 (invalid, starts with a number) */
    /* 1_1 (invalid, starts with a number) */
    /* 2_0 (invalid, starts with a number) */
}
export enum RTSPEvent {
    READ,
    WRITE,
}
export enum RTSPLowerTrans {
    UNKNOWN,
    UDP,
    UDP_MCAST,
    TCP,
    HTTP,
    TLS,
}
export enum RTSPMethod {
    INVALID,
    DESCRIBE,
    ANNOUNCE,
    GET_PARAMETER,
    OPTIONS,
    PAUSE,
    PLAY,
    RECORD,
    REDIRECT,
    SETUP,
    SET_PARAMETER,
    TEARDOWN,
    GET,
    POST,
}
export enum RTSPProfile {
    UNKNOWN,
    AVP,
    SAVP,
    AVPF,
    SAVPF,
}
export enum RTSPTransMode {
    UNKNOWN,
    RTP,
    RDT,
}
export const RTSP_DEFAULT_PORT: number
export function rtsp_auth_credentials_free(credentials: RTSPAuthCredential): void
export function rtsp_connection_accept(socket: Gio.Socket, cancellable?: Gio.Cancellable | null): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
export function rtsp_connection_create(url: RTSPUrl): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
export function rtsp_connection_create_from_socket(socket: Gio.Socket, ip: string, port: number, initial_buffer: string): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
export function rtsp_find_header_field(header: string): RTSPHeaderField
export function rtsp_find_method(method: string): RTSPMethod
export function rtsp_generate_digest_auth_response(algorithm: string | null, method: string, realm: string, username: string, password: string, uri: string, nonce: string): string
export function rtsp_generate_digest_auth_response_from_md5(algorithm: string | null, method: string, md5: string, uri: string, nonce: string): string
export function rtsp_header_allow_multiple(field: RTSPHeaderField): boolean
export function rtsp_header_as_text(field: RTSPHeaderField): string
export function rtsp_message_new(): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
export function rtsp_message_new_data(channel: number): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
export function rtsp_message_new_request(method: RTSPMethod, uri: string): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
export function rtsp_message_new_response(code: RTSPStatusCode, reason?: string | null, request?: RTSPMessage | null): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
export function rtsp_method_as_text(method: RTSPMethod): string
export function rtsp_options_as_text(options: RTSPMethod): string
export function rtsp_options_from_text(options: string): RTSPMethod
export function rtsp_range_convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean
export function rtsp_range_free(range: RTSPTimeRange): void
export function rtsp_range_get_times(range: RTSPTimeRange): [ /* returnType */ boolean, /* min */ Gst.ClockTime, /* max */ Gst.ClockTime ]
export function rtsp_range_parse(rangestr: string): [ /* returnType */ RTSPResult, /* range */ RTSPTimeRange ]
export function rtsp_range_to_string(range: RTSPTimeRange): string
export function rtsp_status_as_text(code: RTSPStatusCode): string
export function rtsp_strresult(result: RTSPResult): string
export function rtsp_transport_get_manager(trans: RTSPTransMode, option: number): [ /* returnType */ RTSPResult, /* manager */ string | null ]
export function rtsp_transport_get_mime(trans: RTSPTransMode, mime: string): RTSPResult
export function rtsp_transport_new(transport: RTSPTransport): RTSPResult
export function rtsp_transport_parse(str: string, transport: RTSPTransport): RTSPResult
export function rtsp_url_parse(urlstr: string): [ /* returnType */ RTSPResult, /* url */ RTSPUrl ]
export function rtsp_version_as_text(version: RTSPVersion): string
export interface RTSPConnectionAcceptCertificateFunc {
    (conn: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
}
export class RTSPExtension {
    /* Methods of GstRtsp.RTSPExtension */
    after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    before_send(req: RTSPMessage): RTSPResult
    configure_stream(caps: Gst.Caps): boolean
    detect_server(resp: RTSPMessage): boolean
    get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult
    parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult
    receive_request(req: RTSPMessage): RTSPResult
    send(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    setup_media(media: GstSdp.SDPMedia): RTSPResult
    stream_select(url: RTSPUrl): RTSPResult
    /* Virtual methods of GstRtsp.RTSPExtension */
    vfunc_after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    vfunc_before_send(req: RTSPMessage): RTSPResult
    vfunc_configure_stream(caps: Gst.Caps): boolean
    vfunc_detect_server(resp: RTSPMessage): boolean
    vfunc_get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult
    vfunc_parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult
    vfunc_receive_request(req: RTSPMessage): RTSPResult
    vfunc_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    vfunc_setup_media(media: GstSdp.SDPMedia): RTSPResult
    vfunc_stream_select(url: RTSPUrl): RTSPResult
    /* Signals of GstRtsp.RTSPExtension */
    connect(sigName: "send", callback: (($obj: RTSPExtension, object?: object | null, p0?: object | null) => RTSPResult)): number
    connect_after(sigName: "send", callback: (($obj: RTSPExtension, object?: object | null, p0?: object | null) => RTSPResult)): number
    emit(sigName: "send", object?: object | null, p0?: object | null): void
    static name: string
}
export class RTSPAuthCredential {
    /* Fields of GstRtsp.RTSPAuthCredential */
    scheme: RTSPAuthMethod
    params: RTSPAuthParam
    authorization: string
    static name: string
}
export class RTSPAuthParam {
    /* Fields of GstRtsp.RTSPAuthParam */
    name: string
    value: string
    /* Methods of GstRtsp.RTSPAuthParam */
    copy(): RTSPAuthParam
    free(): void
    static name: string
}
export class RTSPConnection {
    /* Methods of GstRtsp.RTSPConnection */
    clear_auth_params(): void
    close(): RTSPResult
    connect(timeout: GLib.TimeVal): RTSPResult
    connect_usec(timeout: number): RTSPResult
    connect_with_response(timeout: GLib.TimeVal, response: RTSPMessage): RTSPResult
    connect_with_response_usec(timeout: number, response: RTSPMessage): RTSPResult
    do_tunnel(conn2: RTSPConnection): RTSPResult
    flush(flush: boolean): RTSPResult
    free(): RTSPResult
    get_ip(): string
    get_read_socket(): Gio.Socket
    get_remember_session_id(): boolean
    get_tls(): Gio.TlsConnection
    get_tls_database(): Gio.TlsDatabase
    get_tls_interaction(): Gio.TlsInteraction
    get_tls_validation_flags(): Gio.TlsCertificateFlags
    get_tunnelid(): string
    get_url(): RTSPUrl
    get_write_socket(): Gio.Socket
    is_tunneled(): boolean
    next_timeout(timeout: GLib.TimeVal): RTSPResult
    next_timeout_usec(): number
    poll(events: RTSPEvent, revents: RTSPEvent, timeout: GLib.TimeVal): RTSPResult
    poll_usec(events: RTSPEvent, revents: RTSPEvent, timeout: number): RTSPResult
    read(data: number, size: number, timeout: GLib.TimeVal): RTSPResult
    read_usec(data: number, size: number, timeout: number): RTSPResult
    receive(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult
    receive_usec(message: RTSPMessage, timeout: number): RTSPResult
    reset_timeout(): RTSPResult
    send(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult
    send_messages(messages: RTSPMessage[], timeout: GLib.TimeVal): RTSPResult
    send_messages_usec(messages: RTSPMessage[], timeout: number): RTSPResult
    send_usec(message: RTSPMessage, timeout: number): RTSPResult
    set_accept_certificate_func(func: RTSPConnectionAcceptCertificateFunc): void
    set_auth(method: RTSPAuthMethod, user: string, pass: string): RTSPResult
    set_auth_param(param: string, value: string): void
    set_content_length_limit(limit: number): void
    set_http_mode(enable: boolean): void
    set_ip(ip: string): void
    set_proxy(host: string, port: number): RTSPResult
    set_qos_dscp(qos_dscp: number): RTSPResult
    set_remember_session_id(remember: boolean): void
    set_tls_database(database: Gio.TlsDatabase): void
    set_tls_interaction(interaction: Gio.TlsInteraction): void
    set_tls_validation_flags(flags: Gio.TlsCertificateFlags): boolean
    set_tunneled(tunneled: boolean): void
    write(data: number, size: number, timeout: GLib.TimeVal): RTSPResult
    write_usec(data: number, size: number, timeout: number): RTSPResult
    static name: string
    /* Static methods and pseudo-constructors */
    static accept(socket: Gio.Socket, cancellable?: Gio.Cancellable | null): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
    static create(url: RTSPUrl): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
    static create_from_socket(socket: Gio.Socket, ip: string, port: number, initial_buffer: string): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
}
export abstract class RTSPExtensionInterface {
    /* Fields of GstRtsp.RTSPExtensionInterface */
    parent: GObject.TypeInterface
    detect_server: (ext: RTSPExtension, resp: RTSPMessage) => boolean
    before_send: (ext: RTSPExtension, req: RTSPMessage) => RTSPResult
    after_send: (ext: RTSPExtension, req: RTSPMessage, resp: RTSPMessage) => RTSPResult
    parse_sdp: (ext: RTSPExtension, sdp: GstSdp.SDPMessage, s: Gst.Structure) => RTSPResult
    setup_media: (ext: RTSPExtension, media: GstSdp.SDPMedia) => RTSPResult
    configure_stream: (ext: RTSPExtension, caps: Gst.Caps) => boolean
    get_transports: (ext: RTSPExtension, protocols: RTSPLowerTrans, transport: string) => RTSPResult
    stream_select: (ext: RTSPExtension, url: RTSPUrl) => RTSPResult
    send: (ext: RTSPExtension, req: RTSPMessage, resp: RTSPMessage) => RTSPResult
    receive_request: (ext: RTSPExtension, req: RTSPMessage) => RTSPResult
    static name: string
}
export class RTSPMessage {
    /* Fields of GstRtsp.RTSPMessage */
    type: RTSPMsgType
    /* Methods of GstRtsp.RTSPMessage */
    add_header(field: RTSPHeaderField, value: string): RTSPResult
    add_header_by_name(header: string, value: string): RTSPResult
    append_headers(str: GLib.String): RTSPResult
    copy(): [ /* returnType */ RTSPResult, /* copy */ RTSPMessage ]
    dump(): RTSPResult
    free(): RTSPResult
    get_body(): [ /* returnType */ RTSPResult, /* data */ Uint8Array[] ]
    get_body_buffer(): [ /* returnType */ RTSPResult, /* buffer */ Gst.Buffer ]
    get_header(field: RTSPHeaderField, indx: number): [ /* returnType */ RTSPResult, /* value */ string ]
    get_header_by_name(header: string, index: number): [ /* returnType */ RTSPResult, /* value */ string ]
    get_type(): RTSPMsgType
    has_body_buffer(): boolean
    init(): RTSPResult
    init_data(channel: number): RTSPResult
    init_request(method: RTSPMethod, uri: string): RTSPResult
    init_response(code: RTSPStatusCode, reason?: string | null, request?: RTSPMessage | null): RTSPResult
    parse_auth_credentials(field: RTSPHeaderField): RTSPAuthCredential[]
    parse_data(): [ /* returnType */ RTSPResult, /* channel */ number ]
    parse_request(): [ /* returnType */ RTSPResult, /* method */ RTSPMethod | null, /* uri */ string | null, /* version */ RTSPVersion | null ]
    parse_response(): [ /* returnType */ RTSPResult, /* code */ RTSPStatusCode | null, /* reason */ string | null, /* version */ RTSPVersion | null ]
    remove_header(field: RTSPHeaderField, indx: number): RTSPResult
    remove_header_by_name(header: string, index: number): RTSPResult
    set_body(data: Uint8Array[]): RTSPResult
    set_body_buffer(buffer: Gst.Buffer): RTSPResult
    steal_body(): [ /* returnType */ RTSPResult, /* data */ Uint8Array[] ]
    steal_body_buffer(): [ /* returnType */ RTSPResult, /* buffer */ Gst.Buffer ]
    take_body(data: Uint8Array[]): RTSPResult
    take_body_buffer(buffer: Gst.Buffer): RTSPResult
    take_header(field: RTSPHeaderField, value: string): RTSPResult
    take_header_by_name(header: string, value: string): RTSPResult
    unset(): RTSPResult
    static name: string
}
export class RTSPRange {
    /* Fields of GstRtsp.RTSPRange */
    min: number
    max: number
    static name: string
    /* Static methods and pseudo-constructors */
    static convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean
    static free(range: RTSPTimeRange): void
    static get_times(range: RTSPTimeRange): [ /* returnType */ boolean, /* min */ Gst.ClockTime, /* max */ Gst.ClockTime ]
    static parse(rangestr: string): [ /* returnType */ RTSPResult, /* range */ RTSPTimeRange ]
    static to_string(range: RTSPTimeRange): string
}
export class RTSPTime {
    /* Fields of GstRtsp.RTSPTime */
    type: RTSPTimeType
    seconds: number
    static name: string
}
export class RTSPTime2 {
    /* Fields of GstRtsp.RTSPTime2 */
    frames: number
    year: number
    month: number
    day: number
    static name: string
}
export class RTSPTimeRange {
    /* Fields of GstRtsp.RTSPTimeRange */
    unit: RTSPRangeUnit
    min: RTSPTime
    max: RTSPTime
    min2: RTSPTime2
    max2: RTSPTime2
    static name: string
}
export class RTSPTransport {
    /* Fields of GstRtsp.RTSPTransport */
    trans: RTSPTransMode
    profile: RTSPProfile
    lower_transport: RTSPLowerTrans
    destination: string
    source: string
    layers: number
    mode_play: boolean
    mode_record: boolean
    append: boolean
    interleaved: RTSPRange
    ttl: number
    port: RTSPRange
    client_port: RTSPRange
    server_port: RTSPRange
    ssrc: number
    /* Methods of GstRtsp.RTSPTransport */
    as_text(): string
    free(): RTSPResult
    get_media_type(): [ /* returnType */ RTSPResult, /* media_type */ string ]
    init(): RTSPResult
    static name: string
    /* Static methods and pseudo-constructors */
    static get_manager(trans: RTSPTransMode, option: number): [ /* returnType */ RTSPResult, /* manager */ string | null ]
    static get_mime(trans: RTSPTransMode, mime: string): RTSPResult
    static parse(str: string, transport: RTSPTransport): RTSPResult
}
export class RTSPUrl {
    /* Fields of GstRtsp.RTSPUrl */
    transports: RTSPLowerTrans
    family: RTSPFamily
    user: string
    passwd: string
    host: string
    port: number
    abspath: string
    query: string
    /* Methods of GstRtsp.RTSPUrl */
    copy(): RTSPUrl
    decode_path_components(): string[]
    free(): void
    get_port(): [ /* returnType */ RTSPResult, /* port */ number ]
    get_request_uri(): string
    get_request_uri_with_control(control_path: string): string
    set_port(port: number): RTSPResult
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(urlstr: string): [ /* returnType */ RTSPResult, /* url */ RTSPUrl ]
}
export class RTSPWatch {
    /* Methods of GstRtsp.RTSPWatch */
    attach(context: GLib.MainContext): number
    get_send_backlog(): [ /* bytes */ number | null, /* messages */ number | null ]
    reset(): void
    send_message(message: RTSPMessage): [ /* returnType */ RTSPResult, /* id */ number | null ]
    send_messages(messages: RTSPMessage[]): [ /* returnType */ RTSPResult, /* id */ number | null ]
    set_flushing(flushing: boolean): void
    set_send_backlog(bytes: number, messages: number): void
    unref(): void
    wait_backlog(timeout: GLib.TimeVal): RTSPResult
    wait_backlog_usec(timeout: number): RTSPResult
    write_data(data: Uint8Array[]): [ /* returnType */ RTSPResult, /* id */ number | null ]
    static name: string
}
export class RTSPWatchFuncs {
    /* Fields of GstRtsp.RTSPWatchFuncs */
    message_received: (watch: RTSPWatch, message: RTSPMessage) => RTSPResult
    message_sent: (watch: RTSPWatch, id: number) => RTSPResult
    closed: (watch: RTSPWatch) => RTSPResult
    error: (watch: RTSPWatch, result: RTSPResult) => RTSPResult
    tunnel_start: (watch: RTSPWatch) => RTSPStatusCode
    tunnel_complete: (watch: RTSPWatch) => RTSPResult
    error_full: (watch: RTSPWatch, result: RTSPResult, message: RTSPMessage, id: number) => RTSPResult
    tunnel_lost: (watch: RTSPWatch) => RTSPResult
    tunnel_http_response: (watch: RTSPWatch, request: RTSPMessage, response: RTSPMessage) => RTSPResult
    static name: string
}