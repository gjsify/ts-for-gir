/**
 * Soup-2.4
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Soup {

export enum AddressFamily {
    INVALID,
    IPV4,
    IPV6,
}
export enum CacheResponse {
    FRESH,
    NEEDS_VALIDATION,
    STALE,
}
export enum CacheType {
    SINGLE_USER,
    SHARED,
}
export enum ConnectionState {
    NEW,
    CONNECTING,
    IDLE,
    IN_USE,
    REMOTE_DISCONNECTED,
    DISCONNECTED,
}
export enum CookieJarAcceptPolicy {
    ALWAYS,
    NEVER,
    NO_THIRD_PARTY,
    GRANDFATHERED_THIRD_PARTY,
}
export enum DateFormat {
    HTTP,
    COOKIE,
    RFC2822,
    ISO8601_COMPACT,
    ISO8601_FULL,
    ISO8601,
    ISO8601_XMLRPC,
}
export enum Encoding {
    UNRECOGNIZED,
    NONE,
    CONTENT_LENGTH,
    EOF,
    CHUNKED,
    BYTERANGES,
}
export enum HTTPVersion {
    HTTP_1_0,
    HTTP_1_1,
}
export enum KnownStatusCode {
    NONE,
    CANCELLED,
    CANT_RESOLVE,
    CANT_RESOLVE_PROXY,
    CANT_CONNECT,
    CANT_CONNECT_PROXY,
    SSL_FAILED,
    IO_ERROR,
    MALFORMED,
    TRY_AGAIN,
    TOO_MANY_REDIRECTS,
    TLS_FAILED,
    CONTINUE,
    SWITCHING_PROTOCOLS,
    PROCESSING,
    OK,
    CREATED,
    ACCEPTED,
    NON_AUTHORITATIVE,
    NO_CONTENT,
    RESET_CONTENT,
    PARTIAL_CONTENT,
    MULTI_STATUS,
    MULTIPLE_CHOICES,
    MOVED_PERMANENTLY,
    FOUND,
    MOVED_TEMPORARILY,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    NOT_APPEARING_IN_THIS_PROTOCOL,
    TEMPORARY_REDIRECT,
    BAD_REQUEST,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTHENTICATION_REQUIRED,
    PROXY_UNAUTHORIZED,
    REQUEST_TIMEOUT,
    CONFLICT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    REQUEST_ENTITY_TOO_LARGE,
    REQUEST_URI_TOO_LONG,
    UNSUPPORTED_MEDIA_TYPE,
    REQUESTED_RANGE_NOT_SATISFIABLE,
    INVALID_RANGE,
    EXPECTATION_FAILED,
    UNPROCESSABLE_ENTITY,
    LOCKED,
    FAILED_DEPENDENCY,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    HTTP_VERSION_NOT_SUPPORTED,
    INSUFFICIENT_STORAGE,
    NOT_EXTENDED,
}
export enum LoggerLogLevel {
    NONE,
    MINIMAL,
    HEADERS,
    BODY,
}
export enum MemoryUse {
    STATIC,
    TAKE,
    COPY,
    TEMPORARY,
}
export enum MessageHeadersType {
    REQUEST,
    RESPONSE,
    MULTIPART,
}
export enum MessagePriority {
    VERY_LOW,
    LOW,
    NORMAL,
    HIGH,
    VERY_HIGH,
}
export enum RequestError {
    BAD_URI,
    UNSUPPORTED_URI_SCHEME,
    PARSING,
    ENCODING,
}
export enum RequesterError {
    BAD_URI,
    UNSUPPORTED_URI_SCHEME,
}
export enum SameSitePolicy {
    NONE,
    LAX,
    STRICT,
}
export enum SocketIOStatus {
    OK,
    WOULD_BLOCK,
    EOF,
    ERROR,
}
export enum Status {
    NONE,
    CANCELLED,
    CANT_RESOLVE,
    CANT_RESOLVE_PROXY,
    CANT_CONNECT,
    CANT_CONNECT_PROXY,
    SSL_FAILED,
    IO_ERROR,
    MALFORMED,
    TRY_AGAIN,
    TOO_MANY_REDIRECTS,
    TLS_FAILED,
    CONTINUE,
    SWITCHING_PROTOCOLS,
    PROCESSING,
    OK,
    CREATED,
    ACCEPTED,
    NON_AUTHORITATIVE,
    NO_CONTENT,
    RESET_CONTENT,
    PARTIAL_CONTENT,
    MULTI_STATUS,
    MULTIPLE_CHOICES,
    MOVED_PERMANENTLY,
    FOUND,
    MOVED_TEMPORARILY,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    NOT_APPEARING_IN_THIS_PROTOCOL,
    TEMPORARY_REDIRECT,
    PERMANENT_REDIRECT,
    BAD_REQUEST,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTHENTICATION_REQUIRED,
    PROXY_UNAUTHORIZED,
    REQUEST_TIMEOUT,
    CONFLICT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    REQUEST_ENTITY_TOO_LARGE,
    REQUEST_URI_TOO_LONG,
    UNSUPPORTED_MEDIA_TYPE,
    REQUESTED_RANGE_NOT_SATISFIABLE,
    INVALID_RANGE,
    EXPECTATION_FAILED,
    UNPROCESSABLE_ENTITY,
    LOCKED,
    FAILED_DEPENDENCY,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    HTTP_VERSION_NOT_SUPPORTED,
    INSUFFICIENT_STORAGE,
    NOT_EXTENDED,
}
export enum TLDError {
    INVALID_HOSTNAME,
    IS_IP_ADDRESS,
    NOT_ENOUGH_DOMAINS,
    NO_BASE_DOMAIN,
    NO_PSL_DATA,
}
export enum WebsocketCloseCode {
    NORMAL,
    GOING_AWAY,
    PROTOCOL_ERROR,
    UNSUPPORTED_DATA,
    NO_STATUS,
    ABNORMAL,
    BAD_DATA,
    POLICY_VIOLATION,
    TOO_BIG,
    NO_EXTENSION,
    SERVER_ERROR,
    TLS_HANDSHAKE,
}
export enum WebsocketConnectionType {
    UNKNOWN,
    CLIENT,
    SERVER,
}
export enum WebsocketDataType {
    TEXT,
    BINARY,
}
export enum WebsocketError {
    FAILED,
    NOT_WEBSOCKET,
    BAD_HANDSHAKE,
    BAD_ORIGIN,
}
export enum WebsocketState {
    OPEN,
    CLOSING,
    CLOSED,
}
export enum XMLRPCError {
    ARGUMENTS,
    RETVAL,
}
export enum XMLRPCFault {
    PARSE_ERROR_NOT_WELL_FORMED,
    PARSE_ERROR_UNSUPPORTED_ENCODING,
    PARSE_ERROR_INVALID_CHARACTER_FOR_ENCODING,
    SERVER_ERROR_INVALID_XML_RPC,
    SERVER_ERROR_REQUESTED_METHOD_NOT_FOUND,
    SERVER_ERROR_INVALID_METHOD_PARAMETERS,
    SERVER_ERROR_INTERNAL_XML_RPC_ERROR,
    APPLICATION_ERROR,
    SYSTEM_ERROR,
    TRANSPORT_ERROR,
}
export enum Cacheability {
    CACHEABLE,
    UNCACHEABLE,
    INVALIDATES,
    VALIDATES,
}
export enum Expectation {
    UNRECOGNIZED,
    CONTINUE,
}
export enum MessageFlags {
    NO_REDIRECT,
    CAN_REBUILD,
    OVERWRITE_CHUNKS,
    CONTENT_DECODED,
    CERTIFICATE_TRUSTED,
    NEW_CONNECTION,
    IDEMPOTENT,
    IGNORE_CONNECTION_LIMITS,
    DO_NOT_USE_AUTH_CACHE,
}
export enum ServerListenOptions {
    HTTPS,
    IPV4_ONLY,
    IPV6_ONLY,
}
export const ADDRESS_ANY_PORT: number
export const ADDRESS_FAMILY: string
export const ADDRESS_NAME: string
export const ADDRESS_PHYSICAL: string
export const ADDRESS_PORT: string
export const ADDRESS_PROTOCOL: string
export const ADDRESS_SOCKADDR: string
export const AUTH_DOMAIN_ADD_PATH: string
export const AUTH_DOMAIN_BASIC_AUTH_CALLBACK: string
export const AUTH_DOMAIN_BASIC_AUTH_DATA: string
export const AUTH_DOMAIN_DIGEST_AUTH_CALLBACK: string
export const AUTH_DOMAIN_DIGEST_AUTH_DATA: string
export const AUTH_DOMAIN_FILTER: string
export const AUTH_DOMAIN_FILTER_DATA: string
export const AUTH_DOMAIN_GENERIC_AUTH_CALLBACK: string
export const AUTH_DOMAIN_GENERIC_AUTH_DATA: string
export const AUTH_DOMAIN_PROXY: string
export const AUTH_DOMAIN_REALM: string
export const AUTH_DOMAIN_REMOVE_PATH: string
export const AUTH_HOST: string
export const AUTH_IS_AUTHENTICATED: string
export const AUTH_IS_FOR_PROXY: string
export const AUTH_REALM: string
export const AUTH_SCHEME_NAME: string
export const CHAR_HTTP_CTL: number
export const CHAR_HTTP_SEPARATOR: number
export const CHAR_URI_GEN_DELIMS: number
export const CHAR_URI_PERCENT_ENCODED: number
export const CHAR_URI_SUB_DELIMS: number
export const COOKIE_JAR_ACCEPT_POLICY: string
export const COOKIE_JAR_DB_FILENAME: string
export const COOKIE_JAR_READ_ONLY: string
export const COOKIE_JAR_TEXT_FILENAME: string
export const COOKIE_MAX_AGE_ONE_DAY: number
export const COOKIE_MAX_AGE_ONE_HOUR: number
export const COOKIE_MAX_AGE_ONE_WEEK: number
export const COOKIE_MAX_AGE_ONE_YEAR: number
export const FORM_MIME_TYPE_MULTIPART: string
export const FORM_MIME_TYPE_URLENCODED: string
export const HSTS_ENFORCER_DB_FILENAME: string
export const HSTS_POLICY_MAX_AGE_PAST: number
export const LOGGER_LEVEL: string
export const LOGGER_MAX_BODY_SIZE: string
export const MAJOR_VERSION: number
export const MESSAGE_FIRST_PARTY: string
export const MESSAGE_FLAGS: string
export const MESSAGE_HTTP_VERSION: string
export const MESSAGE_IS_TOP_LEVEL_NAVIGATION: string
export const MESSAGE_METHOD: string
export const MESSAGE_PRIORITY: string
export const MESSAGE_REASON_PHRASE: string
export const MESSAGE_REQUEST_BODY: string
export const MESSAGE_REQUEST_BODY_DATA: string
export const MESSAGE_REQUEST_HEADERS: string
export const MESSAGE_RESPONSE_BODY: string
export const MESSAGE_RESPONSE_BODY_DATA: string
export const MESSAGE_RESPONSE_HEADERS: string
export const MESSAGE_SERVER_SIDE: string
export const MESSAGE_SITE_FOR_COOKIES: string
export const MESSAGE_STATUS_CODE: string
export const MESSAGE_TLS_CERTIFICATE: string
export const MESSAGE_TLS_ERRORS: string
export const MESSAGE_URI: string
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const REQUEST_SESSION: string
export const REQUEST_URI: string
export const SERVER_ASYNC_CONTEXT: string
export const SERVER_HTTPS_ALIASES: string
export const SERVER_HTTP_ALIASES: string
export const SERVER_INTERFACE: string
export const SERVER_PORT: string
export const SERVER_RAW_PATHS: string
export const SERVER_SERVER_HEADER: string
export const SERVER_SSL_CERT_FILE: string
export const SERVER_SSL_KEY_FILE: string
export const SERVER_TLS_CERTIFICATE: string
export const SESSION_ACCEPT_LANGUAGE: string
export const SESSION_ACCEPT_LANGUAGE_AUTO: string
export const SESSION_ASYNC_CONTEXT: string
export const SESSION_HTTPS_ALIASES: string
export const SESSION_HTTP_ALIASES: string
export const SESSION_IDLE_TIMEOUT: string
export const SESSION_LOCAL_ADDRESS: string
export const SESSION_MAX_CONNS: string
export const SESSION_MAX_CONNS_PER_HOST: string
export const SESSION_PROXY_RESOLVER: string
export const SESSION_PROXY_URI: string
export const SESSION_SSL_CA_FILE: string
export const SESSION_SSL_STRICT: string
export const SESSION_SSL_USE_SYSTEM_CA_FILE: string
export const SESSION_TIMEOUT: string
export const SESSION_TLS_DATABASE: string
export const SESSION_TLS_INTERACTION: string
export const SESSION_USER_AGENT: string
export const SESSION_USE_NTLM: string
export const SESSION_USE_THREAD_CONTEXT: string
export const SOCKET_ASYNC_CONTEXT: string
export const SOCKET_FLAG_NONBLOCKING: string
export const SOCKET_IS_SERVER: string
export const SOCKET_LOCAL_ADDRESS: string
export const SOCKET_REMOTE_ADDRESS: string
export const SOCKET_SSL_CREDENTIALS: string
export const SOCKET_SSL_FALLBACK: string
export const SOCKET_SSL_STRICT: string
export const SOCKET_TIMEOUT: string
export const SOCKET_TLS_CERTIFICATE: string
export const SOCKET_TLS_ERRORS: string
export const SOCKET_TRUSTED_CERTIFICATE: string
export const SOCKET_USE_THREAD_CONTEXT: string
export const VERSION_MIN_REQUIRED: number
export function checkVersion(major: number, minor: number, micro: number): boolean
export function cookieParse(header: string, origin: URI): Cookie | null
export function cookiesFromRequest(msg: Message): Cookie[]
export function cookiesFromResponse(msg: Message): Cookie[]
export function cookiesToCookieHeader(cookies: Cookie[]): string
export function cookiesToRequest(cookies: Cookie[], msg: Message): void
export function cookiesToResponse(cookies: Cookie[], msg: Message): void
export function formDecode(encodedForm: string): GLib.HashTable
export function formDecodeMultipart(msg: Message, fileControlName?: string | null): [ /* returnType */ GLib.HashTable | null, /* filename */ string | null, /* contentType */ string | null, /* file */ Buffer | null ]
export function formEncodeDatalist(formDataSet: GLib.Data): string
export function formEncodeHash(formDataSet: GLib.HashTable): string
export function formRequestNewFromDatalist(method: string, uri: string, formDataSet: GLib.Data): Message
export function formRequestNewFromHash(method: string, uri: string, formDataSet: GLib.HashTable): Message
export function formRequestNewFromMultipart(uri: string, multipart: Multipart): Message
export function getMajorVersion(): number
export function getMicroVersion(): number
export function getMinorVersion(): number
export function getResource(): Gio.Resource
export function headerContains(header: string, token: string): boolean
export function headerFreeParamList(paramList: GLib.HashTable): void
export function headerGStringAppendParam(string: GLib.String, name: string, value: string): void
export function headerGStringAppendParamQuoted(string: GLib.String, name: string, value: string): void
export function headerParseList(header: string): string[]
export function headerParseParamList(header: string): GLib.HashTable
export function headerParseParamListStrict(header: string): GLib.HashTable | null
export function headerParseQualityList(header: string): [ /* returnType */ string[], /* unacceptable */ string[] | null ]
export function headerParseSemiParamList(header: string): GLib.HashTable
export function headerParseSemiParamListStrict(header: string): GLib.HashTable | null
export function headersParse(str: string, len: number, dest: MessageHeaders): boolean
export function headersParseRequest(str: string, len: number, reqHeaders: MessageHeaders): [ /* returnType */ number, /* reqMethod */ string | null, /* reqPath */ string | null, /* ver */ HTTPVersion | null ]
export function headersParseResponse(str: string, len: number, headers: MessageHeaders): [ /* returnType */ boolean, /* ver */ HTTPVersion | null, /* statusCode */ number | null, /* reasonPhrase */ string | null ]
export function headersParseStatusLine(statusLine: string): [ /* returnType */ boolean, /* ver */ HTTPVersion | null, /* statusCode */ number | null, /* reasonPhrase */ string | null ]
export function httpErrorQuark(): GLib.Quark
export function messageHeadersIterInit(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
export function requestErrorQuark(): GLib.Quark
export function requesterErrorQuark(): GLib.Quark
export function statusGetPhrase(statusCode: number): string
export function statusProxify(statusCode: number): number
export function strCaseEqual(v1?: object | null, v2?: object | null): boolean
export function strCaseHash(key?: object | null): number
export function tldDomainIsPublicSuffix(domain: string): boolean
export function tldErrorQuark(): GLib.Quark
export function tldGetBaseDomain(hostname: string): string
export function uriDecode(part: string): string
export function uriEncode(part: string, escapeExtra?: string | null): string
export function uriNormalize(part: string, unescapeExtra?: string | null): string
export function valueArrayNew(): GObject.ValueArray
export function valueHashInsertValue(hash: GLib.HashTable, key: string, value: any): void
export function valueHashNew(): GLib.HashTable
export function websocketClientPrepareHandshake(msg: Message, origin?: string | null, protocols?: string[] | null): void
export function websocketClientPrepareHandshakeWithExtensions(msg: Message, origin?: string | null, protocols?: string[] | null, supportedExtensions?: GObject.TypeClass[] | null): void
export function websocketClientVerifyHandshake(msg: Message): boolean
export function websocketClientVerifyHandshakeWithExtensions(msg: Message, supportedExtensions?: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* acceptedExtensions */ WebsocketExtension[] | null ]
export function websocketErrorGetQuark(): GLib.Quark
export function websocketServerCheckHandshake(msg: Message, origin?: string | null, protocols?: string[] | null): boolean
export function websocketServerCheckHandshakeWithExtensions(msg: Message, origin?: string | null, protocols?: string[] | null, supportedExtensions?: GObject.TypeClass[] | null): boolean
export function websocketServerProcessHandshake(msg: Message, expectedOrigin?: string | null, protocols?: string[] | null): boolean
export function websocketServerProcessHandshakeWithExtensions(msg: Message, expectedOrigin?: string | null, protocols?: string[] | null, supportedExtensions?: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* acceptedExtensions */ WebsocketExtension[] | null ]
export function xmlrpcBuildMethodCall(methodName: string, params: any): string | null
export function xmlrpcBuildMethodResponse(value: any): string | null
export function xmlrpcBuildRequest(methodName: string, params: GLib.Variant): string
export function xmlrpcBuildResponse(value: GLib.Variant): string
export function xmlrpcErrorQuark(): GLib.Quark
export function xmlrpcFaultQuark(): GLib.Quark
export function xmlrpcMessageNew(uri: string, methodName: string, params: GLib.Variant): Message
export function xmlrpcMessageSetResponse(msg: Message, value: GLib.Variant): boolean
export function xmlrpcParseMethodCall(methodCall: string, length: number): [ /* returnType */ boolean, /* methodName */ string, /* params */ GObject.ValueArray ]
export function xmlrpcParseMethodResponse(methodResponse: string, length: number): [ /* returnType */ boolean, /* value */ any ]
export function xmlrpcParseRequest(methodCall: string, length: number): [ /* returnType */ string, /* params */ XMLRPCParams ]
export function xmlrpcParseResponse(methodResponse: string, length: number, signature?: string | null): GLib.Variant
export function xmlrpcVariantGetDatetime(variant: GLib.Variant): Date
export function xmlrpcVariantNewDatetime(date: Date): GLib.Variant
export interface AddressCallback {
    (addr: Address, status: number): void
}
export interface AuthDomainBasicAuthCallback {
    (domain: AuthDomainBasic, msg: Message, username: string, password: string): boolean
}
export interface AuthDomainDigestAuthCallback {
    (domain: AuthDomainDigest, msg: Message, username: string): string | null
}
export interface AuthDomainFilter {
    (domain: AuthDomain, msg: Message): boolean
}
export interface AuthDomainGenericAuthCallback {
    (domain: AuthDomain, msg: Message, username: string): boolean
}
export interface ChunkAllocator {
    (msg: Message, maxLen: number): Buffer | null
}
export interface LoggerFilter {
    (logger: Logger, msg: Message): LoggerLogLevel
}
export interface LoggerPrinter {
    (logger: Logger, level: LoggerLogLevel, direction: number, data: string): void
}
export interface MessageHeadersForeachFunc {
    (name: string, value: string): void
}
export interface PasswordManagerCallback {
    (passwordManager: PasswordManager, msg: Message, auth: Auth, retrying: boolean): void
}
export interface ProxyResolverCallback {
    (proxyResolver: ProxyResolver, msg: Message, arg: number, addr: Address): void
}
export interface ProxyURIResolverCallback {
    (resolver: ProxyURIResolver, status: number, proxyUri: URI): void
}
export interface ServerCallback {
    (server: Server, msg: Message, path: string, query: GLib.HashTable | null, client: ClientContext): void
}
export interface ServerWebsocketCallback {
    (server: Server, connection: WebsocketConnection, path: string, client: ClientContext): void
}
export interface SessionCallback {
    (session: Session, msg: Message): void
}
export interface SessionConnectProgressCallback {
    (session: Session, event: Gio.SocketClientEvent, connection: Gio.IOStream): void
}
export interface SocketCallback {
    (sock: Socket, status: number): void
}
export class PasswordManager {
    /* Methods of Soup.PasswordManager */
    getPasswordsAsync(msg: Message, auth: Auth, retrying: boolean, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback): void
    getPasswordsSync(msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null): void
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.PasswordManager */
    vfuncGetPasswordsAsync(msg: Message, auth: Auth, retrying: boolean, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback): void
    vfuncGetPasswordsSync(msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null): void
    /* Virtual methods of Soup.SessionFeature */
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    static name: string
}
export class ProxyResolver {
    /* Methods of Soup.ProxyResolver */
    getProxyAsync(msg: Message, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback): void
    getProxySync(msg: Message, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* addr */ Address ]
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.ProxyResolver */
    vfuncGetProxyAsync(msg: Message, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback): void
    vfuncGetProxySync(msg: Message, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* addr */ Address ]
    /* Virtual methods of Soup.SessionFeature */
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    static name: string
}
export class ProxyURIResolver {
    /* Methods of Soup.ProxyURIResolver */
    getProxyUriAsync(uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    getProxyUriSync(uri: URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxyUri */ URI ]
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.ProxyURIResolver */
    vfuncGetProxyUriAsync(uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    vfuncGetProxyUriSync(uri: URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxyUri */ URI ]
    /* Virtual methods of Soup.SessionFeature */
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    static name: string
}
export class SessionFeature {
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.SessionFeature */
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    static name: string
}
export interface Address_ConstructProps extends GObject.Object_ConstructProps {
    family?: AddressFamily
    name?: string
    port?: number
    protocol?: string
    sockaddr?: object
}
export class Address {
    /* Properties of Soup.Address */
    readonly physical: string
    /* Fields of Soup.Address */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Address */
    equalByIp(addr2: Address): boolean
    equalByName(addr2: Address): boolean
    getGsockaddr(): Gio.SocketAddress
    getName(): string | null
    getPhysical(): string | null
    getPort(): number
    getSockaddr(len: number): object | null
    hashByIp(): number
    hashByName(): number
    isResolved(): boolean
    resolveAsync(asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: AddressCallback): void
    resolveSync(cancellable?: Gio.Cancellable | null): number
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): Gio.SocketAddressEnumerator
    proxyEnumerate(): Gio.SocketAddressEnumerator
    toString(): string
    /* Virtual methods of Soup.Address */
    vfuncEnumerate(): Gio.SocketAddressEnumerator
    vfuncProxyEnumerate(): Gio.SocketAddressEnumerator
    vfuncToString(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Address_ConstructProps)
    _init (config?: Address_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, port: number): Address
    static newAny(family: AddressFamily, port: number): Address
    static newFromSockaddr(sa: object | null, len: number): Address
    static $gtype: GObject.Type
}
export interface Auth_ConstructProps extends GObject.Object_ConstructProps {
    host?: string
    isForProxy?: boolean
    realm?: string
}
export class Auth {
    /* Properties of Soup.Auth */
    host: string
    readonly isAuthenticated: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of Soup.Auth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Message, authHeader: string): boolean
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
    /* Virtual methods of Soup.Auth */
    vfuncAuthenticate(username: string, password: string): void
    vfuncCanAuthenticate(): boolean
    vfuncGetAuthorization(msg: Message): string
    vfuncGetProtectionSpace(sourceUri: URI): string[]
    vfuncIsAuthenticated(): boolean
    vfuncIsReady(msg: Message): boolean
    vfuncUpdate(msg: Message, authHeader: GLib.HashTable): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-for-proxy", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realm", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme-name", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Auth_ConstructProps)
    _init (config?: Auth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type, msg: Message, authHeader: string): Auth
    static $gtype: GObject.Type
}
export interface AuthBasic_ConstructProps extends Auth_ConstructProps {
}
export class AuthBasic {
    /* Properties of Soup.Auth */
    host: string
    readonly isAuthenticated: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of Soup.Auth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Message, authHeader: string): boolean
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
    /* Virtual methods of Soup.Auth */
    vfuncAuthenticate(username: string, password: string): void
    vfuncCanAuthenticate(): boolean
    vfuncGetAuthorization(msg: Message): string
    vfuncGetProtectionSpace(sourceUri: URI): string[]
    vfuncIsAuthenticated(): boolean
    vfuncIsReady(msg: Message): boolean
    vfuncUpdate(msg: Message, authHeader: GLib.HashTable): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realm", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthBasic_ConstructProps)
    _init (config?: AuthBasic_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AuthDigest_ConstructProps extends Auth_ConstructProps {
}
export class AuthDigest {
    /* Properties of Soup.Auth */
    host: string
    readonly isAuthenticated: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of Soup.Auth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Message, authHeader: string): boolean
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
    /* Virtual methods of Soup.Auth */
    vfuncAuthenticate(username: string, password: string): void
    vfuncCanAuthenticate(): boolean
    vfuncGetAuthorization(msg: Message): string
    vfuncGetProtectionSpace(sourceUri: URI): string[]
    vfuncIsAuthenticated(): boolean
    vfuncIsReady(msg: Message): boolean
    vfuncUpdate(msg: Message, authHeader: GLib.HashTable): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realm", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthDigest_ConstructProps)
    _init (config?: AuthDigest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AuthDomain_ConstructProps extends GObject.Object_ConstructProps {
    addPath?: string
    filter?: AuthDomainFilter
    filterData?: object
    genericAuthCallback?: AuthDomainGenericAuthCallback
    genericAuthData?: object
    proxy?: boolean
    realm?: string
    removePath?: string
}
export class AuthDomain {
    /* Properties of Soup.AuthDomain */
    addPath: string
    filter: AuthDomainFilter
    filterData: object
    genericAuthCallback: AuthDomainGenericAuthCallback
    genericAuthData: object
    removePath: string
    /* Fields of Soup.AuthDomain */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.AuthDomain */
    accepts(msg: Message): string | null
    challenge(msg: Message): void
    checkPassword(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    getRealm(): string
    setFilter(filter: AuthDomainFilter): void
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void
    tryGenericAuthCallback(msg: Message, username: string): boolean
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
    /* Virtual methods of Soup.AuthDomain */
    vfuncAccepts(msg: Message, header: string): string
    vfuncChallenge(msg: Message): string
    vfuncCheckPassword(msg: Message, username: string, password: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::add-path", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-path", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remove-path", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-path", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthDomain_ConstructProps)
    _init (config?: AuthDomain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AuthDomainBasic_ConstructProps extends AuthDomain_ConstructProps {
    authCallback?: AuthDomainBasicAuthCallback
    authData?: object
}
export class AuthDomainBasic {
    /* Properties of Soup.AuthDomainBasic */
    authCallback: AuthDomainBasicAuthCallback
    authData: object
    /* Properties of Soup.AuthDomain */
    addPath: string
    filter: AuthDomainFilter
    filterData: object
    genericAuthCallback: AuthDomainGenericAuthCallback
    genericAuthData: object
    removePath: string
    /* Fields of Soup.AuthDomainBasic */
    parent: AuthDomain
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.AuthDomainBasic */
    setAuthCallback(callback: AuthDomainBasicAuthCallback): void
    /* Methods of Soup.AuthDomain */
    accepts(msg: Message): string | null
    challenge(msg: Message): void
    checkPassword(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    getRealm(): string
    setFilter(filter: AuthDomainFilter): void
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void
    tryGenericAuthCallback(msg: Message, username: string): boolean
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
    /* Virtual methods of Soup.AuthDomain */
    vfuncAccepts(msg: Message, header: string): string
    vfuncChallenge(msg: Message): string
    vfuncCheckPassword(msg: Message, username: string, password: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::add-path", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-path", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remove-path", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-path", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthDomainBasic_ConstructProps)
    _init (config?: AuthDomainBasic_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AuthDomainDigest_ConstructProps extends AuthDomain_ConstructProps {
    authCallback?: AuthDomainDigestAuthCallback
    authData?: object
}
export class AuthDomainDigest {
    /* Properties of Soup.AuthDomainDigest */
    authCallback: AuthDomainDigestAuthCallback
    authData: object
    /* Properties of Soup.AuthDomain */
    addPath: string
    filter: AuthDomainFilter
    filterData: object
    genericAuthCallback: AuthDomainGenericAuthCallback
    genericAuthData: object
    removePath: string
    /* Fields of Soup.AuthDomainDigest */
    parent: AuthDomain
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.AuthDomainDigest */
    setAuthCallback(callback: AuthDomainDigestAuthCallback): void
    /* Methods of Soup.AuthDomain */
    accepts(msg: Message): string | null
    challenge(msg: Message): void
    checkPassword(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    getRealm(): string
    setFilter(filter: AuthDomainFilter): void
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void
    tryGenericAuthCallback(msg: Message, username: string): boolean
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
    /* Virtual methods of Soup.AuthDomain */
    vfuncAccepts(msg: Message, header: string): string
    vfuncChallenge(msg: Message): string
    vfuncCheckPassword(msg: Message, username: string, password: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::add-path", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-path", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remove-path", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-path", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthDomainDigest_ConstructProps)
    _init (config?: AuthDomainDigest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static encodePassword(username: string, realm: string, password: string): string
    static $gtype: GObject.Type
}
export interface AuthManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class AuthManager {
    /* Fields of Soup.AuthManager */
    parent: GObject.Object
    priv: AuthManagerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.AuthManager */
    clearCachedCredentials(): void
    useAuth(uri: URI, auth: Auth): void
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.AuthManager */
    vfuncAuthenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.AuthManager */
    connect(sigName: "authenticate", callback: (($obj: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    on(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthManager_ConstructProps)
    _init (config?: AuthManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AuthNTLM_ConstructProps extends Auth_ConstructProps {
}
export class AuthNTLM {
    /* Properties of Soup.Auth */
    host: string
    readonly isAuthenticated: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of Soup.Auth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Message, authHeader: string): boolean
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
    /* Virtual methods of Soup.Auth */
    vfuncAuthenticate(username: string, password: string): void
    vfuncCanAuthenticate(): boolean
    vfuncGetAuthorization(msg: Message): string
    vfuncGetProtectionSpace(sourceUri: URI): string[]
    vfuncIsAuthenticated(): boolean
    vfuncIsReady(msg: Message): boolean
    vfuncUpdate(msg: Message, authHeader: GLib.HashTable): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realm", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthNTLM_ConstructProps)
    _init (config?: AuthNTLM_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AuthNegotiate_ConstructProps extends Auth_ConstructProps {
}
export class AuthNegotiate {
    /* Properties of Soup.Auth */
    host: string
    readonly isAuthenticated: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of Soup.Auth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Message, authHeader: string): boolean
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
    /* Virtual methods of Soup.Auth */
    vfuncAuthenticate(username: string, password: string): void
    vfuncCanAuthenticate(): boolean
    vfuncGetAuthorization(msg: Message): string
    vfuncGetProtectionSpace(sourceUri: URI): string[]
    vfuncIsAuthenticated(): boolean
    vfuncIsReady(msg: Message): boolean
    vfuncUpdate(msg: Message, authHeader: GLib.HashTable): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realm", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthNegotiate_ConstructProps)
    _init (config?: AuthNegotiate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static supported(): boolean
    static $gtype: GObject.Type
}
export interface Cache_ConstructProps extends GObject.Object_ConstructProps {
    cacheDir?: string
    cacheType?: CacheType
}
export class Cache {
    /* Fields of Soup.Cache */
    parentInstance: GObject.Object
    priv: CachePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Cache */
    clear(): void
    dump(): void
    flush(): void
    getMaxSize(): number
    load(): void
    setMaxSize(maxSize: number): void
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.Cache */
    vfuncGetCacheability(msg: Message): Cacheability
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Cache_ConstructProps)
    _init (config?: Cache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cacheDir: string | null, cacheType: CacheType): Cache
    static $gtype: GObject.Type
}
export interface ContentDecoder_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentDecoder {
    /* Fields of Soup.ContentDecoder */
    parent: GObject.Object
    priv: ContentDecoderPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.ContentDecoder */
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContentDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContentDecoder_ConstructProps)
    _init (config?: ContentDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ContentSniffer_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentSniffer {
    /* Fields of Soup.ContentSniffer */
    parent: GObject.Object
    priv: ContentSnifferPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.ContentSniffer */
    getBufferSize(): number
    sniff(msg: Message, buffer: Buffer): [ /* returnType */ string, /* params */ GLib.HashTable | null ]
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.ContentSniffer */
    vfuncGetBufferSize(): number
    vfuncSniff(msg: Message, buffer: Buffer): [ /* returnType */ string, /* params */ GLib.HashTable | null ]
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContentSniffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentSniffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContentSniffer_ConstructProps)
    _init (config?: ContentSniffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentSniffer
    static $gtype: GObject.Type
}
export interface CookieJar_ConstructProps extends GObject.Object_ConstructProps {
    acceptPolicy?: CookieJarAcceptPolicy
    readOnly?: boolean
}
export class CookieJar {
    /* Properties of Soup.CookieJar */
    acceptPolicy: CookieJarAcceptPolicy
    /* Fields of Soup.CookieJar */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.CookieJar */
    addCookie(cookie: Cookie): void
    addCookieFull(cookie: Cookie, uri?: URI | null, firstParty?: URI | null): void
    addCookieWithFirstParty(firstParty: URI, cookie: Cookie): void
    allCookies(): Cookie[]
    deleteCookie(cookie: Cookie): void
    getAcceptPolicy(): CookieJarAcceptPolicy
    getCookieList(uri: URI, forHttp: boolean): Cookie[]
    getCookieListWithSameSiteInfo(uri: URI, topLevel: URI | null, siteForCookies: URI | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    getCookies(uri: URI, forHttp: boolean): string | null
    isPersistent(): boolean
    save(): void
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    setCookie(uri: URI, cookie: string): void
    setCookieWithFirstParty(uri: URI, firstParty: URI, cookie: string): void
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.CookieJar */
    vfuncChanged(oldCookie: Cookie, newCookie: Cookie): void
    vfuncIsPersistent(): boolean
    vfuncSave(): void
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJar, oldCookie: Cookie, newCookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJar, oldCookie: Cookie, newCookie: Cookie) => void)): number
    emit(sigName: "changed", oldCookie: Cookie, newCookie: Cookie): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CookieJar_ConstructProps)
    _init (config?: CookieJar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CookieJar
    static $gtype: GObject.Type
}
export interface CookieJarDB_ConstructProps extends CookieJar_ConstructProps {
    filename?: string
}
export class CookieJarDB {
    /* Properties of Soup.CookieJar */
    acceptPolicy: CookieJarAcceptPolicy
    /* Fields of Soup.CookieJarDB */
    parent: CookieJar
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.CookieJar */
    addCookie(cookie: Cookie): void
    addCookieFull(cookie: Cookie, uri?: URI | null, firstParty?: URI | null): void
    addCookieWithFirstParty(firstParty: URI, cookie: Cookie): void
    allCookies(): Cookie[]
    deleteCookie(cookie: Cookie): void
    getAcceptPolicy(): CookieJarAcceptPolicy
    getCookieList(uri: URI, forHttp: boolean): Cookie[]
    getCookieListWithSameSiteInfo(uri: URI, topLevel: URI | null, siteForCookies: URI | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    getCookies(uri: URI, forHttp: boolean): string | null
    isPersistent(): boolean
    save(): void
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    setCookie(uri: URI, cookie: string): void
    setCookieWithFirstParty(uri: URI, firstParty: URI, cookie: string): void
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.CookieJar */
    vfuncChanged(oldCookie: Cookie, newCookie: Cookie): void
    vfuncIsPersistent(): boolean
    vfuncSave(): void
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarDB, oldCookie: Cookie, newCookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJarDB, oldCookie: Cookie, newCookie: Cookie) => void)): number
    emit(sigName: "changed", oldCookie: Cookie, newCookie: Cookie): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CookieJarDB_ConstructProps)
    _init (config?: CookieJarDB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, readOnly: boolean): CookieJarDB
    static new(): CookieJarDB
    static $gtype: GObject.Type
}
export interface CookieJarText_ConstructProps extends CookieJar_ConstructProps {
    filename?: string
}
export class CookieJarText {
    /* Properties of Soup.CookieJar */
    acceptPolicy: CookieJarAcceptPolicy
    /* Fields of Soup.CookieJarText */
    parent: CookieJar
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.CookieJar */
    addCookie(cookie: Cookie): void
    addCookieFull(cookie: Cookie, uri?: URI | null, firstParty?: URI | null): void
    addCookieWithFirstParty(firstParty: URI, cookie: Cookie): void
    allCookies(): Cookie[]
    deleteCookie(cookie: Cookie): void
    getAcceptPolicy(): CookieJarAcceptPolicy
    getCookieList(uri: URI, forHttp: boolean): Cookie[]
    getCookieListWithSameSiteInfo(uri: URI, topLevel: URI | null, siteForCookies: URI | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    getCookies(uri: URI, forHttp: boolean): string | null
    isPersistent(): boolean
    save(): void
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    setCookie(uri: URI, cookie: string): void
    setCookieWithFirstParty(uri: URI, firstParty: URI, cookie: string): void
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.CookieJar */
    vfuncChanged(oldCookie: Cookie, newCookie: Cookie): void
    vfuncIsPersistent(): boolean
    vfuncSave(): void
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarText, oldCookie: Cookie, newCookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJarText, oldCookie: Cookie, newCookie: Cookie) => void)): number
    emit(sigName: "changed", oldCookie: Cookie, newCookie: Cookie): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CookieJarText_ConstructProps)
    _init (config?: CookieJarText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, readOnly: boolean): CookieJarText
    static new(): CookieJarText
    static $gtype: GObject.Type
}
export interface HSTSEnforcer_ConstructProps extends GObject.Object_ConstructProps {
}
export class HSTSEnforcer {
    /* Fields of Soup.HSTSEnforcer */
    parent: GObject.Object
    priv: HSTSEnforcerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.HSTSEnforcer */
    getDomains(sessionPolicies: boolean): string[]
    getPolicies(sessionPolicies: boolean): HSTSPolicy[]
    hasValidPolicy(domain: string): boolean
    isPersistent(): boolean
    setPolicy(policy: HSTSPolicy): void
    setSessionPolicy(domain: string, includeSubdomains: boolean): void
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.HSTSEnforcer */
    vfuncChanged(oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    vfuncHasValidPolicy(domain: string): boolean
    vfuncHstsEnforced(message: Message): void
    vfuncIsPersistent(): boolean
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.HSTSEnforcer */
    connect(sigName: "changed", callback: (($obj: HSTSEnforcer, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void)): number
    connect_after(sigName: "changed", callback: (($obj: HSTSEnforcer, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void)): number
    emit(sigName: "changed", oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hsts-enforced", callback: (($obj: HSTSEnforcer, message: Message) => void)): number
    connect_after(sigName: "hsts-enforced", callback: (($obj: HSTSEnforcer, message: Message) => void)): number
    emit(sigName: "hsts-enforced", message: Message): void
    on(sigName: "hsts-enforced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hsts-enforced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hsts-enforced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HSTSEnforcer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HSTSEnforcer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HSTSEnforcer_ConstructProps)
    _init (config?: HSTSEnforcer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HSTSEnforcer
    static $gtype: GObject.Type
}
export interface HSTSEnforcerDB_ConstructProps extends HSTSEnforcer_ConstructProps {
    filename?: string
}
export class HSTSEnforcerDB {
    /* Fields of Soup.HSTSEnforcerDB */
    parent: HSTSEnforcer
    priv: HSTSEnforcerDBPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.HSTSEnforcer */
    getDomains(sessionPolicies: boolean): string[]
    getPolicies(sessionPolicies: boolean): HSTSPolicy[]
    hasValidPolicy(domain: string): boolean
    isPersistent(): boolean
    setPolicy(policy: HSTSPolicy): void
    setSessionPolicy(domain: string, includeSubdomains: boolean): void
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.HSTSEnforcer */
    vfuncChanged(oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    vfuncHasValidPolicy(domain: string): boolean
    vfuncHstsEnforced(message: Message): void
    vfuncIsPersistent(): boolean
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.HSTSEnforcer */
    connect(sigName: "changed", callback: (($obj: HSTSEnforcerDB, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void)): number
    connect_after(sigName: "changed", callback: (($obj: HSTSEnforcerDB, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void)): number
    emit(sigName: "changed", oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hsts-enforced", callback: (($obj: HSTSEnforcerDB, message: Message) => void)): number
    connect_after(sigName: "hsts-enforced", callback: (($obj: HSTSEnforcerDB, message: Message) => void)): number
    emit(sigName: "hsts-enforced", message: Message): void
    on(sigName: "hsts-enforced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hsts-enforced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hsts-enforced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HSTSEnforcerDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HSTSEnforcerDB, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HSTSEnforcerDB_ConstructProps)
    _init (config?: HSTSEnforcerDB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): HSTSEnforcerDB
    static new(): HSTSEnforcerDB
    static $gtype: GObject.Type
}
export interface Logger_ConstructProps extends GObject.Object_ConstructProps {
    level?: LoggerLogLevel
    maxBodySize?: number
}
export class Logger {
    /* Properties of Soup.Logger */
    level: LoggerLogLevel
    maxBodySize: number
    /* Fields of Soup.Logger */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Logger */
    attach(session: Session): void
    detach(session: Session): void
    setPrinter(printer: LoggerPrinter): void
    setRequestFilter(requestFilter: LoggerFilter): void
    setResponseFilter(responseFilter: LoggerFilter): void
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.Logger */
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::level", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-body-size", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-body-size", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-body-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-body-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-body-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Logger_ConstructProps)
    _init (config?: Logger_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(level: LoggerLogLevel, maxBodySize: number): Logger
    static $gtype: GObject.Type
}
export interface Message_ConstructProps extends GObject.Object_ConstructProps {
    firstParty?: URI
    flags?: MessageFlags
    httpVersion?: HTTPVersion
    isTopLevelNavigation?: boolean
    method?: string
    priority?: MessagePriority
    reasonPhrase?: string
    serverSide?: boolean
    siteForCookies?: URI
    statusCode?: number
    tlsCertificate?: Gio.TlsCertificate
    tlsErrors?: Gio.TlsCertificateFlags
    uri?: URI
}
export class Message {
    /* Properties of Soup.Message */
    firstParty: URI
    flags: MessageFlags
    httpVersion: HTTPVersion
    isTopLevelNavigation: boolean
    method: string
    priority: MessagePriority
    reasonPhrase: string
    readonly requestBody: MessageBody
    readonly requestBodyData: any
    readonly requestHeaders: MessageHeaders
    readonly responseBody: MessageBody
    readonly responseBodyData: any
    readonly responseHeaders: MessageHeaders
    siteForCookies: URI
    statusCode: number
    tlsCertificate: Gio.TlsCertificate
    tlsErrors: Gio.TlsCertificateFlags
    uri: URI
    /* Fields of Soup.Message */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Message */
    contentSniffed(contentType: string, params: GLib.HashTable): void
    disableFeature(featureType: GObject.Type): void
    finished(): void
    getAddress(): Address
    getFirstParty(): URI
    getFlags(): MessageFlags
    getHttpVersion(): HTTPVersion
    getHttpsStatus(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    getIsTopLevelNavigation(): boolean
    getPriority(): MessagePriority
    getSiteForCookies(): URI
    getSoupRequest(): Request
    getUri(): URI
    gotBody(): void
    gotChunk(chunk: Buffer): void
    gotHeaders(): void
    gotInformational(): void
    isFeatureDisabled(featureType: GObject.Type): boolean
    isKeepalive(): boolean
    restarted(): void
    setChunkAllocator(allocator: ChunkAllocator): void
    setFirstParty(firstParty: URI): void
    setFlags(flags: MessageFlags): void
    setHttpVersion(version: HTTPVersion): void
    setIsTopLevelNavigation(isTopLevelNavigation: boolean): void
    setPriority(priority: MessagePriority): void
    setRedirect(statusCode: number, redirectUri: string): void
    setRequest(contentType: string | null, reqUse: MemoryUse, reqBody: any | null): void
    setResponse(contentType: string | null, respUse: MemoryUse, respBody: any | null): void
    setSiteForCookies(siteForCookies?: URI | null): void
    setStatus(statusCode: number): void
    setStatusFull(statusCode: number, reasonPhrase: string): void
    setUri(uri: URI): void
    starting(): void
    wroteBody(): void
    wroteBodyData(chunk: Buffer): void
    wroteChunk(): void
    wroteHeaders(): void
    wroteInformational(): void
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
    /* Virtual methods of Soup.Message */
    vfuncFinished(): void
    vfuncGotBody(): void
    vfuncGotChunk(chunk: Buffer): void
    vfuncGotHeaders(): void
    vfuncGotInformational(): void
    vfuncRestarted(): void
    vfuncStarting(): void
    vfuncWroteBody(): void
    vfuncWroteChunk(): void
    vfuncWroteHeaders(): void
    vfuncWroteInformational(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Message */
    connect(sigName: "content-sniffed", callback: (($obj: Message, type: string, params: GLib.HashTable) => void)): number
    connect_after(sigName: "content-sniffed", callback: (($obj: Message, type: string, params: GLib.HashTable) => void)): number
    emit(sigName: "content-sniffed", type: string, params: GLib.HashTable): void
    on(sigName: "content-sniffed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "content-sniffed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "content-sniffed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "finished", callback: (($obj: Message) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Message) => void)): number
    emit(sigName: "finished"): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "got-body", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-body", callback: (($obj: Message) => void)): number
    emit(sigName: "got-body"): void
    on(sigName: "got-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "got-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "got-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "got-chunk", callback: (($obj: Message, chunk: Buffer) => void)): number
    connect_after(sigName: "got-chunk", callback: (($obj: Message, chunk: Buffer) => void)): number
    emit(sigName: "got-chunk", chunk: Buffer): void
    on(sigName: "got-chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "got-chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "got-chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "got-headers", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-headers", callback: (($obj: Message) => void)): number
    emit(sigName: "got-headers"): void
    on(sigName: "got-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "got-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "got-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "got-informational", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-informational", callback: (($obj: Message) => void)): number
    emit(sigName: "got-informational"): void
    on(sigName: "got-informational", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "got-informational", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "got-informational", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "network-event", callback: (($obj: Message, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    connect_after(sigName: "network-event", callback: (($obj: Message, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    emit(sigName: "network-event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    on(sigName: "network-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "network-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "network-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "restarted", callback: (($obj: Message) => void)): number
    connect_after(sigName: "restarted", callback: (($obj: Message) => void)): number
    emit(sigName: "restarted"): void
    on(sigName: "restarted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "restarted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "restarted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "starting", callback: (($obj: Message) => void)): number
    connect_after(sigName: "starting", callback: (($obj: Message) => void)): number
    emit(sigName: "starting"): void
    on(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "wrote-body", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-body", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-body"): void
    on(sigName: "wrote-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "wrote-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "wrote-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "wrote-body-data", callback: (($obj: Message, chunk: Buffer) => void)): number
    connect_after(sigName: "wrote-body-data", callback: (($obj: Message, chunk: Buffer) => void)): number
    emit(sigName: "wrote-body-data", chunk: Buffer): void
    on(sigName: "wrote-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "wrote-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "wrote-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "wrote-chunk", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-chunk", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-chunk"): void
    on(sigName: "wrote-chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "wrote-chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "wrote-chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "wrote-headers", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-headers", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-headers"): void
    on(sigName: "wrote-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "wrote-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "wrote-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "wrote-informational", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-informational", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-informational"): void
    on(sigName: "wrote-informational", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "wrote-informational", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "wrote-informational", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-party", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-party", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-party", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-party", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-party", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-top-level-navigation", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-top-level-navigation", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-top-level-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-top-level-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-top-level-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reason-phrase", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reason-phrase", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reason-phrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reason-phrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reason-phrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-body", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-body", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-body-data", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-body-data", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::response-body", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-body", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::response-body-data", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-body-data", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::response-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::site-for-cookies", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::site-for-cookies", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::site-for-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::site-for-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::site-for-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status-code", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-code", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-certificate", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-errors", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-errors", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(method: string, uriString: string): Message
    static newFromUri(method: string, uri: URI): Message
    static $gtype: GObject.Type
}
export interface MultipartInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    message?: Message
}
export class MultipartInputStream {
    /* Properties of Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Soup.MultipartInputStream */
    parentInstance: Gio.FilterInputStream
    /* Fields of Gio.FilterInputStream */
    baseStream: Gio.InputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.MultipartInputStream */
    getHeaders(): MessageHeaders | null
    nextPart(cancellable?: Gio.Cancellable | null): Gio.InputStream | null
    nextPartAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextPartFinish(result: Gio.AsyncResult): Gio.InputStream | null
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): Gio.InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Gio.Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(buffer: any, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of Soup.MultipartInputStream */
    vfuncCanPoll(): boolean
    vfuncCreateSource(cancellable?: Gio.Cancellable | null): GLib.Source
    vfuncIsReadable(): boolean
    vfuncReadNonblocking(buffer: any | null): number
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCloseFinish(result: Gio.AsyncResult): boolean
    vfuncCloseFn(cancellable?: Gio.Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: Gio.AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Gio.Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSkipFinish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MultipartInputStream_ConstructProps)
    _init (config?: MultipartInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(msg: Message, baseStream: Gio.InputStream): MultipartInputStream
    static $gtype: GObject.Type
}
export interface ProxyResolverDefault_ConstructProps extends GObject.Object_ConstructProps {
    gproxyResolver?: Gio.ProxyResolver
}
export class ProxyResolverDefault {
    /* Properties of Soup.ProxyResolverDefault */
    gproxyResolver: Gio.ProxyResolver
    /* Fields of Soup.ProxyResolverDefault */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Soup.ProxyURIResolver */
    getProxyUriAsync(uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    getProxyUriSync(uri: URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxyUri */ URI ]
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.ProxyResolverDefault */
    vfuncGetProxyUriAsync(uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    vfuncGetProxyUriSync(uri: URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxyUri */ URI ]
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyResolverDefault, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyResolverDefault, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gproxy-resolver", callback: (($obj: ProxyResolverDefault, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gproxy-resolver", callback: (($obj: ProxyResolverDefault, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyResolverDefault_ConstructProps)
    _init (config?: ProxyResolverDefault_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Request_ConstructProps extends GObject.Object_ConstructProps {
    session?: Session
    uri?: URI
}
export class Request {
    /* Fields of Soup.Request */
    parent: GObject.Object
    priv: RequestPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Request */
    getContentLength(): number
    getContentType(): string | null
    getSession(): Session
    getUri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Soup.Request */
    vfuncCheckUri(uri: URI): boolean
    vfuncGetContentLength(): number
    vfuncGetContentType(): string | null
    vfuncSend(cancellable?: Gio.Cancellable | null): Gio.InputStream
    vfuncSendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSendFinish(result: Gio.AsyncResult): Gio.InputStream
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Request, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Request, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Request_ConstructProps)
    _init (config?: Request_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface RequestData_ConstructProps extends Request_ConstructProps {
}
export class RequestData {
    /* Fields of Soup.RequestData */
    parent: Request
    priv: RequestDataPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Request */
    getContentLength(): number
    getContentType(): string | null
    getSession(): Session
    getUri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Soup.Request */
    vfuncCheckUri(uri: URI): boolean
    vfuncGetContentLength(): number
    vfuncGetContentType(): string | null
    vfuncSend(cancellable?: Gio.Cancellable | null): Gio.InputStream
    vfuncSendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSendFinish(result: Gio.AsyncResult): Gio.InputStream
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RequestData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RequestData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RequestData_ConstructProps)
    _init (config?: RequestData_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RequestFile_ConstructProps extends Request_ConstructProps {
}
export class RequestFile {
    /* Fields of Soup.RequestFile */
    parent: Request
    priv: RequestFilePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.RequestFile */
    getFile(): Gio.File
    /* Methods of Soup.Request */
    getContentLength(): number
    getContentType(): string | null
    getSession(): Session
    getUri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Soup.Request */
    vfuncCheckUri(uri: URI): boolean
    vfuncGetContentLength(): number
    vfuncGetContentType(): string | null
    vfuncSend(cancellable?: Gio.Cancellable | null): Gio.InputStream
    vfuncSendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSendFinish(result: Gio.AsyncResult): Gio.InputStream
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RequestFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RequestFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RequestFile_ConstructProps)
    _init (config?: RequestFile_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RequestHTTP_ConstructProps extends Request_ConstructProps {
}
export class RequestHTTP {
    /* Fields of Soup.RequestHTTP */
    parent: Request
    priv: RequestHTTPPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.RequestHTTP */
    getMessage(): Message
    /* Methods of Soup.Request */
    getContentLength(): number
    getContentType(): string | null
    getSession(): Session
    getUri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Soup.Request */
    vfuncCheckUri(uri: URI): boolean
    vfuncGetContentLength(): number
    vfuncGetContentType(): string | null
    vfuncSend(cancellable?: Gio.Cancellable | null): Gio.InputStream
    vfuncSendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSendFinish(result: Gio.AsyncResult): Gio.InputStream
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RequestHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RequestHTTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RequestHTTP_ConstructProps)
    _init (config?: RequestHTTP_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Requester_ConstructProps extends GObject.Object_ConstructProps {
}
export class Requester {
    /* Fields of Soup.Requester */
    parent: GObject.Object
    priv: RequesterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Requester */
    request(uriString: string): Request
    requestUri(uri: URI): Request
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.Requester */
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Requester, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Requester, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Requester_ConstructProps)
    _init (config?: Requester_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Requester
    static $gtype: GObject.Type
}
export interface Server_ConstructProps extends GObject.Object_ConstructProps {
    asyncContext?: object
    httpAliases?: string[]
    httpsAliases?: string[]
    interface?: Address
    port?: number
    rawPaths?: boolean
    serverHeader?: string
    sslCertFile?: string
    sslKeyFile?: string
    tlsCertificate?: Gio.TlsCertificate
}
export class Server {
    /* Properties of Soup.Server */
    httpAliases: string[]
    httpsAliases: string[]
    serverHeader: string
    /* Fields of Soup.Server */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Server */
    acceptIostream(stream: Gio.IOStream, localAddr?: Gio.SocketAddress | null, remoteAddr?: Gio.SocketAddress | null): boolean
    addAuthDomain(authDomain: AuthDomain): void
    addEarlyHandler(path: string | null, callback: ServerCallback): void
    addHandler(path: string | null, callback: ServerCallback): void
    addWebsocketExtension(extensionType: GObject.Type): void
    addWebsocketHandler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback): void
    disconnect(): void
    getAsyncContext(): GLib.MainContext | null
    getListener(): Socket
    getListeners(): Gio.Socket[]
    getPort(): number
    getUris(): URI[]
    isHttps(): boolean
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean
    listenAll(port: number, options: ServerListenOptions): boolean
    listenFd(fd: number, options: ServerListenOptions): boolean
    listenLocal(port: number, options: ServerListenOptions): boolean
    listenSocket(socket: Gio.Socket, options: ServerListenOptions): boolean
    pauseMessage(msg: Message): void
    quit(): void
    removeAuthDomain(authDomain: AuthDomain): void
    removeHandler(path: string): void
    removeWebsocketExtension(extensionType: GObject.Type): void
    run(): void
    runAsync(): void
    setSslCertFile(sslCertFile: string, sslKeyFile: string): boolean
    unpauseMessage(msg: Message): void
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
    /* Virtual methods of Soup.Server */
    vfuncRequestAborted(msg: Message, client: ClientContext): void
    vfuncRequestFinished(msg: Message, client: ClientContext): void
    vfuncRequestRead(msg: Message, client: ClientContext): void
    vfuncRequestStarted(msg: Message, client: ClientContext): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Server */
    connect(sigName: "request-aborted", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    connect_after(sigName: "request-aborted", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    emit(sigName: "request-aborted", message: Message, client: ClientContext): void
    on(sigName: "request-aborted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-aborted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-aborted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-finished", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    connect_after(sigName: "request-finished", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    emit(sigName: "request-finished", message: Message, client: ClientContext): void
    on(sigName: "request-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-read", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    connect_after(sigName: "request-read", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    emit(sigName: "request-read", message: Message, client: ClientContext): void
    on(sigName: "request-read", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-read", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-read", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-started", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    emit(sigName: "request-started", message: Message, client: ClientContext): void
    on(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-aliases", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::https-aliases", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-header", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-header", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    acceptLanguage?: string
    acceptLanguageAuto?: boolean
    asyncContext?: object
    httpAliases?: string[]
    httpsAliases?: string[]
    idleTimeout?: number
    localAddress?: Address
    maxConns?: number
    maxConnsPerHost?: number
    proxyResolver?: Gio.ProxyResolver
    proxyUri?: URI
    sslCaFile?: string
    sslStrict?: boolean
    sslUseSystemCaFile?: boolean
    timeout?: number
    tlsDatabase?: Gio.TlsDatabase
    tlsInteraction?: Gio.TlsInteraction
    useNtlm?: boolean
    useThreadContext?: boolean
    userAgent?: string
}
export class Session {
    /* Properties of Soup.Session */
    acceptLanguage: string
    acceptLanguageAuto: boolean
    httpAliases: string[]
    httpsAliases: string[]
    idleTimeout: number
    maxConns: number
    maxConnsPerHost: number
    proxyResolver: Gio.ProxyResolver
    proxyUri: URI
    sslCaFile: string
    sslStrict: boolean
    sslUseSystemCaFile: boolean
    timeout: number
    tlsDatabase: Gio.TlsDatabase
    tlsInteraction: Gio.TlsInteraction
    useNtlm: boolean
    useThreadContext: boolean
    userAgent: string
    /* Fields of Soup.Session */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Session */
    abort(): void
    addFeature(feature: SessionFeature): void
    addFeatureByType(featureType: GObject.Type): void
    cancelMessage(msg: Message, statusCode: number): void
    connectAsync(uri: URI, cancellable?: Gio.Cancellable | null, progressCallback?: SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): Gio.IOStream
    getAsyncContext(): GLib.MainContext | null
    getFeature(featureType: GObject.Type): SessionFeature | null
    getFeatureForMessage(featureType: GObject.Type, msg: Message): SessionFeature | null
    getFeatures(featureType: GObject.Type): SessionFeature[]
    hasFeature(featureType: GObject.Type): boolean
    pauseMessage(msg: Message): void
    prefetchDns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: AddressCallback | null): void
    prepareForUri(uri: URI): void
    queueMessage(msg: Message, callback?: SessionCallback | null): void
    redirectMessage(msg: Message): boolean
    removeFeature(feature: SessionFeature): void
    removeFeatureByType(featureType: GObject.Type): void
    request(uriString: string): Request
    requestHttp(method: string, uriString: string): RequestHTTP
    requestHttpUri(method: string, uri: URI): RequestHTTP
    requestUri(uri: URI): Request
    requeueMessage(msg: Message): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(msg: Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    sendMessage(msg: Message): number
    stealConnection(msg: Message): Gio.IOStream
    unpauseMessage(msg: Message): void
    websocketConnectAsync(msg: Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocketConnectFinish(result: Gio.AsyncResult): WebsocketConnection
    wouldRedirect(msg: Message): boolean
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
    /* Virtual methods of Soup.Session */
    vfuncAuthRequired(msg: Message, auth: Auth, retrying: boolean): void
    vfuncAuthenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfuncCancelMessage(msg: Message, statusCode: number): void
    vfuncFlushQueue(): void
    vfuncKick(): void
    vfuncQueueMessage(msg: Message, callback?: SessionCallback | null): void
    vfuncRequestStarted(msg: Message, socket: Socket): void
    vfuncRequeueMessage(msg: Message): void
    vfuncSendMessage(msg: Message): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Session */
    connect(sigName: "authenticate", callback: (($obj: Session, msg: Message, auth: Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: Session, msg: Message, auth: Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    on(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "connection-created", callback: (($obj: Session, connection: GObject.Object) => void)): number
    connect_after(sigName: "connection-created", callback: (($obj: Session, connection: GObject.Object) => void)): number
    emit(sigName: "connection-created", connection: GObject.Object): void
    on(sigName: "connection-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-queued", callback: (($obj: Session, msg: Message) => void)): number
    connect_after(sigName: "request-queued", callback: (($obj: Session, msg: Message) => void)): number
    emit(sigName: "request-queued", msg: Message): void
    on(sigName: "request-queued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-queued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-queued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-started", callback: (($obj: Session, msg: Message, socket: Socket) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: Session, msg: Message, socket: Socket) => void)): number
    emit(sigName: "request-started", msg: Message, socket: Socket): void
    on(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-unqueued", callback: (($obj: Session, msg: Message) => void)): number
    connect_after(sigName: "request-unqueued", callback: (($obj: Session, msg: Message) => void)): number
    emit(sigName: "request-unqueued", msg: Message): void
    on(sigName: "request-unqueued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-unqueued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-unqueued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "tunneling", callback: (($obj: Session, connection: GObject.Object) => void)): number
    connect_after(sigName: "tunneling", callback: (($obj: Session, connection: GObject.Object) => void)): number
    emit(sigName: "tunneling", connection: GObject.Object): void
    on(sigName: "tunneling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "tunneling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "tunneling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-language", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-language-auto", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-aliases", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::https-aliases", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle-timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-conns", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-conns-per-host", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns-per-host", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-uri", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-strict", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-database", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-ntlm", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ntlm", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-thread-context", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-thread-context", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Session
    static $gtype: GObject.Type
}
export interface SessionAsync_ConstructProps extends Session_ConstructProps {
}
export class SessionAsync {
    /* Properties of Soup.Session */
    acceptLanguage: string
    acceptLanguageAuto: boolean
    httpAliases: string[]
    httpsAliases: string[]
    idleTimeout: number
    maxConns: number
    maxConnsPerHost: number
    proxyResolver: Gio.ProxyResolver
    proxyUri: URI
    sslCaFile: string
    sslStrict: boolean
    sslUseSystemCaFile: boolean
    timeout: number
    tlsDatabase: Gio.TlsDatabase
    tlsInteraction: Gio.TlsInteraction
    useNtlm: boolean
    useThreadContext: boolean
    userAgent: string
    /* Fields of Soup.SessionAsync */
    parent: Session
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Session */
    abort(): void
    addFeature(feature: SessionFeature): void
    addFeatureByType(featureType: GObject.Type): void
    cancelMessage(msg: Message, statusCode: number): void
    connectAsync(uri: URI, cancellable?: Gio.Cancellable | null, progressCallback?: SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): Gio.IOStream
    getAsyncContext(): GLib.MainContext | null
    getFeature(featureType: GObject.Type): SessionFeature | null
    getFeatureForMessage(featureType: GObject.Type, msg: Message): SessionFeature | null
    getFeatures(featureType: GObject.Type): SessionFeature[]
    hasFeature(featureType: GObject.Type): boolean
    pauseMessage(msg: Message): void
    prefetchDns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: AddressCallback | null): void
    prepareForUri(uri: URI): void
    queueMessage(msg: Message, callback?: SessionCallback | null): void
    redirectMessage(msg: Message): boolean
    removeFeature(feature: SessionFeature): void
    removeFeatureByType(featureType: GObject.Type): void
    request(uriString: string): Request
    requestHttp(method: string, uriString: string): RequestHTTP
    requestHttpUri(method: string, uri: URI): RequestHTTP
    requestUri(uri: URI): Request
    requeueMessage(msg: Message): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(msg: Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    sendMessage(msg: Message): number
    stealConnection(msg: Message): Gio.IOStream
    unpauseMessage(msg: Message): void
    websocketConnectAsync(msg: Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocketConnectFinish(result: Gio.AsyncResult): WebsocketConnection
    wouldRedirect(msg: Message): boolean
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
    /* Virtual methods of Soup.Session */
    vfuncAuthRequired(msg: Message, auth: Auth, retrying: boolean): void
    vfuncAuthenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfuncCancelMessage(msg: Message, statusCode: number): void
    vfuncFlushQueue(): void
    vfuncKick(): void
    vfuncQueueMessage(msg: Message, callback?: SessionCallback | null): void
    vfuncRequestStarted(msg: Message, socket: Socket): void
    vfuncRequeueMessage(msg: Message): void
    vfuncSendMessage(msg: Message): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Session */
    connect(sigName: "authenticate", callback: (($obj: SessionAsync, msg: Message, auth: Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: SessionAsync, msg: Message, auth: Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    on(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "connection-created", callback: (($obj: SessionAsync, connection: GObject.Object) => void)): number
    connect_after(sigName: "connection-created", callback: (($obj: SessionAsync, connection: GObject.Object) => void)): number
    emit(sigName: "connection-created", connection: GObject.Object): void
    on(sigName: "connection-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-queued", callback: (($obj: SessionAsync, msg: Message) => void)): number
    connect_after(sigName: "request-queued", callback: (($obj: SessionAsync, msg: Message) => void)): number
    emit(sigName: "request-queued", msg: Message): void
    on(sigName: "request-queued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-queued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-queued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-started", callback: (($obj: SessionAsync, msg: Message, socket: Socket) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: SessionAsync, msg: Message, socket: Socket) => void)): number
    emit(sigName: "request-started", msg: Message, socket: Socket): void
    on(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-unqueued", callback: (($obj: SessionAsync, msg: Message) => void)): number
    connect_after(sigName: "request-unqueued", callback: (($obj: SessionAsync, msg: Message) => void)): number
    emit(sigName: "request-unqueued", msg: Message): void
    on(sigName: "request-unqueued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-unqueued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-unqueued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "tunneling", callback: (($obj: SessionAsync, connection: GObject.Object) => void)): number
    connect_after(sigName: "tunneling", callback: (($obj: SessionAsync, connection: GObject.Object) => void)): number
    emit(sigName: "tunneling", connection: GObject.Object): void
    on(sigName: "tunneling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "tunneling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "tunneling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-language", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-language-auto", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-aliases", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::https-aliases", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle-timeout", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-conns", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-conns-per-host", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns-per-host", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-uri", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-strict", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-database", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-interaction", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-ntlm", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ntlm", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-thread-context", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-thread-context", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SessionAsync_ConstructProps)
    _init (config?: SessionAsync_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SessionAsync
    static $gtype: GObject.Type
}
export interface SessionSync_ConstructProps extends Session_ConstructProps {
}
export class SessionSync {
    /* Properties of Soup.Session */
    acceptLanguage: string
    acceptLanguageAuto: boolean
    httpAliases: string[]
    httpsAliases: string[]
    idleTimeout: number
    maxConns: number
    maxConnsPerHost: number
    proxyResolver: Gio.ProxyResolver
    proxyUri: URI
    sslCaFile: string
    sslStrict: boolean
    sslUseSystemCaFile: boolean
    timeout: number
    tlsDatabase: Gio.TlsDatabase
    tlsInteraction: Gio.TlsInteraction
    useNtlm: boolean
    useThreadContext: boolean
    userAgent: string
    /* Fields of Soup.SessionSync */
    parent: Session
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Session */
    abort(): void
    addFeature(feature: SessionFeature): void
    addFeatureByType(featureType: GObject.Type): void
    cancelMessage(msg: Message, statusCode: number): void
    connectAsync(uri: URI, cancellable?: Gio.Cancellable | null, progressCallback?: SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): Gio.IOStream
    getAsyncContext(): GLib.MainContext | null
    getFeature(featureType: GObject.Type): SessionFeature | null
    getFeatureForMessage(featureType: GObject.Type, msg: Message): SessionFeature | null
    getFeatures(featureType: GObject.Type): SessionFeature[]
    hasFeature(featureType: GObject.Type): boolean
    pauseMessage(msg: Message): void
    prefetchDns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: AddressCallback | null): void
    prepareForUri(uri: URI): void
    queueMessage(msg: Message, callback?: SessionCallback | null): void
    redirectMessage(msg: Message): boolean
    removeFeature(feature: SessionFeature): void
    removeFeatureByType(featureType: GObject.Type): void
    request(uriString: string): Request
    requestHttp(method: string, uriString: string): RequestHTTP
    requestHttpUri(method: string, uri: URI): RequestHTTP
    requestUri(uri: URI): Request
    requeueMessage(msg: Message): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(msg: Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    sendMessage(msg: Message): number
    stealConnection(msg: Message): Gio.IOStream
    unpauseMessage(msg: Message): void
    websocketConnectAsync(msg: Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocketConnectFinish(result: Gio.AsyncResult): WebsocketConnection
    wouldRedirect(msg: Message): boolean
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
    /* Virtual methods of Soup.Session */
    vfuncAuthRequired(msg: Message, auth: Auth, retrying: boolean): void
    vfuncAuthenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfuncCancelMessage(msg: Message, statusCode: number): void
    vfuncFlushQueue(): void
    vfuncKick(): void
    vfuncQueueMessage(msg: Message, callback?: SessionCallback | null): void
    vfuncRequestStarted(msg: Message, socket: Socket): void
    vfuncRequeueMessage(msg: Message): void
    vfuncSendMessage(msg: Message): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Session */
    connect(sigName: "authenticate", callback: (($obj: SessionSync, msg: Message, auth: Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: SessionSync, msg: Message, auth: Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    on(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "connection-created", callback: (($obj: SessionSync, connection: GObject.Object) => void)): number
    connect_after(sigName: "connection-created", callback: (($obj: SessionSync, connection: GObject.Object) => void)): number
    emit(sigName: "connection-created", connection: GObject.Object): void
    on(sigName: "connection-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-queued", callback: (($obj: SessionSync, msg: Message) => void)): number
    connect_after(sigName: "request-queued", callback: (($obj: SessionSync, msg: Message) => void)): number
    emit(sigName: "request-queued", msg: Message): void
    on(sigName: "request-queued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-queued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-queued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-started", callback: (($obj: SessionSync, msg: Message, socket: Socket) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: SessionSync, msg: Message, socket: Socket) => void)): number
    emit(sigName: "request-started", msg: Message, socket: Socket): void
    on(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request-unqueued", callback: (($obj: SessionSync, msg: Message) => void)): number
    connect_after(sigName: "request-unqueued", callback: (($obj: SessionSync, msg: Message) => void)): number
    emit(sigName: "request-unqueued", msg: Message): void
    on(sigName: "request-unqueued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request-unqueued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request-unqueued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "tunneling", callback: (($obj: SessionSync, connection: GObject.Object) => void)): number
    connect_after(sigName: "tunneling", callback: (($obj: SessionSync, connection: GObject.Object) => void)): number
    emit(sigName: "tunneling", connection: GObject.Object): void
    on(sigName: "tunneling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "tunneling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "tunneling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-language", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-language-auto", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-aliases", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::https-aliases", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle-timeout", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-conns", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-conns-per-host", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns-per-host", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-uri", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-strict", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-database", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-interaction", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-ntlm", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ntlm", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-thread-context", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-thread-context", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SessionSync_ConstructProps)
    _init (config?: SessionSync_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SessionSync
    static $gtype: GObject.Type
}
export interface Socket_ConstructProps extends GObject.Object_ConstructProps {
    asyncContext?: object
    fd?: number
    gsocket?: Gio.Socket
    iostream?: Gio.IOStream
    ipv6Only?: boolean
    localAddress?: Address
    nonBlocking?: boolean
    remoteAddress?: Address
    sslCreds?: object
    sslFallback?: boolean
    sslStrict?: boolean
    timeout?: number
    useThreadContext?: boolean
}
export class Socket {
    /* Properties of Soup.Socket */
    ipv6Only: boolean
    readonly isServer: boolean
    nonBlocking: boolean
    sslCreds: object
    timeout: number
    readonly tlsCertificate: Gio.TlsCertificate
    readonly tlsErrors: Gio.TlsCertificateFlags
    readonly trustedCertificate: boolean
    /* Fields of Soup.Socket */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.Socket */
    connectAsync(cancellable: Gio.Cancellable | null, callback: SocketCallback): void
    connectSync(cancellable?: Gio.Cancellable | null): number
    disconnect(): void
    getFd(): number
    getLocalAddress(): Address
    getRemoteAddress(): Address
    isConnected(): boolean
    isSsl(): boolean
    listen(): boolean
    read(buffer: any, cancellable?: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nread */ number ]
    readUntil(buffer: any, boundary: object | null, boundaryLen: number, gotBoundary: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nread */ number ]
    startProxySsl(sslHost: string, cancellable?: Gio.Cancellable | null): boolean
    startSsl(cancellable?: Gio.Cancellable | null): boolean
    write(buffer: any, cancellable?: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nwrote */ number ]
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Soup.Socket */
    vfuncDisconnected(): void
    vfuncNewConnection(newSock: Socket): void
    vfuncReadable(): void
    vfuncWritable(): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Socket */
    connect(sigName: "disconnected", callback: (($obj: Socket) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Socket) => void)): number
    emit(sigName: "disconnected"): void
    on(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: Socket, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    connect_after(sigName: "event", callback: (($obj: Socket, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    emit(sigName: "event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-connection", callback: (($obj: Socket, new_: Socket) => void)): number
    connect_after(sigName: "new-connection", callback: (($obj: Socket, new_: Socket) => void)): number
    emit(sigName: "new-connection", new_: Socket): void
    on(sigName: "new-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "readable", callback: (($obj: Socket) => void)): number
    connect_after(sigName: "readable", callback: (($obj: Socket) => void)): number
    emit(sigName: "readable"): void
    on(sigName: "readable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "readable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "readable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "writable", callback: (($obj: Socket) => void)): number
    connect_after(sigName: "writable", callback: (($obj: Socket) => void)): number
    emit(sigName: "writable"): void
    on(sigName: "writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ipv6-only", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ipv6-only", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ipv6-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ipv6-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ipv6-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-server", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-server", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::non-blocking", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::non-blocking", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::non-blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::non-blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::non-blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-creds", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-creds", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-creds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-creds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-creds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-certificate", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-errors", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-errors", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::trusted-certificate", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trusted-certificate", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::trusted-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::trusted-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::trusted-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Socket_ConstructProps)
    _init (config?: Socket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface WebsocketConnection_ConstructProps extends GObject.Object_ConstructProps {
    connectionType?: WebsocketConnectionType
    extensions?: object
    ioStream?: Gio.IOStream
    keepaliveInterval?: number
    maxIncomingPayloadSize?: number
    origin?: string
    protocol?: string
    uri?: URI
}
export class WebsocketConnection {
    /* Properties of Soup.WebsocketConnection */
    keepaliveInterval: number
    maxIncomingPayloadSize: number
    readonly state: WebsocketState
    /* Fields of Soup.WebsocketConnection */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.WebsocketConnection */
    close(code: number, data?: string | null): void
    getCloseCode(): number
    getCloseData(): string
    getConnectionType(): WebsocketConnectionType
    getExtensions(): WebsocketExtension[]
    getIoStream(): Gio.IOStream
    getKeepaliveInterval(): number
    getMaxIncomingPayloadSize(): number
    getOrigin(): string | null
    getProtocol(): string | null
    getState(): WebsocketState
    getUri(): URI
    sendBinary(data: any | null): void
    sendMessage(type: WebsocketDataType, message: any): void
    sendText(text: string): void
    setKeepaliveInterval(interval: number): void
    setMaxIncomingPayloadSize(maxIncomingPayloadSize: number): void
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
    /* Virtual methods of Soup.WebsocketConnection */
    vfuncClosed(): void
    vfuncClosing(): void
    vfuncError(error: GLib.Error): void
    vfuncMessage(type: WebsocketDataType, message: any): void
    vfuncPong(message: any): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.WebsocketConnection */
    connect(sigName: "closed", callback: (($obj: WebsocketConnection) => void)): number
    connect_after(sigName: "closed", callback: (($obj: WebsocketConnection) => void)): number
    emit(sigName: "closed"): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "closing", callback: (($obj: WebsocketConnection) => void)): number
    connect_after(sigName: "closing", callback: (($obj: WebsocketConnection) => void)): number
    emit(sigName: "closing"): void
    on(sigName: "closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "error", callback: (($obj: WebsocketConnection, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: WebsocketConnection, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    on(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "message", callback: (($obj: WebsocketConnection, type: number, message: any) => void)): number
    connect_after(sigName: "message", callback: (($obj: WebsocketConnection, type: number, message: any) => void)): number
    emit(sigName: "message", type: number, message: any): void
    on(sigName: "message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pong", callback: (($obj: WebsocketConnection, message: any) => void)): number
    connect_after(sigName: "pong", callback: (($obj: WebsocketConnection, message: any) => void)): number
    emit(sigName: "pong", message: any): void
    on(sigName: "pong", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pong", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pong", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keepalive-interval", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive-interval", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keepalive-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keepalive-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keepalive-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-incoming-payload-size", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-incoming-payload-size", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-incoming-payload-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-incoming-payload-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-incoming-payload-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebsocketConnection_ConstructProps)
    _init (config?: WebsocketConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin?: string | null, protocol?: string | null): WebsocketConnection
    static newWithExtensions(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]): WebsocketConnection
    static $gtype: GObject.Type
}
export interface WebsocketExtension_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebsocketExtension {
    /* Fields of Soup.WebsocketExtension */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.WebsocketExtension */
    configure(connectionType: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    getRequestParams(): string | null
    getResponseParams(): string | null
    processIncomingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    processOutgoingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
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
    /* Virtual methods of Soup.WebsocketExtension */
    vfuncConfigure(connectionType: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    vfuncGetRequestParams(): string | null
    vfuncGetResponseParams(): string | null
    vfuncProcessIncomingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    vfuncProcessOutgoingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsocketExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebsocketExtension_ConstructProps)
    _init (config?: WebsocketExtension_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebsocketExtensionDeflate_ConstructProps extends WebsocketExtension_ConstructProps {
}
export class WebsocketExtensionDeflate {
    /* Fields of Soup.WebsocketExtensionDeflate */
    parent: WebsocketExtension
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.WebsocketExtension */
    configure(connectionType: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    getRequestParams(): string | null
    getResponseParams(): string | null
    processIncomingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    processOutgoingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
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
    /* Virtual methods of Soup.WebsocketExtension */
    vfuncConfigure(connectionType: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    vfuncGetRequestParams(): string | null
    vfuncGetResponseParams(): string | null
    vfuncProcessIncomingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    vfuncProcessOutgoingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsocketExtensionDeflate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketExtensionDeflate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebsocketExtensionDeflate_ConstructProps)
    _init (config?: WebsocketExtensionDeflate_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebsocketExtensionManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebsocketExtensionManager {
    /* Fields of Soup.WebsocketExtensionManager */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of Soup.WebsocketExtensionManager */
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Session): void
    vfuncDetach(session: Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Session, msg: Message): void
    vfuncRequestStarted(session: Session, msg: Message, socket: Socket): void
    vfuncRequestUnqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsocketExtensionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketExtensionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebsocketExtensionManager_ConstructProps)
    _init (config?: WebsocketExtensionManager_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AddressClass {
    /* Fields of Soup.AddressClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class AuthClass {
    /* Fields of Soup.AuthClass */
    parentClass: GObject.ObjectClass
    schemeName: string
    strength: number
    update: (auth: Auth, msg: Message, authHeader: GLib.HashTable) => boolean
    getProtectionSpace: (auth: Auth, sourceUri: URI) => string[]
    authenticate: (auth: Auth, username: string, password: string) => void
    isAuthenticated: (auth: Auth) => boolean
    getAuthorization: (auth: Auth, msg: Message) => string
    isReady: (auth: Auth, msg: Message) => boolean
    canAuthenticate: (auth: Auth) => boolean
    static name: string
}
export abstract class AuthDomainBasicClass {
    /* Fields of Soup.AuthDomainBasicClass */
    parentClass: AuthDomainClass
    static name: string
}
export abstract class AuthDomainClass {
    /* Fields of Soup.AuthDomainClass */
    parentClass: GObject.ObjectClass
    accepts: (domain: AuthDomain, msg: Message, header: string) => string
    challenge: (domain: AuthDomain, msg: Message) => string
    checkPassword: (domain: AuthDomain, msg: Message, username: string, password: string) => boolean
    static name: string
}
export abstract class AuthDomainDigestClass {
    /* Fields of Soup.AuthDomainDigestClass */
    parentClass: AuthDomainClass
    static name: string
}
export abstract class AuthManagerClass {
    /* Fields of Soup.AuthManagerClass */
    parentClass: GObject.ObjectClass
    authenticate: (manager: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void
    static name: string
}
export class AuthManagerPrivate {
    static name: string
}
export class Buffer {
    /* Fields of Soup.Buffer */
    data: object
    length: number
    /* Methods of Soup.Buffer */
    copy(): Buffer
    free(): void
    getAsBytes(): any
    getData(): /* data */ any
    getOwner(): object | null
    newSubbuffer(offset: number, length: number): Buffer
    static name: string
    static new(data: any): Buffer
    constructor(data: any)
    /* Static methods and pseudo-constructors */
    static new(data: any): Buffer
    static newWithOwner(data: any, owner?: object | null, ownerDnotify?: GLib.DestroyNotify | null): Buffer
}
export abstract class CacheClass {
    /* Fields of Soup.CacheClass */
    parentClass: GObject.ObjectClass
    getCacheability: (cache: Cache, msg: Message) => Cacheability
    static name: string
}
export class CachePrivate {
    static name: string
}
export class ClientContext {
    /* Methods of Soup.ClientContext */
    getAddress(): Address | null
    getAuthDomain(): AuthDomain | null
    getAuthUser(): string | null
    getGsocket(): Gio.Socket | null
    getHost(): string | null
    getLocalAddress(): Gio.SocketAddress | null
    getRemoteAddress(): Gio.SocketAddress | null
    getSocket(): Socket
    stealConnection(): Gio.IOStream
    static name: string
}
export class Connection {
    static name: string
}
export abstract class ContentDecoderClass {
    /* Fields of Soup.ContentDecoderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ContentDecoderPrivate {
    static name: string
}
export abstract class ContentSnifferClass {
    /* Fields of Soup.ContentSnifferClass */
    parentClass: GObject.ObjectClass
    sniff: (sniffer: ContentSniffer, msg: Message, buffer: Buffer) => [ /* returnType */ string, /* params */ GLib.HashTable | null ]
    getBufferSize: (sniffer: ContentSniffer) => number
    static name: string
}
export class ContentSnifferPrivate {
    static name: string
}
export class Cookie {
    /* Fields of Soup.Cookie */
    name: string
    value: string
    domain: string
    path: string
    expires: Date
    secure: boolean
    httpOnly: boolean
    /* Methods of Soup.Cookie */
    appliesToUri(uri: URI): boolean
    copy(): Cookie
    domainMatches(host: string): boolean
    equal(cookie2: Cookie): boolean
    free(): void
    getDomain(): string
    getExpires(): Date | null
    getHttpOnly(): boolean
    getName(): string
    getPath(): string
    getSameSitePolicy(): SameSitePolicy
    getSecure(): boolean
    getValue(): string
    setDomain(domain: string): void
    setExpires(expires: Date): void
    setHttpOnly(httpOnly: boolean): void
    setMaxAge(maxAge: number): void
    setName(name: string): void
    setPath(path: string): void
    setSameSitePolicy(policy: SameSitePolicy): void
    setSecure(secure: boolean): void
    setValue(value: string): void
    toCookieHeader(): string
    toSetCookieHeader(): string
    static name: string
    static new(name: string, value: string, domain: string, path: string, maxAge: number): Cookie
    constructor(name: string, value: string, domain: string, path: string, maxAge: number)
    /* Static methods and pseudo-constructors */
    static new(name: string, value: string, domain: string, path: string, maxAge: number): Cookie
    static parse(header: string, origin: URI): Cookie | null
}
export abstract class CookieJarClass {
    /* Fields of Soup.CookieJarClass */
    parentClass: GObject.ObjectClass
    save: (jar: CookieJar) => void
    isPersistent: (jar: CookieJar) => boolean
    changed: (jar: CookieJar, oldCookie: Cookie, newCookie: Cookie) => void
    static name: string
}
export abstract class CookieJarDBClass {
    /* Fields of Soup.CookieJarDBClass */
    parentClass: CookieJarClass
    static name: string
}
export abstract class CookieJarTextClass {
    /* Fields of Soup.CookieJarTextClass */
    parentClass: CookieJarClass
    static name: string
}
export class Date {
    /* Fields of Soup.Date */
    year: number
    month: number
    day: number
    hour: number
    minute: number
    second: number
    utc: boolean
    offset: number
    /* Methods of Soup.Date */
    copy(): Date
    free(): void
    getDay(): number
    getHour(): number
    getMinute(): number
    getMonth(): number
    getOffset(): number
    getSecond(): number
    getUtc(): number
    getYear(): number
    isPast(): boolean
    toString(format: DateFormat): string
    toTimeT(): number
    toTimeval(): /* time */ GLib.TimeVal
    static name: string
    static new(year: number, month: number, day: number, hour: number, minute: number, second: number): Date
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number)
    /* Static methods and pseudo-constructors */
    static new(year: number, month: number, day: number, hour: number, minute: number, second: number): Date
    static newFromNow(offsetSeconds: number): Date
    static newFromString(dateString: string): Date
    static newFromTimeT(when: number): Date
}
export abstract class HSTSEnforcerClass {
    /* Fields of Soup.HSTSEnforcerClass */
    parentClass: GObject.ObjectClass
    isPersistent: (hstsEnforcer: HSTSEnforcer) => boolean
    hasValidPolicy: (hstsEnforcer: HSTSEnforcer, domain: string) => boolean
    changed: (enforcer: HSTSEnforcer, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void
    hstsEnforced: (enforcer: HSTSEnforcer, message: Message) => void
    static name: string
}
export abstract class HSTSEnforcerDBClass {
    /* Fields of Soup.HSTSEnforcerDBClass */
    parentClass: HSTSEnforcerClass
    static name: string
}
export class HSTSEnforcerDBPrivate {
    static name: string
}
export class HSTSEnforcerPrivate {
    static name: string
}
export class HSTSPolicy {
    /* Fields of Soup.HSTSPolicy */
    domain: string
    maxAge: number
    expires: Date
    includeSubdomains: boolean
    /* Methods of Soup.HSTSPolicy */
    copy(): HSTSPolicy
    equal(policy2: HSTSPolicy): boolean
    free(): void
    getDomain(): string
    includesSubdomains(): boolean
    isExpired(): boolean
    isSessionPolicy(): boolean
    static name: string
    static new(domain: string, maxAge: number, includeSubdomains: boolean): HSTSPolicy
    constructor(domain: string, maxAge: number, includeSubdomains: boolean)
    /* Static methods and pseudo-constructors */
    static new(domain: string, maxAge: number, includeSubdomains: boolean): HSTSPolicy
    static newFromResponse(msg: Message): HSTSPolicy
    static newFull(domain: string, maxAge: number, expires: Date, includeSubdomains: boolean): HSTSPolicy
    static newSessionPolicy(domain: string, includeSubdomains: boolean): HSTSPolicy
}
export abstract class LoggerClass {
    /* Fields of Soup.LoggerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MessageBody {
    /* Fields of Soup.MessageBody */
    data: string
    length: number
    /* Methods of Soup.MessageBody */
    appendBuffer(buffer: Buffer): void
    append(data: any): void
    complete(): void
    flatten(): Buffer
    free(): void
    getAccumulate(): boolean
    getChunk(offset: number): Buffer | null
    gotChunk(chunk: Buffer): void
    setAccumulate(accumulate: boolean): void
    truncate(): void
    wroteChunk(chunk: Buffer): void
    static name: string
    static new(): MessageBody
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageBody
}
export abstract class MessageClass {
    /* Fields of Soup.MessageClass */
    parentClass: GObject.ObjectClass
    wroteInformational: (msg: Message) => void
    wroteHeaders: (msg: Message) => void
    wroteChunk: (msg: Message) => void
    wroteBody: (msg: Message) => void
    gotInformational: (msg: Message) => void
    gotHeaders: (msg: Message) => void
    gotChunk: (msg: Message, chunk: Buffer) => void
    gotBody: (msg: Message) => void
    restarted: (msg: Message) => void
    finished: (msg: Message) => void
    starting: (msg: Message) => void
    static name: string
}
export class MessageHeaders {
    /* Methods of Soup.MessageHeaders */
    append(name: string, value: string): void
    cleanConnectionHeaders(): void
    clear(): void
    foreach(func: MessageHeadersForeachFunc): void
    free(): void
    freeRanges(ranges: Range): void
    get(name: string): string | null
    getContentDisposition(): [ /* returnType */ boolean, /* disposition */ string, /* params */ GLib.HashTable ]
    getContentLength(): number
    getContentRange(): [ /* returnType */ boolean, /* start */ number, /* end */ number, /* totalLength */ number | null ]
    getContentType(): [ /* returnType */ string | null, /* params */ GLib.HashTable | null ]
    getEncoding(): Encoding
    getExpectations(): Expectation
    getHeadersType(): MessageHeadersType
    getList(name: string): string | null
    getOne(name: string): string | null
    getRanges(totalLength: number): [ /* returnType */ boolean, /* ranges */ Range[] ]
    headerContains(name: string, token: string): boolean
    headerEquals(name: string, value: string): boolean
    remove(name: string): void
    replace(name: string, value: string): void
    setContentDisposition(disposition: string, params?: GLib.HashTable | null): void
    setContentLength(contentLength: number): void
    setContentRange(start: number, end: number, totalLength: number): void
    setContentType(contentType: string, params?: GLib.HashTable | null): void
    setEncoding(encoding: Encoding): void
    setExpectations(expectations: Expectation): void
    setRange(start: number, end: number): void
    setRanges(ranges: Range, length: number): void
    static name: string
    static new(type: MessageHeadersType): MessageHeaders
    constructor(type: MessageHeadersType)
    /* Static methods and pseudo-constructors */
    static new(type: MessageHeadersType): MessageHeaders
}
export class MessageHeadersIter {
    /* Methods of Soup.MessageHeadersIter */
    next(): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    static name: string
    /* Static methods and pseudo-constructors */
    static init(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
}
export class MessageQueue {
    static name: string
}
export class MessageQueueItem {
    static name: string
}
export class Multipart {
    /* Methods of Soup.Multipart */
    appendFormFile(controlName: string, filename: string, contentType: string, body: Buffer): void
    appendFormString(controlName: string, data: string): void
    appendPart(headers: MessageHeaders, body: Buffer): void
    free(): void
    getLength(): number
    getPart(part: number): [ /* returnType */ boolean, /* headers */ MessageHeaders, /* body */ Buffer ]
    toMessage(destHeaders: MessageHeaders, destBody: MessageBody): void
    static name: string
    static new(mimeType: string): Multipart
    constructor(mimeType: string)
    /* Static methods and pseudo-constructors */
    static new(mimeType: string): Multipart
    static newFromMessage(headers: MessageHeaders, body: MessageBody): Multipart
}
export abstract class MultipartInputStreamClass {
    /* Fields of Soup.MultipartInputStreamClass */
    parentClass: Gio.FilterInputStreamClass
    static name: string
}
export class MultipartInputStreamPrivate {
    static name: string
}
export abstract class PasswordManagerInterface {
    /* Fields of Soup.PasswordManagerInterface */
    base: GObject.TypeInterface
    getPasswordsAsync: (passwordManager: PasswordManager, msg: Message, auth: Auth, retrying: boolean, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback) => void
    getPasswordsSync: (passwordManager: PasswordManager, msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null) => void
    static name: string
}
export abstract class ProxyResolverDefaultClass {
    /* Fields of Soup.ProxyResolverDefaultClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ProxyResolverInterface {
    /* Fields of Soup.ProxyResolverInterface */
    base: GObject.TypeInterface
    getProxyAsync: (proxyResolver: ProxyResolver, msg: Message, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback) => void
    getProxySync: (proxyResolver: ProxyResolver, msg: Message, cancellable?: Gio.Cancellable | null) => [ /* returnType */ number, /* addr */ Address ]
    static name: string
}
export abstract class ProxyURIResolverInterface {
    /* Fields of Soup.ProxyURIResolverInterface */
    base: GObject.TypeInterface
    getProxyUriAsync: (proxyUriResolver: ProxyURIResolver, uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback) => void
    getProxyUriSync: (proxyUriResolver: ProxyURIResolver, uri: URI, cancellable?: Gio.Cancellable | null) => [ /* returnType */ number, /* proxyUri */ URI ]
    static name: string
}
export class Range {
    /* Fields of Soup.Range */
    start: number
    end: number
    static name: string
}
export abstract class RequestClass {
    /* Fields of Soup.RequestClass */
    parent: GObject.ObjectClass
    schemes: string
    checkUri: (reqBase: Request, uri: URI) => boolean
    send: (request: Request, cancellable?: Gio.Cancellable | null) => Gio.InputStream
    sendAsync: (request: Request, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    sendFinish: (request: Request, result: Gio.AsyncResult) => Gio.InputStream
    getContentLength: (request: Request) => number
    getContentType: (request: Request) => string | null
    static name: string
}
export abstract class RequestDataClass {
    /* Fields of Soup.RequestDataClass */
    parent: RequestClass
    static name: string
}
export class RequestDataPrivate {
    static name: string
}
export abstract class RequestFileClass {
    /* Fields of Soup.RequestFileClass */
    parent: RequestClass
    static name: string
}
export class RequestFilePrivate {
    static name: string
}
export abstract class RequestHTTPClass {
    /* Fields of Soup.RequestHTTPClass */
    parent: RequestClass
    static name: string
}
export class RequestHTTPPrivate {
    static name: string
}
export class RequestPrivate {
    static name: string
}
export abstract class RequesterClass {
    /* Fields of Soup.RequesterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RequesterPrivate {
    static name: string
}
export abstract class ServerClass {
    /* Fields of Soup.ServerClass */
    parentClass: GObject.ObjectClass
    requestStarted: (server: Server, msg: Message, client: ClientContext) => void
    requestRead: (server: Server, msg: Message, client: ClientContext) => void
    requestFinished: (server: Server, msg: Message, client: ClientContext) => void
    requestAborted: (server: Server, msg: Message, client: ClientContext) => void
    static name: string
}
export abstract class SessionAsyncClass {
    /* Fields of Soup.SessionAsyncClass */
    parentClass: SessionClass
    static name: string
}
export abstract class SessionClass {
    /* Fields of Soup.SessionClass */
    parentClass: GObject.ObjectClass
    requestStarted: (session: Session, msg: Message, socket: Socket) => void
    authenticate: (session: Session, msg: Message, auth: Auth, retrying: boolean) => void
    queueMessage: (session: Session, msg: Message, callback?: SessionCallback | null) => void
    requeueMessage: (session: Session, msg: Message) => void
    sendMessage: (session: Session, msg: Message) => number
    cancelMessage: (session: Session, msg: Message, statusCode: number) => void
    authRequired: (session: Session, msg: Message, auth: Auth, retrying: boolean) => void
    flushQueue: (session: Session) => void
    kick: (session: Session) => void
    static name: string
}
export abstract class SessionFeatureInterface {
    /* Fields of Soup.SessionFeatureInterface */
    parent: GObject.TypeInterface
    attach: (feature: SessionFeature, session: Session) => void
    detach: (feature: SessionFeature, session: Session) => void
    requestQueued: (feature: SessionFeature, session: Session, msg: Message) => void
    requestStarted: (feature: SessionFeature, session: Session, msg: Message, socket: Socket) => void
    requestUnqueued: (feature: SessionFeature, session: Session, msg: Message) => void
    addFeature: (feature: SessionFeature, type: GObject.Type) => boolean
    removeFeature: (feature: SessionFeature, type: GObject.Type) => boolean
    hasFeature: (feature: SessionFeature, type: GObject.Type) => boolean
    static name: string
}
export abstract class SessionSyncClass {
    /* Fields of Soup.SessionSyncClass */
    parentClass: SessionClass
    static name: string
}
export abstract class SocketClass {
    /* Fields of Soup.SocketClass */
    parentClass: GObject.ObjectClass
    readable: (sock: Socket) => void
    writable: (sock: Socket) => void
    disconnected: (sock: Socket) => void
    newConnection: (listener: Socket, newSock: Socket) => void
    static name: string
}
export class URI {
    /* Fields of Soup.URI */
    scheme: string
    user: string
    password: string
    host: string
    port: number
    path: string
    query: string
    fragment: string
    /* Methods of Soup.URI */
    copy(): URI
    copyHost(): URI
    equal(uri2: URI): boolean
    free(): void
    getFragment(): string
    getHost(): string
    getPassword(): string
    getPath(): string
    getPort(): number
    getQuery(): string
    getScheme(): string
    getUser(): string
    hostEqual(v2: URI): boolean
    hostHash(): number
    setFragment(fragment?: string | null): void
    setHost(host?: string | null): void
    setPassword(password?: string | null): void
    setPath(path: string): void
    setPort(port: number): void
    setQuery(query?: string | null): void
    setQueryFromForm(form: GLib.HashTable): void
    setScheme(scheme: string): void
    setUser(user?: string | null): void
    toString(justPathAndQuery: boolean): string
    usesDefaultPort(): boolean
    static name: string
    static new(uriString?: string | null): URI
    constructor(uriString?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uriString?: string | null): URI
    static newWithBase(base: URI, uriString: string): URI
    static decode(part: string): string
    static encode(part: string, escapeExtra?: string | null): string
    static normalize(part: string, unescapeExtra?: string | null): string
}
export abstract class WebsocketConnectionClass {
    /* Fields of Soup.WebsocketConnectionClass */
    parent: GObject.ObjectClass
    message: (self: WebsocketConnection, type: WebsocketDataType, message: any) => void
    error: (self: WebsocketConnection, error: GLib.Error) => void
    closing: (self: WebsocketConnection) => void
    closed: (self: WebsocketConnection) => void
    pong: (self: WebsocketConnection, message: any) => void
    static name: string
}
export class WebsocketConnectionPrivate {
    static name: string
}
export abstract class WebsocketExtensionClass {
    /* Fields of Soup.WebsocketExtensionClass */
    parentClass: GObject.ObjectClass
    name: string
    configure: (extension: WebsocketExtension, connectionType: WebsocketConnectionType, params?: GLib.HashTable | null) => boolean
    getRequestParams: (extension: WebsocketExtension) => string | null
    getResponseParams: (extension: WebsocketExtension) => string | null
    processOutgoingMessage: (extension: WebsocketExtension, header: number, payload: any) => [ /* returnType */ any, /* header */ number ]
    processIncomingMessage: (extension: WebsocketExtension, header: number, payload: any) => [ /* returnType */ any, /* header */ number ]
    static name: string
}
export abstract class WebsocketExtensionDeflateClass {
    /* Fields of Soup.WebsocketExtensionDeflateClass */
    parentClass: WebsocketExtensionClass
    static name: string
}
export abstract class WebsocketExtensionManagerClass {
    /* Fields of Soup.WebsocketExtensionManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class XMLRPCParams {
    /* Methods of Soup.XMLRPCParams */
    free(): void
    parse(signature?: string | null): GLib.Variant
    static name: string
}
}