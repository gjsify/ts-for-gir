/**
 * Soup-2.4
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

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
export function check_version(major: number, minor: number, micro: number): boolean
export function cookie_parse(header: string, origin: URI): Cookie | null
export function cookies_from_request(msg: Message): Cookie[]
export function cookies_from_response(msg: Message): Cookie[]
export function cookies_to_cookie_header(cookies: Cookie[]): string
export function cookies_to_request(cookies: Cookie[], msg: Message): void
export function cookies_to_response(cookies: Cookie[], msg: Message): void
export function form_decode(encoded_form: string): GLib.HashTable
export function form_decode_multipart(msg: Message, file_control_name?: string | null): [ /* returnType */ GLib.HashTable | null, /* filename */ string | null, /* content_type */ string | null, /* file */ Buffer | null ]
export function form_encode_datalist(form_data_set: GLib.Data): string
export function form_encode_hash(form_data_set: GLib.HashTable): string
export function form_request_new_from_datalist(method: string, uri: string, form_data_set: GLib.Data): Message
export function form_request_new_from_hash(method: string, uri: string, form_data_set: GLib.HashTable): Message
export function form_request_new_from_multipart(uri: string, multipart: Multipart): Message
export function get_major_version(): number
export function get_micro_version(): number
export function get_minor_version(): number
export function get_resource(): Gio.Resource
export function header_contains(header: string, token: string): boolean
export function header_free_param_list(param_list: GLib.HashTable): void
export function header_g_string_append_param(string: GLib.String, name: string, value: string): void
export function header_g_string_append_param_quoted(string: GLib.String, name: string, value: string): void
export function header_parse_list(header: string): string[]
export function header_parse_param_list(header: string): GLib.HashTable
export function header_parse_param_list_strict(header: string): GLib.HashTable | null
export function header_parse_quality_list(header: string): [ /* returnType */ string[], /* unacceptable */ string[] | null ]
export function header_parse_semi_param_list(header: string): GLib.HashTable
export function header_parse_semi_param_list_strict(header: string): GLib.HashTable | null
export function headers_parse(str: string, len: number, dest: MessageHeaders): boolean
export function headers_parse_request(str: string, len: number, req_headers: MessageHeaders): [ /* returnType */ number, /* req_method */ string | null, /* req_path */ string | null, /* ver */ HTTPVersion | null ]
export function headers_parse_response(str: string, len: number, headers: MessageHeaders): [ /* returnType */ boolean, /* ver */ HTTPVersion | null, /* status_code */ number | null, /* reason_phrase */ string | null ]
export function headers_parse_status_line(status_line: string): [ /* returnType */ boolean, /* ver */ HTTPVersion | null, /* status_code */ number | null, /* reason_phrase */ string | null ]
export function http_error_quark(): GLib.Quark
export function message_headers_iter_init(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
export function request_error_quark(): GLib.Quark
export function requester_error_quark(): GLib.Quark
export function status_get_phrase(status_code: number): string
export function status_proxify(status_code: number): number
export function str_case_equal(v1?: object | null, v2?: object | null): boolean
export function str_case_hash(key?: object | null): number
export function tld_domain_is_public_suffix(domain: string): boolean
export function tld_error_quark(): GLib.Quark
export function tld_get_base_domain(hostname: string): string
export function uri_decode(part: string): string
export function uri_encode(part: string, escape_extra?: string | null): string
export function uri_normalize(part: string, unescape_extra?: string | null): string
export function value_array_new(): GObject.ValueArray
export function value_hash_insert_value(hash: GLib.HashTable, key: string, value: any): void
export function value_hash_new(): GLib.HashTable
export function websocket_client_prepare_handshake(msg: Message, origin?: string | null, protocols?: string[] | null): void
export function websocket_client_prepare_handshake_with_extensions(msg: Message, origin?: string | null, protocols?: string[] | null, supported_extensions?: GObject.TypeClass[] | null): void
export function websocket_client_verify_handshake(msg: Message): boolean
export function websocket_client_verify_handshake_with_extensions(msg: Message, supported_extensions?: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* accepted_extensions */ WebsocketExtension[] | null ]
export function websocket_error_get_quark(): GLib.Quark
export function websocket_server_check_handshake(msg: Message, origin?: string | null, protocols?: string[] | null): boolean
export function websocket_server_check_handshake_with_extensions(msg: Message, origin?: string | null, protocols?: string[] | null, supported_extensions?: GObject.TypeClass[] | null): boolean
export function websocket_server_process_handshake(msg: Message, expected_origin?: string | null, protocols?: string[] | null): boolean
export function websocket_server_process_handshake_with_extensions(msg: Message, expected_origin?: string | null, protocols?: string[] | null, supported_extensions?: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* accepted_extensions */ WebsocketExtension[] | null ]
export function xmlrpc_build_method_call(method_name: string, params: any): string | null
export function xmlrpc_build_method_response(value: any): string | null
export function xmlrpc_build_request(method_name: string, params: GLib.Variant): string
export function xmlrpc_build_response(value: GLib.Variant): string
export function xmlrpc_error_quark(): GLib.Quark
export function xmlrpc_fault_quark(): GLib.Quark
export function xmlrpc_message_new(uri: string, method_name: string, params: GLib.Variant): Message
export function xmlrpc_message_set_response(msg: Message, value: GLib.Variant): boolean
export function xmlrpc_parse_method_call(method_call: string, length: number): [ /* returnType */ boolean, /* method_name */ string, /* params */ GObject.ValueArray ]
export function xmlrpc_parse_method_response(method_response: string, length: number): [ /* returnType */ boolean, /* value */ any ]
export function xmlrpc_parse_request(method_call: string, length: number): [ /* returnType */ string, /* params */ XMLRPCParams ]
export function xmlrpc_parse_response(method_response: string, length: number, signature?: string | null): GLib.Variant
export function xmlrpc_variant_get_datetime(variant: GLib.Variant): Date
export function xmlrpc_variant_new_datetime(date: Date): GLib.Variant
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
    (msg: Message, max_len: number): Buffer | null
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
    (password_manager: PasswordManager, msg: Message, auth: Auth, retrying: boolean): void
}
export interface ProxyResolverCallback {
    (proxy_resolver: ProxyResolver, msg: Message, arg: number, addr: Address): void
}
export interface ProxyURIResolverCallback {
    (resolver: ProxyURIResolver, status: number, proxy_uri: URI): void
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
    get_passwords_async(msg: Message, auth: Auth, retrying: boolean, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback): void
    get_passwords_sync(msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null): void
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.PasswordManager */
    vfunc_get_passwords_async(msg: Message, auth: Auth, retrying: boolean, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback): void
    vfunc_get_passwords_sync(msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null): void
    /* Virtual methods of Soup.SessionFeature */
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    static name: string
}
export class ProxyResolver {
    /* Methods of Soup.ProxyResolver */
    get_proxy_async(msg: Message, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback): void
    get_proxy_sync(msg: Message, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* addr */ Address ]
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.ProxyResolver */
    vfunc_get_proxy_async(msg: Message, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback): void
    vfunc_get_proxy_sync(msg: Message, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* addr */ Address ]
    /* Virtual methods of Soup.SessionFeature */
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    static name: string
}
export class ProxyURIResolver {
    /* Methods of Soup.ProxyURIResolver */
    get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    get_proxy_uri_sync(uri: URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxy_uri */ URI ]
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.ProxyURIResolver */
    vfunc_get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    vfunc_get_proxy_uri_sync(uri: URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxy_uri */ URI ]
    /* Virtual methods of Soup.SessionFeature */
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    static name: string
}
export class SessionFeature {
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.SessionFeature */
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Address */
    equal_by_ip(addr2: Address): boolean
    equal_by_name(addr2: Address): boolean
    get_gsockaddr(): Gio.SocketAddress
    get_name(): string | null
    get_physical(): string | null
    get_port(): number
    get_sockaddr(len: number): object | null
    hash_by_ip(): number
    hash_by_name(): number
    is_resolved(): boolean
    resolve_async(async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: AddressCallback): void
    resolve_sync(cancellable?: Gio.Cancellable | null): number
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): Gio.SocketAddressEnumerator
    proxy_enumerate(): Gio.SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of Soup.Address */
    vfunc_enumerate(): Gio.SocketAddressEnumerator
    vfunc_proxy_enumerate(): Gio.SocketAddressEnumerator
    vfunc_to_string(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::physical", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Address_ConstructProps)
    _init (config?: Address_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, port: number): Address
    static new_any(family: AddressFamily, port: number): Address
    static new_from_sockaddr(sa: object | null, len: number): Address
    static $gtype: GObject.Type
}
export interface Auth_ConstructProps extends GObject.Object_ConstructProps {
    host?: string
    is_for_proxy?: boolean
    realm?: string
}
export class Auth {
    /* Properties of Soup.Auth */
    host: string
    readonly is_authenticated: boolean
    is_for_proxy: boolean
    realm: string
    readonly scheme_name: string
    /* Fields of Soup.Auth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    get_authorization(msg: Message): string
    get_host(): string
    get_info(): string
    get_protection_space(source_uri: URI): string[]
    get_realm(): string
    get_saved_password(user: string): string
    get_saved_users(): string[]
    get_scheme_name(): string
    has_saved_password(username: string, password: string): void
    is_ready(msg: Message): boolean
    save_password(username: string, password: string): void
    update(msg: Message, auth_header: string): boolean
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
    /* Virtual methods of Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: URI): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::host", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Auth_ConstructProps)
    _init (config?: Auth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type, msg: Message, auth_header: string): Auth
    static $gtype: GObject.Type
}
export interface AuthBasic_ConstructProps extends Auth_ConstructProps {
}
export class AuthBasic {
    /* Properties of Soup.Auth */
    host: string
    readonly is_authenticated: boolean
    is_for_proxy: boolean
    realm: string
    readonly scheme_name: string
    /* Fields of Soup.Auth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    get_authorization(msg: Message): string
    get_host(): string
    get_info(): string
    get_protection_space(source_uri: URI): string[]
    get_realm(): string
    get_saved_password(user: string): string
    get_saved_users(): string[]
    get_scheme_name(): string
    has_saved_password(username: string, password: string): void
    is_ready(msg: Message): boolean
    save_password(username: string, password: string): void
    update(msg: Message, auth_header: string): boolean
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
    /* Virtual methods of Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: URI): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::host", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly is_authenticated: boolean
    is_for_proxy: boolean
    realm: string
    readonly scheme_name: string
    /* Fields of Soup.Auth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    get_authorization(msg: Message): string
    get_host(): string
    get_info(): string
    get_protection_space(source_uri: URI): string[]
    get_realm(): string
    get_saved_password(user: string): string
    get_saved_users(): string[]
    get_scheme_name(): string
    has_saved_password(username: string, password: string): void
    is_ready(msg: Message): boolean
    save_password(username: string, password: string): void
    update(msg: Message, auth_header: string): boolean
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
    /* Virtual methods of Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: URI): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::host", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthDigest_ConstructProps)
    _init (config?: AuthDigest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AuthDomain_ConstructProps extends GObject.Object_ConstructProps {
    add_path?: string
    filter?: AuthDomainFilter
    filter_data?: object
    generic_auth_callback?: AuthDomainGenericAuthCallback
    generic_auth_data?: object
    proxy?: boolean
    realm?: string
    remove_path?: string
}
export class AuthDomain {
    /* Properties of Soup.AuthDomain */
    add_path: string
    filter: AuthDomainFilter
    filter_data: object
    generic_auth_callback: AuthDomainGenericAuthCallback
    generic_auth_data: object
    remove_path: string
    /* Fields of Soup.AuthDomain */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.AuthDomain */
    accepts(msg: Message): string | null
    challenge(msg: Message): void
    check_password(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    get_realm(): string
    set_filter(filter: AuthDomainFilter): void
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void
    try_generic_auth_callback(msg: Message, username: string): boolean
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
    /* Virtual methods of Soup.AuthDomain */
    vfunc_accepts(msg: Message, header: string): string
    vfunc_challenge(msg: Message): string
    vfunc_check_password(msg: Message, username: string, password: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::add-path", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-path", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remove-path", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-path", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthDomain_ConstructProps)
    _init (config?: AuthDomain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AuthDomainBasic_ConstructProps extends AuthDomain_ConstructProps {
    auth_callback?: AuthDomainBasicAuthCallback
    auth_data?: object
}
export class AuthDomainBasic {
    /* Properties of Soup.AuthDomainBasic */
    auth_callback: AuthDomainBasicAuthCallback
    auth_data: object
    /* Properties of Soup.AuthDomain */
    add_path: string
    filter: AuthDomainFilter
    filter_data: object
    generic_auth_callback: AuthDomainGenericAuthCallback
    generic_auth_data: object
    remove_path: string
    /* Fields of Soup.AuthDomainBasic */
    parent: AuthDomain
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.AuthDomainBasic */
    set_auth_callback(callback: AuthDomainBasicAuthCallback): void
    /* Methods of Soup.AuthDomain */
    accepts(msg: Message): string | null
    challenge(msg: Message): void
    check_password(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    get_realm(): string
    set_filter(filter: AuthDomainFilter): void
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void
    try_generic_auth_callback(msg: Message, username: string): boolean
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
    /* Virtual methods of Soup.AuthDomain */
    vfunc_accepts(msg: Message, header: string): string
    vfunc_challenge(msg: Message): string
    vfunc_check_password(msg: Message, username: string, password: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::add-path", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-path", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remove-path", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-path", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthDomainBasic_ConstructProps)
    _init (config?: AuthDomainBasic_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AuthDomainDigest_ConstructProps extends AuthDomain_ConstructProps {
    auth_callback?: AuthDomainDigestAuthCallback
    auth_data?: object
}
export class AuthDomainDigest {
    /* Properties of Soup.AuthDomainDigest */
    auth_callback: AuthDomainDigestAuthCallback
    auth_data: object
    /* Properties of Soup.AuthDomain */
    add_path: string
    filter: AuthDomainFilter
    filter_data: object
    generic_auth_callback: AuthDomainGenericAuthCallback
    generic_auth_data: object
    remove_path: string
    /* Fields of Soup.AuthDomainDigest */
    parent: AuthDomain
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.AuthDomainDigest */
    set_auth_callback(callback: AuthDomainDigestAuthCallback): void
    /* Methods of Soup.AuthDomain */
    accepts(msg: Message): string | null
    challenge(msg: Message): void
    check_password(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    get_realm(): string
    set_filter(filter: AuthDomainFilter): void
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void
    try_generic_auth_callback(msg: Message, username: string): boolean
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
    /* Virtual methods of Soup.AuthDomain */
    vfunc_accepts(msg: Message, header: string): string
    vfunc_challenge(msg: Message): string
    vfunc_check_password(msg: Message, username: string, password: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::add-path", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-path", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remove-path", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-path", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthDomainDigest_ConstructProps)
    _init (config?: AuthDomainDigest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static encode_password(username: string, realm: string, password: string): string
    static $gtype: GObject.Type
}
export interface AuthManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class AuthManager {
    /* Fields of Soup.AuthManager */
    parent: GObject.Object
    priv: AuthManagerPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.AuthManager */
    clear_cached_credentials(): void
    use_auth(uri: URI, auth: Auth): void
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.AuthManager */
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.AuthManager */
    connect(sigName: "authenticate", callback: (($obj: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly is_authenticated: boolean
    is_for_proxy: boolean
    realm: string
    readonly scheme_name: string
    /* Fields of Soup.Auth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    get_authorization(msg: Message): string
    get_host(): string
    get_info(): string
    get_protection_space(source_uri: URI): string[]
    get_realm(): string
    get_saved_password(user: string): string
    get_saved_users(): string[]
    get_scheme_name(): string
    has_saved_password(username: string, password: string): void
    is_ready(msg: Message): boolean
    save_password(username: string, password: string): void
    update(msg: Message, auth_header: string): boolean
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
    /* Virtual methods of Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: URI): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::host", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly is_authenticated: boolean
    is_for_proxy: boolean
    realm: string
    readonly scheme_name: string
    /* Fields of Soup.Auth */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    get_authorization(msg: Message): string
    get_host(): string
    get_info(): string
    get_protection_space(source_uri: URI): string[]
    get_realm(): string
    get_saved_password(user: string): string
    get_saved_users(): string[]
    get_scheme_name(): string
    has_saved_password(username: string, password: string): void
    is_ready(msg: Message): boolean
    save_password(username: string, password: string): void
    update(msg: Message, auth_header: string): boolean
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
    /* Virtual methods of Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: URI): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::host", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthNegotiate_ConstructProps)
    _init (config?: AuthNegotiate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static supported(): boolean
    static $gtype: GObject.Type
}
export interface Cache_ConstructProps extends GObject.Object_ConstructProps {
    cache_dir?: string
    cache_type?: CacheType
}
export class Cache {
    /* Fields of Soup.Cache */
    parent_instance: GObject.Object
    priv: CachePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Cache */
    clear(): void
    dump(): void
    flush(): void
    get_max_size(): number
    load(): void
    set_max_size(max_size: number): void
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.Cache */
    vfunc_get_cacheability(msg: Message): Cacheability
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cache_ConstructProps)
    _init (config?: Cache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cache_dir: string | null, cache_type: CacheType): Cache
    static $gtype: GObject.Type
}
export interface ContentDecoder_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentDecoder {
    /* Fields of Soup.ContentDecoder */
    parent: GObject.Object
    priv: ContentDecoderPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.ContentDecoder */
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContentDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.ContentSniffer */
    get_buffer_size(): number
    sniff(msg: Message, buffer: Buffer): [ /* returnType */ string, /* params */ GLib.HashTable | null ]
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.ContentSniffer */
    vfunc_get_buffer_size(): number
    vfunc_sniff(msg: Message, buffer: Buffer): [ /* returnType */ string, /* params */ GLib.HashTable | null ]
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContentSniffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentSniffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentSniffer_ConstructProps)
    _init (config?: ContentSniffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentSniffer
    static $gtype: GObject.Type
}
export interface CookieJar_ConstructProps extends GObject.Object_ConstructProps {
    accept_policy?: CookieJarAcceptPolicy
    read_only?: boolean
}
export class CookieJar {
    /* Properties of Soup.CookieJar */
    accept_policy: CookieJarAcceptPolicy
    /* Fields of Soup.CookieJar */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.CookieJar */
    add_cookie(cookie: Cookie): void
    add_cookie_full(cookie: Cookie, uri?: URI | null, first_party?: URI | null): void
    add_cookie_with_first_party(first_party: URI, cookie: Cookie): void
    all_cookies(): Cookie[]
    delete_cookie(cookie: Cookie): void
    get_accept_policy(): CookieJarAcceptPolicy
    get_cookie_list(uri: URI, for_http: boolean): Cookie[]
    get_cookie_list_with_same_site_info(uri: URI, top_level: URI | null, site_for_cookies: URI | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[]
    get_cookies(uri: URI, for_http: boolean): string | null
    is_persistent(): boolean
    save(): void
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    set_cookie(uri: URI, cookie: string): void
    set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJar, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJar, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    emit(sigName: "changed", old_cookie: Cookie, new_cookie: Cookie): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    accept_policy: CookieJarAcceptPolicy
    /* Fields of Soup.CookieJarDB */
    parent: CookieJar
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.CookieJar */
    add_cookie(cookie: Cookie): void
    add_cookie_full(cookie: Cookie, uri?: URI | null, first_party?: URI | null): void
    add_cookie_with_first_party(first_party: URI, cookie: Cookie): void
    all_cookies(): Cookie[]
    delete_cookie(cookie: Cookie): void
    get_accept_policy(): CookieJarAcceptPolicy
    get_cookie_list(uri: URI, for_http: boolean): Cookie[]
    get_cookie_list_with_same_site_info(uri: URI, top_level: URI | null, site_for_cookies: URI | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[]
    get_cookies(uri: URI, for_http: boolean): string | null
    is_persistent(): boolean
    save(): void
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    set_cookie(uri: URI, cookie: string): void
    set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarDB, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJarDB, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    emit(sigName: "changed", old_cookie: Cookie, new_cookie: Cookie): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CookieJarDB_ConstructProps)
    _init (config?: CookieJarDB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, read_only: boolean): CookieJarDB
    static new(): CookieJarDB
    static $gtype: GObject.Type
}
export interface CookieJarText_ConstructProps extends CookieJar_ConstructProps {
    filename?: string
}
export class CookieJarText {
    /* Properties of Soup.CookieJar */
    accept_policy: CookieJarAcceptPolicy
    /* Fields of Soup.CookieJarText */
    parent: CookieJar
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.CookieJar */
    add_cookie(cookie: Cookie): void
    add_cookie_full(cookie: Cookie, uri?: URI | null, first_party?: URI | null): void
    add_cookie_with_first_party(first_party: URI, cookie: Cookie): void
    all_cookies(): Cookie[]
    delete_cookie(cookie: Cookie): void
    get_accept_policy(): CookieJarAcceptPolicy
    get_cookie_list(uri: URI, for_http: boolean): Cookie[]
    get_cookie_list_with_same_site_info(uri: URI, top_level: URI | null, site_for_cookies: URI | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[]
    get_cookies(uri: URI, for_http: boolean): string | null
    is_persistent(): boolean
    save(): void
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    set_cookie(uri: URI, cookie: string): void
    set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarText, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJarText, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    emit(sigName: "changed", old_cookie: Cookie, new_cookie: Cookie): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CookieJarText_ConstructProps)
    _init (config?: CookieJarText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, read_only: boolean): CookieJarText
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.HSTSEnforcer */
    get_domains(session_policies: boolean): string[]
    get_policies(session_policies: boolean): HSTSPolicy[]
    has_valid_policy(domain: string): boolean
    is_persistent(): boolean
    set_policy(policy: HSTSPolicy): void
    set_session_policy(domain: string, include_subdomains: boolean): void
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.HSTSEnforcer */
    vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    vfunc_has_valid_policy(domain: string): boolean
    vfunc_hsts_enforced(message: Message): void
    vfunc_is_persistent(): boolean
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.HSTSEnforcer */
    connect(sigName: "changed", callback: (($obj: HSTSEnforcer, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    connect_after(sigName: "changed", callback: (($obj: HSTSEnforcer, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    emit(sigName: "changed", old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    connect(sigName: "hsts-enforced", callback: (($obj: HSTSEnforcer, message: Message) => void)): number
    connect_after(sigName: "hsts-enforced", callback: (($obj: HSTSEnforcer, message: Message) => void)): number
    emit(sigName: "hsts-enforced", message: Message): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HSTSEnforcer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HSTSEnforcer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.HSTSEnforcer */
    get_domains(session_policies: boolean): string[]
    get_policies(session_policies: boolean): HSTSPolicy[]
    has_valid_policy(domain: string): boolean
    is_persistent(): boolean
    set_policy(policy: HSTSPolicy): void
    set_session_policy(domain: string, include_subdomains: boolean): void
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.HSTSEnforcer */
    vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    vfunc_has_valid_policy(domain: string): boolean
    vfunc_hsts_enforced(message: Message): void
    vfunc_is_persistent(): boolean
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.HSTSEnforcer */
    connect(sigName: "changed", callback: (($obj: HSTSEnforcerDB, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    connect_after(sigName: "changed", callback: (($obj: HSTSEnforcerDB, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    emit(sigName: "changed", old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    connect(sigName: "hsts-enforced", callback: (($obj: HSTSEnforcerDB, message: Message) => void)): number
    connect_after(sigName: "hsts-enforced", callback: (($obj: HSTSEnforcerDB, message: Message) => void)): number
    emit(sigName: "hsts-enforced", message: Message): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HSTSEnforcerDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HSTSEnforcerDB, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    max_body_size?: number
}
export class Logger {
    /* Properties of Soup.Logger */
    level: LoggerLogLevel
    max_body_size: number
    /* Fields of Soup.Logger */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Logger */
    attach(session: Session): void
    detach(session: Session): void
    set_printer(printer: LoggerPrinter): void
    set_request_filter(request_filter: LoggerFilter): void
    set_response_filter(response_filter: LoggerFilter): void
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.Logger */
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-body-size", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-body-size", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Logger_ConstructProps)
    _init (config?: Logger_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(level: LoggerLogLevel, max_body_size: number): Logger
    static $gtype: GObject.Type
}
export interface Message_ConstructProps extends GObject.Object_ConstructProps {
    first_party?: URI
    flags?: MessageFlags
    http_version?: HTTPVersion
    is_top_level_navigation?: boolean
    method?: string
    priority?: MessagePriority
    reason_phrase?: string
    server_side?: boolean
    site_for_cookies?: URI
    status_code?: number
    tls_certificate?: Gio.TlsCertificate
    tls_errors?: Gio.TlsCertificateFlags
    uri?: URI
}
export class Message {
    /* Properties of Soup.Message */
    first_party: URI
    flags: MessageFlags
    http_version: HTTPVersion
    is_top_level_navigation: boolean
    method: string
    priority: MessagePriority
    reason_phrase: string
    readonly request_body: MessageBody
    readonly request_body_data: GLib.Bytes
    readonly request_headers: MessageHeaders
    readonly response_body: MessageBody
    readonly response_body_data: GLib.Bytes
    readonly response_headers: MessageHeaders
    site_for_cookies: URI
    status_code: number
    tls_certificate: Gio.TlsCertificate
    tls_errors: Gio.TlsCertificateFlags
    uri: URI
    /* Fields of Soup.Message */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Message */
    content_sniffed(content_type: string, params: GLib.HashTable): void
    disable_feature(feature_type: GObject.Type): void
    finished(): void
    get_address(): Address
    get_first_party(): URI
    get_flags(): MessageFlags
    get_http_version(): HTTPVersion
    get_https_status(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    get_is_top_level_navigation(): boolean
    get_priority(): MessagePriority
    get_site_for_cookies(): URI
    get_soup_request(): Request
    get_uri(): URI
    got_body(): void
    got_chunk(chunk: Buffer): void
    got_headers(): void
    got_informational(): void
    is_feature_disabled(feature_type: GObject.Type): boolean
    is_keepalive(): boolean
    restarted(): void
    set_chunk_allocator(allocator: ChunkAllocator): void
    set_first_party(first_party: URI): void
    set_flags(flags: MessageFlags): void
    set_http_version(version: HTTPVersion): void
    set_is_top_level_navigation(is_top_level_navigation: boolean): void
    set_priority(priority: MessagePriority): void
    set_redirect(status_code: number, redirect_uri: string): void
    set_request(content_type: string | null, req_use: MemoryUse, req_body: Uint8Array | null): void
    set_response(content_type: string | null, resp_use: MemoryUse, resp_body: Uint8Array | null): void
    set_site_for_cookies(site_for_cookies?: URI | null): void
    set_status(status_code: number): void
    set_status_full(status_code: number, reason_phrase: string): void
    set_uri(uri: URI): void
    starting(): void
    wrote_body(): void
    wrote_body_data(chunk: Buffer): void
    wrote_chunk(): void
    wrote_headers(): void
    wrote_informational(): void
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
    /* Virtual methods of Soup.Message */
    vfunc_finished(): void
    vfunc_got_body(): void
    vfunc_got_chunk(chunk: Buffer): void
    vfunc_got_headers(): void
    vfunc_got_informational(): void
    vfunc_restarted(): void
    vfunc_starting(): void
    vfunc_wrote_body(): void
    vfunc_wrote_chunk(): void
    vfunc_wrote_headers(): void
    vfunc_wrote_informational(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Message */
    connect(sigName: "content-sniffed", callback: (($obj: Message, type: string, params: GLib.HashTable) => void)): number
    connect_after(sigName: "content-sniffed", callback: (($obj: Message, type: string, params: GLib.HashTable) => void)): number
    emit(sigName: "content-sniffed", type: string, params: GLib.HashTable): void
    connect(sigName: "finished", callback: (($obj: Message) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Message) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "got-body", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-body", callback: (($obj: Message) => void)): number
    emit(sigName: "got-body"): void
    connect(sigName: "got-chunk", callback: (($obj: Message, chunk: Buffer) => void)): number
    connect_after(sigName: "got-chunk", callback: (($obj: Message, chunk: Buffer) => void)): number
    emit(sigName: "got-chunk", chunk: Buffer): void
    connect(sigName: "got-headers", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-headers", callback: (($obj: Message) => void)): number
    emit(sigName: "got-headers"): void
    connect(sigName: "got-informational", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-informational", callback: (($obj: Message) => void)): number
    emit(sigName: "got-informational"): void
    connect(sigName: "network-event", callback: (($obj: Message, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    connect_after(sigName: "network-event", callback: (($obj: Message, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    emit(sigName: "network-event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    connect(sigName: "restarted", callback: (($obj: Message) => void)): number
    connect_after(sigName: "restarted", callback: (($obj: Message) => void)): number
    emit(sigName: "restarted"): void
    connect(sigName: "starting", callback: (($obj: Message) => void)): number
    connect_after(sigName: "starting", callback: (($obj: Message) => void)): number
    emit(sigName: "starting"): void
    connect(sigName: "wrote-body", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-body", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-body"): void
    connect(sigName: "wrote-body-data", callback: (($obj: Message, chunk: Buffer) => void)): number
    connect_after(sigName: "wrote-body-data", callback: (($obj: Message, chunk: Buffer) => void)): number
    emit(sigName: "wrote-body-data", chunk: Buffer): void
    connect(sigName: "wrote-chunk", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-chunk", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-chunk"): void
    connect(sigName: "wrote-headers", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-headers", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-headers"): void
    connect(sigName: "wrote-informational", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-informational", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-informational"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::first-party", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-party", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-top-level-navigation", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-top-level-navigation", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reason-phrase", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reason-phrase", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-body", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-body", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-body-data", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-body-data", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::response-body", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-body", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::response-body-data", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-body-data", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::response-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::site-for-cookies", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::site-for-cookies", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status-code", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-code", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-certificate", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-errors", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-errors", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(method: string, uri_string: string): Message
    static new_from_uri(method: string, uri: URI): Message
    static $gtype: GObject.Type
}
export interface MultipartInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    message?: Message
}
export class MultipartInputStream {
    /* Properties of Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Soup.MultipartInputStream */
    parent_instance: Gio.FilterInputStream
    /* Fields of Gio.FilterInputStream */
    base_stream: Gio.InputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.MultipartInputStream */
    get_headers(): MessageHeaders | null
    next_part(cancellable?: Gio.Cancellable | null): Gio.InputStream | null
    next_part_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null
    /* Methods of Gio.FilterInputStream */
    get_base_stream(): Gio.InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Methods of Gio.PollableInputStream */
    can_poll(): boolean
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    is_readable(): boolean
    read_nonblocking(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of Soup.MultipartInputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    vfunc_is_readable(): boolean
    vfunc_read_nonblocking(buffer: Uint8Array | null): number
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MultipartInputStream_ConstructProps)
    _init (config?: MultipartInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(msg: Message, base_stream: Gio.InputStream): MultipartInputStream
    static $gtype: GObject.Type
}
export interface ProxyResolverDefault_ConstructProps extends GObject.Object_ConstructProps {
    gproxy_resolver?: Gio.ProxyResolver
}
export class ProxyResolverDefault {
    /* Properties of Soup.ProxyResolverDefault */
    gproxy_resolver: Gio.ProxyResolver
    /* Fields of Soup.ProxyResolverDefault */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Soup.ProxyURIResolver */
    get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    get_proxy_uri_sync(uri: URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxy_uri */ URI ]
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.ProxyResolverDefault */
    vfunc_get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    vfunc_get_proxy_uri_sync(uri: URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxy_uri */ URI ]
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyResolverDefault, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyResolverDefault, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gproxy-resolver", callback: (($obj: ProxyResolverDefault, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gproxy-resolver", callback: (($obj: ProxyResolverDefault, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Request */
    get_content_length(): number
    get_content_type(): string | null
    get_session(): Session
    get_uri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    send_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Soup.Request */
    vfunc_check_uri(uri: URI): boolean
    vfunc_get_content_length(): number
    vfunc_get_content_type(): string | null
    vfunc_send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    vfunc_send_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Request, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Request, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Request_ConstructProps)
    _init (config?: Request_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface RequestData_ConstructProps extends Request_ConstructProps {
}
export class RequestData {
    /* Fields of Soup.RequestData */
    parent: Request
    priv: RequestDataPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Request */
    get_content_length(): number
    get_content_type(): string | null
    get_session(): Session
    get_uri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    send_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Soup.Request */
    vfunc_check_uri(uri: URI): boolean
    vfunc_get_content_length(): number
    vfunc_get_content_type(): string | null
    vfunc_send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    vfunc_send_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RequestData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RequestData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.RequestFile */
    get_file(): Gio.File
    /* Methods of Soup.Request */
    get_content_length(): number
    get_content_type(): string | null
    get_session(): Session
    get_uri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    send_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Soup.Request */
    vfunc_check_uri(uri: URI): boolean
    vfunc_get_content_length(): number
    vfunc_get_content_type(): string | null
    vfunc_send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    vfunc_send_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RequestFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RequestFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.RequestHTTP */
    get_message(): Message
    /* Methods of Soup.Request */
    get_content_length(): number
    get_content_type(): string | null
    get_session(): Session
    get_uri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    send_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Soup.Request */
    vfunc_check_uri(uri: URI): boolean
    vfunc_get_content_length(): number
    vfunc_get_content_type(): string | null
    vfunc_send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    vfunc_send_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RequestHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RequestHTTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Requester */
    request(uri_string: string): Request
    request_uri(uri: URI): Request
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.Requester */
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Requester, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Requester, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Requester_ConstructProps)
    _init (config?: Requester_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Requester
    static $gtype: GObject.Type
}
export interface Server_ConstructProps extends GObject.Object_ConstructProps {
    async_context?: object
    http_aliases?: string[]
    https_aliases?: string[]
    interface?: Address
    port?: number
    raw_paths?: boolean
    server_header?: string
    ssl_cert_file?: string
    ssl_key_file?: string
    tls_certificate?: Gio.TlsCertificate
}
export class Server {
    /* Properties of Soup.Server */
    http_aliases: string[]
    https_aliases: string[]
    server_header: string
    /* Fields of Soup.Server */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Server */
    accept_iostream(stream: Gio.IOStream, local_addr?: Gio.SocketAddress | null, remote_addr?: Gio.SocketAddress | null): boolean
    add_auth_domain(auth_domain: AuthDomain): void
    add_early_handler(path: string | null, callback: ServerCallback): void
    add_handler(path: string | null, callback: ServerCallback): void
    add_websocket_extension(extension_type: GObject.Type): void
    add_websocket_handler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback): void
    disconnect(): void
    get_async_context(): GLib.MainContext | null
    get_listener(): Socket
    get_listeners(): Gio.Socket[]
    get_port(): number
    get_uris(): URI[]
    is_https(): boolean
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean
    listen_all(port: number, options: ServerListenOptions): boolean
    listen_fd(fd: number, options: ServerListenOptions): boolean
    listen_local(port: number, options: ServerListenOptions): boolean
    listen_socket(socket: Gio.Socket, options: ServerListenOptions): boolean
    pause_message(msg: Message): void
    quit(): void
    remove_auth_domain(auth_domain: AuthDomain): void
    remove_handler(path: string): void
    remove_websocket_extension(extension_type: GObject.Type): void
    run(): void
    run_async(): void
    set_ssl_cert_file(ssl_cert_file: string, ssl_key_file: string): boolean
    unpause_message(msg: Message): void
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
    /* Virtual methods of Soup.Server */
    vfunc_request_aborted(msg: Message, client: ClientContext): void
    vfunc_request_finished(msg: Message, client: ClientContext): void
    vfunc_request_read(msg: Message, client: ClientContext): void
    vfunc_request_started(msg: Message, client: ClientContext): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Server */
    connect(sigName: "request-aborted", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    connect_after(sigName: "request-aborted", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    emit(sigName: "request-aborted", message: Message, client: ClientContext): void
    connect(sigName: "request-finished", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    connect_after(sigName: "request-finished", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    emit(sigName: "request-finished", message: Message, client: ClientContext): void
    connect(sigName: "request-read", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    connect_after(sigName: "request-read", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    emit(sigName: "request-read", message: Message, client: ClientContext): void
    connect(sigName: "request-started", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: Server, message: Message, client: ClientContext) => void)): number
    emit(sigName: "request-started", message: Message, client: ClientContext): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::http-aliases", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::https-aliases", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::server-header", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-header", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    accept_language?: string
    accept_language_auto?: boolean
    async_context?: object
    http_aliases?: string[]
    https_aliases?: string[]
    idle_timeout?: number
    local_address?: Address
    max_conns?: number
    max_conns_per_host?: number
    proxy_resolver?: Gio.ProxyResolver
    proxy_uri?: URI
    ssl_ca_file?: string
    ssl_strict?: boolean
    ssl_use_system_ca_file?: boolean
    timeout?: number
    tls_database?: Gio.TlsDatabase
    tls_interaction?: Gio.TlsInteraction
    use_ntlm?: boolean
    use_thread_context?: boolean
    user_agent?: string
}
export class Session {
    /* Properties of Soup.Session */
    accept_language: string
    accept_language_auto: boolean
    http_aliases: string[]
    https_aliases: string[]
    idle_timeout: number
    max_conns: number
    max_conns_per_host: number
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: URI
    ssl_ca_file: string
    ssl_strict: boolean
    ssl_use_system_ca_file: boolean
    timeout: number
    tls_database: Gio.TlsDatabase
    tls_interaction: Gio.TlsInteraction
    use_ntlm: boolean
    use_thread_context: boolean
    user_agent: string
    /* Fields of Soup.Session */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Session */
    abort(): void
    add_feature(feature: SessionFeature): void
    add_feature_by_type(feature_type: GObject.Type): void
    cancel_message(msg: Message, status_code: number): void
    connect_async(uri: URI, cancellable?: Gio.Cancellable | null, progress_callback?: SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): Gio.IOStream
    get_async_context(): GLib.MainContext | null
    get_feature(feature_type: GObject.Type): SessionFeature | null
    get_feature_for_message(feature_type: GObject.Type, msg: Message): SessionFeature | null
    get_features(feature_type: GObject.Type): SessionFeature[]
    has_feature(feature_type: GObject.Type): boolean
    pause_message(msg: Message): void
    prefetch_dns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: AddressCallback | null): void
    prepare_for_uri(uri: URI): void
    queue_message(msg: Message, callback?: SessionCallback | null): void
    redirect_message(msg: Message): boolean
    remove_feature(feature: SessionFeature): void
    remove_feature_by_type(feature_type: GObject.Type): void
    request(uri_string: string): Request
    request_http(method: string, uri_string: string): RequestHTTP
    request_http_uri(method: string, uri: URI): RequestHTTP
    request_uri(uri: URI): Request
    requeue_message(msg: Message): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    send_async(msg: Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    send_message(msg: Message): number
    steal_connection(msg: Message): Gio.IOStream
    unpause_message(msg: Message): void
    websocket_connect_async(msg: Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection
    would_redirect(msg: Message): boolean
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
    /* Virtual methods of Soup.Session */
    vfunc_auth_required(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_cancel_message(msg: Message, status_code: number): void
    vfunc_flush_queue(): void
    vfunc_kick(): void
    vfunc_queue_message(msg: Message, callback?: SessionCallback | null): void
    vfunc_request_started(msg: Message, socket: Socket): void
    vfunc_requeue_message(msg: Message): void
    vfunc_send_message(msg: Message): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Session */
    connect(sigName: "authenticate", callback: (($obj: Session, msg: Message, auth: Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: Session, msg: Message, auth: Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    connect(sigName: "connection-created", callback: (($obj: Session, connection: GObject.Object) => void)): number
    connect_after(sigName: "connection-created", callback: (($obj: Session, connection: GObject.Object) => void)): number
    emit(sigName: "connection-created", connection: GObject.Object): void
    connect(sigName: "request-queued", callback: (($obj: Session, msg: Message) => void)): number
    connect_after(sigName: "request-queued", callback: (($obj: Session, msg: Message) => void)): number
    emit(sigName: "request-queued", msg: Message): void
    connect(sigName: "request-started", callback: (($obj: Session, msg: Message, socket: Socket) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: Session, msg: Message, socket: Socket) => void)): number
    emit(sigName: "request-started", msg: Message, socket: Socket): void
    connect(sigName: "request-unqueued", callback: (($obj: Session, msg: Message) => void)): number
    connect_after(sigName: "request-unqueued", callback: (($obj: Session, msg: Message) => void)): number
    emit(sigName: "request-unqueued", msg: Message): void
    connect(sigName: "tunneling", callback: (($obj: Session, connection: GObject.Object) => void)): number
    connect_after(sigName: "tunneling", callback: (($obj: Session, connection: GObject.Object) => void)): number
    emit(sigName: "tunneling", connection: GObject.Object): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-language", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-language-auto", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-aliases", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::https-aliases", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle-timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-conns", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-conns-per-host", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns-per-host", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-database", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-ntlm", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ntlm", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-thread-context", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-thread-context", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    accept_language: string
    accept_language_auto: boolean
    http_aliases: string[]
    https_aliases: string[]
    idle_timeout: number
    max_conns: number
    max_conns_per_host: number
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: URI
    ssl_ca_file: string
    ssl_strict: boolean
    ssl_use_system_ca_file: boolean
    timeout: number
    tls_database: Gio.TlsDatabase
    tls_interaction: Gio.TlsInteraction
    use_ntlm: boolean
    use_thread_context: boolean
    user_agent: string
    /* Fields of Soup.SessionAsync */
    parent: Session
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Session */
    abort(): void
    add_feature(feature: SessionFeature): void
    add_feature_by_type(feature_type: GObject.Type): void
    cancel_message(msg: Message, status_code: number): void
    connect_async(uri: URI, cancellable?: Gio.Cancellable | null, progress_callback?: SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): Gio.IOStream
    get_async_context(): GLib.MainContext | null
    get_feature(feature_type: GObject.Type): SessionFeature | null
    get_feature_for_message(feature_type: GObject.Type, msg: Message): SessionFeature | null
    get_features(feature_type: GObject.Type): SessionFeature[]
    has_feature(feature_type: GObject.Type): boolean
    pause_message(msg: Message): void
    prefetch_dns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: AddressCallback | null): void
    prepare_for_uri(uri: URI): void
    queue_message(msg: Message, callback?: SessionCallback | null): void
    redirect_message(msg: Message): boolean
    remove_feature(feature: SessionFeature): void
    remove_feature_by_type(feature_type: GObject.Type): void
    request(uri_string: string): Request
    request_http(method: string, uri_string: string): RequestHTTP
    request_http_uri(method: string, uri: URI): RequestHTTP
    request_uri(uri: URI): Request
    requeue_message(msg: Message): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    send_async(msg: Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    send_message(msg: Message): number
    steal_connection(msg: Message): Gio.IOStream
    unpause_message(msg: Message): void
    websocket_connect_async(msg: Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection
    would_redirect(msg: Message): boolean
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
    /* Virtual methods of Soup.Session */
    vfunc_auth_required(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_cancel_message(msg: Message, status_code: number): void
    vfunc_flush_queue(): void
    vfunc_kick(): void
    vfunc_queue_message(msg: Message, callback?: SessionCallback | null): void
    vfunc_request_started(msg: Message, socket: Socket): void
    vfunc_requeue_message(msg: Message): void
    vfunc_send_message(msg: Message): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Session */
    connect(sigName: "authenticate", callback: (($obj: SessionAsync, msg: Message, auth: Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: SessionAsync, msg: Message, auth: Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    connect(sigName: "connection-created", callback: (($obj: SessionAsync, connection: GObject.Object) => void)): number
    connect_after(sigName: "connection-created", callback: (($obj: SessionAsync, connection: GObject.Object) => void)): number
    emit(sigName: "connection-created", connection: GObject.Object): void
    connect(sigName: "request-queued", callback: (($obj: SessionAsync, msg: Message) => void)): number
    connect_after(sigName: "request-queued", callback: (($obj: SessionAsync, msg: Message) => void)): number
    emit(sigName: "request-queued", msg: Message): void
    connect(sigName: "request-started", callback: (($obj: SessionAsync, msg: Message, socket: Socket) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: SessionAsync, msg: Message, socket: Socket) => void)): number
    emit(sigName: "request-started", msg: Message, socket: Socket): void
    connect(sigName: "request-unqueued", callback: (($obj: SessionAsync, msg: Message) => void)): number
    connect_after(sigName: "request-unqueued", callback: (($obj: SessionAsync, msg: Message) => void)): number
    emit(sigName: "request-unqueued", msg: Message): void
    connect(sigName: "tunneling", callback: (($obj: SessionAsync, connection: GObject.Object) => void)): number
    connect_after(sigName: "tunneling", callback: (($obj: SessionAsync, connection: GObject.Object) => void)): number
    emit(sigName: "tunneling", connection: GObject.Object): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-language", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-language-auto", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-aliases", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::https-aliases", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle-timeout", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-conns", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-conns-per-host", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns-per-host", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-database", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-interaction", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-ntlm", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ntlm", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-thread-context", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-thread-context", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: SessionAsync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    accept_language: string
    accept_language_auto: boolean
    http_aliases: string[]
    https_aliases: string[]
    idle_timeout: number
    max_conns: number
    max_conns_per_host: number
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: URI
    ssl_ca_file: string
    ssl_strict: boolean
    ssl_use_system_ca_file: boolean
    timeout: number
    tls_database: Gio.TlsDatabase
    tls_interaction: Gio.TlsInteraction
    use_ntlm: boolean
    use_thread_context: boolean
    user_agent: string
    /* Fields of Soup.SessionSync */
    parent: Session
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Session */
    abort(): void
    add_feature(feature: SessionFeature): void
    add_feature_by_type(feature_type: GObject.Type): void
    cancel_message(msg: Message, status_code: number): void
    connect_async(uri: URI, cancellable?: Gio.Cancellable | null, progress_callback?: SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): Gio.IOStream
    get_async_context(): GLib.MainContext | null
    get_feature(feature_type: GObject.Type): SessionFeature | null
    get_feature_for_message(feature_type: GObject.Type, msg: Message): SessionFeature | null
    get_features(feature_type: GObject.Type): SessionFeature[]
    has_feature(feature_type: GObject.Type): boolean
    pause_message(msg: Message): void
    prefetch_dns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: AddressCallback | null): void
    prepare_for_uri(uri: URI): void
    queue_message(msg: Message, callback?: SessionCallback | null): void
    redirect_message(msg: Message): boolean
    remove_feature(feature: SessionFeature): void
    remove_feature_by_type(feature_type: GObject.Type): void
    request(uri_string: string): Request
    request_http(method: string, uri_string: string): RequestHTTP
    request_http_uri(method: string, uri: URI): RequestHTTP
    request_uri(uri: URI): Request
    requeue_message(msg: Message): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    send_async(msg: Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    send_message(msg: Message): number
    steal_connection(msg: Message): Gio.IOStream
    unpause_message(msg: Message): void
    websocket_connect_async(msg: Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection
    would_redirect(msg: Message): boolean
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
    /* Virtual methods of Soup.Session */
    vfunc_auth_required(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_cancel_message(msg: Message, status_code: number): void
    vfunc_flush_queue(): void
    vfunc_kick(): void
    vfunc_queue_message(msg: Message, callback?: SessionCallback | null): void
    vfunc_request_started(msg: Message, socket: Socket): void
    vfunc_requeue_message(msg: Message): void
    vfunc_send_message(msg: Message): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Session */
    connect(sigName: "authenticate", callback: (($obj: SessionSync, msg: Message, auth: Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: SessionSync, msg: Message, auth: Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    connect(sigName: "connection-created", callback: (($obj: SessionSync, connection: GObject.Object) => void)): number
    connect_after(sigName: "connection-created", callback: (($obj: SessionSync, connection: GObject.Object) => void)): number
    emit(sigName: "connection-created", connection: GObject.Object): void
    connect(sigName: "request-queued", callback: (($obj: SessionSync, msg: Message) => void)): number
    connect_after(sigName: "request-queued", callback: (($obj: SessionSync, msg: Message) => void)): number
    emit(sigName: "request-queued", msg: Message): void
    connect(sigName: "request-started", callback: (($obj: SessionSync, msg: Message, socket: Socket) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: SessionSync, msg: Message, socket: Socket) => void)): number
    emit(sigName: "request-started", msg: Message, socket: Socket): void
    connect(sigName: "request-unqueued", callback: (($obj: SessionSync, msg: Message) => void)): number
    connect_after(sigName: "request-unqueued", callback: (($obj: SessionSync, msg: Message) => void)): number
    emit(sigName: "request-unqueued", msg: Message): void
    connect(sigName: "tunneling", callback: (($obj: SessionSync, connection: GObject.Object) => void)): number
    connect_after(sigName: "tunneling", callback: (($obj: SessionSync, connection: GObject.Object) => void)): number
    emit(sigName: "tunneling", connection: GObject.Object): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-language", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-language-auto", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-aliases", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::https-aliases", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle-timeout", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-conns", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-conns-per-host", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns-per-host", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-database", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-interaction", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-ntlm", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ntlm", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-thread-context", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-thread-context", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: SessionSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SessionSync_ConstructProps)
    _init (config?: SessionSync_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SessionSync
    static $gtype: GObject.Type
}
export interface Socket_ConstructProps extends GObject.Object_ConstructProps {
    async_context?: object
    fd?: number
    gsocket?: Gio.Socket
    iostream?: Gio.IOStream
    ipv6_only?: boolean
    local_address?: Address
    non_blocking?: boolean
    remote_address?: Address
    ssl_creds?: object
    ssl_fallback?: boolean
    ssl_strict?: boolean
    timeout?: number
    use_thread_context?: boolean
}
export class Socket {
    /* Properties of Soup.Socket */
    ipv6_only: boolean
    readonly is_server: boolean
    non_blocking: boolean
    ssl_creds: object
    timeout: number
    readonly tls_certificate: Gio.TlsCertificate
    readonly tls_errors: Gio.TlsCertificateFlags
    readonly trusted_certificate: boolean
    /* Fields of Soup.Socket */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.Socket */
    connect_async(cancellable: Gio.Cancellable | null, callback: SocketCallback): void
    connect_sync(cancellable?: Gio.Cancellable | null): number
    disconnect(): void
    get_fd(): number
    get_local_address(): Address
    get_remote_address(): Address
    is_connected(): boolean
    is_ssl(): boolean
    listen(): boolean
    read(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nread */ number ]
    read_until(buffer: Uint8Array, boundary: object | null, boundary_len: number, got_boundary: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nread */ number ]
    start_proxy_ssl(ssl_host: string, cancellable?: Gio.Cancellable | null): boolean
    start_ssl(cancellable?: Gio.Cancellable | null): boolean
    write(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nwrote */ number ]
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Soup.Socket */
    vfunc_disconnected(): void
    vfunc_new_connection(new_sock: Socket): void
    vfunc_readable(): void
    vfunc_writable(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.Socket */
    connect(sigName: "disconnected", callback: (($obj: Socket) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Socket) => void)): number
    emit(sigName: "disconnected"): void
    connect(sigName: "event", callback: (($obj: Socket, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    connect_after(sigName: "event", callback: (($obj: Socket, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    emit(sigName: "event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    connect(sigName: "new-connection", callback: (($obj: Socket, new_: Socket) => void)): number
    connect_after(sigName: "new-connection", callback: (($obj: Socket, new_: Socket) => void)): number
    emit(sigName: "new-connection", new_: Socket): void
    connect(sigName: "readable", callback: (($obj: Socket) => void)): number
    connect_after(sigName: "readable", callback: (($obj: Socket) => void)): number
    emit(sigName: "readable"): void
    connect(sigName: "writable", callback: (($obj: Socket) => void)): number
    connect_after(sigName: "writable", callback: (($obj: Socket) => void)): number
    emit(sigName: "writable"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ipv6-only", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ipv6-only", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-server", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-server", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::non-blocking", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::non-blocking", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-creds", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-creds", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-certificate", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-errors", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-errors", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::trusted-certificate", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trusted-certificate", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Socket_ConstructProps)
    _init (config?: Socket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface WebsocketConnection_ConstructProps extends GObject.Object_ConstructProps {
    connection_type?: WebsocketConnectionType
    extensions?: object
    io_stream?: Gio.IOStream
    keepalive_interval?: number
    max_incoming_payload_size?: number
    origin?: string
    protocol?: string
    uri?: URI
}
export class WebsocketConnection {
    /* Properties of Soup.WebsocketConnection */
    keepalive_interval: number
    max_incoming_payload_size: number
    readonly state: WebsocketState
    /* Fields of Soup.WebsocketConnection */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.WebsocketConnection */
    close(code: number, data?: string | null): void
    get_close_code(): number
    get_close_data(): string
    get_connection_type(): WebsocketConnectionType
    get_extensions(): WebsocketExtension[]
    get_io_stream(): Gio.IOStream
    get_keepalive_interval(): number
    get_max_incoming_payload_size(): number
    get_origin(): string | null
    get_protocol(): string | null
    get_state(): WebsocketState
    get_uri(): URI
    send_binary(data: Uint8Array | null): void
    send_message(type: WebsocketDataType, message: GLib.Bytes): void
    send_text(text: string): void
    set_keepalive_interval(interval: number): void
    set_max_incoming_payload_size(max_incoming_payload_size: number): void
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
    /* Virtual methods of Soup.WebsocketConnection */
    vfunc_closed(): void
    vfunc_closing(): void
    vfunc_error(error: GLib.Error): void
    vfunc_message(type: WebsocketDataType, message: GLib.Bytes): void
    vfunc_pong(message: GLib.Bytes): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.WebsocketConnection */
    connect(sigName: "closed", callback: (($obj: WebsocketConnection) => void)): number
    connect_after(sigName: "closed", callback: (($obj: WebsocketConnection) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "closing", callback: (($obj: WebsocketConnection) => void)): number
    connect_after(sigName: "closing", callback: (($obj: WebsocketConnection) => void)): number
    emit(sigName: "closing"): void
    connect(sigName: "error", callback: (($obj: WebsocketConnection, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: WebsocketConnection, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "message", callback: (($obj: WebsocketConnection, type: number, message: GLib.Bytes) => void)): number
    connect_after(sigName: "message", callback: (($obj: WebsocketConnection, type: number, message: GLib.Bytes) => void)): number
    emit(sigName: "message", type: number, message: GLib.Bytes): void
    connect(sigName: "pong", callback: (($obj: WebsocketConnection, message: GLib.Bytes) => void)): number
    connect_after(sigName: "pong", callback: (($obj: WebsocketConnection, message: GLib.Bytes) => void)): number
    emit(sigName: "pong", message: GLib.Bytes): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::keepalive-interval", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive-interval", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-incoming-payload-size", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-incoming-payload-size", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebsocketConnection_ConstructProps)
    _init (config?: WebsocketConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin?: string | null, protocol?: string | null): WebsocketConnection
    static new_with_extensions(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]): WebsocketConnection
    static $gtype: GObject.Type
}
export interface WebsocketExtension_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebsocketExtension {
    /* Fields of Soup.WebsocketExtension */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.WebsocketExtension */
    configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    get_request_params(): string | null
    get_response_params(): string | null
    process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
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
    /* Virtual methods of Soup.WebsocketExtension */
    vfunc_configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    vfunc_get_request_params(): string | null
    vfunc_get_response_params(): string | null
    vfunc_process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    vfunc_process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsocketExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup.WebsocketExtension */
    configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    get_request_params(): string | null
    get_response_params(): string | null
    process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
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
    /* Virtual methods of Soup.WebsocketExtension */
    vfunc_configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    vfunc_get_request_params(): string | null
    vfunc_get_response_params(): string | null
    vfunc_process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    vfunc_process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsocketExtensionDeflate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketExtensionDeflate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of Soup.WebsocketExtensionManager */
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsocketExtensionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketExtensionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebsocketExtensionManager_ConstructProps)
    _init (config?: WebsocketExtensionManager_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AddressClass {
    /* Fields of Soup.AddressClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AuthClass {
    /* Fields of Soup.AuthClass */
    parent_class: GObject.ObjectClass
    scheme_name: string
    strength: number
    update: (auth: Auth, msg: Message, auth_header: GLib.HashTable) => boolean
    get_protection_space: (auth: Auth, source_uri: URI) => string[]
    authenticate: (auth: Auth, username: string, password: string) => void
    is_authenticated: (auth: Auth) => boolean
    get_authorization: (auth: Auth, msg: Message) => string
    is_ready: (auth: Auth, msg: Message) => boolean
    can_authenticate: (auth: Auth) => boolean
    static name: string
}
export abstract class AuthDomainBasicClass {
    /* Fields of Soup.AuthDomainBasicClass */
    parent_class: AuthDomainClass
    static name: string
}
export abstract class AuthDomainClass {
    /* Fields of Soup.AuthDomainClass */
    parent_class: GObject.ObjectClass
    accepts: (domain: AuthDomain, msg: Message, header: string) => string
    challenge: (domain: AuthDomain, msg: Message) => string
    check_password: (domain: AuthDomain, msg: Message, username: string, password: string) => boolean
    static name: string
}
export abstract class AuthDomainDigestClass {
    /* Fields of Soup.AuthDomainDigestClass */
    parent_class: AuthDomainClass
    static name: string
}
export abstract class AuthManagerClass {
    /* Fields of Soup.AuthManagerClass */
    parent_class: GObject.ObjectClass
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
    get_as_bytes(): GLib.Bytes
    get_data(): /* data */ Uint8Array
    get_owner(): object | null
    new_subbuffer(offset: number, length: number): Buffer
    static name: string
    static new(data: Uint8Array): Buffer
    constructor(data: Uint8Array)
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array): Buffer
    static new_with_owner(data: Uint8Array, owner?: object | null, owner_dnotify?: GLib.DestroyNotify | null): Buffer
}
export abstract class CacheClass {
    /* Fields of Soup.CacheClass */
    parent_class: GObject.ObjectClass
    get_cacheability: (cache: Cache, msg: Message) => Cacheability
    static name: string
}
export class CachePrivate {
    static name: string
}
export class ClientContext {
    /* Methods of Soup.ClientContext */
    get_address(): Address | null
    get_auth_domain(): AuthDomain | null
    get_auth_user(): string | null
    get_gsocket(): Gio.Socket | null
    get_host(): string | null
    get_local_address(): Gio.SocketAddress | null
    get_remote_address(): Gio.SocketAddress | null
    get_socket(): Socket
    steal_connection(): Gio.IOStream
    static name: string
}
export class Connection {
    static name: string
}
export abstract class ContentDecoderClass {
    /* Fields of Soup.ContentDecoderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ContentDecoderPrivate {
    static name: string
}
export abstract class ContentSnifferClass {
    /* Fields of Soup.ContentSnifferClass */
    parent_class: GObject.ObjectClass
    sniff: (sniffer: ContentSniffer, msg: Message, buffer: Buffer) => [ /* returnType */ string, /* params */ GLib.HashTable | null ]
    get_buffer_size: (sniffer: ContentSniffer) => number
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
    http_only: boolean
    /* Methods of Soup.Cookie */
    applies_to_uri(uri: URI): boolean
    copy(): Cookie
    domain_matches(host: string): boolean
    equal(cookie2: Cookie): boolean
    free(): void
    get_domain(): string
    get_expires(): Date | null
    get_http_only(): boolean
    get_name(): string
    get_path(): string
    get_same_site_policy(): SameSitePolicy
    get_secure(): boolean
    get_value(): string
    set_domain(domain: string): void
    set_expires(expires: Date): void
    set_http_only(http_only: boolean): void
    set_max_age(max_age: number): void
    set_name(name: string): void
    set_path(path: string): void
    set_same_site_policy(policy: SameSitePolicy): void
    set_secure(secure: boolean): void
    set_value(value: string): void
    to_cookie_header(): string
    to_set_cookie_header(): string
    static name: string
    static new(name: string, value: string, domain: string, path: string, max_age: number): Cookie
    constructor(name: string, value: string, domain: string, path: string, max_age: number)
    /* Static methods and pseudo-constructors */
    static new(name: string, value: string, domain: string, path: string, max_age: number): Cookie
    static parse(header: string, origin: URI): Cookie | null
}
export abstract class CookieJarClass {
    /* Fields of Soup.CookieJarClass */
    parent_class: GObject.ObjectClass
    save: (jar: CookieJar) => void
    is_persistent: (jar: CookieJar) => boolean
    changed: (jar: CookieJar, old_cookie: Cookie, new_cookie: Cookie) => void
    static name: string
}
export abstract class CookieJarDBClass {
    /* Fields of Soup.CookieJarDBClass */
    parent_class: CookieJarClass
    static name: string
}
export abstract class CookieJarTextClass {
    /* Fields of Soup.CookieJarTextClass */
    parent_class: CookieJarClass
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
    get_day(): number
    get_hour(): number
    get_minute(): number
    get_month(): number
    get_offset(): number
    get_second(): number
    get_utc(): number
    get_year(): number
    is_past(): boolean
    to_string(format: DateFormat): string
    to_time_t(): number
    to_timeval(): /* time */ GLib.TimeVal
    static name: string
    static new(year: number, month: number, day: number, hour: number, minute: number, second: number): Date
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number)
    /* Static methods and pseudo-constructors */
    static new(year: number, month: number, day: number, hour: number, minute: number, second: number): Date
    static new_from_now(offset_seconds: number): Date
    static new_from_string(date_string: string): Date
    static new_from_time_t(when: number): Date
}
export abstract class HSTSEnforcerClass {
    /* Fields of Soup.HSTSEnforcerClass */
    parent_class: GObject.ObjectClass
    is_persistent: (hsts_enforcer: HSTSEnforcer) => boolean
    has_valid_policy: (hsts_enforcer: HSTSEnforcer, domain: string) => boolean
    changed: (enforcer: HSTSEnforcer, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void
    hsts_enforced: (enforcer: HSTSEnforcer, message: Message) => void
    static name: string
}
export abstract class HSTSEnforcerDBClass {
    /* Fields of Soup.HSTSEnforcerDBClass */
    parent_class: HSTSEnforcerClass
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
    max_age: number
    expires: Date
    include_subdomains: boolean
    /* Methods of Soup.HSTSPolicy */
    copy(): HSTSPolicy
    equal(policy2: HSTSPolicy): boolean
    free(): void
    get_domain(): string
    includes_subdomains(): boolean
    is_expired(): boolean
    is_session_policy(): boolean
    static name: string
    static new(domain: string, max_age: number, include_subdomains: boolean): HSTSPolicy
    constructor(domain: string, max_age: number, include_subdomains: boolean)
    /* Static methods and pseudo-constructors */
    static new(domain: string, max_age: number, include_subdomains: boolean): HSTSPolicy
    static new_from_response(msg: Message): HSTSPolicy
    static new_full(domain: string, max_age: number, expires: Date, include_subdomains: boolean): HSTSPolicy
    static new_session_policy(domain: string, include_subdomains: boolean): HSTSPolicy
}
export abstract class LoggerClass {
    /* Fields of Soup.LoggerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MessageBody {
    /* Fields of Soup.MessageBody */
    data: string
    length: number
    /* Methods of Soup.MessageBody */
    append_buffer(buffer: Buffer): void
    append(data: Uint8Array): void
    complete(): void
    flatten(): Buffer
    free(): void
    get_accumulate(): boolean
    get_chunk(offset: number): Buffer | null
    got_chunk(chunk: Buffer): void
    set_accumulate(accumulate: boolean): void
    truncate(): void
    wrote_chunk(chunk: Buffer): void
    static name: string
    static new(): MessageBody
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageBody
}
export abstract class MessageClass {
    /* Fields of Soup.MessageClass */
    parent_class: GObject.ObjectClass
    wrote_informational: (msg: Message) => void
    wrote_headers: (msg: Message) => void
    wrote_chunk: (msg: Message) => void
    wrote_body: (msg: Message) => void
    got_informational: (msg: Message) => void
    got_headers: (msg: Message) => void
    got_chunk: (msg: Message, chunk: Buffer) => void
    got_body: (msg: Message) => void
    restarted: (msg: Message) => void
    finished: (msg: Message) => void
    starting: (msg: Message) => void
    static name: string
}
export class MessageHeaders {
    /* Methods of Soup.MessageHeaders */
    append(name: string, value: string): void
    clean_connection_headers(): void
    clear(): void
    foreach(func: MessageHeadersForeachFunc): void
    free(): void
    free_ranges(ranges: Range): void
    get(name: string): string | null
    get_content_disposition(): [ /* returnType */ boolean, /* disposition */ string, /* params */ GLib.HashTable ]
    get_content_length(): number
    get_content_range(): [ /* returnType */ boolean, /* start */ number, /* end */ number, /* total_length */ number | null ]
    get_content_type(): [ /* returnType */ string | null, /* params */ GLib.HashTable | null ]
    get_encoding(): Encoding
    get_expectations(): Expectation
    get_headers_type(): MessageHeadersType
    get_list(name: string): string | null
    get_one(name: string): string | null
    get_ranges(total_length: number): [ /* returnType */ boolean, /* ranges */ Range[] ]
    header_contains(name: string, token: string): boolean
    header_equals(name: string, value: string): boolean
    remove(name: string): void
    replace(name: string, value: string): void
    set_content_disposition(disposition: string, params?: GLib.HashTable | null): void
    set_content_length(content_length: number): void
    set_content_range(start: number, end: number, total_length: number): void
    set_content_type(content_type: string, params?: GLib.HashTable | null): void
    set_encoding(encoding: Encoding): void
    set_expectations(expectations: Expectation): void
    set_range(start: number, end: number): void
    set_ranges(ranges: Range, length: number): void
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
    append_form_file(control_name: string, filename: string, content_type: string, body: Buffer): void
    append_form_string(control_name: string, data: string): void
    append_part(headers: MessageHeaders, body: Buffer): void
    free(): void
    get_length(): number
    get_part(part: number): [ /* returnType */ boolean, /* headers */ MessageHeaders, /* body */ Buffer ]
    to_message(dest_headers: MessageHeaders, dest_body: MessageBody): void
    static name: string
    static new(mime_type: string): Multipart
    constructor(mime_type: string)
    /* Static methods and pseudo-constructors */
    static new(mime_type: string): Multipart
    static new_from_message(headers: MessageHeaders, body: MessageBody): Multipart
}
export abstract class MultipartInputStreamClass {
    /* Fields of Soup.MultipartInputStreamClass */
    parent_class: Gio.FilterInputStreamClass
    static name: string
}
export class MultipartInputStreamPrivate {
    static name: string
}
export abstract class PasswordManagerInterface {
    /* Fields of Soup.PasswordManagerInterface */
    base: GObject.TypeInterface
    get_passwords_async: (password_manager: PasswordManager, msg: Message, auth: Auth, retrying: boolean, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback) => void
    get_passwords_sync: (password_manager: PasswordManager, msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null) => void
    static name: string
}
export abstract class ProxyResolverDefaultClass {
    /* Fields of Soup.ProxyResolverDefaultClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ProxyResolverInterface {
    /* Fields of Soup.ProxyResolverInterface */
    base: GObject.TypeInterface
    get_proxy_async: (proxy_resolver: ProxyResolver, msg: Message, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback) => void
    get_proxy_sync: (proxy_resolver: ProxyResolver, msg: Message, cancellable?: Gio.Cancellable | null) => [ /* returnType */ number, /* addr */ Address ]
    static name: string
}
export abstract class ProxyURIResolverInterface {
    /* Fields of Soup.ProxyURIResolverInterface */
    base: GObject.TypeInterface
    get_proxy_uri_async: (proxy_uri_resolver: ProxyURIResolver, uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback) => void
    get_proxy_uri_sync: (proxy_uri_resolver: ProxyURIResolver, uri: URI, cancellable?: Gio.Cancellable | null) => [ /* returnType */ number, /* proxy_uri */ URI ]
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
    check_uri: (req_base: Request, uri: URI) => boolean
    send: (request: Request, cancellable?: Gio.Cancellable | null) => Gio.InputStream
    send_async: (request: Request, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    send_finish: (request: Request, result: Gio.AsyncResult) => Gio.InputStream
    get_content_length: (request: Request) => number
    get_content_type: (request: Request) => string | null
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
    parent_class: GObject.ObjectClass
    static name: string
}
export class RequesterPrivate {
    static name: string
}
export abstract class ServerClass {
    /* Fields of Soup.ServerClass */
    parent_class: GObject.ObjectClass
    request_started: (server: Server, msg: Message, client: ClientContext) => void
    request_read: (server: Server, msg: Message, client: ClientContext) => void
    request_finished: (server: Server, msg: Message, client: ClientContext) => void
    request_aborted: (server: Server, msg: Message, client: ClientContext) => void
    static name: string
}
export abstract class SessionAsyncClass {
    /* Fields of Soup.SessionAsyncClass */
    parent_class: SessionClass
    static name: string
}
export abstract class SessionClass {
    /* Fields of Soup.SessionClass */
    parent_class: GObject.ObjectClass
    request_started: (session: Session, msg: Message, socket: Socket) => void
    authenticate: (session: Session, msg: Message, auth: Auth, retrying: boolean) => void
    queue_message: (session: Session, msg: Message, callback?: SessionCallback | null) => void
    requeue_message: (session: Session, msg: Message) => void
    send_message: (session: Session, msg: Message) => number
    cancel_message: (session: Session, msg: Message, status_code: number) => void
    auth_required: (session: Session, msg: Message, auth: Auth, retrying: boolean) => void
    flush_queue: (session: Session) => void
    kick: (session: Session) => void
    static name: string
}
export abstract class SessionFeatureInterface {
    /* Fields of Soup.SessionFeatureInterface */
    parent: GObject.TypeInterface
    attach: (feature: SessionFeature, session: Session) => void
    detach: (feature: SessionFeature, session: Session) => void
    request_queued: (feature: SessionFeature, session: Session, msg: Message) => void
    request_started: (feature: SessionFeature, session: Session, msg: Message, socket: Socket) => void
    request_unqueued: (feature: SessionFeature, session: Session, msg: Message) => void
    add_feature: (feature: SessionFeature, type: GObject.Type) => boolean
    remove_feature: (feature: SessionFeature, type: GObject.Type) => boolean
    has_feature: (feature: SessionFeature, type: GObject.Type) => boolean
    static name: string
}
export abstract class SessionSyncClass {
    /* Fields of Soup.SessionSyncClass */
    parent_class: SessionClass
    static name: string
}
export abstract class SocketClass {
    /* Fields of Soup.SocketClass */
    parent_class: GObject.ObjectClass
    readable: (sock: Socket) => void
    writable: (sock: Socket) => void
    disconnected: (sock: Socket) => void
    new_connection: (listener: Socket, new_sock: Socket) => void
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
    copy_host(): URI
    equal(uri2: URI): boolean
    free(): void
    get_fragment(): string
    get_host(): string
    get_password(): string
    get_path(): string
    get_port(): number
    get_query(): string
    get_scheme(): string
    get_user(): string
    host_equal(v2: URI): boolean
    host_hash(): number
    set_fragment(fragment?: string | null): void
    set_host(host?: string | null): void
    set_password(password?: string | null): void
    set_path(path: string): void
    set_port(port: number): void
    set_query(query?: string | null): void
    set_query_from_form(form: GLib.HashTable): void
    set_scheme(scheme: string): void
    set_user(user?: string | null): void
    to_string(just_path_and_query: boolean): string
    uses_default_port(): boolean
    static name: string
    static new(uri_string?: string | null): URI
    constructor(uri_string?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uri_string?: string | null): URI
    static new_with_base(base: URI, uri_string: string): URI
    static decode(part: string): string
    static encode(part: string, escape_extra?: string | null): string
    static normalize(part: string, unescape_extra?: string | null): string
}
export abstract class WebsocketConnectionClass {
    /* Fields of Soup.WebsocketConnectionClass */
    parent: GObject.ObjectClass
    message: (self: WebsocketConnection, type: WebsocketDataType, message: GLib.Bytes) => void
    error: (self: WebsocketConnection, error: GLib.Error) => void
    closing: (self: WebsocketConnection) => void
    closed: (self: WebsocketConnection) => void
    pong: (self: WebsocketConnection, message: GLib.Bytes) => void
    static name: string
}
export class WebsocketConnectionPrivate {
    static name: string
}
export abstract class WebsocketExtensionClass {
    /* Fields of Soup.WebsocketExtensionClass */
    parent_class: GObject.ObjectClass
    name: string
    configure: (extension: WebsocketExtension, connection_type: WebsocketConnectionType, params?: GLib.HashTable | null) => boolean
    get_request_params: (extension: WebsocketExtension) => string | null
    get_response_params: (extension: WebsocketExtension) => string | null
    process_outgoing_message: (extension: WebsocketExtension, header: number, payload: GLib.Bytes) => [ /* returnType */ GLib.Bytes, /* header */ number ]
    process_incoming_message: (extension: WebsocketExtension, header: number, payload: GLib.Bytes) => [ /* returnType */ GLib.Bytes, /* header */ number ]
    static name: string
}
export abstract class WebsocketExtensionDeflateClass {
    /* Fields of Soup.WebsocketExtensionDeflateClass */
    parent_class: WebsocketExtensionClass
    static name: string
}
export abstract class WebsocketExtensionManagerClass {
    /* Fields of Soup.WebsocketExtensionManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class XMLRPCParams {
    /* Methods of Soup.XMLRPCParams */
    free(): void
    parse(signature?: string | null): GLib.Variant
    static name: string
}