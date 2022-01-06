/**
 * Rest-0.7
 */

import type * as Gjs from './Gjs';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Rest {

enum MemoryUse {
    STATIC,
    TAKE,
    COPY,
}
enum OAuthSignatureMethod {
    PLAINTEXT,
    HMAC_SHA1,
}
enum ProxyCallError {
    FAILED,
}
enum ProxyError {
    CANCELLED,
    RESOLUTION,
    CONNECTION,
    SSL,
    IO,
    FAILED,
    HTTP_MULTIPLE_CHOICES,
    HTTP_MOVED_PERMANENTLY,
    HTTP_FOUND,
    HTTP_SEE_OTHER,
    HTTP_NOT_MODIFIED,
    HTTP_USE_PROXY,
    HTTP_THREEOHSIX,
    HTTP_TEMPORARY_REDIRECT,
    HTTP_BAD_REQUEST,
    HTTP_UNAUTHORIZED,
    HTTP_FOUROHTWO,
    HTTP_FORBIDDEN,
    HTTP_NOT_FOUND,
    HTTP_METHOD_NOT_ALLOWED,
    HTTP_NOT_ACCEPTABLE,
    HTTP_PROXY_AUTHENTICATION_REQUIRED,
    HTTP_REQUEST_TIMEOUT,
    HTTP_CONFLICT,
    HTTP_GONE,
    HTTP_LENGTH_REQUIRED,
    HTTP_PRECONDITION_FAILED,
    HTTP_REQUEST_ENTITY_TOO_LARGE,
    HTTP_REQUEST_URI_TOO_LONG,
    HTTP_UNSUPPORTED_MEDIA_TYPE,
    HTTP_REQUESTED_RANGE_NOT_SATISFIABLE,
    HTTP_EXPECTATION_FAILED,
    HTTP_INTERNAL_SERVER_ERROR,
    HTTP_NOT_IMPLEMENTED,
    HTTP_BAD_GATEWAY,
    HTTP_SERVICE_UNAVAILABLE,
    HTTP_GATEWAY_TIMEOUT,
    HTTP_HTTP_VERSION_NOT_SUPPORTED,
}
function hmac_sha1(key: string, message: string): string
function proxy_call_error_quark(): GLib.Quark
function proxy_error_quark(): GLib.Quark
interface OAuthProxyAuthCallback {
    (proxy: OAuthProxy, error: GLib.Error, weak_object: GObject.Object, userdata?: object | null): void
}
interface ProxyCallAsyncCallback {
    (call: ProxyCall, error: GLib.Error, weak_object: GObject.Object, userdata?: object | null): void
}
interface ProxyCallContinuousCallback {
    (call: ProxyCall, buf: string, len: number, error: GLib.Error, weak_object: GObject.Object, userdata?: object | null): void
}
interface ProxyCallUploadCallback {
    (call: ProxyCall, total: number, uploaded: number, error: GLib.Error, weak_object: GObject.Object, userdata?: object | null): void
}
export interface OAuth2Proxy_ConstructProps extends Proxy_ConstructProps {
    access_token?: string
    auth_endpoint?: string
    client_id?: string
}
class OAuth2Proxy {
    /* Properties of Rest-0.7.Rest.OAuth2Proxy */
    access_token: string
    /* Properties of Rest-0.7.Rest.Proxy */
    binding_required: boolean
    password: string
    ssl_ca_file: string
    ssl_strict: boolean
    url_format: string
    user_agent: string
    username: string
    /* Fields of Rest-0.7.Rest.OAuth2Proxy */
    parent: Proxy
    priv: OAuth2ProxyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.OAuth2Proxy */
    build_login_url(redirect_uri: string): string
    build_login_url_full(redirect_uri: string, extra_params: GLib.HashTable): string
    get_access_token(): string
    set_access_token(access_token: string): void
    /* Methods of Rest-0.7.Rest.Proxy */
    add_soup_feature(feature: Soup.SessionFeature): void
    get_user_agent(): string
    new_call(): ProxyCall
    set_user_agent(user_agent: string): void
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
    /* Virtual methods of Rest-0.7.Rest.Proxy */
    vfunc_authenticate(auth: ProxyAuth, retrying: boolean): boolean
    vfunc_new_call(): ProxyCall
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Rest-0.7.Rest.Proxy */
    connect(sigName: "authenticate", callback: (($obj: OAuth2Proxy, auth: ProxyAuth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: OAuth2Proxy, auth: ProxyAuth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::access-token", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-token", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::binding-required", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-format", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuth2Proxy_ConstructProps)
    _init (config?: OAuth2Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client_id: string, auth_endpoint: string, url_format: string, binding_required: boolean): OAuth2Proxy
    static new(url_format: string, binding_required: boolean): OAuth2Proxy
    static new_with_token(client_id: string, access_token: string, auth_endpoint: string, url_format: string, binding_required: boolean): OAuth2Proxy
    static extract_access_token(url: string): string
    static $gtype: GObject.Type
}
export interface OAuth2ProxyCall_ConstructProps extends ProxyCall_ConstructProps {
}
class OAuth2ProxyCall {
    /* Fields of Rest-0.7.Rest.OAuth2ProxyCall */
    parent: ProxyCall
    /* Fields of Rest-0.7.Rest.ProxyCall */
    priv: ProxyCallPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.ProxyCall */
    add_header(header: string, value: string): void
    add_param(name: string, value: string): void
    add_param_full(param: Param): void
    get_function(): string
    get_method(): string
    get_params(): Params
    get_payload(): string
    get_payload_length(): number
    get_response_headers(): GLib.HashTable
    get_status_code(): number
    get_status_message(): string
    invoke_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_finish(result: Gio.AsyncResult): boolean
    lookup_header(header: string): string
    lookup_param(name: string): Param
    lookup_response_header(header: string): string
    remove_header(header: string): void
    remove_param(name: string): void
    run(loop: GLib.MainLoop): boolean
    serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    set_function(function_: string): void
    set_method(method: string): void
    sync(): boolean
    upload(callback: ProxyCallUploadCallback, weak_object: GObject.Object): boolean
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
    /* Virtual methods of Rest-0.7.Rest.ProxyCall */
    vfunc_prepare(): boolean
    vfunc_serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2ProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2ProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuth2ProxyCall_ConstructProps)
    _init (config?: OAuth2ProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OAuthProxy_ConstructProps extends Proxy_ConstructProps {
    consumer_key?: string
    consumer_secret?: string
    signature_host?: string
    signature_method?: OAuthSignatureMethod
    token?: string
    token_secret?: string
}
class OAuthProxy {
    /* Properties of Rest-0.7.Rest.OAuthProxy */
    signature_host: string
    signature_method: OAuthSignatureMethod
    token: string
    token_secret: string
    /* Properties of Rest-0.7.Rest.Proxy */
    binding_required: boolean
    password: string
    ssl_ca_file: string
    ssl_strict: boolean
    url_format: string
    user_agent: string
    username: string
    /* Fields of Rest-0.7.Rest.OAuthProxy */
    parent: Proxy
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.OAuthProxy */
    access_token(function_: string, verifier: string): boolean
    access_token_async(function_: string, verifier: string, callback: OAuthProxyAuthCallback, weak_object: GObject.Object): boolean
    auth_step(function_: string): boolean
    auth_step_async(function_: string, callback: OAuthProxyAuthCallback, weak_object: GObject.Object): boolean
    get_signature_host(): string
    get_token(): string
    get_token_secret(): string
    is_oauth10a(): boolean
    new_echo_proxy(service_url: string, url_format: string, binding_required: boolean): Proxy
    request_token(function_: string, callback_uri: string): boolean
    request_token_async(function_: string, callback_uri: string, callback: OAuthProxyAuthCallback, weak_object: GObject.Object): boolean
    set_signature_host(signature_host: string): void
    set_token(token: string): void
    set_token_secret(token_secret: string): void
    /* Methods of Rest-0.7.Rest.Proxy */
    add_soup_feature(feature: Soup.SessionFeature): void
    get_user_agent(): string
    new_call(): ProxyCall
    set_user_agent(user_agent: string): void
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
    /* Virtual methods of Rest-0.7.Rest.Proxy */
    vfunc_authenticate(auth: ProxyAuth, retrying: boolean): boolean
    vfunc_new_call(): ProxyCall
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Rest-0.7.Rest.Proxy */
    connect(sigName: "authenticate", callback: (($obj: OAuthProxy, auth: ProxyAuth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: OAuthProxy, auth: ProxyAuth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::signature-host", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signature-host", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signature-method", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signature-method", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::token", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::token", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::token-secret", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::token-secret", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::binding-required", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-format", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: OAuthProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuthProxy_ConstructProps)
    _init (config?: OAuthProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(consumer_key: string, consumer_secret: string, url_format: string, binding_required: boolean): OAuthProxy
    static new(url_format: string, binding_required: boolean): OAuthProxy
    static new_with_token(consumer_key: string, consumer_secret: string, token: string, token_secret: string, url_format: string, binding_required: boolean): OAuthProxy
    static $gtype: GObject.Type
}
export interface OAuthProxyCall_ConstructProps extends ProxyCall_ConstructProps {
}
class OAuthProxyCall {
    /* Fields of Rest-0.7.Rest.OAuthProxyCall */
    parent: ProxyCall
    /* Fields of Rest-0.7.Rest.ProxyCall */
    priv: ProxyCallPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.OAuthProxyCall */
    parse_token_reponse(): void
    parse_token_response(): void
    /* Methods of Rest-0.7.Rest.ProxyCall */
    add_header(header: string, value: string): void
    add_param(name: string, value: string): void
    add_param_full(param: Param): void
    get_function(): string
    get_method(): string
    get_params(): Params
    get_payload(): string
    get_payload_length(): number
    get_response_headers(): GLib.HashTable
    get_status_code(): number
    get_status_message(): string
    invoke_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_finish(result: Gio.AsyncResult): boolean
    lookup_header(header: string): string
    lookup_param(name: string): Param
    lookup_response_header(header: string): string
    remove_header(header: string): void
    remove_param(name: string): void
    run(loop: GLib.MainLoop): boolean
    serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    set_function(function_: string): void
    set_method(method: string): void
    sync(): boolean
    upload(callback: ProxyCallUploadCallback, weak_object: GObject.Object): boolean
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
    /* Virtual methods of Rest-0.7.Rest.ProxyCall */
    vfunc_prepare(): boolean
    vfunc_serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuthProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuthProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuthProxyCall_ConstructProps)
    _init (config?: OAuthProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Proxy_ConstructProps extends GObject.Object_ConstructProps {
    binding_required?: boolean
    disable_cookies?: boolean
    password?: string
    ssl_ca_file?: string
    ssl_strict?: boolean
    url_format?: string
    user_agent?: string
    username?: string
}
class Proxy {
    /* Properties of Rest-0.7.Rest.Proxy */
    binding_required: boolean
    password: string
    ssl_ca_file: string
    ssl_strict: boolean
    url_format: string
    user_agent: string
    username: string
    /* Fields of Rest-0.7.Rest.Proxy */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.Proxy */
    add_soup_feature(feature: Soup.SessionFeature): void
    get_user_agent(): string
    new_call(): ProxyCall
    set_user_agent(user_agent: string): void
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
    /* Virtual methods of Rest-0.7.Rest.Proxy */
    vfunc_authenticate(auth: ProxyAuth, retrying: boolean): boolean
    vfunc_new_call(): ProxyCall
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Rest-0.7.Rest.Proxy */
    connect(sigName: "authenticate", callback: (($obj: Proxy, auth: ProxyAuth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Proxy, auth: ProxyAuth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::binding-required", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-format", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Proxy_ConstructProps)
    _init (config?: Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(url_format: string, binding_required: boolean): Proxy
    static new_with_authentication(url_format: string, binding_required: boolean, username: string, password: string): Proxy
    static $gtype: GObject.Type
}
export interface ProxyAuth_ConstructProps extends GObject.Object_ConstructProps {
}
class ProxyAuth {
    /* Fields of Rest-0.7.Rest.ProxyAuth */
    parent: GObject.Object
    priv: ProxyAuthPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.ProxyAuth */
    cancel(): void
    pause(): void
    unpause(): void
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
    connect(sigName: "notify", callback: (($obj: ProxyAuth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyAuth, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyAuth_ConstructProps)
    _init (config?: ProxyAuth_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProxyCall_ConstructProps extends GObject.Object_ConstructProps {
    proxy?: Proxy
}
class ProxyCall {
    /* Fields of Rest-0.7.Rest.ProxyCall */
    parent: GObject.Object
    priv: ProxyCallPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.ProxyCall */
    add_header(header: string, value: string): void
    add_param(name: string, value: string): void
    add_param_full(param: Param): void
    get_function(): string
    get_method(): string
    get_params(): Params
    get_payload(): string
    get_payload_length(): number
    get_response_headers(): GLib.HashTable
    get_status_code(): number
    get_status_message(): string
    invoke_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_finish(result: Gio.AsyncResult): boolean
    lookup_header(header: string): string
    lookup_param(name: string): Param
    lookup_response_header(header: string): string
    remove_header(header: string): void
    remove_param(name: string): void
    run(loop: GLib.MainLoop): boolean
    serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    set_function(function_: string): void
    set_method(method: string): void
    sync(): boolean
    upload(callback: ProxyCallUploadCallback, weak_object: GObject.Object): boolean
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
    /* Virtual methods of Rest-0.7.Rest.ProxyCall */
    vfunc_prepare(): boolean
    vfunc_serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyCall_ConstructProps)
    _init (config?: ProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
export interface XmlParser_ConstructProps extends GObject.Object_ConstructProps {
}
class XmlParser {
    /* Fields of Rest-0.7.Rest.XmlParser */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.XmlParser */
    parse_from_data(data: string, len: number): XmlNode
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
    connect(sigName: "notify", callback: (($obj: XmlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XmlParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XmlParser_ConstructProps)
    _init (config?: XmlParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XmlParser
    static $gtype: GObject.Type
}
abstract class OAuth2ProxyCallClass {
    /* Fields of Rest-0.7.Rest.OAuth2ProxyCallClass */
    parent_class: ProxyCallClass
    static name: string
}
abstract class OAuth2ProxyClass {
    /* Fields of Rest-0.7.Rest.OAuth2ProxyClass */
    parent_class: ProxyClass
    static name: string
}
class OAuth2ProxyPrivate {
    static name: string
}
abstract class OAuthProxyCallClass {
    /* Fields of Rest-0.7.Rest.OAuthProxyCallClass */
    parent_class: ProxyCallClass
    static name: string
}
abstract class OAuthProxyClass {
    /* Fields of Rest-0.7.Rest.OAuthProxyClass */
    parent_class: ProxyClass
    static name: string
}
class Param {
    /* Methods of Rest-0.7.Rest.Param */
    get_content(): object | null
    get_content_length(): number
    get_content_type(): string
    get_file_name(): string
    get_name(): string
    is_string(): boolean
    ref(): Param
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_full(name: string, use: MemoryUse, data: Uint8Array[], content_type: string, filename: string): Param
    static new_string(name: string, use: MemoryUse, string: string): Param
    static new_with_owner(name: string, data: Uint8Array[], content_type: string, filename?: string | null, owner?: object | null, owner_dnotify?: GLib.DestroyNotify | null): Param
}
class Params {
    /* Methods of Rest-0.7.Rest.Params */
    add(param: Param): void
    are_strings(): boolean
    as_string_hash_table(): GLib.HashTable
    free(): void
    get(name: string): Param
    remove(name: string): void
    static name: string
}
class ParamsIter {
    /* Methods of Rest-0.7.Rest.ParamsIter */
    init(params: Params): void
    next(): [ /* returnType */ boolean, /* name */ string, /* param */ Param | null ]
    static name: string
}
abstract class ProxyAuthClass {
    /* Fields of Rest-0.7.Rest.ProxyAuthClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class ProxyAuthPrivate {
    static name: string
}
abstract class ProxyCallClass {
    /* Fields of Rest-0.7.Rest.ProxyCallClass */
    prepare: (call: ProxyCall) => boolean
    serialize_params: (call: ProxyCall) => [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    static name: string
}
class ProxyCallPrivate {
    static name: string
}
abstract class ProxyClass {
    /* Fields of Rest-0.7.Rest.ProxyClass */
    new_call: (proxy: Proxy) => ProxyCall
    authenticate: (proxy: Proxy, auth: ProxyAuth, retrying: boolean) => boolean
    static name: string
}
class XmlNode {
    /* Fields of Rest-0.7.Rest.XmlNode */
    name: string
    content: string
    children: GLib.HashTable
    attrs: GLib.HashTable
    next: XmlNode
    /* Methods of Rest-0.7.Rest.XmlNode */
    add_attr(attribute: string, value: string): void
    add_child(tag: string): XmlNode
    find(tag: string): XmlNode
    free(): void
    get_attr(attr_name: string): string
    print(): string
    set_content(value: string): void
    static name: string
}
abstract class XmlParserClass {
    /* Fields of Rest-0.7.Rest.XmlParserClass */
    parent_class: GObject.ObjectClass
    static name: string
}
}
export default Rest