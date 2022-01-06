/**
 * ICal-3.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace ICal {

enum _unknown_token_handling {
    ASSUME_IANA_TOKEN,
    DISCARD_TOKEN,
    TREAT_AS_ERROR,
}
enum component_kind {
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
enum errorenum {
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
enum errorstate {
    FATAL,
    NONFATAL,
    DEFAULT,
    UNKNOWN,
}
enum parameter_action {
    X,
    ASK,
    ABORT,
    NONE,
}
enum parameter_cutype {
    X,
    INDIVIDUAL,
    GROUP,
    RESOURCE,
    ROOM,
    UNKNOWN,
    NONE,
}
enum parameter_display {
    X,
    BADGE,
    GRAPHIC,
    FULLSIZE,
    THUMBNAIL,
    NONE,
}
enum parameter_enable {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum parameter_encoding {
    X,
    /* 8BIT (invalid, starts with a number) */
    BASE64,
    NONE,
}
enum parameter_fbtype {
    X,
    FREE,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
enum parameter_feature {
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
enum parameter_kind {
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
enum parameter_local {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum parameter_partstat {
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
enum parameter_patchaction {
    X,
    CREATE,
    BYNAME,
    BYVALUE,
    BYPARAM,
    NONE,
}
enum parameter_range {
    X,
    THISANDPRIOR,
    THISANDFUTURE,
    NONE,
}
enum parameter_related {
    X,
    START,
    END,
    NONE,
}
enum parameter_reltype {
    X,
    PARENT,
    CHILD,
    SIBLING,
    POLL,
    NONE,
}
enum parameter_required {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum parameter_role {
    X,
    CHAIR,
    REQPARTICIPANT,
    OPTPARTICIPANT,
    NONPARTICIPANT,
    NONE,
}
enum parameter_rsvp {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum parameter_scheduleagent {
    X,
    SERVER,
    CLIENT,
    NONE,
}
enum parameter_scheduleforcesend {
    X,
    REQUEST,
    REPLY,
    NONE,
}
enum parameter_stayinformed {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum parameter_substate {
    X,
    OK,
    ERROR,
    SUSPENDED,
    NONE,
}
enum parameter_value {
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
enum parameter_xliccomparetype {
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
enum parameter_xlicerrortype {
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
enum parser_state {
    ERROR,
    SUCCESS,
    BEGIN_COMP,
    END_COMP,
    IN_PROGRESS,
}
enum property_action {
    X,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    NONE,
}
enum property_busytype {
    X,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
enum property_carlevel {
    X,
    CARNONE,
    CARMIN,
    CARFULL1,
    NONE,
}
enum property_class {
    X,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    NONE,
}
enum property_cmd {
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
enum property_kind {
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
enum property_method {
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
enum property_pollcompletion {
    X,
    SERVER,
    SERVERSUBMIT,
    SERVERCHOICE,
    CLIENT,
    NONE,
}
enum property_pollmode {
    X,
    BASIC,
    NONE,
}
enum property_querylevel {
    X,
    CALQL1,
    CALQLNONE,
    NONE,
}
enum property_status {
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
enum property_taskmode {
    X,
    AUTOMATICCOMPLETION,
    AUTOMATICFAILURE,
    AUTOMATICSTATUS,
    NONE,
}
enum property_transp {
    X,
    OPAQUE,
    OPAQUENOCONFLICT,
    TRANSPARENT,
    TRANSPARENTNOCONFLICT,
    NONE,
}
enum property_xlicclass {
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
enum recurrencetype_frequency {
    SECONDLY_RECURRENCE,
    MINUTELY_RECURRENCE,
    HOURLY_RECURRENCE,
    DAILY_RECURRENCE,
    WEEKLY_RECURRENCE,
    MONTHLY_RECURRENCE,
    YEARLY_RECURRENCE,
    NO_RECURRENCE,
}
enum recurrencetype_skip {
    BACKWARD,
    FORWARD,
    OMIT,
    UNDEFINED,
}
enum recurrencetype_weekday {
    NO_WEEKDAY,
    SUNDAY_WEEKDAY,
    MONDAY_WEEKDAY,
    TUESDAY_WEEKDAY,
    WEDNESDAY_WEEKDAY,
    THURSDAY_WEEKDAY,
    FRIDAY_WEEKDAY,
    SATURDAY_WEEKDAY,
}
enum requeststatus {
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
enum restriction_kind {
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
enum value_kind {
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
function bt(): void
function decodeBase64(dest: string, src: string, size: number): string
function decodeQuotedPrintable(dest: string, src: string, size: number): string
function freeZoneDirectory(): void
function getUnknownTokenHandlingSetting(): _unknown_token_handling
function icalarrayAppend(array: array, element?: object | null): void
function icalarrayElementAt(array: array, position: number): object | null
function icalarrayFree(array: array): void
function icalarrayRemoveElementAt(array: array, position: number): void
function icalarraySort(array: array, compare?: object | null): void
function icalattachGetData(attach: attach): number
function icalattachGetIsUrl(attach: attach): number
function icalattachGetUrl(attach: attach): string
function icalattachRef(attach: attach): void
function icalattachUnref(attach: attach): void
function icalcomponentAddComponent(parent: component, child: component): void
function icalcomponentAddProperty(component: component, property: property): void
function icalcomponentAsIcalString(component: component): string
function icalcomponentAsIcalStringR(component: component): string
function icalcomponentCheckRestrictions(comp: component): number
function icalcomponentConvertErrors(component: component): void
function icalcomponentCountComponents(component: component, kind: component_kind): number
function icalcomponentCountErrors(component: component): number
function icalcomponentCountProperties(component: component, kind: property_kind): number
function icalcomponentForeachRecurrence(comp: component, start?: object | null, end?: object | null, callback?: object | null, callbackData?: object | null): void
function icalcomponentForeachTzid(comp: component, callback?: object | null, callbackData?: object | null): void
function icalcomponentFree(component: component): void
function icalcomponentGetComment(comp: component): string
function icalcomponentGetDescription(comp: component): string
function icalcomponentGetDtend(comp: component): object | null
function icalcomponentGetDtstamp(comp: component): object | null
function icalcomponentGetDtstart(comp: component): object | null
function icalcomponentGetDue(comp: component): object | null
function icalcomponentGetDuration(comp: component): object | null
function icalcomponentGetLocation(comp: component): string
function icalcomponentGetMethod(comp: component): property_method
function icalcomponentGetRecurrenceid(comp: component): object | null
function icalcomponentGetRelcalid(comp: component): string
function icalcomponentGetSequence(comp: component): number
function icalcomponentGetSpan(comp: component): object | null
function icalcomponentGetStatus(comp: component): object | null
function icalcomponentGetSummary(comp: component): string
function icalcomponentGetUid(comp: component): string
function icalcomponentIsValid(component: component): number
function icalcomponentIsa(component: component): component_kind
function icalcomponentIsaComponent(component?: object | null): number
function icalcomponentKindIsValid(kind: component_kind): number
function icalcomponentKindToString(kind: component_kind): string
function icalcomponentMergeComponent(comp: component, compToMerge: component): void
function icalcomponentNormalize(comp: component): void
function icalcomponentRemoveComponent(parent: component, child: component): void
function icalcomponentRemoveProperty(component: component, property: property): void
function icalcomponentSetComment(comp: component, v: string): void
function icalcomponentSetDescription(comp: component, v: string): void
function icalcomponentSetDtend(comp: component, v?: object | null): void
function icalcomponentSetDtstamp(comp: component, v?: object | null): void
function icalcomponentSetDtstart(comp: component, v?: object | null): void
function icalcomponentSetDue(comp: component, v?: object | null): void
function icalcomponentSetDuration(comp: component, v?: object | null): void
function icalcomponentSetLocation(comp: component, v: string): void
function icalcomponentSetMethod(comp: component, method: property_method): void
function icalcomponentSetParent(component: component, parent: component): void
function icalcomponentSetRecurrenceid(comp: component, v?: object | null): void
function icalcomponentSetRelcalid(comp: component, v: string): void
function icalcomponentSetSequence(comp: component, v: number): void
function icalcomponentSetStatus(comp: component, v?: object | null): void
function icalcomponentSetSummary(comp: component, v: string): void
function icalcomponentSetUid(comp: component, v: string): void
function icalcomponentStringToKind(string: string): component_kind
function icalcomponentStripErrors(component: component): void
function icaldurationtypeAsIcalString(d?: object | null): string
function icaldurationtypeAsIcalStringR(d?: object | null): string
function icaldurationtypeAsInt(duration?: object | null): number
function icaldurationtypeBadDuration(): object | null
function icaldurationtypeFromInt(t: number): object | null
function icaldurationtypeFromString(dur: string): object | null
function icaldurationtypeIsBadDuration(d?: object | null): number
function icaldurationtypeIsNullDuration(d?: object | null): number
function icaldurationtypeNullDuration(): object | null
function icalenumNumToReqstat(major: number, minor: number): requeststatus
function icalenumReqstatCode(stat: requeststatus): string
function icalenumReqstatCodeR(stat: requeststatus): string
function icalenumReqstatDesc(stat: requeststatus): string
function icalenumReqstatMajor(stat: requeststatus): number
function icalenumReqstatMinor(stat: requeststatus): number
function icalerrnoReturn(): errorenum
function icalerrorClearErrno(): void
function icalerrorCrashHere(): void
function icalerrorErrorFromString(str: string): errorenum
function icalerrorGetErrorState(error: errorenum): errorstate
function icalerrorGetErrorsAreFatal(): number
function icalerrorPerror(): string
function icalerrorRestore(error: string, es: errorstate): void
function icalerrorSetErrno(x: errorenum): void
function icalerrorSetErrorState(error: errorenum, state: errorstate): void
function icalerrorSetErrorsAreFatal(fatal: number): void
function icalerrorStopHere(): void
function icalerrorStrerror(e: errorenum): string
function icalerrorSupress(error: string): errorstate
function icallangbindAccessArray(array: number, index: number): number
function icallangbindFreeArray(array: number): void
function icallangbindNewArray(size: number): number
function icallangbindPropertyEvalString(prop: property, sep: string): string
function icallangbindPropertyEvalStringR(prop: property, sep: string): string
function icallangbindQuoteAsIcal(str: string): string
function icallangbindQuoteAsIcalR(str: string): string
function icallangbindStringToOpenFlag(str: string): number
function icalmemoryAddTmpBuffer(buf?: object | null): void
function icalmemoryAppendChar(buf: string, pos: string, bufSize: number, ch: number): void
function icalmemoryAppendString(buf: string, pos: string, bufSize: number, string: string): void
function icalmemoryFreeBuffer(buf?: object | null): void
function icalmemoryFreeRing(): void
function icalmemoryNewBuffer(size: number): object | null
function icalmemoryResizeBuffer(buf: object | null, size: number): object | null
function icalmemoryStrdup(s: string): string
function icalmemoryTmpBuffer(size: number): object | null
function icalmemoryTmpCopy(str: string): string
function icalparameterAsIcalString(parameter: parameter): string
function icalparameterAsIcalStringR(parameter: parameter): string
function icalparameterEnumToString(e: number): string
function icalparameterFree(parameter: parameter): void
function icalparameterGetActionparam(value: parameter): parameter_action
function icalparameterGetAltrep(value: parameter): string
function icalparameterGetCharset(value: parameter): string
function icalparameterGetCn(value: parameter): string
function icalparameterGetCutype(value: parameter): parameter_cutype
function icalparameterGetDelegatedfrom(value: parameter): string
function icalparameterGetDelegatedto(value: parameter): string
function icalparameterGetDir(value: parameter): string
function icalparameterGetDisplay(value: parameter): parameter_display
function icalparameterGetEmail(value: parameter): string
function icalparameterGetEnable(value: parameter): parameter_enable
function icalparameterGetEncoding(value: parameter): parameter_encoding
function icalparameterGetFbtype(value: parameter): parameter_fbtype
function icalparameterGetFeature(value: parameter): parameter_feature
function icalparameterGetFilename(value: parameter): string
function icalparameterGetFmttype(value: parameter): string
function icalparameterGetIana(value: parameter): string
function icalparameterGetIanaName(param: parameter): string
function icalparameterGetIanaValue(param: parameter): string
function icalparameterGetId(value: parameter): string
function icalparameterGetLabel(value: parameter): string
function icalparameterGetLanguage(value: parameter): string
function icalparameterGetLatency(value: parameter): string
function icalparameterGetLocal(value: parameter): parameter_local
function icalparameterGetLocalize(value: parameter): string
function icalparameterGetManagedid(value: parameter): string
function icalparameterGetMember(value: parameter): string
function icalparameterGetModified(value: parameter): string
function icalparameterGetOptions(value: parameter): string
function icalparameterGetPartstat(value: parameter): parameter_partstat
function icalparameterGetPatchaction(value: parameter): parameter_patchaction
function icalparameterGetPubliccomment(value: parameter): string
function icalparameterGetRange(value: parameter): parameter_range
function icalparameterGetReason(value: parameter): string
function icalparameterGetRelated(value: parameter): parameter_related
function icalparameterGetReltype(value: parameter): parameter_reltype
function icalparameterGetRequired(value: parameter): parameter_required
function icalparameterGetResponse(value: parameter): number
function icalparameterGetRole(value: parameter): parameter_role
function icalparameterGetRsvp(value: parameter): parameter_rsvp
function icalparameterGetScheduleagent(value: parameter): parameter_scheduleagent
function icalparameterGetScheduleforcesend(value: parameter): parameter_scheduleforcesend
function icalparameterGetSchedulestatus(value: parameter): string
function icalparameterGetSentby(value: parameter): string
function icalparameterGetSize(value: parameter): string
function icalparameterGetStayinformed(value: parameter): parameter_stayinformed
function icalparameterGetSubstate(value: parameter): parameter_substate
function icalparameterGetTzid(value: parameter): string
function icalparameterGetValue(value: parameter): parameter_value
function icalparameterGetX(value: parameter): string
function icalparameterGetXliccomparetype(value: parameter): parameter_xliccomparetype
function icalparameterGetXlicerrortype(value: parameter): parameter_xlicerrortype
function icalparameterGetXname(param: parameter): string
function icalparameterGetXvalue(param: parameter): string
function icalparameterHasSameName(param1: parameter, param2: parameter): number
function icalparameterIsa(parameter: parameter): parameter_kind
function icalparameterIsaParameter(param?: object | null): number
function icalparameterKindIsValid(kind: parameter_kind): number
function icalparameterKindToString(kind: parameter_kind): string
function icalparameterSetActionparam(value: parameter, v: parameter_action): void
function icalparameterSetAltrep(value: parameter, v: string): void
function icalparameterSetCharset(value: parameter, v: string): void
function icalparameterSetCn(value: parameter, v: string): void
function icalparameterSetCutype(value: parameter, v: parameter_cutype): void
function icalparameterSetDelegatedfrom(value: parameter, v: string): void
function icalparameterSetDelegatedto(value: parameter, v: string): void
function icalparameterSetDir(value: parameter, v: string): void
function icalparameterSetDisplay(value: parameter, v: parameter_display): void
function icalparameterSetEmail(value: parameter, v: string): void
function icalparameterSetEnable(value: parameter, v: parameter_enable): void
function icalparameterSetEncoding(value: parameter, v: parameter_encoding): void
function icalparameterSetFbtype(value: parameter, v: parameter_fbtype): void
function icalparameterSetFeature(value: parameter, v: parameter_feature): void
function icalparameterSetFilename(value: parameter, v: string): void
function icalparameterSetFmttype(value: parameter, v: string): void
function icalparameterSetIana(value: parameter, v: string): void
function icalparameterSetIanaName(param: parameter, v: string): void
function icalparameterSetIanaValue(param: parameter, v: string): void
function icalparameterSetId(value: parameter, v: string): void
function icalparameterSetLabel(value: parameter, v: string): void
function icalparameterSetLanguage(value: parameter, v: string): void
function icalparameterSetLatency(value: parameter, v: string): void
function icalparameterSetLocal(value: parameter, v: parameter_local): void
function icalparameterSetLocalize(value: parameter, v: string): void
function icalparameterSetManagedid(value: parameter, v: string): void
function icalparameterSetMember(value: parameter, v: string): void
function icalparameterSetModified(value: parameter, v: string): void
function icalparameterSetOptions(value: parameter, v: string): void
function icalparameterSetParent(param: parameter, property: property): void
function icalparameterSetPartstat(value: parameter, v: parameter_partstat): void
function icalparameterSetPatchaction(value: parameter, v: parameter_patchaction): void
function icalparameterSetPubliccomment(value: parameter, v: string): void
function icalparameterSetRange(value: parameter, v: parameter_range): void
function icalparameterSetReason(value: parameter, v: string): void
function icalparameterSetRelated(value: parameter, v: parameter_related): void
function icalparameterSetReltype(value: parameter, v: parameter_reltype): void
function icalparameterSetRequired(value: parameter, v: parameter_required): void
function icalparameterSetResponse(value: parameter, v: number): void
function icalparameterSetRole(value: parameter, v: parameter_role): void
function icalparameterSetRsvp(value: parameter, v: parameter_rsvp): void
function icalparameterSetScheduleagent(value: parameter, v: parameter_scheduleagent): void
function icalparameterSetScheduleforcesend(value: parameter, v: parameter_scheduleforcesend): void
function icalparameterSetSchedulestatus(value: parameter, v: string): void
function icalparameterSetSentby(value: parameter, v: string): void
function icalparameterSetSize(value: parameter, v: string): void
function icalparameterSetStayinformed(value: parameter, v: parameter_stayinformed): void
function icalparameterSetSubstate(value: parameter, v: parameter_substate): void
function icalparameterSetTzid(value: parameter, v: string): void
function icalparameterSetValue(value: parameter, v: parameter_value): void
function icalparameterSetX(value: parameter, v: string): void
function icalparameterSetXliccomparetype(value: parameter, v: parameter_xliccomparetype): void
function icalparameterSetXlicerrortype(value: parameter, v: parameter_xlicerrortype): void
function icalparameterSetXname(param: parameter, v: string): void
function icalparameterSetXvalue(param: parameter, v: string): void
function icalparameterStringToEnum(str: string): number
function icalparameterStringToKind(string: string): parameter_kind
function icalparameterValueToValueKind(value: parameter_value): value_kind
function icalparserFree(parser: parser): void
function icalparserGetState(parser: parser): parser_state
function icalparserSetGenData(parser: parser, data?: object | null): void
function icalparserStringLineGenerator(out: string, bufSize: number, d?: object | null): string
function icalperiodtypeAsIcalString(p?: object | null): string
function icalperiodtypeAsIcalStringR(p?: object | null): string
function icalperiodtypeFromString(str: string): object | null
function icalperiodtypeIsNullPeriod(p?: object | null): number
function icalperiodtypeIsValidPeriod(p?: object | null): number
function icalperiodtypeNullPeriod(): object | null
function icalpropertyAddParameter(prop: property, parameter: parameter): void
function icalpropertyAsIcalString(prop: property): string
function icalpropertyAsIcalStringR(prop: property): string
function icalpropertyCountParameters(prop: property): number
function icalpropertyEnumBelongsToProperty(kind: property_kind, e: number): number
function icalpropertyEnumToString(e: number): string
function icalpropertyEnumToStringR(e: number): string
function icalpropertyFree(prop: property): void
function icalpropertyGetAcceptresponse(prop: property): string
function icalpropertyGetAcknowledged(prop: property): object | null
function icalpropertyGetAction(prop: property): object | null
function icalpropertyGetAllowconflict(prop: property): string
function icalpropertyGetAttendee(prop: property): string
function icalpropertyGetBusytype(prop: property): object | null
function icalpropertyGetCalid(prop: property): string
function icalpropertyGetCalmaster(prop: property): string
function icalpropertyGetCalscale(prop: property): string
function icalpropertyGetCapversion(prop: property): string
function icalpropertyGetCarid(prop: property): string
function icalpropertyGetCarlevel(prop: property): object | null
function icalpropertyGetCategories(prop: property): string
function icalpropertyGetClass(prop: property): object | null
function icalpropertyGetCmd(prop: property): object | null
function icalpropertyGetColor(prop: property): string
function icalpropertyGetComment(prop: property): string
function icalpropertyGetCompleted(prop: property): object | null
function icalpropertyGetComponents(prop: property): string
function icalpropertyGetConference(prop: property): string
function icalpropertyGetContact(prop: property): string
function icalpropertyGetCreated(prop: property): object | null
function icalpropertyGetCsid(prop: property): string
function icalpropertyGetDatemax(prop: property): object | null
function icalpropertyGetDatemin(prop: property): object | null
function icalpropertyGetDatetimeWithComponent(prop: property, comp: component): object | null
function icalpropertyGetDecreed(prop: property): string
function icalpropertyGetDefaultcharset(prop: property): string
function icalpropertyGetDefaultlocale(prop: property): string
function icalpropertyGetDefaulttzid(prop: property): string
function icalpropertyGetDefaultvcars(prop: property): string
function icalpropertyGetDeny(prop: property): string
function icalpropertyGetDescription(prop: property): string
function icalpropertyGetDtend(prop: property): object | null
function icalpropertyGetDtstamp(prop: property): object | null
function icalpropertyGetDtstart(prop: property): object | null
function icalpropertyGetDue(prop: property): object | null
function icalpropertyGetDuration(prop: property): object | null
function icalpropertyGetEstimatedduration(prop: property): object | null
function icalpropertyGetExdate(prop: property): object | null
function icalpropertyGetExpand(prop: property): number
function icalpropertyGetExrule(prop: property): object | null
function icalpropertyGetFreebusy(prop: property): object | null
function icalpropertyGetGeo(prop: property): object | null
function icalpropertyGetGrant(prop: property): string
function icalpropertyGetItipversion(prop: property): string
function icalpropertyGetLastmodified(prop: property): object | null
function icalpropertyGetLocation(prop: property): string
function icalpropertyGetMaxcomponentsize(prop: property): number
function icalpropertyGetMaxdate(prop: property): object | null
function icalpropertyGetMaxresults(prop: property): number
function icalpropertyGetMaxresultssize(prop: property): number
function icalpropertyGetMethod(prop: property): object | null
function icalpropertyGetMindate(prop: property): object | null
function icalpropertyGetMultipart(prop: property): string
function icalpropertyGetName(prop: property): string
function icalpropertyGetOrganizer(prop: property): string
function icalpropertyGetOwner(prop: property): string
function icalpropertyGetParameterAsString(prop: property, name: string): string
function icalpropertyGetParameterAsStringR(prop: property, name: string): string
function icalpropertyGetPatchdelete(prop: property): string
function icalpropertyGetPatchorder(prop: property): number
function icalpropertyGetPatchparameter(prop: property): string
function icalpropertyGetPatchtarget(prop: property): string
function icalpropertyGetPatchversion(prop: property): string
function icalpropertyGetPercentcomplete(prop: property): number
function icalpropertyGetPermission(prop: property): string
function icalpropertyGetPollcompletion(prop: property): object | null
function icalpropertyGetPollitemid(prop: property): number
function icalpropertyGetPollmode(prop: property): object | null
function icalpropertyGetPollproperties(prop: property): string
function icalpropertyGetPollwinner(prop: property): number
function icalpropertyGetPriority(prop: property): number
function icalpropertyGetProdid(prop: property): string
function icalpropertyGetPropertyName(prop: property): string
function icalpropertyGetPropertyNameR(prop: property): string
function icalpropertyGetQuery(prop: property): string
function icalpropertyGetQueryid(prop: property): string
function icalpropertyGetQuerylevel(prop: property): object | null
function icalpropertyGetQueryname(prop: property): string
function icalpropertyGetRdate(prop: property): object | null
function icalpropertyGetRecuraccepted(prop: property): string
function icalpropertyGetRecurexpand(prop: property): string
function icalpropertyGetRecurlimit(prop: property): string
function icalpropertyGetRecurrenceid(prop: property): object | null
function icalpropertyGetRefreshinterval(prop: property): object | null
function icalpropertyGetRelatedto(prop: property): string
function icalpropertyGetRelcalid(prop: property): string
function icalpropertyGetRepeat(prop: property): number
function icalpropertyGetReplyurl(prop: property): string
function icalpropertyGetRequeststatus(prop: property): object | null
function icalpropertyGetResources(prop: property): string
function icalpropertyGetResponse(prop: property): number
function icalpropertyGetRestriction(prop: property): string
function icalpropertyGetRrule(prop: property): object | null
function icalpropertyGetScope(prop: property): string
function icalpropertyGetSequence(prop: property): number
function icalpropertyGetSource(prop: property): string
function icalpropertyGetStatus(prop: property): object | null
function icalpropertyGetStoresexpanded(prop: property): string
function icalpropertyGetSummary(prop: property): string
function icalpropertyGetTarget(prop: property): string
function icalpropertyGetTaskmode(prop: property): object | null
function icalpropertyGetTransp(prop: property): object | null
function icalpropertyGetTrigger(prop: property): object | null
function icalpropertyGetTzid(prop: property): string
function icalpropertyGetTzidaliasof(prop: property): string
function icalpropertyGetTzname(prop: property): string
function icalpropertyGetTzoffsetfrom(prop: property): number
function icalpropertyGetTzoffsetto(prop: property): number
function icalpropertyGetTzuntil(prop: property): object | null
function icalpropertyGetTzurl(prop: property): string
function icalpropertyGetUid(prop: property): string
function icalpropertyGetUrl(prop: property): string
function icalpropertyGetValueAsString(prop: property): string
function icalpropertyGetValueAsStringR(prop: property): string
function icalpropertyGetVersion(prop: property): string
function icalpropertyGetVoter(prop: property): string
function icalpropertyGetX(prop: property): string
function icalpropertyGetXName(prop: property): string
function icalpropertyGetXlicclass(prop: property): object | null
function icalpropertyGetXlicclustercount(prop: property): string
function icalpropertyGetXlicerror(prop: property): string
function icalpropertyGetXlicmimecharset(prop: property): string
function icalpropertyGetXlicmimecid(prop: property): string
function icalpropertyGetXlicmimecontenttype(prop: property): string
function icalpropertyGetXlicmimeencoding(prop: property): string
function icalpropertyGetXlicmimefilename(prop: property): string
function icalpropertyGetXlicmimeoptinfo(prop: property): string
function icalpropertyIsa(property: property): property_kind
function icalpropertyIsaProperty(property?: object | null): number
function icalpropertyKindAndStringToEnum(kind: number, str: string): number
function icalpropertyKindIsValid(kind: property_kind): number
function icalpropertyKindToString(kind: property_kind): string
function icalpropertyKindToValueKind(kind: property_kind): value_kind
function icalpropertyMethodToString(method: property_method): string
function icalpropertyNormalize(prop: property): void
function icalpropertyRecurrenceIsExcluded(comp: component, dtstart?: object | null, recurtime?: object | null): number
function icalpropertyRemoveParameterByKind(prop: property, kind: parameter_kind): void
function icalpropertyRemoveParameterByName(prop: property, name: string): void
function icalpropertyRemoveParameterByRef(prop: property, param: parameter): void
function icalpropertySetAcceptresponse(prop: property, v: string): void
function icalpropertySetAcknowledged(prop: property, v?: object | null): void
function icalpropertySetAction(prop: property, v?: object | null): void
function icalpropertySetAllowconflict(prop: property, v: string): void
function icalpropertySetAttach(prop: property, v: attach): void
function icalpropertySetAttendee(prop: property, v: string): void
function icalpropertySetBusytype(prop: property, v?: object | null): void
function icalpropertySetCalid(prop: property, v: string): void
function icalpropertySetCalmaster(prop: property, v: string): void
function icalpropertySetCalscale(prop: property, v: string): void
function icalpropertySetCapversion(prop: property, v: string): void
function icalpropertySetCarid(prop: property, v: string): void
function icalpropertySetCarlevel(prop: property, v?: object | null): void
function icalpropertySetCategories(prop: property, v: string): void
function icalpropertySetClass(prop: property, v?: object | null): void
function icalpropertySetCmd(prop: property, v?: object | null): void
function icalpropertySetColor(prop: property, v: string): void
function icalpropertySetComment(prop: property, v: string): void
function icalpropertySetCompleted(prop: property, v?: object | null): void
function icalpropertySetComponents(prop: property, v: string): void
function icalpropertySetConference(prop: property, v: string): void
function icalpropertySetContact(prop: property, v: string): void
function icalpropertySetCreated(prop: property, v?: object | null): void
function icalpropertySetCsid(prop: property, v: string): void
function icalpropertySetDatemax(prop: property, v?: object | null): void
function icalpropertySetDatemin(prop: property, v?: object | null): void
function icalpropertySetDecreed(prop: property, v: string): void
function icalpropertySetDefaultcharset(prop: property, v: string): void
function icalpropertySetDefaultlocale(prop: property, v: string): void
function icalpropertySetDefaulttzid(prop: property, v: string): void
function icalpropertySetDefaultvcars(prop: property, v: string): void
function icalpropertySetDeny(prop: property, v: string): void
function icalpropertySetDescription(prop: property, v: string): void
function icalpropertySetDtend(prop: property, v?: object | null): void
function icalpropertySetDtstamp(prop: property, v?: object | null): void
function icalpropertySetDtstart(prop: property, v?: object | null): void
function icalpropertySetDue(prop: property, v?: object | null): void
function icalpropertySetDuration(prop: property, v?: object | null): void
function icalpropertySetEstimatedduration(prop: property, v?: object | null): void
function icalpropertySetExdate(prop: property, v?: object | null): void
function icalpropertySetExpand(prop: property, v: number): void
function icalpropertySetExrule(prop: property, v?: object | null): void
function icalpropertySetFreebusy(prop: property, v?: object | null): void
function icalpropertySetGeo(prop: property, v?: object | null): void
function icalpropertySetGrant(prop: property, v: string): void
function icalpropertySetImage(prop: property, v: attach): void
function icalpropertySetItipversion(prop: property, v: string): void
function icalpropertySetLastmodified(prop: property, v?: object | null): void
function icalpropertySetLocation(prop: property, v: string): void
function icalpropertySetMaxcomponentsize(prop: property, v: number): void
function icalpropertySetMaxdate(prop: property, v?: object | null): void
function icalpropertySetMaxresults(prop: property, v: number): void
function icalpropertySetMaxresultssize(prop: property, v: number): void
function icalpropertySetMethod(prop: property, v?: object | null): void
function icalpropertySetMindate(prop: property, v?: object | null): void
function icalpropertySetMultipart(prop: property, v: string): void
function icalpropertySetName(prop: property, v: string): void
function icalpropertySetOrganizer(prop: property, v: string): void
function icalpropertySetOwner(prop: property, v: string): void
function icalpropertySetParameter(prop: property, parameter: parameter): void
function icalpropertySetParameterFromString(prop: property, name: string, value: string): void
function icalpropertySetParent(property: property, component: component): void
function icalpropertySetPatchdelete(prop: property, v: string): void
function icalpropertySetPatchorder(prop: property, v: number): void
function icalpropertySetPatchparameter(prop: property, v: string): void
function icalpropertySetPatchtarget(prop: property, v: string): void
function icalpropertySetPatchversion(prop: property, v: string): void
function icalpropertySetPercentcomplete(prop: property, v: number): void
function icalpropertySetPermission(prop: property, v: string): void
function icalpropertySetPollcompletion(prop: property, v?: object | null): void
function icalpropertySetPollitemid(prop: property, v: number): void
function icalpropertySetPollmode(prop: property, v?: object | null): void
function icalpropertySetPollproperties(prop: property, v: string): void
function icalpropertySetPollwinner(prop: property, v: number): void
function icalpropertySetPriority(prop: property, v: number): void
function icalpropertySetProdid(prop: property, v: string): void
function icalpropertySetQuery(prop: property, v: string): void
function icalpropertySetQueryid(prop: property, v: string): void
function icalpropertySetQuerylevel(prop: property, v?: object | null): void
function icalpropertySetQueryname(prop: property, v: string): void
function icalpropertySetRdate(prop: property, v?: object | null): void
function icalpropertySetRecuraccepted(prop: property, v: string): void
function icalpropertySetRecurexpand(prop: property, v: string): void
function icalpropertySetRecurlimit(prop: property, v: string): void
function icalpropertySetRecurrenceid(prop: property, v?: object | null): void
function icalpropertySetRefreshinterval(prop: property, v?: object | null): void
function icalpropertySetRelatedto(prop: property, v: string): void
function icalpropertySetRelcalid(prop: property, v: string): void
function icalpropertySetRepeat(prop: property, v: number): void
function icalpropertySetReplyurl(prop: property, v: string): void
function icalpropertySetRequeststatus(prop: property, v?: object | null): void
function icalpropertySetResources(prop: property, v: string): void
function icalpropertySetResponse(prop: property, v: number): void
function icalpropertySetRestriction(prop: property, v: string): void
function icalpropertySetRrule(prop: property, v?: object | null): void
function icalpropertySetScope(prop: property, v: string): void
function icalpropertySetSequence(prop: property, v: number): void
function icalpropertySetSource(prop: property, v: string): void
function icalpropertySetStatus(prop: property, v?: object | null): void
function icalpropertySetStoresexpanded(prop: property, v: string): void
function icalpropertySetSummary(prop: property, v: string): void
function icalpropertySetTarget(prop: property, v: string): void
function icalpropertySetTaskmode(prop: property, v?: object | null): void
function icalpropertySetTransp(prop: property, v?: object | null): void
function icalpropertySetTrigger(prop: property, v?: object | null): void
function icalpropertySetTzid(prop: property, v: string): void
function icalpropertySetTzidaliasof(prop: property, v: string): void
function icalpropertySetTzname(prop: property, v: string): void
function icalpropertySetTzoffsetfrom(prop: property, v: number): void
function icalpropertySetTzoffsetto(prop: property, v: number): void
function icalpropertySetTzuntil(prop: property, v?: object | null): void
function icalpropertySetTzurl(prop: property, v: string): void
function icalpropertySetUid(prop: property, v: string): void
function icalpropertySetUrl(prop: property, v: string): void
function icalpropertySetValue(prop: property, value: value): void
function icalpropertySetValueFromString(prop: property, value: string, kind: string): void
function icalpropertySetVersion(prop: property, v: string): void
function icalpropertySetVoter(prop: property, v: string): void
function icalpropertySetX(prop: property, v: string): void
function icalpropertySetXName(prop: property, name: string): void
function icalpropertySetXlicclass(prop: property, v?: object | null): void
function icalpropertySetXlicclustercount(prop: property, v: string): void
function icalpropertySetXlicerror(prop: property, v: string): void
function icalpropertySetXlicmimecharset(prop: property, v: string): void
function icalpropertySetXlicmimecid(prop: property, v: string): void
function icalpropertySetXlicmimecontenttype(prop: property, v: string): void
function icalpropertySetXlicmimeencoding(prop: property, v: string): void
function icalpropertySetXlicmimefilename(prop: property, v: string): void
function icalpropertySetXlicmimeoptinfo(prop: property, v: string): void
function icalpropertyStatusToString(arg0: property_status): string
function icalpropertyStringToKind(string: string): property_kind
function icalpropertyStringToMethod(str: string): property_method
function icalpropertyStringToStatus(string: string): property_status
function icalpropertyValueKindToKind(kind: value_kind): property_kind
function icalrecurExpandRecurrence(rule: string, start: number, count: number, array: number): number
function icalrecurFreqToString(kind: recurrencetype_frequency): string
function icalrecurIteratorFree(arg0: recur_iterator): void
function icalrecurIteratorNext(arg0: recur_iterator): object | null
function icalrecurIteratorSetStart(impl: recur_iterator, start?: object | null): number
function icalrecurSkipToString(kind: recurrencetype_skip): string
function icalrecurStringToFreq(str: string): recurrencetype_frequency
function icalrecurStringToSkip(str: string): recurrencetype_skip
function icalrecurStringToWeekday(str: string): recurrencetype_weekday
function icalrecurWeekdayToString(kind: recurrencetype_weekday): string
function icalrecurrencetypeAsString(recur?: object | null): string
function icalrecurrencetypeAsStringR(recur?: object | null): string
function icalrecurrencetypeClear(r?: object | null): void
function icalrecurrencetypeDayDayOfWeek(day: number): object | null
function icalrecurrencetypeDayPosition(day: number): number
function icalrecurrencetypeFromString(str: string): object | null
function icalrecurrencetypeMonthIsLeap(month: number): number
function icalrecurrencetypeMonthMonth(month: number): number
function icalrecurrencetypeRscaleIsSupported(): number
function icalreqstattypeAsString(arg0?: object | null): string
function icalreqstattypeAsStringR(arg0?: object | null): string
function icalreqstattypeFromString(str: string): object | null
function icalrestrictionCheck(comp: component): number
function icalrestrictionCompare(restr: restriction_kind, count: number): number
function icaltimeAdd(t?: object | null, d?: object | null): object | null
function icaltimeAdjust(tt: object | null, days: number, hours: number, minutes: number, seconds: number): void
function icaltimeAsIcalString(tt?: object | null): string
function icaltimeAsIcalStringR(tt?: object | null): string
function icaltimeAsTimet(arg0?: object | null): number
function icaltimeAsTimetWithZone(tt: object | null, zone: timezone): number
function icaltimeCompare(a?: object | null, b?: object | null): number
function icaltimeCompareDateOnly(a?: object | null, b?: object | null): number
function icaltimeCompareDateOnlyTz(a: object | null, b: object | null, tz: timezone): number
function icaltimeConvertToZone(tt: object | null, zone: timezone): object | null
function icaltimeCurrentTimeWithZone(zone: timezone): object | null
function icaltimeDayOfWeek(t?: object | null): number
function icaltimeDayOfYear(t?: object | null): number
function icaltimeDaysInMonth(month: number, year: number): number
function icaltimeDaysInYear(year: number): number
function icaltimeFromDayOfYear(doy: number, year: number): object | null
function icaltimeFromString(str: string): object | null
function icaltimeFromTimetWithZone(tm: number, isDate: number, zone: timezone): object | null
function icaltimeGetTimezone(t?: object | null): timezone
function icaltimeGetTzid(t?: object | null): string
function icaltimeIsDate(t?: object | null): number
function icaltimeIsLeapYear(year: number): number
function icaltimeIsNullTime(t?: object | null): number
function icaltimeIsUtc(t?: object | null): number
function icaltimeIsValidTime(t?: object | null): number
function icaltimeNormalize(t?: object | null): object | null
function icaltimeNullDate(): object | null
function icaltimeNullTime(): object | null
function icaltimeSetTimezone(t: object | null, zone: timezone): object | null
function icaltimeSpanContains(s: time_span, container: time_span): number
function icaltimeSpanNew(dtstart: object | null, dtend: object | null, isBusy: number): object | null
function icaltimeSpanOverlaps(s1: time_span, s2: time_span): number
function icaltimeStartDoyWeek(t: object | null, fdow: number): number
function icaltimeSubtract(t1?: object | null, t2?: object | null): object | null
function icaltimeToday(): object | null
function icaltimeWeekNumber(t?: object | null): number
function icaltimezoneArrayAppendFromVtimezone(timezones: array, child: component): void
function icaltimezoneArrayFree(timezones: array): void
function icaltimezoneConvertTime(tt: object | null, fromZone: timezone, toZone: timezone): void
function icaltimezoneDumpChanges(zone: timezone, maxYear: number, fp?: object | null): number
function icaltimezoneExpandVtimezone(comp: component, endYear: number, changes: array): void
function icaltimezoneFree(zone: timezone, freeStruct: number): void
function icaltimezoneFreeBuiltinTimezones(): void
function icaltimezoneGetBuiltinTzdata(): number
function icaltimezoneGetDisplayName(zone: timezone): string
function icaltimezoneGetLatitude(zone: timezone): number
function icaltimezoneGetLocation(zone: timezone): string
function icaltimezoneGetLocationFromVtimezone(component: component): string
function icaltimezoneGetLongitude(zone: timezone): number
function icaltimezoneGetTzid(zone: timezone): string
function icaltimezoneGetTznames(zone: timezone): string
function icaltimezoneGetTznamesFromVtimezone(component: component): string
function icaltimezoneGetUtcOffset(zone: timezone, tt: object | null, isDaylight: number): number
function icaltimezoneGetUtcOffsetOfUtcTime(zone: timezone, tt: object | null, isDaylight: number): number
function icaltimezoneReleaseZoneTab(): void
function icaltimezoneSetBuiltinTzdata(set: number): void
function icaltimezoneSetComponent(zone: timezone, comp: component): number
function icaltimezoneSetTzidPrefix(newPrefix: string): void
function icaltimezoneTruncateVtimezone(vtz: component, start: timetype, end: timetype, msCompatible: number): void
function icaltimezoneTzidPrefix(): string
function icaltriggertypeFromInt(reltime: number): object | null
function icaltriggertypeFromString(str: string): object | null
function icaltriggertypeIsBadTrigger(tr?: object | null): number
function icaltriggertypeIsNullTrigger(tr?: object | null): number
function icaltzutilGetZoneDirectory(): string
function icalvalueAsIcalString(value: value): string
function icalvalueAsIcalStringR(value: value): string
function icalvalueCompare(a: value, b: value): parameter_xliccomparetype
function icalvalueDecodeIcalString(szText: string, szDecText: string, nMaxBufferLen: number): number
function icalvalueEncodeIcalString(szText: string, szEncText: string, maxBufferLen: number): number
function icalvalueFree(value: value): void
function icalvalueGetAction(value: value): object | null
function icalvalueGetBinary(value: value): string
function icalvalueGetBoolean(value: value): number
function icalvalueGetBusytype(value: value): object | null
function icalvalueGetCaladdress(value: value): string
function icalvalueGetCarlevel(value: value): object | null
function icalvalueGetClass(value: value): object | null
function icalvalueGetCmd(value: value): object | null
function icalvalueGetDate(value: value): object | null
function icalvalueGetDatetime(value: value): object | null
function icalvalueGetDatetimedate(value: value): object | null
function icalvalueGetDatetimeperiod(value: value): object | null
function icalvalueGetDuration(value: value): object | null
function icalvalueGetFloat(value: value): number
function icalvalueGetGeo(value: value): object | null
function icalvalueGetInteger(value: value): number
function icalvalueGetMethod(value: value): object | null
function icalvalueGetPeriod(value: value): object | null
function icalvalueGetPollcompletion(value: value): object | null
function icalvalueGetPollmode(value: value): object | null
function icalvalueGetQuery(value: value): string
function icalvalueGetQuerylevel(value: value): object | null
function icalvalueGetRecur(value: value): object | null
function icalvalueGetRequeststatus(value: value): object | null
function icalvalueGetStatus(value: value): object | null
function icalvalueGetString(value: value): string
function icalvalueGetTaskmode(value: value): object | null
function icalvalueGetText(value: value): string
function icalvalueGetTransp(value: value): object | null
function icalvalueGetTrigger(value: value): object | null
function icalvalueGetUri(value: value): string
function icalvalueGetUtcoffset(value: value): number
function icalvalueGetX(value: value): string
function icalvalueGetXlicclass(value: value): object | null
function icalvalueIsValid(value: value): number
function icalvalueIsa(value: value): value_kind
function icalvalueIsaValue(arg0?: object | null): number
function icalvalueKindIsValid(kind: value_kind): number
function icalvalueKindToString(kind: value_kind): string
function icalvalueResetKind(value: value): void
function icalvalueSetAction(value: value, v?: object | null): void
function icalvalueSetAttach(value: value, attach: attach): void
function icalvalueSetBinary(value: value, v: string): void
function icalvalueSetBoolean(value: value, v: number): void
function icalvalueSetBusytype(value: value, v?: object | null): void
function icalvalueSetCaladdress(value: value, v: string): void
function icalvalueSetCarlevel(value: value, v?: object | null): void
function icalvalueSetClass(value: value, v?: object | null): void
function icalvalueSetCmd(value: value, v?: object | null): void
function icalvalueSetDate(value: value, v?: object | null): void
function icalvalueSetDatetime(value: value, v?: object | null): void
function icalvalueSetDatetimedate(value: value, v?: object | null): void
function icalvalueSetDatetimeperiod(value: value, v?: object | null): void
function icalvalueSetDuration(value: value, v?: object | null): void
function icalvalueSetFloat(value: value, v: number): void
function icalvalueSetGeo(value: value, v?: object | null): void
function icalvalueSetInteger(value: value, v: number): void
function icalvalueSetMethod(value: value, v?: object | null): void
function icalvalueSetParent(value: value, property: property): void
function icalvalueSetPeriod(value: value, v?: object | null): void
function icalvalueSetPollcompletion(value: value, v?: object | null): void
function icalvalueSetPollmode(value: value, v?: object | null): void
function icalvalueSetQuery(value: value, v: string): void
function icalvalueSetQuerylevel(value: value, v?: object | null): void
function icalvalueSetRecur(value: value, v?: object | null): void
function icalvalueSetRequeststatus(value: value, v?: object | null): void
function icalvalueSetStatus(value: value, v?: object | null): void
function icalvalueSetString(value: value, v: string): void
function icalvalueSetTaskmode(value: value, v?: object | null): void
function icalvalueSetText(value: value, v: string): void
function icalvalueSetTransp(value: value, v?: object | null): void
function icalvalueSetTrigger(value: value, v?: object | null): void
function icalvalueSetUri(value: value, v: string): void
function icalvalueSetUtcoffset(value: value, v: number): void
function icalvalueSetX(value: value, v: string): void
function icalvalueSetXlicclass(value: value, v?: object | null): void
function icalvalueStringToKind(str: string): value_kind
function printDateToString(str: string, data?: object | null): void
function printDatetimeToString(str: string, data?: object | null): void
function pvlClear(arg0: pvl_list): void
function pvlCount(arg0: pvl_list): number
function pvlData(arg0: pvl_elem): object | null
function pvlFree(arg0: pvl_list): void
function pvlInsertAfter(l: pvl_list, e: pvl_elem, d?: object | null): void
function pvlInsertBefore(l: pvl_list, e: pvl_elem, d?: object | null): void
function pvlPop(l: pvl_list): object | null
function pvlPush(l: pvl_list, d?: object | null): void
function pvlRemove(arg0: pvl_list, arg1: pvl_elem): object | null
function pvlShift(l: pvl_list): object | null
function pvlUnshift(l: pvl_list, d?: object | null): void
function setUnknownTokenHandlingSetting(newSetting: _unknown_token_handling): void
function setZoneDirectory(path: string): void
function sspmEncodingString(type?: object | null): string
function sspmFreeParts(parts: object | null, maxParts: number): void
function sspmMajorTypeString(type?: object | null): string
function sspmMinorTypeString(type?: object | null): string
function sspmParseMime(parts: object | null, maxParts: number, actions?: object | null, getString?: object | null, getStringData?: object | null, firstHeader?: object | null): number
function sspmWriteMime(parts: object | null, numParts: number, outputString: string, header: string): number
interface icalattach_free_fn_t {
    (data: string): void
}
interface icalparser_line_gen_func {
    (s: string, size: number, d?: object | null): string
}
interface pvl_applyf {
    (a?: object | null, b?: object | null): void
}
interface pvl_comparef {
    (a?: object | null, b?: object | null): number
}
interface pvl_findf {
    (a?: object | null, b?: object | null): number
}
class array {
    /* Fields of ICal-3.0.ICal.array */
    elementSize: number
    incrementSize: number
    numElements: number
    spaceAllocated: number
    chunks: object
    static name: string
}
class attach {
    static name: string
}
class compiter {
    /* Fields of ICal-3.0.ICal.compiter */
    kind: component_kind
    iter: pvl_elem
    static name: string
}
class component {
    static name: string
}
class datetimeperiodtype {
    /* Fields of ICal-3.0.ICal.datetimeperiodtype */
    time: object
    period: object
    static name: string
}
class durationtype {
    /* Fields of ICal-3.0.ICal.durationtype */
    isNeg: number
    days: number
    weeks: number
    hours: number
    minutes: number
    seconds: number
    static name: string
}
class geotype {
    /* Fields of ICal-3.0.ICal.geotype */
    lat: number
    lon: number
    static name: string
}
class parameter {
    static name: string
}
class parser {
    static name: string
}
class periodtype {
    /* Fields of ICal-3.0.ICal.periodtype */
    start: object
    end: object
    duration: object
    static name: string
}
class property {
    static name: string
}
class pvl_elem {
    static name: string
}
class pvl_elem_t {
    /* Fields of ICal-3.0.ICal.pvl_elem_t */
    mAGIC: number
    d: object
    next: object
    prior: object
    static name: string
}
class pvl_list {
    static name: string
}
class recur_iterator {
    static name: string
}
class recurrencetype {
    /* Fields of ICal-3.0.ICal.recurrencetype */
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
class reqstattype {
    /* Fields of ICal-3.0.ICal.reqstattype */
    code: requeststatus
    desc: string
    debug: string
    static name: string
}
class sspm_action_map {
    /* Fields of ICal-3.0.ICal.sspm_action_map */
    major: object
    minor: object
    newPart: () => object
    addLine: (part: object, header: object, line: string, size: number) => void
    endPart: (part: object) => object
    freePart: (part: object) => void
    static name: string
}
class sspm_header {
    /* Fields of ICal-3.0.ICal.sspm_header */
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
class sspm_part {
    /* Fields of ICal-3.0.ICal.sspm_part */
    header: object
    level: number
    dataSize: number
    data: object
    static name: string
}
class time_span {
    /* Fields of ICal-3.0.ICal.time_span */
    start: number
    end: number
    isBusy: number
    static name: string
}
class timetype {
    /* Fields of ICal-3.0.ICal.timetype */
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
class timezone {
    static name: string
}
class timezonephase {
    /* Fields of ICal-3.0.ICal.timezonephase */
    tzname: string
    isStdandard: number
    dtstart: object
    offsetto: number
    tzoffsetfrom: number
    comment: string
    rdate: object
    rrule: string
    static name: string
}
class timezonetype {
    /* Fields of ICal-3.0.ICal.timezonetype */
    tzid: string
    lastMod: object
    tzurl: string
    phases: object
    static name: string
}
class triggertype {
    /* Fields of ICal-3.0.ICal.triggertype */
    time: object
    duration: object
    static name: string
}
class value {
    static name: string
}
}
export default ICal