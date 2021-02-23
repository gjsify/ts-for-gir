/**
 * Polkit-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Polkit {

export enum Error {
    FAILED,
    CANCELLED,
    NOT_SUPPORTED,
    NOT_AUTHORIZED,
}
export enum ImplicitAuthorization {
    UNKNOWN,
    NOT_AUTHORIZED,
    AUTHENTICATION_REQUIRED,
    ADMINISTRATOR_AUTHENTICATION_REQUIRED,
    AUTHENTICATION_REQUIRED_RETAINED,
    ADMINISTRATOR_AUTHENTICATION_REQUIRED_RETAINED,
    AUTHORIZED,
}
export enum AuthorityFeatures {
    NONE,
    TEMPORARY_AUTHORIZATION,
}
export enum CheckAuthorizationFlags {
    NONE,
    ALLOW_USER_INTERACTION,
}
export function errorQuark(): GLib.Quark
export function identityFromString(str: string): Identity | null
export function implicitAuthorizationFromString(string: string, outImplicitAuthorization: ImplicitAuthorization): boolean
export function implicitAuthorizationToString(implicitAuthorization: ImplicitAuthorization): string
export function subjectFromString(str: string): Subject
export class Identity {
    /* Methods of Polkit-1.0.Polkit.Identity */
    equal(b: Identity): boolean
    hash(): number
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static fromString(str: string): Identity | null
}
export class Subject {
    /* Methods of Polkit-1.0.Polkit.Subject */
    equal(b: Subject): boolean
    exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    existsFinish(res: Gio.AsyncResult): boolean
    existsSync(cancellable?: Gio.Cancellable | null): boolean
    hash(): number
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static fromString(str: string): Subject
}
export interface ActionDescription_ConstructProps extends GObject.Object_ConstructProps {
}
export class ActionDescription {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.ActionDescription */
    getActionId(): string
    getAnnotation(key: string): string | null
    getAnnotationKeys(): string[]
    getDescription(): string
    getIconName(): string
    getImplicitActive(): ImplicitAuthorization
    getImplicitAny(): ImplicitAuthorization
    getImplicitInactive(): ImplicitAuthorization
    getMessage(): string
    getVendorName(): string
    getVendorUrl(): string
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
    connect(sigName: "notify", callback: (($obj: ActionDescription, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ActionDescription_ConstructProps)
    _init (config?: ActionDescription_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Authority_ConstructProps extends GObject.Object_ConstructProps {
}
export class Authority {
    /* Properties of Polkit-1.0.Polkit.Authority */
    readonly backendFeatures: AuthorityFeatures
    readonly backendName: string
    readonly backendVersion: string
    readonly owner: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.Authority */
    authenticationAgentResponse(cookie: string, identity: Identity, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticationAgentResponseFinish(res: Gio.AsyncResult): boolean
    authenticationAgentResponseSync(cookie: string, identity: Identity, cancellable?: Gio.Cancellable | null): boolean
    checkAuthorization(subject: Subject, actionId: string, details: Details | null, flags: CheckAuthorizationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    checkAuthorizationFinish(res: Gio.AsyncResult): AuthorizationResult
    checkAuthorizationSync(subject: Subject, actionId: string, details: Details | null, flags: CheckAuthorizationFlags, cancellable?: Gio.Cancellable | null): AuthorizationResult
    enumerateActions(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enumerateActionsFinish(res: Gio.AsyncResult): ActionDescription[]
    enumerateActionsSync(cancellable?: Gio.Cancellable | null): ActionDescription[]
    enumerateTemporaryAuthorizations(subject: Subject, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enumerateTemporaryAuthorizationsFinish(res: Gio.AsyncResult): TemporaryAuthorization[]
    enumerateTemporaryAuthorizationsSync(subject: Subject, cancellable?: Gio.Cancellable | null): TemporaryAuthorization[]
    getBackendFeatures(): AuthorityFeatures
    getBackendName(): string
    getBackendVersion(): string
    getOwner(): string | null
    registerAuthenticationAgent(subject: Subject, locale: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    registerAuthenticationAgentFinish(res: Gio.AsyncResult): boolean
    registerAuthenticationAgentSync(subject: Subject, locale: string, objectPath: string, cancellable?: Gio.Cancellable | null): boolean
    registerAuthenticationAgentWithOptions(subject: Subject, locale: string, objectPath: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    registerAuthenticationAgentWithOptionsFinish(res: Gio.AsyncResult): boolean
    registerAuthenticationAgentWithOptionsSync(subject: Subject, locale: string, objectPath: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    revokeTemporaryAuthorizationById(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    revokeTemporaryAuthorizationByIdFinish(res: Gio.AsyncResult): boolean
    revokeTemporaryAuthorizationByIdSync(id: string, cancellable?: Gio.Cancellable | null): boolean
    revokeTemporaryAuthorizations(subject: Subject, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    revokeTemporaryAuthorizationsFinish(res: Gio.AsyncResult): boolean
    revokeTemporaryAuthorizationsSync(subject: Subject, cancellable?: Gio.Cancellable | null): boolean
    unregisterAuthenticationAgent(subject: Subject, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unregisterAuthenticationAgentFinish(res: Gio.AsyncResult): boolean
    unregisterAuthenticationAgentSync(subject: Subject, objectPath: string, cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Polkit-1.0.Polkit.Authority */
    connect(sigName: "changed", callback: (($obj: Authority) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend-features", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-features", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-name", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-version", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-version", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Authority_ConstructProps)
    _init (config?: Authority_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): Authority
    static getAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFinish(res: Gio.AsyncResult): Authority
    static getSync(cancellable?: Gio.Cancellable | null): Authority
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface AuthorizationResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class AuthorizationResult {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.AuthorizationResult */
    getDetails(): Details | null
    getDismissed(): boolean
    getIsAuthorized(): boolean
    getIsChallenge(): boolean
    getRetainsAuthorization(): boolean
    getTemporaryAuthorizationId(): string | null
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
    connect(sigName: "notify", callback: (($obj: AuthorizationResult, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AuthorizationResult_ConstructProps)
    _init (config?: AuthorizationResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(isAuthorized: boolean, isChallenge: boolean, details?: Details | null): AuthorizationResult
    static $gtype: GObject.Type
}
export interface Details_ConstructProps extends GObject.Object_ConstructProps {
}
export class Details {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.Details */
    getKeys(): string[] | null
    insert(key: string, value?: string | null): void
    lookup(key: string): string | null
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
    connect(sigName: "notify", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Details_ConstructProps)
    _init (config?: Details_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Details
    static $gtype: GObject.Type
}
export interface Permission_ConstructProps extends Gio.Permission_ConstructProps {
    actionId?: string
    subject?: Subject
}
export class Permission {
    /* Properties of Gio-2.0.Gio.Permission */
    readonly allowed: boolean
    readonly canAcquire: boolean
    readonly canRelease: boolean
    /* Fields of Gio-2.0.Gio.Permission */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.Permission */
    getActionId(): string
    getSubject(): Subject
    /* Methods of Gio-2.0.Gio.Permission */
    acquire(cancellable?: Gio.Cancellable | null): boolean
    acquireAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireFinish(result: Gio.AsyncResult): boolean
    getAllowed(): boolean
    getCanAcquire(): boolean
    getCanRelease(): boolean
    implUpdate(allowed: boolean, canAcquire: boolean, canRelease: boolean): void
    release(cancellable?: Gio.Cancellable | null): boolean
    releaseAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    releaseFinish(result: Gio.AsyncResult): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-acquire", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-acquire", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-release", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-release", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Permission_ConstructProps)
    _init (config?: Permission_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): Permission
    static newSync(actionId: string, subject?: Subject | null, cancellable?: Gio.Cancellable | null): Permission
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SystemBusName_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
}
export class SystemBusName {
    /* Properties of Polkit-1.0.Polkit.SystemBusName */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.SystemBusName */
    getName(): string
    getProcessSync(cancellable?: Gio.Cancellable | null): Subject | null
    getUserSync(cancellable?: Gio.Cancellable | null): UnixUser | null
    setName(name: string): void
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
    /* Methods of Polkit-1.0.Polkit.Subject */
    equal(b: Subject): boolean
    exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    existsFinish(res: Gio.AsyncResult): boolean
    existsSync(cancellable?: Gio.Cancellable | null): boolean
    hash(): number
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemBusName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: SystemBusName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SystemBusName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SystemBusName_ConstructProps)
    _init (config?: SystemBusName_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromString(str: string): Subject
    static $gtype: GObject.Type
}
export interface TemporaryAuthorization_ConstructProps extends GObject.Object_ConstructProps {
}
export class TemporaryAuthorization {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.TemporaryAuthorization */
    getActionId(): string
    getId(): string
    getSubject(): Subject
    getTimeExpires(): number
    getTimeObtained(): number
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
    connect(sigName: "notify", callback: (($obj: TemporaryAuthorization, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TemporaryAuthorization_ConstructProps)
    _init (config?: TemporaryAuthorization_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UnixGroup_ConstructProps extends GObject.Object_ConstructProps {
    gid?: number
}
export class UnixGroup {
    /* Properties of Polkit-1.0.Polkit.UnixGroup */
    gid: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.UnixGroup */
    getGid(): number
    setGid(gid: number): void
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
    /* Methods of Polkit-1.0.Polkit.Identity */
    equal(b: Identity): boolean
    hash(): number
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gid", callback: (($obj: UnixGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gid", callback: (($obj: UnixGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixGroup_ConstructProps)
    _init (config?: UnixGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForName(name: string): Identity
    static fromString(str: string): Identity | null
    static $gtype: GObject.Type
}
export interface UnixNetgroup_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
}
export class UnixNetgroup {
    /* Properties of Polkit-1.0.Polkit.UnixNetgroup */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.UnixNetgroup */
    getName(): string
    setName(name: string): void
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
    /* Methods of Polkit-1.0.Polkit.Identity */
    equal(b: Identity): boolean
    hash(): number
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixNetgroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: UnixNetgroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: UnixNetgroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixNetgroup_ConstructProps)
    _init (config?: UnixNetgroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromString(str: string): Identity | null
    static $gtype: GObject.Type
}
export interface UnixProcess_ConstructProps extends GObject.Object_ConstructProps {
    pid?: number
    startTime?: number
    uid?: number
}
export class UnixProcess {
    /* Properties of Polkit-1.0.Polkit.UnixProcess */
    pid: number
    startTime: number
    uid: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.UnixProcess */
    getOwner(): number
    getPid(): number
    getStartTime(): number
    getUid(): number
    setPid(pid: number): void
    setStartTime(startTime: number): void
    setUid(uid: number): void
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
    /* Methods of Polkit-1.0.Polkit.Subject */
    equal(b: Subject): boolean
    exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    existsFinish(res: Gio.AsyncResult): boolean
    existsSync(cancellable?: Gio.Cancellable | null): boolean
    hash(): number
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::pid", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pid", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixProcess_ConstructProps)
    _init (config?: UnixProcess_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForOwner(pid: number, startTime: number, uid: number): Subject
    static newFull(pid: number, startTime: number): Subject
    static fromString(str: string): Subject
    static $gtype: GObject.Type
}
export interface UnixSession_ConstructProps extends GObject.Object_ConstructProps {
    pid?: number
    sessionId?: string
}
export class UnixSession {
    /* Properties of Polkit-1.0.Polkit.UnixSession */
    sessionId: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.UnixSession */
    getSessionId(): string
    setSessionId(sessionId: string): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Polkit-1.0.Polkit.Subject */
    equal(b: Subject): boolean
    exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    existsFinish(res: Gio.AsyncResult): boolean
    existsSync(cancellable?: Gio.Cancellable | null): boolean
    hash(): number
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixSession, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::session-id", callback: (($obj: UnixSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-id", callback: (($obj: UnixSession, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixSession_ConstructProps)
    _init (config?: UnixSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForProcess(pid: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForProcessFinish(res: Gio.AsyncResult): Subject | null
    static newForProcessSync(pid: number, cancellable?: Gio.Cancellable | null): Subject | null
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static fromString(str: string): Subject
    static $gtype: GObject.Type
}
export interface UnixUser_ConstructProps extends GObject.Object_ConstructProps {
    uid?: number
}
export class UnixUser {
    /* Properties of Polkit-1.0.Polkit.UnixUser */
    uid: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.UnixUser */
    getName(): string | null
    getUid(): number
    setUid(uid: number): void
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
    /* Methods of Polkit-1.0.Polkit.Identity */
    equal(b: Identity): boolean
    hash(): number
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uid", callback: (($obj: UnixUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: UnixUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixUser_ConstructProps)
    _init (config?: UnixUser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForName(name: string): Identity | null
    static fromString(str: string): Identity | null
    static $gtype: GObject.Type
}
export abstract class ActionDescriptionClass {
    static name: string
}
export abstract class AuthorityClass {
    static name: string
}
export abstract class AuthorizationResultClass {
    static name: string
}
export abstract class DetailsClass {
    static name: string
}
export abstract class IdentityIface {
    /* Fields of Polkit-1.0.Polkit.IdentityIface */
    parentIface: GObject.TypeInterface
    hash: (identity: Identity) => number
    equal: (a: Identity, b: Identity) => boolean
    toString: (identity: Identity) => string
    static name: string
}
export abstract class SubjectIface {
    /* Fields of Polkit-1.0.Polkit.SubjectIface */
    parentIface: GObject.TypeInterface
    hash: (subject: Subject) => number
    equal: (a: Subject, b: Subject) => boolean
    toString: (subject: Subject) => string
    exists: (subject: Subject, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    existsFinish: (subject: Subject, res: Gio.AsyncResult) => boolean
    existsSync: (subject: Subject, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
export abstract class SystemBusNameClass {
    static name: string
}
export abstract class TemporaryAuthorizationClass {
    static name: string
}
export abstract class UnixGroupClass {
    static name: string
}
export abstract class UnixNetgroupClass {
    static name: string
}
export abstract class UnixProcessClass {
    static name: string
}
export abstract class UnixSessionClass {
    static name: string
}
export abstract class UnixUserClass {
    static name: string
}
}