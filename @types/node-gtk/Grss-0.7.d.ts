/**
 * Grss-0.7
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Grss {

export interface FeedAtomFormatter_ConstructProps extends FeedFormatter_ConstructProps {
}
class FeedAtomFormatter {
    /* Fields of Grss-0.7.Grss.FeedAtomFormatter */
    parent: FeedFormatter
    /* Fields of Grss-0.7.Grss.FeedFormatter */
    priv: FeedFormatterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedFormatter */
    addItem(item: FeedItem): void
    addItems(items: FeedItem[]): void
    format(): string
    getChannel(): FeedChannel
    getItems(): FeedItem[]
    reset(): void
    setChannel(channel: FeedChannel): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedAtomFormatter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedAtomFormatter_ConstructProps)
    _init (config?: FeedAtomFormatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedAtomFormatter
    static $gtype: GObject.Type
}
export interface FeedChannel_ConstructProps extends GObject.Object_ConstructProps {
}
class FeedChannel {
    /* Fields of Grss-0.7.Grss.FeedChannel */
    parent: GObject.Object
    priv: FeedChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedChannel */
    addContributor(contributor: Person): void
    addCookie(cookie: Soup.Cookie): void
    fetch(): boolean
    fetchAll(): FeedItem[]
    fetchAllAsync(callback?: Gio.AsyncReadyCallback | null): void
    fetchAllFinish(res: Gio.AsyncResult): FeedItem[]
    fetchAsync(callback?: Gio.AsyncReadyCallback | null): void
    fetchCancel(): boolean
    fetchFinish(res: Gio.AsyncResult): boolean
    getCategory(): string
    getContributors(): Person[]
    getCookies(): Soup.Cookie[]
    getCopyright(): string
    getDescription(): string
    getEditor(): Person
    getFormat(): string
    getGenerator(): string
    getGzipCompression(): boolean
    getHomepage(): string
    getIcon(): string
    getImage(): string
    getLanguage(): string
    getPublishTime(): number
    getPubsubhub(hub: string): boolean
    getRsscloud(path: string, protocol: string): boolean
    getSource(): string
    getTitle(): string
    getUpdateInterval(): number
    getUpdateTime(): number
    getWebmaster(): string
    setCategory(category: string): void
    setCopyright(copyright: string): void
    setDescription(description: string): void
    setEditor(editor: Person): void
    setFormat(format: string): void
    setGenerator(generator: string): void
    setGzipCompression(value: boolean): void
    setHomepage(homepage: string): boolean
    setIcon(icon: string): boolean
    setImage(image: string): boolean
    setLanguage(language: string): void
    setPublishTime(publish: number): void
    setPubsubhub(hub: string): boolean
    setRsscloud(path: string, protocol: string): void
    setSource(source: string): boolean
    setTitle(title: string): void
    setUpdateInterval(minutes: number): void
    setUpdateTime(update: number): void
    setWebmaster(webmaster: string): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedChannel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedChannel_ConstructProps)
    _init (config?: FeedChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedChannel
    static newFromFile(path: string): FeedChannel
    static newFromMemory(data: string): FeedChannel
    static newFromXml(doc: libxml2.DocPtr): FeedChannel
    static newWithSource(source: string): FeedChannel
    static $gtype: GObject.Type
}
export interface FeedEnclosure_ConstructProps extends GObject.Object_ConstructProps {
}
class FeedEnclosure {
    /* Fields of Grss-0.7.Grss.FeedEnclosure */
    parent: GObject.Object
    priv: FeedEnclosurePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedEnclosure */
    fetch(): Gio.File
    fetchAsync(callback?: Gio.AsyncReadyCallback | null): void
    fetchFinish(res: Gio.AsyncResult): Gio.File
    getFormat(): string
    getLength(): number
    getUrl(): string
    setFormat(type: string): void
    setLength(length: number): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedEnclosure, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedEnclosure_ConstructProps)
    _init (config?: FeedEnclosure_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(url: string): FeedEnclosure
    static $gtype: GObject.Type
}
export interface FeedFormatter_ConstructProps extends GObject.Object_ConstructProps {
}
class FeedFormatter {
    /* Fields of Grss-0.7.Grss.FeedFormatter */
    parent: GObject.Object
    priv: FeedFormatterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedFormatter */
    addItem(item: FeedItem): void
    addItems(items: FeedItem[]): void
    format(): string
    getChannel(): FeedChannel
    getItems(): FeedItem[]
    reset(): void
    setChannel(channel: FeedChannel): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedFormatter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedFormatter_ConstructProps)
    _init (config?: FeedFormatter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FeedItem_ConstructProps extends GObject.Object_ConstructProps {
}
class FeedItem {
    /* Fields of Grss-0.7.Grss.FeedItem */
    parent: GObject.Object
    priv: FeedItemPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedItem */
    addCategory(category: string): void
    addContributor(contributor: Person): void
    addEnclosure(enclosure: FeedEnclosure): void
    getAuthor(): Person
    getCategories(): string[]
    getCommentsUrl(): string
    getContributors(): Person[]
    getCopyright(): string
    getDescription(): string
    getEnclosures(): FeedEnclosure[]
    getGeoPoint(latitude: number, longitude: number): boolean
    getId(): string
    getParent(): FeedChannel
    getPublishTime(): number
    getRealSource(realsource: string, title: string): void
    getRelated(): string
    getSource(): string
    getTitle(): string
    setAuthor(author: Person): void
    setCommentsUrl(url: string): boolean
    setCopyright(copyright: string): void
    setDescription(description: string): void
    setGeoPoint(latitude: number, longitude: number): void
    setId(id: string): void
    setPublishTime(publish: number): void
    setRealSource(realsource: string, title: string): boolean
    setRelated(related: string): void
    setSource(source: string): boolean
    setTitle(title: string): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedItem, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedItem_ConstructProps)
    _init (config?: FeedItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent: FeedChannel): FeedItem
    static $gtype: GObject.Type
}
export interface FeedParser_ConstructProps extends GObject.Object_ConstructProps {
}
class FeedParser {
    /* Fields of Grss-0.7.Grss.FeedParser */
    parent: GObject.Object
    priv: FeedParserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedParser */
    parse(feed: FeedChannel, doc: libxml2.DocPtr): FeedItem[]
    parseChannel(feed: FeedChannel, doc: libxml2.DocPtr): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedParser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedParser_ConstructProps)
    _init (config?: FeedParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedParser
    static $gtype: GObject.Type
}
export interface FeedRssFormatter_ConstructProps extends FeedFormatter_ConstructProps {
}
class FeedRssFormatter {
    /* Fields of Grss-0.7.Grss.FeedRssFormatter */
    parent: FeedFormatter
    /* Fields of Grss-0.7.Grss.FeedFormatter */
    priv: FeedFormatterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedFormatter */
    addItem(item: FeedItem): void
    addItems(items: FeedItem[]): void
    format(): string
    getChannel(): FeedChannel
    getItems(): FeedItem[]
    reset(): void
    setChannel(channel: FeedChannel): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedRssFormatter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedRssFormatter_ConstructProps)
    _init (config?: FeedRssFormatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedRssFormatter
    static $gtype: GObject.Type
}
export interface FeedsGroup_ConstructProps extends GObject.Object_ConstructProps {
}
class FeedsGroup {
    /* Fields of Grss-0.7.Grss.FeedsGroup */
    parent: GObject.Object
    priv: FeedsGroupPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedsGroup */
    exportFile(channels: FeedChannel[], format: string, uri: string): boolean
    getFormats(): string[]
    parseFile(path: string): FeedChannel[]
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedsGroup, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedsGroup_ConstructProps)
    _init (config?: FeedsGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedsGroup
    static $gtype: GObject.Type
}
export interface FeedsPool_ConstructProps extends GObject.Object_ConstructProps {
}
class FeedsPool {
    /* Fields of Grss-0.7.Grss.FeedsPool */
    parent: GObject.Object
    priv: FeedsPoolPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedsPool */
    getListened(): FeedChannel[]
    getListenedNum(): number
    getSession(): Soup.Session
    listen(feeds: FeedChannel[]): void
    switch(run: boolean): void
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
    /* Signals of Grss-0.7.Grss.FeedsPool */
    connect(sigName: "feed-fail", callback: (($obj: FeedsPool, feed: GObject.Object) => void)): number
    on(sigName: "feed-fail", callback: (feed: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "feed-fail", callback: (feed: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "feed-fail", callback: (feed: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "feed-fail", feed: GObject.Object): void
    connect(sigName: "feed-fetching", callback: (($obj: FeedsPool, feed: GObject.Object) => void)): number
    on(sigName: "feed-fetching", callback: (feed: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "feed-fetching", callback: (feed: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "feed-fetching", callback: (feed: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "feed-fetching", feed: GObject.Object): void
    connect(sigName: "feed-ready", callback: (($obj: FeedsPool, feed: GObject.Object, items: FeedItem[]) => void)): number
    on(sigName: "feed-ready", callback: (feed: GObject.Object, items: FeedItem[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "feed-ready", callback: (feed: GObject.Object, items: FeedItem[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "feed-ready", callback: (feed: GObject.Object, items: FeedItem[]) => void): NodeJS.EventEmitter
    emit(sigName: "feed-ready", feed: GObject.Object, items: FeedItem[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedsPool, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedsPool_ConstructProps)
    _init (config?: FeedsPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedsPool
    static $gtype: GObject.Type
}
export interface FeedsPublisher_ConstructProps extends GObject.Object_ConstructProps {
}
class FeedsPublisher {
    /* Fields of Grss-0.7.Grss.FeedsPublisher */
    parent: GObject.Object
    priv: FeedsPublisherPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedsPublisher */
    formatContent(channel: FeedChannel, items: FeedItem[]): string
    hubSetPort(port: number): void
    hubSetTopics(topics: FeedChannel[]): void
    hubSwitch(run: boolean): void
    publishFile(channel: FeedChannel, items: FeedItem[], uri: string): boolean
    publishWeb(channel: FeedChannel, items: FeedItem[], id: string): boolean
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
    /* Signals of Grss-0.7.Grss.FeedsPublisher */
    connect(sigName: "delete-subscription", callback: (($obj: FeedsPublisher, object: FeedChannel, p0: string) => void)): number
    on(sigName: "delete-subscription", callback: (object: FeedChannel, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-subscription", callback: (object: FeedChannel, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-subscription", callback: (object: FeedChannel, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "delete-subscription", object: FeedChannel, p0: string): void
    connect(sigName: "new-subscription", callback: (($obj: FeedsPublisher, object: FeedChannel, p0: string) => void)): number
    on(sigName: "new-subscription", callback: (object: FeedChannel, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-subscription", callback: (object: FeedChannel, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-subscription", callback: (object: FeedChannel, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "new-subscription", object: FeedChannel, p0: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedsPublisher, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedsPublisher_ConstructProps)
    _init (config?: FeedsPublisher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedsPublisher
    static $gtype: GObject.Type
}
export interface FeedsStore_ConstructProps extends GObject.Object_ConstructProps {
}
class FeedsStore {
    /* Fields of Grss-0.7.Grss.FeedsStore */
    parent: GObject.Object
    priv: FeedsStorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedsStore */
    addItemInChannel(channel: FeedChannel, item: FeedItem): void
    getChannels(): FeedChannel[]
    getItemsByChannel(channel: FeedChannel): FeedItem[]
    hasItem(channel: FeedChannel, id: string): boolean
    switch(run: boolean): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedsStore, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedsStore_ConstructProps)
    _init (config?: FeedsStore_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FeedsSubscriber_ConstructProps extends GObject.Object_ConstructProps {
}
class FeedsSubscriber {
    /* Fields of Grss-0.7.Grss.FeedsSubscriber */
    parent: GObject.Object
    priv: FeedsSubscriberPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grss-0.7.Grss.FeedsSubscriber */
    getAddress(): Gio.InetAddress
    getListened(): FeedChannel[]
    getPort(): number
    getSession(): Soup.Session
    listen(feeds: FeedChannel[]): boolean
    setPort(port: number): void
    switch(run: boolean): void
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
    /* Signals of Grss-0.7.Grss.FeedsSubscriber */
    connect(sigName: "notification-received", callback: (($obj: FeedsSubscriber, feed: GObject.Object, item: GObject.Object) => void)): number
    on(sigName: "notification-received", callback: (feed: GObject.Object, item: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notification-received", callback: (feed: GObject.Object, item: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notification-received", callback: (feed: GObject.Object, item: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "notification-received", feed: GObject.Object, item: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedsSubscriber, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FeedsSubscriber_ConstructProps)
    _init (config?: FeedsSubscriber_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedsSubscriber
    static $gtype: GObject.Type
}
abstract class FeedAtomFormatterClass {
    /* Fields of Grss-0.7.Grss.FeedAtomFormatterClass */
    parent: FeedFormatterClass
    static name: string
}
class FeedAtomFormatterPrivate {
    static name: string
}
abstract class FeedChannelClass {
    /* Fields of Grss-0.7.Grss.FeedChannelClass */
    parent: GObject.ObjectClass
    static name: string
}
class FeedChannelPrivate {
    static name: string
}
abstract class FeedEnclosureClass {
    /* Fields of Grss-0.7.Grss.FeedEnclosureClass */
    parent: GObject.ObjectClass
    static name: string
}
class FeedEnclosurePrivate {
    static name: string
}
abstract class FeedFormatterClass {
    /* Fields of Grss-0.7.Grss.FeedFormatterClass */
    parent: GObject.ObjectClass
    format: (formatter: FeedFormatter) => string
    static name: string
}
class FeedFormatterPrivate {
    static name: string
}
abstract class FeedItemClass {
    /* Fields of Grss-0.7.Grss.FeedItemClass */
    parent: GObject.ObjectClass
    static name: string
}
class FeedItemPrivate {
    static name: string
}
abstract class FeedParserClass {
    /* Fields of Grss-0.7.Grss.FeedParserClass */
    parent: GObject.ObjectClass
    static name: string
}
class FeedParserPrivate {
    static name: string
}
abstract class FeedRssFormatterClass {
    /* Fields of Grss-0.7.Grss.FeedRssFormatterClass */
    parent: FeedFormatterClass
    static name: string
}
class FeedRssFormatterPrivate {
    static name: string
}
abstract class FeedsGroupClass {
    /* Fields of Grss-0.7.Grss.FeedsGroupClass */
    parent: GObject.ObjectClass
    static name: string
}
class FeedsGroupPrivate {
    static name: string
}
abstract class FeedsPoolClass {
    /* Fields of Grss-0.7.Grss.FeedsPoolClass */
    parent: GObject.ObjectClass
    feedFetching: (pool: FeedsPool, feed: FeedChannel) => void
    static name: string
}
class FeedsPoolPrivate {
    static name: string
}
abstract class FeedsPublisherClass {
    /* Fields of Grss-0.7.Grss.FeedsPublisherClass */
    parent: GObject.ObjectClass
    newSubscription: (pub: FeedsPublisher, topic: FeedChannel, callback: string) => void
    deleteSubscription: (pub: FeedsPublisher, topic: FeedChannel, callback: string) => void
    static name: string
}
class FeedsPublisherPrivate {
    static name: string
}
abstract class FeedsStoreClass {
    /* Fields of Grss-0.7.Grss.FeedsStoreClass */
    parent: GObject.ObjectClass
    getChannels: (store: FeedsStore) => FeedChannel[]
    getItemsByChannel: (store: FeedsStore, channel: FeedChannel) => FeedItem[]
    hasItem: (store: FeedsStore, channel: FeedChannel, id: string) => boolean
    addItemInChannel: (store: FeedsStore, channel: FeedChannel, item: FeedItem) => void
    static name: string
}
class FeedsStorePrivate {
    static name: string
}
abstract class FeedsSubscriberClass {
    /* Fields of Grss-0.7.Grss.FeedsSubscriberClass */
    parent: GObject.ObjectClass
    notificationReceived: (sub: FeedsSubscriber, feed: FeedChannel, item: FeedItem) => void
    static name: string
}
class FeedsSubscriberPrivate {
    static name: string
}
class Person {
    /* Methods of Grss-0.7.Grss.Person */
    getEmail(): string
    getName(): string
    getUri(): string
    ref(): Person
    unref(): void
    static name: string
    static new(name: string, email?: string | null, uri?: string | null): Person
    constructor(name: string, email?: string | null, uri?: string | null)
    /* Static methods and pseudo-constructors */
    static new(name: string, email?: string | null, uri?: string | null): Person
}
}
export default Grss