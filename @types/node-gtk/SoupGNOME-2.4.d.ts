/**
 * SoupGNOME-2.4
 */

/// <reference types="node" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace SoupGNOME {

export const COOKIE_JAR_SQLITE_FILENAME: string
export function gnomeFeatures226GetType(): GObject.Type
export interface CookieJarSqlite_ConstructProps extends Soup.CookieJarDB_ConstructProps {
}
export class CookieJarSqlite {
    /* Properties of Soup.CookieJar */
    acceptPolicy: Soup.CookieJarAcceptPolicy
    /* Fields of SoupGNOME.CookieJarSqlite */
    parent: Soup.CookieJarDB
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup.CookieJar */
    addCookie(cookie: Soup.Cookie): void
    addCookieFull(cookie: Soup.Cookie, uri?: Soup.URI | null, firstParty?: Soup.URI | null): void
    addCookieWithFirstParty(firstParty: Soup.URI, cookie: Soup.Cookie): void
    allCookies(): Soup.Cookie[]
    deleteCookie(cookie: Soup.Cookie): void
    getAcceptPolicy(): Soup.CookieJarAcceptPolicy
    getCookieList(uri: Soup.URI, forHttp: boolean): Soup.Cookie[]
    getCookieListWithSameSiteInfo(uri: Soup.URI, topLevel: Soup.URI | null, siteForCookies: Soup.URI | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Soup.Cookie[]
    getCookies(uri: Soup.URI, forHttp: boolean): string | null
    isPersistent(): boolean
    save(): void
    setAcceptPolicy(policy: Soup.CookieJarAcceptPolicy): void
    setCookie(uri: Soup.URI, cookie: string): void
    setCookieWithFirstParty(uri: Soup.URI, firstParty: Soup.URI, cookie: string): void
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Soup.Session): void
    detach(session: Soup.Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of SoupGNOME.CookieJarSqlite */
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Soup.Session): void
    vfuncDetach(session: Soup.Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Soup.Session, msg: Soup.Message): void
    vfuncRequestStarted(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void
    vfuncRequestUnqueued(session: Soup.Session, msg: Soup.Message): void
    /* Virtual methods of Soup.CookieJar */
    vfuncChanged(oldCookie: Soup.Cookie, newCookie: Soup.Cookie): void
    vfuncIsPersistent(): boolean
    vfuncSave(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarSqlite, oldCookie: Soup.Cookie, newCookie: Soup.Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJarSqlite, oldCookie: Soup.Cookie, newCookie: Soup.Cookie) => void)): number
    emit(sigName: "changed", oldCookie: Soup.Cookie, newCookie: Soup.Cookie): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CookieJarSqlite_ConstructProps)
    _init (config?: CookieJarSqlite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, readOnly: boolean): CookieJarSqlite
    static new(): CookieJarSqlite
    static $gtype: GObject.Type
}
export interface PasswordManagerGNOME_ConstructProps extends GObject.Object_ConstructProps {
}
export class PasswordManagerGNOME {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Soup.Session): void
    detach(session: Soup.Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of SoupGNOME.PasswordManagerGNOME */
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Soup.Session): void
    vfuncDetach(session: Soup.Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Soup.Session, msg: Soup.Message): void
    vfuncRequestStarted(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void
    vfuncRequestUnqueued(session: Soup.Session, msg: Soup.Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PasswordManagerGNOME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PasswordManagerGNOME, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PasswordManagerGNOME_ConstructProps)
    _init (config?: PasswordManagerGNOME_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProxyResolverGNOME_ConstructProps extends Soup.ProxyResolverDefault_ConstructProps {
}
export class ProxyResolverGNOME {
    /* Properties of Soup.ProxyResolverDefault */
    gproxyResolver: Gio.ProxyResolver
    /* Fields of Soup.ProxyResolverDefault */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Soup.ProxyURIResolver */
    getProxyUriAsync(uri: Soup.URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: Soup.ProxyURIResolverCallback): void
    getProxyUriSync(uri: Soup.URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxyUri */ Soup.URI ]
    /* Methods of Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Soup.Session): void
    detach(session: Soup.Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Virtual methods of SoupGNOME.ProxyResolverGNOME */
    vfuncGetProxyUriAsync(uri: Soup.URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: Soup.ProxyURIResolverCallback): void
    vfuncGetProxyUriSync(uri: Soup.URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxyUri */ Soup.URI ]
    vfuncAddFeature(type: GObject.Type): boolean
    vfuncAttach(session: Soup.Session): void
    vfuncDetach(session: Soup.Session): void
    vfuncHasFeature(type: GObject.Type): boolean
    vfuncRemoveFeature(type: GObject.Type): boolean
    vfuncRequestQueued(session: Soup.Session, msg: Soup.Message): void
    vfuncRequestStarted(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void
    vfuncRequestUnqueued(session: Soup.Session, msg: Soup.Message): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gproxy-resolver", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gproxy-resolver", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyResolverGNOME_ConstructProps)
    _init (config?: ProxyResolverGNOME_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class CookieJarSqliteClass {
    /* Fields of SoupGNOME.CookieJarSqliteClass */
    parentClass: Soup.CookieJarDBClass
    static name: string
}
}