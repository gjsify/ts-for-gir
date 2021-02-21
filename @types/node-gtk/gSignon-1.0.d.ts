/**
 * gSignon-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace gSignon {

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
export function errorQuark(): GLib.Quark
export function securityContextDeconstructVariant(variant: GLib.Variant): SecurityContext
export function securityContextListBuildVariant(list: SecurityContext[]): GLib.Variant
export function securityContextListDeconstructVariant(variant: GLib.Variant): SecurityContext[]
export interface AuthSessionProcessCb {
    (self: AuthSession, sessionData: GLib.HashTable, error: GLib.Error): void
}
export interface AuthSessionQueryAvailableMechanismsCb {
    (self: AuthSession, mechanisms: string[], error: GLib.Error): void
}
export interface ClearCb {
    (authService: AuthService, success: boolean, error: GLib.Error): void
}
export interface IdentityInfoCb {
    (self: Identity, info: IdentityInfo, error: GLib.Error): void
}
export interface IdentitySessionReadyCb {
    (self: AuthSession, error: GLib.Error, connection: Gio.DBusConnection, busName: string, objectPath: string): void
}
export interface IdentityStoreCredentialsCb {
    (self: Identity, id: number, error: GLib.Error): void
}
export interface IdentityVerifyCb {
    (self: Identity, valid: boolean, error: GLib.Error): void
}
export interface IdentityVoidCb {
    (self: Identity, error: GLib.Error): void
}
export interface QueryIdentitiesCb {
    (authService: AuthService, identities: Identity[], error: GLib.Error): void
}
export interface QueryMechanismCb {
    (authService: AuthService, method: string, mechanisms: string[], error: GLib.Error): void
}
export interface QueryMethodsCb {
    (authService: AuthService, methods: string[], error: GLib.Error): void
}
export interface AuthService_ConstructProps extends GObject.Object_ConstructProps {
}
export class AuthService {
    /* Fields of gSignon-1.0.gSignon.AuthService */
    parentInstance: GObject.Object
    priv: AuthServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of gSignon-1.0.gSignon.AuthService */
    clear(cb: ClearCb): void
    queryIdentities(filter: GLib.HashTable, applicationContext: string, cb: QueryIdentitiesCb): void
    queryMechanisms(method: string, cb: QueryMechanismCb): void
    queryMethods(cb: QueryMethodsCb): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthService, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AuthService_ConstructProps)
    _init (config?: AuthService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AuthService
    static $gtype: GObject.Type
}
export interface AuthSession_ConstructProps extends GObject.Object_ConstructProps {
    identity?: Identity
}
export class AuthSession {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of gSignon-1.0.gSignon.AuthSession */
    cancel(): void
    getMethod(): string
    process(sessionData: GLib.HashTable, mechanism: string, cb: AuthSessionProcessCb): void
    processAsync(sessionData: GLib.Variant, mechanism: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    processFinish(res: Gio.AsyncResult): GLib.Variant
    queryAvailableMechanisms(wantedMechanisms: string, cb: AuthSessionQueryAvailableMechanismsCb): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of gSignon-1.0.gSignon.AuthSession */
    connect(sigName: "state-changed", callback: (($obj: AuthSession, state: number, message: string) => void)): number
    on(sigName: "state-changed", callback: (state: number, message: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: number, message: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: number, message: string) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: number, message: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AuthSession_ConstructProps)
    _init (config?: AuthSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, methodName: string): AuthSession
    static newForIdentity(identity: Identity, methodName: string): AuthSession
    static $gtype: GObject.Type
}
export interface Identity_ConstructProps extends GObject.Object_ConstructProps {
    appCtx?: string
    id?: number
}
export class Identity {
    /* Properties of gSignon-1.0.gSignon.Identity */
    appCtx: string
    id: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of gSignon-1.0.gSignon.Identity */
    addReference(reference: string, cb: IdentityReferenceAddedCb): void
    createSession(method: string): AuthSession
    getAuthSession(session: AuthSession, method: string, cb: IdentitySessionReadyCb): void
    getLastError(): GLib.Error
    queryInfo(cb: IdentityInfoCb): void
    remove(cb: IdentityRemovedCb): void
    removeReference(reference: string, cb: IdentityReferenceRemovedCb): void
    requestCredentialsUpdate(message: string, cb: IdentityCredentialsUpdatedCb): void
    signout(cb: IdentitySignedOutCb): void
    storeCredentialsWithArgs(username: string | null, secret: string | null, storeSecret: boolean, methods: GLib.HashTable, caption: string | null, realms: string | null, owner: SecurityContext | null, accessControlList: SecurityContext[] | null, type: IdentityType, cb: IdentityStoreCredentialsCb): void
    storeCredentialsWithInfo(info: IdentityInfo, cb: IdentityStoreCredentialsCb): void
    verifyUser(args: GLib.Variant, cb: IdentityVerifyCb): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of gSignon-1.0.gSignon.Identity */
    connect(sigName: "removed", callback: (($obj: Identity) => void)): number
    on(sigName: "removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "removed"): void
    connect(sigName: "signout", callback: (($obj: Identity) => void)): number
    on(sigName: "signout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signout", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "signout"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-ctx", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-ctx", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-ctx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-ctx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-ctx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Identity_ConstructProps)
    _init (config?: Identity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Identity
    static newFromDb(id: number): Identity
    static newWithContext(applicationContext: string): Identity
    static newWithContextFromDb(id: number, applicationContext: string): Identity
    static $gtype: GObject.Type
}
export abstract class AuthServiceClass {
    /* Fields of gSignon-1.0.gSignon.AuthServiceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AuthServicePrivate {
    static name: string
}
export abstract class AuthSessionClass {
    /* Fields of gSignon-1.0.gSignon.AuthSessionClass */
    parent: GObject.ObjectClass
    static name: string
}
export class AuthSessionPrivate {
    static name: string
}
export abstract class IdentityClass {
    /* Fields of gSignon-1.0.gSignon.IdentityClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class IdentityInfo {
    /* Methods of gSignon-1.0.gSignon.IdentityInfo */
    accessControlListAppend(securityContext: SecurityContext): void
    copy(): IdentityInfo
    free(): void
    getAccessControlList(): SecurityContext[]
    getCaption(): string
    getId(): number
    getIdentityType(): IdentityType
    getMethods(): GLib.HashTable
    getOwner(): SecurityContext
    getRealms(): string[]
    getStoringSecret(): boolean
    getUsername(): string
    ownMethods(methods: GLib.HashTable): void
    removeMethod(method: string): void
    setAccessControlList(accessControlList: SecurityContext[]): void
    setCaption(caption: string): void
    setIdentityType(type: IdentityType): void
    setMethod(method: string, mechanisms: string[]): void
    setMethods(methods: GLib.HashTable): void
    setOwner(owner: SecurityContext): void
    setOwnerFromValues(systemContext: string, applicationContext: string): void
    setRealms(realms: string[]): void
    setSecret(secret: string, storeSecret: boolean): void
    setUsername(username: string): void
    static name: string
    static new(): IdentityInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IdentityInfo
}
export class IdentityPrivate {
    static name: string
}
export class SecurityContext {
    /* Fields of gSignon-1.0.gSignon.SecurityContext */
    sysCtx: string
    appCtx: string
    /* Methods of gSignon-1.0.gSignon.SecurityContext */
    buildVariant(): GLib.Variant
    copy(): SecurityContext
    free(): void
    getApplicationContext(): string
    getSystemContext(): string
    setApplicationContext(applicationContext: string): void
    setSystemContext(systemContext: string): void
    static name: string
    static new(): SecurityContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SecurityContext
    static newFromValues(systemContext: string, applicationContext: string): SecurityContext
    static deconstructVariant(variant: GLib.Variant): SecurityContext
    static listBuildVariant(list: SecurityContext[]): GLib.Variant
    static listDeconstructVariant(variant: GLib.Variant): SecurityContext[]
}
export class _AuthSession {
    /* Fields of gSignon-1.0.gSignon._AuthSession */
    parent: GObject.Object
    priv: AuthSessionPrivate
    static name: string
}
export class _Identity {
    /* Fields of gSignon-1.0.gSignon._Identity */
    parentInstance: GObject.Object
    priv: IdentityPrivate
    static name: string
}
export type AuthSessionQueryAvailableMethodsCb = AuthSessionQueryAvailableMechanismsCb
export type IdentityCredentialsUpdatedCb = IdentityVoidCb
export type IdentityReferenceAddedCb = IdentityVoidCb
export type IdentityReferenceRemovedCb = IdentityVoidCb
export type IdentityRemovedCb = IdentityVoidCb
export type IdentitySignedOutCb = IdentityVoidCb
}