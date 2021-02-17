/**
 * ICal-3.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace ICal {

export enum _invalid_rrule_handling {
    TREAT_AS_ERROR,
    IGNORE_INVALID,
}
export enum _unknown_token_handling {
    ASSUME_IANA_TOKEN,
    DISCARD_TOKEN,
    TREAT_AS_ERROR,
}
export enum component_kind {
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
    VPATCH_COMPONENT,
    XPATCH_COMPONENT,
}
export enum errorenum {
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
export enum errorstate {
    FATAL,
    NONFATAL,
    DEFAULT,
    UNKNOWN,
}
export enum parameter_action {
    X,
    ASK,
    ABORT,
    NONE,
}
export enum parameter_cutype {
    X,
    INDIVIDUAL,
    GROUP,
    RESOURCE,
    ROOM,
    UNKNOWN,
    NONE,
}
export enum parameter_display {
    X,
    BADGE,
    GRAPHIC,
    FULLSIZE,
    THUMBNAIL,
    NONE,
}
export enum parameter_enable {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum parameter_encoding {
    X,
    /* 8BIT (invalid, starts with a number) */
    BASE64,
    NONE,
}
export enum parameter_fbtype {
    X,
    FREE,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
export enum parameter_feature {
    X,
    AUDIO,
    CHAT,
    FEED,
    MODERATOR,
    PHONE,
    SCREEN,
    VIDEO,
    NONE,
}
export enum parameter_kind {
    ANY_PARAMETER,
    ACTIONPARAM_PARAMETER,
    ALTREP_PARAMETER,
    CHARSET_PARAMETER,
    CN_PARAMETER,
    CUTYPE_PARAMETER,
    DELEGATEDFROM_PARAMETER,
    DELEGATEDTO_PARAMETER,
    DIR_PARAMETER,
    DISPLAY_PARAMETER,
    EMAIL_PARAMETER,
    ENABLE_PARAMETER,
    ENCODING_PARAMETER,
    FBTYPE_PARAMETER,
    FEATURE_PARAMETER,
    FILENAME_PARAMETER,
    FMTTYPE_PARAMETER,
    IANA_PARAMETER,
    ID_PARAMETER,
    LABEL_PARAMETER,
    LANGUAGE_PARAMETER,
    LATENCY_PARAMETER,
    LOCAL_PARAMETER,
    LOCALIZE_PARAMETER,
    MANAGEDID_PARAMETER,
    MEMBER_PARAMETER,
    MODIFIED_PARAMETER,
    OPTIONS_PARAMETER,
    PARTSTAT_PARAMETER,
    PATCHACTION_PARAMETER,
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
export enum parameter_local {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum parameter_partstat {
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
export enum parameter_patchaction {
    X,
    CREATE,
    BYNAME,
    BYVALUE,
    BYPARAM,
    NONE,
}
export enum parameter_range {
    X,
    THISANDPRIOR,
    THISANDFUTURE,
    NONE,
}
export enum parameter_related {
    X,
    START,
    END,
    NONE,
}
export enum parameter_reltype {
    X,
    PARENT,
    CHILD,
    SIBLING,
    POLL,
    NONE,
}
export enum parameter_required {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum parameter_role {
    X,
    CHAIR,
    REQPARTICIPANT,
    OPTPARTICIPANT,
    NONPARTICIPANT,
    NONE,
}
export enum parameter_rsvp {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum parameter_scheduleagent {
    X,
    SERVER,
    CLIENT,
    NONE,
}
export enum parameter_scheduleforcesend {
    X,
    REQUEST,
    REPLY,
    NONE,
}
export enum parameter_stayinformed {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum parameter_substate {
    X,
    OK,
    ERROR,
    SUSPENDED,
    NONE,
}
export enum parameter_value {
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
export enum parameter_xliccomparetype {
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
export enum parameter_xlicerrortype {
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
export enum parser_state {
    ERROR,
    SUCCESS,
    BEGIN_COMP,
    END_COMP,
    IN_PROGRESS,
}
export enum property_action {
    X,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    NONE,
}
export enum property_busytype {
    X,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
export enum property_carlevel {
    X,
    CARNONE,
    CARMIN,
    CARFULL1,
    NONE,
}
export enum property_class {
    X,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    NONE,
}
export enum property_cmd {
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
export enum property_kind {
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
    CONFERENCE_PROPERTY,
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
    IMAGE_PROPERTY,
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
    PATCHDELETE_PROPERTY,
    PATCHORDER_PROPERTY,
    PATCHPARAMETER_PROPERTY,
    PATCHTARGET_PROPERTY,
    PATCHVERSION_PROPERTY,
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
    REFRESHINTERVAL_PROPERTY,
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
    SOURCE_PROPERTY,
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
export enum property_method {
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
    POLLSTATUS,
    NONE,
}
export enum property_pollcompletion {
    X,
    SERVER,
    SERVERSUBMIT,
    SERVERCHOICE,
    CLIENT,
    NONE,
}
export enum property_pollmode {
    X,
    BASIC,
    NONE,
}
export enum property_querylevel {
    X,
    CALQL1,
    CALQLNONE,
    NONE,
}
export enum property_status {
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
export enum property_taskmode {
    X,
    AUTOMATICCOMPLETION,
    AUTOMATICFAILURE,
    AUTOMATICSTATUS,
    NONE,
}
export enum property_transp {
    X,
    OPAQUE,
    OPAQUENOCONFLICT,
    TRANSPARENT,
    TRANSPARENTNOCONFLICT,
    NONE,
}
export enum property_xlicclass {
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
export enum recurrencetype_frequency {
    SECONDLY_RECURRENCE,
    MINUTELY_RECURRENCE,
    HOURLY_RECURRENCE,
    DAILY_RECURRENCE,
    WEEKLY_RECURRENCE,
    MONTHLY_RECURRENCE,
    YEARLY_RECURRENCE,
    NO_RECURRENCE,
}
export enum recurrencetype_skip {
    BACKWARD,
    FORWARD,
    OMIT,
    UNDEFINED,
}
export enum recurrencetype_weekday {
    NO_WEEKDAY,
    SUNDAY_WEEKDAY,
    MONDAY_WEEKDAY,
    TUESDAY_WEEKDAY,
    WEDNESDAY_WEEKDAY,
    THURSDAY_WEEKDAY,
    FRIDAY_WEEKDAY,
    SATURDAY_WEEKDAY,
}
export enum requeststatus {
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
export enum restriction_kind {
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
export enum value_kind {
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
export const BOOLEAN_FALSE: number
export const BOOLEAN_TRUE: number
export const BY_DAY_SIZE: number
export const BY_HOUR_SIZE: number
export const BY_MINUTE_SIZE: number
export const BY_MONTHDAY_SIZE: number
export const BY_MONTH_SIZE: number
export const BY_SECOND_SIZE: number
export const BY_WEEKNO_SIZE: number
export const BY_YEARDAY_SIZE: number
export const ERRORS_ARE_FATAL: number
export const ICALPARAMETER_FIRST_ENUM: number
export const ICALPARAMETER_LAST_ENUM: number
export const ICALPROPERTY_FIRST_ENUM: number
export const ICALPROPERTY_LAST_ENUM: number
export const MAJOR_VERSION: number
export const MINOR_VERSION: number
export const PACKAGE: string
export const PATCH_VERSION: number
export const VERSION: string
export const ZONES_TAB_SYSTEM_FILENAME: string
export function bt(): void
export function decodeBase64(dest: string, src: string, size: number): string
export function decodeQuotedPrintable(dest: string, src: string, size: number): string
export function freeZoneDirectory(): void
export function getInvalidRruleHandlingSetting(): _invalid_rrule_handling
export function getUnknownTokenHandlingSetting(): _unknown_token_handling
export function icalarrayAppend(array: array, element?: object | null): void
export function icalarrayElementAt(array: array, position: number): object | null
export function icalarrayFree(array: array): void
export function icalarrayRemoveElementAt(array: array, position: number): void
export function icalarraySort(array: array, compare?: object | null): void
export function icalattachGetData(attach: attach): number
export function icalattachGetIsUrl(attach: attach): number
export function icalattachGetUrl(attach: attach): string
export function icalattachRef(attach: attach): void
export function icalattachUnref(attach: attach): void
export function icalcomponentAddComponent(parent: component, child: component): void
export function icalcomponentAddProperty(component: component, property: property): void
export function icalcomponentAsIcalString(component: component): string
export function icalcomponentAsIcalStringR(component: component): string
export function icalcomponentCheckRestrictions(comp: component): number
export function icalcomponentConvertErrors(component: component): void
export function icalcomponentCountComponents(component: component, kind: component_kind): number
export function icalcomponentCountErrors(component: component): number
export function icalcomponentCountProperties(component: component, kind: property_kind): number
export function icalcomponentForeachRecurrence(comp: component, start?: object | null, end?: object | null, callback?: object | null, callbackData?: object | null): void
export function icalcomponentForeachTzid(comp: component, callback?: object | null, callbackData?: object | null): void
export function icalcomponentFree(component: component): void
export function icalcomponentGetComment(comp: component): string
export function icalcomponentGetComponentName(comp: component): string
export function icalcomponentGetComponentNameR(comp: component): string
export function icalcomponentGetDescription(comp: component): string
export function icalcomponentGetDtend(comp: component): object | null
export function icalcomponentGetDtstamp(comp: component): object | null
export function icalcomponentGetDtstart(comp: component): object | null
export function icalcomponentGetDue(comp: component): object | null
export function icalcomponentGetDuration(comp: component): object | null
export function icalcomponentGetLocation(comp: component): string
export function icalcomponentGetMethod(comp: component): property_method
export function icalcomponentGetRecurrenceid(comp: component): object | null
export function icalcomponentGetRelcalid(comp: component): string
export function icalcomponentGetSequence(comp: component): number
export function icalcomponentGetSpan(comp: component): object | null
export function icalcomponentGetStatus(comp: component): object | null
export function icalcomponentGetSummary(comp: component): string
export function icalcomponentGetUid(comp: component): string
export function icalcomponentGetXName(comp: component): string
export function icalcomponentIsValid(component: component): number
export function icalcomponentIsa(component: component): component_kind
export function icalcomponentIsaComponent(component?: object | null): number
export function icalcomponentKindIsValid(kind: component_kind): number
export function icalcomponentKindToString(kind: component_kind): string
export function icalcomponentMergeComponent(comp: component, compToMerge: component): void
export function icalcomponentNormalize(comp: component): void
export function icalcomponentRemoveComponent(parent: component, child: component): void
export function icalcomponentRemoveProperty(component: component, property: property): void
export function icalcomponentSetComment(comp: component, v: string): void
export function icalcomponentSetDescription(comp: component, v: string): void
export function icalcomponentSetDtend(comp: component, v?: object | null): void
export function icalcomponentSetDtstamp(comp: component, v?: object | null): void
export function icalcomponentSetDtstart(comp: component, v?: object | null): void
export function icalcomponentSetDue(comp: component, v?: object | null): void
export function icalcomponentSetDuration(comp: component, v?: object | null): void
export function icalcomponentSetLocation(comp: component, v: string): void
export function icalcomponentSetMethod(comp: component, method: property_method): void
export function icalcomponentSetParent(component: component, parent: component): void
export function icalcomponentSetRecurrenceid(comp: component, v?: object | null): void
export function icalcomponentSetRelcalid(comp: component, v: string): void
export function icalcomponentSetSequence(comp: component, v: number): void
export function icalcomponentSetStatus(comp: component, v?: object | null): void
export function icalcomponentSetSummary(comp: component, v: string): void
export function icalcomponentSetUid(comp: component, v: string): void
export function icalcomponentSetXName(comp: component, name: string): void
export function icalcomponentStringToKind(string: string): component_kind
export function icalcomponentStripErrors(component: component): void
export function icaldurationtypeAsIcalString(d?: object | null): string
export function icaldurationtypeAsIcalStringR(d?: object | null): string
export function icaldurationtypeAsInt(duration?: object | null): number
export function icaldurationtypeBadDuration(): object | null
export function icaldurationtypeFromInt(t: number): object | null
export function icaldurationtypeFromString(dur: string): object | null
export function icaldurationtypeIsBadDuration(d?: object | null): number
export function icaldurationtypeIsNullDuration(d?: object | null): number
export function icaldurationtypeNullDuration(): object | null
export function icalenumNumToReqstat(major: number, minor: number): requeststatus
export function icalenumReqstatCode(stat: requeststatus): string
export function icalenumReqstatCodeR(stat: requeststatus): string
export function icalenumReqstatDesc(stat: requeststatus): string
export function icalenumReqstatMajor(stat: requeststatus): number
export function icalenumReqstatMinor(stat: requeststatus): number
export function icalerrnoReturn(): errorenum
export function icalerrorClearErrno(): void
export function icalerrorCrashHere(): void
export function icalerrorErrorFromString(str: string): errorenum
export function icalerrorGetErrorState(error: errorenum): errorstate
export function icalerrorGetErrorsAreFatal(): number
export function icalerrorPerror(): string
export function icalerrorRestore(error: string, es: errorstate): void
export function icalerrorSetErrno(x: errorenum): void
export function icalerrorSetErrorState(error: errorenum, state: errorstate): void
export function icalerrorSetErrorsAreFatal(fatal: number): void
export function icalerrorStopHere(): void
export function icalerrorStrerror(e: errorenum): string
export function icalerrorSupress(error: string): errorstate
export function icallangbindAccessArray(array: number, index: number): number
export function icallangbindFreeArray(array: number): void
export function icallangbindNewArray(size: number): number
export function icallangbindPropertyEvalString(prop: property, sep: string): string
export function icallangbindPropertyEvalStringR(prop: property, sep: string): string
export function icallangbindQuoteAsIcal(str: string): string
export function icallangbindQuoteAsIcalR(str: string): string
export function icallangbindStringToOpenFlag(str: string): number
export function icalmemoryAddTmpBuffer(buf?: object | null): void
export function icalmemoryAppendChar(buf: string, pos: string, bufSize: number, ch: number): void
export function icalmemoryAppendString(buf: string, pos: string, bufSize: number, string: string): void
export function icalmemoryFreeBuffer(buf?: object | null): void
export function icalmemoryFreeRing(): void
export function icalmemoryNewBuffer(size: number): object | null
export function icalmemoryResizeBuffer(buf: object | null, size: number): object | null
export function icalmemoryStrdup(s: string): string
export function icalmemoryTmpBuffer(size: number): object | null
export function icalmemoryTmpCopy(str: string): string
export function icalparameterAsIcalString(parameter: parameter): string
export function icalparameterAsIcalStringR(parameter: parameter): string
export function icalparameterEnumToString(e: number): string
export function icalparameterFree(parameter: parameter): void
export function icalparameterGetActionparam(value: parameter): parameter_action
export function icalparameterGetAltrep(value: parameter): string
export function icalparameterGetCharset(value: parameter): string
export function icalparameterGetCn(value: parameter): string
export function icalparameterGetCutype(value: parameter): parameter_cutype
export function icalparameterGetDelegatedfrom(value: parameter): string
export function icalparameterGetDelegatedto(value: parameter): string
export function icalparameterGetDir(value: parameter): string
export function icalparameterGetDisplay(value: parameter): parameter_display
export function icalparameterGetEmail(value: parameter): string
export function icalparameterGetEnable(value: parameter): parameter_enable
export function icalparameterGetEncoding(value: parameter): parameter_encoding
export function icalparameterGetFbtype(value: parameter): parameter_fbtype
export function icalparameterGetFeature(value: parameter): parameter_feature
export function icalparameterGetFilename(value: parameter): string
export function icalparameterGetFmttype(value: parameter): string
export function icalparameterGetIana(value: parameter): string
export function icalparameterGetIanaName(param: parameter): string
export function icalparameterGetIanaValue(param: parameter): string
export function icalparameterGetId(value: parameter): string
export function icalparameterGetLabel(value: parameter): string
export function icalparameterGetLanguage(value: parameter): string
export function icalparameterGetLatency(value: parameter): string
export function icalparameterGetLocal(value: parameter): parameter_local
export function icalparameterGetLocalize(value: parameter): string
export function icalparameterGetManagedid(value: parameter): string
export function icalparameterGetMember(value: parameter): string
export function icalparameterGetModified(value: parameter): string
export function icalparameterGetOptions(value: parameter): string
export function icalparameterGetPartstat(value: parameter): parameter_partstat
export function icalparameterGetPatchaction(value: parameter): parameter_patchaction
export function icalparameterGetPubliccomment(value: parameter): string
export function icalparameterGetRange(value: parameter): parameter_range
export function icalparameterGetReason(value: parameter): string
export function icalparameterGetRelated(value: parameter): parameter_related
export function icalparameterGetReltype(value: parameter): parameter_reltype
export function icalparameterGetRequired(value: parameter): parameter_required
export function icalparameterGetResponse(value: parameter): number
export function icalparameterGetRole(value: parameter): parameter_role
export function icalparameterGetRsvp(value: parameter): parameter_rsvp
export function icalparameterGetScheduleagent(value: parameter): parameter_scheduleagent
export function icalparameterGetScheduleforcesend(value: parameter): parameter_scheduleforcesend
export function icalparameterGetSchedulestatus(value: parameter): string
export function icalparameterGetSentby(value: parameter): string
export function icalparameterGetSize(value: parameter): string
export function icalparameterGetStayinformed(value: parameter): parameter_stayinformed
export function icalparameterGetSubstate(value: parameter): parameter_substate
export function icalparameterGetTzid(value: parameter): string
export function icalparameterGetValue(value: parameter): parameter_value
export function icalparameterGetX(value: parameter): string
export function icalparameterGetXliccomparetype(value: parameter): parameter_xliccomparetype
export function icalparameterGetXlicerrortype(value: parameter): parameter_xlicerrortype
export function icalparameterGetXname(param: parameter): string
export function icalparameterGetXvalue(param: parameter): string
export function icalparameterHasSameName(param1: parameter, param2: parameter): number
export function icalparameterIsa(parameter: parameter): parameter_kind
export function icalparameterIsaParameter(param?: object | null): number
export function icalparameterKindIsValid(kind: parameter_kind): number
export function icalparameterKindToString(kind: parameter_kind): string
export function icalparameterSetActionparam(value: parameter, v: parameter_action): void
export function icalparameterSetAltrep(value: parameter, v: string): void
export function icalparameterSetCharset(value: parameter, v: string): void
export function icalparameterSetCn(value: parameter, v: string): void
export function icalparameterSetCutype(value: parameter, v: parameter_cutype): void
export function icalparameterSetDelegatedfrom(value: parameter, v: string): void
export function icalparameterSetDelegatedto(value: parameter, v: string): void
export function icalparameterSetDir(value: parameter, v: string): void
export function icalparameterSetDisplay(value: parameter, v: parameter_display): void
export function icalparameterSetEmail(value: parameter, v: string): void
export function icalparameterSetEnable(value: parameter, v: parameter_enable): void
export function icalparameterSetEncoding(value: parameter, v: parameter_encoding): void
export function icalparameterSetFbtype(value: parameter, v: parameter_fbtype): void
export function icalparameterSetFeature(value: parameter, v: parameter_feature): void
export function icalparameterSetFilename(value: parameter, v: string): void
export function icalparameterSetFmttype(value: parameter, v: string): void
export function icalparameterSetIana(value: parameter, v: string): void
export function icalparameterSetIanaName(param: parameter, v: string): void
export function icalparameterSetIanaValue(param: parameter, v: string): void
export function icalparameterSetId(value: parameter, v: string): void
export function icalparameterSetLabel(value: parameter, v: string): void
export function icalparameterSetLanguage(value: parameter, v: string): void
export function icalparameterSetLatency(value: parameter, v: string): void
export function icalparameterSetLocal(value: parameter, v: parameter_local): void
export function icalparameterSetLocalize(value: parameter, v: string): void
export function icalparameterSetManagedid(value: parameter, v: string): void
export function icalparameterSetMember(value: parameter, v: string): void
export function icalparameterSetModified(value: parameter, v: string): void
export function icalparameterSetOptions(value: parameter, v: string): void
export function icalparameterSetParent(param: parameter, property: property): void
export function icalparameterSetPartstat(value: parameter, v: parameter_partstat): void
export function icalparameterSetPatchaction(value: parameter, v: parameter_patchaction): void
export function icalparameterSetPubliccomment(value: parameter, v: string): void
export function icalparameterSetRange(value: parameter, v: parameter_range): void
export function icalparameterSetReason(value: parameter, v: string): void
export function icalparameterSetRelated(value: parameter, v: parameter_related): void
export function icalparameterSetReltype(value: parameter, v: parameter_reltype): void
export function icalparameterSetRequired(value: parameter, v: parameter_required): void
export function icalparameterSetResponse(value: parameter, v: number): void
export function icalparameterSetRole(value: parameter, v: parameter_role): void
export function icalparameterSetRsvp(value: parameter, v: parameter_rsvp): void
export function icalparameterSetScheduleagent(value: parameter, v: parameter_scheduleagent): void
export function icalparameterSetScheduleforcesend(value: parameter, v: parameter_scheduleforcesend): void
export function icalparameterSetSchedulestatus(value: parameter, v: string): void
export function icalparameterSetSentby(value: parameter, v: string): void
export function icalparameterSetSize(value: parameter, v: string): void
export function icalparameterSetStayinformed(value: parameter, v: parameter_stayinformed): void
export function icalparameterSetSubstate(value: parameter, v: parameter_substate): void
export function icalparameterSetTzid(value: parameter, v: string): void
export function icalparameterSetValue(value: parameter, v: parameter_value): void
export function icalparameterSetX(value: parameter, v: string): void
export function icalparameterSetXliccomparetype(value: parameter, v: parameter_xliccomparetype): void
export function icalparameterSetXlicerrortype(value: parameter, v: parameter_xlicerrortype): void
export function icalparameterSetXname(param: parameter, v: string): void
export function icalparameterSetXvalue(param: parameter, v: string): void
export function icalparameterStringToEnum(str: string): number
export function icalparameterStringToKind(string: string): parameter_kind
export function icalparameterValueToValueKind(value: parameter_value): value_kind
export function icalparserFree(parser: parser): void
export function icalparserGetState(parser: parser): parser_state
export function icalparserSetGenData(parser: parser, data?: object | null): void
export function icalparserStringLineGenerator(out: string, bufSize: number, d?: object | null): string
export function icalperiodtypeAsIcalString(p?: object | null): string
export function icalperiodtypeAsIcalStringR(p?: object | null): string
export function icalperiodtypeFromString(str: string): object | null
export function icalperiodtypeIsNullPeriod(p?: object | null): number
export function icalperiodtypeIsValidPeriod(p?: object | null): number
export function icalperiodtypeNullPeriod(): object | null
export function icalpropertyAddParameter(prop: property, parameter: parameter): void
export function icalpropertyAsIcalString(prop: property): string
export function icalpropertyAsIcalStringR(prop: property): string
export function icalpropertyCountParameters(prop: property): number
export function icalpropertyEnumBelongsToProperty(kind: property_kind, e: number): number
export function icalpropertyEnumToString(e: number): string
export function icalpropertyEnumToStringR(e: number): string
export function icalpropertyFree(prop: property): void
export function icalpropertyGetAcceptresponse(prop: property): string
export function icalpropertyGetAcknowledged(prop: property): object | null
export function icalpropertyGetAction(prop: property): object | null
export function icalpropertyGetAllowconflict(prop: property): string
export function icalpropertyGetAttendee(prop: property): string
export function icalpropertyGetBusytype(prop: property): object | null
export function icalpropertyGetCalid(prop: property): string
export function icalpropertyGetCalmaster(prop: property): string
export function icalpropertyGetCalscale(prop: property): string
export function icalpropertyGetCapversion(prop: property): string
export function icalpropertyGetCarid(prop: property): string
export function icalpropertyGetCarlevel(prop: property): object | null
export function icalpropertyGetCategories(prop: property): string
export function icalpropertyGetClass(prop: property): object | null
export function icalpropertyGetCmd(prop: property): object | null
export function icalpropertyGetColor(prop: property): string
export function icalpropertyGetComment(prop: property): string
export function icalpropertyGetCompleted(prop: property): object | null
export function icalpropertyGetComponents(prop: property): string
export function icalpropertyGetConference(prop: property): string
export function icalpropertyGetContact(prop: property): string
export function icalpropertyGetCreated(prop: property): object | null
export function icalpropertyGetCsid(prop: property): string
export function icalpropertyGetDatemax(prop: property): object | null
export function icalpropertyGetDatemin(prop: property): object | null
export function icalpropertyGetDatetimeWithComponent(prop: property, comp: component): object | null
export function icalpropertyGetDecreed(prop: property): string
export function icalpropertyGetDefaultcharset(prop: property): string
export function icalpropertyGetDefaultlocale(prop: property): string
export function icalpropertyGetDefaulttzid(prop: property): string
export function icalpropertyGetDefaultvcars(prop: property): string
export function icalpropertyGetDeny(prop: property): string
export function icalpropertyGetDescription(prop: property): string
export function icalpropertyGetDtend(prop: property): object | null
export function icalpropertyGetDtstamp(prop: property): object | null
export function icalpropertyGetDtstart(prop: property): object | null
export function icalpropertyGetDue(prop: property): object | null
export function icalpropertyGetDuration(prop: property): object | null
export function icalpropertyGetEstimatedduration(prop: property): object | null
export function icalpropertyGetExdate(prop: property): object | null
export function icalpropertyGetExpand(prop: property): number
export function icalpropertyGetExrule(prop: property): object | null
export function icalpropertyGetFreebusy(prop: property): object | null
export function icalpropertyGetGeo(prop: property): object | null
export function icalpropertyGetGrant(prop: property): string
export function icalpropertyGetItipversion(prop: property): string
export function icalpropertyGetLastmodified(prop: property): object | null
export function icalpropertyGetLocation(prop: property): string
export function icalpropertyGetMaxcomponentsize(prop: property): number
export function icalpropertyGetMaxdate(prop: property): object | null
export function icalpropertyGetMaxresults(prop: property): number
export function icalpropertyGetMaxresultssize(prop: property): number
export function icalpropertyGetMethod(prop: property): object | null
export function icalpropertyGetMindate(prop: property): object | null
export function icalpropertyGetMultipart(prop: property): string
export function icalpropertyGetName(prop: property): string
export function icalpropertyGetOrganizer(prop: property): string
export function icalpropertyGetOwner(prop: property): string
export function icalpropertyGetParameterAsString(prop: property, name: string): string
export function icalpropertyGetParameterAsStringR(prop: property, name: string): string
export function icalpropertyGetPatchdelete(prop: property): string
export function icalpropertyGetPatchorder(prop: property): number
export function icalpropertyGetPatchparameter(prop: property): string
export function icalpropertyGetPatchtarget(prop: property): string
export function icalpropertyGetPatchversion(prop: property): string
export function icalpropertyGetPercentcomplete(prop: property): number
export function icalpropertyGetPermission(prop: property): string
export function icalpropertyGetPollcompletion(prop: property): object | null
export function icalpropertyGetPollitemid(prop: property): number
export function icalpropertyGetPollmode(prop: property): object | null
export function icalpropertyGetPollproperties(prop: property): string
export function icalpropertyGetPollwinner(prop: property): number
export function icalpropertyGetPriority(prop: property): number
export function icalpropertyGetProdid(prop: property): string
export function icalpropertyGetPropertyName(prop: property): string
export function icalpropertyGetPropertyNameR(prop: property): string
export function icalpropertyGetQuery(prop: property): string
export function icalpropertyGetQueryid(prop: property): string
export function icalpropertyGetQuerylevel(prop: property): object | null
export function icalpropertyGetQueryname(prop: property): string
export function icalpropertyGetRdate(prop: property): object | null
export function icalpropertyGetRecuraccepted(prop: property): string
export function icalpropertyGetRecurexpand(prop: property): string
export function icalpropertyGetRecurlimit(prop: property): string
export function icalpropertyGetRecurrenceid(prop: property): object | null
export function icalpropertyGetRefreshinterval(prop: property): object | null
export function icalpropertyGetRelatedto(prop: property): string
export function icalpropertyGetRelcalid(prop: property): string
export function icalpropertyGetRepeat(prop: property): number
export function icalpropertyGetReplyurl(prop: property): string
export function icalpropertyGetRequeststatus(prop: property): object | null
export function icalpropertyGetResources(prop: property): string
export function icalpropertyGetResponse(prop: property): number
export function icalpropertyGetRestriction(prop: property): string
export function icalpropertyGetRrule(prop: property): object | null
export function icalpropertyGetScope(prop: property): string
export function icalpropertyGetSequence(prop: property): number
export function icalpropertyGetSource(prop: property): string
export function icalpropertyGetStatus(prop: property): object | null
export function icalpropertyGetStoresexpanded(prop: property): string
export function icalpropertyGetSummary(prop: property): string
export function icalpropertyGetTarget(prop: property): string
export function icalpropertyGetTaskmode(prop: property): object | null
export function icalpropertyGetTransp(prop: property): object | null
export function icalpropertyGetTrigger(prop: property): object | null
export function icalpropertyGetTzid(prop: property): string
export function icalpropertyGetTzidaliasof(prop: property): string
export function icalpropertyGetTzname(prop: property): string
export function icalpropertyGetTzoffsetfrom(prop: property): number
export function icalpropertyGetTzoffsetto(prop: property): number
export function icalpropertyGetTzuntil(prop: property): object | null
export function icalpropertyGetTzurl(prop: property): string
export function icalpropertyGetUid(prop: property): string
export function icalpropertyGetUrl(prop: property): string
export function icalpropertyGetValueAsString(prop: property): string
export function icalpropertyGetValueAsStringR(prop: property): string
export function icalpropertyGetVersion(prop: property): string
export function icalpropertyGetVoter(prop: property): string
export function icalpropertyGetX(prop: property): string
export function icalpropertyGetXName(prop: property): string
export function icalpropertyGetXlicclass(prop: property): object | null
export function icalpropertyGetXlicclustercount(prop: property): string
export function icalpropertyGetXlicerror(prop: property): string
export function icalpropertyGetXlicmimecharset(prop: property): string
export function icalpropertyGetXlicmimecid(prop: property): string
export function icalpropertyGetXlicmimecontenttype(prop: property): string
export function icalpropertyGetXlicmimeencoding(prop: property): string
export function icalpropertyGetXlicmimefilename(prop: property): string
export function icalpropertyGetXlicmimeoptinfo(prop: property): string
export function icalpropertyIsa(property: property): property_kind
export function icalpropertyIsaProperty(property?: object | null): number
export function icalpropertyKindAndStringToEnum(kind: number, str: string): number
export function icalpropertyKindIsValid(kind: property_kind): number
export function icalpropertyKindToString(kind: property_kind): string
export function icalpropertyKindToValueKind(kind: property_kind): value_kind
export function icalpropertyMethodToString(method: property_method): string
export function icalpropertyNormalize(prop: property): void
export function icalpropertyRecurrenceIsExcluded(comp: component, dtstart?: object | null, recurtime?: object | null): number
export function icalpropertyRemoveParameterByKind(prop: property, kind: parameter_kind): void
export function icalpropertyRemoveParameterByName(prop: property, name: string): void
export function icalpropertyRemoveParameterByRef(prop: property, param: parameter): void
export function icalpropertySetAcceptresponse(prop: property, v: string): void
export function icalpropertySetAcknowledged(prop: property, v?: object | null): void
export function icalpropertySetAction(prop: property, v?: object | null): void
export function icalpropertySetAllowconflict(prop: property, v: string): void
export function icalpropertySetAttach(prop: property, v: attach): void
export function icalpropertySetAttendee(prop: property, v: string): void
export function icalpropertySetBusytype(prop: property, v?: object | null): void
export function icalpropertySetCalid(prop: property, v: string): void
export function icalpropertySetCalmaster(prop: property, v: string): void
export function icalpropertySetCalscale(prop: property, v: string): void
export function icalpropertySetCapversion(prop: property, v: string): void
export function icalpropertySetCarid(prop: property, v: string): void
export function icalpropertySetCarlevel(prop: property, v?: object | null): void
export function icalpropertySetCategories(prop: property, v: string): void
export function icalpropertySetClass(prop: property, v?: object | null): void
export function icalpropertySetCmd(prop: property, v?: object | null): void
export function icalpropertySetColor(prop: property, v: string): void
export function icalpropertySetComment(prop: property, v: string): void
export function icalpropertySetCompleted(prop: property, v?: object | null): void
export function icalpropertySetComponents(prop: property, v: string): void
export function icalpropertySetConference(prop: property, v: string): void
export function icalpropertySetContact(prop: property, v: string): void
export function icalpropertySetCreated(prop: property, v?: object | null): void
export function icalpropertySetCsid(prop: property, v: string): void
export function icalpropertySetDatemax(prop: property, v?: object | null): void
export function icalpropertySetDatemin(prop: property, v?: object | null): void
export function icalpropertySetDecreed(prop: property, v: string): void
export function icalpropertySetDefaultcharset(prop: property, v: string): void
export function icalpropertySetDefaultlocale(prop: property, v: string): void
export function icalpropertySetDefaulttzid(prop: property, v: string): void
export function icalpropertySetDefaultvcars(prop: property, v: string): void
export function icalpropertySetDeny(prop: property, v: string): void
export function icalpropertySetDescription(prop: property, v: string): void
export function icalpropertySetDtend(prop: property, v?: object | null): void
export function icalpropertySetDtstamp(prop: property, v?: object | null): void
export function icalpropertySetDtstart(prop: property, v?: object | null): void
export function icalpropertySetDue(prop: property, v?: object | null): void
export function icalpropertySetDuration(prop: property, v?: object | null): void
export function icalpropertySetEstimatedduration(prop: property, v?: object | null): void
export function icalpropertySetExdate(prop: property, v?: object | null): void
export function icalpropertySetExpand(prop: property, v: number): void
export function icalpropertySetExrule(prop: property, v?: object | null): void
export function icalpropertySetFreebusy(prop: property, v?: object | null): void
export function icalpropertySetGeo(prop: property, v?: object | null): void
export function icalpropertySetGrant(prop: property, v: string): void
export function icalpropertySetImage(prop: property, v: attach): void
export function icalpropertySetItipversion(prop: property, v: string): void
export function icalpropertySetLastmodified(prop: property, v?: object | null): void
export function icalpropertySetLocation(prop: property, v: string): void
export function icalpropertySetMaxcomponentsize(prop: property, v: number): void
export function icalpropertySetMaxdate(prop: property, v?: object | null): void
export function icalpropertySetMaxresults(prop: property, v: number): void
export function icalpropertySetMaxresultssize(prop: property, v: number): void
export function icalpropertySetMethod(prop: property, v?: object | null): void
export function icalpropertySetMindate(prop: property, v?: object | null): void
export function icalpropertySetMultipart(prop: property, v: string): void
export function icalpropertySetName(prop: property, v: string): void
export function icalpropertySetOrganizer(prop: property, v: string): void
export function icalpropertySetOwner(prop: property, v: string): void
export function icalpropertySetParameter(prop: property, parameter: parameter): void
export function icalpropertySetParameterFromString(prop: property, name: string, value: string): void
export function icalpropertySetParent(property: property, component: component): void
export function icalpropertySetPatchdelete(prop: property, v: string): void
export function icalpropertySetPatchorder(prop: property, v: number): void
export function icalpropertySetPatchparameter(prop: property, v: string): void
export function icalpropertySetPatchtarget(prop: property, v: string): void
export function icalpropertySetPatchversion(prop: property, v: string): void
export function icalpropertySetPercentcomplete(prop: property, v: number): void
export function icalpropertySetPermission(prop: property, v: string): void
export function icalpropertySetPollcompletion(prop: property, v?: object | null): void
export function icalpropertySetPollitemid(prop: property, v: number): void
export function icalpropertySetPollmode(prop: property, v?: object | null): void
export function icalpropertySetPollproperties(prop: property, v: string): void
export function icalpropertySetPollwinner(prop: property, v: number): void
export function icalpropertySetPriority(prop: property, v: number): void
export function icalpropertySetProdid(prop: property, v: string): void
export function icalpropertySetQuery(prop: property, v: string): void
export function icalpropertySetQueryid(prop: property, v: string): void
export function icalpropertySetQuerylevel(prop: property, v?: object | null): void
export function icalpropertySetQueryname(prop: property, v: string): void
export function icalpropertySetRdate(prop: property, v?: object | null): void
export function icalpropertySetRecuraccepted(prop: property, v: string): void
export function icalpropertySetRecurexpand(prop: property, v: string): void
export function icalpropertySetRecurlimit(prop: property, v: string): void
export function icalpropertySetRecurrenceid(prop: property, v?: object | null): void
export function icalpropertySetRefreshinterval(prop: property, v?: object | null): void
export function icalpropertySetRelatedto(prop: property, v: string): void
export function icalpropertySetRelcalid(prop: property, v: string): void
export function icalpropertySetRepeat(prop: property, v: number): void
export function icalpropertySetReplyurl(prop: property, v: string): void
export function icalpropertySetRequeststatus(prop: property, v?: object | null): void
export function icalpropertySetResources(prop: property, v: string): void
export function icalpropertySetResponse(prop: property, v: number): void
export function icalpropertySetRestriction(prop: property, v: string): void
export function icalpropertySetRrule(prop: property, v?: object | null): void
export function icalpropertySetScope(prop: property, v: string): void
export function icalpropertySetSequence(prop: property, v: number): void
export function icalpropertySetSource(prop: property, v: string): void
export function icalpropertySetStatus(prop: property, v?: object | null): void
export function icalpropertySetStoresexpanded(prop: property, v: string): void
export function icalpropertySetSummary(prop: property, v: string): void
export function icalpropertySetTarget(prop: property, v: string): void
export function icalpropertySetTaskmode(prop: property, v?: object | null): void
export function icalpropertySetTransp(prop: property, v?: object | null): void
export function icalpropertySetTrigger(prop: property, v?: object | null): void
export function icalpropertySetTzid(prop: property, v: string): void
export function icalpropertySetTzidaliasof(prop: property, v: string): void
export function icalpropertySetTzname(prop: property, v: string): void
export function icalpropertySetTzoffsetfrom(prop: property, v: number): void
export function icalpropertySetTzoffsetto(prop: property, v: number): void
export function icalpropertySetTzuntil(prop: property, v?: object | null): void
export function icalpropertySetTzurl(prop: property, v: string): void
export function icalpropertySetUid(prop: property, v: string): void
export function icalpropertySetUrl(prop: property, v: string): void
export function icalpropertySetValue(prop: property, value: value): void
export function icalpropertySetValueFromString(prop: property, value: string, kind: string): void
export function icalpropertySetVersion(prop: property, v: string): void
export function icalpropertySetVoter(prop: property, v: string): void
export function icalpropertySetX(prop: property, v: string): void
export function icalpropertySetXName(prop: property, name: string): void
export function icalpropertySetXlicclass(prop: property, v?: object | null): void
export function icalpropertySetXlicclustercount(prop: property, v: string): void
export function icalpropertySetXlicerror(prop: property, v: string): void
export function icalpropertySetXlicmimecharset(prop: property, v: string): void
export function icalpropertySetXlicmimecid(prop: property, v: string): void
export function icalpropertySetXlicmimecontenttype(prop: property, v: string): void
export function icalpropertySetXlicmimeencoding(prop: property, v: string): void
export function icalpropertySetXlicmimefilename(prop: property, v: string): void
export function icalpropertySetXlicmimeoptinfo(prop: property, v: string): void
export function icalpropertyStatusToString(arg0: property_status): string
export function icalpropertyStringToKind(string: string): property_kind
export function icalpropertyStringToMethod(str: string): property_method
export function icalpropertyStringToStatus(string: string): property_status
export function icalpropertyValueKindToKind(kind: value_kind): property_kind
export function icalrecurExpandRecurrence(rule: string, start: number, count: number, array: number): number
export function icalrecurFreqToString(kind: recurrencetype_frequency): string
export function icalrecurIteratorFree(arg0: recur_iterator): void
export function icalrecurIteratorNext(arg0: recur_iterator): object | null
export function icalrecurIteratorPrev(arg0: recur_iterator): object | null
export function icalrecurIteratorSetEnd(impl: recur_iterator, end?: object | null): number
export function icalrecurIteratorSetRange(impl: recur_iterator, from?: object | null, to?: object | null): number
export function icalrecurIteratorSetStart(impl: recur_iterator, start?: object | null): number
export function icalrecurSkipToString(kind: recurrencetype_skip): string
export function icalrecurStringToFreq(str: string): recurrencetype_frequency
export function icalrecurStringToSkip(str: string): recurrencetype_skip
export function icalrecurStringToWeekday(str: string): recurrencetype_weekday
export function icalrecurWeekdayToString(kind: recurrencetype_weekday): string
export function icalrecurrencetypeAsString(recur?: object | null): string
export function icalrecurrencetypeAsStringR(recur?: object | null): string
export function icalrecurrencetypeClear(r?: object | null): void
export function icalrecurrencetypeDayDayOfWeek(day: number): object | null
export function icalrecurrencetypeDayPosition(day: number): number
export function icalrecurrencetypeEncodeDay(weekday: object | null, position: number): number
export function icalrecurrencetypeEncodeMonth(month: number, isLeap: number): number
export function icalrecurrencetypeFromString(str: string): object | null
export function icalrecurrencetypeMonthIsLeap(month: number): number
export function icalrecurrencetypeMonthMonth(month: number): number
export function icalrecurrencetypeRscaleIsSupported(): number
export function icalreqstattypeAsString(arg0?: object | null): string
export function icalreqstattypeAsStringR(arg0?: object | null): string
export function icalreqstattypeFromString(str: string): object | null
export function icalrestrictionCheck(comp: component): number
export function icalrestrictionCompare(restr: restriction_kind, count: number): number
export function icaltimeAdd(t?: object | null, d?: object | null): object | null
export function icaltimeAdjust(tt: object | null, days: number, hours: number, minutes: number, seconds: number): void
export function icaltimeAsIcalString(tt?: object | null): string
export function icaltimeAsIcalStringR(tt?: object | null): string
export function icaltimeAsTimet(arg0?: object | null): number
export function icaltimeAsTimetWithZone(tt: object | null, zone: timezone): number
export function icaltimeCompare(a?: object | null, b?: object | null): number
export function icaltimeCompareDateOnly(a?: object | null, b?: object | null): number
export function icaltimeCompareDateOnlyTz(a: object | null, b: object | null, tz: timezone): number
export function icaltimeConvertToZone(tt: object | null, zone: timezone): object | null
export function icaltimeCurrentTimeWithZone(zone: timezone): object | null
export function icaltimeDayOfWeek(t?: object | null): number
export function icaltimeDayOfYear(t?: object | null): number
export function icaltimeDaysInMonth(month: number, year: number): number
export function icaltimeDaysInYear(year: number): number
export function icaltimeFromDayOfYear(doy: number, year: number): object | null
export function icaltimeFromString(str: string): object | null
export function icaltimeFromTimetWithZone(tm: number, isDate: number, zone: timezone): object | null
export function icaltimeGetTimezone(t?: object | null): timezone
export function icaltimeGetTzid(t?: object | null): string
export function icaltimeIsDate(t?: object | null): number
export function icaltimeIsLeapYear(year: number): number
export function icaltimeIsNullTime(t?: object | null): number
export function icaltimeIsUtc(t?: object | null): number
export function icaltimeIsValidTime(t?: object | null): number
export function icaltimeNormalize(t?: object | null): object | null
export function icaltimeNullDate(): object | null
export function icaltimeNullTime(): object | null
export function icaltimeSetTimezone(t: object | null, zone: timezone): object | null
export function icaltimeSpanContains(s: time_span, container: time_span): number
export function icaltimeSpanNew(dtstart: object | null, dtend: object | null, isBusy: number): object | null
export function icaltimeSpanOverlaps(s1: time_span, s2: time_span): number
export function icaltimeStartDoyWeek(t: object | null, fdow: number): number
export function icaltimeSubtract(t1?: object | null, t2?: object | null): object | null
export function icaltimeToday(): object | null
export function icaltimeWeekNumber(t?: object | null): number
export function icaltimezoneArrayAppendFromVtimezone(timezones: array, child: component): void
export function icaltimezoneArrayFree(timezones: array): void
export function icaltimezoneConvertTime(tt: object | null, fromZone: timezone, toZone: timezone): void
export function icaltimezoneDumpChanges(zone: timezone, maxYear: number, fp?: object | null): number
export function icaltimezoneExpandVtimezone(comp: component, endYear: number, changes: array): void
export function icaltimezoneFree(zone: timezone, freeStruct: number): void
export function icaltimezoneFreeBuiltinTimezones(): void
export function icaltimezoneGetBuiltinTzdata(): number
export function icaltimezoneGetDisplayName(zone: timezone): string
export function icaltimezoneGetLatitude(zone: timezone): number
export function icaltimezoneGetLocation(zone: timezone): string
export function icaltimezoneGetLocationFromVtimezone(component: component): string
export function icaltimezoneGetLongitude(zone: timezone): number
export function icaltimezoneGetTzid(zone: timezone): string
export function icaltimezoneGetTznames(zone: timezone): string
export function icaltimezoneGetTznamesFromVtimezone(component: component): string
export function icaltimezoneGetUtcOffset(zone: timezone, tt: object | null, isDaylight: number): number
export function icaltimezoneGetUtcOffsetOfUtcTime(zone: timezone, tt: object | null, isDaylight: number): number
export function icaltimezoneReleaseZoneTab(): void
export function icaltimezoneSetBuiltinTzdata(set: number): void
export function icaltimezoneSetComponent(zone: timezone, comp: component): number
export function icaltimezoneSetTzidPrefix(newPrefix: string): void
export function icaltimezoneTruncateVtimezone(vtz: component, start: timetype, end: timetype, msCompatible: number): void
export function icaltimezoneTzidPrefix(): string
export function icaltriggertypeFromInt(reltime: number): object | null
export function icaltriggertypeFromString(str: string): object | null
export function icaltriggertypeIsBadTrigger(tr?: object | null): number
export function icaltriggertypeIsNullTrigger(tr?: object | null): number
export function icaltzutilGetZoneDirectory(): string
export function icaltzutilSetZoneDirectory(zonepath: string): void
export function icalvalueAsIcalString(value: value): string
export function icalvalueAsIcalStringR(value: value): string
export function icalvalueCompare(a: value, b: value): parameter_xliccomparetype
export function icalvalueDecodeIcalString(szText: string, szDecText: string, nMaxBufferLen: number): number
export function icalvalueEncodeIcalString(szText: string, szEncText: string, maxBufferLen: number): number
export function icalvalueFree(value: value): void
export function icalvalueGetAction(value: value): object | null
export function icalvalueGetBinary(value: value): string
export function icalvalueGetBoolean(value: value): number
export function icalvalueGetBusytype(value: value): object | null
export function icalvalueGetCaladdress(value: value): string
export function icalvalueGetCarlevel(value: value): object | null
export function icalvalueGetClass(value: value): object | null
export function icalvalueGetCmd(value: value): object | null
export function icalvalueGetDate(value: value): object | null
export function icalvalueGetDatetime(value: value): object | null
export function icalvalueGetDatetimedate(value: value): object | null
export function icalvalueGetDatetimeperiod(value: value): object | null
export function icalvalueGetDuration(value: value): object | null
export function icalvalueGetFloat(value: value): number
export function icalvalueGetGeo(value: value): object | null
export function icalvalueGetInteger(value: value): number
export function icalvalueGetMethod(value: value): object | null
export function icalvalueGetPeriod(value: value): object | null
export function icalvalueGetPollcompletion(value: value): object | null
export function icalvalueGetPollmode(value: value): object | null
export function icalvalueGetQuery(value: value): string
export function icalvalueGetQuerylevel(value: value): object | null
export function icalvalueGetRecur(value: value): object | null
export function icalvalueGetRequeststatus(value: value): object | null
export function icalvalueGetStatus(value: value): object | null
export function icalvalueGetString(value: value): string
export function icalvalueGetTaskmode(value: value): object | null
export function icalvalueGetText(value: value): string
export function icalvalueGetTransp(value: value): object | null
export function icalvalueGetTrigger(value: value): object | null
export function icalvalueGetUri(value: value): string
export function icalvalueGetUtcoffset(value: value): number
export function icalvalueGetX(value: value): string
export function icalvalueGetXlicclass(value: value): object | null
export function icalvalueIsValid(value: value): number
export function icalvalueIsa(value: value): value_kind
export function icalvalueIsaValue(arg0?: object | null): number
export function icalvalueKindIsValid(kind: value_kind): number
export function icalvalueKindToString(kind: value_kind): string
export function icalvalueResetKind(value: value): void
export function icalvalueSetAction(value: value, v?: object | null): void
export function icalvalueSetAttach(value: value, attach: attach): void
export function icalvalueSetBinary(value: value, v: string): void
export function icalvalueSetBoolean(value: value, v: number): void
export function icalvalueSetBusytype(value: value, v?: object | null): void
export function icalvalueSetCaladdress(value: value, v: string): void
export function icalvalueSetCarlevel(value: value, v?: object | null): void
export function icalvalueSetClass(value: value, v?: object | null): void
export function icalvalueSetCmd(value: value, v?: object | null): void
export function icalvalueSetDate(value: value, v?: object | null): void
export function icalvalueSetDatetime(value: value, v?: object | null): void
export function icalvalueSetDatetimedate(value: value, v?: object | null): void
export function icalvalueSetDatetimeperiod(value: value, v?: object | null): void
export function icalvalueSetDuration(value: value, v?: object | null): void
export function icalvalueSetFloat(value: value, v: number): void
export function icalvalueSetGeo(value: value, v?: object | null): void
export function icalvalueSetInteger(value: value, v: number): void
export function icalvalueSetMethod(value: value, v?: object | null): void
export function icalvalueSetParent(value: value, property: property): void
export function icalvalueSetPeriod(value: value, v?: object | null): void
export function icalvalueSetPollcompletion(value: value, v?: object | null): void
export function icalvalueSetPollmode(value: value, v?: object | null): void
export function icalvalueSetQuery(value: value, v: string): void
export function icalvalueSetQuerylevel(value: value, v?: object | null): void
export function icalvalueSetRecur(value: value, v?: object | null): void
export function icalvalueSetRequeststatus(value: value, v?: object | null): void
export function icalvalueSetStatus(value: value, v?: object | null): void
export function icalvalueSetString(value: value, v: string): void
export function icalvalueSetTaskmode(value: value, v?: object | null): void
export function icalvalueSetText(value: value, v: string): void
export function icalvalueSetTransp(value: value, v?: object | null): void
export function icalvalueSetTrigger(value: value, v?: object | null): void
export function icalvalueSetUri(value: value, v: string): void
export function icalvalueSetUtcoffset(value: value, v: number): void
export function icalvalueSetX(value: value, v: string): void
export function icalvalueSetXlicclass(value: value, v?: object | null): void
export function icalvalueStringToKind(str: string): value_kind
export function printDateToString(str: string, data?: object | null): void
export function printDatetimeToString(str: string, data?: object | null): void
export function pvlClear(arg0: pvl_list): void
export function pvlCount(arg0: pvl_list): number
export function pvlData(arg0: pvl_elem): object | null
export function pvlFree(arg0: pvl_list): void
export function pvlInsertAfter(l: pvl_list, e: pvl_elem, d?: object | null): void
export function pvlInsertBefore(l: pvl_list, e: pvl_elem, d?: object | null): void
export function pvlPop(l: pvl_list): object | null
export function pvlPush(l: pvl_list, d?: object | null): void
export function pvlRemove(arg0: pvl_list, arg1: pvl_elem): object | null
export function pvlShift(l: pvl_list): object | null
export function pvlUnshift(l: pvl_list, d?: object | null): void
export function setInvalidRruleHandlingSetting(newSetting: _invalid_rrule_handling): void
export function setUnknownTokenHandlingSetting(newSetting: _unknown_token_handling): void
export function setZoneDirectory(path: string): void
export function sspmEncodingString(type?: object | null): string
export function sspmFreeParts(parts: object | null, maxParts: number): void
export function sspmMajorTypeString(type?: object | null): string
export function sspmMinorTypeString(type?: object | null): string
export function sspmParseMime(parts: object | null, maxParts: number, actions?: object | null, getString?: object | null, getStringData?: object | null, firstHeader?: object | null): number
export function sspmWriteMime(parts: object | null, numParts: number, outputString: string, header: string): number
export interface icalattach_free_fn_t {
    (data: string): void
}
export interface icalparser_line_gen_func {
    (s: string, size: number, d?: object | null): string
}
export interface pvl_applyf {
    (a?: object | null, b?: object | null): void
}
export interface pvl_comparef {
    (a?: object | null, b?: object | null): number
}
export interface pvl_findf {
    (a?: object | null, b?: object | null): number
}
export class array {
    /* Fields of ICal.array */
    elementSize: number
    incrementSize: number
    numElements: number
    spaceAllocated: number
    chunks: object
    static name: string
}
export class attach {
    static name: string
}
export class compiter {
    /* Fields of ICal.compiter */
    kind: component_kind
    iter: pvl_elem
    static name: string
}
export class component {
    static name: string
}
export class datetimeperiodtype {
    /* Fields of ICal.datetimeperiodtype */
    time: object
    period: object
    static name: string
}
export class durationtype {
    /* Fields of ICal.durationtype */
    isNeg: number
    days: number
    weeks: number
    hours: number
    minutes: number
    seconds: number
    static name: string
}
export class geotype {
    /* Fields of ICal.geotype */
    lat: number
    lon: number
    static name: string
}
export class parameter {
    static name: string
}
export class parser {
    static name: string
}
export class periodtype {
    /* Fields of ICal.periodtype */
    start: object
    end: object
    duration: object
    static name: string
}
export class property {
    static name: string
}
export class pvl_elem {
    static name: string
}
export class pvl_elem_t {
    /* Fields of ICal.pvl_elem_t */
    mAGIC: number
    d: object
    next: object
    prior: object
    static name: string
}
export class pvl_list {
    static name: string
}
export class recur_iterator {
    static name: string
}
export class recurrencetype {
    /* Fields of ICal.recurrencetype */
    freq: recurrencetype_frequency
    until: object
    count: number
    interval: number
    weekStart: recurrencetype_weekday
    bySecond: number[]
    byMinute: number[]
    byHour: number[]
    byDay: number[]
    byMonthDay: number[]
    byYearDay: number[]
    byWeekNo: number[]
    byMonth: number[]
    bySetPos: number[]
    rscale: string
    skip: recurrencetype_skip
    static name: string
}
export class reqstattype {
    /* Fields of ICal.reqstattype */
    code: requeststatus
    desc: string
    debug: string
    static name: string
}
export class sspm_action_map {
    /* Fields of ICal.sspm_action_map */
    major: object
    minor: object
    newPart: () => object
    addLine: (part: object, header: object, line: string, size: number) => void
    endPart: (part: object) => object
    freePart: (part: object) => void
    static name: string
}
export class sspm_header {
    /* Fields of ICal.sspm_header */
    def: number
    boundary: string
    major: object
    minor: object
    minorText: string
    contentTypeParams: string
    charset: string
    encoding: object
    filename: string
    contentId: string
    error: object
    errorText: string
    static name: string
}
export class sspm_part {
    /* Fields of ICal.sspm_part */
    header: object
    level: number
    dataSize: number
    data: object
    static name: string
}
export class time_span {
    /* Fields of ICal.time_span */
    start: number
    end: number
    isBusy: number
    static name: string
}
export class timetype {
    /* Fields of ICal.timetype */
    year: number
    month: number
    day: number
    hour: number
    minute: number
    second: number
    isDate: number
    isDaylight: number
    zone: timezone
    static name: string
}
export class timezone {
    static name: string
}
export class triggertype {
    /* Fields of ICal.triggertype */
    time: object
    duration: object
    static name: string
}
export class value {
    static name: string
}
}