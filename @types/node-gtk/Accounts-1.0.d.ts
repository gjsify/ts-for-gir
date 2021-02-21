/**
 * Accounts-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Accounts {

export enum AccountsError {
    DB,
    DISPOSED,
    DELETED,
    DB_LOCKED,
    ACCOUNT_NOT_FOUND,
    STORE_IN_PROGRESS,
    READONLY,
}
export enum Error {
    DB,
    DISPOSED,
    DELETED,
    DB_LOCKED,
    ACCOUNT_NOT_FOUND,
}
export enum SettingSource {
    NONE,
    ACCOUNT,
    PROFILE,
}
export const MANAGER_INTERFACE: string
export const MANAGER_OBJECT_PATH: string
export const MANAGER_SERVICE_NAME: string
export function accountsErrorQuark(): GLib.Quark
export function errorsQuark(): GLib.Quark
export function providerListFree(list: Provider[]): void
export function serviceListFree(list: Service[]): void
export function serviceTypeListFree(list: ServiceType[]): void
export interface AccountNotifyCb {
    (account: Account, key: string): void
}
export interface AccountStoreCb {
    (account: Account, error: GLib.Error): void
}
export interface Account_ConstructProps extends GObject.Object_ConstructProps {
    foreign?: boolean
    id?: number
    manager?: Manager
    provider?: string
}
export class Account {
    /* Properties of Accounts-1.0.Accounts.Account */
    readonly displayName: string
    readonly enabled: boolean
    /* Fields of Accounts-1.0.Accounts.Account */
    parentInstance: GObject.Object
    id: AccountId
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.Account */
    delete(): void
    getDisplayName(): string
    getEnabled(): boolean
    getManager(): Manager
    getProviderName(): string
    getSelectedService(): Service
    getSettingsIter(keyPrefix?: string | null): AccountSettingIter
    getValue(key: string, value: any): { returnType: SettingSource, value: any }
    getVariant(key: string): { returnType: GLib.Variant, source: SettingSource | null }
    listEnabledServices(): Service[]
    listServices(): Service[]
    listServicesByType(serviceType: string): Service[]
    removeWatch(watch: AccountWatch): void
    selectService(service?: Service | null): void
    setDisplayName(displayName: string): void
    setEnabled(enabled: boolean): void
    setValue(key: string, value?: any | null): void
    setVariant(key: string, value?: GLib.Variant | null): void
    settingsIterInit(iter: AccountSettingIter, keyPrefix?: string | null): void
    sign(key: string, token: string): void
    store(callback: AccountStoreCb): void
    storeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    storeBlocking(): boolean
    storeFinish(res: Gio.AsyncResult): boolean
    supportsService(serviceType: string): boolean
    verify(key: string, token: string): boolean
    verifyWithTokens(key: string, tokens: string): boolean
    watchDir(keyPrefix: string, callback: AccountNotifyCb): AccountWatch
    watchKey(key: string, callback: AccountNotifyCb): AccountWatch
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Accounts-1.0.Accounts.Account */
    connect(sigName: "deleted", callback: (($obj: Account) => void)): number
    on(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deleted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deleted"): void
    connect(sigName: "display-name-changed", callback: (($obj: Account) => void)): number
    on(sigName: "display-name-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-name-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-name-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "display-name-changed"): void
    connect(sigName: "enabled", callback: (($obj: Account, service: string, enabled: boolean) => void)): number
    on(sigName: "enabled", callback: (service: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enabled", callback: (service: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enabled", callback: (service: string, enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "enabled", service: string, enabled: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display-name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Account_ConstructProps)
    _init (config?: Account_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface AccountService_ConstructProps extends GObject.Object_ConstructProps {
    account?: Account
    service?: Service
}
export class AccountService {
    /* Properties of Accounts-1.0.Accounts.AccountService */
    readonly enabled: boolean
    /* Fields of Accounts-1.0.Accounts.AccountService */
    parentInstance: GObject.Object
    priv: AccountServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.AccountService */
    getAccount(): Account
    getAuthData(): AuthData
    getChangedFields(): string[]
    getEnabled(): boolean
    getService(): Service
    getSettingsIter(keyPrefix?: string | null): AccountSettingIter
    getValue(key: string, value: any): { returnType: SettingSource, value: any }
    getVariant(key: string): { returnType: GLib.Variant, source: SettingSource | null }
    setValue(key: string, value?: any | null): void
    setVariant(key: string, value?: GLib.Variant | null): void
    settingsIterInit(iter: AccountSettingIter, keyPrefix?: string | null): void
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
    /* Signals of Accounts-1.0.Accounts.AccountService */
    connect(sigName: "changed", callback: (($obj: AccountService) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "enabled", callback: (($obj: AccountService, enabled: boolean) => void)): number
    on(sigName: "enabled", callback: (enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enabled", callback: (enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enabled", callback: (enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "enabled", enabled: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccountService_ConstructProps)
    _init (config?: AccountService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(account: Account, service?: Service | null): AccountService
    static settingsIterNext(iter: AccountSettingIter): { returnType: boolean, key: string, value: any }
    static $gtype: GObject.Type
}
export interface Manager_ConstructProps extends GObject.Object_ConstructProps {
    abortOnDbTimeout?: boolean
    dbTimeout?: number
    serviceType?: string
    useDbus?: boolean
}
export class Manager {
    /* Properties of Accounts-1.0.Accounts.Manager */
    abortOnDbTimeout: boolean
    dbTimeout: number
    /* Fields of Accounts-1.0.Accounts.Manager */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.Manager */
    createAccount(providerName: string): Account
    getAbortOnDbTimeout(): boolean
    getAccount(accountId: AccountId): Account
    getAccountServices(): AccountService[]
    getApplication(applicationName: string): Application
    getDbTimeout(): number
    getEnabledAccountServices(): AccountService[]
    getProvider(providerName: string): Provider
    getService(serviceName: string): Service
    getServiceType(): string
    list(): AccountId[]
    listApplicationsByService(service: Service): Application[]
    listByServiceType(serviceType: string): AccountId[]
    listEnabled(): AccountId[]
    listEnabledByServiceType(serviceType: string): AccountId[]
    listProviders(): Provider[]
    listServiceTypes(): ServiceType[]
    listServices(): Service[]
    listServicesByType(serviceType: string): Service[]
    loadAccount(accountId: AccountId): Account
    loadServiceType(serviceType: string): ServiceType
    setAbortOnDbTimeout(abort: boolean): void
    setDbTimeout(timeoutMs: number): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Accounts-1.0.Accounts.Manager */
    connect(sigName: "account-created", callback: (($obj: Manager, accountId: number) => void)): number
    on(sigName: "account-created", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-created", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-created", callback: (accountId: number) => void): NodeJS.EventEmitter
    emit(sigName: "account-created", accountId: number): void
    connect(sigName: "account-deleted", callback: (($obj: Manager, accountId: number) => void)): number
    on(sigName: "account-deleted", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-deleted", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-deleted", callback: (accountId: number) => void): NodeJS.EventEmitter
    emit(sigName: "account-deleted", accountId: number): void
    connect(sigName: "account-updated", callback: (($obj: Manager, accountId: number) => void)): number
    on(sigName: "account-updated", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-updated", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-updated", callback: (accountId: number) => void): NodeJS.EventEmitter
    emit(sigName: "account-updated", accountId: number): void
    connect(sigName: "enabled-event", callback: (($obj: Manager, accountId: number) => void)): number
    on(sigName: "enabled-event", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enabled-event", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enabled-event", callback: (accountId: number) => void): NodeJS.EventEmitter
    emit(sigName: "enabled-event", accountId: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::abort-on-db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-on-db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::abort-on-db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::abort-on-db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::abort-on-db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Manager_ConstructProps)
    _init (config?: Manager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Manager
    static newForServiceType(serviceType: string): Manager
    static listFree(list: AccountId[]): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class AccountClass {
    /* Fields of Accounts-1.0.Accounts.AccountClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AccountPrivate {
    static name: string
}
export abstract class AccountServiceClass {
    /* Fields of Accounts-1.0.Accounts.AccountServiceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AccountServicePrivate {
    static name: string
}
export class AccountSettingIter {
    /* Fields of Accounts-1.0.Accounts.AccountSettingIter */
    account: Account
    /* Methods of Accounts-1.0.Accounts.AccountSettingIter */
    free(): void
    getNext(): { returnType: boolean, key: string, value: GLib.Variant }
    next(): { returnType: boolean, key: string, value: any }
    static name: string
}
export class AccountWatch {
    static name: string
}
export class Application {
    /* Methods of Accounts-1.0.Accounts.Application */
    getDescription(): string
    getDesktopAppInfo(): Gio.DesktopAppInfo
    getI18nDomain(): string
    getName(): string
    getServiceUsage(service: Service): string
    ref(): Application
    unref(): void
    static name: string
}
export class AuthData {
    /* Methods of Accounts-1.0.Accounts.AuthData */
    getCredentialsId(): number
    getLoginParameters(extraParameters?: GLib.Variant | null): GLib.Variant
    getMechanism(): string
    getMethod(): string
    getParameters(): GLib.HashTable
    insertParameters(parameters: GLib.HashTable): void
    ref(): AuthData
    unref(): void
    static name: string
}
export abstract class ManagerClass {
    /* Fields of Accounts-1.0.Accounts.ManagerClass */
    parentClass: GObject.ObjectClass
    accountDeleted: (manager: Manager, id: AccountId) => void
    static name: string
}
export class ManagerPrivate {
    static name: string
}
export class Provider {
    /* Methods of Accounts-1.0.Accounts.Provider */
    getDescription(): string
    getDisplayName(): string
    getDomainsRegex(): string
    getFileContents(contents: string): void
    getI18nDomain(): string
    getIconName(): string
    getName(): string
    getPluginName(): string
    getSingleAccount(): boolean
    matchDomain(domain: string): boolean
    ref(): Provider
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static listFree(list: Provider[]): void
}
export class Service {
    /* Methods of Accounts-1.0.Accounts.Service */
    getDescription(): string
    getDisplayName(): string
    getFileContents(contents: string, dataOffset: number): void
    getI18nDomain(): string
    getIconName(): string
    getName(): string
    getProvider(): string
    getServiceType(): string
    getTags(): string[]
    hasTag(tag: string): boolean
    ref(): Service
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static listFree(list: Service[]): void
}
export class ServiceType {
    /* Methods of Accounts-1.0.Accounts.ServiceType */
    getDescription(): string
    getDisplayName(): string
    getFileContents(contents: string, len: number): void
    getI18nDomain(): string
    getIconName(): string
    getName(): string
    getTags(): string[]
    hasTag(tag: string): boolean
    ref(): ServiceType
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static listFree(list: ServiceType[]): void
}
export type AccountId = number
}