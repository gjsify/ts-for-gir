/**
 * ECal-2.0
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as ICalGLib from './ICalGLib-3.0';
import type * as EDataServer from './EDataServer-1.2';
import type * as GData from './GData-0.0';
import type * as Json from './Json-1.0';
import type * as Goa from './Goa-1.0';
import type * as Camel from './Camel-1.2';

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
export function isodate_from_time_t(t: number): string
export function match_tzid(tzid: string): string
export function recur_describe_recurrence(icalcomp: ICalGLib.Component, week_start_day: GLib.DateWeekday, flags: number): string | null
export function recur_describe_recurrence_ex(icalcomp: ICalGLib.Component, week_start_day: GLib.DateWeekday, flags: number, datetime_fmt_func?: RecurFormatDateTimeFunc | null): string | null
export function recur_ensure_end_dates(comp: Component, refresh: boolean, tz_cb: RecurResolveTimezoneCb, cancellable?: Gio.Cancellable | null): boolean
export function recur_generate_instances_sync(icalcomp: ICalGLib.Component, interval_start: ICalGLib.Time, interval_end: ICalGLib.Time, default_timezone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean
export function recur_get_localized_nth(nth: number): string
export function recur_obtain_enddate(ir: ICalGLib.Recurrence, prop: ICalGLib.Property, zone: ICalGLib.Timezone, convert_end_date: boolean): number
export function reminder_data_free(rd?: object | null): void
export function system_timezone_get_location(): string
export function time_add_day(time: number, days: number): number
export function time_add_day_with_zone(time: number, days: number, zone: ICalGLib.Timezone): number
export function time_add_month_with_zone(time: number, months: number, zone: ICalGLib.Timezone): number
export function time_add_week(time: number, weeks: number): number
export function time_add_week_with_zone(time: number, weeks: number, zone: ICalGLib.Timezone): number
export function time_day_begin(t: number): number
export function time_day_begin_with_zone(time: number, zone: ICalGLib.Timezone): number
export function time_day_end(t: number): number
export function time_day_end_with_zone(time: number, zone: ICalGLib.Timezone): number
export function time_day_of_week(day: number, month: number, year: number): number
export function time_day_of_year(day: number, month: number, year: number): number
export function time_days_in_month(year: number, month: number): number
export function time_from_isodate(str: string): number
export function time_is_leap_year(year: number): boolean
export function time_leap_years_up_to(year: number): number
export function time_month_begin_with_zone(time: number, zone: ICalGLib.Timezone): number
export function time_to_gdate_with_zone(date: GLib.Date, time: number, zone?: ICalGLib.Timezone | null): void
export function time_week_begin_with_zone(time: number, week_start_day: number, zone: ICalGLib.Timezone): number
export function time_year_begin_with_zone(time: number, zone: ICalGLib.Timezone): number
export function util_add_timezones_from_component(vcal_comp: ICalGLib.Component, icalcomp: ICalGLib.Component): void
export function util_component_dup_x_property(icalcomp: ICalGLib.Component, x_name: string): string | null
export function util_component_find_x_property(icalcomp: ICalGLib.Component, x_name: string): ICalGLib.Property | null
export function util_component_get_recurid_as_string(icalcomp: ICalGLib.Component): string | null
export function util_component_has_alarms(icalcomp: ICalGLib.Component): boolean
export function util_component_has_attendee(icalcomp: ICalGLib.Component): boolean
export function util_component_has_organizer(icalcomp: ICalGLib.Component): boolean
export function util_component_has_property(icalcomp: ICalGLib.Component, prop_kind: ICalGLib.PropertyKind): boolean
export function util_component_has_rdates(icalcomp: ICalGLib.Component): boolean
export function util_component_has_recurrences(icalcomp: ICalGLib.Component): boolean
export function util_component_has_rrules(icalcomp: ICalGLib.Component): boolean
export function util_component_has_x_property(icalcomp: ICalGLib.Component, x_name: string): boolean
export function util_component_is_instance(icalcomp: ICalGLib.Component): boolean
export function util_component_remove_property_by_kind(icalcomp: ICalGLib.Component, kind: ICalGLib.PropertyKind, all: boolean): number
export function util_component_remove_x_property(icalcomp: ICalGLib.Component, x_name: string): boolean
export function util_component_set_x_property(icalcomp: ICalGLib.Component, x_name: string, value?: string | null): void
export function util_conflict_resolution_to_operation_flags(conflict_resolution: EDataServer.ConflictResolution): number
export function util_construct_instance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time): ICalGLib.Component | null
export function util_copy_timezone(zone: ICalGLib.Timezone): ICalGLib.Timezone
export function util_generate_alarms_for_comp(comp: Component, start: number, end: number, omit: ComponentAlarmAction, resolve_tzid: RecurResolveTimezoneCb, default_timezone: ICalGLib.Timezone): ComponentAlarms | null
export function util_generate_alarms_for_list(comps: Component[], start: number, end: number, omit: ComponentAlarmAction, resolve_tzid: RecurResolveTimezoneCb, default_timezone: ICalGLib.Timezone): [ /* returnType */ number, /* comp_alarms */ ComponentAlarms[] ]
export function util_get_component_occur_times(comp: Component, tz_cb: RecurResolveTimezoneCb, default_timezone: ICalGLib.Timezone, kind: ICalGLib.ComponentKind): [ /* out_start */ number, /* out_end */ number ]
export function util_get_system_timezone(): ICalGLib.Timezone | null
export function util_get_system_timezone_location(): string
export function util_icaltime_to_tm(itt: ICalGLib.Time): object | null
export function util_icaltime_to_tm_with_zone(itt: ICalGLib.Time, from_zone: ICalGLib.Timezone, to_zone: ICalGLib.Timezone): object | null
export function util_init_recur_task_sync(vtodo: ICalGLib.Component, cal_client: Client, cancellable?: Gio.Cancellable | null): boolean
export function util_inline_local_attachments_sync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
export function util_is_first_instance(comp: Component, rid: ICalGLib.Time, tz_cb: RecurResolveTimezoneCb): boolean
export function util_mark_task_complete_sync(vtodo: ICalGLib.Component, completed_time: number, cal_client: Client, cancellable?: Gio.Cancellable | null): boolean
export function util_new_component(kind: ICalGLib.ComponentKind): ICalGLib.Component
export function util_new_top_level(): ICalGLib.Component
export function util_normalize_rrule_until_value(icalcomp: ICalGLib.Component, ttuntil: ICalGLib.Time, tz_cb: RecurResolveTimezoneCb): void
export function util_operation_flags_to_conflict_resolution(flags: number): EDataServer.ConflictResolution
export function util_parse_ics_file(filename: string): ICalGLib.Component | null
export function util_parse_ics_string(string: string): ICalGLib.Component | null
export function util_priority_from_string(string: string): number
export function util_priority_to_string(priority: number): string
export function util_property_has_parameter(prop: ICalGLib.Property, param_kind: ICalGLib.ParameterKind): boolean
export function util_remove_instances(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType): void
export function util_remove_instances_ex(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType, tz_cb: RecurResolveTimezoneCb): void
export function util_seconds_to_string(seconds: number): string
export function util_set_alarm_acknowledged(component: Component, auid: string, when: number): boolean
export function util_split_at_instance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, master_dtstart?: ICalGLib.Time | null): ICalGLib.Component | null
export function util_split_at_instance_ex(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, master_dtstart: ICalGLib.Time | null, tz_cb: RecurResolveTimezoneCb): ICalGLib.Component | null
export function util_tm_to_icaltime(tm: object | null, is_date: boolean): ICalGLib.Time
export interface ComponentParameterBagFilterFunc {
    (parameter: ICalGLib.Parameter): boolean
}
export interface ComponentPropertyBagFilterFunc {
    (property: ICalGLib.Property): boolean
}
export interface RecurFormatDateTimeFunc {
    (itt: ICalGLib.Time, buffer: string, buffer_size: number): void
}
export interface RecurInstanceCb {
    (icomp: ICalGLib.Component, instance_start: ICalGLib.Time, instance_end: ICalGLib.Time, cancellable?: Gio.Cancellable | null): boolean
}
export interface RecurResolveTimezoneCb {
    (tzid: string, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
}
export class TimezoneCache {
    /* Methods of ECal.TimezoneCache */
    add_timezone(zone: ICalGLib.Timezone): void
    get_timezone(tzid: string): ICalGLib.Timezone | null
    list_timezones(): ICalGLib.Timezone[]
    /* Virtual methods of ECal.TimezoneCache */
    vfunc_timezone_added(zone: ICalGLib.Timezone): void
    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void
    /* Signals of ECal.TimezoneCache */
    connect(sigName: "timezone-added", callback: (($obj: TimezoneCache, zone: ICalGLib.Timezone) => void)): number
    connect_after(sigName: "timezone-added", callback: (($obj: TimezoneCache, zone: ICalGLib.Timezone) => void)): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    static name: string
}
export interface Client_ConstructProps extends EDataServer.Client_ConstructProps {
    default_timezone?: ICalGLib.Timezone
    source_type?: ClientSourceType
}
export class Client {
    /* Properties of ECal.Client */
    default_timezone: ICalGLib.Timezone
    /* Properties of EDataServer.Client */
    readonly capabilities: object
    readonly main_context: GLib.MainContext
    online: boolean
    readonly opened: boolean
    readonly readonly: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ECal.Client */
    add_timezone(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_timezone_finish(result: Gio.AsyncResult): boolean
    add_timezone_sync(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean
    check_one_alarm_only(): boolean
    check_organizer_must_accept(): boolean
    check_organizer_must_attend(): boolean
    check_recurrences_no_master(): boolean
    check_save_schedules(): boolean
    create_object(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_uid */ string | null ]
    create_object_sync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uid */ string | null ]
    create_objects(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_objects_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_uids */ string[] | null ]
    create_objects_sync(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] | null ]
    discard_alarm(uid: string, rid: string, auid: string, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    discard_alarm_finish(result: Gio.AsyncResult): boolean
    discard_alarm_sync(uid: string, rid: string, auid: string, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    generate_instances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    generate_instances_for_object(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    generate_instances_for_object_sync(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    generate_instances_sync(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    get_attachment_uris(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_attachment_uris_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_attachment_uris */ string[] ]
    get_attachment_uris_sync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_attachment_uris */ string[] ]
    get_component_as_string(icalcomp: ICalGLib.Component): string
    get_default_object(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_default_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    get_default_object_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    get_default_timezone(): ICalGLib.Timezone
    get_free_busy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_free_busy_finish(result: Gio.AsyncResult, out_freebusy: Component[]): boolean
    get_free_busy_sync(start: number, end: number, users: string[], out_freebusy: Component[], cancellable?: Gio.Cancellable | null): boolean
    get_local_attachment_store(): string
    get_object(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    get_object_list(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_object_list_as_comps(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_object_list_as_comps_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    get_object_list_as_comps_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    get_object_list_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_icalcomps */ ICalGLib.Component[] ]
    get_object_list_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalcomps */ ICalGLib.Component[] ]
    get_object_sync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    get_objects_for_uid(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_objects_for_uid_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    get_objects_for_uid_sync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    get_source_type(): ClientSourceType
    get_timezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_timezone_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_zone */ ICalGLib.Timezone ]
    get_timezone_sync(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_zone */ ICalGLib.Timezone ]
    get_view(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_view_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_view */ ClientView ]
    get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_view */ ClientView ]
    modify_object(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_object_finish(result: Gio.AsyncResult): boolean
    modify_object_sync(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    modify_objects(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_objects_finish(result: Gio.AsyncResult): boolean
    modify_objects_sync(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    receive_objects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    receive_objects_finish(result: Gio.AsyncResult): boolean
    receive_objects_sync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    remove_object(uid: string, rid: string, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_object_finish(result: Gio.AsyncResult): boolean
    remove_object_sync(uid: string, rid: string, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    remove_objects(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_objects_finish(result: Gio.AsyncResult): boolean
    remove_objects_sync(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    send_objects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_objects_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_users */ string[], /* out_modified_icalcomp */ ICalGLib.Component ]
    send_objects_sync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_users */ string[], /* out_modified_icalcomp */ ICalGLib.Component ]
    set_default_timezone(zone: ICalGLib.Timezone): void
    /* Methods of EDataServer.Client */
    cancel_all(): void
    check_capability(capability: string): boolean
    check_refresh_supported(): boolean
    dup_bus_name(): string
    get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    get_capabilities(): string[]
    get_source(): EDataServer.Source
    is_online(): boolean
    is_opened(): boolean
    is_readonly(): boolean
    open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    ref_main_context(): GLib.MainContext
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_finish(result: Gio.AsyncResult): boolean
    remove_sync(cancellable?: Gio.Cancellable | null): boolean
    retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieve_properties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieve_properties_finish(result: Gio.AsyncResult): boolean
    retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_backend_property_finish(result: Gio.AsyncResult): boolean
    set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    set_bus_name(bus_name: string): void
    unwrap_dbus_error(dbus_error: GLib.Error): void
    wait_for_connected(timeout_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wait_for_connected_finish(result: Gio.AsyncResult): boolean
    wait_for_connected_sync(timeout_seconds: number, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of ECal.TimezoneCache */
    add_timezone(zone: ICalGLib.Timezone): void
    get_timezone(tzid: string): ICalGLib.Timezone | null
    list_timezones(): ICalGLib.Timezone[]
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of ECal.Client */
    vfunc_timezone_added(zone: ICalGLib.Timezone): void
    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataServer.Client */
    vfunc_backend_died(): void
    vfunc_backend_error(error_msg: string): void
    vfunc_backend_property_changed(prop_name: string, prop_value: string): void
    vfunc_get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    vfunc_get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    vfunc_open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_open_finish(result: Gio.AsyncResult): boolean
    vfunc_open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_opened(error: GLib.Error): void
    vfunc_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_refresh_finish(result: Gio.AsyncResult): boolean
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_finish(result: Gio.AsyncResult): boolean
    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    vfunc_retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    vfunc_retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_set_backend_property_finish(result: Gio.AsyncResult): boolean
    vfunc_set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_unwrap_dbus_error(dbus_error: GLib.Error): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ECal.Client */
    connect(sigName: "free-busy-data", callback: (($obj: Client, object?: object | null) => void)): number
    connect_after(sigName: "free-busy-data", callback: (($obj: Client, object?: object | null) => void)): number
    emit(sigName: "free-busy-data", object?: object | null): void
    /* Signals of EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: Client) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: Client) => void)): number
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: Client, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: Client, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: (($obj: Client, object: string, p0: string) => void)): number
    connect_after(sigName: "backend-property-changed", callback: (($obj: Client, object: string, p0: string) => void)): number
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: (($obj: Client, object: GLib.Error) => void)): number
    connect_after(sigName: "opened", callback: (($obj: Client, object: GLib.Error) => void)): number
    emit(sigName: "opened", object: GLib.Error): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal.TimezoneCache */
    connect(sigName: "timezone-added", callback: (($obj: Client, zone: ICalGLib.Timezone) => void)): number
    connect_after(sigName: "timezone-added", callback: (($obj: Client, zone: ICalGLib.Timezone) => void)): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: "notify::default-timezone", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-timezone", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opened", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static check_timezones_sync(vcalendar: ICalGLib.Component, icalcomps?: ICalGLib.Component[] | null, cancellable?: Gio.Cancellable | null): boolean
    static connect(source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static connect_finish(result: Gio.AsyncResult): EDataServer.Client
    static connect_sync(source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null): EDataServer.Client
    static error_create(code: ClientError, custom_msg?: string | null): GLib.Error
    static error_create(code: EDataServer.ClientError, custom_msg?: string | null): GLib.Error
    static error_quark(): GLib.Quark
    static error_to_string(code: ClientError): string
    static error_to_string(code: EDataServer.ClientError): string
    static tzlookup_cb(tzid: string, ecalclient: Client, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    static tzlookup_icalcomp_cb(tzid: string, lookup_data: ClientTzlookupICalCompData, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ClientView_ConstructProps extends GObject.Object_ConstructProps {
    client?: Client
    connection?: Gio.DBusConnection
    object_path?: string
}
export class ClientView {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ECal.ClientView */
    get_connection(): Gio.DBusConnection
    get_object_path(): string
    is_running(): boolean
    ref_client(): Client
    set_fields_of_interest(fields_of_interest?: string[] | null): void
    set_flags(flags: ClientViewFlags): void
    start(): void
    stop(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of ECal.ClientView */
    vfunc_complete(error: GLib.Error): void
    vfunc_progress(percent: number, message: string): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ECal.ClientView */
    connect(sigName: "complete", callback: (($obj: ClientView, object: GLib.Error) => void)): number
    connect_after(sigName: "complete", callback: (($obj: ClientView, object: GLib.Error) => void)): number
    emit(sigName: "complete", object: GLib.Error): void
    connect(sigName: "objects-added", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    emit(sigName: "objects-added", objects: ICalGLib.Component[]): void
    connect(sigName: "objects-modified", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    emit(sigName: "objects-modified", objects: ICalGLib.Component[]): void
    connect(sigName: "objects-removed", callback: (($obj: ClientView, uids: ComponentId[]) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: ClientView, uids: ComponentId[]) => void)): number
    emit(sigName: "objects-removed", uids: ComponentId[]): void
    connect(sigName: "progress", callback: (($obj: ClientView, object: number, p0: string) => void)): number
    connect_after(sigName: "progress", callback: (($obj: ClientView, object: number, p0: string) => void)): number
    emit(sigName: "progress", object: number, p0: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientView_ConstructProps)
    _init (config?: ClientView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Component_ConstructProps extends GObject.Object_ConstructProps {
}
export class Component {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ECal.Component */
    abort_sequence(): void
    add_alarm(alarm: ComponentAlarm): void
    clone(): Component
    commit_sequence(): void
    get_alarm(auid: string): ComponentAlarm | null
    get_alarm_uids(): string[] | null
    get_all_alarms(): ComponentAlarm[] | null
    get_as_string(): string
    get_attachments(): ICalGLib.Attach[] | null
    get_attendees(): ComponentAttendee[] | null
    get_categories(): string | null
    get_categories_list(): string[] | null
    get_classification(): ComponentClassification
    get_comments(): ComponentText[] | null
    get_completed(): ICalGLib.Time
    get_contacts(): ComponentText[]
    get_created(): ICalGLib.Time
    get_descriptions(): ComponentText[] | null
    get_dtend(): ComponentDateTime | null
    get_dtstamp(): ICalGLib.Time | null
    get_dtstart(): ComponentDateTime | null
    get_due(): ComponentDateTime | null
    get_exdates(): ComponentDateTime[] | null
    get_exrule_properties(): ICalGLib.Property[] | null
    get_exrules(): ICalGLib.Recurrence[] | null
    get_geo(): ICalGLib.Geo | null
    get_icalcomponent(): ICalGLib.Component | null
    get_id(): ComponentId
    get_last_modified(): ICalGLib.Time
    get_location(): string | null
    get_organizer(): ComponentOrganizer | null
    get_percent_complete(): number
    get_priority(): number
    get_rdates(): ComponentPeriod[] | null
    get_recurid(): ComponentRange | null
    get_recurid_as_string(): string
    get_rrule_properties(): ICalGLib.Property[] | null
    get_rrules(): ICalGLib.Recurrence[] | null
    get_sequence(): number
    get_status(): ICalGLib.PropertyStatus
    get_summary(): ComponentText | null
    get_transparency(): ComponentTransparency
    get_uid(): string
    get_url(): string | null
    get_vtype(): ComponentVType
    has_alarms(): boolean
    has_attachments(): boolean
    has_attendees(): boolean
    has_exceptions(): boolean
    has_exdates(): boolean
    has_exrules(): boolean
    has_organizer(): boolean
    has_rdates(): boolean
    has_recurrences(): boolean
    has_rrules(): boolean
    has_simple_recurrence(): boolean
    is_instance(): boolean
    remove_alarm(auid: string): void
    remove_all_alarms(): void
    set_attachments(attachments?: ICalGLib.Attach[] | null): void
    set_attendees(attendee_list?: ComponentAttendee[] | null): void
    set_categories(categories: string): void
    set_categories_list(categ_list: string[]): void
    set_classification(classif: ComponentClassification): void
    set_comments(text_list: ComponentText[]): void
    set_completed(tt?: ICalGLib.Time | null): void
    set_contacts(text_list: ComponentText[]): void
    set_created(tt?: ICalGLib.Time | null): void
    set_descriptions(text_list: ComponentText[]): void
    set_dtend(dt?: ComponentDateTime | null): void
    set_dtstamp(tt: ICalGLib.Time): void
    set_dtstart(dt?: ComponentDateTime | null): void
    set_due(dt?: ComponentDateTime | null): void
    set_exdates(exdate_list?: ComponentDateTime[] | null): void
    set_exrules(recur_list?: ICalGLib.Recurrence[] | null): void
    set_geo(geo?: ICalGLib.Geo | null): void
    set_icalcomponent(icalcomp?: ICalGLib.Component | null): boolean
    set_last_modified(tt?: ICalGLib.Time | null): void
    set_location(location?: string | null): void
    set_new_vtype(type: ComponentVType): void
    set_organizer(organizer?: ComponentOrganizer | null): void
    set_percent_complete(percent: number): void
    set_priority(priority: number): void
    set_rdates(rdate_list?: ComponentPeriod[] | null): void
    set_recurid(recur_id?: ComponentRange | null): void
    set_rrules(recur_list?: ICalGLib.Recurrence[] | null): void
    set_sequence(sequence: number): void
    set_status(status: ICalGLib.PropertyStatus): void
    set_summary(summary: ComponentText): void
    set_transparency(transp: ComponentTransparency): void
    set_uid(uid: string): void
    set_url(url?: string | null): void
    strip_errors(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Component
    static new_from_icalcomponent(icalcomp: ICalGLib.Component): Component
    static new_from_string(calobj: string): Component
    static new_vtype(vtype: ComponentVType): Component
    static $gtype: GObject.Type
}
export interface ReminderWatcher_ConstructProps extends GObject.Object_ConstructProps {
    default_zone?: ICalGLib.Timezone
    registry?: EDataServer.SourceRegistry
    timers_enabled?: boolean
}
export class ReminderWatcher {
    /* Properties of ECal.ReminderWatcher */
    default_zone: ICalGLib.Timezone
    timers_enabled: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ECal.ReminderWatcher */
    describe_data(rd: ReminderData, flags: number): string
    dismiss(rd: ReminderData, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dismiss_all(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dismiss_all_finish(result: Gio.AsyncResult): boolean
    dismiss_all_sync(cancellable?: Gio.Cancellable | null): boolean
    dismiss_finish(result: Gio.AsyncResult): boolean
    dismiss_sync(rd: ReminderData, cancellable?: Gio.Cancellable | null): boolean
    dup_default_zone(): ICalGLib.Timezone
    dup_past(): ReminderData[] | null
    dup_snoozed(): ReminderData[] | null
    get_registry(): EDataServer.SourceRegistry
    get_timers_enabled(): boolean
    ref_opened_client(source_uid: string): Client | null
    set_default_zone(zone?: ICalGLib.Timezone | null): void
    set_timers_enabled(enabled: boolean): void
    snooze(rd: ReminderData, until: number): void
    timer_elapsed(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of ECal.ReminderWatcher */
    vfunc_cal_client_connect(source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_changed(): void
    vfunc_format_time(rd: ReminderData, itt: ICalGLib.Time, inout_buffer: string, buffer_size: number): void
    vfunc_schedule_timer(at_time: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ECal.ReminderWatcher */
    connect(sigName: "changed", callback: (($obj: ReminderWatcher) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ReminderWatcher) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "format-time", callback: (($obj: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inout_buffer: object | null, buffer_size: number) => void)): number
    connect_after(sigName: "format-time", callback: (($obj: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inout_buffer: object | null, buffer_size: number) => void)): number
    emit(sigName: "format-time", rd: ReminderData, itt: ICalGLib.Time, inout_buffer: object | null, buffer_size: number): void
    connect(sigName: "triggered", callback: (($obj: ReminderWatcher, reminders: ReminderData[], snoozed: boolean) => void)): number
    connect_after(sigName: "triggered", callback: (($obj: ReminderWatcher, reminders: ReminderData[], snoozed: boolean) => void)): number
    emit(sigName: "triggered", reminders: ReminderData[], snoozed: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-zone", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-zone", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timers-enabled", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timers-enabled", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_icalcomponent(): ICalGLib.Component
    static name: string
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
    constructor(icomp: ICalGLib.Component)
    /* Static methods and pseudo-constructors */
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
}
export abstract class ClientViewClass {
    /* Fields of ECal.ClientViewClass */
    progress: (client_view: ClientView, percent: number, message: string) => void
    complete: (client_view: ClientView, error: GLib.Error) => void
    static name: string
}
export class ClientViewPrivate {
    static name: string
}
export class ComponentAlarm {
    /* Methods of ECal.ComponentAlarm */
    copy(): ComponentAlarm
    fill_component(component: ICalGLib.Component): void
    get_acknowledged(): ICalGLib.Time | null
    get_action(): ComponentAlarmAction
    get_as_component(): ICalGLib.Component
    get_attachments(): ICalGLib.Attach[] | null
    get_attendees(): ComponentAttendee[] | null
    get_description(): ComponentText | null
    get_property_bag(): ComponentPropertyBag
    get_repeat(): ComponentAlarmRepeat | null
    get_summary(): ComponentText | null
    get_trigger(): ComponentAlarmTrigger | null
    get_uid(): string | null
    has_attachments(): boolean
    has_attendees(): boolean
    set_acknowledged(when?: ICalGLib.Time | null): void
    set_action(action: ComponentAlarmAction): void
    set_attachments(attachments?: ICalGLib.Attach[] | null): void
    set_attendees(attendees?: ComponentAttendee[] | null): void
    set_description(description?: ComponentText | null): void
    set_from_component(component: ICalGLib.Component): void
    set_repeat(repeat?: ComponentAlarmRepeat | null): void
    set_summary(summary?: ComponentText | null): void
    set_trigger(trigger?: ComponentAlarmTrigger | null): void
    set_uid(uid?: string | null): void
    take_acknowledged(when?: ICalGLib.Time | null): void
    static name: string
    static new(): ComponentAlarm
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentAlarm
    static new_from_component(component: ICalGLib.Component): ComponentAlarm
}
export class ComponentAlarmInstance {
    /* Methods of ECal.ComponentAlarmInstance */
    copy(): ComponentAlarmInstance
    get_occur_end(): number
    get_occur_start(): number
    get_time(): number
    get_uid(): string
    set_occur_end(occur_end: number): void
    set_occur_start(occur_start: number): void
    set_time(instance_time: number): void
    set_uid(uid: string): void
    static name: string
    static new(uid: string, instance_time: number, occur_start: number, occur_end: number): ComponentAlarmInstance
    constructor(uid: string, instance_time: number, occur_start: number, occur_end: number)
    /* Static methods and pseudo-constructors */
    static new(uid: string, instance_time: number, occur_start: number, occur_end: number): ComponentAlarmInstance
}
export class ComponentAlarmRepeat {
    /* Methods of ECal.ComponentAlarmRepeat */
    copy(): ComponentAlarmRepeat
    get_interval(): ICalGLib.Duration
    get_interval_seconds(): number
    get_repetitions(): number
    set_interval(interval: ICalGLib.Duration): void
    set_interval_seconds(interval_seconds: number): void
    set_repetitions(repetitions: number): void
    static name: string
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    constructor(repetitions: number, interval: ICalGLib.Duration)
    /* Static methods and pseudo-constructors */
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    static new_seconds(repetitions: number, interval_seconds: number): ComponentAlarmRepeat
}
export class ComponentAlarmTrigger {
    /* Methods of ECal.ComponentAlarmTrigger */
    copy(): ComponentAlarmTrigger
    fill_property(property: ICalGLib.Property): /* property */ ICalGLib.Property
    get_absolute_time(): ICalGLib.Time | null
    get_as_property(): ICalGLib.Property
    get_duration(): ICalGLib.Duration | null
    get_kind(): ComponentAlarmTriggerKind
    get_parameter_bag(): ComponentParameterBag
    set_absolute(absolute_time: ICalGLib.Time): void
    set_absolute_time(absolute_time: ICalGLib.Time): void
    set_duration(duration: ICalGLib.Duration): void
    set_from_property(property: ICalGLib.Property): void
    set_kind(kind: ComponentAlarmTriggerKind): void
    set_relative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_absolute(absolute_time: ICalGLib.Time): ComponentAlarmTrigger
    static new_from_property(property: ICalGLib.Property): ComponentAlarmTrigger
    static new_relative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): ComponentAlarmTrigger
}
export class ComponentAlarms {
    /* Methods of ECal.ComponentAlarms */
    add_instance(instance: ComponentAlarmInstance): void
    copy(): ComponentAlarms
    get_component(): Component
    get_instances(): ComponentAlarmInstance[] | null
    remove_instance(instance: ComponentAlarmInstance): boolean
    set_instances(instances?: ComponentAlarmInstance[] | null): void
    take_instance(instance: ComponentAlarmInstance): void
    take_instances(instances?: ComponentAlarmInstance[] | null): void
    static name: string
    static new(comp: Component): ComponentAlarms
    constructor(comp: Component)
    /* Static methods and pseudo-constructors */
    static new(comp: Component): ComponentAlarms
}
export class ComponentAttendee {
    /* Methods of ECal.ComponentAttendee */
    copy(): ComponentAttendee
    fill_property(property: ICalGLib.Property): /* property */ ICalGLib.Property
    get_as_property(): ICalGLib.Property
    get_cn(): string | null
    get_cutype(): ICalGLib.ParameterCutype
    get_delegatedfrom(): string | null
    get_delegatedto(): string | null
    get_language(): string | null
    get_member(): string | null
    get_parameter_bag(): ComponentParameterBag
    get_partstat(): ICalGLib.ParameterPartstat
    get_role(): ICalGLib.ParameterRole
    get_rsvp(): boolean
    get_sentby(): string | null
    get_value(): string | null
    set_cn(cn?: string | null): void
    set_cutype(cutype: ICalGLib.ParameterCutype): void
    set_delegatedfrom(delegatedfrom?: string | null): void
    set_delegatedto(delegatedto?: string | null): void
    set_from_property(property: ICalGLib.Property): void
    set_language(language?: string | null): void
    set_member(member?: string | null): void
    set_partstat(partstat: ICalGLib.ParameterPartstat): void
    set_role(role: ICalGLib.ParameterRole): void
    set_rsvp(rsvp: boolean): void
    set_sentby(sentby?: string | null): void
    set_value(value?: string | null): void
    static name: string
    static new(): ComponentAttendee
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentAttendee
    static new_from_property(property: ICalGLib.Property): ComponentAttendee
    static new_full(value: string | null, member: string | null, cutype: ICalGLib.ParameterCutype, role: ICalGLib.ParameterRole, partstat: ICalGLib.ParameterPartstat, rsvp: boolean, delegatedfrom?: string | null, delegatedto?: string | null, sentby?: string | null, cn?: string | null, language?: string | null): ComponentAttendee
}
export abstract class ComponentClass {
    static name: string
}
export class ComponentDateTime {
    /* Methods of ECal.ComponentDateTime */
    copy(): ComponentDateTime
    get_tzid(): string | null
    get_value(): ICalGLib.Time
    set(value: ICalGLib.Time, tzid?: string | null): void
    set_tzid(tzid?: string | null): void
    set_value(value: ICalGLib.Time): void
    take_tzid(tzid?: string | null): void
    take_value(value: ICalGLib.Time): void
    static name: string
    static new(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
    constructor(value: ICalGLib.Time, tzid?: string | null)
    /* Static methods and pseudo-constructors */
    static new(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
    static new_take(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
}
export class ComponentId {
    /* Methods of ECal.ComponentId */
    copy(): ComponentId
    equal(id2: ComponentId): boolean
    get_rid(): string | null
    get_uid(): string
    hash(): number
    set_rid(rid?: string | null): void
    set_uid(uid: string): void
    static name: string
    static new(uid: string, rid?: string | null): ComponentId
    constructor(uid: string, rid?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid?: string | null): ComponentId
    static new_take(uid: string, rid?: string | null): ComponentId
}
export class ComponentOrganizer {
    /* Methods of ECal.ComponentOrganizer */
    copy(): ComponentOrganizer
    fill_property(property: ICalGLib.Property): /* property */ ICalGLib.Property
    get_as_property(): ICalGLib.Property
    get_cn(): string | null
    get_language(): string | null
    get_parameter_bag(): ComponentParameterBag
    get_sentby(): string | null
    get_value(): string | null
    set_cn(cn?: string | null): void
    set_from_property(property: ICalGLib.Property): void
    set_language(language?: string | null): void
    set_sentby(sentby?: string | null): void
    set_value(value?: string | null): void
    static name: string
    static new(): ComponentOrganizer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentOrganizer
    static new_from_property(property: ICalGLib.Property): ComponentOrganizer
    static new_full(value?: string | null, sentby?: string | null, cn?: string | null, language?: string | null): ComponentOrganizer
}
export class ComponentParameterBag {
    /* Methods of ECal.ComponentParameterBag */
    add(param: ICalGLib.Parameter): void
    assign(src_bag: ComponentParameterBag): void
    clear(): void
    copy(): ComponentParameterBag
    fill_property(property: ICalGLib.Property): void
    get(index: number): ICalGLib.Parameter | null
    get_count(): number
    get_first_by_kind(kind: ICalGLib.ParameterKind): number
    remove(index: number): void
    remove_by_kind(kind: ICalGLib.ParameterKind, all: boolean): number
    set_from_property(property: ICalGLib.Property): void
    take(param: ICalGLib.Parameter): void
    static name: string
    static new(): ComponentParameterBag
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentParameterBag
    static new_from_property(property: ICalGLib.Property): ComponentParameterBag
}
export class ComponentPeriod {
    /* Methods of ECal.ComponentPeriod */
    copy(): ComponentPeriod
    get_duration(): ICalGLib.Duration
    get_end(): ICalGLib.Time | null
    get_kind(): ComponentPeriodKind
    get_start(): ICalGLib.Time
    set_datetime_full(start: ICalGLib.Time, end?: ICalGLib.Time | null): void
    set_duration(duration: ICalGLib.Duration): void
    set_duration_full(start: ICalGLib.Time, duration: ICalGLib.Duration): void
    set_end(end?: ICalGLib.Time | null): void
    set_start(start: ICalGLib.Time): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_datetime(start: ICalGLib.Time, end?: ICalGLib.Time | null): ComponentPeriod
    static new_duration(start: ICalGLib.Time, duration: ICalGLib.Duration): ComponentPeriod
}
export class ComponentPrivate {
    static name: string
}
export class ComponentPropertyBag {
    /* Methods of ECal.ComponentPropertyBag */
    add(prop: ICalGLib.Property): void
    assign(src_bag: ComponentPropertyBag): void
    clear(): void
    copy(): ComponentPropertyBag
    fill_component(component: ICalGLib.Component): void
    get(index: number): ICalGLib.Property | null
    get_count(): number
    get_first_by_kind(kind: ICalGLib.PropertyKind): number
    remove(index: number): void
    remove_by_kind(kind: ICalGLib.PropertyKind, all: boolean): number
    set_from_component(component: ICalGLib.Component): void
    take(prop: ICalGLib.Property): void
    static name: string
    static new(): ComponentPropertyBag
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentPropertyBag
    static new_from_component(component: ICalGLib.Component): ComponentPropertyBag
}
export class ComponentRange {
    /* Methods of ECal.ComponentRange */
    copy(): ComponentRange
    get_datetime(): ComponentDateTime
    get_kind(): ComponentRangeKind
    set_datetime(datetime: ComponentDateTime): void
    set_kind(kind: ComponentRangeKind): void
    static name: string
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
    constructor(kind: ComponentRangeKind, datetime: ComponentDateTime)
    /* Static methods and pseudo-constructors */
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
}
export class ComponentText {
    /* Methods of ECal.ComponentText */
    copy(): ComponentText
    get_altrep(): string
    get_value(): string
    set_altrep(altrep?: string | null): void
    set_value(value?: string | null): void
    static name: string
    static new(value?: string | null, altrep?: string | null): ComponentText
    constructor(value?: string | null, altrep?: string | null)
    /* Static methods and pseudo-constructors */
    static new(value?: string | null, altrep?: string | null): ComponentText
}
export class ReminderData {
    /* Methods of ECal.ReminderData */
    copy(): ReminderData
    get_component(): Component
    get_instance(): ComponentAlarmInstance
    get_source_uid(): string
    set_component(component: Component): void
    set_instance(instance: ComponentAlarmInstance): void
    set_source_uid(source_uid: string): void
    static name: string
    static new(source_uid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
    constructor(source_uid: string, component: Component, instance: ComponentAlarmInstance)
    /* Static methods and pseudo-constructors */
    static new(source_uid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
    static free(rd?: object | null): void
}
export abstract class ReminderWatcherClass {
    /* Fields of ECal.ReminderWatcherClass */
    parent_class: GObject.ObjectClass
    schedule_timer: (watcher: ReminderWatcher, at_time: number) => void
    format_time: (watcher: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inout_buffer: string, buffer_size: number) => void
    changed: (watcher: ReminderWatcher) => void
    cal_client_connect: (watcher: ReminderWatcher, source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    reserved: object[]
    static name: string
}
export class ReminderWatcherPrivate {
    static name: string
}
export abstract class TimezoneCacheInterface {
    /* Fields of ECal.TimezoneCacheInterface */
    tzcache_add_timezone: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    timezone_added: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    reserved_signals: object[]
    static name: string
}