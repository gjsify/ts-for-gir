/**
 * GSignond-1.0
 */

/// <reference types="node" />
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GSignond {

export enum Error {
    NONE,
    UNKNOWN,
    INTERNAL_SERVER,
    INTERNAL_COMMUNICATION,
    PERMISSION_DENIED,
    ENCRYPTION_FAILURE,
    AUTH_SERVICE_ERR,
    METHOD_NOT_KNOWN,
    SERVICE_NOT_AVAILABLE,
    INVALID_QUERY,
    IDENTITY_ERR,
    METHOD_NOT_AVAILABLE,
    IDENTITY_NOT_FOUND,
    STORE_FAILED,
    REMOVE_FAILED,
    SIGN_OUT_FAILED,
    IDENTITY_OPERATION_CANCELED,
    CREDENTIALS_NOT_AVAILABLE,
    REFERENCE_NOT_FOUND,
    AUTH_SESSION_ERR,
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
    USER_ERR,
}
export enum PluginState {
    NONE,
    RESOLVING,
    CONNECTING,
    SENDING_DATA,
    WAITING,
    USER_PENDING,
    REFRESHING,
    PROCESS_PENDING,
    STARTED,
    CANCELING,
    DONE,
    HOLDING,
}
export enum SignonuiError {
    NONE,
    GENERAL,
    NO_SIGNONUI,
    BAD_PARAMETERS,
    CANCELED,
    NOT_AVAILABLE,
    BAD_URL,
    BAD_CAPTCHA,
    BAD_CAPTCHA_URL,
    REFRESH_FAILED,
    FORBIDDEN,
    FORGOT_PASSWORD,
}
export enum UiPolicy {
    DEFAULT,
    REQUEST_PASSWORD,
    NO_USER_INTERACTION,
    VALIDATION,
}
export const CONFIG_DBUS_TIMEOUTS: string
export const CONFIG_GENERAL: string
export function errorNewFromVariant(var_: GLib.Variant): GLib.Error | null
export function errorQuark(): GLib.Quark
export function errorToVariant(error: GLib.Error): GLib.Variant | null
export function generateNonce(): string
export function isHostInDomain(host: string, domain: string): boolean
export function newIoStreamFromFd(inFd: number, outFd: number, closeFds: boolean): Gio.IOStream
export function securityContextFromVariant(variant: GLib.Variant): SecurityContext
export function sequenceToArray(seq: GLib.Sequence): string[]
export function wipeDirectory(dirname: string): boolean
export function wipeFile(filename: string): boolean
export class Plugin {
    /* Properties of GSignond.Plugin */
    readonly mechanisms: string[]
    readonly type: string
    /* Methods of GSignond.Plugin */
    cancel(): void
    error(error: GLib.Error): void
    refresh(uiData: SignonuiData): void
    refreshed(uiData: SignonuiData): void
    request(sessionData: SessionData): void
    requestInitial(sessionData: SessionData, identityMethodCache: Dictionary, mechanism: string): void
    response(sessionData: SessionData): void
    responseFinal(sessionData: SessionData): void
    statusChanged(state: PluginState, message: string): void
    store(identityMethodCache: Dictionary): void
    userActionFinished(uiData: SignonuiData): void
    userActionRequired(uiData: SignonuiData): void
    /* Virtual methods of GSignond.Plugin */
    vfuncCancel(): void
    vfuncRefresh(uiData: SignonuiData): void
    vfuncRequest(sessionData: SessionData): void
    vfuncRequestInitial(sessionData: SessionData, identityMethodCache: Dictionary, mechanism: string): void
    vfuncUserActionFinished(uiData: SignonuiData): void
    /* Signals of GSignond.Plugin */
    connect(sigName: "error", callback: (($obj: Plugin, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Plugin, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    on(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "refreshed", callback: (($obj: Plugin, uiData: SignonuiData) => void)): number
    connect_after(sigName: "refreshed", callback: (($obj: Plugin, uiData: SignonuiData) => void)): number
    emit(sigName: "refreshed", uiData: SignonuiData): void
    on(sigName: "refreshed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "refreshed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "refreshed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "response", callback: (($obj: Plugin, sessionData: SessionData) => void)): number
    connect_after(sigName: "response", callback: (($obj: Plugin, sessionData: SessionData) => void)): number
    emit(sigName: "response", sessionData: SessionData): void
    on(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "response-final", callback: (($obj: Plugin, sessionData: SessionData) => void)): number
    connect_after(sigName: "response-final", callback: (($obj: Plugin, sessionData: SessionData) => void)): number
    emit(sigName: "response-final", sessionData: SessionData): void
    on(sigName: "response-final", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "response-final", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "response-final", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "status-changed", callback: (($obj: Plugin, state: PluginState, message: string) => void)): number
    connect_after(sigName: "status-changed", callback: (($obj: Plugin, state: PluginState, message: string) => void)): number
    emit(sigName: "status-changed", state: PluginState, message: string): void
    on(sigName: "status-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "store", callback: (($obj: Plugin, data: Dictionary) => void)): number
    connect_after(sigName: "store", callback: (($obj: Plugin, data: Dictionary) => void)): number
    emit(sigName: "store", data: Dictionary): void
    on(sigName: "store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "user-action-required", callback: (($obj: Plugin, uiData: SignonuiData) => void)): number
    connect_after(sigName: "user-action-required", callback: (($obj: Plugin, uiData: SignonuiData) => void)): number
    emit(sigName: "user-action-required", uiData: SignonuiData): void
    on(sigName: "user-action-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "user-action-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "user-action-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export interface AccessControlManager_ConstructProps extends GObject.Object_ConstructProps {
    config?: Config
}
export class AccessControlManager {
    /* Fields of GSignond.AccessControlManager */
    parentInstance: GObject.Object
    config: Config
    priv: AccessControlManagerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond.AccessControlManager */
    aclIsValid(peerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    peerIsAllowedToUseIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    peerIsOwnerOfIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext): boolean
    securityContextOfKeychain(): SecurityContext
    securityContextOfPeer(peerCtx: SecurityContext, peerFd: number, peerService: string, peerAppCtx: string): void
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
    /* Virtual methods of GSignond.AccessControlManager */
    vfuncAclIsValid(peerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    vfuncPeerIsAllowedToUseIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    vfuncPeerIsOwnerOfIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext): boolean
    vfuncSecurityContextOfKeychain(): SecurityContext
    vfuncSecurityContextOfPeer(peerCtx: SecurityContext, peerFd: number, peerService: string, peerAppCtx: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccessControlManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccessControlManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AccessControlManager_ConstructProps)
    _init (config?: AccessControlManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Config_ConstructProps extends GObject.Object_ConstructProps {
}
export class Config {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond.Config */
    getInteger(key: string): number
    getString(key: string): string | null
    setInteger(key: string, value: number): void
    setString(key: string, value: string): void
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Config
    static $gtype: GObject.Type
}
export interface Credentials_ConstructProps extends GObject.Object_ConstructProps {
}
export class Credentials {
    /* Fields of GSignond.Credentials */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond.Credentials */
    equal(two: Credentials): boolean
    getId(): number
    getPassword(): string | null
    getUsername(): string | null
    setData(id: number, username: string, password: string): boolean
    setId(id: number): boolean
    setPassword(password?: string | null): boolean
    setUsername(username?: string | null): boolean
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Credentials, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Credentials, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Credentials_ConstructProps)
    _init (config?: Credentials_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Credentials
    static $gtype: GObject.Type
}
export interface Dictionary_ConstructProps extends GObject.Object_ConstructProps {
}
export class Dictionary {
    /* Fields of GSignond.Dictionary */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond.Dictionary */
    contains(key: string): boolean
    copy(): Dictionary
    get(key: string): GLib.Variant | null
    getBoolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    getInt32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64(key: string): [ /* returnType */ boolean, /* value */ number ]
    getString(key: string): string | null
    getTable(): GLib.HashTable
    getUint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    remove(key: string): boolean
    set(key: string, value: GLib.Variant): boolean
    setBoolean(key: string, value: boolean): boolean
    setInt32(key: string, value: number): boolean
    setInt64(key: string, value: number): boolean
    setString(key: string, value: string): boolean
    setUint32(key: string, value: number): boolean
    setUint64(key: string, value: number): boolean
    toVariant(): GLib.Variant | null
    toVariantBuilder(): GLib.VariantBuilder | null
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Dictionary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Dictionary, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Dictionary_ConstructProps)
    _init (config?: Dictionary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Dictionary
    static newFromVariant(variant: GLib.Variant): Dictionary
    static $gtype: GObject.Type
}
export interface Extension_ConstructProps extends GObject.Object_ConstructProps {
}
export class Extension {
    /* Fields of GSignond.Extension */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond.Extension */
    getAccessControlManager(config: Config): AccessControlManager
    getName(): string
    getSecretStorage(config: Config): SecretStorage
    getStorageManager(config: Config): StorageManager
    getVersion(): number
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
    /* Virtual methods of GSignond.Extension */
    vfuncGetAccessControlManager(config: Config): AccessControlManager
    vfuncGetExtensionName(): string
    vfuncGetExtensionVersion(): number
    vfuncGetSecretStorage(config: Config): SecretStorage
    vfuncGetStorageManager(config: Config): StorageManager
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Extension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Extension, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Extension_ConstructProps)
    _init (config?: Extension_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SecretStorage_ConstructProps extends GObject.Object_ConstructProps {
    config?: Config
}
export class SecretStorage {
    /* Fields of GSignond.SecretStorage */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond.SecretStorage */
    checkCredentials(creds: Credentials): boolean
    clearDb(): boolean
    closeDb(): boolean
    getLastError(): GLib.Error
    isOpenDb(): boolean
    loadCredentials(id: number): Credentials | null
    loadData(id: number, method: number): Dictionary
    openDb(): boolean
    removeCredentials(id: number): boolean
    removeData(id: number, method: number): boolean
    updateCredentials(creds: Credentials): boolean
    updateData(id: number, method: number, data: Dictionary): boolean
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
    /* Virtual methods of GSignond.SecretStorage */
    vfuncCheckCredentials(creds: Credentials): boolean
    vfuncClearDb(): boolean
    vfuncCloseDb(): boolean
    vfuncGetLastError(): GLib.Error
    vfuncIsOpenDb(): boolean
    vfuncLoadCredentials(id: number): Credentials | null
    vfuncLoadData(id: number, method: number): Dictionary
    vfuncOpenDb(): boolean
    vfuncRemoveCredentials(id: number): boolean
    vfuncRemoveData(id: number, method: number): boolean
    vfuncUpdateCredentials(creds: Credentials): boolean
    vfuncUpdateData(id: number, method: number, data: Dictionary): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SecretStorage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SecretStorage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SecretStorage_ConstructProps)
    _init (config?: SecretStorage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SessionData_ConstructProps extends Dictionary_ConstructProps {
}
export class SessionData {
    /* Fields of GSignond.SessionData */
    parentInstance: Dictionary
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond.SessionData */
    copy(): SessionData
    getCaption(): string
    getNetworkProxy(): string
    getNetworkTimeout(): [ /* returnType */ boolean, /* networkTimeout */ number ]
    getRealm(): string
    getRenewToken(): [ /* returnType */ boolean, /* renewToken */ boolean ]
    getSecret(): string
    getUiPolicy(): [ /* returnType */ boolean, /* uiPolicy */ UiPolicy ]
    getUsername(): string
    getWindowId(): [ /* returnType */ boolean, /* windowId */ number ]
    setAllowedRealms(realms: GLib.Sequence): void
    setCaption(caption: string): void
    setNetworkProxy(networkProxy: string): void
    setNetworkTimeout(networkTimeout: number): void
    setRealm(realm: string): void
    setRenewToken(renewToken: boolean): void
    setSecret(secret: string): void
    setUiPolicy(uiPolicy: UiPolicy): void
    setUsername(username: string): void
    setWindowId(windowId: number): void
    /* Methods of GSignond.Dictionary */
    contains(key: string): boolean
    copy(): Dictionary
    get(key: string): GLib.Variant | null
    getBoolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    getInt32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64(key: string): [ /* returnType */ boolean, /* value */ number ]
    getString(key: string): string | null
    getTable(): GLib.HashTable
    getUint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    remove(key: string): boolean
    set(key: string, value: GLib.Variant): boolean
    setBoolean(key: string, value: boolean): boolean
    setInt32(key: string, value: number): boolean
    setInt64(key: string, value: number): boolean
    setString(key: string, value: string): boolean
    setUint32(key: string, value: number): boolean
    setUint64(key: string, value: number): boolean
    toVariant(): GLib.Variant | null
    toVariantBuilder(): GLib.VariantBuilder | null
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SessionData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SessionData, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SessionData_ConstructProps)
    _init (config?: SessionData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SessionData
    static newFromVariant(variant: GLib.Variant): SessionData
    static $gtype: GObject.Type
}
export interface SignonuiData_ConstructProps extends Dictionary_ConstructProps {
}
export class SignonuiData {
    /* Fields of GSignond.SignonuiData */
    parentInstance: Dictionary
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond.SignonuiData */
    copy(): SignonuiData
    getCaptchaResponse(): string | null
    getCaptchaUrl(): string | null
    getCaption(): string | null
    getConfirm(): [ /* returnType */ boolean, /* confirm */ boolean ]
    getFinalUrl(): string | null
    getForgotPassword(): string | null
    getForgotPasswordUrl(): string | null
    getMessage(): string | null
    getOpenUrl(): string | null
    getPassword(): string | null
    getQueryError(): [ /* returnType */ boolean, /* error */ SignonuiError ]
    getQueryPassword(): [ /* returnType */ boolean, /* queryPassword */ boolean ]
    getQueryUsername(): [ /* returnType */ boolean, /* queryUsername */ boolean ]
    getRememberPassword(): [ /* returnType */ boolean, /* rememberPassword */ boolean ]
    getRequestId(): string | null
    getTestReply(): string | null
    getTitle(): string | null
    getUrlResponse(): string | null
    getUsername(): string | null
    setCaptchaResponse(response: string): void
    setCaptchaUrl(url: string): void
    setCaption(caption: string): void
    setConfirm(confirm: boolean): void
    setFinalUrl(url: string): void
    setForgotPassword(forgot: string): void
    setForgotPasswordUrl(url: string): void
    setMessage(message: string): void
    setOpenUrl(url: string): void
    setPassword(password: string): void
    setQueryError(error: SignonuiError): void
    setQueryPassword(query: boolean): void
    setQueryUsername(query: boolean): void
    setRememberPassword(remember: boolean): void
    setRequestId(id: string): void
    setTestReply(reply: string): void
    setTitle(title: string): void
    setUrlResponse(response: string): void
    setUsername(username: string): void
    /* Methods of GSignond.Dictionary */
    contains(key: string): boolean
    copy(): Dictionary
    get(key: string): GLib.Variant | null
    getBoolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    getInt32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64(key: string): [ /* returnType */ boolean, /* value */ number ]
    getString(key: string): string | null
    getTable(): GLib.HashTable
    getUint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    remove(key: string): boolean
    set(key: string, value: GLib.Variant): boolean
    setBoolean(key: string, value: boolean): boolean
    setInt32(key: string, value: number): boolean
    setInt64(key: string, value: number): boolean
    setString(key: string, value: string): boolean
    setUint32(key: string, value: number): boolean
    setUint64(key: string, value: number): boolean
    toVariant(): GLib.Variant | null
    toVariantBuilder(): GLib.VariantBuilder | null
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SignonuiData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SignonuiData, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SignonuiData_ConstructProps)
    _init (config?: SignonuiData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SignonuiData
    static newFromVariant(variant: GLib.Variant): SignonuiData
    static $gtype: GObject.Type
}
export interface StorageManager_ConstructProps extends GObject.Object_ConstructProps {
    config?: Config
}
export class StorageManager {
    /* Fields of GSignond.StorageManager */
    parentInstance: GObject.Object
    config: Config
    location: string
    priv: StorageManagerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond.StorageManager */
    deleteStorage(): boolean
    filesystemIsMounted(): boolean
    initializeStorage(): boolean
    mountFilesystem(): string
    storageIsInitialized(): boolean
    unmountFilesystem(): boolean
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
    /* Virtual methods of GSignond.StorageManager */
    vfuncDeleteStorage(): boolean
    vfuncFilesystemIsMounted(): boolean
    vfuncInitializeStorage(): boolean
    vfuncMountFilesystem(): string
    vfuncStorageIsInitialized(): boolean
    vfuncUnmountFilesystem(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StorageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StorageManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StorageManager_ConstructProps)
    _init (config?: StorageManager_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AccessControlManagerClass {
    /* Fields of GSignond.AccessControlManagerClass */
    parentClass: GObject.ObjectClass
    securityContextOfPeer: (self: AccessControlManager, peerCtx: SecurityContext, peerFd: number, peerService: string, peerAppCtx: string) => void
    peerIsAllowedToUseIdentity: (self: AccessControlManager, peerCtx: SecurityContext, ownerCtx: SecurityContext, identityAcl: SecurityContext[]) => boolean
    peerIsOwnerOfIdentity: (self: AccessControlManager, peerCtx: SecurityContext, ownerCtx: SecurityContext) => boolean
    aclIsValid: (self: AccessControlManager, peerCtx: SecurityContext, identityAcl: SecurityContext[]) => boolean
    securityContextOfKeychain: (self: AccessControlManager) => SecurityContext
    static name: string
}
export class AccessControlManagerPrivate {
    static name: string
}
export abstract class ConfigClass {
    /* Fields of GSignond.ConfigClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class CredentialsClass {
    static name: string
}
export abstract class DictionaryClass {
    static name: string
}
export abstract class ExtensionClass {
    /* Fields of GSignond.ExtensionClass */
    parentClass: GObject.ObjectClass
    getExtensionName: (self: Extension) => string
    getExtensionVersion: (self: Extension) => number
    getStorageManager: (self: Extension, config: Config) => StorageManager
    getSecretStorage: (self: Extension, config: Config) => SecretStorage
    getAccessControlManager: (self: Extension, config: Config) => AccessControlManager
    static name: string
}
export abstract class PluginInterface {
    /* Fields of GSignond.PluginInterface */
    parent: GObject.TypeInterface
    cancel: (self: Plugin) => void
    requestInitial: (self: Plugin, sessionData: SessionData, identityMethodCache: Dictionary, mechanism: string) => void
    request: (self: Plugin, sessionData: SessionData) => void
    userActionFinished: (self: Plugin, uiData: SignonuiData) => void
    refresh: (self: Plugin, uiData: SignonuiData) => void
    static name: string
}
export abstract class SecretStorageClass {
    /* Fields of GSignond.SecretStorageClass */
    parentClass: GObject.ObjectClass
    openDb: (self: SecretStorage) => boolean
    closeDb: (self: SecretStorage) => boolean
    clearDb: (self: SecretStorage) => boolean
    isOpenDb: (self: SecretStorage) => boolean
    loadCredentials: (self: SecretStorage, id: number) => Credentials | null
    updateCredentials: (self: SecretStorage, creds: Credentials) => boolean
    removeCredentials: (self: SecretStorage, id: number) => boolean
    checkCredentials: (self: SecretStorage, creds: Credentials) => boolean
    loadData: (self: SecretStorage, id: number, method: number) => Dictionary
    updateData: (self: SecretStorage, id: number, method: number, data: Dictionary) => boolean
    removeData: (self: SecretStorage, id: number, method: number) => boolean
    getLastError: (self: SecretStorage) => GLib.Error
    static name: string
}
export class SecretStoragePrivate {
    static name: string
}
export class SecurityContext {
    /* Fields of GSignond.SecurityContext */
    sysCtx: string
    appCtx: string
    /* Methods of GSignond.SecurityContext */
    check(test: SecurityContext): boolean
    compare(ctx2: SecurityContext): number
    copy(): SecurityContext
    free(): void
    getApplicationContext(): string
    getSystemContext(): string
    match(ctx2: SecurityContext): boolean
    setApplicationContext(applicationContext: string): void
    setSystemContext(systemContext: string): void
    toVariant(): GLib.Variant
    static name: string
    static new(): SecurityContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SecurityContext
    static newFromValues(systemContext: string, applicationContext: string): SecurityContext
    static fromVariant(variant: GLib.Variant): SecurityContext
}
export abstract class SessionDataClass {
    static name: string
}
export abstract class SignonuiDataClass {
    static name: string
}
export abstract class StorageManagerClass {
    /* Fields of GSignond.StorageManagerClass */
    parentClass: GObject.ObjectClass
    initializeStorage: (self: StorageManager) => boolean
    deleteStorage: (self: StorageManager) => boolean
    storageIsInitialized: (self: StorageManager) => boolean
    mountFilesystem: (self: StorageManager) => string
    unmountFilesystem: (self: StorageManager) => boolean
    filesystemIsMounted: (self: StorageManager) => boolean
    static name: string
}
export class StorageManagerPrivate {
    static name: string
}
}