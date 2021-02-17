/**
 * Zeitgeist-2.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';

export declare namespace Zeitgeist {

export enum ResultType {
    MOST_RECENT_EVENTS,
    LEAST_RECENT_EVENTS,
    MOST_RECENT_SUBJECTS,
    LEAST_RECENT_SUBJECTS,
    MOST_POPULAR_SUBJECTS,
    LEAST_POPULAR_SUBJECTS,
    MOST_POPULAR_ACTOR,
    LEAST_POPULAR_ACTOR,
    MOST_RECENT_ACTOR,
    LEAST_RECENT_ACTOR,
    MOST_RECENT_ORIGIN,
    LEAST_RECENT_ORIGIN,
    MOST_POPULAR_ORIGIN,
    LEAST_POPULAR_ORIGIN,
    OLDEST_ACTOR,
    MOST_RECENT_SUBJECT_INTERPRETATION,
    LEAST_RECENT_SUBJECT_INTERPRETATION,
    MOST_POPULAR_SUBJECT_INTERPRETATION,
    LEAST_POPULAR_SUBJECT_INTERPRETATION,
    MOST_RECENT_MIMETYPE,
    LEAST_RECENT_MIMETYPE,
    MOST_POPULAR_MIMETYPE,
    LEAST_POPULAR_MIMETYPE,
    MOST_RECENT_CURRENT_URI,
    LEAST_RECENT_CURRENT_URI,
    MOST_POPULAR_CURRENT_URI,
    LEAST_POPULAR_CURRENT_URI,
    MOST_RECENT_EVENT_ORIGIN,
    LEAST_RECENT_EVENT_ORIGIN,
    MOST_POPULAR_EVENT_ORIGIN,
    LEAST_POPULAR_EVENT_ORIGIN,
    MOST_RECENT_CURRENT_ORIGIN,
    LEAST_RECENT_CURRENT_ORIGIN,
    MOST_POPULAR_CURRENT_ORIGIN,
    LEAST_POPULAR_CURRENT_ORIGIN,
    RELEVANCY,
}
export enum RelevantResultType {
    RECENT,
    RELATED,
}
export enum StorageState {
    NOT_AVAILABLE,
    AVAILABLE,
    ANY,
}
export enum EngineError {
    BACKUP_FAILED,
    DATABASE_BUSY,
    DATABASE_CANTOPEN,
    DATABASE_CORRUPT,
    DATABASE_ERROR,
    DATABASE_RETIRE_FAILED,
    EXISTING_INSTANCE,
    INVALID_ARGUMENT,
    INVALID_EVENT,
    INVALID_KEY,
}
export enum DataModelError {
    INVALID_SIGNATURE,
    NULL_EVENT,
    TOO_MANY_RESULTS,
}
export const SIG_DATASOURCES: string
export const SECOND: number
export const MINUTE: number
export const HOUR: number
export const DAY: number
export const WEEK: number
export const YEAR: number
export const ALARM: string
export const ATTACHMENT: string
export const CALENDAR: string
export const CALENDAR_DATA_OBJECT: string
export const EVENT: string
export const FREEBUSY: string
export const JOURNAL: string
export const TIMEZONE: string
export const TODO: string
export const CONTACT: string
export const CONTACT_GROUP: string
export const CONTACT_LIST: string
export const CONTACT_LIST_DATA_OBJECT: string
export const ORGANIZATION_CONTACT: string
export const PERSON_CONTACT: string
export const APPLICATION: string
export const ARCHIVE: string
export const ARCHIVE_ITEM: string
export const AUDIO: string
export const BOOKMARK: string
export const BOOKMARK_FOLDER: string
export const CURSOR: string
export const DATA_CONTAINER: string
export const DELETED_RESOURCE: string
export const DOCUMENT: string
export const EMBEDDED_FILE_DATA_OBJECT: string
export const EXECUTABLE: string
export const FILESYSTEM: string
export const FILESYSTEM_IMAGE: string
export const FILE_DATA_OBJECT: string
export const FOLDER: string
export const FONT: string
export const HARD_DISK_PARTITION: string
export const HTML_DOCUMENT: string
export const ICON: string
export const IMAGE: string
export const MEDIA: string
export const MEDIA_LIST: string
export const MEDIA_STREAM: string
export const MIND_MAP: string
export const OPERATING_SYSTEM: string
export const PAGINATED_TEXT_DOCUMENT: string
export const PLAIN_TEXT_DOCUMENT: string
export const PRESENTATION: string
export const RASTER_IMAGE: string
export const REMOTE_DATA_OBJECT: string
export const REMOTE_PORT_ADDRESS: string
export const SOFTWARE: string
export const SOFTWARE_ITEM: string
export const SOFTWARE_SERVICE: string
export const SOURCE_CODE: string
export const SPREADSHEET: string
export const TEXT_DOCUMENT: string
export const TRASH: string
export const VECTOR_IMAGE: string
export const VIDEO: string
export const VISUAL: string
export const WEBSITE: string
export const WEB_DATA_OBJECT: string
export const DATA_OBJECT: string
export const INFORMATION_ELEMENT: string
export const MOVIE: string
export const MUSIC_ALBUM: string
export const MUSIC_PIECE: string
export const TVSERIES: string
export const TVSHOW: string
export const EMAIL: string
export const IMMESSAGE: string
export const MAILBOX: string
export const MAILBOX_DATA_OBJECT: string
export const MESSAGE: string
export const MIME_ENTITY: string
export const ACCEPT_EVENT: string
export const ACCESS_EVENT: string
export const APPLICATION_ACTION: string
export const CREATE_EVENT: string
export const DELETE_EVENT: string
export const DENY_EVENT: string
export const EVENT_INTERPRETATION: string
export const EVENT_MANIFESTATION: string
export const EXPIRE_EVENT: string
export const HEURISTIC_ACTIVITY: string
export const LEAVE_EVENT: string
export const MODIFY_EVENT: string
export const MOVE_EVENT: string
export const RECEIVE_EVENT: string
export const SCHEDULED_ACTIVITY: string
export const SEND_EVENT: string
export const SYSTEM_NOTIFICATION: string
export const USER_ACTIVITY: string
export const WORLD_ACTIVITY: string
export const ENGINE_DBUS_NAME: string
export const ENGINE_DBUS_PATH: string
export const SIG_EVENT: string
export const MAX_DBUS_RESULT_SIZE: number
export const CACHE_SIZE: number
export function dataSourcesFromVariant(sourcesVariant: GLib.Variant): DataSource[]
export function dataSourcesToVariant(sources: GLib.HashTable): GLib.Variant
export function eventsFromVariant(vevents: GLib.Variant): Event[]
export function eventsToVariant(events: Event[]): GLib.Variant
export function eventsToVariantWithLimit(events: Event[], limit: number): GLib.Variant
export function timestampFromTimeval(timeval: GLib.TimeVal): number
export function timestampToTimeval(timestamp: number): /* result */ GLib.TimeVal
export function timestampFromNow(): number
export function timestampFromIso8601(datetime: string): number
export function timestampToIso8601(timestamp: number): string
export function timestampFromDate(date: GLib.Date): number
export function timestampFromDmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number
export function timestampToDate(timestamp: number): /* result */ GLib.Date
export function timestampNextMidnight(timestamp: number): number
export function timestampPrevMidnight(timestamp: number): number
export function symbolGetDisplayName(symbolUri: string): string
export function symbolGetDescription(symbolUri: string): string
export function symbolGetAllParents(symbolUri: string): string[]
export function symbolGetAllChildren(symbolUri: string): string[]
export function symbolGetChildren(symbolUri: string): string[]
export function symbolGetParents(symbolUri: string): string[]
export function symbolIsA(symbolUri?: string | null, parentUri?: string | null): boolean
export function utilsGetDataPath(): string
export function utilsGetDefaultDataPath(): string
export function utilsGetDatabaseFilePath(): string
export function utilsSetDatabaseFilePath(path: string): void
export function utilsGetDatabaseFileBackupPath(): string
export function utilsGetDatabaseFileRetireName(): string
export function utilsGetLocalExtensionsPath(): string
export function utilsUsingInMemoryDatabase(): boolean
export function utilsBackupDatabase(): void
export function utilsParseNegation(val: string): [ /* returnType */ boolean, /* val */ string ]
export function utilsParseNoexpand(val: string): [ /* returnType */ boolean, /* val */ string ]
export function utilsParseWildcard(val: string): [ /* returnType */ boolean, /* val */ string ]
export function utilsIsEmptyString(s?: string | null): boolean
export function utilsLogMayReadDirectly(): boolean
export function resultTypeIsSortOrderAsc(resultType: ResultType): boolean
export function registerMimetype(mimetype: string, interpretationUri: string): void
export function registerMimetypeRegex(mimetypeRegex: string, interpretationUri: string): void
export function interpretationForMimetype(mimetype?: string | null): string | null
export function registerUriScheme(uriScheme: string, manifestationType: string): void
export function manifestationForUri(uri: string): string | null
export interface RemoteRegistry_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteRegistry {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.RemoteRegistry */
    getDataSources(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataSourcesFinish(res: Gio.AsyncResult): GLib.Variant
    registerDataSource(uniqueId: string, name: string, description: string, eventTemplates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    registerDataSourceFinish(res: Gio.AsyncResult): boolean
    setDataSourceEnabled(uniqueId: string, enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setDataSourceEnabledFinish(res: Gio.AsyncResult): void
    getDataSourceFromId(uniqueId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataSourceFromIdFinish(res: Gio.AsyncResult): GLib.Variant
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
    /* Virtual methods of Zeitgeist.RemoteRegistry */
    vfuncGetDataSources(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncGetDataSourcesFinish(res: Gio.AsyncResult): GLib.Variant
    vfuncRegisterDataSource(uniqueId: string, name: string, description: string, eventTemplates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRegisterDataSourceFinish(res: Gio.AsyncResult): boolean
    vfuncSetDataSourceEnabled(uniqueId: string, enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSetDataSourceEnabledFinish(res: Gio.AsyncResult): void
    vfuncGetDataSourceFromId(uniqueId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncGetDataSourceFromIdFinish(res: Gio.AsyncResult): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist.RemoteRegistry */
    connect(sigName: "data-source-disconnected", callback: (($obj: RemoteRegistry, dataSource: GLib.Variant) => void)): number
    connect_after(sigName: "data-source-disconnected", callback: (($obj: RemoteRegistry, dataSource: GLib.Variant) => void)): number
    emit(sigName: "data-source-disconnected", dataSource: GLib.Variant): void
    on(sigName: "data-source-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "data-source-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "data-source-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "data-source-enabled", callback: (($obj: RemoteRegistry, uniqueId: string, enabled: boolean) => void)): number
    connect_after(sigName: "data-source-enabled", callback: (($obj: RemoteRegistry, uniqueId: string, enabled: boolean) => void)): number
    emit(sigName: "data-source-enabled", uniqueId: string, enabled: boolean): void
    on(sigName: "data-source-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "data-source-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "data-source-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "data-source-registered", callback: (($obj: RemoteRegistry, dataSource: GLib.Variant) => void)): number
    connect_after(sigName: "data-source-registered", callback: (($obj: RemoteRegistry, dataSource: GLib.Variant) => void)): number
    emit(sigName: "data-source-registered", dataSource: GLib.Variant): void
    on(sigName: "data-source-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "data-source-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "data-source-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteRegistry, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RemoteRegistry_ConstructProps)
    _init (config?: RemoteRegistry_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RemoteLog_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteLog {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.RemoteLog */
    deleteEvents(eventIds: number[], cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEventsFinish(res: Gio.AsyncResult): GLib.Variant
    findEventIds(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    findEventIdsFinish(res: Gio.AsyncResult): number[]
    findEvents(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    findEventsFinish(res: Gio.AsyncResult): GLib.Variant
    findRelatedUris(timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    findRelatedUrisFinish(res: Gio.AsyncResult): string[]
    getEvents(eventIds: number[], cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    getEventsFinish(res: Gio.AsyncResult): GLib.Variant
    insertEvents(events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEventsFinish(res: Gio.AsyncResult): number[]
    installMonitor(monitorPath: GLib.ObjectPath, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    installMonitorFinish(res: Gio.AsyncResult): void
    removeMonitor(monitorPath: GLib.ObjectPath, owner?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    removeMonitorFinish(res: Gio.AsyncResult): void
    quit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    quitFinish(res: Gio.AsyncResult): void
    getExtensions(): string[]
    getVersion(): /* result */ VersionStruct
    getDatapath(): string
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
    /* Virtual methods of Zeitgeist.RemoteLog */
    vfuncDeleteEvents(eventIds: number[], cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncDeleteEventsFinish(res: Gio.AsyncResult): GLib.Variant
    vfuncFindEventIds(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncFindEventIdsFinish(res: Gio.AsyncResult): number[]
    vfuncFindEvents(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncFindEventsFinish(res: Gio.AsyncResult): GLib.Variant
    vfuncFindRelatedUris(timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncFindRelatedUrisFinish(res: Gio.AsyncResult): string[]
    vfuncGetEvents(eventIds: number[], cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncGetEventsFinish(res: Gio.AsyncResult): GLib.Variant
    vfuncInsertEvents(events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInsertEventsFinish(res: Gio.AsyncResult): number[]
    vfuncInstallMonitor(monitorPath: GLib.ObjectPath, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInstallMonitorFinish(res: Gio.AsyncResult): void
    vfuncRemoveMonitor(monitorPath: GLib.ObjectPath, owner?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRemoveMonitorFinish(res: Gio.AsyncResult): void
    vfuncQuit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncQuitFinish(res: Gio.AsyncResult): void
    vfuncGetExtensions(): string[]
    vfuncGetVersion(): /* result */ VersionStruct
    vfuncGetDatapath(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteLog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteLog, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RemoteLog_ConstructProps)
    _init (config?: RemoteLog_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RemoteMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteMonitor {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.RemoteMonitor */
    notifyInsert(timeRange: GLib.Variant, events: GLib.Variant, callback?: Gio.AsyncReadyCallback | null): void
    notifyInsertFinish(res: Gio.AsyncResult): void
    notifyDelete(timeRange: GLib.Variant, eventIds: number[], callback?: Gio.AsyncReadyCallback | null): void
    notifyDeleteFinish(res: Gio.AsyncResult): void
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
    /* Virtual methods of Zeitgeist.RemoteMonitor */
    vfuncNotifyInsert(timeRange: GLib.Variant, events: GLib.Variant, callback?: Gio.AsyncReadyCallback | null): void
    vfuncNotifyInsertFinish(res: Gio.AsyncResult): void
    vfuncNotifyDelete(timeRange: GLib.Variant, eventIds: number[], callback?: Gio.AsyncReadyCallback | null): void
    vfuncNotifyDeleteFinish(res: Gio.AsyncResult): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RemoteMonitor_ConstructProps)
    _init (config?: RemoteMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RemoteSimpleIndexer_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteSimpleIndexer {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.RemoteSimpleIndexer */
    search(queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    searchWithRelevancies(queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
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
    /* Virtual methods of Zeitgeist.RemoteSimpleIndexer */
    vfuncSearch(queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSearchFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    vfuncSearchWithRelevancies(queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSearchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteSimpleIndexer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteSimpleIndexer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RemoteSimpleIndexer_ConstructProps)
    _init (config?: RemoteSimpleIndexer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NetworkManagerDBus_ConstructProps extends GObject.Object_ConstructProps {
}
export class NetworkManagerDBus {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.NetworkManagerDBus */
    state(): number
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
    /* Virtual methods of Zeitgeist.NetworkManagerDBus */
    vfuncState(): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist.NetworkManagerDBus */
    connect(sigName: "state-changed", callback: (($obj: NetworkManagerDBus, state: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: NetworkManagerDBus, state: number) => void)): number
    emit(sigName: "state-changed", state: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkManagerDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkManagerDBus, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NetworkManagerDBus_ConstructProps)
    _init (config?: NetworkManagerDBus_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ConnmanManagerDBus_ConstructProps extends GObject.Object_ConstructProps {
}
export class ConnmanManagerDBus {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.ConnmanManagerDBus */
    getState(): string
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
    /* Virtual methods of Zeitgeist.ConnmanManagerDBus */
    vfuncGetState(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist.ConnmanManagerDBus */
    connect(sigName: "state-changed", callback: (($obj: ConnmanManagerDBus, state: string) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: ConnmanManagerDBus, state: string) => void)): number
    emit(sigName: "state-changed", state: string): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConnmanManagerDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConnmanManagerDBus, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ConnmanManagerDBus_ConstructProps)
    _init (config?: ConnmanManagerDBus_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class ResultSet {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.ResultSet */
    size(): number
    estimatedMatches(): number
    nextValue(): Event | null
    hasNext(): boolean
    tell(): number
    reset(): void
    iterator(): ResultSet
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
    /* Virtual methods of Zeitgeist.ResultSet */
    vfuncSize(): number
    vfuncEstimatedMatches(): number
    vfuncNextValue(): Event | null
    vfuncHasNext(): boolean
    vfuncTell(): number
    vfuncReset(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResultSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResultSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ResultSet_ConstructProps)
    _init (config?: ResultSet_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataSourceRegistry_ConstructProps extends QueuedProxyWrapper_ConstructProps {
}
export class DataSourceRegistry {
    /* Properties of Zeitgeist.QueuedProxyWrapper */
    proxyCreated: boolean
    isConnected: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.DataSourceRegistry */
    getDataSources(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataSourcesFinish(res: Gio.AsyncResult): DataSource[]
    getDataSourceFromId(uniqueId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataSourceFromIdFinish(res: Gio.AsyncResult): DataSource
    registerDataSource(dataSource: DataSource, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    registerDataSourceFinish(res: Gio.AsyncResult): boolean
    setDataSourceEnabled(uniqueId: string, enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setDataSourceEnabledFinish(res: Gio.AsyncResult): void
    /* Methods of Zeitgeist.QueuedProxyWrapper */
    proxyAcquired(proxy: GObject.Object): void
    proxyUnavailable(err: Gio.IOErrorEnum): void
    processQueuedMethods(): void
    nameOwnerChanged(pspec: GObject.ParamSpec): void
    onConnectionEstablished(): void
    onConnectionLost(): void
    waitForProxy(callback?: Gio.AsyncReadyCallback | null): void
    waitForProxyFinish(res: Gio.AsyncResult): void
    getProxyCreated(): boolean
    getIsConnected(): boolean
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
    /* Virtual methods of Zeitgeist.QueuedProxyWrapper */
    vfuncOnConnectionEstablished(): void
    vfuncOnConnectionLost(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist.DataSourceRegistry */
    connect(sigName: "source-disconnected", callback: (($obj: DataSourceRegistry, dataSource: DataSource) => void)): number
    connect_after(sigName: "source-disconnected", callback: (($obj: DataSourceRegistry, dataSource: DataSource) => void)): number
    emit(sigName: "source-disconnected", dataSource: DataSource): void
    on(sigName: "source-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-enabled", callback: (($obj: DataSourceRegistry, uniqueId: string, enabled: boolean) => void)): number
    connect_after(sigName: "source-enabled", callback: (($obj: DataSourceRegistry, uniqueId: string, enabled: boolean) => void)): number
    emit(sigName: "source-enabled", uniqueId: string, enabled: boolean): void
    on(sigName: "source-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-registered", callback: (($obj: DataSourceRegistry, dataSource: DataSource) => void)): number
    connect_after(sigName: "source-registered", callback: (($obj: DataSourceRegistry, dataSource: DataSource) => void)): number
    emit(sigName: "source-registered", dataSource: DataSource): void
    on(sigName: "source-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-created", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-connected", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataSourceRegistry_ConstructProps)
    _init (config?: DataSourceRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DataSourceRegistry
    static $gtype: GObject.Type
}
export interface Index_ConstructProps extends QueuedProxyWrapper_ConstructProps {
}
export class Index {
    /* Properties of Zeitgeist.QueuedProxyWrapper */
    proxyCreated: boolean
    isConnected: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.Index */
    search(query: string, timeRange: TimeRange, eventTemplates: Event[], offset: number, numEvents: number, resultType: ResultType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): ResultSet
    searchWithRelevancies(query: string, timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, offset: number, numEvents: number, resultType: ResultType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* returnType */ ResultSet, /* relevancies */ number[] ]
    /* Methods of Zeitgeist.QueuedProxyWrapper */
    proxyAcquired(proxy: GObject.Object): void
    proxyUnavailable(err: Gio.IOErrorEnum): void
    processQueuedMethods(): void
    nameOwnerChanged(pspec: GObject.ParamSpec): void
    onConnectionEstablished(): void
    onConnectionLost(): void
    waitForProxy(callback?: Gio.AsyncReadyCallback | null): void
    waitForProxyFinish(res: Gio.AsyncResult): void
    getProxyCreated(): boolean
    getIsConnected(): boolean
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
    /* Virtual methods of Zeitgeist.QueuedProxyWrapper */
    vfuncOnConnectionEstablished(): void
    vfuncOnConnectionLost(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-created", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-connected", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Index
    static $gtype: GObject.Type
}
export interface Log_ConstructProps extends QueuedProxyWrapper_ConstructProps {
}
export class Log {
    /* Properties of Zeitgeist.QueuedProxyWrapper */
    proxyCreated: boolean
    isConnected: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.Log */
    insertEvent(event: Event, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEventFinish(res: Gio.AsyncResult): number[]
    insertEvents(events: Event[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEventsFinish(res: Gio.AsyncResult): number[]
    insertEventNoReply(event: Event): void
    insertEventsNoReply(events: Event[]): void
    findEvents(timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: ResultType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findEventsFinish(res: Gio.AsyncResult): ResultSet
    findEventIds(timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: ResultType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findEventIdsFinish(res: Gio.AsyncResult): number[]
    getEvents(eventIds: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getEventsFinish(res: Gio.AsyncResult): ResultSet
    findRelatedUris(timeRange: TimeRange, eventTemplates: Event[], resultEventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: RelevantResultType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findRelatedUrisFinish(res: Gio.AsyncResult): string[]
    deleteEvents(eventIds: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEventsFinish(res: Gio.AsyncResult): TimeRange
    quit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    quitFinish(res: Gio.AsyncResult): void
    installMonitor(monitor: Monitor): void
    removeMonitor(monitor: Monitor): void
    getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
    getExtensions(): string[]
    datapath(): string
    /* Methods of Zeitgeist.QueuedProxyWrapper */
    proxyAcquired(proxy: GObject.Object): void
    proxyUnavailable(err: Gio.IOErrorEnum): void
    processQueuedMethods(): void
    nameOwnerChanged(pspec: GObject.ParamSpec): void
    onConnectionEstablished(): void
    onConnectionLost(): void
    waitForProxy(callback?: Gio.AsyncReadyCallback | null): void
    waitForProxyFinish(res: Gio.AsyncResult): void
    getProxyCreated(): boolean
    getIsConnected(): boolean
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
    /* Virtual methods of Zeitgeist.QueuedProxyWrapper */
    vfuncOnConnectionEstablished(): void
    vfuncOnConnectionLost(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-created", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-connected", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Log_ConstructProps)
    _init (config?: Log_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Log
    static getDefault(): Log
    static $gtype: GObject.Type
}
export interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
    timeRange?: TimeRange
    eventTemplates?: Event[]
}
export class Monitor {
    /* Properties of Zeitgeist.Monitor */
    timeRange: TimeRange
    eventTemplates: Event[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.Monitor */
    getTemplates(): Event[]
    getPath(): string
    getTimeRange(): TimeRange
    setTimeRange(value: TimeRange): void
    getEventTemplates(): Event[]
    setEventTemplates(value: Event[]): void
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
    /* Methods of Zeitgeist.RemoteMonitor */
    notifyInsert(timeRange: GLib.Variant, events: GLib.Variant, callback?: Gio.AsyncReadyCallback | null): void
    notifyInsertFinish(res: Gio.AsyncResult): void
    notifyDelete(timeRange: GLib.Variant, eventIds: number[], callback?: Gio.AsyncReadyCallback | null): void
    notifyDeleteFinish(res: Gio.AsyncResult): void
    /* Virtual methods of Zeitgeist.Monitor */
    vfuncNotifyInsert(timeRange: GLib.Variant, events: GLib.Variant, callback?: Gio.AsyncReadyCallback | null): void
    vfuncNotifyInsertFinish(res: Gio.AsyncResult): void
    vfuncNotifyDelete(timeRange: GLib.Variant, eventIds: number[], callback?: Gio.AsyncReadyCallback | null): void
    vfuncNotifyDeleteFinish(res: Gio.AsyncResult): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist.Monitor */
    connect(sigName: "events-inserted", callback: (($obj: Monitor, timeRange: TimeRange, events: ResultSet) => void)): number
    connect_after(sigName: "events-inserted", callback: (($obj: Monitor, timeRange: TimeRange, events: ResultSet) => void)): number
    emit(sigName: "events-inserted", timeRange: TimeRange, events: ResultSet): void
    on(sigName: "events-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "events-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "events-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "events-deleted", callback: (($obj: Monitor, timeRange: TimeRange, eventIds: number[]) => void)): number
    connect_after(sigName: "events-deleted", callback: (($obj: Monitor, timeRange: TimeRange, eventIds: number[]) => void)): number
    emit(sigName: "events-deleted", timeRange: TimeRange, eventIds: number[]): void
    on(sigName: "events-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "events-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "events-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-range", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-range", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-range", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-range", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-range", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::event-templates", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-templates", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(timeRange: TimeRange, eventTemplates: Event[]): Monitor
    static $gtype: GObject.Type
}
export interface QueuedProxyWrapper_ConstructProps extends GObject.Object_ConstructProps {
    proxyCreated?: boolean
    isConnected?: boolean
}
export class QueuedProxyWrapper {
    /* Properties of Zeitgeist.QueuedProxyWrapper */
    proxyCreated: boolean
    isConnected: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.QueuedProxyWrapper */
    proxyAcquired(proxy: GObject.Object): void
    proxyUnavailable(err: Gio.IOErrorEnum): void
    processQueuedMethods(): void
    nameOwnerChanged(pspec: GObject.ParamSpec): void
    onConnectionEstablished(): void
    onConnectionLost(): void
    waitForProxy(callback?: Gio.AsyncReadyCallback | null): void
    waitForProxyFinish(res: Gio.AsyncResult): void
    getProxyCreated(): boolean
    getIsConnected(): boolean
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
    /* Virtual methods of Zeitgeist.QueuedProxyWrapper */
    vfuncOnConnectionEstablished(): void
    vfuncOnConnectionLost(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-created", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-connected", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: QueuedProxyWrapper_ConstructProps)
    _init (config?: QueuedProxyWrapper_ConstructProps): void
    static $gtype: GObject.Type
}
export class QueuedProxyWrapperQueuedMethod {
    /* Fields of Zeitgeist.QueuedProxyWrapperQueuedMethod */
    refCount: number
    /* Methods of Zeitgeist.QueuedProxyWrapperQueuedMethod */
    getQueuedMethod(): [ /* returnType */ GLib.SourceFunc, /* resultTarget */ object | null ]
    static name: string
    static new(callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod
    constructor(callback: GLib.SourceFunc)
    /* Static methods and pseudo-constructors */
    static new(callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod
}
export interface DataSource_ConstructProps extends GObject.Object_ConstructProps {
    uniqueId?: string
    name?: string
    description?: string
    eventTemplates?: Event[]
    enabled?: boolean
    running?: boolean
    timestamp?: number
}
export class DataSource {
    /* Properties of Zeitgeist.DataSource */
    uniqueId: string
    name: string
    description: string
    eventTemplates: Event[]
    enabled: boolean
    running: boolean
    timestamp: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.DataSource */
    toVariant(): GLib.Variant
    getUniqueId(): string
    setUniqueId(value: string): void
    getName(): string
    setName(value: string): void
    getDescription(): string
    setDescription(value: string): void
    getEventTemplates(): Event[] | null
    setEventTemplates(value?: Event[] | null): void
    getEnabled(): boolean
    setEnabled(value: boolean): void
    getRunning(): boolean
    setRunning(value: boolean): void
    getTimestamp(): number
    setTimestamp(value: number): void
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
    connect(sigName: "notify", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unique-id", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-id", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::event-templates", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-templates", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataSource_ConstructProps)
    _init (config?: DataSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DataSource
    static full(uniqueId: string, name: string, description: string, templates?: Event[] | null): DataSource
    static fromVariant(variant: GLib.Variant, resetRunning: boolean): DataSource
    static $gtype: GObject.Type
}
export interface Event_ConstructProps extends GObject.Object_ConstructProps {
    id?: number
    timestamp?: number
    origin?: string
    actor?: string
    interpretation?: string
    manifestation?: string
    subjects?: Subject[]
    payload?: any
}
export class Event {
    /* Properties of Zeitgeist.Event */
    id: number
    timestamp: number
    origin: string
    actor: string
    interpretation: string
    manifestation: string
    subjects: Subject[]
    payload: any
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.Event */
    getSubject(index: number): Subject
    numSubjects(): number
    addSubject(subject: Subject): void
    takeSubject(subject: Subject): void
    setActorFromAppInfo(info: Gio.AppInfo): void
    toVariant(): GLib.Variant
    debugPrint(): void
    matchesTemplate(templateEvent: Event): boolean
    getId(): number
    setId(value: number): void
    getTimestamp(): number
    setTimestamp(value: number): void
    getOrigin(): string | null
    setOrigin(value?: string | null): void
    getActor(): string | null
    setActor(value?: string | null): void
    getInterpretation(): string | null
    setInterpretation(value?: string | null): void
    getManifestation(): string | null
    setManifestation(value?: string | null): void
    getSubjects(): Subject[]
    setSubjects(value: Subject[]): void
    getPayload(): any
    setPayload(value?: any): void
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
    connect(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::origin", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actor", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interpretation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpretation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manifestation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manifestation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subjects", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subjects", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subjects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subjects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subjects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::payload", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::payload", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::payload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::payload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::payload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Event_ConstructProps)
    _init (config?: Event_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromVariant(eventVariant: GLib.Variant): Event
    static new(): Event
    static $gtype: GObject.Type
}
export interface Subject_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
    origin?: string
    text?: string
    storage?: string
    currentUri?: string
    currentOrigin?: string
    mimetype?: string
    interpretation?: string
    manifestation?: string
}
export class Subject {
    /* Properties of Zeitgeist.Subject */
    uri: string
    origin: string
    text: string
    storage: string
    currentUri: string
    currentOrigin: string
    mimetype: string
    interpretation: string
    manifestation: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.Subject */
    toVariant(): GLib.Variant
    matchesTemplate(templateSubject: Subject): boolean
    getUri(): string | null
    setUri(value?: string | null): void
    getOrigin(): string | null
    setOrigin(value?: string | null): void
    getText(): string | null
    setText(value?: string | null): void
    getStorage(): string | null
    setStorage(value?: string | null): void
    getCurrentUri(): string | null
    setCurrentUri(value?: string | null): void
    getCurrentOrigin(): string | null
    setCurrentOrigin(value?: string | null): void
    getMimetype(): string | null
    setMimetype(value?: string | null): void
    getInterpretation(): string | null
    setInterpretation(value?: string | null): void
    getManifestation(): string | null
    setManifestation(value?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::storage", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mimetype", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mimetype", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interpretation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpretation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manifestation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manifestation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Subject_ConstructProps)
    _init (config?: Subject_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static full(uri?: string | null, interpretation?: string | null, manifestation?: string | null, mimetype?: string | null, origin?: string | null, text?: string | null, storage?: string | null): Subject
    static moveEvent(sourceUri?: string | null, sourceOrigin?: string | null, destinationUri?: string | null, destinationOrigin?: string | null, interpretation?: string | null, manifestation?: string | null, mimetype?: string | null, text?: string | null, storage?: string | null): Subject
    static fromVariant(subjectVariant: GLib.Variant): Subject
    static new(): Subject
    static $gtype: GObject.Type
}
export interface TimeRange_ConstructProps extends GObject.Object_ConstructProps {
    start?: number
    end?: number
}
export class TimeRange {
    /* Properties of Zeitgeist.TimeRange */
    start: number
    end: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist.TimeRange */
    toVariant(): GLib.Variant
    intersect(timeRange: TimeRange): TimeRange | null
    getStart(): number
    getEnd(): number
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
    connect(sigName: "notify", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimeRange_ConstructProps)
    _init (config?: TimeRange_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(startMsec: number, endMsec: number): TimeRange
    static anytime(): TimeRange
    static toNow(): TimeRange
    static fromNow(): TimeRange
    static fromVariant(variant: GLib.Variant): TimeRange
    static $gtype: GObject.Type
}
export interface SimpleResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleResultSet {
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
    /* Methods of Zeitgeist.ResultSet */
    size(): number
    estimatedMatches(): number
    nextValue(): Event | null
    hasNext(): boolean
    tell(): number
    reset(): void
    iterator(): ResultSet
    /* Virtual methods of Zeitgeist.SimpleResultSet */
    vfuncSize(): number
    vfuncEstimatedMatches(): number
    vfuncNextValue(): Event | null
    vfuncHasNext(): boolean
    vfuncTell(): number
    vfuncReset(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleResultSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleResultSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SimpleResultSet_ConstructProps)
    _init (config?: SimpleResultSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(events: Event[]): SimpleResultSet
    static withNumMatches(events: Event[], matches: number): SimpleResultSet
    static $gtype: GObject.Type
}
export abstract class DataSourceRegistryClass {
    static name: string
}
export class DataSourceRegistryPrivate {
    static name: string
}
export abstract class IndexClass {
    static name: string
}
export class IndexPrivate {
    static name: string
}
export abstract class LogClass {
    static name: string
}
export class LogPrivate {
    static name: string
}
export abstract class MonitorClass {
    static name: string
}
export class MonitorPrivate {
    static name: string
}
export abstract class QueuedProxyWrapperClass {
    /* Fields of Zeitgeist.QueuedProxyWrapperClass */
    onConnectionEstablished: () => void
    onConnectionLost: () => void
    static name: string
}
export class QueuedProxyWrapperPrivate {
    static name: string
}
export abstract class QueuedProxyWrapperQueuedMethodClass {
    static name: string
}
export class QueuedProxyWrapperQueuedMethodPrivate {
    static name: string
}
export abstract class DataSourceClass {
    static name: string
}
export class DataSourcePrivate {
    static name: string
}
export abstract class EventClass {
    static name: string
}
export class EventPrivate {
    static name: string
}
export abstract class SubjectClass {
    static name: string
}
export class SubjectPrivate {
    static name: string
}
export abstract class TimeRangeClass {
    static name: string
}
export class TimeRangePrivate {
    static name: string
}
export abstract class SimpleResultSetClass {
    static name: string
}
export class SimpleResultSetPrivate {
    static name: string
}
export abstract class RemoteRegistryIface {
    /* Fields of Zeitgeist.RemoteRegistryIface */
    getDataSources: (cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    getDataSourcesFinish: (res: Gio.AsyncResult) => GLib.Variant
    registerDataSource: (uniqueId: string, name: string, description: string, eventTemplates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null) => void
    registerDataSourceFinish: (res: Gio.AsyncResult) => boolean
    setDataSourceEnabled: (uniqueId: string, enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    setDataSourceEnabledFinish: (res: Gio.AsyncResult) => void
    getDataSourceFromId: (uniqueId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    getDataSourceFromIdFinish: (res: Gio.AsyncResult) => GLib.Variant
    static name: string
}
export abstract class RemoteLogIface {
    /* Fields of Zeitgeist.RemoteLogIface */
    deleteEvents: (eventIds: number[], cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null) => void
    deleteEventsFinish: (res: Gio.AsyncResult) => GLib.Variant
    findEventIds: (timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null) => void
    findEventIdsFinish: (res: Gio.AsyncResult) => number[]
    findEvents: (timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null) => void
    findEventsFinish: (res: Gio.AsyncResult) => GLib.Variant
    findRelatedUris: (timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null) => void
    findRelatedUrisFinish: (res: Gio.AsyncResult) => string[]
    getEvents: (eventIds: number[], cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null) => void
    getEventsFinish: (res: Gio.AsyncResult) => GLib.Variant
    insertEvents: (events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null) => void
    insertEventsFinish: (res: Gio.AsyncResult) => number[]
    installMonitor: (monitorPath: GLib.ObjectPath, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null) => void
    installMonitorFinish: (res: Gio.AsyncResult) => void
    removeMonitor: (monitorPath: GLib.ObjectPath, owner?: GLib.BusName | null, callback?: Gio.AsyncReadyCallback | null) => void
    removeMonitorFinish: (res: Gio.AsyncResult) => void
    quit: (cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    quitFinish: (res: Gio.AsyncResult) => void
    getExtensions: () => string[]
    getVersion: () => /* result */ VersionStruct
    getDatapath: () => string
    static name: string
}
export abstract class RemoteMonitorIface {
    /* Fields of Zeitgeist.RemoteMonitorIface */
    notifyInsert: (timeRange: GLib.Variant, events: GLib.Variant, callback?: Gio.AsyncReadyCallback | null) => void
    notifyInsertFinish: (res: Gio.AsyncResult) => void
    notifyDelete: (timeRange: GLib.Variant, eventIds: number[], callback?: Gio.AsyncReadyCallback | null) => void
    notifyDeleteFinish: (res: Gio.AsyncResult) => void
    static name: string
}
export abstract class RemoteSimpleIndexerIface {
    /* Fields of Zeitgeist.RemoteSimpleIndexerIface */
    search: (queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    searchFinish: (res: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* matches */ number ]
    searchWithRelevancies: (queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    searchWithRelevanciesFinish: (res: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
    static name: string
}
export abstract class NetworkManagerDBusIface {
    /* Fields of Zeitgeist.NetworkManagerDBusIface */
    state: () => number
    static name: string
}
export abstract class ConnmanManagerDBusIface {
    /* Fields of Zeitgeist.ConnmanManagerDBusIface */
    getState: () => string
    static name: string
}
export abstract class ResultSetIface {
    /* Fields of Zeitgeist.ResultSetIface */
    size: () => number
    estimatedMatches: () => number
    nextValue: () => Event | null
    hasNext: () => boolean
    tell: () => number
    reset: () => void
    static name: string
}
export class VersionStruct {
    /* Fields of Zeitgeist.VersionStruct */
    major: number
    minor: number
    micro: number
    static name: string
}
}