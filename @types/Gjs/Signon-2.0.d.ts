/**
 * Signon-2.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum Error {
    UNKNOWN,
    INTERNAL_SERVER,
    INTERNAL_COMMUNICATION,
    PERMISSION_DENIED,
    METHOD_NOT_KNOWN,
    SERVICE_NOT_AVAILABLE,
    INVALID_QUERY,
    METHOD_NOT_AVAILABLE,
    IDENTITY_NOT_FOUND,
    STORE_FAILED,
    REMOVE_FAILED,
    SIGNOUT_FAILED,
    IDENTITY_OPERATION_CANCELED,
    CREDENTIALS_NOT_AVAILABLE,
    REFERENCE_NOT_FOUND,
    MECHANISM_NOT_AVAILABLE,
    MISSING_DATA,
    INVALID_CREDENTIALS,
    NOT_AUTHORIZED,
    WRONG_STATE,
    OPERATION_NOT_SUPPORTED,
    NO_CONNECTION,
    NETWORK,
    SSL,
    RUNTIME,
    SESSION_CANCELED,
    TIMED_OUT,
    USER_INTERACTION,
    OPERATION_FAILED,
    ENCRYPTION_FAILED,
    TOS_NOT_ACCEPTED,
    FORGOT_PASSWORD,
    METHOD_OR_MECHANISM_NOT_ALLOWED,
    INCORRECT_DATE,
    USER_ERROR,
}
export enum SessionDataUiPolicy {
    DEFAULT,
    REQUEST_PASSWORD,
    NO_USER_INTERACTION,
    VALIDATION,
}
export enum IdentityType {
    OTHER,
    APP,
    WEB,
    NETWORK,
}
export const SESSION_DATA_CAPTION: string
export const SESSION_DATA_PROXY: string
export const SESSION_DATA_REALM: string
export const SESSION_DATA_RENEW_TOKEN: string
export const SESSION_DATA_SECRET: string
export const SESSION_DATA_TIMEOUT: string
export const SESSION_DATA_UI_POLICY: string
export const SESSION_DATA_USERNAME: string
export const SESSION_DATA_WINDOW_ID: string
export function error_quark(): GLib.Quark
export interface AuthService_ConstructProps extends GObject.Object_ConstructProps {
}
export class AuthService {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Signon.AuthService */
    get_mechanisms(method: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_mechanisms_finish(result: Gio.AsyncResult): string[]
    get_mechanisms_sync(method: string, cancellable?: Gio.Cancellable | null): string[]
    get_methods(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_methods_finish(result: Gio.AsyncResult): string[]
    get_methods_sync(cancellable?: Gio.Cancellable | null): string[]
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
    connect(sigName: "notify", callback: (($obj: AuthService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthService_ConstructProps)
    _init (config?: AuthService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AuthService
    static $gtype: GObject.Type
}
export interface AuthSession_ConstructProps extends GObject.Object_ConstructProps {
}
export class AuthSession {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Signon.AuthSession */
    cancel(): void
    get_method(): string
    process(session_data: GLib.Variant, mechanism: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    process_finish(res: Gio.AsyncResult): GLib.Variant
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
    /* Signals of Signon.AuthSession */
    connect(sigName: "state-changed", callback: (($obj: AuthSession, state: number, message: string) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: AuthSession, state: number, message: string) => void)): number
    emit(sigName: "state-changed", state: number, message: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthSession_ConstructProps)
    _init (config?: AuthSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, method_name: string): AuthSession
    static $gtype: GObject.Type
}
export interface Identity_ConstructProps extends GObject.Object_ConstructProps {
    id?: number
}
export class Identity {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Signon.Identity */
    create_session(method: string): AuthSession
    get_id(): number
    get_last_error(): GLib.Error
    query_info(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_info_finish(res: Gio.AsyncResult): IdentityInfo
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_finish(res: Gio.AsyncResult): boolean
    sign_out(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sign_out_finish(res: Gio.AsyncResult): boolean
    store_info(info: IdentityInfo, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    store_info_finish(res: Gio.AsyncResult): boolean
    verify_secret(secret: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_secret_finish(res: Gio.AsyncResult): boolean
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
    /* Signals of Signon.Identity */
    connect(sigName: "signed-out", callback: (($obj: Identity) => void)): number
    connect_after(sigName: "signed-out", callback: (($obj: Identity) => void)): number
    emit(sigName: "signed-out"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Identity_ConstructProps)
    _init (config?: Identity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Identity
    static new_from_db(id: number): Identity
    static $gtype: GObject.Type
}
export abstract class AuthServiceClass {
    /* Fields of Signon.AuthServiceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AuthSessionClass {
    /* Fields of Signon.AuthSessionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class IdentityClass {
    /* Fields of Signon.IdentityClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class IdentityInfo {
    /* Methods of Signon.IdentityInfo */
    add_access_control(system_context: string, application_context: string): void
    copy(): IdentityInfo
    free(): void
    get_access_control_list(): SecurityContext[]
    get_caption(): string
    get_id(): number
    get_identity_type(): IdentityType
    get_methods(): GLib.HashTable
    get_realms(): string[]
    get_storing_secret(): boolean
    get_username(): string
    remove_method(method: string): void
    set_access_control_list(access_control_list: SecurityContext[]): void
    set_caption(caption: string): void
    set_identity_type(type: IdentityType): void
    set_method(method: string, mechanisms: string[]): void
    set_realms(realms: string[]): void
    set_secret(secret: string, store_secret: boolean): void
    set_username(username: string): void
    static name: string
    static new(): IdentityInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IdentityInfo
}
export class SecurityContext {
    /* Methods of Signon.SecurityContext */
    copy(): SecurityContext
    free(): void
    get_application_context(): string
    get_system_context(): string
    set_application_context(application_context: string): void
    set_system_context(system_context: string): void
    static name: string
    static new(): SecurityContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SecurityContext
    static new_from_values(system_context: string, application_context: string): SecurityContext
}