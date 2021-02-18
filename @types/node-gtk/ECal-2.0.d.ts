/**
 * ECal-2.0
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { ICalGLib } from './ICalGLib-3.0';
import type { EDataServer } from './EDataServer-1.2';
import type { GData } from './GData-0.0';
import type { Json } from './Json-1.0';
import type { Goa } from './Goa-1.0';
import type { Camel } from './Camel-1.2';

export declare namespace ECal {

export enum ClientError {
    NO_SUCH_CALENDAR,
    OBJECT_NOT_FOUND,
    INVALID_OBJECT,
    UNKNOWN_USER,
    OBJECT_ID_ALREADY_EXISTS,
    INVALID_RANGE,
}
export enum ClientSourceType {
    EVENTS,
    TASKS,
    MEMOS,
}
export enum ComponentAlarmAction {
    NONE,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    UNKNOWN,
}
export enum ComponentAlarmTriggerKind {
    NONE,
    RELATIVE_START,
    RELATIVE_END,
    ABSOLUTE,
}
export enum ComponentClassification {
    NONE,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    UNKNOWN,
}
export enum ComponentPeriodKind {
    DATETIME,
    DURATION,
}
export enum ComponentRangeKind {
    SINGLE,
    THISPRIOR,
    THISFUTURE,
}
export enum ComponentTransparency {
    NONE,
    TRANSPARENT,
    OPAQUE,
    UNKNOWN,
}
export enum ComponentVType {
    NO_TYPE,
    EVENT,
    TODO,
    JOURNAL,
    FREEBUSY,
    TIMEZONE,
}
export enum ClientViewFlags {
    NONE,
    NOTIFY_INITIAL,
}
export enum ObjModType {
    THIS,
    THIS_AND_PRIOR,
    THIS_AND_FUTURE,
    ALL,
    ONLY_THIS,
}
export enum OperationFlags {
    NONE,
    CONFLICT_FAIL,
    CONFLICT_USE_NEWER,
    CONFLICT_KEEP_SERVER,
    CONFLICT_KEEP_LOCAL,
    CONFLICT_WRITE_COPY,
    DISABLE_ITIP_MESSAGE,
}
export enum RecurDescribeRecurrenceFlags {
    NONE,
    PREFIXED,
    FALLBACK,
}
export enum ReminderWatcherDescribeFlags {
    NONE,
    MARKUP,
}
export const BACKEND_PROPERTY_ALARM_EMAIL_ADDRESS: string
export const BACKEND_PROPERTY_CAL_EMAIL_ADDRESS: string
export const BACKEND_PROPERTY_DEFAULT_OBJECT: string
export const BACKEND_PROPERTY_REVISION: string
export const EVOLUTION_ALARM_UID_PROPERTY: string
export const EVOLUTION_ENDDATE_PARAMETER: string
export const LIBICAL_GLIB_UNSTABLE_API: number
export const STATIC_CAPABILITY_ALARM_DESCRIPTION: string
export const STATIC_CAPABILITY_ALL_DAY_EVENT_AS_TIME: string
export const STATIC_CAPABILITY_BULK_ADDS: string
export const STATIC_CAPABILITY_BULK_MODIFIES: string
export const STATIC_CAPABILITY_BULK_REMOVES: string
export const STATIC_CAPABILITY_COMPONENT_COLOR: string
export const STATIC_CAPABILITY_CREATE_MESSAGES: string
export const STATIC_CAPABILITY_DELEGATE_SUPPORTED: string
export const STATIC_CAPABILITY_DELEGATE_TO_MANY: string
export const STATIC_CAPABILITY_HAS_UNACCEPTED_MEETING: string
export const STATIC_CAPABILITY_NO_ALARM_AFTER_START: string
export const STATIC_CAPABILITY_NO_ALARM_REPEAT: string
export const STATIC_CAPABILITY_NO_AUDIO_ALARMS: string
export const STATIC_CAPABILITY_NO_CONV_TO_ASSIGN_TASK: string
export const STATIC_CAPABILITY_NO_CONV_TO_RECUR: string
export const STATIC_CAPABILITY_NO_DISPLAY_ALARMS: string
export const STATIC_CAPABILITY_NO_EMAIL_ALARMS: string
export const STATIC_CAPABILITY_NO_GEN_OPTIONS: string
export const STATIC_CAPABILITY_NO_MEMO_START_DATE: string
export const STATIC_CAPABILITY_NO_ORGANIZER: string
export const STATIC_CAPABILITY_NO_PROCEDURE_ALARMS: string
export const STATIC_CAPABILITY_NO_TASK_ASSIGNMENT: string
export const STATIC_CAPABILITY_NO_THISANDFUTURE: string
export const STATIC_CAPABILITY_NO_THISANDPRIOR: string
export const STATIC_CAPABILITY_NO_TRANSPARENCY: string
export const STATIC_CAPABILITY_ONE_ALARM_ONLY: string
export const STATIC_CAPABILITY_ORGANIZER_MUST_ACCEPT: string
export const STATIC_CAPABILITY_ORGANIZER_MUST_ATTEND: string
export const STATIC_CAPABILITY_ORGANIZER_NOT_EMAIL_ADDRESS: string
export const STATIC_CAPABILITY_RECURRENCES_NO_MASTER: string
export const STATIC_CAPABILITY_REFRESH_SUPPORTED: string
export const STATIC_CAPABILITY_REMOVE_ALARMS: string
export const STATIC_CAPABILITY_REMOVE_ONLY_THIS: string
export const STATIC_CAPABILITY_REQ_SEND_OPTIONS: string
export const STATIC_CAPABILITY_SAVE_SCHEDULES: string
export const STATIC_CAPABILITY_SIMPLE_MEMO: string
export const STATIC_CAPABILITY_TASK_CAN_RECUR: string
export const STATIC_CAPABILITY_TASK_DATE_ONLY: string
export const STATIC_CAPABILITY_TASK_HANDLE_RECUR: string
export const STATIC_CAPABILITY_TASK_NO_ALARM: string
export function isodateFromTimeT(t: number): string
export function matchTzid(tzid: string): string
export function recurDescribeRecurrence(icalcomp: ICalGLib.Component, weekStartDay: GLib.DateWeekday, flags: number): string | null
export function recurDescribeRecurrenceEx(icalcomp: ICalGLib.Component, weekStartDay: GLib.DateWeekday, flags: number, datetimeFmtFunc?: RecurFormatDateTimeFunc | null): string | null
export function recurEnsureEndDates(comp: Component, refresh: boolean, tzCb: RecurResolveTimezoneCb, cancellable?: Gio.Cancellable | null): boolean
export function recurGenerateInstancesSync(icalcomp: ICalGLib.Component, intervalStart: ICalGLib.Time, intervalEnd: ICalGLib.Time, defaultTimezone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean
export function recurGetLocalizedNth(nth: number): string
export function recurObtainEnddate(ir: ICalGLib.Recurrence, prop: ICalGLib.Property, zone: ICalGLib.Timezone, convertEndDate: boolean): number
export function reminderDataFree(rd?: object | null): void
export function systemTimezoneGetLocation(): string
export function timeAddDay(time: number, days: number): number
export function timeAddDayWithZone(time: number, days: number, zone: ICalGLib.Timezone): number
export function timeAddMonthWithZone(time: number, months: number, zone: ICalGLib.Timezone): number
export function timeAddWeek(time: number, weeks: number): number
export function timeAddWeekWithZone(time: number, weeks: number, zone: ICalGLib.Timezone): number
export function timeDayBegin(t: number): number
export function timeDayBeginWithZone(time: number, zone: ICalGLib.Timezone): number
export function timeDayEnd(t: number): number
export function timeDayEndWithZone(time: number, zone: ICalGLib.Timezone): number
export function timeDayOfWeek(day: number, month: number, year: number): number
export function timeDayOfYear(day: number, month: number, year: number): number
export function timeDaysInMonth(year: number, month: number): number
export function timeFromIsodate(str: string): number
export function timeIsLeapYear(year: number): boolean
export function timeLeapYearsUpTo(year: number): number
export function timeMonthBeginWithZone(time: number, zone: ICalGLib.Timezone): number
export function timeToGdateWithZone(date: GLib.Date, time: number, zone?: ICalGLib.Timezone | null): void
export function timeWeekBeginWithZone(time: number, weekStartDay: number, zone: ICalGLib.Timezone): number
export function timeYearBeginWithZone(time: number, zone: ICalGLib.Timezone): number
export function utilAddTimezonesFromComponent(vcalComp: ICalGLib.Component, icalcomp: ICalGLib.Component): void
export function utilComponentDupXProperty(icalcomp: ICalGLib.Component, xName: string): string | null
export function utilComponentFindXProperty(icalcomp: ICalGLib.Component, xName: string): ICalGLib.Property | null
export function utilComponentGetRecuridAsString(icalcomp: ICalGLib.Component): string | null
export function utilComponentHasAlarms(icalcomp: ICalGLib.Component): boolean
export function utilComponentHasAttendee(icalcomp: ICalGLib.Component): boolean
export function utilComponentHasOrganizer(icalcomp: ICalGLib.Component): boolean
export function utilComponentHasProperty(icalcomp: ICalGLib.Component, propKind: ICalGLib.PropertyKind): boolean
export function utilComponentHasRdates(icalcomp: ICalGLib.Component): boolean
export function utilComponentHasRecurrences(icalcomp: ICalGLib.Component): boolean
export function utilComponentHasRrules(icalcomp: ICalGLib.Component): boolean
export function utilComponentHasXProperty(icalcomp: ICalGLib.Component, xName: string): boolean
export function utilComponentIsInstance(icalcomp: ICalGLib.Component): boolean
export function utilComponentRemovePropertyByKind(icalcomp: ICalGLib.Component, kind: ICalGLib.PropertyKind, all: boolean): number
export function utilComponentRemoveXProperty(icalcomp: ICalGLib.Component, xName: string): boolean
export function utilComponentSetXProperty(icalcomp: ICalGLib.Component, xName: string, value?: string | null): void
export function utilConflictResolutionToOperationFlags(conflictResolution: EDataServer.ConflictResolution): number
export function utilConstructInstance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time): ICalGLib.Component | null
export function utilCopyTimezone(zone: ICalGLib.Timezone): ICalGLib.Timezone
export function utilGenerateAlarmsForComp(comp: Component, start: number, end: number, omit: ComponentAlarmAction, resolveTzid: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone): ComponentAlarms | null
export function utilGenerateAlarmsForList(comps: Component[], start: number, end: number, omit: ComponentAlarmAction, resolveTzid: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone): [ /* returnType */ number, /* compAlarms */ ComponentAlarms[] ]
export function utilGetComponentOccurTimes(comp: Component, tzCb: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone, kind: ICalGLib.ComponentKind): [ /* outStart */ number, /* outEnd */ number ]
export function utilGetSystemTimezone(): ICalGLib.Timezone | null
export function utilGetSystemTimezoneLocation(): string
export function utilIcaltimeToTm(itt: ICalGLib.Time): object | null
export function utilIcaltimeToTmWithZone(itt: ICalGLib.Time, fromZone: ICalGLib.Timezone, toZone: ICalGLib.Timezone): object | null
export function utilInitRecurTaskSync(vtodo: ICalGLib.Component, calClient: Client, cancellable?: Gio.Cancellable | null): boolean
export function utilInlineLocalAttachmentsSync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
export function utilIsFirstInstance(comp: Component, rid: ICalGLib.Time, tzCb: RecurResolveTimezoneCb): boolean
export function utilMarkTaskCompleteSync(vtodo: ICalGLib.Component, completedTime: number, calClient: Client, cancellable?: Gio.Cancellable | null): boolean
export function utilNewComponent(kind: ICalGLib.ComponentKind): ICalGLib.Component
export function utilNewTopLevel(): ICalGLib.Component
export function utilNormalizeRruleUntilValue(icalcomp: ICalGLib.Component, ttuntil: ICalGLib.Time, tzCb: RecurResolveTimezoneCb): void
export function utilOperationFlagsToConflictResolution(flags: number): EDataServer.ConflictResolution
export function utilParseIcsFile(filename: string): ICalGLib.Component | null
export function utilParseIcsString(string: string): ICalGLib.Component | null
export function utilPriorityFromString(string: string): number
export function utilPriorityToString(priority: number): string
export function utilPropertyHasParameter(prop: ICalGLib.Property, paramKind: ICalGLib.ParameterKind): boolean
export function utilRemoveInstances(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType): void
export function utilRemoveInstancesEx(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType, tzCb: RecurResolveTimezoneCb): void
export function utilSecondsToString(seconds: number): string
export function utilSetAlarmAcknowledged(component: Component, auid: string, when: number): boolean
export function utilSplitAtInstance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, masterDtstart?: ICalGLib.Time | null): ICalGLib.Component | null
export function utilSplitAtInstanceEx(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, masterDtstart: ICalGLib.Time | null, tzCb: RecurResolveTimezoneCb): ICalGLib.Component | null
export function utilTmToIcaltime(tm: object | null, isDate: boolean): ICalGLib.Time
export interface ComponentParameterBagFilterFunc {
    (parameter: ICalGLib.Parameter): boolean
}
export interface ComponentPropertyBagFilterFunc {
    (property: ICalGLib.Property): boolean
}
export interface RecurFormatDateTimeFunc {
    (itt: ICalGLib.Time, buffer: string, bufferSize: number): void
}
export interface RecurInstanceCb {
    (icomp: ICalGLib.Component, instanceStart: ICalGLib.Time, instanceEnd: ICalGLib.Time, cancellable?: Gio.Cancellable | null): boolean
}
export interface RecurResolveTimezoneCb {
    (tzid: string, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
}
export class TimezoneCache {
    /* Methods of ECal.TimezoneCache */
    addTimezone(zone: ICalGLib.Timezone): void
    getTimezone(tzid: string): ICalGLib.Timezone | null
    listTimezones(): ICalGLib.Timezone[]
    /* Virtual methods of ECal.TimezoneCache */
    vfuncTimezoneAdded(zone: ICalGLib.Timezone): void
    vfuncTzcacheAddTimezone(zone: ICalGLib.Timezone): void
    /* Signals of ECal.TimezoneCache */
    connect(sigName: "timezone-added", callback: (($obj: TimezoneCache, zone: ICalGLib.Timezone) => void)): number
    connect_after(sigName: "timezone-added", callback: (($obj: TimezoneCache, zone: ICalGLib.Timezone) => void)): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    on(sigName: "timezone-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "timezone-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "timezone-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export interface Client_ConstructProps extends EDataServer.Client_ConstructProps {
    defaultTimezone?: ICalGLib.Timezone
    sourceType?: ClientSourceType
}
export class Client {
    /* Properties of ECal.Client */
    defaultTimezone: ICalGLib.Timezone
    /* Properties of EDataServer.Client */
    readonly capabilities: object
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly opened: boolean
    readonly readonly: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECal.Client */
    addTimezone(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    addTimezoneSync(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean
    checkOneAlarmOnly(): boolean
    checkOrganizerMustAccept(): boolean
    checkOrganizerMustAttend(): boolean
    checkRecurrencesNoMaster(): boolean
    checkSaveSchedules(): boolean
    createObject(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUid */ string | null ]
    createObjectSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUid */ string | null ]
    createObjects(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createObjectsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUids */ string[] | null ]
    createObjectsSync(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] | null ]
    discardAlarm(uid: string, rid: string, auid: string, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    discardAlarmSync(uid: string, rid: string, auid: string, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    generateInstances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    generateInstancesForObject(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    generateInstancesForObjectSync(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    generateInstancesSync(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    getAttachmentUris(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAttachmentUrisFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAttachmentUris */ string[] ]
    getAttachmentUrisSync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAttachmentUris */ string[] ]
    getComponentAsString(icalcomp: ICalGLib.Component): string
    getDefaultObject(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDefaultObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    getDefaultObjectSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    getDefaultTimezone(): ICalGLib.Timezone
    getFreeBusy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFreeBusyFinish(result: Gio.AsyncResult, outFreebusy: Component[]): boolean
    getFreeBusySync(start: number, end: number, users: string[], outFreebusy: Component[], cancellable?: Gio.Cancellable | null): boolean
    getLocalAttachmentStore(): string
    getObject(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    getObjectList(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectListAsComps(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectListAsCompsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    getObjectListAsCompsSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    getObjectListFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomps */ ICalGLib.Component[] ]
    getObjectListSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomps */ ICalGLib.Component[] ]
    getObjectSync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    getObjectsForUid(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectsForUidFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    getObjectsForUidSync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    getSourceType(): ClientSourceType
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTimezoneFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]
    getTimezoneSync(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]
    getView(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getViewFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outView */ ClientView ]
    getViewSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outView */ ClientView ]
    modifyObject(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyObjectFinish(result: Gio.AsyncResult): boolean
    modifyObjectSync(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    modifyObjects(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
    modifyObjectsSync(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    receiveObjects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
    receiveObjectsSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    removeObject(uid: string, rid: string, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeObjectFinish(result: Gio.AsyncResult): boolean
    removeObjectSync(uid: string, rid: string, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    removeObjects(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeObjectsFinish(result: Gio.AsyncResult): boolean
    removeObjectsSync(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    sendObjects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendObjectsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUsers */ string[], /* outModifiedIcalcomp */ ICalGLib.Component ]
    sendObjectsSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUsers */ string[], /* outModifiedIcalcomp */ ICalGLib.Component ]
    setDefaultTimezone(zone: ICalGLib.Timezone): void
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
    /* Methods of ECal.TimezoneCache */
    addTimezone(zone: ICalGLib.Timezone): void
    getTimezone(tzid: string): ICalGLib.Timezone | null
    listTimezones(): ICalGLib.Timezone[]
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of ECal.Client */
    vfuncTimezoneAdded(zone: ICalGLib.Timezone): void
    vfuncTzcacheAddTimezone(zone: ICalGLib.Timezone): void
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
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
    /* Signals of ECal.Client */
    connect(sigName: "free-busy-data", callback: (($obj: Client, object?: object | null) => void)): number
    connect_after(sigName: "free-busy-data", callback: (($obj: Client, object?: object | null) => void)): number
    emit(sigName: "free-busy-data", object?: object | null): void
    on(sigName: "free-busy-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "free-busy-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "free-busy-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: Client) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: Client) => void)): number
    emit(sigName: "backend-died"): void
    on(sigName: "backend-died", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "backend-error", callback: (($obj: Client, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: Client, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    on(sigName: "backend-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "backend-property-changed", callback: (($obj: Client, object: string, p0: string) => void)): number
    connect_after(sigName: "backend-property-changed", callback: (($obj: Client, object: string, p0: string) => void)): number
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    on(sigName: "backend-property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backend-property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backend-property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "opened", callback: (($obj: Client, object: GLib.Error) => void)): number
    connect_after(sigName: "opened", callback: (($obj: Client, object: GLib.Error) => void)): number
    emit(sigName: "opened", object: GLib.Error): void
    on(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of ECal.TimezoneCache */
    connect(sigName: "timezone-added", callback: (($obj: Client, zone: ICalGLib.Timezone) => void)): number
    connect_after(sigName: "timezone-added", callback: (($obj: Client, zone: ICalGLib.Timezone) => void)): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    on(sigName: "timezone-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "timezone-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "timezone-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-timezone", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-timezone", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opened", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static checkTimezonesSync(vcalendar: ICalGLib.Component, icalcomps?: ICalGLib.Component[] | null, cancellable?: Gio.Cancellable | null): boolean
    static connect(source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static connectFinish(result: Gio.AsyncResult): EDataServer.Client
    static connectSync(source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null): EDataServer.Client
    static errorCreate(code: ClientError, customMsg?: string | null): GLib.Error
    static errorCreate(code: EDataServer.ClientError, customMsg?: string | null): GLib.Error
    static errorQuark(): GLib.Quark
    static errorToString(code: ClientError): string
    static errorToString(code: EDataServer.ClientError): string
    static tzlookupCb(tzid: string, ecalclient: Client, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    static tzlookupIcalcompCb(tzid: string, lookupData: ClientTzlookupICalCompData, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ClientView_ConstructProps extends GObject.Object_ConstructProps {
    client?: Client
    connection?: Gio.DBusConnection
    objectPath?: string
}
export class ClientView {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECal.ClientView */
    getConnection(): Gio.DBusConnection
    getObjectPath(): string
    isRunning(): boolean
    refClient(): Client
    setFieldsOfInterest(fieldsOfInterest?: string[] | null): void
    setFlags(flags: ClientViewFlags): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of ECal.ClientView */
    vfuncComplete(error: GLib.Error): void
    vfuncProgress(percent: number, message: string): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ECal.ClientView */
    connect(sigName: "complete", callback: (($obj: ClientView, object: GLib.Error) => void)): number
    connect_after(sigName: "complete", callback: (($obj: ClientView, object: GLib.Error) => void)): number
    emit(sigName: "complete", object: GLib.Error): void
    on(sigName: "complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "objects-added", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    emit(sigName: "objects-added", objects: ICalGLib.Component[]): void
    on(sigName: "objects-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "objects-modified", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    emit(sigName: "objects-modified", objects: ICalGLib.Component[]): void
    on(sigName: "objects-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "objects-removed", callback: (($obj: ClientView, uids: ComponentId[]) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: ClientView, uids: ComponentId[]) => void)): number
    emit(sigName: "objects-removed", uids: ComponentId[]): void
    on(sigName: "objects-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: ClientView, object: number, p0: string) => void)): number
    connect_after(sigName: "progress", callback: (($obj: ClientView, object: number, p0: string) => void)): number
    emit(sigName: "progress", object: number, p0: string): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ClientView_ConstructProps)
    _init (config?: ClientView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Component_ConstructProps extends GObject.Object_ConstructProps {
}
export class Component {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECal.Component */
    abortSequence(): void
    addAlarm(alarm: ComponentAlarm): void
    clone(): Component
    commitSequence(): void
    getAlarm(auid: string): ComponentAlarm | null
    getAlarmUids(): string[] | null
    getAllAlarms(): ComponentAlarm[] | null
    getAsString(): string
    getAttachments(): ICalGLib.Attach[] | null
    getAttendees(): ComponentAttendee[] | null
    getCategories(): string | null
    getCategoriesList(): string[] | null
    getClassification(): ComponentClassification
    getComments(): ComponentText[] | null
    getCompleted(): ICalGLib.Time
    getContacts(): ComponentText[]
    getCreated(): ICalGLib.Time
    getDescriptions(): ComponentText[] | null
    getDtend(): ComponentDateTime | null
    getDtstamp(): ICalGLib.Time | null
    getDtstart(): ComponentDateTime | null
    getDue(): ComponentDateTime | null
    getExdates(): ComponentDateTime[] | null
    getExruleProperties(): ICalGLib.Property[] | null
    getExrules(): ICalGLib.Recurrence[] | null
    getGeo(): ICalGLib.Geo | null
    getIcalcomponent(): ICalGLib.Component | null
    getId(): ComponentId
    getLastModified(): ICalGLib.Time
    getLocation(): string | null
    getOrganizer(): ComponentOrganizer | null
    getPercentComplete(): number
    getPriority(): number
    getRdates(): ComponentPeriod[] | null
    getRecurid(): ComponentRange | null
    getRecuridAsString(): string
    getRruleProperties(): ICalGLib.Property[] | null
    getRrules(): ICalGLib.Recurrence[] | null
    getSequence(): number
    getStatus(): ICalGLib.PropertyStatus
    getSummary(): ComponentText | null
    getTransparency(): ComponentTransparency
    getUid(): string
    getUrl(): string | null
    getVtype(): ComponentVType
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
    setAttachments(attachments?: ICalGLib.Attach[] | null): void
    setAttendees(attendeeList?: ComponentAttendee[] | null): void
    setCategories(categories: string): void
    setCategoriesList(categList: string[]): void
    setClassification(classif: ComponentClassification): void
    setComments(textList: ComponentText[]): void
    setCompleted(tt?: ICalGLib.Time | null): void
    setContacts(textList: ComponentText[]): void
    setCreated(tt?: ICalGLib.Time | null): void
    setDescriptions(textList: ComponentText[]): void
    setDtend(dt?: ComponentDateTime | null): void
    setDtstamp(tt: ICalGLib.Time): void
    setDtstart(dt?: ComponentDateTime | null): void
    setDue(dt?: ComponentDateTime | null): void
    setExdates(exdateList?: ComponentDateTime[] | null): void
    setExrules(recurList?: ICalGLib.Recurrence[] | null): void
    setGeo(geo?: ICalGLib.Geo | null): void
    setIcalcomponent(icalcomp?: ICalGLib.Component | null): boolean
    setLastModified(tt?: ICalGLib.Time | null): void
    setLocation(location?: string | null): void
    setNewVtype(type: ComponentVType): void
    setOrganizer(organizer?: ComponentOrganizer | null): void
    setPercentComplete(percent: number): void
    setPriority(priority: number): void
    setRdates(rdateList?: ComponentPeriod[] | null): void
    setRecurid(recurId?: ComponentRange | null): void
    setRrules(recurList?: ICalGLib.Recurrence[] | null): void
    setSequence(sequence: number): void
    setStatus(status: ICalGLib.PropertyStatus): void
    setSummary(summary: ComponentText): void
    setTransparency(transp: ComponentTransparency): void
    setUid(uid: string): void
    setUrl(url?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Component
    static newFromIcalcomponent(icalcomp: ICalGLib.Component): Component
    static newFromString(calobj: string): Component
    static newVtype(vtype: ComponentVType): Component
    static $gtype: GObject.Type
}
export interface ReminderWatcher_ConstructProps extends GObject.Object_ConstructProps {
    defaultZone?: ICalGLib.Timezone
    registry?: EDataServer.SourceRegistry
    timersEnabled?: boolean
}
export class ReminderWatcher {
    /* Properties of ECal.ReminderWatcher */
    defaultZone: ICalGLib.Timezone
    timersEnabled: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ECal.ReminderWatcher */
    describeData(rd: ReminderData, flags: number): string
    dismiss(rd: ReminderData, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dismissAll(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dismissAllFinish(result: Gio.AsyncResult): boolean
    dismissAllSync(cancellable?: Gio.Cancellable | null): boolean
    dismissFinish(result: Gio.AsyncResult): boolean
    dismissSync(rd: ReminderData, cancellable?: Gio.Cancellable | null): boolean
    dupDefaultZone(): ICalGLib.Timezone
    dupPast(): ReminderData[] | null
    dupSnoozed(): ReminderData[] | null
    getRegistry(): EDataServer.SourceRegistry
    getTimersEnabled(): boolean
    refOpenedClient(sourceUid: string): Client | null
    setDefaultZone(zone?: ICalGLib.Timezone | null): void
    setTimersEnabled(enabled: boolean): void
    snooze(rd: ReminderData, until: number): void
    timerElapsed(): void
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
    /* Virtual methods of ECal.ReminderWatcher */
    vfuncCalClientConnect(source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChanged(): void
    vfuncFormatTime(rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: string, bufferSize: number): void
    vfuncScheduleTimer(atTime: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ECal.ReminderWatcher */
    connect(sigName: "changed", callback: (($obj: ReminderWatcher) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ReminderWatcher) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "format-time", callback: (($obj: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number) => void)): number
    connect_after(sigName: "format-time", callback: (($obj: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number) => void)): number
    emit(sigName: "format-time", rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number): void
    on(sigName: "format-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "format-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "format-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "triggered", callback: (($obj: ReminderWatcher, reminders: ReminderData[], snoozed: boolean) => void)): number
    connect_after(sigName: "triggered", callback: (($obj: ReminderWatcher, reminders: ReminderData[], snoozed: boolean) => void)): number
    emit(sigName: "triggered", reminders: ReminderData[], snoozed: boolean): void
    on(sigName: "triggered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "triggered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "triggered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-zone", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-zone", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timers-enabled", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timers-enabled", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timers-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timers-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timers-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ReminderWatcher_ConstructProps)
    _init (config?: ReminderWatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: EDataServer.SourceRegistry): ReminderWatcher
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    static name: string
}
export class ClientPrivate {
    static name: string
}
export class ClientTzlookupICalCompData {
    /* Methods of ECal.ClientTzlookupICalCompData */
    copy(): ClientTzlookupICalCompData | null
    free(): void
    getIcalcomponent(): ICalGLib.Component
    static name: string
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
    constructor(icomp: ICalGLib.Component)
    /* Static methods and pseudo-constructors */
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
}
export abstract class ClientViewClass {
    /* Fields of ECal.ClientViewClass */
    progress: (clientView: ClientView, percent: number, message: string) => void
    complete: (clientView: ClientView, error: GLib.Error) => void
    static name: string
}
export class ClientViewPrivate {
    static name: string
}
export class ComponentAlarm {
    /* Methods of ECal.ComponentAlarm */
    copy(): ComponentAlarm
    fillComponent(component: ICalGLib.Component): void
    getAcknowledged(): ICalGLib.Time | null
    getAction(): ComponentAlarmAction
    getAsComponent(): ICalGLib.Component
    getAttachments(): ICalGLib.Attach[] | null
    getAttendees(): ComponentAttendee[] | null
    getDescription(): ComponentText | null
    getPropertyBag(): ComponentPropertyBag
    getRepeat(): ComponentAlarmRepeat | null
    getSummary(): ComponentText | null
    getTrigger(): ComponentAlarmTrigger | null
    getUid(): string | null
    hasAttachments(): boolean
    hasAttendees(): boolean
    setAcknowledged(when?: ICalGLib.Time | null): void
    setAction(action: ComponentAlarmAction): void
    setAttachments(attachments?: ICalGLib.Attach[] | null): void
    setAttendees(attendees?: ComponentAttendee[] | null): void
    setDescription(description?: ComponentText | null): void
    setFromComponent(component: ICalGLib.Component): void
    setRepeat(repeat?: ComponentAlarmRepeat | null): void
    setSummary(summary?: ComponentText | null): void
    setTrigger(trigger?: ComponentAlarmTrigger | null): void
    setUid(uid?: string | null): void
    takeAcknowledged(when?: ICalGLib.Time | null): void
    static name: string
    static new(): ComponentAlarm
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentAlarm
    static newFromComponent(component: ICalGLib.Component): ComponentAlarm
}
export class ComponentAlarmInstance {
    /* Methods of ECal.ComponentAlarmInstance */
    copy(): ComponentAlarmInstance
    getOccurEnd(): number
    getOccurStart(): number
    getTime(): number
    getUid(): string
    setOccurEnd(occurEnd: number): void
    setOccurStart(occurStart: number): void
    setTime(instanceTime: number): void
    setUid(uid: string): void
    static name: string
    static new(uid: string, instanceTime: number, occurStart: number, occurEnd: number): ComponentAlarmInstance
    constructor(uid: string, instanceTime: number, occurStart: number, occurEnd: number)
    /* Static methods and pseudo-constructors */
    static new(uid: string, instanceTime: number, occurStart: number, occurEnd: number): ComponentAlarmInstance
}
export class ComponentAlarmRepeat {
    /* Methods of ECal.ComponentAlarmRepeat */
    copy(): ComponentAlarmRepeat
    getInterval(): ICalGLib.Duration
    getIntervalSeconds(): number
    getRepetitions(): number
    setInterval(interval: ICalGLib.Duration): void
    setIntervalSeconds(intervalSeconds: number): void
    setRepetitions(repetitions: number): void
    static name: string
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    constructor(repetitions: number, interval: ICalGLib.Duration)
    /* Static methods and pseudo-constructors */
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    static newSeconds(repetitions: number, intervalSeconds: number): ComponentAlarmRepeat
}
export class ComponentAlarmTrigger {
    /* Methods of ECal.ComponentAlarmTrigger */
    copy(): ComponentAlarmTrigger
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    getAbsoluteTime(): ICalGLib.Time | null
    getAsProperty(): ICalGLib.Property
    getDuration(): ICalGLib.Duration | null
    getKind(): ComponentAlarmTriggerKind
    getParameterBag(): ComponentParameterBag
    setAbsolute(absoluteTime: ICalGLib.Time): void
    setAbsoluteTime(absoluteTime: ICalGLib.Time): void
    setDuration(duration: ICalGLib.Duration): void
    setFromProperty(property: ICalGLib.Property): void
    setKind(kind: ComponentAlarmTriggerKind): void
    setRelative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newAbsolute(absoluteTime: ICalGLib.Time): ComponentAlarmTrigger
    static newFromProperty(property: ICalGLib.Property): ComponentAlarmTrigger
    static newRelative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): ComponentAlarmTrigger
}
export class ComponentAlarms {
    /* Methods of ECal.ComponentAlarms */
    addInstance(instance: ComponentAlarmInstance): void
    copy(): ComponentAlarms
    getComponent(): Component
    getInstances(): ComponentAlarmInstance[] | null
    removeInstance(instance: ComponentAlarmInstance): boolean
    setInstances(instances?: ComponentAlarmInstance[] | null): void
    takeInstance(instance: ComponentAlarmInstance): void
    takeInstances(instances?: ComponentAlarmInstance[] | null): void
    static name: string
    static new(comp: Component): ComponentAlarms
    constructor(comp: Component)
    /* Static methods and pseudo-constructors */
    static new(comp: Component): ComponentAlarms
}
export class ComponentAttendee {
    /* Methods of ECal.ComponentAttendee */
    copy(): ComponentAttendee
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    getAsProperty(): ICalGLib.Property
    getCn(): string | null
    getCutype(): ICalGLib.ParameterCutype
    getDelegatedfrom(): string | null
    getDelegatedto(): string | null
    getLanguage(): string | null
    getMember(): string | null
    getParameterBag(): ComponentParameterBag
    getPartstat(): ICalGLib.ParameterPartstat
    getRole(): ICalGLib.ParameterRole
    getRsvp(): boolean
    getSentby(): string | null
    getValue(): string | null
    setCn(cn?: string | null): void
    setCutype(cutype: ICalGLib.ParameterCutype): void
    setDelegatedfrom(delegatedfrom?: string | null): void
    setDelegatedto(delegatedto?: string | null): void
    setFromProperty(property: ICalGLib.Property): void
    setLanguage(language?: string | null): void
    setMember(member?: string | null): void
    setPartstat(partstat: ICalGLib.ParameterPartstat): void
    setRole(role: ICalGLib.ParameterRole): void
    setRsvp(rsvp: boolean): void
    setSentby(sentby?: string | null): void
    setValue(value?: string | null): void
    static name: string
    static new(): ComponentAttendee
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentAttendee
    static newFromProperty(property: ICalGLib.Property): ComponentAttendee
    static newFull(value: string | null, member: string | null, cutype: ICalGLib.ParameterCutype, role: ICalGLib.ParameterRole, partstat: ICalGLib.ParameterPartstat, rsvp: boolean, delegatedfrom?: string | null, delegatedto?: string | null, sentby?: string | null, cn?: string | null, language?: string | null): ComponentAttendee
}
export abstract class ComponentClass {
    static name: string
}
export class ComponentDateTime {
    /* Methods of ECal.ComponentDateTime */
    copy(): ComponentDateTime
    getTzid(): string | null
    getValue(): ICalGLib.Time
    set(value: ICalGLib.Time, tzid?: string | null): void
    setTzid(tzid?: string | null): void
    setValue(value: ICalGLib.Time): void
    takeTzid(tzid?: string | null): void
    takeValue(value: ICalGLib.Time): void
    static name: string
    static new(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
    constructor(value: ICalGLib.Time, tzid?: string | null)
    /* Static methods and pseudo-constructors */
    static new(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
    static newTake(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
}
export class ComponentId {
    /* Methods of ECal.ComponentId */
    copy(): ComponentId
    equal(id2: ComponentId): boolean
    getRid(): string | null
    getUid(): string
    hash(): number
    setRid(rid?: string | null): void
    setUid(uid: string): void
    static name: string
    static new(uid: string, rid?: string | null): ComponentId
    constructor(uid: string, rid?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid?: string | null): ComponentId
    static newTake(uid: string, rid?: string | null): ComponentId
}
export class ComponentOrganizer {
    /* Methods of ECal.ComponentOrganizer */
    copy(): ComponentOrganizer
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    getAsProperty(): ICalGLib.Property
    getCn(): string | null
    getLanguage(): string | null
    getParameterBag(): ComponentParameterBag
    getSentby(): string | null
    getValue(): string | null
    setCn(cn?: string | null): void
    setFromProperty(property: ICalGLib.Property): void
    setLanguage(language?: string | null): void
    setSentby(sentby?: string | null): void
    setValue(value?: string | null): void
    static name: string
    static new(): ComponentOrganizer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentOrganizer
    static newFromProperty(property: ICalGLib.Property): ComponentOrganizer
    static newFull(value?: string | null, sentby?: string | null, cn?: string | null, language?: string | null): ComponentOrganizer
}
export class ComponentParameterBag {
    /* Methods of ECal.ComponentParameterBag */
    add(param: ICalGLib.Parameter): void
    assign(srcBag: ComponentParameterBag): void
    clear(): void
    copy(): ComponentParameterBag
    fillProperty(property: ICalGLib.Property): void
    get(index: number): ICalGLib.Parameter | null
    getCount(): number
    getFirstByKind(kind: ICalGLib.ParameterKind): number
    remove(index: number): void
    removeByKind(kind: ICalGLib.ParameterKind, all: boolean): number
    setFromProperty(property: ICalGLib.Property): void
    take(param: ICalGLib.Parameter): void
    static name: string
    static new(): ComponentParameterBag
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentParameterBag
    static newFromProperty(property: ICalGLib.Property): ComponentParameterBag
}
export class ComponentPeriod {
    /* Methods of ECal.ComponentPeriod */
    copy(): ComponentPeriod
    getDuration(): ICalGLib.Duration
    getEnd(): ICalGLib.Time | null
    getKind(): ComponentPeriodKind
    getStart(): ICalGLib.Time
    setDatetimeFull(start: ICalGLib.Time, end?: ICalGLib.Time | null): void
    setDuration(duration: ICalGLib.Duration): void
    setDurationFull(start: ICalGLib.Time, duration: ICalGLib.Duration): void
    setEnd(end?: ICalGLib.Time | null): void
    setStart(start: ICalGLib.Time): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newDatetime(start: ICalGLib.Time, end?: ICalGLib.Time | null): ComponentPeriod
    static newDuration(start: ICalGLib.Time, duration: ICalGLib.Duration): ComponentPeriod
}
export class ComponentPrivate {
    static name: string
}
export class ComponentPropertyBag {
    /* Methods of ECal.ComponentPropertyBag */
    add(prop: ICalGLib.Property): void
    assign(srcBag: ComponentPropertyBag): void
    clear(): void
    copy(): ComponentPropertyBag
    fillComponent(component: ICalGLib.Component): void
    get(index: number): ICalGLib.Property | null
    getCount(): number
    getFirstByKind(kind: ICalGLib.PropertyKind): number
    remove(index: number): void
    removeByKind(kind: ICalGLib.PropertyKind, all: boolean): number
    setFromComponent(component: ICalGLib.Component): void
    take(prop: ICalGLib.Property): void
    static name: string
    static new(): ComponentPropertyBag
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentPropertyBag
    static newFromComponent(component: ICalGLib.Component): ComponentPropertyBag
}
export class ComponentRange {
    /* Methods of ECal.ComponentRange */
    copy(): ComponentRange
    getDatetime(): ComponentDateTime
    getKind(): ComponentRangeKind
    setDatetime(datetime: ComponentDateTime): void
    setKind(kind: ComponentRangeKind): void
    static name: string
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
    constructor(kind: ComponentRangeKind, datetime: ComponentDateTime)
    /* Static methods and pseudo-constructors */
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
}
export class ComponentText {
    /* Methods of ECal.ComponentText */
    copy(): ComponentText
    getAltrep(): string
    getValue(): string
    setAltrep(altrep?: string | null): void
    setValue(value?: string | null): void
    static name: string
    static new(value?: string | null, altrep?: string | null): ComponentText
    constructor(value?: string | null, altrep?: string | null)
    /* Static methods and pseudo-constructors */
    static new(value?: string | null, altrep?: string | null): ComponentText
}
export class ReminderData {
    /* Methods of ECal.ReminderData */
    copy(): ReminderData
    getComponent(): Component
    getInstance(): ComponentAlarmInstance
    getSourceUid(): string
    setComponent(component: Component): void
    setInstance(instance: ComponentAlarmInstance): void
    setSourceUid(sourceUid: string): void
    static name: string
    static new(sourceUid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
    constructor(sourceUid: string, component: Component, instance: ComponentAlarmInstance)
    /* Static methods and pseudo-constructors */
    static new(sourceUid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
    static free(rd?: object | null): void
}
export abstract class ReminderWatcherClass {
    /* Fields of ECal.ReminderWatcherClass */
    parentClass: GObject.ObjectClass
    scheduleTimer: (watcher: ReminderWatcher, atTime: number) => void
    formatTime: (watcher: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: string, bufferSize: number) => void
    changed: (watcher: ReminderWatcher) => void
    calClientConnect: (watcher: ReminderWatcher, source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    reserved: object[]
    static name: string
}
export class ReminderWatcherPrivate {
    static name: string
}
export abstract class TimezoneCacheInterface {
    /* Fields of ECal.TimezoneCacheInterface */
    tzcacheAddTimezone: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    timezoneAdded: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    reservedSignals: object[]
    static name: string
}
}