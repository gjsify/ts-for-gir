/**
 * Soup-3.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum CacheResponse {
    FRESH,
    NEEDS_VALIDATION,
    STALE,
}
export enum CacheType {
    SINGLE_USER,
    SHARED,
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
    HTTP_2_0,
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
export enum SameSitePolicy {
    NONE,
    LAX,
    STRICT,
}
export enum SessionError {
    PARSING,
    ENCODING,
    TOO_MANY_REDIRECTS,
    TOO_MANY_RESTARTS,
    REDIRECT_NO_LOCATION,
    REDIRECT_BAD_URI,
    MESSAGE_ALREADY_IN_QUEUE,
}
export enum Status {
    NONE,
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
    MISDIRECTED_REQUEST,
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
export enum URIComponent {
    NONE,
    SCHEME,
    USER,
    PASSWORD,
    AUTH_PARAMS,
    HOST,
    PORT,
    PATH,
    QUERY,
    FRAGMENT,
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
    NEW_CONNECTION,
    IDEMPOTENT,
    DO_NOT_USE_AUTH_CACHE,
    COLLECT_METRICS,
}
export enum ServerListenOptions {
    HTTPS,
    IPV4_ONLY,
    IPV6_ONLY,
}
export const COOKIE_MAX_AGE_ONE_DAY: number
export const COOKIE_MAX_AGE_ONE_HOUR: number
export const COOKIE_MAX_AGE_ONE_WEEK: number
export const COOKIE_MAX_AGE_ONE_YEAR: number
export const FORM_MIME_TYPE_MULTIPART: string
export const FORM_MIME_TYPE_URLENCODED: string
export const HSTS_POLICY_MAX_AGE_PAST: number
export const HTTP_URI_FLAGS: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION_MIN_REQUIRED: number
export function check_version(major: number, minor: number, micro: number): boolean
export function cookie_parse(header: string, origin?: GLib.Uri | null): Cookie | null
export function cookies_from_request(msg: Message): Cookie[]
export function cookies_from_response(msg: Message): Cookie[]
export function cookies_to_cookie_header(cookies: Cookie[]): string
export function cookies_to_request(cookies: Cookie[], msg: Message): void
export function cookies_to_response(cookies: Cookie[], msg: Message): void
export function date_time_new_from_http_string(date_string: string): GLib.DateTime | null
export function date_time_to_string(date: GLib.DateTime, format: DateFormat): string
export function form_decode(encoded_form: string): GLib.HashTable
export function form_decode_multipart(multipart: Multipart, file_control_name?: string | null): [ /* returnType */ GLib.HashTable | null, /* filename */ string | null, /* content_type */ string | null, /* file */ GLib.Bytes | null ]
export function form_encode_datalist(form_data_set: GLib.Data): string
export function form_encode_hash(form_data_set: GLib.HashTable): string
export function get_major_version(): number
export function get_micro_version(): number
export function get_minor_version(): number
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
export function message_headers_iter_init(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
export function session_error_quark(): GLib.Quark
export function status_get_phrase(status_code: number): string
export function tld_domain_is_public_suffix(domain: string): boolean
export function tld_error_quark(): GLib.Quark
export function tld_get_base_domain(hostname: string): string
export function uri_decode_data_uri(uri: string): [ /* returnType */ GLib.Bytes, /* content_type */ string | null ]
export function uri_equal(uri1: GLib.Uri, uri2: GLib.Uri): boolean
export function websocket_client_prepare_handshake(msg: Message, origin?: string | null, protocols?: string[] | null, supported_extensions?: GObject.TypeClass[] | null): void
export function websocket_client_verify_handshake(msg: Message, supported_extensions?: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* accepted_extensions */ WebsocketExtension[] | null ]
export function websocket_error_quark(): GLib.Quark
export function websocket_server_check_handshake(msg: ServerMessage, origin?: string | null, protocols?: string[] | null, supported_extensions?: GObject.TypeClass[] | null): boolean
export function websocket_server_process_handshake(msg: ServerMessage, expected_origin?: string | null, protocols?: string[] | null, supported_extensions?: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* accepted_extensions */ WebsocketExtension[] | null ]
export interface AuthDomainBasicAuthCallback {
    (domain: AuthDomainBasic, msg: ServerMessage, username: string, password: string): boolean
}
export interface AuthDomainDigestAuthCallback {
    (domain: AuthDomainDigest, msg: ServerMessage, username: string): string | null
}
export interface AuthDomainFilter {
    (domain: AuthDomain, msg: ServerMessage): boolean
}
export interface AuthDomainGenericAuthCallback {
    (domain: AuthDomain, msg: ServerMessage, username: string): boolean
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
export interface ServerCallback {
    (server: Server, msg: ServerMessage, path: string, query?: GLib.HashTable | null): void
}
export interface ServerWebsocketCallback {
    (server: Server, msg: ServerMessage, path: string, connection: WebsocketConnection): void
}
export class SessionFeature {
    static name: string
}
export interface Auth_ConstructProps extends GObject.Object_ConstructProps {
    authority?: string
    is_for_proxy?: boolean
    realm?: string
}
export class Auth {
    /* Properties of Soup-3.0.Soup.Auth */
    authority: string
    readonly is_authenticated: boolean
    readonly is_cancelled: boolean
    is_for_proxy: boolean
    realm: string
    readonly scheme_name: string
    /* Fields of Soup-3.0.Soup.Auth */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    cancel(): void
    get_authority(): string
    get_authorization(msg: Message): string
    get_info(): string
    get_protection_space(source_uri: GLib.Uri): string[]
    get_realm(): string
    get_scheme_name(): string
    is_ready(msg: Message): boolean
    update(msg: Message, auth_header: string): boolean
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
    /* Virtual methods of Soup-3.0.Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: GLib.Uri): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Soup-3.0.Soup.Auth */
    authority: string
    readonly is_authenticated: boolean
    readonly is_cancelled: boolean
    is_for_proxy: boolean
    realm: string
    readonly scheme_name: string
    /* Fields of Soup-3.0.Soup.Auth */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    cancel(): void
    get_authority(): string
    get_authorization(msg: Message): string
    get_info(): string
    get_protection_space(source_uri: GLib.Uri): string[]
    get_realm(): string
    get_scheme_name(): string
    is_ready(msg: Message): boolean
    update(msg: Message, auth_header: string): boolean
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
    /* Virtual methods of Soup-3.0.Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: GLib.Uri): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Soup-3.0.Soup.Auth */
    authority: string
    readonly is_authenticated: boolean
    readonly is_cancelled: boolean
    is_for_proxy: boolean
    realm: string
    readonly scheme_name: string
    /* Fields of Soup-3.0.Soup.Auth */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    cancel(): void
    get_authority(): string
    get_authorization(msg: Message): string
    get_info(): string
    get_protection_space(source_uri: GLib.Uri): string[]
    get_realm(): string
    get_scheme_name(): string
    is_ready(msg: Message): boolean
    update(msg: Message, auth_header: string): boolean
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
    /* Virtual methods of Soup-3.0.Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: GLib.Uri): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
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
    filter?: AuthDomainFilter
    filter_data?: object
    generic_auth_callback?: AuthDomainGenericAuthCallback
    generic_auth_data?: object
    proxy?: boolean
    realm?: string
}
export class AuthDomain {
    /* Properties of Soup-3.0.Soup.AuthDomain */
    filter: AuthDomainFilter
    filter_data: object
    generic_auth_callback: AuthDomainGenericAuthCallback
    generic_auth_data: object
    /* Fields of Soup-3.0.Soup.AuthDomain */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthDomain */
    accepts(msg: ServerMessage): string | null
    add_path(path: string): void
    challenge(msg: ServerMessage): void
    check_password(msg: ServerMessage, username: string, password: string): boolean
    covers(msg: ServerMessage): boolean
    get_realm(): string
    remove_path(path: string): void
    set_filter(filter: AuthDomainFilter): void
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void
    try_generic_auth_callback(msg: ServerMessage, username: string): boolean
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
    /* Virtual methods of Soup-3.0.Soup.AuthDomain */
    vfunc_accepts(msg: ServerMessage, header: string): string
    vfunc_challenge(msg: ServerMessage): string
    vfunc_check_password(msg: ServerMessage, username: string, password: string): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Soup-3.0.Soup.AuthDomainBasic */
    auth_callback: AuthDomainBasicAuthCallback
    auth_data: object
    /* Properties of Soup-3.0.Soup.AuthDomain */
    filter: AuthDomainFilter
    filter_data: object
    generic_auth_callback: AuthDomainGenericAuthCallback
    generic_auth_data: object
    /* Fields of Soup-3.0.Soup.AuthDomain */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthDomainBasic */
    set_auth_callback(callback: AuthDomainBasicAuthCallback): void
    /* Methods of Soup-3.0.Soup.AuthDomain */
    accepts(msg: ServerMessage): string | null
    add_path(path: string): void
    challenge(msg: ServerMessage): void
    check_password(msg: ServerMessage, username: string, password: string): boolean
    covers(msg: ServerMessage): boolean
    get_realm(): string
    remove_path(path: string): void
    set_filter(filter: AuthDomainFilter): void
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void
    try_generic_auth_callback(msg: ServerMessage, username: string): boolean
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
    /* Virtual methods of Soup-3.0.Soup.AuthDomain */
    vfunc_accepts(msg: ServerMessage, header: string): string
    vfunc_challenge(msg: ServerMessage): string
    vfunc_check_password(msg: ServerMessage, username: string, password: string): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Soup-3.0.Soup.AuthDomainDigest */
    auth_callback: AuthDomainDigestAuthCallback
    auth_data: object
    /* Properties of Soup-3.0.Soup.AuthDomain */
    filter: AuthDomainFilter
    filter_data: object
    generic_auth_callback: AuthDomainGenericAuthCallback
    generic_auth_data: object
    /* Fields of Soup-3.0.Soup.AuthDomain */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthDomainDigest */
    set_auth_callback(callback: AuthDomainDigestAuthCallback): void
    /* Methods of Soup-3.0.Soup.AuthDomain */
    accepts(msg: ServerMessage): string | null
    add_path(path: string): void
    challenge(msg: ServerMessage): void
    check_password(msg: ServerMessage, username: string, password: string): boolean
    covers(msg: ServerMessage): boolean
    get_realm(): string
    remove_path(path: string): void
    set_filter(filter: AuthDomainFilter): void
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void
    try_generic_auth_callback(msg: ServerMessage, username: string): boolean
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
    /* Virtual methods of Soup-3.0.Soup.AuthDomain */
    vfunc_accepts(msg: ServerMessage, header: string): string
    vfunc_challenge(msg: ServerMessage): string
    vfunc_check_password(msg: ServerMessage, username: string, password: string): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthManager */
    clear_cached_credentials(): void
    use_auth(uri: GLib.Uri, auth: Auth): void
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
    /* Signals of Soup-3.0.Soup.AuthManager */
    connect(sigName: "authenticate", callback: (($obj: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Properties of Soup-3.0.Soup.Auth */
    authority: string
    readonly is_authenticated: boolean
    readonly is_cancelled: boolean
    is_for_proxy: boolean
    realm: string
    readonly scheme_name: string
    /* Fields of Soup-3.0.Soup.Auth */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    cancel(): void
    get_authority(): string
    get_authorization(msg: Message): string
    get_info(): string
    get_protection_space(source_uri: GLib.Uri): string[]
    get_realm(): string
    get_scheme_name(): string
    is_ready(msg: Message): boolean
    update(msg: Message, auth_header: string): boolean
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
    /* Virtual methods of Soup-3.0.Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: GLib.Uri): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Soup-3.0.Soup.Auth */
    authority: string
    readonly is_authenticated: boolean
    readonly is_cancelled: boolean
    is_for_proxy: boolean
    realm: string
    readonly scheme_name: string
    /* Fields of Soup-3.0.Soup.Auth */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    cancel(): void
    get_authority(): string
    get_authorization(msg: Message): string
    get_info(): string
    get_protection_space(source_uri: GLib.Uri): string[]
    get_realm(): string
    get_scheme_name(): string
    is_ready(msg: Message): boolean
    update(msg: Message, auth_header: string): boolean
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
    /* Virtual methods of Soup-3.0.Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Message): string
    vfunc_get_protection_space(source_uri: GLib.Uri): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Message): boolean
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of Soup-3.0.Soup.Cache */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Cache */
    clear(): void
    dump(): void
    flush(): void
    get_max_size(): number
    load(): void
    set_max_size(max_size: number): void
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
    /* Virtual methods of Soup-3.0.Soup.Cache */
    vfunc_get_cacheability(msg: Message): Cacheability
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.ContentSniffer */
    sniff(msg: Message, buffer: GLib.Bytes): [ /* returnType */ string, /* params */ GLib.HashTable | null ]
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
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Properties of Soup-3.0.Soup.CookieJar */
    accept_policy: CookieJarAcceptPolicy
    /* Fields of Soup-3.0.Soup.CookieJar */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.CookieJar */
    add_cookie(cookie: Cookie): void
    add_cookie_full(cookie: Cookie, uri?: GLib.Uri | null, first_party?: GLib.Uri | null): void
    add_cookie_with_first_party(first_party: GLib.Uri, cookie: Cookie): void
    all_cookies(): Cookie[]
    delete_cookie(cookie: Cookie): void
    get_accept_policy(): CookieJarAcceptPolicy
    get_cookie_list(uri: GLib.Uri, for_http: boolean): Cookie[]
    get_cookie_list_with_same_site_info(uri: GLib.Uri, top_level: GLib.Uri | null, site_for_cookies: GLib.Uri | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[]
    get_cookies(uri: GLib.Uri, for_http: boolean): string | null
    is_persistent(): boolean
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    set_cookie(uri: GLib.Uri, cookie: string): void
    set_cookie_with_first_party(uri: GLib.Uri, first_party: GLib.Uri, cookie: string): void
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
    /* Virtual methods of Soup-3.0.Soup.CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJar, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJar, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    emit(sigName: "changed", old_cookie: Cookie, new_cookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Properties of Soup-3.0.Soup.CookieJar */
    accept_policy: CookieJarAcceptPolicy
    /* Fields of Soup-3.0.Soup.CookieJar */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.CookieJar */
    add_cookie(cookie: Cookie): void
    add_cookie_full(cookie: Cookie, uri?: GLib.Uri | null, first_party?: GLib.Uri | null): void
    add_cookie_with_first_party(first_party: GLib.Uri, cookie: Cookie): void
    all_cookies(): Cookie[]
    delete_cookie(cookie: Cookie): void
    get_accept_policy(): CookieJarAcceptPolicy
    get_cookie_list(uri: GLib.Uri, for_http: boolean): Cookie[]
    get_cookie_list_with_same_site_info(uri: GLib.Uri, top_level: GLib.Uri | null, site_for_cookies: GLib.Uri | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[]
    get_cookies(uri: GLib.Uri, for_http: boolean): string | null
    is_persistent(): boolean
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    set_cookie(uri: GLib.Uri, cookie: string): void
    set_cookie_with_first_party(uri: GLib.Uri, first_party: GLib.Uri, cookie: string): void
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
    /* Virtual methods of Soup-3.0.Soup.CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarDB, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJarDB, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    emit(sigName: "changed", old_cookie: Cookie, new_cookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Properties of Soup-3.0.Soup.CookieJar */
    accept_policy: CookieJarAcceptPolicy
    /* Fields of Soup-3.0.Soup.CookieJar */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.CookieJar */
    add_cookie(cookie: Cookie): void
    add_cookie_full(cookie: Cookie, uri?: GLib.Uri | null, first_party?: GLib.Uri | null): void
    add_cookie_with_first_party(first_party: GLib.Uri, cookie: Cookie): void
    all_cookies(): Cookie[]
    delete_cookie(cookie: Cookie): void
    get_accept_policy(): CookieJarAcceptPolicy
    get_cookie_list(uri: GLib.Uri, for_http: boolean): Cookie[]
    get_cookie_list_with_same_site_info(uri: GLib.Uri, top_level: GLib.Uri | null, site_for_cookies: GLib.Uri | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[]
    get_cookies(uri: GLib.Uri, for_http: boolean): string | null
    is_persistent(): boolean
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    set_cookie(uri: GLib.Uri, cookie: string): void
    set_cookie_with_first_party(uri: GLib.Uri, first_party: GLib.Uri, cookie: string): void
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
    /* Virtual methods of Soup-3.0.Soup.CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarText, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJarText, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    emit(sigName: "changed", old_cookie: Cookie, new_cookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Fields of Soup-3.0.Soup.HSTSEnforcer */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.HSTSEnforcer */
    get_domains(session_policies: boolean): string[]
    get_policies(session_policies: boolean): HSTSPolicy[]
    has_valid_policy(domain: string): boolean
    is_persistent(): boolean
    set_policy(policy: HSTSPolicy): void
    set_session_policy(domain: string, include_subdomains: boolean): void
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
    /* Virtual methods of Soup-3.0.Soup.HSTSEnforcer */
    vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    vfunc_has_valid_policy(domain: string): boolean
    vfunc_is_persistent(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.HSTSEnforcer */
    connect(sigName: "changed", callback: (($obj: HSTSEnforcer, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    connect_after(sigName: "changed", callback: (($obj: HSTSEnforcer, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    emit(sigName: "changed", old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Fields of Soup-3.0.Soup.HSTSEnforcer */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.HSTSEnforcer */
    get_domains(session_policies: boolean): string[]
    get_policies(session_policies: boolean): HSTSPolicy[]
    has_valid_policy(domain: string): boolean
    is_persistent(): boolean
    set_policy(policy: HSTSPolicy): void
    set_session_policy(domain: string, include_subdomains: boolean): void
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
    /* Virtual methods of Soup-3.0.Soup.HSTSEnforcer */
    vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    vfunc_has_valid_policy(domain: string): boolean
    vfunc_is_persistent(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.HSTSEnforcer */
    connect(sigName: "changed", callback: (($obj: HSTSEnforcerDB, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    connect_after(sigName: "changed", callback: (($obj: HSTSEnforcerDB, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    emit(sigName: "changed", old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Properties of Soup-3.0.Soup.Logger */
    level: LoggerLogLevel
    max_body_size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Logger */
    get_max_body_size(): number
    set_max_body_size(max_body_size: number): void
    set_printer(printer: LoggerPrinter): void
    set_request_filter(request_filter: LoggerFilter): void
    set_response_filter(response_filter: LoggerFilter): void
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
    /* Signals of GObject-2.0.GObject.Object */
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
    static new(level: LoggerLogLevel): Logger
    static $gtype: GObject.Type
}
export interface Message_ConstructProps extends GObject.Object_ConstructProps {
    first_party?: GLib.Uri
    flags?: MessageFlags
    is_options_ping?: boolean
    is_top_level_navigation?: boolean
    method?: string
    priority?: MessagePriority
    site_for_cookies?: GLib.Uri
    uri?: GLib.Uri
}
export class Message {
    /* Properties of Soup-3.0.Soup.Message */
    first_party: GLib.Uri
    flags: MessageFlags
    readonly http_version: HTTPVersion
    is_options_ping: boolean
    is_top_level_navigation: boolean
    method: string
    priority: MessagePriority
    readonly reason_phrase: string
    readonly remote_address: Gio.SocketAddress
    readonly request_headers: MessageHeaders
    readonly response_headers: MessageHeaders
    site_for_cookies: GLib.Uri
    readonly status_code: number
    readonly tls_ciphersuite_name: string
    readonly tls_peer_certificate: Gio.TlsCertificate
    readonly tls_peer_certificate_errors: Gio.TlsCertificateFlags
    readonly tls_protocol_version: Gio.TlsProtocolVersion
    uri: GLib.Uri
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Message */
    add_flags(flags: MessageFlags): void
    disable_feature(feature_type: GObject.Type): void
    get_connection_id(): number
    get_first_party(): GLib.Uri
    get_flags(): MessageFlags
    get_http_version(): HTTPVersion
    get_is_options_ping(): boolean
    get_is_top_level_navigation(): boolean
    get_method(): string
    get_metrics(): MessageMetrics | null
    get_priority(): MessagePriority
    get_reason_phrase(): string
    get_remote_address(): Gio.SocketAddress | null
    get_request_headers(): MessageHeaders
    get_response_headers(): MessageHeaders
    get_site_for_cookies(): GLib.Uri
    get_status(): Status
    get_tls_ciphersuite_name(): string
    get_tls_peer_certificate(): Gio.TlsCertificate | null
    get_tls_peer_certificate_errors(): Gio.TlsCertificateFlags
    get_tls_protocol_version(): Gio.TlsProtocolVersion
    get_uri(): GLib.Uri
    is_feature_disabled(feature_type: GObject.Type): boolean
    is_keepalive(): boolean
    query_flags(flags: MessageFlags): boolean
    remove_flags(flags: MessageFlags): void
    set_first_party(first_party: GLib.Uri): void
    set_flags(flags: MessageFlags): void
    set_is_options_ping(is_options_ping: boolean): void
    set_is_top_level_navigation(is_top_level_navigation: boolean): void
    set_method(method: string): void
    set_priority(priority: MessagePriority): void
    set_request_body(content_type: string | null, stream: Gio.InputStream | null, content_length: number): void
    set_request_body_from_bytes(content_type?: string | null, bytes?: GLib.Bytes | null): void
    set_site_for_cookies(site_for_cookies?: GLib.Uri | null): void
    set_tls_client_certificate(certificate?: Gio.TlsCertificate | null): void
    set_uri(uri: GLib.Uri): void
    tls_client_certificate_password_request_complete(): void
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
    /* Signals of Soup-3.0.Soup.Message */
    connect(sigName: "accept-certificate", callback: (($obj: Message, tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: Message, tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags): void
    connect(sigName: "authenticate", callback: (($obj: Message, auth: Auth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Message, auth: Auth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: Auth, retrying: boolean): void
    connect(sigName: "content-sniffed", callback: (($obj: Message, type: string, params: GLib.HashTable) => void)): number
    connect_after(sigName: "content-sniffed", callback: (($obj: Message, type: string, params: GLib.HashTable) => void)): number
    emit(sigName: "content-sniffed", type: string, params: GLib.HashTable): void
    connect(sigName: "finished", callback: (($obj: Message) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Message) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "got-body", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-body", callback: (($obj: Message) => void)): number
    emit(sigName: "got-body"): void
    connect(sigName: "got-headers", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-headers", callback: (($obj: Message) => void)): number
    emit(sigName: "got-headers"): void
    connect(sigName: "got-informational", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-informational", callback: (($obj: Message) => void)): number
    emit(sigName: "got-informational"): void
    connect(sigName: "hsts-enforced", callback: (($obj: Message) => void)): number
    connect_after(sigName: "hsts-enforced", callback: (($obj: Message) => void)): number
    emit(sigName: "hsts-enforced"): void
    connect(sigName: "network-event", callback: (($obj: Message, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    connect_after(sigName: "network-event", callback: (($obj: Message, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    emit(sigName: "network-event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    connect(sigName: "request-certificate", callback: (($obj: Message, tls_connection: Gio.TlsClientConnection) => boolean)): number
    connect_after(sigName: "request-certificate", callback: (($obj: Message, tls_connection: Gio.TlsClientConnection) => boolean)): number
    emit(sigName: "request-certificate", tls_connection: Gio.TlsClientConnection): void
    connect(sigName: "request-certificate-password", callback: (($obj: Message, tls_password: Gio.TlsPassword) => boolean)): number
    connect_after(sigName: "request-certificate-password", callback: (($obj: Message, tls_password: Gio.TlsPassword) => boolean)): number
    emit(sigName: "request-certificate-password", tls_password: Gio.TlsPassword): void
    connect(sigName: "restarted", callback: (($obj: Message) => void)): number
    connect_after(sigName: "restarted", callback: (($obj: Message) => void)): number
    emit(sigName: "restarted"): void
    connect(sigName: "starting", callback: (($obj: Message) => void)): number
    connect_after(sigName: "starting", callback: (($obj: Message) => void)): number
    emit(sigName: "starting"): void
    connect(sigName: "wrote-body", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-body", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-body"): void
    connect(sigName: "wrote-body-data", callback: (($obj: Message, chunk_size: number) => void)): number
    connect_after(sigName: "wrote-body-data", callback: (($obj: Message, chunk_size: number) => void)): number
    emit(sigName: "wrote-body-data", chunk_size: number): void
    connect(sigName: "wrote-headers", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-headers", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-headers"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::first-party", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-party", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-options-ping", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-options-ping", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-top-level-navigation", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-top-level-navigation", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reason-phrase", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reason-phrase", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-address", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-address", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::response-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::site-for-cookies", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::site-for-cookies", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status-code", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-code", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-ciphersuite-name", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-ciphersuite-name", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-peer-certificate", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-peer-certificate", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-peer-certificate-errors", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-peer-certificate-errors", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-protocol-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-protocol-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
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
    static new_from_encoded_form(method: string, uri_string: string, encoded_form: string): Message
    static new_from_multipart(uri_string: string, multipart: Multipart): Message
    static new_from_uri(method: string, uri: GLib.Uri): Message
    static new_options_ping(base_uri: GLib.Uri): Message
    static $gtype: GObject.Type
}
export interface MultipartInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    message?: Message
}
export class MultipartInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    parent_instance: Gio.InputStream
    base_stream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.MultipartInputStream */
    get_headers(): MessageHeaders | null
    next_part(cancellable?: Gio.Cancellable | null): Gio.InputStream | null
    next_part_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    get_base_stream(): Gio.InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array[], /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Methods of Gio-2.0.Gio.PollableInputStream */
    can_poll(): boolean
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    is_readable(): boolean
    read_nonblocking(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    /* Virtual methods of Soup-3.0.Soup.MultipartInputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    vfunc_is_readable(): boolean
    vfunc_read_nonblocking(): [ /* returnType */ number, /* buffer */ Uint8Array[] | null ]
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[] | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
export interface Server_ConstructProps extends GObject.Object_ConstructProps {
    raw_paths?: boolean
    server_header?: string
    tls_auth_mode?: Gio.TlsAuthenticationMode
    tls_certificate?: Gio.TlsCertificate
    tls_database?: Gio.TlsDatabase
}
export class Server {
    /* Properties of Soup-3.0.Soup.Server */
    server_header: string
    tls_auth_mode: Gio.TlsAuthenticationMode
    tls_certificate: Gio.TlsCertificate
    tls_database: Gio.TlsDatabase
    /* Fields of Soup-3.0.Soup.Server */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Server */
    accept_iostream(stream: Gio.IOStream, local_addr?: Gio.SocketAddress | null, remote_addr?: Gio.SocketAddress | null): boolean
    add_auth_domain(auth_domain: AuthDomain): void
    add_early_handler(path: string | null, callback: ServerCallback): void
    add_handler(path: string | null, callback: ServerCallback): void
    add_websocket_extension(extension_type: GObject.Type): void
    add_websocket_handler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback): void
    disconnect(): void
    get_listeners(): Gio.Socket[]
    get_tls_auth_mode(): Gio.TlsAuthenticationMode
    get_tls_certificate(): Gio.TlsCertificate | null
    get_tls_database(): Gio.TlsDatabase | null
    get_uris(): GLib.Uri[]
    is_https(): boolean
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean
    listen_all(port: number, options: ServerListenOptions): boolean
    listen_local(port: number, options: ServerListenOptions): boolean
    listen_socket(socket: Gio.Socket, options: ServerListenOptions): boolean
    pause_message(msg: ServerMessage): void
    remove_auth_domain(auth_domain: AuthDomain): void
    remove_handler(path: string): void
    remove_websocket_extension(extension_type: GObject.Type): void
    set_tls_auth_mode(mode: Gio.TlsAuthenticationMode): void
    set_tls_certificate(certificate: Gio.TlsCertificate): void
    set_tls_database(tls_database: Gio.TlsDatabase): void
    unpause_message(msg: ServerMessage): void
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
    /* Virtual methods of Soup-3.0.Soup.Server */
    vfunc_request_aborted(msg: ServerMessage): void
    vfunc_request_finished(msg: ServerMessage): void
    vfunc_request_read(msg: ServerMessage): void
    vfunc_request_started(msg: ServerMessage): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.Server */
    connect(sigName: "request-aborted", callback: (($obj: Server, message: ServerMessage) => void)): number
    connect_after(sigName: "request-aborted", callback: (($obj: Server, message: ServerMessage) => void)): number
    emit(sigName: "request-aborted", message: ServerMessage): void
    connect(sigName: "request-finished", callback: (($obj: Server, message: ServerMessage) => void)): number
    connect_after(sigName: "request-finished", callback: (($obj: Server, message: ServerMessage) => void)): number
    emit(sigName: "request-finished", message: ServerMessage): void
    connect(sigName: "request-read", callback: (($obj: Server, message: ServerMessage) => void)): number
    connect_after(sigName: "request-read", callback: (($obj: Server, message: ServerMessage) => void)): number
    emit(sigName: "request-read", message: ServerMessage): void
    connect(sigName: "request-started", callback: (($obj: Server, message: ServerMessage) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: Server, message: ServerMessage) => void)): number
    emit(sigName: "request-started", message: ServerMessage): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::server-header", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-header", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-auth-mode", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-auth-mode", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-certificate", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-database", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ServerMessage_ConstructProps extends GObject.Object_ConstructProps {
}
export class ServerMessage {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.ServerMessage */
    get_http_version(): HTTPVersion
    get_local_address(): Gio.SocketAddress | null
    get_method(): string
    get_reason_phrase(): string
    get_remote_address(): Gio.SocketAddress | null
    get_remote_host(): string | null
    get_request_body(): MessageBody
    get_request_headers(): MessageHeaders
    get_response_body(): MessageBody
    get_response_headers(): MessageHeaders
    get_socket(): Gio.Socket | null
    get_status(): number
    get_uri(): GLib.Uri
    is_options_ping(): boolean
    set_http_version(version: HTTPVersion): void
    set_redirect(status_code: number, redirect_uri: string): void
    set_response(content_type: string | null, resp_use: MemoryUse, resp_body: Uint8Array[] | null): void
    set_status(status_code: number, reason_phrase?: string | null): void
    steal_connection(): Gio.IOStream
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
    /* Signals of Soup-3.0.Soup.ServerMessage */
    connect(sigName: "accept-certificate", callback: (($obj: ServerMessage, tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: ServerMessage, tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags): void
    connect(sigName: "disconnected", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "disconnected"): void
    connect(sigName: "finished", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "finished", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "got-body", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "got-body", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "got-body"): void
    connect(sigName: "got-chunk", callback: (($obj: ServerMessage, chunk: GLib.Bytes) => void)): number
    connect_after(sigName: "got-chunk", callback: (($obj: ServerMessage, chunk: GLib.Bytes) => void)): number
    emit(sigName: "got-chunk", chunk: GLib.Bytes): void
    connect(sigName: "got-headers", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "got-headers", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "got-headers"): void
    connect(sigName: "wrote-body", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "wrote-body", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "wrote-body"): void
    connect(sigName: "wrote-body-data", callback: (($obj: ServerMessage, chunk_size: number) => void)): number
    connect_after(sigName: "wrote-body-data", callback: (($obj: ServerMessage, chunk_size: number) => void)): number
    emit(sigName: "wrote-body-data", chunk_size: number): void
    connect(sigName: "wrote-chunk", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "wrote-chunk", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "wrote-chunk"): void
    connect(sigName: "wrote-headers", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "wrote-headers", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "wrote-headers"): void
    connect(sigName: "wrote-informational", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "wrote-informational", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "wrote-informational"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServerMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServerMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServerMessage_ConstructProps)
    _init (config?: ServerMessage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    accept_language?: string
    accept_language_auto?: boolean
    idle_timeout?: number
    local_address?: Gio.InetSocketAddress
    max_conns?: number
    max_conns_per_host?: number
    proxy_resolver?: Gio.ProxyResolver
    remote_connectable?: Gio.SocketConnectable
    timeout?: number
    tls_database?: Gio.TlsDatabase
    tls_interaction?: Gio.TlsInteraction
    user_agent?: string
}
export class Session {
    /* Properties of Soup-3.0.Soup.Session */
    accept_language: string
    accept_language_auto: boolean
    idle_timeout: number
    proxy_resolver: Gio.ProxyResolver
    timeout: number
    tls_database: Gio.TlsDatabase
    tls_interaction: Gio.TlsInteraction
    user_agent: string
    /* Fields of Soup-3.0.Soup.Session */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Session */
    abort(): void
    add_feature(feature: SessionFeature): void
    add_feature_by_type(feature_type: GObject.Type): void
    get_accept_language(): string | null
    get_accept_language_auto(): boolean
    get_async_result_message(result: Gio.AsyncResult): Message | null
    get_feature(feature_type: GObject.Type): SessionFeature | null
    get_feature_for_message(feature_type: GObject.Type, msg: Message): SessionFeature | null
    get_idle_timeout(): number
    get_local_address(): Gio.InetSocketAddress | null
    get_max_conns(): number
    get_max_conns_per_host(): number
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_remote_connectable(): Gio.SocketConnectable | null
    get_timeout(): number
    get_tls_database(): Gio.TlsDatabase | null
    get_tls_interaction(): Gio.TlsInteraction | null
    get_user_agent(): string | null
    has_feature(feature_type: GObject.Type): boolean
    preconnect_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    preconnect_finish(result: Gio.AsyncResult): boolean
    remove_feature(feature: SessionFeature): void
    remove_feature_by_type(feature_type: GObject.Type): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    send_and_read(msg: Message, cancellable?: Gio.Cancellable | null): GLib.Bytes
    send_and_read_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_and_read_finish(result: Gio.AsyncResult): GLib.Bytes
    send_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    set_accept_language(accept_language: string): void
    set_accept_language_auto(accept_language_auto: boolean): void
    set_idle_timeout(timeout: number): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_timeout(timeout: number): void
    set_tls_database(tls_database?: Gio.TlsDatabase | null): void
    set_tls_interaction(tls_interaction?: Gio.TlsInteraction | null): void
    set_user_agent(user_agent: string): void
    websocket_connect_async(msg: Message, origin: string | null, protocols: string[] | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection
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
    /* Virtual methods of Soup-3.0.Soup.Session */
    vfunc_request_queued(msg: Message): void
    vfunc_request_unqueued(msg: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.Session */
    connect(sigName: "request-queued", callback: (($obj: Session, msg: Message) => void)): number
    connect_after(sigName: "request-queued", callback: (($obj: Session, msg: Message) => void)): number
    emit(sigName: "request-queued", msg: Message): void
    connect(sigName: "request-unqueued", callback: (($obj: Session, msg: Message) => void)): number
    connect_after(sigName: "request-unqueued", callback: (($obj: Session, msg: Message) => void)): number
    emit(sigName: "request-unqueued", msg: Message): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-language", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-language-auto", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle-timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-database", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
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
export interface WebsocketConnection_ConstructProps extends GObject.Object_ConstructProps {
    connection_type?: WebsocketConnectionType
    extensions?: object
    io_stream?: Gio.IOStream
    keepalive_interval?: number
    max_incoming_payload_size?: number
    origin?: string
    protocol?: string
    uri?: GLib.Uri
}
export class WebsocketConnection {
    /* Properties of Soup-3.0.Soup.WebsocketConnection */
    keepalive_interval: number
    max_incoming_payload_size: number
    readonly state: WebsocketState
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.WebsocketConnection */
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
    get_uri(): GLib.Uri
    send_binary(data: Uint8Array[] | null): void
    send_message(type: WebsocketDataType, message: GLib.Bytes): void
    send_text(text: string): void
    set_keepalive_interval(interval: number): void
    set_max_incoming_payload_size(max_incoming_payload_size: number): void
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
    /* Signals of Soup-3.0.Soup.WebsocketConnection */
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
    /* Signals of GObject-2.0.GObject.Object */
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
    static new(stream: Gio.IOStream, uri: GLib.Uri, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]): WebsocketConnection
    static $gtype: GObject.Type
}
export interface WebsocketExtension_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebsocketExtension {
    /* Fields of Soup-3.0.Soup.WebsocketExtension */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.WebsocketExtension */
    configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    get_request_params(): string | null
    get_response_params(): string | null
    process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
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
    /* Virtual methods of Soup-3.0.Soup.WebsocketExtension */
    vfunc_configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    vfunc_get_request_params(): string | null
    vfunc_get_response_params(): string | null
    vfunc_process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    vfunc_process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Fields of Soup-3.0.Soup.WebsocketExtension */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.WebsocketExtension */
    configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    get_request_params(): string | null
    get_response_params(): string | null
    process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
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
    /* Virtual methods of Soup-3.0.Soup.WebsocketExtension */
    vfunc_configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    vfunc_get_request_params(): string | null
    vfunc_get_response_params(): string | null
    vfunc_process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    vfunc_process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of GObject-2.0.GObject.Object */
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
export abstract class AuthClass {
    /* Fields of Soup-3.0.Soup.AuthClass */
    parent_class: GObject.ObjectClass
    scheme_name: string
    strength: number
    update: (auth: Auth, msg: Message, auth_header: GLib.HashTable) => boolean
    get_protection_space: (auth: Auth, source_uri: GLib.Uri) => string[]
    authenticate: (auth: Auth, username: string, password: string) => void
    is_authenticated: (auth: Auth) => boolean
    get_authorization: (auth: Auth, msg: Message) => string
    is_ready: (auth: Auth, msg: Message) => boolean
    can_authenticate: (auth: Auth) => boolean
    padding: object[]
    static name: string
}
export abstract class AuthDomainBasicClass {
    /* Fields of Soup-3.0.Soup.AuthDomainBasicClass */
    parent_class: AuthDomainClass
    static name: string
}
export abstract class AuthDomainClass {
    /* Fields of Soup-3.0.Soup.AuthDomainClass */
    parent_class: GObject.ObjectClass
    accepts: (domain: AuthDomain, msg: ServerMessage, header: string) => string
    challenge: (domain: AuthDomain, msg: ServerMessage) => string
    check_password: (domain: AuthDomain, msg: ServerMessage, username: string, password: string) => boolean
    padding: object[]
    static name: string
}
export abstract class AuthDomainDigestClass {
    /* Fields of Soup-3.0.Soup.AuthDomainDigestClass */
    parent_class: AuthDomainClass
    static name: string
}
export abstract class AuthManagerClass {
    /* Fields of Soup-3.0.Soup.AuthManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CacheClass {
    /* Fields of Soup-3.0.Soup.CacheClass */
    parent_class: GObject.ObjectClass
    get_cacheability: (cache: Cache, msg: Message) => Cacheability
    padding: object[]
    static name: string
}
export class ClientMessageIO {
    static name: string
}
export class Connection {
    static name: string
}
export abstract class ContentDecoderClass {
    /* Fields of Soup-3.0.Soup.ContentDecoderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ContentSnifferClass {
    /* Fields of Soup-3.0.Soup.ContentSnifferClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Cookie {
    /* Methods of Soup-3.0.Soup.Cookie */
    applies_to_uri(uri: GLib.Uri): boolean
    copy(): Cookie
    domain_matches(host: string): boolean
    equal(cookie2: Cookie): boolean
    free(): void
    get_domain(): string
    get_expires(): GLib.DateTime | null
    get_http_only(): boolean
    get_name(): string
    get_path(): string
    get_same_site_policy(): SameSitePolicy
    get_secure(): boolean
    get_value(): string
    set_domain(domain: string): void
    set_expires(expires: GLib.DateTime): void
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
    static parse(header: string, origin?: GLib.Uri | null): Cookie | null
}
export abstract class CookieJarClass {
    /* Fields of Soup-3.0.Soup.CookieJarClass */
    parent_class: GObject.ObjectClass
    save: (jar: CookieJar) => void
    is_persistent: (jar: CookieJar) => boolean
    changed: (jar: CookieJar, old_cookie: Cookie, new_cookie: Cookie) => void
    padding: object[]
    static name: string
}
export abstract class CookieJarDBClass {
    /* Fields of Soup-3.0.Soup.CookieJarDBClass */
    parent_class: CookieJarClass
    static name: string
}
export abstract class CookieJarTextClass {
    /* Fields of Soup-3.0.Soup.CookieJarTextClass */
    parent_class: CookieJarClass
    static name: string
}
export abstract class HSTSEnforcerClass {
    /* Fields of Soup-3.0.Soup.HSTSEnforcerClass */
    parent_class: GObject.ObjectClass
    is_persistent: (hsts_enforcer: HSTSEnforcer) => boolean
    has_valid_policy: (hsts_enforcer: HSTSEnforcer, domain: string) => boolean
    changed: (enforcer: HSTSEnforcer, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void
    static name: string
}
export abstract class HSTSEnforcerDBClass {
    /* Fields of Soup-3.0.Soup.HSTSEnforcerDBClass */
    parent_class: HSTSEnforcerClass
    static name: string
}
export class HSTSPolicy {
    /* Methods of Soup-3.0.Soup.HSTSPolicy */
    copy(): HSTSPolicy
    equal(policy2: HSTSPolicy): boolean
    free(): void
    get_domain(): string
    get_expires(): GLib.DateTime
    get_max_age(): number
    includes_subdomains(): boolean
    is_expired(): boolean
    is_session_policy(): boolean
    static name: string
    static new(domain: string, max_age: number, include_subdomains: boolean): HSTSPolicy
    constructor(domain: string, max_age: number, include_subdomains: boolean)
    /* Static methods and pseudo-constructors */
    static new(domain: string, max_age: number, include_subdomains: boolean): HSTSPolicy
    static new_from_response(msg: Message): HSTSPolicy
    static new_full(domain: string, max_age: number, expires: GLib.DateTime, include_subdomains: boolean): HSTSPolicy
    static new_session_policy(domain: string, include_subdomains: boolean): HSTSPolicy
}
export abstract class LoggerClass {
    /* Fields of Soup-3.0.Soup.LoggerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MessageBody {
    /* Fields of Soup-3.0.Soup.MessageBody */
    data: Uint8Array[]
    length: number
    /* Methods of Soup-3.0.Soup.MessageBody */
    append_bytes(buffer: GLib.Bytes): void
    append(data: Uint8Array[]): void
    complete(): void
    flatten(): GLib.Bytes
    get_accumulate(): boolean
    get_chunk(offset: number): GLib.Bytes | null
    got_chunk(chunk: GLib.Bytes): void
    ref(): MessageBody
    set_accumulate(accumulate: boolean): void
    truncate(): void
    unref(): void
    wrote_chunk(chunk: GLib.Bytes): void
    static name: string
    static new(): MessageBody
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageBody
}
export abstract class MessageClass {
    /* Fields of Soup-3.0.Soup.MessageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MessageHeaders {
    /* Methods of Soup-3.0.Soup.MessageHeaders */
    append(name: string, value: string): void
    clean_connection_headers(): void
    clear(): void
    foreach(func: MessageHeadersForeachFunc): void
    free_ranges(ranges: Range): void
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
    ref(): MessageHeaders
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
    unref(): void
    static name: string
    static new(type: MessageHeadersType): MessageHeaders
    constructor(type: MessageHeadersType)
    /* Static methods and pseudo-constructors */
    static new(type: MessageHeadersType): MessageHeaders
}
export class MessageHeadersIter {
    /* Methods of Soup-3.0.Soup.MessageHeadersIter */
    next(): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    static name: string
    /* Static methods and pseudo-constructors */
    static init(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
}
export class MessageMetrics {
    /* Methods of Soup-3.0.Soup.MessageMetrics */
    copy(): MessageMetrics
    free(): void
    get_connect_end(): number
    get_connect_start(): number
    get_dns_end(): number
    get_dns_start(): number
    get_fetch_start(): number
    get_request_body_bytes_sent(): number
    get_request_body_size(): number
    get_request_header_bytes_sent(): number
    get_request_start(): number
    get_response_body_bytes_received(): number
    get_response_body_size(): number
    get_response_end(): number
    get_response_header_bytes_received(): number
    get_response_start(): number
    get_tls_start(): number
    static name: string
}
export class MessageQueue {
    static name: string
}
export class MessageQueueItem {
    static name: string
}
export class Multipart {
    /* Methods of Soup-3.0.Soup.Multipart */
    append_form_file(control_name: string, filename: string, content_type: string, body: GLib.Bytes): void
    append_form_string(control_name: string, data: string): void
    append_part(headers: MessageHeaders, body: GLib.Bytes): void
    free(): void
    get_length(): number
    get_part(part: number): [ /* returnType */ boolean, /* headers */ MessageHeaders, /* body */ GLib.Bytes ]
    to_message(dest_headers: MessageHeaders): /* dest_body */ GLib.Bytes
    static name: string
    static new(mime_type: string): Multipart
    constructor(mime_type: string)
    /* Static methods and pseudo-constructors */
    static new(mime_type: string): Multipart
    static new_from_message(headers: MessageHeaders, body: GLib.Bytes): Multipart
}
export abstract class MultipartInputStreamClass {
    /* Fields of Soup-3.0.Soup.MultipartInputStreamClass */
    parent_class: Gio.FilterInputStreamClass
    static name: string
}
export class Range {
    /* Fields of Soup-3.0.Soup.Range */
    start: number
    end: number
    static name: string
}
export abstract class ServerClass {
    /* Fields of Soup-3.0.Soup.ServerClass */
    parent_class: GObject.ObjectClass
    request_started: (server: Server, msg: ServerMessage) => void
    request_read: (server: Server, msg: ServerMessage) => void
    request_finished: (server: Server, msg: ServerMessage) => void
    request_aborted: (server: Server, msg: ServerMessage) => void
    padding: object[]
    static name: string
}
export abstract class ServerMessageClass {
    /* Fields of Soup-3.0.Soup.ServerMessageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SessionClass {
    /* Fields of Soup-3.0.Soup.SessionClass */
    parent_class: GObject.ObjectClass
    request_queued: (session: Session, msg: Message) => void
    request_unqueued: (session: Session, msg: Message) => void
    static name: string
}
export abstract class SessionFeatureInterface {
    static name: string
}
export class Socket {
    static name: string
}
export abstract class WebsocketConnectionClass {
    /* Fields of Soup-3.0.Soup.WebsocketConnectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class WebsocketExtensionClass {
    /* Fields of Soup-3.0.Soup.WebsocketExtensionClass */
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
    /* Fields of Soup-3.0.Soup.WebsocketExtensionDeflateClass */
    parent_class: WebsocketExtensionClass
    static name: string
}
export abstract class WebsocketExtensionManagerClass {
    /* Fields of Soup-3.0.Soup.WebsocketExtensionManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}