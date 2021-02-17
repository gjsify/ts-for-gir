/**
 * ECalendar-1.2
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
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
    /* Fields of ECalendar.Cal */
    object: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECalendar.Cal */
    discardAlarm(comp: CalComponent, auid: string): boolean
    getAlarmEmailAddress(alarmAddress: string): boolean
    getAlarmsForObject(id: CalComponentId, start: number, end: number, alarms: CalComponentAlarms): boolean
    getCalAddress(calAddress: string): boolean
    getLdapAttribute(ldapAttribute: string): boolean
    getLoadState(): CalLoadState
    getLocalAttachmentStore(): string
    getObjectList(query: string): [ /* returnType */ boolean, /* objects */ number[] ]
    getOneAlarmOnly(): boolean
    getOrganizerMustAccept(): boolean
    getOrganizerMustAttend(): boolean
    getQuery(sexp: string): [ /* returnType */ boolean, /* query */ CalView ]
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
    /* Virtual methods of ECalendar.Cal */
    vfuncBackendDied(): void
    vfuncBackendError(message: string): void
    vfuncCalOpened(status: CalendarStatus): void
    vfuncCalOpenedEx(error: GLib.Error): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar.Cal */
    connect(sigName: "backend-died", callback: (($obj: Cal) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: Cal) => void)): number
    emit(sigName: "backend-died"): void
    on(sigName: "backend-died", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "backend-error", callback: (($obj: Cal, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: Cal, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    on(sigName: "backend-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cal-opened", callback: (($obj: Cal, object: number) => void)): number
    connect_after(sigName: "cal-opened", callback: (($obj: Cal, object: number) => void)): number
    emit(sigName: "cal-opened", object: number): void
    on(sigName: "cal-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cal-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cal-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cal-opened-ex", callback: (($obj: Cal, error: number) => void)): number
    connect_after(sigName: "cal-opened-ex", callback: (($obj: Cal, error: number) => void)): number
    emit(sigName: "cal-opened-ex", error: number): void
    on(sigName: "cal-opened-ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cal-opened-ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cal-opened-ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cal-set-mode", callback: (($obj: Cal, object: CalSetModeStatusEnum, p0: any) => void)): number
    connect_after(sigName: "cal-set-mode", callback: (($obj: Cal, object: CalSetModeStatusEnum, p0: any) => void)): number
    emit(sigName: "cal-set-mode", object: CalSetModeStatusEnum, p0: any): void
    on(sigName: "cal-set-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cal-set-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cal-set-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cal, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of EDataServer.Client */
    readonly capabilities: object
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly opened: boolean
    readonly readonly: boolean
    /* Fields of ECalendar.CalClient */
    parent: EDataServer.Client
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECalendar.CalClient */
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    checkOneAlarmOnly(): boolean
    checkOrganizerMustAccept(): boolean
    checkOrganizerMustAttend(): boolean
    checkRecurrencesNoMaster(): boolean
    checkSaveSchedules(): boolean
    createObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* uid */ string ]
    createObjectsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* uids */ string[] ]
    discardAlarm(uid: string, rid: string, auid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    discardAlarmSync(uid: string, rid: string, auid: string, cancellable?: Gio.Cancellable | null): boolean
    generateInstances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: CalRecurInstanceFn): void
    generateInstancesSync(start: number, end: number, cb: CalRecurInstanceFn): void
    getAttachmentUris(uid: string, rid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getAttachmentUrisFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* attachmentUris */ string[] ]
    getAttachmentUrisSync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* attachmentUris */ string[] ]
    getDefaultObject(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getFreeBusy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getFreeBusyFinish(result: Gio.AsyncResult): boolean
    getFreeBusySync(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null): boolean
    getLocalAttachmentStore(): string
    getObject(uid: string, rid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getObjectList(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getObjectListAsComps(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getObjectListAsCompsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    getObjectListAsCompsSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    getObjectsForUid(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getObjectsForUidFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    getObjectsForUidSync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    getSourceType(): CalClientSourceType
    getTimezone(tzid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getView(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getViewFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* view */ CalClientView ]
    getViewSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* view */ CalClientView ]
    modifyObjectFinish(result: Gio.AsyncResult): boolean
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
    removeObjectFinish(result: Gio.AsyncResult): boolean
    removeObjectsFinish(result: Gio.AsyncResult): boolean
    /* Methods of EDataServer.Client */
    cancelAll(): void
    checkCapability(capability: string): boolean
    checkRefreshSupported(): boolean
    dupBusName(): string
    getBackendProperty(propName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getBackendPropertyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* propValue */ string ]
    getBackendPropertySync(propName: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* propValue */ string ]
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
    retrieveCapabilitiesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieveCapabilitiesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
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
    /* Virtual methods of EDataServer.Client */
    vfuncBackendDied(): void
    vfuncBackendError(errorMsg: string): void
    vfuncBackendPropertyChanged(propName: string, propValue: string): void
    vfuncGetBackendProperty(propName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncGetBackendPropertyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* propValue */ string ]
    vfuncGetBackendPropertySync(propName: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* propValue */ string ]
    vfuncOpen(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncOpenFinish(result: Gio.AsyncResult): boolean
    vfuncOpenSync(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfuncOpened(error: GLib.Error): void
    vfuncRefresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRefreshFinish(result: Gio.AsyncResult): boolean
    vfuncRefreshSync(cancellable?: Gio.Cancellable | null): boolean
    vfuncRemove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRemoveFinish(result: Gio.AsyncResult): boolean
    vfuncRemoveSync(cancellable?: Gio.Cancellable | null): boolean
    vfuncRetrieveCapabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRetrieveCapabilitiesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    vfuncRetrieveCapabilitiesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    vfuncRetrievePropertiesSync(cancellable?: Gio.Cancellable | null): boolean
    vfuncSetBackendProperty(propName: string, propValue: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSetBackendPropertyFinish(result: Gio.AsyncResult): boolean
    vfuncSetBackendPropertySync(propName: string, propValue: string, cancellable?: Gio.Cancellable | null): boolean
    vfuncUnwrapDbusError(dbusError: GLib.Error): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar.CalClient */
    connect(sigName: "free-busy-data", callback: (($obj: CalClient, object: object) => void)): number
    connect_after(sigName: "free-busy-data", callback: (($obj: CalClient, object: object) => void)): number
    emit(sigName: "free-busy-data", object: object): void
    on(sigName: "free-busy-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "free-busy-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "free-busy-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: CalClient) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: CalClient) => void)): number
    emit(sigName: "backend-died"): void
    on(sigName: "backend-died", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "backend-error", callback: (($obj: CalClient, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: CalClient, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    on(sigName: "backend-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "backend-property-changed", callback: (($obj: CalClient, object: string, p0: string) => void)): number
    connect_after(sigName: "backend-property-changed", callback: (($obj: CalClient, object: string, p0: string) => void)): number
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    on(sigName: "backend-property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backend-property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backend-property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "opened", callback: (($obj: CalClient, object: GLib.Error) => void)): number
    connect_after(sigName: "opened", callback: (($obj: CalClient, object: GLib.Error) => void)): number
    emit(sigName: "opened", object: GLib.Error): void
    on(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of ECalendar.CalClientView */
    object: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECalendar.CalClientView */
    getClient(): object
    isRunning(): boolean
    setFieldsOfInterest(fieldsOfInterest?: string[] | null): void
    setFlags(flags: CalClientViewFlags): void
    start(): void
    stop(): void
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
    /* Virtual methods of ECalendar.CalClientView */
    vfuncComplete(error: GLib.Error): void
    vfuncProgress(percent: number, message: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar.CalClientView */
    connect(sigName: "complete", callback: (($obj: CalClientView, object: GLib.Error) => void)): number
    connect_after(sigName: "complete", callback: (($obj: CalClientView, object: GLib.Error) => void)): number
    emit(sigName: "complete", object: GLib.Error): void
    on(sigName: "complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "objects-added", callback: (($obj: CalClientView, objects: number[]) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: CalClientView, objects: number[]) => void)): number
    emit(sigName: "objects-added", objects: number[]): void
    on(sigName: "objects-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "objects-modified", callback: (($obj: CalClientView, objects: number[]) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: CalClientView, objects: number[]) => void)): number
    emit(sigName: "objects-modified", objects: number[]): void
    on(sigName: "objects-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "objects-removed", callback: (($obj: CalClientView, objects: CalComponentId[]) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: CalClientView, objects: CalComponentId[]) => void)): number
    emit(sigName: "objects-removed", objects: CalComponentId[]): void
    on(sigName: "objects-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: CalClientView, object: number, p0: string) => void)): number
    connect_after(sigName: "progress", callback: (($obj: CalClientView, object: number, p0: string) => void)): number
    emit(sigName: "progress", object: number, p0: string): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CalClientView_ConstructProps)
    _init (config?: CalClientView_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CalComponent_ConstructProps extends GObject.Object_ConstructProps {
}
export class CalComponent {
    /* Fields of ECalendar.CalComponent */
    object: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECalendar.CalComponent */
    abortSequence(): void
    addAlarm(alarm: CalComponentAlarm): void
    clone(): CalComponent
    commitSequence(): void
    eventDatesMatch(comp2: CalComponent): boolean
    getAlarmUids(): string[]
    getAsString(): string
    getAttachmentList(): /* attachmentList */ string[]
    getAttendeeList(): /* attendeeList */ CalComponentAttendee[]
    getCategories(categories: string): void
    getCategoriesList(): /* categList */ string[]
    getClassification(classif: CalComponentClassification): void
    getCommentList(): /* textList */ CalComponentText[]
    getCompleted(t: object): void
    getContactList(): /* textList */ CalComponentText[]
    getCreated(t: object): void
    getDescriptionList(): /* textList */ CalComponentText[]
    getDtend(dt: CalComponentDateTime): void
    getDtstamp(t: object): void
    getDtstart(dt: CalComponentDateTime): void
    getDue(dt: CalComponentDateTime): void
    getExdateList(): /* exdateList */ CalComponentDateTime[]
    getGeo(geo: object): void
    getLastModified(t: object): void
    getLocation(location: string): void
    getNumAttachments(): number
    getOrganizer(organizer: CalComponentOrganizer): void
    getPercent(percent: number): void
    getPercentAsInt(): number
    getPriority(priority: number): void
    getRdateList(): /* periodList */ CalComponentPeriod[]
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
    connect(sigName: "notify", callback: (($obj: CalComponent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalComponent, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of ECalendar.CalView */
    object: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECalendar.CalView */
    start(): void
    stop(): void
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
    /* Virtual methods of ECalendar.CalView */
    vfuncViewComplete(status: CalendarStatus, errorMsg: string): void
    vfuncViewDone(status: CalendarStatus): void
    vfuncViewProgress(message: string, percent: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar.CalView */
    connect(sigName: "objects-added", callback: (($obj: CalView, objects: number[]) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: CalView, objects: number[]) => void)): number
    emit(sigName: "objects-added", objects: number[]): void
    on(sigName: "objects-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "objects-modified", callback: (($obj: CalView, objects: number[]) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: CalView, objects: number[]) => void)): number
    emit(sigName: "objects-modified", objects: number[]): void
    on(sigName: "objects-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "objects-removed", callback: (($obj: CalView, objects: CalComponentId[]) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: CalView, objects: CalComponentId[]) => void)): number
    emit(sigName: "objects-removed", objects: CalComponentId[]): void
    on(sigName: "objects-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "view-complete", callback: (($obj: CalView, object: number, p0: string) => void)): number
    connect_after(sigName: "view-complete", callback: (($obj: CalView, object: number, p0: string) => void)): number
    emit(sigName: "view-complete", object: number, p0: string): void
    on(sigName: "view-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "view-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "view-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "view-done", callback: (($obj: CalView, object: number) => void)): number
    connect_after(sigName: "view-done", callback: (($obj: CalView, object: number) => void)): number
    emit(sigName: "view-done", object: number): void
    on(sigName: "view-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "view-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "view-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "view-progress", callback: (($obj: CalView, object: string, p0: number) => void)): number
    connect_after(sigName: "view-progress", callback: (($obj: CalView, object: string, p0: number) => void)): number
    emit(sigName: "view-progress", object: string, p0: number): void
    on(sigName: "view-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "view-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "view-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CalView_ConstructProps)
    _init (config?: CalView_ConstructProps): void
    static $gtype: GObject.Type
}
export class CalChange {
    /* Fields of ECalendar.CalChange */
    comp: CalComponent
    type: CalChangeType
    static name: string
}
export abstract class CalClass {
    /* Fields of ECalendar.CalClass */
    parentClass: GObject.ObjectClass
    calOpened: (ecal: Cal, status: CalendarStatus) => void
    calOpenedEx: (ecal: Cal, error: GLib.Error) => void
    backendError: (ecal: Cal, message: string) => void
    backendDied: (ecal: Cal) => void
    static name: string
}
export abstract class CalClientClass {
    /* Fields of ECalendar.CalClientClass */
    parent: EDataServer.ClientClass
    static name: string
}
export class CalClientPrivate {
    static name: string
}
export abstract class CalClientViewClass {
    /* Fields of ECalendar.CalClientViewClass */
    parentClass: GObject.ObjectClass
    progress: (view: CalClientView, percent: number, message: string) => void
    complete: (view: CalClientView, error: GLib.Error) => void
    static name: string
}
export class CalClientViewPrivate {
    static name: string
}
export class CalComponentAlarm {
    /* Methods of ECalendar.CalComponentAlarm */
    free(): void
    getAction(action: CalComponentAlarmAction): void
    getAttendeeList(): /* attendeeList */ CalComponentAttendee[]
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
    /* Fields of ECalendar.CalComponentAlarmInstance */
    auid: string
    trigger: number
    occurStart: number
    occurEnd: number
    static name: string
}
export class CalComponentAlarmRepeat {
    /* Fields of ECalendar.CalComponentAlarmRepeat */
    repetitions: number
    duration: object
    static name: string
}
export class CalComponentAlarmTrigger {
    /* Fields of ECalendar.CalComponentAlarmTrigger */
    type: CalComponentAlarmTriggerType
    static name: string
}
export class CalComponentAlarms {
    /* Fields of ECalendar.CalComponentAlarms */
    comp: CalComponent
    alarms: object[]
    /* Methods of ECalendar.CalComponentAlarms */
    free(): void
    static name: string
}
export class CalComponentAttendee {
    /* Fields of ECalendar.CalComponentAttendee */
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
    /* Fields of ECalendar.CalComponentClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CalComponentDateTime {
    /* Fields of ECalendar.CalComponentDateTime */
    value: object
    tzid: string
    static name: string
}
export class CalComponentId {
    /* Fields of ECalendar.CalComponentId */
    uid: string
    rid: string
    static name: string
}
export class CalComponentOrganizer {
    /* Fields of ECalendar.CalComponentOrganizer */
    value: string
    sentby: string
    cn: string
    language: string
    static name: string
}
export class CalComponentPeriod {
    /* Fields of ECalendar.CalComponentPeriod */
    type: CalComponentPeriodType
    start: object
    static name: string
}
export class CalComponentPrivate {
    static name: string
}
export class CalComponentRange {
    /* Fields of ECalendar.CalComponentRange */
    type: CalComponentRangeType
    datetime: CalComponentDateTime
    static name: string
}
export class CalComponentText {
    /* Fields of ECalendar.CalComponentText */
    value: string
    altrep: string
    static name: string
}
export class CalPrivate {
    static name: string
}
export abstract class CalViewClass {
    /* Fields of ECalendar.CalViewClass */
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