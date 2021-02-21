/**
 * SoupGNOME-2.4
 */

import "node"
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace SoupGNOME {

export const COOKIE_JAR_SQLITE_FILENAME: string
export function gnomeFeatures226GetType(): GObject.Type
export interface CookieJarSqlite_ConstructProps extends Soup.CookieJarDB_ConstructProps {
}
export class CookieJarSqlite {
    /* Properties of Soup-2.4.Soup.CookieJar */
    acceptPolicy: Soup.CookieJarAcceptPolicy
    /* Fields of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite */
    parent: Soup.CookieJarDB
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.CookieJar */
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Soup.Session): void
    detach(session: Soup.Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of Soup-2.4.Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarSqlite, oldCookie: Soup.Cookie, newCookie: Soup.Cookie) => void)): number
    on(sigName: "changed", callback: (oldCookie: Soup.Cookie, newCookie: Soup.Cookie) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldCookie: Soup.Cookie, newCookie: Soup.Cookie) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldCookie: Soup.Cookie, newCookie: Soup.Cookie) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldCookie: Soup.Cookie, newCookie: Soup.Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Soup.Session): void
    detach(session: Soup.Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PasswordManagerGNOME, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PasswordManagerGNOME_ConstructProps)
    _init (config?: PasswordManagerGNOME_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProxyResolverGNOME_ConstructProps extends Soup.ProxyResolverDefault_ConstructProps {
}
export class ProxyResolverGNOME {
    /* Properties of Soup-2.4.Soup.ProxyResolverDefault */
    gproxyResolver: Gio.ProxyResolver
    /* Fields of Soup-2.4.Soup.ProxyResolverDefault */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Soup-2.4.Soup.ProxyURIResolver */
    getProxyUriAsync(uri: Soup.URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: Soup.ProxyURIResolverCallback): void
    getProxyUriSync(uri: Soup.URI, cancellable?: Gio.Cancellable | null): { returnType: number, proxyUri: Soup.URI }
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Soup.Session): void
    detach(session: Soup.Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of SoupGNOME-2.4.SoupGNOME.CookieJarSqliteClass */
    parentClass: Soup.CookieJarDBClass
    static name: string
}
}