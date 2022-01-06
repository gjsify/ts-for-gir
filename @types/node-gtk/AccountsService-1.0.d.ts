/**
 * AccountsService-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace AccountsService {

export enum UserAccountType {
    STANDARD,
    ADMINISTRATOR,
}
export enum UserManagerError {
    FAILED,
    USER_EXISTS,
    USER_DOES_NOT_EXIST,
    PERMISSION_DENIED,
    NOT_SUPPORTED,
}
export enum UserPasswordMode {
    REGULAR,
    SET_AT_LOGIN,
    NONE,
}
export function userManagerErrorQuark(): GLib.Quark
export interface User_ConstructProps extends GObject.Object_ConstructProps {
}
export class User {
    /* Properties of AccountsService-1.0.AccountsService.User */
    readonly accountType: number
    readonly automaticLogin: boolean
    readonly email: string
    readonly homeDirectory: string
    readonly iconFile: string
    readonly isLoaded: boolean
    readonly language: string
    readonly localAccount: boolean
    readonly location: string
    readonly locked: boolean
    readonly loginFrequency: number
    readonly loginHistory: GLib.Variant
    readonly loginTime: number
    readonly nonexistent: boolean
    readonly passwordHint: string
    readonly passwordMode: number
    readonly realName: string
    readonly shell: string
    readonly systemAccount: boolean
    readonly uid: number
    readonly userName: string
    readonly xSession: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AccountsService-1.0.AccountsService.User */
    collate(user2: User): number
    getAccountType(): UserAccountType
    getAutomaticLogin(): boolean
    getEmail(): string
    getHomeDir(): string
    getIconFile(): string
    getLanguage(): string | null
    getLocation(): string
    getLocked(): boolean
    getLoginFrequency(): number
    getLoginHistory(): GLib.Variant
    getLoginTime(): number
    getNumSessions(): number
    getNumSessionsAnywhere(): number
    getObjectPath(): string
    getPasswordExpirationPolicy(): { expirationTime: number | null, lastChangeTime: number | null, minDaysBetweenChanges: number | null, maxDaysBetweenChanges: number | null, daysToWarn: number | null, daysAfterExpirationUntilLock: number | null }
    getPasswordHint(): string
    getPasswordMode(): UserPasswordMode
    getPrimarySessionId(): string
    getRealName(): string
    getSaved(): boolean
    getSession(): string
    getSessionType(): string
    getShell(): string
    getUid(): number
    getUserName(): string
    getXSession(): string
    isLocalAccount(): boolean
    isLoggedIn(): boolean
    isLoggedInAnywhere(): boolean
    isNonexistent(): boolean
    isSystemAccount(): boolean
    setAccountType(accountType: UserAccountType): void
    setAutomaticLogin(enabled: boolean): void
    setEmail(email: string): void
    setIconFile(iconFile: string): void
    setLanguage(language: string): void
    setLocation(location: string): void
    setLocked(locked: boolean): void
    setPassword(password: string, hint: string): void
    setPasswordHint(hint: string): void
    setPasswordMode(passwordMode: UserPasswordMode): void
    setRealName(realName: string): void
    setSession(session: string): void
    setSessionType(sessionType: string): void
    setUserName(userName: string): void
    setXSession(xSession: string): void
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
    /* Signals of AccountsService-1.0.AccountsService.User */
    connect(sigName: "changed", callback: (($obj: User) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "sessions-changed", callback: (($obj: User) => void)): number
    on(sigName: "sessions-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sessions-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sessions-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sessions-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::account-type", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-type", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-login", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-login", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-directory", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-directory", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-file", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-file", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-loaded", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loaded", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locked", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::login-frequency", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-frequency", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::login-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::login-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::login-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::login-history", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-history", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::login-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::login-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::login-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::login-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::login-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::login-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::login-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nonexistent", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nonexistent", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nonexistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nonexistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nonexistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-hint", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-hint", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-mode", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-mode", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shell", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shell", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-session", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-session", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: User_ConstructProps)
    _init (config?: User_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UserManager_ConstructProps extends GObject.Object_ConstructProps {
    excludeUsernamesList?: object
    hasMultipleUsers?: boolean
    includeUsernamesList?: object
}
export class UserManager {
    /* Properties of AccountsService-1.0.AccountsService.UserManager */
    excludeUsernamesList: object
    hasMultipleUsers: boolean
    includeUsernamesList: object
    readonly isLoaded: boolean
    /* Fields of AccountsService-1.0.AccountsService.UserManager */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AccountsService-1.0.AccountsService.UserManager */
    activateUserSession(user: User): boolean
    cacheUser(username: string): User
    cacheUserAsync(username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cacheUserFinish(result: Gio.AsyncResult): User
    canSwitch(): boolean
    createUser(username: string, fullname: string, accounttype: UserAccountType): User
    createUserAsync(username: string, fullname: string, accounttype: UserAccountType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createUserFinish(result: Gio.AsyncResult): User
    deleteUser(user: User, removeFiles: boolean): boolean
    deleteUserAsync(user: User, removeFiles: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteUserFinish(result: Gio.AsyncResult): boolean
    getUser(username: string): User
    getUserById(id: number): User
    gotoLoginSession(): boolean
    listUsers(): User[]
    noService(): boolean
    uncacheUser(username: string): boolean
    uncacheUserAsync(username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uncacheUserFinish(result: Gio.AsyncResult): boolean
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
    /* Signals of AccountsService-1.0.AccountsService.UserManager */
    connect(sigName: "user-added", callback: (($obj: UserManager, user: User) => void)): number
    on(sigName: "user-added", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-added", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-added", callback: (user: User) => void): NodeJS.EventEmitter
    emit(sigName: "user-added", user: User): void
    connect(sigName: "user-changed", callback: (($obj: UserManager, user: User) => void)): number
    on(sigName: "user-changed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-changed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-changed", callback: (user: User) => void): NodeJS.EventEmitter
    emit(sigName: "user-changed", user: User): void
    connect(sigName: "user-is-logged-in-changed", callback: (($obj: UserManager, user: User) => void)): number
    on(sigName: "user-is-logged-in-changed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-is-logged-in-changed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-is-logged-in-changed", callback: (user: User) => void): NodeJS.EventEmitter
    emit(sigName: "user-is-logged-in-changed", user: User): void
    connect(sigName: "user-removed", callback: (($obj: UserManager, user: User) => void)): number
    on(sigName: "user-removed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-removed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-removed", callback: (user: User) => void): NodeJS.EventEmitter
    emit(sigName: "user-removed", user: User): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::exclude-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exclude-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exclude-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exclude-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exclude-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-multiple-users", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-multiple-users", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-multiple-users", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-multiple-users", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-multiple-users", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::include-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::include-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::include-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::include-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-loaded", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loaded", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserManager_ConstructProps)
    _init (config?: UserManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): UserManager
    static $gtype: GObject.Type
}
export abstract class UserClass {
    /* Fields of AccountsService-1.0.AccountsService.UserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class UserManagerClass {
    /* Fields of AccountsService-1.0.AccountsService.UserManagerClass */
    parentClass: GObject.ObjectClass
    userAdded: (userManager: UserManager, user: User) => void
    userRemoved: (userManager: UserManager, user: User) => void
    userIsLoggedInChanged: (userManager: UserManager, user: User) => void
    userChanged: (userManager: UserManager, user: User) => void
    static name: string
}
}