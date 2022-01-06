/**
 * GstRtsp-1.0
 */

import "node"
import type { GstSdp } from './GstSdp-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GstBase } from './GstBase-1.0';
import type { Gio } from './Gio-2.0';

declare namespace GstRtsp {

enum RTSPAuthMethod {
    NONE,
    BASIC,
    DIGEST,
}
enum RTSPFamily {
    NONE,
    INET,
    INET6,
}
enum RTSPHeaderField {
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
enum RTSPMsgType {
    INVALID,
    REQUEST,
    RESPONSE,
    HTTP_REQUEST,
    HTTP_RESPONSE,
    DATA,
}
enum RTSPRangeUnit {
    SMPTE,
    SMPTE_30_DROP,
    SMPTE_25,
    NPT,
    CLOCK,
}
enum RTSPResult {
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
enum RTSPState {
    INVALID,
    INIT,
    READY,
    SEEKING,
    PLAYING,
    RECORDING,
}
enum RTSPStatusCode {
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
enum RTSPTimeType {
    SECONDS,
    NOW,
    END,
    FRAMES,
    UTC,
}
enum RTSPVersion {
    INVALID,
    /* 1_0 (invalid, starts with a number) */
    /* 1_1 (invalid, starts with a number) */
    /* 2_0 (invalid, starts with a number) */
}
enum RTSPEvent {
    READ,
    WRITE,
}
enum RTSPLowerTrans {
    UNKNOWN,
    UDP,
    UDP_MCAST,
    TCP,
    HTTP,
    TLS,
}
enum RTSPMethod {
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
enum RTSPProfile {
    UNKNOWN,
    AVP,
    SAVP,
    AVPF,
    SAVPF,
}
enum RTSPTransMode {
    UNKNOWN,
    RTP,
    RDT,
}
export const RTSP_DEFAULT_PORT: number
function rtspAuthCredentialsFree(credentials: RTSPAuthCredential): void
function rtspConnectionAccept(socket: Gio.Socket, cancellable?: Gio.Cancellable | null): { returnType: RTSPResult, conn: RTSPConnection }
function rtspConnectionCreate(url: RTSPUrl): { returnType: RTSPResult, conn: RTSPConnection }
function rtspConnectionCreateFromSocket(socket: Gio.Socket, ip: string, port: number, initialBuffer: string): { returnType: RTSPResult, conn: RTSPConnection }
function rtspFindHeaderField(header: string): RTSPHeaderField
function rtspFindMethod(method: string): RTSPMethod
function rtspGenerateDigestAuthResponse(algorithm: string | null, method: string, realm: string, username: string, password: string, uri: string, nonce: string): string
function rtspGenerateDigestAuthResponseFromMd5(algorithm: string | null, method: string, md5: string, uri: string, nonce: string): string
function rtspHeaderAllowMultiple(field: RTSPHeaderField): boolean
function rtspHeaderAsText(field: RTSPHeaderField): string
function rtspMessageNew(): { returnType: RTSPResult, msg: RTSPMessage }
function rtspMessageNewData(channel: number): { returnType: RTSPResult, msg: RTSPMessage }
function rtspMessageNewRequest(method: RTSPMethod, uri: string): { returnType: RTSPResult, msg: RTSPMessage }
function rtspMessageNewResponse(code: RTSPStatusCode, reason?: string | null, request?: RTSPMessage | null): { returnType: RTSPResult, msg: RTSPMessage }
function rtspMethodAsText(method: RTSPMethod): string
function rtspOptionsAsText(options: RTSPMethod): string
function rtspOptionsFromText(options: string): RTSPMethod
function rtspRangeConvertUnits(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean
function rtspRangeFree(range: RTSPTimeRange): void
function rtspRangeGetTimes(range: RTSPTimeRange): { returnType: boolean, min: Gst.ClockTime, max: Gst.ClockTime }
function rtspRangeParse(rangestr: string): { returnType: RTSPResult, range: RTSPTimeRange }
function rtspRangeToString(range: RTSPTimeRange): string
function rtspStatusAsText(code: RTSPStatusCode): string
function rtspStrresult(result: RTSPResult): string
function rtspTransportGetManager(trans: RTSPTransMode, option: number): { returnType: RTSPResult, manager: string | null }
function rtspTransportGetMime(trans: RTSPTransMode, mime: string): RTSPResult
function rtspTransportNew(transport: RTSPTransport): RTSPResult
function rtspTransportParse(str: string, transport: RTSPTransport): RTSPResult
function rtspUrlParse(urlstr: string): { returnType: RTSPResult, url: RTSPUrl }
function rtspVersionAsText(version: RTSPVersion): string
interface RTSPConnectionAcceptCertificateFunc {
    (conn: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
}
class RTSPExtension {
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPExtension */
    afterSend(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    beforeSend(req: RTSPMessage): RTSPResult
    configureStream(caps: Gst.Caps): boolean
    detectServer(resp: RTSPMessage): boolean
    getTransports(protocols: RTSPLowerTrans, transport: string): RTSPResult
    parseSdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult
    receiveRequest(req: RTSPMessage): RTSPResult
    send(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    setupMedia(media: GstSdp.SDPMedia): RTSPResult
    streamSelect(url: RTSPUrl): RTSPResult
    /* Signals of GstRtsp-1.0.GstRtsp.RTSPExtension */
    connect(sigName: "send", callback: (($obj: RTSPExtension, object?: object | null, p0?: object | null) => RTSPResult)): number
    on(sigName: "send", callback: (object?: object | null, p0?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "send", callback: (object?: object | null, p0?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "send", callback: (object?: object | null, p0?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "send", object?: object | null, p0?: object | null): void
    static name: string
}
class RTSPAuthCredential {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPAuthCredential */
    scheme: RTSPAuthMethod
    params: RTSPAuthParam
    authorization: string
    static name: string
}
class RTSPAuthParam {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPAuthParam */
    name: string
    value: string
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPAuthParam */
    copy(): RTSPAuthParam
    free(): void
    static name: string
}
class RTSPConnection {
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPConnection */
    clearAuthParams(): void
    close(): RTSPResult
    connect(timeout: GLib.TimeVal): RTSPResult
    connectUsec(timeout: number): RTSPResult
    connectWithResponse(timeout: GLib.TimeVal, response: RTSPMessage): RTSPResult
    connectWithResponseUsec(timeout: number, response: RTSPMessage): RTSPResult
    doTunnel(conn2: RTSPConnection): RTSPResult
    flush(flush: boolean): RTSPResult
    free(): RTSPResult
    getIgnoreXServerReply(): boolean
    getIp(): string
    getReadSocket(): Gio.Socket
    getRememberSessionId(): boolean
    getTls(): Gio.TlsConnection
    getTlsDatabase(): Gio.TlsDatabase
    getTlsInteraction(): Gio.TlsInteraction
    getTlsValidationFlags(): Gio.TlsCertificateFlags
    getTunnelid(): string
    getUrl(): RTSPUrl
    getWriteSocket(): Gio.Socket
    isTunneled(): boolean
    nextTimeout(timeout: GLib.TimeVal): RTSPResult
    nextTimeoutUsec(): number
    poll(events: RTSPEvent, revents: RTSPEvent, timeout: GLib.TimeVal): RTSPResult
    pollUsec(events: RTSPEvent, revents: RTSPEvent, timeout: number): RTSPResult
    read(data: number, size: number, timeout: GLib.TimeVal): RTSPResult
    readUsec(data: number, size: number, timeout: number): RTSPResult
    receive(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult
    receiveUsec(message: RTSPMessage, timeout: number): RTSPResult
    resetTimeout(): RTSPResult
    send(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult
    sendMessages(messages: RTSPMessage[], timeout: GLib.TimeVal): RTSPResult
    sendMessagesUsec(messages: RTSPMessage[], timeout: number): RTSPResult
    sendUsec(message: RTSPMessage, timeout: number): RTSPResult
    setAcceptCertificateFunc(func: RTSPConnectionAcceptCertificateFunc): void
    setAuth(method: RTSPAuthMethod, user: string, pass: string): RTSPResult
    setAuthParam(param: string, value: string): void
    setContentLengthLimit(limit: number): void
    setHttpMode(enable: boolean): void
    setIgnoreXServerReply(ignore: boolean): void
    setIp(ip: string): void
    setProxy(host: string, port: number): RTSPResult
    setQosDscp(qosDscp: number): RTSPResult
    setRememberSessionId(remember: boolean): void
    setTlsDatabase(database: Gio.TlsDatabase): void
    setTlsInteraction(interaction: Gio.TlsInteraction): void
    setTlsValidationFlags(flags: Gio.TlsCertificateFlags): boolean
    setTunneled(tunneled: boolean): void
    write(data: number, size: number, timeout: GLib.TimeVal): RTSPResult
    writeUsec(data: number, size: number, timeout: number): RTSPResult
    static name: string
    /* Static methods and pseudo-constructors */
    static accept(socket: Gio.Socket, cancellable?: Gio.Cancellable | null): { returnType: RTSPResult, conn: RTSPConnection }
    static create(url: RTSPUrl): { returnType: RTSPResult, conn: RTSPConnection }
    static createFromSocket(socket: Gio.Socket, ip: string, port: number, initialBuffer: string): { returnType: RTSPResult, conn: RTSPConnection }
}
abstract class RTSPExtensionInterface {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPExtensionInterface */
    parent: GObject.TypeInterface
    detectServer: (ext: RTSPExtension, resp: RTSPMessage) => boolean
    beforeSend: (ext: RTSPExtension, req: RTSPMessage) => RTSPResult
    afterSend: (ext: RTSPExtension, req: RTSPMessage, resp: RTSPMessage) => RTSPResult
    parseSdp: (ext: RTSPExtension, sdp: GstSdp.SDPMessage, s: Gst.Structure) => RTSPResult
    setupMedia: (ext: RTSPExtension, media: GstSdp.SDPMedia) => RTSPResult
    configureStream: (ext: RTSPExtension, caps: Gst.Caps) => boolean
    getTransports: (ext: RTSPExtension, protocols: RTSPLowerTrans, transport: string) => RTSPResult
    streamSelect: (ext: RTSPExtension, url: RTSPUrl) => RTSPResult
    send: (ext: RTSPExtension, req: RTSPMessage, resp: RTSPMessage) => RTSPResult
    receiveRequest: (ext: RTSPExtension, req: RTSPMessage) => RTSPResult
    static name: string
}
class RTSPMessage {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPMessage */
    type: RTSPMsgType
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPMessage */
    addHeader(field: RTSPHeaderField, value: string): RTSPResult
    addHeaderByName(header: string, value: string): RTSPResult
    appendHeaders(str: GLib.String): RTSPResult
    copy(): { returnType: RTSPResult, copy: RTSPMessage }
    dump(): RTSPResult
    free(): RTSPResult
    getBody(): { returnType: RTSPResult, data: any[] }
    getBodyBuffer(): { returnType: RTSPResult, buffer: Gst.Buffer }
    getHeader(field: RTSPHeaderField, indx: number): { returnType: RTSPResult, value: string }
    getHeaderByName(header: string, index: number): { returnType: RTSPResult, value: string }
    getType(): RTSPMsgType
    hasBodyBuffer(): boolean
    init(): RTSPResult
    initData(channel: number): RTSPResult
    initRequest(method: RTSPMethod, uri: string): RTSPResult
    initResponse(code: RTSPStatusCode, reason?: string | null, request?: RTSPMessage | null): RTSPResult
    parseAuthCredentials(field: RTSPHeaderField): RTSPAuthCredential[]
    parseData(): { returnType: RTSPResult, channel: number }
    parseRequest(): { returnType: RTSPResult, method: RTSPMethod | null, uri: string | null, version: RTSPVersion | null }
    parseResponse(): { returnType: RTSPResult, code: RTSPStatusCode | null, reason: string | null, version: RTSPVersion | null }
    removeHeader(field: RTSPHeaderField, indx: number): RTSPResult
    removeHeaderByName(header: string, index: number): RTSPResult
    setBody(data: any[]): RTSPResult
    setBodyBuffer(buffer: Gst.Buffer): RTSPResult
    stealBody(): { returnType: RTSPResult, data: any[] }
    stealBodyBuffer(): { returnType: RTSPResult, buffer: Gst.Buffer }
    takeBody(data: any[]): RTSPResult
    takeBodyBuffer(buffer: Gst.Buffer): RTSPResult
    takeHeader(field: RTSPHeaderField, value: string): RTSPResult
    takeHeaderByName(header: string, value: string): RTSPResult
    unset(): RTSPResult
    static name: string
}
class RTSPRange {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPRange */
    min: number
    max: number
    static name: string
    /* Static methods and pseudo-constructors */
    static convertUnits(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean
    static free(range: RTSPTimeRange): void
    static getTimes(range: RTSPTimeRange): { returnType: boolean, min: Gst.ClockTime, max: Gst.ClockTime }
    static parse(rangestr: string): { returnType: RTSPResult, range: RTSPTimeRange }
    static toString(range: RTSPTimeRange): string
}
class RTSPTime {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPTime */
    type: RTSPTimeType
    seconds: number
    static name: string
}
class RTSPTime2 {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPTime2 */
    frames: number
    year: number
    month: number
    day: number
    static name: string
}
class RTSPTimeRange {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPTimeRange */
    unit: RTSPRangeUnit
    min: RTSPTime
    max: RTSPTime
    min2: RTSPTime2
    max2: RTSPTime2
    static name: string
}
class RTSPTransport {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPTransport */
    trans: RTSPTransMode
    profile: RTSPProfile
    lowerTransport: RTSPLowerTrans
    destination: string
    source: string
    layers: number
    modePlay: boolean
    modeRecord: boolean
    append: boolean
    interleaved: RTSPRange
    ttl: number
    port: RTSPRange
    clientPort: RTSPRange
    serverPort: RTSPRange
    ssrc: number
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPTransport */
    asText(): string
    free(): RTSPResult
    getMediaType(): { returnType: RTSPResult, mediaType: string }
    init(): RTSPResult
    static name: string
    /* Static methods and pseudo-constructors */
    static getManager(trans: RTSPTransMode, option: number): { returnType: RTSPResult, manager: string | null }
    static getMime(trans: RTSPTransMode, mime: string): RTSPResult
    static parse(str: string, transport: RTSPTransport): RTSPResult
}
class RTSPUrl {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPUrl */
    transports: RTSPLowerTrans
    family: RTSPFamily
    user: string
    passwd: string
    host: string
    port: number
    abspath: string
    query: string
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPUrl */
    copy(): RTSPUrl
    decodePathComponents(): string[]
    free(): void
    getPort(): { returnType: RTSPResult, port: number }
    getRequestUri(): string
    getRequestUriWithControl(controlPath: string): string
    setPort(port: number): RTSPResult
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(urlstr: string): { returnType: RTSPResult, url: RTSPUrl }
}
class RTSPWatch {
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPWatch */
    attach(context: GLib.MainContext): number
    getSendBacklog(): { bytes: number | null, messages: number | null }
    reset(): void
    sendMessage(message: RTSPMessage): { returnType: RTSPResult, id: number | null }
    sendMessages(messages: RTSPMessage[]): { returnType: RTSPResult, id: number | null }
    setFlushing(flushing: boolean): void
    setSendBacklog(bytes: number, messages: number): void
    unref(): void
    waitBacklog(timeout: GLib.TimeVal): RTSPResult
    waitBacklogUsec(timeout: number): RTSPResult
    writeData(data: any[]): { returnType: RTSPResult, id: number | null }
    static name: string
}
class RTSPWatchFuncs {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPWatchFuncs */
    messageReceived: (watch: RTSPWatch, message: RTSPMessage) => RTSPResult
    messageSent: (watch: RTSPWatch, id: number) => RTSPResult
    closed: (watch: RTSPWatch) => RTSPResult
    error: (watch: RTSPWatch, result: RTSPResult) => RTSPResult
    tunnelStart: (watch: RTSPWatch) => RTSPStatusCode
    tunnelComplete: (watch: RTSPWatch) => RTSPResult
    errorFull: (watch: RTSPWatch, result: RTSPResult, message: RTSPMessage, id: number) => RTSPResult
    tunnelLost: (watch: RTSPWatch) => RTSPResult
    tunnelHttpResponse: (watch: RTSPWatch, request: RTSPMessage, response: RTSPMessage) => RTSPResult
    static name: string
}
}
export default GstRtsp