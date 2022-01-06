/**
 * RygelCore-2.6
 */

import "node"
import type { GLib } from './GLib-2.0';
import type { Gee } from './Gee-0.8';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GUPnP } from './GUPnP-1.2';
import type { libxml2 } from './libxml2-2.0';
import type { Soup } from './Soup-2.4';
import type { GSSDP } from './GSSDP-1.2';

declare namespace RygelCore {

enum LogLevel {
    INVALID,
    ERROR,
    CRITICAL,
    WARNING,
    INFO,
    DEFAULT,
    DEBUG,
}
enum ConfigurationEntry {
    INTERFACE,
    PORT,
    TRANSCODING,
    ALLOW_UPLOAD,
    ALLOW_DELETION,
    LOG_LEVELS,
    PLUGIN_PATH,
    VIDEO_UPLOAD_FOLDER,
    MUSIC_UPLOAD_FOLDER,
    PICTURE_UPLOAD_FOLDER,
}
enum SectionEntry {
    TITLE,
    ENABLED,
}
enum ConfigurationError {
    NO_VALUE_SET,
    VALUE_OUT_OF_RANGE,
}
enum CmdlineConfigError {
    VERSION_ONLY,
}
enum PluginCapabilities {
    NONE,
    IMAGE_UPLOAD,
    VIDEO_UPLOAD,
    AUDIO_UPLOAD,
    UPLOAD,
    TRACK_CHANGES,
    CREATE_CONTAINERS,
    DIAGNOSTICS,
    ENERGY_MANAGEMENT,
}
function getPrettyHostName(): string
export interface DBusInterface_ConstructProps extends GObject.Object_ConstructProps {
}
class DBusInterface {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.DBusInterface */
    shutdown(): void
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
    connect(sigName: "notify", callback: (($obj: DBusInterface, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DBusInterface_ConstructProps)
    _init (config?: DBusInterface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DBusAclProvider_ConstructProps extends GObject.Object_ConstructProps {
}
class DBusAclProvider {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.DBusAclProvider */
    isAllowed(device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    isAllowedFinish(res: Gio.AsyncResult): boolean
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
    connect(sigName: "notify", callback: (($obj: DBusAclProvider, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DBusAclProvider_ConstructProps)
    _init (config?: DBusAclProvider_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Configuration_ConstructProps extends GObject.Object_ConstructProps {
}
class Configuration {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.Configuration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
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
    /* Signals of RygelCore-2.6.RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: Configuration, entry: ConfigurationEntry) => void)): number
    on(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void): NodeJS.EventEmitter
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: Configuration, section: string, entry: SectionEntry) => void)): number
    on(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void): NodeJS.EventEmitter
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: Configuration, section: string, key: string) => void)): number
    on(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (section: string, key: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting-changed", section: string, key: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Configuration, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Configuration_ConstructProps)
    _init (config?: Configuration_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StateMachine_ConstructProps extends GObject.Object_ConstructProps {
    cancellable?: Gio.Cancellable
}
class StateMachine {
    /* Properties of RygelCore-2.6.RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.StateMachine */
    run(callback?: Gio.AsyncReadyCallback | null): void
    runFinish(res: Gio.AsyncResult): void
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void
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
    /* Signals of RygelCore-2.6.RygelCore.StateMachine */
    connect(sigName: "completed", callback: (($obj: StateMachine) => void)): number
    on(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "completed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cancellable", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StateMachine_ConstructProps)
    _init (config?: StateMachine_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ConnectionManager_ConstructProps extends GUPnP.Service_ConstructProps {
}
class ConnectionManager {
    /* Fields of RygelCore-2.6.RygelCore.ConnectionManager */
    sinkProtocolInfo: string
    connectionIds: string
    sourceProtocolInfo: string
    rcsId: number
    avTransportId: number
    direction: string
    /* Fields of GUPnP-1.2.GUPnP.Service */
    parentInstance: GUPnP.ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.ConnectionManager */
    getCurrentProtocolInfo(): string
    /* Methods of GUPnP-1.2.GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    getContext(): GUPnP.Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: GUPnP.ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.2.GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: ConnectionManager, action: GUPnP.ServiceAction) => void)): number
    on(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void): NodeJS.EventEmitter
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    connect(sigName: "notify-failed", callback: (($obj: ConnectionManager, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    on(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: (($obj: ConnectionManager, variable: string, value: any) => void)): number
    on(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (variable: string, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ConnectionManager_ConstructProps)
    _init (config?: ConnectionManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ConnectionManager
    static $gtype: GObject.Type
}
export interface BasicManagement_ConstructProps extends GUPnP.Service_ConstructProps {
    maxHistorySize?: number
}
class BasicManagement {
    /* Properties of RygelCore-2.6.RygelCore.BasicManagement */
    maxHistorySize: number
    /* Fields of RygelCore-2.6.RygelCore.BasicManagement */
    deviceStatus: string
    /* Fields of GUPnP-1.2.GUPnP.Service */
    parentInstance: GUPnP.ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.BasicManagement */
    getMaxHistorySize(): number
    setMaxHistorySize(value: number): void
    /* Methods of GUPnP-1.2.GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    getContext(): GUPnP.Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: GUPnP.ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.2.GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: BasicManagement, action: GUPnP.ServiceAction) => void)): number
    on(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void): NodeJS.EventEmitter
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    connect(sigName: "notify-failed", callback: (($obj: BasicManagement, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    on(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: (($obj: BasicManagement, variable: string, value: any) => void)): number
    on(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (variable: string, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-history-size", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-history-size", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BasicManagement_ConstructProps)
    _init (config?: BasicManagement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BasicManagement
    static $gtype: GObject.Type
}
export interface DescriptionFile_ConstructProps extends GObject.Object_ConstructProps {
}
class DescriptionFile {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.DescriptionFile */
    setDeviceType(deviceType: string): void
    setModelDescription(modelDescription: string): void
    setModelName(modelName: string): void
    setModelNumber(modelNumber: string): void
    setFriendlyName(friendlyName: string): void
    getFriendlyName(): string
    setUdn(udn: string): void
    getUdn(): string | null
    setSerialNumber(serial: string): void
    setDlnaCaps(capabilities: PluginCapabilities): void
    clearServiceList(): void
    addDlnaDocElement(dlnadocXpath: string, dlnadocNonXpath: string, devCap: string): void
    removeDlnaDocElement(dlnadocXpath: string): void
    addService(deviceName: string, resourceInfo: ResourceInfo): void
    clearIconList(): void
    addIcon(deviceName: string, iconInfo: IconInfo, url: string): void
    modifyServiceType(oldType: string, newType: string): void
    save(path: string): void
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
    connect(sigName: "notify", callback: (($obj: DescriptionFile, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DescriptionFile_ConstructProps)
    _init (config?: DescriptionFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(templateFile: string): DescriptionFile
    static fromXmlDocument(doc: GUPnP.XMLDoc): DescriptionFile
    static $gtype: GObject.Type
}
class DLNAProfile {
    /* Fields of RygelCore-2.6.RygelCore.DLNAProfile */
    refCount: number
    mime: string
    name: string
    static name: string
    static new(name: string, mime: string): DLNAProfile
    constructor(name: string, mime: string)
    /* Static methods and pseudo-constructors */
    static new(name: string, mime: string): DLNAProfile
    static compareByName(a: DLNAProfile, b: DLNAProfile): number
}
export interface EnergyManagement_ConstructProps extends GUPnP.Service_ConstructProps {
}
class EnergyManagement {
    /* Fields of GUPnP-1.2.GUPnP.Service */
    parentInstance: GUPnP.ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    getContext(): GUPnP.Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: GUPnP.ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.2.GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: EnergyManagement, action: GUPnP.ServiceAction) => void)): number
    on(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void): NodeJS.EventEmitter
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    connect(sigName: "notify-failed", callback: (($obj: EnergyManagement, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    on(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: (($obj: EnergyManagement, variable: string, value: any) => void)): number
    on(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (variable: string, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: EnergyManagement_ConstructProps)
    _init (config?: EnergyManagement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): EnergyManagement
    static $gtype: GObject.Type
}
export interface RootDevice_ConstructProps extends GUPnP.RootDevice_ConstructProps {
    services?: Gee.ArrayList
}
class RootDevice {
    /* Properties of RygelCore-2.6.RygelCore.RootDevice */
    services: Gee.ArrayList
    /* Properties of GUPnP-1.2.GUPnP.RootDevice */
    available: boolean
    /* Properties of GUPnP-1.2.GUPnP.DeviceInfo */
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP-1.2.GUPnP.RootDevice */
    parentInstance: GUPnP.Device
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.RootDevice */
    getServices(): Gee.ArrayList
    /* Methods of GUPnP-1.2.GUPnP.RootDevice */
    getAvailable(): boolean
    getDescriptionDir(): string
    getDescriptionPath(): string
    getRelativeLocation(): string
    getSsdpResourceGroup(): GSSDP.ResourceGroup
    setAvailable(available: boolean): void
    /* Methods of GUPnP-1.2.GUPnP.DeviceInfo */
    getContext(): GUPnP.Context
    getDescriptionValue(element: string): string | null
    getDevice(type: string): GUPnP.DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): { returnType: string | null, mimeType: string | null, depth: number | null, width: number | null, height: number | null }
    getLocation(): string
    getManufacturer(): string | null
    getManufacturerUrl(): string | null
    getModelDescription(): string | null
    getModelName(): string | null
    getModelNumber(): string | null
    getModelUrl(): string | null
    getPresentationUrl(): string | null
    getResourceFactory(): GUPnP.ResourceFactory
    getSerialNumber(): string | null
    getService(type: string): GUPnP.ServiceInfo | null
    getUdn(): string
    getUpc(): string | null
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[] | null
    listDevices(): GUPnP.DeviceInfo[] | null
    listDlnaCapabilities(): string[] | null
    listDlnaDeviceClassIdentifier(): string[] | null
    listServiceTypes(): string[] | null
    listServices(): GUPnP.ServiceInfo[] | null
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::services", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::services", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::services", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::services", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::services", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RootDevice_ConstructProps)
    _init (config?: RootDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GUPnP.Context, plugin: Plugin, descriptionDoc: GUPnP.XMLDoc, descriptionPath: string, descriptionDir: string): RootDevice
    static new(context: GUPnP.Context, descriptionPath: string, descriptionDir: string): RootDevice
    static $gtype: GObject.Type
}
export interface RootDeviceFactory_ConstructProps extends GObject.Object_ConstructProps {
    context?: GUPnP.Context
}
class RootDeviceFactory {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.RootDeviceFactory */
    create(plugin: Plugin): RootDevice
    getContext(): GUPnP.Context
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RootDeviceFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RootDeviceFactory_ConstructProps)
    _init (config?: RootDeviceFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GUPnP.Context): RootDeviceFactory
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface LogHandler_ConstructProps extends GObject.Object_ConstructProps {
}
class LogHandler {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: LogHandler, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: LogHandler_ConstructProps)
    _init (config?: LogHandler_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): LogHandler
    static $gtype: GObject.Type
}
export interface MetaConfig_ConstructProps extends GObject.Object_ConstructProps {
}
class MetaConfig {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of RygelCore-2.6.RygelCore.Configuration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetaConfig, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: MetaConfig, entry: ConfigurationEntry) => void)): number
    on(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void): NodeJS.EventEmitter
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: MetaConfig, section: string, entry: SectionEntry) => void)): number
    on(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void): NodeJS.EventEmitter
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: MetaConfig, section: string, key: string) => void)): number
    on(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (section: string, key: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting-changed", section: string, key: string): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MetaConfig_ConstructProps)
    _init (config?: MetaConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MetaConfig
    static getDefault(): MetaConfig
    static registerConfiguration(config: Configuration): void
    static cleanup(): void
    static $gtype: GObject.Type
}
export interface PluginLoader_ConstructProps extends RecursiveModuleLoader_ConstructProps {
}
class PluginLoader {
    /* Properties of RygelCore-2.6.RygelCore.RecursiveModuleLoader */
    basePath: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.PluginLoader */
    pluginDisabled(name: string): boolean
    addPlugin(plugin: Plugin): void
    getPluginByName(name: string): Plugin | null
    listPlugins(): Gee.Collection
    /* Methods of RygelCore-2.6.RygelCore.RecursiveModuleLoader */
    loadModules(): void
    loadModulesSync(cancellable?: Gio.Cancellable | null): void
    loadModuleFromFile(file: Gio.File): boolean
    loadModuleFromInfo(info: PluginInformation): boolean
    getBasePath(): string
    setBasePath(value: string): void
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
    /* Signals of RygelCore-2.6.RygelCore.PluginLoader */
    connect(sigName: "plugin-available", callback: (($obj: PluginLoader, plugin: Plugin) => void)): number
    on(sigName: "plugin-available", callback: (plugin: Plugin) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "plugin-available", callback: (plugin: Plugin) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "plugin-available", callback: (plugin: Plugin) => void): NodeJS.EventEmitter
    emit(sigName: "plugin-available", plugin: Plugin): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-path", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-path", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PluginLoader_ConstructProps)
    _init (config?: PluginLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PluginLoader
    static $gtype: GObject.Type
}
export interface RecursiveModuleLoader_ConstructProps extends GObject.Object_ConstructProps {
    basePath?: string
}
class RecursiveModuleLoader {
    /* Properties of RygelCore-2.6.RygelCore.RecursiveModuleLoader */
    basePath: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.RecursiveModuleLoader */
    loadModules(): void
    loadModulesSync(cancellable?: Gio.Cancellable | null): void
    loadModuleFromFile(file: Gio.File): boolean
    loadModuleFromInfo(info: PluginInformation): boolean
    getBasePath(): string
    setBasePath(value: string): void
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
    connect(sigName: "notify", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-path", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-path", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecursiveModuleLoader_ConstructProps)
    _init (config?: RecursiveModuleLoader_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends GUPnP.ResourceFactory_ConstructProps {
    capabilities?: PluginCapabilities
    name?: string
    title?: string
    description?: string
    descPath?: string
    active?: boolean
    resourceInfos?: Gee.ArrayList
    iconInfos?: Gee.ArrayList
    defaultIcons?: Gee.ArrayList
}
class Plugin {
    /* Properties of RygelCore-2.6.RygelCore.Plugin */
    capabilities: PluginCapabilities
    title: string
    active: boolean
    resourceInfos: Gee.ArrayList
    iconInfos: Gee.ArrayList
    defaultIcons: Gee.ArrayList
    /* Fields of GUPnP-1.2.GUPnP.ResourceFactory */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.Plugin */
    addResource(resourceInfo: ResourceInfo): void
    addIcon(iconInfo: IconInfo): void
    applyHacks(device: RootDevice, descriptionPath: string): void
    getCapabilities(): PluginCapabilities
    setCapabilities(value: PluginCapabilities): void
    getName(): string
    getTitle(): string
    setTitle(value: string): void
    getDescription(): string
    getDescPath(): string
    getActive(): boolean
    setActive(value: boolean): void
    getResourceInfos(): Gee.ArrayList
    getIconInfos(): Gee.ArrayList
    getDefaultIcons(): Gee.ArrayList
    /* Methods of GUPnP-1.2.GUPnP.ResourceFactory */
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    registerResourceType(upnpType: string, type: GObject.Type): void
    unregisterResourceProxyType(upnpType: string): boolean
    unregisterResourceType(upnpType: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capabilities", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-icons", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(descPath: string, name: string, title: string | null, description: string | null, capabilities: PluginCapabilities): Plugin
    static new(): Plugin
    static $gtype: GObject.Type
}
class ResourceInfo {
    /* Fields of RygelCore-2.6.RygelCore.ResourceInfo */
    refCount: number
    upnpType: string
    upnpId: string
    descriptionPath: string
    type: GObject.Type
    static name: string
    static new(upnpId: string, upnpType: string, descriptionPath: string, type: GObject.Type): ResourceInfo
    constructor(upnpId: string, upnpType: string, descriptionPath: string, type: GObject.Type)
    /* Static methods and pseudo-constructors */
    static new(upnpId: string, upnpType: string, descriptionPath: string, type: GObject.Type): ResourceInfo
}
export interface MediaDevice_ConstructProps extends GObject.Object_ConstructProps {
    plugin?: Plugin
    title?: string
    capabilities?: PluginCapabilities
}
class MediaDevice {
    /* Properties of RygelCore-2.6.RygelCore.MediaDevice */
    plugin: Plugin
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.MediaDevice */
    addInterface(iface: string): void
    removeInterface(iface: string): void
    getInterfaces(): string[]
    getPlugin(): Plugin
    setPlugin(value: Plugin): void
    getTitle(): string
    getCapabilities(): PluginCapabilities
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
    connect(sigName: "notify", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::plugin", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaDevice_ConstructProps)
    _init (config?: MediaDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseConfiguration_ConstructProps extends GObject.Object_ConstructProps {
}
class BaseConfiguration {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.BaseConfiguration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
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
    connect(sigName: "notify", callback: (($obj: BaseConfiguration, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: BaseConfiguration, entry: ConfigurationEntry) => void)): number
    on(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void): NodeJS.EventEmitter
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: BaseConfiguration, section: string, entry: SectionEntry) => void)): number
    on(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void): NodeJS.EventEmitter
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: BaseConfiguration, section: string, key: string) => void)): number
    on(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (section: string, key: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting-changed", section: string, key: string): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseConfiguration_ConstructProps)
    _init (config?: BaseConfiguration_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BaseConfiguration
    static $gtype: GObject.Type
}
export interface CmdlineConfig_ConstructProps extends GObject.Object_ConstructProps {
}
class CmdlineConfig {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.CmdlineConfig */
    getConfigFile(): string
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
    /* Methods of RygelCore-2.6.RygelCore.Configuration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CmdlineConfig, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: CmdlineConfig, entry: ConfigurationEntry) => void)): number
    on(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void): NodeJS.EventEmitter
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: CmdlineConfig, section: string, entry: SectionEntry) => void)): number
    on(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void): NodeJS.EventEmitter
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: CmdlineConfig, section: string, key: string) => void)): number
    on(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (section: string, key: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting-changed", section: string, key: string): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CmdlineConfig_ConstructProps)
    _init (config?: CmdlineConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CmdlineConfig
    static getDefault(): CmdlineConfig
    static parseArgs(args: string[]): { args: string[] }
    static $gtype: GObject.Type
}
export interface EnvironmentConfig_ConstructProps extends GObject.Object_ConstructProps {
}
class EnvironmentConfig {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of RygelCore-2.6.RygelCore.Configuration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EnvironmentConfig, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: EnvironmentConfig, entry: ConfigurationEntry) => void)): number
    on(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void): NodeJS.EventEmitter
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: EnvironmentConfig, section: string, entry: SectionEntry) => void)): number
    on(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void): NodeJS.EventEmitter
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: EnvironmentConfig, section: string, key: string) => void)): number
    on(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (section: string, key: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting-changed", section: string, key: string): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EnvironmentConfig_ConstructProps)
    _init (config?: EnvironmentConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): EnvironmentConfig
    static getDefault(): EnvironmentConfig
    static $gtype: GObject.Type
}
export interface UserConfig_ConstructProps extends GObject.Object_ConstructProps {
}
class UserConfig {
    /* Fields of RygelCore-2.6.RygelCore.UserConfig */
    keyFile: GLib.KeyFile
    sysKeyFile: GLib.KeyFile
    keyFileMonitor: Gio.FileMonitor
    sysKeyFileMonitor: Gio.FileMonitor
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of RygelCore-2.6.RygelCore.Configuration */
    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserConfig, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: UserConfig, entry: ConfigurationEntry) => void)): number
    on(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (entry: ConfigurationEntry) => void): NodeJS.EventEmitter
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: UserConfig, section: string, entry: SectionEntry) => void)): number
    on(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (section: string, entry: SectionEntry) => void): NodeJS.EventEmitter
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: UserConfig, section: string, key: string) => void)): number
    on(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (section: string, key: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting-changed", section: string, key: string): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserConfig_ConstructProps)
    _init (config?: UserConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(localPath: string): UserConfig
    static withPaths(localPath: string, systemPath: string): UserConfig
    static getDefault(): UserConfig
    static $gtype: GObject.Type
}
export interface V1Hacks_ConstructProps extends GObject.Object_ConstructProps {
    deviceType?: string
    serviceTypes?: string[]
}
class V1Hacks {
    /* Properties of RygelCore-2.6.RygelCore.V1Hacks */
    deviceType: string
    /* Fields of RygelCore-2.6.RygelCore.V1Hacks */
    descriptionPath: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.V1Hacks */
    applyOnDevice(device: RootDevice, templatePath?: string | null): void
    getDeviceType(): string
    setDeviceType(value: string): void
    getServiceTypes(): string[]
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
    connect(sigName: "notify", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-type", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: V1Hacks_ConstructProps)
    _init (config?: V1Hacks_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(deviceType: string, serviceTypes: string[]): V1Hacks
    static $gtype: GObject.Type
}
class IconInfo {
    /* Fields of RygelCore-2.6.RygelCore.IconInfo */
    refCount: number
    mimeType: string
    uri: string
    fileExtension: string
    size: number
    width: number
    height: number
    depth: number
    static name: string
    static new(mimeType: string, fileExtension: string): IconInfo
    constructor(mimeType: string, fileExtension: string)
    /* Static methods and pseudo-constructors */
    static new(mimeType: string, fileExtension: string): IconInfo
}
class XMLUtils {
    /* Fields of RygelCore-2.6.RygelCore.XMLUtils */
    refCount: number
    static name: string
    static new(): XMLUtils
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): XMLUtils
}
class XMLUtilsIterator {
    /* Fields of RygelCore-2.6.RygelCore.XMLUtilsIterator */
    refCount: number
    /* Methods of RygelCore-2.6.RygelCore.XMLUtilsIterator */
    iterator(): XMLUtilsIterator
    next(): boolean
    get(): object | null
    static name: string
    static new(node?: object | null): XMLUtilsIterator
    constructor(node?: object | null)
    /* Static methods and pseudo-constructors */
    static new(node?: object | null): XMLUtilsIterator
}
class XMLUtilsChildIterator {
    /* Fields of RygelCore-2.6.RygelCore.XMLUtilsIterator */
    refCount: number
    /* Methods of RygelCore-2.6.RygelCore.XMLUtilsIterator */
    iterator(): XMLUtilsIterator
    next(): boolean
    get(): object | null
    static name: string
    static new(node?: object | null): XMLUtilsChildIterator
    constructor(node?: object | null)
    /* Static methods and pseudo-constructors */
    static new(node?: object | null): XMLUtilsChildIterator
}
export interface PluginInformation_ConstructProps extends GObject.Object_ConstructProps {
    modulePath?: string
    name?: string
    conflicts?: any
    moduleLoaded?: boolean
}
class PluginInformation {
    /* Properties of RygelCore-2.6.RygelCore.PluginInformation */
    moduleLoaded: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.PluginInformation */
    getModulePath(): string
    getName(): string
    getConflicts(): any
    getModuleLoaded(): boolean
    setModuleLoaded(value: boolean): void
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
    connect(sigName: "notify", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::module-loaded", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module-loaded", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::module-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::module-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::module-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PluginInformation_ConstructProps)
    _init (config?: PluginInformation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromFile(file: Gio.File): PluginInformation
    static $gtype: GObject.Type
}
abstract class ConnectionManagerClass {
    /* Fields of RygelCore-2.6.RygelCore.ConnectionManagerClass */
    getCurrentProtocolInfo: (self: ConnectionManager) => string
    static name: string
}
class ConnectionManagerPrivate {
    static name: string
}
abstract class BasicManagementClass {
    static name: string
}
class BasicManagementPrivate {
    static name: string
}
abstract class DescriptionFileClass {
    static name: string
}
class DescriptionFilePrivate {
    static name: string
}
abstract class DLNAProfileClass {
    static name: string
}
class DLNAProfilePrivate {
    static name: string
}
abstract class EnergyManagementClass {
    static name: string
}
class EnergyManagementPrivate {
    static name: string
}
abstract class RootDeviceClass {
    static name: string
}
class RootDevicePrivate {
    static name: string
}
abstract class RootDeviceFactoryClass {
    static name: string
}
class RootDeviceFactoryPrivate {
    static name: string
}
abstract class LogHandlerClass {
    static name: string
}
class LogHandlerPrivate {
    static name: string
}
abstract class MetaConfigClass {
    static name: string
}
class MetaConfigPrivate {
    static name: string
}
abstract class PluginLoaderClass {
    static name: string
}
class PluginLoaderPrivate {
    static name: string
}
abstract class RecursiveModuleLoaderClass {
    /* Fields of RygelCore-2.6.RygelCore.RecursiveModuleLoaderClass */
    loadModuleFromFile: (self: RecursiveModuleLoader, file: Gio.File) => boolean
    loadModuleFromInfo: (self: RecursiveModuleLoader, info: PluginInformation) => boolean
    static name: string
}
class RecursiveModuleLoaderPrivate {
    static name: string
}
abstract class PluginClass {
    /* Fields of RygelCore-2.6.RygelCore.PluginClass */
    applyHacks: (self: Plugin, device: RootDevice, descriptionPath: string) => void
    static name: string
}
class PluginPrivate {
    static name: string
}
abstract class ResourceInfoClass {
    static name: string
}
class ResourceInfoPrivate {
    static name: string
}
abstract class MediaDeviceClass {
    static name: string
}
class MediaDevicePrivate {
    static name: string
}
abstract class BaseConfigurationClass {
    /* Fields of RygelCore-2.6.RygelCore.BaseConfigurationClass */
    getInterface: (self: BaseConfiguration) => string
    getInterfaces: (self: BaseConfiguration) => string[]
    getPort: (self: BaseConfiguration) => number
    getTranscoding: (self: BaseConfiguration) => boolean
    getAllowUpload: (self: BaseConfiguration) => boolean
    getAllowDeletion: (self: BaseConfiguration) => boolean
    getLogLevels: (self: BaseConfiguration) => string
    getPluginPath: (self: BaseConfiguration) => string
    getEnginePath: (self: BaseConfiguration) => string
    getMediaEngine: (self: BaseConfiguration) => string
    getVideoUploadFolder: (self: BaseConfiguration) => string | null
    getMusicUploadFolder: (self: BaseConfiguration) => string | null
    getPictureUploadFolder: (self: BaseConfiguration) => string | null
    getEnabled: (self: BaseConfiguration, section: string) => boolean
    getTitle: (self: BaseConfiguration, section: string) => string
    getString: (self: BaseConfiguration, section: string, key: string) => string
    getStringList: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    getInt: (self: BaseConfiguration, section: string, key: string, min: number, max: number) => number
    getIntList: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    getBool: (self: BaseConfiguration, section: string, key: string) => boolean
    static name: string
}
class BaseConfigurationPrivate {
    static name: string
}
abstract class CmdlineConfigClass {
    static name: string
}
class CmdlineConfigPrivate {
    static name: string
}
abstract class EnvironmentConfigClass {
    static name: string
}
class EnvironmentConfigPrivate {
    static name: string
}
abstract class UserConfigClass {
    static name: string
}
class UserConfigPrivate {
    static name: string
}
abstract class V1HacksClass {
    static name: string
}
class V1HacksPrivate {
    static name: string
}
abstract class IconInfoClass {
    static name: string
}
class IconInfoPrivate {
    static name: string
}
abstract class XMLUtilsClass {
    static name: string
}
class XMLUtilsPrivate {
    static name: string
}
abstract class XMLUtilsIteratorClass {
    static name: string
}
class XMLUtilsIteratorPrivate {
    static name: string
}
abstract class XMLUtilsChildIteratorClass {
    static name: string
}
class XMLUtilsChildIteratorPrivate {
    static name: string
}
abstract class PluginInformationClass {
    static name: string
}
class PluginInformationPrivate {
    static name: string
}
abstract class DBusInterfaceIface {
    /* Fields of RygelCore-2.6.RygelCore.DBusInterfaceIface */
    shutdown: (self: DBusInterface) => void
    static name: string
}
abstract class DBusAclProviderIface {
    /* Fields of RygelCore-2.6.RygelCore.DBusAclProviderIface */
    isAllowed: (self: DBusAclProvider, device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    isAllowedFinish: (self: DBusAclProvider, res: Gio.AsyncResult) => boolean
    static name: string
}
abstract class ConfigurationIface {
    /* Fields of RygelCore-2.6.RygelCore.ConfigurationIface */
    getInterface: (self: Configuration) => string
    getInterfaces: (self: Configuration) => string[]
    getPort: (self: Configuration) => number
    getTranscoding: (self: Configuration) => boolean
    getAllowUpload: (self: Configuration) => boolean
    getAllowDeletion: (self: Configuration) => boolean
    getLogLevels: (self: Configuration) => string
    getPluginPath: (self: Configuration) => string
    getEnginePath: (self: Configuration) => string
    getMediaEngine: (self: Configuration) => string
    getVideoUploadFolder: (self: Configuration) => string | null
    getMusicUploadFolder: (self: Configuration) => string | null
    getPictureUploadFolder: (self: Configuration) => string | null
    getEnabled: (self: Configuration, section: string) => boolean
    getTitle: (self: Configuration, section: string) => string
    getString: (self: Configuration, section: string, key: string) => string
    getStringList: (self: Configuration, section: string, key: string) => Gee.ArrayList
    getInt: (self: Configuration, section: string, key: string, min: number, max: number) => number
    getIntList: (self: Configuration, section: string, key: string) => Gee.ArrayList
    getBool: (self: Configuration, section: string, key: string) => boolean
    static name: string
}
abstract class StateMachineIface {
    /* Fields of RygelCore-2.6.RygelCore.StateMachineIface */
    run: (self: StateMachine, callback?: Gio.AsyncReadyCallback | null) => void
    runFinish: (self: StateMachine, res: Gio.AsyncResult) => void
    getCancellable: (self: StateMachine) => Gio.Cancellable
    setCancellable: (self: StateMachine, value: Gio.Cancellable) => void
    static name: string
}
}
export default RygelCore