/**
 * Soup-2.4
 */

import * as Gio from './Gio'
import * as GObject from './GObject'
import * as GLib from './GLib'
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
}
export enum ServerListenOptions {
    HTTPS,
    IPV4_ONLY,
    IPV6_ONLY,
}
export const ADDRESS_ANY_PORT:number
export const ADDRESS_FAMILY:string
export const ADDRESS_NAME:string
export const ADDRESS_PHYSICAL:string
export const ADDRESS_PORT:string
export const ADDRESS_PROTOCOL:string
export const ADDRESS_SOCKADDR:string
export const AUTH_DOMAIN_ADD_PATH:string
export const AUTH_DOMAIN_BASIC_AUTH_CALLBACK:string
export const AUTH_DOMAIN_BASIC_AUTH_DATA:string
export const AUTH_DOMAIN_BASIC_H:number
export const AUTH_DOMAIN_DIGEST_AUTH_CALLBACK:string
export const AUTH_DOMAIN_DIGEST_AUTH_DATA:string
export const AUTH_DOMAIN_DIGEST_H:number
export const AUTH_DOMAIN_FILTER:string
export const AUTH_DOMAIN_FILTER_DATA:string
export const AUTH_DOMAIN_GENERIC_AUTH_CALLBACK:string
export const AUTH_DOMAIN_GENERIC_AUTH_DATA:string
export const AUTH_DOMAIN_H:number
export const AUTH_DOMAIN_PROXY:string
export const AUTH_DOMAIN_REALM:string
export const AUTH_DOMAIN_REMOVE_PATH:string
export const AUTH_H:number
export const AUTH_HOST:string
export const AUTH_IS_AUTHENTICATED:string
export const AUTH_IS_FOR_PROXY:string
export const AUTH_MANAGER_H:number
export const AUTH_REALM:string
export const AUTH_SCHEME_NAME:string
export const CACHE_H:number
export const CHAR_HTTP_CTL:number
export const CHAR_HTTP_SEPARATOR:number
export const CHAR_URI_GEN_DELIMS:number
export const CHAR_URI_PERCENT_ENCODED:number
export const CHAR_URI_SUB_DELIMS:number
export const CONTENT_DECODER_H:number
export const CONTENT_SNIFFER_H:number
export const COOKIE_H:number
export const COOKIE_JAR_ACCEPT_POLICY:string
export const COOKIE_JAR_DB_FILENAME:string
export const COOKIE_JAR_DB_H:number
export const COOKIE_JAR_H:number
export const COOKIE_JAR_READ_ONLY:string
export const COOKIE_JAR_TEXT_FILENAME:string
export const COOKIE_JAR_TEXT_H:number
export const COOKIE_MAX_AGE_ONE_DAY:number
export const COOKIE_MAX_AGE_ONE_HOUR:number
export const COOKIE_MAX_AGE_ONE_WEEK:number
export const COOKIE_MAX_AGE_ONE_YEAR:number
export const DATE_H:number
export const FORM_H:number
export const FORM_MIME_TYPE_MULTIPART:string
export const FORM_MIME_TYPE_URLENCODED:string
export const HEADERS_H:number
export const LOGGER_H:number
export const MESSAGE_BODY_H:number
export const MESSAGE_FIRST_PARTY:string
export const MESSAGE_FLAGS:string
export const MESSAGE_H:number
export const MESSAGE_HEADERS_H:number
export const MESSAGE_HTTP_VERSION:string
export const MESSAGE_METHOD:string
export const MESSAGE_PRIORITY:string
export const MESSAGE_REASON_PHRASE:string
export const MESSAGE_REQUEST_BODY:string
export const MESSAGE_REQUEST_BODY_DATA:string
export const MESSAGE_REQUEST_HEADERS:string
export const MESSAGE_RESPONSE_BODY:string
export const MESSAGE_RESPONSE_BODY_DATA:string
export const MESSAGE_RESPONSE_HEADERS:string
export const MESSAGE_SERVER_SIDE:string
export const MESSAGE_STATUS_CODE:string
export const MESSAGE_TLS_CERTIFICATE:string
export const MESSAGE_TLS_ERRORS:string
export const MESSAGE_URI:string
export const METHOD_H:number
export const MISC_H:number
export const MULTIPART_H:number
export const MULTIPART_INPUT_STREAM_H:number
export const PASSWORD_MANAGER_H:number
export const PROXY_RESOLVER_DEFAULT_H:number
export const PROXY_URI_RESOLVER_H:number
export const REQUESTER_H:number
export const REQUEST_DATA_H:number
export const REQUEST_FILE_H:number
export const REQUEST_H:number
export const REQUEST_HTTP_H:number
export const REQUEST_SESSION:string
export const REQUEST_URI:string
export const SERVER_ASYNC_CONTEXT:string
export const SERVER_H:number
export const SERVER_HTTPS_ALIASES:string
export const SERVER_HTTP_ALIASES:string
export const SERVER_INTERFACE:string
export const SERVER_PORT:string
export const SERVER_RAW_PATHS:string
export const SERVER_SERVER_HEADER:string
export const SERVER_SSL_CERT_FILE:string
export const SERVER_SSL_KEY_FILE:string
export const SERVER_TLS_CERTIFICATE:string
export const SESSION_ACCEPT_LANGUAGE:string
export const SESSION_ACCEPT_LANGUAGE_AUTO:string
export const SESSION_ADD_FEATURE:string
export const SESSION_ADD_FEATURE_BY_TYPE:string
export const SESSION_ASYNC_CONTEXT:string
export const SESSION_ASYNC_H:number
export const SESSION_FEATURE_H:number
export const SESSION_H:number
export const SESSION_HTTPS_ALIASES:string
export const SESSION_HTTP_ALIASES:string
export const SESSION_IDLE_TIMEOUT:string
export const SESSION_LOCAL_ADDRESS:string
export const SESSION_MAX_CONNS:string
export const SESSION_MAX_CONNS_PER_HOST:string
export const SESSION_PROXY_RESOLVER:string
export const SESSION_PROXY_URI:string
export const SESSION_REMOVE_FEATURE_BY_TYPE:string
export const SESSION_SSL_CA_FILE:string
export const SESSION_SSL_STRICT:string
export const SESSION_SSL_USE_SYSTEM_CA_FILE:string
export const SESSION_SYNC_H:number
export const SESSION_TIMEOUT:string
export const SESSION_TLS_DATABASE:string
export const SESSION_TLS_INTERACTION:string
export const SESSION_USER_AGENT:string
export const SESSION_USE_NTLM:string
export const SESSION_USE_THREAD_CONTEXT:string
export const SOCKET_ASYNC_CONTEXT:string
export const SOCKET_FLAG_NONBLOCKING:string
export const SOCKET_H:number
export const SOCKET_IS_SERVER:string
export const SOCKET_LOCAL_ADDRESS:string
export const SOCKET_REMOTE_ADDRESS:string
export const SOCKET_SSL_CREDENTIALS:string
export const SOCKET_SSL_FALLBACK:string
export const SOCKET_SSL_STRICT:string
export const SOCKET_TIMEOUT:string
export const SOCKET_TLS_CERTIFICATE:string
export const SOCKET_TLS_ERRORS:string
export const SOCKET_TRUSTED_CERTIFICATE:string
export const SOCKET_USE_THREAD_CONTEXT:string
export const STATUS_H:number
export const TYPES_H:number
export const URI_H:number
export const VALUE_UTILS_H:number
export const XMLRPC_H:number
export const XMLRPC_OLD_H:number
export function cookie_parse(header: string, origin: URI): Cookie | null
export function cookies_from_request(msg: Message): GLib.SList
export function cookies_from_response(msg: Message): GLib.SList
export function cookies_to_cookie_header(cookies: GLib.SList): string
export function cookies_to_request(cookies: GLib.SList, msg: Message): void
export function cookies_to_response(cookies: GLib.SList, msg: Message): void
export function form_decode(encoded_form: string): GLib.HashTable
export function form_decode_multipart(msg: Message, file_control_name: string | null): [ /* returnType */ GLib.HashTable | null, /* filename */ string | null, /* content_type */ string | null, /* file */ Buffer | null ]
export function form_encode_datalist(form_data_set: GLib.Data): string
export function form_encode_hash(form_data_set: GLib.HashTable): string
export function form_request_new_from_datalist(method: string, uri: string, form_data_set: GLib.Data): Message
export function form_request_new_from_hash(method: string, uri: string, form_data_set: GLib.HashTable): Message
export function form_request_new_from_multipart(uri: string, multipart: Multipart): Message
export function header_contains(header: string, token: string): boolean
export function header_free_param_list(param_list: GLib.HashTable): void
export function header_g_string_append_param(string: GLib.String, name: string, value: string): void
export function header_g_string_append_param_quoted(string: GLib.String, name: string, value: string): void
export function header_parse_list(header: string): GLib.SList
export function header_parse_param_list(header: string): GLib.HashTable
export function header_parse_quality_list(header: string): [ /* returnType */ GLib.SList, /* unacceptable */ GLib.SList | null ]
export function header_parse_semi_param_list(header: string): GLib.HashTable
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
export function str_case_equal(v1: object, v2: object): boolean
export function str_case_hash(key: object): number
export function tld_domain_is_public_suffix(domain: string): boolean
export function tld_error_quark(): GLib.Quark
export function tld_get_base_domain(hostname: string): string
export function uri_decode(part: string): string
export function uri_encode(part: string, escape_extra: string | null): string
export function uri_normalize(part: string, unescape_extra: string | null): string
export function value_array_new(): GObject.ValueArray
export function value_hash_insert_value(hash: GLib.HashTable, key: string, value: GObject.Value): void
export function value_hash_new(): GLib.HashTable
export function websocket_client_prepare_handshake(msg: Message, origin: string | null, protocols: string[] | null): void
export function websocket_client_verify_handshake(msg: Message): boolean
export function websocket_error_get_quark(): GLib.Quark
export function websocket_server_check_handshake(msg: Message, origin: string | null, protocols: string[] | null): boolean
export function websocket_server_process_handshake(msg: Message, expected_origin: string | null, protocols: string[] | null): boolean
export function xmlrpc_build_method_call(method_name: string, params: GObject.Value[], n_params: number): string | null
export function xmlrpc_build_method_response(value: GObject.Value): string | null
export function xmlrpc_build_request(method_name: string, params: GLib.Variant): string
export function xmlrpc_build_response(value: GLib.Variant): string
export function xmlrpc_error_quark(): GLib.Quark
export function xmlrpc_fault_quark(): GLib.Quark
export function xmlrpc_message_new(uri: string, method_name: string, params: GLib.Variant): Message
export function xmlrpc_message_set_response(msg: Message, value: GLib.Variant): boolean
export function xmlrpc_parse_method_call(method_call: string, length: number): [ /* returnType */ boolean, /* method_name */ string, /* params */ GObject.ValueArray ]
export function xmlrpc_parse_method_response(method_response: string, length: number): [ /* returnType */ boolean, /* value */ GObject.Value ]
export function xmlrpc_parse_request(method_call: string, length: number): [ /* returnType */ string, /* params */ XMLRPCParams ]
export function xmlrpc_parse_response(method_response: string, length: number, signature: string | null): GLib.Variant
export function xmlrpc_variant_get_datetime(variant: GLib.Variant): Date
export function xmlrpc_variant_new_datetime(date: Date): GLib.Variant
export interface AddressCallback {
    (addr: Address, status: number, user_data: object): void
}
export interface AuthDomainBasicAuthCallback {
    (domain: AuthDomain, msg: Message, username: string, password: string, user_data: object): boolean
}
export interface AuthDomainDigestAuthCallback {
    (domain: AuthDomain, msg: Message, username: string, user_data: object): string | null
}
export interface AuthDomainFilter {
    (domain: AuthDomain, msg: Message, user_data: object): boolean
}
export interface AuthDomainGenericAuthCallback {
    (domain: AuthDomain, msg: Message, username: string, user_data: object): boolean
}
export interface ChunkAllocator {
    (msg: Message, max_len: number, user_data: object): Buffer | null
}
export interface LoggerFilter {
    (logger: Logger, msg: Message, user_data: object): LoggerLogLevel
}
export interface LoggerPrinter {
    (logger: Logger, level: LoggerLogLevel, direction: number, data: string, user_data: object): void
}
export interface MessageHeadersForeachFunc {
    (name: string, value: string, user_data: object): void
}
export interface PasswordManagerCallback {
    (password_manager: PasswordManager, msg: Message, auth: Auth, retrying: boolean, user_data: object): void
}
export interface ProxyURIResolverCallback {
    (resolver: ProxyURIResolver, status: number, proxy_uri: URI, user_data: object): void
}
export interface ServerCallback {
    (server: Server, msg: Message, path: string, query: GLib.HashTable | null, client: ClientContext, user_data: object): void
}
export interface ServerWebsocketCallback {
    (server: Server, connection: WebsocketConnection, path: string, client: ClientContext, user_data: object): void
}
export interface SessionCallback {
    (session: Session, msg: Message, user_data: object): void
}
export interface SocketCallback {
    (sock: Socket, status: number, user_data: object): void
}
export interface PasswordManager_ConstructProps {
}
export interface PasswordManager {
    /* Methods of PasswordManager */
    get_passwords_async(msg: Message, auth: Auth, retrying: boolean, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback, user_data: object): void
    get_passwords_sync(msg: Message, auth: Auth, cancellable: Gio.Cancellable | null): void
    /* Virtual methods of PasswordManager */
    vfunc_get_passwords_async(msg: Message, auth: Auth, retrying: boolean, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback, user_data: object): void
    vfunc_get_passwords_sync(msg: Message, auth: Auth, cancellable: Gio.Cancellable | null): void
}
export interface PasswordManager_Static {
    new (config: PasswordManager_ConstructProps): PasswordManager
}
export declare var PasswordManager: PasswordManager_Static
export interface ProxyURIResolver_ConstructProps {
}
export interface ProxyURIResolver {
    /* Methods of ProxyURIResolver */
    get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback, user_data: object): void
    get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* proxy_uri */ URI ]
    /* Virtual methods of ProxyURIResolver */
    vfunc_get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback, user_data: object): void
    vfunc_get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* proxy_uri */ URI ]
}
export interface ProxyURIResolver_Static {
    new (config: ProxyURIResolver_ConstructProps): ProxyURIResolver
}
export declare var ProxyURIResolver: ProxyURIResolver_Static
export interface SessionFeature_ConstructProps {
}
export interface SessionFeature {
    /* Methods of SessionFeature */
    add_feature(type: number): boolean
    attach(session: Session): void
    detach(session: Session): void
    has_feature(type: number): boolean
    remove_feature(type: number): boolean
    /* Virtual methods of SessionFeature */
    vfunc_add_feature(type: number): boolean
    vfunc_attach(session: Session): void
    vfunc_detach(session: Session): void
    vfunc_has_feature(type: number): boolean
    vfunc_remove_feature(type: number): boolean
    vfunc_request_queued(session: Session, msg: Message): void
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void
    vfunc_request_unqueued(session: Session, msg: Message): void
}
export interface SessionFeature_Static {
    new (config: SessionFeature_ConstructProps): SessionFeature
}
export declare var SessionFeature: SessionFeature_Static
export interface Address_ConstructProps {
    /* Properties of Address */
    family?:AddressFamily
    name?:string
    port?:number
    protocol?:string
    sockaddr?:object
}
export interface Address {
    /* Properties of Address */
    readonly physical:string
    /* Methods of Address */
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
    resolve_async(async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: AddressCallback, user_data: object): void
    resolve_sync(cancellable: Gio.Cancellable | null): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Address_Static {
    new (config: Address_ConstructProps): Address
}
export declare class Address_Static {
    new(name: string, port: number): Address
    new_any(family: AddressFamily, port: number): Address | null
    new_from_sockaddr(sa: object, len: number): Address | null
}
export declare var Address: Address_Static
export interface Auth_ConstructProps {
    /* Properties of Auth */
    host?:string
    is_for_proxy?:boolean
    realm?:string
}
export interface Auth {
    /* Properties of Auth */
    host:string
    readonly is_authenticated:boolean
    is_for_proxy:boolean
    realm:string
    readonly scheme_name:string
    /* Methods of Auth */
    authenticate(username: string, password: string): void
    get_authorization(msg: Message): string
    get_host(): string
    get_info(): string
    get_protection_space(source_uri: URI): GLib.SList
    get_realm(): string
    get_saved_password(user: string): string
    get_saved_users(): GLib.SList
    get_scheme_name(): string
    has_saved_password(username: string, password: string): void
    is_ready(msg: Message): boolean
    save_password(username: string, password: string): void
    update(msg: Message, auth_header: string): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: URI): GLib.SList
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Auth_Static {
    new (config: Auth_ConstructProps): Auth
}
export declare class Auth_Static {
    new(type: number, msg: Message, auth_header: string): Auth | null
}
export declare var Auth: Auth_Static
export interface AuthBasic_ConstructProps {
    /* Properties of Auth */
    host?:string
    is_for_proxy?:boolean
    realm?:string
}
export interface AuthBasic {
    /* Properties of Auth */
    host:string
    readonly is_authenticated:boolean
    is_for_proxy:boolean
    realm:string
    readonly scheme_name:string
    /* Methods of Auth */
    authenticate(username: string, password: string): void
    get_authorization(msg: Message): string
    get_host(): string
    get_info(): string
    get_protection_space(source_uri: URI): GLib.SList
    get_realm(): string
    get_saved_password(user: string): string
    get_saved_users(): GLib.SList
    get_scheme_name(): string
    has_saved_password(username: string, password: string): void
    is_ready(msg: Message): boolean
    save_password(username: string, password: string): void
    update(msg: Message, auth_header: string): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: URI): GLib.SList
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface AuthBasic_Static {
    new (config: AuthBasic_ConstructProps): AuthBasic
}
export declare var AuthBasic: AuthBasic_Static
export interface AuthDigest_ConstructProps {
    /* Properties of Auth */
    host?:string
    is_for_proxy?:boolean
    realm?:string
}
export interface AuthDigest {
    /* Properties of Auth */
    host:string
    readonly is_authenticated:boolean
    is_for_proxy:boolean
    realm:string
    readonly scheme_name:string
    /* Methods of Auth */
    authenticate(username: string, password: string): void
    get_authorization(msg: Message): string
    get_host(): string
    get_info(): string
    get_protection_space(source_uri: URI): GLib.SList
    get_realm(): string
    get_saved_password(user: string): string
    get_saved_users(): GLib.SList
    get_scheme_name(): string
    has_saved_password(username: string, password: string): void
    is_ready(msg: Message): boolean
    save_password(username: string, password: string): void
    update(msg: Message, auth_header: string): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: URI): GLib.SList
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface AuthDigest_Static {
    new (config: AuthDigest_ConstructProps): AuthDigest
}
export declare var AuthDigest: AuthDigest_Static
export interface AuthDomain_ConstructProps {
    /* Properties of AuthDomain */
    add_path?:string
    filter?:object
    filter_data?:object
    generic_auth_callback?:object
    generic_auth_data?:object
    proxy?:boolean
    realm?:string
    remove_path?:string
}
export interface AuthDomain {
    /* Properties of AuthDomain */
    add_path:string
    filter:object
    filter_data:object
    generic_auth_callback:object
    generic_auth_data:object
    remove_path:string
    /* Methods of AuthDomain */
    accepts(msg: Message): string | null
    basic_set_auth_callback(callback: AuthDomainBasicAuthCallback, user_data: object, dnotify: GLib.DestroyNotify): void
    challenge(msg: Message): void
    check_password(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    digest_set_auth_callback(callback: AuthDomainDigestAuthCallback, user_data: object, dnotify: GLib.DestroyNotify): void
    get_realm(): string
    set_filter(filter: AuthDomainFilter, filter_data: object, dnotify: GLib.DestroyNotify): void
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback, auth_data: object, dnotify: GLib.DestroyNotify): void
    try_generic_auth_callback(msg: Message, username: string): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of AuthDomain */
    vfunc_accepts(msg: Message, header: string): string
    vfunc_challenge(msg: Message): string
    vfunc_check_password(msg: Message, username: string, password: string): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface AuthDomain_Static {
    new (config: AuthDomain_ConstructProps): AuthDomain
}
export declare var AuthDomain: AuthDomain_Static
export interface AuthDomainBasic_ConstructProps {
    /* Properties of AuthDomainBasic */
    auth_callback?:object
    auth_data?:object
    /* Properties of AuthDomain */
    add_path?:string
    filter?:object
    filter_data?:object
    generic_auth_callback?:object
    generic_auth_data?:object
    proxy?:boolean
    realm?:string
    remove_path?:string
}
export interface AuthDomainBasic {
    /* Properties of AuthDomainBasic */
    auth_callback:object
    auth_data:object
    /* Properties of AuthDomain */
    add_path:string
    filter:object
    filter_data:object
    generic_auth_callback:object
    generic_auth_data:object
    remove_path:string
    /* Methods of AuthDomain */
    accepts(msg: Message): string | null
    basic_set_auth_callback(callback: AuthDomainBasicAuthCallback, user_data: object, dnotify: GLib.DestroyNotify): void
    challenge(msg: Message): void
    check_password(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    digest_set_auth_callback(callback: AuthDomainDigestAuthCallback, user_data: object, dnotify: GLib.DestroyNotify): void
    get_realm(): string
    set_filter(filter: AuthDomainFilter, filter_data: object, dnotify: GLib.DestroyNotify): void
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback, auth_data: object, dnotify: GLib.DestroyNotify): void
    try_generic_auth_callback(msg: Message, username: string): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of AuthDomain */
    vfunc_accepts(msg: Message, header: string): string
    vfunc_challenge(msg: Message): string
    vfunc_check_password(msg: Message, username: string, password: string): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface AuthDomainBasic_Static {
    new (config: AuthDomainBasic_ConstructProps): AuthDomainBasic
}
export declare var AuthDomainBasic: AuthDomainBasic_Static
export interface AuthDomainDigest_ConstructProps {
    /* Properties of AuthDomainDigest */
    auth_callback?:object
    auth_data?:object
    /* Properties of AuthDomain */
    add_path?:string
    filter?:object
    filter_data?:object
    generic_auth_callback?:object
    generic_auth_data?:object
    proxy?:boolean
    realm?:string
    remove_path?:string
}
export interface AuthDomainDigest {
    /* Properties of AuthDomainDigest */
    auth_callback:object
    auth_data:object
    /* Properties of AuthDomain */
    add_path:string
    filter:object
    filter_data:object
    generic_auth_callback:object
    generic_auth_data:object
    remove_path:string
    /* Methods of AuthDomain */
    accepts(msg: Message): string | null
    basic_set_auth_callback(callback: AuthDomainBasicAuthCallback, user_data: object, dnotify: GLib.DestroyNotify): void
    challenge(msg: Message): void
    check_password(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    digest_set_auth_callback(callback: AuthDomainDigestAuthCallback, user_data: object, dnotify: GLib.DestroyNotify): void
    get_realm(): string
    set_filter(filter: AuthDomainFilter, filter_data: object, dnotify: GLib.DestroyNotify): void
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback, auth_data: object, dnotify: GLib.DestroyNotify): void
    try_generic_auth_callback(msg: Message, username: string): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of AuthDomain */
    vfunc_accepts(msg: Message, header: string): string
    vfunc_challenge(msg: Message): string
    vfunc_check_password(msg: Message, username: string, password: string): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface AuthDomainDigest_Static {
    new (config: AuthDomainDigest_ConstructProps): AuthDomainDigest
}
export declare class AuthDomainDigest_Static {
    encode_password(username: string, realm: string, password: string): string
}
export declare var AuthDomainDigest: AuthDomainDigest_Static
export interface AuthManager_ConstructProps {
}
export interface AuthManager {
    /* Methods of AuthManager */
    use_auth(uri: URI, auth: Auth): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of AuthManager */
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of AuthManager */
    connect(sigName: "authenticate", callback: ((msg: Message, auth: Auth, retrying: boolean) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface AuthManager_Static {
    new (config: AuthManager_ConstructProps): AuthManager
}
export declare var AuthManager: AuthManager_Static
export interface AuthNTLM_ConstructProps {
    /* Properties of Auth */
    host?:string
    is_for_proxy?:boolean
    realm?:string
}
export interface AuthNTLM {
    /* Properties of Auth */
    host:string
    readonly is_authenticated:boolean
    is_for_proxy:boolean
    realm:string
    readonly scheme_name:string
    /* Methods of Auth */
    authenticate(username: string, password: string): void
    get_authorization(msg: Message): string
    get_host(): string
    get_info(): string
    get_protection_space(source_uri: URI): GLib.SList
    get_realm(): string
    get_saved_password(user: string): string
    get_saved_users(): GLib.SList
    get_scheme_name(): string
    has_saved_password(username: string, password: string): void
    is_ready(msg: Message): boolean
    save_password(username: string, password: string): void
    update(msg: Message, auth_header: string): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: URI): GLib.SList
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface AuthNTLM_Static {
    new (config: AuthNTLM_ConstructProps): AuthNTLM
}
export declare var AuthNTLM: AuthNTLM_Static
export interface Cache_ConstructProps {
    /* Properties of Cache */
    cache_dir?:string
    cache_type?:CacheType
}
export interface Cache {
    /* Properties of Cache */
    /* Methods of Cache */
    clear(): void
    dump(): void
    flush(): void
    get_max_size(): number
    load(): void
    set_max_size(max_size: number): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Cache */
    vfunc_get_cacheability(msg: Message): Cacheability
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Cache_Static {
    new (config: Cache_ConstructProps): Cache
}
export declare class Cache_Static {
    new(cache_dir: string, cache_type: CacheType): Cache
}
export declare var Cache: Cache_Static
export interface ContentDecoder_ConstructProps {
}
export interface ContentDecoder {
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ContentDecoder_Static {
    new (config: ContentDecoder_ConstructProps): ContentDecoder
}
export declare var ContentDecoder: ContentDecoder_Static
export interface ContentSniffer_ConstructProps {
}
export interface ContentSniffer {
    /* Methods of ContentSniffer */
    get_buffer_size(): number
    sniff(msg: Message, buffer: Buffer): [ /* returnType */ string, /* params */ GLib.HashTable | null ]
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of ContentSniffer */
    vfunc_get_buffer_size(): number
    vfunc_sniff(msg: Message, buffer: Buffer): [ /* returnType */ string, /* params */ GLib.HashTable | null ]
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ContentSniffer_Static {
    new (config: ContentSniffer_ConstructProps): ContentSniffer
}
export declare class ContentSniffer_Static {
    new(): ContentSniffer
}
export declare var ContentSniffer: ContentSniffer_Static
export interface CookieJar_ConstructProps {
    /* Properties of CookieJar */
    accept_policy?:CookieJarAcceptPolicy
    read_only?:boolean
}
export interface CookieJar {
    /* Properties of CookieJar */
    accept_policy:CookieJarAcceptPolicy
    /* Methods of CookieJar */
    add_cookie(cookie: Cookie): void
    add_cookie_with_first_party(first_party: URI, cookie: Cookie): void
    all_cookies(): GLib.SList
    delete_cookie(cookie: Cookie): void
    get_accept_policy(): CookieJarAcceptPolicy
    get_cookie_list(uri: URI, for_http: boolean): GLib.SList
    get_cookies(uri: URI, for_http: boolean): string | null
    is_persistent(): boolean
    save(): void
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    set_cookie(uri: URI, cookie: string): void
    set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of CookieJar */
    connect(sigName: "changed", callback: ((old_cookie: Cookie, new_cookie: Cookie) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface CookieJar_Static {
    new (config: CookieJar_ConstructProps): CookieJar
}
export declare class CookieJar_Static {
    new(): CookieJar
}
export declare var CookieJar: CookieJar_Static
export interface CookieJarDB_ConstructProps {
    /* Properties of CookieJarDB */
    filename?:string
    /* Properties of CookieJar */
    accept_policy?:CookieJarAcceptPolicy
    read_only?:boolean
}
export interface CookieJarDB {
    /* Properties of CookieJarDB */
    /* Properties of CookieJar */
    accept_policy:CookieJarAcceptPolicy
    /* Methods of CookieJar */
    add_cookie(cookie: Cookie): void
    add_cookie_with_first_party(first_party: URI, cookie: Cookie): void
    all_cookies(): GLib.SList
    delete_cookie(cookie: Cookie): void
    get_accept_policy(): CookieJarAcceptPolicy
    get_cookie_list(uri: URI, for_http: boolean): GLib.SList
    get_cookies(uri: URI, for_http: boolean): string | null
    is_persistent(): boolean
    save(): void
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    set_cookie(uri: URI, cookie: string): void
    set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of CookieJar */
    connect(sigName: "changed", callback: ((old_cookie: Cookie, new_cookie: Cookie) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface CookieJarDB_Static {
    new (config: CookieJarDB_ConstructProps): CookieJarDB
}
export declare class CookieJarDB_Static {
    new(filename: string, read_only: boolean): CookieJar
}
export declare var CookieJarDB: CookieJarDB_Static
export interface CookieJarText_ConstructProps {
    /* Properties of CookieJarText */
    filename?:string
    /* Properties of CookieJar */
    accept_policy?:CookieJarAcceptPolicy
    read_only?:boolean
}
export interface CookieJarText {
    /* Properties of CookieJarText */
    /* Properties of CookieJar */
    accept_policy:CookieJarAcceptPolicy
    /* Methods of CookieJar */
    add_cookie(cookie: Cookie): void
    add_cookie_with_first_party(first_party: URI, cookie: Cookie): void
    all_cookies(): GLib.SList
    delete_cookie(cookie: Cookie): void
    get_accept_policy(): CookieJarAcceptPolicy
    get_cookie_list(uri: URI, for_http: boolean): GLib.SList
    get_cookies(uri: URI, for_http: boolean): string | null
    is_persistent(): boolean
    save(): void
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    set_cookie(uri: URI, cookie: string): void
    set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of CookieJar */
    connect(sigName: "changed", callback: ((old_cookie: Cookie, new_cookie: Cookie) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface CookieJarText_Static {
    new (config: CookieJarText_ConstructProps): CookieJarText
}
export declare class CookieJarText_Static {
    new(filename: string, read_only: boolean): CookieJar
}
export declare var CookieJarText: CookieJarText_Static
export interface Logger_ConstructProps {
}
export interface Logger {
    /* Methods of Logger */
    attach(session: Session): void
    detach(session: Session): void
    set_printer(printer: LoggerPrinter, printer_data: object, destroy: GLib.DestroyNotify): void
    set_request_filter(request_filter: LoggerFilter, filter_data: object, destroy: GLib.DestroyNotify): void
    set_response_filter(response_filter: LoggerFilter, filter_data: object, destroy: GLib.DestroyNotify): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Logger_Static {
    new (config: Logger_ConstructProps): Logger
}
export declare class Logger_Static {
    new(level: LoggerLogLevel, max_body_size: number): Logger
}
export declare var Logger: Logger_Static
export interface Message_ConstructProps {
    /* Properties of Message */
    first_party?:URI
    flags?:MessageFlags
    http_version?:HTTPVersion
    method?:string
    priority?:MessagePriority
    reason_phrase?:string
    server_side?:boolean
    status_code?:number
    tls_certificate?:Gio.TlsCertificate
    tls_errors?:Gio.TlsCertificateFlags
    uri?:URI
}
export interface Message {
    /* Properties of Message */
    first_party:URI
    flags:MessageFlags
    http_version:HTTPVersion
    method:string
    priority:MessagePriority
    reason_phrase:string
    readonly request_body:MessageBody
    readonly request_body_data:GLib.Bytes
    readonly request_headers:MessageHeaders
    readonly response_body:MessageBody
    readonly response_body_data:GLib.Bytes
    readonly response_headers:MessageHeaders
    status_code:number
    tls_certificate:Gio.TlsCertificate
    tls_errors:Gio.TlsCertificateFlags
    uri:URI
    /* Methods of Message */
    content_sniffed(content_type: string, params: GLib.HashTable): void
    disable_feature(feature_type: number): void
    finished(): void
    get_address(): Address
    get_first_party(): URI
    get_flags(): MessageFlags
    get_http_version(): HTTPVersion
    get_https_status(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    get_priority(): MessagePriority
    get_soup_request(): Request
    get_uri(): URI
    got_body(): void
    got_chunk(chunk: Buffer): void
    got_headers(): void
    got_informational(): void
    is_keepalive(): boolean
    restarted(): void
    set_chunk_allocator(allocator: ChunkAllocator, user_data: object, destroy_notify: GLib.DestroyNotify): void
    set_first_party(first_party: URI): void
    set_flags(flags: MessageFlags): void
    set_http_version(version: HTTPVersion): void
    set_priority(priority: MessagePriority): void
    set_redirect(status_code: number, redirect_uri: string): void
    set_request(content_type: string | null, req_use: MemoryUse, req_body: number[] | null, req_length: number): void
    set_response(content_type: string | null, resp_use: MemoryUse, resp_body: number[] | null, resp_length: number): void
    set_status(status_code: number): void
    set_status_full(status_code: number, reason_phrase: string): void
    set_uri(uri: URI): void
    starting(): void
    wrote_body(): void
    wrote_body_data(chunk: Buffer): void
    wrote_chunk(): void
    wrote_headers(): void
    wrote_informational(): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Message */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Message */
    connect(sigName: "content-sniffed", callback: ((type: string, params: GLib.HashTable) => void))
    connect(sigName: "finished", callback: (() => void))
    connect(sigName: "got-body", callback: (() => void))
    connect(sigName: "got-chunk", callback: ((chunk: Buffer) => void))
    connect(sigName: "got-headers", callback: (() => void))
    connect(sigName: "got-informational", callback: (() => void))
    connect(sigName: "network-event", callback: ((event: Gio.SocketClientEvent, connection: Gio.IOStream) => void))
    connect(sigName: "restarted", callback: (() => void))
    connect(sigName: "starting", callback: (() => void))
    connect(sigName: "wrote-body", callback: (() => void))
    connect(sigName: "wrote-body-data", callback: ((chunk: Buffer) => void))
    connect(sigName: "wrote-chunk", callback: (() => void))
    connect(sigName: "wrote-headers", callback: (() => void))
    connect(sigName: "wrote-informational", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Message_Static {
    new (config: Message_ConstructProps): Message
}
export declare class Message_Static {
    new(method: string, uri_string: string): Message | null
    new_from_uri(method: string, uri: URI): Message
}
export declare var Message: Message_Static
export interface MultipartInputStream_ConstructProps {
    /* Properties of MultipartInputStream */
    message?:Message
    /* Properties of FilterInputStream */
    base_stream?:Gio.InputStream
    close_base_stream?:boolean
}
export interface MultipartInputStream {
    /* Properties of MultipartInputStream */
    /* Properties of FilterInputStream */
    close_base_stream:boolean
    /* Methods of MultipartInputStream */
    get_headers(): MessageHeaders | null
    next_part(cancellable: Gio.Cancellable | null): Gio.InputStream | null
    next_part_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, data: object): void
    next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null
    /* Methods of FilterInputStream */
    get_base_stream(): Gio.InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of InputStream */
    clear_pending(): void
    close(cancellable: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: number[], count: number, cancellable: Gio.Cancellable | null): number
    read_all(buffer: number[], count: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: Gio.AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of InputStream */
    vfunc_close_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable: Gio.Cancellable | null): boolean
    vfunc_read_async(buffer: number[], count: number, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface MultipartInputStream_Static {
    new (config: MultipartInputStream_ConstructProps): MultipartInputStream
}
export declare class MultipartInputStream_Static {
    new(msg: Message, base_stream: Gio.InputStream): MultipartInputStream
}
export declare var MultipartInputStream: MultipartInputStream_Static
export interface ProxyResolverDefault_ConstructProps {
    /* Properties of ProxyResolverDefault */
    gproxy_resolver?:Gio.ProxyResolver
}
export interface ProxyResolverDefault {
    /* Properties of ProxyResolverDefault */
    gproxy_resolver:Gio.ProxyResolver
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ProxyResolverDefault_Static {
    new (config: ProxyResolverDefault_ConstructProps): ProxyResolverDefault
}
export declare var ProxyResolverDefault: ProxyResolverDefault_Static
export interface Request_ConstructProps {
    /* Properties of Request */
    session?:Session
    uri?:URI
}
export interface Request {
    /* Properties of Request */
    /* Methods of Request */
    get_content_length(): number
    get_content_type(): string | null
    get_session(): Session
    get_uri(): URI
    send(cancellable: Gio.Cancellable | null): Gio.InputStream
    send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Request */
    vfunc_check_uri(uri: URI): boolean
    vfunc_get_content_length(): number
    vfunc_get_content_type(): string | null
    vfunc_send(cancellable: Gio.Cancellable | null): Gio.InputStream
    vfunc_send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Request_Static {
    new (config: Request_ConstructProps): Request
}
export declare var Request: Request_Static
export interface RequestData_ConstructProps {
    /* Properties of Request */
    session?:Session
    uri?:URI
}
export interface RequestData {
    /* Properties of Request */
    /* Methods of Request */
    get_content_length(): number
    get_content_type(): string | null
    get_session(): Session
    get_uri(): URI
    send(cancellable: Gio.Cancellable | null): Gio.InputStream
    send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Request */
    vfunc_check_uri(uri: URI): boolean
    vfunc_get_content_length(): number
    vfunc_get_content_type(): string | null
    vfunc_send(cancellable: Gio.Cancellable | null): Gio.InputStream
    vfunc_send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface RequestData_Static {
    new (config: RequestData_ConstructProps): RequestData
}
export declare var RequestData: RequestData_Static
export interface RequestFile_ConstructProps {
    /* Properties of Request */
    session?:Session
    uri?:URI
}
export interface RequestFile {
    /* Properties of Request */
    /* Methods of RequestFile */
    get_file(): Gio.File
    /* Methods of Request */
    get_content_length(): number
    get_content_type(): string | null
    get_session(): Session
    get_uri(): URI
    send(cancellable: Gio.Cancellable | null): Gio.InputStream
    send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Request */
    vfunc_check_uri(uri: URI): boolean
    vfunc_get_content_length(): number
    vfunc_get_content_type(): string | null
    vfunc_send(cancellable: Gio.Cancellable | null): Gio.InputStream
    vfunc_send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface RequestFile_Static {
    new (config: RequestFile_ConstructProps): RequestFile
}
export declare var RequestFile: RequestFile_Static
export interface RequestHTTP_ConstructProps {
    /* Properties of Request */
    session?:Session
    uri?:URI
}
export interface RequestHTTP {
    /* Properties of Request */
    /* Methods of RequestHTTP */
    get_message(): Message
    /* Methods of Request */
    get_content_length(): number
    get_content_type(): string | null
    get_session(): Session
    get_uri(): URI
    send(cancellable: Gio.Cancellable | null): Gio.InputStream
    send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Request */
    vfunc_check_uri(uri: URI): boolean
    vfunc_get_content_length(): number
    vfunc_get_content_type(): string | null
    vfunc_send(cancellable: Gio.Cancellable | null): Gio.InputStream
    vfunc_send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface RequestHTTP_Static {
    new (config: RequestHTTP_ConstructProps): RequestHTTP
}
export declare var RequestHTTP: RequestHTTP_Static
export interface Requester_ConstructProps {
}
export interface Requester {
    /* Methods of Requester */
    request(uri_string: string): Request
    request_uri(uri: URI): Request
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Requester_Static {
    new (config: Requester_ConstructProps): Requester
}
export declare class Requester_Static {
    new(): Requester
}
export declare var Requester: Requester_Static
export interface Server_ConstructProps {
    /* Properties of Server */
    async_context?:object
    http_aliases?:string[]
    https_aliases?:string[]
    interface?:Address
    port?:number
    raw_paths?:boolean
    server_header?:string
    ssl_cert_file?:string
    ssl_key_file?:string
    tls_certificate?:Gio.TlsCertificate
}
export interface Server {
    /* Properties of Server */
    http_aliases:string[]
    https_aliases:string[]
    server_header:string
    /* Methods of Server */
    accept_iostream(stream: Gio.IOStream, local_addr: Gio.SocketAddress | null, remote_addr: Gio.SocketAddress | null): boolean
    add_auth_domain(auth_domain: AuthDomain): void
    add_early_handler(path: string | null, callback: ServerCallback, user_data: object, destroy: GLib.DestroyNotify): void
    add_handler(path: string | null, callback: ServerCallback, user_data: object, destroy: GLib.DestroyNotify): void
    add_websocket_handler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback, user_data: object, destroy: GLib.DestroyNotify): void
    disconnect(): void
    get_async_context(): GLib.MainContext | null
    get_listener(): Socket
    get_listeners(): GLib.SList
    get_port(): number
    get_uris(): GLib.SList
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
    run(): void
    run_async(): void
    set_ssl_cert_file(ssl_cert_file: string, ssl_key_file: string): boolean
    unpause_message(msg: Message): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Server */
    vfunc_request_aborted(msg: Message, client: ClientContext): void
    vfunc_request_finished(msg: Message, client: ClientContext): void
    vfunc_request_read(msg: Message, client: ClientContext): void
    vfunc_request_started(msg: Message, client: ClientContext): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Server */
    connect(sigName: "request-aborted", callback: ((message: Message, client: ClientContext) => void))
    connect(sigName: "request-finished", callback: ((message: Message, client: ClientContext) => void))
    connect(sigName: "request-read", callback: ((message: Message, client: ClientContext) => void))
    connect(sigName: "request-started", callback: ((message: Message, client: ClientContext) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Server_Static {
    new (config: Server_ConstructProps): Server
}
export declare var Server: Server_Static
export interface Session_ConstructProps {
    /* Properties of Session */
    accept_language?:string
    accept_language_auto?:boolean
    add_feature?:SessionFeature
    add_feature_by_type?:number
    async_context?:object
    http_aliases?:string[]
    https_aliases?:string[]
    idle_timeout?:number
    local_address?:Address
    max_conns?:number
    max_conns_per_host?:number
    proxy_resolver?:Gio.ProxyResolver
    proxy_uri?:URI
    remove_feature_by_type?:number
    ssl_ca_file?:string
    ssl_strict?:boolean
    ssl_use_system_ca_file?:boolean
    timeout?:number
    tls_database?:Gio.TlsDatabase
    tls_interaction?:Gio.TlsInteraction
    use_ntlm?:boolean
    use_thread_context?:boolean
    user_agent?:string
}
export interface Session {
    /* Properties of Session */
    accept_language:string
    accept_language_auto:boolean
    add_feature:SessionFeature
    add_feature_by_type:number
    http_aliases:string[]
    https_aliases:string[]
    idle_timeout:number
    max_conns:number
    max_conns_per_host:number
    proxy_resolver:Gio.ProxyResolver
    proxy_uri:URI
    remove_feature_by_type:number
    ssl_ca_file:string
    ssl_strict:boolean
    ssl_use_system_ca_file:boolean
    timeout:number
    tls_database:Gio.TlsDatabase
    tls_interaction:Gio.TlsInteraction
    use_ntlm:boolean
    use_thread_context:boolean
    user_agent:string
    /* Methods of Session */
    abort(): void
    cancel_message(msg: Message, status_code: number): void
    get_async_context(): GLib.MainContext | null
    get_feature(feature_type: number): SessionFeature | null
    get_feature_for_message(feature_type: number, msg: Message): SessionFeature | null
    get_features(feature_type: number): GLib.SList
    has_feature(feature_type: number): boolean
    pause_message(msg: Message): void
    prefetch_dns(hostname: string, cancellable: Gio.Cancellable | null, callback: AddressCallback | null, user_data: object): void
    prepare_for_uri(uri: URI): void
    queue_message(msg: Message, callback: SessionCallback | null, user_data: object | null): void
    redirect_message(msg: Message): boolean
    remove_feature(feature: SessionFeature): void
    request(uri_string: string): Request
    request_http(method: string, uri_string: string): RequestHTTP
    request_http_uri(method: string, uri: URI): RequestHTTP
    request_uri(uri: URI): Request
    requeue_message(msg: Message): void
    send(msg: Message, cancellable: Gio.Cancellable | null): Gio.InputStream
    send_async(msg: Message, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    send_message(msg: Message): number
    steal_connection(msg: Message): Gio.IOStream
    unpause_message(msg: Message): void
    websocket_connect_async(msg: Message, origin: string | null, protocols: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection
    would_redirect(msg: Message): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Session */
    vfunc_auth_required(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_cancel_message(msg: Message, status_code: number): void
    vfunc_flush_queue(): void
    vfunc_kick(): void
    vfunc_queue_message(msg: Message, callback: SessionCallback | null, user_data: object | null): void
    vfunc_request_started(msg: Message, socket: Socket): void
    vfunc_requeue_message(msg: Message): void
    vfunc_send_message(msg: Message): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Session */
    connect(sigName: "authenticate", callback: ((msg: Message, auth: Auth, retrying: boolean) => void))
    connect(sigName: "connection-created", callback: ((connection: GObject.Object) => void))
    connect(sigName: "request-queued", callback: ((msg: Message) => void))
    connect(sigName: "request-started", callback: ((msg: Message, socket: Socket) => void))
    connect(sigName: "request-unqueued", callback: ((msg: Message) => void))
    connect(sigName: "tunneling", callback: ((connection: GObject.Object) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Session_Static {
    new (config: Session_ConstructProps): Session
}
export declare class Session_Static {
    new(): Session
}
export declare var Session: Session_Static
export interface SessionAsync_ConstructProps {
    /* Properties of Session */
    accept_language?:string
    accept_language_auto?:boolean
    add_feature?:SessionFeature
    add_feature_by_type?:number
    async_context?:object
    http_aliases?:string[]
    https_aliases?:string[]
    idle_timeout?:number
    local_address?:Address
    max_conns?:number
    max_conns_per_host?:number
    proxy_resolver?:Gio.ProxyResolver
    proxy_uri?:URI
    remove_feature_by_type?:number
    ssl_ca_file?:string
    ssl_strict?:boolean
    ssl_use_system_ca_file?:boolean
    timeout?:number
    tls_database?:Gio.TlsDatabase
    tls_interaction?:Gio.TlsInteraction
    use_ntlm?:boolean
    use_thread_context?:boolean
    user_agent?:string
}
export interface SessionAsync {
    /* Properties of Session */
    accept_language:string
    accept_language_auto:boolean
    add_feature:SessionFeature
    add_feature_by_type:number
    http_aliases:string[]
    https_aliases:string[]
    idle_timeout:number
    max_conns:number
    max_conns_per_host:number
    proxy_resolver:Gio.ProxyResolver
    proxy_uri:URI
    remove_feature_by_type:number
    ssl_ca_file:string
    ssl_strict:boolean
    ssl_use_system_ca_file:boolean
    timeout:number
    tls_database:Gio.TlsDatabase
    tls_interaction:Gio.TlsInteraction
    use_ntlm:boolean
    use_thread_context:boolean
    user_agent:string
    /* Methods of Session */
    abort(): void
    cancel_message(msg: Message, status_code: number): void
    get_async_context(): GLib.MainContext | null
    get_feature(feature_type: number): SessionFeature | null
    get_feature_for_message(feature_type: number, msg: Message): SessionFeature | null
    get_features(feature_type: number): GLib.SList
    has_feature(feature_type: number): boolean
    pause_message(msg: Message): void
    prefetch_dns(hostname: string, cancellable: Gio.Cancellable | null, callback: AddressCallback | null, user_data: object): void
    prepare_for_uri(uri: URI): void
    queue_message(msg: Message, callback: SessionCallback | null, user_data: object | null): void
    redirect_message(msg: Message): boolean
    remove_feature(feature: SessionFeature): void
    request(uri_string: string): Request
    request_http(method: string, uri_string: string): RequestHTTP
    request_http_uri(method: string, uri: URI): RequestHTTP
    request_uri(uri: URI): Request
    requeue_message(msg: Message): void
    send(msg: Message, cancellable: Gio.Cancellable | null): Gio.InputStream
    send_async(msg: Message, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    send_message(msg: Message): number
    steal_connection(msg: Message): Gio.IOStream
    unpause_message(msg: Message): void
    websocket_connect_async(msg: Message, origin: string | null, protocols: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection
    would_redirect(msg: Message): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Session */
    vfunc_auth_required(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_cancel_message(msg: Message, status_code: number): void
    vfunc_flush_queue(): void
    vfunc_kick(): void
    vfunc_queue_message(msg: Message, callback: SessionCallback | null, user_data: object | null): void
    vfunc_request_started(msg: Message, socket: Socket): void
    vfunc_requeue_message(msg: Message): void
    vfunc_send_message(msg: Message): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Session */
    connect(sigName: "authenticate", callback: ((msg: Message, auth: Auth, retrying: boolean) => void))
    connect(sigName: "connection-created", callback: ((connection: GObject.Object) => void))
    connect(sigName: "request-queued", callback: ((msg: Message) => void))
    connect(sigName: "request-started", callback: ((msg: Message, socket: Socket) => void))
    connect(sigName: "request-unqueued", callback: ((msg: Message) => void))
    connect(sigName: "tunneling", callback: ((connection: GObject.Object) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SessionAsync_Static {
    new (config: SessionAsync_ConstructProps): SessionAsync
}
export declare class SessionAsync_Static {
    new(): Session
}
export declare var SessionAsync: SessionAsync_Static
export interface SessionSync_ConstructProps {
    /* Properties of Session */
    accept_language?:string
    accept_language_auto?:boolean
    add_feature?:SessionFeature
    add_feature_by_type?:number
    async_context?:object
    http_aliases?:string[]
    https_aliases?:string[]
    idle_timeout?:number
    local_address?:Address
    max_conns?:number
    max_conns_per_host?:number
    proxy_resolver?:Gio.ProxyResolver
    proxy_uri?:URI
    remove_feature_by_type?:number
    ssl_ca_file?:string
    ssl_strict?:boolean
    ssl_use_system_ca_file?:boolean
    timeout?:number
    tls_database?:Gio.TlsDatabase
    tls_interaction?:Gio.TlsInteraction
    use_ntlm?:boolean
    use_thread_context?:boolean
    user_agent?:string
}
export interface SessionSync {
    /* Properties of Session */
    accept_language:string
    accept_language_auto:boolean
    add_feature:SessionFeature
    add_feature_by_type:number
    http_aliases:string[]
    https_aliases:string[]
    idle_timeout:number
    max_conns:number
    max_conns_per_host:number
    proxy_resolver:Gio.ProxyResolver
    proxy_uri:URI
    remove_feature_by_type:number
    ssl_ca_file:string
    ssl_strict:boolean
    ssl_use_system_ca_file:boolean
    timeout:number
    tls_database:Gio.TlsDatabase
    tls_interaction:Gio.TlsInteraction
    use_ntlm:boolean
    use_thread_context:boolean
    user_agent:string
    /* Methods of Session */
    abort(): void
    cancel_message(msg: Message, status_code: number): void
    get_async_context(): GLib.MainContext | null
    get_feature(feature_type: number): SessionFeature | null
    get_feature_for_message(feature_type: number, msg: Message): SessionFeature | null
    get_features(feature_type: number): GLib.SList
    has_feature(feature_type: number): boolean
    pause_message(msg: Message): void
    prefetch_dns(hostname: string, cancellable: Gio.Cancellable | null, callback: AddressCallback | null, user_data: object): void
    prepare_for_uri(uri: URI): void
    queue_message(msg: Message, callback: SessionCallback | null, user_data: object | null): void
    redirect_message(msg: Message): boolean
    remove_feature(feature: SessionFeature): void
    request(uri_string: string): Request
    request_http(method: string, uri_string: string): RequestHTTP
    request_http_uri(method: string, uri: URI): RequestHTTP
    request_uri(uri: URI): Request
    requeue_message(msg: Message): void
    send(msg: Message, cancellable: Gio.Cancellable | null): Gio.InputStream
    send_async(msg: Message, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    send_message(msg: Message): number
    steal_connection(msg: Message): Gio.IOStream
    unpause_message(msg: Message): void
    websocket_connect_async(msg: Message, origin: string | null, protocols: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection
    would_redirect(msg: Message): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Session */
    vfunc_auth_required(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void
    vfunc_cancel_message(msg: Message, status_code: number): void
    vfunc_flush_queue(): void
    vfunc_kick(): void
    vfunc_queue_message(msg: Message, callback: SessionCallback | null, user_data: object | null): void
    vfunc_request_started(msg: Message, socket: Socket): void
    vfunc_requeue_message(msg: Message): void
    vfunc_send_message(msg: Message): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Session */
    connect(sigName: "authenticate", callback: ((msg: Message, auth: Auth, retrying: boolean) => void))
    connect(sigName: "connection-created", callback: ((connection: GObject.Object) => void))
    connect(sigName: "request-queued", callback: ((msg: Message) => void))
    connect(sigName: "request-started", callback: ((msg: Message, socket: Socket) => void))
    connect(sigName: "request-unqueued", callback: ((msg: Message) => void))
    connect(sigName: "tunneling", callback: ((connection: GObject.Object) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SessionSync_Static {
    new (config: SessionSync_ConstructProps): SessionSync
}
export declare class SessionSync_Static {
    new(): Session
}
export declare var SessionSync: SessionSync_Static
export interface Socket_ConstructProps {
    /* Properties of Socket */
    async_context?:object
    fd?:number
    gsocket?:Gio.Socket
    iostream?:Gio.IOStream
    ipv6_only?:boolean
    local_address?:Address
    non_blocking?:boolean
    remote_address?:Address
    socket_properties?:any
    ssl_creds?:object
    ssl_fallback?:boolean
    ssl_strict?:boolean
    timeout?:number
    use_thread_context?:boolean
}
export interface Socket {
    /* Properties of Socket */
    ipv6_only:boolean
    readonly is_server:boolean
    non_blocking:boolean
    socket_properties:any
    ssl_creds:object
    timeout:number
    readonly tls_certificate:Gio.TlsCertificate
    readonly tls_errors:Gio.TlsCertificateFlags
    readonly trusted_certificate:boolean
    /* Methods of Socket */
    connect_async(cancellable: Gio.Cancellable | null, callback: SocketCallback, user_data: object): void
    connect_sync(cancellable: Gio.Cancellable | null): number
    disconnect(): void
    get_fd(): number
    get_local_address(): Address
    get_remote_address(): Address
    is_connected(): boolean
    is_ssl(): boolean
    listen(): boolean
    read(buffer: number[], len: number, cancellable: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nread */ number ]
    read_until(buffer: number[], len: number, boundary: object, boundary_len: number, got_boundary: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nread */ number ]
    start_proxy_ssl(ssl_host: string, cancellable: Gio.Cancellable | null): boolean
    start_ssl(cancellable: Gio.Cancellable | null): boolean
    write(buffer: number[], len: number, cancellable: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nwrote */ number ]
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Socket */
    vfunc_disconnected(): void
    vfunc_new_connection(new_sock: Socket): void
    vfunc_readable(): void
    vfunc_writable(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Socket */
    connect(sigName: "disconnected", callback: (() => void))
    connect(sigName: "event", callback: ((event: Gio.SocketClientEvent, connection: Gio.IOStream) => void))
    connect(sigName: "new-connection", callback: ((new_: Socket) => void))
    connect(sigName: "readable", callback: (() => void))
    connect(sigName: "writable", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Socket_Static {
    new (config: Socket_ConstructProps): Socket
}
export declare var Socket: Socket_Static
export interface WebsocketConnection_ConstructProps {
    /* Properties of WebsocketConnection */
    connection_type?:WebsocketConnectionType
    io_stream?:Gio.IOStream
    origin?:string
    protocol?:string
    uri?:URI
}
export interface WebsocketConnection {
    /* Properties of WebsocketConnection */
    readonly state:WebsocketState
    /* Methods of WebsocketConnection */
    close(code: number, data: string | null): void
    get_close_code(): number
    get_close_data(): string
    get_connection_type(): WebsocketConnectionType
    get_io_stream(): Gio.IOStream
    get_origin(): string | null
    get_protocol(): string | null
    get_state(): WebsocketState
    get_uri(): URI
    send_binary(data: number[], length: number): void
    send_text(text: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of WebsocketConnection */
    vfunc_closed(): void
    vfunc_closing(): void
    vfunc_error(error: GLib.Error): void
    vfunc_message(type: WebsocketDataType, message: GLib.Bytes): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebsocketConnection */
    connect(sigName: "closed", callback: (() => void))
    connect(sigName: "closing", callback: (() => void))
    connect(sigName: "error", callback: ((error: GLib.Error) => void))
    connect(sigName: "message", callback: ((type: number, message: GLib.Bytes) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface WebsocketConnection_Static {
    new (config: WebsocketConnection_ConstructProps): WebsocketConnection
}
export declare class WebsocketConnection_Static {
    new(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin: string | null, protocol: string | null): WebsocketConnection
}
export declare var WebsocketConnection: WebsocketConnection_Static
export interface AddressClass_ConstructProps {
}
export interface AddressClass {
}
export interface AddressClass_Static {
    new (config: AddressClass_ConstructProps): AddressClass
}
export declare var AddressClass: AddressClass_Static
export interface AuthClass_ConstructProps {
}
export interface AuthClass {
}
export interface AuthClass_Static {
    new (config: AuthClass_ConstructProps): AuthClass
}
export declare var AuthClass: AuthClass_Static
export interface AuthDomainBasicClass_ConstructProps {
}
export interface AuthDomainBasicClass {
}
export interface AuthDomainBasicClass_Static {
    new (config: AuthDomainBasicClass_ConstructProps): AuthDomainBasicClass
}
export declare var AuthDomainBasicClass: AuthDomainBasicClass_Static
export interface AuthDomainClass_ConstructProps {
}
export interface AuthDomainClass {
}
export interface AuthDomainClass_Static {
    new (config: AuthDomainClass_ConstructProps): AuthDomainClass
}
export declare var AuthDomainClass: AuthDomainClass_Static
export interface AuthDomainDigestClass_ConstructProps {
}
export interface AuthDomainDigestClass {
}
export interface AuthDomainDigestClass_Static {
    new (config: AuthDomainDigestClass_ConstructProps): AuthDomainDigestClass
}
export declare var AuthDomainDigestClass: AuthDomainDigestClass_Static
export interface AuthManagerClass_ConstructProps {
}
export interface AuthManagerClass {
}
export interface AuthManagerClass_Static {
    new (config: AuthManagerClass_ConstructProps): AuthManagerClass
}
export declare var AuthManagerClass: AuthManagerClass_Static
export interface AuthManagerPrivate_ConstructProps {
}
export interface AuthManagerPrivate {
}
export interface AuthManagerPrivate_Static {
    new (config: AuthManagerPrivate_ConstructProps): AuthManagerPrivate
}
export declare var AuthManagerPrivate: AuthManagerPrivate_Static
export interface Buffer_ConstructProps {
}
export interface Buffer {
    /* Methods of Buffer */
    copy(): Buffer
    free(): void
    get_as_bytes(): GLib.Bytes
    get_data(): [ /* data */ number[], /* length */ number ]
    get_owner(): object
    new_subbuffer(offset: number, length: number): Buffer
}
export interface Buffer_Static {
    new (config: Buffer_ConstructProps): Buffer
}
export declare class Buffer_Static {
    new(use: MemoryUse, data: number[], length: number): Buffer
    new_take(data: number[], length: number): Buffer
    new_with_owner(data: number[], length: number, owner: object, owner_dnotify: GLib.DestroyNotify | null): Buffer
}
export declare var Buffer: Buffer_Static
export interface CacheClass_ConstructProps {
}
export interface CacheClass {
}
export interface CacheClass_Static {
    new (config: CacheClass_ConstructProps): CacheClass
}
export declare var CacheClass: CacheClass_Static
export interface CachePrivate_ConstructProps {
}
export interface CachePrivate {
}
export interface CachePrivate_Static {
    new (config: CachePrivate_ConstructProps): CachePrivate
}
export declare var CachePrivate: CachePrivate_Static
export interface ClientContext_ConstructProps {
}
export interface ClientContext {
    /* Methods of ClientContext */
    get_address(): Address | null
    get_auth_domain(): AuthDomain | null
    get_auth_user(): string | null
    get_gsocket(): Gio.Socket | null
    get_host(): string | null
    get_local_address(): Gio.SocketAddress | null
    get_remote_address(): Gio.SocketAddress | null
    get_socket(): Socket
    steal_connection(): Gio.IOStream
}
export interface ClientContext_Static {
    new (config: ClientContext_ConstructProps): ClientContext
}
export declare var ClientContext: ClientContext_Static
export interface Connection_ConstructProps {
}
export interface Connection {
}
export interface Connection_Static {
    new (config: Connection_ConstructProps): Connection
}
export declare var Connection: Connection_Static
export interface ContentDecoderClass_ConstructProps {
}
export interface ContentDecoderClass {
}
export interface ContentDecoderClass_Static {
    new (config: ContentDecoderClass_ConstructProps): ContentDecoderClass
}
export declare var ContentDecoderClass: ContentDecoderClass_Static
export interface ContentDecoderPrivate_ConstructProps {
}
export interface ContentDecoderPrivate {
}
export interface ContentDecoderPrivate_Static {
    new (config: ContentDecoderPrivate_ConstructProps): ContentDecoderPrivate
}
export declare var ContentDecoderPrivate: ContentDecoderPrivate_Static
export interface ContentSnifferClass_ConstructProps {
}
export interface ContentSnifferClass {
}
export interface ContentSnifferClass_Static {
    new (config: ContentSnifferClass_ConstructProps): ContentSnifferClass
}
export declare var ContentSnifferClass: ContentSnifferClass_Static
export interface ContentSnifferPrivate_ConstructProps {
}
export interface ContentSnifferPrivate {
}
export interface ContentSnifferPrivate_Static {
    new (config: ContentSnifferPrivate_ConstructProps): ContentSnifferPrivate
}
export declare var ContentSnifferPrivate: ContentSnifferPrivate_Static
export interface Cookie_ConstructProps {
}
export interface Cookie {
    /* Methods of Cookie */
    applies_to_uri(uri: URI): boolean
    copy(): Cookie
    domain_matches(host: string): boolean
    equal(cookie2: Cookie): boolean
    free(): void
    get_domain(): string
    get_expires(): Date
    get_http_only(): boolean
    get_name(): string
    get_path(): string
    get_secure(): boolean
    get_value(): string
    set_domain(domain: string): void
    set_expires(expires: Date): void
    set_http_only(http_only: boolean): void
    set_max_age(max_age: number): void
    set_name(name: string): void
    set_path(path: string): void
    set_secure(secure: boolean): void
    set_value(value: string): void
    to_cookie_header(): string
    to_set_cookie_header(): string
}
export interface Cookie_Static {
    new (config: Cookie_ConstructProps): Cookie
}
export declare class Cookie_Static {
    new(name: string, value: string, domain: string, path: string, max_age: number): Cookie
    parse(header: string, origin: URI): Cookie | null
}
export declare var Cookie: Cookie_Static
export interface CookieJarClass_ConstructProps {
}
export interface CookieJarClass {
}
export interface CookieJarClass_Static {
    new (config: CookieJarClass_ConstructProps): CookieJarClass
}
export declare var CookieJarClass: CookieJarClass_Static
export interface CookieJarDBClass_ConstructProps {
}
export interface CookieJarDBClass {
}
export interface CookieJarDBClass_Static {
    new (config: CookieJarDBClass_ConstructProps): CookieJarDBClass
}
export declare var CookieJarDBClass: CookieJarDBClass_Static
export interface CookieJarTextClass_ConstructProps {
}
export interface CookieJarTextClass {
}
export interface CookieJarTextClass_Static {
    new (config: CookieJarTextClass_ConstructProps): CookieJarTextClass
}
export declare var CookieJarTextClass: CookieJarTextClass_Static
export interface Date_ConstructProps {
}
export interface Date {
    /* Methods of Date */
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
}
export interface Date_Static {
    new (config: Date_ConstructProps): Date
}
export declare class Date_Static {
    new(year: number, month: number, day: number, hour: number, minute: number, second: number): Date
    new_from_now(offset_seconds: number): Date
    new_from_string(date_string: string): Date | null
    new_from_time_t(when: number): Date
}
export declare var Date: Date_Static
export interface LoggerClass_ConstructProps {
}
export interface LoggerClass {
}
export interface LoggerClass_Static {
    new (config: LoggerClass_ConstructProps): LoggerClass
}
export declare var LoggerClass: LoggerClass_Static
export interface MessageBody_ConstructProps {
}
export interface MessageBody {
    /* Methods of MessageBody */
    append(use: MemoryUse, data: number[], length: number): void
    append_buffer(buffer: Buffer): void
    append_take(data: number[], length: number): void
    complete(): void
    flatten(): Buffer
    free(): void
    get_accumulate(): boolean
    get_chunk(offset: number): Buffer | null
    got_chunk(chunk: Buffer): void
    set_accumulate(accumulate: boolean): void
    truncate(): void
    wrote_chunk(chunk: Buffer): void
}
export interface MessageBody_Static {
    new (config: MessageBody_ConstructProps): MessageBody
}
export declare class MessageBody_Static {
    new(): MessageBody
}
export declare var MessageBody: MessageBody_Static
export interface MessageClass_ConstructProps {
}
export interface MessageClass {
}
export interface MessageClass_Static {
    new (config: MessageClass_ConstructProps): MessageClass
}
export declare var MessageClass: MessageClass_Static
export interface MessageHeaders_ConstructProps {
}
export interface MessageHeaders {
    /* Methods of MessageHeaders */
    append(name: string, value: string): void
    clean_connection_headers(): void
    clear(): void
    foreach(func: MessageHeadersForeachFunc, user_data: object): void
    free(): void
    free_ranges(ranges: Range): void
    get(name: string): string | null
    get_content_disposition(): [ /* returnType */ boolean, /* disposition */ string, /* params */ GLib.HashTable ]
    get_content_length(): number
    get_content_range(start: number, end: number, total_length: number): boolean
    get_content_type(): [ /* returnType */ string | null, /* params */ GLib.HashTable | null ]
    get_encoding(): Encoding
    get_expectations(): Expectation
    get_headers_type(): MessageHeadersType
    get_list(name: string): string | null
    get_one(name: string): string | null
    get_ranges(total_length: number): [ /* returnType */ boolean, /* ranges */ Range[], /* length */ number ]
    header_contains(name: string, token: string): boolean
    header_equals(name: string, value: string): boolean
    remove(name: string): void
    replace(name: string, value: string): void
    set_content_disposition(disposition: string, params: GLib.HashTable | null): void
    set_content_length(content_length: number): void
    set_content_range(start: number, end: number, total_length: number): void
    set_content_type(content_type: string, params: GLib.HashTable | null): void
    set_encoding(encoding: Encoding): void
    set_expectations(expectations: Expectation): void
    set_range(start: number, end: number): void
    set_ranges(ranges: Range, length: number): void
}
export interface MessageHeaders_Static {
    new (config: MessageHeaders_ConstructProps): MessageHeaders
}
export declare class MessageHeaders_Static {
    new(type: MessageHeadersType): MessageHeaders
}
export declare var MessageHeaders: MessageHeaders_Static
export interface MessageHeadersIter_ConstructProps {
}
export interface MessageHeadersIter {
    /* Methods of MessageHeadersIter */
    next(): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
}
export interface MessageHeadersIter_Static {
    new (config: MessageHeadersIter_ConstructProps): MessageHeadersIter
}
export declare class MessageHeadersIter_Static {
    init(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
}
export declare var MessageHeadersIter: MessageHeadersIter_Static
export interface MessageQueue_ConstructProps {
}
export interface MessageQueue {
}
export interface MessageQueue_Static {
    new (config: MessageQueue_ConstructProps): MessageQueue
}
export declare var MessageQueue: MessageQueue_Static
export interface MessageQueueItem_ConstructProps {
}
export interface MessageQueueItem {
}
export interface MessageQueueItem_Static {
    new (config: MessageQueueItem_ConstructProps): MessageQueueItem
}
export declare var MessageQueueItem: MessageQueueItem_Static
export interface Multipart_ConstructProps {
}
export interface Multipart {
    /* Methods of Multipart */
    append_form_file(control_name: string, filename: string, content_type: string, body: Buffer): void
    append_form_string(control_name: string, data: string): void
    append_part(headers: MessageHeaders, body: Buffer): void
    free(): void
    get_length(): number
    get_part(part: number): [ /* returnType */ boolean, /* headers */ MessageHeaders, /* body */ Buffer ]
    to_message(dest_headers: MessageHeaders, dest_body: MessageBody): void
}
export interface Multipart_Static {
    new (config: Multipart_ConstructProps): Multipart
}
export declare class Multipart_Static {
    new(mime_type: string): Multipart
    new_from_message(headers: MessageHeaders, body: MessageBody): Multipart | null
}
export declare var Multipart: Multipart_Static
export interface MultipartInputStreamClass_ConstructProps {
}
export interface MultipartInputStreamClass {
}
export interface MultipartInputStreamClass_Static {
    new (config: MultipartInputStreamClass_ConstructProps): MultipartInputStreamClass
}
export declare var MultipartInputStreamClass: MultipartInputStreamClass_Static
export interface MultipartInputStreamPrivate_ConstructProps {
}
export interface MultipartInputStreamPrivate {
}
export interface MultipartInputStreamPrivate_Static {
    new (config: MultipartInputStreamPrivate_ConstructProps): MultipartInputStreamPrivate
}
export declare var MultipartInputStreamPrivate: MultipartInputStreamPrivate_Static
export interface PasswordManagerInterface_ConstructProps {
}
export interface PasswordManagerInterface {
}
export interface PasswordManagerInterface_Static {
    new (config: PasswordManagerInterface_ConstructProps): PasswordManagerInterface
}
export declare var PasswordManagerInterface: PasswordManagerInterface_Static
export interface ProxyResolverDefaultClass_ConstructProps {
}
export interface ProxyResolverDefaultClass {
}
export interface ProxyResolverDefaultClass_Static {
    new (config: ProxyResolverDefaultClass_ConstructProps): ProxyResolverDefaultClass
}
export declare var ProxyResolverDefaultClass: ProxyResolverDefaultClass_Static
export interface ProxyURIResolverInterface_ConstructProps {
}
export interface ProxyURIResolverInterface {
}
export interface ProxyURIResolverInterface_Static {
    new (config: ProxyURIResolverInterface_ConstructProps): ProxyURIResolverInterface
}
export declare var ProxyURIResolverInterface: ProxyURIResolverInterface_Static
export interface Range_ConstructProps {
}
export interface Range {
}
export interface Range_Static {
    new (config: Range_ConstructProps): Range
}
export declare var Range: Range_Static
export interface RequestClass_ConstructProps {
}
export interface RequestClass {
}
export interface RequestClass_Static {
    new (config: RequestClass_ConstructProps): RequestClass
}
export declare var RequestClass: RequestClass_Static
export interface RequestDataClass_ConstructProps {
}
export interface RequestDataClass {
}
export interface RequestDataClass_Static {
    new (config: RequestDataClass_ConstructProps): RequestDataClass
}
export declare var RequestDataClass: RequestDataClass_Static
export interface RequestDataPrivate_ConstructProps {
}
export interface RequestDataPrivate {
}
export interface RequestDataPrivate_Static {
    new (config: RequestDataPrivate_ConstructProps): RequestDataPrivate
}
export declare var RequestDataPrivate: RequestDataPrivate_Static
export interface RequestFileClass_ConstructProps {
}
export interface RequestFileClass {
}
export interface RequestFileClass_Static {
    new (config: RequestFileClass_ConstructProps): RequestFileClass
}
export declare var RequestFileClass: RequestFileClass_Static
export interface RequestFilePrivate_ConstructProps {
}
export interface RequestFilePrivate {
}
export interface RequestFilePrivate_Static {
    new (config: RequestFilePrivate_ConstructProps): RequestFilePrivate
}
export declare var RequestFilePrivate: RequestFilePrivate_Static
export interface RequestHTTPClass_ConstructProps {
}
export interface RequestHTTPClass {
}
export interface RequestHTTPClass_Static {
    new (config: RequestHTTPClass_ConstructProps): RequestHTTPClass
}
export declare var RequestHTTPClass: RequestHTTPClass_Static
export interface RequestHTTPPrivate_ConstructProps {
}
export interface RequestHTTPPrivate {
}
export interface RequestHTTPPrivate_Static {
    new (config: RequestHTTPPrivate_ConstructProps): RequestHTTPPrivate
}
export declare var RequestHTTPPrivate: RequestHTTPPrivate_Static
export interface RequestPrivate_ConstructProps {
}
export interface RequestPrivate {
}
export interface RequestPrivate_Static {
    new (config: RequestPrivate_ConstructProps): RequestPrivate
}
export declare var RequestPrivate: RequestPrivate_Static
export interface RequesterClass_ConstructProps {
}
export interface RequesterClass {
}
export interface RequesterClass_Static {
    new (config: RequesterClass_ConstructProps): RequesterClass
}
export declare var RequesterClass: RequesterClass_Static
export interface RequesterPrivate_ConstructProps {
}
export interface RequesterPrivate {
}
export interface RequesterPrivate_Static {
    new (config: RequesterPrivate_ConstructProps): RequesterPrivate
}
export declare var RequesterPrivate: RequesterPrivate_Static
export interface ServerClass_ConstructProps {
}
export interface ServerClass {
}
export interface ServerClass_Static {
    new (config: ServerClass_ConstructProps): ServerClass
}
export declare var ServerClass: ServerClass_Static
export interface SessionAsyncClass_ConstructProps {
}
export interface SessionAsyncClass {
}
export interface SessionAsyncClass_Static {
    new (config: SessionAsyncClass_ConstructProps): SessionAsyncClass
}
export declare var SessionAsyncClass: SessionAsyncClass_Static
export interface SessionClass_ConstructProps {
}
export interface SessionClass {
}
export interface SessionClass_Static {
    new (config: SessionClass_ConstructProps): SessionClass
}
export declare var SessionClass: SessionClass_Static
export interface SessionFeatureInterface_ConstructProps {
}
export interface SessionFeatureInterface {
}
export interface SessionFeatureInterface_Static {
    new (config: SessionFeatureInterface_ConstructProps): SessionFeatureInterface
}
export declare var SessionFeatureInterface: SessionFeatureInterface_Static
export interface SessionSyncClass_ConstructProps {
}
export interface SessionSyncClass {
}
export interface SessionSyncClass_Static {
    new (config: SessionSyncClass_ConstructProps): SessionSyncClass
}
export declare var SessionSyncClass: SessionSyncClass_Static
export interface SocketClass_ConstructProps {
}
export interface SocketClass {
}
export interface SocketClass_Static {
    new (config: SocketClass_ConstructProps): SocketClass
}
export declare var SocketClass: SocketClass_Static
export interface URI_ConstructProps {
}
export interface URI {
    /* Methods of URI */
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
    new_with_base(uri_string: string): URI
    set_fragment(fragment: string | null): void
    set_host(host: string | null): void
    set_password(password: string | null): void
    set_path(path: string): void
    set_port(port: number): void
    set_query(query: string | null): void
    set_query_from_form(form: GLib.HashTable): void
    set_scheme(scheme: string): void
    set_user(user: string | null): void
    to_string(just_path_and_query: boolean): string
    uses_default_port(): boolean
}
export interface URI_Static {
    new (config: URI_ConstructProps): URI
}
export declare class URI_Static {
    new(uri_string: string | null): URI | null
    decode(part: string): string
    encode(part: string, escape_extra: string | null): string
    normalize(part: string, unescape_extra: string | null): string
}
export declare var URI: URI_Static
export interface WebsocketConnectionClass_ConstructProps {
}
export interface WebsocketConnectionClass {
}
export interface WebsocketConnectionClass_Static {
    new (config: WebsocketConnectionClass_ConstructProps): WebsocketConnectionClass
}
export declare var WebsocketConnectionClass: WebsocketConnectionClass_Static
export interface WebsocketConnectionPrivate_ConstructProps {
}
export interface WebsocketConnectionPrivate {
}
export interface WebsocketConnectionPrivate_Static {
    new (config: WebsocketConnectionPrivate_ConstructProps): WebsocketConnectionPrivate
}
export declare var WebsocketConnectionPrivate: WebsocketConnectionPrivate_Static
export interface XMLRPCParams_ConstructProps {
}
export interface XMLRPCParams {
    /* Methods of XMLRPCParams */
    free(): void
    parse(signature: string | null): GLib.Variant
}
export interface XMLRPCParams_Static {
    new (config: XMLRPCParams_ConstructProps): XMLRPCParams
}
export declare var XMLRPCParams: XMLRPCParams_Static