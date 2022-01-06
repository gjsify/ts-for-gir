/**
 * Soup-3.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Soup {

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
export function checkVersion(major: number, minor: number, micro: number): boolean
export function cookieParse(header: string, origin?: GLib.Uri | null): Cookie | null
export function cookiesFromRequest(msg: Message): Cookie[]
export function cookiesFromResponse(msg: Message): Cookie[]
export function cookiesToCookieHeader(cookies: Cookie[]): string
export function cookiesToRequest(cookies: Cookie[], msg: Message): void
export function cookiesToResponse(cookies: Cookie[], msg: Message): void
export function dateTimeNewFromHttpString(dateString: string): GLib.DateTime | null
export function dateTimeToString(date: GLib.DateTime, format: DateFormat): string
export function formDecode(encodedForm: string): GLib.HashTable
export function formDecodeMultipart(multipart: Multipart, fileControlName?: string | null): { returnType: GLib.HashTable | null, filename: string | null, contentType: string | null, file: any | null }
export function formEncodeDatalist(formDataSet: GLib.Data): string
export function formEncodeHash(formDataSet: GLib.HashTable): string
export function getMajorVersion(): number
export function getMicroVersion(): number
export function getMinorVersion(): number
export function headerContains(header: string, token: string): boolean
export function headerFreeParamList(paramList: GLib.HashTable): void
export function headerGStringAppendParam(string: GLib.String, name: string, value: string): void
export function headerGStringAppendParamQuoted(string: GLib.String, name: string, value: string): void
export function headerParseList(header: string): string[]
export function headerParseParamList(header: string): GLib.HashTable
export function headerParseParamListStrict(header: string): GLib.HashTable | null
export function headerParseQualityList(header: string): { returnType: string[], unacceptable: string[] | null }
export function headerParseSemiParamList(header: string): GLib.HashTable
export function headerParseSemiParamListStrict(header: string): GLib.HashTable | null
export function headersParse(str: string, len: number, dest: MessageHeaders): boolean
export function headersParseRequest(str: string, len: number, reqHeaders: MessageHeaders): { returnType: number, reqMethod: string | null, reqPath: string | null, ver: HTTPVersion | null }
export function headersParseResponse(str: string, len: number, headers: MessageHeaders): { returnType: boolean, ver: HTTPVersion | null, statusCode: number | null, reasonPhrase: string | null }
export function headersParseStatusLine(statusLine: string): { returnType: boolean, ver: HTTPVersion | null, statusCode: number | null, reasonPhrase: string | null }
export function messageHeadersIterInit(hdrs: MessageHeaders): { iter: MessageHeadersIter }
export function sessionErrorQuark(): GLib.Quark
export function statusGetPhrase(statusCode: number): string
export function tldDomainIsPublicSuffix(domain: string): boolean
export function tldErrorQuark(): GLib.Quark
export function tldGetBaseDomain(hostname: string): string
export function uriDecodeDataUri(uri: string): { returnType: any, contentType: string | null }
export function uriEqual(uri1: GLib.Uri, uri2: GLib.Uri): boolean
export function websocketClientPrepareHandshake(msg: Message, origin?: string | null, protocols?: string[] | null, supportedExtensions?: GObject.TypeClass[] | null): void
export function websocketClientVerifyHandshake(msg: Message, supportedExtensions?: GObject.TypeClass[] | null): { returnType: boolean, acceptedExtensions: WebsocketExtension[] | null }
export function websocketErrorQuark(): GLib.Quark
export function websocketServerCheckHandshake(msg: ServerMessage, origin?: string | null, protocols?: string[] | null, supportedExtensions?: GObject.TypeClass[] | null): boolean
export function websocketServerProcessHandshake(msg: ServerMessage, expectedOrigin?: string | null, protocols?: string[] | null, supportedExtensions?: GObject.TypeClass[] | null): { returnType: boolean, acceptedExtensions: WebsocketExtension[] | null }
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
    isForProxy?: boolean
    realm?: string
}
export class Auth {
    /* Properties of Soup-3.0.Soup.Auth */
    authority: string
    readonly isAuthenticated: boolean
    readonly isCancelled: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of Soup-3.0.Soup.Auth */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    cancel(): void
    getAuthority(): string
    getAuthorization(msg: Message): string
    getInfo(): string
    getProtectionSpace(sourceUri: GLib.Uri): string[]
    getRealm(): string
    getSchemeName(): string
    isReady(msg: Message): boolean
    update(msg: Message, authHeader: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-cancelled", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Soup-3.0.Soup.Auth */
    authority: string
    readonly isAuthenticated: boolean
    readonly isCancelled: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of Soup-3.0.Soup.Auth */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    cancel(): void
    getAuthority(): string
    getAuthorization(msg: Message): string
    getInfo(): string
    getProtectionSpace(sourceUri: GLib.Uri): string[]
    getRealm(): string
    getSchemeName(): string
    isReady(msg: Message): boolean
    update(msg: Message, authHeader: string): boolean
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
    connect(sigName: "notify", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Soup-3.0.Soup.Auth */
    authority: string
    readonly isAuthenticated: boolean
    readonly isCancelled: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of Soup-3.0.Soup.Auth */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    cancel(): void
    getAuthority(): string
    getAuthorization(msg: Message): string
    getInfo(): string
    getProtectionSpace(sourceUri: GLib.Uri): string[]
    getRealm(): string
    getSchemeName(): string
    isReady(msg: Message): boolean
    update(msg: Message, authHeader: string): boolean
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
    connect(sigName: "notify", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    filter?: AuthDomainFilter
    filterData?: object
    genericAuthCallback?: AuthDomainGenericAuthCallback
    genericAuthData?: object
    proxy?: boolean
    realm?: string
}
export class AuthDomain {
    /* Properties of Soup-3.0.Soup.AuthDomain */
    filter: AuthDomainFilter
    filterData: object
    genericAuthCallback: AuthDomainGenericAuthCallback
    genericAuthData: object
    /* Fields of Soup-3.0.Soup.AuthDomain */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthDomain */
    accepts(msg: ServerMessage): string | null
    addPath(path: string): void
    challenge(msg: ServerMessage): void
    checkPassword(msg: ServerMessage, username: string, password: string): boolean
    covers(msg: ServerMessage): boolean
    getRealm(): string
    removePath(path: string): void
    setFilter(filter: AuthDomainFilter): void
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void
    tryGenericAuthCallback(msg: ServerMessage, username: string): boolean
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
    connect(sigName: "notify", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of Soup-3.0.Soup.AuthDomainBasic */
    authCallback: AuthDomainBasicAuthCallback
    authData: object
    /* Properties of Soup-3.0.Soup.AuthDomain */
    filter: AuthDomainFilter
    filterData: object
    genericAuthCallback: AuthDomainGenericAuthCallback
    genericAuthData: object
    /* Fields of Soup-3.0.Soup.AuthDomain */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthDomainBasic */
    setAuthCallback(callback: AuthDomainBasicAuthCallback): void
    /* Methods of Soup-3.0.Soup.AuthDomain */
    accepts(msg: ServerMessage): string | null
    addPath(path: string): void
    challenge(msg: ServerMessage): void
    checkPassword(msg: ServerMessage, username: string, password: string): boolean
    covers(msg: ServerMessage): boolean
    getRealm(): string
    removePath(path: string): void
    setFilter(filter: AuthDomainFilter): void
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void
    tryGenericAuthCallback(msg: ServerMessage, username: string): boolean
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
    connect(sigName: "notify", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of Soup-3.0.Soup.AuthDomainDigest */
    authCallback: AuthDomainDigestAuthCallback
    authData: object
    /* Properties of Soup-3.0.Soup.AuthDomain */
    filter: AuthDomainFilter
    filterData: object
    genericAuthCallback: AuthDomainGenericAuthCallback
    genericAuthData: object
    /* Fields of Soup-3.0.Soup.AuthDomain */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthDomainDigest */
    setAuthCallback(callback: AuthDomainDigestAuthCallback): void
    /* Methods of Soup-3.0.Soup.AuthDomain */
    accepts(msg: ServerMessage): string | null
    addPath(path: string): void
    challenge(msg: ServerMessage): void
    checkPassword(msg: ServerMessage, username: string, password: string): boolean
    covers(msg: ServerMessage): boolean
    getRealm(): string
    removePath(path: string): void
    setFilter(filter: AuthDomainFilter): void
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void
    tryGenericAuthCallback(msg: ServerMessage, username: string): boolean
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
    connect(sigName: "notify", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthManager */
    clearCachedCredentials(): void
    useAuth(uri: GLib.Uri, auth: Auth): void
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
    /* Signals of Soup-3.0.Soup.AuthManager */
    connect(sigName: "authenticate", callback: (($obj: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void)): number
    on(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AuthManager_ConstructProps)
    _init (config?: AuthManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AuthNTLM_ConstructProps extends Auth_ConstructProps {
}
export class AuthNTLM {
    /* Properties of Soup-3.0.Soup.Auth */
    authority: string
    readonly isAuthenticated: boolean
    readonly isCancelled: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of Soup-3.0.Soup.Auth */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    cancel(): void
    getAuthority(): string
    getAuthorization(msg: Message): string
    getInfo(): string
    getProtectionSpace(sourceUri: GLib.Uri): string[]
    getRealm(): string
    getSchemeName(): string
    isReady(msg: Message): boolean
    update(msg: Message, authHeader: string): boolean
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
    connect(sigName: "notify", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Soup-3.0.Soup.Auth */
    authority: string
    readonly isAuthenticated: boolean
    readonly isCancelled: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of Soup-3.0.Soup.Auth */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    cancel(): void
    getAuthority(): string
    getAuthorization(msg: Message): string
    getInfo(): string
    getProtectionSpace(sourceUri: GLib.Uri): string[]
    getRealm(): string
    getSchemeName(): string
    isReady(msg: Message): boolean
    update(msg: Message, authHeader: string): boolean
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
    connect(sigName: "notify", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of Soup-3.0.Soup.Cache */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Cache */
    clear(): void
    dump(): void
    flush(): void
    getMaxSize(): number
    load(): void
    setMaxSize(maxSize: number): void
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
    connect(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Cache_ConstructProps)
    _init (config?: Cache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cacheDir: string | null, cacheType: CacheType): Cache
    static $gtype: GObject.Type
}
export interface ContentDecoder_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentDecoder {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: ContentDecoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ContentDecoder_ConstructProps)
    _init (config?: ContentDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ContentSniffer_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentSniffer {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.ContentSniffer */
    sniff(msg: Message, buffer: any): { returnType: string, params: GLib.HashTable | null }
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
    connect(sigName: "notify", callback: (($obj: ContentSniffer, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Soup-3.0.Soup.CookieJar */
    acceptPolicy: CookieJarAcceptPolicy
    /* Fields of Soup-3.0.Soup.CookieJar */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.CookieJar */
    addCookie(cookie: Cookie): void
    addCookieFull(cookie: Cookie, uri?: GLib.Uri | null, firstParty?: GLib.Uri | null): void
    addCookieWithFirstParty(firstParty: GLib.Uri, cookie: Cookie): void
    allCookies(): Cookie[]
    deleteCookie(cookie: Cookie): void
    getAcceptPolicy(): CookieJarAcceptPolicy
    getCookieList(uri: GLib.Uri, forHttp: boolean): Cookie[]
    getCookieListWithSameSiteInfo(uri: GLib.Uri, topLevel: GLib.Uri | null, siteForCookies: GLib.Uri | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    getCookies(uri: GLib.Uri, forHttp: boolean): string | null
    isPersistent(): boolean
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    setCookie(uri: GLib.Uri, cookie: string): void
    setCookieWithFirstParty(uri: GLib.Uri, firstParty: GLib.Uri, cookie: string): void
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
    /* Signals of Soup-3.0.Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJar, oldCookie: Cookie, newCookie: Cookie) => void)): number
    on(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldCookie: Cookie, newCookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of Soup-3.0.Soup.CookieJar */
    acceptPolicy: CookieJarAcceptPolicy
    /* Fields of Soup-3.0.Soup.CookieJar */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.CookieJar */
    addCookie(cookie: Cookie): void
    addCookieFull(cookie: Cookie, uri?: GLib.Uri | null, firstParty?: GLib.Uri | null): void
    addCookieWithFirstParty(firstParty: GLib.Uri, cookie: Cookie): void
    allCookies(): Cookie[]
    deleteCookie(cookie: Cookie): void
    getAcceptPolicy(): CookieJarAcceptPolicy
    getCookieList(uri: GLib.Uri, forHttp: boolean): Cookie[]
    getCookieListWithSameSiteInfo(uri: GLib.Uri, topLevel: GLib.Uri | null, siteForCookies: GLib.Uri | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    getCookies(uri: GLib.Uri, forHttp: boolean): string | null
    isPersistent(): boolean
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    setCookie(uri: GLib.Uri, cookie: string): void
    setCookieWithFirstParty(uri: GLib.Uri, firstParty: GLib.Uri, cookie: string): void
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
    /* Signals of Soup-3.0.Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarDB, oldCookie: Cookie, newCookie: Cookie) => void)): number
    on(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldCookie: Cookie, newCookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of Soup-3.0.Soup.CookieJar */
    acceptPolicy: CookieJarAcceptPolicy
    /* Fields of Soup-3.0.Soup.CookieJar */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.CookieJar */
    addCookie(cookie: Cookie): void
    addCookieFull(cookie: Cookie, uri?: GLib.Uri | null, firstParty?: GLib.Uri | null): void
    addCookieWithFirstParty(firstParty: GLib.Uri, cookie: Cookie): void
    allCookies(): Cookie[]
    deleteCookie(cookie: Cookie): void
    getAcceptPolicy(): CookieJarAcceptPolicy
    getCookieList(uri: GLib.Uri, forHttp: boolean): Cookie[]
    getCookieListWithSameSiteInfo(uri: GLib.Uri, topLevel: GLib.Uri | null, siteForCookies: GLib.Uri | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    getCookies(uri: GLib.Uri, forHttp: boolean): string | null
    isPersistent(): boolean
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    setCookie(uri: GLib.Uri, cookie: string): void
    setCookieWithFirstParty(uri: GLib.Uri, firstParty: GLib.Uri, cookie: string): void
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
    /* Signals of Soup-3.0.Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarText, oldCookie: Cookie, newCookie: Cookie) => void)): number
    on(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldCookie: Cookie, newCookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of Soup-3.0.Soup.HSTSEnforcer */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.HSTSEnforcer */
    getDomains(sessionPolicies: boolean): string[]
    getPolicies(sessionPolicies: boolean): HSTSPolicy[]
    hasValidPolicy(domain: string): boolean
    isPersistent(): boolean
    setPolicy(policy: HSTSPolicy): void
    setSessionPolicy(domain: string, includeSubdomains: boolean): void
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
    /* Signals of Soup-3.0.Soup.HSTSEnforcer */
    connect(sigName: "changed", callback: (($obj: HSTSEnforcer, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void)): number
    on(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HSTSEnforcer, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.HSTSEnforcer */
    getDomains(sessionPolicies: boolean): string[]
    getPolicies(sessionPolicies: boolean): HSTSPolicy[]
    hasValidPolicy(domain: string): boolean
    isPersistent(): boolean
    setPolicy(policy: HSTSPolicy): void
    setSessionPolicy(domain: string, includeSubdomains: boolean): void
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
    /* Signals of Soup-3.0.Soup.HSTSEnforcer */
    connect(sigName: "changed", callback: (($obj: HSTSEnforcerDB, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void)): number
    on(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HSTSEnforcerDB, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Soup-3.0.Soup.Logger */
    level: LoggerLogLevel
    maxBodySize: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Logger */
    getMaxBodySize(): number
    setMaxBodySize(maxBodySize: number): void
    setPrinter(printer: LoggerPrinter): void
    setRequestFilter(requestFilter: LoggerFilter): void
    setResponseFilter(responseFilter: LoggerFilter): void
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
    connect(sigName: "notify", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    static new(level: LoggerLogLevel): Logger
    static $gtype: GObject.Type
}
export interface Message_ConstructProps extends GObject.Object_ConstructProps {
    firstParty?: GLib.Uri
    flags?: MessageFlags
    isOptionsPing?: boolean
    isTopLevelNavigation?: boolean
    method?: string
    priority?: MessagePriority
    siteForCookies?: GLib.Uri
    uri?: GLib.Uri
}
export class Message {
    /* Properties of Soup-3.0.Soup.Message */
    firstParty: GLib.Uri
    flags: MessageFlags
    readonly httpVersion: HTTPVersion
    isOptionsPing: boolean
    isTopLevelNavigation: boolean
    method: string
    priority: MessagePriority
    readonly reasonPhrase: string
    readonly remoteAddress: Gio.SocketAddress
    readonly requestHeaders: MessageHeaders
    readonly responseHeaders: MessageHeaders
    siteForCookies: GLib.Uri
    readonly statusCode: number
    readonly tlsCiphersuiteName: string
    readonly tlsPeerCertificate: Gio.TlsCertificate
    readonly tlsPeerCertificateErrors: Gio.TlsCertificateFlags
    readonly tlsProtocolVersion: Gio.TlsProtocolVersion
    uri: GLib.Uri
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Message */
    addFlags(flags: MessageFlags): void
    disableFeature(featureType: GObject.Type): void
    getConnectionId(): number
    getFirstParty(): GLib.Uri
    getFlags(): MessageFlags
    getHttpVersion(): HTTPVersion
    getIsOptionsPing(): boolean
    getIsTopLevelNavigation(): boolean
    getMethod(): string
    getMetrics(): MessageMetrics | null
    getPriority(): MessagePriority
    getReasonPhrase(): string
    getRemoteAddress(): Gio.SocketAddress | null
    getRequestHeaders(): MessageHeaders
    getResponseHeaders(): MessageHeaders
    getSiteForCookies(): GLib.Uri
    getStatus(): Status
    getTlsCiphersuiteName(): string
    getTlsPeerCertificate(): Gio.TlsCertificate | null
    getTlsPeerCertificateErrors(): Gio.TlsCertificateFlags
    getTlsProtocolVersion(): Gio.TlsProtocolVersion
    getUri(): GLib.Uri
    isFeatureDisabled(featureType: GObject.Type): boolean
    isKeepalive(): boolean
    queryFlags(flags: MessageFlags): boolean
    removeFlags(flags: MessageFlags): void
    setFirstParty(firstParty: GLib.Uri): void
    setFlags(flags: MessageFlags): void
    setIsOptionsPing(isOptionsPing: boolean): void
    setIsTopLevelNavigation(isTopLevelNavigation: boolean): void
    setMethod(method: string): void
    setPriority(priority: MessagePriority): void
    setRequestBody(contentType: string | null, stream: Gio.InputStream | null, contentLength: number): void
    setRequestBodyFromBytes(contentType?: string | null, bytes?: any | null): void
    setSiteForCookies(siteForCookies?: GLib.Uri | null): void
    setTlsClientCertificate(certificate?: Gio.TlsCertificate | null): void
    setUri(uri: GLib.Uri): void
    tlsClientCertificatePasswordRequestComplete(): void
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
    /* Signals of Soup-3.0.Soup.Message */
    connect(sigName: "accept-certificate", callback: (($obj: Message, tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags) => boolean)): number
    on(sigName: "accept-certificate", callback: (tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "accept-certificate", tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags): void
    connect(sigName: "authenticate", callback: (($obj: Message, auth: Auth, retrying: boolean) => boolean)): number
    on(sigName: "authenticate", callback: (auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (auth: Auth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", auth: Auth, retrying: boolean): void
    connect(sigName: "content-sniffed", callback: (($obj: Message, type: string, params: GLib.HashTable) => void)): number
    on(sigName: "content-sniffed", callback: (type: string, params: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-sniffed", callback: (type: string, params: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-sniffed", callback: (type: string, params: GLib.HashTable) => void): NodeJS.EventEmitter
    emit(sigName: "content-sniffed", type: string, params: GLib.HashTable): void
    connect(sigName: "finished", callback: (($obj: Message) => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "got-body", callback: (($obj: Message) => void)): number
    on(sigName: "got-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-body", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "got-body"): void
    connect(sigName: "got-headers", callback: (($obj: Message) => void)): number
    on(sigName: "got-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-headers", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "got-headers"): void
    connect(sigName: "got-informational", callback: (($obj: Message) => void)): number
    on(sigName: "got-informational", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-informational", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-informational", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "got-informational"): void
    connect(sigName: "hsts-enforced", callback: (($obj: Message) => void)): number
    on(sigName: "hsts-enforced", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hsts-enforced", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hsts-enforced", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hsts-enforced"): void
    connect(sigName: "network-event", callback: (($obj: Message, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    on(sigName: "network-event", callback: (event: Gio.SocketClientEvent, connection: Gio.IOStream) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "network-event", callback: (event: Gio.SocketClientEvent, connection: Gio.IOStream) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "network-event", callback: (event: Gio.SocketClientEvent, connection: Gio.IOStream) => void): NodeJS.EventEmitter
    emit(sigName: "network-event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    connect(sigName: "request-certificate", callback: (($obj: Message, tlsConnection: Gio.TlsClientConnection) => boolean)): number
    on(sigName: "request-certificate", callback: (tlsConnection: Gio.TlsClientConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-certificate", callback: (tlsConnection: Gio.TlsClientConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-certificate", callback: (tlsConnection: Gio.TlsClientConnection) => void): NodeJS.EventEmitter
    emit(sigName: "request-certificate", tlsConnection: Gio.TlsClientConnection): void
    connect(sigName: "request-certificate-password", callback: (($obj: Message, tlsPassword: Gio.TlsPassword) => boolean)): number
    on(sigName: "request-certificate-password", callback: (tlsPassword: Gio.TlsPassword) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-certificate-password", callback: (tlsPassword: Gio.TlsPassword) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-certificate-password", callback: (tlsPassword: Gio.TlsPassword) => void): NodeJS.EventEmitter
    emit(sigName: "request-certificate-password", tlsPassword: Gio.TlsPassword): void
    connect(sigName: "restarted", callback: (($obj: Message) => void)): number
    on(sigName: "restarted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restarted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restarted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restarted"): void
    connect(sigName: "starting", callback: (($obj: Message) => void)): number
    on(sigName: "starting", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "starting"): void
    connect(sigName: "wrote-body", callback: (($obj: Message) => void)): number
    on(sigName: "wrote-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-body", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "wrote-body"): void
    connect(sigName: "wrote-body-data", callback: (($obj: Message, chunkSize: number) => void)): number
    on(sigName: "wrote-body-data", callback: (chunkSize: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-body-data", callback: (chunkSize: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-body-data", callback: (chunkSize: number) => void): NodeJS.EventEmitter
    emit(sigName: "wrote-body-data", chunkSize: number): void
    connect(sigName: "wrote-headers", callback: (($obj: Message) => void)): number
    on(sigName: "wrote-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-headers", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "wrote-headers"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    connect(sigName: "notify::is-options-ping", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-options-ping", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-options-ping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-options-ping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-options-ping", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::remote-address", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-address", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::tls-ciphersuite-name", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-ciphersuite-name", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-peer-certificate", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-peer-certificate", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-peer-certificate-errors", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-peer-certificate-errors", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-protocol-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-protocol-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newFromEncodedForm(method: string, uriString: string, encodedForm: string): Message
    static newFromMultipart(uriString: string, multipart: Multipart): Message
    static newFromUri(method: string, uri: GLib.Uri): Message
    static newOptionsPing(baseUri: GLib.Uri): Message
    static $gtype: GObject.Type
}
export interface MultipartInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    message?: Message
}
export class MultipartInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    parentInstance: Gio.InputStream
    baseStream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.MultipartInputStream */
    getHeaders(): MessageHeaders | null
    nextPart(cancellable?: Gio.Cancellable | null): Gio.InputStream | null
    nextPartAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextPartFinish(result: Gio.AsyncResult): Gio.InputStream | null
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    getBaseStream(): Gio.InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    readAll(cancellable?: Gio.Cancellable | null): { returnType: boolean, buffer: any[], bytesRead: number }
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesRead: number }
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Gio-2.0.Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Gio.Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
export interface Server_ConstructProps extends GObject.Object_ConstructProps {
    rawPaths?: boolean
    serverHeader?: string
    tlsAuthMode?: Gio.TlsAuthenticationMode
    tlsCertificate?: Gio.TlsCertificate
    tlsDatabase?: Gio.TlsDatabase
}
export class Server {
    /* Properties of Soup-3.0.Soup.Server */
    serverHeader: string
    tlsAuthMode: Gio.TlsAuthenticationMode
    tlsCertificate: Gio.TlsCertificate
    tlsDatabase: Gio.TlsDatabase
    /* Fields of Soup-3.0.Soup.Server */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Server */
    acceptIostream(stream: Gio.IOStream, localAddr?: Gio.SocketAddress | null, remoteAddr?: Gio.SocketAddress | null): boolean
    addAuthDomain(authDomain: AuthDomain): void
    addEarlyHandler(path: string | null, callback: ServerCallback): void
    addHandler(path: string | null, callback: ServerCallback): void
    addWebsocketExtension(extensionType: GObject.Type): void
    addWebsocketHandler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback): void
    disconnect(): void
    getListeners(): Gio.Socket[]
    getTlsAuthMode(): Gio.TlsAuthenticationMode
    getTlsCertificate(): Gio.TlsCertificate | null
    getTlsDatabase(): Gio.TlsDatabase | null
    getUris(): GLib.Uri[]
    isHttps(): boolean
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean
    listenAll(port: number, options: ServerListenOptions): boolean
    listenLocal(port: number, options: ServerListenOptions): boolean
    listenSocket(socket: Gio.Socket, options: ServerListenOptions): boolean
    pauseMessage(msg: ServerMessage): void
    removeAuthDomain(authDomain: AuthDomain): void
    removeHandler(path: string): void
    removeWebsocketExtension(extensionType: GObject.Type): void
    setTlsAuthMode(mode: Gio.TlsAuthenticationMode): void
    setTlsCertificate(certificate: Gio.TlsCertificate): void
    setTlsDatabase(tlsDatabase: Gio.TlsDatabase): void
    unpauseMessage(msg: ServerMessage): void
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
    /* Signals of Soup-3.0.Soup.Server */
    connect(sigName: "request-aborted", callback: (($obj: Server, message: ServerMessage) => void)): number
    on(sigName: "request-aborted", callback: (message: ServerMessage) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-aborted", callback: (message: ServerMessage) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-aborted", callback: (message: ServerMessage) => void): NodeJS.EventEmitter
    emit(sigName: "request-aborted", message: ServerMessage): void
    connect(sigName: "request-finished", callback: (($obj: Server, message: ServerMessage) => void)): number
    on(sigName: "request-finished", callback: (message: ServerMessage) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-finished", callback: (message: ServerMessage) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-finished", callback: (message: ServerMessage) => void): NodeJS.EventEmitter
    emit(sigName: "request-finished", message: ServerMessage): void
    connect(sigName: "request-read", callback: (($obj: Server, message: ServerMessage) => void)): number
    on(sigName: "request-read", callback: (message: ServerMessage) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-read", callback: (message: ServerMessage) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-read", callback: (message: ServerMessage) => void): NodeJS.EventEmitter
    emit(sigName: "request-read", message: ServerMessage): void
    connect(sigName: "request-started", callback: (($obj: Server, message: ServerMessage) => void)): number
    on(sigName: "request-started", callback: (message: ServerMessage) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (message: ServerMessage) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (message: ServerMessage) => void): NodeJS.EventEmitter
    emit(sigName: "request-started", message: ServerMessage): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::server-header", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-header", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-auth-mode", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-auth-mode", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-auth-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-auth-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-auth-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-certificate", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-database", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface ServerMessage_ConstructProps extends GObject.Object_ConstructProps {
}
export class ServerMessage {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.ServerMessage */
    getHttpVersion(): HTTPVersion
    getLocalAddress(): Gio.SocketAddress | null
    getMethod(): string
    getReasonPhrase(): string
    getRemoteAddress(): Gio.SocketAddress | null
    getRemoteHost(): string | null
    getRequestBody(): MessageBody
    getRequestHeaders(): MessageHeaders
    getResponseBody(): MessageBody
    getResponseHeaders(): MessageHeaders
    getSocket(): Gio.Socket | null
    getStatus(): number
    getUri(): GLib.Uri
    isOptionsPing(): boolean
    setHttpVersion(version: HTTPVersion): void
    setRedirect(statusCode: number, redirectUri: string): void
    setResponse(contentType: string | null, respUse: MemoryUse, respBody: any[] | null): void
    setStatus(statusCode: number, reasonPhrase?: string | null): void
    stealConnection(): Gio.IOStream
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
    /* Signals of Soup-3.0.Soup.ServerMessage */
    connect(sigName: "accept-certificate", callback: (($obj: ServerMessage, tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags) => boolean)): number
    on(sigName: "accept-certificate", callback: (tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "accept-certificate", tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags): void
    connect(sigName: "disconnected", callback: (($obj: ServerMessage) => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    connect(sigName: "finished", callback: (($obj: ServerMessage) => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "got-body", callback: (($obj: ServerMessage) => void)): number
    on(sigName: "got-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-body", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "got-body"): void
    connect(sigName: "got-chunk", callback: (($obj: ServerMessage, chunk: any) => void)): number
    on(sigName: "got-chunk", callback: (chunk: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-chunk", callback: (chunk: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-chunk", callback: (chunk: any) => void): NodeJS.EventEmitter
    emit(sigName: "got-chunk", chunk: any): void
    connect(sigName: "got-headers", callback: (($obj: ServerMessage) => void)): number
    on(sigName: "got-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-headers", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "got-headers"): void
    connect(sigName: "wrote-body", callback: (($obj: ServerMessage) => void)): number
    on(sigName: "wrote-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-body", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "wrote-body"): void
    connect(sigName: "wrote-body-data", callback: (($obj: ServerMessage, chunkSize: number) => void)): number
    on(sigName: "wrote-body-data", callback: (chunkSize: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-body-data", callback: (chunkSize: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-body-data", callback: (chunkSize: number) => void): NodeJS.EventEmitter
    emit(sigName: "wrote-body-data", chunkSize: number): void
    connect(sigName: "wrote-chunk", callback: (($obj: ServerMessage) => void)): number
    on(sigName: "wrote-chunk", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-chunk", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-chunk", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "wrote-chunk"): void
    connect(sigName: "wrote-headers", callback: (($obj: ServerMessage) => void)): number
    on(sigName: "wrote-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-headers", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "wrote-headers"): void
    connect(sigName: "wrote-informational", callback: (($obj: ServerMessage) => void)): number
    on(sigName: "wrote-informational", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-informational", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-informational", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "wrote-informational"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServerMessage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ServerMessage_ConstructProps)
    _init (config?: ServerMessage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    acceptLanguage?: string
    acceptLanguageAuto?: boolean
    idleTimeout?: number
    localAddress?: Gio.InetSocketAddress
    maxConns?: number
    maxConnsPerHost?: number
    proxyResolver?: Gio.ProxyResolver
    remoteConnectable?: Gio.SocketConnectable
    timeout?: number
    tlsDatabase?: Gio.TlsDatabase
    tlsInteraction?: Gio.TlsInteraction
    userAgent?: string
}
export class Session {
    /* Properties of Soup-3.0.Soup.Session */
    acceptLanguage: string
    acceptLanguageAuto: boolean
    idleTimeout: number
    proxyResolver: Gio.ProxyResolver
    timeout: number
    tlsDatabase: Gio.TlsDatabase
    tlsInteraction: Gio.TlsInteraction
    userAgent: string
    /* Fields of Soup-3.0.Soup.Session */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Session */
    abort(): void
    addFeature(feature: SessionFeature): void
    addFeatureByType(featureType: GObject.Type): void
    getAcceptLanguage(): string | null
    getAcceptLanguageAuto(): boolean
    getAsyncResultMessage(result: Gio.AsyncResult): Message | null
    getFeature(featureType: GObject.Type): SessionFeature | null
    getFeatureForMessage(featureType: GObject.Type, msg: Message): SessionFeature | null
    getIdleTimeout(): number
    getLocalAddress(): Gio.InetSocketAddress | null
    getMaxConns(): number
    getMaxConnsPerHost(): number
    getProxyResolver(): Gio.ProxyResolver | null
    getRemoteConnectable(): Gio.SocketConnectable | null
    getTimeout(): number
    getTlsDatabase(): Gio.TlsDatabase | null
    getTlsInteraction(): Gio.TlsInteraction | null
    getUserAgent(): string | null
    hasFeature(featureType: GObject.Type): boolean
    preconnectAsync(msg: Message, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    preconnectFinish(result: Gio.AsyncResult): boolean
    removeFeature(feature: SessionFeature): void
    removeFeatureByType(featureType: GObject.Type): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAndRead(msg: Message, cancellable?: Gio.Cancellable | null): any
    sendAndReadAsync(msg: Message, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendAndReadFinish(result: Gio.AsyncResult): any
    sendAsync(msg: Message, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    setAcceptLanguage(acceptLanguage: string): void
    setAcceptLanguageAuto(acceptLanguageAuto: boolean): void
    setIdleTimeout(timeout: number): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    setTlsDatabase(tlsDatabase?: Gio.TlsDatabase | null): void
    setTlsInteraction(tlsInteraction?: Gio.TlsInteraction | null): void
    setUserAgent(userAgent: string): void
    websocketConnectAsync(msg: Message, origin: string | null, protocols: string[] | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocketConnectFinish(result: Gio.AsyncResult): WebsocketConnection
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
    /* Signals of Soup-3.0.Soup.Session */
    connect(sigName: "request-queued", callback: (($obj: Session, msg: Message) => void)): number
    on(sigName: "request-queued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-queued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-queued", callback: (msg: Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-queued", msg: Message): void
    connect(sigName: "request-unqueued", callback: (($obj: Session, msg: Message) => void)): number
    on(sigName: "request-unqueued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-unqueued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-unqueued", callback: (msg: Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-unqueued", msg: Message): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    connect(sigName: "notify::idle-timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface WebsocketConnection_ConstructProps extends GObject.Object_ConstructProps {
    connectionType?: WebsocketConnectionType
    extensions?: object
    ioStream?: Gio.IOStream
    keepaliveInterval?: number
    maxIncomingPayloadSize?: number
    origin?: string
    protocol?: string
    uri?: GLib.Uri
}
export class WebsocketConnection {
    /* Properties of Soup-3.0.Soup.WebsocketConnection */
    keepaliveInterval: number
    maxIncomingPayloadSize: number
    readonly state: WebsocketState
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.WebsocketConnection */
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
    getUri(): GLib.Uri
    sendBinary(data: any[] | null): void
    sendMessage(type: WebsocketDataType, message: any): void
    sendText(text: string): void
    setKeepaliveInterval(interval: number): void
    setMaxIncomingPayloadSize(maxIncomingPayloadSize: number): void
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
    /* Signals of Soup-3.0.Soup.WebsocketConnection */
    connect(sigName: "closed", callback: (($obj: WebsocketConnection) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "closing", callback: (($obj: WebsocketConnection) => void)): number
    on(sigName: "closing", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closing", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closing", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closing"): void
    connect(sigName: "error", callback: (($obj: WebsocketConnection, error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "message", callback: (($obj: WebsocketConnection, type: number, message: any) => void)): number
    on(sigName: "message", callback: (type: number, message: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message", callback: (type: number, message: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message", callback: (type: number, message: any) => void): NodeJS.EventEmitter
    emit(sigName: "message", type: number, message: any): void
    connect(sigName: "pong", callback: (($obj: WebsocketConnection, message: any) => void)): number
    on(sigName: "pong", callback: (message: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pong", callback: (message: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pong", callback: (message: any) => void): NodeJS.EventEmitter
    emit(sigName: "pong", message: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    static new(stream: Gio.IOStream, uri: GLib.Uri, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]): WebsocketConnection
    static $gtype: GObject.Type
}
export interface WebsocketExtension_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebsocketExtension {
    /* Fields of Soup-3.0.Soup.WebsocketExtension */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.WebsocketExtension */
    configure(connectionType: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    getRequestParams(): string | null
    getResponseParams(): string | null
    processIncomingMessage(header: number, payload: any): { returnType: any, header: number }
    processOutgoingMessage(header: number, payload: any): { returnType: any, header: number }
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
    connect(sigName: "notify", callback: (($obj: WebsocketExtension, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WebsocketExtension_ConstructProps)
    _init (config?: WebsocketExtension_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebsocketExtensionDeflate_ConstructProps extends WebsocketExtension_ConstructProps {
}
export class WebsocketExtensionDeflate {
    /* Fields of Soup-3.0.Soup.WebsocketExtension */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.WebsocketExtension */
    configure(connectionType: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    getRequestParams(): string | null
    getResponseParams(): string | null
    processIncomingMessage(header: number, payload: any): { returnType: any, header: number }
    processOutgoingMessage(header: number, payload: any): { returnType: any, header: number }
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
    connect(sigName: "notify", callback: (($obj: WebsocketExtensionDeflate, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WebsocketExtensionDeflate_ConstructProps)
    _init (config?: WebsocketExtensionDeflate_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebsocketExtensionManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebsocketExtensionManager {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: WebsocketExtensionManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WebsocketExtensionManager_ConstructProps)
    _init (config?: WebsocketExtensionManager_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AuthClass {
    /* Fields of Soup-3.0.Soup.AuthClass */
    parentClass: GObject.ObjectClass
    schemeName: string
    strength: number
    update: (auth: Auth, msg: Message, authHeader: GLib.HashTable) => boolean
    getProtectionSpace: (auth: Auth, sourceUri: GLib.Uri) => string[]
    authenticate: (auth: Auth, username: string, password: string) => void
    isAuthenticated: (auth: Auth) => boolean
    getAuthorization: (auth: Auth, msg: Message) => string
    isReady: (auth: Auth, msg: Message) => boolean
    canAuthenticate: (auth: Auth) => boolean
    padding: object[]
    static name: string
}
export abstract class AuthDomainBasicClass {
    /* Fields of Soup-3.0.Soup.AuthDomainBasicClass */
    parentClass: AuthDomainClass
    static name: string
}
export abstract class AuthDomainClass {
    /* Fields of Soup-3.0.Soup.AuthDomainClass */
    parentClass: GObject.ObjectClass
    accepts: (domain: AuthDomain, msg: ServerMessage, header: string) => string
    challenge: (domain: AuthDomain, msg: ServerMessage) => string
    checkPassword: (domain: AuthDomain, msg: ServerMessage, username: string, password: string) => boolean
    padding: object[]
    static name: string
}
export abstract class AuthDomainDigestClass {
    /* Fields of Soup-3.0.Soup.AuthDomainDigestClass */
    parentClass: AuthDomainClass
    static name: string
}
export abstract class AuthManagerClass {
    /* Fields of Soup-3.0.Soup.AuthManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class CacheClass {
    /* Fields of Soup-3.0.Soup.CacheClass */
    parentClass: GObject.ObjectClass
    getCacheability: (cache: Cache, msg: Message) => Cacheability
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
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ContentSnifferClass {
    /* Fields of Soup-3.0.Soup.ContentSnifferClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Cookie {
    /* Methods of Soup-3.0.Soup.Cookie */
    appliesToUri(uri: GLib.Uri): boolean
    copy(): Cookie
    domainMatches(host: string): boolean
    equal(cookie2: Cookie): boolean
    free(): void
    getDomain(): string
    getExpires(): GLib.DateTime | null
    getHttpOnly(): boolean
    getName(): string
    getPath(): string
    getSameSitePolicy(): SameSitePolicy
    getSecure(): boolean
    getValue(): string
    setDomain(domain: string): void
    setExpires(expires: GLib.DateTime): void
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
    static parse(header: string, origin?: GLib.Uri | null): Cookie | null
}
export abstract class CookieJarClass {
    /* Fields of Soup-3.0.Soup.CookieJarClass */
    parentClass: GObject.ObjectClass
    save: (jar: CookieJar) => void
    isPersistent: (jar: CookieJar) => boolean
    changed: (jar: CookieJar, oldCookie: Cookie, newCookie: Cookie) => void
    padding: object[]
    static name: string
}
export abstract class CookieJarDBClass {
    /* Fields of Soup-3.0.Soup.CookieJarDBClass */
    parentClass: CookieJarClass
    static name: string
}
export abstract class CookieJarTextClass {
    /* Fields of Soup-3.0.Soup.CookieJarTextClass */
    parentClass: CookieJarClass
    static name: string
}
export abstract class HSTSEnforcerClass {
    /* Fields of Soup-3.0.Soup.HSTSEnforcerClass */
    parentClass: GObject.ObjectClass
    isPersistent: (hstsEnforcer: HSTSEnforcer) => boolean
    hasValidPolicy: (hstsEnforcer: HSTSEnforcer, domain: string) => boolean
    changed: (enforcer: HSTSEnforcer, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void
    static name: string
}
export abstract class HSTSEnforcerDBClass {
    /* Fields of Soup-3.0.Soup.HSTSEnforcerDBClass */
    parentClass: HSTSEnforcerClass
    static name: string
}
export class HSTSPolicy {
    /* Methods of Soup-3.0.Soup.HSTSPolicy */
    copy(): HSTSPolicy
    equal(policy2: HSTSPolicy): boolean
    free(): void
    getDomain(): string
    getExpires(): GLib.DateTime
    getMaxAge(): number
    includesSubdomains(): boolean
    isExpired(): boolean
    isSessionPolicy(): boolean
    static name: string
    static new(domain: string, maxAge: number, includeSubdomains: boolean): HSTSPolicy
    constructor(domain: string, maxAge: number, includeSubdomains: boolean)
    /* Static methods and pseudo-constructors */
    static new(domain: string, maxAge: number, includeSubdomains: boolean): HSTSPolicy
    static newFromResponse(msg: Message): HSTSPolicy
    static newFull(domain: string, maxAge: number, expires: GLib.DateTime, includeSubdomains: boolean): HSTSPolicy
    static newSessionPolicy(domain: string, includeSubdomains: boolean): HSTSPolicy
}
export abstract class LoggerClass {
    /* Fields of Soup-3.0.Soup.LoggerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MessageBody {
    /* Fields of Soup-3.0.Soup.MessageBody */
    data: any[]
    length: number
    /* Methods of Soup-3.0.Soup.MessageBody */
    appendBytes(buffer: any): void
    append(data: any[]): void
    complete(): void
    flatten(): any
    getAccumulate(): boolean
    getChunk(offset: number): any | null
    gotChunk(chunk: any): void
    ref(): MessageBody
    setAccumulate(accumulate: boolean): void
    truncate(): void
    unref(): void
    wroteChunk(chunk: any): void
    static name: string
    static new(): MessageBody
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageBody
}
export abstract class MessageClass {
    /* Fields of Soup-3.0.Soup.MessageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MessageHeaders {
    /* Methods of Soup-3.0.Soup.MessageHeaders */
    append(name: string, value: string): void
    cleanConnectionHeaders(): void
    clear(): void
    foreach(func: MessageHeadersForeachFunc): void
    freeRanges(ranges: Range): void
    getContentDisposition(): { returnType: boolean, disposition: string, params: GLib.HashTable }
    getContentLength(): number
    getContentRange(): { returnType: boolean, start: number, end: number, totalLength: number | null }
    getContentType(): { returnType: string | null, params: GLib.HashTable | null }
    getEncoding(): Encoding
    getExpectations(): Expectation
    getHeadersType(): MessageHeadersType
    getList(name: string): string | null
    getOne(name: string): string | null
    getRanges(totalLength: number): { returnType: boolean, ranges: Range[] }
    headerContains(name: string, token: string): boolean
    headerEquals(name: string, value: string): boolean
    ref(): MessageHeaders
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
    unref(): void
    static name: string
    static new(type: MessageHeadersType): MessageHeaders
    constructor(type: MessageHeadersType)
    /* Static methods and pseudo-constructors */
    static new(type: MessageHeadersType): MessageHeaders
}
export class MessageHeadersIter {
    /* Methods of Soup-3.0.Soup.MessageHeadersIter */
    next(): { returnType: boolean, name: string, value: string }
    static name: string
    /* Static methods and pseudo-constructors */
    static init(hdrs: MessageHeaders): { iter: MessageHeadersIter }
}
export class MessageMetrics {
    /* Methods of Soup-3.0.Soup.MessageMetrics */
    copy(): MessageMetrics
    free(): void
    getConnectEnd(): number
    getConnectStart(): number
    getDnsEnd(): number
    getDnsStart(): number
    getFetchStart(): number
    getRequestBodyBytesSent(): number
    getRequestBodySize(): number
    getRequestHeaderBytesSent(): number
    getRequestStart(): number
    getResponseBodyBytesReceived(): number
    getResponseBodySize(): number
    getResponseEnd(): number
    getResponseHeaderBytesReceived(): number
    getResponseStart(): number
    getTlsStart(): number
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
    appendFormFile(controlName: string, filename: string, contentType: string, body: any): void
    appendFormString(controlName: string, data: string): void
    appendPart(headers: MessageHeaders, body: any): void
    free(): void
    getLength(): number
    getPart(part: number): { returnType: boolean, headers: MessageHeaders, body: any }
    toMessage(destHeaders: MessageHeaders): { destBody: any }
    static name: string
    static new(mimeType: string): Multipart
    constructor(mimeType: string)
    /* Static methods and pseudo-constructors */
    static new(mimeType: string): Multipart
    static newFromMessage(headers: MessageHeaders, body: any): Multipart
}
export abstract class MultipartInputStreamClass {
    /* Fields of Soup-3.0.Soup.MultipartInputStreamClass */
    parentClass: Gio.FilterInputStreamClass
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
    parentClass: GObject.ObjectClass
    requestStarted: (server: Server, msg: ServerMessage) => void
    requestRead: (server: Server, msg: ServerMessage) => void
    requestFinished: (server: Server, msg: ServerMessage) => void
    requestAborted: (server: Server, msg: ServerMessage) => void
    padding: object[]
    static name: string
}
export abstract class ServerMessageClass {
    /* Fields of Soup-3.0.Soup.ServerMessageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class SessionClass {
    /* Fields of Soup-3.0.Soup.SessionClass */
    parentClass: GObject.ObjectClass
    requestQueued: (session: Session, msg: Message) => void
    requestUnqueued: (session: Session, msg: Message) => void
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
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class WebsocketExtensionClass {
    /* Fields of Soup-3.0.Soup.WebsocketExtensionClass */
    parentClass: GObject.ObjectClass
    name: string
    configure: (extension: WebsocketExtension, connectionType: WebsocketConnectionType, params?: GLib.HashTable | null) => boolean
    getRequestParams: (extension: WebsocketExtension) => string | null
    getResponseParams: (extension: WebsocketExtension) => string | null
    processOutgoingMessage: (extension: WebsocketExtension, header: number, payload: any) => { returnType: any, header: number }
    processIncomingMessage: (extension: WebsocketExtension, header: number, payload: any) => { returnType: any, header: number }
    static name: string
}
export abstract class WebsocketExtensionDeflateClass {
    /* Fields of Soup-3.0.Soup.WebsocketExtensionDeflateClass */
    parentClass: WebsocketExtensionClass
    static name: string
}
export abstract class WebsocketExtensionManagerClass {
    /* Fields of Soup-3.0.Soup.WebsocketExtensionManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}