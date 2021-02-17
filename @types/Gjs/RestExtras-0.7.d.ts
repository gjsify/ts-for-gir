/**
 * RestExtras-0.7
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Rest from './Rest-0.7';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export interface YoutubeProxyUploadCallback {
    (proxy: YoutubeProxy, payload: string, total: number, uploaded: number, error: GLib.Error, weak_object: GObject.Object): void
}
export interface FlickrProxy_ConstructProps extends Rest.Proxy_ConstructProps {
    api_key?: string
    shared_secret?: string
    token?: string
}
export class FlickrProxy {
    /* Properties of RestExtras.FlickrProxy */
    token: string
    /* Properties of Rest.Proxy */
    binding_required: boolean
    password: string
    ssl_ca_file: string
    ssl_strict: boolean
    url_format: string
    user_agent: string
    username: string
    /* Fields of RestExtras.FlickrProxy */
    parent: Rest.Proxy
    priv: FlickrProxyPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RestExtras.FlickrProxy */
    build_login_url(frob: string, perms: string): string
    get_api_key(): string
    get_shared_secret(): string
    get_token(): string
    new_upload(): FlickrProxyCall
    new_upload_for_file(filename: string): FlickrProxyCall
    set_token(token: string): void
    sign(params: GLib.HashTable): string
    /* Methods of Rest.Proxy */
    add_soup_feature(feature: Soup.SessionFeature): void
    get_user_agent(): string
    new_call(): Rest.ProxyCall
    set_user_agent(user_agent: string): void
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
    /* Virtual methods of Rest.Proxy */
    vfunc_authenticate(auth: Rest.ProxyAuth, retrying: boolean): boolean
    vfunc_new_call(): Rest.ProxyCall
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Rest.Proxy */
    connect(sigName: "authenticate", callback: (($obj: FlickrProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: FlickrProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::token", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::token", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::binding-required", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-format", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FlickrProxy_ConstructProps)
    _init (config?: FlickrProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(api_key: string, shared_secret: string): FlickrProxy
    static new(url_format: string, binding_required: boolean): FlickrProxy
    static new_with_token(api_key: string, shared_secret: string, token: string): FlickrProxy
    static is_successful(root: Rest.XmlNode): boolean
    static $gtype: GObject.Type
}
export interface FlickrProxyCall_ConstructProps extends Rest.ProxyCall_ConstructProps {
    upload?: boolean
}
export class FlickrProxyCall {
    /* Fields of RestExtras.FlickrProxyCall */
    parent: Rest.ProxyCall
    /* Fields of Rest.ProxyCall */
    priv: Rest.ProxyCallPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest.ProxyCall */
    add_header(header: string, value: string): void
    add_param(name: string, value: string): void
    add_param_full(param: Rest.Param): void
    get_function(): string
    get_method(): string
    get_params(): Rest.Params
    get_payload(): string
    get_payload_length(): number
    get_response_headers(): GLib.HashTable
    get_status_code(): number
    get_status_message(): string
    invoke_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_finish(result: Gio.AsyncResult): boolean
    lookup_header(header: string): string
    lookup_param(name: string): Rest.Param
    lookup_response_header(header: string): string
    remove_header(header: string): void
    remove_param(name: string): void
    run(loop: GLib.MainLoop): boolean
    serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    set_function(function_: string): void
    set_method(method: string): void
    sync(): boolean
    upload(callback: Rest.ProxyCallUploadCallback, weak_object: GObject.Object): boolean
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
    /* Virtual methods of Rest.ProxyCall */
    vfunc_prepare(): boolean
    vfunc_serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FlickrProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FlickrProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FlickrProxyCall_ConstructProps)
    _init (config?: FlickrProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LastfmProxy_ConstructProps extends Rest.Proxy_ConstructProps {
    api_key?: string
    secret?: string
    session_key?: string
}
export class LastfmProxy {
    /* Properties of RestExtras.LastfmProxy */
    session_key: string
    /* Properties of Rest.Proxy */
    binding_required: boolean
    password: string
    ssl_ca_file: string
    ssl_strict: boolean
    url_format: string
    user_agent: string
    username: string
    /* Fields of RestExtras.LastfmProxy */
    parent: Rest.Proxy
    priv: LastfmProxyPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RestExtras.LastfmProxy */
    build_login_url(token: string): string
    get_api_key(): string
    get_secret(): string
    get_session_key(): string
    set_session_key(session_key: string): void
    sign(params: GLib.HashTable): string
    /* Methods of Rest.Proxy */
    add_soup_feature(feature: Soup.SessionFeature): void
    get_user_agent(): string
    new_call(): Rest.ProxyCall
    set_user_agent(user_agent: string): void
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
    /* Virtual methods of Rest.Proxy */
    vfunc_authenticate(auth: Rest.ProxyAuth, retrying: boolean): boolean
    vfunc_new_call(): Rest.ProxyCall
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Rest.Proxy */
    connect(sigName: "authenticate", callback: (($obj: LastfmProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: LastfmProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::session-key", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-key", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::binding-required", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-format", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LastfmProxy_ConstructProps)
    _init (config?: LastfmProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(api_key: string, secret: string): LastfmProxy
    static new(url_format: string, binding_required: boolean): LastfmProxy
    static new_with_session(api_key: string, secret: string, session_key: string): LastfmProxy
    static is_successful(root: Rest.XmlNode): boolean
    static $gtype: GObject.Type
}
export interface LastfmProxyCall_ConstructProps extends Rest.ProxyCall_ConstructProps {
}
export class LastfmProxyCall {
    /* Fields of RestExtras.LastfmProxyCall */
    parent: Rest.ProxyCall
    /* Fields of Rest.ProxyCall */
    priv: Rest.ProxyCallPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest.ProxyCall */
    add_header(header: string, value: string): void
    add_param(name: string, value: string): void
    add_param_full(param: Rest.Param): void
    get_function(): string
    get_method(): string
    get_params(): Rest.Params
    get_payload(): string
    get_payload_length(): number
    get_response_headers(): GLib.HashTable
    get_status_code(): number
    get_status_message(): string
    invoke_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_finish(result: Gio.AsyncResult): boolean
    lookup_header(header: string): string
    lookup_param(name: string): Rest.Param
    lookup_response_header(header: string): string
    remove_header(header: string): void
    remove_param(name: string): void
    run(loop: GLib.MainLoop): boolean
    serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    set_function(function_: string): void
    set_method(method: string): void
    sync(): boolean
    upload(callback: Rest.ProxyCallUploadCallback, weak_object: GObject.Object): boolean
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
    /* Virtual methods of Rest.ProxyCall */
    vfunc_prepare(): boolean
    vfunc_serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LastfmProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LastfmProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LastfmProxyCall_ConstructProps)
    _init (config?: LastfmProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
export interface YoutubeProxy_ConstructProps extends Rest.Proxy_ConstructProps {
    developer_key?: string
    user_auth?: string
}
export class YoutubeProxy {
    /* Properties of RestExtras.YoutubeProxy */
    user_auth: string
    /* Properties of Rest.Proxy */
    binding_required: boolean
    password: string
    ssl_ca_file: string
    ssl_strict: boolean
    url_format: string
    user_agent: string
    username: string
    /* Fields of RestExtras.YoutubeProxy */
    parent: Rest.Proxy
    priv: YoutubeProxyPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RestExtras.YoutubeProxy */
    set_user_auth(user_auth: string): void
    upload_async(filename: string, fields: GLib.HashTable, incomplete: boolean, callback: YoutubeProxyUploadCallback, weak_object: GObject.Object): boolean
    /* Methods of Rest.Proxy */
    add_soup_feature(feature: Soup.SessionFeature): void
    get_user_agent(): string
    new_call(): Rest.ProxyCall
    set_user_agent(user_agent: string): void
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
    /* Virtual methods of Rest.Proxy */
    vfunc_authenticate(auth: Rest.ProxyAuth, retrying: boolean): boolean
    vfunc_new_call(): Rest.ProxyCall
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Rest.Proxy */
    connect(sigName: "authenticate", callback: (($obj: YoutubeProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: YoutubeProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::user-auth", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-auth", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::binding-required", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-format", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YoutubeProxy_ConstructProps)
    _init (config?: YoutubeProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(developer_key: string): YoutubeProxy
    static new(url_format: string, binding_required: boolean): YoutubeProxy
    static new_with_auth(developer_key: string, user_auth: string): YoutubeProxy
    static $gtype: GObject.Type
}
export abstract class FlickrProxyCallClass {
    /* Fields of RestExtras.FlickrProxyCallClass */
    parent_class: Rest.ProxyCallClass
    static name: string
}
export abstract class FlickrProxyClass {
    /* Fields of RestExtras.FlickrProxyClass */
    parent_class: Rest.ProxyClass
    static name: string
}
export class FlickrProxyPrivate {
    static name: string
}
export abstract class LastfmProxyCallClass {
    /* Fields of RestExtras.LastfmProxyCallClass */
    parent_class: Rest.ProxyCallClass
    static name: string
}
export abstract class LastfmProxyClass {
    /* Fields of RestExtras.LastfmProxyClass */
    parent_class: Rest.ProxyClass
    static name: string
}
export class LastfmProxyPrivate {
    static name: string
}
export abstract class YoutubeProxyClass {
    /* Fields of RestExtras.YoutubeProxyClass */
    parent_class: Rest.ProxyClass
    static name: string
}
export class YoutubeProxyPrivate {
    static name: string
}