/**
 * RygelCore-2.4
 */

<<<<<<< HEAD
import "node"
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { Gee } from './Gee-0.8';
import type { GUPnP } from './GUPnP-1.0';
import type { libxml2 } from './libxml2-2.0';
import type { Soup } from './Soup-2.4';
import type { GSSDP } from './GSSDP-1.0';

export declare namespace RygelCore {
=======
/// <reference types="node" />
import type { GLib } from './GLib-2.0';
import type { GObject } from './GObject-2.0';
import type { Gio } from './Gio-2.0';
import type { Gee } from './Gee-0.8';
import type { GUPnP } from './GUPnP-1.0';
import type { libxml2 } from './libxml2-2.0';
// WARN: Dependency not found: 'GstPbutils-0.10'
// WARN: Dependency not found: 'Gst-0.10'
import type { GModule } from './GModule-2.0';

declare namespace RygelCore {
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))

export enum LogLevel {
    INVALID,
    CRITICAL,
    ERROR,
    WARNING,
    INFO,
    DEFAULT,
    DEBUG,
}
export enum ConfigurationEntry {
    UPNP_ENABLED,
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
export enum SectionEntry {
    TITLE,
    ENABLED,
}
export enum ConfigurationError {
    NO_VALUE_SET,
    VALUE_OUT_OF_RANGE,
}
export enum PluginCapabilities {
    NONE,
    IMAGE_UPLOAD,
    VIDEO_UPLOAD,
    AUDIO_UPLOAD,
    UPLOAD,
    TRACK_CHANGES,
    CREATE_CONTAINERS,
    DIAGNOSTICS,
}
export function getPrettyHostName(): string
export interface DBusInterface_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusInterface {
<<<<<<< HEAD
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.DBusInterface */
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
=======
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.DBusInterface */
    shutdown(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusInterface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of RygelCore.DBusInterface */
    vfuncShutdown(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export interface Configuration_ConstructProps extends GObject.Object_ConstructProps {
}
export class Configuration {
<<<<<<< HEAD
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.Configuration */
=======
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.Configuration */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getUpnpEnabled(): boolean
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
    getVideoUploadFolder(): string
    getMusicUploadFolder(): string
    getPictureUploadFolder(): string
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of RygelCore-2.4.RygelCore.Configuration */
    connect(sigName: "configuration_changed", callback: (($obj: Configuration, entry: ConfigurationEntry) => void)): number
    on(sigName: "configuration_changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration_changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration_changed", callback: (entry: ConfigurationEntry) => void): NodeJS.EventEmitter
    emit(sigName: "configuration_changed", entry: ConfigurationEntry): void
    connect(sigName: "section_changed", callback: (($obj: Configuration, section: string, entry: SectionEntry) => void)): number
    on(sigName: "section_changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section_changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section_changed", callback: (section: string, entry: SectionEntry) => void): NodeJS.EventEmitter
    emit(sigName: "section_changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting_changed", callback: (($obj: Configuration, section: string, key: string) => void)): number
    on(sigName: "setting_changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting_changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting_changed", callback: (section: string, key: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting_changed", section: string, key: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Configuration, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of RygelCore.Configuration */
    vfuncGetUpnpEnabled(): boolean
    vfuncGetInterface(): string
    vfuncGetInterfaces(): string[]
    vfuncGetPort(): number
    vfuncGetTranscoding(): boolean
    vfuncGetAllowUpload(): boolean
    vfuncGetAllowDeletion(): boolean
    vfuncGetLogLevels(): string
    vfuncGetPluginPath(): string
    vfuncGetEnginePath(): string
    vfuncGetMediaEngine(): string
    vfuncGetVideoUploadFolder(): string
    vfuncGetMusicUploadFolder(): string
    vfuncGetPictureUploadFolder(): string
    vfuncGetEnabled(section: string): boolean
    vfuncGetTitle(section: string): string
    vfuncGetString(section: string, key: string): string
    vfuncGetStringList(section: string, key: string): Gee.ArrayList
    vfuncGetInt(section: string, key: string, min: number, max: number): number
    vfuncGetIntList(section: string, key: string): Gee.ArrayList
    vfuncGetBool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration_changed", callback: (($obj: Configuration, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration_changed", callback: (($obj: Configuration, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration_changed", entry: ConfigurationEntry): void
    on(sigName: "configuration_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section_changed", callback: (($obj: Configuration, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section_changed", callback: (($obj: Configuration, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section_changed", section: string, entry: SectionEntry): void
    on(sigName: "section_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting_changed", callback: (($obj: Configuration, section: string, key: string) => void)): number
    connect_after(sigName: "setting_changed", callback: (($obj: Configuration, section: string, key: string) => void)): number
    emit(sigName: "setting_changed", section: string, key: string): void
    on(sigName: "setting_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Configuration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Configuration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export class StateMachine {
<<<<<<< HEAD
    /* Properties of RygelCore-2.4.RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.StateMachine */
=======
    /* Properties of RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.StateMachine */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    run(callback?: Gio.AsyncReadyCallback | null): void
    runFinish(res: Gio.AsyncResult): void
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of RygelCore-2.4.RygelCore.StateMachine */
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
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of RygelCore.StateMachine */
    vfuncRun(callback?: Gio.AsyncReadyCallback | null): void
    vfuncRunFinish(res: Gio.AsyncResult): void
    vfuncGetCancellable(): Gio.Cancellable
    vfuncSetCancellable(value: Gio.Cancellable): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.StateMachine */
    connect(sigName: "completed", callback: (($obj: StateMachine) => void)): number
    connect_after(sigName: "completed", callback: (($obj: StateMachine) => void)): number
    emit(sigName: "completed"): void
    on(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export class ConnectionManager {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.ConnectionManager */
=======
    /* Fields of RygelCore.ConnectionManager */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentInstance: GUPnP.Service
    priv: ConnectionManagerPrivate
    sinkProtocolInfo: string
    connectionIds: string
    sourceProtocolInfo: string
    rcsId: number
    avTransportId: number
    direction: string
<<<<<<< HEAD
<<<<<<< HEAD
    /* Fields of GUPnP-1.0.GUPnP.Service */
    parent: GUPnP.ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.ConnectionManager */
    getCurrentProtocolInfo(): string
    /* Methods of GUPnP-1.0.GUPnP.Service */
=======
=======
    /* Fields of GUPnP.Service */
    parent: GUPnP.ServiceInfo
>>>>>>> 2968f8b (Update types)
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.ConnectionManager */
    getCurrentProtocolInfo(): string
    /* Methods of GUPnP.Service */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
<<<<<<< HEAD
    /* Methods of GUPnP-1.0.GUPnP.ServiceInfo */
=======
    /* Methods of GUPnP.ServiceInfo */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getContext(): GUPnP.Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
<<<<<<< HEAD
<<<<<<< HEAD
    getIntrospection(): GUPnP.ServiceIntrospection
=======
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    getIntrospection(): GUPnP.ServiceIntrospection
>>>>>>> 2968f8b (Update types)
    getIntrospectionAsync(callback: GUPnP.ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
<<<<<<< HEAD
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection
=======
>>>>>>> 2968f8b (Update types)
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.0.GUPnP.Service */
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
=======
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of RygelCore.ConnectionManager */
    vfuncGetCurrentProtocolInfo(): string
    /* Virtual methods of GUPnP.Service */
    vfuncActionInvoked(action: GUPnP.ServiceAction): void
    vfuncQueryVariable(variable: string, value: any): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: ConnectionManager, action: GUPnP.ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: ConnectionManager, action: GUPnP.ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    on(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify-failed", callback: (($obj: ConnectionManager, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: ConnectionManager, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    on(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-variable", callback: (($obj: ConnectionManager, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: ConnectionManager, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    on(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export class BasicManagement {
<<<<<<< HEAD
    /* Properties of RygelCore-2.4.RygelCore.BasicManagement */
    maxHistorySize: number
    /* Fields of RygelCore-2.4.RygelCore.BasicManagement */
    parentInstance: GUPnP.Service
    priv: BasicManagementPrivate
    deviceStatus: string
    /* Fields of GUPnP-1.0.GUPnP.Service */
    parent: GUPnP.ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.BasicManagement */
    getMaxHistorySize(): number
    setMaxHistorySize(value: number): void
    /* Methods of GUPnP-1.0.GUPnP.Service */
=======
    /* Properties of RygelCore.BasicManagement */
    maxHistorySize: number
    /* Fields of RygelCore.BasicManagement */
    parentInstance: GUPnP.Service
    priv: BasicManagementPrivate
    deviceStatus: string
    /* Fields of GUPnP.Service */
    parent: GUPnP.ServiceInfo
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.BasicManagement */
    getMaxHistorySize(): number
    setMaxHistorySize(value: number): void
    /* Methods of GUPnP.Service */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
<<<<<<< HEAD
    /* Methods of GUPnP-1.0.GUPnP.ServiceInfo */
=======
    /* Methods of GUPnP.ServiceInfo */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getContext(): GUPnP.Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
<<<<<<< HEAD
<<<<<<< HEAD
    getIntrospection(): GUPnP.ServiceIntrospection
=======
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    getIntrospection(): GUPnP.ServiceIntrospection
>>>>>>> 2968f8b (Update types)
    getIntrospectionAsync(callback: GUPnP.ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
<<<<<<< HEAD
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection
=======
>>>>>>> 2968f8b (Update types)
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.0.GUPnP.Service */
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
=======
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GUPnP.Service */
    vfuncActionInvoked(action: GUPnP.ServiceAction): void
    vfuncQueryVariable(variable: string, value: any): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: BasicManagement, action: GUPnP.ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: BasicManagement, action: GUPnP.ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    on(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify-failed", callback: (($obj: BasicManagement, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: BasicManagement, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    on(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-variable", callback: (($obj: BasicManagement, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: BasicManagement, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    on(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export class DescriptionFile {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.DescriptionFile */
    parentInstance: GObject.Object
    priv: DescriptionFilePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.DescriptionFile */
=======
    /* Fields of RygelCore.DescriptionFile */
    parentInstance: GObject.Object
    priv: DescriptionFilePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.DescriptionFile */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    setDeviceType(deviceType: string): void
    setModelDescription(modelDescription: string): void
    setModelName(modelName: string): void
    setModelNumber(modelNumber: string): void
    setFriendlyName(friendlyName: string): void
    getFriendlyName(): string
    setUdn(udn: string): void
    getUdn(): string | null
    setDlnaCaps(capabilities: PluginCapabilities): void
    clearServiceList(): void
    addService(deviceName: string, resourceInfo: ResourceInfo): void
    clearIconList(): void
    addIcon(deviceName: string, iconInfo: IconInfo, url: string): void
    modifyServiceType(oldType: string, newType: string): void
    save(path: string): void
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DescriptionFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
    connect(sigName: "notify", callback: (($obj: DescriptionFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DescriptionFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export interface RootDevice_ConstructProps extends GUPnP.RootDevice_ConstructProps {
    services?: Gee.ArrayList
}
export class RootDevice {
<<<<<<< HEAD
    /* Properties of RygelCore-2.4.RygelCore.RootDevice */
    services: Gee.ArrayList
    /* Properties of GUPnP-1.0.GUPnP.RootDevice */
    available: boolean
    /* Fields of RygelCore-2.4.RygelCore.RootDevice */
    parentInstance: GUPnP.RootDevice
    priv: RootDevicePrivate
    /* Fields of GUPnP-1.0.GUPnP.RootDevice */
    parent: GUPnP.Device
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.RootDevice */
    getServices(): Gee.ArrayList
    /* Methods of GUPnP-1.0.GUPnP.RootDevice */
=======
    /* Properties of RygelCore.RootDevice */
    services: Gee.ArrayList
    /* Properties of GUPnP.RootDevice */
    available: boolean
    /* Fields of RygelCore.RootDevice */
    parentInstance: GUPnP.RootDevice
    priv: RootDevicePrivate
    /* Fields of GUPnP.RootDevice */
    parent: GUPnP.Device
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.RootDevice */
    getServices(): Gee.ArrayList
    /* Methods of GUPnP.RootDevice */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getAvailable(): boolean
    getDescriptionDir(): string
    getDescriptionPath(): string
    getRelativeLocation(): string
    getSsdpResourceGroup(): GSSDP.ResourceGroup
    setAvailable(available: boolean): void
<<<<<<< HEAD
    /* Methods of GUPnP-1.0.GUPnP.DeviceInfo */
=======
    /* Methods of GUPnP.DeviceInfo */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getContext(): GUPnP.Context
    getDescriptionValue(element: string): string
    getDevice(type: string): GUPnP.DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
<<<<<<< HEAD
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): { returnType: string, mimeType: string | null, depth: number | null, width: number | null, height: number | null }
=======
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getLocation(): string
    getManufacturer(): string
    getManufacturerUrl(): string
    getModelDescription(): string
    getModelName(): string
    getModelNumber(): string
    getModelUrl(): string
    getPresentationUrl(): string
    getResourceFactory(): GUPnP.ResourceFactory
    getSerialNumber(): string
    getService(type: string): GUPnP.ServiceInfo
    getUdn(): string
    getUpc(): string
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[]
    listDevices(): GUPnP.DeviceInfo[]
    listDlnaCapabilities(): string[]
    listDlnaDeviceClassIdentifier(): string[]
    listServiceTypes(): string[]
    listServices(): GUPnP.ServiceInfo[]
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
    connect(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
>>>>>>> 2968f8b (Update types)
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
export class RootDeviceFactory {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.RootDeviceFactory */
    parentInstance: GObject.Object
    priv: RootDeviceFactoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.RootDeviceFactory */
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
=======
    /* Fields of RygelCore.RootDeviceFactory */
    parentInstance: GObject.Object
    priv: RootDeviceFactoryPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.RootDeviceFactory */
    create(plugin: Plugin): RootDevice
    getContext(): GUPnP.Context
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RootDeviceFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of RygelCore.RootDeviceFactory */
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RootDeviceFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RootDeviceFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export class LogHandler {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.LogHandler */
    parentInstance: GObject.Object
    priv: LogHandlerPrivate
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
=======
    /* Fields of RygelCore.LogHandler */
    parentInstance: GObject.Object
    priv: LogHandlerPrivate
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LogHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
    connect(sigName: "notify", callback: (($obj: LogHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LogHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export class MetaConfig {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.MetaConfig */
    parentInstance: GObject.Object
    priv: MetaConfigPrivate
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
=======
    /* Fields of RygelCore.MetaConfig */
    parentInstance: GObject.Object
    priv: MetaConfigPrivate
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of RygelCore-2.4.RygelCore.Configuration */
    getUpnpEnabled(): boolean
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of RygelCore.Configuration */
<<<<<<< HEAD
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    getUpnpEnabled(): boolean
>>>>>>> 2968f8b (Update types)
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
<<<<<<< HEAD
<<<<<<< HEAD
    getVideoUploadFolder(): string
    getMusicUploadFolder(): string
    getPictureUploadFolder(): string
=======
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    getVideoUploadFolder(): string
    getMusicUploadFolder(): string
    getPictureUploadFolder(): string
>>>>>>> 2968f8b (Update types)
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
<<<<<<< HEAD
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetaConfig, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.4.RygelCore.Configuration */
    connect(sigName: "configuration_changed", callback: (($obj: MetaConfig, entry: ConfigurationEntry) => void)): number
    on(sigName: "configuration_changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration_changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration_changed", callback: (entry: ConfigurationEntry) => void): NodeJS.EventEmitter
    emit(sigName: "configuration_changed", entry: ConfigurationEntry): void
    connect(sigName: "section_changed", callback: (($obj: MetaConfig, section: string, entry: SectionEntry) => void)): number
    on(sigName: "section_changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section_changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section_changed", callback: (section: string, entry: SectionEntry) => void): NodeJS.EventEmitter
    emit(sigName: "section_changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting_changed", callback: (($obj: MetaConfig, section: string, key: string) => void)): number
    on(sigName: "setting_changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting_changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting_changed", callback: (section: string, key: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting_changed", section: string, key: string): void
=======
    /* Virtual methods of RygelCore.MetaConfig */
    vfuncGetUpnpEnabled(): boolean
    vfuncGetInterface(): string
    vfuncGetInterfaces(): string[]
    vfuncGetPort(): number
    vfuncGetTranscoding(): boolean
    vfuncGetAllowUpload(): boolean
    vfuncGetAllowDeletion(): boolean
    vfuncGetLogLevels(): string
    vfuncGetPluginPath(): string
    vfuncGetEnginePath(): string
    vfuncGetMediaEngine(): string
    vfuncGetVideoUploadFolder(): string
    vfuncGetMusicUploadFolder(): string
    vfuncGetPictureUploadFolder(): string
    vfuncGetEnabled(section: string): boolean
    vfuncGetTitle(section: string): string
    vfuncGetString(section: string, key: string): string
    vfuncGetStringList(section: string, key: string): Gee.ArrayList
    vfuncGetInt(section: string, key: string, min: number, max: number): number
    vfuncGetIntList(section: string, key: string): Gee.ArrayList
    vfuncGetBool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetaConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetaConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of RygelCore.Configuration */
<<<<<<< HEAD
    connect(sigName: "configuration-changed", callback: (($obj: MetaConfig, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: MetaConfig, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    on(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section-changed", callback: (($obj: MetaConfig, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: MetaConfig, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    on(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting-changed", callback: (($obj: MetaConfig, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: MetaConfig, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    on(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    connect(sigName: "configuration_changed", callback: (($obj: MetaConfig, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration_changed", callback: (($obj: MetaConfig, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration_changed", entry: ConfigurationEntry): void
    on(sigName: "configuration_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section_changed", callback: (($obj: MetaConfig, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section_changed", callback: (($obj: MetaConfig, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section_changed", section: string, entry: SectionEntry): void
    on(sigName: "section_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting_changed", callback: (($obj: MetaConfig, section: string, key: string) => void)): number
    connect_after(sigName: "setting_changed", callback: (($obj: MetaConfig, section: string, key: string) => void)): number
    emit(sigName: "setting_changed", section: string, key: string): void
    on(sigName: "setting_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> 2968f8b (Update types)
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
    static $gtype: GObject.Type
}
export interface PluginLoader_ConstructProps extends RecursiveModuleLoader_ConstructProps {
}
export class PluginLoader {
<<<<<<< HEAD
    /* Properties of RygelCore-2.4.RygelCore.RecursiveModuleLoader */
    basePath: string
    /* Fields of RygelCore-2.4.RygelCore.PluginLoader */
    parentInstance: RecursiveModuleLoader
    priv: PluginLoaderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.PluginLoader */
=======
    /* Properties of RygelCore.RecursiveModuleLoader */
    basePath: string
    /* Fields of RygelCore.PluginLoader */
    parentInstance: RecursiveModuleLoader
    priv: PluginLoaderPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.PluginLoader */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    pluginDisabled(name: string): boolean
    addPlugin(plugin: Plugin): void
    getPluginByName(name: string): Plugin | null
    listPlugins(): Gee.Collection
<<<<<<< HEAD
    /* Methods of RygelCore-2.4.RygelCore.RecursiveModuleLoader */
=======
    /* Methods of RygelCore.RecursiveModuleLoader */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    loadModules(): void
    loadModulesSync(cancellable?: Gio.Cancellable | null): void
    loadModuleFromFile(file: Gio.File): boolean
    loadModuleFromInfo(info: PluginInformation): boolean
    getBasePath(): string
    setBasePath(value: string): void
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of RygelCore-2.4.RygelCore.PluginLoader */
    connect(sigName: "plugin_available", callback: (($obj: PluginLoader, plugin: Plugin) => void)): number
    on(sigName: "plugin_available", callback: (plugin: Plugin) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "plugin_available", callback: (plugin: Plugin) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "plugin_available", callback: (plugin: Plugin) => void): NodeJS.EventEmitter
    emit(sigName: "plugin_available", plugin: Plugin): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of RygelCore.RecursiveModuleLoader */
    vfuncLoadModuleFromFile(file: Gio.File): boolean
    vfuncLoadModuleFromInfo(info: PluginInformation): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.PluginLoader */
    connect(sigName: "plugin_available", callback: (($obj: PluginLoader, plugin: Plugin) => void)): number
    connect_after(sigName: "plugin_available", callback: (($obj: PluginLoader, plugin: Plugin) => void)): number
    emit(sigName: "plugin_available", plugin: Plugin): void
    on(sigName: "plugin_available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "plugin_available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "plugin_available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export class RecursiveModuleLoader {
<<<<<<< HEAD
    /* Properties of RygelCore-2.4.RygelCore.RecursiveModuleLoader */
    basePath: string
    /* Fields of RygelCore-2.4.RygelCore.RecursiveModuleLoader */
    parentInstance: GObject.Object
    priv: RecursiveModuleLoaderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.RecursiveModuleLoader */
=======
    /* Properties of RygelCore.RecursiveModuleLoader */
    basePath: string
    /* Fields of RygelCore.RecursiveModuleLoader */
    parentInstance: GObject.Object
    priv: RecursiveModuleLoaderPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.RecursiveModuleLoader */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    loadModules(): void
    loadModulesSync(cancellable?: Gio.Cancellable | null): void
    loadModuleFromFile(file: Gio.File): boolean
    loadModuleFromInfo(info: PluginInformation): boolean
    getBasePath(): string
    setBasePath(value: string): void
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of RygelCore.RecursiveModuleLoader */
    vfuncLoadModuleFromFile(file: Gio.File): boolean
    vfuncLoadModuleFromInfo(info: PluginInformation): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export class Plugin {
<<<<<<< HEAD
    /* Properties of RygelCore-2.4.RygelCore.Plugin */
=======
    /* Properties of RygelCore.Plugin */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    capabilities: PluginCapabilities
    title: string
    active: boolean
    resourceInfos: Gee.ArrayList
    iconInfos: Gee.ArrayList
    defaultIcons: Gee.ArrayList
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.Plugin */
    parentInstance: GUPnP.ResourceFactory
    priv: PluginPrivate
    /* Fields of GUPnP-1.0.GUPnP.ResourceFactory */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.Plugin */
=======
    /* Fields of RygelCore.Plugin */
    parentInstance: GUPnP.ResourceFactory
    priv: PluginPrivate
    /* Fields of GUPnP.ResourceFactory */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.Plugin */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
<<<<<<< HEAD
    /* Methods of GUPnP-1.0.GUPnP.ResourceFactory */
=======
    /* Methods of GUPnP.ResourceFactory */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    registerResourceType(upnpType: string, type: GObject.Type): void
    unregisterResourceProxyType(upnpType: string): boolean
    unregisterResourceType(upnpType: string): boolean
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of RygelCore.Plugin */
    vfuncApplyHacks(device: RootDevice, descriptionPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export interface MediaDevice_ConstructProps extends GObject.Object_ConstructProps {
    plugin?: Plugin
    title?: string
    capabilities?: PluginCapabilities
}
export class MediaDevice {
<<<<<<< HEAD
    /* Properties of RygelCore-2.4.RygelCore.MediaDevice */
    plugin: Plugin
    /* Fields of RygelCore-2.4.RygelCore.MediaDevice */
    parentInstance: GObject.Object
    priv: MediaDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.MediaDevice */
=======
    /* Properties of RygelCore.MediaDevice */
    plugin: Plugin
    /* Fields of RygelCore.MediaDevice */
    parentInstance: GObject.Object
    priv: MediaDevicePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.MediaDevice */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addInterface(iface: string): void
    removeInterface(iface: string): void
    getInterfaces(): string[]
    getPlugin(): Plugin
    setPlugin(value: Plugin): void
    getTitle(): string
    getCapabilities(): PluginCapabilities
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
    connect(sigName: "notify", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export class BaseConfiguration {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.BaseConfiguration */
    parentInstance: GObject.Object
    priv: BaseConfigurationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.BaseConfiguration */
=======
    /* Fields of RygelCore.BaseConfiguration */
    parentInstance: GObject.Object
    priv: BaseConfigurationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.BaseConfiguration */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getUpnpEnabled(): boolean
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
    getVideoUploadFolder(): string
    getMusicUploadFolder(): string
    getPictureUploadFolder(): string
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseConfiguration, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.4.RygelCore.Configuration */
    connect(sigName: "configuration_changed", callback: (($obj: BaseConfiguration, entry: ConfigurationEntry) => void)): number
    on(sigName: "configuration_changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration_changed", callback: (entry: ConfigurationEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration_changed", callback: (entry: ConfigurationEntry) => void): NodeJS.EventEmitter
    emit(sigName: "configuration_changed", entry: ConfigurationEntry): void
    connect(sigName: "section_changed", callback: (($obj: BaseConfiguration, section: string, entry: SectionEntry) => void)): number
    on(sigName: "section_changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section_changed", callback: (section: string, entry: SectionEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section_changed", callback: (section: string, entry: SectionEntry) => void): NodeJS.EventEmitter
    emit(sigName: "section_changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting_changed", callback: (($obj: BaseConfiguration, section: string, key: string) => void)): number
    on(sigName: "setting_changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting_changed", callback: (section: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting_changed", callback: (section: string, key: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting_changed", section: string, key: string): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of RygelCore.BaseConfiguration */
    vfuncGetUpnpEnabled(): boolean
    vfuncGetInterface(): string
    vfuncGetInterfaces(): string[]
    vfuncGetPort(): number
    vfuncGetTranscoding(): boolean
    vfuncGetAllowUpload(): boolean
    vfuncGetAllowDeletion(): boolean
    vfuncGetLogLevels(): string
    vfuncGetPluginPath(): string
    vfuncGetEnginePath(): string
    vfuncGetMediaEngine(): string
    vfuncGetVideoUploadFolder(): string
    vfuncGetMusicUploadFolder(): string
    vfuncGetPictureUploadFolder(): string
    vfuncGetEnabled(section: string): boolean
    vfuncGetTitle(section: string): string
    vfuncGetString(section: string, key: string): string
    vfuncGetStringList(section: string, key: string): Gee.ArrayList
    vfuncGetInt(section: string, key: string, min: number, max: number): number
    vfuncGetIntList(section: string, key: string): Gee.ArrayList
    vfuncGetBool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseConfiguration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseConfiguration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of RygelCore.Configuration */
<<<<<<< HEAD
    connect(sigName: "configuration-changed", callback: (($obj: BaseConfiguration, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: BaseConfiguration, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    on(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section-changed", callback: (($obj: BaseConfiguration, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: BaseConfiguration, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    on(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting-changed", callback: (($obj: BaseConfiguration, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: BaseConfiguration, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    on(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    connect(sigName: "configuration_changed", callback: (($obj: BaseConfiguration, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration_changed", callback: (($obj: BaseConfiguration, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration_changed", entry: ConfigurationEntry): void
    on(sigName: "configuration_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configuration_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configuration_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "section_changed", callback: (($obj: BaseConfiguration, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section_changed", callback: (($obj: BaseConfiguration, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section_changed", section: string, entry: SectionEntry): void
    on(sigName: "section_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting_changed", callback: (($obj: BaseConfiguration, section: string, key: string) => void)): number
    connect_after(sigName: "setting_changed", callback: (($obj: BaseConfiguration, section: string, key: string) => void)): number
    emit(sigName: "setting_changed", section: string, key: string): void
    on(sigName: "setting_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting_changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> 2968f8b (Update types)
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
export interface V1Hacks_ConstructProps extends GObject.Object_ConstructProps {
    deviceType?: string
    serviceTypes?: string[]
}
export class V1Hacks {
<<<<<<< HEAD
    /* Properties of RygelCore-2.4.RygelCore.V1Hacks */
    deviceType: string
    /* Fields of RygelCore-2.4.RygelCore.V1Hacks */
    parentInstance: GObject.Object
    priv: V1HacksPrivate
    descriptionPath: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.V1Hacks */
=======
    /* Properties of RygelCore.V1Hacks */
    deviceType: string
    /* Fields of RygelCore.V1Hacks */
    parentInstance: GObject.Object
    priv: V1HacksPrivate
    descriptionPath: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.V1Hacks */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    applyOnDevice(device: RootDevice, templatePath?: string | null): void
    getDeviceType(): string
    setDeviceType(value: string): void
    getServiceTypes(): string[]
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
    connect(sigName: "notify", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export interface PluginInformation_ConstructProps extends GObject.Object_ConstructProps {
    modulePath?: string
    name?: string
}
export class PluginInformation {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.PluginInformation */
    parentInstance: GObject.Object
    priv: PluginInformationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.PluginInformation */
    getModulePath(): string
    getName(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Fields of RygelCore.PluginInformation */
    parentInstance: GObject.Object
    priv: PluginInformationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.PluginInformation */
    getModulePath(): string
    getName(): string
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
    connect(sigName: "notify", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export abstract class ConnectionManagerClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.ConnectionManagerClass */
=======
    /* Fields of RygelCore.ConnectionManagerClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GUPnP.ServiceClass
    getCurrentProtocolInfo: (self: ConnectionManager) => string
    static name: string
}
export class ConnectionManagerPrivate {
    static name: string
}
export abstract class BasicManagementClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.BasicManagementClass */
=======
    /* Fields of RygelCore.BasicManagementClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GUPnP.ServiceClass
    static name: string
}
export class BasicManagementPrivate {
    static name: string
}
export abstract class DescriptionFileClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.DescriptionFileClass */
=======
    /* Fields of RygelCore.DescriptionFileClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    static name: string
}
export class DescriptionFilePrivate {
    static name: string
}
export class DLNAProfile {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.DLNAProfile */
=======
    /* Fields of RygelCore.DLNAProfile */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    mime: string
    name: string
    static name: string
    static new(name: string, mime: string): DLNAProfile
    constructor(name: string, mime: string)
    /* Static methods and pseudo-constructors */
    static new(name: string, mime: string): DLNAProfile
    static compareByName(a: DLNAProfile, b: DLNAProfile): number
}
export abstract class RootDeviceClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.RootDeviceClass */
=======
    /* Fields of RygelCore.RootDeviceClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GUPnP.RootDeviceClass
    static name: string
}
export class RootDevicePrivate {
    static name: string
}
export abstract class RootDeviceFactoryClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.RootDeviceFactoryClass */
=======
    /* Fields of RygelCore.RootDeviceFactoryClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    static name: string
}
export class RootDeviceFactoryPrivate {
    static name: string
}
export abstract class LogHandlerClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.LogHandlerClass */
=======
    /* Fields of RygelCore.LogHandlerClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    static name: string
}
export class LogHandlerPrivate {
    static name: string
}
export abstract class MetaConfigClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.MetaConfigClass */
=======
    /* Fields of RygelCore.MetaConfigClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    static name: string
}
export class MetaConfigPrivate {
    static name: string
}
export abstract class PluginLoaderClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.PluginLoaderClass */
=======
    /* Fields of RygelCore.PluginLoaderClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: RecursiveModuleLoaderClass
    static name: string
}
export class PluginLoaderPrivate {
    static name: string
}
export abstract class RecursiveModuleLoaderClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.RecursiveModuleLoaderClass */
=======
    /* Fields of RygelCore.RecursiveModuleLoaderClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    loadModuleFromFile: (self: RecursiveModuleLoader, file: Gio.File) => boolean
    loadModuleFromInfo: (self: RecursiveModuleLoader, info: PluginInformation) => boolean
    static name: string
}
export class RecursiveModuleLoaderPrivate {
    static name: string
}
export abstract class PluginClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.PluginClass */
=======
    /* Fields of RygelCore.PluginClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GUPnP.ResourceFactoryClass
    applyHacks: (self: Plugin, device: RootDevice, descriptionPath: string) => void
    static name: string
}
export class PluginPrivate {
    static name: string
}
export class ResourceInfo {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.ResourceInfo */
=======
    /* Fields of RygelCore.ResourceInfo */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export abstract class MediaDeviceClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.MediaDeviceClass */
=======
    /* Fields of RygelCore.MediaDeviceClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    static name: string
}
export class MediaDevicePrivate {
    static name: string
}
export abstract class BaseConfigurationClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.BaseConfigurationClass */
=======
    /* Fields of RygelCore.BaseConfigurationClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    getUpnpEnabled: (self: BaseConfiguration) => boolean
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
    getVideoUploadFolder: (self: BaseConfiguration) => string
    getMusicUploadFolder: (self: BaseConfiguration) => string
    getPictureUploadFolder: (self: BaseConfiguration) => string
    getEnabled: (self: BaseConfiguration, section: string) => boolean
    getTitle: (self: BaseConfiguration, section: string) => string
    getString: (self: BaseConfiguration, section: string, key: string) => string
    getStringList: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    getInt: (self: BaseConfiguration, section: string, key: string, min: number, max: number) => number
    getIntList: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    getBool: (self: BaseConfiguration, section: string, key: string) => boolean
    static name: string
}
export class BaseConfigurationPrivate {
    static name: string
}
export abstract class V1HacksClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.V1HacksClass */
=======
    /* Fields of RygelCore.V1HacksClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    static name: string
}
export class V1HacksPrivate {
    static name: string
}
export class IconInfo {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.IconInfo */
=======
    /* Fields of RygelCore.IconInfo */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export class XMLUtils {
    static name: string
    static new(): XMLUtils
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): XMLUtils
}
export abstract class PluginInformationClass {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.PluginInformationClass */
=======
    /* Fields of RygelCore.PluginInformationClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    static name: string
}
export class PluginInformationPrivate {
    static name: string
}
export abstract class DBusInterfaceIface {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.DBusInterfaceIface */
=======
    /* Fields of RygelCore.DBusInterfaceIface */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentIface: GObject.TypeInterface
    shutdown: (self: DBusInterface) => void
    static name: string
}
export abstract class ConfigurationIface {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.ConfigurationIface */
=======
    /* Fields of RygelCore.ConfigurationIface */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentIface: GObject.TypeInterface
    getUpnpEnabled: (self: Configuration) => boolean
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
    getVideoUploadFolder: (self: Configuration) => string
    getMusicUploadFolder: (self: Configuration) => string
    getPictureUploadFolder: (self: Configuration) => string
    getEnabled: (self: Configuration, section: string) => boolean
    getTitle: (self: Configuration, section: string) => string
    getString: (self: Configuration, section: string, key: string) => string
    getStringList: (self: Configuration, section: string, key: string) => Gee.ArrayList
    getInt: (self: Configuration, section: string, key: string, min: number, max: number) => number
    getIntList: (self: Configuration, section: string, key: string) => Gee.ArrayList
    getBool: (self: Configuration, section: string, key: string) => boolean
    static name: string
}
export abstract class StateMachineIface {
<<<<<<< HEAD
    /* Fields of RygelCore-2.4.RygelCore.StateMachineIface */
=======
    /* Fields of RygelCore.StateMachineIface */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentIface: GObject.TypeInterface
    run: (self: StateMachine, callback?: Gio.AsyncReadyCallback | null) => void
    runFinish: (self: StateMachine, res: Gio.AsyncResult) => void
    getCancellable: (self: StateMachine) => Gio.Cancellable
    setCancellable: (self: StateMachine, value: Gio.Cancellable) => void
    static name: string
}
}