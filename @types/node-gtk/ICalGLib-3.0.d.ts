/**
 * ICalGLib-3.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace ICalGLib {

export enum ComponentKind {
    NO_COMPONENT,
    ANY_COMPONENT,
    XROOT_COMPONENT,
    XATTACH_COMPONENT,
    VEVENT_COMPONENT,
    VTODO_COMPONENT,
    VJOURNAL_COMPONENT,
    VCALENDAR_COMPONENT,
    VAGENDA_COMPONENT,
    VFREEBUSY_COMPONENT,
    VALARM_COMPONENT,
    XAUDIOALARM_COMPONENT,
    XDISPLAYALARM_COMPONENT,
    XEMAILALARM_COMPONENT,
    XPROCEDUREALARM_COMPONENT,
    VTIMEZONE_COMPONENT,
    XSTANDARD_COMPONENT,
    XDAYLIGHT_COMPONENT,
    X_COMPONENT,
    VSCHEDULE_COMPONENT,
    VQUERY_COMPONENT,
    VREPLY_COMPONENT,
    VCAR_COMPONENT,
    VCOMMAND_COMPONENT,
    XLICINVALID_COMPONENT,
    XLICMIMEPART_COMPONENT,
    VAVAILABILITY_COMPONENT,
    XAVAILABLE_COMPONENT,
    VPOLL_COMPONENT,
    VVOTER_COMPONENT,
    XVOTE_COMPONENT,
}
export enum ErrorEnum {
    NO_ERROR,
    BADARG_ERROR,
    NEWFAILED_ERROR,
    ALLOCATION_ERROR,
    MALFORMEDDATA_ERROR,
    PARSE_ERROR,
    INTERNAL_ERROR,
    FILE_ERROR,
    USAGE_ERROR,
    UNIMPLEMENTED_ERROR,
    UNKNOWN_ERROR,
}
export enum ErrorState {
    FATAL,
    NONFATAL,
    DEFAULT,
    UNKNOWN,
}
export enum ParameterAction {
    X,
    ASK,
    ABORT,
    NONE,
}
export enum ParameterCutype {
    X,
    INDIVIDUAL,
    GROUP,
    RESOURCE,
    ROOM,
    UNKNOWN,
    NONE,
}
export enum ParameterEnable {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum ParameterEncoding {
    X,
    /* 8BIT (invalid, starts with a number) */
    BASE64,
    NONE,
}
export enum ParameterFbtype {
    X,
    FREE,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
export enum ParameterKind {
    ANY_PARAMETER,
    ACTIONPARAM_PARAMETER,
    ALTREP_PARAMETER,
    CHARSET_PARAMETER,
    CN_PARAMETER,
    CUTYPE_PARAMETER,
    DELEGATEDFROM_PARAMETER,
    DELEGATEDTO_PARAMETER,
    DIR_PARAMETER,
    ENABLE_PARAMETER,
    ENCODING_PARAMETER,
    FBTYPE_PARAMETER,
    FILENAME_PARAMETER,
    FMTTYPE_PARAMETER,
    IANA_PARAMETER,
    ID_PARAMETER,
    LANGUAGE_PARAMETER,
    LATENCY_PARAMETER,
    LOCAL_PARAMETER,
    LOCALIZE_PARAMETER,
    MANAGEDID_PARAMETER,
    MEMBER_PARAMETER,
    MODIFIED_PARAMETER,
    OPTIONS_PARAMETER,
    PARTSTAT_PARAMETER,
    PUBLICCOMMENT_PARAMETER,
    RANGE_PARAMETER,
    REASON_PARAMETER,
    RELATED_PARAMETER,
    RELTYPE_PARAMETER,
    REQUIRED_PARAMETER,
    RESPONSE_PARAMETER,
    ROLE_PARAMETER,
    RSVP_PARAMETER,
    SCHEDULEAGENT_PARAMETER,
    SCHEDULEFORCESEND_PARAMETER,
    SCHEDULESTATUS_PARAMETER,
    SENTBY_PARAMETER,
    SIZE_PARAMETER,
    STAYINFORMED_PARAMETER,
    SUBSTATE_PARAMETER,
    TZID_PARAMETER,
    VALUE_PARAMETER,
    X_PARAMETER,
    XLICCOMPARETYPE_PARAMETER,
    XLICERRORTYPE_PARAMETER,
    NO_PARAMETER,
}
export enum ParameterLocal {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum ParameterPartstat {
    X,
    NEEDSACTION,
    ACCEPTED,
    DECLINED,
    TENTATIVE,
    DELEGATED,
    COMPLETED,
    INPROCESS,
    FAILED,
    NONE,
}
export enum ParameterRange {
    X,
    THISANDPRIOR,
    THISANDFUTURE,
    NONE,
}
export enum ParameterRelated {
    X,
    START,
    END,
    NONE,
}
export enum ParameterReltype {
    X,
    PARENT,
    CHILD,
    SIBLING,
    POLL,
    NONE,
}
export enum ParameterRequired {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum ParameterRole {
    X,
    CHAIR,
    REQPARTICIPANT,
    OPTPARTICIPANT,
    NONPARTICIPANT,
    NONE,
}
export enum ParameterRsvp {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum ParameterScheduleagent {
    X,
    SERVER,
    CLIENT,
    NONE,
}
export enum ParameterScheduleforcesend {
    X,
    REQUEST,
    REPLY,
    NONE,
}
export enum ParameterStayinformed {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum ParameterSubstate {
    X,
    OK,
    ERROR,
    SUSPENDED,
    NONE,
}
export enum ParameterValue {
    X,
    BINARY,
    BOOLEAN,
    DATE,
    DURATION,
    FLOAT,
    INTEGER,
    PERIOD,
    RECUR,
    TEXT,
    URI,
    ERROR,
    DATETIME,
    UTCOFFSET,
    CALADDRESS,
    NONE,
}
export enum ParameterXliccomparetype {
    X,
    EQUAL,
    NOTEQUAL,
    LESS,
    GREATER,
    LESSEQUAL,
    GREATEREQUAL,
    REGEX,
    ISNULL,
    ISNOTNULL,
    NONE,
}
export enum ParameterXlicerrortype {
    X,
    COMPONENTPARSEERROR,
    PROPERTYPARSEERROR,
    PARAMETERNAMEPARSEERROR,
    PARAMETERVALUEPARSEERROR,
    VALUEPARSEERROR,
    INVALIDITIP,
    UNKNOWNVCALPROPERROR,
    MIMEPARSEERROR,
    VCALPROPPARSEERROR,
    NONE,
}
export enum ParserState {
    ERROR,
    SUCCESS,
    BEGIN_COMP,
    END_COMP,
    IN_PROGRESS,
}
export enum PropertyAction {
    X,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    NONE,
}
export enum PropertyBusytype {
    X,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
export enum PropertyCarlevel {
    X,
    CARNONE,
    CARMIN,
    CARFULL1,
    NONE,
}
export enum PropertyCmd {
    X,
    ABORT,
    CONTINUE,
    CREATE,
    DELETE,
    GENERATEUID,
    GETCAPABILITY,
    IDENTIFY,
    MODIFY,
    MOVE,
    REPLY,
    SEARCH,
    SETLOCALE,
    NONE,
}
export enum PropertyKind {
    ANY_PROPERTY,
    ACCEPTRESPONSE_PROPERTY,
    ACKNOWLEDGED_PROPERTY,
    ACTION_PROPERTY,
    ALLOWCONFLICT_PROPERTY,
    ATTACH_PROPERTY,
    ATTENDEE_PROPERTY,
    BUSYTYPE_PROPERTY,
    CALID_PROPERTY,
    CALMASTER_PROPERTY,
    CALSCALE_PROPERTY,
    CAPVERSION_PROPERTY,
    CARLEVEL_PROPERTY,
    CARID_PROPERTY,
    CATEGORIES_PROPERTY,
    CLASS_PROPERTY,
    CMD_PROPERTY,
    COLOR_PROPERTY,
    COMMENT_PROPERTY,
    COMPLETED_PROPERTY,
    COMPONENTS_PROPERTY,
    CONTACT_PROPERTY,
    CREATED_PROPERTY,
    CSID_PROPERTY,
    DATEMAX_PROPERTY,
    DATEMIN_PROPERTY,
    DECREED_PROPERTY,
    DEFAULTCHARSET_PROPERTY,
    DEFAULTLOCALE_PROPERTY,
    DEFAULTTZID_PROPERTY,
    DEFAULTVCARS_PROPERTY,
    DENY_PROPERTY,
    DESCRIPTION_PROPERTY,
    DTEND_PROPERTY,
    DTSTAMP_PROPERTY,
    DTSTART_PROPERTY,
    DUE_PROPERTY,
    DURATION_PROPERTY,
    ESTIMATEDDURATION_PROPERTY,
    EXDATE_PROPERTY,
    EXPAND_PROPERTY,
    EXRULE_PROPERTY,
    FREEBUSY_PROPERTY,
    GEO_PROPERTY,
    GRANT_PROPERTY,
    ITIPVERSION_PROPERTY,
    LASTMODIFIED_PROPERTY,
    LOCATION_PROPERTY,
    MAXCOMPONENTSIZE_PROPERTY,
    MAXDATE_PROPERTY,
    MAXRESULTS_PROPERTY,
    MAXRESULTSSIZE_PROPERTY,
    METHOD_PROPERTY,
    MINDATE_PROPERTY,
    MULTIPART_PROPERTY,
    NAME_PROPERTY,
    ORGANIZER_PROPERTY,
    OWNER_PROPERTY,
    PERCENTCOMPLETE_PROPERTY,
    PERMISSION_PROPERTY,
    POLLCOMPLETION_PROPERTY,
    POLLITEMID_PROPERTY,
    POLLMODE_PROPERTY,
    POLLPROPERTIES_PROPERTY,
    POLLWINNER_PROPERTY,
    PRIORITY_PROPERTY,
    PRODID_PROPERTY,
    QUERY_PROPERTY,
    QUERYLEVEL_PROPERTY,
    QUERYID_PROPERTY,
    QUERYNAME_PROPERTY,
    RDATE_PROPERTY,
    RECURACCEPTED_PROPERTY,
    RECUREXPAND_PROPERTY,
    RECURLIMIT_PROPERTY,
    RECURRENCEID_PROPERTY,
    RELATEDTO_PROPERTY,
    RELCALID_PROPERTY,
    REPEAT_PROPERTY,
    REPLYURL_PROPERTY,
    REQUESTSTATUS_PROPERTY,
    RESOURCES_PROPERTY,
    RESPONSE_PROPERTY,
    RESTRICTION_PROPERTY,
    RRULE_PROPERTY,
    SCOPE_PROPERTY,
    SEQUENCE_PROPERTY,
    STATUS_PROPERTY,
    STORESEXPANDED_PROPERTY,
    SUMMARY_PROPERTY,
    TARGET_PROPERTY,
    TASKMODE_PROPERTY,
    TRANSP_PROPERTY,
    TRIGGER_PROPERTY,
    TZID_PROPERTY,
    TZIDALIASOF_PROPERTY,
    TZNAME_PROPERTY,
    TZOFFSETFROM_PROPERTY,
    TZOFFSETTO_PROPERTY,
    TZUNTIL_PROPERTY,
    TZURL_PROPERTY,
    UID_PROPERTY,
    URL_PROPERTY,
    VERSION_PROPERTY,
    VOTER_PROPERTY,
    X_PROPERTY,
    XLICCLASS_PROPERTY,
    XLICCLUSTERCOUNT_PROPERTY,
    XLICERROR_PROPERTY,
    XLICMIMECHARSET_PROPERTY,
    XLICMIMECID_PROPERTY,
    XLICMIMECONTENTTYPE_PROPERTY,
    XLICMIMEENCODING_PROPERTY,
    XLICMIMEFILENAME_PROPERTY,
    XLICMIMEOPTINFO_PROPERTY,
    NO_PROPERTY,
}
export enum PropertyMethod {
    X,
    PUBLISH,
    REQUEST,
    REPLY,
    ADD,
    CANCEL,
    REFRESH,
    COUNTER,
    DECLINECOUNTER,
    CREATE,
    READ,
    RESPONSE,
    MOVE,
    MODIFY,
    GENERATEUID,
    DELETE,
    NONE,
}
export enum PropertyPollcompletion {
    X,
    SERVER,
    SERVERSUBMIT,
    SERVERCHOICE,
    CLIENT,
    NONE,
}
export enum PropertyPollmode {
    X,
    BASIC,
    NONE,
}
export enum PropertyQuerylevel {
    X,
    CALQL1,
    CALQLNONE,
    NONE,
}
export enum PropertyStatus {
    X,
    TENTATIVE,
    CONFIRMED,
    COMPLETED,
    NEEDSACTION,
    CANCELLED,
    INPROCESS,
    DRAFT,
    FINAL,
    SUBMITTED,
    PENDING,
    FAILED,
    DELETED,
    NONE,
}
export enum PropertyTaskmode {
    X,
    AUTOMATICCOMPLETION,
    AUTOMATICFAILURE,
    AUTOMATICSTATUS,
    NONE,
}
export enum PropertyTransp {
    X,
    OPAQUE,
    OPAQUENOCONFLICT,
    TRANSPARENT,
    TRANSPARENTNOCONFLICT,
    NONE,
}
export enum PropertyXlicclass {
    X,
    PUBLISHNEW,
    PUBLISHUPDATE,
    PUBLISHFREEBUSY,
    REQUESTNEW,
    REQUESTUPDATE,
    REQUESTRESCHEDULE,
    REQUESTDELEGATE,
    REQUESTNEWORGANIZER,
    REQUESTFORWARD,
    REQUESTSTATUS,
    REQUESTFREEBUSY,
    REPLYACCEPT,
    REPLYDECLINE,
    REPLYDELEGATE,
    REPLYCRASHERACCEPT,
    REPLYCRASHERDECLINE,
    ADDINSTANCE,
    CANCELEVENT,
    CANCELINSTANCE,
    CANCELALL,
    REFRESH,
    COUNTER,
    DECLINECOUNTER,
    MALFORMED,
    OBSOLETE,
    MISSEQUENCED,
    UNKNOWN,
    NONE,
}
export enum Property_Class {
    X,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    NONE,
}
export enum RecurrenceArrayMaxValues {
    RECURRENCE_ARRAY_MAX,
}
export enum RecurrenceArraySizes {
    SECOND_SIZE,
    MINUTE_SIZE,
    HOUR_SIZE,
    MONTH_SIZE,
    MONTHDAY_SIZE,
    WEEKNO_SIZE,
    YEARDAY_SIZE,
    SETPOS_SIZE,
    DAY_SIZE,
}
export enum RecurrenceFrequency {
    SECONDLY_RECURRENCE,
    MINUTELY_RECURRENCE,
    HOURLY_RECURRENCE,
    DAILY_RECURRENCE,
    WEEKLY_RECURRENCE,
    MONTHLY_RECURRENCE,
    YEARLY_RECURRENCE,
    NO_RECURRENCE,
}
export enum RecurrenceSkip {
    BACKWARD,
    FORWARD,
    OMIT,
    UNDEFINED,
}
export enum RecurrenceWeekday {
    NO_WEEKDAY,
    SUNDAY_WEEKDAY,
    MONDAY_WEEKDAY,
    TUESDAY_WEEKDAY,
    WEDNESDAY_WEEKDAY,
    THURSDAY_WEEKDAY,
    FRIDAY_WEEKDAY,
    SATURDAY_WEEKDAY,
}
export enum RequestStatus {
    UNKNOWN_STATUS,
    /* 2_0_SUCCESS_STATUS (invalid, starts with a number) */
    /* 2_1_FALLBACK_STATUS (invalid, starts with a number) */
    /* 2_2_IGPROP_STATUS (invalid, starts with a number) */
    /* 2_3_IGPARAM_STATUS (invalid, starts with a number) */
    /* 2_4_IGXPROP_STATUS (invalid, starts with a number) */
    /* 2_5_IGXPARAM_STATUS (invalid, starts with a number) */
    /* 2_6_IGCOMP_STATUS (invalid, starts with a number) */
    /* 2_7_FORWARD_STATUS (invalid, starts with a number) */
    /* 2_8_ONEEVENT_STATUS (invalid, starts with a number) */
    /* 2_9_TRUNC_STATUS (invalid, starts with a number) */
    /* 2_10_ONETODO_STATUS (invalid, starts with a number) */
    /* 2_11_TRUNCRRULE_STATUS (invalid, starts with a number) */
    /* 3_0_INVPROPNAME_STATUS (invalid, starts with a number) */
    /* 3_1_INVPROPVAL_STATUS (invalid, starts with a number) */
    /* 3_2_INVPARAM_STATUS (invalid, starts with a number) */
    /* 3_3_INVPARAMVAL_STATUS (invalid, starts with a number) */
    /* 3_4_INVCOMP_STATUS (invalid, starts with a number) */
    /* 3_5_INVTIME_STATUS (invalid, starts with a number) */
    /* 3_6_INVRULE_STATUS (invalid, starts with a number) */
    /* 3_7_INVCU_STATUS (invalid, starts with a number) */
    /* 3_8_NOAUTH_STATUS (invalid, starts with a number) */
    /* 3_9_BADVERSION_STATUS (invalid, starts with a number) */
    /* 3_10_TOOBIG_STATUS (invalid, starts with a number) */
    /* 3_11_MISSREQCOMP_STATUS (invalid, starts with a number) */
    /* 3_12_UNKCOMP_STATUS (invalid, starts with a number) */
    /* 3_13_BADCOMP_STATUS (invalid, starts with a number) */
    /* 3_14_NOCAP_STATUS (invalid, starts with a number) */
    /* 3_15_INVCOMMAND (invalid, starts with a number) */
    /* 4_0_BUSY_STATUS (invalid, starts with a number) */
    /* 4_1_STORE_ACCESS_DENIED (invalid, starts with a number) */
    /* 4_2_STORE_FAILED (invalid, starts with a number) */
    /* 4_3_STORE_NOT_FOUND (invalid, starts with a number) */
    /* 5_0_MAYBE_STATUS (invalid, starts with a number) */
    /* 5_1_UNAVAIL_STATUS (invalid, starts with a number) */
    /* 5_2_NOSERVICE_STATUS (invalid, starts with a number) */
    /* 5_3_NOSCHED_STATUS (invalid, starts with a number) */
    /* 6_1_CONTAINER_NOT_FOUND (invalid, starts with a number) */
    /* 9_0_UNRECOGNIZED_COMMAND (invalid, starts with a number) */
}
export enum RestrictionKind {
    NONE,
    ZERO,
    ONE,
    ZEROPLUS,
    ONEPLUS,
    ZEROORONE,
    ONEEXCLUSIVE,
    ONEMUTUAL,
    UNKNOWN,
}
export enum Unknowntokenhandling {
    ASSUME_IANA_TOKEN,
    DISCARD_TOKEN,
    TREAT_AS_ERROR,
}
export enum ValueKind {
    ANY_VALUE,
    ACTION_VALUE,
    ATTACH_VALUE,
    BINARY_VALUE,
    BOOLEAN_VALUE,
    BUSYTYPE_VALUE,
    CALADDRESS_VALUE,
    CARLEVEL_VALUE,
    CLASS_VALUE,
    CMD_VALUE,
    DATE_VALUE,
    DATETIME_VALUE,
    DATETIMEDATE_VALUE,
    DATETIMEPERIOD_VALUE,
    DURATION_VALUE,
    FLOAT_VALUE,
    GEO_VALUE,
    INTEGER_VALUE,
    METHOD_VALUE,
    PERIOD_VALUE,
    POLLCOMPLETION_VALUE,
    POLLMODE_VALUE,
    QUERY_VALUE,
    QUERYLEVEL_VALUE,
    RECUR_VALUE,
    REQUESTSTATUS_VALUE,
    STATUS_VALUE,
    STRING_VALUE,
    TASKMODE_VALUE,
    TEXT_VALUE,
    TRANSP_VALUE,
    TRIGGER_VALUE,
    URI_VALUE,
    UTCOFFSET_VALUE,
    X_VALUE,
    XLICCLASS_VALUE,
    NO_VALUE,
}
export function bt(): void
export function errnoReturn(): ErrorEnum
export function errorClearErrno(): void
export function errorCrashHere(): void
export function errorGetErrorState(error: ErrorEnum): ErrorState
export function errorPerror(): string
export function errorRestore(error: string, es: ErrorState): void
export function errorSetErrno(x: ErrorEnum): void
export function errorSetErrorState(error: ErrorEnum, state: ErrorState): void
export function errorStopHere(): void
export function errorStrerror(e: ErrorEnum): string
export function errorSupress(error: string): ErrorState
export function getUnknownTokenHandlingSetting(): Unknowntokenhandling
export function memoryAddTmpBuffer(buf?: object | null): void
export function memoryAppendChar(buf: number[], pos: number[], ch: number): [ /* buf */ number[], /* pos */ number[] ]
export function memoryAppendString(buf: number[], pos: number[], str: string): [ /* buf */ number[], /* pos */ number[] ]
export function memoryFreeBuffer(buf?: object | null): void
export function memoryNewBuffer(size: number): object | null
export function memoryResizeBuffer(buf: object | null, size: number): object | null
export function memoryStrdup(s: string): string
export function memoryTmpBuffer(size: number): object | null
export function memoryTmpCopy(str: string): string
export function mimeParse(func: MimeParseFunc): Component
export function recurExpandRecurrence(rule: string, start: number, count: number): number[]
export function requestStatusCode(stat: RequestStatus): string
export function requestStatusDesc(stat: RequestStatus): string
export function requestStatusFromNum(major: number, minor: number): RequestStatus
export function requestStatusMajor(stat: RequestStatus): number
export function requestStatusMinor(stat: RequestStatus): number
export function restrictionCheck(comp: Component): number
export function restrictionCompare(restr: RestrictionKind, count: number): number
export function setUnknownTokenHandlingSetting(newSetting: Unknowntokenhandling): void
export interface ComponentForeachRecurrenceFunc {
    (comp: Component, span: TimeSpan): void
}
export interface ComponentForeachTZIDFunc {
    (param: Parameter): void
}
export interface MimeParseFunc {
    (bytes: number[]): string
}
export interface ParserLineGenFunc {
    (bytes: number[]): string
}
export interface Array_ConstructProps extends Object_ConstructProps {
}
export class Array {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Array */
    copy(): Array
    removeElementAt(position: number): void
    size(): number
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Array_ConstructProps)
    _init (config?: Array_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Attach_ConstructProps extends Object_ConstructProps {
}
export class Attach {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Attach */
    getData(): string | null
    getIsUrl(): boolean
    getUrl(): string | null
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Attach_ConstructProps)
    _init (config?: Attach_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromBytes(bytes: any): Attach
    static newFromData(data: string, freeFn?: GLib.Func | null): Attach
    static newFromUrl(url: string): Attach
    static $gtype: GObject.Type
}
export interface CompIter_ConstructProps extends Object_ConstructProps {
}
export class CompIter {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.CompIter */
    deref(): Component
    next(): Component
    prior(): Component
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompIter_ConstructProps)
    _init (config?: CompIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Component_ConstructProps extends Object_ConstructProps {
}
export class Component {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Component */
    addComponent(child: Component): void
    addProperty(property: Property): void
    asIcalString(): string
    beginComponent(kind: ComponentKind): CompIter
    checkRestrictions(): number
    clone(): Component
    convertErrors(): void
    countComponents(kind: ComponentKind): number
    countErrors(): number
    countProperties(kind: PropertyKind): number
    endComponent(kind: ComponentKind): CompIter
    foreachRecurrence(start: Time, end: Time): void
    foreachTzid(): void
    getComment(): string
    getCurrentComponent(): Component
    getCurrentProperty(): Property
    getDescription(): string
    getDtend(): Time
    getDtstamp(): Time
    getDtstart(): Time
    getDue(): Time
    getDuration(): Duration
    getFirstComponent(kind: ComponentKind): Component | null
    getFirstProperty(kind: PropertyKind): Property | null
    getFirstRealComponent(): Component
    getInner(): Component | null
    getLocation(): string
    getMethod(): PropertyMethod
    getNextComponent(kind: ComponentKind): Component | null
    getNextProperty(kind: PropertyKind): Property | null
    getParent(): Component | null
    getRecurrenceid(): Time
    getRelcalid(): string
    getSequence(): number
    getSpan(): TimeSpan
    getStatus(): PropertyStatus
    getSummary(): string
    getTimezone(tzid: string): Timezone | null
    getUid(): string
    isValid(): boolean
    isa(): ComponentKind
    isaComponent(): number
    mergeComponent(compToMerge: Component): void
    removeComponent(child: Component): void
    removeProperty(property: Property): void
    setComment(v: string): void
    setDescription(v: string): void
    setDtend(v: Time): void
    setDtstamp(v: Time): void
    setDtstart(v: Time): void
    setDue(v: Time): void
    setDuration(v: Duration): void
    setLocation(v: string): void
    setMethod(method: PropertyMethod): void
    setParent(parent?: Component | null): void
    setRecurrenceid(v: Time): void
    setRelcalid(v: string): void
    setSequence(v: number): void
    setStatus(status: PropertyStatus): void
    setSummary(v: string): void
    setUid(v: string): void
    stripErrors(): void
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(kind: ComponentKind): Component
    static newFromString(str: string): Component
    static newVagenda(): Component
    static newValarm(): Component
    static newVavailability(): Component
    static newVcalendar(): Component
    static newVevent(): Component
    static newVfreebusy(): Component
    static newVjournal(): Component
    static newVpoll(): Component
    static newVquery(): Component
    static newVtimezone(): Component
    static newVtodo(): Component
    static newVvoter(): Component
    static newX(xName: string): Component
    static newXavailable(): Component
    static newXdaylight(): Component
    static newXstandard(): Component
    static newXvote(): Component
    static kindFromString(string: string): ComponentKind
    static kindIsValid(kind: ComponentKind): boolean
    static kindToString(kind: ComponentKind): string
    static $gtype: GObject.Type
}
export interface Datetimeperiod_ConstructProps extends Object_ConstructProps {
}
export class Datetimeperiod {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Datetimeperiod */
    getPeriod(): Period
    getTime(): Time
    setPeriod(period: Period): void
    setTime(time: Time): void
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Datetimeperiod_ConstructProps)
    _init (config?: Datetimeperiod_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Datetimeperiod
    static $gtype: GObject.Type
}
export interface Duration_ConstructProps extends Object_ConstructProps {
}
export class Duration {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Duration */
    asIcalString(): string
    asInt(): number
    getDays(): number
    getHours(): number
    getMinutes(): number
    getSeconds(): number
    getWeeks(): number
    isBadDuration(): boolean
    isNeg(): boolean
    isNullDuration(): boolean
    setDays(days: number): void
    setHours(hours: number): void
    setIsNeg(isNeg: boolean): void
    setMinutes(minutes: number): void
    setSeconds(seconds: number): void
    setWeeks(weeks: number): void
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Duration_ConstructProps)
    _init (config?: Duration_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newBadDuration(): Duration
    static newFromInt(t: number): Duration
    static newFromString(str: string): Duration
    static newNullDuration(): Duration
    static $gtype: GObject.Type
}
export interface Geo_ConstructProps extends Object_ConstructProps {
}
export class Geo {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Geo */
    clone(): Geo
    getLat(): number
    getLon(): number
    setLat(lat: number): void
    setLon(lon: number): void
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Geo_ConstructProps)
    _init (config?: Geo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(lat: number, lon: number): Geo
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    isGlobalMemory?: boolean
    native?: object
    nativeDestroyFunc?: object
    owner?: GObject.Object
}
export class Object {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static freeGlobalObjects(): void
    static $gtype: GObject.Type
}
export interface Parameter_ConstructProps extends Object_ConstructProps {
}
export class Parameter {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Parameter */
    asIcalString(): string
    clone(): Parameter
    getActionparam(): ParameterAction
    getAltrep(): string | null
    getCharset(): string | null
    getCn(): string | null
    getCutype(): ParameterCutype | null
    getDelegatedfrom(): string | null
    getDelegatedto(): string | null
    getDir(): string | null
    getEnable(): ParameterEnable
    getEncoding(): ParameterEncoding
    getFbtype(): ParameterFbtype
    getFilename(): string | null
    getFmttype(): string | null
    getIana(): string | null
    getIanaName(): string | null
    getIanaValue(): string | null
    getId(): string | null
    getLanguage(): string | null
    getLatency(): string | null
    getLocal(): ParameterLocal
    getLocalize(): string | null
    getManagedid(): string | null
    getMember(): string | null
    getModified(): string | null
    getOptions(): string | null
    getParent(): Property | null
    getPartstat(): ParameterPartstat
    getPubliccomment(): string | null
    getRange(): ParameterRange
    getReason(): string | null
    getRelated(): ParameterRelated
    getReltype(): ParameterReltype
    getRequired(): ParameterRequired
    getResponse(): number
    getRole(): ParameterRole
    getRsvp(): ParameterRsvp
    getScheduleagent(): ParameterScheduleagent
    getScheduleforcesend(): ParameterScheduleforcesend
    getSchedulestatus(): string | null
    getSentby(): string | null
    getSize(): string | null
    getStayinformed(): ParameterStayinformed
    getSubstate(): ParameterSubstate
    getTzid(): string | null
    getValue(): ParameterValue
    getX(): string | null
    getXliccomparetype(): ParameterXliccomparetype
    getXlicerrortype(): ParameterXlicerrortype
    getXname(): string | null
    getXvalue(): string | null
    hasSameName(param2: Parameter): number
    isa(): ParameterKind
    isaParameter(): number
    setActionparam(v: ParameterAction): void
    setAltrep(v: string): void
    setCharset(v: string): void
    setCn(v: string): void
    setCutype(v: ParameterCutype): void
    setDelegatedfrom(v: string): void
    setDelegatedto(v: string): void
    setDir(v: string): void
    setEnable(v: ParameterEnable): void
    setEncoding(v: ParameterEncoding): void
    setFbtype(v: ParameterFbtype): void
    setFilename(v: string): void
    setFmttype(v: string): void
    setIana(v: string): void
    setIanaName(v: string): void
    setIanaValue(v: string): void
    setId(v: string): void
    setLanguage(v: string): void
    setLatency(v: string): void
    setLocal(v: ParameterLocal): void
    setLocalize(v: string): void
    setManagedid(v: string): void
    setMember(v: string): void
    setModified(v: string): void
    setOptions(v: string): void
    setParent(property?: Property | null): void
    setPartstat(v: ParameterPartstat): void
    setPubliccomment(v: string): void
    setRange(v: ParameterRange): void
    setReason(v: string): void
    setRelated(v: ParameterRelated): void
    setReltype(v: ParameterReltype): void
    setRequired(v: ParameterRequired): void
    setResponse(v: number): void
    setRole(v: ParameterRole): void
    setRsvp(v: ParameterRsvp): void
    setScheduleagent(v: ParameterScheduleagent): void
    setScheduleforcesend(v: ParameterScheduleforcesend): void
    setSchedulestatus(v: string): void
    setSentby(v: string): void
    setSize(v: string): void
    setStayinformed(v: ParameterStayinformed): void
    setSubstate(v: ParameterSubstate): void
    setTzid(v: string): void
    setValue(v: ParameterValue): void
    setX(v: string): void
    setXliccomparetype(v: ParameterXliccomparetype): void
    setXlicerrortype(v: ParameterXlicerrortype): void
    setXname(v: string): void
    setXvalue(v: string): void
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Parameter_ConstructProps)
    _init (config?: Parameter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(v: ParameterKind): Parameter
    static newActionparam(v: ParameterAction): Parameter
    static newAltrep(v: string): Parameter
    static newCharset(v: string): Parameter
    static newCn(v: string): Parameter
    static newCutype(v: ParameterCutype): Parameter
    static newDelegatedfrom(v: string): Parameter
    static newDelegatedto(v: string): Parameter
    static newDir(v: string): Parameter
    static newEnable(v: ParameterEnable): Parameter
    static newEncoding(v: ParameterEncoding): Parameter
    static newFbtype(v: ParameterFbtype): Parameter
    static newFilename(v: string): Parameter
    static newFmttype(v: string): Parameter
    static newFromString(value: string): Parameter
    static newFromValueString(kind: ParameterKind, value: string): Parameter
    static newIana(v: string): Parameter
    static newId(v: string): Parameter
    static newLanguage(v: string): Parameter
    static newLatency(v: string): Parameter
    static newLocal(v: ParameterLocal): Parameter
    static newLocalize(v: string): Parameter
    static newManagedid(v: string): Parameter
    static newMember(v: string): Parameter
    static newModified(v: string): Parameter
    static newOptions(v: string): Parameter
    static newPartstat(v: ParameterPartstat): Parameter
    static newPubliccomment(v: string): Parameter
    static newRange(v: ParameterRange): Parameter
    static newReason(v: string): Parameter
    static newRelated(v: ParameterRelated): Parameter
    static newReltype(v: ParameterReltype): Parameter
    static newRequired(v: ParameterRequired): Parameter
    static newResponse(v: number): Parameter
    static newRole(v: ParameterRole): Parameter
    static newRsvp(v: ParameterRsvp): Parameter
    static newScheduleagent(v: ParameterScheduleagent): Parameter
    static newScheduleforcesend(v: ParameterScheduleforcesend): Parameter
    static newSchedulestatus(v: string): Parameter
    static newSentby(v: string): Parameter
    static newSize(v: string): Parameter
    static newStayinformed(v: ParameterStayinformed): Parameter
    static newSubstate(v: ParameterSubstate): Parameter
    static newTzid(v: string): Parameter
    static newValue(v: ParameterValue): Parameter
    static newX(v: string): Parameter
    static newXliccomparetype(v: ParameterXliccomparetype): Parameter
    static newXlicerrortype(v: ParameterXlicerrortype): Parameter
    static kindFromString(string: string): ParameterKind
    static kindIsValid(kind: ParameterKind): boolean
    static kindToString(kind: ParameterKind): string
    static valueToValueKind(value: ParameterValue): ValueKind
    static $gtype: GObject.Type
}
export interface Parser_ConstructProps extends Object_ConstructProps {
}
export class Parser {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Parser */
    addLine(str?: string | null): Component | null
    clean(): Component | null
    free(): void
    getLine(func: ParserLineGenFunc): string
    getState(): ParserState
    parse(func: ParserLineGenFunc): Component
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static parseString(str: string): Component
    static $gtype: GObject.Type
}
export interface Period_ConstructProps extends Object_ConstructProps {
}
export class Period {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Period */
    asIcalString(): string
    getDuration(): Duration
    getEnd(): Time
    getStart(): Time
    isNullPeriod(): boolean
    isValidPeriod(): boolean
    setDuration(duration: Duration): void
    setEnd(end: Time): void
    setStart(start: Time): void
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Period_ConstructProps)
    _init (config?: Period_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromString(str: string): Period
    static newNullPeriod(): Period
    static $gtype: GObject.Type
}
export interface Property_ConstructProps extends Object_ConstructProps {
}
export class Property {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Property */
    addParameter(parameter: Parameter): void
    asIcalString(): string
    clone(): Property
    countParameters(): number
    getAcceptresponse(): string
    getAcknowledged(): Time
    getAction(): PropertyAction
    getAllowconflict(): string
    getAttach(): Attach
    getAttendee(): string
    getBusytype(): PropertyBusytype
    getCalid(): string
    getCalmaster(): string
    getCalscale(): string
    getCapversion(): string
    getCarid(): string
    getCarlevel(): PropertyCarlevel
    getCategories(): string
    getClass(): Property_Class
    getCmd(): PropertyCmd
    getColor(): string
    getComment(): string
    getCompleted(): Time
    getComponents(): string
    getContact(): string
    getCreated(): Time
    getCsid(): string
    getDatemax(): Time
    getDatemin(): Time
    getDatetimeWithComponent(comp?: Component | null): Time
    getDecreed(): string
    getDefaultcharset(): string
    getDefaultlocale(): string
    getDefaulttzid(): string
    getDefaultvcars(): string
    getDeny(): string
    getDescription(): string
    getDtend(): Time
    getDtstamp(): Time
    getDtstart(): Time
    getDue(): Time
    getDuration(): Duration
    getEstimatedduration(): Duration
    getExdate(): Time
    getExpand(): number
    getExrule(): Recurrence
    getFirstParameter(kind: ParameterKind): Parameter
    getFreebusy(): Period
    getGeo(): Geo
    getGrant(): string
    getItipversion(): string
    getLastmodified(): Time
    getLocation(): string
    getMaxcomponentsize(): number
    getMaxdate(): Time
    getMaxresults(): number
    getMaxresultssize(): number
    getMethod(): PropertyMethod
    getMindate(): Time
    getMultipart(): string
    getName(): string
    getNextParameter(kind: ParameterKind): Parameter
    getOrganizer(): string
    getOwner(): string
    getParameterAsString(name: string): string
    getParent(): Component | null
    getPercentcomplete(): number
    getPermission(): string
    getPollcompletion(): PropertyPollcompletion
    getPollitemid(): number
    getPollmode(): PropertyPollmode
    getPollproperties(): string
    getPollwinner(): number
    getPriority(): number
    getProdid(): string
    getPropertyName(): string
    getQuery(): string
    getQueryid(): string
    getQuerylevel(): PropertyQuerylevel
    getQueryname(): string
    getRdate(): Datetimeperiod
    getRecuraccepted(): string
    getRecurexpand(): string
    getRecurlimit(): string
    getRecurrenceid(): Time
    getRelatedto(): string
    getRelcalid(): string
    getRepeat(): number
    getReplyurl(): string
    getRequeststatus(): Reqstat
    getResources(): string
    getResponse(): number
    getRestriction(): string
    getRrule(): Recurrence
    getScope(): string
    getSequence(): number
    getStatus(): PropertyStatus
    getStoresexpanded(): string
    getSummary(): string
    getTarget(): string
    getTaskmode(): PropertyTaskmode
    getTransp(): PropertyTransp
    getTrigger(): Trigger
    getTzid(): string
    getTzidaliasof(): string
    getTzname(): string
    getTzoffsetfrom(): number
    getTzoffsetto(): number
    getTzuntil(): Time
    getTzurl(): string
    getUid(): string
    getUrl(): string
    getValue(): Value
    getValueAsString(): string
    getVersion(): string
    getVoter(): string
    getX(): string
    getXName(): string | null
    getXlicclass(): PropertyXlicclass
    getXlicclustercount(): string
    getXlicerror(): string
    getXlicmimecharset(): string
    getXlicmimecid(): string
    getXlicmimecontenttype(): string
    getXlicmimeencoding(): string
    getXlicmimefilename(): string
    getXlicmimeoptinfo(): string
    isa(): PropertyKind
    isaProperty(): number
    removeParameterByKind(kind: ParameterKind): void
    removeParameterByName(name: string): void
    removeParameterByRef(param: Parameter): void
    setAcceptresponse(v: string): void
    setAcknowledged(v: Time): void
    setAction(v: PropertyAction): void
    setAllowconflict(v: string): void
    setAttach(v: Attach): void
    setAttendee(v: string): void
    setBusytype(v: PropertyBusytype): void
    setCalid(v: string): void
    setCalmaster(v: string): void
    setCalscale(v: string): void
    setCapversion(v: string): void
    setCarid(v: string): void
    setCarlevel(v: PropertyCarlevel): void
    setCategories(v: string): void
    setClass(v: Property_Class): void
    setCmd(v: PropertyCmd): void
    setColor(v: string): void
    setComment(v: string): void
    setCompleted(v: Time): void
    setComponents(v: string): void
    setContact(v: string): void
    setCreated(v: Time): void
    setCsid(v: string): void
    setDatemax(v: Time): void
    setDatemin(v: Time): void
    setDecreed(v: string): void
    setDefaultcharset(v: string): void
    setDefaultlocale(v: string): void
    setDefaulttzid(v: string): void
    setDefaultvcars(v: string): void
    setDeny(v: string): void
    setDescription(v: string): void
    setDtend(v: Time): void
    setDtstamp(v: Time): void
    setDtstart(v: Time): void
    setDue(v: Time): void
    setDuration(v: Duration): void
    setEstimatedduration(v: Duration): void
    setExdate(v: Time): void
    setExpand(v: number): void
    setExrule(v: Recurrence): void
    setFreebusy(v: Period): void
    setGeo(v: Geo): void
    setGrant(v: string): void
    setItipversion(v: string): void
    setLastmodified(v: Time): void
    setLocation(v: string): void
    setMaxcomponentsize(v: number): void
    setMaxdate(v: Time): void
    setMaxresults(v: number): void
    setMaxresultssize(v: number): void
    setMethod(v: PropertyMethod): void
    setMindate(v: Time): void
    setMultipart(v: string): void
    setName(v: string): void
    setOrganizer(v: string): void
    setOwner(v: string): void
    setParameter(parameter: Parameter): void
    setParameterFromString(name: string, value: string): void
    setParent(component?: Component | null): void
    setPercentcomplete(v: number): void
    setPermission(v: string): void
    setPollcompletion(v: PropertyPollcompletion): void
    setPollitemid(v: number): void
    setPollmode(v: PropertyPollmode): void
    setPollproperties(v: string): void
    setPollwinner(v: number): void
    setPriority(v: number): void
    setProdid(v: string): void
    setQuery(v: string): void
    setQueryid(v: string): void
    setQuerylevel(v: PropertyQuerylevel): void
    setQueryname(v: string): void
    setRdate(v: Datetimeperiod): void
    setRecuraccepted(v: string): void
    setRecurexpand(v: string): void
    setRecurlimit(v: string): void
    setRecurrenceid(v: Time): void
    setRelatedto(v: string): void
    setRelcalid(v: string): void
    setRepeat(v: number): void
    setReplyurl(v: string): void
    setRequeststatus(v: Reqstat): void
    setResources(v: string): void
    setResponse(v: number): void
    setRestriction(v: string): void
    setRrule(v: Recurrence): void
    setScope(v: string): void
    setSequence(v: number): void
    setStatus(v: PropertyStatus): void
    setStoresexpanded(v: string): void
    setSummary(v: string): void
    setTarget(v: string): void
    setTaskmode(v: PropertyTaskmode): void
    setTransp(v: PropertyTransp): void
    setTrigger(v: Trigger): void
    setTzid(v: string): void
    setTzidaliasof(v: string): void
    setTzname(v: string): void
    setTzoffsetfrom(v: number): void
    setTzoffsetto(v: number): void
    setTzuntil(v: Time): void
    setTzurl(v: string): void
    setUid(v: string): void
    setUrl(v: string): void
    setValue(value: Value): void
    setValueFromString(value: string, kind: string): void
    setVersion(v: string): void
    setVoter(v: string): void
    setX(v: string): void
    setXName(name: string): void
    setXlicclass(v: PropertyXlicclass): void
    setXlicclustercount(v: string): void
    setXlicerror(v: string): void
    setXlicmimecharset(v: string): void
    setXlicmimecid(v: string): void
    setXlicmimecontenttype(v: string): void
    setXlicmimeencoding(v: string): void
    setXlicmimefilename(v: string): void
    setXlicmimeoptinfo(v: string): void
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Property_ConstructProps)
    _init (config?: Property_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kind: PropertyKind): Property
    static newAcceptresponse(v: string): Property
    static newAcknowledged(v: Time): Property
    static newAction(v: PropertyAction): Property
    static newAllowconflict(v: string): Property
    static newAttach(v: Attach): Property
    static newAttendee(v: string): Property
    static newBusytype(v: PropertyBusytype): Property
    static newCalid(v: string): Property
    static newCalmaster(v: string): Property
    static newCalscale(v: string): Property
    static newCapversion(v: string): Property
    static newCarid(v: string): Property
    static newCarlevel(v: PropertyCarlevel): Property
    static newCategories(v: string): Property
    static newClass(v: Property_Class): Property
    static newCmd(v: PropertyCmd): Property
    static newColor(v: string): Property
    static newComment(v: string): Property
    static newCompleted(v: Time): Property
    static newComponents(v: string): Property
    static newContact(v: string): Property
    static newCreated(v: Time): Property
    static newCsid(v: string): Property
    static newDatemax(v: Time): Property
    static newDatemin(v: Time): Property
    static newDecreed(v: string): Property
    static newDefaultcharset(v: string): Property
    static newDefaultlocale(v: string): Property
    static newDefaulttzid(v: string): Property
    static newDefaultvcars(v: string): Property
    static newDeny(v: string): Property
    static newDescription(v: string): Property
    static newDtend(v: Time): Property
    static newDtstamp(v: Time): Property
    static newDtstart(v: Time): Property
    static newDue(v: Time): Property
    static newDuration(v: Duration): Property
    static newEstimatedduration(v: Duration): Property
    static newExdate(v: Time): Property
    static newExpand(v: number): Property
    static newExrule(v: Recurrence): Property
    static newFreebusy(v: Period): Property
    static newFromString(str: string): Property
    static newGeo(v: Geo): Property
    static newGrant(v: string): Property
    static newItipversion(v: string): Property
    static newLastmodified(v: Time): Property
    static newLocation(v: string): Property
    static newMaxcomponentsize(v: number): Property
    static newMaxdate(v: Time): Property
    static newMaxresults(v: number): Property
    static newMaxresultssize(v: number): Property
    static newMethod(v: PropertyMethod): Property
    static newMindate(v: Time): Property
    static newMultipart(v: string): Property
    static newName(v: string): Property
    static newOrganizer(v: string): Property
    static newOwner(v: string): Property
    static newPercentcomplete(v: number): Property
    static newPermission(v: string): Property
    static newPollcompletion(v: PropertyPollcompletion): Property
    static newPollitemid(v: number): Property
    static newPollmode(v: PropertyPollmode): Property
    static newPollproperties(v: string): Property
    static newPollwinner(v: number): Property
    static newPriority(v: number): Property
    static newProdid(v: string): Property
    static newQuery(v: string): Property
    static newQueryid(v: string): Property
    static newQuerylevel(v: PropertyQuerylevel): Property
    static newQueryname(v: string): Property
    static newRdate(v: Datetimeperiod): Property
    static newRecuraccepted(v: string): Property
    static newRecurexpand(v: string): Property
    static newRecurlimit(v: string): Property
    static newRecurrenceid(v: Time): Property
    static newRelatedto(v: string): Property
    static newRelcalid(v: string): Property
    static newRepeat(v: number): Property
    static newReplyurl(v: string): Property
    static newRequeststatus(v: Reqstat): Property
    static newResources(v: string): Property
    static newResponse(v: number): Property
    static newRestriction(v: string): Property
    static newRrule(v: Recurrence): Property
    static newScope(v: string): Property
    static newSequence(v: number): Property
    static newStatus(v: PropertyStatus): Property
    static newStoresexpanded(v: string): Property
    static newSummary(v: string): Property
    static newTarget(v: string): Property
    static newTaskmode(v: PropertyTaskmode): Property
    static newTransp(v: PropertyTransp): Property
    static newTrigger(v: Trigger): Property
    static newTzid(v: string): Property
    static newTzidaliasof(v: string): Property
    static newTzname(v: string): Property
    static newTzoffsetfrom(v: number): Property
    static newTzoffsetto(v: number): Property
    static newTzuntil(v: Time): Property
    static newTzurl(v: string): Property
    static newUid(v: string): Property
    static newUrl(v: string): Property
    static newVersion(v: string): Property
    static newVoter(v: string): Property
    static newX(v: string): Property
    static newXlicclass(v: PropertyXlicclass): Property
    static newXlicclustercount(v: string): Property
    static newXlicerror(v: string): Property
    static newXlicmimecharset(v: string): Property
    static newXlicmimecid(v: string): Property
    static newXlicmimecontenttype(v: string): Property
    static newXlicmimeencoding(v: string): Property
    static newXlicmimefilename(v: string): Property
    static newXlicmimeoptinfo(v: string): Property
    static enumToString(e: number): string
    static kindAndStringToEnum(kind: number, str: string): number
    static kindFromString(string: string): PropertyKind
    static kindHasProperty(kind: PropertyKind, e: number): number
    static kindIsValid(kind: PropertyKind): boolean
    static kindToString(kind: PropertyKind): string
    static kindToValueKind(kind: PropertyKind): ValueKind
    static methodFromString(str: string): PropertyMethod
    static methodToString(method: PropertyMethod): string
    static recurrenceIsExcluded(comp: Component, dtstart: Time, recurtime: Time): boolean
    static statusFromString(str: string): PropertyStatus
    static statusToString(method: PropertyStatus): string
    static $gtype: GObject.Type
}
export interface RecurIterator_ConstructProps extends Object_ConstructProps {
}
export class RecurIterator {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.RecurIterator */
    next(): Time
    setEnd(end: Time): number
    setStart(start: Time): number
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecurIterator_ConstructProps)
    _init (config?: RecurIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(rule: Recurrence, dtstart: Time): RecurIterator
    static $gtype: GObject.Type
}
export interface Recurrence_ConstructProps extends Object_ConstructProps {
}
export class Recurrence {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Recurrence */
    clear(): void
    getByDay(index: number): number
    getByDayArray(): number[]
    getByHour(index: number): number
    getByHourArray(): number[]
    getByMinute(index: number): number
    getByMinuteArray(): number[]
    getByMonth(index: number): number
    getByMonthArray(): number[]
    getByMonthDay(index: number): number
    getByMonthDayArray(): number[]
    getBySecond(index: number): number
    getBySecondArray(): number[]
    getBySetPos(index: number): number
    getBySetPosArray(): number[]
    getByWeekNo(index: number): number
    getByWeekNoArray(): number[]
    getByYearDay(index: number): number
    getByYearDayArray(): number[]
    getCount(): number
    getFreq(): RecurrenceFrequency
    getInterval(): number
    getUntil(): Time
    getWeekStart(): RecurrenceWeekday
    setByDay(index: number, value: number): void
    setByDayArray(values: number[]): void
    setByHour(index: number, value: number): void
    setByHourArray(values: number[]): void
    setByMinute(index: number, value: number): void
    setByMinuteArray(values: number[]): void
    setByMonth(index: number, value: number): void
    setByMonthArray(values: number[]): void
    setByMonthDay(index: number, value: number): void
    setByMonthDayArray(values: number[]): void
    setBySecond(index: number, value: number): void
    setBySecondArray(values: number[]): void
    setBySetPos(index: number, value: number): void
    setBySetPosArray(values: number[]): void
    setByWeekNo(index: number, value: number): void
    setByWeekNoArray(values: number[]): void
    setByYearDay(index: number, value: number): void
    setByYearDayArray(values: number[]): void
    setCount(count: number): void
    setFreq(freq: RecurrenceFrequency): void
    setInterval(interval: number): void
    setUntil(until: Time): void
    setWeekStart(weekStart: RecurrenceWeekday): void
    toString(): string
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Recurrence_ConstructProps)
    _init (config?: Recurrence_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Recurrence
    static newFromString(str: string): Recurrence
    static dayDayOfWeek(day: number): RecurrenceWeekday
    static dayPosition(day: number): number
    static encodeDay(weekday: RecurrenceWeekday, position: number): number
    static encodeMonth(month: number, isLeap: boolean): number
    static frequencyFromString(str: string): RecurrenceFrequency
    static frequencyToString(kind: RecurrenceFrequency): string
    static monthIsLeap(month: number): boolean
    static monthMonth(month: number): number
    static rscaleIsSupported(): boolean
    static rscaleSupportedCalendars(): Array
    static skipFromString(str: string): RecurrenceSkip
    static skipToString(kind: RecurrenceSkip): string
    static weekdayFromString(str: string): RecurrenceWeekday
    static weekdayToString(kind: RecurrenceWeekday): string
    static $gtype: GObject.Type
}
export interface Reqstat_ConstructProps extends Object_ConstructProps {
}
export class Reqstat {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Reqstat */
    getCode(): RequestStatus
    getDebug(): string
    getDesc(): string
    setCode(code: RequestStatus): void
    toString(): string
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Reqstat_ConstructProps)
    _init (config?: Reqstat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromString(str: string): Reqstat
    static $gtype: GObject.Type
}
export interface Time_ConstructProps extends Object_ConstructProps {
}
export class Time {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Time */
    add(d: Duration): Time
    adjust(days: number, hours: number, minutes: number, seconds: number): void
    asIcalString(): string
    asTimet(): number
    asTimetWithZone(zone?: Timezone | null): number
    clone(): Time
    compare(b: Time): number
    compareDateOnly(b: Time): number
    compareDateOnlyTz(b: Time, zone?: Timezone | null): number
    convertTimezone(fromZone?: Timezone | null, toZone?: Timezone | null): void
    convertToZone(zone?: Timezone | null): Time
    convertToZoneInplace(zone?: Timezone | null): void
    dayOfWeek(): number
    dayOfYear(): number
    getDate(): [ /* year */ number | null, /* month */ number | null, /* day */ number | null ]
    getDay(): number
    getHour(): number
    getMinute(): number
    getMonth(): number
    getSecond(): number
    getTime(): [ /* hour */ number | null, /* minute */ number | null, /* second */ number | null ]
    getTimezone(): Timezone
    getTzid(): string | null
    getYear(): number
    isDate(): boolean
    isDaylight(): boolean
    isNullTime(): boolean
    isUtc(): boolean
    isValidTime(): boolean
    normalize(): Time
    normalizeInplace(): void
    setDate(year: number, month: number, day: number): void
    setDay(day: number): void
    setHour(hour: number): void
    setIsDate(isDate: boolean): void
    setIsDaylight(isDaylight: boolean): void
    setMinute(minute: number): void
    setMonth(month: number): void
    setSecond(second: number): void
    setTime(hour: number, minute: number, second: number): void
    setTimezone(zone?: Timezone | null): void
    setYear(year: number): void
    startDoyWeek(fdow: number): number
    subtract(t2: Time): Duration
    weekNumber(): number
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Time_ConstructProps)
    _init (config?: Time_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Time
    static newCurrentWithZone(zone?: Timezone | null): Time
    static newFromDayOfYear(day: number, year: number): Time
    static newFromString(str: string): Time
    static newFromTimetWithZone(v: number, isDate: number, zone?: Timezone | null): Time
    static newNullDate(): Time
    static newNullTime(): Time
    static newToday(): Time
    static daysInMonth(month: number, year: number): number
    static daysInYear(year: number): number
    static daysIsLeapYear(year: number): boolean
    static timezoneExpandVtimezone(comp: Component, endYear: number, changes: Array): void
    static $gtype: GObject.Type
}
export interface TimeSpan_ConstructProps extends Object_ConstructProps {
}
export class TimeSpan {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.TimeSpan */
    clone(): TimeSpan
    contains(container: TimeSpan): number
    getEnd(): number
    getIsBusy(): boolean
    getStart(): number
    overlaps(s2: TimeSpan): number
    setEnd(end: number): void
    setIsBusy(isBusy: boolean): void
    setStart(start: number): void
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimeSpan_ConstructProps)
    _init (config?: TimeSpan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dtstart: Time, dtend: Time, isBusy: number): TimeSpan
    static newTimet(start: number, end: number, isBusy: boolean): TimeSpan
    static $gtype: GObject.Type
}
export interface Timezone_ConstructProps extends Object_ConstructProps {
}
export class Timezone {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Timezone */
    copy(): Timezone
    dumpChanges(maxYear: number, fp?: object | null): number
    getComponent(): Component
    getDisplayName(): string
    getLatitude(): number
    getLocation(): string | null
    getLongitude(): number
    getTzid(): string | null
    getTznames(): string | null
    getUtcOffset(tt?: Time | null): [ /* returnType */ number, /* isDaylight */ number | null ]
    getUtcOffsetOfUtcTime(tt: Time): [ /* returnType */ number, /* isDaylight */ number | null ]
    setComponent(comp: Component): number
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Timezone_ConstructProps)
    _init (config?: Timezone_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static arrayNew(): Timezone
    static new(): Timezone
    static arrayAppendFromVtimezone(timezones: Array, child: Component): void
    static arrayElementAt(timezones: Array, index: number): Timezone
    static freeBuiltinTimezones(): void
    static freeZoneDirectory(): void
    static getBuiltinTimezone(location?: string | null): Timezone | null
    static getBuiltinTimezoneFromOffset(offset: number, tzname?: string | null): Timezone
    static getBuiltinTimezoneFromTzid(tzid?: string | null): Timezone
    static getBuiltinTimezones(): Array
    static getBuiltinTzdata(): boolean
    static getLocationFromVtimezone(component: Component): string
    static getTznamesFromVtimezone(component: Component): string
    static getUtcTimezone(): Timezone
    static releaseZoneTab(): void
    static setBuiltinTzdata(set: boolean): void
    static setTzidPrefix(newPrefix: string): void
    static setZoneDirectory(path: string): void
    static $gtype: GObject.Type
}
export interface Trigger_ConstructProps extends Object_ConstructProps {
}
export class Trigger {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Trigger */
    getDuration(): Duration
    getTime(): Time
    isBadTrigger(): boolean
    isNullTrigger(): boolean
    setDuration(duration: Duration): void
    setTime(time: Time): void
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Trigger_ConstructProps)
    _init (config?: Trigger_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromInt(reltime: number): Trigger
    static newFromString(str: string): Trigger
    static $gtype: GObject.Type
}
export interface Value_ConstructProps extends Object_ConstructProps {
}
export class Value {
    /* Properties of ICalGLib.Object */
    nativeDestroyFunc: object
    owner: GObject.Object
    /* Fields of ICalGLib.Object */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib.Value */
    asIcalString(): string
    clone(): Value
    compare(b: Value): ParameterXliccomparetype
    getAction(): PropertyAction
    getAttach(): Attach | null
    getBinary(): string | null
    getBoolean(): number
    getBusytype(): PropertyBusytype
    getCaladdress(): string | null
    getCarlevel(): PropertyCarlevel
    getClass(): Property_Class
    getCmd(): PropertyCmd
    getDate(): Time | null
    getDatetime(): Time | null
    getDatetimedate(): Time | null
    getDatetimeperiod(): Datetimeperiod | null
    getDuration(): Duration | null
    getFloat(): number
    getGeo(): Geo | null
    getInteger(): number
    getMethod(): PropertyMethod
    getParent(): Property | null
    getPeriod(): Period | null
    getPollcompletion(): PropertyPollcompletion
    getPollmode(): PropertyPollmode
    getQuery(): string | null
    getQuerylevel(): PropertyQuerylevel
    getRecur(): Recurrence | null
    getRequeststatus(): Reqstat | null
    getStatus(): PropertyStatus
    getString(): string | null
    getTaskmode(): PropertyTaskmode
    getText(): string | null
    getTransp(): PropertyTransp
    getTrigger(): Trigger | null
    getUri(): string | null
    getUtcoffset(): number
    getX(): string | null
    getXlicclass(): PropertyXlicclass
    isValid(): boolean
    isa(): ValueKind
    isaValue(): number
    resetKind(): void
    setAction(v: PropertyAction): void
    setAttach(v: Attach): void
    setBinary(v: string): void
    setBoolean(v: number): void
    setBusytype(v: PropertyBusytype): void
    setCaladdress(v: string): void
    setCarlevel(v: PropertyCarlevel): void
    setClass(v: Property_Class): void
    setCmd(v: PropertyCmd): void
    setDate(v: Time): void
    setDatetime(v: Time): void
    setDatetimedate(v: Time): void
    setDatetimeperiod(v: Datetimeperiod): void
    setDuration(v: Duration): void
    setFloat(v: number): void
    setGeo(v: Geo): void
    setInteger(v: number): void
    setMethod(v: PropertyMethod): void
    setParent(property?: Property | null): void
    setPeriod(v: Period): void
    setPollcompletion(v: PropertyPollcompletion): void
    setPollmode(v: PropertyPollmode): void
    setQuery(v: string): void
    setQuerylevel(v: PropertyQuerylevel): void
    setRecur(v: Recurrence): void
    setRequeststatus(v: Reqstat): void
    setStatus(v: PropertyStatus): void
    setString(v: string): void
    setTaskmode(v: PropertyTaskmode): void
    setText(v: string): void
    setTransp(v: PropertyTransp): void
    setTrigger(v: Trigger): void
    setUri(v: string): void
    setUtcoffset(v: number): void
    setX(v: string): void
    setXlicclass(v: PropertyXlicclass): void
    /* Methods of ICalGLib.Object */
    addDepender(depender: GObject.Object): void
    getIsGlobalMemory(): boolean
    refOwner(): GObject.Object | null
    removeDepender(depender: GObject.Object): void
    removeOwner(): void
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    setOwner(owner: GObject.Object): void
    stealNative(): object | null
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
    connect(sigName: "notify", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Value_ConstructProps)
    _init (config?: Value_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kind: ValueKind): Value
    static newAction(v: PropertyAction): Value
    static newAttach(v: Attach): Value
    static newBinary(v: string): Value
    static newBoolean(v: number): Value
    static newBusytype(v: PropertyBusytype): Value
    static newCaladdress(v: string): Value
    static newCarlevel(v: PropertyCarlevel): Value
    static newClass(v: Property_Class): Value
    static newCmd(v: PropertyCmd): Value
    static newDate(v: Time): Value
    static newDatetime(v: Time): Value
    static newDatetimedate(v: Time): Value
    static newDatetimeperiod(v: Datetimeperiod): Value
    static newDuration(v: Duration): Value
    static newFloat(v: number): Value
    static newFromString(kind: ValueKind, str: string): Value
    static newGeo(v: Geo): Value
    static newInteger(v: number): Value
    static newMethod(v: PropertyMethod): Value
    static newPeriod(v: Period): Value
    static newPollcompletion(v: PropertyPollcompletion): Value
    static newPollmode(v: PropertyPollmode): Value
    static newQuery(v: string): Value
    static newQuerylevel(v: PropertyQuerylevel): Value
    static newRecur(v: Recurrence): Value
    static newRequeststatus(v: Reqstat): Value
    static newStatus(v: PropertyStatus): Value
    static newString(v: string): Value
    static newTaskmode(v: PropertyTaskmode): Value
    static newText(v: string): Value
    static newTransp(v: PropertyTransp): Value
    static newTrigger(v: Trigger): Value
    static newUri(v: string): Value
    static newUtcoffset(v: number): Value
    static newX(v: string): Value
    static newXlicclass(v: PropertyXlicclass): Value
    static decodeIcalString(szText: string): string | null
    static encodeIcalString(szText: string): string | null
    static kindFromString(str: string): ValueKind
    static kindIsValid(kind: ValueKind): boolean
    static kindToPropertyKind(kind: ValueKind): PropertyKind
    static kindToString(kind: ValueKind): string
    static $gtype: GObject.Type
}
export abstract class ArrayClass {
    static name: string
}
export abstract class AttachClass {
    static name: string
}
export abstract class CompIterClass {
    static name: string
}
export abstract class ComponentClass {
    static name: string
}
export abstract class DatetimeperiodClass {
    static name: string
}
export abstract class DurationClass {
    static name: string
}
export abstract class GeoClass {
    static name: string
}
export abstract class ObjectClass {
    static name: string
}
export abstract class ParameterClass {
    static name: string
}
export abstract class ParserClass {
    static name: string
}
export abstract class PeriodClass {
    static name: string
}
export abstract class PropertyClass {
    static name: string
}
export abstract class RecurIteratorClass {
    static name: string
}
export abstract class RecurrenceClass {
    static name: string
}
export abstract class ReqstatClass {
    static name: string
}
export abstract class TimeClass {
    static name: string
}
export abstract class TimeSpanClass {
    static name: string
}
export abstract class TimezoneClass {
    static name: string
}
export abstract class TriggerClass {
    static name: string
}
export abstract class ValueClass {
    static name: string
}
export class _Array {
    /* Fields of ICalGLib._Array */
    parentInstance: Object
    static name: string
}
export class _Attach {
    /* Fields of ICalGLib._Attach */
    parentInstance: Object
    static name: string
}
export class _CompIter {
    /* Fields of ICalGLib._CompIter */
    parentInstance: Object
    static name: string
}
export class _Component {
    /* Fields of ICalGLib._Component */
    parentInstance: Object
    static name: string
}
export class _Datetimeperiod {
    /* Fields of ICalGLib._Datetimeperiod */
    parentInstance: Object
    static name: string
}
export class _Duration {
    /* Fields of ICalGLib._Duration */
    parentInstance: Object
    static name: string
}
export class _Geo {
    /* Fields of ICalGLib._Geo */
    parentInstance: Object
    static name: string
}
export class _Parameter {
    /* Fields of ICalGLib._Parameter */
    parentInstance: Object
    static name: string
}
export class _Parser {
    /* Fields of ICalGLib._Parser */
    parentInstance: Object
    static name: string
}
export class _Period {
    /* Fields of ICalGLib._Period */
    parentInstance: Object
    static name: string
}
export class _Property {
    /* Fields of ICalGLib._Property */
    parentInstance: Object
    static name: string
}
export class _RecurIterator {
    /* Fields of ICalGLib._RecurIterator */
    parentInstance: Object
    static name: string
}
export class _Recurrence {
    /* Fields of ICalGLib._Recurrence */
    parentInstance: Object
    static name: string
}
export class _Reqstat {
    /* Fields of ICalGLib._Reqstat */
    parentInstance: Object
    static name: string
}
export class _Time {
    /* Fields of ICalGLib._Time */
    parentInstance: Object
    static name: string
}
export class _TimeSpan {
    /* Fields of ICalGLib._TimeSpan */
    parentInstance: Object
    static name: string
}
export class _Timezone {
    /* Fields of ICalGLib._Timezone */
    parentInstance: Object
    static name: string
}
export class _Trigger {
    /* Fields of ICalGLib._Trigger */
    parentInstance: Object
    static name: string
}
export class _Value {
    /* Fields of ICalGLib._Value */
    parentInstance: Object
    static name: string
}
}