/**
 * ECalendar-1.2
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { EDataServer } from './EDataServer-1.2';
import type { Soup } from './Soup-2.4';
import type { GData } from './GData-0.0';
import type { Json } from './Json-1.0';
import type { Goa } from './Goa-1.0';
import type { Camel } from './Camel-1.2';

export declare namespace ECalendar {

export enum CalClientError {
    NO_SUCH_CALENDAR,
    OBJECT_NOT_FOUND,
    INVALID_OBJECT,
    UNKNOWN_USER,
    OBJECT_ID_ALREADY_EXISTS,
    INVALID_RANGE,
}
export enum CalClientSourceType {
    EVENTS,
    TASKS,
    MEMOS,
    LAST,
}
export enum CalClientSourceTypeEnum {
    EVENTS,
    TASKS,
    MEMOS,
    INVALID,
}
export enum CalComponentAlarmAction {
    NONE,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    UNKNOWN,
}
export enum CalComponentAlarmTriggerType {
    NONE,
    RELATIVE_START,
    RELATIVE_END,
    ABSOLUTE,
}
export enum CalComponentClassification {
    NONE,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    UNKNOWN,
}
export enum CalComponentField {
    CATEGORIES,
    CLASSIFICATION,
    COMPLETED,
    DTEND,
    DTSTART,
    DUE,
    GEO,
    PERCENT,
    PRIORITY,
    SUMMARY,
    TRANSPARENCY,
    URL,
    HAS_ALARMS,
    ICON,
    COMPLETE,
    RECURRING,
    OVERDUE,
    COLOR,
    STATUS,
    COMPONENT,
    LOCATION,
    NUM_FIELDS,
}
export enum CalComponentPeriodType {
    DATETIME,
    DURATION,
}
export enum CalComponentRangeType {
    SINGLE,
    THISPRIOR,
    THISFUTURE,
}
export enum CalComponentTransparency {
    NONE,
    TRANSPARENT,
    OPAQUE,
    UNKNOWN,
}
export enum CalComponentVType {
    NO_TYPE,
    EVENT,
    TODO,
    JOURNAL,
    FREEBUSY,
    TIMEZONE,
}
export enum CalLoadState {
    NOT_LOADED,
    LOADING,
    LOADED,
}
export enum CalSetModeStatus {
    SUCCESS,
    ERROR,
    NOT_SUPPORTED,
}
export enum CalSetModeStatusEnum {
    SUCCESS,
    ERROR,
    UNSUPPORTED,
}
export enum CalSourceType {
    EVENT,
    TODO,
    JOURNAL,
    LAST,
}
export enum CalSourceTypeEnum {
    EVENT,
    TODO,
    JOURNAL,
    INVALID,
}
export enum CalendarStatus {
    OK,
    INVALID_ARG,
    BUSY,
    REPOSITORY_OFFLINE,
    NO_SUCH_CALENDAR,
    OBJECT_NOT_FOUND,
    INVALID_OBJECT,
    URI_NOT_LOADED,
    URI_ALREADY_LOADED,
    PERMISSION_DENIED,
    UNKNOWN_USER,
    OBJECT_ID_ALREADY_EXISTS,
    PROTOCOL_NOT_SUPPORTED,
    CANCELLED,
    COULD_NOT_CANCEL,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_REQUIRED,
    DBUS_EXCEPTION,
    OTHER_ERROR,
    INVALID_SERVER_VERSION,
    NOT_SUPPORTED,
}
export enum DataCalCallStatus {
    SUCCESS,
    BUSY,
    REPOSITORYOFFLINE,
    PERMISSIONDENIED,
    INVALIDRANGE,
    OBJECTNOTFOUND,
    INVALIDOBJECT,
    OBJECTIDALREADYEXISTS,
    AUTHENTICATIONFAILED,
    AUTHENTICATIONREQUIRED,
    UNSUPPORTEDFIELD,
    UNSUPPORTEDMETHOD,
    UNSUPPORTEDAUTHENTICATIONMETHOD,
    TLSNOTAVAILABLE,
    NOSUCHCAL,
    UNKNOWNUSER,
    OFFLINEUNAVAILABLE,
    SEARCHSIZELIMITEXCEEDED,
    SEARCHTIMELIMITEXCEEDED,
    INVALIDQUERY,
    QUERYREFUSED,
    COULDNOTCANCEL,
    OTHERERROR,
    INVALIDSERVERVERSION,
    INVALIDARG,
    NOTSUPPORTED,
    NOTOPENED,
}
export enum CalChangeType {
    ADDED,
    MODIFIED,
    DELETED,
}
export enum CalClientViewFlags {
    NONE,
    NOTIFY_INITIAL,
}
export enum DataCalMode {
    OCAL,
    EMOTE,
    NYMODE,
}
export enum DataCalObjModType {
    THIS,
    THISANDPRIOR,
    THISANDFUTURE,
    ALL,
}
export enum DataCalObjType {
    EVENT,
    TODO,
    JOURNAL,
    ANYTYPE,
}
export function calendarErrorQuark(): GLib.Quark
export interface CalRecurInstanceFn {
    (comp: CalComponent, instanceStart: number, instanceEnd: number, data: object): boolean
}
export interface Cal_ConstructProps extends GObject.Object_ConstructProps {
}
export class Cal {
    /* Fields of ECalendar-1.2.ECalendar.Cal */
    object: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.Cal */
    discardAlarm(comp: CalComponent, auid: string): boolean
    getAlarmEmailAddress(alarmAddress: string): boolean
    getAlarmsForObject(id: CalComponentId, start: number, end: number, alarms: CalComponentAlarms): boolean
    getCalAddress(calAddress: string): boolean
    getLdapAttribute(ldapAttribute: string): boolean
    getLoadState(): CalLoadState
    getLocalAttachmentStore(): string
    getObjectList(query: string): { returnType: boolean, objects: number[] }
    getOneAlarmOnly(): boolean
    getOrganizerMustAccept(): boolean
    getOrganizerMustAttend(): boolean
    getQuery(sexp: string): { returnType: boolean, query: CalView }
    getRecurrencesNoMaster(): boolean
    getRefreshSupported(): boolean
    getSaveSchedules(): boolean
    getSourceType(): CalSourceType
    getStaticCapability(cap: string): boolean
    isReadOnly(readOnly: boolean): boolean
    open(onlyIfExists: boolean): boolean
    openAsync(onlyIfExists: boolean): void
    refresh(): boolean
    remove(): boolean
    removeObject(uid: string): boolean
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
    /* Signals of ECalendar-1.2.ECalendar.Cal */
    connect(sigName: "backend-died", callback: (($obj: Cal) => void)): number
    on(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: Cal, object: string) => void)): number
    on(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "cal-opened", callback: (($obj: Cal, object: number) => void)): number
    on(sigName: "cal-opened", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cal-opened", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cal-opened", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "cal-opened", object: number): void
    connect(sigName: "cal-opened-ex", callback: (($obj: Cal, error: number) => void)): number
    on(sigName: "cal-opened-ex", callback: (error: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cal-opened-ex", callback: (error: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cal-opened-ex", callback: (error: number) => void): NodeJS.EventEmitter
    emit(sigName: "cal-opened-ex", error: number): void
    connect(sigName: "cal-set-mode", callback: (($obj: Cal, object: CalSetModeStatusEnum, p0: any) => void)): number
    on(sigName: "cal-set-mode", callback: (object: CalSetModeStatusEnum, p0: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cal-set-mode", callback: (object: CalSetModeStatusEnum, p0: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cal-set-mode", callback: (object: CalSetModeStatusEnum, p0: any) => void): NodeJS.EventEmitter
    emit(sigName: "cal-set-mode", object: CalSetModeStatusEnum, p0: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cal, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Cal_ConstructProps)
    _init (config?: Cal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: EDataServer.Source, type: CalSourceType): Cal
    static getErrorMessage(status: CalendarStatus): string
    static marshalVOIDENUMENUM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
    static marshalVOIDSTRINGUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
    static marshalVOIDUINTSTRING(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
    static matchTzid(tzid: string): string
    static systemTimezoneGetLocation(): string
    static utilGetSystemTimezoneLocation(): string
    static utilPriorityFromString(string: string): number
    static utilPriorityToString(priority: number): string
    static $gtype: GObject.Type
}
export interface CalClient_ConstructProps extends EDataServer.Client_ConstructProps {
}
export class CalClient {
    /* Properties of EDataServer-1.2.EDataServer.Client */
    readonly capabilities: object
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly opened: boolean
    readonly readonly: boolean
    /* Fields of ECalendar-1.2.ECalendar.CalClient */
    parent: EDataServer.Client
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalClient */
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    checkOneAlarmOnly(): boolean
    checkOrganizerMustAccept(): boolean
    checkOrganizerMustAttend(): boolean
    checkRecurrencesNoMaster(): boolean
    checkSaveSchedules(): boolean
    createObjectFinish(result: Gio.AsyncResult): { returnType: boolean, uid: string }
    createObjectsFinish(result: Gio.AsyncResult): { returnType: boolean, uids: string[] }
    discardAlarm(uid: string, rid: string, auid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    discardAlarmSync(uid: string, rid: string, auid: string, cancellable?: Gio.Cancellable | null): boolean
    generateInstances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: CalRecurInstanceFn): void
    generateInstancesSync(start: number, end: number, cb: CalRecurInstanceFn): void
    getAttachmentUris(uid: string, rid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getAttachmentUrisFinish(result: Gio.AsyncResult): { returnType: boolean, attachmentUris: string[] }
    getAttachmentUrisSync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, attachmentUris: string[] }
    getDefaultObject(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getFreeBusy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getFreeBusyFinish(result: Gio.AsyncResult): boolean
    getFreeBusySync(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null): boolean
    getLocalAttachmentStore(): string
    getObject(uid: string, rid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getObjectList(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getObjectListAsComps(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getObjectListAsCompsFinish(result: Gio.AsyncResult): { returnType: boolean, ecalcomps: CalComponent[] }
    getObjectListAsCompsSync(sexp: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, ecalcomps: CalComponent[] }
    getObjectsForUid(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getObjectsForUidFinish(result: Gio.AsyncResult): { returnType: boolean, ecalcomps: CalComponent[] }
    getObjectsForUidSync(uid: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, ecalcomps: CalComponent[] }
    getSourceType(): CalClientSourceType
    getTimezone(tzid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getView(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getViewFinish(result: Gio.AsyncResult): { returnType: boolean, view: CalClientView }
    getViewSync(sexp: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, view: CalClientView }
    modifyObjectFinish(result: Gio.AsyncResult): boolean
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
    removeObjectFinish(result: Gio.AsyncResult): boolean
    removeObjectsFinish(result: Gio.AsyncResult): boolean
    /* Methods of EDataServer-1.2.EDataServer.Client */
    cancelAll(): void
    checkCapability(capability: string): boolean
    checkRefreshSupported(): boolean
    dupBusName(): string
    getBackendProperty(propName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getBackendPropertyFinish(result: Gio.AsyncResult): { returnType: boolean, propValue: string }
    getBackendPropertySync(propName: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, propValue: string }
    getCapabilities(): string[]
    getSource(): EDataServer.Source
    isOnline(): boolean
    isOpened(): boolean
    isReadonly(): boolean
    open(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null): boolean
    refMainContext(): GLib.MainContext
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    removeSync(cancellable?: Gio.Cancellable | null): boolean
    retrieveCapabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieveCapabilitiesFinish(result: Gio.AsyncResult): { returnType: boolean, capabilities: string }
    retrieveCapabilitiesSync(cancellable?: Gio.Cancellable | null): { returnType: boolean, capabilities: string }
    retrieveProperties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrievePropertiesFinish(result: Gio.AsyncResult): boolean
    retrievePropertiesSync(cancellable?: Gio.Cancellable | null): boolean
    setBackendProperty(propName: string, propValue: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setBackendPropertyFinish(result: Gio.AsyncResult): boolean
    setBackendPropertySync(propName: string, propValue: string, cancellable?: Gio.Cancellable | null): boolean
    setBusName(busName: string): void
    unwrapDbusError(dbusError: GLib.Error): void
    waitForConnected(timeoutSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    waitForConnectedFinish(result: Gio.AsyncResult): boolean
    waitForConnectedSync(timeoutSeconds: number, cancellable?: Gio.Cancellable | null): boolean
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
    /* Signals of ECalendar-1.2.ECalendar.CalClient */
    connect(sigName: "free-busy-data", callback: (($obj: CalClient, object: object) => void)): number
    on(sigName: "free-busy-data", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "free-busy-data", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "free-busy-data", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "free-busy-data", object: object): void
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: CalClient) => void)): number
    on(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: CalClient, object: string) => void)): number
    on(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: (($obj: CalClient, object: string, p0: string) => void)): number
    on(sigName: "backend-property-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-property-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-property-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: (($obj: CalClient, object: GLib.Error) => void)): number
    on(sigName: "opened", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "opened", object: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capabilities", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opened", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalClient_ConstructProps)
    _init (config?: CalClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: EDataServer.Source, sourceType: CalClientSourceType): CalClient
    static errorCreate(code: CalClientError, customMsg: string): GLib.Error
    static errorCreate(code: EDataServer.ClientError, customMsg?: string | null): GLib.Error
    static errorQuark(): GLib.Quark
    static errorToString(code: CalClientError): string
    static errorToString(code: EDataServer.ClientError): string
    static freeEcalcompSlist(ecalcomps: CalComponent[]): void
    static $gtype: GObject.Type
}
export interface CalClientView_ConstructProps extends GObject.Object_ConstructProps {
    client?: CalClient
    view?: object
}
export class CalClientView {
    /* Fields of ECalendar-1.2.ECalendar.CalClientView */
    object: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalClientView */
    getClient(): object
    isRunning(): boolean
    setFieldsOfInterest(fieldsOfInterest?: string[] | null): void
    setFlags(flags: CalClientViewFlags): void
    start(): void
    stop(): void
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
    /* Signals of ECalendar-1.2.ECalendar.CalClientView */
    connect(sigName: "complete", callback: (($obj: CalClientView, object: GLib.Error) => void)): number
    on(sigName: "complete", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "complete", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "complete", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "complete", object: GLib.Error): void
    connect(sigName: "objects-added", callback: (($obj: CalClientView, objects: number[]) => void)): number
    on(sigName: "objects-added", callback: (objects: number[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: (objects: number[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: (objects: number[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-added", objects: number[]): void
    connect(sigName: "objects-modified", callback: (($obj: CalClientView, objects: number[]) => void)): number
    on(sigName: "objects-modified", callback: (objects: number[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: (objects: number[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: (objects: number[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-modified", objects: number[]): void
    connect(sigName: "objects-removed", callback: (($obj: CalClientView, objects: CalComponentId[]) => void)): number
    on(sigName: "objects-removed", callback: (objects: CalComponentId[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: (objects: CalComponentId[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: (objects: CalComponentId[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-removed", objects: CalComponentId[]): void
    connect(sigName: "progress", callback: (($obj: CalClientView, object: number, p0: string) => void)): number
    on(sigName: "progress", callback: (object: number, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (object: number, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (object: number, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "progress", object: number, p0: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CalClientView_ConstructProps)
    _init (config?: CalClientView_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CalComponent_ConstructProps extends GObject.Object_ConstructProps {
}
export class CalComponent {
    /* Fields of ECalendar-1.2.ECalendar.CalComponent */
    object: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalComponent */
    abortSequence(): void
    addAlarm(alarm: CalComponentAlarm): void
    clone(): CalComponent
    commitSequence(): void
    eventDatesMatch(comp2: CalComponent): boolean
    getAlarmUids(): string[]
    getAsString(): string
    getAttachmentList(): { attachmentList: string[] }
    getAttendeeList(): { attendeeList: CalComponentAttendee[] }
    getCategories(categories: string): void
    getCategoriesList(): { categList: string[] }
    getClassification(classif: CalComponentClassification): void
    getCommentList(): { textList: CalComponentText[] }
    getCompleted(t: object): void
    getContactList(): { textList: CalComponentText[] }
    getCreated(t: object): void
    getDescriptionList(): { textList: CalComponentText[] }
    getDtend(dt: CalComponentDateTime): void
    getDtstamp(t: object): void
    getDtstart(dt: CalComponentDateTime): void
    getDue(dt: CalComponentDateTime): void
    getExdateList(): { exdateList: CalComponentDateTime[] }
    getGeo(geo: object): void
    getLastModified(t: object): void
    getLocation(location: string): void
    getNumAttachments(): number
    getOrganizer(organizer: CalComponentOrganizer): void
    getPercent(percent: number): void
    getPercentAsInt(): number
    getPriority(priority: number): void
    getRdateList(): { periodList: CalComponentPeriod[] }
    getRecurid(recurId: CalComponentRange): void
    getRecuridAsString(): string
    getSequence(sequence: number): void
    getSummary(summary: CalComponentText): void
    getTransparency(transp: CalComponentTransparency): void
    getUid(uid: string): void
    getUrl(url: string): void
    getVtype(): CalComponentVType
    hasAlarms(): boolean
    hasAttachments(): boolean
    hasAttendees(): boolean
    hasExceptions(): boolean
    hasExdates(): boolean
    hasExrules(): boolean
    hasOrganizer(): boolean
    hasRdates(): boolean
    hasRecurrences(): boolean
    hasRrules(): boolean
    hasSimpleRecurrence(): boolean
    isInstance(): boolean
    removeAlarm(auid: string): void
    removeAllAlarms(): void
    rescan(): void
    setAttachmentList(attachmentList: string[]): void
    setAttendeeList(attendeeList: CalComponentAttendee[]): void
    setCategories(categories: string): void
    setCategoriesList(categList: string[]): void
    setClassification(classif: CalComponentClassification): void
    setCommentList(textList: CalComponentText[]): void
    setCompleted(t: object): void
    setContactList(textList: CalComponentText[]): void
    setCreated(t: object): void
    setDtend(dt: CalComponentDateTime): void
    setDtstamp(t: object): void
    setDtstart(dt: CalComponentDateTime): void
    setDue(dt: CalComponentDateTime): void
    setExdateList(exdateList: CalComponentDateTime[]): void
    setGeo(geo: object): void
    setIcalcomponent(icalcomp: number): boolean
    setLastModified(t: object): void
    setLocation(location: string): void
    setNewVtype(type: CalComponentVType): void
    setOrganizer(organizer: CalComponentOrganizer): void
    setPercent(percent: number): void
    setPercentAsInt(percent: number): void
    setPriority(priority: number): void
    setRdateList(periodList: CalComponentPeriod[]): void
    setRecurid(recurId: CalComponentRange): void
    setSequence(sequence: number): void
    setSummary(summary: CalComponentText): void
    setTransparency(transp: CalComponentTransparency): void
    setUid(uid: string): void
    setUrl(url: string): void
    stripErrors(): void
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
    connect(sigName: "notify", callback: (($obj: CalComponent, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CalComponent_ConstructProps)
    _init (config?: CalComponent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CalComponent
    static newFromString(calobj: string): CalComponent
    static freeAttendeeList(attendeeList: CalComponentAttendee[]): void
    static freeCategoriesList(categList: string[]): void
    static freeDatetime(dt: CalComponentDateTime): void
    static freeExdateList(exdateList: CalComponentDateTime[]): void
    static freeGeo(geo: object): void
    static freeIcaltimetype(t: object): void
    static freeId(id: CalComponentId): void
    static freePercent(percent: number): void
    static freePeriodList(periodList: CalComponentPeriod[]): void
    static freePriority(priority: number): void
    static freeRange(range: CalComponentRange): void
    static freeSequence(sequence: number): void
    static freeTextList(textList: CalComponentText[]): void
    static genUid(): string
    static $gtype: GObject.Type
}
export interface CalView_ConstructProps extends GObject.Object_ConstructProps {
    client?: Cal
    view?: object
}
export class CalView {
    /* Fields of ECalendar-1.2.ECalendar.CalView */
    object: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalView */
    start(): void
    stop(): void
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
    /* Signals of ECalendar-1.2.ECalendar.CalView */
    connect(sigName: "objects-added", callback: (($obj: CalView, objects: number[]) => void)): number
    on(sigName: "objects-added", callback: (objects: number[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: (objects: number[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: (objects: number[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-added", objects: number[]): void
    connect(sigName: "objects-modified", callback: (($obj: CalView, objects: number[]) => void)): number
    on(sigName: "objects-modified", callback: (objects: number[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: (objects: number[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: (objects: number[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-modified", objects: number[]): void
    connect(sigName: "objects-removed", callback: (($obj: CalView, objects: CalComponentId[]) => void)): number
    on(sigName: "objects-removed", callback: (objects: CalComponentId[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: (objects: CalComponentId[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: (objects: CalComponentId[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-removed", objects: CalComponentId[]): void
    connect(sigName: "view-complete", callback: (($obj: CalView, object: number, p0: string) => void)): number
    on(sigName: "view-complete", callback: (object: number, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-complete", callback: (object: number, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-complete", callback: (object: number, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "view-complete", object: number, p0: string): void
    connect(sigName: "view-done", callback: (($obj: CalView, object: number) => void)): number
    on(sigName: "view-done", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-done", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-done", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "view-done", object: number): void
    connect(sigName: "view-progress", callback: (($obj: CalView, object: string, p0: number) => void)): number
    on(sigName: "view-progress", callback: (object: string, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-progress", callback: (object: string, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-progress", callback: (object: string, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "view-progress", object: string, p0: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CalView_ConstructProps)
    _init (config?: CalView_ConstructProps): void
    static $gtype: GObject.Type
}
export class CalChange {
    /* Fields of ECalendar-1.2.ECalendar.CalChange */
    comp: CalComponent
    type: CalChangeType
    static name: string
}
export abstract class CalClass {
    /* Fields of ECalendar-1.2.ECalendar.CalClass */
    parentClass: GObject.ObjectClass
    calOpened: (ecal: Cal, status: CalendarStatus) => void
    calOpenedEx: any
    backendError: (ecal: Cal, message: string) => void
    backendDied: (ecal: Cal) => void
    static name: string
}
export abstract class CalClientClass {
    /* Fields of ECalendar-1.2.ECalendar.CalClientClass */
    parent: EDataServer.ClientClass
    static name: string
}
export class CalClientPrivate {
    static name: string
}
export abstract class CalClientViewClass {
    /* Fields of ECalendar-1.2.ECalendar.CalClientViewClass */
    parentClass: GObject.ObjectClass
    progress: (view: CalClientView, percent: number, message: string) => void
    complete: any
    static name: string
}
export class CalClientViewPrivate {
    static name: string
}
export class CalComponentAlarm {
    /* Methods of ECalendar-1.2.ECalendar.CalComponentAlarm */
    free(): void
    getAction(action: CalComponentAlarmAction): void
    getAttendeeList(): { attendeeList: CalComponentAttendee[] }
    getDescription(description: CalComponentText): void
    getRepeat(repeat: CalComponentAlarmRepeat): void
    getTrigger(trigger: CalComponentAlarmTrigger): void
    getUid(): string
    hasAttendees(): boolean
    setAction(action: CalComponentAlarmAction): void
    setAttendeeList(attendeeList: CalComponentAttendee[]): void
    setDescription(description: CalComponentText): void
    setRepeat(repeat: CalComponentAlarmRepeat): void
    setTrigger(trigger: CalComponentAlarmTrigger): void
    static name: string
}
export class CalComponentAlarmInstance {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarmInstance */
    auid: string
    trigger: number
    occurStart: number
    occurEnd: number
    static name: string
}
export class CalComponentAlarmRepeat {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarmRepeat */
    repetitions: number
    duration: object
    static name: string
}
export class CalComponentAlarmTrigger {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarmTrigger */
    type: CalComponentAlarmTriggerType
    static name: string
}
export class CalComponentAlarms {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarms */
    comp: CalComponent
    alarms: object[]
    /* Methods of ECalendar-1.2.ECalendar.CalComponentAlarms */
    free(): void
    static name: string
}
export class CalComponentAttendee {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAttendee */
    value: string
    member: string
    rsvp: boolean
    delto: string
    delfrom: string
    sentby: string
    cn: string
    language: string
    static name: string
}
export abstract class CalComponentClass {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CalComponentDateTime {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentDateTime */
    value: object
    tzid: string
    static name: string
}
export class CalComponentId {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentId */
    uid: string
    rid: string
    static name: string
}
export class CalComponentOrganizer {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentOrganizer */
    value: string
    sentby: string
    cn: string
    language: string
    static name: string
}
export class CalComponentPeriod {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentPeriod */
    type: CalComponentPeriodType
    start: object
    static name: string
}
export class CalComponentPrivate {
    static name: string
}
export class CalComponentRange {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentRange */
    type: CalComponentRangeType
    datetime: CalComponentDateTime
    static name: string
}
export class CalComponentText {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentText */
    value: string
    altrep: string
    static name: string
}
export class CalPrivate {
    static name: string
}
export abstract class CalViewClass {
    /* Fields of ECalendar-1.2.ECalendar.CalViewClass */
    parentClass: GObject.ObjectClass
    viewProgress: (view: CalView, message: string, percent: number) => void
    viewDone: (view: CalView, status: CalendarStatus) => void
    viewComplete: (view: CalView, status: CalendarStatus, errorMsg: string) => void
    static name: string
}
export class CalViewPrivate {
    static name: string
}
}